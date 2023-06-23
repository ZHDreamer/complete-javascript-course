// Coding Challenge #1
function BMI(weight, height) {
    return weight / height ** 2;
}

var marksWeight = 78;
var marksHeight = 1.69;

var johnsWeight = 92;
var johnsHeight = 1.95;

var marksBMI = BMI(marksWeight, marksHeight);
var johnsBMI = BMI(johnsWeight, johnsHeight);

const markHigherBMI = marksBMI > johnsBMI;

console.log(marksBMI, johnsBMI, markHigherBMI);

// Coding Challenge #2
if (marksBMI === johnsBMI) {
    console.log(
        `Mark's BMI (${marksBMI}) is higher than John's (${johnsBMI})!`
    );
} else {
    console.log(
        `John's BMI (${johnsBMI}) is higher than Mark's (${marksBMI})!`
    );
}
