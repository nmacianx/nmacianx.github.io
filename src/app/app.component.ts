import { Component } from '@angular/core';
import { Router, Event as RouterEvent, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	public opacity: number = 1;
	public display: string = "flex";

	constructor(private router: Router)
	{
		this.router.events.subscribe((e: RouterEvent) => {
			this.navigationInterceptor(e);
		})		
	}

	navigationInterceptor(event: RouterEvent): void {
		// if (event instanceof NavigationStart) {
		// 	//pass
		// }
		if (event instanceof NavigationEnd) {
			this.hideLoading();
		}
	}

	hideLoading(){
		const fadeEffect = setInterval(() => {
			if (this.opacity > 0) {
				this.opacity -= 0.1;
			} else {
				clearInterval(fadeEffect);
				this.display = 'none';
			}
		}, 100);
	}
}
