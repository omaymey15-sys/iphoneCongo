// ==================== CONFIGURATION IMGBB ====================
const IMGBB_API_KEY = '2d209a1377a2c31de6053540d586214f'; // Remplacez par votre vraie clé

// Clés de stockage
const STORES_KEY = 'iphonecongo_stores';
const STORE_PRODUCTS_KEY = 'iphonecongo_store_products';
const CURRENT_STORE_KEY = 'iphonecongo_current_store';

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
            return data.data.url;
        } else {
            throw new Error('Upload échoué');
        }
    } catch (error) {
        console.error('Erreur upload ImgBB:', error);
        return null;
    }
}

// Upload de logo pour les stores
window.previewAndUploadLogo = async function(event) {
    const file = event.target.files[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
        alert("Le logo est trop lourd. Maximum 2 Mo.");
        event.target.value = '';
        return;
    }

    const statusDiv = document.getElementById('logoUploadStatus');
    statusDiv.innerHTML = 'Upload en cours...';
    statusDiv.style.color = '';

    // Aperçu local
    const reader = new FileReader();
    reader.onload = function(e) {
        const preview = document.getElementById('logoPreview');
        preview.innerHTML = `<img src="${e.target.result}" alt="Logo">`;
    };
    reader.readAsDataURL(file);

    // Upload vers ImgBB
    const imageUrl = await uploadToImgBB(file);
    
    if (imageUrl) {
        document.getElementById('logoUrl').value = imageUrl;
        statusDiv.innerHTML = '✅ Logo uploadé !';
        statusDiv.style.color = 'green';
    } else {
        statusDiv.innerHTML = '❌ Échec de l\'upload. Réessayez.';
        statusDiv.style.color = 'red';
        document.getElementById('logoUrl').value = '';
    }
};

// ==================== INITIALISATION ====================
function initializeStores() {
    if (!localStorage.getItem(STORES_KEY)) {
        // Stores de démonstration
        const demoStores = [
            {
                id: 1,
                name: "Phone Shop Lubumbashi",
                pseudo: "phoneshoplubi",
                city: "Lubumbashi",
                address: "Avenue Golf, 123",
                whatsapp: "243812345678",
                email: "contact@phoneshop.com",
                logo: "https://via.placeholder.com/100x100?text=PSL",
                password: "demo",
                date: new Date().toISOString()
            },
            {
                id: 2,
                name: "Kolwezi Mobile",
                pseudo: "kolwezimobile",
                city: "Kolwezi",
                address: "Centre-ville, 45",
                whatsapp: "243997654321",
                email: "info@kolwezimobile.com",
                logo: "https://via.placeholder.com/100x100?text=KM",
                password: "demo",
                date: new Date().toISOString()
            }
        ];
        localStorage.setItem(STORES_KEY, JSON.stringify(demoStores));
    }
    
    if (!localStorage.getItem(STORE_PRODUCTS_KEY)) {
        // Produits de démonstration pour les stores
        const demoProducts = {
            1: [
                {
                    id: 101,
                    category: 'iphone',
                    title: 'iPhone 13 128GB',
                    price: 650,
                    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-midnight-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1630793892000',
                    description: 'Bon état, batterie 88%',
                    condition: 'Bon état',
                    storeId: 1,
                    date: new Date().toISOString()
                },
                {
                    id: 102,
                    category: 'samsung',
                    title: 'Samsung A54',
                    price: 350,
                    image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-a546bzkdafd/gallery/africa-en-galaxy-a54-5g-sm-a546bzkdafd-thumb-536176333',
                    description: 'Neuf, garantie 6 mois',
                    condition: 'Neuf',
                    storeId: 1,
                    date: new Date(Date.now() - 3600000).toISOString()
                }
            ],
            2: [
                {
                    id: 201,
                    category: 'iphone',
                    title: 'iPhone 12 64GB',
                    price: 450,
                    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-black-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604347109000',
                    description: 'Reconditionné, batterie 92%',
                    condition: 'Reconditionné',
                    storeId: 2,
                    date: new Date().toISOString()
                }
            ]
        };
        localStorage.setItem(STORE_PRODUCTS_KEY, JSON.stringify(demoProducts));
    }
}

