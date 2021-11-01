import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-work-item',
  templateUrl: './work-item.component.html',
  styleUrls: ['./work-item.component.scss'],
})
export class WorkItemComponent implements OnInit {
  @Input()
  company: string;

  @Input()
  location: string;

  @Input()
  title: string;

  @Input()
  start: string;

  @Input()
  end: string;

  @Input()
  description: string;

  @Input()
  jobPositions?: any[];

  @Input()
  logo: string;

  constructor() {}

  ngOnInit(): void {}
}
