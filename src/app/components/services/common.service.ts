import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  constructor(
    private http: HttpClient
    ) {}
    
    list(){
      return this.http.get<any>(environment.URL + '/certification/movie/list?' + environment.api_key);
    }
  }
  