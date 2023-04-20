"use strict";
(() => {
var exports = {};
exports.id = 911;
exports.ids = [911];
exports.modules = {

/***/ 5074:
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
/* harmony import */ var _useUsers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4148);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useUsers__WEBPACK_IMPORTED_MODULE_6__]);
_useUsers__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const UserList = ()=>{
    const { isLoading , data , deleteAsync , searchTerm , handleSearch  } = (0,_useUsers__WEBPACK_IMPORTED_MODULE_6__/* .useUsers */ .U)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utils_meta_Meta__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        title: "Users",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_AdminNavifation_AdminNavigation__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_Heading_Heading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                title: "Users"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_AdminTable_AdminHeader_AdminHeader__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                handleSearch: handleSearch,
                searchTerm: searchTerm
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_AdminTable_AdminTable_AdminTable__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                isLoading: isLoading,
                removeHandler: deleteAsync,
                headerItems: [
                    "Email",
                    "Date register"
                ],
                tableItems: data || []
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4148:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ useUsers)
/* harmony export */ });
/* harmony import */ var _config_url_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6470);
/* harmony import */ var _hooks_useDebounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3669);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(774);
/* harmony import */ var _utils_date_convertMogoDbDate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6237);
/* harmony import */ var _utils_toast_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4460);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1424);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_user_service__WEBPACK_IMPORTED_MODULE_1__]);
_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const useUsers = ()=>{
    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const debouncedSearch = (0,_hooks_useDebounce__WEBPACK_IMPORTED_MODULE_0__/* .useDebounce */ .N)(searchTerm, 500);
    const queryData = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)([
        "user list",
        debouncedSearch
    ], ()=>_services_user_service__WEBPACK_IMPORTED_MODULE_1__/* .userService.getAll */ .W.getAll(debouncedSearch), {
        select: ({ data  })=>data.map((user)=>({
                    _id: user._id,
                    editUrl: (0,_config_url_config__WEBPACK_IMPORTED_MODULE_6__/* .getAdminUrl */ .A7)(`user/edit/${user._id}`),
                    items: [
                        user.email,
                        (0,_utils_date_convertMogoDbDate__WEBPACK_IMPORTED_MODULE_7__/* .convertMondoDbDate */ .t)(user.createdAt)
                    ]
                })),
        onError: (error)=>{
            (0,_utils_toast_error__WEBPACK_IMPORTED_MODULE_2__/* .toastError */ ._)(error, "User list");
        }
    });
    const handleSearch = (e)=>{
        setSearchTerm(e.target.value);
    };
    const { mutateAsync: deleteAsync  } = (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useMutation)("delete user", (userId)=>_services_user_service__WEBPACK_IMPORTED_MODULE_1__/* .userService.deleteUser */ .W.deleteUser(userId), {
        onError: (error)=>{
            (0,_utils_toast_error__WEBPACK_IMPORTED_MODULE_2__/* .toastError */ ._)(error, "Delete User");
        },
        onSuccess: ()=>{
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_5__.toastr.success("Delete user", "User was deleted successful"), queryData.refetch();
        }
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>({
            handleSearch,
            ...queryData,
            searchTerm,
            deleteAsync
        }), [
        queryData,
        searchTerm,
        deleteAsync
    ]);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 774:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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

/***/ 6237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ convertMondoDbDate)
/* harmony export */ });
const convertMondoDbDate = (date)=>new Date(date).toLocaleDateString("ru");


/***/ }),

/***/ 5084:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_screens_admin_users_UserList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5074);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_screens_admin_users_UserList__WEBPACK_IMPORTED_MODULE_1__]);
_components_screens_admin_users_UserList__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const UserListPage = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_screens_admin_users_UserList__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {});
};
UserListPage.isOnlyAdmin = true;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserListPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [664,512,638,517,422,464,463], () => (__webpack_exec__(5084)));
module.exports = __webpack_exports__;

})();