var Cat = /** @class */ (function () {
    function Cat(name, age) {
        this.name = "test";
        this.age = age;
        var robo = 3;
    }
    Cat.prototype.printInfo = function () {
        console.log("이름" + this.name);
        console.log("나이" + this.age);
    };
    return Cat;
}());
var dd = new Cat("토토", 11);
dd.printInfo();
//# sourceMappingURL=Animal.js.map