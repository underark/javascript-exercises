const palindromes = function (string) {
    let newString = string.replace(/\W/gi, '');
    newString = newString.toLowerCase();

    const last = newString.length - 1;
    const mid = Math.floor(newString.length / 2);

    for (let i = 0; i < mid; i++) {
        if (newString[i] != newString[last - i]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
