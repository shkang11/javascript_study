/**
 * Inheritance
 * 
 * 자식클래스가 부모클래스를 상속받으면 부모의 모든 프로퍼티들을 상속 받게 된다.
 * 거꾸로는 성립안됨 부모가 자식것을 상속받을 수 는 없음
 */
class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

class FemaleIdolModel extends IdolModel {
    dance() {
        return `여자 아이돌이 춤을 춥니다.`;
    }
}

class MaleIdolModel extends IdolModel {
    sing() {
        return `남자 아이돌이 노래를 부릅니다.`;
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003); // 비록 FemaleIdolModel에는 constructor가 없지만 상속받은 IdolModel에 constructor가 있기에 그 constructor가 실행된다.
console.log(yuJin);

const jiMin = new MaleIdolModel('지민', 1995);
console.log(jiMin);
console.log(yuJin.dance());
console.log(yuJin.name);    // 비록 FemaleIdolModel에 name프로퍼티와 constructor를 정의하지 않았지만 상속받은 IdolModel에 name프로퍼티가 정의되어있고 constructor까지 정의되어있음
                            // IdolModel(부모클래스)의 모든 프로퍼티들이 FemaleIdolModel(자식클래스)에 상속이 됨
                            
console.log(jiMin.sing());
console.log(jiMin.year);

const sh = new IdolModel('shkang', 2002);
console.log(sh);

console.log(sh.name);

console.log(yuJin instanceof IdolModel); // 상속 받은 상위클래스의 인스턴스라고 할 수 있다.
console.log(yuJin instanceof FemaleIdolModel); 
console.log(yuJin instanceof MaleIdolModel);

console.log('--------------');
console.log(jiMin instanceof IdolModel); // 상속 받은 상위클래스의 인스턴스라고 할 수 있다.
console.log(jiMin instanceof FemaleIdolModel); 
console.log(jiMin instanceof MaleIdolModel);

console.log('-------------');
console.log(sh instanceof IdolModel);
console.log(sh instanceof FemaleIdolModel);
console.log(sh instanceof MaleIdolModel);
