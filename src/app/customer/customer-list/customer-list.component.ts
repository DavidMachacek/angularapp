import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer } from "../customer";
import { CustomerService } from "../customer.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  providers: [CustomerService]
})
export class CustomerListComponent implements OnInit {

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
