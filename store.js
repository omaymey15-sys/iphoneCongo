// ==================== VARIABLES GLOBALES ====================
let currentHourFilter = 24;
let currentCityFilter = '';

// ==================== FONCTIONS ====================
function isProductInTimeRange(dateString, hours) {
    const diffHours = (new Date() - new Date(dateString)) / (1000 * 60 * 60);
    return diffHours <= hours;
}

window.setHourFilter = function(hours) {
    currentHourFilter = hours;
    
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    filterStores();
};

window.filterStores = function() {
    const searchTerm = document.getElementById('searchStore')?.value.toLowerCase() || '';
    currentCityFilter = document.getElementById('cityFilter')?.value.toLowerCase() || '';
    
    filterAndDisplay();
};

function filterAndDisplay() {
    const stores = getStores();
    const searchTerm = document.getElementById('searchStore')?.value.toLowerCase() || '';
    
    // Filtrer les stores
    let filteredStores = stores;
    
    if (currentCityFilter) {
        filteredStores = stores.filter(s => 
            s.city.toLowerCase().includes(currentCityFilter)
        );
    }
    
    if (searchTerm) {
        filteredStores = filteredStores.filter(store => {
            if (store.name.toLowerCase().includes(searchTerm)) return true;
            
            const products = getStoreProducts(store.id);
            return products.some(p => p.title.toLowerCase().includes(searchTerm));
        });
    }
    
    // Mettre à jour compteur
    document.getElementById('resultsCount').innerHTML = 
        `${filteredStores.length} store${filteredStores.length > 1 ? 's' : ''} trouvé${filteredStores.length > 1 ? 's' : ''}`;
    
    // Afficher
    displayStores(filteredStores);
}

function displayStores(stores) {
    const container = document.getElementById('storesList');
    if (!container) return;
    
    if (stores.length === 0) {
        container.innerHTML = '<p class="no-results">Aucun store trouvé</p>';
        return;
    }
    
    container.innerHTML = stores.map(store => {
        const products = getStoreProducts(store.id);
        const filteredProducts = products.filter(p => 
            isProductInTimeRange(p.date, currentHourFilter)
        );
        
        return `
            <div class="store-block">
                <div class="store-header">
                    <div class="store-info">
                        <img src="${store.logo}" alt="${store.name}" class="store-mini-logo" onerror="this.src='https://via.placeholder.com/40?text=Store'">
                        <div>
                            <h4>${store.name}</h4>
                            <p>${store.city} • ${filteredProducts.length} produit${filteredProducts.length > 1 ? 's' : ''}</p>
                        </div>
                    </div>
                    <a href="stores/store-view.html?store=${store.pseudo}" class="view-store-link">Voir tout →</a>
                </div>
                
                <div class="horiz-scroll">
                    ${filteredProducts.map(product => `
                        <div class="horiz-card">
                            ${isProductInTimeRange(product.date, 24) ? '<span class="new-badge">✨ Nouveau</span>' : ''}
                            <img src="${product.image}" alt="${product.title}" onerror="this.src='https://via.placeholder.com/130x90?text=Image'">
                            <div class="info">
                                <div class="title">${product.title}</div>
                                <div class="price">${product.price}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    filterAndDisplay();
    document.getElementById('searchStore')?.addEventListener('input', filterStores);
    document.getElementById('cityFilter')?.addEventListener('input', filterStores);
});
