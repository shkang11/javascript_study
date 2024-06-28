/**
 * Array Functions
 */
let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembers);

// push()
console.log(iveMembers.push('shkang')); // 마지막위치에 push하고 난 후 배열의 길이
console.log(iveMembers);

console.log('----------------');

// pop()
console.log(iveMembers.pop()); // 마지막 요소를 pop 함. 그걸 반환하여 출력
console.log(iveMembers);       // pop된 후 배열을 출력

console.log('----------------');

// shift()
console.log(iveMembers.shift()); // 첫번째 요소 삭제 그걸 반환하여 출력
console.log(iveMembers);

// unshift()
console.log(iveMembers.unshift('안유진')); // 첫번째 위치에 요소 넣고 난 후 배열의 길이 출력
console.log(iveMembers);

console.log('----------------');

// splice()
console.log(iveMembers.splice(0, 3)); // 자르는 함수 (시작인덱스, 개수), 자른 배열 반환
console.log(iveMembers);              // 위에서 자르고 남은 배열 반환


// 위의 함수는 사용하지 않을 걸 권장 
// 요즘은 immutable programming이라고 한번 선언한 변수는 변경하지 않는 개념으로 프로그래밍 하는것이 유행.
// 현대에는 위 함수에 똑같이 해당하는 다른 함수들을 쓰는 경우가 더 많다.
// 아래에는 기존것을 변화하지 않고 새로운 것으로 반환해주는 메소드를 배울 것
//--------------------------------------------------------------------

// 리셋 해줌
iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];
console.log(iveMembers);


// concat() - immutable 
console.log(iveMembers.concat('shkang'));
console.log(iveMembers);

// slice() - immutable
console.log(iveMembers.slice(0, 3)); // (시작인덱스, 마지막인덱스+1)
console.log(iveMembers);

// spread operator: ...  (immutable)어떤 배열의 같은 내용들(요소들)을 다른 메모리에 새로 배열을 만들기 때문에 자주 사용
let iveMembers2 = [
    ...iveMembers,
];
console.log(iveMembers2);

let iveMembers3 = [     // 이것은 리스트안에 리스트를 넣은셈
    iveMembers,
];
console.log(iveMembers3);

console.log('----------------------------------------');

let iveMembers4 = iveMembers;
console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);

// join(): 모든 값들을 string으로 엮고 싶을 때 사용하는 함수 (immutable)
console.log(iveMembers.join());      // 디폴트 구분자는 ',' 이다.
console.log(iveMembers.join('/'));   // 구분자를 '/'로 설정
console.log(iveMembers.join(', '));  // 구분자를 ', '로 설정


// sort(): "기존 배열"이 오름차순 소트 됨(mutable), 배열반환 X
iveMembers.sort();       // 배열반환 X
console.log(iveMembers); // 기존 배열이 변경됨


// reverse(): "기존 배열"을 뒤집음(mutable), 배열반환 O
console.log(iveMembers.reverse()); // 기존 배열이 변경됨 배열반환 O
console.log(iveMembers);            // 위에서 기존 배열을 건들였기에 출력이 같다.

let numbers = [
    1,
    9,
    7,
    5,
    3,
];

console.log(numbers);

/**
 * sort함수는 되게 섬세하다
 * 
 * a, b를 비교했을 때
 * 1) a를 b보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
 * 2) a를 b보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
 * 3) 원래 순서를 그대로 두려면 0을 반환
 */

// 오름차순 정렬
numbers.sort((a, b) => {
    return a > b ? 1 : -1; 
});
console.log(numbers);

numbers.sort((a, b) => a > b ? -1 : 1);
console.log(numbers);

// map(): 배열의 모든 값들을 순회하면서 (각각 요소를 x에다가 집어넣으면서)
//        함수가 반환하는 값으로 각각의 값을 대체
// map함수도 새로운 배열 반환 (immutable)
console.log('---------------------------');
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));
console.log(iveMembers.map((x) => {
    if(x === '안유진') {
        return `아이브: ${x}`;
    } else {
        return x;
    }
}));

console.log(iveMembers); // 기존 것은 변경X

//filter():배열의 모든 값들을 순회하면서 (각각 요소를 x에다가 집어넣으면서)
//        필요한것만 필터링(리턴이 true면 새로운 배열에 추가, false면 버림)
//filter함수도 새로운 배열 반환(immutable)
numbers = [1, 8, 7, 6, 3];
console.log(numbers.filter((x) => true)); // 모든 요소 가져오기
console.log(numbers.filter((x) => false)); // 모든 요소 가져오지 않기
console.log(numbers.filter((x) =>  x % 2 === 0)); // 짝수인거 가져오기

// find(): 가장 첫번째로 해당되는 하나의 값만 반환함 (immutable)
console.log(numbers.find((x) => x % 2 === 0));

// findIndex(): find함수와 같으나 인덱스를 반환 (immutable)
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce(): reduce(콜백함수, 초기값) (immutable)
// 배열이름.reduce((p, n) => 반환값, p의 초기값)
// n 자리는 배열의 모든 요소들이 들어감(배열순회)
// p는 먼저 초기값이 들어가고 그 후로 반환값이 대입됨
console.log(numbers.reduce((p, n) => p + n, 0));

// n에는 arguments의 요소들이 순회되어 들어감, p에는 초기값 1이 들어가고 다음부터 반환값 p * n값이 p에 들어감
// 즉 아래는 arguments들의 곱셈이 되는 것임
const all = (...arguments) => Object.values(arguments).reduce((p, n) => p * n, 1);
console.log(all(1,2,3,4,5,6));