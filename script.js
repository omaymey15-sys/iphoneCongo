// Clé de stockage des produits officiels
const OFFICIAL_KEY = 'iphonecongo_official';

// Produits initiaux (exemples)
const initialOfficial = [
    // iPhones
    {
        id: Date.now() - 86400000,
        category: 'iphone',
        title: 'iPhone 15 Pro Max 256GB',
        price: 1450,
        image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-max-black-titanium-select?wid=470&hei=556&fmt=png-alpha&.v=1692885771534',
        description: 'Neuf sous blister, garantie 6 mois',
        condition: 'Neuf',
        warranty: '6 mois',
        store: 'Les deux',
        date: new Date(Date.now() - 86400000).toISOString()
    },
    {
        id: Date.now() - 86000000,
        category: 'iphone',
        title: 'iPhone 14 Pro 128GB',
        price: 950,
        image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-deep-purple-select?wid=470&hei=556&fmt=png-alpha&.v=1661448071151',
        description: 'Reconditionné, batterie 95%',
        condition: 'Reconditionné',
        warranty: '3 mois',
        store: 'Lubumbashi',
        date: new Date(Date.now() - 86000000).toISOString()
    },
    {
        id: Date.now() - 10000000, // moins de 24h pour tester le badge
        category: 'iphone',
        title: 'iPhone 13 128GB',
        price: 650,
        image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-midnight-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1630793892000',
        description: 'Bon état, batterie 88%',
        condition: 'Bon état',
        warranty: '3 mois',
        store: 'Kolwezi',
        date: new Date().toISOString()
    },
    // Samsung
    {
        id: Date.now() - 172800000,
        category: 'samsung',
        title: 'Samsung Galaxy S23 Ultra 512GB',
        price: 1200,
        image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-s918bzkdafd/gallery/africa-en-galaxy-s23-ultra-s918-sm-s918bzkdafd-thumb-535755250',
        description: 'Neuf, garantie 6 mois',
        condition: 'Neuf',
        warranty: '6 mois',
        store: 'Les deux',
        date: new Date(Date.now() - 172800000).toISOString()
    },
    {
        id: Date.now() - 5000000,
        category: 'samsung',
        title: 'Samsung Galaxy A54 256GB',
        price: 450,
        image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-a546bzkdafd/gallery/africa-en-galaxy-a54-5g-sm-a546bzkdafd-thumb-536176333',
        description: 'Neuf, garantie 6 mois',
        condition: 'Neuf',
        warranty: '6 mois',
        store: 'Lubumbashi',
        date: new Date().toISOString()
    },
    // Accessoires
    {
        id: Date.now() - 259200000,
        category: 'accessoire',
        title: 'Chargeur original Apple 20W',
        price: 25,
        image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU8X2?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1590627935000',
        description: 'Neuf, garantie 3 mois',
        condition: 'Neuf',
        warranty: '3 mois',
        store: 'Les deux',
        date: new Date(Date.now() - 259200000).toISOString()
    },
    {
        id: Date.now() - 3600000,
        category: 'accessoire',
        title: 'Coque iPhone 15 Pro Max Silicone',
        price: 20,
        image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX2Y2?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1590627935000',
        description: 'Originale, plusieurs couleurs',
        condition: 'Neuf',
        warranty: '3 mois',
        store: 'Kolwezi',
        date: new Date().toISOString()
    }
];

// Initialiser le stockage si vide
if (!localStorage.getItem(OFFICIAL_KEY)) {
    localStorage.setItem(OFFICIAL_KEY, JSON.stringify(initialOfficial));
}

// Charger les produits officiels
function loadOfficialProducts() {
    return JSON.parse(localStorage.getItem(OFFICIAL_KEY)) || [];
}

// Vérifier si un produit date de moins de 24h
function isNewProduct(dateString) {
    const productDate = new Date(dateString);
    const now = new Date();
    const diffHours = (now - productDate) / (1000 * 60 * 60);
    return diffHours <= 24;
}

// Générer le lien WhatsApp pour le store officiel
function getOfficialWhatsAppLink(product) {
    const storeNumber = product.store.includes('Lubumbashi') ? '243812345678' : 
                       product.store.includes('Kolwezi') ? '243997654321' : '243812345678';
    
    const message = `Bonjour iPhoneCongo,

Je suis intéressé par votre produit :

📱 *${product.title}*
💰 Prix: $${product.price}
📍 Disponible à: ${product.store}
📝 Description: ${product.description}
🔧 Garantie: ${product.warranty}

Est-ce toujours disponible ?`;

    return `https://wa.me/${storeNumber}?text=${encodeURIComponent(message)}`;
}

// Créer une carte produit officiel
function createOfficialCard(product) {
    const whatsappLink = getOfficialWhatsAppLink(product);
    const newBadge = isNewProduct(product.date) ? '<span class="new-badge">✨ Nouveauté</span>' : '';
    
    return `
        <div class="official-card">
            <span class="official-badge">iPhoneCongo</span>
            ${newBadge}
            <img src="${product.image}" alt="${product.title}" onerror="this.src='https://via.placeholder.com/300x200?text=Image+non+disponible'">
            <div class="official-info">
                <h3>${product.title}</h3>
                <div class="official-price">${product.price}</div>
                <span class="official-condition">${product.condition}</span>
                <div class="official-warranty">
                    <i class="fas fa-shield-alt"></i> Garantie ${product.warranty}
                </div>
                <p>${product.description}</p>
                <div class="official-contact">
                    <a href="${whatsappLink}" class="whatsapp-official-btn" target="_blank">
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </a>
                    <a href="tel:+243812345678" class="call-official-btn">
                        <i class="fas fa-phone"></i> Appeler
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Afficher les produits triés par date (les plus récents d'abord)
function displayOfficialProducts() {
    const products = loadOfficialProducts();
    // Tri par date décroissante
    const sorted = [...products].sort((a, b) => new Date(b.date) - new Date(a.date));

    document.getElementById('iphone-official').innerHTML = sorted
        .filter(p => p.category === 'iphone')
        .map(createOfficialCard).join('');
    
    document.getElementById('samsung-official').innerHTML = sorted
        .filter(p => p.category === 'samsung')
        .map(createOfficialCard).join('');
    
    document.getElementById('accessoires-official').innerHTML = sorted
        .filter(p => p.category === 'accessoire')
        .map(createOfficialCard).join('');
}

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', displayOfficialProducts);
