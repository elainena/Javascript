//1~10000까지 숫자8이 등장하는 횟수가 몇번인지 
function getCount8() {
  var all = '';
  var cnt = 0;
  for (var i = 1; i < 10001; i++) {
    all += i;
  }
  for (var j = 0; j < all.length; j++) {
    if (all.charAt(j) === '8') cnt++;
  }
  return cnt;
}
console.log(getCount8());

function alphaString46(s) {
  if (!s) {
    return false;
  }
  if ((s.length >= 4 && s.length <= 6) && !isNaN(s)) {
    return true;
  }
  return false;
}

console.log(alphaString46('1234')); //true
console.log(alphaString46('9014')); //true
console.log(alphaString46('723')); //false
console.log(alphaString46('a234')); //false
console.log(alphaString46('')); //false
console.log(alphaString46()); //false

(function printNow() {
  var today = new Date();

  var dayNames = ['(일요일)', '(월요일)', '(화요일)', '(수요일)', '(목요일)', '(금요일)', '(토요일)'];
  // getDay: 해당 요일(0 ~ 6)를 나타내는 정수를 반환한다.
  var day = dayNames[today.getDay()];

  var year = today.getFullYear(),
    month = today.getMonth() + 1,
    date = today.getDate(),
    hour = today.getHours(),
    minute = today.getMinutes(),
    second = today.getSeconds();
  ampm = hour >= 12 ? 'PM' : 'AM';

  // 12시간제로 변경
  hour = hour % 12;
  hour = hour ? hour : 12; // 0 => 12

  // 10미만인 분과 초를 2자리로 변경
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;

  var now = year + '년 ' + month + '월 ' + date + '일 ' + day + ' ' + hour + ':' + minute + ':' + second + ' ' + ampm;

  console.log(now);
  setTimeout(printNow, 1000);
}());