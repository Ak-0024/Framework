import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
 


  constructor( private matDrawer: MatDrawer) { }
  setDrawer(drawer: MatDrawer) {
    this.matDrawer = drawer;
}

toggle() {
     this.matDrawer.toggle();
}
}
