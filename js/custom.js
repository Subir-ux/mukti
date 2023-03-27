(function ($) {
  "use strict";

  //Call the variable
  const win = $(window);


  //Function callback

  $(document).ready(function () {
    toggleMobileNavigation();
    modalSearchBackdrop();
    counterUpInit();
    galleryFilterInit();
    // navstickyHeader();
    // stickyContactBtn();
  });

  // Toggle mobile navigation
  function toggleMobileNavigation() {
    const navbar = $(".navigation-holder");
    const openBtn = $(".navbar-header .open-btn");
    //  const closeBtn = $(".navigation-holder .close-navbar");

    //  closeBtn.on("click", function () {
    //    if (navbar.hasClass("slideInn")) {
    //      navbar.removeClass("slideInn");
    //     //  openBtn.removeClass("d-none");
    //    }
    //    $("body").removeClass("overflow-hidden");
    //    return false;
    //  });

    openBtn.on("click", function (e) {
      e.stopImmediatePropagation();
      navbar.toggleClass("slideInn");
      $("body").toggleClass("overflow-hidden");
      $("body").toggleClass("customContact");
      //  $(this).addClass("d-none");
      return false;
    });
  }

  // Function for toggle class for small menu
  function toggleClassForSmallNav() {
    const windowWidth = window.innerWidth;
    const mainNav = $("#navbar > ul");

    if (windowWidth <= 991) {
      mainNav.addClass("small-nav");
    } else {
      mainNav.removeClass("small-nav");
    }
  }

  toggleClassForSmallNav();

  // Function for small menu
  function smallNavFunctionality() {
    const windowWidth = window.innerWidth;
    const mainNav = $(".navigation-holder");
    const smallNav = $(".navigation-holder > .small-nav");
    const subMenu = smallNav.find(".sub-menu");
    const menuItemWidthSubMenu = smallNav.find(".menu-item-has-children > a");

    if (windowWidth <= 991) {
      subMenu.hide();
      menuItemWidthSubMenu.on("click", function (e) {
        const $this = $(this);
        $this.siblings().slideToggle();
        $this.parent().toggleClass("active-menu");
        //  $this.parents().hasClass('sub-menu').find('.active-menu').addClass('sajal');
        //  $this.addClass('active-menu');
        e.preventDefault();
        e.stopImmediatePropagation();
      });
    } else if (windowWidth > 991) {
      mainNav.find(".sub-menu").show();
    }
  }

  smallNavFunctionality();

  //Hamburger btn

  $(".hamburger-menu").click(function () {
    $(this).toggleClass("open");
  });

  // $('.sub-menu').click(function(){

  //   $(this).find('.active-menu').removeClass();

  // });

  // $(".sub-menu li a").click(function(){
  //   $(this).parent().find(".accordion-contant").slideToggle();
  //   $(this).parent(".accordion-item").prevAll(".accordion-item").find(".accordion-contant").slideUp();
  //   $(this).parent(".accordion-item").nextAll(".accordion-item").find(".accordion-contant").slideUp();
  //   });


  //Sticky Header

  const stickyHeader = $(".scrollStickyheader");
  const stickyContact = $(".scrollStickyContact");

  win.on("scroll", function () {
    navstickyHeader();
    stickyContactBtn();
  });

  function navstickyHeader() {
    const scroll = win.scrollTop();
    if (scroll < 100) {
      stickyHeader.removeClass("sticky-header");
    } else {
      stickyHeader.addClass("sticky-header");
    }
  }

  function stickyContactBtn() {
    const scroll = win.scrollTop();
    if (scroll < 200) {
      stickyContact.removeClass("sticky-contact-btn");
    } else {
      stickyContact.addClass("sticky-contact-btn");
    }
  }

  //WHEN DOCUMENT LOADING
  $(window).on("load", function () {
    // preloader();
    toggleMobileNavigation();
    smallNavFunctionality();
  });

  //WHEN WINDOW RESIZE
  $(window).on("resize", function () {
    toggleClassForSmallNav();

    clearTimeout($.data(this, "resizeTimer"));
    $.data(
      this,
      "resizeTimer",
      setTimeout(function () {
        smallNavFunctionality();
      }, 200)
    );
  });

  // Nav search modal

  function modalSearchBackdrop() {
    $(".modalSearchTrigger").click(function () {
      $("body")
        .addClass("modalSearch")
        .find(".modal-backdrop")
        .addClass("backDropOpacity");
    });
  }

  // Home banner carousel

  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");

  const homeMainBannerSliderInit = new Swiper(".homeBannerCarousel", {
    loop: true,
    spaceBetween: 20,
    centeredSlides: true,
    slidesPerView: "auto",
    touchMoveStopPropagation: true,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: { el: ".swiper-pagination" },
    // pagination: false,
    navigation: {
      nextEl: ".home-banner-button-next",
      prevEl: ".home-banner-button-prev",
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: false,
    },
    // watchSlidesProgress: false,
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      },
    },
    // onAny(eventName, ...args) {
    //   console.log('Event: ', eventName);
    //   console.log('Event data: ', args);
    // }
  });

  $(".home-banner-play-pause").click(function () {
    $(this).toggleClass("playing");
    $(".swiper-slide").toggleClass("noSwiping");
    $(".circularProgress").toggleClass("d-none");
  });

  // $('.swiper-container').on('mouseenter', function(e){
  //   console.log('stop autoplay');
  //   mySwiper.stopAutoplay();
  // })
  // $('.swiper-container').on('mouseleave', function(e){
  //   console.log('start autoplay');
  //   mySwiper.startAutoplay();
  // })

