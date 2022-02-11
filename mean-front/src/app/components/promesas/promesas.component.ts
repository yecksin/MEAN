import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.scss']
})
export class PromesasComponent implements OnInit {
  userList:any = [];
  constructor() { }

  ngOnInit(): void {

    this.getUsers().then(resp=>{
      console.log(resp)
      this.userList = resp;
    })

  }

  promesaBasica(){
    const promesa = new Promise((resolve,reject)=>{
      if (true) {
        resolve('Promesa Funciona')
      }else{
        reject('Error');
      }
    })


    promesa.then(resp=>{
      console.log(resp)
    }).catch(err=>{
      console.log(err)
    })
  }

  getUsers(){

    return new Promise((resolve,reject)=>{

      fetch('https://reqres.in/api/users').then(resp=>resp.json()).then(resp=>{
        resolve(resp.data);
      }).catch(err=>{
        reject(err)
      })

    })

    //? consumir normal de la api con promesa
    fetch('https://reqres.in/api/users').then(resp=>{
      resp.json().then(jsonResp=>{
        console.log(jsonResp)
      })
    })

  }

}
