import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.css']
})
export class RocketsComponent implements OnInit {

  response: any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get("https://api.spacexdata.com/v4/rockets").subscribe( data => { this.response = data  }  )

  }

}
