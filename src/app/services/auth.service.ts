import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private AFauth: AngularFireAuth,    
  ) { }

  logIn(email: string, password: string){  
    return new Promise((resolve, reject) => {
      this.AFauth.auth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user)
      }).catch(error => reject(error))
    })    
  }

  logOut(){
    return this.AFauth.auth.signOut();
  }

}
