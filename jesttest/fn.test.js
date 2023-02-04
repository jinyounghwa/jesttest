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

// test('3 더하기 3은 5야', ()=>{
//     expect(fn.add(3,3)).toBe(5);
// });

// not 를 사용

test('3 더하기 3은 5가 아니야', ()=>{
    expect(fn.add(3,3)).not.toBe(5);
});

// test("2더하기 3은 5야", () => {
//     expect(fn.add(2,3).toBe(5));
// });

test("2더하기 3은 5야", () => {
    expect(fn.add(2,3)).toEqual(5);
})


test('이름과 나이를 전달받아서 객체를 반환해줘', () => {
    expect(fn.makeUser("Mike", 30)).toEqual({
        name:"Mike",
        age:30,
    });
});

// test('이름과 나이를 전달받아서 객체를 반환해줘', () => {
//     expect(fn.makeUser("Mike", 30)).toStrictEqual({
//         name:"Mike",
//         age:30,
//         // toStrictEqual 이 보다 엄격하게 체크한다. gender 부분이 fn에 있기 때문
//     });
// });
/*
toBe,
toEqual,
toStrictEqual,
toBeNull,
toBeUndefined,
toBeDefined,
toBeTruthy,
toBeFalsy,
toBeGreaterThan, 크다
toBeGreaterThanOrEqual, 크거나 같다
toBeLessThan, 작다
toBeLessThanOrEqual, 작거나 같다
toBeCloseTo, 값이 근사치이다
toMatch, 정규표현식
toContain, 배열 리스트에 해당 원소가 있다.
toThrow, 예외가 발생한다.
*/
test("에러가 발생한다", () =>{
    expect(() => fn.throwErr()).toThrow("xx");
})