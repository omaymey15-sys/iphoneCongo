// ==================== CONFIGURATION ====================
const IMGBB_API_KEY = '2d209a1377a2c31de6053540d586214f';
const STORES_KEY = 'iphonecongo_stores';
const STORE_PRODUCTS_KEY = 'iphonecongo_store_products';
const CURRENT_STORE_KEY = 'iphonecongo_current_store';

// ==================== INITIALISATION ====================
function initializeStores() {
    if (!localStorage.getItem(STORES_KEY)) {
        localStorage.setItem(STORES_KEY, JSON.stringify([]));
    }
    if (!localStorage.getItem(STORE_PRODUCTS_KEY)) {
        localStorage.setItem(STORE_PRODUCTS_KEY, JSON.stringify({}));
    }
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
        return data.success ? data.data.url : null;
    } catch (error) {
        console.error('Upload error:', error);
        return null;
    }
}

window.previewAndUploadLogo = async function(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    if (file.size > 2 * 1024 * 1024) {
        alert('Logo trop lourd (max 2 Mo)');
        return;
    }
    
    document.getElementById('logoUploadStatus').innerHTML = 'Upload en cours...';
    
    const reader = new FileReader();
    reader.onload = e => {
        document.getElementById('logoPreview').innerHTML = `<img src="${e.target.result}" alt="Logo">`;
    };
    reader.readAsDataURL(file);
    
    const url = await uploadToImgBB(file);
    if (url) {
        document.getElementById('logoUrl').value = url;
        document.getElementById('logoUploadStatus').innerHTML = '✅ Logo uploadé';
    } else {
        document.getElementById('logoUploadStatus').innerHTML = '❌ Échec upload';
    }
};

// ==================== FONCTIONS STORES ====================
window.getStores = function() {
    return JSON.parse(localStorage.getItem(STORES_KEY)) || [];
};

function saveStore(store) {
    const stores = getStores();
    stores.push(store);
    localStorage.setItem(STORES_KEY, JSON.stringify(stores));
}

window.getStoreProducts = function(storeId) {
    const all = JSON.parse(localStorage.getItem(STORE_PRODUCTS_KEY)) || {};
    return all[storeId] || [];
};

function saveStoreProducts(storeId, products) {
    const all = JSON.parse(localStorage.getItem(STORE_PRODUCTS_KEY)) || {};
    all[storeId] = products;
    localStorage.setItem(STORE_PRODUCTS_KEY, JSON.stringify(all));
}

// ==================== INSCRIPTION ====================
window.registerStore = function(event) {
    event.preventDefault();
    
    if (document.getElementById('storePassword').value !== document.getElementById('confirmPassword').value) {
        alert('Les mots de passe ne correspondent pas');
        return;
    }
    
    const logoUrl = document.getElementById('logoUrl').value;
    if (!logoUrl) {
        alert('Veuillez uploader un logo');
        return;
    }
    
    const store = {
        id: Date.now(),
        name: document.getElementById('storeName').value.trim(),
        pseudo: document.getElementById('storePseudo').value.toLowerCase().replace(/\s+/g, ''),
        city: document.getElementById('storeCity').value.trim(),
        address: document.getElementById('storeAddress').value.trim(),
        whatsapp: document.getElementById('storeWhatsapp').value.trim(),
        email: document.getElementById('storeEmail').value.trim(),
        logo: logoUrl,
        password: document.getElementById('storePassword').value,
        date: new Date().toISOString()
    };
    
    if (getStores().some(s => s.pseudo === store.pseudo)) {
        alert('Ce pseudo est déjà pris');
        return;
    }
    
    saveStore(store);
    saveStoreProducts(store.id, []);
    sessionStorage.setItem(CURRENT_STORE_KEY, JSON.stringify(store));
    
    alert('✅ Store créé !');
    window.location.href = `dashboard.html?id=${store.id}`;
};

