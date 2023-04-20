exports.id = 441;
exports.ids = [441];
exports.modules = {

/***/ 8249:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "favoriteButton_button__cTJ3g",
	"animate": "favoriteButton_animate__I4jCg",
	"heart-burst": "favoriteButton_heart-burst__wWkgs"
};


/***/ }),

/***/ 5440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/heart-animation.45ff2efe.png","height":100,"width":2900,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAABlBMVEXaNFbbOV02h7KcAAAAAnRSTlMQF7+CWq4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAPSURBVHicY2BkZGRkAAIAACMABcniKdwAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":1});

/***/ }),

/***/ 6911:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _favorites_useFavorites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9488);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(774);
/* harmony import */ var _utils_toast_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4460);
/* harmony import */ var _favoriteButton_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8249);
/* harmony import */ var _favoriteButton_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_favoriteButton_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _heart_animation_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5440);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_favorites_useFavorites__WEBPACK_IMPORTED_MODULE_2__, _services_user_service__WEBPACK_IMPORTED_MODULE_4__]);
([_favorites_useFavorites__WEBPACK_IMPORTED_MODULE_2__, _services_user_service__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const FavoriteButton = ({ movieId  })=>{
    const [isSmashed, setIsSmashed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { favorites , refetch  } = (0,_favorites_useFavorites__WEBPACK_IMPORTED_MODULE_2__/* .useFavorites */ .r)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!favorites) return;
        const isHasMovie = favorites.some((f)=>f._id === movieId);
        if (isSmashed !== isHasMovie) setIsSmashed(isHasMovie);
    }, [
        favorites,
        isSmashed,
        movieId
    ]);
    const { mutateAsync  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)("update favorites", ()=>_services_user_service__WEBPACK_IMPORTED_MODULE_4__/* .userService.toggleFavorite */ .W.toggleFavorite(movieId), {
        onError: (error)=>{
            (0,_utils_toast_error__WEBPACK_IMPORTED_MODULE_5__/* .toastError */ ._)(error, "Update favorite list");
        },
        onSuccess: ()=>{
            setIsSmashed(!isSmashed);
            refetch();
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
        onClick: ()=>mutateAsync(),
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()((_favoriteButton_module_scss__WEBPACK_IMPORTED_MODULE_8___default().button), {
            [(_favoriteButton_module_scss__WEBPACK_IMPORTED_MODULE_8___default().animate)]: isSmashed
        }),
        style: {
            backgroundImage: !_heart_animation_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z ? `url('../media/heart-animation.png')` : `url(${_heart_animation_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"].src */ .Z.src})`
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FavoriteButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": () => (/* binding */ useAuth)
});

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./app/hooks/useTypesSelector.ts

const useTypesSelector = external_react_redux_.useSelector;

;// CONCATENATED MODULE: ./app/hooks/useAuth.ts

const useAuth = ()=>useTypesSelector((state)=>state.user);


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