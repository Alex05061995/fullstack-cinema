exports.id = 422;
exports.ids = [422];
exports.modules = {

/***/ 7743:
/***/ ((module) => {

// Exports
module.exports = {
	"nav": "adminNavigation_nav___TpNr",
	"active": "adminNavigation_active__da2_u"
};


/***/ }),

/***/ 6263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ AdminNavifation_AdminNavigation)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./app/components/ui/AdminNavifation/adminNavigation.module.scss
var adminNavigation_module = __webpack_require__(7743);
var adminNavigation_module_default = /*#__PURE__*/__webpack_require__.n(adminNavigation_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./app/components/ui/AdminNavifation/AdminNavItem.tsx





const AdminNavItem = ({ item: { title , link  }  })=>{
    const { asPath  } = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)("li", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
            legacyBehavior: true,
            href: link,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
                className: external_classnames_default()({
                    [(adminNavigation_module_default()).active]: asPath === link
                }),
                children: title
            })
        })
    });
};
/* harmony default export */ const AdminNavifation_AdminNavItem = (AdminNavItem);

// EXTERNAL MODULE: ./app/config/url.config.ts
var url_config = __webpack_require__(6470);
;// CONCATENATED MODULE: ./app/components/ui/AdminNavifation/admin-navigation.data.ts


const navItems = [
    {
        title: "Statistics",
        link: (0,url_config/* getAdminHomeUrl */.wk)()
    },
    {
        title: "Users",
        link: (0,url_config/* getAdminUrl */.A7)("users")
    },
    {
        title: "Movies",
        link: (0,url_config/* getAdminUrl */.A7)("movies")
    },
    {
        title: "Actors",
        link: (0,url_config/* getAdminUrl */.A7)("actors")
    },
    {
        title: "Genres",
        link: (0,url_config/* getAdminUrl */.A7)("genres")
    }
];

;// CONCATENATED MODULE: ./app/components/ui/AdminNavifation/AdminNavigation.tsx




const AdminNavigation = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)("nav", {
        className: (adminNavigation_module_default()).nav,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("ul", {
            children: navItems.map((navItem)=>/*#__PURE__*/ (0,jsx_runtime_.jsx)(AdminNavifation_AdminNavItem, {
                    item: navItem
                }, navItem.link))
        })
    });
};
/* harmony default export */ const AdminNavifation_AdminNavigation = (AdminNavigation);


/***/ }),

/***/ 9730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9012);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6593);
/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_3__);




const SkeletonLoader = ({ className , ...rest })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_loading_skeleton__WEBPACK_IMPORTED_MODULE_2___default()), {
        ...rest,
        baseColor: "#1F2125",
        highlightColor: "#292A2E",
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("rounded-lg", className)
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkeletonLoader);


/***/ }),

/***/ 6593:
/***/ (() => {



/***/ })

};
;