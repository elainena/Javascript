<h1>Day9</h1>

---

<h1>Chapter 1: Array 배열</h1>

<h2>Array.prototype.concat (item...)</h2>

- concat메소드의 인수로 넘어온 값들 (배열 또는 값)을 자신의 복사본에 요소로 추가하고 반환한다.
- 이때 원본배열은 변경되지 않는다.
- 인자에 배열이올수도있고 값이 올수도있다
- 배열을 만드는 큰 이유는 for문을 돌리기 위해서이기 때문에 요소의 데이터 타입을 일치 시켜주는게 좋다

---

<h2>Array.prototype.push(item...)</h2>

- 더해진 요소 수를 리턴한다
- 인자로 전달한 항목을 배열의 끝에 추가한다
- concat 메소드와 다르게 배열 자체를 변경하여 넘어온 인수 전체를 배열에 추가한다
- 반환값은 배열의 새로운 length값이다

---

<h2>Array.prototype.join()</h2>

- 배열 요소 전체를 연결하여 생성한 문자열을 반환한다. 
- 기본 구분자는 ","이다.

---

<h2>Array.prototype.pop()</h2>

- pop은 push와 함께 배열을 스택처럼 동작하게 한다. 
- pop메소드는 배열에서 마지막 요소를 제거하고 제거한 요소를 반환한다 
- 만약 빈 배열일 경우 undefined를 반환한다
- pop 메소드를 호출한 배열 자체가 수정된다

---

<h2>Array.prototype.reverse()</h2>

- 배열 요소의 순서를 반대로 변경한다
- 이대 원본 배열이 변경된다
- 반환값은 변경된 배열이다

---

<h2>Array.prototype.shift()</h2>

- 큐처럼 동작하게 한다
- 배열에서 첫 요소를 제거하고 제거한 요소를 반환한다
- 빈배열인경우 undefined를 반환한다

---

<h2>Array.prototype.slice(start,end)</h2>

- 배열의 특정부분에 대한 복사본을 생성한다
- 두번째로 준 index의 앞까지만 리턴한다
- 원본배열을 수정하지 않는다
- 첫번째 매개변수 start에 해당하는 인덱스를 갖는 요소부터 매개변수 end에 해당하는 인덱스를 가진 요소 전까지 복사된다.
- 인자를 넣지 않으면 배열전체를 복사해서 리턴한다

```js
var items = ['a', 'b', 'c'];

// items[1]부터 items[2] 이전(items[2] 미포함)까지 반환
var res2 = items.slice(1, 2);
console.log(res2);  // [ 'b' ]

// items[1]부터 이후의 모든 요소 반환
var res3 = items.slice(1);
console.log(res3);  // [ 'b', 'c' ]
```
---

<h2>Array.prototype.splice(start, deleteCount, item...)</h2>

- 기존의 배열의 요소를 제거하고 그 위치에 새로운 요소를 추가한다
- 배열 중간에 새로운 요소를 추가할때도 사용된다
- 가장 일반적인 사용은 배열에서 요소를 삭제할때다
```js
var items = ['one', 'two', 'three', 'four'];

// items[1]부터 2개의 요소를 제거하고 제거된 요소를 배열로 반환
var res = items.splice(1, 2);

// 원본 배열이 변경된다.
console.log(items); // [ 'one', 'four' ]
// 제거한 요소가 배열로 반환된다.
console.log(res);   // [ 'two', 'three' ]
```
- 배열에서 요소를 제거하고 제거한 위치에 다른 요소를 추가한다
```js
var items = ['one', 'two', 'three', 'four'];

// items[1]부터 2개의 요소를 제거하고 그자리에 새로운 요소를 추가한다. 제거된 요소가 반환된다.
var res = items.splice(1, 2, 'x', 'y');

// 원본 배열이 변경된다.
console.log(items); // [ 'one', 'x', 'y', 'four' ]
// 제거한 요소가 배열로 반환된다.
console.log(res);   // [ 'two', 'three' ]
```
- 배열 중간에 새로운 요소를 추가할때도 사용된다
```js
var items = ['one', 'four'];

// items[1]부터 0개의 요소를 제거하고 그자리(items[1])에 새로운 배열를 추가한다. 제거된 요소가 반환된다.
// items.splice(1, 0, ['two', 'three']); // [ 'one', [ 'two', 'three' ], 'four' ]
Array.prototype.splice.apply(items, [1, 0].concat(['two', 'three']));
// ES6
// items.splice(1, 0, ...['two', 'three']);

console.log(items); // [ 'one', 'two', 'three', 'four' ]
```
---

