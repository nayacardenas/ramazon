$(document).ready(function(){
    let cartItems = [];
    var cartTotal = 0;

    function addItems(){
        $('.btn').click(function(){
            var productImage = $(this).closest('.box').find('.product-image').attr('src'); //busca dentro container "box" la clase produc-img y saca el valor del atr src
            var productName = $(this).closest('.box').find('.product-name').text(); //lo mismo pero saca el texto 
            var productPrice = parseFloat($(this).closest('.box').find('.price').text().replace('$', '')); //busca dentro de "box" encuentra price quita "$" y qda como numero flotante
            // se crea un objeto llamado product con los atributos obtenidos
            var product = {
                name: productName,
                price: productPrice,
                image:productImage
            };
            //se agrega al array
            cartItems.push(product);
            //se va sumando al total
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
            $('.carrito-total').before(cartItemHTML);

            console.log(cartItems);
            console.log("Carrito Total: " + cartTotal);
            $('.cart-total').text(formatPrice(cartTotal));
        });
    }

    function comprar(){
        $('.btn-buy').click(function(){
            alert('su compra ha sido realizada');

            $('.cart-item').empty();

            cartItems.length = 0;
            cartTotal = 0;
            $('.cart-total').text(formatPrice(cartTotal));
            
        });
       
    }

    function quitItem() {
        $('.cart-container').on('click', '.fas.fa-times', function() {
            //obtiene el elemento del carrito que se eliminara
            var cartItem = $(this).closest('.cart-item');
    
            //obtiene el nombre del producto para elimnar 
            var productName = cartItem.find('h3').text();
    
            //filtra el array cartItems y excluye el objeto con el nombre del producto a eliminar
            cartItems = cartItems.filter(function(item) {
                return item.name !== productName;
            });
    
            //obtiene el precio del producto q elemina 
            var productPrice = parseFloat(cartItem.find('.price').text().replace('$', ''));
    
            //resta el precio del producto eliminado del total del carrito
            cartTotal -= productPrice;
    
            //elimina el elemento del carrito del HTML
            cartItem.remove();
            $('.cart-total').text(formatPrice(cartTotal)); // esto hace que se vaya actualizando en pantalla
    
            console.log(cartItems);
            console.log("Carrito Total: $" + cartTotal.toFixed(2));
        });
    }
    
    
 

    

       
    

    function formatPrice(price) {
        return '$' + price.toFixed(2);
    }
    quitItem();
    comprar();
    addItems();



    
});
 // Esto es lo del navbar 
document.addEventListener('DOMContentLoaded', function() {
    let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick =()=>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick =()=>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-container');

document.querySelector('#cart-btn').onclick =()=>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
} 

window.onscroll = ()=>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
  });
