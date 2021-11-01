import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  items: any[] = [
    {
      company: 'D-ID',
      location: 'Tel Aviv, Israel',
      title: 'Deep Learning Developer (Intern)',
      start: 'Nov 2021',
      description:
        'Working as an intern at a company is part of the final phase of the training for the ITC Data Science Program.',
      logo: 'did.png',
    },
    {
      company: 'Tinkun',
      location: 'Remote',
      start: 'May 2019',
      description: `Small Software Development company with a team of five freelancer devs. We've developed over 25+ projects for US clients.`,
      logo: 'tinkun.jpg',
      jobPositions: [
        {
          title: 'Lead Full Stack Web Developer',
          start: 'Apr 2020',
          description:
            "Once the Lead Developer left, I started to lead the projects. \nI design the architecture for the sites using Django for the backend. Also, I've added React to our stack to develop more interactive websites, and websockets for live experiences using Django Channels. \nI'm in charge of splitting the work among the devs, reviewing the code and supervising the development process.",
        },
        {
          title: 'Full Stack Web Developer',
          start: 'May 2019',
          end: 'Apr 2020',
          description:
            'I developed the frontend side for simple sites and started with basic Django for the backend. I worked under supervision of a Lead Developer.',
        },
      ],
    },
    {
      company: 'Rockstar Coders',
      location: 'Remote',
      title: 'Front End Software Engineer',
      start: 'Oct 2020',
      end: 'May 2021',
      description:
        "I was a Frontend React Developer for the US based software factory. \nI participated in many projects and I had the opportunity to design and implement a small project from scratch, based on the client requirements. Also, I was a member of an agile team working for a California based startup building fundraising tools. \nI managed to make 10x faster the model's recalculation for a tool by rewriting the recursive logic myself. The original logic worked fine when the tool was designed for 50 features but didn't scale well to 250+.",
      logo: 'rockstar.png',
    },
    {
      company: 'Scania',
      location: 'Tucumán, Argentina',
      title: 'IT Intern',
      start: 'Feb 2020',
      end: 'Sep 2020',
      description:
        "As an IT intern, my role varied across multiple tasks. Most of the time I provided hardware, software and network support for the factory's personnel. I also worked on personal projects for the company.",
      logo: 'scania.png',
    },
    {
      company: 'Facultad de Ciencias Exactas y Tecnología',
      location: null,
      title: 'IT Intern',
      start: 'Oct 2018',
      end: 'May 2021',
      description:
        "I taught and helped students learn about the design of algorithms and programming in C. I worked for the courses 'Informatics' and 'Programming I' which are taught to first and second year students.",
      logo: 'unt.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
