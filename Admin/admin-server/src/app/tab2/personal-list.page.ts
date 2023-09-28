import { Component, OnInit } from '@angular/core';
import { PersonalService } from '../servicios/personal.service';
import { HttpRequest } from '@angular/common/http';
import { Personal } from '../clases/Personal';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-personal-list',
  templateUrl: 'personal-list.page.html',
  styleUrls: ['personal-list.page.scss']
})
export class PersonalListPage implements OnInit{

  personal:Personal[]=[];
  resultados = [...this.personal]

  constructor(private servicioPersonal:PersonalService, public loadingController: LoadingController) {}


  ngOnInit() {
    this.getPersonalAll();
  }


  async getPersonalAll() {
    console.log("Entrando :getPersonal");
    // Crea un Wait (Esperar)
    const loading = await this.loadingController.create({
      message: 'Cargando todo el Personal...'
    });
    // Muestra el Wait

    await loading.present();
    console.log("Entrando :");
    // Obtiene el Observable del servicio
    await this.servicioPersonal.getPersonalTodo()
      .subscribe({
        next: (res) => {
          console.log("Res:" + res);
  // Si funciona asigno el resultado al arreglo productos
          this.personal = res;
          console.log("thispersonal:",this.personal);
          loading.dismiss();
        }
        , complete: () => { }
        , error: (err) => {
  // Si da error, imprimo en consola.
          console.log("Err:" + err);
          loading.dismiss();
        }
      })
  }

}
