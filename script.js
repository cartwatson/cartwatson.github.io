var popupTriggers = document.querySelectorAll(".popup-trigger");
var popups = document.querySelectorAll(".popup");

for (var i = 0; i < popupTriggers.length; i++) {
  popupTriggers[i].addEventListener("click", function (e) {
    e.preventDefault();
    var popup = this.nextElementSibling;
    popup.style.display = "block";
  });
}

for (var i = 0; i < popups.length; i++) {
  popups[i].addEventListener("click", function (e) {
    e.stopPropagation();
  });
}

document.addEventListener("click", function () {
  for (var i = 0; i < popups.length; i++) {
    popups[i].style.display = "none";
  }
});
