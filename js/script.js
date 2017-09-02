var link = document.querySelector(".search-btn");
var popup = document.querySelector(".search-form");
var test = document.querySelector(".site-logo");

link.addEventListener("click", function(event) {

      	event.preventDefault();
      	popup.classList.toggle("search-form-hide");
      	popup.classList.add("animate");



    });

