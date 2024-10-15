import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Fach} from "../model/fach";

@Injectable({
  providedIn: 'root'
})
export class FachService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  getFachList(): Observable<Fach[]> {
    return this.http.get<Fach[]>("http://localhost:8082/fach", this.httpOptions)
  }

  createFach(fach: Fach): Observable<void> {
    return this.http.put<void>("http://localhost:8082/fach", fach, this.httpOptions)
  }
}
