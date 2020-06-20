var body = document.getElementById("body");
var h1 = document.querySelector("h1");
var c1 = document.querySelector(".color1");
var c2 = document.querySelector(".color2");
var h3 = document.querySelector("h3");
var div = document.querySelector("div");

body.style.textAlign = "center";
div.style.border = "2px solid #fff";
div.style.borderRadius = "10px";
div.style.padding = "20px";
div.style.margin = "50px";
h1.style.color = "#fff";
h1.style.fontFamily =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
body.style.background = "linear-gradient(to right, #00fff0, #0ff000)";

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + c1.value + ", " + c2.value + ")";

  h3.style.color = "white";
  h3.style.fontFamily =
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
  h3.textContent = body.style.background + ";";
}

c1.addEventListener("input", setGradient);
c2.addEventListener("input", setGradient);
