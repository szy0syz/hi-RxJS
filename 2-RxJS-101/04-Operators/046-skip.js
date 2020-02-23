const { from, fromEvent, interval } = require('rxjs');
const { take, skipWhile, skipLast, skipUntil } = require('rxjs/operators');

// 跳过数组后两个元素后打印
// -> apples grapes
from(['apples', 'grapes', 'oranges', 'pears'])
  .pipe(skipLast(2))
  // .subscribe(console.log);

// 取前10个，一直跳过 <4 的值后打印
// -> 4,5,6,7,8,9
interval(1000).pipe(
  take(10),
  skipWhile(number => number < 4)
);
// .subscribe(console.log);

// 网页载入完毕后就开始计时，等啊等，等到 button 点击后开始连续打印
const button = document.getElementById('submit');
const buttonEvents = fromEvent(button, 'click');

interval(1000).pipe(take(10), skipUntil(buttonEvents));
// .subscribe(console.log);
