// ==================== CONFIGURATION ====================
const OFFICIAL_KEY = 'iphonecongo_official';
const WHATSAPP_NUMBER = '243972685669';

// ==================== PRODUITS ====================
const initialProducts = [
    // iPhones
    { id: 1101, category: 'iphone', title: 'iPhone XR 64GB', price: 165, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-xr-blue-select-201809?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1551226036000', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },
    { id: 1102, category: 'iphone', title: 'iPhone 11 64GB', price: 195, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-black-select-2019?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1550975408000', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },
    { id: 1103, category: 'iphone', title: 'iPhone 11 Pro 64GB', price: 270, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-gold-select-2019?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1550975408000', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },
    { id: 1104, category: 'iphone', title: 'iPhone 11 Pro Max 64GB', price: 300, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-max-gold-select-2019?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1550975408000', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },
    { id: 1105, category: 'iphone', title: 'iPhone 12 64GB', price: 235, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-black-select-2020?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1604347109000', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },
    { id: 1106, category: 'iphone', title: 'iPhone 12 Pro 128GB', price: 365, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-gold-select-2020?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1604347109000', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },
    { id: 1107, category: 'iphone', title: 'iPhone 12 Pro Max 128GB', price: 385, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-gold-select-2020?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1604347109000', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },
    { id: 1108, category: 'iphone', title: 'iPhone 13 128GB', price: 350, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-midnight-select-2021?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1630793892000', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },
    { id: 1109, category: 'iphone', title: 'iPhone 13 Pro 128GB', price: 450, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-graphite-select-2021?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1630793892000', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },
    { id: 1110, category: 'iphone', title: 'iPhone 13 Pro Max 128GB', price: 540, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-graphite-select-2021?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1630793892000', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },
    { id: 1111, category: 'iphone', title: 'iPhone 14 128GB', price: 400, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-purple-select-202209?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1661448071151', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },
    { id: 1112, category: 'iphone', title: 'iPhone 14 Pro 128GB', price: 500, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-deep-purple-select?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1661448071151', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },
    { id: 1113, category: 'iphone', title: 'iPhone 14 Pro Max 128GB', price: 590, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-max-deep-purple-select?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1661448071151', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },
    { id: 1114, category: 'iphone', title: 'iPhone 15 Pro 128GB', price: 650, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-blue-titanium-select?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1692885771534', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },
    { id: 1115, category: 'iphone', title: 'iPhone 15 Pro Max 256GB', price: 785, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-max-black-titanium-select?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1692885771534', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },
    { id: 1116, category: 'iphone', title: 'iPhone 16 Pro Max 256GB', price: 1030, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-16-pro-max-black-titanium?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1729876543', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },
    
    // Samsung
    { id: 2101, category: 'samsung', title: 'Samsung A06 64GB', price: 105, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-a065fzkdafd/gallery/africa-en-galaxy-a06-a065-sm-a065fzkdafd-536176333?wid=600&hei=600&fmt=jpeg', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },
    { id: 2102, category: 'samsung', title: 'Samsung A06 128GB', price: 115, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-a065fzkdafd/gallery/africa-en-galaxy-a06-a065-sm-a065fzkdafd-536176333?wid=600&hei=600&fmt=jpeg', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },
    { id: 2103, category: 'samsung', title: 'Samsung A07 64GB', price: 110, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-a075fzkdafd/gallery/africa-en-galaxy-a07-a075-sm-a075fzkdafd-536176334?wid=600&hei=600&fmt=jpeg', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },
    { id: 2104, category: 'samsung', title: 'Samsung A07 128GB', price: 130, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-a075fzkdafd/gallery/africa-en-galaxy-a07-a075-sm-a075fzkdafd-536176334?wid=600&hei=600&fmt=jpeg', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },
    { id: 2105, category: 'samsung', title: 'Samsung A15 128GB', price: 140, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-a155fzkdafd/gallery/africa-en-galaxy-a15-a155-sm-a155fzkdafd-536176335?wid=600&hei=600&fmt=jpeg', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },
    { id: 2106, category: 'samsung', title: 'Samsung A16 128GB', price: 155, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-a165fzkdafd/gallery/africa-en-galaxy-a16-a165-sm-a165fzkdafd-536176336?wid=600&hei=600&fmt=jpeg', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },
    { id: 2107, category: 'samsung', title: 'Samsung A17 128GB', price: 165, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-a175fzkdafd/gallery/africa-en-galaxy-a17-a175-sm-a175fzkdafd-536176337?wid=600&hei=600&fmt=jpeg', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },
    { id: 2108, category: 'samsung', title: 'Samsung A25 128GB', price: 160, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-a256fzkdafd/gallery/africa-en-galaxy-a25-a256-sm-a256fzkdafd-536176338?wid=600&hei=600&fmt=jpeg', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },
    { id: 2109, category: 'samsung', title: 'Samsung A54 128GB', price: 170, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-a546bzkdafd/gallery/africa-en-galaxy-a54-5g-sm-a546bzkdafd-536176333?wid=600&hei=600&fmt=jpeg', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },
    { id: 2201, category: 'samsung', title: 'Samsung S20+ 128GB', price: 160, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-g985fzkdafd/gallery/africa-en-galaxy-s20-plus-g985-sm-g985fzkdafd-535755250?wid=600&hei=600&fmt=jpeg', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },
    { id: 2202, category: 'samsung', title: 'Samsung S21+ 128GB', price: 175, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-g996bzkdafd/gallery/africa-en-galaxy-s21-plus-g996-sm-g996bzkdafd-535755251?wid=600&hei=600&fmt=jpeg', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },
    { id: 2203, category: 'samsung', title: 'Samsung S21 Ultra 128GB', price: 225, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-g998bzkdafd/gallery/africa-en-galaxy-s21-ultra-g998-sm-g998bzkdafd-535755252?wid=600&hei=600&fmt=jpeg', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },
    { id: 2204, category: 'samsung', title: 'Samsung S22 Ultra 512GB', price: 400, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-s908bzkdafd/gallery/africa-en-galaxy-s22-ultra-s908-sm-s908bzkdafd-535755253?wid=600&hei=600&fmt=jpeg', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },
    { id: 2205, category: 'samsung', title: 'Samsung S23 Ultra 256GB', price: 580, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-s918bzkdafd/gallery/africa-en-galaxy-s23-ultra-s918-sm-s918bzkdafd-535755250?wid=600&hei=600&fmt=jpeg', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },
    { id: 2206, category: 'samsung', title: 'Samsung S24 Ultra 256GB', price: 780, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-s928bzkdafd/gallery/africa-en-galaxy-s24-ultra-s928-sm-s928bzkdafd-535755254?wid=600&hei=600&fmt=jpeg', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },
    { id: 2301, category: 'samsung', title: 'Samsung Z Fold 3 256GB', price: 430, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-f926bzkdafd/gallery/africa-en-galaxy-z-fold3-f926-sm-f926bzkdafd-535755255?wid=600&hei=600&fmt=jpeg', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },
    { id: 2302, category: 'samsung', title: 'Samsung Z Fold 4 256GB', price: 500, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-f936bzkdafd/gallery/africa-en-galaxy-z-fold4-f936-sm-f936bzkdafd-535755256?wid=600&hei=600&fmt=jpeg', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },
    { id: 2303, category: 'samsung', title: 'Samsung Z Fold 4 1TB', price: 550, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-f936bzkdafd/gallery/africa-en-galaxy-z-fold4-f936-sm-f936bzkdafd-535755256?wid=600&hei=600&fmt=jpeg', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },

    // Accessoires
    { id: 4001, category: 'accessoire', title: 'Chargeur Apple 20W', price: 25, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU8X2?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1590627935000', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },
    { id: 4002, category: 'accessoire', title: 'AirPods 2', price: 80, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1634140348000', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },
    { id: 4003, category: 'accessoire', title: 'Coque iPhone 15 Pro', price: 15, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX2Y2?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1590627935000', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },
    { id: 4004, category: 'accessoire', title: 'Glass iPhone 15 Pro', price: 8, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU8X2?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1590627935000', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() },
    { id: 4005, category: 'accessoire', title: 'iPad 9 64GB', price: 280, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-9-select-2021?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1634140348000', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, date: new Date().toISOString() }
];

// ==================== INITIALISATION ====================
if (!localStorage.getItem(OFFICIAL_KEY)) {
    localStorage.setItem(OFFICIAL_KEY, JSON.stringify(initialProducts));
}

function loadProducts() {
    try {
        return JSON.parse(localStorage.getItem(OFFICIAL_KEY)) || [];
    } catch {
        return [];
    }
}

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

// ==================== CRÉATION DES CARTES ====================
function createCard(product) {
    const cleanPhone = product.contact.replace(/[^0-9]/g, '');
    const message = `Bonjour, je suis intéressé par *${product.title}* à $${product.price}.\n\n📸 Photo : ${product.image}`;
    const whatsappLink = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
    
    return `
        <div class="card">
            <span class="store-badge">2 magasins</span>
            <div class="card-image">
                <img src="${product.image}" alt="${product.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/200x200?text=Image'">
            </div>
            <div class="card-content">
                <div class="card-title">${product.title}</div>
                <div class="card-price">${formatPrice(product.price)}</div>
                <a href="${whatsappLink}" class="whatsapp-btn" target="_blank">
                    <i class="fab fa-whatsapp"></i> Contacter
                </a>
            </div>
        </div>
    `;
}

// ==================== AFFICHAGE ====================
function displayProducts() {
    const products = loadProducts();
    
    const iphones = products.filter(p => p.category === 'iphone');
    const samsungs = products.filter(p => p.category === 'samsung');
    const accessoires = products.filter(p => p.category === 'accessoire');
    
    // Mise à jour des compteurs
    document.getElementById('iphoneCount').textContent = iphones.length;
    document.getElementById('samsungCount').textContent = samsungs.length;
    document.getElementById('accessoryCount').textContent = accessoires.length;
    
    // Affichage des produits
    document.getElementById('newProducts').innerHTML = products.slice(0, 10).map(createCard).join('');
    document.getElementById('iphoneProducts').innerHTML = iphones.map(createCard).join('');
    document.getElementById('samsungProducts').innerHTML = samsungs.map(createCard).join('');
    document.getElementById('accessoryProducts').innerHTML = accessoires.map(createCard).join('');
}

// ==================== INITIALISATION ====================
document.addEventListener('DOMContentLoaded', displayProducts);
