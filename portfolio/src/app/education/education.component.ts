import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-education',
	templateUrl: './education.component.html',
	styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

	items: any[] = [
		{
			type: 'degree',
			title: 'Computer Engineering student',
			subtitle1: 'Facultad de Ciencias Exactas y Tecnología',
			subtitle1_url: 'https://www.facet.unt.edu.ar/',
			subtitle2: 'Universidad Nacional de Tucumán',
			subtitle2_url: 'http://www.unt.edu.ar/',
			organization: 'Universidad Nacional de Tucumán',
			start: '2016',
			end: 'Oct 2020 (expected)',
			description: 'I am developing a facial verification system on a Raspberry Pi 4 as my graduation project.',
			logo: '/work/unt.png'
		}
	];
	specializations: any[] = [
		{
			type: 'specialization',
			title: 'Applied Data Science with Python Specialization',
			organization: 'by Univerity of Michigan',
			start: 'Aug 2020',
			logo: {
				logo_sp: '/education/umich.png',
				logo_sp_alt: 'University of Michigan',
				background: '#00264b',
				logo_cr: '/education/coursera.png',
				logo_cr_alt: 'Coursera',
			},
			url: 'https://www.coursera.org/account/accomplishments/specialization/5K7E3B4W9UQT',
			courses: [
				{
					title: 'Applied Social Network Analysis in Python',
					organization: 'by Univerity of Michigan',
					start: 'Aug 2020',
					url: 'https://www.coursera.org/account/accomplishments/verify/E5N27UZ7PFNY'
				},
				{
					title: 'Applied Text Mining in Python',
					organization: 'by Univerity of Michigan',
					start: 'May 2020',
					url: 'https://www.coursera.org/account/accomplishments/verify/C5ASJ293YDNK'
				},
				{
					title: 'Applied Machine Learning in Python',
					organization: 'by Univerity of Michigan',
					start: 'Mar 2020',
					url: 'https://www.coursera.org/account/accomplishments/verify/QJBH3LP9RVBF'
				},
				{
					title: 'Applied Plotting, Charting & Data Representation in Python',
					organization: 'by Univerity of Michigan',
					start: 'Oct 2019',
					url: 'https://www.coursera.org/account/accomplishments/verify/VJMVSAGBKF2J'
				},
				{
					title: 'Introduction to Data Science in Python',
					organization: 'by Univerity of Michigan',
					start: 'Sep 2019',
					url: 'https://www.coursera.org/account/accomplishments/verify/HR5BZSWJHUNJ'
				}
			]
		},
		{
			type: 'specialization',
			title: 'Deep Learning Specialization',
			organization: 'by deeplearning.ai',
			start: 'Jan 2020',
			logo: {
				logo_sp: '/education/deeplearning.png',
				logo_sp_alt: 'deeplearning.ai',
				logo_cr: '/education/coursera.png',
				logo_cr_alt: 'Coursera',
			},
			url: 'https://www.coursera.org/account/accomplishments/specialization/FYBUEFSNUSWE',
			courses: [
				{
					title: 'Sequence Models',
					organization: 'by deeplearning.ai',
					start: 'Jan 2020',
					url: 'https://www.coursera.org/account/accomplishments/verify/S4BG28UL9BQ4'
				},
				{
					title: 'Convolutional Neural Networks',
					organization: 'by deeplearning.ai',
					start: 'Nov 2019',
					url: 'https://www.coursera.org/account/accomplishments/verify/GX2QK2PAYL7S'
				},
				{
					title: 'Structuring Machine Learning Projects',
					organization: 'by deeplearning.ai',
					start: 'Oct 2019',
					url: 'https://www.coursera.org/account/accomplishments/verify/ALT5AP679RQA'
				},
				{
					title: 'Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization',
					organization: 'by deeplearning.ai',
					start: 'Sep 2019',
					url: 'https://www.coursera.org/account/accomplishments/verify/7XUJKNQ6VFUK'
				},
				{
					title: 'Neural Networks and Deep Learning',
					organization: 'by deeplearning.ai',
					start: 'Aug 2019',
					url: 'https://www.coursera.org/account/accomplishments/verify/EFR5P595JHU4'
				},
			]
		},
	];
	courses: any[] = [];

	constructor() { }

	ngOnInit(): void {
	}

}
