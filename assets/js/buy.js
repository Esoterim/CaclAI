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
            buy-button-id="${productId}"
            publishable-key="pk_test_51RGmeJAhYolfbqwS42ODcSAFCVxm5MeaSbqFSRca3yxmXRtJpefrhFIblIsffG0HYI5Yk4sWfMiK3kYDPpM687Tv00sukJWQuQ">
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