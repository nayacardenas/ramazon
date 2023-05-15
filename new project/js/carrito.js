$(document).ready(function(){
    const cartItems = [];
    var cartTotal = 0;

    function addItems(){
        $('.btn').click(function(){
            var productImage = $(this).closest('.box').find('.product-image').attr('src');
            var productName = $(this).closest('.box').find('.product-name').text();
            var productPrice = parseFloat($(this).closest('.box').find('.price').text().replace('$', ''));

            var product = {
                name: productName,
                price: productPrice,
                image:productImage
            };

            cartItems.push(product);
            cartTotal += productPrice;

            // Agregar el producto al carrito de compra en el HTML
            var cartItemHTML = '<div class="cart-item">' +
                                   '<button class="fas fa-times"></button>' +
                                   '<img src="'+productImage +'" alt="">' +
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
