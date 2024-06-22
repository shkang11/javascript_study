/**
 * Operators
 * 
 * 연산자
 */

/**
 * 산술 연산자
 * 
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */

console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log(10 % 3);
console.log('-------------');

console.log(10 * (10 + 10));

/**
 * 증가와 감소
 */

let number = 1;
number++;
console.log(number);

number--;
console.log(number);
console.log('-------------');

/**
 * 연산자의 위치
 */
let result = 1;
console.log(result);

result = number++;
console.log(result, number);

result = number--;
console.log(result, number);

result = ++number;
console.log(result, number);

result = --number;
console.log(result, number);

/**
 * 숫자 타입이 아닌 타입에 +, -를 사용하면 어떻게 될까?
 * 다른 타입으로 되어있는데 얼마든지 숫자로 바뀔 수 있는 값이 들어있다면
 * + or -변수이름은 Number타입이 됨
 */
let sample = '99';
console.log(+sample);
console.log(typeof +sample);

console.log(sample);
console.log(typeof sample);

sample = true;
console.log(+sample);
console.log(typeof +sample);

sample = false;
console.log(+sample);
console.log(typeof +sample);

sample = '안유진'; // 숫자로 바뀔 수 없는값
console.log(+sample);
// NaN -> Not a Number

sample = '99';
console.log(-sample);
console.log(typeof -sample);
console.log('---------------');

/**
 * 할당 연산자 (assignment operator)
 */
number = 100
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);

number *= 10;
console.log(number);

number /= 10;
console.log(number);

number %= 10;
console.log(number);

/**
 * 비교 연산자
 * 
 * js에서 값 비교는 숫자로 바꿀 수 있으면 바꾸고 서로 비교
 * 1) 값의 비교
 * 2) 값과 타입의 비교 (실무*)
 */

// 1) 값의 비교 -> 실무에서 안씀
console.log(5 == 5);
console.log(5 == '5');
console.log(0 == '');
console.log(+'');
console.log(typeof +'');
console.log(true == 1);
console.log(false == 0);
console.log(true == '1');
console.log(+true);
console.log(typeof +true);
console.log(-'1');
console.log(typeof -'1');

console.log('------------------');

// 2) 갑과 타입의 비교
console.log(5 === 5);
console.log(5 === '5'); // 변환되는 값이 같더라도 타입이 다르면 false
console.log(0 === '');   // 이하동문
console.log(true === 1); // 이하동문
console.log(false === 0); // 이하동문
console.log(true === '1'); // 이하동문

console.log('--------------');

// 1) 값의 비교 -> 실무에서 안씀
console.log(5 != 5);
console.log(5 != '5');
console.log(0 != '');
console.log(true != 1);
console.log(false != 0);
console.log(true != '1');

console.log('----------------');

// 2) 값과 타입의 비교
console.log(5 !== 5); // 변환된 값, 타입 모두 같아 false
console.log(5 !== '5'); // 변환된 값은 같지만 타입이 다르네 true
console.log(0 !== '');  // 이하 동문
console.log(true !== 1); // 이하 동문
console.log(false !== 0); // 이하 동문
console.log(true !== '1'); // 이하 동문

console.log('---------------');

/**
 * 대소 관계 비교 연산자
 */
console.log(100 > 1);
console.log(100 < 1);
console.log(100 <= 1);
console.log(100 >= 1);
console.log('---------------------');
/**
 * 삼항 조건 연산자 (ternary operator)
 */
console.log(10 > 0 ? '10이 0보다 크다': '10이 0보다 작다');
console.log('---------------------');

/**
 * 논리 연산자
 * 
 * 1) && (and)
 * 2) || (or)
 */

// && 조건은 모두 true여야 true를 반환한다.
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log('-------------');

// ||는 하나만 true여도 true 반환
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log('-------------');

console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);
console.log(10 < 1 && 20 < 2);

console.log(10 > 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);
console.log(10 < 1 || 20 < 2);
console.log('-------------');

/**
 * 단축평가 (short circuit evaluation)
 * 
 * &&를 사용했을 때 좌측이 true면 우측 값 반환
 * &&를 사용했을 때 좌측이 false면 좌측 값 반환
 * ||를 사용했을 때 좌측이 true면 좌측 값 반환
 * ||를 사용했을 때 좌측이 false면 우측 값 반환 
 */

console.log(true || '아이브');
console.log(false || '아이브');
console.log(false && '아이브');
console.log(true && '아이브');

console.log(true && true && '아이브');
console.log(true && false && '아이브');

/**
 * 지수 연산자
 */
console.log(2 ** 2);
console.log(10 ** 3);

/**
 * null 연산자
 * 변수 ?? '응애'
 * 변수값이 null or undefined 일 때 '응애'를 반환해라
 */
let name;
console.log(name);

name = name ?? 'shkang';
console.log(name);

name = name ?? '아이브';
console.log(name);

let name2;
name2 ??= 'shkang'; // null연산자를 이렇게 할당연산자로 쓸수있다.
console.log(name2);