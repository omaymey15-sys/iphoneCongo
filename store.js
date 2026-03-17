// ==================== VARIABLES GLOBALES ====================
let currentHourFilter = 24;
let currentCityFilter = '';
let currentSearchTerm = '';
let allStores = [];
let allProducts = {};

document.addEventListener('DOMContentLoaded', function() {
    if (typeof getStores === 'function') {
        allStores = getStores();
        allStores.forEach(s => allProducts[s.id] = getStoreProducts(s.id));
    }
    filterAndDisplayStores();

    document.getElementById('searchStore')?.addEventListener('input', filterStores);
    document.getElementById('cityFilter')?.addEventListener('input', filterStores);
});

function isProductInTimeRange(dateString, hours) {
    if (!dateString) return true;
    const diffHours = (new Date() - new Date(dateString)) / (1000 * 60 * 60);
    return diffHours <= hours;
}

window.setHourFilter = function(hours) {
    currentHourFilter = hours;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
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

function filterAndDisplayStores() {
    let filtered = allStores;
    if (currentCityFilter) {
        filtered = filtered.filter(s => s.city && s.city.toLowerCase().includes(currentCityFilter));
    }
    if (currentSearchTerm) {
        filtered = filtered.filter(s => {
            if (s.name.toLowerCase().includes(currentSearchTerm)) return true;
            const prods = allProducts[s.id] || [];
            return prods.some(p => p.title.toLowerCase().includes(currentSearchTerm));
        });
    }
    document.getElementById('resultsCount').textContent = `${filtered.length} store(s) trouvé(s)`;
    displayStores(filtered);
}

function displayStores(stores) {
    const container = document.getElementById('storesList');
    if (!container) return;
    if (stores.length === 0) {
        container.innerHTML = '<div class="no-results"><i class="fas fa-store"></i><p>Aucun store trouvé</p><p class="small">Soyez le premier à créer votre store !</p></div>';
        return;
    }
    container.innerHTML = stores.map(store => {
        const products = allProducts[store.id] || [];
        const filteredProducts = products.filter(p => isProductInTimeRange(p.date, currentHourFilter)).slice(0, 15);
        return createStoreBlock(store, filteredProducts, products.length);
    }).join('');
}

function createStoreBlock(store, products, totalCount) {
    const hasMore = totalCount > products.length;
    return `
        <div class="store-block" onclick="goToStore('${store.pseudo}')">
            <div class="store-header">
                <div class="store-info">
                    <img src="${store.logo || 'https://via.placeholder.com/48x48?text=Store'}" alt="${store.name}" class="store-mini-logo" loading="lazy">
                    <div>
                        <h4>${store.name}</h4>
                        <p><i class="fas fa-map-marker-alt"></i> ${store.city || 'Ville non spécifiée'} • ${totalCount} produit${totalCount>1?'s':''}</p>
                    </div>
                </div>
                <span class="view-store-link" onclick="event.stopPropagation(); goToStore('${store.pseudo}')">Voir tout →</span>
            </div>
            <div class="horiz-scroll" onclick="event.stopPropagation()">
                ${products.map(p => createProductCard(p, store)).join('')}
                ${hasMore ? `<a href="stores/store-view.html?store=${store.pseudo}" class="more-link" style="min-width:60px; display:flex; align-items:center; justify-content:center; background:var(--light); border-radius:var(--radius-md); text-decoration:none; color:var(--primary); font-weight:600;">+${totalCount-products.length}</a>` : ''}
            </div>
        </div>
    `;
}

function createProductCard(product, store) {
    const isNew = (new Date() - new Date(product.date)) / (1000 * 60 * 60) <= 48;
    const cleanPhone = store.whatsapp ? store.whatsapp.replace(/[^0-9]/g, '') : '243972685669';
    const message = `Bonjour *${store.name}*, je suis intéressé par *${product.title}* à $${product.price}.\n\n📸 Photo : ${product.image}\n📝 Description : ${product.description || ''}\n📍 Ville : ${store.city}`;
    const whatsappLink = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
    const telLink = `tel:${cleanPhone}`;
    
    return `
        <div class="horiz-card">
            ${isNew ? '<span class="new-badge">✨ Nouveau</span>' : ''}
            <img src="${product.image}" alt="${product.title}" loading="lazy">
            <div class="info">
                <div class="title">${product.title}</div>
                <div class="price">${product.price}</div>
                <div class="product-actions">
                    <a href="${whatsappLink}" class="btn-mini whatsapp" target="_blank"><i class="fab fa-whatsapp"></i></a>
                    <a href="${telLink}" class="btn-mini call"><i class="fas fa-phone"></i></a>
                </div>
            </div>
        </div>
    `;
}

window.goToStore = function(pseudo) {
    if (pseudo) window.location.href = `stores/store-view.html?store=${pseudo}`;
};

window.toggleSearch = function() {
    const sb = document.getElementById('searchBar');
    sb.style.display = sb.style.display === 'none' ? 'flex' : 'none';
};
