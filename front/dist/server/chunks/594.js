exports.id = 594;
exports.ids = [594];
exports.modules = {

/***/ 8824:
/***/ ((module) => {

// Exports
module.exports = {
	"gallery": "gallery_gallery__ul_3m",
	"item": "gallery_item__td6S1",
	"vertical": "gallery_vertical__6F_xa",
	"horizontal": "gallery_horizontal__vbfk3",
	"withText": "gallery_withText__g4Kcw",
	"content": "gallery_content__NN6Z7",
	"title": "gallery_title__9evqb",
	"subTitle": "gallery_subTitle__IG1Sn"
};


/***/ }),

/***/ 594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gallery_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8824);
/* harmony import */ var _gallery_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_gallery_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);





const GalleryItem = ({ item , variant  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: item.link,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_gallery_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item), {
            [(_gallery_module_scss__WEBPACK_IMPORTED_MODULE_4___default().withText)]: item.content,
            [(_gallery_module_scss__WEBPACK_IMPORTED_MODULE_4___default().horizontal)]: variant === "horizontal",
            [(_gallery_module_scss__WEBPACK_IMPORTED_MODULE_4___default().vertical)]: variant === "vertical"
        }),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                alt: item.name,
                src: item.posterPath,
                fill: true,
                draggable: "false",
                priority: true
            }),
            item.content && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_gallery_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: (_gallery_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
                        children: item.content.title
                    }),
                    item.content.subTitle && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: (_gallery_module_scss__WEBPACK_IMPORTED_MODULE_4___default().subTitle),
                        children: item.content.subTitle
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GalleryItem);


/***/ })

};
;