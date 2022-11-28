import { Component, OnInit } from '@angular/core';
import { WholevalueService } from '../wholevalue.service';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {


  constructor() { }
  divisionresult:any;

  ngOnInit(): void {
    this.divisionresult=WholevalueService.res1;
    console.log("Val:"+this.divisionresult);
  }

}
