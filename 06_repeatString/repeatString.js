const repeatString = function(string, number) {
    if (number < 0) {
        return "ERROR";
    }

    let repeat = "";
    for (let i = 0; i < number; i++) {
        repeat += string;
    }
    return repeat;
};

// Do not edit below this line
module.exports = repeatString;
