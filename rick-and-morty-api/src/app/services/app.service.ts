import {Injectable, inject} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environments';
import {CharactersDTO} from '../models/character.model';

@Injectable({
  providedIn: 'root',
  })

export class AppService {
  private http: HttpClient = inject(HttpClient);

  constructor() {
  }

  public getCharacters(page: number = 1):Observable<CharactersDTO>{
    return this.http.get<CharactersDTO>(`${environment.apiUrl}/character`);
  }

  public getEpisodes() {

  }

  public getLocations() {

  }
}
