import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  valorObservable: string;
  valorPromise: string;

  constructor() { }

  ngOnInit() {
    // this.semAssinante();
    // this.lazyAndEager();
    // this.multiplosValores();
  }
  semAssinante() {
    let observer: Observable<string> = new Observable<string>(observable => {
      this.valorObservable = 'Instanciando um Observable';
    });
    let promise: Promise<string> = new Promise<string>(resolve => {
      this.valorPromise = 'Instanciando um Promise';
    });

  }

  lazyAndEager() {
    let observer: Observable<string> = new Observable<string>((observer) => {
      observer.next('Instanciando um Observable');
    });

    let promise: Promise<string> = new Promise<string>((resolve, reject) => {
      resolve('Instanciando um Promise');
    });

    observer.subscribe(observable => {
      this.valorObservable = observable;
    });

    promise.then(resolve => {
      this.valorPromise = resolve;
    });
  }

  multiplosValores() {
    let observer: Observable<string> = new Observable<string>((observer) => {
      observer.next('Instanciando um Observable');
      observer.next('Instanciando um outro Observable');
    });

    let promise: Promise<string> = new Promise<string>((resolve, reject) => {
      resolve('Instanciando um Promise');
      resolve('Instanciando um outro Promise');
    });

    observer.subscribe(observable => {
      console.log(observable);
      this.valorObservable = observable;
    });

    promise.then(resolve => {
      console.log(resolve);
      this.valorPromise = resolve;
    });
  }
}
