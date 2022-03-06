import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-user-class',
  templateUrl: './user-class.component.html',
  styleUrls: ['./user-class.component.scss']
})
export class UserClassComponent implements OnInit {

  constructor(
    private _testService:TestService
  ) { }

  user:User;

  ngOnInit(): void {

    this.user = new User('yecksin','2332345644','31683940538');
    this.user.imprimirUsuario();
   
    this._testService.getUsers().subscribe(resp=>{
      console.log(resp)
     
    })
  }

}
