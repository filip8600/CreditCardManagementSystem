import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionListComponent } from './Standalone Components/transaction-list/transaction-list.component';
import { CreditCardAddComponent } from './Standalone Components/credit-card-add/credit-card-add.component';
import { NavigationBarComponent } from './AppModuleComponents/navigation-bar/navigation-bar.component';
import { HomeComponent } from './AppModuleComponents/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CreditCardAddComponent,
    TransactionListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
