const findTheOldest = function(people) {
    return people.reduce((previous, current) => {
        const year = new Date().getFullYear();
        const previousAge = previous.yearOfDeath != null ? previous.yearOfDeath - previous.yearOfBirth : year - previous.yearOfBirth
        const currentAge = current.yearOfDeath != null ? current.yearOfDeath - current.yearOfBirth : year - current.yearOfBirth;
        // console.log(`person is: ${previous.name} age ${previousAge}`);
        return previousAge > currentAge ? previous : current;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
