import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.page.html',
  styleUrls: ['./iniciar-sesion.page.scss'],
})
export class IniciarSesionPage implements OnInit {

  password: string = '';
  showPassword: boolean = false;
  rut: string = '';
  isWarningToastVisible: boolean = false;

  constructor(
    public toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() { }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  async iniciarSesion() {
    if (!this.rut || !this.password) {
      if (!this.isWarningToastVisible) {
        this.isWarningToastVisible = true;
        const toast = await this.toastController.create({
          message: 'Por favor, rellene todos los campos.',
          duration: 2000,
          position: 'bottom',
          color: 'danger',
        });
        toast.present();

        toast.onDidDismiss().then(() => {
          this.isWarningToastVisible = false;
        });
      }
    } else {

      const successToast = await this.toastController.create({
        message: 'Sesión iniciada con éxito',
        duration: 2000,
        position: 'bottom',
        color: 'success',
      });
      successToast.present();

      this.router.navigate(['/menu-principal']);
    }
  }

  formatRut(event: string) {
    // Elimina todos los caracteres no numéricos
    const cleanedRut = event.replace(/[^\d]/g, '');
  
    // Divide el RUT en los primeros 8 dígitos y el DV
    const rutDigits = cleanedRut.slice(0, -1); // Los primeros 8 dígitos
    const rutDV = cleanedRut.slice(-1); // El último dígito verificador
  
    // Si se ingresaron más de 8 dígitos, se trunca el RUT
    if (rutDigits.length > 8) {
      this.rut = `${rutDigits.slice(0, 8)}-${rutDV}`;
    } else {
      // Formatea el RUT con puntos y guión, si corresponde
      const formattedRut = rutDigits.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      this.rut = `${formattedRut}-${rutDV}`;
    }
  }
  
  
}
