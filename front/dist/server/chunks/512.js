"use strict";
exports.id = 512;
exports.ids = [512];
exports.modules = {

/***/ 8975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.4b37bf7a.svg","height":249,"width":249,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 8135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Heading = ({ title , className  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
        className: `text-white text-opacity-80 font-semibold ${className?.includes("xl") ? "" : "text-3xl"} ${className}`,
        children: title
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading);


/***/ }),

/***/ 9671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ meta_Meta)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./app/assets/images/logo.svg
var logo = __webpack_require__(8975);
;// CONCATENATED MODULE: ./app/config/seo.config.ts
const siteName = "Online cinema";
const titleMerge = (title)=>`${title} | ${siteName}`;

;// CONCATENATED MODULE: ./app/utils/string/clearText.ts
const onlyText = (_string, limit = null)=>{
    let result = _string.replace(/<[^>]+>/g, "").replace(/&[^;]+>./g, " ").replace(/([\u2700-\u27BF] | [\uE000-\uF8FF] | \uD83C[\uDC00-\uDFFF] | \uD83D[\uDC00-\uDFFF] | [\u2011-\u26FF] | \uD83E[\uDD10-\uDDFF])/g, "");
    if (limit) result = result.slice(0, limit) + "...";
    return result;
};

;// CONCATENATED MODULE: ./app/utils/meta/Meta.tsx






const Meta = ({ title , description , image , children  })=>{
    const { asPath  } = (0,router_.useRouter)();
    const currentUrl = `${process.env.REACT_APP_URL}${asPath}`;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("title", {
                        itemProp: "headline",
                        children: titleMerge(title)
                    }),
                    description ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("meta", {
                                itemProp: "description",
                                name: "description",
                                content: onlyText(description, 152)
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("link", {
                                rel: "canonical",
                                href: currentUrl
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("meta", {
                                property: "og:locale",
                                content: "en"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("meta", {
                                property: "og:title",
                                content: titleMerge(title)
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("meta", {
                                property: "og:url",
                                content: currentUrl
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("meta", {
                                property: "og:image",
                                content: image || logo/* default */.Z
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("meta", {
                                property: "og:site_name",
                                content: siteName
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsx)("meta", {
                                property: "og:description",
                                content: onlyText(description, 197)
                            })
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsx)("meta", {
                        name: "robots",
                        content: "noindex, nofollow"
                    })
                ]
            }),
            children
        ]
    });
};
/* harmony default export */ const meta_Meta = (Meta);


/***/ })

};
;