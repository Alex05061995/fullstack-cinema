"use strict";
exports.id = 638;
exports.ids = [638];
exports.modules = {

/***/ 6358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ errorCatch),
/* harmony export */   "w": () => (/* binding */ getContentType)
/* harmony export */ });
const getContentType = ()=>({
        "Content-Type": "application/json"
    });
const errorCatch = (error)=>error.response && error.response.data ? typeof error.response.data.message === "object" ? error.response.data.message[0] : error.response.data.message : error.message;


/***/ }),

/***/ 8979:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "vV": () => (/* binding */ axiosClassic)
/* harmony export */ });
/* unused harmony export instance */
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4754);
/* harmony import */ var _services_auth_auth_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2833);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4807);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9915);
/* harmony import */ var _api_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6358);
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3789);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_auth_auth_helper__WEBPACK_IMPORTED_MODULE_0__, _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_2__, js_cookie__WEBPACK_IMPORTED_MODULE_3__]);
([_services_auth_auth_helper__WEBPACK_IMPORTED_MODULE_0__, _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_2__, js_cookie__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const axiosClassic = axios__WEBPACK_IMPORTED_MODULE_2__["default"].create({
    baseURL: _config_constants__WEBPACK_IMPORTED_MODULE_4__/* .IS_PRODUCTION */ .Mw ? _config_api_config__WEBPACK_IMPORTED_MODULE_5__/* .serverApiUrl */ .gH : _config_api_config__WEBPACK_IMPORTED_MODULE_5__/* .apiUrl */ .JW,
    headers: (0,_api_helpers__WEBPACK_IMPORTED_MODULE_6__/* .getContentType */ .w)()
});
const instance = axios__WEBPACK_IMPORTED_MODULE_2__["default"].create({
    baseURL: _config_api_config__WEBPACK_IMPORTED_MODULE_5__/* .apiUrl */ .JW,
    headers: (0,_api_helpers__WEBPACK_IMPORTED_MODULE_6__/* .getContentType */ .w)()
});
instance.interceptors.request.use((config)=>{
    const accessToken = js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].get("accessToken");
    if (config.headers && accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});
instance.interceptors.response.use((config)=>config, async (error)=>{
    const originalRequest = error.config;
    if ((error.response.status === 401 || (0,_api_helpers__WEBPACK_IMPORTED_MODULE_6__/* .errorCatch */ .l)(error) === "jwt expired" || (0,_api_helpers__WEBPACK_IMPORTED_MODULE_6__/* .errorCatch */ .l)(error) === "jwt must be provided") && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            await _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__/* .AuthService.getNewTOkens */ .e.getNewTOkens();
            return instance.request(originalRequest);
        } catch (e) {
            if ((0,_api_helpers__WEBPACK_IMPORTED_MODULE_6__/* .errorCatch */ .l)(e) === "jwt expired") (0,_services_auth_auth_helper__WEBPACK_IMPORTED_MODULE_0__/* .removeTokensStorage */ .Pf)();
        }
    }
    throw error;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (instance);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Il": () => (/* binding */ getUsersUrl),
/* harmony export */   "JW": () => (/* binding */ apiUrl),
/* harmony export */   "N6": () => (/* binding */ getAuthUrl),
/* harmony export */   "R0": () => (/* binding */ getGanresUrl),
/* harmony export */   "bc": () => (/* binding */ getActorssUrl),
/* harmony export */   "gH": () => (/* binding */ serverApiUrl),
/* harmony export */   "xk": () => (/* binding */ getMoviessUrl)
/* harmony export */ });
/* unused harmony exports getActorsBySlugUrl, getActorUrl, getRatingssUrl */
const apiUrl = `${"http://localhost:3000"}/api`;
const serverApiUrl = `${"http://localhost:5000"}/api`;
const getAuthUrl = (string)=>`/auth/${string}`;
const getUsersUrl = (string)=>`/users/${string}`;
const getMoviessUrl = (string)=>`/movies/${string}`;
const getGanresUrl = (string)=>`/genres/${string}`;
const getActorssUrl = (string)=>`/actors/${string}`;
const getActorsBySlugUrl = (string)=>`/actors/by-slug/${string}/`;
const getActorUrl = (string)=>`/actor/${string}`;
const getRatingssUrl = (string)=>`/ratings/${string}`;


/***/ }),

/***/ 3789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mw": () => (/* binding */ IS_PRODUCTION),
/* harmony export */   "z": () => (/* binding */ accentColor)
/* harmony export */ });
/* unused harmony exports bgColor, IS_SERVER, IS_CLIENT */
const accentColor = "#E30B13";
const bgColor = "#191B1F";
const IS_SERVER = (/* unused pure expression or super */ null && ("undefined" === "undefined"));
const IS_CLIENT = (/* unused pure expression or super */ null && ("undefined" !== "undefined"));
const IS_PRODUCTION = "production" === "production";


/***/ }),

/***/ 2833:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pf": () => (/* binding */ removeTokensStorage),
/* harmony export */   "RY": () => (/* binding */ saveToStorage)
/* harmony export */ });
/* unused harmony export saveTokensStorage */
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__]);
js_cookie__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const saveTokensStorage = (data)=>{
    js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set("accessToken", data.accessToken);
    js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set("refreshToken", data.refreshToken);
};
const saveToStorage = (data)=>{
    saveTokensStorage(data);
    localStorage.setItem("user", JSON.stringify(data.user));
};
const removeTokensStorage = ()=>{
    js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].remove("accessToken");
    js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].remove("refreshToken");
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4807:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4754);
/* harmony import */ var api_api_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6358);
/* harmony import */ var api_interceptors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8979);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
/* harmony import */ var _auth_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2833);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([api_interceptors__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_1__, _auth_helper__WEBPACK_IMPORTED_MODULE_2__]);
([api_interceptors__WEBPACK_IMPORTED_MODULE_0__, js_cookie__WEBPACK_IMPORTED_MODULE_1__, _auth_helper__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const AuthService = {
    async register (email, password) {
        const response = await api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* .axiosClassic.post */ .vV.post((0,_config_api_config__WEBPACK_IMPORTED_MODULE_3__/* .getAuthUrl */ .N6)("register"), {
            email,
            password
        });
        if (response.data.accessToken) {
            (0,_auth_helper__WEBPACK_IMPORTED_MODULE_2__/* .saveToStorage */ .RY)(response.data);
        }
        return response;
    },
    async login (email, password) {
        const response = await api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* .axiosClassic.post */ .vV.post((0,_config_api_config__WEBPACK_IMPORTED_MODULE_3__/* .getAuthUrl */ .N6)("login"), {
            email,
            password
        });
        if (response.data.accessToken) {
            (0,_auth_helper__WEBPACK_IMPORTED_MODULE_2__/* .saveToStorage */ .RY)(response.data);
        }
        return response;
    },
    async logout () {
        (0,_auth_helper__WEBPACK_IMPORTED_MODULE_2__/* .removeTokensStorage */ .Pf)();
        localStorage.removeItem("user");
    },
    async getNewTOkens () {
        const refreshToken = js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("refreshToken");
        const response = await api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* .axiosClassic.post */ .vV.post((0,_config_api_config__WEBPACK_IMPORTED_MODULE_3__/* .getAuthUrl */ .N6)("login/access-token"), {
            refreshToken
        }, {
            headers: (0,api_api_helpers__WEBPACK_IMPORTED_MODULE_4__/* .getContentType */ .w)()
        });
        if (response.data.accessToken) {
            (0,_auth_helper__WEBPACK_IMPORTED_MODULE_2__/* .saveToStorage */ .RY)(response.data);
        }
        return response;
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;