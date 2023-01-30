// NewDate
new Date().getFullYear();
var newDate = new Date();
var copyright = document.getElementById("copyright");
const copyrightFooter = `Copyright © ${new Date().getFullYear()} Proyecto Final`;

copyright.innerHTML = copyrightFooter;