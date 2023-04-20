(() => {
var exports = {};
exports.id = 505;
exports.ids = [505,197];
exports.modules = {

/***/ 5301:
/***/ ((module) => {

// Exports
module.exports = {
	"collections": "collection_collections__pokl5",
	"fade": "collection_fade__FxB6j",
	"collection": "collection_collection__p_gLs",
	"behind": "collection_behind__3Ojzy",
	"second": "collection_second__rsFlX",
	"third": "collection_third__JO4wa",
	"content": "collection_content__a0lNw",
	"title": "collection_title__WNOPr"
};


/***/ }),

/***/ 4992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ collecions_CollectionItem)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./app/config/url.config.ts
var url_config = __webpack_require__(4851);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./app/assets/images/plug.png
/* harmony default export */ const plug = ({"src":"/_next/static/media/plug.34cde334.png","height":800,"width":800,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAs0lEQVR42mOAgVWr1zDu2Lmbaf2GDcxr161nZCAEZs6ciaqop7uLe+XKVTqLFi1ynzpliixIbPq0aYwMl65cZwZx9h84NOfazdv/b9978P/chUuLQGJPX75hYdi7/wAriLNj566+g4eP/N9/8ND/k2fOzgKJATWwMCxbthxkF4hWmjNnjtOyZcu0FixYIA0Smz9/PsQdQLsxXL1i5UpUsXXr1zOtXr2GedPmLUybtmyBSwIAwSJPaNVX2dYAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/components/screens/collecions/CollectionImage.tsx



const CollectionImage = ({ collection: { image , title  }  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)((image_default()), {
        alt: title,
        src: image ? image : plug,
        fill: true,
        draggable: false
    });
};
/* harmony default export */ const collecions_CollectionImage = (CollectionImage);

// EXTERNAL MODULE: ./app/components/screens/collecions/collection.module.scss
var collection_module = __webpack_require__(5301);
var collection_module_default = /*#__PURE__*/__webpack_require__.n(collection_module);
;// CONCATENATED MODULE: ./app/components/screens/collecions/CollectionItem.tsx






const CollectionItem = ({ collection  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
        className: (collection_module_default()).collection,
        href: (0,url_config/* getGenreUrl */.i8)(collection.slug),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(collecions_CollectionImage, {
                collection: collection
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: (collection_module_default()).content,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: (collection_module_default()).title,
                    children: collection.title
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: external_classnames_default()((collection_module_default()).behind, (collection_module_default()).second),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(collecions_CollectionImage, {
                    collection: collection
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: external_classnames_default()((collection_module_default()).behind, (collection_module_default()).third),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(collecions_CollectionImage, {
                    collection: collection
                })
            })
        ]
    });
};
/* harmony default export */ const collecions_CollectionItem = (CollectionItem);


/***/ }),

/***/ 6127:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_meta_Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5495);
/* harmony import */ var _components_ui_Heading_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77);
/* harmony import */ var _collection_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5301);
/* harmony import */ var _collection_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_collection_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ui_Heading_Description__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(853);
/* harmony import */ var _CollectionItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4992);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_Heading_Description__WEBPACK_IMPORTED_MODULE_3__]);
_components_ui_Heading_Description__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Collections = ({ collections  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utils_meta_Meta__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        title: "Discovery",
        description: "Here all genres of films",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_Heading_Heading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: "Discovery",
                className: (_collection_module_scss__WEBPACK_IMPORTED_MODULE_5___default().heading)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_Heading_Description__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                text: "Here all genres of films",
                className: (_collection_module_scss__WEBPACK_IMPORTED_MODULE_5___default().description)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
                className: (_collection_module_scss__WEBPACK_IMPORTED_MODULE_5___default().collections),
                children: collections.map((c)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CollectionItem__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        collection: c
                    }, c._id))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Collections);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 853:
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

/***/ }),

/***/ 538:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ GenreService)
/* harmony export */ });
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8016);
/* harmony import */ var api_interceptors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4714);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([api_interceptors__WEBPACK_IMPORTED_MODULE_0__]);
api_interceptors__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const GenreService = {
    async getAll (searchTerm) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* .axiosClassic.get */ .vV.get((0,_config_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getGanresUrl */ .R0)(""), {
            params: searchTerm ? {
                searchTerm
            } : {}
        });
    },
    async getBySlug (slug) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* .axiosClassic.get */ .vV.get(`/genres/by-slug/${slug}`);
    },
    async getCollections () {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .ZP.get((0,_config_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getGanresUrl */ .R0)(`collections`));
    },
    async create () {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .ZP.post((0,_config_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getGanresUrl */ .R0)(`/`));
    },
    async delete (_id) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"]["delete"] */ .ZP["delete"]((0,_config_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getGanresUrl */ .R0)(`/${_id}`));
    },
    async update (_id, data) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"].put */ .ZP.put((0,_config_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getGanresUrl */ .R0)(`/${_id}`), data);
    },
    async getById (_id) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .ZP.get((0,_config_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getGanresUrl */ .R0)(`/${_id}`));
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Error404)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_Heading_Heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77);
/* harmony import */ var _utils_meta_Meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5495);



function Error404() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_utils_meta_Meta__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        title: "Page not found",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_Heading_Heading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            title: "404 - Page not found"
        })
    });
}


/***/ }),

/***/ 1005:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_screens_collecions_Collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6127);
/* harmony import */ var _404__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5838);
/* harmony import */ var _services_genre_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(538);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_screens_collecions_Collections__WEBPACK_IMPORTED_MODULE_1__, _services_genre_service__WEBPACK_IMPORTED_MODULE_3__]);
([_components_screens_collecions_Collections__WEBPACK_IMPORTED_MODULE_1__, _services_genre_service__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const Genres = ({ collections  })=>{
    return collections ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_screens_collecions_Collections__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        collections: collections || []
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_404__WEBPACK_IMPORTED_MODULE_2__["default"], {});
};
const getStaticProps = async ()=>{
    try {
        const { data: collections  } = await _services_genre_service__WEBPACK_IMPORTED_MODULE_3__/* .GenreService.getCollections */ .c.getCollections();
        return {
            props: {
                collections
            },
            revalidate: 60
        };
    } catch (e) {
        return {
            notFound: true
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Genres);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ 2905:
/***/ ((module) => {

"use strict";
module.exports = import("html-react-parser");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,443,675,779,494,583], () => (__webpack_exec__(1005)));
module.exports = __webpack_exports__;

})();