// ==================== CONFIGURATION ====================
const OFFICIAL_KEY = 'iphonecongo_official';

// ==================== PRODUITS INITIAUX (30+ produits) ====================
const initialProducts = [
    // iPhone - 10 produits
    { id: 1001, category: 'iphone', title: 'iPhone 15 Pro Max 256GB', price: 1450, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-max-black-titanium-select?wid=470&hei=556&fmt=png-alpha&.v=1692885771534', condition: 'Neuf', warranty: '6 mois', store: 'Les deux', date: new Date().toISOString() },
    { id: 1002, category: 'iphone', title: 'iPhone 15 Pro 128GB', price: 1250, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-blue-titanium-select?wid=470&hei=556&fmt=png-alpha&.v=1692885771534', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi', date: new Date().toISOString() },
    { id: 1003, category: 'iphone', title: 'iPhone 15 Plus 256GB', price: 1150, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-plus-black-select?wid=470&hei=556&fmt=png-alpha&.v=1692885772067', condition: 'Neuf', warranty: '6 mois', store: 'Kolwezi', date: new Date().toISOString() },
    { id: 1004, category: 'iphone', title: 'iPhone 14 Pro Max 256GB', price: 1100, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-max-deep-purple-select?wid=470&hei=556&fmt=png-alpha&.v=1661448071151', condition: 'Reconditionné', warranty: '3 mois', store: 'Les deux', date: new Date(Date.now() - 86400000).toISOString() },
    { id: 1005, category: 'iphone', title: 'iPhone 14 Pro 128GB', price: 950, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-deep-purple-select?wid=470&hei=556&fmt=png-alpha&.v=1661448071151', condition: 'Reconditionné', warranty: '3 mois', store: 'Lubumbashi', date: new Date(Date.now() - 86400000).toISOString() },
    { id: 1006, category: 'iphone', title: 'iPhone 14 128GB', price: 850, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-purple-select-202209?wid=470&hei=556&fmt=png-alpha&.v=1661448071151', condition: 'Bon état', warranty: '3 mois', store: 'Kolwezi', date: new Date(Date.now() - 172800000).toISOString() },
    { id: 1007, category: 'iphone', title: 'iPhone 13 Pro Max 256GB', price: 800, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-gold-select?wid=470&hei=556&fmt=png-alpha&.v=1645577505976', condition: 'Bon état', warranty: '3 mois', store: 'Lubumbashi', date: new Date().toISOString() },
    { id: 1008, category: 'iphone', title: 'iPhone 13 128GB', price: 650, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-midnight-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1630793892000', condition: 'Bon état', warranty: '3 mois', store: 'Kolwezi', date: new Date().toISOString() },
    { id: 1009, category: 'iphone', title: 'iPhone 12 128GB', price: 550, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-black-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604347109000', condition: 'Bon état', warranty: '3 mois', store: 'Lubumbashi', date: new Date().toISOString() },
    { id: 1010, category: 'iphone', title: 'iPhone 12 Mini 64GB', price: 450, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-mini-black-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604347109000', condition: 'Bon état', warranty: '3 mois', store: 'Kolwezi', date: new Date(Date.now() - 86400000).toISOString() },
    
    // Samsung - 10 produits
    { id: 2001, category: 'samsung', title: 'Samsung Galaxy S23 Ultra 512GB', price: 1200, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-s918bzkdafd/gallery/africa-en-galaxy-s23-ultra-s918-sm-s918bzkdafd-thumb-535755250', condition: 'Neuf', warranty: '6 mois', store: 'Les deux', date: new Date().toISOString() },
    { id: 2002, category: 'samsung', title: 'Samsung Galaxy S23+ 256GB', price: 950, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-s916bzkdafd/gallery/africa-en-galaxy-s23-plus-s916-sm-s916bzkdafd-thumb-535755250', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi', date: new Date().toISOString() },
    { id: 2003, category: 'samsung', title: 'Samsung Galaxy S23 128GB', price: 800, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-s911bzkdafd/gallery/africa-en-galaxy-s23-s911-sm-s911bzkdafd-thumb-535755250', condition: 'Neuf', warranty: '6 mois', store: 'Kolwezi', date: new Date().toISOString() },
    { id: 2004, category: 'samsung', title: 'Samsung Galaxy A54 256GB', price: 450, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-a546bzkdafd/gallery/africa-en-galaxy-a54-5g-sm-a546bzkdafd-thumb-536176333', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi', date: new Date().toISOString() },
    { id: 2005, category: 'samsung', title: 'Samsung Galaxy A34 128GB', price: 350, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-a346bzkdafd/gallery/africa-en-galaxy-a34-5g-sm-a346bzkdafd-thumb-536176333', condition: 'Neuf', warranty: '6 mois', store: 'Kolwezi', date: new Date().toISOString() },
    { id: 2006, category: 'samsung', title: 'Samsung Galaxy Z Fold5 512GB', price: 1600, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-f946bzkdafd/gallery/africa-en-galaxy-z-fold5-f946-sm-f946bzkdafd-thumb-535755250', condition: 'Neuf', warranty: '6 mois', store: 'Les deux', date: new Date().toISOString() },
    { id: 2007, category: 'samsung', title: 'Samsung Galaxy Z Flip5 256GB', price: 1100, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-f731bzkdafd/gallery/africa-en-galaxy-z-flip5-f731-sm-f731bzkdafd-thumb-535755250', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi', date: new Date().toISOString() },
    { id: 2008, category: 'samsung', title: 'Samsung Galaxy S22 Ultra 256GB', price: 850, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-s908bzkdafd/gallery/africa-en-galaxy-s22-ultra-s908-sm-s908bzkdafd-thumb-535755250', condition: 'Reconditionné', warranty: '3 mois', store: 'Kolwezi', date: new Date(Date.now() - 86400000).toISOString() },
    { id: 2009, category: 'samsung', title: 'Samsung Galaxy A14 128GB', price: 200, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-a146bzkdafd/gallery/africa-en-galaxy-a14-a146-sm-a146bzkdafd-thumb-536176333', condition: 'Neuf', warranty: '6 mois', store: 'Les deux', date: new Date().toISOString() },
    { id: 2010, category: 'samsung', title: 'Samsung Galaxy M54 256GB', price: 400, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-m546bzkdafd/gallery/africa-en-galaxy-m54-5g-m546-sm-m546bzkdafd-thumb-536176333', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi', date: new Date().toISOString() },
    
    // Accessoires - 10 produits
    { id: 3001, category: 'accessoire', title: 'Chargeur Apple 20W USB-C', price: 25, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU8X2?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1590627935000', condition: 'Neuf', warranty: '3 mois', store: 'Les deux', date: new Date().toISOString() },
    { id: 3002, category: 'accessoire', title: 'Chargeur Samsung 25W', price: 20, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/ep-ta800xbegafd/gallery/africa-en-ep-ta800xbegafd-534492899?wid=400&hei=400&fmt=jpeg', condition: 'Neuf', warranty: '3 mois', store: 'Les deux', date: new Date().toISOString() },
    { id: 3003, category: 'accessoire', title: 'Coque iPhone 15 Pro Silicone', price: 20, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX2Y2?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1590627935000', condition: 'Neuf', warranty: '3 mois', store: 'Lubumbashi', date: new Date().toISOString() },
    { id: 3004, category: 'accessoire', title: 'Coque Samsung S23 Ultra', price: 18, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/ef-pf918cbegafd/gallery/africa-en-ef-pf918cbegafd-534504890?wid=400&hei=400&fmt=jpeg', condition: 'Neuf', warranty: '3 mois', store: 'Kolwezi', date: new Date().toISOString() },
    { id: 3005, category: 'accessoire', title: 'Écouteurs Apple AirPods Pro', price: 180, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-pro?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1634140348000', condition: 'Neuf', warranty: '6 mois', store: 'Les deux', date: new Date().toISOString() },
    { id: 3006, category: 'accessoire', title: 'Écouteurs Samsung Buds2', price: 80, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-r177nzkaxfa/gallery/africa-en-galaxy-buds2-r177-sm-r177nzkaxfa-thumb-534028955', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi', date: new Date().toISOString() },
    { id: 3007, category: 'accessoire', title: 'Protection écran iPhone 15', price: 10, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU8X2?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1590627935000', condition: 'Neuf', warranty: '1 mois', store: 'Les deux', date: new Date().toISOString() },
    { id: 3008, category: 'accessoire', title: 'Protection écran Samsung S23', price: 10, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/ef-uf918cbegafd/gallery/africa-en-ef-uf918cbegafd-534504894?wid=400&hei=400&fmt=jpeg', condition: 'Neuf', warranty: '1 mois', store: 'Kolwezi', date: new Date().toISOString() },
    { id: 3009, category: 'accessoire', title: 'Batterie externe 10000mAh', price: 30, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU8X2?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1590627935000', condition: 'Neuf', warranty: '3 mois', store: 'Lubumbashi', date: new Date().toISOString() },
    { id: 3010, category: 'accessoire', title: 'Câble USB-C 2m', price: 15, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU8X2?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1590627935000', condition: 'Neuf', warranty: '3 mois', store: 'Les deux', date: new Date().toISOString() }
];

// Initialisation
if (!localStorage.getItem(OFFICIAL_KEY)) {
    localStorage.setItem(OFFICIAL_KEY, JSON.stringify(initialProducts));
    console.log('Produits initiaux chargés:', initialProducts.length);
}

// ==================== FONCTIONS UTILITAIRES ====================
function loadProducts() {
    try {
        const products = JSON.parse(localStorage.getItem(OFFICIAL_KEY));
        return products || [];
    } catch (e) {
        console.error('Erreur chargement produits:', e);
        return [];
    }
}

function isNewProduct(dateString) {
    if (!dateString) return false;
    const productDate = new Date(dateString);
    const now = new Date();
    const diffHours = (now - productDate) / (1000 * 60 * 60);
    return diffHours <= 48; // 48h pour les nouveautés
}

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

// ==================== CRÉATION DES CARTES ====================
function createHorizontalCard(product) {
    const isNew = isNewProduct(product.date);
    const priceFormatted = formatPrice(product.price);
    
    return `
        <div class="horiz-card" onclick="showProductDetails(${product.id})">
            ${isNew ? '<span class="new-badge">✨ Nouveau</span>' : ''}
            <img src="${product.image}" alt="${product.title}" 
                 onerror="this.src='https://via.placeholder.com/150x120?text=iPhoneCongo'">
            <div class="info">
                <div class="title">${product.title}</div>
                <div class="price">${priceFormatted}</div>
                <div class="store-name">${product.store}</div>
            </div>
        </div>
    `;
}

// ==================== AFFICHAGE ====================
function displayProducts(products) {
    const newProducts = products.filter(p => isNewProduct(p.date)).slice(0, 20);
    const iphoneProducts = products.filter(p => p.category === 'iphone');
    const samsungProducts = products.filter(p => p.category === 'samsung');
    const accessoryProducts = products.filter(p => p.category === 'accessoire');

    // Mise à jour des compteurs
    document.getElementById('newCount').textContent = newProducts.length;
    document.getElementById('iphoneCount').textContent = iphoneProducts.length;
    document.getElementById('samsungCount').textContent = samsungProducts.length;
    document.getElementById('accessoryCount').textContent = accessoryProducts.length;

    // Affichage des produits
    document.getElementById('newProducts').innerHTML = newProducts.length ? 
        newProducts.map(createHorizontalCard).join('') : 
        '<div class="no-items">Aucune nouveauté</div>';
    
    document.getElementById('iphoneProducts').innerHTML = iphoneProducts.length ?
        iphoneProducts.map(createHorizontalCard).join('') :
        '<div class="no-items">Aucun iPhone</div>';
    
    document.getElementById('samsungProducts').innerHTML = samsungProducts.length ?
        samsungProducts.map(createHorizontalCard).join('') :
        '<div class="no-items">Aucun Samsung</div>';
    
    document.getElementById('accessoryProducts').innerHTML = accessoryProducts.length ?
        accessoryProducts.map(createHorizontalCard).join('') :
        '<div class="no-items">Aucun accessoire</div>';
}

// ==================== FILTRAGE ====================
window.filterProducts = function() {
    const searchTerm = document.getElementById('searchAccueil')?.value.toLowerCase().trim() || '';
    const products = loadProducts();
    
    if (searchTerm === '') {
        displayProducts(products);
        document.getElementById('noResults').style.display = 'none';
        return;
    }
    
    const filtered = products.filter(p => 
        p.title.toLowerCase().includes(searchTerm) ||
        p.category.toLowerCase().includes(searchTerm) ||
        p.store.toLowerCase().includes(searchTerm)
    );
    
    if (filtered.length === 0) {
        document.getElementById('noResults').style.display = 'block';
        document.getElementById('newProducts').innerHTML = '';
        document.getElementById('iphoneProducts').innerHTML = '';
        document.getElementById('samsungProducts').innerHTML = '';
        document.getElementById('accessoryProducts').innerHTML = '';
    } else {
        document.getElementById('noResults').style.display = 'none';
        displayProducts(filtered);
    }
};

// ==================== DÉTAILS PRODUIT ====================
window.showProductDetails = function(productId) {
    const products = loadProducts();
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <img src="${product.image}" alt="${product.title}" style="width:100%; height:200px; object-fit:contain; margin-bottom:1rem;">
            <h3>${product.title}</h3>
            <p class="price" style="font-size:1.5rem; color:var(--primary); font-weight:600;">$${formatPrice(product.price)}</p>
            <p><i class="fas fa-store"></i> ${product.store}</p>
            <p><i class="fas fa-tag"></i> ${product.condition}</p>
            <p><i class="fas fa-shield-alt"></i> Garantie ${product.warranty}</p>
            <p>${product.description || ''}</p>
            <button class="btn-primary" onclick="contactWhatsApp('${product.title}', ${product.price})">
                <i class="fab fa-whatsapp"></i> Contacter
            </button>
            <button class="btn-secondary" onclick="this.closest('.modal').remove()">
                Fermer
            </button>
        </div>
    `;
    document.body.appendChild(modal);
};

window.contactWhatsApp = function(title, price) {
    const message = encodeURIComponent(`Bonjour, je suis intéressé par ${title} à $${price}`);
    window.open(`https://wa.me/243812345678?text=${message}`, '_blank');
};

// ==================== RECHERCHE ====================
window.toggleSearch = function() {
    const searchBar = document.getElementById('searchBar');
    if (searchBar.style.display === 'none') {
        searchBar.style.display = 'flex';
        document.getElementById('searchAccueil').focus();
    } else {
        searchBar.style.display = 'none';
    }
};

window.hideSearch = function() {
    document.getElementById('searchBar').style.display = 'none';
    document.getElementById('searchAccueil').value = '';
    filterProducts();
};

window.openSearch = function() {
    document.getElementById('searchBar').style.display = 'flex';
    document.getElementById('searchAccueil').focus();
};

// ==================== INITIALISATION ====================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Page accueil chargée');
    const products = loadProducts();
    displayProducts(products);
});
