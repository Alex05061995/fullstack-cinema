"use strict";
exports.id = 34;
exports.ids = [34];
exports.modules = {

/***/ 3074:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ useActions)
/* harmony export */ });
/* harmony import */ var _store_rootActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2554);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_rootActions__WEBPACK_IMPORTED_MODULE_0__]);
_store_rootActions__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const useActions = ()=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    return (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.bindActionCreators)(_store_rootActions__WEBPACK_IMPORTED_MODULE_0__/* .allActions */ .l, dispatch), [
        dispatch
    ]);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ 2554:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ allActions)
/* harmony export */ });
/* harmony import */ var _user_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6028);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_user_user_actions__WEBPACK_IMPORTED_MODULE_0__]);
_user_user_actions__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const allActions = {
    ..._user_user_actions__WEBPACK_IMPORTED_MODULE_0__
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6028:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkAuth": () => (/* binding */ checkAuth),
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "logout": () => (/* binding */ logout),
/* harmony export */   "register": () => (/* binding */ register)
/* harmony export */ });
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4807);
/* harmony import */ var _utils_toast_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4460);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var api_api_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6358);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1424);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__]);
_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





/*regist*/ const register = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)("auth/register", async ({ email , password  }, { rejectWithValue  })=>{
    try {
        const response = await _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__/* .AuthService.register */ .e.register(email, password);
        react_redux_toastr__WEBPACK_IMPORTED_MODULE_3__.toastr.success("Registration", "Complete Successfully");
        return response.data;
    } catch (e) {
        (0,_utils_toast_error__WEBPACK_IMPORTED_MODULE_1__/* .toastError */ ._)(e);
        return rejectWithValue(e);
    }
});
/*logim*/ const login = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)("auth/login", async ({ email , password  }, { rejectWithValue  })=>{
    try {
        const response = await _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__/* .AuthService.login */ .e.login(email, password);
        react_redux_toastr__WEBPACK_IMPORTED_MODULE_3__.toastr.success("Login", "Complete Successfully");
        return response.data;
    } catch (e) {
        (0,_utils_toast_error__WEBPACK_IMPORTED_MODULE_1__/* .toastError */ ._)(e);
        return rejectWithValue(e);
    }
});
/*logOut*/ const logout = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)("auth/logout", async ()=>{
    await _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__/* .AuthService.logout */ .e.logout();
});
/*checkAuth*/ const checkAuth = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)("auth/check-auth", async (_, { dispatch , rejectWithValue  })=>{
    try {
        const response = await _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__/* .AuthService.getNewTOkens */ .e.getNewTOkens();
        return response.data;
    } catch (e) {
        if ((0,api_api_helpers__WEBPACK_IMPORTED_MODULE_4__/* .errorCatch */ .l)(e) === "jwt expired") {
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_3__.toastr.error("LogOut", "You authorization is finished, sing in again!");
            dispatch(logout());
        }
        return rejectWithValue(e);
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;