// ==================== DASHBOARD ====================
async function loadDashboard() {
    const urlParams = new URLSearchParams(window.location.search);
    const storeId = parseInt(urlParams.get('id'));
    
    const stores = getStores();
    const store = stores.find(s => s.id === storeId);
    if (!store) {
        window.location.href = 'register.html';
        return;
    }
    
    const products = getStoreProducts(storeId);
    
    document.getElementById('dashboardContent').innerHTML = `
        <div class="store-profile">
            <img src="${store.logo}" alt="${store.name}" class="profile-logo">
            <div class="profile-info">
                <h2>${store.name}</h2>
                <p><i class="fas fa-map-marker-alt"></i> ${store.city}</p>
                <p><i class="fab fa-whatsapp"></i> ${store.whatsapp}</p>
            </div>
        </div>
        
        <div class="stats-grid">
            <div class="stat-item">
                <i class="fas fa-box"></i>
                <div class="number">${products.length}</div>
                <div class="label">Produits</div>
            </div>
            <div class="stat-item">
                <i class="fas fa-clock"></i>
                <div class="number">${products.filter(p => (new Date() - new Date(p.date)) < 86400000).length}</div>
                <div class="label">Nouveautés</div>
            </div>
            <div class="stat-item">
                <i class="fas fa-eye"></i>
                <div class="number">0</div>
                <div class="label">Vues</div>
            </div>
        </div>
        
        <div class="add-form">
            <h3><i class="fas fa-plus-circle"></i> Ajouter un produit</h3>
            <form onsubmit="addStoreProduct(event, ${storeId})">
                <div class="form-row">
                    <div class="form-group">
                        <select id="productCategory" required>
                            <option value="iphone">📱 iPhone</option>
                            <option value="samsung">📱 Samsung</option>
                            <option value="accessoire">🎧 Accessoire</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <input type="text" id="productTitle" placeholder="Titre" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <input type="number" id="productPrice" placeholder="Prix $" required>
                    </div>
                    <div class="form-group">
                        <select id="productCondition">
                            <option>Neuf</option>
                            <option>Reconditionné</option>
                            <option>Bon état</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <input type="url" id="productImage" placeholder="URL de l'image" required>
                </div>
                <div class="form-group">
                    <textarea id="productDescription" rows="2" placeholder="Description"></textarea>
                </div>
                <button type="submit" class="btn-add-store">Ajouter</button>
            </form>
        </div>
        
        <div class="products-section">
            <h3><i class="fas fa-boxes"></i> Mes produits (${products.length})</h3>
            <div class="horiz-scroll">
                ${products.map(p => `
                    <div class="horiz-card">
                        <img src="${p.image}" alt="${p.title}">
                        <div class="info">
                            <div class="title">${p.title}</div>
                            <div class="price">${p.price}</div>
                            <div class="product-actions">
                                <button class="edit-btn" onclick="editProduct(${storeId}, ${p.id})">Modifier</button>
                                <button class="delete-btn" onclick="deleteStoreProduct(${storeId}, ${p.id})">Suppr</button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

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
    loadDashboard();
};

window.deleteStoreProduct = function(storeId, productId) {
    if (confirm('Supprimer ce produit ?')) {
        const products = getStoreProducts(storeId).filter(p => p.id !== productId);
        saveStoreProducts(storeId, products);
        loadDashboard();
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
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// ==================== PAGE PUBLIQUE ====================
function loadPublicStore() {
    const urlParams = new URLSearchParams(window.location.search);
    const pseudo = urlParams.get('store');
    
    const store = getStores().find(s => s.pseudo === pseudo);
    if (!store) {
        window.location.href = '../store.html';
        return;
    }
    
    const products = getStoreProducts(store.id);
    
    document.getElementById('storeContent').innerHTML = `
        <div class="store-header">
            <img src="${store.logo}" alt="${store.name}" class="store-logo">
            <div class="store-header-info">
                <h2>${store.name}</h2>
                <p><i class="fas fa-map-marker-alt"></i> ${store.city} - ${store.address || 'Adresse non spécifiée'}</p>
                <p><i class="fab fa-whatsapp"></i> ${store.whatsapp}</p>
                <a href="https://wa.me/${store.whatsapp.replace(/[^0-9]/g, '')}" class="whatsapp-store-btn" target="_blank">
                    <i class="fab fa-whatsapp"></i> Contacter le store
                </a>
            </div>
        </div>
        
        <div class="products-grid">
            ${products.map(p => `
                <div class="product-card">
                    ${(new Date() - new Date(p.date)) < 86400000 ? '<span class="new-badge">✨ Nouveau</span>' : ''}
                    <img src="${p.image}" alt="${p.title}">
                    <div class="product-info">
                        <h3>${p.title}</h3>
                        <div class="product-price">${p.price}</div>
                        <span class="product-condition">${p.condition}</span>
                        <a href="https://wa.me/${store.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Bonjour ${store.name}, je suis intéressé par ${p.title} à $${p.price}`)}" class="whatsapp-btn" target="_blank">
                            <i class="fab fa-whatsapp"></i> Contacter
                        </a>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// ==================== INIT ====================
initializeStores();

if (window.location.pathname.includes('dashboard.html')) loadDashboard();
if (window.location.pathname.includes('store-view.html')) loadPublicStore();
