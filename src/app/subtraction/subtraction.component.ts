import { Component, OnInit } from '@angular/core';
import { WholevalueService } from '../wholevalue.service';

@Component({
  selector: 'app-subtraction',
  templateUrl: './subtraction.component.html',
  styleUrls: ['./subtraction.component.css']
})
export class SubtractionComponent implements OnInit {
  

  constructor() { }
  subresult:any;

  ngOnInit(): void {
    this.subresult = WholevalueService.res1;
    console.log("Val: " + this.subresult);
  }

}
