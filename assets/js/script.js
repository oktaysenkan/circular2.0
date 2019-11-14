document.addEventListener("DOMContentLoaded", function() {

  var menu = document.querySelector(".mobile-menu");
  var menuOpenIcon = document.querySelector("#menu-icon");

  menuOpenIcon.addEventListener('click', (e) => {
    ToggleMenu(menu);
    ToggleMenuIcon(menuOpenIcon)
  });

  function ToggleMenu(menu) {
    if (menu.style.visibility == "visible") {
      menu.style.visibility = "hidden";
    } else {
      menu.style.visibility = "visible";
    }
  }

  function ToggleMenuIcon(menuOpenIcon) {
    var icon = menuOpenIcon.classList[1];
    if (icon == "fa-bars") {
      menuOpenIcon.classList.replace("fa-bars", "fa-times");
    } else {
      menuOpenIcon.classList.replace("fa-times", "fa-bars");
    }
  }

});