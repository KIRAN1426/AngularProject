import { Component, OnInit } from '@angular/core';
import { LoginuserService } from '../loginuser.service';
import { User } from '../user';
import { error } from '@angular/compiler/src/util';




@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user : User = new User();


  constructor(private loginuserservice : LoginuserService) { }

  ngOnInit(): void {
  }
    
    userlogin()
    {
      console.log(this.user)
      this.loginuserservice.loginUser(this.user).subscribe(data=>{
        alert("Login Successfully")
      },error=> alert("Soory Please enter Correct UseriD And Password"));
      
    }

  }


