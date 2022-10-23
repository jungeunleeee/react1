// function sum(a, b) {
//     return a + b ;
//   }
  
//   console.log( sum(1, 2, 3, 4, 5) );

// 배열에 값이 여러개가 들어올 때 arg는 사용자 정의 값
function sumAll(...args) { // args는 배열의 이름입니다.
    let sum = 0;
  
    for (let arg of args) sum += arg;
  
    return sum;
  }
  
  console.log( sumAll(1) ); // 1
  console.log( sumAll(1, 2) ); // 3
  console.log( sumAll(1, 2, 3, 4, 8, 154) ); // 6