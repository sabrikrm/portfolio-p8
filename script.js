function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.addEventListener('DOMContentLoaded', () => {
  const collapseButtons = document.querySelectorAll('.collapse-btn');

  collapseButtons.forEach(button => {
      button.addEventListener('click', () => {
          const collapseContent = button.nextElementSibling;
          const contentMaxHeight = collapseContent.scrollHeight + 'px';
          collapseContent.style.maxHeight =
              collapseContent.style.maxHeight === contentMaxHeight ? '0px' : contentMaxHeight;
      });
  });
});
