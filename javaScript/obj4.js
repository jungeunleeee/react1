// 배열의 자료구조 할당 예시
const person = {
    name :'제니',
    age : 25,
    job : '가수',
}

// 예시를 사용하지 않을 때
// const name = person.name;
// const age = person.age;
// const job = person.job;

// 예시를 사용할 때
const {name, age, job} = person;
printPerson(person)

// console.log(
// `제 이름은 ${name}고 나이는 ${age}고 직업은 ${job} 입니다.`
// );

// 어떻게 들어올지 알면 이렇게 parameters로 전달하면 됨.

function printPerson({name,age,job}) {
    console.log(
        `제 이름은 ${name}고 나이는 ${age}고 직업은 ${job} 입니다.`
        );
}

// 객체를 많이 만들어야 할 때
function CreatePerson(name,age,job) {
    this.name = name,
    this.age = age,
    this.job = job
}

class CreatePerson {
    // 초기값
    constructor(name, age, team) {
        this.name = name;
        this.age = age;
        this.team = team;
    }
}

const person1 = new CreatePerson('감자', 25, 'Programmar');
const person2 = new CreatePerson('안유진', 20, 'Ive');
const person3 = new CreatePerson('제니', 28, '블랙핑크');
const person4 = new CreatePerson('정국', 26, '방탄소년단');
const person5 = new CreatePerson('고구마', 25, '댄서');

printPerson(person1);
printPerson(person2);
printPerson(person3);
printPerson(person4);
printPerson(person5);
