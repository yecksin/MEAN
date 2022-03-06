import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    private http:HttpClient
  ) { }

    getUsers(){
      return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
        delay(2000),
        tap((resp:any)=>{localStorage.setItem('randomUser',resp[0]?.email)}),
        catchError(error=> of(false))
        
        )
    }

}
