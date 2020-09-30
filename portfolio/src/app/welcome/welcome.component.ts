import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { off } from 'process';

declare var particlesJS: any;

@Component({
	selector: 'app-welcome',
	templateUrl: './welcome.component.html',
	styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

	@Output() scroll: EventEmitter<{target: string, duration: number}> = new EventEmitter();

	constructor() { }

	ngOnInit(): void {
		particlesJS.load('particles-js', 'assets/particles.json');
	}

	customScroll(target: string, duration: number){
		this.scroll.emit({target: target, duration: duration});
	}

}
