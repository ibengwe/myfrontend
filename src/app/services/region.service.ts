import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Region } from '../inreface/region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private  url=String("http://localhost:8080/api/v1/region")

  constructor(private http:HttpClient) { }

  add(body:Region){
    return this.http.post(this.url,body)
  }

  getAll():Observable<Region>{
    return this.http.get<Region>(this.url);
  }


}
