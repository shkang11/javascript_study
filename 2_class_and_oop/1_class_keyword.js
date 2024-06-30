/**
 * Class Keyword
 */
class IdolModel {
    name;   // 클래스안에 원하는 프로퍼티(속성)들을 정리해놓음
    year;   // 프로퍼티: 클래스 내부의 변수와 메소드를 뜻함

    // js에서 속성정의는 optional한 것임. 안해도 됨 대신 constructor에서 this.속성명으로 저장을 한번 해줘야됨
    // 그러나 속성은 명시를 해놓는 것이 좋다.
    constructor(name, year) {
        this.name = name;   //this는 new키워드로 생성된 현재인스턴스를 뜻함
        this.year = year;
    }

    // 메서드는 function적지 않고 그냥 원하는 메서드 이름으로 함수모양을 만들면된다.
    sayName() {     
        return `안녕하세요 저는 ${this.name}입니다.`;
    }
}

// constructor - 생성자


// 빵틀(클래스) 덕분에 여러개(인스턴스)를 찍어낼 수 있음
// 즉 클래스 하나로 여러개의 인스턴스들을 만들 수 있다.
const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
const gaeul = new IdolModel('가을', 2002);
console.log(gaeul);
const ray = new IdolModel('레이', 2004);
console.log(ray);
const wonYoung = new IdolModel('장원영', 2004);
console.log(wonYoung);
const liz = new IdolModel('리즈', 2004);
console.log(liz);
const eseo = new IdolModel('이서', 2007);
console.log(eseo);

console.log(yuJin.name);    // 객체(object)를 사용하듯이 .name 프로퍼티로 가져올 수 있음
console.log(yuJin.year);
console.log(yuJin.sayName());
console.log(wonYoung.sayName());

console.log(typeof IdolModel);  // function  class가 왜 타입이 function임?? 
console.log(typeof yuJin);      // object   클래스로 찍어낸 인스턴스는 오브젝트(객체)이다.

// 클래스는 타입이 function으로 인식됨
// 지금은 class 키워드가 만들어져서 그거로 OOP를 하지만 
// class라는 키워드가 존재하지 않던 시절에 함수로 OOP를 했던 시절이 있었다.
// JS 역사가 너무 오래돼서 그것도 알아야한다.
// 그걸 알면 왜 class가 function타입으로 나오는지 알 수 있다.
