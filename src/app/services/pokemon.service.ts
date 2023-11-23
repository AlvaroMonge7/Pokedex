import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  private apiUrl='https://pokeapi.co/api/v2/pokemon';

  getAllPokemon():Observable<any>{
    return this.http.get(this.apiUrl)
  }

  getPokemon(name:string):Observable<any>{
    return this.http.get(this.apiUrl+'/'+name)
  }
}
