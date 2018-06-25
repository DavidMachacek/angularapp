import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { Customer } from "./customer";
import { CustomerService } from "./customer.service";

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  declarations: [CustomerListComponent]
})
export class CustomerModule implements OnInit {

	private customers: Customer[];

	constructor(private customerService: CustomerService) {}

	ngOnInit() {
		this.getAllCustomers();
	}

getAllCustomers() {
    this.customerService.findAll().subscribe(
      customers => {
        this.customers = customers;
      },
      err => {
        console.log(err);
      }
 
    );
  }

 }
