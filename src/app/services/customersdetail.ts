import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class ReadJSON{
    
    constructor(private http: HttpClient){}
    getCustomersdetail() {
        return this.http.get('../../assets/data.json')
    } 
    
}