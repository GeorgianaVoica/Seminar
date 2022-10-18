class Person{
    name; //cu 3 in fata-private

    constructor(pName){
        this.name=pName;
    }

    introduceSelf(){
        console.log(`Hi! My name is ${this.name}`);
    }
}

class Teacher extends Person{
    subject;

    constructor(pName, pSubject){
        super(pName);
        this.subject = pSubject;
    }

    introduceSelf(){
        console.log(`Hi! My name is ${this.name}, and I will be your ${this.subject} professor`);
    }

    grade(paper){
        let number=Math.random();
        console.log(number*10);
        const grade = Math.floor(number*10);
        return grade;
    }
}

class Student extends Person{
    #year;

    static #count = 0;

    constructor(pName, pYear){
        super(pName);
        this.#year = pYear;
        Student.#count++;
    }

    introduceSelf(){
        console.log(`Hi! My name is ${this.name}, and I am in year ${this.#year}`);
    }

    get getYear(){
        return this.#year;
    }

    set setYear(pYear){
        if(typeof pYear == 'number' && pYear>0){
        this.#year=pYear;
        } 
        else
        {
            throw new Error("Year should be > 0")
        }
    }

    static get count(){
        return Student.#count;
    }
}
const Andreea = new Person("Andreea");
Andreea.introduceSelf();

const teacher = new Teacher("Teacher", "TW");
teacher.introduceSelf();

console.log(teacher.grade("test"));

console.log("Count: " +Student.count);

const student = new Student("Cosmina", 5);
student.introduceSelf();

console.log(student.getYear);
student.setYear = 2;
console.log(student.getYear);

const student2 = new Student("Geo", 3);
console.log("Count: " +Student.count);

//ca o met definita in int clasei
Student.prototype.whichYear = function(){
    console.log(`Hi I am in year ${this.getYear}`)
}


Person.prototype.introduce = function(){
    console.log(`Hi My name is ${this.name}`)
}
student.whichYear();
Andreea.introduce();
student.introduce();

let text = new String(`Hi! my name is andreea, and i am in year two`);
console.log(text);

String.prototype.capitalizeWords = function(){
    return this.replace(/\b[a-z]/g, match => match.toUpperCase());
}
console.log(text.capitalizeWords());
student.setYear = 0;

