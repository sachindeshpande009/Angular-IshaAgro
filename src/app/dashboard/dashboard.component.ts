import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService]
})

  export class DashboardComponent implements OnInit {
  id: string;
  statename1: string;
  statesDetail: any;
  title:any = "State";
  @ViewChild('somename') mySpan: ElementRef;
  constructor(
    private dashboardService : DashboardService ,
    private router:Router
  ) { }

  ngOnInit() {
    console.log(this.mySpan.nativeElement);
    this.ngOnChanges();
  }

  ngOnChanges() {

    this.dashboardService.getAllstates().subscribe(res => {
      console.log(res);
      this.statesDetail = res;
    }, err => {
      console.log(err);
    })

  }
  changeValue(value){
    if(value=="district"){
      this.title="District";
    }
    else{
      this.title="State";
    }
  }

  onSubmit(frm: any) {
    console.log(frm);
    if (frm._id) {
      
      //update
      this.dashboardService.updatestates(frm).subscribe(res => {
        console.log(res);
        alert("updated Sucessfully");
        
        this.ngOnChanges();
      }, err => {
        console.log(err);
      })
    }
    else {
      //insert
      this.dashboardService.onSubmit(frm).subscribe(res => {
        console.log(res);
        this.ngOnChanges();
      }, err => {

      });
    }

  }


  
  editRecord(id: string) {
    console.log(id);
  //  this.router.navigate(["/addstate"],queryP)
    this.dashboardService.getCurrentstates(id).subscribe(res => {
      console.log(res['result']);
      this.id = res['result']['_id'];
      this.statename1 = res['result']['stateName'];
      
    }, err => {
      console.log(err);
    })

  }

  deleteRecord(id: string) {
    console.log(id);
    if (confirm("Are You Sure Want to Delete this record?")) {
      this.dashboardService.deletestates(id).subscribe(res => {
        console.log(res);
        this.ngOnChanges();
        alert("Record Delete Sucessfully");
      }, err => {
        console.log(err)
      })
    }

  }
  }
