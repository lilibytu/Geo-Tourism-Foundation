import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  customOptions: OwlOptions = {
    // autoWidth: true,
    loop: true,
    // items: '10',
    // margin: 10,
    // slideBy: 'page',
    // merge: true,
    animateOut: 'fadeOut',
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoplaySpeed: 1000,
    dotsSpeed: 500,
    autoplayMouseleaveTimeout: 5000,
    dots: false,
    // dotsData: true,
    // mouseDrag: false,
    // touchDrag: false,
    // pullDrag: false,
    smartSpeed: 400,
    // fluidSpeed: 499,
    dragEndSpeed: 350,
    // dotsEach: 4,
    // center: true,
    // rewind: true,
    // rtl: true,
    // startPosition: 1,
    // navText: [ '<i class=fa-chevron-left>left</i>', '<i class=fa-chevron-right>right</i>' ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1368: {
        items: 1
      },
      1920: {
        items: 1
      }
    },
    // stagePadding: 40,
    nav: false
  };
  activeSlides: any;
  slideObject = [{
    id: 1,
    src: 'assets/slider/slider1.jpg',
    alt: 'assets/slider/slider1.jpg',
  }, {
    id: 2,
    src: 'assets/slider/slider9.jpg',
    alt: 'assets/slider/slider9.jpg',
  }, {
    id: 3,
    src: 'assets/slider/slider10.jpg',
    alt: 'assets/slider/slider10.jpg',
  }];

  constructor() { }

  ngOnInit(): void {
  }

  getPassedData(dataSlide: any): any {
    this.activeSlides = dataSlide;
  }
}
