import { Component, OnInit, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';
import { MediaService } from '../media.service';

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
	description?: string[];

	@Input()
	logo: any;

	@Input()
	url?: string;

	@Input()
	courses?: object[];

	listing: boolean = false;

	constructor(public media: MediaService, private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) { }

	ngOnInit(): void {
	}

	openCourses(event){
		this.listing = !this.listing;
		if (this.listing){
			this.pageScrollService.scroll({
				document: this.document,
				scrollTarget: event.srcElement,
				scrollOffset: this.media.breakpointSm.matches? 300 : 150,
				duration: 500
			});
		}
	}

}
