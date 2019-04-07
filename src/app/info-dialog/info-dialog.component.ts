import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.scss']
})
export class InfoDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, overlayContainer: OverlayContainer) {
    // overlayContainer.getContainerElement().classList.add(data.panelClass);
  }

  ngOnInit() {
    console.log(this.data);
  }

  close(): void {

  }

}
