import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';


@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.css']
})
export class DisclaimerComponent {
  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(ModalComponent);
}

/*let modal = document.getElementById("modal");
let btn = document.getElementById("modal-btn");
btn.onclick = function() {
  modalTitle-disclaimer.style.display = "block";
  modal-btn.disabled = true;
  }*/
}

