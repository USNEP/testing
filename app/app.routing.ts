import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HeroDetailComponent }  from './hero-detail.component';
import { TopperComponent }  from './topper.component';
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/detail',
    pathMatch: 'full'
  },
   {
    path: 'detail',
    component: HeroDetailComponent
  }, {
    path: 'topper',
    component: TopperComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/