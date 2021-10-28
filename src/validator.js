export function validateAnswer(formula, answer) {
    formula = formula.replace("+", " + ");
    formula = formula.replace("-", " - ");

    const [operand1, operator, operand2] = formula.split(" ")
    if (operator === "+") {
        return (parseInt(operand1) + parseInt(operand2)) === parseInt(answer)
    } else if (operator === "-") {
        return (parseInt(operand1) - parseInt(operand2)) === parseInt(answer)
    } else {
        alert('Error')
    }
};