webpackJsonp([1,4],{

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(73);


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });

var IndexComponent = (function () {
    function IndexComponent(elem) {
        this.elem = elem;
        this.console = console;
        this.imageSources = window.location.href.includes("github") ?
            [
                "/iceey-puzzle/assets/elephant.jpg",
                "/iceey-puzzle/assets/tiger.jpg",
                "/iceey-puzzle/assets/eagle.jpg"
            ] :
            [
                "/assets/elephant.jpg",
                "/assets/tiger.jpg",
                "/assets/eagle.jpg"
            ];
        this.settings = {
            imgUrl: this.imageSources[0],
            dimension: 255,
            level: 3
        };
    }
    // imageSources:any[] = [
    //   "/iceey-puzzle/assets/elephant.jpg",
    //   "/iceey-puzzle/assets/tiger.jpg",
    //   "/iceey-puzzle/assets/dolphin.jpg"
    // ];
    IndexComponent.ctorParameters = function () { return [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ElementRef */] }]; };
    return IndexComponent;
}());

//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PuzzleComponent; });

var PuzzleComponent = (function () {
    function PuzzleComponent(elem) {
        this.elem = elem;
        this.puzzleClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* EventEmitter */]();
        this.puzzlePieces = [];
    }
    PuzzleComponent.prototype.ngOnChanges = function (changes) {
        this.beginPuzzle();
    };
    PuzzleComponent.prototype.ngOnInit = function () {
        //test
        // this.basicDimension = 225;
        // this.imgUrl = "/iceey-puzzle/assets/download.jpg";
        // this.puzzleLevel = 3;
        //test
        //console.log(JSON.parse(JSON.stringify(this)));
        //console.log("start assign and shuffle");
        //console.log('pieces',this.puzzlePieces);
        //console.log('puzzleBoard',this.getBoardPossition());
        this.beginPuzzle();
    };
    PuzzleComponent.prototype.beginPuzzle = function () {
        this.assignPieces();
        this.shuffle();
    };
    PuzzleComponent.prototype.assignPieces = function () {
        this.puzzlePieces = [];
        for (var y = 0; y < this.puzzleLevel; y++) {
            for (var x = 0; x < this.puzzleLevel; x++) {
                var p = new PuzzlePiece();
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
            this.puzzleClick.emit(isComplete);
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
    PuzzleComponent.prototype.arrange = function () {
        this.puzzlePieces = JSON.parse(this.jsonCorrectPositions);
    };
    PuzzleComponent.prototype.shuffle = function () {
        var pieceSetter = JSON.parse(JSON.stringify(this.puzzlePieces));
        ////console.log(pieceSetter);
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
    PuzzleComponent.ctorParameters = function () { return [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ElementRef */] }]; };
    return PuzzleComponent;
}());

;
var PuzzlePiece = (function () {
    function PuzzlePiece() {
    }
    return PuzzlePiece;
}());
//# sourceMappingURL=puzzle.component.js.map

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 72;


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gendir_app_app_module_ngfactory__ = __webpack_require__(77);




if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* platformBrowser */])().bootstrapModuleFactory(__WEBPACK_IMPORTED_MODULE_3__gendir_app_app_module_ngfactory__["a" /* IceeyPuzzleModuleNgFactory */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_index_component__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_component_ngfactory__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IceeyPuzzleModuleNgFactory; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */








var IceeyPuzzleModuleNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* ɵcmf */](__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* IceeyPuzzleModule */], [__WEBPACK_IMPORTED_MODULE_2__app_index_component__["a" /* IndexComponent */]], function (_l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* ɵmod */]([__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ComponentFactoryResolver */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ɵCodegenComponentFactoryResolver */], [[8, [__WEBPACK_IMPORTED_MODULE_3__index_component_ngfactory__["a" /* IndexComponentNgFactory */]]], [3, __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ComponentFactoryResolver */]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* NgModuleRef */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* LOCALE_ID */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ɵm */], [[3, __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* LOCALE_ID */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* NgLocalization */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* NgLocaleLocalization */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* LOCALE_ID */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Compiler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Compiler */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* APP_ID */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ɵf */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* IterableDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ɵk */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* KeyValueDiffers */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ɵl */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["c" /* ɵe */], [__WEBPACK_IMPORTED_MODULE_4__angular_common__["c" /* DOCUMENT */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](6144, __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Sanitizer */], null, [__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["b" /* DomSanitizer */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["d" /* HAMMER_GESTURE_CONFIG */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["e" /* HammerGestureConfig */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["f" /* EVENT_MANAGER_PLUGINS */], function (p0_0, p1_0, p2_0, p2_1) {
            return [new __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["g" /* ɵDomEventsPlugin */](p0_0), new __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["h" /* ɵKeyEventsPlugin */](p1_0),
                new __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["i" /* ɵHammerGesturesPlugin */](p2_0, p2_1)];
        }, [__WEBPACK_IMPORTED_MODULE_4__angular_common__["c" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["c" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["c" /* DOCUMENT */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["d" /* HAMMER_GESTURE_CONFIG */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["j" /* EventManager */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["j" /* EventManager */], [__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["f" /* EVENT_MANAGER_PLUGINS */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* NgZone */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](135680, __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["k" /* ɵDomSharedStylesHost */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["k" /* ɵDomSharedStylesHost */], [__WEBPACK_IMPORTED_MODULE_4__angular_common__["c" /* DOCUMENT */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["l" /* ɵDomRendererFactory2 */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["l" /* ɵDomRendererFactory2 */], [__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["j" /* EventManager */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["k" /* ɵDomSharedStylesHost */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](6144, __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* RendererFactory2 */], null, [__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["l" /* ɵDomRendererFactory2 */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](6144, __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["m" /* ɵSharedStylesHost */], null, [__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["k" /* ɵDomSharedStylesHost */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Testability */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Testability */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* NgZone */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["n" /* Meta */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["n" /* Meta */], [__WEBPACK_IMPORTED_MODULE_4__angular_common__["c" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["o" /* Title */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["o" /* Title */], [__WEBPACK_IMPORTED_MODULE_4__angular_common__["c" /* DOCUMENT */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* ɵi */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* ɵi */], []),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* BrowserXhr */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* BrowserXhr */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* ResponseOptions */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* BaseResponseOptions */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* XSRFStrategy */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["e" /* ɵb */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_7__angular_http__["f" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["f" /* XHRBackend */], [__WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* BrowserXhr */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* ResponseOptions */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["d" /* XSRFStrategy */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](4608, __WEBPACK_IMPORTED_MODULE_7__angular_http__["g" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["h" /* BaseRequestOptions */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](5120, __WEBPACK_IMPORTED_MODULE_7__angular_http__["i" /* Http */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["j" /* ɵc */], [__WEBPACK_IMPORTED_MODULE_7__angular_http__["f" /* XHRBackend */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["g" /* RequestOptions */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* CommonModule */], []),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](1024, __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["p" /* ɵa */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](1024, __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* APP_INITIALIZER */], function (p0_0, p0_1) {
            return [__WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["q" /* ɵc */](p0_0, p0_1)];
        }, [[2, __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["r" /* NgProbeToken */]], [2, __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* NgProbeToken */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* ApplicationInitStatus */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* ApplicationInitStatus */], [[2, __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* APP_INITIALIZER */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](131584, __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* ɵe */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* ɵe */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* NgZone */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* ɵConsole */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injector */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ComponentFactoryResolver */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* ApplicationInitStatus */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](2048, __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* ApplicationRef */], null, [__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* ɵe */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ApplicationModule */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ApplicationModule */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* ApplicationRef */]]),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["s" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["s" /* BrowserModule */], [[3, __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["s" /* BrowserModule */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* ɵba */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* ɵba */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_7__angular_http__["k" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_7__angular_http__["k" /* HttpModule */], []),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵmpd */](512, __WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* IceeyPuzzleModule */], __WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* IceeyPuzzleModule */], [])]);
});
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvNjY2L0Rlc2t0b3AvaWNlZXktcHV6emxlL2ljZWV5LXB1enpsZS9zcmMvYXBwL2FwcC5tb2R1bGUubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovVXNlcnMvNjY2L0Rlc2t0b3AvaWNlZXktcHV6emxlL2ljZWV5LXB1enpsZS9zcmMvYXBwL2FwcC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
//# sourceMappingURL=app.module.ngfactory.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_index_component__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__puzzle_component_ngfactory__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_puzzle_component__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(21);
/* unused harmony export RenderType_IndexComponent */
/* unused harmony export View_IndexComponent_0 */
/* unused harmony export View_IndexComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponentNgFactory; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */






var styles_IndexComponent = ['.description[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{ border-top:solid 1px black; padding:5px }'];
var RenderType_IndexComponent = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ɵcrt */]({ encapsulation: 0,
    styles: styles_IndexComponent, data: {} });
function View_IndexComponent_1(_l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](0, null, null, 3, 'option', [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](147456, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgSelectOption */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Renderer2 */], [2, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* SelectControlValueAccessor */]]], { value: [0, 'value'] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](147456, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* ɵq */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Renderer2 */], [8, null]], { value: [0, 'value'] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['', '']))], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit;
        _ck(_v, 1, 0, currVal_0);
        var currVal_1 = _v.context.$implicit;
        _ck(_v, 2, 0, currVal_1);
    }, function (_ck, _v) {
        var currVal_2 = _v.context.$implicit.replace('/iceey-puzzle', '').replace('/assets/', '');
        _ck(_v, 3, 0, currVal_2);
    });
}
function View_IndexComponent_0(_l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['\n\n'])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](0, null, null, 2, 'iceey-puzzle', [], null, [[null, 'puzzleClick']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('puzzleClick' === en)) {
                var pd_0 = (_co.console.log($event) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_3__puzzle_component_ngfactory__["a" /* View_PuzzleComponent_0 */], __WEBPACK_IMPORTED_MODULE_3__puzzle_component_ngfactory__["b" /* RenderType_PuzzleComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](638976, [['puzzle',
                4]], 0, __WEBPACK_IMPORTED_MODULE_4__app_puzzle_component__["a" /* PuzzleComponent */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ElementRef */]], { imgUrl: [0, 'imgUrl'], puzzleLevel: [1,
                'puzzleLevel'], basicDimension: [2, 'basicDimension'] }, { puzzleClick: 'puzzleClick' }),
        (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['\n'])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['\n'])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](0, null, null, 80, 'table', [['class', 'description']], null, null, null, null, null)),
        (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['\n  '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](0, null, null, 78, 'tbody', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](0, null, null, 18, 'tr', [], null, null, null, null, null)),
        (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['\n    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](0, null, null, 15, 'td', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['\n      '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](0, null, null, 1, 'label', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['Input: [imgUrl]'])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['\n      '])), (_l()(),
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](0, null, null, 9, 'select', [], [[2, 'ng-untouched',
                    null], [2, 'ng-touched', null], [2, 'ng-pristine', null],
                [2, 'ng-dirty', null], [2, 'ng-valid', null], [2, 'ng-invalid',
                    null], [2, 'ng-pending', null]], [[null, 'ngModelChange'],
                [null, 'change'], [null, 'blur']], function (_v, en, $event) {
                var ad = true;
                var _co = _v.component;
                if (('change' === en)) {
                    var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 16).onChange($event.target.value) !== false);
                    ad = (pd_0 && ad);
                }
                if (('blur' === en)) {
                    var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 16).onTouched() !== false);
                    ad = (pd_1 && ad);
                }
                if (('ngModelChange' === en)) {
                    var pd_2 = ((_co.settings.imgUrl = $event) !== false);
                    ad = (pd_2 && ad);
                }
                return ad;
            }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](16384, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* SelectControlValueAccessor */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ElementRef */]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NG_VALUE_ACCESSOR */], function (p0_0) {
            return [p0_0];
        }, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* SelectControlValueAccessor */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](671744, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* NgModel */], [[8, null], [8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NG_VALUE_ACCESSOR */]]], { model: [0, 'model'] }, { update: 'ngModelChange' }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](16384, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['\n        '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* ɵand */](16777216, null, null, 1, null, View_IndexComponent_1)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](802816, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["h" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* TemplateRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* IterableDiffers */]], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['\n      '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['    \n    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['\n  '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['\n  '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](0, null, null, 15, 'tr', [], null, null, null, null, null)),
        (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['\n    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](0, null, null, 12, 'td', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['\n      '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](0, null, null, 1, 'label', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['Input: [basicDimension]'])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['\n      '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](0, null, null, 6, 'input', [['min', '200'], ['type',
                'number']], [[2, 'ng-untouched', null], [2, 'ng-touched', null],
            [2, 'ng-pristine', null], [2, 'ng-dirty', null], [2, 'ng-valid',
                null], [2, 'ng-invalid', null], [2, 'ng-pending', null]], [[null, 'ngModelChange'], [null, 'input'], [null,
                'blur'], [null, 'compositionstart'], [null, 'compositionend'],
            [null, 'change']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('input' === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 36)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 36).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 36)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 36)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('change' === en)) {
                var pd_4 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 37).onChange($event.target.value) !== false);
                ad = (pd_4 && ad);
            }
            if (('input' === en)) {
                var pd_5 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 37).onChange($event.target.value) !== false);
                ad = (pd_5 && ad);
            }
            if (('blur' === en)) {
                var pd_6 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 37).onTouched() !== false);
                ad = (pd_6 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_7 = ((_co.settings.dimension = $event) !== false);
                ad = (pd_7 && ad);
            }
            return ad;
        }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](16384, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ElementRef */], [2, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](16384, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["m" /* ɵbc */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ElementRef */]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NG_VALUE_ACCESSOR */], function (p0_0, p1_0) {
            return [p0_0, p1_0];
        }, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* DefaultValueAccessor */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["m" /* ɵbc */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](671744, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* NgModel */], [[8, null], [8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NG_VALUE_ACCESSOR */]]], { model: [0, 'model'] }, { update: 'ngModelChange' }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](16384, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['\n    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['\n  '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['\n  '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](0, null, null, 15, 'tr', [], null, null, null, null, null)),
        (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['\n    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](0, null, null, 12, 'td', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['\n      '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](0, null, null, 1, 'label', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['Input: [puzzleLevel]'])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['\n      '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](0, null, null, 6, 'input', [['min', '3'], ['type',
                'number']], [[2, 'ng-untouched', null], [2, 'ng-touched', null],
            [2, 'ng-pristine', null], [2, 'ng-dirty', null], [2, 'ng-valid',
                null], [2, 'ng-invalid', null], [2, 'ng-pending', null]], [[null, 'ngModelChange'], [null, 'input'], [null,
                'blur'], [null, 'compositionstart'], [null, 'compositionend'],
            [null, 'change']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('input' === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 53)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 53).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 53)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 53)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            if (('change' === en)) {
                var pd_4 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 54).onChange($event.target.value) !== false);
                ad = (pd_4 && ad);
            }
            if (('input' === en)) {
                var pd_5 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 54).onChange($event.target.value) !== false);
                ad = (pd_5 && ad);
            }
            if (('blur' === en)) {
                var pd_6 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 54).onTouched() !== false);
                ad = (pd_6 && ad);
            }
            if (('ngModelChange' === en)) {
                var pd_7 = ((_co.settings.level = $event) !== false);
                ad = (pd_7 && ad);
            }
            return ad;
        }, null, null)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](16384, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* DefaultValueAccessor */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ElementRef */], [2, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* COMPOSITION_BUFFER_MODE */]]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](16384, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["m" /* ɵbc */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ElementRef */]], null, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* ɵprd */](1024, null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NG_VALUE_ACCESSOR */], function (p0_0, p1_0) {
            return [p0_0, p1_0];
        }, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* DefaultValueAccessor */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["m" /* ɵbc */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](671744, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* NgModel */], [[8, null], [8, null], [8, null], [2, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NG_VALUE_ACCESSOR */]]], { model: [0, 'model'] }, { update: 'ngModelChange' }), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* ɵprd */](2048, null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* NgControl */], null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* NgModel */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](16384, null, 0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* NgControlStatus */], [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* NgControl */]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['\n    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['\n  '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['\n  '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](0, null, null, 4, 'tr', [], null, null, null, null, null)),
        (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['\n    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](0, null, null, 1, 'td', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['\n      Output: (puzzleClick) - Fires an $event. Emits true when the puzzle is completed. See console window\n    '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['\n  '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['\n  '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](0, null, null, 7, 'tr', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['\n    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](0, null, null, 4, 'td', [], null, null, null, null, null)),
        (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['\n      Method: '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](0, null, null, 1, 'button', [], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 2).shuffle() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['shuffle()'])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, [' - Shuffle puzzle pieces\n    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['\n  '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['\n  '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](0, null, null, 7, 'tr', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['\n    '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](0, null, null, 4, 'td', [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['\n      Method: '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](0, null, null, 1, 'button', [], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 2).arrange() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['arrange()'])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, [' - Arrange puzzle pieces\n    '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['\n  '])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['\n'])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ɵted */](null, ['\n\n\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.settings.imgUrl;
        var currVal_1 = _co.settings.level;
        var currVal_2 = _co.settings.dimension;
        _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2);
        var currVal_10 = _co.settings.imgUrl;
        _ck(_v, 18, 0, currVal_10);
        var currVal_11 = _co.imageSources;
        _ck(_v, 23, 0, currVal_11);
        var currVal_19 = _co.settings.dimension;
        _ck(_v, 39, 0, currVal_19);
        var currVal_27 = _co.settings.level;
        _ck(_v, 56, 0, currVal_27);
    }, function (_ck, _v) {
        var currVal_3 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 20).ngClassUntouched;
        var currVal_4 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 20).ngClassTouched;
        var currVal_5 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 20).ngClassPristine;
        var currVal_6 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 20).ngClassDirty;
        var currVal_7 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 20).ngClassValid;
        var currVal_8 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 20).ngClassInvalid;
        var currVal_9 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 20).ngClassPending;
        _ck(_v, 15, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9);
        var currVal_12 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 41).ngClassUntouched;
        var currVal_13 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 41).ngClassTouched;
        var currVal_14 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 41).ngClassPristine;
        var currVal_15 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 41).ngClassDirty;
        var currVal_16 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 41).ngClassValid;
        var currVal_17 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 41).ngClassInvalid;
        var currVal_18 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 41).ngClassPending;
        _ck(_v, 35, 0, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18);
        var currVal_20 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 58).ngClassUntouched;
        var currVal_21 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 58).ngClassTouched;
        var currVal_22 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 58).ngClassPristine;
        var currVal_23 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 58).ngClassDirty;
        var currVal_24 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 58).ngClassValid;
        var currVal_25 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 58).ngClassInvalid;
        var currVal_26 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ɵnov */](_v, 58).ngClassPending;
        _ck(_v, 52, 0, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26);
    });
}
function View_IndexComponent_Host_0(_l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ɵeld */](0, null, null, 1, 'app-index', [], null, null, null, View_IndexComponent_0, RenderType_IndexComponent)),
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ɵdid */](49152, null, 0, __WEBPACK_IMPORTED_MODULE_2__app_index_component__["a" /* IndexComponent */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ElementRef */]], null, null)], null, null);
}
var IndexComponentNgFactory = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* ɵccf */]('app-index', __WEBPACK_IMPORTED_MODULE_2__app_index_component__["a" /* IndexComponent */], View_IndexComponent_Host_0, {}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvNjY2L0Rlc2t0b3AvaWNlZXktcHV6emxlL2ljZWV5LXB1enpsZS9zcmMvYXBwL2luZGV4LmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Vc2Vycy82NjYvRGVza3RvcC9pY2VleS1wdXp6bGUvaWNlZXktcHV6emxlL3NyYy9hcHAvaW5kZXguY29tcG9uZW50LnRzIiwibmc6Ly8vQzovVXNlcnMvNjY2L0Rlc2t0b3AvaWNlZXktcHV6emxlL2ljZWV5LXB1enpsZS9zcmMvYXBwL2luZGV4LmNvbXBvbmVudC50cy5JbmRleENvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvNjY2L0Rlc2t0b3AvaWNlZXktcHV6emxlL2ljZWV5LXB1enpsZS9zcmMvYXBwL2luZGV4LmNvbXBvbmVudC50cy5JbmRleENvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIlxuXG48aWNlZXktcHV6emxlIFxuICAgICNwdXp6bGVcbiAgICBbaW1nVXJsXT1cInNldHRpbmdzLmltZ1VybFwiXG4gICAgW2Jhc2ljRGltZW5zaW9uXT1cInNldHRpbmdzLmRpbWVuc2lvblwiXG4gICAgW3B1enpsZUxldmVsXT1cInNldHRpbmdzLmxldmVsXCJcbiAgICAocHV6emxlQ2xpY2spPVwiY29uc29sZS5sb2coJGV2ZW50KVwiID5cbjwvaWNlZXktcHV6emxlPlxuPHRhYmxlIGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cbiAgPHRyPlxuICAgIDx0ZD5cbiAgICAgIDxsYWJlbD5JbnB1dDogW2ltZ1VybF08L2xhYmVsPlxuICAgICAgPHNlbGVjdCBbKG5nTW9kZWwpXT1cInNldHRpbmdzLmltZ1VybFwiID5cbiAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgaSBvZiBpbWFnZVNvdXJjZXNcIiBbdmFsdWVdPVwiaVwiID57e2kucmVwbGFjZSgnL2ljZWV5LXB1enpsZScsJycpLnJlcGxhY2UoJy9hc3NldHMvJywnJyl9fTwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+ICAgIFxuICAgIDwvdGQ+XG4gIDwvdHI+XG4gIDx0cj5cbiAgICA8dGQ+XG4gICAgICA8bGFiZWw+SW5wdXQ6IFtiYXNpY0RpbWVuc2lvbl08L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBbKG5nTW9kZWwpXT1cInNldHRpbmdzLmRpbWVuc2lvblwiIG1pbj1cIjIwMFwiID5cbiAgICA8L3RkPlxuICA8L3RyPlxuICA8dHI+XG4gICAgPHRkPlxuICAgICAgPGxhYmVsPklucHV0OiBbcHV6emxlTGV2ZWxdPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgWyhuZ01vZGVsKV09XCJzZXR0aW5ncy5sZXZlbFwiIG1pbj1cIjNcIiA+XG4gICAgPC90ZD5cbiAgPC90cj5cbiAgPHRyPlxuICAgIDx0ZD5cbiAgICAgIE91dHB1dDogKHB1enpsZUNsaWNrKSAtIEZpcmVzIGFuICRldmVudC4gRW1pdHMgdHJ1ZSB3aGVuIHRoZSBwdXp6bGUgaXMgY29tcGxldGVkLiBTZWUgY29uc29sZSB3aW5kb3dcbiAgICA8L3RkPlxuICA8L3RyPlxuICA8dHI+XG4gICAgPHRkPlxuICAgICAgTWV0aG9kOiA8YnV0dG9uIChjbGljayk9XCJwdXp6bGUuc2h1ZmZsZSgpXCIgPnNodWZmbGUoKTwvYnV0dG9uPiAtIFNodWZmbGUgcHV6emxlIHBpZWNlc1xuICAgIDwvdGQ+XG4gIDwvdHI+XG4gIDx0cj5cbiAgICA8dGQ+XG4gICAgICBNZXRob2Q6IDxidXR0b24gKGNsaWNrKT1cInB1enpsZS5hcnJhbmdlKClcIiA+YXJyYW5nZSgpPC9idXR0b24+IC0gQXJyYW5nZSBwdXp6bGUgcGllY2VzXG4gICAgPC90ZD5cbiAgPC90cj5cbjwvdGFibGU+XG5cblxuIiwiPGFwcC1pbmRleD48L2FwcC1pbmRleD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDY1E7TUFBQSwrRUFBQTtNQUFBO01BQUEsMENBQUE7bUJBQUEsc0RBQW9EO01BQUE7SUFBYjtJQUF2QyxXQUF1QyxTQUF2QztJQUF1QztJQUF2QyxXQUF1QyxTQUF2Qzs7SUFBb0Q7UUFBQTtJQUFBOzs7O29CQWQ1RCx5Q0FFQTtNQUFBO01BQUE7UUFBQTtRQUFBO1FBS0k7VUFBQTtVQUFBO1FBQUE7UUFMSjtNQUFBLG1FQUFBO01BQUE7TUFBQTtNQUt5Qyx1Q0FDMUI7TUFDZjtVQUFBO01BQTJCLHlDQUN6QjtVQUFBO1VBQUE7VUFBQTtNQUFJLDJDQUNGO1VBQUE7VUFBQSxnQkFBSSw2Q0FDRjtVQUFBO1VBQUEsNENBQU87VUFBQSxzQkFBdUIsNkNBQzlCO2lCQUFBO2NBQUE7Y0FBQTtrQkFBQTtjQUFBO1lBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBUTtjQUFBO2NBQUE7WUFBQTtZQUFSO1VBQUEsdUNBQUE7VUFBQSxpRUFBQTsrQkFBQTtZQUFBO1VBQUEsMENBQUE7VUFBQTtVQUFBLHFEQUFBO3VCQUFBLG1DQUFBO1VBQUEsNENBQXVDO1VBQUEsaUJBQ3JDO1VBQUEsNkNBQUE7VUFBQTtVQUFBLGVBQXFILDZDQUM5RztVQUFBLGlCQUNOLHlDQUNGO1VBQUEsV0FDTDtVQUFBO01BQUksMkNBQ0Y7VUFBQTtVQUFBLGdCQUFJLDZDQUNGO1VBQUE7VUFBQSw0Q0FBTztVQUFBLDhCQUErQjtNQUN0QztVQUFBO1VBQUE7Y0FBQTtVQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFxQjtjQUFBO2NBQUE7WUFBQTtZQUFyQjtVQUFBLHVDQUFBO1VBQUE7VUFBQSxzQkFBQTtVQUFBLG9DQUFBO1VBQUE7WUFBQTtVQUFBLDJDQUFBO1VBQUE7VUFBQSxxREFBQTt1QkFBQSxtQ0FBQTtVQUFBLDRDQUFpRTtVQUFBLGFBQzlELHlDQUNGO1VBQUEsV0FDTDtVQUFBO01BQUksMkNBQ0Y7VUFBQTtVQUFBLGdCQUFJLDZDQUNGO1VBQUE7VUFBQSw0Q0FBTztVQUFBLDJCQUE0QjtNQUNuQztVQUFBO1VBQUE7Y0FBQTtVQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFxQjtjQUFBO2NBQUE7WUFBQTtZQUFyQjtVQUFBLHVDQUFBO1VBQUE7VUFBQSxzQkFBQTtVQUFBLG9DQUFBO1VBQUE7WUFBQTtVQUFBLDJDQUFBO1VBQUE7VUFBQSxxREFBQTt1QkFBQSxtQ0FBQTtVQUFBLDRDQUEyRDtVQUFBLGFBQ3hELHlDQUNGO1VBQUEsV0FDTDtVQUFBO01BQUksMkNBQ0Y7VUFBQTtVQUFBLGdCQUFJO01BRUMseUNBQ0Y7TUFDTDtVQUFBLDBEQUFJO1VBQUEsYUFDRjtVQUFBO01BQUkscURBQ007VUFBQTtVQUFBO1lBQUE7WUFBUTtjQUFBO2NBQUE7WUFBQTtZQUFSO1VBQUEsZ0NBQW9DO01BQWtCLG1FQUMzRDtVQUFBLFdBQ0YseUNBQ0w7VUFBQTtVQUFBLDhCQUFJO01BQ0Y7VUFBQSwwREFBSTtVQUFBLHVCQUNNO1VBQUE7WUFBQTtZQUFRO2NBQUE7Y0FBQTtZQUFBO1lBQVI7VUFBQSxnQ0FBb0M7TUFBa0IsbUVBQzNEO1VBQUEsV0FDRix1Q0FDQztVQUFBOztJQXpDSjtJQUVBO0lBREE7SUFISixXQUVJLFVBRUEsVUFEQSxTQUhKO0lBV2M7SUFBUixZQUFRLFVBQVI7SUFDVTtJQUFSLFlBQVEsVUFBUjtJQU9tQjtJQUFyQixZQUFxQixVQUFyQjtJQU1xQjtJQUFyQixZQUFxQixVQUFyQjs7SUFkQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFlBQUEscUVBQUE7SUFRQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFlBQUE7UUFBQSxVQUFBO0lBTUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQSxZQUFBO1FBQUEsVUFBQTs7OztvQkMzQk47TUFBQTthQUFBO1VBQUE7OzsifQ==
//# sourceMappingURL=index.component.ngfactory.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */ var styles = [''];
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvNjY2L0Rlc2t0b3AvaWNlZXktcHV6emxlL2ljZWV5LXB1enpsZS9zcmMvYXBwL3B1enpsZS5jb21wb25lbnQuY3NzLnNoaW0ubmdzdHlsZS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1VzZXJzLzY2Ni9EZXNrdG9wL2ljZWV5LXB1enpsZS9pY2VleS1wdXp6bGUvc3JjL2FwcC9wdXp6bGUuY29tcG9uZW50LmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7In0=
//# sourceMappingURL=puzzle.component.css.shim.ngstyle.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__puzzle_component_css_shim_ngstyle__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_puzzle_component__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RenderType_PuzzleComponent; });
/* harmony export (immutable) */ __webpack_exports__["a"] = View_PuzzleComponent_0;
/* unused harmony export View_PuzzleComponent_Host_0 */
/* unused harmony export PuzzleComponentNgFactory */
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */




var styles_PuzzleComponent = [__WEBPACK_IMPORTED_MODULE_0__puzzle_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_PuzzleComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_16" /* ɵcrt */]({ encapsulation: 0,
    styles: styles_PuzzleComponent, data: {} });
