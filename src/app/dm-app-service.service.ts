import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable()
export class DmAppServiceService {
  constructor(private http: HttpClient) {}

  private path: string = '/api/dbEmployees';
  LocList = [
    'Trichy',
    'Chennai',
    'Bangalore',
    'Delhi',
    'Pune',
    'Noida',
    'Gurgaon',
    'Jaipur',
  ];
  employees: Employee[];

  getAllEmployees() {
    this.http.get<Employee[]>(this.path).subscribe((EmpDetais) => {
      this.employees = EmpDetais;
    });
  }
  addEmployee(EmpDetails: Employee) {
    this.http.post(this.path, EmpDetails).subscribe((EmpDetais) => {
      let output = EmpDetais;
    });
  }
  editEmployee(EmpDetails: Employee) {
    this.http.put(this.path, EmpDetails).subscribe((EmpDetais) => {
      let output = EmpDetais;
    });
  }
  deleteEmployee(id: number) {
    const params = new HttpParams().set('Employee.id', id);
    this.http.delete(this.path, { params }).subscribe(
      (result) => console.log(result),
      (err) => console.error(err)
    );
  }
}
