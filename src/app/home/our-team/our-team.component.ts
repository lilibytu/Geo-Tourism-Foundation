import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {

  members = [{
    image: 'assets/team/default_person.jpeg',
    thumbImage: 'assets/team/smafreightCEO.jpeg',
    title: 'Antony Mukyanuzi',
    content: 'CEO & Co-Founder',
    email: 'mukyanuzi@gmail.com'
  }, {
    image: 'assets/team/default_person.jpeg',
    thumbImage: 'assets/team/default_person.jpeg',
    title: 'SMA FREIGHT',
    content: 'Executive Marketing Director',
    email: ' smafreight@gmail.com'
  },
    {
      image: 'assets/team/default_person.jpeg',
      thumbImage: 'assets/team/default_person.jpeg',
      title: 'SMA FREIGHT',
      content: 'Marketing Manager',
      email: ' smafreight@gmail.com'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
