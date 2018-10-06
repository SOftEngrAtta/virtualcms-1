import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-manage-customer',
    templateUrl: './managecustomer.html',
    styleUrls: ['./managecustomer.css']
})

export class ManageCustomer implements OnInit{

    constructor(private route: Router ){}

    ngOnInit(){}

    opencustomerdetail(){
        debugger
        this.route.navigate(['/customersdetail'])
    }
}

