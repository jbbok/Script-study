// 240926

// 첫번째 문제

// 사용자로부터 이름, 키, 체중을 입력 받은 후 적정 평균 체중을 구합니다. 적정 평균 체중 오차는 플러스, 마이너스 5이며 사용자가 입력한 체중이 적정 체중일 경우에는 'xxx님은 적정 체중입니다.'를 , 아닐 경우에는 'xxx님은 적정 체중이 아닙니다'를 출력해주세요
// 적정 체중 구하는 공식은 키에서 100 뺀 후 0.9를 곱해주면 됩니다
// 삼항연산자로 alert 찍어보죠
// result라는 변수에 결과를 삼항연산자로 넣은다음 그걸 alert로 출력!

// let name = prompt("이름을 입력해주세요!");
// let height = Number(prompt("키를 입력해주세요!"));
// let weight = Number(prompt("체중을 입력해주세요"));

// let result = (height - 100) * 0.9;

// result - 5 <= weight >= result + 5
//   ? alert(`${name}님은 적정 체중입니다.`)
//   : alert(`${name}님은 적정 체중이 아닙니다.`);

// result - 5 <= weight && weight >= result + 5
//   ? alert(`${name}님은 적정 체중입니다.`)
//   : alert(`${name}님은 적정 체중이 아닙니다.`);

// const name = prompt("당신의 이름은?");
// const height = Number(prompt("당신의 키는?"));
// const weight = Number(prompt("당신의 몸무게는?"));
// const normalWeight = (height - 100) * 0.9;
// const result =
//   normalWeight - 5 <= weight && weight <= normalWeight + 5
//     ? "입니다"
//     : "이 아닙니다";
// alert(`${name}님은 적정체중${result}`);

// ---------------

// 두번째 문제

// 진영이의 하루 지출 내역이 다음과 같다고 할 때, 하루 지출 비용의 합계를 구한 후 적장 지출 비용의 초과 여부를 출력하세요.
// 진영이의 하루 지출 내역은 교통비 3,000원, 식비 6,000원, 음료비 3,000원입니다. 삼항 조건 연산자를 사용하여 하루 적정 지출 비용인 1만원을 초과했을 경우에는 "000원 초과"라고 출력하고, 아닐 경우에는 "돈 관리 잘했어요!"라고 출력하세요.

let a = Number(prompt("교통비를 입력해주세요"));
let b = Number(prompt("식비를 입력해주세요"));
let c = Number(prompt("음료비를 입력해주세요"));

let total = a + b + c;
console.log(total);

let result = total - 10000;
console.log(result);

total < 10000 ? alert(`돈 관리 잘했어요!`) : alert(`${result}원 초과했어요!`);
