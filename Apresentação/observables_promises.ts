

const {Observable} = rxjs;

new Promise((resolve)=>{
    resolve(1);
    resolve(2);
}).then(num => console.log("Promise: " + num));

Observable.create((observer) =>{
  observer.next(1);
  observer.next(2);
}).subscribe(num => console.log("Observable: " + num));
