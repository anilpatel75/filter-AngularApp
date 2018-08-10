
import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services and Directives/data.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {
      studentData;
      constructor(private dataService:DataService) { }

    ngOnInit() {
      this.dataService.getStudentData().subscribe
      ((studentData)=>
      {
          this.studentData = studentData["body"]["studentData"]["students"];
       }
      )
    }

}
