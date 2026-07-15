const PI = 3.14;
let radius;
let circumference;

// radius = window.prompt("Enter the radius of Circle");
// radius = Number(radius);

// circumference = 2 * pi * radius;

// console.log(circumference);

document.getElementById("mybtn").onclick = function () {
    radius = document.getElementById("textbox").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("ans").textContent = circumference +"cm";
}