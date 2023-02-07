import { Component } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  
  listCertification: any[] = [];
  
  constructor(
    private commonService: CommonService
    ) { }
    
    ngOnInit(){
    }
    
  }
  