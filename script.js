
var entries = [];
var clicked = "";
var click = new Audio('audio/click.mp3');

// function will run each time a button is clicked
function input(val) {
    var display = document.getElementById('display');
    var dp = clicked.includes(".");

    click.play();

// prevent multiple zeros at the start of a number
    if (val === "0") {
        if (display.value === "0") {
            clicked = "0";
            display.value = clicked;    
        } else {
            clicked += val;
            display.value = clicked.substring(0,9);
        }

// if a number is pressed, concat it to the number on the string
    } else if (!isNaN(val)) {
        clicked += val;
        display.value = clicked.substring(0,9);

// prevent multiple decimal points
    } else if (val === ".") {
        if (!dp) {
            if (display.value === "0" || clicked === "") {
                clicked = "0" + val;
                display.value = clicked.substring(0,9);
            } else {
                clicked += val;
                display.value = clicked.substring(0,9);
            }
        } else {
            display.value = clicked.substring(0,9);
        }

// if the AC button is pressed, clear the screen
    } else if (val === "AC") {
        entries = [];
        clicked = "";
        display.value = "0";

// if the equals button is pressed, calculate the answer
    } else if (val === "=") {
        entries.push(clicked);

        var firstNumber = Number(entries[0]);

        for (var i = 1; i < entries.length; i++) {
            var nextNumber = Number(entries[i+1]);
            var operator = entries[i];

            if (operator === "/") {
                firstNumber /= nextNumber;
            } else if (operator === "*") {
                firstNumber *= nextNumber
            } else if (operator === "+") {
                firstNumber += nextNumber
            } else if (operator ==="-") {
                firstNumber -= nextNumber
            };

            i++
        }
        // if the result is a negative number
        if (firstNumber < 0) {
            firstNumber = "-" + Math.abs(firstNumber)
        };

        // make the result the new clicked value so we can perform calculations on it
        display.value = (""+firstNumber).substring(0,9);   
        entries = [];
        clicked = "" + firstNumber;
        
// operator buttons - If 2 or more operators are entered consecutively, the operation performed should be the last operator entered
    } else {
        if (clicked === "") {
            entries.pop();
            entries.push(val);
        } else {
            entries.push(clicked);
            entries.push(val);
            clicked = "";
        }

    }

}
