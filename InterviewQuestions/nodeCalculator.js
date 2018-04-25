// Create a command-line node application that takes in parameters like this:
// node calculator.js add 1 2 ... and outputs 3
// node calculator.js subtract 5 2 ... and outputs 3
// node calculator.js multiply 3 2 ... and outputs 6
// node calculator.js divide 8 2 ... and outputs 4
// node calculator.js remainder 7 2... and outputs 1
// node calculator.js exp 7 2 ... and output 49 
// node calculator.js algebra ax+b=c

// process.argv starts at 2 

const operation = process.argv[2];

const basicOp = basicOps(process.argv[3], process.argv[4]);

switch(operation) {
    case "add": 
        console.log(basicOp.add());
        break;
    case "subtract":
        console.log(basicOp.subtract());
        break;
    case "multiply":
        console.log(basicOp.multiply());
        break;
    case "divide":
        console.log(basicOp.divide());
        break;
    case "remainder":
        console.log(basicOp.remainder());
        break;
    case "exp":
        console.log(basicOp.exp());
        break;
    case "algebra":
        console.log("algebra");
        break;
    default: 
        console.log("You need to choose a mathematical operation to perform.");
}

function basicOps(a, b) {
    a = Number(a); // or parseFloat in case of inputs like "2a" --> 2
    b = Number(b);

    // closure
    return {
        add() {
            return a + b;
        },
        subtract() {
            return a - b;
        },
        multiply() {
            return a * b;
        },
        divide() {
            return a / b;
        },
        remainder() {
            return a % b;
        },
        exp() {
            return a ** b;
        }
    }
}

function algebra(str) {
    const aIndex = str.indexOf("x");
    const equalIndex = str.indexOf("=");

}