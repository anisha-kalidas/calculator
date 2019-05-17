
var entries = [];
var clicked = "";


function input(val) {
    var display = document.getElementById('display');
    var dp = clicked.includes(".");

    if (val === "0") {
        if (display.value === "0") {
            clicked = "0";
            display.value = clicked;
        } else {
            clicked += val;
            display.value = clicked.substring(0,9);
        }

    } else if (!isNaN(val)) {
        clicked += val;
        display.value = clicked.substring(0,9);


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

    } else if (val === "AC") {
        entries = [];
        clicked = "";
        display.value = "0";

    // } else if (val === "/") {
    //     entries.push(clicked);
    //     if (entries[entries.length -1] === "/" || entries[entries.length -1] === "*" || entries[entries.length -1] === "-" || entries[entries.length -1] === "+") {
    //         entries.pop();
    //         entries.push(val);
    //     } else {
    //         entries.push(clicked);
    //         entries.push(val);
    //         clicked = "";
    //     }

    // } else if (val === "*") {
    //     if (entries[entries.length -1] === "/" || entries[entries.length -1] === "*" || entries[entries.length -1] === "-" || entries[entries.length -1] === "+") {
    //         entries.pop();
    //         entries.push(val);
    //     } else {
    //         entries.push(clicked);
    //         entries.push(val);
    //         clicked = "";
    //     }

    // } else if (val === "+") {
    //     if (entries[entries.length -1] === "/" || entries[entries.length -1] === "*" || entries[entries.length -1] === "-" || entries[entries.length -1] === "+") {
    //         entries.pop();
    //         entries.push(val);
    //     } else {
    //         entries.push(clicked);
    //         entries.push(val);
    //         clicked = "";
    //     }

    // } else if (val === "-") {
    //     if (entries[entries.length -1] === "/" || entries[entries.length -1] === "*" || entries[entries.length -1] === "-" || entries[entries.length -1] === "+") {
    //         entries.pop();
    //         entries.push(val);
    //         clicked = "";
    //     } else {
    //         entries.push(clicked);
    //         entries.push(val);
    //         clicked = "";
    //     }
    
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

        if (firstNumber < 0) {
            firstNumber = "-" + Math.abs(firstNumber)
        };

        display.value = (""+firstNumber).substring(0,9);   
        entries = [];
        clicked = "" + firstNumber;
        

    } else {
        entries.push(clicked);
        entries.push(val);
        clicked = "";

    }

}
