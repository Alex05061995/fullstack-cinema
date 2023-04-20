(() => {
var exports = {};
exports.id = 473;
exports.ids = [473];
exports.modules = {

/***/ 8190:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Auth_wrapper__q3sYo",
	"buttons": "Auth_buttons__PYWyy"
};


/***/ }),

/***/ 6060:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2875);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
/* harmony import */ var _useAuthRedirect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3331);
/* harmony import */ var _Auth_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8190);
/* harmony import */ var _Auth_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Auth_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_meta_Meta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9671);
/* harmony import */ var _components_ui_Heading_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8135);
/* harmony import */ var _components_ui_FormElement_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3141);
/* harmony import */ var _AuthFields__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5618);
/* harmony import */ var _hooks_useActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3074);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _hooks_useActions__WEBPACK_IMPORTED_MODULE_9__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _hooks_useActions__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const Auth = ()=>{
    (0,_useAuthRedirect__WEBPACK_IMPORTED_MODULE_4__/* .UseAuthRedirect */ .R)();
    const { isLoading  } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_1__/* .useAuth */ .a)();
    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("login");
    const { register: registerInput , handleSubmit , formState , reset  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
        mode: "onChange"
    });
    const { login , register  } = (0,_hooks_useActions__WEBPACK_IMPORTED_MODULE_9__/* .useActions */ .o)();
    const onSubmit = (data)=>{
        if (type === "login") login(data);
        else if (type === "register") register(data);
        reset();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_utils_meta_Meta__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        title: "Auth",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
            className: (_Auth_module_scss__WEBPACK_IMPORTED_MODULE_10___default().wrapper),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit(onSubmit),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_Heading_Heading__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        title: "Auth",
                        className: "mb-6"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AuthFields__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        formState: formState,
                        register: registerInput,
                        isPasswordRequired: true
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Auth_module_scss__WEBPACK_IMPORTED_MODULE_10___default().buttons),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_FormElement_Button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                type: "submit",
                                onClick: ()=>setType("login"),
                                disabled: isLoading,
                                children: "Login"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_FormElement_Button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                type: "submit",
                                onClick: ()=>setType("register"),
                                disabled: isLoading,
                                children: "Register"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Auth);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ UseAuthRedirect)
/* harmony export */ });
/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2875);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const UseAuthRedirect = ()=>{
    const { user  } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_0__/* .useAuth */ .a)();
    const { query , push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const redirect = query.redirect ? String(query.redirect) : "/";
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (user) push(redirect);
    }, [
        user,
        redirect,
        push
    ]);
};


/***/ }),

/***/ 519:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_screens_auth_Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6060);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_screens_auth_Auth__WEBPACK_IMPORTED_MODULE_1__]);
_components_screens_auth_Auth__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const AuthPage = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_screens_auth_Auth__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

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

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

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
var __webpack_exports__ = __webpack_require__.X(0, [512,638,517,798,618,34], () => (__webpack_exec__(519)));
module.exports = __webpack_exports__;

})();