import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  titulo:string;
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
    document.title = 'Hola mundo'
    this.router.events.pipe(
      filter<any>(event => event instanceof ActivationEnd),
      filter((event:ActivationEnd)=> event.snapshot.firstChild === null),
      map((event:ActivationEnd)=>event.snapshot.data)

    ).subscribe(({titulo})=>{
      console.log(titulo)
      this.titulo = titulo;
    })
  }

}
