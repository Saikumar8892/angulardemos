import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { FormsModule } from '@angular/forms';
import { EcommComponent } from './ecomm/ecomm.component';
import { CartComponent } from './ecomm/cart/cart.component';
import { EcomproductComponent } from './ecomm/ecomproduct/ecomproduct.component';
import { NumbersComponent } from './numbers/numbers.component';
import { BasicHighlightDirective } from './BasicHighlightDirective';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountComponent } from './accounts/account/account.component';
import { NewaccountComponent } from './accounts/newaccount/newaccount.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ProductsComponent,
    ProductComponent,
    EcommComponent,
    CartComponent,
    EcomproductComponent,
    NumbersComponent,
    BasicHighlightDirective,
    AccountsComponent,
    AccountComponent,
    NewaccountComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}