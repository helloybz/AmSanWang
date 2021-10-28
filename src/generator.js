export function generateRandomFormula() {
    var operand1 = generateRandomNumber(2)
    var operand2 = generateRandomNumber(2)
    var operator = generateRandomOperator()

    return operand1 + operator + operand2;
}

function generateRandomNumber(digit) {
    return Math.floor(Math.random() * (10 ** digit))
}

function generateRandomOperator() {
    if (Math.random() >= 0.5) {
        return "+"
    } else {
        return "-"
    }
}