import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-demo1',
  imports: [],
  templateUrl: './subject-demo1.html',
  styleUrl: './subject-demo1.css',
})
export class SubjectDemo1 {
  ngOnInit(){
    //this.subject_demo();
    //this.behaviourSubject_demo();
    //this.replaySubject_demo();
    this.asyncSubject_demo();
  }
  
  subject_demo() {
    let carSubject = new Subject(); //publisher
    carSubject.next('Tata');

    carSubject.subscribe((val)=> console.log('Subscriber-1 ',val));
    carSubject.next('Honda');
    carSubject.subscribe((val)=> console.log('Subscriber-2 ',val));
    carSubject.next('maruti');

  }
  behaviourSubject_demo() {
    let carSubject = new BehaviorSubject(''); //publisher
    carSubject.next('Tata');

    carSubject.subscribe((val)=> console.log('Subscriber-1 ',val));
    carSubject.next('Honda');
    carSubject.subscribe((val)=> console.log('Subscriber-2 ',val));
    carSubject.next('maruti');
  }

  replaySubject_demo() {
    let carSubject = new ReplaySubject(); //publisher
    carSubject.next('Tata');

    carSubject.subscribe((val)=> console.log('Subscriber-1 ',val));
    carSubject.next('Honda');
    carSubject.subscribe((val)=> console.log('Subscriber-2 ',val));
    carSubject.next('maruti');
  }
  
  asyncSubject_demo() {
    let carSubject = new AsyncSubject(); //publisher
    carSubject.next('Tata');

    carSubject.subscribe((val)=> console.log('Subscriber-1 ',val));
    carSubject.next('Honda');
    carSubject.subscribe((val)=> console.log('Subscriber-2 ',val));
    carSubject.next('maruti');
    carSubject.complete();
  }
}