<h2>Array.prototype.sort(comparefunc)</h2>

- 배열의 내용을 적잘하게 정렬한다
```js
// ascending(오름차순)
fruits.sort();
console.log(fruits); // [ 'Apple', 'Banana', 'Mango', 'Orange' ]

// descending(내림차순)
fruits.reverse();
console.log(fruits); // [ 'Orange', 'Mango', 'Banana', 'Apple' ]

var points = [40, 100, 1, 5, 25, 10];

points.sort();
console.log(points); // [ 1, 10, 100, 25, 40, 5 ]

// Syntax : array.sort(compareFunction)

// 숫자 배열 오름차순 정렬
// compareFunction의 반환값이 0보다 작은 경우, a를 우선한다.
points.sort(function (a, b) { return a - b; });
console.log(points); // [ 1, 5, 10, 25, 40, 100 ]

// 숫자 배열에서 최소값 취득
console.log(points[0]); // 1

// 숫자 배열 내림차순 정렬
// compareFunction의 반환값이 0보다 큰 경우, b를 우선한다.
points.sort(function (a, b) { return b - a; });
console.log(points); // [ 100, 40, 25, 10, 5, 1 ]

// 숫자 배열에서 최대값 취득
console.log(points[0]); // 100
```
---
<h2>Array.prototype.forEach()</h2>

- for문으로 생각하면 편하지만 배열의 메소드다
- 배열을 순회하며 배열의 각 요소에 대하여 인자로 주어진 콜백함수를 실행한다
- 콜백함수의 매개변수를 통해 배열 요소의 값, 요소 인덱스, 순회할 배열을 전달 받을수 있다
- 반환값은 undefined다
- for문은 break문을 쓸수 있지만 forEach는 break를 쓸수없다
- 즉, 중간에 빠져나오지 못한다.
- break를 쓰면 syntax error가 뜬다
- 각 요소를 **순회**하며 콜백함수로 준 함수를 각 요소에 실행시킨다
- map vs forEach
    - forEach는 하나하나요소에 순회하면서 무언갈 해야할때
    - ma
- forEach의 콜백함수는 전역함수다 
```js
var total = 0;
var testArray = [1, 3, 5, 7, 9];

// forEach 메소드는 원본 배열을 변경하지 않는다.
testArray.forEach(function (item, index, array) {
  console.log('[' + index + '] = ' + item);
  total += item;
});

console.log(total); // 25
console.log(testArray); // [ 1, 3, 5, 7, 9 ]
```

---

<h2>Array.protype.map()</h2>

- 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수의 반환값(결과값)으로 새로운 배열을 생성하여 반환한다. 
- 이때 원본배열은 변경되지않는다
- forEach()는 배열을 순회하며 요소 값을 참조하여 무언가를 하기 위한 함수이며 map()은 배열을 순회하며 요소 값을 다른값으로 맵핑하기 위한 함수이다
- 매개변수의 순서는 forEach와 같다
- __**반드시 콜백함수에 리턴이 있어야한다**__
- 새로운 배열을 반환한다 
- 특징은 원본배열과 같은 새로운 배열을 만들어낸다

---

<h2>Array.prototype.filter</h2>

- 

---

<h1>Qs</h1>
1. 배열메소드중 원본배열이 변경 가능한 메소드는 무엇인가/
2. 배열 메소드중 원본배열이 변경 불가능한 메소드는 무엇인가