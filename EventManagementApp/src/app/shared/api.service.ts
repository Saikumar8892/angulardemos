import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getAllEmploye: any;
  deleteEmployee(id: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http : HttpClient) { }

  postEmploye(data : any){
    return this.http.post<any>("http://localhost:3000/employees/", data)
   .pipe(map((res:any)=>{
    return res;
   }))
  }
  getEmploye(data : any){
    return this.http.get<any>("http://localhost:3000/employees")
   .pipe(map((res:any)=>{
    return res;
   }))
  }
  putEmploye(data : any){
    return this.http.put<any>("http://localhost:3000/employees/", data)
   .pipe(map((res:any)=>{
    return res;
   }))
  }
  deleteEmploye(data : any){
    return this.http.delete<any>("http://localhost:3000/employees/")
   .pipe(map((res:any)=>{
    return res;
   }))
  }
}
