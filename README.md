# RxJS

## base

```js
var obs1 = Rx.Observable.interval(1000).take(4);
var obs2 = Rx.Observable.interval(500).take(2);
var obs3 = Rx.Observable.interval(2000).take(1);

var source = Rx.Observable.of(obs1, obs2, obs3);

var example = source.concatAll();

example.subscribe({
  next: val => console.log(val),
  error: err => console.error(err),
  complete: () => console.log('complete'),
});

/* marble giagram

obs1  : ----0----1----2----3|
obs2  : --0--1|
obs3  : --------0|

source: (obs1,                   obs2,      obs3)
          \                        \         \
           ----0----1----2----3|    --0--1|   --------0|
                        concatAll()
source: ----0----1----2----3--0--1--------0|
*/
```

## RxJS-101

### 04-Operator

#### skip

```js
// 跳过数组后两个元素后打印
// -> apples grapes
from(['apples', 'grapes', 'oranges', 'pears']).pipe(skipLast(2));
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
```
