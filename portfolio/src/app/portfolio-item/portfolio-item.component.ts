import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-portfolio-item',
	templateUrl: './portfolio-item.component.html',
	styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {

	@Input()
	title: string;

	@Input()
	text: string;

	@Input()
	preview: string;

	@Input()
	tech: string[];

	@Input()
	state: string;

	@Input()
	url: string;

	@Input()
	more: any;

	colors: any;

	constructor() { }

	ngOnInit(): void {
		this.colors = {
			Django: "primary",
			Ionic: "warning",
			Javascript: "warning",
			Angular: "success",
			HTML: "success",
			CSS: "success",
		};
	}

	openModal(){

	}
}
