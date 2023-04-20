exports.id = 378;
exports.ids = [378];
exports.modules = {

/***/ 938:
/***/ ((module) => {

// Exports
module.exports = {
	"search": "searchField_search__ELDqG"
};


/***/ }),

/***/ 5994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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


/***/ }),

/***/ 444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MaterialIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5994);
/* harmony import */ var _searchField_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(938);
/* harmony import */ var _searchField_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_searchField_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const SearchField = ({ searchTerm , handleSearch  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_searchField_module_scss__WEBPACK_IMPORTED_MODULE_2___default().search),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MaterialIcon__WEBPACK_IMPORTED_MODULE_1__/* .MaterialIcon */ .O, {
                name: "MdSearch"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                placeholder: "Search",
                value: searchTerm,
                onChange: handleSearch
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchField);


/***/ }),

/***/ 3489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ useDebounce)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useDebounce = (value, delay)=>{
    const [debouncedValue, setDebouncedValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const handler = setTimeout(()=>{
            setDebouncedValue(value);
        }, delay);
        return ()=>{
            clearTimeout(handler);
        };
    }, [
        value,
        delay
    ]);
    return debouncedValue;
};


/***/ })

};
;