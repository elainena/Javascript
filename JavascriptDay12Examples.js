//Block-level-scope Example

console.log (foo); //undefined
var foo = 123;
console.log (foo); //123
{
    var foo = 456;
}
console.log (foo); //456

//var 키워드를 사용하여 선언한 변수는 중복 선언이 가능하기 때문에 위의 코드는 문법적으로 문제가 없다. 
//하지만 Block-level scope를 지원하지 않는 javascript의 특성 상, 코드블럭 내의 변수 foo는 전역변수이기 때문에 전역에서 선언된 변수 foo의 값을 대체하는 새로운 값을 재할당한다

let foo = 123;
{
    let foo = 456;
    let bar = 456;
}
console.log (foo); //123
console.log (bar); //ReferenceError: bar is not defined

// 코드블록 내에 선언된 변수 foo와 bar은 Block-level scope를 갖는 지역변수다
// 전역에서 선언된 foo와는 다른 변수다
// 전역에서는 코드블럭 내에 선언된 변수들을 참조할수없다

//Hoisting Examples
console.log (foo); //undefined
var foo;

console.log (foo); //Error: Uncaught ReferenceError: bar is not defined
let bar;


console.log('=====1.4 Closure=====');
//Closure Examples
var funcs = [];

//함수의 배열을 생성한다
//i는 전역 변수이다
for (var i = 0; i < 3; i++){
    funcs.push(function(){console.log(i);});
}
//배열에서 함수를 꺼내어 호출한다
for (var j = 0; j <3; j++){
    funcs[j]();
}
//위 코드의 실행결과로 0, 1, 2를 기대할 수도 있지만 결과는 3이 3번 출력된다
//그 이유는 for문의 var i가 전역변수이기 때문이다. 
//0, 1, 2가 출력되기 위해서는 아래와 같은 코드가 필요하다
var funcs = [];
//함수의 배열을 생성한다
//i는 전역 변수이다
for (var i = 0; i < 3; i++){
    (function (index){
        funcs.push(function(){ console.log(index);});
    }(i));
}
//배열에서 함수를 꺼내어 호출한다
for (var j = 0; j < 3; j++){
    funcs [j]();
}

//ES6 let을 이용
var funcs = [];

for (let i = 0; i < 3; i++){
    funcs.push(function(){ console.log (i); });
}

for (var j = 0; j < 3; j++){
    funcs[j]();
}
//for loop의 let i는 for loop에서만 유효한 지역 변수이다. 
//또한, i는 자유변수로서 for loop의 생명주기가 종료하여도 변수 i를 참조하는 함수가 존재하는 한 계속 유지된다

console.log('=====2.2 상수');
//x의 의미를 알기 어렵기 때문에 가독성이 좋지않다
if ( x > 10 ){
}
//변수의 의미를 명확히 기술하여 가독성이 향상되었다
const MAXROWS = 10;
if (x > MAXROWS){
}
//조건문 내의 10은 어떤 의미로 사용하였는지 파악하기가 곤란하다
//하지만 네이밍이 적절한 상수로 선언하면 가독성과 유지 보수성이 대폭 향상된다

console.log('=====2.3 const와 객체=====');
const user = {
    name: 'Lee',
    address: {
        city: 'Seoul'
    }
};
//const변수는 재할당이 금지된다
//user = {}; //TypeError: Assignment to constant variable

//프로퍼티 값의 재할당은 허용된다
    user.name = 'Kim';

    console.log(user); //{name:'Kim', address: {city: 'Seoul'}}
