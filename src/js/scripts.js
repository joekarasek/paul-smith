(function($, HelloWorldDevsTysonSteele) {

  // ======= Fixes =======
  HelloWorldDevsTysonSteele.noOrphans('h1,h2,h3,h4,h5,h6,li,p', '.allow-orphan');
  HelloWorldDevsTysonSteele.scrollToFix('#primary-menu');

  // ======= Request Appointment Form =======
  HelloWorldDevsTysonSteele.requestAppointment('#mail-form', '#success_msg' , '7fb35345-752d-4792-9480-cd3db6674a62');

  // ======= Carousels =======
  var defaultSettings = {
    speed: 500,
    autoplay: 6000,
    loop: true,
    autoplayDisableOnInteraction: false
  };

  var marqueeSwiper = new Swiper('.swiper-container', defaultSettings);

  HelloWorldDevsTysonSteele.tourCarousel('.js-service-carousel', {
    items: 2,
    autoplay: true,
    autoplayHoverPause: false,
    responsive: {
      480: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 5
      },
      1440: {
        items: 6,
        autoplay: false
      }
    },
    margin: 20
  });

  HelloWorldDevsTysonSteele.associationCarousel('.js-associations-carousel', {
    items: 2,
    loop: true,
    autoplay: true,
    autoplaySpeed: 500,
    autoplayTimeout: 2000,
    autoplayHoverPause:false,
    autoWidth: false,
    nav: false,
    dots: false,
    margin: 10,
    slideBy: 1,
    responsive: {
      550: {
        items: 3
      },
      768: {
        items: 4
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      },
      1440: {
        items: 5,
        autoplay: false
      }
    }
  });
  HelloWorldDevsTysonSteele.pyramidCarousel('.js-team-carousel', {
    items: 2,
    autoplay: true,
    autoplayHoverPause:false,
    responsive: {
      480: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 5
      },
      1440: {
        items: 6,
        autoplay: false
      }
    },
    margin: 20
  });
  HelloWorldDevsTysonSteele.updateCopyright('.js-copyright-year');

  // ======= Google Maps =======
  HelloWorldDevsTysonSteele.googleMap('#google-map5', '30.0473254,-95.1838827', '30.0473254,-95.1838827');

  $('#gallery-btn').click( function(e) {
    e.preventDefault();
    $('#gallery-target').click();
  });

  $('.swiper-button-prev').click(function() {
    console.log("yolo");
    marqueeSwiper.swipePrev();
  });

  $('.swiper-button-next').click(function() {
    console.log("yolo");
    marqueeSwiper.swipeNext();
  });

}(jQuery, HelloWorldDevsTysonSteele));

