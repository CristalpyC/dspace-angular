import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CollectionsUnemtxService {
  private apiUrl = `${environment.rest.baseUrl}/core/collections`;

  constructor(private http: HttpClient) {}

  getCollections(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}

