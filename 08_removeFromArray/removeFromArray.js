const removeFromArray = function(array, ...items) {
    let newArray = [];
    array.forEach((member) => {
        if (!items.includes(member)) {
            newArray.push(member);
        }
    })
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
