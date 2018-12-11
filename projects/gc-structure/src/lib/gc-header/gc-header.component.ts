import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gc-header',
  templateUrl: './gc-header.component.html',
  styleUrls: ['./gc-header.component.css']
})
export class GCHeaderComponent implements OnInit {
  @Input()
  teamId: string

  constructor() { }

  ngOnInit() {
  }

}
