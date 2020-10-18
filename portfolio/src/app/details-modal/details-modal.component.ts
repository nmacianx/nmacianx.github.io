import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss']
})
export class DetailsModalComponent implements OnInit {

  public title: string;
  public state: string;
  public url: string;
  public tech: string[];
  public description: string;
  public img: string[];


  constructor(
    public dialogRef: MatDialogRef<DetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) { 
      this.title = data.title;
      this.state = data.state;
      this.url = data.url;
      this.tech = data.tech;
      this.description = data.more.description;
      this.img = data.more.img;
    }

  ngOnInit(): void {
  }

  close(){
		this.dialogRef.close("closing");
	}

}
