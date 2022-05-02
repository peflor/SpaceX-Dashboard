import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import * as L from 'leaflet';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  responseLand:any;

  responseLaunch:any;

  roadster:any;

  starlink: any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

//  ------------ MAP --------------
  const myfrugalmap = L.map('frugalmap').setView([28.485833, -100.544444], 4);

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'Frugal Map'
  }).addTo(myfrugalmap);
    
  const myIconLand = L.icon({
    iconUrl: 'https://i.ibb.co/GFcVZVS/location-dot-blue-sm.png'
  });
  const myIconLaunch = L.icon({
    iconUrl: 'https://i.ibb.co/DQbCgWQ/location-dot-red-sm.png'
  });

  // Landpads - API - Pour MAP
  this.http.get('https://api.spacexdata.com/v4/landpads').subscribe((data: any) => {
    data.forEach((landpads: any) => {
      L.marker([landpads.latitude, landpads.longitude], {icon: myIconLand}).bindPopup(landpads.name +" - "+ landpads.locality+"<br>"+ landpads.full_name).addTo(myfrugalmap).openPopup();
    });
  });

  // Launchpads - API - Pour MAP
  this.http.get('https://api.spacexdata.com/v4/launchpads').subscribe((data: any) => {
    data.forEach((launchpads: any) => {
      L.marker([launchpads.latitude, launchpads.longitude], {icon: myIconLaunch}).bindPopup(launchpads.name +" - "+ launchpads.locality +"<br>"+ launchpads.full_name).addTo(myfrugalmap).openPopup();
    });
  });

  // Appel API pour Infos Landpads
  this.http.get("https://api.spacexdata.com/v4/landpads").subscribe( data => { this.responseLand = data  }  )

  // Appel API pour Infos Launchpads
  this.http.get("https://api.spacexdata.com/v4/launchpads").subscribe( data => { this.responseLaunch = data  }  )

  // Appel API pour Infos Roadster
  this.http.get("https://api.spacexdata.com/v4/roadster").subscribe( data => { this.roadster = data  }  )

  // Appel API pour Infos Starlinks
  this.http.get("https://api.spacexdata.com/v4/starlink").subscribe( data => { this.starlink = data  }  )


  } 

 

}



