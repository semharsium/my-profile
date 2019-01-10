var outputElement = document.getElementById("display");
var buttonOneElement = document.getElementById("buttonOne");
var buttonTwoElement = document.getElementById("buttonTwo");
var buttonThreeElement = document.getElementById("buttonThree");
var buttonPlusElement = document.getElementById("buttonPlus");
var buttonFourElement = document.getElementById("buttonFour");
var buttonFiveElement = document.getElementById("buttonFive");
var buttonMinusElement = document.getElementById("buttonMinus");
var buttonSixElement = document.getElementById("buttonSix");
var buttonSevenElement = document.getElementById("buttonSeven");
var buttonEightElement = document.getElementById("buttonEight");
var buttonNineElement = document.getElementById("buttonNine");
var buttonTimesElement = document.getElementById("buttonTimes");
var buttonDivElement = document.getElementById("buttonDiv");
var buttonClearElement = document.getElementById("buttonClear");
var buttonPercentElement = document.getElementById("buttonPercent");
var buttonZeroElement = document.getElementById("buttonZero");
var buttonDecElement = document.getElementById("buttonDec");
var buttonAnsElement = document.getElementById("buttonAns");

var checkIfLastCharacterIsOperator = function (string) {
    var lastCharacter = string[string.length - 1];
    console.log(lastCharacter);
    if ((lastCharacter == '*') 
    || (lastCharacter == '+') 
    || (lastCharacter == '-') 
    || (lastCharacter == '/') 
    || (lastCharacter == '.')) {
        return true;
    }
    return false;
};

buttonOneElement.onclick = function () {
    //It  is the same as outputElement.value += 1;
    if (outputElement.value == '0' 
    || outputElement.value == '') {
        outputElement.value = "1";
    } else {
        outputElement.value = outputElement.value + 1;
    }
};

buttonTwoElement.onclick = function () {
    if (outputElement.value == '0' 
    || outputElement.value == '') {
        outputElement.value = "2";
    } else {
        outputElement.value = outputElement.value + 2;
    }
};

buttonThreeElement.addEventListener("click", function () {
    if (outputElement.value == '0' 
    || outputElement.value == '') {
        outputElement.value = "3";
    } else {
        outputElement.value = outputElement.value + 3;
    }
});

buttonPlusElement.addEventListener("click", function () {
    if (outputElement.value == '0' 
    || outputElement.value == '') {
        outputElement.value = '+';
    } else {
        if (!checkIfLastCharacterIsOperator(outputElement.value)) {
            outputElement.value = outputElement.value + "+";
        }
    }
});

buttonFourElement.addEventListener("click", function () {
    if (outputElement.value == '0' 
    || outputElement.value == '') {
        outputElement.value = 4;
    } else {
        outputElement.value = outputElement.value + 4;
    }
});

buttonFiveElement.addEventListener("click", function () {
    if (outputElement.value == '0' 
    || outputElement.value == '') {
        outputElement.value = 5;
    } else {
        outputElement.value = outputElement.value + 5;
    }
});

buttonSixElement.addEventListener("click", function () {
    if (outputElement.value == '0' 
    || outputElement.value == '') {
        outputElement.value = 6;
    } else {
        outputElement.value = outputElement.value + 6;
    }
});

buttonMinusElement.addEventListener("click", function () {
    if (outputElement.value == '0' 
    || outputElement.value == '') {
        outputElement.value = '-';
    } else {
        if (!checkIfLastCharacterIsOperator(outputElement.value)) {
            outputElement.value = outputElement.value + "-";
        }
    }
});

buttonSevenElement.addEventListener("click", function () {
    if (outputElement.value == '0' 
    || outputElement.value == '') {
        outputElement.value = '7';
    } else {
        outputElement.value = outputElement.value + 7;
    }
});

buttonEightElement.addEventListener("click", function () {
    if (outputElement.value == '0' 
    || outputElement.value == '') {
        outputElement.value = '8';
    } else {
        outputElement.value = outputElement.value + 8;
    }
})

buttonNineElement.addEventListener("click", function () {
    if (outputElement.value == '0' 
    || outputElement.value == '') {
        outputElement.value = '9';
    } else {
        outputElement.value = outputElement.value + 9;
    }
});

buttonTimesElement.addEventListener("click", function () {
    if (outputElement.value == '0' 
    || outputElement.value == '') {
        outputElement.value = "*";
    } else {
        if (!checkIfLastCharacterIsOperator(outputElement.value)) {
            outputElement.value = outputElement.value + "*";
        }
    }
});

buttonDivElement.addEventListener("click", function () {
    if (outputElement.value == '0' 
    || outputElement.value == '') {
        outputElement.value = '/';
    } else {
        if (!checkIfLastCharacterIsOperator(outputElement.value)) {
            outputElement.value = outputElement.value + "/";
        }
    }
});

buttonClearElement.addEventListener("click", function () {
    if (outputElement.value == '0' 
    || outputElement.value == '') {
        outputElement.value = '0';
    } else {
        outputElement.value = '0';
    }
});

var percentage = function (number) {
    return (number / 100);
    console.log("percentage");
};
buttonPercentElement.addEventListener("click", function () {
    if (outputElement.value == '0' 
    || outputElement.value == '') {
        outputElement.value = '%';
    } else {
        outputElement.value = percentage(outputElement.value);
    }
});

buttonZeroElement.addEventListener("click", function () {
    if (outputElement.value == '0' 
    || outputElement.value == '') {
        outputElement.value = '0';
    } else {
        outputElement.value = outputElement.value + '0';
    }
});

buttonDecElement.addEventListener("click", function () {
    if (outputElement.value == '') {
        outputElement.value = '.';
    } else {
        if (!checkIfLastCharacterIsOperator(outputElement.value)) {
            outputElement.value = outputElement.value + ".";
        }
    }
});

buttonAnsElement.addEventListener("click", function () {
    if (outputElement.value == undefined 
        || outputElement.value == '') {
        outputElement.value = 0;
    } else {
        var ans = eval(outputElement.value);
        outputElement.value = ans;
    }
});
