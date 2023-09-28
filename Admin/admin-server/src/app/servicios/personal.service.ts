import { Injectable } from '@angular/core';
import { HttpClient , HttpResponse} from '@angular/common/http';
import { Observable  } from 'rxjs';
import { Personal } from '../clases/Personal';


@Injectable({
  providedIn: 'root'
})

export class PersonalService {
  API_URL='http://localhost:3000/personal';
  constructor(private apiRest: HttpClient) { }


  getPersonalTodo():Observable<Personal[]>{
    //lol
    console.log("Método para conseguir todo el personal");
    return this.apiRest.get<Personal[]>(this.API_URL);
  }
  getPersonal(id:string):Observable<Personal>{
    //lol
    console.log("Método para conseguir todo el personal");
    return this.apiRest.get<Personal>(this.API_URL+ "/" + id);
  }

}
