import { Component, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

import { ValidarCamposService } from '../validar-campos.service';

@Component({
  selector: 'fm-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss']
})
export class InputDateComponent {

  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  @Input() titulo: string;

  constructor(public validacao: ValidarCamposService) { }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}
