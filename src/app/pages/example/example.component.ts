import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalData } from 'src/app/shared/models/modal-data';
import { ExampleService } from 'src/app/shared/services/example.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent implements OnInit {
  @ViewChild('modal') private modal: ModalComponent;
  public modalData;
  public listDropdown: any = [
    { name: 'João', id: 1 },
    { name: 'Guilherme', id: 2 },
    { name: 'Djian', id: 3 },
  ];
  public listProfissoes: any = [
    { nome: 'Programador', id: 1 },
    { nome: 'Vendedor', id: 2 },
    { nome: 'Astronalta', id: 3 },
  ];
  public people: {
    nome: '';
    profissao: '';
    dataNascimento: '';
  };
  constructor(
    private exampleService: ExampleService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  async openModal() {
    this.modalData = new ModalData();
    this.modalData.title = 'Modal Form';
    this.modalData.closeButtonLabel = 'Cancelar';
    this.modalData.confirmButtonLabel = 'Salvar';
    let result: any = await this.modal.open();
    if (result) {
      this.toastr.success('Salvo com sucesso');
    } else {
      this.toastr.error('Cancelado');
    }
  }

  onProfissaoChanged(e: any) {}
}
