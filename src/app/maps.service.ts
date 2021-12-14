import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface Location {
  latitude: string;
  longitude: string;
  country_name: string;
  region: string;
  city: string;
  country_code: string;
  country_calling_code: string;
  currency_name: string;
  org: string;
}

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) { }

  getLocation() {
    return this.http.get<Location>('https://ipapi.co/json/')
  }

  getLocationByIp(ip: string) {
    return this.http.get<Location>(`https://ipapi.co/${ip}/json/`)
  }
}
