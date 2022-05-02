import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  
  // response:any;
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    // this.http.get("https://api.spacexdata.com/v4/landpads").subscribe( data => { this.response = data  }  )

    const myfrugalmap = L.map('frugalmap').setView([28.485833, -100.544444], 5);
 
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Frugal Map'
    }).addTo(myfrugalmap);

    
  const myIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
  });
  // L.marker([28.485833, -80.544444], {icon: myIcon}).bindPopup('Je suis un Frugal Marqueur').addTo(myfrugalmap).openPopup();

  this.http.get('https://api.spacexdata.com/v4/landpads').subscribe((data: any) => {
    data.forEach((landpads: any) => {
      L.marker([landpads.latitude, landpads.longitude], {icon: myIcon}).bindPopup(landpads.name +" "+"<br>"+ landpads.full_name).addTo(myfrugalmap).openPopup();
    });
  });
  
  }
}
