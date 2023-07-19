document.addEventListener( 'DOMContentLoaded', function() {
    var splide1 = new Splide( '#slideOne', {
        type   : 'loop',
        perPage: 3,
        perMove: 1,
      } );
    splide1.mount();

var splide2 = new Splide( '#splideTwo', {
    type    : 'loop',
    perPage : 1,
    autoplay: true,
    arrows : false,
    pagination: false,
  }  );
splide2.mount();

var splide3 = new Splide( '#slidThree', {
    type    : 'loop',
    perPage : 4,
    autoplay: true,
    arrows : false,
    pagination: false,
    breakpoints: {

        576: { perPage: 2,gap:'3rem'
             },
             1024: { perPage: 3,
             },
        1025: { perPage: 4,
             },
        
      },
  }  );
splide3.mount();

  } );