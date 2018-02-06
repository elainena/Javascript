<h2>Day 6</h2>   
<h2>Chapter 1: 기본자료형 number를 위한 레퍼(wrapper)객체</h2>

---

- 기본자료형이 wrapper객체의 메소드를 사용할수있는 이유는 기본자료형으로 프로퍼티나 메소드를 호출할 때 기본자료형과 연관된 wrapper객체로 일시적으로 변환되어 프로토타입 객체를 공유하기 때문이다
- 생성자 함수 메커니즘 
    1. 빈객체 생성
    2. new가 바인딩한다
    3. 객체를 return한다

---

<h2>Number Constructor</h2>  

- Number()생성자 함수를 new 연산자를 붙이지 않아 생성자로 사용하지 않으면 Number 객체를 반환하지않고 기본자료형 숫자를 반환한다. 이때 형 변환이 발생할 수 있다.

---

<h2>Number Property</h2>

- 정적(static) 프로퍼티  
- 상수  
- 정해져 있는 값
- prototype에 갖다놓는게 비합리적인 이유: 이용하기위해 따로 객체를 매번 만들어낼 필요가 없기 때문에 
- Number.EPSILON
    - 다음수로 넘어가는 최소 단위
    - javascript에서 표현할수있는 가장 작은수이다
    - 임의의 수와 그 수보다 큰 수 중 가장 작은 수와의 차이
    - 부동소수점의 비교는 Number.EPSILON을 사용하여 비교 기능을 갖는 함수를 작성하여야 한다
    - EPSILON은 다음수라는 뜻 
    - 값이 Number.EPSILON을 더한값보다 작으면 같은값으로 본다.
    ㅡMath.abs을 사용해 absolute넘버로 값을 나오게 한다
- Number.MAX_VALUE
    - 자바스크립트에서 사용 가능한 가장 큰 숫자를 반환한다
    - MAX_VALUE보다 큰 숫자는 Infinity다
- Number.MIN_VALUE
    - Javascript에서 사용가능한 가장 작은 숫자를 반환한다
    - 0에 가장 가까운 양수값
    - MIN_VALUE보다 작은 수는 0으로 변환한다
- Number.POSITIVE_INFINITY
- Number.NEGATIVE_INFINITY
- Number.NaN
    - Nan(Not-a-Number)
    - 숫자가 아님을 나타내는 숫자값
    - Number.NaN=window.NaN

- ALL CAPS로 표시된 것들은 상수이기 때문에 재할당은 옳지 않다.

---

<h2>Number Method</h2>

- Number.isFinite()
    - 전역함수 isFinite()과 차이가 있다
        - Number.IsFinite()는 인수를 변환하지 않는다.
    - 따라서 숫자가 아닌 인수가 주어졌을때 반환값은 언제나 false가 된다
- Number.isInteger()
    - 매개변수에 전달된 값이 정수(integer)인지 검사하여 그 결과를 Boolean으로 반환한다. 
    - 검사전 인수를 숫자로 변환하지 않는다
- Number.isNaN()
    - 매개변수에 전달된 값이 NaN인지를 검사하여 그 결과를 Boolean으로 변환한다
    - 전역함수 isNaN()과 차이
        - 전영함수는 인수를 숫자를 변환하여 검사를 수행하지만 Number.isNaN은 변환하지않고 숫자가 아닌 인수가 주어졌을때 반환값은 언제나 false가 된다
- Number.isSafeInteger()
    - 매개변수에 전달된 값이 안전한(safe) 정수값인지 검사하여 그 결과를 Boolean으로 반환한다
    - 안전한 정수값은 (2^53 -1)와 -(2^53 - 1)사이의 정수값이다
    - 검사전에 인수를 숫자로 변환하지 않는다
- Number.Prototype.toExponential()
    - 대상을 지수 표기법으로 변환하여 문자열로 반환한다.
    - 지수 표기법: 매우 큰 숫자를 표기할때 주로 사용하며 e(Exponent)앞에 있는 숫자에 10의 n승이 곱하는 형식으로 수를 나타내는 방식이다
- Number.prototype.toFixed()
    - 반올림
    - 매개변수로 지정된 소숫점자리를 반올림하여 문자열로 반환한다
    - ex  
        var numObj = 12345.6789;  
            소숫점 이하 반올림  
        console.log(numObj.toFixed());    //'12346'  
        소숫점 이하 1자리수 유효, 나머지 반올림
        console.log(numObj.toFixed(1));   //'12345.7'  
        소숫점 이하 2자리수 유효, 나머지 반올림
        console.log(numObj.toFixed(2));   //'12345.68'  
- Number.prototype.toPrecision()
    - 매개변수로 지정된 전체 자릿수까지 유효하도록 나머지 자릿수를 반올림하여 문자열로 반환한다.
    - 지정된 전체 자릿수로 표현할수 없는 경우 지수 표기법으로 결과를 반환한다
    - ex  
        var numObj = 15345.6789;  
        console.log(numObj.toPrecision(3));  // '1.53e+4'
- Number.prototype.toString()
    - 