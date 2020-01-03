var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient")

//Console log to make sure you are grabbing the right things
console.log(css);
console.log(color1);
console.log(color2);

// color1.addEventListener('input', function(){
//     console.log(color1.value)
//     body.style.background = "linear-gradient(to right, "
//     + color1.value
//     +", "
//     +color2.value
//     +")";
// })
// color2.addEventListener('input', function(){
//     console.log(color2.value)
//     body.style.background = "linear-gradient(to right, "
//     + color1.value
//     +", "
//     +color2.value
//     +")";
// })




//SAME THING JUST REFACTORED TO BE DRY


function changeColor() {
    body.style.background = "linear-gradient(to right, "
    + color1.value
    +", "
    +color2.value
    +")";

    css.textContent = body.style.background + ";";
}

// color1.addEventListener('input', function(){
//     console.log(color1.value)
//     changeColor();
// })
// color2.addEventListener('input', function(){
//     console.log(color2.value)
//     changeColor();
// })
//or

//we do not invoke the function because we do not want changeColor to
//get triggered automatically when the page is loaded
//everytime the input is selected changeColor will trigger
// color1.addEventListener('input', changeColor);
// color2.addEventListener('input', changeColor);

