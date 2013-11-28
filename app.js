// Remove Splash screen
document.querySelector("#splash").className = "fade-out";

// Home navigation
var homeNav = document.querySelectorAll("#home ul button");
for (var i = 0; i < homeNav.length; i++) {
  homeNav[i].addEventListener("click", function(ev) {
    document.querySelector('#'+this.innerHTML).classList.add('move-to-main');
    document.querySelector('#home').classList.add('move-to-left');
  });
}

// Section navigation
var sectionNav = document.querySelectorAll("button[data-nav='home']");
for (var i = 0; i < sectionNav.length; i++) {
  sectionNav[i].addEventListener("click", function(ev) {
    this.parentNode.classList.remove('move-to-main');
    document.querySelector('#home').classList.remove('move-to-left');
  });
}

// Increase section size
var pagesContainer = document.querySelectorAll("[data-pages]");
var pages = document.querySelectorAll("[data-pages] li");
for (var i = 0; i < pagesContainer.length; i++) {
  pagesContainer[i].querySelector("ul").style.width = pagesContainer[i].dataset.pages + "00%";
  for (var j = 0; j < pages.length; j++) {
    pages[j].style.width = (100 / pages.length) + "%";
  }
}