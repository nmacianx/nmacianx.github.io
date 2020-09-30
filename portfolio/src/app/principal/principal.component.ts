import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';
import * as AOS from 'aos';

@Component({
	selector: 'app-principal',
	templateUrl: './principal.component.html',
	styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

	constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {
	}

	ngOnInit(): void {
		AOS.init({ startEvent: 'load', duration: 1500, once: true });
	}

	scrollTo(data) {
		this.pageScrollService.scroll({
			document: this.document,
			scrollTarget: data.target,
			duration: data.duration
		});
	}

}
