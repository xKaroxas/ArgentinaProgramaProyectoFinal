// OnScroll
window.onscroll = function () {
    var bodyScrollTop = document.body.scrollTop;
    var elementScrollTop = document.documentElement.scrollTop;
    var flecha = document.getElementById("flecha");
  if (bodyScrollTop > 66 || elementScrollTop > 66) {
  flecha.style.visibility = "visible";
} else {
  flecha.style.visibility = "hidden";
}};