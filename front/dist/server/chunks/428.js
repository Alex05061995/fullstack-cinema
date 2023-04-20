"use strict";
exports.id = 428;
exports.ids = [428];
exports.modules = {

/***/ 7428:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_screens_favorites_useFavorites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9488);
/* harmony import */ var _MovieList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1277);
/* harmony import */ var _NotAuthFavorites__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4097);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2875);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_screens_favorites_useFavorites__WEBPACK_IMPORTED_MODULE_1__]);
_components_screens_favorites_useFavorites__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const FavoriteMovies = ()=>{
    const { favorites  } = (0,_components_screens_favorites_useFavorites__WEBPACK_IMPORTED_MODULE_1__/* .useFavorites */ .r)();
    const { user , isLoading  } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__/* .useAuth */ .a)();
    // if (!user) {
    // 	return (
    // 		<div>
    // 			<NotAuthFavorites />;
    // 		</div>
    // 	);
    // }
    return(// <div>
    // 	{isLoading ? (
    // 		<div className="mt-11">
    // 			<SkeletonLoader count={3} className="h-28 mb-4" />
    // 		</div>
    // 	) :
    // 		 (<MovieList
    // 			movies={favorites?.slice(0, 3) || []}
    // 			title="Favorites"
    // 			link="/favorites"
    // 		/>)
    // 	}
    // </div>
    // <MovieList
    // 	movies={favorites?.slice(0, 3) || []}
    // 	title="Favorites"
    // 	link="/favorites"
    // />
    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        children: !favorites || isLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NotAuthFavorites__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}) : !isLoading && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MovieList__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            movies: favorites?.slice(0, 3) || [],
            title: "Favorites",
            link: "/favorites"
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FavoriteMovies);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const NotAuthFavorites = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "mt-11 bg-grey-700 bg-opacity-20 py-3 px-5 rounded-lg text-white text-opacity-80",
        children: "Для просмотра избранных фильмов нужно авторизоваться!"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotAuthFavorites);


/***/ })

};
;