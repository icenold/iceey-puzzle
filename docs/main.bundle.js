webpackJsonp([1,4],{

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(45)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 137:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n  <img id=\"puzzleImage\" [src]=\"imgUrl\" [style.display]=\"'none'\" />\r\n  <div id=\"puzzleBoard\" [style.display]=\"'block'\" [style.position]=\"'relative'\" [style.width]=\"basicDimension+'px'\" [style.height]=\"basicDimension+'px'\" [style.background-color]=\"'black'\" >\r\n    <button *ngFor=\"let piece of puzzlePieces;let i = index;\"\r\n            [style.position]=\"'absolute'\"\r\n            [style.cursor]=\"'pointer'\" \r\n            [style.background-color]=\"'white'\" \r\n            [style.position.display]=\"'inline-block'\"\r\n            [style.background-position-x]=\"-getRelativePosition(i,piece.correct_x,piece.correct_y).x+'px'\"\r\n            [style.background-position-y]=\"-getRelativePosition(i,piece.correct_x,piece.correct_y).y+'px'\"\r\n            [style.left] = \"getRelativePosition(i,piece.current_x,piece.current_y).x+'px'\"\r\n            [style.top] = \"getRelativePosition(i,piece.current_x,piece.current_y).y+'px'\"\r\n            [style.width]=\"basicDimension/puzzleLevel+'px'\" \r\n            [style.height]=\"basicDimension/puzzleLevel+'px'\"\r\n            [style.background-image]=\"i==puzzlePieces.length-1?  'none':('url('+imgUrl+')')\"\r\n            [style.background-size]=\"basicDimension\"\r\n            [hidden]=\"piece.isBlankPiece\"\r\n            (click)=\"switchWithBlank(piece)\"  >\r\n      {{i+1}}\r\n    </button>\r\n  </div>\r\n  <!--<button (click)=\"shufflePieces()\" >Shuffle</button>\r\n  <button (click)=\"arrangePieces()\" >Arrange</button>-->"

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(71);


/***/ }),

/***/ 70:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 70;


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(82);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__puzzle_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__index_component__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__index_component__["a" /* IndexComponent */],
            __WEBPACK_IMPORTED_MODULE_4__puzzle_component__["a" /* PuzzleComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__index_component__["a" /* IndexComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IndexComponent = (function () {
    function IndexComponent(elem) {
        this.elem = elem;
        this.settings = {
            imgUrl: "/iceey-puzzle/assets/elephant.jpg",
            dimemsion: 255,
            level: 3
        };
        this.imageSources = [
            "/iceey-puzzle/assets/elephant.jpg",
            "/iceey-puzzle/assets/tiger.jpg",
            "/iceey-puzzle/assets/dolphin.jpg"
        ];
    }
    return IndexComponent;
}());
IndexComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-index',
        template: "\n\n<iceey-puzzle \n    #puzzle\n    [imgUrl]=\"settings.imgUrl\"\n    [basicDimension]=\"settings.dimension\"\n    [puzzleLevel]=\"settings.level\" >\n</iceey-puzzle>\n\n"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object])
], IndexComponent);

var _a;
//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PuzzlePiece; });
var PuzzlePiece = (function () {
    function PuzzlePiece() {
    }
    return PuzzlePiece;
}());

//# sourceMappingURL=puzzle-piece.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__puzzle_piece__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PuzzleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PuzzleComponent = (function () {
    function PuzzleComponent(elem) {
        this.elem = elem;
        this.puzzlePieces = [];
    }
    PuzzleComponent.prototype.ngOnInit = function () {
        //test
        this.basicDimension = 225;
        this.imgUrl = "/iceey-puzzle/assets/download.jpg";
        this.puzzleLevel = 3;
        //test
        this.assignPieces();
        this.shufflePieces();
        console.log('pieces', this.puzzlePieces);
        console.log('puzzleBoard', this.getBoardPossition());
    };
    PuzzleComponent.prototype.assignPieces = function () {
        for (var y = 0; y < this.puzzleLevel; y++) {
            for (var x = 0; x < this.puzzleLevel; x++) {
                var p = new __WEBPACK_IMPORTED_MODULE_1__puzzle_piece__["a" /* PuzzlePiece */]();
                p.correct_x = x;
                p.correct_y = y;
                p.current_x = x;
                p.current_y = y;
                this.puzzlePieces.push(p);
            }
        }
        this.puzzlePieces[(this.puzzleLevel * this.puzzleLevel) - 1].isBlankPiece = true;
        this.jsonCorrectPositions = JSON.stringify(this.puzzlePieces);
    };
    PuzzleComponent.prototype.switchWithBlank = function (clickedPiece) {
        var blankPiece = this.puzzlePieces[this.puzzlePieces.length - 1];
        var sameX = clickedPiece.current_x == blankPiece.current_x && (clickedPiece.current_y + 1 == blankPiece.current_y || clickedPiece.current_y - 1 == blankPiece.current_y);
        var sameY = clickedPiece.current_y == blankPiece.current_y && (clickedPiece.current_x + 1 == blankPiece.current_x || clickedPiece.current_x - 1 == blankPiece.current_x);
        if (sameX || sameY) {
            var blankX = blankPiece.current_x;
            var blankY = blankPiece.current_y;
            blankPiece.current_x = clickedPiece.current_x;
            blankPiece.current_y = clickedPiece.current_y;
            clickedPiece.current_x = blankX;
            clickedPiece.current_y = blankY;
            var isComplete = this.jsonCorrectPositions == JSON.stringify(this.puzzlePieces);
            this.onPuzzleMove.emit(isComplete);
        }
    };
    PuzzleComponent.prototype.getRelativePosition = function (index, _x, _y) {
        var x = _x * (this.basicDimension / this.puzzleLevel);
        var y = _y * (this.basicDimension / this.puzzleLevel);
        return {
            x: x,
            y: y
        };
    };
    PuzzleComponent.prototype.arrangePieces = function () {
        this.puzzlePieces = JSON.parse(this.jsonCorrectPositions);
    };
    PuzzleComponent.prototype.shufflePieces = function () {
        var pieceSetter = JSON.parse(JSON.stringify(this.puzzlePieces));
        //console.log(pieceSetter);
        for (var ctr = 0; ctr < this.puzzlePieces.length; ctr++) {
            var randomIndex = this.randomIntFromInterval(0, pieceSetter.length - 1);
            var removedPiece = pieceSetter.splice(randomIndex, 1)[0];
            this.puzzlePieces[ctr].current_x = removedPiece.correct_x;
            this.puzzlePieces[ctr].current_y = removedPiece.correct_y;
        }
    };
    PuzzleComponent.prototype.getBoardPossition = function () {
        return {
            x: this.elem.nativeElement.querySelector('#puzzleBoard').offsetLeft,
            y: this.elem.nativeElement.querySelector('#puzzleBoard').offsetTop
        };
    };
    PuzzleComponent.prototype.randomIntFromInterval = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    return PuzzleComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], PuzzleComponent.prototype, "onPuzzleMove", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], PuzzleComponent.prototype, "imgUrl", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], PuzzleComponent.prototype, "puzzleLevel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], PuzzleComponent.prototype, "basicDimension", void 0);
PuzzleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'iceey-puzzle',
        template: __webpack_require__(137),
        styles: [__webpack_require__(136)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _b || Object])
], PuzzleComponent);

var _a, _b;
//# sourceMappingURL=puzzle.component.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[162]);
//# sourceMappingURL=main.bundle.js.map