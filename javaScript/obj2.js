let user = {
    name: "John",
    age: 30
  };
  
  let key = prompt("사용자의 어떤 정보를 얻고 싶으신가요?", "name");
  
  // 변수로 접근
  alert( user[key] ); // John (프롬프트 창에 "name"을 입력한 경우)