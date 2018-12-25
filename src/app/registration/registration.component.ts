import { Component, OnInit, OnChanges } from '@angular/core';
import { RegistrationService } from './registration.service';
import { NgControlStatus } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [RegistrationService]
})
export class RegistrationComponent implements OnInit {

  id: string;
  empuser: string;
  emppass: string;
  emppass1: string;
  email: string;
  empDetail: any;
  constructor(
    private registerService: RegistrationService
  ) { }

  ngOnInit() {
    this.ngOnChanges();
  }

  ngOnChanges() {

    this.registerService.getAllemployee().subscribe(res => {
      console.log(res);
      this.empDetail = res;
    }, err => {
      console.log(err);
    })

  }

  onSubmit(frm: any) {
    console.log(frm);
    if (frm._id) {
      //update
      this.registerService.updateEmployee(frm).subscribe(res => {
        console.log(res);
        alert("updated Sucessfully");
        this.ngOnChanges();
      }, err => {
        console.log(err);
      })
    }
    else {
      //insert
      this.registerService.onRegister(frm).subscribe(res => {
        console.log(res);
        this.ngOnChanges();
      }, err => {

      });
    }

  }

  editRecord(id: string) {
    console.log(id);
    this.registerService.getCurrentEmployee(id).subscribe(res => {
      console.log(res['result']);
      this.id = res['result']['_id'];
      this.email = res['result']['empEmail'];
      this.empuser = res['result']['empUsername'];
      this.emppass = res['result']['empPassword'];

    }, err => {
      console.log(err);
    })

  }

  deleteRecord(id: string) {
    console.log(id);
    if (confirm("Are You Sure Want to Delete this record?")) {
      this.registerService.deleteEmployee(id).subscribe(res => {
        console.log(res);
        this.ngOnChanges();
        alert("Record Delete Sucessfully");
      }, err => {
        console.log(err)
      })
    }

  }


}
