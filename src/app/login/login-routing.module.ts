import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginHomePageComponent } from 'src/app/pages/login-home-page/login-home-page.component';
import { LoginPageComponent } from 'src/app/pages/login-page/login-page.component';

const routes: Routes = [
  {
    path: '',
    component: LoginHomePageComponent,
    children: [
      {
        path: '',
        component: LoginPageComponent,
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
