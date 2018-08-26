import Observable from "rxjs/observable";

const obser$ = Observable.create(observer => {
    let counter = 0;
    setInterval(function() {
        observer.next(counter++);
    }, 1000);    
});

/*const obser$ = Observable.create(observer => {
    let counter = 0;
    setInterval(function() {
        observer.next(counter++);
    }, 1000);    
});*/

obser$.subscribe((obs) => {
    console.log(obs);
});



console.log('123');