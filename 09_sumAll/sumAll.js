const sumAll = function(num1, num2) {
    let total = 0;
    let low = Math.min(num1, num2);
    let high = Math.max(num1, num2);

    if (typeof num1 != "number" || typeof num2 != "number") {
        return "ERROR";
    }

    if (low < 0 || high < 0) {
        return "ERROR";
    }

    if (low % 1 != 0 || high % 1 != 0) {
        return "ERROR";
    }

    for (let i = low; i <= high; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
