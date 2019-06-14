import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ColumnField } from '@tfl/toolbox';

import { Producto } from '../interfaces/producto';
import { ProductoService } from '../services/producto-service';

@Component({
  templateUrl: './producto-list.component.html'
})
export class ProductoListComponent implements OnInit {
  fields: ColumnField[] = [
     {name: 'id', title: 'Id'},
     {name: 'descrizione', title: 'Descripción'},
     {name: 'tipologia', title: 'Tipo producto'},
     {name: 'prezzo', title: 'Precio'}

  ];
  prodottoList: Observable<Producto[]>;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private prodottoService: ProductoService) { }

  ngOnInit() {
    this.loadProdottoList();
  }

  loadProdottoList() {
    this.prodottoList = this.prodottoService.get();
  }

  addProdotto() {
    this.editProdotto(0);
  }

  editProdotto(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }

  deleteProdotto(id: number) {
    this.prodottoService.delete(id).subscribe(() => {}, err => alert(err));
    this.loadProdottoList();
  }

}
