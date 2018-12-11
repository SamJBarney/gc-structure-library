import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gc-footer',
  templateUrl: './gc-footer.component.html',
  styleUrls: ['./gc-footer.component.scss']
})
export class GCFooterComponent implements OnInit {
  @Input()
  teamId: string

  @Input()
  selectedItem: number

  @Input()
  location: string

  @Output()
  onRoute: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  onMenuItemClicked(target_location: string, path: string = '') : void {
    // Default settings
    let data = {
      type: 'internal',
      path: path
    };

    // If the target location is another app, build an external url to pass back
    if (this.location !== target_location) {
      data.type = 'external';

      // Build a different url depending on where app needs to go
      switch(target_location) {
        case 'bbl':
          data.path = `https://bbl.gamechanger.studio/#/%{teamId}/${path}`;
        case 'team-site':
          data.path = `https://${this.teamId}.gamechanger.studio/#/`;
      }
    }

    // Send the path info off to any registered handler
    this.onRoute.emit(data);
  }

}
