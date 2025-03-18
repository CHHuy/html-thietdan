export default function MobileModule() {
  const burgerBtn = document.getElementById("hamburger");

  const mobile = document.querySelector(".mobile");
  const mobileOverLay = document.querySelector(".mobile-overlay");
  const body = document.getElementsByTagName("body")[0];
  const header = document.querySelector(".hd");
  const mobileClose = document.querySelector(".mobile-close");
  let isOpen = false;

  var timeline = new TimelineMax();
  timeline.to(".mobile", 1, { left: '0', ease: Expo.easeInOut });
  timeline.staggerFrom(".mobile ul li", 0.4, { x: -100, opacity: 0 }, 0.05);
  timeline.reverse();
  function HandleOpen() {
    isOpen = !isOpen;
    if (isOpen) {
      burgerBtn.classList.add("active");
      mobile.classList.add("open");
      mobileOverLay.classList.add("open");
      body.classList.add("no-scroll");
      timeline.play();

    } else {
      burgerBtn.classList.remove("active");
      mobile.classList.remove("open");
      mobileOverLay.classList.remove("open");
      body.classList.remove("no-scroll");
      timeline.reverse();
    }
  }

  function HandleClose() {
    isOpen = false;
    burgerBtn.classList.remove("active");
    mobile.classList.remove("open");
    mobileOverLay.classList.remove("open");
    // header.classList.remove("sticky");
    body.classList.remove("no-scroll");
    timeline.reverse(1.5);
  }

  if (burgerBtn) {
    burgerBtn.addEventListener("click", () => {
      HandleOpen()
    });
  }
  if (mobileClose) {
    mobileClose.addEventListener("click", function () {
      HandleClose()
    });
  }
  if (mobileOverLay) {
    mobileOverLay.addEventListener("click", function () {
      HandleClose()
    });
  }
  const menuNavs = document.querySelectorAll(".header .menu-nav");
  if (menuNavs) {
    menuNavs.forEach((item) => {
      const menuLinks = item.querySelectorAll(".menu-item.dropdown .menu-link");
      menuLinks.forEach((item) => {
        const contentOld = item.innerHTML;
        const contentNew = `${contentOld} <i class="fas fa-caret-down"></i>`;
        item.innerHTML = contentNew;
      });
    });
  }
  const arrowIcon = document.querySelectorAll(
    ".mobile-nav .menu-list .menu-item a i"
  );
  if (arrowIcon) {
    arrowIcon.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const menu =
          item.parentElement.parentElement.querySelectorAll(".menu-list")[0];
        $(menu).slideToggle();
        $(item.parentElement.parentElement).toggleClass("active");
      });
    });
  }

}