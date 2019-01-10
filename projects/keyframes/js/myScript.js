var cloudOneElement = document.getElementById("cloudOne");

var dateButtonElement = document.getElementById("date");
var cloudTwoElement = document.getElementById("cloudTwo");

// output the div-element
console.log(cloudOneElement);
console.log(cloudThree)

var addtition = function(x, y) {
    var result;
    result = x + y;
    return result;
};

var resultAddition = addtition(30,72);

cloudOneElement.onmouseover = function (){
    alert(resultAddition);
};

var Multiplication = function (x,y) {
    var result;
    result = x * y;
    return result;
};

var resultMultiplication =Multiplication(2,4);

cloudTwoElement.onclick = function (){
    alert(resultMultiplication);
};

var cloudFourText = document.getElementById("cloudFourDate");
var today = new Date();

dateButtonElement.onclick = function (){
    cloudFourText.innerHTML = today;
};
today = 1;

var cloudThreeElement = document.getElementById("cloudThree");
function myFunction(p1 , p2) {
    return p1 * p2;
}
var resultmultiplication = Multiplication(4,3);
    
cloudThreeElement.onclick = function (){
    alert(resultmultiplication);
    console.log(resultmultiplication);
};

var grassTextElement = document.getElementById("textgrass");
var name = "Semhar";
var teacher = "Davide";
grassTextElement.onclick = function (){
    grassTextElement.innerHTML =(name + " is my name and my teacher is " + teacher );
};

var flowerElement = document.getElementById("textgrass");
flowerElement.onmouseover = function (){
    var imageElement = document.createElement('img');
    imageElement.src = "images/flower.jpg";
    imageElement.classList.add("picture");
    imageElement.classList.add("image");
    flowerElement.appendChild(imageElement);
}

var paragraphElement = document.getElementById("paragraph");
paragraphElement.onmouseover = function (){
    var pElement = document.createElement('p');
    var txt = " Yes, i can do that, ";
    txt += " You can easily see it as a bright star without any telescope ";
    txt += " but some amateur astronomers ";
    pElement.innerHTML = txt;
    pElement.classList.add("paragraph");
    paragraphElement.appendChild( pElement);
}

console.log(resultMultiplication);
console.log(resultAddition);
console.log(2 + 3 - 1);
console.log(29*3+4-7);








