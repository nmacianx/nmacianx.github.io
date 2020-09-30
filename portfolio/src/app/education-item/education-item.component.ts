import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-education-item',
	templateUrl: './education-item.component.html',
	styleUrls: ['./education-item.component.scss']
})
export class EducationItemComponent implements OnInit {

	@Input()
	type: string;

	@Input()
	title: string;

	@Input()
	subtitle1?: string;

	@Input()
	subtitle1_url?: string;

	@Input()
	subtitle2?: string;

	@Input()
	subtitle2_url?: string;

	@Input()
	organization: string;

	@Input()
	start: string;

	@Input()
	end?: string;

	@Input()
	description?: string;

	@Input()
	logo: any;

	@Input()
	url?: string;

	@Input()
	courses?: object[];

	listing: boolean = false;

	constructor() { }

	ngOnInit(): void {
	}

	openCourses(){
		this.listing = !this.listing;
	}

}
