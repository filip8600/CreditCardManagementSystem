import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditCardAddComponent } from './Standalone Components/credit-card-add/credit-card-add.component';
import { NavigationBarComponent } from './AppModuleComponents/navigation-bar/navigation-bar.component';
import { HomeComponent } from './AppModuleComponents/home/home.component';
import { HttpClientModule } from '@angular/common/http';

import { TransactionModule } from './Modules/transaction/transaction.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CreditCardListComponent } from './Modules/credit-card/credit-card-list/credit-card-list.component';
import { CreditCardModule } from './Modules/credit-card/credit-card.module';

@NgModule({
  declarations: [AppComponent, NavigationBarComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CreditCardAddComponent,
    TransactionModule,
    HttpClientModule,
    FormsModule,
    CreditCardModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
