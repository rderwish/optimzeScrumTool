import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item.models';
import { HeaderService } from 'src/app/services/header-service/header.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {

  
  /**
   * Array of all menu items.
   */
  menuItems: MenuItem[] = [
    { name: "Daily", icon: "ion-md-stopwatch", path: "daily-scrum" },
    { name: "Planning-Poker", icon: "icon ion-ios-apps", path: "planning-poker" }
  ]

  /**
   * Inject services.
   * 
   * @param headerService to handle side menu and header functionality.
   */
  constructor(public headerService: HeaderService) { }

}
