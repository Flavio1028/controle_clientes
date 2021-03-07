import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-conf-modal',
  templateUrl: './conf-modal.component.html',
  styleUrls: ['./conf-modal.component.scss']
})
export class ConfModalComponent implements OnInit {

  @Input() title = 'Confirmação';
  @Input() msg: string;
  confirmResult: Subject<boolean>;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
    this.confirmResult = new Subject();
    this.bsModalRef.setClass('modal-dialog-centered');
  }

  private confirmAndClose(value: boolean): void {
    this.confirmResult.next(value);
    this.bsModalRef.hide();
  }

  onConfirm(): void {
    this.confirmAndClose(true);
  }

  onClose(): void {
    this.confirmAndClose(false);
  }

}
