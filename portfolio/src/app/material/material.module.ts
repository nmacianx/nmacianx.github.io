import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
	imports: [
		CommonModule,
		MatButtonModule,
		MatIconModule,
		MatDialogModule,
	],
	declarations: [],
	exports: [
		MatButtonModule,
		MatIconModule,
		MatDialogModule,
	]
})
export class MaterialModule { }