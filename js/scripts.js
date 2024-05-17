function addToCart(productName, productPrice) {
    var currentCartCount = parseInt(document.querySelector('.cart-badge').innerText);
    
    document.querySelector('.cart-badge').innerText = currentCartCount + 1;
    
    alert("Đã thêm " + productName + " vào giỏ hàng. Giá: " + productPrice);
    
    return false;
}
// Function to add item to cart
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let item = { name: name, price: price, image: '' }; // You may add more properties like image
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
}

// Function to update cart badge
function updateCartBadge() {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let cartBadge = document.querySelector('.cart-badge');
    if (cartBadge) {
        cartBadge.textContent = cartItems.length;
    }
}



// Update cart badge on page load
window.onload = updateCartBadge;