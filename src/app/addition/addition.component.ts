import { Component, OnInit } from '@angular/core';
import { WholevalueService } from '../wholevalue.service';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {

  constructor() { }

  additionresult:any;

  ngOnInit(): void {
    this.additionresult = WholevalueService.res1;
    console.log("Val: " + this.additionresult);
  }

}


