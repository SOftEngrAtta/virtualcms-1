import { Component , OnInit } from '@angular/core';
import { ReadJSON } from '../../services/customersdetail'

@Component({
    selector: 'app-customersdetail',
    templateUrl: './customerdetail.html',
    styleUrls: ['./customersdetail.css']
})

export class CustomersDetail implements OnInit{
    
    public customers = [];

    constructor(private readfile: ReadJSON){}
    
    ngOnInit(){
        this.readfile.getCustomersdetail().subscribe(data =>{ this.customers = (data && data['customers'])?data['customers']:[] });
    }
}