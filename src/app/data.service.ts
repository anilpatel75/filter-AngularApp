
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Http,Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) {
    
   }
   getStudentData()
  {
   return this.http.get('assets/databse/students.json')
   .map((res:Response)=>
  {
    return res.json();
  })
  }
  getDepartmentData()
  {
   return this.http.get('assets/databse/departments.json')
   .map((res:Response)=>
  {
    return res.json();
  })
  }


}
