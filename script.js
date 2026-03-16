// ==================== CONFIGURATION ====================
const OFFICIAL_KEY = 'iphonecongo_official';

// Produits initiaux
const initialProducts = [
    // iPhone
    { id: 1, category: 'iphone', title: 'iPhone 15 Pro Max 256GB', price: 1450, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-max-black-titanium-select?wid=470&hei=556&fmt=png-alpha&.v=1692885771534', condition: 'Neuf', warranty: '6 mois', store: 'Les deux', date: new Date().toISOString() },
    { id: 2, category: 'iphone', title: 'iPhone 14 Pro 128GB', price: 950, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-deep-purple-select?wid=470&hei=556&fmt=png-alpha&.v=1661448071151', condition: 'Reconditionné', warranty: '3 mois', store: 'Lubumbashi', date: new Date(Date.now() - 86400000).toISOString() },
    { id: 3, category: 'iphone', title: 'iPhone 13 128GB', price: 650, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-midnight-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1630793892000', condition: 'Bon état', warranty: '3 mois', store: 'Kolwezi', date: new Date().toISOString() },
    { id: 4, category: 'iphone', title: 'iPhone 12 64GB', price: 450, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-black-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604347109000', condition: 'Bon état', warranty: '3 mois', store: 'Lubumbashi', date: new Date(Date.now() - 172800000).toISOString() },
    
    // Samsung
    { id: 5, category: 'samsung', title: 'Samsung S23 Ultra 512GB', price: 1200, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-s918bzkdafd/gallery/africa-en-galaxy-s23-ultra-s918-sm-s918bzkdafd-thumb-535755250', condition: 'Neuf', warranty: '6 mois', store: 'Les deux', date: new Date().toISOString() },
    { id: 6, category: 'samsung', title: 'Samsung A54 256GB', price: 450, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-a546bzkdafd/gallery/africa-en-galaxy-a54-5g-sm-a546bzkdafd-thumb-536176333', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi', date: new Date().toISOString() },
    { id: 7, category: 'samsung', title: 'Samsung S22 128GB', price: 550, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-s901bzkdafd/gallery/africa-en-galaxy-s22-s901-sm-s901bzkdafd-thumb-535755250', condition: 'Reconditionné', warranty: '3 mois', store: 'Kolwezi', date: new Date(Date.now() - 86400000).toISOString() },
    
    // Accessoires
    { id: 8, category: 'accessoire', title: 'Chargeur Apple 20W', price: 25, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU8X2?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1590627935000', condition: 'Neuf', warranty: '3 mois', store: 'Les deux', date: new Date().toISOString() },
    { id: 9, category: 'accessoire', title: 'Coque iPhone 15 Pro', price: 20, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX2Y2?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1590627935000', condition: 'Neuf', warranty: '3 mois', store: 'Kolwezi', date: new Date(Date.now() - 86400000).toISOString() },
    { id: 10, category: 'accessoire', title: 'Écouteurs Samsung', price: 35, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-r177nzkaxfa/gallery/africa-en-galaxy-buds2-r177-sm-r177nzkaxfa-thumb-534028955', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi', date: new Date().toISOString() }
];

// Initialisation
if (!localStorage.getItem(OFFICIAL_KEY)) {
    localStorage.setItem(OFFICIAL_KEY, JSON.stringify(initialProducts));
}

// ==================== FONCTIONS ====================
function loadProducts() {
    return JSON.parse(localStorage.getItem(OFFICIAL_KEY)) || [];
}

function isNewProduct(dateString) {
    const diffHours = (new Date() - new Date(dateString)) / (1000 * 60 * 60);
    return diffHours <= 48; // 48h pour les nouveautés
}

function createHorizontalCard(product) {
    return `
        <div class="horiz-card">
            ${isNewProduct(product.date) ? '<span class="new-badge">✨ Nouveau</span>' : ''}
            <img src="${product.image}" alt="${product.title}" onerror="this.src='https://via.placeholder.com/130x90?text=Image'">
            <div class="info">
                <div class="title">${product.title}</div>
                <div class="price">${product.price}</div>
            </div>
        </div>
    `;
}

function createVerticalCard(product) {
    const whatsappLink = `https://wa.me/243812345678?text=${encodeURIComponent(`Bonjour, je suis intéressé par ${product.title} à $${product.price}`)}`;
    
    return `
        <div class="product-card">
            ${isNewProduct(product.date) ? '<span class="new-badge">✨ Nouveau</span>' : ''}
            <img src="${product.image}" alt="${product.title}" onerror="this.src='https://via.placeholder.com/150x130?text=Image'">
            <div class="product-info">
                <h3>${product.title}</h3>
                <div class="product-price">${product.price}</div>
                <span class="product-condition">${product.condition}</span>
                <a href="${whatsappLink}" class="whatsapp-btn" target="_blank">
                    <i class="fab fa-whatsapp"></i> Contacter
                </a>
            </div>
        </div>
    `;
}

// Filtrage
window.filterProducts = function() {
    const searchTerm = document.getElementById('searchAccueil')?.value.toLowerCase() || '';
    const products = loadProducts();
    
    const filtered = products.filter(p => 
        p.title.toLowerCase().includes(searchTerm) ||
        p.category.toLowerCase().includes(searchTerm)
    );
    
    // Nouveautés
    const newProducts = filtered.filter(p => isNewProduct(p.date)).slice(0, 15);
    document.getElementById('newProducts').innerHTML = newProducts.map(createHorizontalCard).join('');
    
    // Par catégorie
    document.getElementById('iphoneProducts').innerHTML = filtered
        .filter(p => p.category === 'iphone')
        .map(createVerticalCard).join('');
    
    document.getElementById('samsungProducts').innerHTML = filtered
        .filter(p => p.category === 'samsung')
        .map(createVerticalCard).join('');
    
    document.getElementById('accessoryProducts').innerHTML = filtered
        .filter(p => p.category === 'accessoire')
        .map(createVerticalCard).join('');
};

// Initialisation
document.addEventListener('DOMContentLoaded', filterProducts);
