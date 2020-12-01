import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'fm-cadastro-filmes',
  templateUrl: './cadastro-filmes.component.html',
  styleUrls: ['./cadastro-filmes.component.scss']
})
export class CadastroFilmesComponent implements OnInit {

  options: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.options = this.fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

}
