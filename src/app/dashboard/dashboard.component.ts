import { Component, OnInit } from '@angular/core';
import { BackendService } from '../shared/backend.service';
import { StoreService } from '../shared/store.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private backendService: BackendService, private storeService: StoreService) { }

  async ngOnInit() {
    
    await this.backendService.getSensoren();
    await this.backendService.getSensorenDaten();
  }

}
