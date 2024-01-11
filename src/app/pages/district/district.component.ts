import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DistrictService } from '../../services/district.service';
import { District } from '../../inreface/district';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrl: './district.component.css'
})
export class DistrictComponent implements OnInit{

  displayedColumns: string[] = ['id', 'name','action'];
  dataSource :any
  districtList:District[]=[]

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  districtForm!:FormGroup

  constructor(private ds:DistrictService){}

  ngOnInit(): void {
    this.formControl();

    this.getAll();
  }
  getAll() {
    this.ds.getAll().subscribe((response:any)=>{
      this.districtList=response;
      this.dataSource=new MatTableDataSource<District>(this.districtList)
      this.dataSource.paginator=this.paginator
      this.dataSource.sort=this.sort

    })

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  formControl() {
    this.districtForm=new FormGroup({
      districtName:new FormControl('',Validators.required)
    })
  }

  onSave(){
    const values=this.districtForm.value;
    this.ds.add(values).subscribe(()=>{
      console.log("Data inserted successfully")
      this.districtForm.reset();
    })
  }

  onView(element:District){

  }

}
