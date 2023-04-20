exports.id = 517;
exports.ids = [517];
exports.modules = {

/***/ 2854:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "form_button__yOLwy",
	"common": "form_common__Y25KB",
	"field": "form_field__MfP1o",
	"uploadField": "form_uploadField__SfNcG",
	"uploadFlex": "form_uploadFlex___EJSQ",
	"uploadImageContainer": "form_uploadImageContainer__WmFzh",
	"fade": "form_fade__luiBw",
	"error": "form_error__sUS7j",
	"editorWrapper": "form_editorWrapper__kd_SU",
	"wrapper": "form_wrapper___Lju1",
	"toolbar": "form_toolbar__nAnM_",
	"editor": "form_editor__uwQTO"
};


/***/ }),

/***/ 3141:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _form_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2854);
/* harmony import */ var _form_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_form_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const Button = ({ children , className , ...rest })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_form_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button), className),
        ...rest,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 4460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ toastError)
/* harmony export */ });
/* harmony import */ var api_api_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6358);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1424);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_0__);


const toastError = (error, title)=>{
    const message = (0,api_api_helpers__WEBPACK_IMPORTED_MODULE_1__/* .errorCatch */ .l)(error);
    react_redux_toastr__WEBPACK_IMPORTED_MODULE_0__.toastr.error(title || "Error request", message);
    throw message;
};


/***/ })

};
;