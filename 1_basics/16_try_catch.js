/**
 * try...catch
 * 
 * 1) 에러를 발생시킬 때 -> 던진다고 한다. (throw)
 * 2) 에러를 명시적으로 인지할 때 -> 잡는다고 한다. (catch)
 */

function runner() {
    try {
        console.log('Hello');

       // throw new Error('큰 문제가 생겼습니다!'); // 에러던진거를(발생시킨거를)
    
        console.log('나는 안유진');
    } catch(e) {    // 에러를 잡을 때
        console.log('---catch---');
        console.log(e);
    } finally {  // try에서 에러가 났든 안났든 무조건 실행하는 곳이 finally이다.
        console.log('---finally---');
    }   // finally 키워드는 optional한 것이다. 써도되고 안써도되고

}
runner();