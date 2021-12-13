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

  location!: any;

  constructor(private map: MapsService) {}

  ngOnInit() {
    this.map.getLocation().subscribe(data => {
      console.log(data);
      this.lat = data.latitude;
      this.lng = data.longitude;
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
    })
  }
}
