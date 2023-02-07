import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  
  constructor(
    private commonService: CommonService)
    { }
    
    ngOnInit(){
      
    }
    
  }
  