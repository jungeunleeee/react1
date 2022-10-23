const person = {
    name : ['미미', '안유진'],
    age: [28,20],
    gender: 'female'.replace,
    hobby: ['영화보기', '음악듣기'],
    hello: function() {
        alert("hello");
    },
    greeting: function() {
        alert('안녕');
    },
    job : {
        name: "programmer",
        call : function() {
             console.log("My job is Programming");
        }
    }
}

// person.hello();
console.log(person.job.name);
console.log(person.job.call());

// 대괄호 표기법: form객체..? name값 존재, 고정된 값이 아닐 때
console.log( person['name'][0]);
console.log(person['hello']());