// ==================== FONCTIONS UTILITAIRES ====================
function getStores() {
    return JSON.parse(localStorage.getItem(STORES_KEY)) || [];
}

function saveStore(store) {
    const stores = getStores();
    stores.push(store);
    localStorage.setItem(STORES_KEY, JSON.stringify(stores));
}

function getStoreProducts(storeId) {
    const allProducts = JSON.parse(localStorage.getItem(STORE_PRODUCTS_KEY)) || {};
    return allProducts[storeId] || [];
}

function saveStoreProducts(storeId, products) {
    const allProducts = JSON.parse(localStorage.getItem(STORE_PRODUCTS_KEY)) || {};
    allProducts[storeId] = products;
    localStorage.setItem(STORE_PRODUCTS_KEY, JSON.stringify(allProducts));
}

function isNewProduct(dateString) {
    const productDate = new Date(dateString);
    const now = new Date();
    const diffHours = (now - productDate) / (1000 * 60 * 60);
    return diffHours <= 24;
}

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i> ${message}`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// ==================== INSCRIPTION ====================
window.registerStore = function(event) {
    event.preventDefault();

    const password = document.getElementById('storePassword').value;
    const confirm = document.getElementById('confirmPassword').value;
    if (password !== confirm) {
        showToast('Les mots de passe ne correspondent pas', 'error');
        return;
    }

    const logoUrl = document.getElementById('logoUrl').value;
    if (!logoUrl) {
        showToast("Veuillez uploader un logo", 'error');
        return;
    }

    const store = {
        id: Date.now(),
        name: document.getElementById('storeName').value,
        pseudo: document.getElementById('storePseudo').value.toLowerCase().replace(/\s+/g, ''),
        city: document.getElementById('storeCity').value,
        address: document.getElementById('storeAddress').value,
        whatsapp: document.getElementById('storeWhatsapp').value,
        email: document.getElementById('storeEmail').value,
        logo: logoUrl,
        password: password, // À hacher dans un vrai projet
        date: new Date().toISOString()
    };

    const stores = getStores();
    if (stores.some(s => s.pseudo === store.pseudo)) {
        showToast('Ce pseudo est déjà pris', 'error');
        return;
    }

    saveStore(store);
    saveStoreProducts(store.id, []);

    sessionStorage.setItem(CURRENT_STORE_KEY, JSON.stringify(store));
    
    showToast('✅ Store créé avec succès !');
    window.location.href = `dashboard.html?id=${store.id}`;
};

// ==================== DASHBOARD ====================
async function loadStoreDashboard() {
    const urlParams = new URLSearchParams(window.location.search);
    const storeId = parseInt(urlParams.get('id'));

    if (!storeId) {
        window.location.href = 'register.html';
        return;
    }

    const stores = getStores();
    const store = stores.find(s => s.id === storeId);
    if (!store) {
        showToast('Store non trouvé', 'error');
        window.location.href = 'register.html';
        return;
    }

    const products = getStoreProducts(storeId);

    const container = document.getElementById('dashboardContent');
    if (!container) return;

    container.innerHTML = `
        <div class="store-header">
            <div class="store-avatar">
                ${store.logo ? `<img src="${store.logo}" alt="${store.name}">` : '<i class="fas fa-store" style="font-size:3rem; color:var(--primary);"></i>'}
            </div>
            <div class="store-info">
                <h2>${store.name}</h2>
                <div class="store-meta">
                    <span><i class="fas fa-map-marker-alt"></i> ${store.city} - ${store.address || 'Adresse non spécifiée'}</span>
                    <span><i class="fab fa-whatsapp"></i> ${store.whatsapp}</span>
                    <span><i class="fas fa-calendar"></i> Membre depuis ${new Date(store.date).toLocaleDateString()}</span>
                </div>
                <a href="store-view.html?store=${store.pseudo}" class="public-link" target="_blank">
                    <i class="fas fa-external-link-alt"></i> Voir ma page publique
                </a>
            </div>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <i class="fas fa-box"></i>
                <h3>${products.length}</h3>
                <p>Produits en vente</p>
            </div>
            <div class="stat-card">
                <i class="fas fa-clock"></i>
                <h3>${products.filter(p => isNewProduct(p.date)).length}</h3>
                <p>Nouveautés (24h)</p>
            </div>
            <div class="stat-card">
                <i class="fas fa-star"></i>
                <h3>5.0</h3>
                <p>Note moyenne</p>
            </div>
        </div>

        <div class="add-product-section">
            <h3><i class="fas fa-plus-circle"></i> Ajouter un produit</h3>
            <form onsubmit="addStoreProduct(event, ${storeId})">
                <div class="form-row">
                    <div class="form-group">
                        <label>Catégorie</label>
                        <select id="productCategory" required>
                            <option value="iphone">📱 iPhone</option>
                            <option value="samsung">📱 Samsung</option>
                            <option value="accessoire">🎧 Accessoire</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Titre</label>
                        <input type="text" id="productTitle" placeholder="Ex: iPhone 13 128GB" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label>Prix ($)</label>
                        <input type="number" id="productPrice" placeholder="650" required>
                    </div>
                    <div class="form-group">
                        <label>État</label>
                        <select id="productCondition">
                            <option>Neuf</option>
                            <option>Reconditionné</option>
                            <option>Bon état</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <textarea id="productDescription" rows="3" required></textarea>
                </div>
                <div class="form-group">
                    <label>Image (URL)</label>
                    <input type="url" id="productImage" placeholder="https://..." required>
                </div>
                <button type="submit" class="btn-primary">
                    <i class="fas fa-cloud-upload-alt"></i> Ajouter le produit
                </button>
            </form>
        </div>

        <div class="add-product-section">
            <h3><i class="fas fa-boxes"></i> Mes produits (${products.length})</h3>
            <div class="products-scroll" id="storeProductsScroll">
                ${products.length === 0 ? '<p style="text-align:center; color:var(--gray);">Aucun produit pour le moment</p>' : ''}
            </div>
        </div>
    `;

    const scrollContainer = document.getElementById('storeProductsScroll');
    if (scrollContainer && products.length > 0) {
        scrollContainer.innerHTML = products.map(product => `
            <div class="product-card-store" data-id="${product.id}">
                ${isNewProduct(product.date) ? '<span class="new-badge-store">✨ Nouveau</span>' : ''}
                <img src="${product.image}" alt="${product.title}" onerror="this.src='https://via.placeholder.com/300x200?text=Image'">
                <div class="info">
                    <div class="title">${product.title}</div>
                    <div class="price">$${product.price}</div>
                    <div class="product-actions">
                        <button class="btn-edit" onclick="editProduct(${storeId}, ${product.id})">
                            <i class="fas fa-edit"></i> Modifier
                        </button>
                        <button class="btn-delete" onclick="deleteStoreProduct(${storeId}, ${product.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// ==================== GESTION PRODUITS DU STORE ====================
