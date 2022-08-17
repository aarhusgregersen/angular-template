import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { LoginHomePageComponent } from './pages/login-home-page/login-home-page.component';
import { LoginPageTemplateComponent } from './templates/login-page-template/login-page-template.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const materialImports = [
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatCardModule,
];

const states: any = [];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginHomePageComponent,
    LoginPageTemplateComponent,
    LoginPageComponent,
  ],
  imports: [
    ...materialImports,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsModule.forRoot(states, {
      developmentMode: true,
    }),
  ],
  providers: [
    {
      provide: 'ENV',
      useValue: environment,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
