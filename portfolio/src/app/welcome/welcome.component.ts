import { Component, OnInit } from '@angular/core';

declare var particlesJS: any;

@Component({
	selector: 'app-welcome',
	templateUrl: './welcome.component.html',
	styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
		particlesJS.load('particles-js', 'assets/particles.json');
	}

	customScroll(target: string, offset: number){

	}

}
