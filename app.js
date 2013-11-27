//Remove Splash screen
document.querySelector('#splash').className = "fade-out";

  // Move to main
document.querySelector('#go-dialer').addEventListener('click', function (ev) {
  //console.log(ev.target)
  document.querySelector('#dialer').classList.add('move-to-main');
});
document.querySelector('#dialer .back').addEventListener('click', function (ev) {
  console.log(ev.target)
  document.querySelector('#dialer').classList.remove('move-to-main');
});



//document.querySelector('#action-menu').addEventListener ('click', function () 
//  document.querySelector('#action-menu').classList.add('move-to-right');
//});