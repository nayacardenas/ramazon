$(document).ready(function() {
    function filterItems() {
        const selectedCategories = [];
        const selectedLanguages = [];
        const selectedAnio = [];
        const selectedPrecio = [];
        
        $("input[type=checkbox][data-category]").each(function() {
            if (this.checked) {
                selectedCategories.push($(this).attr("data-category"));
            }
        });
        
        $("input[type=checkbox][data-language]").each(function() {
            if (this.checked) {
                selectedLanguages.push($(this).attr("data-language"));
            }
        });

        $("input[type=checkbox][data-anio]").each(function(){
            if (this.checked){
                selectedAnio.push($(this).attr("data-anio"))
            }

        });

        $("input[type = checkbox][data-precio]").each(function(){
            if (this.checked){
                selectedPrecio.push($(this).attr("data-precio"))
            }
        });
        
        $(".producto").each(function() {
            const itemCategory = $(this).attr("data-category");
            const itemLanguage = $(this).attr("data-language");
            const itemAnio = $(this).attr("data-anio");
            const itemPrecio = $(this).attr("data-precio");
            
            if ((selectedCategories.length === 0 ||  selectedCategories.includes(itemCategory)) &&
                (selectedLanguages.length === 0  ||  selectedLanguages.includes(itemLanguage)) &&
                (selectedAnio.length === 0       ||  selectedAnio.includes(itemAnio)) &&
                (selectedPrecio.length === 0     ||  selectedPrecio.includes(itemPrecio))){
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }

    $("input[type=checkbox]").on("change", filterItems);
});