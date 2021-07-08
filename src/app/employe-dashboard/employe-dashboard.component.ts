import { EmployeeModel } from './employe-dash board.model';
import { ApiService } from './../shared/api.service';
import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup} from '@angular/forms'

@Component({
  selector: 'app-employe-dashboard',
  templateUrl: './employe-dashboard.component.html',
  styleUrls: ['./employe-dashboard.component.css']
})
export class EmployeDashboardComponent implements OnInit {

  formValue !: FormGroup;
  employeModelObj: EmployeeModel = new EmployeeModel();
  employdata !:any;
  showAdd !:boolean;
  showUpdate !:boolean;

  constructor(private formbuilder:FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: [''],
      salary: [''],
    })
    this.getAllEmployee();
  }
  clickAddEmploye(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  postEmployeDetails(){
    this.employeModelObj.firstName = this.formValue.value.firstName;
    this.employeModelObj.lastName = this.formValue.value.lastName;
    this.employeModelObj.email = this.formValue.value.email;
    this.employeModelObj.mobile = this.formValue.value.mobile;
    this.employeModelObj.salary = this.formValue.value.salary;

    
    this.api.postEmploye(this.employeModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Employee Added Successfully")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllEmployee();
    },
    err=>{
      alert("Somthing Went Wrong")
    }
    )
  }
  getAllEmployee(){
    this.api.getEmploye()
    .subscribe(res=>{
      this.employdata =res;
    })
  }

  delete(row:any){
    this.api.deleteEmploye(row.id)
    .subscribe(res=>{
      console.log("deleted:")
      this.getAllEmployee();
    })

  }
  updateEmploye(row: any){
    this.showAdd = false;
    this.showUpdate = true;
    this.employeModelObj.id = row.id;
    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['mobile'].setValue(row.mobile);
    this.formValue.controls['salary'].setValue(row.salary);
  }
  updateEmployeDetails(){
    this.employeModelObj.firstName = this.formValue.value.firstName;
    this.employeModelObj.lastName = this.formValue.value.lastName;
    this.employeModelObj.email = this.formValue.value.email;
    this.employeModelObj.mobile = this.formValue.value.mobile;
    this.employeModelObj.salary = this.formValue.value.salary;

    this.api.updateEmploye(this.employeModelObj,this.employeModelObj.id)
    .subscribe(res=>{
      alert("Updated")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllEmployee();
    })
  }
}
