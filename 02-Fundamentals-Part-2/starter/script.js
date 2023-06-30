"use strict";

// Coding Challenge #1
function averageScore(scores) {
    return scores.reduce((sum, score) => sum + score) / scores.length;
}

function checkWinner(teamsScore) {
    function isWinner(teamsScore, teamIndex) {
        const isHalf = (otherScore) => teamsScore[teamIndex] >= otherScore * 2;
        return teamsScore.filter((_item, i) => i !== teamIndex).every(isHalf);
    }

    for (let i = 0; i < teamsScore.length; i++) {
        if (isWinner(teamsScore, i)) {
            return i;
        }
    }
    return -1;
}

const dolphinsScores = [44, 23, 71];
const koalasScores = [65, 54, 49];

var dolphinsScore = averageScore(dolphinsScores);
var koalasScore = averageScore(koalasScores);
console.log(dolphinsScore, koalasScore);

var teamsScore = [dolphinsScore, koalasScore];

console.log(checkWinner(teamsScore));

// Coding Challenge #2
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];

var tips = bills.map(calcTip);
console.log(tips);

var total = bills.map((bill, i) => bill + tips[i]);
console.log(total);

// Coding Challenge #3
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        if (!this.BMI) {
            this.BMI = this.height / this.mass ** 2;
        }
        return this.BMI;
    },
};

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        if (!this.BMI) {
            this.BMI = this.height / this.mass ** 2;
        }
        return this.BMI;
    },
};

if (mark.calcBMI() > john.calcBMI()) {
    console.log(
        `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${
            john.fullName
        }'s (${john.calcBMI()})!`
    );
} else {
    console.log(
        `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${
            mark.fullName
        }'s (${mark.calcBMI()})!`
    );
}
