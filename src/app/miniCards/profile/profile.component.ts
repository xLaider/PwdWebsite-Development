import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['../minicards-styles.scss']
})
export class ProfileComponent {
  @Input() user: User[];
}
