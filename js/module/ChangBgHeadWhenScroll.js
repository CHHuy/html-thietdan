export default function ChangBgHeadWhenScroll() {
  var headerEl = document.querySelector('.header');
  if (headerEl) {
    window.addEventListener('scroll', () => {
      const verticalScrollPx = window.scrollY || window.pageYOffset;

      if (verticalScrollPx > 80) {
        headerEl.classList.add('active');
      } else {
        headerEl.classList.remove('active');
      }
    });
  }
}
