import { Component, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

import { ValidarCamposService } from '../validar-campos.service';

@Component({
  selector: 'fm-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent {

  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  @Input() titulo: string;
  @Input() minimo = 0;
  @Input() maximo = 10;
  @Input() passo = 1;

  constructor(public validacao: ValidarCamposService) { }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}
