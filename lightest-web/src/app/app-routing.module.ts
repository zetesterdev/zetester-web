import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MainComponent } from './main/main.component';
import { ErrorComponent } from './error/error.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: AuthComponent, }, 
  { path: "main", component: MainComponent},
  { path: "login", component: LoginComponent},
  { path: "registration", component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
