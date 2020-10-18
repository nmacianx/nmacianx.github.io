import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
	imports: [
		CommonModule,
		MatButtonModule,
		MatIconModule,
		MatDialogModule,
		MatInputModule,
		MatTooltipModule,
		MatDividerModule,
		MatCardModule,
		MatToolbarModule,
	],
	declarations: [],
	exports: [
		MatButtonModule,
		MatIconModule,
		MatDialogModule,
		MatInputModule,
		MatTooltipModule,
		MatDividerModule,
		MatCardModule,
		MatToolbarModule,
	]	
})
export class MaterialModule { }
