import { Injectable ,inject} from '@angular/core';
// import { Auth,signInWithEmailAndPassword } from '@angular/fire/auth';
import { Auth, signInWithEmailAndPassword, onAuthStateChanged, User as FirebaseUser } from '@angular/fire/auth';
import { Observable, of } from 'rxjs';

export interface User {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServicioLoginService {


  constructor() { }

  private _auth = inject(Auth);

  logearse(user:User){
    return  signInWithEmailAndPassword(this._auth,user.email,user.password)
  }


}
