import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-work',
	templateUrl: './work.component.html',
	styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

	items: any[] = [
		{
			company: "Rockstar Coders",
			location: "Remote",			
			title: "Associate Developer",
			start: "Oct 2020",
			end: null,
			description: "Currently working with React.",
			logo: "rockstar.png"
		}, 
		{
			company: "Scania",
			location: "Tucumán, Argentina",			
			title: "IT Intern",
			start: "Feb 2020",
			end: "Sep 2020",
			description: "As an IT intern, my role varied across multiple tasks. Most of the time I provided hardware, software and network support for the factory's personnel. I also worked on personal projects for the company.",
			logo: "scania.png"
		}, 
		{
			company: "Elemento",
			location: "Remote",			
			title: "Full Stack Web Developer",
			start: "May 2019",
			end: null,
			description: "I develop both frontend and backend for custom web projects using technologies such as Django, Javascript, HTML and CSS. I work for US clients through Southern Made company.",
			logo: "elemento.png"
		}, 
		{
			company: "Facultad de Ciencias Exactas y Tecnología",
			location: null,			
			title: "IT Intern",
			start: "Oct 2018",
			end: null,
			description: "I teach and help students learn about the design of algorithms and programming in C. I work for the courses 'Informatics' and 'Programming I' which are taught to first and second year students.",
			logo: "unt.png"
		},
	];
	constructor() { }

	ngOnInit(): void {
	}

}
