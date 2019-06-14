import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductoService } from '../services/producto-service';

const ADD_TITLE = 'Update de un prodotto';
const UPDATE_TITLE = 'Insertar un nuevo producto';

@Component({
  templateUrl: './producto-edit.component.html'
})
export class ProductoEditComponent implements OnInit {
  form: FormGroup;
  title: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private prodottoService: ProductoService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.title = id ? UPDATE_TITLE : ADD_TITLE;
    this.prodottoService.getById(id).subscribe(item => {
      this.form = this.fb.group(item);
    });
  }

  onSubmit() {
    this.prodottoService
      .save(this.form.value).subscribe(() => {}, err => alert(err));
    this.backToList();
  }

  backToList() {
    this.router.navigate(['..'], { relativeTo: this.route });
  }

}
