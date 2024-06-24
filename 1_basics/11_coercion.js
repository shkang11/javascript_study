/**
 * 타입 변환
 * Type  Conversion
 * 
 * 1) 명시적
 * 2) 암묵적
 */

let age = 32;

// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

// 암묵적 <- js에서 이렇게 될 수 있음을 보여주는 예시지 실제에서는 이렇게 쓰지 않는걸 권장
let test = age + '';
console.log(typeof test, test);

console.log('98' + 2); // string에서 + 라는 개념이 있어서 2 -> '2'로 number -> string으로 바껴서 '98' + '2' -> '982'가 됨
console.log('98' * 2); // 이건 파이썬과 다름 js에서는 string에서 * 라는 개념이 없기에 '98' -> 98 로 string -> number로 바뀌어 98 * 2 -> 196 이 됨
console.log('98' - 2); // string에서 - 라는 개념이 없어서 '98' -> 98로 string -> number 변경 후   98 - 2 -> 96

console.log('---------------');

/**
 * 명시적 변환 몇가지 더 예시
 */
console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());

/**
 * 숫자 타입으로변환
 */

console.log(typeof parseInt('0'), parseInt('0'));
console.log(typeof parseFloat('0.99'), parseFloat('0.99'));
console.log(typeof +'1', +'1');

console.log('----------------------');

/**
 * Boolean 타입으로의 변환 (실무에서 많이 사용)
 */
console.log(!!'아무런값이들어있음');
console.log(!!'');
console.log(!!0);
console.log(!!'0');
console.log(!!'false');
console.log(!!false);
console.log(!!undefined);
console.log(!!null);

console.log(!!{}); // 아무것도 안들어있는 object는 ?? true 엥 왜?? object는 js에서 무조건 true가 나온다.
console.log(!![]); // 배열도 마찬가지로 무조건 true다.

/**
 * 1) 아무 글자도 없는 String ('')
 * 2) 값이 없는 경우 (undefined, null, false)
 * 3) 0
 * 
 * 모두 false를 반환한다.
 */