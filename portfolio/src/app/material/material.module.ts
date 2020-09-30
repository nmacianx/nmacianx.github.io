import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
	imports: [
		CommonModule,
		MatButtonModule,
		MatIconModule,
		MatDialogModule,
		MatInputModule,
		MatTooltipModule,
	],
	declarations: [],
	exports: [
		MatButtonModule,
		MatIconModule,
		MatDialogModule,
		MatInputModule,
		MatTooltipModule,
	]
})
export class MaterialModule { }
