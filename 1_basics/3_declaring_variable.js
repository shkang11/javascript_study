/**
 * Variable 선언하기
 * 
 * 1) var - 이제 안쓴다.
 * 2) let
 * 3) const
 */
var name = 'shkang';
console.log(name);

var age = 32;
console.log(age);

let ive = '아이브';
console.log(ive);

/**
 *  let과 var로 선언하면 
 *  값을 추후 변경할 수 있다.
 */

ive = '안유진'
console.log(ive);

const newJeans = '뉴진스';
console.log(newJeans);

// newJeans = 'shkang';

/**
 * 선언과 할당
 * 
 * 1) 변수를 선언하는 것.
 * 2) 할당
 * 3) 초기화 (1, 2 동시에)
 */

// js에서 변수(let or var 사용)를 선언만 하면 undefined가 할당됨
var name = 'shkang';
console.log(name);

let boyFriend; 
console.log(boyFriend);

// const boyFriend2; const는 값을 못바꿈 무조건 초기화해야함 이렇게 쌩 선언만 안된다.
