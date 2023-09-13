import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage {

  constructor(private modalController: ModalController, private router: Router) { }

  async navigateToPage() {
    await this.modalController.dismiss(); // Cierra el modal
    this.router.navigate(['/folder/inbox']); // Navega a la nueva página
  }
}
