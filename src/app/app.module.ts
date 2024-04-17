import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
