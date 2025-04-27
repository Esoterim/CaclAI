const products = [
    { id: 'buy_btn_1RHZVhAhYolfbqwSUPzbLaIO' },
    { id: 'another_product_id_here' },
    { id: 'third_product_id_here' }
];

let currentIndex = 0;

function createProductElement(productId) {
    const div = document.createElement('div');
    div.className = 'product-item';
    div.innerHTML = `
        <stripe-buy-button
        buy-button-id="buy_btn_1RIYT3AhYolfbqwS8OlulOIY"
        publishable-key="pk_live_51RGmeJAhYolfbqwSlj09SZQBqvAo9pkP6n4evQOsfwDSy1TYnGE2K5rPIH6M4XIlsubr1IbK4UD1qLa9VGzwcN0m00qgDUh6oM"
        >
        </stripe-buy-button>
    `;
    return div;
}

function loadStripeScript() {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://js.stripe.com/v3/buy-button.js';
    document.head.appendChild(script);
}

function updateSlider() {
    const slider = document.querySelector('.product-slider');
    const currentProduct = slider.querySelector('.active');
    
    if (currentProduct) {
        currentProduct.classList.remove('active');
        currentProduct.classList.add('prev');
        setTimeout(() => currentProduct.remove(), 600);
    }

    const newProduct = createProductElement(products[currentIndex].id);
    newProduct.classList.add('active');
    slider.appendChild(newProduct);
    
    loadStripeScript();
}

function cycleProduct(direction) {
    currentIndex += direction;
    
    if (currentIndex >= products.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = products.length - 1;
    
    updateSlider();
}


// Initialize first product
updateSlider();