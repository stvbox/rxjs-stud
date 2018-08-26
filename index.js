"use strict";
exports.__esModule = true;
var Rx = require("rxjs/Observable");
var obser$ = Rx.Observable.create(function (observer) {
    var counter = 0;
    setInterval(function () {
        observer.next(counter++);
    }, 1000);
});
/*const obser$ = Observable.create(observer => {
    let counter = 0;
    setInterval(function() {
        observer.next(counter++);
    }, 1000);
});*/
obser$.subscribe(function (obs) {
    console.log(obs);
});
console.log('123');
