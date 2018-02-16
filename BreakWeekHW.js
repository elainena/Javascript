/*9. 정수제곱근 판별하기
nextSqaure함수는 정수 n을 매개변수로 받는다.n이 임의의 정수 x의 제곱이라면 x + 1 의 제곱을 리턴하고, n이 임의의 정수 x의 제곱이 아니라면 'no'
을 리턴하는 함수를 작성하라.예를들어 n이 121 이라면 이는 정수 11 의 제곱이므로(11 + 1) 의 제곱인 144 를 리턴하고, 3 이라면 'no'
을 리턴한다.

function nextSqaure(n) {
    var x= Maths
}

console.log(nextSqaure()); // no
console.log(nextSqaure(0)); // 1
console.log(nextSqaure(1)); // 4
console.log(nextSqaure(2)); // no
console.log(nextSqaure(3)); // no
console.log(nextSqaure(121)); // 144
console.log(nextSqaure(165)); // no
console.log(nextSqaure(400)); // 441*/

function nextSqaure(n) {
  if (Number.isInteger(Math.sqrt(n))) {
    return Math.pow((Math.sqrt(n) + 1), 2);
  } else {
    return "no";
  }
}

console.log(nextSqaure());
console.log(nextSqaure(0));
console.log(nextSqaure(1));
console.log(nextSqaure(2));
console.log(nextSqaure(3));
console.log(nextSqaure(121));
console.log(nextSqaure(165));
console.log(nextSqaure(400));

/* 10. Check Palindrom
palindrome(팰린드롬/회문)은 왼쪽에서 오른쪽으로 읽은 다음, 오른쪽부터 왼쪽으로 다시 읽어도 똑같은 형태와 의미를 유지하는 문장이나 단어를 지칭한다. 인자로 전달한 문자열이 palindrome인지 검사하여 Boolean값을 반환하는 함수를 완성하라. 단, 반드시 1자 이상의 문자열을 인자로 전달한다.

function checkPalindrom(str) {

}

console.log(checkPalindrom('dad')); // true
console.log(checkPalindrom('mom')); // true
console.log(checkPalindrom('palindrom')); // false
console.log(checkPalindrom('s')); // false */

function checkPalindrom(str) {
  var pal = str.split("").reverse().join("");
  for (var i = 0; i > 1; i++) {
    if (pal === str) {
      return true;
    }
    return false;
  }
}


console.log(checkPalindrom('dad'));
console.log(checkPalindrom('mom'));
console.log(checkPalindrom('palindrom'));
console.log(checkPalindrom('s'));