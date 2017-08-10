import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class DevsService {

  constructor(private http: Http) { }

  getDevs(lang: string) {
    return this.http.get('/api/devs/'+lang)
        .map(res => res.json());
  }
}
