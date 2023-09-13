import { Component } from '@angular/core';

@Component({
  selector: 'app-form-iniciar',
  templateUrl: './form-iniciar.page.html',
  styleUrls: ['./form-iniciar.page.scss'],
})
export class FormIniciarPage {

  checkbox1: boolean = false;
  checkbox2: boolean = false;
  checkbox3: boolean = false;

  // Verificar si los 3 checkbox están agarrados

  get allCheckboxesChecked(): boolean {
    return this.checkbox1 && this.checkbox2 && this.checkbox3;
  }

  // Al hacer click se activará esta funcion xdxd

  submitButtonClicked() {
    // Cuando se hace click 
    if (this.allCheckboxesChecked) {
      // Mensajito
      console.log('Holi un saludito, estan marcados los 3 checkbox.');
    } else {
      // Mensajito 2
      console.log('Un checkbox no está marcado papu');
    }
  }
}
