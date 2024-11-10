import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunityServiceService {
  private apiUrl = 'https://dspace-laboratorio.glaux.es/server/api/core/communities'; // URL de la API

  constructor(private http: HttpClient) {}

  getCommunities(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
