import { Component, Input, OnInit } from '@angular/core';
import { IMAGESIZE } from 'src/app/constants/imageSize';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movieitem',
  templateUrl: './movieitem.component.html',
  styleUrls: ['./movieitem.component.scss']
})
export class MovieitemComponent implements OnInit {
   @Input() itemData: Movie |null =null;
  
   imageSizes = IMAGESIZE;

   constructor() { }

  ngOnInit(): void {
  }

}
