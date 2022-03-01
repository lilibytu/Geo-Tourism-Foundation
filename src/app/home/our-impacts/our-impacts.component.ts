import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-impacts',
  templateUrl: './our-impacts.component.html',
  styleUrls: ['./our-impacts.component.scss']
})
export class OurImpactsComponent implements OnInit {
  partners = [{
    id: 1,
    src: 'assets/partners/FATTA.png',
    alt: 'assets/partners/FATTA.png',
    link: 'https://www.tawa.go.tz/',
  }, {
    id: 2,
    src: 'assets/partners/fiata.png',
    alt: 'assets/partners/fiata.png',
    link: 'https://www.tawa.go.tz/',
  }, {
    id: 3,
    src: 'assets/partners/Tasac.png',
    alt: 'assets/partners/Tasac.png',
    link: 'https://www.tanzaniaparks.go.tz/',
  }, {
    id: 4,
    src: 'assets/partners/trac.jpeg',
    alt: 'assets/partners/trac.jpeg',
    link: 'https://www.tripadvisor.com/',
  }, {
    id: 5,
    src: 'assets/partners/Acacia.jpg',
    alt: 'assets/partners/Acacia.jpg',
    link: 'https://www.tanzaniatourism.go.tz/en',
  }, {
    id: 6,
    src: 'assets/partners/Statoil.jpg',
    alt: 'assets/partners/Statoil.jpg',
    link: 'https://www.tanzaniatourism.go.tz/en',
  }, {
    id: 7,
    src: 'assets/partners/Anglogold.jpg',
    alt: 'assets/partners/Anglogold.jpg',
    link: 'https://www.tanzaniatourism.go.tz/en',
  }, {
    id: 8,
    src: 'assets/partners/glca.jpeg',
    alt: 'assets/partners/glca.jpeg',
    link: 'https://www.safaribookings.com/',
  }];

  
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
