import { Component, OnInit } from '@angular/core';
import { filter, interval, map, Observable, retry, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {
  index:any = 0;
  error:any = '';
  retornaObervable$:Subscription;
  retornaIntervalo$:Subscription;
  constructor() { }

  ngOnInit(): void {


    this.retornaObervable$ = this.retornaObervable().pipe(
      //retry(1) //? si hay un error repide la ejecucion una vez mas, re intentar
    ).subscribe(
      resp=>{
        // console.log(resp)
        this.index = resp;
      },
      err=>{
        console.log(err)
        this.error = err;
      },
      ()=> console.info("terminado")

    )




    this.retornaIntervalo$ = this.retornaIntervalo().subscribe(resp=>{
        // console.log(resp)
      })




  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.retornaIntervalo$.unsubscribe();
    this.retornaObervable$.unsubscribe();
  }

  retornaIntervalo():Observable<number>{
    return interval(300).pipe(
      map(num=>num+1),//? orden 1
      filter(num=>num%2==0? true:false),//? orden 2
      take(10),//? orden 3
    )
  
  }


  retornaObervable():Observable<number>{
    let random = Math.floor(Math.random() * (10 - 1)) + 1;
    //? es opcional poner el tipo de dato que tetorna
    return new Observable<number>(observer=>{
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
  }

}
