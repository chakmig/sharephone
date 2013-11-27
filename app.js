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
