import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { District } from '../inreface/district';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {

  private  url=String("http://localhost:8080/api/v1/district")

  constructor(private http:HttpClient) { }

  add(body:District){
    return this.http.post(this.url,body)
  }

  getAll():Observable<District>{
    return this.http.get<District>(this.url)
  }
}
