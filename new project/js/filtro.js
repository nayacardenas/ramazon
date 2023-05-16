$(document).ready(function(){
    function filtrar() {
        // obtiene los productos seleccionados
        var selectedCategories = [];
        $('.category-checkbox:checked').each(function() {
          selectedCategories.push($(this).val());
        });
      
        // Filtra los productos por categoría
        if (selectedCategories.length === 0) {
          $('.box').show();
        } else {
          
          $('.box').hide();
          selectedCategories.forEach(function(category) {
            $('.box[data-category="' + category + '"]').show();
          });
        }
      }
      
    
      $('.category-checkbox').change(function() {
        filtrar();
      });




})

  
