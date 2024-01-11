import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Section } from '../inreface/section';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  private  url=String("http://localhost:8080/api/v1/section")

  constructor(private http:HttpClient) { }

  add(body:Section){
    return this.http.post(this.url,body)
  }

  getAll():Observable<Section>{
    return this.http.get<Section>(this.url);
  }
}
