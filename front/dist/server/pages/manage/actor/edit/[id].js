"use strict";
(() => {
var exports = {};
exports.id = 239;
exports.ids = [239];
exports.modules = {

/***/ 3425:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5312);
/* harmony import */ var react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5641);
/* harmony import */ var _components_ui_AdminNavifation_AdminNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6263);
/* harmony import */ var _components_ui_FormElement_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3141);
/* harmony import */ var _components_ui_FormElement_Field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4798);
/* harmony import */ var _components_ui_FormElement_SlugField_SlugField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9926);
/* harmony import */ var _components_ui_FormElement_UploadField_UploadField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7509);
/* harmony import */ var _components_ui_Heading_Heading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8135);
/* harmony import */ var _components_ui_SkeletonLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9730);
/* harmony import */ var _utils_meta_Meta__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9671);
/* harmony import */ var _utils_string_generateSlug__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7725);
/* harmony import */ var _ui_FormElement_admin_form_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6166);
/* harmony import */ var _ui_FormElement_admin_form_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_ui_FormElement_admin_form_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _useActorEdit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8493);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _components_ui_FormElement_UploadField_UploadField__WEBPACK_IMPORTED_MODULE_7__, _useActorEdit__WEBPACK_IMPORTED_MODULE_11__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _components_ui_FormElement_UploadField_UploadField__WEBPACK_IMPORTED_MODULE_7__, _useActorEdit__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const ActorEdit = ()=>{
    const { handleSubmit , register , formState: { errors  } , setValue , getValues , control  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
        mode: "onChange"
    });
    const { isLoading , onSubmit  } = (0,_useActorEdit__WEBPACK_IMPORTED_MODULE_11__/* .useActorEdit */ .P)(setValue);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utils_meta_Meta__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        title: "Edit genre",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_AdminNavifation_AdminNavigation__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_Heading_Heading__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                title: "Edit genre"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("form", {
                onSubmit: handleSubmit(onSubmit),
                className: (_ui_FormElement_admin_form_module_scss__WEBPACK_IMPORTED_MODULE_12___default().form),
                children: isLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_SkeletonLoader__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    count: 3
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_ui_FormElement_admin_form_module_scss__WEBPACK_IMPORTED_MODULE_12___default().fields),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_FormElement_Field__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    ...register("name", {
                                        required: "Name is required"
                                    }),
                                    placeholder: "Name",
                                    error: errors.name,
                                    style: {
                                        width: "31%"
                                    }
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_FormElement_SlugField_SlugField__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    register: register,
                                    error: errors.slug,
                                    generate: ()=>{
                                        setValue("slug", (0,_utils_string_generateSlug__WEBPACK_IMPORTED_MODULE_13__/* .generateSlug */ .G)(getValues("name") || "")); //
                                    }
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_2__.Controller, {
                                    control: control,
                                    name: "photo",
                                    defaultValue: "",
                                    render: ({ field: { value , onChange  } , fieldState: { error  }  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_FormElement_UploadField_UploadField__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                            onChange: onChange,
                                            error: error,
                                            folder: "actors",
                                            placeholder: "Photo",
                                            value: value
                                        }),
                                    rules: {
                                        required: "Photo is required"
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_FormElement_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            children: "Update"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActorEdit);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8493:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ useActorEdit)
/* harmony export */ });
/* harmony import */ var _config_url_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6470);
/* harmony import */ var _services_actor_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8361);
/* harmony import */ var _utils_object_getKeys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4052);
/* harmony import */ var _utils_toast_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4460);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1424);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_actor_service__WEBPACK_IMPORTED_MODULE_0__]);
_services_actor_service__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const useActorEdit = (setValue)=>{
    const { push , query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const actorId = String(query.id);
    const { isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([
        "actor",
        actorId
    ], ()=>_services_actor_service__WEBPACK_IMPORTED_MODULE_0__/* .ActorService.getById */ .V.getById(actorId), {
        onSuccess: ({ data  })=>{
            (0,_utils_object_getKeys__WEBPACK_IMPORTED_MODULE_5__/* .getKeys */ .R)(data).forEach((key)=>{
                setValue(key, data[key]);
            });
        },
        onError: (error)=>{
            (0,_utils_toast_error__WEBPACK_IMPORTED_MODULE_1__/* .toastError */ ._)(error, "Get actor");
        },
        enabled: !!query.id
    });
    const { mutateAsync  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)("update actor", (data)=>_services_actor_service__WEBPACK_IMPORTED_MODULE_0__/* .ActorService.update */ .V.update(actorId, data), {
        onError: (error)=>{
            (0,_utils_toast_error__WEBPACK_IMPORTED_MODULE_1__/* .toastError */ ._)(error, "Update actor");
        },
        onSuccess: ()=>{
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__.toastr.success("Update actor", "Update was successful");
            push((0,_config_url_config__WEBPACK_IMPORTED_MODULE_6__/* .getAdminUrl */ .A7)("actors"));
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

/***/ 3940:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_screens_admin_actorEdit_ActorEdit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3425);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_screens_admin_actorEdit_ActorEdit__WEBPACK_IMPORTED_MODULE_1__]);
_components_screens_admin_actorEdit_ActorEdit__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const ActorEditPage = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_screens_admin_actorEdit_ActorEdit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {});
};
ActorEditPage.isOnlyAdmin = true;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActorEditPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

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

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,636,675,512,638,470,517,422,798,410,60], () => (__webpack_exec__(3940)));
module.exports = __webpack_exports__;

})();