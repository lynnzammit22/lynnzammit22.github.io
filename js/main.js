function updateActiveNavItem() {
  const hash = window.location.hash;
  $('.nav-item.active').removeClass('active');
  $(`a.nav-link[href="${hash}"]`).closest('.nav-item').addClass('active');
  $('.navbar-toggler').attr('aria-expanded', 'false').toggleClass('collapsed', true); 
  $('.navbar-collapse').collapse('hide'); 
}

$(window).on('hashchange', updateActiveNavItem);

$(document).ready(function() {

  updateActiveNavItem();

  $('.nav-link').on('click', function() {
    updateActiveNavItem();
  });

  /* For Bootstrap current state on portfolio sorting */
  $('ul.nav-pills li').on('click', function() {
    $('ul.nav-pills li.active').removeClass('active');
    $(this).addClass('active');
  });

  /* portfolio mixitup */
  $("#grid").isotope({
    filter: function() {
      const name = $('.grid-wrapper .name').text();
      return name.endsWith('ium');
    }
  })

  /* welcome page */
  $('#page-welcome').vegas({
    overlay: true,
    transition: 'fade',
    transitionDuration: 4000,
    delay: 10000,
    animation: 'random',
    animationDuration: 20000,
    slides: [{
      src: './images/portfolio/photos/34.JPG'
    }]
  });

  /* isotope filtering */
  $(window).on('load', function() {
    const $container = $('.grid-wrapper');
    $container.isotope({
      filter: '*',
      masonry: {
        isFitWidth: true
      }
    });

    $('.grid-controls li a').on('click', function(event) {
      event.preventDefault();
      $('.grid-controls .current').removeClass('current');
      $(this).addClass('current');
      const selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
      });
    });
  });

  /* Magnific Popup */
  $('.grid-wrapper').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    }
  });

});
