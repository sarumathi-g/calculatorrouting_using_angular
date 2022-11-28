import { Component, OnInit } from '@angular/core';
import { WholevalueService } from '../wholevalue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  title = 'Basic Calculator Using Routing';
  num1:any;
  num2:any;
  num3:any;
  add(){
    this.num3=this.num1+this.num2;
    WholevalueService.storeRes(this.num3);
    this.router.navigate(['/addition']);
  }
  sub(){
    this.num3=this.num1-this.num2;
    WholevalueService.storeRes(this.num3);
    this.router.navigate(['/subtraction']);
  }
  mul(){
    this.num3=this.num1*this.num2;
    WholevalueService.storeRes(this.num3);
    this.router.navigate(['/multiplication']);
  }
  div(){
    this.num3=this.num1/this.num2;
    WholevalueService.storeRes(this.num3);
    this.router.navigate(['/division']);
  }
 
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}


 


