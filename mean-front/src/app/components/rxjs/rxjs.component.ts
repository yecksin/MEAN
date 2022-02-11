import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {
  index:any = 0;
  error:any = '';
  constructor() { }

  ngOnInit(): void {
    let random = Math.floor(Math.random() * (10 - 1)) + 1;
    let obs$ = new Observable(observer=>{
      let i = -1
      setInterval(() => {
        i++
        observer.next(i);
        if (i === 5) {
          observer.complete();
        }
        if (i === random) {
          observer.error(`Es ${random} y es un error, no cumple el complete`);
        }
      }, 500);

    })

    obs$.subscribe(
      resp=>{
        console.log(resp)
        this.index = resp;
      },
      err=>{
        console.log(err)
        this.error = err;
      },
      ()=> console.info("terminado")

    )

  }

}
