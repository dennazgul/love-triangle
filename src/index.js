/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */ 
module.exports = function getLoveTrianglesCount(preferences = []) {
var number = 0;
  for (i=0;i<preferences.length;i=i+1) {
var second = preferences[preferences[i]-1];
var third = preferences[second-1];
if ((i+1) !=preferences[i] && second!=third) {//чтобы не считало треугольником число со своим же номером
if ((i+1) == third) {
number = number+1;
}
}; 
  };
  return number/3;//деление на 3, т.к. находит каждый из треугольник по одной из вершин, т.е. три раза

  }
