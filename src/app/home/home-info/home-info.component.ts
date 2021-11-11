import { HomeService } from 'src/app/_services/_homeService/home.service';
import { Home } from 'src/app/models/home/home';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['./home-info.component.scss']
})
export class HomeInfoComponent {
  home: Home;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    homeService: HomeService
  ) {
    homeService.GetHomeById(data.homeId).subscribe(result => {
      this.home = result;
    });
  }
}
