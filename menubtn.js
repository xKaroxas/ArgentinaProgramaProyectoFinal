// Menu Btn
function MenuBtn () {
  var layers = document.querySelectorAll(".menu-btn span");
  var ul = document.querySelector(".navbar-ul");
    layers.forEach((layers) => {
      layers.classList.toggle("active")
    });
  if (ul.classList.contains("show")) { 
    return ul.classList.remove("show");
  } else { 
    return ul.classList.add("show");
  }
};