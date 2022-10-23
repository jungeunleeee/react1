let arr = [13,63,29,57];
let sum = arr.reduce((total, value) => {
    // 객체에서 속성값을 읽어들일때는 배열일때는 0을 안써도 되지만 문자속성을 읽을 경우 초기값 0을 써줘야 함.
    console.log(total + ":  이건 토탈");
    console.log(value + ":  이건 값");
    return total + value
}, 0);

console.log(sum + ":  이건 총합");