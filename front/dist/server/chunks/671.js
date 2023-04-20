exports.id = 671;
exports.ids = [671];
exports.modules = {

/***/ 8166:
/***/ ((module) => {

// Exports
module.exports = {
	"heading": "catalog_heading__WbGWM",
	"movies": "catalog_movies__Wmw79",
	"fade": "catalog_fade__ZBZ1P",
	"button": "catalog_button__JhsUX"
};


/***/ }),

/***/ 8671:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _catalog_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8166);
/* harmony import */ var _catalog_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_catalog_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_meta_Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9671);
/* harmony import */ var _Heading_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8135);
/* harmony import */ var _Heading_Description__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6705);
/* harmony import */ var _Gallery_GalleryItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(594);
/* harmony import */ var _config_url_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6470);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Heading_Description__WEBPACK_IMPORTED_MODULE_3__]);
_Heading_Description__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const Catalog = ({ movies , title , description  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utils_meta_Meta__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        title: title,
        description: description,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Heading_Heading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: title,
                className: (_catalog_module_scss__WEBPACK_IMPORTED_MODULE_5___default().heading)
            }),
            description && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Heading_Description__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                text: description,
                className: (_catalog_module_scss__WEBPACK_IMPORTED_MODULE_5___default().description)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
                className: (_catalog_module_scss__WEBPACK_IMPORTED_MODULE_5___default().movies),
                children: movies.map((movie)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Gallery_GalleryItem__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        item: {
                            name: movie.title,
                            link: (0,_config_url_config__WEBPACK_IMPORTED_MODULE_6__/* .getMovieUrl */ .Xl)(movie.slug),
                            posterPath: movie.bigPoster,
                            content: {
                                title: movie.title
                            }
                        },
                        variant: "horizontal"
                    }, movie._id))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Catalog);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6705:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2905);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([html_react_parser__WEBPACK_IMPORTED_MODULE_1__]);
html_react_parser__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Description = ({ text , className =""  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("text-lg font-light text-white text-opacity-60", className),
        children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_1__["default"])(text)
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Description);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;