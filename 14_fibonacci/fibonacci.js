const fibonacci = function(number) {
    if (number < 0) {
        return "OOPS"
    }
    let counter = 2;
    let current = 1;
    let previous = 1;

    while (counter < number) {
        current = current + previous;
        previous = current - previous;
        counter++;
    }
    return number == 0 ? 0 : current;
};

// Do not edit below this line
module.exports = fibonacci;
