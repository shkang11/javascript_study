/**
 * Loops
 * 
 * 1) for
 * 2) while
 */

for(let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('----------------');
for(let i = 10; i > 0; i--) {
    console.log(i);
}
console.log('----------------');
for(let i = 0; i < 3; i++) {
    for(let j = 3; j > 0; j--) {
        console.log(i, j);
    }
}
console.log('----------------');


// *을 이용해서 6x6의 정사각형을 출력해라
let square = '';
let side = 6;

for(let i = 0; i < side; i++) {
    for(let j = 0; j < side; j++) {
        square += '*';
    }
    square += '\n';
}

console.log(square);

/**
 * for...in loop -> key or index를 가져온다 (Object, 리스트 array 등등)
 */
const yuJinObject = {
    name: '안유진',
    year: 2003,
    group: '아이브',
};


console.log('---------------');
// Object를 for in loop 사용하면 key를 얻을 수 있음
for(let key in yuJinObject) {
    console.log(`${key}: ${yuJinObject[key]}`);
}

console.log('---------------');

const iveMembersArray = [
    '장원영',
    '안유진',
    '리즈',
    '레이',
    '김가을',
    '이서',
];

// for in loop array에 사용하면 index를 얻을 수 있음
for(let key in iveMembersArray) {
    console.log(`${key}: ${iveMembersArray[key]}`);
}

console.log('---------------');


/**
 * for...of loop (리스트 array에서 가능) -> value를 얻는다.
 */

// for of loop을 array에 쓸 때는 값을 얻어온다.
for(let value of iveMembersArray) {
    console.log(value);
}

console.log('---------------');

/**
 * While (실무 O)
 */
let number = 0;

while(number < 10) {
    number++;
}
console.log(number);

/**
 * do..while (실무 X)
 */
number = 0;
do {
    number++;
} while(number < 10);
console.log(number);

/**
 * break
 */
console.log('-----------');
for(let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i);
}

console.log('-----------');

number = 0;
while(number < 10) {
    if(number === 5) {
        break;
    }
    number++;
    console.log(number);
}

console.log('-----------');


/**
 * continue
 */

for(let i = 0; i < 10; i++) {
    if(i === 5) {
        continue;
    }
    console.log(i);
}

console.log('--------------');

number = 0
while(number < 10) {
    number++;
    if(number === 5) {
        continue;
    }

    console.log(number);
}