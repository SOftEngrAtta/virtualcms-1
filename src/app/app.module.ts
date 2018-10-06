/***************************
 * import angular modules 
 **************************/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { HttpClientModule,HttpClient,HttpClientJsonpModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

/****************
 * components 
 ****************/ 
import { AppComponent } from './app.component';
import { ManageCustomer } from './components/managecustomer/managecustomer';
import { CustomersDetail } from './components/customersdetail/customersdetail';
import { CustomerCreate } from './components/customercreate/customercreate';

/****************
 *  services
 * **************/
import { ReadJSON } from './services/customersdetail'; 


/*******************
 * integrate routes 
 * *******************/
export const routes : Routes = [{
  path : "" , redirectTo: "managecustomer", pathMatch: "full"
},{
  path : 'managecustomer' , component: ManageCustomer
},{
  path: 'customersdetail' , component: CustomersDetail
},{
  path: 'customercreate' , component: CustomerCreate
}]
 

@NgModule({
  declarations: [
    AppComponent,
    ManageCustomer,
    CustomersDetail,
    CustomerCreate
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule
  ],
  providers: [ ReadJSON , HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
