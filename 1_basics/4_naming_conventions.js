/**
 * Naming Conventions (변수 이름 짓는 관습)
 * 
 * 1) 일반적으로 영어(라틴문자)를 사용하며 문자와 숫자를 모두 사용할 수 있다.
 * 2) 특수기호는 언더스코어와 달러만 사용할 수 있다.
 * 3) 숫자로 이름을 시작 할 수 없다. 1name, 2hello
 * 4) 키워드는 변수명으로 사용할 수 없다. var const = '변수';
 */
let shkang = 'shkang';
var $ive = '아이브';
const _yuJin = '안유진';

console.log(shkang);
console.log($ive);
console.log(_yuJin);

// let 1name = 'no';
// let const = 'attention';

/**
 * Naming Convention 2
 * 
 * 1) camelCase -> 대부분의 언어에서 많이 사용
 * 2) snake_case -> 파일이름, python같은 언어에서 사용
 * 3) PascalCase -> C# 마이크로소프트 계열의 언어에서 사용함
 */

// js는 camelCase 적용임
const anYuJin = '안유진';
console.log(anYuJin);