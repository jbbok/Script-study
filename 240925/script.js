// 240925

// 첫번째 문제

// 사용자에게 점수를 입력받아서
// 100~90 : A 등급
// 89~80 : B등급
// 79~70 : C등급
// 69~60 : D등급
// 59~0 : F등급
// 등급을 alert로 출력해주세요
// if, else if, else를 적절히 써보세요!
// 각자 75라는 값을 입력했을 때 뜨는 결과를 캡쳐해서 개인슬랙 말고 여기에 올려주세요

// let num = Number(prompt("점수를 입력해주세요."));

// switch (true) {
//   case num > 90:
//     console.log("A등급");
//     break;
//   case num > 80:
//     console.log("B등급");
//     break;
//   case num > 70:
//     console.log("C등급");
//     break;
//   case num > 60:
//     console.log("D등급");
//     break;
//   default:
//     console.log("F등급");
// }

// const score = Number(prompt("점수를 입력해주세요"));
// let grade = "";

// switch (parseInt(score / 10)) {
//   case 10:
//   case 9:
//     grade = "A등급";
//     break;
//   case 8:
//     grade = "B등급";
//     break;
//   case 7:
//     grade = "C등급";
//     break;
//   case 6:
//     grade = "D등급";
//     break;
//   default:
//     grade = "F등급";
// }

// alert(`당신의 학점은 ${grade}입니다!`);

// ----------------------------------

// 두번째 문제

// 숫자 a와 b를 받고
// alert로 두수를 비교하여 a가 b보다 큽니다를 출력해주세요
// (삼항연산자로 풀기!)
// 조건 ? true일때 행위 : false일때 행위;

let a = Number(prompt("숫자를 입력해주세요."));
let b = Number(prompt("숫자를 입력해주세요."));

a > b ? alert("a가 b보다 큽니다") : alert("a가 b보다 작습니다");
