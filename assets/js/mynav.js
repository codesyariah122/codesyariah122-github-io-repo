function myFunction() {
  var x = document.getElementById("mynav");
  if (x.className === "site-nav") {
    x.className += " responsive";
  } else {
    x.className = "site-nav";
  }
}
