/**
 * Getter and Setter
 */
class IdolModel {
    name;       // 생성자에서 this.name에다가 저장하는 짓거리가 보여졌으니 안써도되지만 되도록 명시해주면 좋다.
    year;       // 이하 동문
    
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    /**
     * 1) 데이터를 가공해서 새로운 데이터를 반환할 때
     * 2) private한 값을 반환할 때
     */

    // 함수처럼 정의했지만 get 키워드를 쓰면 호출할때 ()안써야 됨 변수호출하듯 불러야함
    get nameAndYear() { 
        return `${this.name}-${this.year}`;
    }

    // 현대에는 setter잘 안씀 immutable 프로그래밍이 대세이기 때문에 바꾸지 않는걸 선호
    // 함수처럼 정의했지만 set 키워드를 쓰면 호출할때 ()가아니고 변수 호출하듯 써야함
    set setName(name) {
        this.name = name;
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.nameAndYear);

yuJin.setName = '장원영'; // = 뒤에 오는 값이 파라미터에 들어가는 인자역할
console.log(yuJin);

class IdolModel2 {
    #name;  // #으로 private 처리 외부에서 access 불가능
    year;

    constructor(name, year) {
        this.#name = name;
        this.year = year;
    }

    // getter는 private 프로퍼티가 있을 때 가장많이 사용한다고 보면됨
    get name() {
        return this.#name;
    }
    // setter는 되도록 쓰지 말 것 왜? 현대에는 immutable 프로그래밍을 지향해야해서
    set name(name) {
        this.#name = name;
    }
}

const yuJin2 = new IdolModel2('안유진', 2003);
console.log(yuJin2);    // private은 속성과 값을 아예 안보여줌
console.log(yuJin2.name);   // getter 사용
yuJin2.name = '이서';       // setter 사용
console.log(yuJin2.name);   // getter사용