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