function View_PuzzleComponent_1(_l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵeld */](0, null, null, 1, 'button', [], [[4, 'position', null], [4, 'cursor', null], [4, 'background-color',
                null], [4, 'position', 'display'], [4, 'background-position-x', null],
            [4, 'background-position-y', null], [4, 'left', null], [4, 'top',
                null], [4, 'width', null], [4, 'height', null],
            [4, 'background-image', null], [4, 'background-size', null],
            [8, 'hidden', 0]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.switchWithBlank(_v.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵted */](null, ['\n      ', '\n    ']))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = 'absolute';
        var currVal_1 = 'pointer';
        var currVal_2 = 'white';
        var currVal_3 = 'inline-block';
        var currVal_4 = ((0 - _co.getRelativePosition(_v.context.index, _v.context.$implicit.correct_x, _v.context.$implicit.correct_y).x) + 'px');
        var currVal_5 = ((0 - _co.getRelativePosition(_v.context.index, _v.context.$implicit.correct_x, _v.context.$implicit.correct_y).y) + 'px');
        var currVal_6 = (_co.getRelativePosition(_v.context.index, _v.context.$implicit.current_x, _v.context.$implicit.current_y).x + 'px');
        var currVal_7 = (_co.getRelativePosition(_v.context.index, _v.context.$implicit.current_x, _v.context.$implicit.current_y).y + 'px');
        var currVal_8 = ((_co.basicDimension / _co.puzzleLevel) + 'px');
        var currVal_9 = ((_co.basicDimension / _co.puzzleLevel) + 'px');
        var currVal_10 = ((_v.context.index == (_co.puzzlePieces.length - 1)) ? 'none' : (('url(' + _co.imgUrl) + ')'));
        var currVal_11 = (_co.basicDimension + 'px');
        var currVal_12 = _v.context.$implicit.isBlankPiece;
        _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6,
            currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12]);
        var currVal_13 = (_v.context.index + 1);
        _ck(_v, 1, 0, currVal_13);
    });
}
function View_PuzzleComponent_0(_l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵted */](null, ['\n\n  '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵeld */](0, null, null, 0, 'img', [['id', 'puzzleImage']], [[8, 'src', 4], [4, 'display', null]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵted */](null, ['\n  '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵeld */](0, null, null, 4, 'div', [['id', 'puzzleBoard']], [[4, 'display', null], [4, 'position', null], [4, 'width', null],
            [4, 'height', null], [4, 'background-color', null]], null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵted */](null, ['\n    '])),
        (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* ɵand */](16777216, null, null, 1, null, View_PuzzleComponent_1)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](802816, null, 0, __WEBPACK_IMPORTED_MODULE_2__angular_common__["h" /* NgForOf */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["_2" /* ViewContainerRef */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* TemplateRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* IterableDiffers */]], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵted */](null, ['\n  '])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* ɵted */](null, ['\n  ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_7 = _co.puzzlePieces;
        _ck(_v, 6, 0, currVal_7);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.imgUrl;
        var currVal_1 = 'none';
        _ck(_v, 1, 0, currVal_0, currVal_1);
        var currVal_2 = 'block';
        var currVal_3 = 'relative';
        var currVal_4 = (_co.basicDimension + 'px');
        var currVal_5 = (_co.basicDimension + 'px');
        var currVal_6 = 'black';
        _ck(_v, 3, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
    });
}
function View_PuzzleComponent_Host_0(_l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* ɵvid */](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* ɵeld */](0, null, null, 1, 'iceey-puzzle', [], null, null, null, View_PuzzleComponent_0, RenderType_PuzzleComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_19" /* ɵdid */](638976, null, 0, __WEBPACK_IMPORTED_MODULE_3__app_puzzle_component__["a" /* PuzzleComponent */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Z" /* ElementRef */]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
var PuzzleComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_24" /* ɵccf */]('iceey-puzzle', __WEBPACK_IMPORTED_MODULE_3__app_puzzle_component__["a" /* PuzzleComponent */], View_PuzzleComponent_Host_0, { imgUrl: 'imgUrl', puzzleLevel: 'puzzleLevel',
    basicDimension: 'basicDimension' }, { puzzleClick: 'puzzleClick' }, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvNjY2L0Rlc2t0b3AvaWNlZXktcHV6emxlL2ljZWV5LXB1enpsZS9zcmMvYXBwL3B1enpsZS5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovVXNlcnMvNjY2L0Rlc2t0b3AvaWNlZXktcHV6emxlL2ljZWV5LXB1enpsZS9zcmMvYXBwL3B1enpsZS5jb21wb25lbnQudHMiLCJuZzovLy9DOi9Vc2Vycy82NjYvRGVza3RvcC9pY2VleS1wdXp6bGUvaWNlZXktcHV6emxlL3NyYy9hcHAvcHV6emxlLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvNjY2L0Rlc2t0b3AvaWNlZXktcHV6emxlL2ljZWV5LXB1enpsZS9zcmMvYXBwL3B1enpsZS5jb21wb25lbnQudHMuUHV6emxlQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiXHJcblxyXG4gIDxpbWcgaWQ9XCJwdXp6bGVJbWFnZVwiIFtzcmNdPVwiaW1nVXJsXCIgW3N0eWxlLmRpc3BsYXldPVwiJ25vbmUnXCIgLz5cclxuICA8ZGl2IGlkPVwicHV6emxlQm9hcmRcIiBbc3R5bGUuZGlzcGxheV09XCInYmxvY2snXCIgW3N0eWxlLnBvc2l0aW9uXT1cIidyZWxhdGl2ZSdcIiBbc3R5bGUud2lkdGhdPVwiYmFzaWNEaW1lbnNpb24rJ3B4J1wiIFtzdHlsZS5oZWlnaHRdPVwiYmFzaWNEaW1lbnNpb24rJ3B4J1wiIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cIidibGFjaydcIiA+XHJcbiAgICA8YnV0dG9uICpuZ0Zvcj1cImxldCBwaWVjZSBvZiBwdXp6bGVQaWVjZXM7bGV0IGkgPSBpbmRleDtcIlxyXG4gICAgICAgICAgICBbc3R5bGUucG9zaXRpb25dPVwiJ2Fic29sdXRlJ1wiXHJcbiAgICAgICAgICAgIFtzdHlsZS5jdXJzb3JdPVwiJ3BvaW50ZXInXCIgXHJcbiAgICAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cIid3aGl0ZSdcIiBcclxuICAgICAgICAgICAgW3N0eWxlLnBvc2l0aW9uLmRpc3BsYXldPVwiJ2lubGluZS1ibG9jaydcIlxyXG4gICAgICAgICAgICBbc3R5bGUuYmFja2dyb3VuZC1wb3NpdGlvbi14XT1cIi1nZXRSZWxhdGl2ZVBvc2l0aW9uKGkscGllY2UuY29ycmVjdF94LHBpZWNlLmNvcnJlY3RfeSkueCsncHgnXCJcclxuICAgICAgICAgICAgW3N0eWxlLmJhY2tncm91bmQtcG9zaXRpb24teV09XCItZ2V0UmVsYXRpdmVQb3NpdGlvbihpLHBpZWNlLmNvcnJlY3RfeCxwaWVjZS5jb3JyZWN0X3kpLnkrJ3B4J1wiXHJcbiAgICAgICAgICAgIFtzdHlsZS5sZWZ0XSA9IFwiZ2V0UmVsYXRpdmVQb3NpdGlvbihpLHBpZWNlLmN1cnJlbnRfeCxwaWVjZS5jdXJyZW50X3kpLngrJ3B4J1wiXHJcbiAgICAgICAgICAgIFtzdHlsZS50b3BdID0gXCJnZXRSZWxhdGl2ZVBvc2l0aW9uKGkscGllY2UuY3VycmVudF94LHBpZWNlLmN1cnJlbnRfeSkueSsncHgnXCJcclxuICAgICAgICAgICAgW3N0eWxlLndpZHRoXT1cImJhc2ljRGltZW5zaW9uL3B1enpsZUxldmVsKydweCdcIiBcclxuICAgICAgICAgICAgW3N0eWxlLmhlaWdodF09XCJiYXNpY0RpbWVuc2lvbi9wdXp6bGVMZXZlbCsncHgnXCJcclxuICAgICAgICAgICAgW3N0eWxlLmJhY2tncm91bmQtaW1hZ2VdPVwiaT09cHV6emxlUGllY2VzLmxlbmd0aC0xPyAgJ25vbmUnOigndXJsKCcraW1nVXJsKycpJylcIlxyXG4gICAgICAgICAgICBbc3R5bGUuYmFja2dyb3VuZC1zaXplXT1cImJhc2ljRGltZW5zaW9uKydweCdcIlxyXG4gICAgICAgICAgICBbaGlkZGVuXT1cInBpZWNlLmlzQmxhbmtQaWVjZVwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJzd2l0Y2hXaXRoQmxhbmsocGllY2UpXCIgID5cclxuICAgICAge3tpKzF9fVxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbiAgPCEtLTxidXR0b24gKGNsaWNrKT1cInNodWZmbGVQaWVjZXMoKVwiID5TaHVmZmxlPC9idXR0b24+XHJcbiAgPGJ1dHRvbiAoY2xpY2spPVwiYXJyYW5nZVBpZWNlcygpXCIgPkFycmFuZ2U8L2J1dHRvbj4tLT4iLCI8aWNlZXktcHV6emxlPjwvaWNlZXktcHV6emxlPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDSUk7TUFBQTtVQUFBO1VBQUE7Y0FBQTtVQUFBO1VBQUE7UUFBQTtRQUFBO1FBY1E7VUFBQTtVQUFBO1FBQUE7UUFkUjtNQUFBLGdDQWMyQzs7O1FBYm5DO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7WUFBQTtRQUNBO1lBQUE7UUFDQTtZQUFBO1FBQ0E7WUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFiUixZQUNRLFVBQ0EsVUFDQSxVQUNBLFVBQ0EsVUFDQSxVQUNBO1lBQ0EsVUFDQSxVQUNBLFVBQ0EsV0FDQSxXQUNBLFVBYlI7UUFjMkM7UUFBQTs7OztvQkFsQi9DLDJDQUVFO01BQUE7TUFBQSwwREFBZ0U7TUFBQSxXQUNoRTtNQUFBO1VBQUE7TUFBQSw0Q0FBMkw7TUFDekw7YUFBQTs0QkFBQSx5Q0FnQlM7VUFBQSxXQUNMOztJQWpCSTtJQUFSLFdBQVEsU0FBUjs7O0lBRm9CO0lBQWU7SUFBckMsV0FBc0IsVUFBZSxTQUFyQztJQUNzQjtJQUEwQjtJQUE4QjtJQUFvQztJQUFxQztJQUF2SixXQUFzQixVQUEwQixVQUE4QixVQUFvQyxVQUFxQyxTQUF2Sjs7OztvQkNIRjtNQUFBO2dDQUFBLFVBQUE7TUFBQTtJQUFBOzs7OzsifQ==
//# sourceMappingURL=puzzle.component.ngfactory.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IceeyPuzzleModule; });
var IceeyPuzzleModule = (function () {
    function IceeyPuzzleModule() {
    }
    return IceeyPuzzleModule;
}());

//# sourceMappingURL=app.module.js.map

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

},[161]);
//# sourceMappingURL=main.bundle.js.map