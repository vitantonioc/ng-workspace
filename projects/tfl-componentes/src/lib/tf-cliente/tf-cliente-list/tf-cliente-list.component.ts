import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ColumnField } from '@tfl/toolbox';

import { TfCliente } from '../interfaces/tf-cliente';
import { TfClienteService } from '../services/tf-cliente-service';

@Component({
  templateUrl: './tf-cliente-list.component.html'
})
export class TfClienteListComponent implements OnInit {
  fields: ColumnField[] = [
    {name: 'id', title: 'Id'},
    {name: 'ragioneSociale', title: 'Razon social'},
    {name: 'contatto', title: 'Contacto'},
    {name: 'citta', title: 'Ciudad'}
  ];
  eaClienteList: Observable<TfCliente[]>;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private tfClienteService: TfClienteService) { }

  ngOnInit() {
    this.loadEaClienteList();
  }

  loadEaClienteList() {
    this.eaClienteList = this.tfClienteService.get();
  }

  addEaCliente() {
    this.editEaCliente(0);
  }

  editEaCliente(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }

  deleteEaCliente(id: number) {
    this.tfClienteService.delete(id).subscribe(() => {}, err => alert(err));
    this.loadEaClienteList();
  }

}
