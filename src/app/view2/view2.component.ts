
import { Http } from '@angular/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../Services and Directives/data.service';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component implements OnInit {
     departmentData;
   constructor(private dataService :DataService, private router:Router) { }

  ngOnInit() {
              this.dataService.getDepartmentData()
              .subscribe((departmentData=>
                {
                  this.departmentData = departmentData["departments"];
                }));
           }
         
          OnSubjectClick(department,subject)
         {
          this.router.navigate(
            ['view3'],{queryParams:{Department:department, Subject:subject }})
         }

        

}
