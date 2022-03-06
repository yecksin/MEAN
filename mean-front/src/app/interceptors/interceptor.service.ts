import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    //? ver en => fetch/XHR request headers
    const headers = new HttpHeaders({
      'token-ejemplo':'TOKENINTERCEPTOR'
    })

    const reqClone = req.clone({
      headers
    })

    return next.handle(reqClone).pipe(
      catchError(this.manejarError)
    );
  }

  manejarError(error:HttpErrorResponse){
    console.log("Error interceptado")
    console.log(error)
    return throwError('Error personalizado')
  }

}
