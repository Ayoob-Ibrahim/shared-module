import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CRUD';
  constructor(private dataService: DataService) {
    this.getData();
  }

  getData() {
    this.dataService.getDataJson().subscribe(data => {
      console.log(data, "data response")
    })
  }
}
