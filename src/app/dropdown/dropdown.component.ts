import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  
  selected : any = "----"; 

  responseLaunch :any;

  resultLaunchTest: any;

  rockets :any;

  rocketsVue : any;
  
  constructor(private http:HttpClient) {   }   
  

  ngOnInit(): void {
      // Appel API pour Infos Landpads
    this.http.get("https://api.spacexdata.com/v4/launchpads").subscribe( data => { this.responseLaunch = data  }  )

    this.http.get("https://api.spacexdata.com/v4/rockets").subscribe( data => { this.rockets = data  }  )

  
  }
  update(e : any){
    switch(this.selected = e.target.value){
      case (this.selected  = this.responseLaunch[0].name) :
        this.resultLaunchTest = this.responseLaunch[0].rockets;
        break;
      case (this.selected  = this.responseLaunch[1].name):
        this.resultLaunchTest = this.responseLaunch[1].rockets;
        break;
      case (this.selected  = this.responseLaunch[2].name):
        this.resultLaunchTest = this.responseLaunch[2].rockets;
        break;
      case (this.selected  = this.responseLaunch[3].name):
        this.resultLaunchTest = this.responseLaunch[3].rockets;
        break;
      case (this.selected  = this.responseLaunch[4].name):
        this.resultLaunchTest = this.responseLaunch[4].rockets;
        break;
      case (this.selected  = this.responseLaunch[5].name):
        this.resultLaunchTest = this.responseLaunch[5].rockets;
        break;
      
    };
  }

  
}
