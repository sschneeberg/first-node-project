function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function beBasic() { return "That's so fetch!"; }

//ES6:
//export function beBasic() { return "That's so fetch!"; }

//module.exports.beBasic = () => "That's so fetch!"

export {
    add,
    subtract,
    beBasic
}