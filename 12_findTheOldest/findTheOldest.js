// const findTheOldest = function (arrayIn) {
//     console.log(typeof(arrayIn));
//   let maxAge = 0;
//   let oldest = "";
//   for (let i = 0; i < arrayIn.length; i++) {
//     let personAge = arrayIn[i].yearOfDeath - arrayIn[i].yearOfBirth;
//     console.log("age", personAge);
//     if (personAge > maxAge) {
//       maxAge = personAge;
//       oldest = arrayIn[i];
//       console.log(oldest);
//     }
//   }
//   console.log('end: ', `\"${oldest.name}\"`);
//   return `\"${oldest.name}\"`;
// };

const findTheOldest = function (array) {
    return array.reduce((oldest, currentPerson) => {
      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
      const currentAge = getAge(
        currentPerson.yearOfBirth,
        currentPerson.yearOfDeath
      );
      return oldestAge < currentAge ? currentPerson : oldest;
    });
  };
  
  const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };

// Do not edit below this line
module.exports = findTheOldest;
