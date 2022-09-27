class Person {
    constructor(age) {
        this.age = age;
    }
}

const personArray = [
    new Person(17),
    new Person(19)
];

console.log("===========Array============");
console.dir(personArray);
console.log("============Push============");
personArray.push(new Person(Math.floor(Math.random() * 100)));
console.dir(personArray);
console.log("============Pop=============");
personArray.pop();
console.dir(personArray);
console.log("===========Slice============");
console.dir(personArray.slice(0,1));
console.dir(personArray.slice(1));
console.log("===========Shift============");
console.dir(personArray.shift());
console.dir(personArray);
console.log("==========Unshift===========");
personArray.unshift(new Person(Math.floor(Math.random() * 100)))
console.dir(personArray);
console.log("========Age Filter==========");
console.dir(personArray.filter(person => person.age > 18))
console.log("=========For Each===========");
(personArray.filter(person => person.age > 18)).forEach(element => console.log(element));