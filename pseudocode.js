// create a variable called entries and set it equal to an empty array. This array represents our equation.

// create a variable called total and set it equal to zero.

// create a variable called temp and set it equal to an empty string.  This string represents the number or symbol pressed.

// create a function such that on the click of a button element:
//      
//      a variable called val will store the text content of the button
//      
//      an if statement will be created such that:
//          1. if val is a number or decimal point:
//              - add this to the current value of the temp variable
//              - set the value of the element with id="answer" to a substring containing only the first 9 characters of temp.
//      
//          2. else if val is "AC": 
//              - clear the entries array, clear the temp variable
//              - clear the total variable and set the value of the element with id="answer" to an empty string
//      
//          3. else if val is "CE": 
//              - clear the temp variable
//              - set the value of the element with id="answer" to an empty string
//
//          4. else if val is x: 
//              - push the value of temp to the entries array
//              - push the '*' symbol to the entries array
//              - clear the temp variable.
//
//          5. else if val is ÷: 
//              - push the value of temp to the entries array
//              - then push the '/' symbol to the entries array, then clear the temp variable.
//
//          6. else if val is =: 
//              - push the value of temp to the entries array.
//              - create a variable nt and set it equal to the numerical format of the first item in the entries array.
//              - create a for loop for the entries array, beginning at i = 1:
//                      - create a variable called nextNum and set it equal to the numerical format of the i+1 value of the entries array
//                      - create a variable called symbol and set it equal to the 'i'th value of the entries array
//                      - create an if statement such that:
//                                  - if symbol === "+", the value of nextNum is added to nt
//                                  - else if symbol === "-", the value of nextNum is subtracted from nt
//                                  - else if symbol === "x", the value of nt is multiplied by nextNum
//                                  - else if symbol === "/", the value of nt is divided by nextNum
//                      - increase i by one before closing the for loop (this means i will increase by two at the end of each cycle)
//              - if the value of nt is negative, take the absolute value of nt and add '-' to the end
//              - set the value of the element with id="answer" to nt
//              - clear the entries array
//              - clear the temp variable
//
//          7. else:
//              - push the value of temp to the entries array
//              - push the value of val to the entries array
//              - clear the temp variable
//

