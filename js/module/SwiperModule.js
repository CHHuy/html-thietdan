import SearchModule from './SearchModule.js';
export default function SwiperModule() {
  function functionSlider(element, isLoop, isCenter, betWeenInit, autoplay, effects, breakpoint) {
    const swiperSlider = document.querySelectorAll(element)
    if (swiperSlider) {
      swiperSlider.forEach(item => {
        const swiper = item.querySelector('.swiper')
        const pagi = item.querySelector('.swiper-pagination')
        const next = item.querySelector('.swiper-next')
        const prev = item.querySelector('.swiper-prev')
        var slide = new Swiper(swiper, {
          watchSlidesProgress: true,
          speed: 1200,
          autoplay: autoplay,
          pagination: {
            el: pagi,
            type: 'bullets',
            clickable: true,
          },
          navigation: {
            nextEl: next,
            prevEl: prev,
          },
          // slidesPerGroup: 2,
          centeredSlides: isCenter,
          loop: isLoop,
          spaceBetween: betWeenInit,
          effect: effects,
          fadeEffect: {
            crossFade: true
          },
          breakpoints: breakpoint,
        });
      })
    }
  }

  // element , isLoop, isCenter, betWeenInit, autoPlay, effects,breackpoint
  functionSlider(".story-slider", false, false, 24, { delay: 3000 }, "slide", {
    0: {
      slidesPerView: 1.2,
      freeMode: true,
    },
    500: {
      slidesPerView: 2.2,

    },
    768: {
      slidesPerView: 3,

    },
    1200: {
      slidesPerView: 3,
    }
  })


  // element , isLoop, isCenter, betWeenInit, autoPlay, effects,breackpoint
  functionSlider(".hab-slider", true, false, 0, { delay: 10000 }, "slide", {
    0: {
      slidesPerView: 2,
      freeMode: true,
    },
    500: {
      slidesPerView: 2,

    },
    768: {
      slidesPerView: 1.8,

    },
    1200: {
      slidesPerView: 1.8,
    }
  })
  // element , isLoop, isCenter, betWeenInit, autoPlay, effects,breackpoint
  functionSlider(".vms-slider", true, false, 0, { delay: 10000 }, "slide", {
    0: {
      slidesPerView: 1,
      freeMode: true,
    },
    1200: {
      slidesPerView: 1,
    }
  })
  // element , isLoop, isCenter, betWeenInit, autoPlay, effects,breackpoint
  functionSlider(".media-slider-one", true, false, 24, { delay: 5000 }, "slide", {
    0: {
      slidesPerView: "auto",
      freeMode: true,
    },
    1200: {
      slidesPerView: "auto",
    }
  })
  // element , isLoop, isCenter, betWeenInit, autoPlay, effects,breackpoint
  functionSlider(".media-slider-two", true, false, 24, { delay: 5000 }, "slide", {
    0: {
      slidesPerView: "auto",
      freeMode: true,
    },
    1200: {
      slidesPerView: "auto",
    }
  })
  const hbnSlides = document.querySelectorAll('.hbn-slider .swiper-slide')
  const hbnSlideCurrent = document.querySelector('.hbn-slider-sl .current')
  const hbnSlideTotal = document.querySelector('.hbn-slider-sl .total')

  var hbnSlider = new Swiper(".hbn-slider .swiper", {
    // freeMode: true,
    watchSlidesProgress: true,
    speed: 1200,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.hbn-slider .swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.hbn-slider .swiper-next',
      prevEl: '.hbn-slider .swiper-prev',
    },
    // slidesPerGroup: 2,
    centeredSlides: false,
    loop: true,
    spaceBetween: 0,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    slidesPerView: 1,
    on: {
      init: function (e) {
        if (hbnSlideTotal) {
          const total = hbnSlides.length;
          hbnSlideTotal.innerHTML = `${total < 10 ? '0' + total : total}`
        }
        if (hbnSlideCurrent) {
          const current = e.realIndex + 1;
          hbnSlideCurrent.innerHTML = `${current < 10 ? '0' + current : current}`
        }
      },
      slideChange: function (e) {
        if (hbnSlideCurrent) {
          const current = e.realIndex + 1;
          hbnSlideCurrent.innerHTML = `${current < 10 ? '0' + current : current}`
        }
      }
    }
  });
  var proceSlider = new Swiper(".proce-slider .swiper", {
    // freeMode: true,
    watchSlidesProgress: true,
    speed: 1200,
    autoplay: {
      delay: 10000,
    },
    pagination: {
      el: '.proce-slider .swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.proce-slider .swiper-next',
      prevEl: '.proce-slider .swiper-prev',
    },
    // slidesPerGroup: 2,
    centeredSlides: false,
    loop: false,
    spaceBetween: 0,
    // effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        freeMode: true,
      },
      500: {
        slidesPerView: 2.2,

      },
      768: {
        slidesPerView: 3,

      },
      1200: {
        slidesPerView: 4.2,
      }
    }
  });

  var icateNavBtn = document.querySelectorAll('.icate-nav-btn')
  icateNavBtn?.forEach((item, index) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      // $('.icate-nav-btn.active').removeClass('active')
      icateSlider.slideTo(index);
      // item.classList.add('active')
    })
  })
  var icateSlider = new Swiper('.icate-slider .swiper', {
    slidesPerView: 1.2,
    spaceBetween: 0,
    loop: false,
    loopedSlides: 3,
    autoplay: false,
    pagination: {
      el: '.icate-slider .swiper-pagination',
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: '.icate-slider .swiper-next',
      prevEl: '.icate-slider .swiper-prev',
    },
    speed: 1200,
    on: {
      init: function (e) {
        $('.icate-nav-btn.active').removeClass('active')
        icateNavBtn[e.realIndex].classList.add('active')
      },
      slideChange: function (e) {
        $('.icate-nav-btn.active').removeClass('active')
        icateNavBtn[e.realIndex].classList.add('active')
      }
    }
  });

  var certiSlider = new Swiper(".certi-slider .swiper", {
    // freeMode: true,
    watchSlidesProgress: true,
    speed: 1200,
    autoplay: {
      delay: 10000,
    },
    pagination: {
      el: '.certi-slider .swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.certi-slider .swiper-next',
      prevEl: '.certi-slider .swiper-prev',
    },


    // slidesPerGroup: 2,
    centeredSlides: false,
    loop: false,
    spaceBetween: 24,


    // effect: 'fade',
    fadeEffect: {
      crossFade: true
    },

    breakpoints: {
      0: {
        slidesPerView: 1.2,
        freeMode: true,
      },
      500: {
        slidesPerView: 2.2,

      },
      768: {
        slidesPerView: 2.5,

      },
      1200: {
        slidesPerView: 2.5,
      }
    }
  });
  if (window.innerWidth < 1200) {
    var philoSlider = new Swiper(".philo-slider .swiper", {
      // freeMode: true,
      watchSlidesProgress: true,
      speed: 1200,
      autoplay: false,
      pagination: {
        el: '.philo-slider .swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      navigation: {
        nextEl: '.philo-slider .swiper-next',
        prevEl: '.philo-slider .swiper-prev',
      },
      // slidesPerGroup: 2,

      centeredSlides: false,
      loop: false,
      spaceBetween: 24,
      // effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      initialSlide: 1,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: false,
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
          freeMode: true,
        },
        500: {
          slidesPerView: 1,

        },
        768: {
          slidesPerView: 1,

        },
        1200: {
          slidesPerView: 1,
        }
      }
    });
  }
  var storySlider = new Swiper(".story-slider .swiper", {
    // freeMode: true,
    watchSlidesProgress: true,
    speed: 1200,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.story-slider .swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.story-slider .swiper-next',
      prevEl: '.story-slider .swiper-prev',
    },
    // slidesPerGroup: 2,
    centeredSlides: false,
    loop: false,
    spaceBetween: 24,
    // effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        freeMode: true,
      },
      500: {
        slidesPerView: 2.2,

      },
      768: {
        slidesPerView: 3,

      },
      1200: {
        slidesPerView: 3,
      }
    }
  });
  // Slider Control
  // topsSliderMain.controller.control = topSliderThumb;
  // topSliderThumb.controller.control = topsSliderMain;
  // slider detail product
  var detailSliderThumb = new Swiper('.detail-slider-thumb .swiper', {
    // freeMode: true,
    watchSlidesProgress: true,
    speed: 1200,
    autoplay: false,
    pagination: {
      el: '.detail-slider-thumb .swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.detail-slider-thumb .swiper-next',
      prevEl: '.detail-slider-thumb .swiper-prev',
    },
    // slidesPerGroup: 2,
    centeredSlides: false,
    loop: false,
    spaceBetween: 24,
    // effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        freeMode: true,
      },
      500: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

  var prdSliderMain = new Swiper('.detail-swiper-main .swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    // loopedSlides: 6,
    // loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.detail-swiper-main .swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.detail-slider-thumb .swiper-next',
      prevEl: '.detail-slider-thumb .swiper-prev',
    },
    speed: 1000,
    effect: 'coverflow',
    parallax: true,
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0.05,
      depth: 0,
      stretch: 0,
      modifier: 1,
      slideShadows: false,
    },
    on: {
      init: function (e) {
        let swiper = this;
        for (let i = 0; i < swiper.slides.length; i++) {
          $(swiper.slides[i])
            .find('.prd-img')
            .attr({
              'data-swiper-parallax': 0.9 * swiper.width,
              'data-swiper-paralalx-opacity': 0.1,
            });
        }
        let index = swiper.activeIndex;
        $(swiper.slides).removeClass('active');
        $(swiper.slides[index]).addClass('active');
      },
      resize: function () {
        this.update();
      },
    },
    thumbs: {
      swiper: detailSliderThumb,
    },
  });
  const descriptionSliders = document.querySelector('.description-slider');
  if (descriptionSliders) {
    let w = descriptionSliders.getBoundingClientRect().width;
    var descriptionSlider = new Swiper('.description-slider .swiper', {
      loop: false,
      speed: 1000,
      autoplay: false,
      // effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 1,
      // coverflowEffect: {
      //     rotate: 0,
      //     stretch: w,
      //     depth: 0,
      //     modifier: 1,
      //     slideShadows: false,
      // },
      pagination: {
        el: '.description-slider .swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      navigation: {
        nextEl: '.description-slider .swiper-next',
        prevEl: '.description-slider .swiper-prev',
      },
    });
  }
  // -------------------------------------

  // slider banner cs
  var bannerSlide = new Swiper('.custom-banner-main .swiper', {
    spaceBetween: 0,

    loop: true,
    autoplay: {
      delay: 4000,
    },
    pagination: {
      el: '.custom-banner-main .swiper-pagination',
      clickable: true,
      dynamicBullets: false,
      dynamicMainBullets: 3,
    },
  });
  // -----------------------------------------
  // slider-detail-news
  var detailNewsSlide = new Swiper('.detail-news-slide-main .swiper', {
    slidesPerView: 1,
    spaceBetween: 30,

    // loop: true,
    autoplay: {
      delay: 4000,
    },
    navigation: {
      nextEl: '.detail-news-control .swiper-next',
      prevEl: '.detail-news-control .swiper-prev',
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        freeMode: true,
      },
      700: {
        slidesPerView: 2,
      },

      900: {
        slidesPerView: 3,
      },
    },
  });
  // ----------------------------------------------------------------------------------------

  // slider-detail-add prod
  var slideDetailAddProd = new Swiper('.list-content-slide .swiper', {
    slidesPerView: 3,
    spaceBetween: 20,

    // loop: true,
    autoplay: {
      delay: 4000,
    },
    navigation: {
      nextEl: '.list-control-btn .swiper-next',
      prevEl: '.list-control-btn .swiper-prev',
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        freeMode: true,
      },
      700: {
        slidesPerView: 2,
      },

      900: {
        slidesPerView: 3,
      },
    },
  });
  // ----------------------------------------------------------------------------------------
  // Slider Control
  // topsSliderMain.controller.control = topSliderThumb;
  // topSliderThumb.controller.control = topsSliderMain;
}
