import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ConfModalComponent } from './conf-modal/conf-modal.component';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    private toastr: ToastrService,
    private service: BsModalService
  ) { }

  /**
   * Exibe um toast de ERRO
   */
  public toastError(message: string, title: string): void {
    this.toastr.error(message, title, {
      timeOut: 5000,
      positionClass: 'toast-bottom-full-width'
    });
  }

  /**
   * Exibe um toast de ALERTA
   */
  public toastWarning(message: string, title: string): void {
    this.toastr.warning(message, title, {
      timeOut: 5000,
      positionClass: 'toast-bottom-full-width'
    });
  }

  /**
   * Exibe um toast de INFO
   */
  public toastInfo(message: string, title: string): void {
    this.toastr.info(message, title, {
      timeOut: 5000,
      positionClass: 'toast-bottom-full-width'
    });
  }

  /**
   * Exibe um toast de Sucesso
   */
  public toastSuccess(message: string, title: string): void {
    this.toastr.success(message, title, {
      timeOut: 5000,
      positionClass: 'toast-bottom-full-width'
    });
  }

  modalConfirmacao(msg: string, title?: string) {
    const bsModalRef: BsModalRef = this.service.show(ConfModalComponent, {
      backdrop: true,
      ignoreBackdropClick: true
    });
    bsModalRef.content.msg = msg;
    // Altera o tituo se necessario
    if (title) {
      bsModalRef.content.title = title;
    }
    return (bsModalRef.content as ConfModalComponent).confirmResult;
  }

}
