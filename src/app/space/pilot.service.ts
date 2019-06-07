import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PilotAttrs} from "./pilot/pilot-attrs";
import {Pilot} from "./pilot";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PilotService {

  constructor(private http: HttpClient) {
  }

  getPilots(): Observable<Pilot[]> {
    return this.http.get<PilotAttrs[]>('/api/pilots', {observe: 'response'}).pipe(
      map((data) => {
        return data.body.map((attrs) => new Pilot(attrs));
      })
    );
  }
}
