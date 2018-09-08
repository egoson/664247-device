var link = document.querySelector(".write-btn");
var popup = document.querySelector(".popup-write-us");
var close = document.querySelector(".modal-close");
var name = document.querySelector("[name=name]");
var form = popup.querySelector("form");
var eMail = popup.querySelector("[name=e-mail]");
var isStorageSupport = true;
var storage = "";
 try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }
  
link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	if (storage) {
      login.value = storage;
      password.focus();
    } else {
      login.focus();
    }
});
close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});
form.addEventListener("submit", function (evt) {
    if (!name.value || !eMail.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
      }
    }
  });
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });
 var mapLink = document.querySelector(".popup-map");

  var mapPopup = document.querySelector(".popup-map");
  var mapClose = mapPopup.querySelector(".modal-close");
  
  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
    evt.preventDefault();
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
      }
    }
  });