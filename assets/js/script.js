document.addEventListener("DOMContentLoaded", function() {
  var menu = document.querySelector(".mobile-menu");
  var menuOpenIcon = document.querySelector("#menu-icon");

  menuOpenIcon.addEventListener('click', (e) => {
    toggleMenu(menu);
    toggleMenuIcon(menuOpenIcon)
  });

  function toggleMenu(menu) {
    if (menu.style.visibility == "visible") {
      menu.style.visibility = "hidden";
    } else {
      menu.style.visibility = "visible";
    }
  }

  function toggleMenuIcon(menuOpenIcon) {
    var icon = menuOpenIcon.classList[1];
    var hamburgerMenuIcon = "fa-times";
    var exitIcon = "fa-bars";

    if (icon == hamburgerMenuIcon) {
      menuOpenIcon.classList.replace(hamburgerMenuIcon, exitIcon);
    } else {
      menuOpenIcon.classList.replace(exitIcon, hamburgerMenuIcon);
    }
  }

});