import { Injectable } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';


@Injectable({
	providedIn: 'root'
})
export class MediaService {

	private _breakpointSm: MediaQueryList;
	private _breakpointMd: MediaQueryList;
	private _breakpointLg: MediaQueryList;

	constructor(private media: MediaMatcher) {
		this._breakpointSm = media.matchMedia('(max-width: 767px)');
		this._breakpointMd = media.matchMedia('(max-width: 991px)');
		this._breakpointLg = media.matchMedia('(min-width: 992px)');
	}

	get breakpointSm() {
		return this._breakpointSm;
	}

	get breakpointMd() {
		return this._breakpointMd;
	}

	get breakpointLg() {
		return this._breakpointLg;
	}
}
