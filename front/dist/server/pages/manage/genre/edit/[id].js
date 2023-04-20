"use strict";
(() => {
var exports = {};
exports.id = 743;
exports.ids = [743,470];
exports.modules = {

/***/ 6495:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _extends;
    }
}));
function extends_() {
    extends_ = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return extends_.apply(this, arguments);
}
function _extends() {
    return extends_.apply(this, arguments);
}


/***/ }),

/***/ 7393:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5641);
/* harmony import */ var string_strip_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1127);
/* harmony import */ var _components_ui_AdminNavifation_AdminNavigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6263);
/* harmony import */ var _components_ui_FormElement_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3141);
/* harmony import */ var _components_ui_FormElement_Field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4798);
/* harmony import */ var _components_ui_FormElement_SlugField_SlugField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9926);
/* harmony import */ var _components_ui_Heading_Heading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8135);
/* harmony import */ var _components_ui_SkeletonLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9730);
/* harmony import */ var react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5312);
/* harmony import */ var react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_meta_Meta__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9671);
/* harmony import */ var _utils_string_generateSlug__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7725);
/* harmony import */ var _ui_FormElement_admin_form_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6166);
/* harmony import */ var _ui_FormElement_admin_form_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_ui_FormElement_admin_form_module_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _useGenreEdit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2494);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, string_strip_html__WEBPACK_IMPORTED_MODULE_3__, _useGenreEdit__WEBPACK_IMPORTED_MODULE_12__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, string_strip_html__WEBPACK_IMPORTED_MODULE_3__, _useGenreEdit__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const GenreEdit = ()=>{
    const { handleSubmit , register , formState: { errors  } , setValue , getValues , control  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
        mode: "onChange"
    });
    const { isLoading , onSubmit  } = (0,_useGenreEdit__WEBPACK_IMPORTED_MODULE_12__/* .useGenreEdit */ .c)(setValue);
    const DynamicTextEditor = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(null, {
        loadableGenerated: {
            modules: [
                "..\\app\\components\\screens\\admin\\genreEdit\\GenreEdit.tsx -> " + "@/components/ui/FormElement/TextEditor"
            ]
        },
        ssr: false
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utils_meta_Meta__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        title: "Edit genre",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_AdminNavifation_AdminNavigation__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_Heading_Heading__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                title: "Edit genre"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("form", {
                onSubmit: handleSubmit(onSubmit),
                className: (_ui_FormElement_admin_form_module_scss__WEBPACK_IMPORTED_MODULE_13___default().form),
                children: isLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_SkeletonLoader__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    count: 3
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_ui_FormElement_admin_form_module_scss__WEBPACK_IMPORTED_MODULE_13___default().fields),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_FormElement_Field__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    ...register("name", {
                                        required: "Name is required"
                                    }),
                                    placeholder: "Name",
                                    error: errors.name,
                                    style: {
                                        width: "31%"
                                    }
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                    style: {
                                        width: "31%"
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_FormElement_SlugField_SlugField__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        register: register,
                                        error: errors.slug,
                                        generate: ()=>{
                                            setValue("slug", (0,_utils_string_generateSlug__WEBPACK_IMPORTED_MODULE_14__/* .generateSlug */ .G)(getValues("name")));
                                        }
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_FormElement_Field__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    ...register("icon", {
                                        required: "Icon is required"
                                    }),
                                    placeholder: "Icon",
                                    error: errors.icon,
                                    style: {
                                        width: "31%"
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
                            control: control,
                            name: "description",
                            defaultValue: "",
                            render: ({ field: { value , onChange  } , fieldState: { error  }  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DynamicTextEditor, {
                                    onChange: onChange,
                                    value: value,
                                    error: error,
                                    placeholder: "Description"
                                }),
                            rules: {
                                validate: {
                                    required: (v)=>v && (0,string_strip_html__WEBPACK_IMPORTED_MODULE_3__.stripHtml)(v).result.length > 0 || "Description is required"
                                }
                            }
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_FormElement_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            children: "Update"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GenreEdit);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2494:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ useGenreEdit)
/* harmony export */ });
/* harmony import */ var _config_url_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6470);
/* harmony import */ var _services_genre_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4933);
/* harmony import */ var _utils_object_getKeys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4052);
/* harmony import */ var _utils_toast_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4460);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1424);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_genre_service__WEBPACK_IMPORTED_MODULE_0__]);
_services_genre_service__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const useGenreEdit = (setValue)=>{
    const { push , query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const genreId = String(query.id);
    const { isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([
        "genre",
        genreId
    ], ()=>_services_genre_service__WEBPACK_IMPORTED_MODULE_0__/* .GenreService.getById */ .c.getById(genreId), {
        onSuccess: ({ data  })=>{
            (0,_utils_object_getKeys__WEBPACK_IMPORTED_MODULE_5__/* .getKeys */ .R)(data).forEach((key)=>{
                setValue(key, data[key]);
            });
        },
        onError: (error)=>{
            (0,_utils_toast_error__WEBPACK_IMPORTED_MODULE_1__/* .toastError */ ._)(error, "Get genre");
        },
        enabled: !!query.id
    });
    const { mutateAsync  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)("update genre", (data)=>_services_genre_service__WEBPACK_IMPORTED_MODULE_0__/* .GenreService.update */ .c.update(genreId, data), {
        onError: (error)=>{
            (0,_utils_toast_error__WEBPACK_IMPORTED_MODULE_1__/* .toastError */ ._)(error, "Update genre");
        },
        onSuccess: ()=>{
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__.toastr.success("Update genre", "Update was successful");
            push((0,_config_url_config__WEBPACK_IMPORTED_MODULE_6__/* .getAdminUrl */ .A7)("genres"));
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

/***/ 6470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A7": () => (/* binding */ getAdminUrl),
/* harmony export */   "F_": () => (/* binding */ getActorUrl),
/* harmony export */   "Xl": () => (/* binding */ getMovieUrl),
/* harmony export */   "i8": () => (/* binding */ getGenreUrl),
/* harmony export */   "wk": () => (/* binding */ getAdminHomeUrl)
/* harmony export */ });
const getMovieUrl = (slug)=>`/movie/${slug}`;
const getGenreUrl = (slug)=>`/genre/${slug}`;
const getActorUrl = (slug)=>`/actor/${slug}`;
const getAdminUrl = (url)=>`/manage/${url}`;
const getAdminHomeUrl = ()=>getAdminUrl("").slice(0, -1);


/***/ }),

/***/ 4933:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ GenreService)
/* harmony export */ });
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4754);
/* harmony import */ var api_interceptors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8979);
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
    async getCollect (searchTerm) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* .axiosClassic.get */ .vV.get((0,_config_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getGanresUrl */ .R0)("collections"), {
            params: searchTerm ? {
                searchTerm
            } : {}
        });
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

/***/ 3081:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_screens_admin_genreEdit_GenreEdit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7393);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_screens_admin_genreEdit_GenreEdit__WEBPACK_IMPORTED_MODULE_1__]);
_components_screens_admin_genreEdit_GenreEdit__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const GenreEditPage = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_screens_admin_genreEdit_GenreEdit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {});
};
GenreEditPage.isOnlyAdmin = true;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GenreEditPage);

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

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ }),

/***/ 1127:
/***/ ((module) => {

module.exports = import("string-strip-html");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,152,512,638,517,422,798,410], () => (__webpack_exec__(3081)));
module.exports = __webpack_exports__;

})();