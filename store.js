const COMMUNITY_KEY = 'iphonecongo_community';

// Charger les produits
function loadCommunityProducts() {
    return JSON.parse(localStorage.getItem(COMMUNITY_KEY)) || [];
}

// Sauvegarder
function saveCommunityProducts(products) {
    localStorage.setItem(COMMUNITY_KEY, JSON.stringify(products));
}

// Afficher/masquer le formulaire
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

// Afficher/cacher les champs selon la catégorie
window.toggleBrandField = function() {
    const category = document.getElementById('category').value;
    const brandGroup = document.getElementById('brandGroup');
    const accessoryGroup = document.getElementById('accessoryGroup');
    
    if (category === 'telephone') {
        brandGroup.style.display = 'block';
        accessoryGroup.style.display = 'none';
        document.getElementById('brand').required = true;
        document.getElementById('accessoryType').required = false;
    } else if (category === 'accessoire') {
        brandGroup.style.display = 'none';
        accessoryGroup.style.display = 'block';
        document.getElementById('brand').required = false;
        document.getElementById('accessoryType').required = true;
    }
};

// Fonction WhatsApp
function getWhatsAppLink(contact, product, sellerName) {
    const cleanContact = contact.replace(/[^0-9]/g, '');
    
    let typeInfo = '';
    if (product.category === 'accessoire') {
        typeInfo = `\n🎧 Type: ${product.accessoryType || 'Accessoire'}`;
    } else {
        typeInfo = `\n📱 Marque: ${product.brand}`;
    }
    
    const message = `Bonjour ${sellerName},

Je suis intéressé par votre *${product.title}*.

💰 Prix: $${product.price}
📍 Ville: ${product.city}${typeInfo}
📸 Photo: ${product.image}
📝 Description: ${product.description}

Est-ce toujours disponible ?`;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${cleanContact}?text=${encodedMessage}`;
}

// Ajouter un produit
window.addCommunityProduct = function(event) {
    event.preventDefault();
    
    const category = document.getElementById('category').value;
    
    const product = {
        id: Date.now(),
        category: category,
        title: document.getElementById('model').value,
        price: parseFloat(document.getElementById('price').value),
        image: document.getElementById('image').value,
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
    
    if (!product.image.match(/^https?:\/\/.+/)) {
        alert('Veuillez entrer une URL d\'image valide');
        return;
    }
    
    const products = loadCommunityProducts();
    products.unshift(product);
    saveCommunityProducts(products);
    
    event.target.reset();
    document.getElementById('publishForm').style.display = 'none';
    document.querySelector('.toggle-form-btn').innerHTML = '<i class="fas fa-plus-circle"></i> Publier une annonce';
    
    displayCommunityProducts();
    alert('✅ Annonce publiée !');
};

// Supprimer
window.deleteCommunityProduct = function(id) {
    if (confirm('Voulez-vous supprimer cette annonce ?')) {
        const products = loadCommunityProducts();
        const filtered = products.filter(p => p.id !== id);
        saveCommunityProducts(filtered);
        displayCommunityProducts();
    }
};

// Créer une carte
function createStoreCard(product) {
    const whatsappLink = getWhatsAppLink(product.contact, product, product.seller);
    
    let badgeText = product.brand || product.accessoryType || 'Accessoire';
    
    return `
        <div class="product-card">
            <span class="community-badge">👤 ${product.seller}</span>
            <span class="city-badge">${product.city}</span>
            <img src="${product.image}" alt="${product.title}"
                 onerror="this.src='https://via.placeholder.com/300x200?text=Product'">
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">${product.price}</div>
                <span class="product-condition">${product.condition}</span>
                <p class="product-description">${product.description}</p>
                
                <div class="seller-info">
                    <i class="fas fa-user"></i> ${product.seller}
                    ${product.brand ? `<span style="margin-left: 0.5rem;">📱 ${product.brand}</span>` : ''}
                    ${product.accessoryType ? `<span style="margin-left: 0.5rem;">🎧 ${product.accessoryType}</span>` : ''}
                </div>
                
                <a href="${whatsappLink}" class="whatsapp-btn-with-preview" target="_blank">
                    <i class="fab fa-whatsapp"></i>
                    Contacter ${product.seller}
                </a>
                
                <div class="product-footer">
                    <span><i class="fas fa-map-marker-alt"></i> ${product.city}</span>
                    <span><i class="fas fa-clock"></i> ${new Date(product.date).toLocaleDateString()}</span>
                </div>
                
                <button class="delete-community-btn" onclick="deleteCommunityProduct(${product.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `;
}

// Afficher avec filtres
function displayCommunityProducts() {
    const container = document.getElementById('community-products');
    const noResults = document.getElementById('noResults');
    
    const searchTerm = document.getElementById('storeSearch')?.value.toLowerCase() || '';
    const categoryFilter = document.getElementById('categoryFilter')?.value || '';
    const cityFilter = document.getElementById('cityFilter')?.value || '';
    const sortBy = document.getElementById('storeSort')?.value || 'date';
    
    let products = loadCommunityProducts();
    
    // Filtres
    if (categoryFilter === 'iPhone') {
        products = products.filter(p => p.brand === 'iPhone');
    } else if (categoryFilter === 'Samsung') {
        products = products.filter(p => p.brand === 'Samsung');
    } else if (categoryFilter === 'accessoire') {
        products = products.filter(p => p.category === 'accessoire');
    }
    
    if (cityFilter) {
        products = products.filter(p => p.city === cityFilter);
    }
    
    if (searchTerm) {
        products = products.filter(p => 
            p.title.toLowerCase().includes(searchTerm) ||
            p.description.toLowerCase().includes(searchTerm) ||
            (p.brand && p.brand.toLowerCase().includes(searchTerm)) ||
            (p.accessoryType && p.accessoryType.toLowerCase().includes(searchTerm))
        );
    }
    
    // Tri
    products.sort((a, b) => {
        switch(sortBy) {
            case 'priceAsc': return a.price - b.price;
            case 'priceDesc': return b.price - a.price;
            default: return new Date(b.date) - new Date(a.date);
        }
    });
    
    if (products.length === 0) {
        container.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    container.innerHTML = products.map(createStoreCard).join('');
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    // Vérifier les paramètres d'URL
    const urlParams = new URLSearchParams(window.location.search);
    const cityParam = urlParams.get('city');
    const brandParam = urlParams.get('brand');
    const categoryParam = urlParams.get('category');
    
    if (cityParam && brandParam) {
        document.getElementById('cityFilter').value = cityParam;
        if (brandParam === 'iPhone' || brandParam === 'Samsung') {
            document.getElementById('categoryFilter').value = brandParam;
        }
    } else if (categoryParam === 'accessoires') {
        document.getElementById('categoryFilter').value = 'accessoire';
    }
    
    displayCommunityProducts();
    
    document.getElementById('storeSearch')?.addEventListener('input', displayCommunityProducts);
    document.getElementById('categoryFilter')?.addEventListener('change', displayCommunityProducts);
    document.getElementById('cityFilter')?.addEventListener('change', displayCommunityProducts);
    document.getElementById('storeSort')?.addEventListener('change', displayCommunityProducts);
});
