// ==================== VARIABLES GLOBALES ====================
let currentHourFilter = 24;
let currentCityFilter = '';
let currentSearchTerm = '';
let allStores = [];
let allProducts = {};

// ==================== INITIALISATION ====================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page stores chargée');
    
    // Charger les stores depuis stores.js
    if (typeof getStores === 'function') {
        allStores = getStores();
    } else {
        console.error('getStores non disponible');
        allStores = [];
    }
    
    // Charger les produits
    if (typeof getStoreProducts === 'function') {
        // Récupérer les produits pour chaque store
        allStores.forEach(store => {
            allProducts[store.id] = getStoreProducts(store.id);
        });
    }
    
    // Afficher les stores
    filterAndDisplayStores();
    
    // Initialiser les écouteurs d'événements
    document.getElementById('searchStore')?.addEventListener('input', filterStores);
    document.getElementById('cityFilter')?.addEventListener('input', filterStores);
});

// ==================== FONCTIONS DE FILTRAGE ====================
function isProductInTimeRange(dateString, hours) {
    if (!dateString) return true;
    const productDate = new Date(dateString);
    const now = new Date();
    const diffHours = (now - productDate) / (1000 * 60 * 60);
    return diffHours <= hours;
}

window.setHourFilter = function(hours) {
    currentHourFilter = hours;
    
    // Mettre à jour l'affichage des chips
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.classList.remove('active');
    });
    event.target.classList.add('active');
    
    filterAndDisplayStores();
};

window.filterStores = function() {
    currentSearchTerm = document.getElementById('searchStore')?.value.toLowerCase().trim() || '';
    currentCityFilter = document.getElementById('cityFilter')?.value.toLowerCase().trim() || '';
    filterAndDisplayStores();
};

window.clearSearch = function() {
    document.getElementById('searchStore').value = '';
    currentSearchTerm = '';
    filterAndDisplayStores();
};

window.focusSearch = function() {
    document.getElementById('searchStore').focus();
};

// ==================== FILTRAGE PRINCIPAL ====================
function filterAndDisplayStores() {
    // Filtrer les stores par ville
    let filteredStores = allStores;
    
    if (currentCityFilter) {
        filteredStores = allStores.filter(store => 
            store.city && store.city.toLowerCase().includes(currentCityFilter)
        );
    }
    
    // Filtrer par recherche
    if (currentSearchTerm) {
        filteredStores = filteredStores.filter(store => {
            // Recherche dans le nom du store
            if (store.name && store.name.toLowerCase().includes(currentSearchTerm)) {
                return true;
            }
            
            // Recherche dans les produits du store
            const products = allProducts[store.id] || [];
            return products.some(p => 
                p.title && p.title.toLowerCase().includes(currentSearchTerm)
            );
        });
    }
    
    // Mettre à jour le compteur
    updateResultsCount(filteredStores.length);
    
    // Afficher les stores
    displayStores(filteredStores);
}

function updateResultsCount(count) {
    const resultsCountEl = document.getElementById('resultsCount');
    if (resultsCountEl) {
        const text = count === 0 ? 'Aucun store trouvé' :
                    count === 1 ? '1 store trouvé' :
                    `${count} stores trouvés`;
        resultsCountEl.textContent = text;
    }
    
    // Afficher/masquer le message "aucun résultat"
    const noResultsEl = document.getElementById('noResults');
    if (noResultsEl) {
        noResultsEl.style.display = count === 0 ? 'block' : 'none';
    }
}

// ==================== AFFICHAGE DES STORES ====================
function displayStores(stores) {
    const storesListEl = document.getElementById('storesList');
    if (!storesListEl) return;
    
    if (stores.length === 0) {
        storesListEl.innerHTML = '';
        return;
    }
    
    let html = '';
    
    stores.forEach(store => {
        const products = allProducts[store.id] || [];
        
        // Filtrer les produits par heure
        const filteredProducts = products.filter(p => 
            isProductInTimeRange(p.date, currentHourFilter)
        );
        
        // Limiter à 15 produits maximum pour l'affichage horizontal
        const displayProducts = filteredProducts.slice(0, 15);
        
        html += createStoreBlock(store, displayProducts, filteredProducts.length);
    });
    
    storesListEl.innerHTML = html;
}

function createStoreBlock(store, products, totalCount) {
    const hasMore = totalCount > products.length;
    
    return `
        <div class="store-block" data-store-id="${store.id}">
            <div class="store-header">
                <div class="store-info" onclick="goToStore('${store.pseudo}')">
                    <img src="${store.logo || 'https://via.placeholder.com/48x48?text=Store'}" 
                         alt="${store.name}" 
                         class="store-mini-logo"
                         onerror="this.src='https://via.placeholder.com/48x48?text=Store'">
                    <div>
                        <h4>${store.name}</h4>
                        <p>
                            <i class="fas fa-map-marker-alt"></i> ${store.city || 'Ville non spécifiée'}
                            <span class="product-count"> • ${totalCount} produit${totalCount > 1 ? 's' : ''}</span>
                        </p>
                    </div>
                </div>
                <a href="stores/store-view.html?store=${store.pseudo}" class="view-store-link">
                    Voir tout <i class="fas fa-chevron-right"></i>
                </a>
            </div>
            
            <div class="horiz-scroll">
                ${products.map(product => createProductCard(product, store)).join('')}
                ${hasMore ? `
                    <a href="stores/store-view.html?store=${store.pseudo}" class="more-card">
                        <i class="fas fa-plus-circle"></i>
                        <span>Voir +${totalCount - products.length}</span>
                    </a>
                ` : ''}
            </div>
        </div>
    `;
}

function createProductCard(product, store) {
    const isNew = (new Date() - new Date(product.date)) / (1000 * 60 * 60) <= 48;
    const priceFormatted = product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    
    return `
        <div class="horiz-card" onclick="contactStore('${store.whatsapp}', '${product.title}', ${product.price})">
            ${isNew ? '<span class="new-badge">✨ Nouveau</span>' : ''}
            <img src="${product.image}" alt="${product.title}" 
                 onerror="this.src='https://via.placeholder.com/150x120?text=Produit'">
            <div class="info">
                <div class="title">${product.title}</div>
                <div class="price">${priceFormatted}</div>
            </div>
        </div>
    `;
}

// ==================== ACTIONS ====================
window.goToStore = function(pseudo) {
    if (pseudo) {
        window.location.href = `stores/store-view.html?store=${pseudo}`;
    }
};

window.contactStore = function(whatsapp, title, price) {
    if (!whatsapp) {
        alert('Numéro WhatsApp non disponible');
        return;
    }
    
    const cleanNumber = whatsapp.replace(/[^0-9]/g, '');
    const message = encodeURIComponent(
        `Bonjour, je suis intéressé par ${title} à $${price}. Est-il toujours disponible ?`
    );
    
    window.open(`https://wa.me/${cleanNumber}?text=${message}`, '_blank');
};

window.toggleSort = function() {
    // Option de tri simple (par nom ou par nombre de produits)
    const options = ['nom', 'produits'];
    // À implémenter selon les besoins
};

// ==================== MISE À JOUR PÉRIODIQUE ====================
// Rafraîchir les données toutes les 30 secondes
setInterval(function() {
    if (typeof getStores === 'function') {
        allStores = getStores();
        
        allStores.forEach(store => {
            if (typeof getStoreProducts === 'function') {
                allProducts[store.id] = getStoreProducts(store.id);
            }
        });
        
        filterAndDisplayStores();
    }
}, 30000);
