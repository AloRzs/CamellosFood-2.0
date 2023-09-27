import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.page.html',
  styleUrls: ['./mi-perfil.page.scss'],
})
export class MiPerfilPage implements OnInit {
  cambiarContrasena = false;
  loadingInProgress = false;
  alertQueue: any[] = []; // Una cola para administrar alertas

  constructor(
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private router: Router
  ) {}

  ngOnInit() {}

  toggleCambiarContrasena() {
    this.cambiarContrasena = !this.cambiarContrasena;
  }

  public alertButtons = [
    {
      text: 'Confirmar',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
        if (!this.loadingInProgress) {
          this.loadingInProgress = true;
          this.showLoading();
        }
      },
    },
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
        this.processNextAlert(); // Procesar la siguiente alerta en la cola
      },
    },
    
  ];

  setResult(ev: any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Realizando cambios...',
      duration: 2000,
    });

    await loading.present();

    setTimeout(() => {
      loading.dismiss().then(() => {
        this.presentAlert();
      });
    }, 2000);
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Aviso',
      subHeader: 'Su contraseña ha sido cambiada',
      message: 'Serás redirigido al menú principal',
      buttons: [
        {
          text: 'OK', // Agregamos un botón "OK" 
          handler: () => {
            console.log('OK button clicked');
            this.router.navigate(['/menu-principal']);
            this.processNextAlert(); // Procesar la siguiente alerta en la cola
          },
        },
      ],
      backdropDismiss: false, // No se puede cerrar haciendo clic fuera de la alerta
    });

    await alert.present();
  }

  processNextAlert() {
    this.loadingInProgress = false;
    const nextAlert = this.alertQueue.shift();
    if (nextAlert) {
      nextAlert();
    }
  }

  // Agregar una alerta a la cola
  addToAlertQueue(alertCallback: () => void) {
    this.alertQueue.push(alertCallback);
  }
}
