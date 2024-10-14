import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FachResponse} from "../model/fach-response";

@Injectable({
  providedIn: 'root'
})
export class FachService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  getFachList(): Observable<FachResponse[]> {
    return this.http.get<FachResponse[]>("http://localhost:8082/fach", this.httpOptions)
  }
}
