import { Component, OnInit } from '@angular/core';
import { Slides } from './mock-slide'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  images = Slides; // import mock data slides for now

  constructor() { }

  ngOnInit() {

  }

}
