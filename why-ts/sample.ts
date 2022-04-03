function add(a: number, b: number) {
    return a + b;
}

// 숫자가 아닌경우에 error로 표시
// 에러의 사전방지,
// add(10, '20');

var result = add(10, 20);
result.toLocaleString();
