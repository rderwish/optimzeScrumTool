import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  /** Flag if the sidemenu is full size or collapsed */
  private _sideMenuCollapsed: boolean = false;

  /**
   * Indicates if sidemenu is collapsed or not.
   */
  get isMenuCollapsed() {
    return this._sideMenuCollapsed;
  }

  /**
   * Open and close the sidemenu.
   * @param _sideMenuCollapsed: boolean
   */
  toggleSideMenu() {
    this._sideMenuCollapsed = !this._sideMenuCollapsed;
  }
}
