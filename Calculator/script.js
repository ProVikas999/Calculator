
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = '';
}

function calculate() {
    try {
        var expression = document.getElementById("display").value;
        expression = expression.replace(/%/g, '/100');
        // Replace 'X' with '*' for multiplication
        expression = expression.replace(/X/g, '*');
        document.getElementById("display").value = eval(expression);
    } catch (error) {
        document.getElementById("display").value = 'Error';
    }
}

function backspace() {
    var currentValue = document.getElementById("display").value;
    document.getElementById("display").value = currentValue.slice(0, -1); // Remove the last character
}

