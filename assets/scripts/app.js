let currentResult = 0;
let logEntries = [];

function getInputValue() {
    return parseInt(userInput.value);
}

function getTextContent(operator, current, input) {
    let content = `${current} ${operator} ${input}`;
    outputResult(currentResult, content)
}

function add() {
    let inputValue = getInputValue();
    let initial = currentResult
    currentResult += inputValue;
    getTextContent('+', initial, inputValue)
    logEntries.push({
        operator: '+',
        number: inputValue
    });
}

function subtract() {
    let inputValue = getInputValue();
    let initial = currentResult
    currentResult -= inputValue;
    getTextContent('-', initial, inputValue)
}

function multiply() {
    let initial = currentResult
    let inputValue = getInputValue();
    currentResult *= inputValue;
    getTextContent('*', initial, inputValue)
}

function divide() {
    let initial = currentResult
    let inputValue = getInputValue();
    currentResult /= inputValue;
    getTextContent('/', initial, inputValue)
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);