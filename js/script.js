$(document).ready(function() {
    $(window).on('scroll', function() {
      // Récupère la hauteur de défilement
      var scrollTop = $(window).scrollTop();

      // Définir la hauteur de défilement après laquelle la classe est ajoutée
      var triggerHeight = 100; // Changez cette valeur pour ajuster le point de déclenchement

      if (scrollTop > triggerHeight) {
        $('.header').addClass('background-transparent');
      } else {
        $('.header').removeClass('background-transparent');
      }
    });



    $('.change-theme').on('click', function() {
        var $moonIcon = $('.bx-moon');
        var $sunIcon = $('.bx-sun');
        var $body = $('body');
    
        // Si le SVG de la lune est visible, on le cache et montre le soleil
        if ($moonIcon.is(':visible')) {
          $moonIcon.addClass('hide').removeClass('show');
          $sunIcon.addClass('show').removeClass('hide');
          $body.addClass('light-theme');

          
          // Délai pour assurer que l'animation est jouée avant le changement de display
          setTimeout(function() {
            $moonIcon.hide();
            $sunIcon.show();
          }, 500); // Doit correspondre au temps de transition
        } else {
          // Si le SVG du soleil est visible, on le cache et montre la lune
          $sunIcon.addClass('hide').removeClass('show');
          $moonIcon.addClass('show').removeClass('hide');
            $body.removeClass('light-theme');
          
          setTimeout(function() {
            $sunIcon.hide();
            $moonIcon.show();
          }, 500);
        }
      });
  });