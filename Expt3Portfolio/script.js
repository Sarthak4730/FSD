let darkTheme = false;

let btn = document.querySelector("button");
let img = document.querySelector("#modeToggle");

btn.addEventListener("click", ()=>{
    darkTheme = !darkTheme;    

    if(darkTheme){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        btn.style.backgroundColor = "greenyellow";
        btn.style.border = "3px solid white";
        img.setAttribute("src", "sun.svg");
    }else{
        document.body.style.backgroundColor = "greenyellow";
        document.body.style.color = "black";
        btn.style.backgroundColor = "white";
        btn.style.border = "3px solid black";
        img.setAttribute("src", "moon.svg");
    }
});