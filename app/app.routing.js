"use strict";
var router_1 = require('@angular/router');
var hero_detail_component_1 = require('./hero-detail.component');
var topper_component_1 = require('./topper.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/detail',
        pathMatch: 'full'
    },
    {
        path: 'detail',
        component: hero_detail_component_1.HeroDetailComponent
    }, {
        path: 'topper',
        component: topper_component_1.TopperComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.routing.js.map