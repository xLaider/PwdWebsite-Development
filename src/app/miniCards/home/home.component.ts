import { Component, Input, OnInit } from '@angular/core';
import { Home } from 'src/app/models/home/home';
import { HomeService } from 'src/app/_services/_homeService/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../minicards-styles.scss']
})
export class HomeComponent implements OnInit {
  @Input() homeId: number;
  home: Home;
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    if (this.homeId) {
      this.homeService.GetHomeById(this.homeId).subscribe((data) => {
        this.home = data;
      });
    }
  }

}
