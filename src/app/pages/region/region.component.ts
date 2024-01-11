import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegionService } from '../../services/region.service';
import { District } from '../../inreface/district';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Region } from '../../inreface/region';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrl: './region.component.css'
})
export class RegionComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name','action'];
  dataSource :any
  regionList:Region[]=[]

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
 
  regionForm!:FormGroup

  constructor(private rs:RegionService){}


  ngOnInit(): void {
    this.formControl();

    this.getAll()
  }
  getAll() {

    this.rs.getAll().subscribe((response:any)=>{
      console.log("Value are=>",response)
      this.regionList=response

      this.dataSource=new MatTableDataSource<Region>(this.regionList)
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
    this.regionForm=new FormGroup({
      regionName:new FormControl('',Validators.required)
    })

  }
  onSave(){
    const values=this.regionForm.value;
    this.rs.add(values).subscribe((response:any)=>{
    console.log("Data Success inserted")
    this.getAll()
    this.regionForm.reset();
      

    })

    
  }

  onView(element:Region){}

}
