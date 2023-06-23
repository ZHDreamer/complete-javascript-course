// Coding Challenge #1
function BMI(weight, height) {
    return weight / height ** 2;
}

const marksWeight = 78;
const marksHeight = 1.69;

const johnsWeight = 92;
const johnsHeight = 1.95;

var marksBMI = BMI(marksWeight, marksHeight);
var johnsBMI = BMI(johnsWeight, johnsHeight);

var markHigherBMI = marksBMI > johnsBMI;

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

// Coding Challenge #3
function averageScore(scores) {
    return scores.reduce((sum, score) => sum + score) / scores.length;
}

const dophinsScores = [97, 112, 101];
const koalasScores = [109, 95, 123];

const dophinsScore = averageScore(dophinsScores);
const koalasScore = averageScore(koalasScores);

console.log(dophinsScore, koalasScore);

if (dophinsScore > koalasScore && dophinsScore >= 100) {
    console.log(`Dolphins win`);
} else if (dophinsScore < koalasScore && koalasScore >= 100) {
    console.log(`Koalas win`);
} else if (
    dophinsScore === koalasScore &&
    dophinsScore >= 100 &&
    koalasScore >= 100
) {
    console.log(`Draw`);
} else {
    console.log(`No one wins`);
}
