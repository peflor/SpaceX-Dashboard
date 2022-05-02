import { NgModule , LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { LandpadsComponent } from './landpads/landpads.component';
import { LaunchpadsComponent } from './launchpads/launchpads.component';
import { RocketsComponent } from './rockets/rockets.component';
import { RocketItemComponent } from './rockets/rocket-item/rocket-item.component';
import { LandpadItemComponent } from './home-page/landpad-item/landpad-item.component';
import { LaunchpadItemComponent } from './home-page/launchpad-item/launchpad-item.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,    
    HeaderComponent,  
    HomePageComponent,
    FourOhFourComponent,
    LandpadsComponent,
    LaunchpadsComponent,
    RocketsComponent,
    RocketItemComponent,
    LandpadItemComponent,
    LaunchpadItemComponent,
    DropdownComponent,
    FooterComponent,    
        
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }],
  bootstrap: [AppComponent],  
  

})
export class AppModule { }
