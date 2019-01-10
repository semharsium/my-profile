var alertButtonElement = document.getElementById("alertButton");
var sheepEars = document.getElementsByClassName("sheep__ear--left");

// output the button-element
console.log(sheepEars);

// bind onclick-event to button
alertButtonElement.onclick = function() {
    alert("I'm a sheep");
};

