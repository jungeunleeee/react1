let user = {
    name: "John",
    age: 30
  };
  
  let clone = {}; // 새로운 빈 객체
  
  // 빈 객체에 user 프로퍼티 전부를 복사해 넣습니다.
  for (let key in user) {
    clone[key] = user[key];
  }
  
  // 이제 clone은 완전히 독립적인 복제본이 되었습니다.
  clone.name = "Pete"; // clone의 데이터를 변경합니다.
  console.log( clone.name );
 console.log( user.name ); // 기존 객체에는 여전히 John이 있습니다.


