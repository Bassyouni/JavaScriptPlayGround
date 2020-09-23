
module.exports = evaluateRegex;

function evaluateRegex(regex, stringForEvalouation) {
    const reg = RegExp(regex, "g");
    return (stringForEvalouation.match(reg) || []).join("");
}