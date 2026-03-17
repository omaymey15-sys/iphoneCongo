if (!sessionStorage.getItem('adminLoggedIn')) window.location.href = 'login.html';

const OFFICIAL_KEY = 'iphonecongo_official';

function loadProducts() { return JSON.parse(localStorage.getItem(OFFICIAL_KEY)) || []; }
function saveProducts(products) { localStorage.setItem(OFFICIAL_KEY, JSON.stringify(products)); }

function loadSection(section) {
    let html = '';
    if (section === 'dashboard') {
        const products = loadProducts();
        html = `<h2>Dashboard</h2>
            <p>Total produits: ${products.length}</p>
            <table class="admin-table">
                <tr><th>ID</th><th>Titre</th><th>Prix</th><th>Actions</th></tr>
                ${products.map(p => `<tr><td>${p.id}</td><td>${p.title}</td><td>$${p.price}</td><td><button onclick="deleteProduct(${p.id})">Supprimer</button></td></tr>`).join('')}
            </table>`;
    } else if (section === 'add') {
        html = `<h2>Ajouter un produit</h2>
            <form onsubmit="addProduct(event)">
                <div class="form-group"><label>Titre</label><input type="text" id="title" required></div>
                <div class="form-group"><label>Prix</label><input type="number" id="price" required></div>
                <div class="form-group"><label>Image URL</label><input type="url" id="image" required></div>
                <div class="form-group"><label>Catégorie</label>
                    <select id="category"><option value="iphone">iPhone</option><option value="samsung">Samsung</option><option value="accessoire">Accessoire</option></select>
                </div>
                <div class="form-group"><label>Description</label><textarea id="desc"></textarea></div>
                <button type="submit" class="btn-add-store">Ajouter</button>
            </form>`;
    }
    document.getElementById('adminMain').innerHTML = html;
}

window.addProduct = function(e) {
    e.preventDefault();
    const products = loadProducts();
    products.unshift({
        id: Date.now(),
        category: document.getElementById('category').value,
        title: document.getElementById('title').value,
        price: parseFloat(document.getElementById('price').value),
        image: document.getElementById('image').value,
        description: document.getElementById('desc').value,
        store: 'Lubumbashi, Kolwezi',
        contact: '243972685669',
        date: new Date().toISOString()
    });
    saveProducts(products);
    loadSection('dashboard');
};

window.deleteProduct = function(id) {
    if (confirm('Supprimer ?')) {
        saveProducts(loadProducts().filter(p => p.id !== id));
        loadSection('dashboard');
    }
};

window.logout = function() { sessionStorage.removeItem('adminLoggedIn'); window.location.href = 'login.html'; };

loadSection('dashboard');
