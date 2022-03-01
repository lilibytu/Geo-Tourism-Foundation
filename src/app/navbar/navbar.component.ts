import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // @ViewChild('home') private homeRef: ElementRef;
  // @ViewChild('skills') private skillsRef: ElementRef;
  // // @ViewChild('about') public aboutRef: ElementRef;
  // @ViewChild('contacts') private contactsRef: ElementRef;
  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }
  // tslint:disable-next-line:typedef
  scroll(id: string) {
    const el = document.getElementById(id);
    // @ts-ignore
    el.scrollIntoView();
  }
}