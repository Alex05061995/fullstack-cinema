"use strict";
exports.id = 433;
exports.ids = [433];
exports.modules = {

/***/ 7793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GalleryItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3248);
/* harmony import */ var _gallery_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(471);
/* harmony import */ var _gallery_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gallery_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const Gallery = ({ items  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: (_gallery_module_scss__WEBPACK_IMPORTED_MODULE_2___default().gallery),
        children: items.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_GalleryItem__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                item: item,
                variant: "vertical"
            }, item.link))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gallery);


/***/ }),

/***/ 4061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const SubHeading = ({ title  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
        className: "text-white text-xl mb-5 font-semibold",
        children: title
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubHeading);


/***/ }),

/***/ 5994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "O": () => (/* binding */ MaterialIcon)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(4041);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./app/hooks/useRenderClient.ts

const useRenderClient = ()=>{
    const [isRenderClient, setIsRenderClient] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        !isRenderClient && setIsRenderClient(true);
    }, [
        isRenderClient
    ]);
    return {
        isRenderClient
    };
};

;// CONCATENATED MODULE: ./app/components/ui/MaterialIcon.tsx



const MaterialIcon = ({ name  })=>{
    const { isRenderClient  } = useRenderClient();
    const IconComponent = md_[name];
    if (isRenderClient) {
        return IconComponent ? /*#__PURE__*/ (0,jsx_runtime_.jsx)(IconComponent, {}) : /*#__PURE__*/ (0,jsx_runtime_.jsx)(md_.Md1XMobiledata, {});
    } else return null;
};


/***/ })

};
;