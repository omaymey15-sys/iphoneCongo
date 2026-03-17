// ==================== CONFIGURATION ====================
const IMGBB_API_KEY = '2d209a1377a2c31de6053540d586214f'; // À remplacer par votre vraie clé
const STORES_KEY = 'iphonecongo_stores';
const STORE_PRODUCTS_KEY = 'iphonecongo_store_products';
const CURRENT_STORE_KEY = 'iphonecongo_current_store';

// ==================== INITIALISATION ====================
function initializeStores() {
    console.log('Initialisation des stores...');
    
    if (!localStorage.getItem(STORES_KEY)) {
        // Stores de démonstration
        const demoStores = [
            {
                id: 1001,
                name: "Phone Shop Lubumbashi",
                pseudo: "phoneshoplubi",
                city: "Lubumbashi",
                address: "Avenue Golf, Quartier Golf",
                whatsapp: "243812345678",
                email: "contact@phoneshop.com",
                logo: "https://via.placeholder.com/100x100?text=PSL",
                password: "demo123",
                date: new Date().toISOString()
            },
            {
                id: 1002,
                name: "Kolwezi Mobile Center",
                pseudo: "kolwezimobile",
                city: "Kolwezi",
                address: "Avenue de l'Indépendance, Centre-ville",
                whatsapp: "243997654321",
                email: "info@kolwezimobile.com",
                logo: "https://via.placeholder.com/100x100?text=KMC",
                password: "demo123",
                date: new Date().toISOString()
            },
            {
                id: 1003,
                name: "Tech Store Lubumbashi",
                pseudo: "techstorelubi",
                city: "Lubumbashi",
                address: "Avenue Kasaï, 45",
                whatsapp: "243812345679",
                email: "info@techstore.com",
                logo: "https://via.placeholder.com/100x100?text=TSL",
                password: "demo123",
                date: new Date().toISOString()
            },
            {
                id: 1004,
                name: "Mobile World Kolwezi",
                pseudo: "mobileworldkwz",
                city: "Kolwezi",
                address: "Avenue M'zee, 78",
                whatsapp: "243997654322",
                email: "contact@mobileworld.com",
                logo: "https://via.placeholder.com/100x100?text=MWK",
                password: "demo123",
                date: new Date().toISOString()
            },
            {
                id: 1005,
                name: "iPhone Expert Lubumbashi",
                pseudo: "iphoneexpert",
                city: "Lubumbashi",
                address: "Galerie Commerciale, 12",
                whatsapp: "243812345680",
                email: "expert@iphone.com",
                logo: "https://via.placeholder.com/100x100?text=IE",
                password: "demo123",
                date: new Date().toISOString()
            }
        ];
        localStorage.setItem(STORES_KEY, JSON.stringify(demoStores));
        console.log('Stores de démonstration créés:', demoStores.length);
    }
    
    if (!localStorage.getItem(STORE_PRODUCTS_KEY)) {
        // Produits de démonstration pour les stores
        const demoProducts = {
            1001: [
                { id: 1101, category: 'iphone', title: 'iPhone 13 128GB', price: 650, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-midnight-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1630793892000', description: 'Bon état, batterie 88%', condition: 'Bon état', storeId: 1001, date: new Date().toISOString() },
                { id: 1102, category: 'samsung', title: 'Samsung Galaxy A54 256GB', price: 450, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-a546bzkdafd/gallery/africa-en-galaxy-a54-5g-sm-a546bzkdafd-thumb-536176333', description: 'Neuf, garantie 6 mois', condition: 'Neuf', storeId: 1001, date: new Date().toISOString() },
                { id: 1103, category: 'accessoire', title: 'Chargeur Apple 20W', price: 25, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU8X2?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1590627935000', description: 'Original, neuf', condition: 'Neuf', storeId: 1001, date: new Date().toISOString() }
            ],
            1002: [
                { id: 1201, category: 'iphone', title: 'iPhone 12 64GB', price: 450, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-black-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604347109000', description: 'Reconditionné, batterie 92%', condition: 'Reconditionné', storeId: 1002, date: new Date().toISOString() },
                { id: 1202, category: 'samsung', title: 'Samsung S22 128GB', price: 550, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-s901bzkdafd/gallery/africa-en-galaxy-s22-s901-sm-s901bzkdafd-thumb-535755250', description: 'Bon état', condition: 'Bon état', storeId: 1002, date: new Date().toISOString() }
            ],
            1003: [
                { id: 1301, category: 'iphone', title: 'iPhone 14 Pro 128GB', price: 950, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-deep-purple-select?wid=470&hei=556&fmt=png-alpha&.v=1661448071151', description: 'Reconditionné, batterie 95%', condition: 'Reconditionné', storeId: 1003, date: new Date().toISOString() },
                { id: 1302, category: 'accessoire', title: 'Coque iPhone 14 Pro', price: 20, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX2Y2?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1590627935000', description: 'Silicone, plusieurs couleurs', condition: 'Neuf', storeId: 1003, date: new Date().toISOString() }
            ],
            1004: [
                { id: 1401, category: 'samsung', title: 'Samsung S23 Ultra 512GB', price: 1200, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-s918bzkdafd/gallery/africa-en-galaxy-s23-ultra-s918-sm-s918bzkdafd-thumb-535755250', description: 'Neuf, sous blister', condition: 'Neuf', storeId: 1004, date: new Date().toISOString() }
            ],
            1005: [
                { id: 1501, category: 'iphone', title: 'iPhone 15 Pro Max 256GB', price: 1450, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-max-black-titanium-select?wid=470&hei=556&fmt=png-alpha&.v=1692885771534', description: 'Neuf, garantie 1 an', condition: 'Neuf', storeId: 1005, date: new Date().toISOString() },
                { id: 1502, category: 'accessoire', title: 'Écouteurs AirPods Pro', price: 180, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-pro?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1634140348000', description: 'Neuf', condition: 'Neuf', storeId: 1005, date: new Date().toISOString() }
            ]
        };
        localStorage.setItem(STORE_PRODUCTS_KEY, JSON.stringify(demoProducts));
        console.log('Produits de démonstration créés');
    }
}

// ==================== FONCTIONS UPLOAD IMGBB ====================
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
            return {
                success: true,
                url: data.data.url,
                delete_url: data.data.delete_url
            };
        } else {
            return {
                success: false,
                error: 'Upload failed'
            };
        }
    } catch (error) {
        console.error('Erreur upload ImgBB:', error);
        return {
            success: false,
            error: error.message
        };
    }
}

window.previewAndUploadLogo = async function(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    // Vérifications
    if (file.size > 2 * 1024 * 1024) {
        showNotification('Logo trop lourd. Maximum 2 Mo.', 'error');
        return;
    }
    
    if (!file.type.startsWith('image/')) {
        showNotification('Format non supporté. Choisissez une image.', 'error');
        return;
    }
    
    const statusDiv = document.getElementById('logoUploadStatus');
    const preview = document.getElementById('logoPreview');
    
    statusDiv.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Upload en cours...';
    statusDiv.style.color = 'var(--gray)';
    
    // Aperçu local
    const reader = new FileReader();
    reader.onload = function(e) {
        preview.innerHTML = `<img src="${e.target.result}" alt="Logo">`;
    };
    reader.readAsDataURL(file);
    
    // Upload vers ImgBB
    const result = await uploadToImgBB(file);
    
    if (result.success) {
        document.getElementById('logoUrl').value = result.url;
        statusDiv.innerHTML = '✅ Logo uploadé avec succès !';
        statusDiv.style.color = 'var(--secondary)';
    } else {
        preview.innerHTML = '<i class="fas fa-store"></i>';
        statusDiv.innerHTML = '❌ Échec de l\'upload. Réessayez.';
        statusDiv.style.color = 'var(--danger)';
    }
};

// ==================== FONCTIONS STORES ====================
window.getStores = function() {
    try {
        return JSON.parse(localStorage.getItem(STORES_KEY)) || [];
    } catch (e) {
        console.error('Erreur chargement stores:', e);
        return [];
    }
};

function saveStore(store) {
    const stores = getStores();
    stores.push(store);
    localStorage.setItem(STORES_KEY, JSON.stringify(stores));
    return store;
}

window.getStoreProducts = function(storeId) {
    try {
        const allProducts = JSON.parse(localStorage.getItem(STORE_PRODUCTS_KEY)) || {};
        return allProducts[storeId] || [];
    } catch (e) {
        console.error('Erreur chargement produits:', e);
        return [];
    }
};

function saveStoreProducts(storeId, products) {
    const allProducts = JSON.parse(localStorage.getItem(STORE_PRODUCTS_KEY)) || {};
    allProducts[storeId] = products;
    localStorage.setItem(STORE_PRODUCTS_KEY, JSON.stringify(allProducts));
    return products;
}

// ==================== NOTIFICATION ====================
function showNotification(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        ${message}
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// ==================== INSCRIPTION STORE ====================
window.registerStore = function(event) {
    event.preventDefault();
    
    // Récupération des valeurs
    const name = document.getElementById('storeName')?.value.trim();
    const city = document.getElementById('storeCity')?.value.trim();
    const pseudo = document.getElementById('storePseudo')?.value.toLowerCase().replace(/[^a-z0-9]/g, '');
    const address = document.getElementById('storeAddress')?.value.trim();
    const whatsapp = document.getElementById('storeWhatsapp')?.value.trim();
    const email = document.getElementById('storeEmail')?.value.trim();
    const password = document.getElementById('storePassword')?.value;
    const confirmPassword = document.getElementById('confirmPassword')?.value;
    const logoUrl = document.getElementById('logoUrl')?.value;
    
    // Validations
    if (!name || !city || !pseudo || !whatsapp || !password || !confirmPassword) {
        showNotification('Tous les champs obligatoires doivent être remplis', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showNotification('Les mots de passe ne correspondent pas', 'error');
        return;
    }
    
    if (password.length < 6) {
        showNotification('Le mot de passe doit contenir au moins 6 caractères', 'error');
        return;
    }
    
    if (!logoUrl) {
        showNotification('Veuillez uploader un logo', 'error');
        return;
    }
    
    // Vérifier si le pseudo existe déjà
    const stores = getStores();
    if (stores.some(s => s.pseudo === pseudo)) {
        showNotification('Ce pseudo est déjà pris. Choisissez-en un autre.', 'error');
        return;
    }
    
    // Création du store
    const store = {
        id: Date.now(),
        name: name,
        pseudo: pseudo,
        city: city,
        address: address || '',
        whatsapp: whatsapp,
        email: email || '',
        logo: logoUrl,
        password: password, // À hacher dans un vrai projet
        date: new Date().toISOString(),
        stats: {
            views: 0,
            products: 0
        }
    };
    
    // Sauvegarde
    saveStore(store);
    saveStoreProducts(store.id, []);
    
    // Connexion automatique
    sessionStorage.setItem(CURRENT_STORE_KEY, JSON.stringify(store));
    
    showNotification('✅ Store créé avec succès !');
    
    // Redirection vers le dashboard
    setTimeout(() => {
        window.location.href = `dashboard.html?id=${store.id}`;
    }, 1500);
};

// ==================== CONNEXION STORE ====================
window.loginStore = function(event) {
    event.preventDefault();
    
    const pseudo = document.getElementById('loginPseudo')?.value.toLowerCase().replace(/[^a-z0-9]/g, '');
    const password = document.getElementById('loginPassword')?.value;
    
    const stores = getStores();
    const store = stores.find(s => s.pseudo === pseudo && s.password === password);
    
    if (store) {
        sessionStorage.setItem(CURRENT_STORE_KEY, JSON.stringify(store));
        showNotification('Connexion réussie !');
        window.location.href = `dashboard.html?id=${store.id}`;
    } else {
        showNotification('Pseudo ou mot de passe incorrect', 'error');
    }
};

// ==================== DÉCONNEXION ====================
window.logoutStore = function() {
    sessionStorage.removeItem(CURRENT_STORE_KEY);
    showNotification('Déconnexion réussie');
    window.location.href = 'register.html';
};

// ==================== VÉRIFICATION CONNEXION ====================
window.checkStoreAuth = function(storeId) {
    const currentStore = JSON.parse(sessionStorage.getItem(CURRENT_STORE_KEY));
    return currentStore && currentStore.id === storeId;
};

// Initialisation
initializeStores();
