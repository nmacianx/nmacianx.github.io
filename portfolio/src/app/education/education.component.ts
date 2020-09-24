import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-education',
	templateUrl: './education.component.html',
	styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

	items: any[] = [];
	specialization: any[] = [];
	courses: any[] = [];

	constructor() { }

	ngOnInit(): void {
	}

}
