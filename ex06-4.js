const score = 99;
let hakjum = '';

//else if문의 간단한 작업
if (score >= 90) {
  hakjum = 'A';
} else if (score >= 80) {
  hakjum = 'B';
} else if (score >= 70) {
  hakjum = 'C';
} else if (score >= 60) {
  hakjum = 'D';
}  else {
  hakjum = 'F';
}
console.log('학점 : ', hakjum );

