import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../service/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  images: any[];

  constructor(private photoService: PhotoService) {}

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];
  ngOnInit() {
    this.photoService.getImages().then((images) => (this.images = images));
  }
}
