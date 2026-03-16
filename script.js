// Constantes
const STORAGE_KEY = 'iphonecongo_products';

// Données initiales avec des iPhones populaires au Congo
const initialProducts = [
    {
        id: Date.now() - 86400000,
        title: 'iPhone 15 Pro Max 256GB - Noir',
        model: 'iPhone 15 Pro Max',
        price: 1450,
        image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-max-black-titanium-select?wid=470&hei=556&fmt=png-alpha&.v=1692885771534',
        description: '📱 iPhone 15 Pro Max 256GB, état neuf sous blister. Puce A17 Pro, appareil photo pro, titane. Garantie Apple 1 an. Accessoires inclus.',
        condition: 'Neuf',
        city: 'Kinshasa',
        storage: '256GB',
        battery: '100%',
        contact: '+243 812 345 678',
        date: new Date(Date.now() - 86400000).toISOString()
    },
    {
        id: Date.now() - 172800000,
        title: 'iPhone 14 128GB - Violet',
        model: 'iPhone 14',
        price: 850,
        image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-purple-select-202209?wid=470&hei=556&fmt=png-alpha&.v=1661448071151',
        description: 'iPhone 14 128GB, utilisé 3 mois, état comme neuf. Batterie 98%. Chargeur original inclus. Vendu avec facture.',
        condition: 'Comme neuf',
        city: 'Lubumbashi',
        storage: '128GB',
        battery: '98%',
        contact: '+243 997 654 321',
        date: new Date(Date.now() - 172800000).toISOString()
    },
    {
        id: Date.now() - 259200000,
        title: 'iPhone 13 128GB - Minuit',
        model: 'iPhone 13',
        price: 650,
        image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-midnight-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1630793892000',
        description: 'iPhone 13 128GB, bon état, fonctionne parfaitement. Batterie 85%. Livré avec chargeur et coque de protection.',
        condition: 'Bon état',
        city: 'Goma',
        storage: '128GB',
        battery: '85%',
        contact: '+243 993 123 456',
        date: new Date(Date.now() - 259200000).toISOString()
    }
];

// Initialisation
function initializeStore() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initialProducts));
        return initialProducts;
    }
    return JSON.parse(stored);
}

// Gestionnaire de produits
const ProductManager = {
    getAll: () => {
        const products = localStorage.getItem(STORAGE_KEY);
        return products ? JSON.parse(products) : [];
    },
    
    save: (products) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
        return products;
    },
    
    add: (productData) => {
        const products = ProductManager.getAll();
        const newProduct = {
            ...productData,
            id: Date.now(),
            date: new Date().toISOString()
        };
        products.unshift(newProduct);
        ProductManager.save(products);
        return newProduct;
    },
    
    delete: (id) => {
        const products = ProductManager.getAll();
        const filtered = products.filter(p => p.id !== id);
        ProductManager.save(filtered);
        return filtered;
    },
    
    search: (term) => {
        const products = ProductManager.getAll();
        if (!term) return products;
        
        term = term.toLowerCase();
        return products.filter(p => 
            p.title.toLowerCase().includes(term) ||
            p.model.toLowerCase().includes(term) ||
            p.description.toLowerCase().includes(term) ||
            p.city.toLowerCase().includes(term)
        );
    },
    
    sort: (products, criteria) => {
        const sorted = [...products];
        switch(criteria) {
            case 'priceAsc':
                return sorted.sort((a, b) => a.price - b.price);
            case 'priceDesc':
                return sorted.sort((a, b) => b.price - a.price);
            case 'date':
            default:
                return sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
        }
    }
};

// Gestionnaire d'interface
const UIManager = {
    formatPrice: (price) => {
        return price.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    },
    
    formatDate: (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) return 'Hier';
        if (diffDays < 7) return `Il y a ${diffDays} jours`;
        if (diffDays < 30) return `Il y a ${Math.floor(diffDays / 7)} semaines`;
        return date.toLocaleDateString('fr-FR');
    },
    
    createProductCard: (product) => {
        const badgeColor = product.condition === 'Neuf' ? '#009639' : '#0078d4';
        
        return `
            <div class="product-card" data-id="${product.id}">
                <div class="product-badge" style="background: ${badgeColor}">
                    ${product.city}
                </div>
                <img src="${product.image}" 
                     alt="${product.title}"
                     onerror="this.onerror=null; this.src='https://via.placeholder.com/300x200?text=iPhone+Congo'">
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-model">${product.model}</p>
                    <div class="product-price">${UIManager.formatPrice(product.price)}</div>
                    
                    <div class="product-details">
                        <span class="product-detail-item">
                            <i class="fas fa-sim-card"></i> ${product.storage}
                        </span>
                        <span class="product-detail-item">
                            <i class="fas fa-battery-full"></i> ${product.battery}
                        </span>
                    </div>
                    
                    <span class="product-condition">${product.condition}</span>
                    <p class="product-description">${product.description}</p>
                    
                    <a href="https://wa.me/${product.contact.replace(/[^0-9]/g, '')}" 
                       class="product-contact" 
                       target="_blank">
                        <i class="fab fa-whatsapp"></i> Contacter le vendeur
                    </a>
                    
                    <div class="product-footer">
                        <span>
                            <i class="fas fa-map-marker-alt"></i> ${product.city}
                        </span>
                        <span>
                            <i class="fas fa-clock"></i> ${UIManager.formatDate(product.date)}
                        </span>
                    </div>
                </div>
            </div>
        `;
    },
    
    createAdminItem: (product) => {
        return `
            <div class="admin-product-item" data-id="${product.id}">
                <div class="admin-product-info">
                    <h3>${product.title}</h3>
                    <p>💰 $${UIManager.formatPrice(product.price)} • ${product.city}</p>
                    <p>📱 ${product.storage} • ${product.condition}</p>
                    <div class="admin-product-meta">
                        <span>${product.contact}</span>
                        <span>${UIManager.formatDate(product.date)}</span>
                    </div>
                </div>
                <button class="delete-btn" onclick="deleteProduct(${product.id})">
                    <i class="fas fa-trash-alt"></i> Supprimer
                </button>
            </div>
        `;
    }
};

