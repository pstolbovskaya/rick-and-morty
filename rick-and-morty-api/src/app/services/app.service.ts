import {Injectable, inject} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environments';
import {CharactersDTO} from '../models/character.model';
import {EpisodesDTO} from '../models/episode.model';
import {LocationsDTO} from '../models/location.model';

@Injectable({
  providedIn: 'root',
  })

export class AppService {
  private http: HttpClient = inject(HttpClient);

  constructor() {
  }

  public getCharacters(page: number = 1):Observable<CharactersDTO>{
    return this.http.get<CharactersDTO>(`${environment.apiUrl}/character?page=${page}`);
  }

  public getEpisodes(page: number = 1): Observable<EpisodesDTO> {
    return this.http.get<EpisodesDTO>(`${environment.apiUrl}/episode?page=${page}`);
  }

  public getLocations(page: number = 1):Observable<LocationsDTO> {
    return this.http.get<LocationsDTO>(`${environment.apiUrl}/location?page=${page}`);
  }
}
