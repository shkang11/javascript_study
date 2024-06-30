/**
 * Super and Override
 */

class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    sayHello() {
        return `안녕하세요 ${this.name}입니다.`;
    }
}

class FemaleIdolModel extends IdolModel {
    // 노래 / 춤
    part;  // 문제 생김 상속받은 IdolModel의 constructor는 part라는 프로퍼티를 모른다. 왜냐면 IdolModel부모클래스에 없으니까

    // 상속 받을 때 생성자 또한 상속을 받게되는데 생성자를 덮어쓰고 싶으면
    // constructor라고 쓰고 override하면 됨, 기존생성자를 그대로 사용하고 싶으면
    // super 키워드를 사용하면된다.
    // constructor override
    constructor(name, year, part) {
        // this.name = name;  부모클래스 constructor에 있어서 또 안써줘도됨
        // this.year = year;  super써서 부모constructor를 우선적으로 실행하면됨
        super(name, year); // super: 부모클래스 뜻함, super(): 부모클래스의 constructor를 실행함 super(name, year)는 IdolModel(name, year)와 같음
        this.part = part;
    }

    // sayHello() override
    sayHello() {
                   // 변수는 부모의 것이라도 this.name으로 가져와야함
        //return `안녕하세요 ${this.name}입니다. ${this.part}를 맡고있습니다.`;
                // 부모의 메서드 가져올 때는 super. 으로 실행할 수 있다.
        return `${super.sayHello()} ${this.part}를 맡고있습니다.`;
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003, '보컬');
console.log(yuJin);

const wonYoung = new IdolModel('장원영', 2002);
console.log(wonYoung);
console.log(wonYoung.sayHello());
console.log(yuJin.sayHello());