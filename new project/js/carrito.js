$(document).ready(function(){
    const cartItems = [];
    var cartTotal = 0;

    function addItems(){
        $('.btn').click(function(){
            // Obtén la información del producto del HTML
            var productName = $(this).closest('.box').find('.product-name').text();
            var productPrice = parseFloat($(this).closest('.box').find('.price').text().replace('$', ''));

            var product = {
                name: productName,
                price: productPrice
            };

            cartItems.push(product);
            cartTotal += productPrice;

            // Agregar el producto al carrito de compra en el HTML
            var cartItemHTML = '<div class="cart-item">' +
                                   '<span class="fas fa-times"></span>' +
                                   '<img src="../img/Logo Rmazon 2.0.jpeg" alt="">' +
                                   '<div class="content">' +
                                       '<h3>' + productName + '</h3>' +
                                       '<div class="price">' + productPrice.toFixed(2) + '</div>' +
                                   '</div>' +
                               '</div>';

            $('.cart-items-container').append(cartItemHTML);

            console.log(cartItems);
            console.log("Carrito Total: " + cartTotal);
        });
    }

    function formatPrice(price) {
        // Puedes aplicar el formato deseado al precio aquí
        // Por ejemplo, agregar el símbolo de dólar, separadores de miles, etc.
        return '$' + price.toFixed(2);
    }

    addItems();

    let cartItem = document.querySelector('.cart-items-container');

    document.querySelector('#cart-btn').onclick =()=>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    } 
});
