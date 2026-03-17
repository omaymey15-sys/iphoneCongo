// ==================== CONFIGURATION ====================
const OFFICIAL_KEY = 'iphonecongo_official';
const WHATSAPP_NUMBER = '243972685669';

// ==================== PRODUITS COMPLETS (TOUS NEUFS) ====================
const initialProducts = [
    // === IPHONES (16 modèles) ===
    { id: 1101, category: 'iphone', title: 'iPhone XR 64GB', price: 165, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-xr-blue-select-201809?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1551226036000', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, sous blister', date: new Date().toISOString() },
    { id: 1102, category: 'iphone', title: 'iPhone 11 64GB', price: 195, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-black-select-2019?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1550975408000', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, accessoires inclus', date: new Date().toISOString() },
    { id: 1103, category: 'iphone', title: 'iPhone 11 Pro 64GB', price: 270, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-gold-select-2019?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1550975408000', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, sous blister', date: new Date().toISOString() },
    { id: 1104, category: 'iphone', title: 'iPhone 11 Pro Max 64GB', price: 300, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-11-pro-max-gold-select-2019?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1550975408000', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, sous blister', date: new Date().toISOString() },
    { id: 1105, category: 'iphone', title: 'iPhone 12 64GB', price: 235, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-black-select-2020?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1604347109000', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, sous blister', date: new Date().toISOString() },
    { id: 1106, category: 'iphone', title: 'iPhone 12 Pro 128GB', price: 365, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-gold-select-2020?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1604347109000', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, sous blister', date: new Date().toISOString() },
    { id: 1107, category: 'iphone', title: 'iPhone 12 Pro Max 128GB', price: 385, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-gold-select-2020?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1604347109000', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, sous blister', date: new Date().toISOString() },
    { id: 1108, category: 'iphone', title: 'iPhone 13 128GB', price: 350, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-midnight-select-2021?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1630793892000', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, sous blister', date: new Date().toISOString() },
    { id: 1109, category: 'iphone', title: 'iPhone 13 Pro 128GB', price: 450, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-graphite-select-2021?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1630793892000', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, sous blister', date: new Date().toISOString() },
    { id: 1110, category: 'iphone', title: 'iPhone 13 Pro Max 128GB', price: 540, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-graphite-select-2021?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1630793892000', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, sous blister', date: new Date().toISOString() },
    { id: 1111, category: 'iphone', title: 'iPhone 14 128GB', price: 400, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-purple-select-202209?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1661448071151', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, sous blister', date: new Date().toISOString() },
    { id: 1112, category: 'iphone', title: 'iPhone 14 Pro 128GB', price: 500, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-deep-purple-select?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1661448071151', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, sous blister', date: new Date().toISOString() },
    { id: 1113, category: 'iphone', title: 'iPhone 14 Pro Max 128GB', price: 590, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-max-deep-purple-select?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1661448071151', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, sous blister', date: new Date().toISOString() },
    { id: 1114, category: 'iphone', title: 'iPhone 15 Pro 128GB', price: 650, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-blue-titanium-select?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1692885771534', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, sous blister', date: new Date().toISOString() },
    { id: 1115, category: 'iphone', title: 'iPhone 15 Pro Max 256GB', price: 785, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-max-black-titanium-select?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1692885771534', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, sous blister', date: new Date().toISOString() },
    { id: 1116, category: 'iphone', title: 'iPhone 16 Pro Max 256GB', price: 1030, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-16-pro-max-black-titanium?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1729876543', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Nouveau modèle', date: new Date().toISOString() },
    
    // === SAMSUNG (18 modèles) ===
    { id: 2101, category: 'samsung', title: 'Samsung A06 64GB', price: 105, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-a065fzkdafd/gallery/africa-en-galaxy-a06-a065-sm-a065fzkdafd-536176333?wid=600&hei=600&fmt=jpeg', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, sous blister', date: new Date().toISOString() },
    { id: 2102, category: 'samsung', title: 'Samsung A06 128GB', price: 115, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-a065fzkdafd/gallery/africa-en-galaxy-a06-a065-sm-a065fzkdafd-536176333?wid=600&hei=600&fmt=jpeg', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, double SIM', date: new Date().toISOString() },
    { id: 2103, category: 'samsung', title: 'Samsung A07 64GB', price: 110, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-a075fzkdafd/gallery/africa-en-galaxy-a07-a075-sm-a075fzkdafd-536176334?wid=600&hei=600&fmt=jpeg', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, sous blister', date: new Date().toISOString() },
    { id: 2104, category: 'samsung', title: 'Samsung A07 128GB', price: 130, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-a075fzkdafd/gallery/africa-en-galaxy-a07-a075-sm-a075fzkdafd-536176334?wid=600&hei=600&fmt=jpeg', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, arrivage', date: new Date().toISOString() },
    { id: 2105, category: 'samsung', title: 'Samsung A15 128GB', price: 140, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-a155fzkdafd/gallery/africa-en-galaxy-a15-a155-sm-a155fzkdafd-536176335?wid=600&hei=600&fmt=jpeg', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, disponible', date: new Date().toISOString() },
    { id: 2106, category: 'samsung', title: 'Samsung A16 128GB', price: 155, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-a165fzkdafd/gallery/africa-en-galaxy-a16-a165-sm-a165fzkdafd-536176336?wid=600&hei=600&fmt=jpeg', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, modèle récent', date: new Date().toISOString() },
    { id: 2107, category: 'samsung', title: 'Samsung A17 128GB', price: 165, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-a175fzkdafd/gallery/africa-en-galaxy-a17-a175-sm-a175fzkdafd-536176337?wid=600&hei=600&fmt=jpeg', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, nouvel arrivage', date: new Date().toISOString() },
    { id: 2108, category: 'samsung', title: 'Samsung A25 128GB', price: 160, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-a256fzkdafd/gallery/africa-en-galaxy-a25-a256-sm-a256fzkdafd-536176338?wid=600&hei=600&fmt=jpeg', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, A25 5G', date: new Date().toISOString() },
    { id: 2109, category: 'samsung', title: 'Samsung A54 128GB', price: 170, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-a546bzkdafd/gallery/africa-en-galaxy-a54-5g-sm-a546bzkdafd-536176333?wid=600&hei=600&fmt=jpeg', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, modèle populaire', date: new Date().toISOString() },
    { id: 2201, category: 'samsung', title: 'Samsung S20+ 128GB', price: 160, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-g985fzkdafd/gallery/africa-en-galaxy-s20-plus-g985-sm-g985fzkdafd-535755250?wid=600&hei=600&fmt=jpeg', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, arrivage', date: new Date().toISOString() },
    { id: 2202, category: 'samsung', title: 'Samsung S21+ 128GB', price: 175, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-g996bzkdafd/gallery/africa-en-galaxy-s21-plus-g996-sm-g996bzkdafd-535755251?wid=600&hei=600&fmt=jpeg', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, disponible', date: new Date().toISOString() },
    { id: 2203, category: 'samsung', title: 'Samsung S21 Ultra 128GB', price: 225, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-g998bzkdafd/gallery/africa-en-galaxy-s21-ultra-g998-sm-g998bzkdafd-535755252?wid=600&hei=600&fmt=jpeg', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, appareil photo pro', date: new Date().toISOString() },
    { id: 2204, category: 'samsung', title: 'Samsung S22 Ultra 512GB', price: 400, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-s908bzkdafd/gallery/africa-en-galaxy-s22-ultra-s908-sm-s908bzkdafd-535755253?wid=600&hei=600&fmt=jpeg', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, état impeccable', date: new Date().toISOString() },
    { id: 2205, category: 'samsung', title: 'Samsung S23 Ultra 256GB', price: 580, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-s918bzkdafd/gallery/africa-en-galaxy-s23-ultra-s918-sm-s918bzkdafd-535755250?wid=600&hei=600&fmt=jpeg', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, garantie 6 mois', date: new Date().toISOString() },
    { id: 2206, category: 'samsung', title: 'Samsung S24 Ultra 256GB', price: 780, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-s928bzkdafd/gallery/africa-en-galaxy-s24-ultra-s928-sm-s928bzkdafd-535755254?wid=600&hei=600&fmt=jpeg', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, dernier modèle', date: new Date().toISOString() },
    { id: 2301, category: 'samsung', title: 'Samsung Z Fold 3 256GB', price: 430, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-f926bzkdafd/gallery/africa-en-galaxy-z-fold3-f926-sm-f926bzkdafd-535755255?wid=600&hei=600&fmt=jpeg', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, écran parfait', date: new Date().toISOString() },
    { id: 2302, category: 'samsung', title: 'Samsung Z Fold 4 256GB', price: 500, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-f936bzkdafd/gallery/africa-en-galaxy-z-fold4-f936-sm-f936bzkdafd-535755256?wid=600&hei=600&fmt=jpeg', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, édition limitée', date: new Date().toISOString() },
    { id: 2303, category: 'samsung', title: 'Samsung Z Fold 4 1TB', price: 550, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-f936bzkdafd/gallery/africa-en-galaxy-z-fold4-f936-sm-f936bzkdafd-535755256?wid=600&hei=600&fmt=jpeg', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, version premium', date: new Date().toISOString() },

    // === ACCESSOIRES (50 modèles) ===
    // Chargeurs (10)
    { id: 4001, category: 'accessoire', title: 'Chargeur Apple 5W', price: 10, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU8X2?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1590627935000', condition: 'Neuf', warranty: '3 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, chargeur original', date: new Date().toISOString() },
    { id: 4002, category: 'accessoire', title: 'Chargeur Apple 20W', price: 25, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU8X2?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1590627935000', condition: 'Neuf', warranty: '3 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, chargeur rapide', date: new Date().toISOString() },
    { id: 4003, category: 'accessoire', title: 'Chargeur Samsung 15W', price: 15, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/ep-ta800xbegafd/gallery/africa-en-ep-ta800xbegafd-534492899?wid=600&hei=600&fmt=jpeg', condition: 'Neuf', warranty: '3 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, chargeur Samsung', date: new Date().toISOString() },
    { id: 4004, category: 'accessoire', title: 'Chargeur Samsung 25W', price: 20, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/ep-ta800xbegafd/gallery/africa-en-ep-ta800xbegafd-534492899?wid=600&hei=600&fmt=jpeg', condition: 'Neuf', warranty: '3 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, chargeur rapide', date: new Date().toISOString() },
    { id: 4005, category: 'accessoire', title: 'Chargeur Samsung 45W', price: 35, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/ep-ta845xbegafd/gallery/africa-en-ep-ta845xbegafd-534492900?wid=600&hei=600&fmt=jpeg', condition: 'Neuf', warranty: '3 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, super rapide', date: new Date().toISOString() },
    { id: 4006, category: 'accessoire', title: 'Chargeur universel 2 ports', price: 12, image: 'https://m.media-amazon.com/images/I/61mB+Xl5u3L._AC_SX679_.jpg', condition: 'Neuf', warranty: '3 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, 2 ports USB', date: new Date().toISOString() },
    { id: 4007, category: 'accessoire', title: 'Chargeur voiture 2 ports', price: 15, image: 'https://m.media-amazon.com/images/I/61nzR7wI6QL._AC_SX679_.jpg', condition: 'Neuf', warranty: '3 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, allume-cigare', date: new Date().toISOString() },
    { id: 4008, category: 'accessoire', title: 'Câble USB-C 1m', price: 8, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU8X2?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1590627935000', condition: 'Neuf', warranty: '3 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, câble USB-C', date: new Date().toISOString() },
    { id: 4009, category: 'accessoire', title: 'Câble Lightning 1m', price: 10, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU8X2?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1590627935000', condition: 'Neuf', warranty: '3 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, câble Apple', date: new Date().toISOString() },
    { id: 4010, category: 'accessoire', title: 'Câble micro-USB 1m', price: 5, image: 'https://m.media-amazon.com/images/I/41nzR7wI6QL._AC_SX679_.jpg', condition: 'Neuf', warranty: '3 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, câble micro', date: new Date().toISOString() },
    
    // Casques / Écouteurs (10)
    { id: 4101, category: 'accessoire', title: 'AirPods 2', price: 80, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1634140348000', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, AirPods 2', date: new Date().toISOString() },
    { id: 4102, category: 'accessoire', title: 'AirPods Pro', price: 180, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-pro?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1634140348000', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, réduction de bruit', date: new Date().toISOString() },
    { id: 4103, category: 'accessoire', title: 'Samsung Buds2', price: 70, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-r177nzkaxfa/gallery/africa-en-galaxy-buds2-r177-sm-r177nzkaxfa-thumb-534028955?wid=600&hei=600&fmt=jpeg', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, écouteurs Samsung', date: new Date().toISOString() },
    { id: 4104, category: 'accessoire', title: 'Samsung Buds2 Pro', price: 120, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-r510nzkaxfa/gallery/africa-en-galaxy-buds2-pro-r510-sm-r510nzkaxfa-thumb-534028956?wid=600&hei=600&fmt=jpeg', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, version pro', date: new Date().toISOString() },
    { id: 4105, category: 'accessoire', title: 'Casque Bluetooth JBL', price: 45, image: 'https://m.media-amazon.com/images/I/61mB+Xl5u3L._AC_SX679_.jpg', condition: 'Neuf', warranty: '3 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, casque JBL', date: new Date().toISOString() },
    { id: 4106, category: 'accessoire', title: 'Casque Bluetooth Sony', price: 60, image: 'https://m.media-amazon.com/images/I/61nzR7wI6QL._AC_SX679_.jpg', condition: 'Neuf', warranty: '3 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, casque Sony', date: new Date().toISOString() },
    { id: 4107, category: 'accessoire', title: 'Écouteurs filaires Apple', price: 15, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU8X2?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1590627935000', condition: 'Neuf', warranty: '3 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, EarPods', date: new Date().toISOString() },
    { id: 4108, category: 'accessoire', title: 'Écouteurs filaires Samsung', price: 12, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/ef-r20nbegafd/gallery/africa-en-ef-r20nbegafd-534492901?wid=600&hei=600&fmt=jpeg', condition: 'Neuf', warranty: '3 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, écouteurs Samsung', date: new Date().toISOString() },
    { id: 4109, category: 'accessoire', title: 'Casque gaming', price: 35, image: 'https://m.media-amazon.com/images/I/61mB+Xl5u3L._AC_SX679_.jpg', condition: 'Neuf', warranty: '3 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, avec micro', date: new Date().toISOString() },
    { id: 4110, category: 'accessoire', title: 'Adaptateur jack 3.5mm', price: 5, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU8X2?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1590627935000', condition: 'Neuf', warranty: '3 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, adaptateur', date: new Date().toISOString() },
    
    // Coques / Pochettes (15)
    { id: 4201, category: 'accessoire', title: 'Coque iPhone 15 Pro Silicone', price: 15, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX2Y2?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1590627935000', condition: 'Neuf', warranty: '3 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, coque silicone', date: new Date().toISOString() },
    { id: 4202, category: 'accessoire', title: 'Coque iPhone 15 Pro Max', price: 16, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX2Y2?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1590627935000', condition: 'Neuf', warranty: '3 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, coque silicone', date: new Date().toISOString() },
    { id: 4203, category: 'accessoire', title: 'Coque iPhone 14 Pro', price: 15, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX2Y2?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1590627935000', condition: 'Neuf', warranty: '3 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, coque silicone', date: new Date().toISOString() },
    { id: 4204, category: 'accessoire', title: 'Coque iPhone 13', price: 12, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX2Y2?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1590627935000', condition: 'Neuf', warranty: '3 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, coque silicone', date: new Date().toISOString() },
    { id: 4205, category: 'accessoire', title: 'Coque Samsung S23 Ultra', price: 15, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/ef-pf918cbegafd/gallery/africa-en-ef-pf918cbegafd-534504890?wid=600&hei=600&fmt=jpeg', condition: 'Neuf', warranty: '3 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, coque Samsung', date: new Date().toISOString() },
    { id: 4206, category: 'accessoire', title: 'Coque Samsung S22 Ultra', price: 14, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/ef-pf918cbegafd/gallery/africa-en-ef-pf918cbegafd-534504890?wid=600&hei=600&fmt=jpeg', condition: 'Neuf', warranty: '3 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, coque silicone', date: new Date().toISOString() },
    { id: 4207, category: 'accessoire', title: 'Coque Samsung A54', price: 12, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/ef-pa546cbegafd/gallery/africa-en-ef-pa546cbegafd-534504891?wid=600&hei=600&fmt=jpeg', condition: 'Neuf', warranty: '3 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, coque transparente', date: new Date().toISOString() },
    { id: 4208, category: 'accessoire', title: 'Pochette étanche', price: 10, image: 'https://m.media-amazon.com/images/I/61mB+Xl5u3L._AC_SX679_.jpg', condition: 'Neuf', warranty: '3 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, waterproof', date: new Date().toISOString() },
    { id: 4209, category: 'accessoire', title: 'Pochette ceinture', price: 8, image: 'https://m.media-amazon.com/images/I/61nzR7wI6QL._AC_SX679_.jpg', condition: 'Neuf', warranty: '3 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, avec clip', date: new Date().toISOString() },
    { id: 4210, category: 'accessoire', title: 'Pochette cuir iPhone 15', price: 25, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX2Y2?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1590627935000', condition: 'Neuf', warranty: '3 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, pochette cuir', date: new Date().toISOString() },
    { id: 4211, category: 'accessoire', title: 'Pochette Samsung cuir', price: 22, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/ef-pf918cbegafd/gallery/africa-en-ef-pf918cbegafd-534504890?wid=600&hei=600&fmt=jpeg', condition: 'Neuf', warranty: '3 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, pochette cuir', date: new Date().toISOString() },
    { id: 4212, category: 'accessoire', title: 'Pochette sport', price: 7, image: 'https://m.media-amazon.com/images/I/61mB+Xl5u3L._AC_SX679_.jpg', condition: 'Neuf', warranty: '3 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, brassard', date: new Date().toISOString() },
    { id: 4213, category: 'accessoire', title: 'Coque rigide transparente', price: 5, image: 'https://m.media-amazon.com/images/I/41nzR7wI6QL._AC_SX679_.jpg', condition: 'Neuf', warranty: '3 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, ultra fine', date: new Date().toISOString() },
    { id: 4214, category: 'accessoire', title: 'Coque avec béquille', price: 8, image: 'https://m.media-amazon.com/images/I/61mB+Xl5u3L._AC_SX679_.jpg', condition: 'Neuf', warranty: '3 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, avec support', date: new Date().toISOString() },
    { id: 4215, category: 'accessoire', title: 'Coque porte-cartes', price: 10, image: 'https://m.media-amazon.com/images/I/61nzR7wI6QL._AC_SX679_.jpg', condition: 'Neuf', warranty: '3 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, avec emplacement cartes', date: new Date().toISOString() },
    
    // Glass / Protection écran (10)
    { id: 4301, category: 'accessoire', title: 'Glass iPhone 15 Pro', price: 8, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU8X2?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1590627935000', condition: 'Neuf', warranty: '1 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, verre trempé lot de 2', date: new Date().toISOString() },
    { id: 4302, category: 'accessoire', title: 'Glass iPhone 15', price: 8, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU8X2?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1590627935000', condition: 'Neuf', warranty: '1 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, verre trempé', date: new Date().toISOString() },
    { id: 4303, category: 'accessoire', title: 'Glass iPhone 14 Pro', price: 7, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU8X2?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1590627935000', condition: 'Neuf', warranty: '1 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, verre trempé', date: new Date().toISOString() },
    { id: 4304, category: 'accessoire', title: 'Glass iPhone 13', price: 6, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU8X2?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1590627935000', condition: 'Neuf', warranty: '1 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, verre trempé', date: new Date().toISOString() },
    { id: 4305, category: 'accessoire', title: 'Glass Samsung S23 Ultra', price: 8, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/ef-uf918cbegafd/gallery/africa-en-ef-uf918cbegafd-534504894?wid=600&hei=600&fmt=jpeg', condition: 'Neuf', warranty: '1 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, verre trempé', date: new Date().toISOString() },
    { id: 4306, category: 'accessoire', title: 'Glass Samsung S22 Ultra', price: 7, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/ef-uf918cbegafd/gallery/africa-en-ef-uf918cbegafd-534504894?wid=600&hei=600&fmt=jpeg', condition: 'Neuf', warranty: '1 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, verre trempé', date: new Date().toISOString() },
    { id: 4307, category: 'accessoire', title: 'Glass Samsung A54', price: 6, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/ef-ua546cbegafd/gallery/africa-en-ef-ua546cbegafd-534504895?wid=600&hei=600&fmt=jpeg', condition: 'Neuf', warranty: '1 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, verre trempé', date: new Date().toISOString() },
    { id: 4308, category: 'accessoire', title: 'Glass universel', price: 4, image: 'https://m.media-amazon.com/images/I/61mB+Xl5u3L._AC_SX679_.jpg', condition: 'Neuf', warranty: '1 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, à découper', date: new Date().toISOString() },
    { id: 4309, category: 'accessoire', title: 'Glass appareil photo', price: 3, image: 'https://m.media-amazon.com/images/I/61nzR7wI6QL._AC_SX679_.jpg', condition: 'Neuf', warranty: '1 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, protection objectif', date: new Date().toISOString() },
    { id: 4310, category: 'accessoire', title: 'Film plastique', price: 2, image: 'https://m.media-amazon.com/images/I/41nzR7wI6QL._AC_SX679_.jpg', condition: 'Neuf', warranty: '1 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, film de protection', date: new Date().toISOString() },
    
    // Tablettes (5)
    { id: 4401, category: 'accessoire', title: 'iPad 9 64GB', price: 280, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-9-select-2021?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1634140348000', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, iPad 9', date: new Date().toISOString() },
    { id: 4402, category: 'accessoire', title: 'iPad 10 64GB', price: 350, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-10-select-2022?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1661448071151', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, iPad 10', date: new Date().toISOString() },
    { id: 4403, category: 'accessoire', title: 'iPad Air 64GB', price: 450, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-select-2022?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1645577505976', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, iPad Air', date: new Date().toISOString() },
    { id: 4404, category: 'accessoire', title: 'iPad Pro 11 128GB', price: 550, image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-11-select-2022?wid=600&hei=600&fmt=jpeg&qlt=95&.v=1661448071151', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, iPad Pro', date: new Date().toISOString() },
    { id: 4405, category: 'accessoire', title: 'Tablette Samsung A8', price: 180, image: 'https://images.samsung.com/is/image/samsung/p6pim/africa_en/sm-x200nzkaxfa/gallery/africa-en-galaxy-tab-a8-x200-sm-x200nzkaxfa-thumb-535755257?wid=600&hei=600&fmt=jpeg', condition: 'Neuf', warranty: '6 mois', store: 'Lubumbashi, Kolwezi', contact: WHATSAPP_NUMBER, description: 'Neuf, Samsung Tab A8', date: new Date().toISOString() }
];

// ==================== INITIALISATION ====================
if (!localStorage.getItem(OFFICIAL_KEY)) {
    localStorage.setItem(OFFICIAL_KEY, JSON.stringify(initialProducts));
    console.log('Produits officiels chargés:', initialProducts.length);
}

// ==================== FONCTIONS UTILITAIRES ====================
function loadProducts() {
    try {
        return JSON.parse(localStorage.getItem(OFFICIAL_KEY)) || [];
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
function createHorizCard(product) {
    const isNew = isNewProduct(product.date);
    const cleanPhone = product.contact ? product.contact.replace(/[^0-9]/g, '') : WHATSAPP_NUMBER;
    const message = `Bonjour, je suis intéressé par *${product.title}* à $${product.price}.\n\n📸 Photo : ${product.image}\n📝 Description : ${product.description || ''}\n📍 Disponible à : ${product.store}`;
    const whatsappLink = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
    const telLink = `tel:${cleanPhone}`;
    
    return `
        <div class="horiz-card">
            ${isNew ? '<span class="new-badge">✨ Nouveau</span>' : ''}
            <span class="store-badge">📦 2 magasins</span>
            <img src="${product.image}" alt="${product.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/200x200?text=Image'">
            <div class="info">
                <div class="title">${product.title}</div>
                <div class="price">${formatPrice(product.price)}</div>
                <div class="product-actions">
                    <a href="${whatsappLink}" class="btn-mini whatsapp" target="_blank">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                    <a href="${telLink}" class="btn-mini call">
                        <i class="fas fa-phone"></i>
                    </a>
                </div>
            </div>
        </div>
    `;
}

// ==================== AFFICHAGE ====================
function displayProducts() {
    const products = loadProducts();
    
    // Trier par date (plus récents d'abord)
    const sorted = [...products].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // NOUVEAUTÉS : 10 premiers produits
    const newProducts = sorted.slice(0, 10);
    document.getElementById('newCount').textContent = newProducts.length;
    document.getElementById('newProducts').innerHTML = newProducts.map(p => createHorizCard(p)).join('');
    
    // Filtrer par catégorie
    const iphones = products.filter(p => p.category === 'iphone');
    const samsungs = products.filter(p => p.category === 'samsung');
    const accessoires = products.filter(p => p.category === 'accessoire');
    
    // Mise à jour des compteurs
    document.getElementById('iphoneCount').textContent = iphones.length;
    document.getElementById('samsungCount').textContent = samsungs.length;
    document.getElementById('accessoryCount').textContent = accessoires.length;
    
    // iPhone - 2 lignes de 8
    document.getElementById('iphoneRow1').innerHTML = iphones.slice(0, 8).map(p => createHorizCard(p)).join('');
    document.getElementById('iphoneRow2').innerHTML = iphones.slice(8, 16).map(p => createHorizCard(p)).join('');
    
    // Samsung - 2 lignes (9+9)
    document.getElementById('samsungRow1').innerHTML = samsungs.slice(0, 9).map(p => createHorizCard(p)).join('');
    document.getElementById('samsungRow2').innerHTML = samsungs.slice(9, 18).map(p => createHorizCard(p)).join('');
    
    // Accessoires - 5 lignes de 10
    document.getElementById('accessoryRow1').innerHTML = accessoires.slice(0, 10).map(p => createHorizCard(p)).join('');
    document.getElementById('accessoryRow2').innerHTML = accessoires.slice(10, 20).map(p => createHorizCard(p)).join('');
    document.getElementById('accessoryRow3').innerHTML = accessoires.slice(20, 30).map(p => createHorizCard(p)).join('');
    document.getElementById('accessoryRow4').innerHTML = accessoires.slice(30, 40).map(p => createHorizCard(p)).join('');
    document.getElementById('accessoryRow5').innerHTML = accessoires.slice(40, 50).map(p => createHorizCard(p)).join('');
}

// ==================== FILTRAGE RECHERCHE ====================
window.filterProducts = function() {
    const searchTerm = document.getElementById('searchAccueil')?.value.toLowerCase().trim() || '';
    const products = loadProducts();
    
    if (searchTerm === '') {
        displayProducts();
        return;
    }
    
    const filtered = products.filter(p => 
        p.title.toLowerCase().includes(searchTerm) ||
        p.category.toLowerCase().includes(searchTerm) ||
        p.store.toLowerCase().includes(searchTerm)
    );
    
    // Afficher uniquement les résultats filtrés dans la section nouveautés
    document.getElementById('newProducts').innerHTML = filtered.map(p => createHorizCard(p)).join('');
    document.getElementById('newCount').textContent = filtered.length;
    
    // Vider les autres sections
    document.getElementById('iphoneRow1').innerHTML = '';
    document.getElementById('iphoneRow2').innerHTML = '';
    document.getElementById('samsungRow1').innerHTML = '';
    document.getElementById('samsungRow2').innerHTML = '';
    document.getElementById('accessoryRow1').innerHTML = '';
    document.getElementById('accessoryRow2').innerHTML = '';
    document.getElementById('accessoryRow3').innerHTML = '';
    document.getElementById('accessoryRow4').innerHTML = '';
    document.getElementById('accessoryRow5').innerHTML = '';
};

// ==================== GESTION DE LA RECHERCHE ====================
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
    displayProducts();
};

// ==================== INITIALISATION ====================
document.addEventListener('DOMContentLoaded', displayProducts);