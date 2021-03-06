var link = document.querySelector(".write-btn");
var popup = document.querySelector(".popup-write-us");
var close = document.querySelector(".modal-close");
var username = document.querySelector("[name=name]");
var form = popup.querySelector("form");
var eMail = popup.querySelector("[name=e-mail]");
var isStorageSupport = true;
var storage = "";
var service = document.querySelector(".service-slide");
var controls = Array.from(document.querySelectorAll(".service-list-btn"));
var slides = Array.from(document.querySelectorAll(".service-slide"));
for (var i = 0; i < controls.length; i++) {
	controls[i].addEventListener("click", function(e) {
		controls.forEach(function(el) {
			el.classList.remove("active");
		});
		var currentEl = e.target.closest(".service-list-btn");
		currentEl.classList.add("active");
		var controlIndex = controls.indexOf(currentEl);
		slides.forEach(function(el) {
			el.classList.remove("active");
		});
		slides[controlIndex].classList.add("active");
	})
}
try {
	storage = localStorage.getItem("login");
} catch (err) {
	isStorageSupport = false;
}
link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	if (storage) {
		username.value = storage;
		eMail.focus();
	} else {
		username.focus();
	}
});
close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});
form.addEventListener("submit", function (evt) {
	if (!username.value || !eMail.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("login", username.value);
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
var mapLink = document.querySelector(".map-link");
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
	if (evt.keyCode === 27) {
			evt.preventDefault();
		if (mapPopup.classList.contains("modal-show")) {
			mapPopup.classList.remove("modal-show");
		}
	}
});