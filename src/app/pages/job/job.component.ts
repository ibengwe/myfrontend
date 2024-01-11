import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JobService } from '../../services/job.service';
import { Job } from '../../inreface/job';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent implements OnInit{
  jobForm!:FormGroup

  displayedColumns: string[] = ['id', 'name','action'];
  dataSource :any
  jobtList:Job[]=[]

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private js:JobService){}

  ngOnInit(): void {
    this.formControl();
this.getAll();

  }
  getAll() {
    this.js.getAll().subscribe((response:any)=>{
      this.jobtList=response

      this.dataSource=new MatTableDataSource<Job>(this.jobtList)
      this.dataSource.paginator=this.paginator
      this.dataSource.sort=this.sort

    })
  }
  formControl() {
    this.jobForm=new FormGroup({
      jobName:new FormControl('',Validators.required)
    })
  }

  onSave(){
    const values=this.jobForm.value;
    this.js.add(values).subscribe(()=>{
      console.log("Job added success")
      this.jobForm.reset()
      this.getAll()
    })
  }

  onView(element:Job){

  }

}
