import { Routes } from '@angular/router';
import { privateGuard, publicGuard } from './core/auth.guard';
import { Prueba1Component } from './pages/prueba1/prueba1.component';
import { Prueba2Component } from './pages/prueba2/prueba2.component';
import { Prueba3Component } from './pages/prueba3/prueba3.component';


export const routes: Routes = [

  {
    // canActivate:[publicGuard()],
    path:'asd',
    loadComponent: () => import('./auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    // canActivate:[privateGuard()],
    path:'animales',
    loadComponent: () => import('./animales/listar-animales/listar-animales.component').then(m => m.ListarAnimalesComponent)
  },
  {
    path:'Prueba',
    loadComponent: () => import('./animales/pruebas/pruebas.component').then(m=>m.PruebasComponent)
  },
  {
    path:'LoginPrueba',
    loadComponent:() => import('./animales/pruebalogin/pruebalogin.component').then(m=>m.PruebaloginComponent)

  },

  // {
  //   path:'**',
  //   redirectTo:''
  // },


  {
    path: '',
    component: Prueba1Component,
    children: [
      { path: 'about', component: Prueba2Component },
      { path: 'contact', component: Prueba3Component },
    ],
  },
];
