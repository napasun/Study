var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';
var MyClickDirective = (function () {
    function MyClickDirective(el) {
        var _this = this;
        this.toggle = false;
        this.clicks = new EventEmitter();
        el.nativeElement.addEventListener('click', function (event) {
            _this.toggle = !_this.toggle;
            _this.clicks.emit(_this.toggle ? '선택했습니다.' : '해제했습니다.');
        });
    }
    return MyClickDirective;
}());
__decorate([
    Output('myClick'),
    __metadata("design:type", Object)
], MyClickDirective.prototype, "clicks", void 0);
MyClickDirective = __decorate([
    Directive({ selector: '[myClick]' }),
    __metadata("design:paramtypes", [ElementRef])
], MyClickDirective);
export { MyClickDirective };
//# sourceMappingURL=E:/git/Angular/template/src/app/oneway-statement/my-click.directive.js.map