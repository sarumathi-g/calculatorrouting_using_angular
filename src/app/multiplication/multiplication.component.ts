import { Component, OnInit } from '@angular/core';
import { WholevalueService } from '../wholevalue.service';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent implements OnInit {
  


  constructor() {}
   multipleresult:any;

  ngOnInit(): void {
    this.multipleresult = WholevalueService.res1;
    console.log("Val: " + this.multipleresult);

  }

}
