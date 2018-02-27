<h1>Day11 [0223]</h1>

---
<h1>Chapter 1: AJAX continued...</h1>

<h2>Ajax response</h2>

```js
// XMLHttpRequest.readyState 프로퍼티가 변경(이벤트 발생)될 때마다 이벤트 핸들러를 호출한다.
req.onreadystatechange = function (e) {
  // readyStates는 XMLHttpRequest의 상태(state)를 반환
  // readyState: 4 => DONE(서버 응답 완료)
  if (req.readyState === XMLHttpRequest.DONE) {
    // status는 response 상태 코드를 반환 : 200 => 정상 응답
    if(req.status === 200) {
      console.log(req.responseText);
    } else {
      console.log("Error!");
    }
  }
};
```

```js
// XMLHttpRequest 객체의 생성
var req = new XMLHttpRequest();
// 비동기 방식으로 Request를 오픈한다
req.open('GET', 'data/test.json');
// Request를 전송한다
req.send();

// XMLHttpRequest.readyState 프로퍼티가 변경(이벤트 발생)될 때마다 콜백함수(이벤트 핸들러)를 호출한다.
req.onreadystatechange = function (e) {
  // 이 함수는 Response가 클라이언트에 도달하면 호출된다.

  // readyStates는 XMLHttpRequest의 상태(state)를 반환
  // readyState: 4 => DONE(서버 응답 완료)
  if (req.readyState === XMLHttpRequest.DONE) {
    // status는 response 상태 코드를 반환 : 200 => 정상 응답
    if(req.status === 200) {
      console.log(req.responseText);
    } else {
      console.log("Error!");
    }
  }
};
```
---
## Web Server
- 웹서버(Web Server)는 브라우저와 같은 클라이언트로부터 HTTP 요청을 받아들이고 HTML 문서와 같은 웹 페이지를 반환하는 컴퓨터 프로그램이다.

---
### Load JSONP
- 동일출처원칙 (Same-origin polity)
  - 요청에 의해 웹페이지가 전달된 서버와 동일한 도메인의 서버로 부터 전달된 데이터는 문제없이 처리할 수 있다. 하지만 보안상의 이유로 다른 도메인(http와 https, 포트가 다르면 다른 도메인으로 간주한다)으로의 요청(크로스 도메인 요청)은 제한된다. 
- 동일 출처 원칙을 우회하는 세가지 방법
  1. 웹서버의 프록시 파일
    - 서버에 원격 서버로부터 데이터를 수집하는 벼로이 기능을 추가하는 것이다. 
    - 서버간에는 통신이 가능하기때문에.
    - 이를 Proxy라 한다
  2. JSONP
    - script 태그의 원본 주소에 대한 제약은 존재하지 않는데 이것을 이용하여 다른 도메인의 서버에서 데이터를 수집하는 방법이다. 
    - 자신의 서버에 함수를 정의하고 다른 도메인의 서버에 얻고자 하는 데이터를 인수로 하는 함수 호출문을 로드하는 것이다.
    - 쓰고자하는 다른 서버API의 호출법을 따라 정해져있는 함수명을 이용해 약속된방식으로 데이터를 받는다
  3. Cross-Origin Resource Sharing
    - HTTP 헤더에 추가적으로 정보를 추가하여 브라우저와 서버가 서로 통신해야 한다는 사실을 알게하는 방법이다. 
    - W3C 명세에 포함되어 있지만 최신 브라우저에서만 동작하며 서버에 HTTP 헤더를 설정해 주어야 한다.

---
---
# Chapter 2: REST (Representational State Transfer) API

## REST API
- Roy Fielding 2000년 논문에서 소개
- 발표 당시의 웹이 HTTP의 설계 상 우수성을 제대로 사용하지 못하고 있는 상황을 보고 웹의 장점을 최대한 활용할 수 있는 아키텍쳐로 REST를 소개했다고 한다. 
---
## REST API 중심 규칙
- 가장 중요한 기본적인 규칙 두가지:
  1. URI는 정보의 자원을 표현해야 한다
    - 리소스명은 동사보다는 명사를 사용한다
    - URI는 자원을 표현하는데 중점을 두어야한다
  2. 자원에 대한 행위는 HTTP Method(GET, POST, PUT, DELETE 등)으로 표현한다
    
    ```js
    #bad
    GET /books/delete/1

    # good
    DELETE /books/1
    ```
- POST는 성공여부 확인할때 201이다 

# Qs
1. POST와 PUT의 차이
