import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Fach} from "../model/fach";
import {Schule} from "../model/schule";

@Injectable({
  providedIn: 'root'
})
export class SchuleService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  getAllSchulen(): Observable<Schule[]> {
    return this.http.get<Schule[]>("http://localhost:8082/schule", this.httpOptions)
  }
}
