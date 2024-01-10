/**
 * Array Functions
 */

let iveMembers = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];

console.log(iveMembers);

// push()
console.log(iveMembers.push("코드팩토리")); //변경된 length 값 반환
console.log(iveMembers);

console.log("----------------------");
//pop()
console.log(iveMembers.pop());
console.log(iveMembers);

console.log("----------------------");
// shift()
console.log(iveMembers.shift());
console.log(iveMembers);

// unshift()
console.log(iveMembers.unshift("안유진"));
console.log(iveMembers);

console.log("----------------------");
console.log(iveMembers.splice(0, 3));
console.log(iveMembers);

iveMembers = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];
console.log(iveMembers);

// concat()
console.log(iveMembers.concat("코드팩토리")); // 새로운 array 만들어서 반환해줌
console.log(iveMembers);

// slice() splice()에 원래 array 변경 안되는 버전
console.log(iveMembers.slice(0, 3));
console.log(iveMembers);

// spread operator
let iveMembers2 = [...iveMembers];
console.log(iveMembers);

let iveMembers3 = [iveMembers];
console.log(iveMembers3);

console.log("--------------");
let iveMembers4 = iveMembers;

console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);

console.log([...iveMembers] === iveMembers);

// join()
console.log(iveMembers.join());
console.log(iveMembers.join("/"));
console.log(iveMembers.join(", "));

// sort()
//오름차순
iveMembers.sort();
console.log(iveMembers); // 원래 array 변경됨

console.log(iveMembers.reverse());

let numbers = [1, 9, 7, 5, 3];
console.log(numbers);

// a, b 를 비교했을때
// a를 b 보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 숫자를 반환
// a를 b 보다 먼저 정렬하라면 (앞에 두려면) 0보다 작은 숫자를 반환
// 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b) => {
  return a > b ? 1 : -1;
});
console.log(numbers);

numbers.sort((a, b) => (a > b ? -1 : 1));
console.log(numbers);

// map() 배열의 모든 값들을 순회하면서 변형시크는 역할을 한다. 새로운 배열 반환한다.
console.log("--------------");
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(
  iveMembers.map((x) => {
    if (x === "안유진") {
      return `아이브: ${x}`;
    } else {
      return x;
    }
  })
);
console.log(iveMembers);

// filter()
numbers = [1, 8, 7, 6, 3];

console.log(numbers.filter((x) => x % 2 === 0));

// find() 해당하는 첫번째 하나의 값만 반환
console.log(numbers.find((x) => x % 2 === 0));

// findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce()
console.log(numbers.reduce((p, n) => p + n, 0));
