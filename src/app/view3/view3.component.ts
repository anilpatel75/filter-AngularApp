import { DataService } from './../data.service';
import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-view3',
  templateUrl: './view3.component.html',
  styleUrls: ['./view3.component.css']
})
export class View3Component implements OnInit {
  @ViewChild('divToMeasure') divToMeasureElement: ElementRef;

  
   subject;
   department;
   studentDat;
   finalData=[];
   finalDepartment;
   finalDep =[];
   result;
   finalResult;
   num;
   activity = false;

  constructor(private route:ActivatedRoute,
    private dataService:DataService,private router:Router) { }

  ngOnInit() {
    this.dataService.getStudentData().subscribe((studentData)=>
  {
    this.studentDat = studentData["body"]["studentData"]["students"];
    this.getData(this.studentDat)
  }),
  this.dataService.getDepartmentData().subscribe((department=>
  {
      this.finalDepartment = department["departments"];
      this.getDepData(this.finalDepartment)
  }))
   this.route.queryParams.subscribe((param)=>
  {
    this.subject = param.Subject;
    this.department = param.Department;
  });
  
    let divToMeasureWidth = this.divToMeasureElement;
  console.log(divToMeasureWidth)
  
}
ngOnChanges() {
 
  
}
          getData(item)
          {
             for(let i=0;i<item.length;i++)
             { 
               if(item[i].subject == this.subject)
               {
               this.finalData.push(item[i])
               }
              }
          }
getDepData(DepData)
{
   for(let i=0;i<DepData.length;i++)
    {
       if(DepData[i].name ==this.department)
        {
           this.finalDep.push(DepData[i].subjects)
        }
    }
  
    for(let j=0;j<this.finalDep[0].length;j++)
      {
          if(this.finalDep[0][j] == this.subject)
           {
             this.finalDep[0].splice(j,1);
           }
      }
         if(this.finalDep[0].length<=4)
         {
           this.num =null;
           this.activity = true;
          this.result = this.finalDep[0];
         }
          else{
            this.num = (this.finalDep[0].length)-4;
            this.result = this.finalDep[0].slice(0,4);
          }
}

      onClick()
      {
        this.result = this.finalDep[0];
        this.activity = true;
      }
          backTOView2()
          {
          this.router.navigate(['/view2'])
          }
 

}
