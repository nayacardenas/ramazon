<<<<<<< HEAD
(function(){
    $(document).ready(function(){
        $('.alt-form').click(function(){
            $('.form-content').animate({
                height: "toggle",
                opacity: 'toggle'
            }, 600);
        });
        /*
        let formRegistro = document.getElementsByName('form-input');
        for (let i = 0; i < formRegistro.length; i++) {
            formRegistro[i].addEventListener('blur', function(){
                if (this.value.length >= 1) {
                    this.nextElementSibling.classList.add('active');
                    this.nextElementSibling.classList.remove('error');
                } else if (this.value.length = " ") {
                    this.nextElementSibling.classList.add('error');
                    this.nextElementSibling.classList.remove('active');
                } else {
                    this.nextElementSibling.classList.remove('active');
                }
            })
        }
        */

    })
}())
=======
function validar() {
    var contieneValorCatcha = 776179;
    var catcha = document.getElementById("catcha").value;
function cambiarClase(elIdSellama) {
    const cambio = document.getElementById(elIdSellama).className = 'error';
    return cambio;
}
if (catcha === "") {
    cambiarClase("errorCatcha");
    return false;
} else if (catcha != contieneValorCatcha) {
    cambiarClase("errorCatchaIngresoErroneo");
    return false;
} else if (catcha === contieneValorCatcha) {
    cambiarClase("okCatchaOk");
    return true;
    //  setTimeout(esCorrecto,5000);

}
}
>>>>>>> 83c1ca62c609e70a7216466d916458688265629d
