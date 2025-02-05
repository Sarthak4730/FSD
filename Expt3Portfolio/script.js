let darkTheme = false;

let btn = document.querySelector("button");
let img = document.querySelector("#modeToggle");

btn.addEventListener("click", () => {
  darkTheme = !darkTheme;

  if (darkTheme) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    btn.style.backgroundColor = "#befbff";
    btn.style.border = "3px solid white";
    document.querySelector("h2").style.color = "yellow";
    img.setAttribute("src", "sun.svg");
    document.querySelector("#logo").style.filter = "invert(1)";
  } else {
    document.body.style.backgroundColor = "#befbff";
    document.body.style.color = "black";
    btn.style.backgroundColor = "white";
    btn.style.border = "3px solid black";
    document.querySelector("h2").style.color = "#00879d";
    img.setAttribute("src", "moon.svg");
    document.querySelector("#logo").style.filter = "invert(0)";
  }
});
