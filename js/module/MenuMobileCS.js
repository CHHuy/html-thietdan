export default function MenuMobileCS() {
  const menuMobile = document.querySelectorAll('header .menu-mobile');

  if (menuMobile) {
    menuMobile.forEach((item) => {
      const menuLinks = item.querySelectorAll('.footer-nav-link.dropdown .menu-link');

      menuLinks.forEach((item) => {
        const contentOld = item.innerHTML;
        const contentNew = `${contentOld} <i class="fas fa-caret-down"></i>`;
        item.innerHTML = contentNew;
      });
    });
  }

  const arrowIcon = document.querySelectorAll('.menu-mobile .footer-nav-list .footer-nav-link a i');

  if (arrowIcon) {
    arrowIcon.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const menu = item.parentElement.parentElement.querySelectorAll('.footer-nav-list')[0];
        $(menu).slideToggle();
        $(item.parentElement.parentElement).toggleClass('active');
      });
    });
  }
}
