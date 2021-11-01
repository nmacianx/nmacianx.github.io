import { Component, OnInit, Input } from '@angular/core';
import { DetailsModalComponent } from '../details-modal/details-modal.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss'],
})
export class PortfolioItemComponent implements OnInit {
  @Input()
  title: string;

  @Input()
  text: string;

  @Input()
  preview: string;

  @Input()
  tech: string[];

  @Input()
  state: string;

  @Input()
  url: string;

  @Input()
  more: any;

  @Input()
  redacted: boolean;

  colors: any;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.colors = {
      Django: 'primary',
      Ionic: 'warning',
      Javascript: 'warning',
      Angular: 'success',
      HTML: 'success',
      CSS: 'success',
      React: 'danger',
    };
  }

  openModal() {
    const popup = this.dialog.open(DetailsModalComponent, {
      disableClose: true,
      autoFocus: false,
      minHeight: 520,
      maxHeight: 600,
      width: '700px',
      maxWidth: '80%',
      panelClass: 'portfolioDialog',
      data: {
        title: this.title,
        tech: this.tech,
        state: this.state,
        url: this.url,
        more: this.more,
      },
    });
  }
}
