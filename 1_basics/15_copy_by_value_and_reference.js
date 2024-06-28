/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value다
 * 2) 객체는 copy by reference 다
 */

let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

clone += ' 안유진 입니다.';
console.log('---------------');
console.log(original);
console.log(clone);

let originalObj = {     // 메모리어딘가에 객체값이 저장돼있음 그주소를 0003이라하면
    name: '안유진',      // originalObj 변수에는 객체값이 들어있는게 아닌 객체가 저장된 주소인 0003이 들어있음
    group: '아이브',
};

let cloneObj = originalObj; // 0003 을 넘김
console.log(originalObj);   // 이거는 그 주소에있는 객체 출력하라는 말임
console.log(cloneObj);

console.log('---------------');

originalObj['group'] = '르세라핌';
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj);  
console.log(original === clone);        

originalObj = {
    name: '원빈',
    group: '라이즈',
};

cloneObj = {
    name: '원빈',
    group: '라이즈',
};

// Object형은 값이 같은게 들어있다해서 같지 않다. 
// 위에서는 같은 값이지만 메모리 다른곳에 저장되어 originalObj와 cloneObj는 객체의 서로 다른 주소를 가지고있음.
console.log(originalObj === cloneObj);

// ex) 객체의 값이 저장된 메모리주소를 0003이라하자
// 그럼 yuJin1에는 0003이 들어있음
const yuJin1 = {
    name: '안유진',
    group: '아이브',
};

// copy by reference 주소값인 0003을 넘김
const yuJin2 = yuJin1; // copy by reference


// 여기서 객체값이 메모리어딘가에 저장된다 그 주소를 0006이라하자
// 그러면 yuJin3에는 0006이 들어있음
const yuJin3 = {
    name: '안유진',
    group: '아이브',
};
                                        // 주솟값은 그냥 가정한거임
console.log(yuJin1 === yuJin2); // true    0003  0003
console.log(yuJin1 === yuJin3); // false   0003  0006
console.log(yuJin2 === yuJin3); // false   0003  0006

/**
 * Spread Operator 배열에도 있고 Object에도 있음
 * copy by value
 */

// yuJin3은 0006주솟값이 들어가 있다 가정, 0006주소에는 객체 값이 들어가 있음
// yuJin4는 ...yuJin3를 사용해서 값을 넣었음 어떻게?
// 0006에 들어있는 값을 복사해서 다른 메모리 주소인 0009라 가정 여기다 객체 값을 넣고
// yuJin4에 0009 주솟값을 대입

const yuJin4 = {
    ...yuJin3,
};
console.log(yuJin4);
console.log(yuJin4 === yuJin3);


// Spread Operator를 사용하면서 값을 추가도 할 수 있음
const yuJin5 = {
    year: 2003,
    ...yuJin3,
};
console.log(yuJin5);

// Spread Operator를 쓰면 순서(위치)가 매우 중요
// 넣은 순서대로 작동 하기 때문
const yuJin6 = {
    name: '레이',
    ...yuJin3,    // 아래에 yuJin3를 스프레드로 썼기에 name이 이거로 대체되버림
};
console.log(yuJin6);

const yuJin7 = {
    ...yuJin3,
    name: '레이',    // 그래서 이렇게 밑에다가 쓰면 원하는 대로 대체됨
};
console.log(yuJin7);

const numbers = [1, 3, 5];
const numbers2 = [
    ...numbers,
    10,
];
console.log(numbers2);