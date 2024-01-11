import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../inreface/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private  url=String("http://localhost:8080/api/v1/job")

  constructor(private http:HttpClient) { }

  add(body:Job){
    return this.http.post(this.url,body)
  }

  getAll():Observable<Job>{
    return this.http.get<Job>(this.url);
  }
}