window.addStoreProduct = function(event, storeId) {
    event.preventDefault();

    const product = {
        id: Date.now(),
        category: document.getElementById('productCategory').value,
        title: document.getElementById('productTitle').value,
        price: parseFloat(document.getElementById('productPrice').value),
        image: document.getElementById('productImage').value,
        description: document.getElementById('productDescription').value,
        condition: document.getElementById('productCondition').value,
        storeId: storeId,
        date: new Date().toISOString()
    };

    const products = getStoreProducts(storeId);
    products.unshift(product);
    saveStoreProducts(storeId, products);

    event.target.reset();
    showToast('✅ Produit ajouté');
    loadStoreDashboard();
};

window.deleteStoreProduct = function(storeId, productId) {
    if (confirm('Supprimer ce produit ?')) {
        const products = getStoreProducts(storeId).filter(p => p.id !== productId);
        saveStoreProducts(storeId, products);
        showToast('Produit supprimé', 'info');
        loadStoreDashboard();
    }
};

window.editProduct = function(storeId, productId) {
    const products = getStoreProducts(storeId);
    const product = products.find(p => p.id === productId);
    if (!product) return;

    document.getElementById('productCategory').value = product.category;
    document.getElementById('productTitle').value = product.title;
    document.getElementById('productPrice').value = product.price;
    document.getElementById('productImage').value = product.image;
    document.getElementById('productDescription').value = product.description;
    document.getElementById('productCondition').value = product.condition;

    const newProducts = products.filter(p => p.id !== productId);
    saveStoreProducts(storeId, newProducts);
    
    showToast('Vous pouvez maintenant modifier le produit', 'info');
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// ==================== PAGE PUBLIQUE DU STORE ====================
function loadPublicStorePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const storePseudo = urlParams.get('store');

    if (!storePseudo) {
        window.location.href = '../store.html';
        return;
    }

    const stores = getStores();
    const store = stores.find(s => s.pseudo === storePseudo);
    if (!store) {
        showToast('Store non trouvé', 'error');
        window.location.href = '../store.html';
        return;
    }

    const products = getStoreProducts(store.id);

    const container = document.getElementById('storeContent');
    if (!container) return;

    container.innerHTML = `
        <div class="store-header" style="margin-top:2rem;">
            <div class="store-avatar">
                ${store.logo ? `<img src="${store.logo}" alt="${store.name}">` : '<i class="fas fa-store" style="font-size:3rem; color:var(--primary);"></i>'}
            </div>
            <div class="store-info">
                <h2>${store.name}</h2>
                <div class="store-meta">
                    <span><i class="fas fa-map-marker-alt"></i> ${store.city} - ${store.address || 'Adresse non spécifiée'}</span>
                    <a href="https://wa.me/${store.whatsapp.replace(/[^0-9]/g, '')}" class="whatsapp-store-btn" target="_blank">
                        <i class="fab fa-whatsapp"></i> Contacter le store
                    </a>
                </div>
            </div>
        </div>

        <div class="products-grid">
            ${products.map(product => `
                <div class="product-card">
                    ${isNewProduct(product.date) ? '<span class="new-badge-store">✨ Nouveauté</span>' : ''}
                    <img src="${product.image}" alt="${product.title}" onerror="this.src='https://via.placeholder.com/300x200?text=Image'">
                    <div class="product-info">
                        <h3>${product.title}</h3>
                        <div class="product-price">${product.price}</div>
                        <span class="product-condition">${product.condition}</span>
                        <p>${product.description}</p>
                        <a href="https://wa.me/${store.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Bonjour ${store.name}, je suis intéressé par votre produit : ${product.title} ($${product.price})`)}" class="whatsapp-btn" target="_blank">
                            <i class="fab fa-whatsapp"></i> Contacter le store
                        </a>
                        <div class="product-footer">
                            <span><i class="fas fa-store"></i> ${store.name}</span>
                            <span><i class="fas fa-clock"></i> ${new Date(product.date).toLocaleDateString()}</span>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// ==================== AFFICHAGE SUR STORE.HTML ====================
function displayPartnerStores() {
    const stores = getStores();
    const container = document.getElementById('partnerStores');
    if (!container) return;

    container.innerHTML = stores.map(store => `
        <a href="stores/store-view.html?store=${store.pseudo}" class="store-partner-card">
            <div class="partner-logo">
                ${store.logo ? `<img src="${store.logo}" alt="${store.name}">` : '<i class="fas fa-store"></i>'}
            </div>
            <div class="partner-info">
                <h4>${store.name}</h4>
                <p><i class="fas fa-map-marker-alt"></i> ${store.city}</p>
                <p><i class="fas fa-box"></i> ${getStoreProducts(store.id).length} produits</p>
            </div>
        </a>
    `).join('');
}

// ==================== INITIALISATION ====================
document.addEventListener('DOMContentLoaded', () => {
    initializeStores();

    if (window.location.pathname.includes('dashboard.html')) {
        loadStoreDashboard();
    }
    
    if (window.location.pathname.includes('store-view.html')) {
        loadPublicStorePage();
    }
    
    if (window.location.pathname.includes('store.html')) {
        displayPartnerStores();
    }
});