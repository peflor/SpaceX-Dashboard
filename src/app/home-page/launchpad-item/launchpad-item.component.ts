import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-launchpad-item',
  templateUrl: './launchpad-item.component.html',
  styleUrls: ['./launchpad-item.component.css']
})
export class LaunchpadItemComponent implements OnInit {

  @Input() launchpad:any;

  constructor() { }

  ngOnInit(): void {
  }

}
