import { Component, OnInit, Inject } from '@angular/core';
import { MediaService } from '../media.service';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';
import * as AOS from 'aos';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  more: boolean = true;
  showing: number;
  total: number;
  add: number;
  display: any[] = [];
  items: any[] = [
    {
      redacted: true,
      text: 'Interactive questionnaire experience made for a holiday marketing campaign.',
      preview: 'preview/portfolio22.png',
      tech: ['Django', 'React'],
      state: 'offline',
    },
    {
      redacted: true,
      text: "Interactive voice experience tailored for a product's special edition campaign.",
      preview: 'preview/portfolio21.png',
      tech: ['Django', 'Javascript'],
      state: 'offline',
    },
    {
      redacted: true,
      text: 'Scratch off giveaway for a marketing campaign.',
      preview: 'preview/portfolio20.png',
      tech: ['Django', 'Javascript'],
      state: 'offline',
    },
    {
      redacted: true,
      text: 'Internal event site for a company, including an embedded video with a live reactions count.',
      preview: 'preview/portfolio19.jpg',
      tech: ['Django', 'Javascript'],
      state: 'offline',
    },
    {
      redacted: true,
      text: 'Sweepstakes site.',
      preview: 'preview/portfolio18.jpg',
      tech: ['Django', 'Javascript'],
      state: 'offline',
    },
    {
      redacted: true,
      text: 'Video generation wizard for creating custom cards with background effects.',
      preview: 'preview/portfolio17.jpg',
      tech: ['Django', 'React'],
      state: 'offline',
    },
    {
      redacted: true,
      text: 'Interactive experience/game with two levels, built for advertising a new product.',
      preview: 'preview/portfolio16.jpg',
      tech: ['React'],
      state: 'offline',
    },
    {
      redacted: true,
      text: 'Internal event site for a company, including an embedded video with a live reactions count.',
      preview: 'preview/portfolio15.jpg',
      tech: ['Django', 'Javascript'],
      state: 'private',
    },
    {
      title: 'Edumovil',
      text: "School's communication and administration system.",
      preview: 'preview/portfolio00.jpg',
      tech: ['Django', 'Ionic', 'Angular'],
      state: 'online',
      url: 'https://usuarios.edumovil.com.ar/',
      more: {
        description: "School's communication and administration system.",
        img: ['Edumovil00.jpg', 'Edumovil01.jpg', 'Edumovil02.jpg', 'Edumovil03.jpg'],
      },
    },
    {
      redacted: true,
      text: "Valentine's Day postcard generation wizard site to send to your loved ones.",
      preview: 'preview/portfolio14.png',
      tech: ['Django', 'Javascript'],
      state: 'private',
    },
    {
      redacted: true,
      text: 'Recipe submission site to participate in sweepstakes including image framing wizard.',
      preview: 'preview/portfolio13.png',
      tech: ['Django', 'Javascript'],
      state: 'offline',
    },
    {
      redacted: true,
      text: "Form submission site to register employees' data for a company event.",
      preview: 'preview/portfolio12.jpg',
      tech: ['Django', 'Javascript'],
      state: 'private',
    },
    {
      redacted: true,
      text: 'Form submission site for food ordering.',
      preview: 'preview/portfolio05.jpg',
      tech: ['Django', 'Javascript'],
      state: 'private',
    },
    {
      redacted: true,
      text: 'Promotion site.',
      preview: 'preview/portfolio07.jpg',
      tech: ['Django', 'Javascript'],
      state: 'private',
    },
    {
      redacted: true,
      text: 'Sweepstakes site with image creation wizard.',
      preview: 'preview/portfolio06.jpg',
      tech: ['Django', 'Javascript'],
      state: 'private',
    },
    {
      redacted: true,
      text: "Website and postcards' design update for previously developed site.",
      preview: 'preview/portfolio02.jpg',
      tech: ['Django', 'Javascript'],
      state: 'private',
    },
    {
      redacted: true,
      text: 'Sweepstakes site.',
      preview: 'preview/portfolio03.jpg',
      tech: ['Django', 'Javascript'],
      state: 'offline',
    },
    {
      redacted: true,
      text: 'Sweepstakes site.',
      preview: 'preview/portfolio01.jpg',
      tech: ['Django', 'Javascript'],
      state: 'offline',
    },
    {
      redacted: true,
      text: "Holidays' postcards creation wizard site.",
      preview: 'preview/portfolio04.jpg',
      tech: ['Django', 'Javascript'],
      state: 'private',
    },
    {
      redacted: true,
      text: 'Demo site for a product to be built.',
      preview: 'preview/portfolio08.jpg',
      tech: ['Django', 'Javascript'],
      state: 'offline',
    },
    {
      redacted: true,
      text: 'Promotion site.',
      preview: 'preview/portfolio09.jpg',
      tech: ['Django', 'Javascript'],
      state: 'offline',
    },
    {
      redacted: true,
      text: 'Sweepstakes site.',
      preview: 'preview/portfolio10.jpg',
      tech: ['Django', 'Javascript'],
      state: 'offline',
    },
    {
      redacted: true,
      text: 'Sweepstakes site.',
      preview: 'preview/portfolio11.jpg',
      tech: ['Django', 'Javascript'],
      state: 'offline',
    },
  ];

  constructor(
    public media: MediaService,
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any,
  ) {}

  ngOnInit(): void {
    if (this.media.breakpointSm.matches) {
      this.showing = 3;
      this.add = 3;
    } else if (this.media.breakpointMd.matches) {
      this.showing = 4;
      this.add = 2;
    } else {
      this.showing = 6;
      this.add = 3;
    }
    this.display = this.items.slice(0, this.showing);
    this.total = this.items.length;
  }

  showMore(event) {
    if (this.showing + this.add >= this.total) {
      this.showing = this.total;
      this.more = false;
    } else {
      this.showing += this.add;
    }
    this.display = this.items.slice(0, this.showing);
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: event.srcElement,
      scrollOffset: 200,
      duration: 300,
    });
  }
}
