import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgToastModule } from 'ng-angular-popup';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TokenInterceptorService } from './users/token-interceptor.service';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserService } from './users/user.service';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatMenuModule,
    MatCardModule,
    MatPseudoCheckboxModule,
    MatTabsModule,
    MatButtonModule,
    FlexLayoutModule,
    MainModule,
    NgToastModule
  ],

  providers: [HttpClient, HttpClientModule, UserService, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
