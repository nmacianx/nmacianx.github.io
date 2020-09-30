import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';

@NgModule({
	imports: [
		CommonModule,
		MatButtonModule,
		MatIconModule,
		MatDialogModule,
		MatInputModule,
	],
	declarations: [],
	exports: [
		MatButtonModule,
		MatIconModule,
		MatDialogModule,
		MatInputModule,
	]
})
export class MaterialModule { }
