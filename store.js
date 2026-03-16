// ==================== CONFIGURATION IMGBB ====================
const IMGBB_API_KEY = '2d209a1377a2c31de6053540d586214f'; // Remplacez par votre vraie clé

// Clé de stockage des produits communautaires
const COMMUNITY_KEY = 'iphonecongo_community';

// Initialiser le stockage communautaire si vide
if (!localStorage.getItem(COMMUNITY_KEY)) {
    localStorage.setItem(COMMUNITY_KEY, JSON.stringify([]));
}

// ==================== FONCTIONS UPLOAD ====================
async function uploadToImgBB(file) {
    const formData = new FormData();
    formData.append('image', file);

    try {
        const response = await fetch('https://api.imgbb.com/1/upload?key=' + IMGBB_API_KEY, {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        if (data.success) {
            return data.data.url; // URL directe de l'image
        } else {
            throw new Error('Upload échoué');
        }
    } catch (error) {
        console.error('Erreur upload ImgBB:', error);
        return null;
    }
}

// Fonction de preview et upload (appelée quand l'utilisateur choisit un fichier)
window.previewAndUpload = async function(event) {
    const file = event.target.files[0];
    if (!file) return;

    // Vérifier la taille (max 32 Mo pour ImgBB)
    if (file.size > 32 * 1024 * 1024) {
        alert("L'image est trop lourde. Maximum 32 Mo.");
        event.target.value = '';
        return;
    }

    const previewContainer = document.getElementById('imagePreviewContainer');
    const previewImg = document.getElementById('imagePreview');
    const statusText = document.getElementById('uploadStatus');
    
    previewContainer.style.display = 'block';
    statusText.textContent = 'Upload en cours...';
    statusText.style.color = '';

    // Afficher un aperçu local
    const reader = new FileReader();
    reader.onload = function(e) {
        previewImg.src = e.target.result;
    };
    reader.readAsDataURL(file);

    // Upload vers ImgBB
    const imageUrl = await uploadToImgBB(file);
    
    if (imageUrl) {
        document.getElementById('imageUrl').value = imageUrl;
        statusText.innerHTML = '✅ Image prête !';
        statusText.style.color = 'green';
    } else {
        statusText.innerHTML = '❌ Échec de l\'upload. Réessayez.';
        statusText.style.color = 'red';
        document.getElementById('imageUrl').value = '';
    }
};

// ==================== GESTION DU FORMULAIRE ====================
window.toggleForm = function() {
    const form = document.getElementById('publishForm');
    const btn = document.querySelector('.toggle-form-btn');
    if (form.style.display === 'none') {
        form.style.display = 'block';
        btn.innerHTML = '<i class="fas fa-times-circle"></i> Fermer le formulaire';
    } else {
        form.style.display = 'none';
        btn.innerHTML = '<i class="fas fa-plus-circle"></i> Publier une annonce';
    }
};

window.toggleBrandField = function() {
    const category = document.getElementById('category').value;
    document.getElementById('brandGroup').style.display = category === 'telephone' ? 'block' : 'none';
    document.getElementById('accessoryGroup').style.display = category === 'accessoire' ? 'block' : 'none';
    document.getElementById('brand').required = (category === 'telephone');
    document.getElementById('accessoryType').required = (category === 'accessoire');
};

// ==================== CRUD PRODUITS ====================
function loadCommunityProducts() {
    return JSON.parse(localStorage.getItem(COMMUNITY_KEY)) || [];
}

function saveCommunityProducts(products) {
    localStorage.setItem(COMMUNITY_KEY, JSON.stringify(products));
}

// Vérifier si un produit date de moins de 24h
function isNewProduct(dateString) {
    const productDate = new Date(dateString);
    const now = new Date();
    const diffHours = (now - productDate) / (1000 * 60 * 60);
    return diffHours <= 24;
}

// Générer le lien WhatsApp pour un produit communautaire
function getCommunityWhatsAppLink(product) {
    const cleanContact = product.contact.replace(/[^0-9]/g, '');
    const type = product.brand || product.accessoryType || 'Accessoire';
    
    const message = `Bonjour ${product.seller},

Je suis intéressé par votre *${product.title}*.

💰 Prix: $${product.price}
📍 Ville: ${product.city}
📱 Type: ${type}
📸 Photo: ${product.image}
📝 Description: ${product.description}

Est-ce toujours disponible ?`;

    return `https://wa.me/${cleanContact}?text=${encodeURIComponent(message)}`;
}

// Créer une carte produit communautaire
function createCommunityCard(product) {
    const whatsappLink = getCommunityWhatsAppLink(product);
    const newBadge = isNewProduct(product.date) ? '<span class="new-badge-community">✨ Nouveauté</span>' : '';
    
    return `
        <div class="product-card">
            <span class="community-badge">👤 ${product.seller}</span>
            ${newBadge}
            <span class="city-badge">${product.city}</span>
            <img src="${product.image}" alt="${product.title}" onerror="this.src='https://via.placeholder.com/300x200?text=Image+non+disponible'">
            <div class="product-info">
                <h3>${product.title}</h3>
                <div class="product-price">${product.price}</div>
                <span class="product-condition">${product.condition}</span>
                <p>${product.description}</p>
                <div class="seller-info">
                    <i class="fas fa-user"></i> ${product.seller}
                    ${product.brand ? `<span>📱 ${product.brand}</span>` : ''}
                    ${product.accessoryType ? `<span>🎧 ${product.accessoryType}</span>` : ''}
                </div>
                <a href="${whatsappLink}" class="whatsapp-btn" target="_blank">
                    <i class="fab fa-whatsapp"></i> Contacter ${product.seller}
                </a>
                <div class="product-footer">
                    <span><i class="fas fa-map-marker-alt"></i> ${product.city}</span>
                    <span><i class="fas fa-clock"></i> ${new Date(product.date).toLocaleDateString()}</span>
                </div>
                <button class="delete-btn" onclick="deleteCommunityProduct(${product.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `;
}

// Ajouter un produit
window.addCommunityProduct = function(event) {
    event.preventDefault();

    const imageUrl = document.getElementById('imageUrl').value;
    if (!imageUrl) {
        alert("Veuillez attendre la fin de l'upload ou réessayer.");
        return;
    }

    const category = document.getElementById('category').value;
    
    const product = {
        id: Date.now(),
        category: category,
        title: document.getElementById('model').value,
        price: parseFloat(document.getElementById('price').value),
        image: imageUrl,
        description: document.getElementById('description').value,
        condition: document.getElementById('condition').value,
        city: document.getElementById('city').value,
        contact: document.getElementById('contact').value,
        seller: document.getElementById('sellerName').value,
        date: new Date().toISOString()
    };

    if (category === 'telephone') {
        product.brand = document.getElementById('brand').value;
    } else {
        product.accessoryType = document.getElementById('accessoryType').value;
    }

    const products = loadCommunityProducts();
    products.unshift(product);
    saveCommunityProducts(products);

    // Réinitialiser
    event.target.reset();
    document.getElementById('imagePreviewContainer').style.display = 'none';
    document.getElementById('imageUrl').value = '';
    toggleForm();
    displayCommunityProducts();
    alert('✅ Annonce publiée !');
};

// Supprimer un produit
window.deleteCommunityProduct = function(id) {
    if (confirm('Supprimer cette annonce ?')) {
        const products = loadCommunityProducts().filter(p => p.id !== id);
        saveCommunityProducts(products);
        displayCommunityProducts();
    }
};

// Afficher les produits avec filtres et pagination
let currentPage = 1;
const itemsPerPage = 12;

function displayCommunityProducts() {
    const container = document.getElementById('community-products');
    const noResults = document.getElementById('noResults');
    const paginationDiv = document.getElementById('pagination');
    
    let products = loadCommunityProducts();

    // Filtres
    const search = document.getElementById('storeSearch')?.value.toLowerCase() || '';
    const category = document.getElementById('categoryFilter')?.value;
    const city = document.getElementById('cityFilter')?.value;
    const sort = document.getElementById('storeSort')?.value || 'date';

    // Recherche
    if (search) {
        products = products.filter(p => 
            p.title.toLowerCase().includes(search) ||
            p.description.toLowerCase().includes(search) ||
            (p.brand && p.brand.toLowerCase().includes(search)) ||
            (p.accessoryType && p.accessoryType.toLowerCase().includes(search))
        );
    }

    // Filtre catégorie
    if (category === 'iPhone') {
        products = products.filter(p => p.brand === 'iPhone');
    } else if (category === 'Samsung') {
        products = products.filter(p => p.brand === 'Samsung');
    } else if (category === 'accessoire') {
        products = products.filter(p => p.category === 'accessoire');
    }

    // Filtre ville
    if (city) {
        products = products.filter(p => p.city === city);
    }

    // Tri
    products.sort((a, b) => {
        if (sort === 'priceAsc') return a.price - b.price;
        if (sort === 'priceDesc') return b.price - a.price;
        return new Date(b.date) - new Date(a.date);
    });

    // Pagination
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const start = (currentPage - 1) * itemsPerPage;
    const paginated = products.slice(start, start + itemsPerPage);

    if (products.length === 0) {
        container.innerHTML = '';
        noResults.style.display = 'block';
        if (paginationDiv) paginationDiv.innerHTML = '';
        return;
    }

    noResults.style.display = 'none';
    container.innerHTML = paginated.map(createCommunityCard).join('');

    // Afficher pagination
    if (paginationDiv) {
        let paginationHtml = '';
        for (let i = 1; i <= totalPages; i++) {
            paginationHtml += `<button class="${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>`;
        }
        paginationDiv.innerHTML = paginationHtml;
    }
}

window.goToPage = function(page) {
    currentPage = page;
    displayCommunityProducts();
};

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    displayCommunityProducts();

    document.getElementById('storeSearch')?.addEventListener('input', displayCommunityProducts);
    document.getElementById('categoryFilter')?.addEventListener('change', displayCommunityProducts);
    document.getElementById('cityFilter')?.addEventListener('change', displayCommunityProducts);
    document.getElementById('storeSort')?.addEventListener('change', displayCommunityProducts);
});
