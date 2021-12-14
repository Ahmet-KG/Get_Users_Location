import {Component, OnInit} from '@angular/core';
import {MapsService} from "./maps.service";

declare const L: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  lat: string = '';
  lng: string = '';
  inputValue: string = '';
  country: string = '';
  region: string = '';
  city: string = '';
  country_code: string = '';
  callingCode: string = '';
  currency: string = '';
  org: string = '';

  ip_country: string = '';
  ip_region: string = '';
  ip_city: string = '';
  ip_country_code: string = '';
  ip_callingCode: string = '';
  ip_currency: string = '';
  ip_org: string = '';


  isCalled: boolean = false;
  location!: any;

  constructor(private map: MapsService) {}

  ngOnInit() {
    this.map.getLocation().subscribe(data => {
      console.log(data);
      this.lat = data.latitude;
      this.lng = data.longitude;
      this.country = data.country_name;
      this.region = data.region;
      this.city = data.city;
      this.country_code = data.country_code;
      this.callingCode = data.country_calling_code;
      this.currency = data.currency_name;
      this.org = data.org
      const latLong = [data.latitude, data.longitude]

      let map = L.map('map').setView(latLong, 13);

      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2FyZG9yMTIzIiwiYSI6ImNreDR0ZXg3dTBob2sycm81cHAxZjMyaGUifQ.i1jmpFbE14qQ5CCcSirnhQ', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token'
      }).addTo(map);

      let marker = L.marker(latLong).addTo(map);

      marker.bindPopup('<b>You are here</b>').openPopup();
    })
  }
  getLocation() {
    this.map.getLocationByIp(this.inputValue).subscribe(data => {
      console.log(data);
      this.ip_country = data.country_name;
      this.ip_region = data.region;
      this.ip_city = data.city;
      this.ip_country_code = data.country_code;
      this.ip_callingCode = data.country_calling_code;
      this.ip_currency = data.currency_name;
      this.ip_org = data.org

      this.isCalled = true
    })
  }
}
