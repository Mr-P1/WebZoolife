import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink ,Router, RouterModule} from '@angular/router';
import { AuthStateService } from '../../data-access/auth-state.service';



@Component({
  selector: 'app-prueba1',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './prueba1.component.html',
  styleUrl: './prueba1.component.scss',
})
export class Prueba1Component {


  private _authState = inject(AuthStateService);
  private _router = inject(Router);

  async logOut(){
    await this._authState.logOut();
    this._router.navigate(['']);
  }

}
