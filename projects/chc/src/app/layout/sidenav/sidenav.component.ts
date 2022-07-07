import { BreakpointObserver, Breakpoints, MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

export interface NavItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  children?: NavItem[];
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  showFiller = false;
  menu: NavItem [] = [
    {
      displayName: 'Home',
      iconName: 'home',
      route: 'dashboard',
    },        
    {
      displayName: 'Menu 1',
      iconName: 'ballot',
      route: 'entradasGADE',
    },
    {
      displayName: 'Menu 3',
      iconName: 'description',          
      children: [
        {
          displayName: 'Menu 1 Child 1',
          iconName: 'how_to_reg',
          route: '/misexpedientes'
        },
        { 
          displayName: 'Menu 1 Child 2',
          iconName: 'waves',
          route: '/todos'
        },
        { 
          displayName: 'Menu 1 Child 2',
          iconName: 'waves',
          route: '/todos'
        },
        { 
          displayName: 'Menu 1 Child 2',
          iconName: 'waves',
          route: '/todos'
        }
      ]
    },
    {
      displayName: 'Menu 2',
      iconName: 'group',
      children: [
          {
            displayName: 'Menu 2 Child 1',
            iconName: 'man',
            route: '/busquedaperfiles'
          },
          {
            displayName: 'Menu 2 Child 2',
            iconName: 'man',
            route: '/busquedaperfiles'
          },
          {
            displayName: 'Menu 2 Child 3',
            iconName: 'man',
            route: '/busquedaperfiles'
          },
          {
            displayName: 'Menu 2 Child 4',
            iconName: 'man',
            route: '/busquedaperfiles'
          }
        ]
      },
     
    {
      displayName: 'Setting',
      iconName: 'settings',
      children: [
          {
            displayName: 'theam color',
            iconName: 'man',
            route: '/busquedaperfiles'
          },
          {
            displayName: 'Menu 2 Child 2',
            iconName: 'man',
            route: '/busquedaperfiles'
          },
          {
            displayName: 'Menu 2 Child 3',
            iconName: 'man',
            route: '/busquedaperfiles'
          },
          {
            displayName: 'Menu 2 Child 4',
            iconName: 'man',
            route: '/busquedaperfiles'
          }
        ]
      },
  ];
mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

constructor(private breakpointObserver: BreakpointObserver,
  changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  @ViewChild(MatExpansionPanel, {static: true}) matExpansionPanelElement: MatExpansionPanel;



  ngOnInit(): void {
  }

}
