import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubmissionService } from '../submission.service';
@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


	contactForm: FormGroup;
	success: boolean = false;
	error: boolean = null;
	loading: boolean = false;

	constructor(private submission: SubmissionService) { }

	ngOnInit(): void {
		this.contactForm = new FormGroup({
			email: new FormControl('', [Validators.required, Validators.email]),
			subject: new FormControl('', [Validators.required, Validators.maxLength(100)]),
			message: new FormControl('',[Validators.required, Validators.maxLength(500)]),
		});
	}

	validate(){ 
		this.contactForm.markAllAsTouched();
		return this.contactForm.valid;
	}

	submit(){
		if (this.validate()){
			this.loading = true;
			const data = this.contactForm.getRawValue();
			this.submission.sendForm(data).subscribe(() => {
				this.error = false;
				this.loading = false;
				this.success = true;
				this.contactForm.disable();
			}, (error) => {
				this.error = true;
				this.loading = false;
			});
		}
	}

}
