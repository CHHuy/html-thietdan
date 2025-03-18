export default function ParallaxModule() {
  // const parallax = document.querySelectorAll('.prl-img')

  // if (parallax) {
  //     new Ukiyo(parallax, {
  //         scale: 1.4, // 1~2 is recommended
  //         speed: 1.4, // 1~2 is recommended
  //         willChange: true, // This may not be valid in all cases
  //         wrapperClass: "ukiyo-wrapper",
  //         externalRAF: false
  //     })
  // }

  gsap.registerPlugin(ScrollTrigger)

  if (window.innerWidth > 1200) {
    gsap.utils.toArray('.proce-img').forEach(function (container, index) {
      let image = container.querySelector('img')
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          scrub: true,
          pin: false
        }
      })
      tl.from(image, {
        yPercent: -100,
        ease: 'none',
        scale: 1
      }).to(image, {
        yPercent: -30,
        ease: 'none',
        scale: 1
      })
    })
  }

  if (window.innerWidth > 1200) {
    let sections = gsap.utils.toArray('.philo-slider .swiper-slide')
    let philo = document.getElementsByClassName('philo')[0]

    if (sections && philo) {
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: '.philo',
          pin: true,
          start: 'top +=30px',
          markers: false,
          scrub: 1,
          // snap: {
          //     snapTo: 1 / (sections.length - 1),
          //     duration: { min: 1, max: 2 },
          //     delay: 0
          // },
          end: () =>
            '+=' + document.querySelector('.sec-philo')?.offsetWidth / 3
        }
      })
    }
  }

  let secItem = gsap.utils.toArray('.sec-item')
  let secTest = document.getElementsByClassName('sec-test')[0]

  if (secItem && secTest) {
    gsap.to(secItem, {
      xPercent: -100 * (secItem.length - 1),
      opacity: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: '.sec-test',
        pin: false,
        start: 'top center',
        markers: false,
        scrub: 1,
        // snap: {
        //     snapTo: 1 / (secItem.length - 1),
        //     duration: { min: 1, max: 2 },
        //     delay: 0
        // },
        end: 'center center'
      }
    })
  }
}
