// Product data
const products = [
    {
        id: 1,
        name: 'Wireless Headphones Premium',
        price: 'Rp 899.000',
        image: 'images/product-headphones-black.jpg',
        description: 'Headphone nirkabel dengan kualitas suara premium dan noise cancellation'
    },
    {
        id: 2,
        name: 'Elegant Silver Watch',
        price: 'Rp 1.299.000',
        image: 'images/product-watch-silver.jpg',
        description: 'Jam tangan elegan dengan tali kulit asli dan desain klasik'
    },
    {
        id: 3,
        name: 'Navy Blue Backpack',
        price: 'Rp 549.000',
        image: 'images/product-backpack-blue.jpg',
        description: 'Tas ransel stylish dengan banyak kompartemen dan bahan tahan air'
    },
    {
        id: 4,
        name: 'Modern Smartphone',
        price: 'Rp 4.999.000',
        image: 'images/product-smartphone-modern.jpg',
        description: 'Smartphone canggih dengan kamera berkualitas tinggi dan performa cepat'
    },
    {
        id: 5,
        name: 'Premium Sunglasses',
        price: 'Rp 699.000',
        image: 'images/product-sunglasses-black.jpg',
        description: 'Kacamata hitam premium dengan perlindungan UV dan desain modern'
    },
    {
        id: 6,
        name: 'Running Shoes Comfort',
        price: 'Rp 799.000',
        image: 'images/product-shoes-running.jpg',
        description: 'Sepatu lari nyaman dengan teknologi cushioning dan desain ergonomis'
    }
];

// Render products
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <div class="product-image-wrapper">
                <img src="${product.image}" alt="${product.name}" class="product-image">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <p class="product-price">${product.price}</p>
            </div>
        `;
        
        productCard.addEventListener('click', () => {
            console.log(`Product clicked: ${product.name}`);
            // You can add more functionality here, like opening a modal or redirecting
        });
        
        productsGrid.appendChild(productCard);
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('Products section loaded!');
    renderProducts();
});