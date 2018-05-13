import { Component } from '@angular/core';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the TabsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})

export class TabsPage {

  tab1Root = HomePage;


  constructor() {

  }
}
