import { Component, OnInit } from '@angular/core';
import { Personal } from 'src/app/clases/Personal';
import { PersonalService } from 'src/app/servicios/personal.service';
import { HttpRequest } from '@angular/common/http';
import { ActivatedRoute,  Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-personal-leer',
  templateUrl: './personal-leer.page.html',
  styleUrls: ['./personal-leer.page.scss'],
})
export class PersonalLeerPage implements OnInit {

  personal :Personal={ rut: "18.934.756-2",
  nombres: "Jane",
  apellidos: "Smith",
  sucursal: "La Pintana 1984",
  cargo:{id:6,nombre_cargo:"Mánager"}};

  constructor(
    private servicioPersonal:PersonalService, 
    private route:ActivatedRoute,
    private loadingController:LoadingController,
    private router:Router
    ) { }

  ngOnInit() {
  }
  async getProduct() {
 
    const loading = await this.loadingController.create({ message: 'Cargando empleado seleccionado...' });

    await loading.present();
    await this.servicioPersonal.getPersonal(this.route.snapshot.paramMap.get('id')!)
      .subscribe({
        next: (res) => {
          this.personal = res;
          loading.dismiss();
        }
        , complete: () => { }
        , error: (err) => {
          console.log("Error en leer el producto: ", err);
          loading.dismiss(); 
        }
      })
  }
}
