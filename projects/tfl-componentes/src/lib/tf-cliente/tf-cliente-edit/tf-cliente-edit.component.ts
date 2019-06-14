import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { TfClienteService } from '../services/tf-cliente-service';

const ADD_TITLE = 'Insertar un nuevo cliente';
const UPDATE_TITLE = 'Update di un cliente';

@Component({
  templateUrl: './tf-cliente-edit.component.html'
})
export class TfClienteEditComponent implements OnInit {
  form: FormGroup;
  title: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private tfClienteService: TfClienteService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.title = id ? UPDATE_TITLE : ADD_TITLE;
    this.tfClienteService.getById(id).subscribe(item => {
      this.form = this.fb.group(item);
    });
  }

  onSubmit() {
    this.tfClienteService
      .save(this.form.value).subscribe(() => {}, err => alert(err));
    this.backToList();
  }

  backToList() {
    this.router.navigate(['..'], { relativeTo: this.route });
  }

}
