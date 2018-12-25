import { Component, OnInit } from '@angular/core';
import { AddstateService } from './addstate.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardService } from '../dashboard/dashboard.service';

@Component({
  selector: 'app-addstate',
  templateUrl: './addstate.component.html',
  styleUrls: ['./addstate.component.css'],
  providers: [AddstateService,DashboardService]
})


  export class AddstateComponent implements OnInit {
  id: string;
  statename1: string;
  statesDetail: any;
  constructor(
    private addstateService : AddstateService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private dashboardService : DashboardService ,
  ) { }

  ngOnInit() {
    
    const queryParams = this.activatedRoute.snapshot.queryParams;
    if(queryParams._id){
      this.dashboardService.getCurrentstates(queryParams._id).subscribe(res => {
        console.log(res['result']);
        this.id = res['result']['_id'];
        this.statename1 = res['result']['stateName'];
        
      }, err => {
        console.log(err);
      })
    }
    console.log(queryParams);
    
    this.ngOnChanges();
  }

  ngOnChanges() {

    this.addstateService.getAllstates().subscribe(res => {
      console.log(res);
      this.statesDetail = res;
    }, err => {
      console.log(err);
    })

  }

  onSubmit(frm: any) {
    console.log(frm);
    if (frm._id) {
      
      //update
      this.addstateService.updatestates(frm).subscribe(res => {
        console.log(res);
        alert("updated Sucessfully");
        this.router.navigate(['/dashboard']);
      }, err => {
        console.log(err);
      })
    }
    else {
      //insert
      this.addstateService.onSubmit(frm).subscribe(res => {
        console.log(res);
        this.router.navigate(['/dashboard']);
      }, err => {

      });
    }

  }


  
  editRecord(id: string) {
    console.log(id);
    this.addstateService.getCurrentstates(id).subscribe(res => {
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
      this.addstateService.deletestates(id).subscribe(res => {
        console.log(res);
        this.ngOnChanges();
        alert("Record Delete Sucessfully");
      }, err => {
        console.log(err)
      })
    }

  }
  }
