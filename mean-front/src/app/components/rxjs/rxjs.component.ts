import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let obs$ = new Observable(observer=>{
      let i = -1
      setInterval(() => {
        i++
        observer.next(i);
      }, 1000);

    })

    obs$.subscribe(resp=>{
      console.log(resp)
    })

  }

}
