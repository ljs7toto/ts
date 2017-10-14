var num1 = 3;
num1 = "test";
var num2 = 5;
var str1 = "string";
var str2 = "test";
var numArr = [3, 5, 6];
var numArr2 = [3, 4, 5]; //위와 같음
//제너릭? 도 데이터 타입이다.
console.log(num1);
console.log(numArr);
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
console.log(typeof strTest);
console.log(strTest.charAt(1));
console.log(strTest.length);
console.log(strTest.substr(1)); //javascript는 재설정 재조합은 안됨 
console.log(strTest);
function testFunc(str, num) {
    console.log("str =" + str);
    console.log("num =" + num);
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
var test1 = { str: "홍길동", num: 30 };
var au = new AjaxUtil(test1);
au.print();
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
console.log(pStr);
//# sourceMappingURL=ts_data.js.map