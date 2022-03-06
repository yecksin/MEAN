import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, tap, of, delay, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    private http:HttpClient
  ) { }

    getUsers(){
      //? es cont si no nay mas pero let si se le hace append
      let params = new HttpParams().append('page', '1')
      //? agregar nuevo param
      params = params.append('example',"1")

      const headers = new HttpHeaders({
        'token-ejemplo':'ANSAJSAS'
      })

      return this.http.get('https://jsonplaceholder.typicode.com/users',{
        params: params,
        headers
      }).pipe(
        delay(2000),
        tap((resp:any)=>{localStorage.setItem('randomUser',resp[0]?.email)}),
        catchError(error=> of(false))
        
        )
    }

    getUsers2(){
      //? es cont si no nay mas pero let si se le hace append
      let params = new HttpParams().append('page', '1')
      //? agregar nuevo param
      params = params.append('example',"1")

      return this.http.get('https://jsonplaceholder.typicode.com/users',{
        params: params
      }).pipe(
        delay(2000),
        tap((resp:any)=>{localStorage.setItem('randomUser',resp[0]?.email)}),
        catchError(this.manejarError)
        
        )
    }

    manejarError(error:HttpErrorResponse){
      console.log(error)
      return throwError('Error personalizado')
    }

}
