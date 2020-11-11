window.onscroll = function () {
  stickyNavbar();
};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

function openMobileMenu() {
  document.getElementById("nav-mobile").style.width = "100%";
}

function closeMobileMenu() {
  document.getElementById("nav-mobile").style.width = "0";
}
