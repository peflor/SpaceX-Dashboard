import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-landpad-item',
  templateUrl: './landpad-item.component.html',
  styleUrls: ['./landpad-item.component.css']
})
export class LandpadItemComponent implements OnInit {

  @Input() landpad:any;

  constructor() { }

  ngOnInit(): void {
  }

}
