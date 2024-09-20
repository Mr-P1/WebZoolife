import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink ,Router} from '@angular/router';
import { AuthStateService } from '../../data-access/auth-state.service';


@Component({
  selector: 'app-listar-animales',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './listar-animales.component.html',
  styleUrl: './listar-animales.component.scss'
})
export class ListarAnimalesComponent {

  private _authState = inject(AuthStateService);
  private _router = inject(Router);

  async logOut(){
    await this._authState.logOut();
    this._router.navigate(['']);
  }

}
