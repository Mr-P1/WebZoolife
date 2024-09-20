import { Component,inject } from '@angular/core';
import { ReactiveFormsModule,FormBuilder, FormControl,Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServicioLoginService } from '../servicio/servicio-login.service';
import { Router, RouterLink } from '@angular/router';

interface FormSignin{
  email:FormControl<string  >;
  contraseña:FormControl<string >;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {
  private _formBuilder = inject(FormBuilder);
  private _authService = inject(ServicioLoginService)
  private _router = inject(Router);


  form = this._formBuilder.group(
    {
      email:this._formBuilder.control('',[Validators.required,Validators.email]),
      password:this._formBuilder.control('',[Validators.required, Validators.minLength(5)])
    }
  )

  errorMessage: string | null = null;


  async submit() {
    if (this.form.invalid) return;

    try {
      const { email, password } = this.form.value;

      if (!email || !password) return;

      await this._authService.logearse({ email, password });


      this._router.navigate(['/animales']);
    } catch (error) {
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }

}
