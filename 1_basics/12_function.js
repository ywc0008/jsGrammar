/**
 * function -> 함수
 */

/**
 * 만약에 2라는 숫자에 * 10/2 7 3 스트링으로 변환해서
 * 반홚받고 싶다면 어떻게 해야할까?
 */
console.log((((2 * 10) / 2) % 3).toString());
console.log((((3 * 10) / 2) % 3).toString());

/**
 * DRY
 * Don't
 * Repeat
 * Yourself
 */
function calculate() {
  console.log((((3 * 10) / 2) % 3).toString());
}

// calculate();

function calculate(number) {
  console.log((((number * 10) / 2) % 3).toString());
}

/**
 * 함수에서 입력받는 값에 대한 정의를 Parameter라고 한다.
 *
 * 실제 입력하는 값을 argument라고 한다.
 */
calculate(4);
calculate(5);

function multiply(x, y) {
  console.log(x * y);
}

multiply(2, 4);

function muliply(x, y = 10) {
  console.log(x * y);
}

multiply(2, 4);
muliply(2);

/**
 * 반환받기
 * return 받기
 */
console.log("-----------------");
function multiply(x, y) {
  return x * y;
}

const result1 = muliply(2, 4);
console.log(result1);

const result2 = muliply(4, 5);
console.log(result2);

/**
 * Arrow 함수
 */
const muliply2 = (x, y) => {
  return x * y;
};
console.log(muliply2(3, 4));

const muliply3 = (x, y) => x * y;
console.log(muliply3(4, 5));

const muliply4 = (x) => x * 2;
console.log(muliply4(2));

const muliply5 = (x) => (y) => (z) => `x:${x} y:${y} z:${z}`;
console.log(muliply5(2)(5)(7));

function multiply6(x) {
  return function (y) {
    return function (z) {
      return `x:${x} y:${y} z:${z}`;
    };
  };
}

console.log(multiply6(3)(4)(5));

const multiplyTwo = function (x, y) {
  return x * y;
};

console.log(multiplyTwo(4, 5));

const multiplyThree = function (x, y, z) {
  console.log(arguments);
  return x * y * z;
};

console.log("--------------------");
console.log(multiplyThree(4, 5, 6));

const mulitplyAll = function (...arguments) {
  return Object.values(arguments).reduce((a, b) => a * b, 1);
};

console.log(mulitplyAll(3, 4, 5, 6, 7, 8, 9, 10));

// immediately invoked function
(function (x, y) {
  console.log(x * y);
})(4, 5);

console.log(typeof multiply);
console.log(multiply instanceof Object);