// Affichage des produits
function displayProducts() {
    const container = document.getElementById('products-container');
    if (!container) return;

    // Afficher un loader
    container.innerHTML = '<div class="loading"><i class="fas fa-circle-notch fa-spin"></i> Chargement...</div>';

    setTimeout(() => {
        const searchTerm = document.getElementById('search')?.value || '';
        const sortBy = document.getElementById('sort')?.value || 'date';

        let products = ProductManager.search(searchTerm);
        products = ProductManager.sort(products, sortBy);

        if (products.length === 0) {
            container.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-mobile-alt"></i>
                    <h3>Aucun iPhone trouvé</h3>
                    <p>Essayez avec d'autres termes de recherche</p>
                </div>
            `;
            return;
        }

        container.innerHTML = products.map(UIManager.createProductCard).join('');
    }, 300); // Petit délai pour montrer l'animation
}

// Affichage admin
function displayAdminProducts() {
    const container = document.getElementById('admin-products-list');
    if (!container) return;

    const products = ProductManager.getAll();

    if (products.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <i class="fas fa-box-open"></i>
                <p>Aucune annonce pour le moment</p>
                <p style="font-size: 0.9rem;">Publiez votre premier iPhone !</p>
            </div>
        `;
        return;
    }

    container.innerHTML = products.map(UIManager.createAdminItem).join('');
}

// Ajout d'un produit
function handleAddProduct(event) {
    event.preventDefault();

    // Récupération des données
    const formData = {
        title: document.getElementById('title').value,
        model: document.getElementById('model').value,
        price: parseFloat(document.getElementById('price').value),
        image: document.getElementById('image').value,
        description: document.getElementById('description').value,
        condition: document.getElementById('condition').value,
        city: document.getElementById('city').value,
        storage: document.getElementById('storage').value,
        battery: document.getElementById('battery').value,
        contact: document.getElementById('contact').value
    };

    // Validation
    for (let [key, value] of Object.entries(formData)) {
        if (!value && key !== 'id' && key !== 'date') {
            showNotification(`Veuillez remplir le champ ${key}`, 'warning');
            return;
        }
    }

    if (isNaN(formData.price) || formData.price <= 0) {
        showNotification('Veuillez entrer un prix valide', 'warning');
        return;
    }

    // Validation du contact (format +243)
    const contactRegex = /^\+243\d{9}$/;
    if (!contactRegex.test(formData.contact.replace(/\s/g, ''))) {
        showNotification('Format de contact invalide. Utilisez +243 XXX XXX XXX', 'warning');
        return;
    }

    // Ajout du produit
    ProductManager.add(formData);
    
    // Reset du formulaire
    event.target.reset();
    
    // Mise à jour de l'affichage
    displayAdminProducts();
    
    // Notification
    showNotification('✅ iPhone publié avec succès !', 'success');
}

// Suppression d'un produit
window.deleteProduct = function(id) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette annonce ?')) {
        ProductManager.delete(id);
        displayAdminProducts();
        showNotification('📱 Annonce supprimée', 'info');
    }
};

// Système de notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    let icon = 'check-circle';
    if (type === 'info') icon = 'info-circle';
    if (type === 'warning') icon = 'exclamation-triangle';
    
    notification.innerHTML = `
        <i class="fas fa-${icon}"></i>
        ${message}
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', () => {
    // Initialiser les données
    initializeStore();
    
    // Afficher les produits
    displayProducts();
    displayAdminProducts();
    
    // Recherche avec debounce
    const searchInput = document.getElementById('search');
    if (searchInput) {
        let timeout;
        searchInput.addEventListener('input', () => {
            clearTimeout(timeout);
            timeout = setTimeout(displayProducts, 300);
        });
    }
    
    // Tri
    const sortSelect = document.getElementById('sort');
    if (sortSelect) {
        sortSelect.addEventListener('change', displayProducts);
    }
    
    // Formulaire d'ajout
    const productForm = document.getElementById('product-form');
    if (productForm) {
        productForm.addEventListener('submit', handleAddProduct);
    }
});

// Sauvegarde automatique (optionnel)
window.addEventListener('beforeunload', () => {
    // Sauvegarde des brouillons si nécessaire
    console.log('iPhoneCongo - Données sauvegardées');
});
