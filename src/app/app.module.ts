import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { PaymentsComponent } from './payments/payments.component';
// import { PaymentsModule } from './payments/payments.module';
// import { UsersComponent } from './users/users.component';
// import { UsersModule } from './users/users.module';


@NgModule({
  declarations: [
    AppComponent,
    // PaymentsComponent,
    // UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // UsersModule,
    // PaymentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
