$(document).ready(function() {

    /* Scroll hire me button to contact page */
    $('.hire-me').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        return false;
    });

    /* For Bootstrap current state on portfolio sorting */
    $('ul.nav-pills li').on('click', function() {
        $('ul.nav-pills li.active').removeClass('active');
        $(this).addClass('active');
    });

    /* portfolio mixitup */
    $("#grid").isotope({
        filter: function() {
            var name = $('.grid-wrapper').find('.name').text();
            return name.match(/ium$/);
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
        var $container = $('.grid-wrapper');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });

        $('.grid-controls li a').on('click', function() {
            $('.grid-controls .current').removeClass('current');
            $(this).addClass('current');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
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