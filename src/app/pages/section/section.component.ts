import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SectionService } from '../../services/section.service';
import { Section } from '../../inreface/section';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name','action'];
  dataSource :any

  sectionForm!: FormGroup
  sectionList: Section[]=[]

  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private ss:SectionService){}


  ngOnInit(): void {
    this.formControl();
    this.getAll();
  }
  getAll() {

    this.ss.getAll().subscribe((response:any)=>{
      this.sectionList=response;

      this.dataSource=new MatTableDataSource<Section>(this.sectionList)
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
    this.sectionForm=new FormGroup({
      sectionName:new FormControl('',Validators.required)

    })
  }

  onSave(){
    const values=this.sectionForm.value;
    this.ss.add(values).subscribe(()=>{
      console.log("value added success");
      this.sectionForm.reset();
      this.getAll()
    })
  }

  onView(element:Section){
    
  }


}
