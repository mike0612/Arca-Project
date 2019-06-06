import { Component, OnInit } from '@angular/core';
import { MenuController } from "@ionic/angular";
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {} as User;

  constructor(      
    public menu: MenuController,  
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() { 
    this.menu.enable(false);
  }

  onSubmitLogin(){
    this.auth.logIn(this.user.email,this.user.password).then(res => {
      this.menu.enable(true);
      this.router.navigate(['/adopta']);
    }).catch(error => alert("datos incorrectos"))


    
  }

  
}
