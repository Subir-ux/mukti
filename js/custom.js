(function ($) {
  "use strict";

  //Call the variable
  const win = $(window);

  //Function callback

  $(document).ready(function () {
    toggleMobileNavigation();
    modalSearchBackdrop();
    counterUpInit();
    tabHealthInit();
    chartInithealth();
    chartInitEducation();
    chartInitAgri();
    chartInitLiveHood();
    chartInitEnv();
    chartInitResill();
    chartInitAwarness();
    chartInitIntdev();
    chartInitDisasterManagement();
    scrollToTop();
  });

  // Toggle mobile navigation
  function toggleMobileNavigation() {
    const navbar = $(".navigation-holder");
    const openBtn = $(".navbar-header .open-btn");
    openBtn.on("click", function (e) {
      e.stopImmediatePropagation();
      navbar.toggleClass("slideInn");
      $("body").toggleClass("overflow-hidden");
      $("body").toggleClass("customContact");
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
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      },
    },
  });

  $(".home-banner-play-pause").click(function () {
    $(this).toggleClass("playing");
    $(".circularProgress").toggleClass("d-none");
  });

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

  // Chart js

  function chartInithealth() {
    var options = {
      series: [50, 10, 40],
      chart: {
        // width: 380,
        type: "donut",
      },
      colors: ["#010A22", "#01B81A", "#02AEFF"],
      dataLabels: {
        enabled: false,
      },
      labels: ["Active Student", "Literarcy", "Pass out"],
      dataLabels: {
        dropShadow: {
          enabled: false,
          blur: 3,
          opacity: 0.8,
        },
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: function (val) {
            return val + ".00" + "%";
          },
          title: {
            formatter: function (seriesName) {
              return "";
            },
          },
        },
      },
      legend: {
        position: "bottom",
      },
    };

    var chart = new ApexCharts(document.querySelector("#chartHealth"), options);

    chart.render();
  }

  function chartInitEducation() {
    var options = {
      series: [60, 20, 20],
      chart: {
        // width: 380,
        type: "donut",
      },
      colors: ["#010A22", "#01B81A", "#02AEFF"],
      dataLabels: {
        enabled: false,
      },
      labels: ["Active Student", "Literarcy", "Pass out"],
      dataLabels: {
        dropShadow: {
          enabled: false,
          blur: 3,
          opacity: 0.8,
        },
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: function (val) {
            return val + ".00" + "%";
          },
          title: {
            formatter: function (seriesName) {
              return "";
            },
          },
        },
      },
      legend: {
        position: "bottom",
      },
    };

    var chart = new ApexCharts(
      document.querySelector("#chartEducation"),
      options
    );

    chart.render();
  }
  function chartInitAgri() {
    var options = {
      series: [70, 10, 10],
      chart: {
        // width: 380,
        type: "donut",
      },
      colors: ["#010A22", "#01B81A", "#02AEFF"],
      dataLabels: {
        enabled: false,
      },
      labels: ["Active Student", "Literarcy", "Pass out"],
      dataLabels: {
        dropShadow: {
          enabled: false,
          blur: 3,
          opacity: 0.8,
        },
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: function (val) {
            return val + ".00" + "%";
          },
          title: {
            formatter: function (seriesName) {
              return "";
            },
          },
        },
      },
      legend: {
        position: "bottom",
      },
    };

    var chart = new ApexCharts(
      document.querySelector("#chartInitAgri"),
      options
    );

    chart.render();
  }
  function chartInitLiveHood() {
    var options = {
      series: [45, 35, 20],
      chart: {
        // width: 380,
        type: "donut",
      },
      colors: ["#010A22", "#01B81A", "#02AEFF"],
      dataLabels: {
        enabled: false,
      },
      labels: ["Active Student", "Literarcy", "Pass out"],
      dataLabels: {
        dropShadow: {
          enabled: false,
          blur: 3,
          opacity: 0.8,
        },
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: function (val) {
            return val + ".00" + "%";
          },
          title: {
            formatter: function (seriesName) {
              return "";
            },
          },
        },
      },
      legend: {
        position: "bottom",
      },
    };

    var chart = new ApexCharts(
      document.querySelector("#chartInitLiveHood"),
      options
    );

    chart.render();
  }
  function chartInitEnv() {
    var options = {
      series: [45, 35, 20],
      chart: {
        // width: 380,
        type: "donut",
      },
      colors: ["#010A22", "#01B81A", "#02AEFF"],
      dataLabels: {
        enabled: false,
      },
      labels: ["Active Student", "Literarcy", "Pass out"],
      dataLabels: {
        dropShadow: {
          enabled: false,
          blur: 3,
          opacity: 0.8,
        },
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: function (val) {
            return val + ".00" + "%";
          },
          title: {
            formatter: function (seriesName) {
              return "";
            },
          },
        },
      },
      legend: {
        position: "bottom",
      },
    };

    var chart = new ApexCharts(
      document.querySelector("#chartInitEnv"),
      options
    );

    chart.render();
  }
  function chartInitResill() {
    var options = {
      series: [45, 35, 20],
      chart: {
        // width: 380,
        type: "donut",
      },
      colors: ["#010A22", "#01B81A", "#02AEFF"],
      dataLabels: {
        enabled: false,
      },
      labels: ["Active Student", "Literarcy", "Pass out"],
      dataLabels: {
        dropShadow: {
          enabled: false,
          blur: 3,
          opacity: 0.8,
        },
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: function (val) {
            return val + ".00" + "%";
          },
          title: {
            formatter: function (seriesName) {
              return "";
            },
          },
        },
      },
      legend: {
        position: "bottom",
      },
    };

    var chart = new ApexCharts(
      document.querySelector("#chartInitResill"),
      options
    );

    chart.render();
  }
  function chartInitAwarness() {
    var options = {
      series: [45, 35, 20],
      chart: {
        // width: 380,
        type: "donut",
      },
      colors: ["#010A22", "#01B81A", "#02AEFF"],
      dataLabels: {
        enabled: false,
      },
      labels: ["Active Student", "Literarcy", "Pass out"],
      dataLabels: {
        dropShadow: {
          enabled: false,
          blur: 3,
          opacity: 0.8,
        },
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: function (val) {
            return val + ".00" + "%";
          },
          title: {
            formatter: function (seriesName) {
              return "";
            },
          },
        },
      },
      legend: {
        position: "bottom",
      },
    };

    var chart = new ApexCharts(
      document.querySelector("#chartInitAwarness"),
      options
    );

    chart.render();
  }
  function chartInitIntdev() {
    var options = {
      series: [45, 35, 20],
      chart: {
        // width: 380,
        type: "donut",
      },
      colors: ["#010A22", "#01B81A", "#02AEFF"],
      dataLabels: {
        enabled: false,
      },
      labels: ["Active Student", "Literarcy", "Pass out"],
      dataLabels: {
        dropShadow: {
          enabled: false,
          blur: 3,
          opacity: 0.8,
        },
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: function (val) {
            return val + ".00" + "%";
          },
          title: {
            formatter: function (seriesName) {
              return "";
            },
          },
        },
      },
      legend: {
        position: "bottom",
      },
    };

    var chart = new ApexCharts(
      document.querySelector("#chartInitIntdev"),
      options
    );

    chart.render();
  }
  function chartInitDisasterManagement() {
    var options = {
      series: [45, 35, 20],
      chart: {
        // width: 380,
        type: "donut",
      },
      colors: ["#010A22", "#01B81A", "#02AEFF"],
      dataLabels: {
        enabled: false,
      },
      labels: ["Active Student", "Literarcy", "Pass out"],
      dataLabels: {
        dropShadow: {
          enabled: false,
          blur: 3,
          opacity: 0.8,
        },
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: function (val) {
            return val + ".00" + "%";
          },
          title: {
            formatter: function (seriesName) {
              return "";
            },
          },
        },
      },
      legend: {
        position: "bottom",
      },
    };

    var chart = new ApexCharts(
      document.querySelector("#chartInitDisasterManagement"),
      options
    );

    chart.render();
  }

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

  function counterUpInit() {
    $('[data-toggle="counter-up"]').counterUp({
      delay: 10,
      time: 1000,
    });
  }

  // For counter up js fixing start
  var c = function () {
    if (!$(t.data("counterup-nums"))) {
      return;
    }
    $(t.text(t.data("counterup-nums").shift()));
    if (t.data("counterup-nums").length)
      setTimeout(t.data("counterup-func"), r.delay);
    else {
      delete t.data("counterup-nums");
      t.data("counterup-nums", null);
      t.data("counterup-func", null);
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
  function tabHealthInit() {
    $(".tabInitHealth").click(function () {
      $(".tab").removeClass("tab-active");
      $(".tab[data-id='" + $(this).attr("data-id") + "']").addClass(
        "tab-active"
      );
      $(".tabInitHealth").removeClass("active-a");
      $(this).parent().find(".tabInitHealth").addClass("active-a");
    });
  }

  // Scroll to top

  function scrollToTop() {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        $(".my_bttn").fadeIn(250);
      } else {
        $(".my_bttn").fadeOut(250);
      }
    });
    $(".my_bttn").click(function () {
      $("html,body").animate({ scrollTop: 0 }, 400);
    });
  }
})(jQuery);
