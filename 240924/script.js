// 240924

// 첫번째 문제

// num1을 프롬프트로 입력받아서 if문으로 num1이 10보다 크거나 같으면 "num1은 10보다 크거나 같습니다."를 출력하고, 작으면 "num1은 10보다 작습니다."를 출력해주세요.

// num1 = Number(prompt("숫자를 입력해주세요."));

// if (num1 >= 10) {
//   console.log("num1은 10보다 크거나 같습니다");
// } else if (num1 < 10) {
//   console.log("num1은 10보다 작습니다.");
// }

//--------

// let num1 = Number(prompt("숫자를 입력해주세요", 10));
// if (num1 >= 10) {
//   alert("num1은 10보다 크거나 같습니다.");
// } else {
//   alert("num1은 10보다 작습니다.");
// }

// 두번쨰 문제

// 사용자에게 점수를 입력받아서
// 100~90 : A 등급
// 89~80 : B등급
// 79~70 : C등급
// 69~60 : D등급
// 59~0 : F등급
// 등급을 alert로 출력해주세요
// if, else if, else를 적절히 써보세요!
// 각자 75라는 값을 입력했을 때 뜨는 결과를 캡쳐해서 개인슬랙 말고 여기에 올려주세요

// let a = Number(prompt("점수를 입력해주세요."));

// if (100 >= a <= 90) {
//   console.log("A등급");
//   alert("A등급");
// } else if (89 >= a >= 80) {
//   console.log("B등급");
//   alert("B등급");
// } else if (79 >= a >= 70) {
//   console.log("C등급");
//   alert("C등급");
// } else if (69 >= a >= 60) {
//   console.log("D등급");
//   alert("D등급");
// } else {
//   console.log("E등급");
//   alert("E등급");
// }

const score = Number(prompt("점수를 입력해주세요"));
if (score >= 90) {
  alert("A등급");
} else if (score >= 80) {
  alert("B등급");
} else if (score >= 70) {
  alert("C등급");
} else if (score >= 60) {
  alert("D등급");
} else {
  alert("F등급");
}
