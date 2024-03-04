$(document).ready(function () {

    $('.menu__open, .offcanvas-overlay').click( function (){ 
        $('.mobile__menu, .offcanvas-overlay').addClass('active');   
     }); 
    
     $('.mobile__menu, .menu__close, .offcanvas-overlay').click( function (){ 
        $('.mobile__menu, .offcanvas-overlay').removeClass('active');   
      }); 
    
    
    // $('.main__menu').singlePageNav({
    //     offset: $('.main__menu').outerHeight(),
    //     threshold: 120,
    //     speed: 1000,
    //     currentClass: 'active',
    //     easing: 'swing',
    //     filter: ':not(.external)',
    //     beforeStart: function() {
    //     console.log('begin scrolling');
    //     },
    //     onComplete: function() {
    //     console.log('done scrolling');
    //     }
    // });

    // $('a[href^="#"]').on('click', function(event) {
    //     event.preventDefault();
  
    //     var target = this.hash;
    //     $('html, body').animate({
    //       scrollTop: $(target).offset().top
    //     }, 600, function(){
    //       window.location.hash = target;
    //     });
    //   });
  
    //   // Add scroll event handler to highlight the active link based on scroll position
    //   $(window).on('scroll', function() {
    //     // Get the current scroll position
    //     var scrollPosition = $(window).scrollTop();
  
    //     // Iterate through each section and check if it's in view
    //     $('section').each(function() {
    //       var sectionId = $(this).attr('id');
    //       var sectionTop = $(this).offset().top -50; // Adjusted for better visibility
  
    //       if (scrollPosition >= sectionTop) {
    //         // Remove 'active' class from all nav links
    //         $('.navbar-nav a').removeClass('active');
    //         // Add 'active' class to the corresponding nav link
    //         $('.navbar-nav a[href="#' + sectionId + '"]').addClass('active');
    //       }
    //     });
    //   });
    
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
    
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    
    });
});
 
