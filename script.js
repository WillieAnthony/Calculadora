let display = document.getElementById('display');

function clearDisplay() {
    display.textContent = '0';
}

function appendNumber(number) {
    if (display.textContent === '0') {
        display.textContent = number;
    } else {
        display.textContent += number;
    }
}

function appendOperator(operator) {
    const lastChar = display.textContent.slice(-1);
    if ('+-*/'.includes(lastChar)) {
        display.textContent = display.textContent.slice(0, -1) + operator;
    } else {
        display.textContent += operator;
    }
}

function deleteLast() {
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
    } else {
        display.textContent = '0';
    }
}

function calculateResult() {
    try {
        const sanitizedInput = sanitizeInput(display.textContent);
        const result = eval(sanitizedInput);
        display.textContent = formatResult(result);
    } catch {
        display.textContent = 'Error';
    }
}

function sanitizeInput(input) {
    return input.replace(/[^0-9.+\-*/]/g, '');
}

function formatResult(result) {
    if (Number.isInteger(result)) {
        return result.toString();
    }
    return result.toFixed(10).replace(/\.?0+$/, '');
}
