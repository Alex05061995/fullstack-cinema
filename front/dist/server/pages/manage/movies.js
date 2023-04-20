"use strict";
(() => {
var exports = {};
exports.id = 965;
exports.ids = [965];
exports.modules = {

/***/ 378:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_AdminNavifation_AdminNavigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6263);
/* harmony import */ var _components_ui_AdminTable_AdminHeader_AdminHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5903);
/* harmony import */ var _components_ui_AdminTable_AdminTable_AdminTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8561);
/* harmony import */ var _components_ui_Heading_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8135);
/* harmony import */ var _utils_meta_Meta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9671);
/* harmony import */ var _useMovie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5909);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useMovie__WEBPACK_IMPORTED_MODULE_6__]);
_useMovie__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const MovieList = ()=>{
    const { isLoading , data , deleteAsync , searchTerm , handleSearch , createAsync  } = (0,_useMovie__WEBPACK_IMPORTED_MODULE_6__/* .useMovies */ .H)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utils_meta_Meta__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        title: "Movies",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_AdminNavifation_AdminNavigation__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_Heading_Heading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                title: "Movies"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_AdminTable_AdminHeader_AdminHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                handleSearch: handleSearch,
                searchTerm: searchTerm,
                onClick: createAsync
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_AdminTable_AdminTable_AdminTable__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                isLoading: isLoading,
                removeHandler: deleteAsync,
                headerItems: [
                    "Title",
                    "Genre",
                    "Rating"
                ],
                tableItems: data || []
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5909:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ useMovies)
/* harmony export */ });
/* harmony import */ var _config_url_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6470);
/* harmony import */ var _hooks_useDebounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3669);
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7669);
/* harmony import */ var _utils_movie_getGenresListEach__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6349);
/* harmony import */ var _utils_toast_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4460);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1424);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_movie_service__WEBPACK_IMPORTED_MODULE_1__]);
_services_movie_service__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const useMovies = ()=>{
    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const debouncedSearch = (0,_hooks_useDebounce__WEBPACK_IMPORTED_MODULE_0__/* .useDebounce */ .N)(searchTerm, 500);
    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const queryData = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery)([
        "movie list",
        debouncedSearch
    ], ()=>_services_movie_service__WEBPACK_IMPORTED_MODULE_1__/* .MovieService.getAll */ .u.getAll(debouncedSearch), {
        select: ({ data  })=>data.map((movie)=>({
                    _id: movie._id,
                    editUrl: (0,_config_url_config__WEBPACK_IMPORTED_MODULE_7__/* .getAdminUrl */ .A7)(`movie/edit/${movie._id}`),
                    items: [
                        movie.title,
                        (0,_utils_movie_getGenresListEach__WEBPACK_IMPORTED_MODULE_8__/* .getGenresList */ .Q)(movie.genres),
                        String(movie.rating)
                    ]
                })),
        onError: (error)=>{
            (0,_utils_toast_error__WEBPACK_IMPORTED_MODULE_2__/* .toastError */ ._)(error, "Movie list");
        }
    });
    const handleSearch = (e)=>{
        setSearchTerm(e.target.value);
    };
    const { mutateAsync: createAsync  } = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useMutation)("create movie", ()=>_services_movie_service__WEBPACK_IMPORTED_MODULE_1__/* .MovieService.create */ .u.create(), {
        onError: (error)=>{
            (0,_utils_toast_error__WEBPACK_IMPORTED_MODULE_2__/* .toastError */ ._)(error, "Delete Movie");
        },
        onSuccess: ({ data: _id  })=>{
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_6__.toastr.success("Create movie", "Movie was created successful"), push((0,_config_url_config__WEBPACK_IMPORTED_MODULE_7__/* .getAdminUrl */ .A7)(`movie/edit/${_id}`));
        }
    });
    const { mutateAsync: deleteAsync  } = (0,react_query__WEBPACK_IMPORTED_MODULE_5__.useMutation)("delete movie", (movieId)=>_services_movie_service__WEBPACK_IMPORTED_MODULE_1__/* .MovieService["delete"] */ .u["delete"](movieId), {
        onError: (error)=>{
            (0,_utils_toast_error__WEBPACK_IMPORTED_MODULE_2__/* .toastError */ ._)(error, "Delete Movie");
        },
        onSuccess: ()=>{
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_6__.toastr.success("Delete movie", "Movie was deleted successful"), queryData.refetch();
        }
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>({
            handleSearch,
            ...queryData,
            searchTerm,
            deleteAsync,
            createAsync
        }), [
        queryData,
        searchTerm,
        deleteAsync,
        createAsync
    ]);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ getGenresList),
/* harmony export */   "R": () => (/* binding */ getGenresListEach)
/* harmony export */ });
const getGenresListEach = (index, lenght, name)=>index + 1 === lenght ? name : name + "";
const getGenresList = (array)=>array.map((i)=>i.name).join(", ");


/***/ }),

/***/ 6535:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_screens_admin_movies_MovieList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(378);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_screens_admin_movies_MovieList__WEBPACK_IMPORTED_MODULE_1__]);
_components_screens_admin_movies_MovieList__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const MoviesListPage = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_screens_admin_movies_MovieList__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {});
};
MoviesListPage.isOnlyAdmin = true;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MoviesListPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 4041:
/***/ ((module) => {

module.exports = require("react-icons/md");

/***/ }),

/***/ 9012:
/***/ ((module) => {

module.exports = require("react-loading-skeleton");

/***/ }),

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 1424:
/***/ ((module) => {

module.exports = require("react-redux-toastr");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,512,638,669,517,422,464,463], () => (__webpack_exec__(6535)));
module.exports = __webpack_exports__;

})();