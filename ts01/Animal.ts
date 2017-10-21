interface Animal{
    name: string;
    age: number;
    height: number;
}

class Cat implements Animal{
    name: string;
    age: number;
    height: number;
    constructor(name:string, age:number){ //생성자 값그대로 써줘요
        this.name = name;
        this.age = age;
        let robo: number =3;
    }
    
    printInfo(){
        console.log("이름" + this.name);
        console.log("나이" + this.age);
    }
}

let dd:Cat = new Cat("토토",11);
dd.printInfo();