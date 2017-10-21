var num1 = 3;
num1 = "test";
var num2 = 5;
var str1 = "string";
var str2 = "test";
var numArr = [3, 5, 6];
var numArr2 = [3, 4, 5]; //위와 같음
//제너릭? 도 데이터 타입이다.
console.log(num1); //값 test
console.log(numArr); //값 [3,5,6]
var tp;
tp = ["1", 2];
var anyTest = "any";
anyTest = 3;
anyTest = true;
anyTest = new Number(3);
var anyArr = [1, 2, 3];
//아무것도 넘기지 않겠다. 
function setUser() {
    return "test";
}
function testObject() {
    return "abc";
}
// string 
var strTest = testObject();
console.log(typeof strTest); //값 string
console.log(strTest.charAt(1)); // 값 b
console.log(strTest.length); // 값 3
console.log(strTest.substr(1)); //javascript는 재설정 재조합은 안됨 값 bc
console.log(strTest); //값 abc
function testFunc(str, num) {
    console.log("str =" + str); // 값 str = 문자열
    console.log("num =" + num); // 값 num = 330
}
testFunc("문자열", 330);
//첫번째로 예외처리 try catch를 사용한다,두번째 방법으로 funcion 을 따로 빼서 catch(e) throws 를 작성해서 exception을 넣어준다
function throwError() {
    throw new Error("nonono");
    // 리턴이랑은 다른 의미로 어디저장되는 것이 아니라 넘기는 것이다.
}
var AjaxUtil = function (ti) {
    this.print = function () {
        console.log(ti.str);
        console.log(ti.num);
    };
};
var test1 = { str: "홍길동", num: 30 }; //오브젝트
var au = new AjaxUtil(test1);
au.print(); // 값 홍길동, 30
var Car = /** @class */ (function () {
    function Car(pCarName) {
        this.pCarName = pCarName;
        this.carName = pCarName;
    }
    return Car;
}());
var hyundai = new Car("Sonata"); //constructor 와 같음 car의 메모리를 쓰고자 함 
var pStr = "hyundai자동차중 제 차는 : ";
pStr += hyundai.carName;
console.log(pStr); // 값 hyundai자동차중 제 차는 : Sonatas
//# sourceMappingURL=ts_data.js.map