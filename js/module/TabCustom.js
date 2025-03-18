export default function TabCustom() {
  var tabLinks = document.querySelectorAll('.tabs-link');
  var tabItem = document.querySelectorAll('.tabs-item');

  //hidden tab

  tabLinks.forEach((tab, index) => {
    tab.addEventListener('click', function (e) {
      tabLinks.forEach((tab) => {
        tab.classList.remove('active');
      });

      tabItem.forEach((item) => {
        item.classList.remove('active');
      });

      tab.classList.add('active');
      tabItem[index].classList.add('active');
    });
  });
}
