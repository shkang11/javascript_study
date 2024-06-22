/**
 * Hoisting
 */

console.log('Hello');
console.log('World');
console.log('--------------');

// console.log(name);
// var name = 'shkang';
// console.log(name);

/**
 * Hoisting은 무엇인가?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상
 */

// var name;
// console.log(name);
// name = 'shkang';
// console.log(name);


/**
 * const, let도 Hoisting이 된다. 
 * 변수가 Hoisting돼서 undefined로 배정되는데
 * 그러나 const, let으로 변수선언이 된 경우 
 * 실제 할당하는 순간이 오기전에 접근 불가 (즉 var 때의 버그 수정됨)
 */
console.log(yuJin);
const yuJin = '안유진';



