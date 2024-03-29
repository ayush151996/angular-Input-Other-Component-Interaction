import { Component } from '@angular/core';

import { HEROES } from './hero';

@Component({
  selector: 'app-hero-parent',
  template: `
    <h2>{{master}} controls </h2>
    <app-hero-child 
      [master]="master">
    </app-hero-child>
  `
})
export class HeroParentComponent {
  
  master = 'Master';
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/