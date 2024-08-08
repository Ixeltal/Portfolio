/* Import jQuery */
jQuery(document).ready(function () {
  var body = jQuery(document.body);
  var button = jQuery("svg");
  var line = jQuery("line");

  button.click(function () {
      if (jQuery(document.body).hasClass("menu-open")) {
          body.removeClass("menu-open");
          return;
      }
      body.addClass("menu-open");
  });
});

const menuHamburger = document.querySelector(".menu-hamburger")
const navLinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})



$(document).ready(function() {
  $(window).on('scroll', function() {
    // Récupère la hauteur de défilement
    var scrollTop = $(window).scrollTop();

    // Définir la hauteur de défilement après laquelle la classe est ajoutée
    var triggerHeight = 100; // Changez cette valeur pour ajuster le point de déclenchement

    if (scrollTop > triggerHeight) {
      $('.navbar').addClass('background-transparent');
    } else {
      $('.navbar').removeClass('background-transparent');
    }
  });



  $('.change-theme').on('click', function() {
      var $moonIcon = $('.bx-moon');
      var $sunIcon = $('.bx-sun');
      var $body = $('body');
  
      // Basculer les classes d'affichage et d'animation
      $moonIcon.toggleClass('hide show');
      $sunIcon.toggleClass('hide show');
      $body.toggleClass('light-theme');
  });
});


$('.menu-hamburger').on('click', function() {
  $(".navbar").toggleClass('background');
});
