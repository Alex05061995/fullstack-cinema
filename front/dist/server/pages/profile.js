(() => {
var exports = {};
exports.id = 277;
exports.ids = [277];
exports.modules = {

/***/ 6561:
/***/ ((module) => {

// Exports
module.exports = {
	"form": "profile_form__GixSZ"
};


/***/ }),

/***/ 4074:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5641);
/* harmony import */ var _components_ui_FormElement_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3141);
/* harmony import */ var _components_ui_Heading_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8135);
/* harmony import */ var _components_ui_SkeletonLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9730);
/* harmony import */ var _auth_AuthFields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5618);
/* harmony import */ var _profile_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6561);
/* harmony import */ var _profile_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_profile_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _useProfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5580);
/* harmony import */ var _utils_meta_Meta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9671);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__, _useProfile__WEBPACK_IMPORTED_MODULE_6__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_1__, _useProfile__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Profile = ()=>{
    const { handleSubmit , register , formState , setValue  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)({
        mode: "onChange"
    });
    const { isLoading , onSubmit  } = (0,_useProfile__WEBPACK_IMPORTED_MODULE_6__/* .useProfile */ .U)(setValue);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utils_meta_Meta__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        title: "Profile",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_Heading_Heading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                title: "Profile",
                className: "mb-6"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit(onSubmit),
                className: (_profile_module_scss__WEBPACK_IMPORTED_MODULE_8___default().form),
                children: [
                    isLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_SkeletonLoader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        count: 2
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_auth_AuthFields__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        formState: formState,
                        register: register
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_FormElement_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        children: "Update"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5580:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ useProfile)
/* harmony export */ });
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(774);
/* harmony import */ var _utils_toast_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4460);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1424);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_user_service__WEBPACK_IMPORTED_MODULE_1__]);
_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const useProfile = (setValue)=>{
    const { isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useQuery)([
        "profile"
    ], ()=>_services_user_service__WEBPACK_IMPORTED_MODULE_1__/* .userService.getProfile */ .W.getProfile(), {
        onSuccess: ({ data  })=>{
            setValue("email", data.email);
        },
        onError: (error)=>{
            (0,_utils_toast_error__WEBPACK_IMPORTED_MODULE_2__/* .toastError */ ._)(error, "Get profile");
        }
    });
    const { mutateAsync  } = (0,react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)("update user", (data)=>_services_user_service__WEBPACK_IMPORTED_MODULE_1__/* .userService.updateProfile */ .W.updateProfile(data), {
        onError: (error)=>{
            (0,_utils_toast_error__WEBPACK_IMPORTED_MODULE_2__/* .toastError */ ._)(error, "Update profile");
        },
        onSuccess: ()=>{
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_3__.toastr.success("Update profile", "Update was successful");
        }
    });
    const onSubmit = async (data)=>{
        await mutateAsync(data);
    };
    return {
        onSubmit,
        isLoading
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 774:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ userService)
/* harmony export */ });
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4754);
/* harmony import */ var api_interceptors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8979);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([api_interceptors__WEBPACK_IMPORTED_MODULE_0__]);
api_interceptors__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const userService = {
    async getAll (searchTerm) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .ZP.get((0,_config_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getUsersUrl */ .Il)(""), {
            params: searchTerm ? {
                searchTerm
            } : {}
        });
    },
    async getProfile () {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .ZP.get((0,_config_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getUsersUrl */ .Il)("/profile"));
    },
    async getFavorites () {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .ZP.get((0,_config_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getUsersUrl */ .Il)("profile/favorites"));
    },
    async toggleFavorite (movieId) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"].put */ .ZP.put((0,_config_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getUsersUrl */ .Il)("profile/favorites"), {
            movieId: movieId
        });
    },
    async updateProfile (data) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"].put */ .ZP.put((0,_config_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getUsersUrl */ .Il)("/profile"), data);
    },
    async getById (_id) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .ZP.get((0,_config_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getUsersUrl */ .Il)(`/${_id}`));
    },
    async update (_id, data) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"].put */ .ZP.put((0,_config_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getUsersUrl */ .Il)(`/${_id}`), data);
    },
    async deleteUser (_id) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"]["delete"] */ .ZP["delete"]((0,_config_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getUsersUrl */ .Il)(`/${_id}`));
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2264:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_screens_profile_Profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4074);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_screens_profile_Profile__WEBPACK_IMPORTED_MODULE_1__]);
_components_screens_profile_Profile__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const ProfilePage = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_screens_profile_Profile__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {});
};
ProfilePage.isOnlyUser = true;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfilePage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6593:
/***/ (() => {



/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

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

/***/ 9012:
/***/ ((module) => {

"use strict";
module.exports = require("react-loading-skeleton");

/***/ }),

/***/ 1175:
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ 1424:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux-toastr");

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

/***/ 9915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ }),

/***/ 5641:
/***/ ((module) => {

"use strict";
module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [512,638,517,798,618], () => (__webpack_exec__(2264)));
module.exports = __webpack_exports__;

})();