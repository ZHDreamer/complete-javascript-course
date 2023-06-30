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
