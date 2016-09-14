"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var TopperComponent = (function () {
    function TopperComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TopperComponent.prototype, "top", void 0);
    TopperComponent = __decorate([
        core_1.Component({
            selector: 'topper',
            template: "\n    <div >\n      <h2>Topper!</h2>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TopperComponent);
    return TopperComponent;
}());
exports.TopperComponent = TopperComponent;
//# sourceMappingURL=topper.component.js.map