import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// // servive--- this.res1 property having to access the 
//  whole component and res for specific component to store the results
export class WholevalueService {
  static res1: any;

  static storeRes(res:any) {
    this.res1 = res;
  }

  constructor() { }
}
