/**
 * Static Keyword
 */
/*
class IdolModel {
    name;
    year;
    static groupName = '아이브'; //static 프로퍼티는 인스턴스에 귀속 X 
                                //                클래스에 직접 귀속 O

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    static returnGroupName() {     // static 메소드
        return this.groupName;      
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin); // 인스턴스 찍어보면 static으로 정의한 프로퍼티는 없는것을 확인

console.log(IdolModel.groupName);// static으로 정의한 프로퍼티는 클래스로 접근해야함
console.log(IdolModel.returnGroupName());
*/


/**
 * 그럼 static이 언제 쓰이길래 필요하냐?
 * factory constructor
 */

class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    // static 메소드를 사용하여 factory constructor형태를 구현하게되면
    // 단순히 저 위의 하나의 constructor로만 인스턴스를 반환받지않고
    // 미리 어떤 데이터를 입력받아가지고 인스턴스를 만들지 템플릿화해서 정의가능
    static fromObject(object) { // 객체(object)를 가지고 인스턴스 생성하기
        return new IdolModel(
            object.name,        // 인스턴스의 속성에 해당하는것만 가져와서 초기화함
            object.year,
        ); 
    }

    static fromList(list) {     // 리스트(배열)을 가지고 인스턴스 생성하기
        return new IdolModel(
            list[0],
            list[1],
        );
    }
}

// 클래스에 직접 factory constructor 형태의 스태틱메서드를 만드는 경우가 종종있음
const yuJin2 = IdolModel.fromObject({
    name: '안유진', 
    year: 2003,
    vocal: '리드보컬',
    leader: true,
});

console.log(yuJin2);

const wonYoung = IdolModel.fromList([
    '장원영',
    2004,
    '서브보컬',
    false,
]);
console.log(wonYoung);