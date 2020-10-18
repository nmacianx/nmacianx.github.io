import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class SubmissionService {

	constructor(private http: HttpClient) { }

	sendForm(data) {
		let headers = {
			"X-REQMETHOD": "send-v1",
			"Content-Type": "application/json"
		};
		return this.http.post('https://send.pageclip.co/BWohoJeXyiqlkrXtqU6CE4h8D8dHO0CJ', data, {headers: headers});
	}

}
