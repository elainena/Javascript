<h1>Day 8</h1>

---
<h1>Chapter 1: DOM 문서 객체 모델 (Document Object Model)</h1>

- "문서"란 HTML과 그 안에 포함된 css까지
- Model - 데이터 관련

<h2>DOM (Document Object Model)</h2>

- 웹문서를 브라우저가 이해할수 있는 구조로 메모리에 올린다 
- 브라우저의 렌더링 엔진은 웹 문서를 로드한 후, 파싱하여 웹 문서를 브라우저가 이해할 수 있는 구조로 구성하여 메모리에 적재하는데 이를 DOM이라 한다
- 웹 문서의 동적 변경을 위해 DOM은 프로그래밍 언어가 자신에 접근하고 수정할 수 있는 방법을 제공하는데 일반적으로 프로퍼티와 메소드를 갖는 JavaScript 객체로 제공된다
- 이를 DOM API(Application Programming Interface)라고 부른다
- 정적인 웹페이지에 접근하여 동적으로 웹페이지를 변경하기 위한 유일한 방법은 메모리 상에 존재하는 DOM을 변경하는 것이고, 이때 필요한 것이 DOM에 접근하고 변경하는 프로퍼티와 메소드의 집합인 API다
- DOM은 W3C의 공식표준인데 HTML과 Javascript과는 별개다
- DOM은 다음 두가지 기능을 담당한다
    1. HTML 문서에 대한 모델 구성
    2. HTML 문서 내의 각 요소에 접근/수정
---
<h2>DOM Tree</h2>

- DOM에서 모든 요소, 어트리뷰트, 텍스트는 하나의 객체이며 Document 객체의 자식이다
- DOM tree의 진입점(Entry point)는 document 객체이며 최종점은 요소의 텍스트를 나타내는 객체이다
- DOM tree는 네 종류의 노드로 구성한다
    1. 문서 노드(Document Node)
    2. 요소 노드(Element Node)
    3. 어트리뷰트 노드(Attribute Node)
    4. 텍스트 노드(Text Node)
- 요소노드와 어트리뷰트노드는 형제관계고
- 요소노드는 단 하나의 자식노드를 가지고있는데 텍스트노드다
- DOM을 통해 웹페이지를 조작(manipulate)하기 위해서는 다음과 같은 수순이 필요하다
    1. 조작하고자하는 요소를 선택 또는 탐색한다
    2. 선택된 요소의 콘텐츠 또는 어트리뷰트를 조작한다

---
<h2>DOM Query/Traversing(요소에 접근)</h2>

<h3>하나의 요소 노드 선택 (DOM Query)</h3>

- document.getElementById(id)
- document.querySelector(cssSelector)

<h3>여러개의 요소 노드 선택(DOM Query)</h3>

- document.getelementsByClass(class)
    - live라는 의미? 변화에 민감하고 변화가 감지되면 선택된 클래스에 더이상 선택되지않는 요소는 HTMl컬렉션에서 제외 그래서 loop를 돌렸을떄 의도된대로 작동되기 어렵다
    - 거꾸로 반복문 돌리는 방법도있다
    - HTML Collection을 배열로 변경하는 방법이 있다
- document.getElementsByTagName(tagName)
- document.querySelectorAll(selector)
    - 유사배열 
    - Return: NodeList (non-live)

<h3>DOM Traversing(탐색)</h3>

- parentNode (메서드아닌 프로퍼티)
- firstChild, lastChild (메서드아닌 프로퍼티)
    - jQuery:.prev(), jQuery.next()
- hasChildNodes() (메서드)
    - Boolean 값 return
- childNodes
    - non-live
- previousSibling, nextSibling

---

<h2>DOM Manipulation(조작)</h2>

<h3>텍스트 노드에의 접근/수정</h3>

- 요소의 텍스트는 텍스트노드에 저장되어있다
- 텍스트 노드에 접근하려면 아래와 같은 수순이 필요하다
    1. 해당 텍스트 노드의 부모 노드를 선택한다. 텍스트 노드는 요소 노드의 자식이다
    2. firstChild 프로퍼티를 사용하여 텍스트 노드를 탐색한다
    3. 텍스트 노드의 유일한 프로퍼티(nodeValue)를 이용하여 텍스트를 취득한다
    4. nodeValue를 이용하여 텍스트를 수정한다
- nodeValue
    - 노드의 값을 반환한다
    - Return: 텍스트 노드의 경우는 문자열, 요소노드의 경우 null반환

<h3>어트리뷰트 노드에의 접근/수정</h3>

- className
    - class 어트리뷰트의 값을 취득 또는 변경
- id
    - id 어트리뷰트의 값을 취득 또는 변경한다
- hasAttribute(attribute)
    - 지정한 어트리뷰트를 가지고있는지 검사
    - Return Boolean
- getAttribute(attribute)
    - 어트리뷰트의 값을 취득한다
    - Regurn 문자열
- setAttribute(attribute, value)
    - 어트리뷰트와 어트리뷰트 값을 설정한다
    - Return undefined
- removeAttribute(attribute)
    - 지정한 어트리뷰트를 제거한다
    - Return undefined

<h3>HTML 콘텐츠 조작(Manipulation)</h3>

- HTML 콘텐츠를 조작하기위해 아래의 프로퍼티 또는 메소드를 사용할수있다
- 마크업이 포함되 컨텐츠를 추가하는 행위는 크로스 스크립팅 공격 (XSS)에 취약하므로 주의가 필요하다
- textContent
- innerText
    - CSS에 순종적
    - 화며에 표시가 안되는 상태면 텍스트를 반환하지않는다
- InnerHTML
    - 해당 요소의 모든 자식 요소를 포함하는 모든 콘텐츠를 하나의 문자열로 취득할 수 있다 
    - 이 문자열은 마크업을 포함한다