const COMMUNITY_KEY = 'iphonecongo_community';

// Données initiales (iPhone, Samsung, Accessoires)
const initialProducts = [
    // iPhone Kinshasa
    {
        id: Date.now() - 86400000,
        category: 'telephone',
        brand: 'iPhone',
        title: 'iPhone 15 Pro Max 256GB',
        price: 1450,
        image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-max-black-titanium-select?wid=470&hei=556&fmt=png-alpha&.v=1692885771534',
        description: 'Neuf sous blister, garantie 1 an',
        condition: 'Neuf',
        city: 'Kinshasa',
        contact: '243812345678',
        seller: 'KingPhone',
        date: new Date().toISOString()
    },
    {
        id: Date.now() - 86000000,
        category: 'telephone',
        brand: 'iPhone',
        title: 'iPhone 14 Pro 128GB',
        price: 950,
        image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-deep-purple-select?wid=470&hei=556&fmt=png-alpha&.v=1661448071151',
        description: 'Comme neuf, batterie 98%',
        condition: 'Comme neuf',
        city: 'Kinshasa',
        contact: '243812345678',
        seller: 'KinStore',
        date: new Date().toISOString()
    },
    // iPhone Lubumbashi
    {
        id: Date.now() - 172800000,
        category: 'telephone',
        brand: 'iPhone',
        title: 'iPhone 14 128GB',
        price: 850,
        image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-purple-select-202209?wid=470&hei=556&fmt=png-alpha&.v=1661448071151',
        description: 'Bon état, chargeur inclus',
        condition: 'Bon état',
        city: 'Lubumbashi',
        contact: '243997654321',
        seller: 'LubumPhone',
        date: new Date().toISOString()
    },
    // Samsung Kinshasa
    {
        id: Date.now() - 259200000,
        category: 'telephone',
        brand: 'Samsung',
        title: 'Samsung Galaxy S23 Ultra',
        price: 1200,
        image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-s918bzkdafd/gallery/africa-en-galaxy-s23-ultra-s918-sm-s918bzkdafd-thumb-535755250',
        description: 'Neuf, 512GB',
        condition: 'Neuf',
        city: 'Kinshasa',
        contact: '243812345678',
        seller: 'SamsungPro',
        date: new Date().toISOString()
    },
    // Accessoires
    {
        id: Date.now() - 345600000,
        category: 'accessoire',
        accessoryType: 'Chargeur',
        title: 'Chargeur original iPhone 20W',
        price: 25,
        image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU8X2?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1590627935000',
        description: 'Chargeur original Apple, neuf',
        condition: 'Neuf',
        city: 'Kinshasa',
        contact: '243812345678',
        seller: 'Access Congo',
        date: new Date().toISOString()
    },
    {
        id: Date.now() - 400000000,
        category: 'accessoire',
        accessoryType: 'Coque',
        title: 'Coque iPhone 13/14/15 Pro',
        price: 15,
        image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX2Y2?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1590627935000',
        description: 'Coque silicone originale',
        condition: 'Neuf',
        city: 'Lubumbashi',
        contact: '243997654321',
        seller: 'Access Plus',
        date: new Date().toISOString()
    }
];

// Initialisation
function initializeData() {
    if (!localStorage.getItem(COMMUNITY_KEY)) {
        localStorage.setItem(COMMUNITY_KEY, JSON.stringify(initialProducts));
    }
}

// Récupérer les produits
function getProducts() {
    return JSON.parse(localStorage.getItem(COMMUNITY_KEY)) || [];
}

// Fonction pour générer le lien WhatsApp
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

// Fonction de défilement horizontal
window.scrollStore = function(elementId, amount) {
    const container = document.getElementById(elementId);
    if (container) {
        container.scrollBy({
            left: amount,
            behavior: 'smooth'
        });
    }
};

// Créer une carte pour store horizontal
function createStoreCard(product) {
    const whatsappLink = getWhatsAppLink(product.contact, product, product.seller);
    
    let badgeText = product.brand || 'Accessoire';
    if (product.category === 'accessoire') {
        badgeText = product.accessoryType || 'Accessoire';
    }
    
    return `
        <div class="store-card">
            <span class="category-badge">${badgeText}</span>
            <span class="city-badge">${product.city}</span>
            <img src="${product.image}" alt="${product.title}"
                 onerror="this.src='https://via.placeholder.com/300x200?text=Product'">
            <div class="card-content">
                <h4>${product.title}</h4>
                <div class="price">${product.price}</div>
                <div class="condition">${product.condition}</div>
                <div class="seller">
                    <i class="fas fa-user"></i> ${product.seller}
                </div>
                <a href="${whatsappLink}" class="whatsapp-btn-small" target="_blank">
                    <i class="fab fa-whatsapp"></i> Contacter
                </a>
            </div>
        </div>
    `;
}

// Charger les iPhone par ville
function loadiPhoneByCity(city, elementId) {
    const container = document.getElementById(elementId);
    if (!container) return;
    
    const products = getProducts()
        .filter(p => p.category === 'telephone' && p.brand === 'iPhone' && p.city === city)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 8);
    
    container.innerHTML = products.map(createStoreCard).join('');
}

// Charger les Samsung par ville
function loadSamsungByCity(city, elementId) {
    const container = document.getElementById(elementId);
    if (!container) return;
    
    const products = getProducts()
        .filter(p => p.category === 'telephone' && p.brand === 'Samsung' && p.city === city)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 8);
    
    container.innerHTML = products.map(createStoreCard).join('');
}

// Charger les accessoires
function loadAccessoires(elementId) {
    const container = document.getElementById(elementId);
    if (!container) return;
    
    const products = getProducts()
        .filter(p => p.category === 'accessoire')
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 10);
    
    container.innerHTML = products.map(createStoreCard).join('');
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    initializeData();
    
    // Charger tous les stores horizontaux
    loadiPhoneByCity('Kinshasa', 'iphone-kinshasa-scroll');
    loadiPhoneByCity('Lubumbashi', 'iphone-lubumbashi-scroll');
    loadiPhoneByCity('Goma', 'iphone-goma-scroll');
    loadSamsungByCity('Kinshasa', 'samsung-kinshasa-scroll');
    loadSamsungByCity('Lubumbashi', 'samsung-lubumbashi-scroll');
    loadAccessoires('accessoires-scroll');
});
