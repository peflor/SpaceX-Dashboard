import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rocket-item',
  templateUrl: './rocket-item.component.html',
  styleUrls: ['./rocket-item.component.css']
})
export class RocketItemComponent implements OnInit {

  @Input() rocket:any;

  constructor() { }

  ngOnInit(): void {
  }

}
