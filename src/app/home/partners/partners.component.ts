import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  partners = [{
    id: 1,
    src: 'assets/partners/tawa.png',
    alt: 'assets/partners/tawa.png',
    link: 'https://www.tawa.go.tz/',
  }, {
    id: 2,
    src: 'assets/partners/ngorongoro.png',
    alt: 'assets/partners/ngorongoro.png',
    link: 'https://www.tawa.go.tz/',
  }, {
    id: 3,
    src: 'assets/partners/tanapa.png',
    alt: 'assets/partners/tanapa.png',
    link: 'https://www.tanzaniaparks.go.tz/',
  }, {
    id: 4,
    src: 'assets/partners/Tawiri.png',
    alt: 'assets/partners/Tawiri.png',
    link: 'https://www.tawiri.or.tz/',
  }, {
    id: 5,
    src: 'assets/partners/ttb.png',
    alt: 'assets/partners/ttb.png',
    link: 'https://www.tanzaniatourism.go.tz/en',
  },
  {
    id: 6,
    src: 'assets/partners/tfs.png',
    alt: 'assets/partners/tfs.png',
    link: 'https://www.tfs.go.tz/',
  },
  {
    id: 7,
    src: 'assets/partners/maliasili.jpg',
    alt: 'assets/partners/maliasili.jpg',
    link: 'https://www.tanzaniatourism.go.tz/en',
  },
   {
    id: 8,
    src: 'assets/partners/awf.jpg',
    alt: 'assets/partners/awf.jpg',
    link: 'https://www.awf.org/',
  }];

  customOptions: OwlOptions = {
    // autoWidth: true,
    loop: true,
    // items: '10',
    // margin: 10,
    // slideBy: 'page',
    // merge: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
    dotsSpeed: 500,
    autoplayMouseleaveTimeout: 5000,
    // dots: false,
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
        items: 2
      },
      600: {
        items: 3
      },
      768: {
        items: 4
      },
      1024: {
        items: 6
      },
      1368: {
        items: 6
      },
      1920: {
        items: 6
      }
    },
    // stagePadding: 40,
    nav: true
  };
  activeSlides: any;

  constructor() {
  }

  ngOnInit(): any {

  }

  getPassedData(dataSlide: any): any {
    this.activeSlides = dataSlide;
    // console.log(this.activeSlides);
  }

  openPartnersWebsite(websiteUrl: string | undefined): void {
    // @ts-ignore
    window.open(websiteUrl, '_blank').focus();
  }

}