//   $(".swiper-container").mouseenter(function(){
//     swiper.stopAutoplay();
// });

// $(".swiper-container").mouseleave(function(){
//     swiper.startAutoplay();
// });

  // $('.home-banner-slide.swiper-slide-active').mouseenter(function(){
  //   $('.image-video-box').removeClass('overflow-hiden');
  // });
  // $('.home-banner-slide.swiper-slide-active').mouseleave(function(){
  //   $('.image-video-box').addClass('overflow-hiden');
  // });

  // $('.homeBannerCarousel').hover(function(){
  //   $(this).find('.swiper-slide-active', function(){
  //     $(this).find('overflow-hiden', function(){
  //       $(this).hide();
  //     });
  //   });
  // });

  // $('.home-banner-box').hover(function(){
  //   $(this).children().find('.overflow-hidden', function(){
  //     $(this).hide();
  //   });
  // });

  // $("body").hover(function(){
  //   if($(this).find('.swiper-slide-active')){
  //     $('.swiper-slide-active').addClass('swiper-stop');
  //   }else{
  //     $('.swiper-slide-active').removeClass('swiper-stop');
  //   }
  // });

  // $('.swiper-slide-active').hover(function(){
  //   if($(this).find('.home-banner-desc')){
  //     $('.home-banner-desc, .home-banner-links').addClass('visibleBannerdesc');
  //   }else{
  //     alert('Test');
  //     $('.home-banner-desc, .home-banner-links').removeClass('visibleBannerdesc');
  //   }
  // });

  // $('.swiper-slide-active').hover(function(){
  //   if($(this).find('.home-banner-desc')){
  //     $('.home-banner-desc, .home-banner-links').toggleClass('visibleBannerdesc');
  //   }
  // });

  // swiper-stop

  // $(".swiper-button-pause").click(function(){
  //     Swiper.autoplay.stop();
  // });

  // $(".swiper-button-play").click(function(){
  //     Swiper.autoplay.play();
  // });

  // const mySwiper = document.querySelector('.swiper-container').swiper;
  // let isSliderActive = true;

  // $(".swiper-button-pause").click(function() {
  // 	if (isSliderActive) {
  // 		mySwiper.autoplay.stop();
  // 		isSliderActive = false;
  // 		this.innerHTML = 'PLAY';
  // 		console.log('slider stopped');
  // 	} else {
  // 		mySwiper.autoplay.start();
  // 		isSliderActive = true;
  // 		this.innerHTML = 'PAUSE';
  // 		console.log('slider activated');
  // 	}
  // });

  // $('.swiper-container').on('mouseenter', function(e){
  //   console.log('stop autoplay');
  //   mySwiper.stopAutoplay();
  // })
  // $('.swiper-container').on('mouseleave', function(e){
  //   console.log('start autoplay');
  //   mySwiper.startAutoplay();
  // })

  // Feature activity slider

  const featureActivitySliderInit = new Swiper(".featureActivitySlider", {
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".feature-slider-button-next",
      prevEl: ".feature-slider-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });


  // Programs Areas (HealerAid)

  // Show the first tab and hide the rest

// Show the first tab and hide the rest
// $('#tabs-nav li:first-child').addClass('active');
// $('.tab-content').hide();
// $('.tab-content:first-child').show();

// // Click function
// $('#tabs-nav li').click(function(){
//   $('#tabs-nav li').removeClass('active');
//   $(this).addClass('active');
//   $('.tab-content').hide();
  
//   var activeTab = $(this).find('a').attr('href');
//   $(activeTab).fadeIn();
//   return false;
// });

// Chart js

var options = {
  series: [50, 10, 40],
  chart: {
    // width: 380,
    type: "donut"
  },
  colors: ["#010A22", "#01B81A", "#02AEFF"],
  dataLabels: {
     enabled: false
  },
  labels: ["Active Student", "Literarcy", "Pass out"],
  dataLabels: {
    dropShadow: {
      enabled: false,
      blur: 3,
      opacity: 0.8
    }
  },
  tooltip: {
    enabled: true,
    y: {
      formatter: function(val) {
        return val + ".00" + "%"
      },
      title: {
        formatter: function (seriesName) {
          return ''
        }
      }
    }
  },
  legend: {
    position: 'bottom'
  }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();


// Count section & swiper slider

var swiper = new Swiper(".countSlider", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".count-slider-button-next",
    prevEl: ".count-slider-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});

  // jQuery counterUp

  function counterUpInit(){
    $('[data-toggle="counter-up"]').counterUp({
      delay: 10,
      time: 1000,
    });
}


// For counter up js fixing start
var c = function() {
  if (!$(t.data('counterup-nums'))) {
  return;
  }
  $(t.text(t.data("counterup-nums").shift()));
  if (t.data("counterup-nums").length) setTimeout(t.data("counterup-func"), r.delay);
  else {
  delete t.data("counterup-nums");
  t.data("counterup-nums", null);
  t.data("counterup-func", null)
  }
  };

// For counter up js fixing end

//daily activities-slider

var swiper = new Swiper(".dailyActivitiesSlider", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".activity-slider-button-next",
    prevEl: ".activity-slider-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});

//Testimonial slider

var swiper = new Swiper(".testiMonialImageSlider", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".testiMonialVideoSlider", {
  slidesPerView: 1,
  // spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Partners slider

  var swiper = new Swiper(".partnersSlider", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".partners-slider-button-next",
      prevEl: ".partners-slider-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1199: {
        slidesPerView: 10,
        spaceBetween: 10,
      },
      1600: {
        slidesPerView: 10,
        spaceBetween: 20,
      },
    },
  });


// Awards slider

  var swiper = new Swiper(".awardsSlider", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".awards-slider-button-next",
      prevEl: ".awards-slider-button-prev",
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      1199: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      1600: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
    },
  });

  //Acredation slider activities-slider

var swiper = new Swiper(".acredationSlider", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".acredation-slider-button-next",
    prevEl: ".acredation-slider-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

// Gallery grid
  function galleryFilterInit() {
    $('.tab-a').click(function(){  
      $(".tab").removeClass('tab-active');
      $(".tab[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
      $(".tab-a").removeClass('active-a');
      $(this).parent().find(".tab-a").addClass('active-a');
     });
  }

})(jQuery);
