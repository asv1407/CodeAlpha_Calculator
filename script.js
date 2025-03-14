let display = document.getElementById("display");
let expression = "";

function getValue(val) {
    if (expression === "0") expression = "";

    if (isNaN(val) && isNaN(expression.slice(-1))) return;

    if (val === "x") {
        expression += "*";
    } else {
        expression += val;
    }

    updateDisplay();
}

function updateDisplay() {
    display.innerHTML = expression || "0";
}

function deleteLast() {
    expression = expression.slice(0, -1);
    updateDisplay();
}

function calculateResult() {
    try {
        if (isNaN(expression.slice(-1))) {
            alert("Invalid input. Please enter a number first.");
            return;
        }

        let result = eval(expression);

        expression = result.toString().length > 8 ? result.toFixed(6) : result.toString();
        updateDisplay();
    } catch {
        display.innerHTML = "Error";
        expression = "";
    }
}

function resetInput() {
    expression = "";
    updateDisplay();
}

function squareRoot() {
    try {
        let result = Math.sqrt(eval(expression));
        expression = result.toString();
        updateDisplay();
    } catch {
        display.innerHTML = "Error";
        expression = "";
    }
}

function square() {
    try {
        let result = Math.pow(eval(expression), 2);
        expression = result.toString();
        updateDisplay();
    } catch {
        display.innerHTML = "Error";
        expression = "";
    }
}

document.addEventListener("keydown", function (event) {
    let key = event.key;

    if (!isNaN(key) || key === "." || ["+", "-", "*", "/"].includes(key)) {
        getValue(key);
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Backspace") {
        deleteLast();
    }
});