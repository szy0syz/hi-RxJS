# RxJS

```js
 var obs1 = Rx.Observable.interval(1000).take(4);
 var obs2 = Rx.Observable.interval(500).take(2);
 var obs3 = Rx.Observable.interval(2000).take(1);

var source = Rx.Observable.of(obs1, obs2, obs3);

var example = source.concatAll();



example.subscribe({
  next: val => console.log(val),
  error: err => console.error(err),
  complete: () => console.log('complete')
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
