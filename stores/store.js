const IMGBB_API_KEY = '2d209a1377a2c31de6053540d586214f';
const STORES_KEY = 'iphonecongo_stores';
const STORE_PRODUCTS_KEY = 'iphonecongo_store_products';
const CURRENT_STORE_KEY = 'iphonecongo_current_store';

// Initialisation avec stores de démonstration
function initializeStores() {
    if (!localStorage.getItem(STORES_KEY)) {
        const demoStores = [
            { id: 1001, name: "Phone Shop Lubumbashi", pseudo: "phoneshoplubi", city: "Lubumbashi", address: "Avenue Golf", whatsapp: "243812345678", logo: "https://via.placeholder.com/100x100?text=PSL", password: "demo123", date: new Date().toISOString() },
            { id: 1002, name: "Kolwezi Mobile Center", pseudo: "kolwezimobile", city: "Kolwezi", address: "Centre-ville", whatsapp: "243997654321", logo: "https://via.placeholder.com/100x100?text=KMC", password: "demo123", date: new Date().toISOString() }
        ];
        localStorage.setItem(STORES_KEY, JSON.stringify(demoStores));
    }
    if (!localStorage.getItem(STORE_PRODUCTS_KEY)) {
        localStorage.setItem(STORE_PRODUCTS_KEY, JSON.stringify({}));
    }
}

// Upload vers ImgBB
async function uploadToImgBB(file) {
    const formData = new FormData();
    formData.append('image', file);
    try {
        const res = await fetch('https://api.imgbb.com/1/upload?key=' + IMGBB_API_KEY, { method: 'POST', body: formData });
        const data = await res.json();
        return data.success ? data.data.url : null;
    } catch { return null; }
}

window.previewAndUploadLogo = async function(event) {
    const file = event.target.files[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) { alert('Logo trop lourd'); return; }
    document.getElementById('logoUploadStatus').innerHTML = 'Upload en cours...';
    const reader = new FileReader();
    reader.onload = e => document.getElementById('logoPreview').innerHTML = `<img src="${e.target.result}" alt="Logo">`;
    reader.readAsDataURL(file);
    const url = await uploadToImgBB(file);
    if (url) {
        document.getElementById('logoUrl').value = url;
        document.getElementById('logoUploadStatus').innerHTML = '✅ Logo uploadé';
    } else {
        document.getElementById('logoUploadStatus').innerHTML = '❌ Échec';
    }
};

// Fonctions CRUD stores
window.getStores = () => JSON.parse(localStorage.getItem(STORES_KEY)) || [];
function saveStore(store) { const s = getStores(); s.push(store); localStorage.setItem(STORES_KEY, JSON.stringify(s)); }
window.getStoreProducts = (storeId) => {
    const all = JSON.parse(localStorage.getItem(STORE_PRODUCTS_KEY)) || {};
    return all[storeId] || [];
};
function saveStoreProducts(storeId, products) {
    const all = JSON.parse(localStorage.getItem(STORE_PRODUCTS_KEY)) || {};
    all[storeId] = products;
    localStorage.setItem(STORE_PRODUCTS_KEY, JSON.stringify(all));
}

// Inscription store
window.registerStore = function(e) {
    e.preventDefault();
    const name = document.getElementById('storeName').value.trim();
    const city = document.getElementById('storeCity').value.trim();
    const pseudo = document.getElementById('storePseudo').value.toLowerCase().replace(/[^a-z0-9]/g, '');
    const address = document.getElementById('storeAddress').value.trim();
    const whatsapp = document.getElementById('storeWhatsapp').value.trim();
    const password = document.getElementById('storePassword').value;
    const confirm = document.getElementById('confirmPassword').value;
    const logoUrl = document.getElementById('logoUrl').value;

    if (!name || !city || !pseudo || !whatsapp || !password || !confirm) { alert('Tous les champs obligatoires'); return; }
    if (password !== confirm) { alert('Les mots de passe ne correspondent pas'); return; }
    if (!logoUrl) { alert('Veuillez uploader un logo'); return; }
    if (getStores().some(s => s.pseudo === pseudo)) { alert('Ce pseudo est déjà pris'); return; }

    const store = {
        id: Date.now(),
        name, pseudo, city, address, whatsapp, logo: logoUrl, password,
        date: new Date().toISOString(),
        stats: { views: 0, products: 0 }
    };
    saveStore(store);
    saveStoreProducts(store.id, []);
    sessionStorage.setItem(CURRENT_STORE_KEY, JSON.stringify(store));
    alert('✅ Store créé !');
    window.location.href = `dashboard.html?id=${store.id}`;
};

// Connexion store
window.loginStore = function(e) {
    e.preventDefault();
    const pseudo = document.getElementById('loginPseudo').value.toLowerCase().replace(/[^a-z0-9]/g, '');
    const password = document.getElementById('loginPassword').value;
    const store = getStores().find(s => s.pseudo === pseudo && s.password === password);
    if (store) {
        sessionStorage.setItem(CURRENT_STORE_KEY, JSON.stringify(store));
        window.location.href = `dashboard.html?id=${store.id}`;
    } else {
        alert('Identifiants incorrects');
    }
};

// Déconnexion
window.logoutStore = function() {
    sessionStorage.removeItem(CURRENT_STORE_KEY);
    window.location.href = 'register.html';
};

window.checkStoreAuth = (storeId) => {
    const current = JSON.parse(sessionStorage.getItem(CURRENT_STORE_KEY));
    return current && current.id === storeId;
};

initializeStores();
