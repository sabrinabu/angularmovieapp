import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-itemsbanner',
  templateUrl: './itemsbanner.component.html',
  styleUrls: ['./itemsbanner.component.scss']
})
export class ItemsbannerComponent {
  @Input() items: Movie[] = [];
  @Input() title: string = '';
}
