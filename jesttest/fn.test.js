const fn = require('./fn');

test('1은 1이야', () => {
    //검증할 대상
    expect(1).toBe(1)
    //expect 검증할 값 toBe 기대 할 값
});

test('2 더하기 3은 5야', ()=>{
    expect(fn.add(2,3)).toBe(5); 
    //tobe 부분에서 사용하는 함수를 Matcher이라고 한다. 
    //숫자나 문자 기본타입값을 테스트 할 때 사용한다.
});

//실패하는 케이스

test('3 더하기 3은 5야', ()=>{
    expect(fn.add(3,3)).toBe(5);
});

// not 를 사용

test('3 더하기 3은 5가 아니야', ()=>{
    expect(fn.add(3,3)).not.toBe(5);
});
