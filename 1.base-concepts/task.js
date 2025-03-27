"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  if (d > 0) {
    arr[0] = (-b + Math.sqrt(d)) / (2 * a);
    arr[1] = (-b - Math.sqrt(d)) / (2 * a);
  } else if (d === 0) {
    arr[0] = -b / (2 * a);
  } else {
    arr = [];
  }
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let per = parseInt(percent) / 100 / 12;
  let cont = parseInt(contribution);
  let am = parseInt(amount);
  let month = parseInt(countMonths);

  let s = am - cont;
  let monthPay = s * (per + per / (Math.pow((1 + per), month) - 1));
  let total = (monthPay * month).toFixed(2);
  console.log(total);
  return +total;
}