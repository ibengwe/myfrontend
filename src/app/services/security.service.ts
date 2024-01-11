import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private  url=String("http://localhost:8080/api/v1/auth")
  private baseUrl=String("http://localhost:8080/api/v1/logout")

  constructor(private http:HttpClient) { }

  add(body:any){
    return this.http.post(this.url+"/register",body)
  }

  login(body:any){
    return this.http.post(this.url+"/authenticate",body)
  }
  logout(){
    const token = localStorage.getItem('token');

    // // If a token exists, send a request to invalidate it on the server
    // if (token) {
    //   // You may need to pass the token to the server, adjust the API accordingly
    //   this.http.post(`${this.baseUrl}`, { token }).subscribe(
    //     () => {
    //       console.log('Token invalidated on the server');
    //     },
    //     error => {
    //       console.error('Error while invalidating token on the server', error);
    //     }
    //   );
    // }

    // // Clear local storage or perform any other necessary logout actions
    // localStorage.clear();
    

    localStorage.clear();
  }
}
