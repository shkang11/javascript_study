/**
 * Object 객체
 */

// key: value pair
let yuJin = {           // this: 현재 함수가 정의되어있는 object(객체)를 가져온다.
    name: '안유진',
    group: '아이브',
    dance: function() {
        return `${this.name}이 춤을 춥니다.`;
    }
};
console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin['name']);

const key = 'name';

console.log(yuJin[key]);

// .dance까지만 적으면 value로 함수를 반환 근데 함수는 () 이렇게 해야 실행하게 되니 ()를 추가로 적음
console.log(yuJin.dance());

const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';

const vocalKey = 'vocal';
const vocalValue = function() {
    return '아이브의 리드보컬을 맡고있습니다.';
}


// 여기서 this.name 과 yuJin2.vocal() 을 보면 
// [nameKey] [vocalKey] 이렇게는 객체를 정의할 때만 써야하지
// 호출하거나 변경할 그럴때는 실제 키값을 적어야한다.
const yuJin2 = {
    [nameKey]: nameValue,
    [groupKey]: groupValue,
    dance: function() {
        return `${this.name}이 춤을 춘다.`;
    },
    [vocalKey]: vocalValue,
};
console.log(yuJin2);
console.log(yuJin2.dance());
console.log(yuJin2.vocal());

yuJin2['group'] = '르세라핌';  // 존재하는 key의 value를 변경
console.log(yuJin2);

// 이렇게 하면 기존 객체에 추가됨
yuJin2['englishName'] = 'An Yu Jin';   // 객체내부에 없는 key value추가
console.log(yuJin2);

// 삭제 하는 법
delete yuJin2['englishName'];
console.log(yuJin2);

delete yuJin2['vocal'];
console.log(yuJin2);

// 여기서 의문 const로 했는데 왜 계속 이렇게 변경, 삭제가 가능해??

/**
 * const로 선언한 객체의 특징
 * 
 * 1) const로 선언할 경우 객체 자체를 변경할 수 는 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경 할 수 있다.
 */

const wonYoung = {
    name: '장원영',
    group: '아이브',
};
console.log(wonYoung);

// wonYoung = {}; 객체의 특징 1번에 해당 TypeError: Assignment to constant variable.

wonYoung['group'] = '에스파';
console.log(wonYoung); // 객체의 특징 2번에 해당

/**
 * 모든 키값 다 가져오기     키값들을 리스트로 리턴
 */
console.log(Object.keys(wonYoung));

/**
 * 모든 value 값 다 가져오기   value값들을 리스트로 리턴
 */
console.log(Object.values(wonYoung));

const name = '안유진';

// 콜론을 안넣으면은 key가 name이라는 string에 해당하는 값이 되고 
// value에는 name이라는 이름에 해당되는 변수의 값이 저장됨
const yuJin3 = {
    name: name,     // 이것과
    name,           // 이것이 같음
};
console.log(yuJin3);