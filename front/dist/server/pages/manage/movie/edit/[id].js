"use strict";
(() => {
var exports = {};
exports.id = 436;
exports.ids = [436];
exports.modules = {

/***/ 7203:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5312);
/* harmony import */ var react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
/* harmony import */ var _components_ui_AdminNavifation_AdminNavigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6263);
/* harmony import */ var _components_ui_FormElement_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3141);
/* harmony import */ var _components_ui_FormElement_Field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4798);
/* harmony import */ var _components_ui_FormElement_SlugField_SlugField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9926);
/* harmony import */ var _components_ui_FormElement_UploadField_UploadField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7509);
/* harmony import */ var _components_ui_Heading_Heading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8135);
/* harmony import */ var _components_ui_SkeletonLoader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9730);
/* harmony import */ var _utils_meta_Meta__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9671);
/* harmony import */ var _utils_string_generateSlug__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7725);
/* harmony import */ var _ui_FormElement_admin_form_module_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6166);
/* harmony import */ var _ui_FormElement_admin_form_module_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_ui_FormElement_admin_form_module_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _useAdminActors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8852);
/* harmony import */ var _useAdminGenres__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1860);
/* harmony import */ var _useMovieEdit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6348);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _components_ui_FormElement_UploadField_UploadField__WEBPACK_IMPORTED_MODULE_8__, _useAdminActors__WEBPACK_IMPORTED_MODULE_12__, _useAdminGenres__WEBPACK_IMPORTED_MODULE_13__, _useMovieEdit__WEBPACK_IMPORTED_MODULE_14__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _components_ui_FormElement_UploadField_UploadField__WEBPACK_IMPORTED_MODULE_8__, _useAdminActors__WEBPACK_IMPORTED_MODULE_12__, _useAdminGenres__WEBPACK_IMPORTED_MODULE_13__, _useMovieEdit__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const MovieEdit = ()=>{
    const { handleSubmit , register , formState: { errors  } , setValue , getValues , control  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
        mode: "onChange"
    });
    const DynamicSelect = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(null, {
        loadableGenerated: {
            modules: [
                "..\\app\\components\\screens\\admin\\movieEdit\\MovieEdit.tsx -> " + "@/components/ui/Select/Select"
            ]
        },
        ssr: false
    });
    const { isLoading , onSubmit  } = (0,_useMovieEdit__WEBPACK_IMPORTED_MODULE_14__/* .useMovieEdit */ .U)(setValue);
    const { data: genres , isLoading: isGenresLoading  } = (0,_useAdminGenres__WEBPACK_IMPORTED_MODULE_13__/* .useAdminGenres */ .X)();
    const { data: actors , isLoading: isActorsLoading  } = (0,_useAdminActors__WEBPACK_IMPORTED_MODULE_12__/* .useAdminActors */ .B)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utils_meta_Meta__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        title: "Edit genre",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_AdminNavifation_AdminNavigation__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_Heading_Heading__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                title: "Edit genre"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("form", {
                onSubmit: handleSubmit(onSubmit),
                className: (_ui_FormElement_admin_form_module_scss__WEBPACK_IMPORTED_MODULE_15___default().form),
                children: isLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_SkeletonLoader__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    count: 3
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_ui_FormElement_admin_form_module_scss__WEBPACK_IMPORTED_MODULE_15___default().fields),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_FormElement_Field__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    ...register("title", {
                                        required: "Title is required"
                                    }),
                                    placeholder: "Title",
                                    error: errors.title,
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
                                            setValue("slug", (0,_utils_string_generateSlug__WEBPACK_IMPORTED_MODULE_16__/* .generateSlug */ .G)(getValues("title")));
                                        }
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_FormElement_Field__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    ...register("parametrs.country", {
                                        required: "Country is required"
                                    }),
                                    placeholder: "Country",
                                    error: errors.parametrs?.country,
                                    style: {
                                        width: "31%"
                                    }
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_FormElement_Field__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    ...register("parametrs.duration", {
                                        required: "Duration is required"
                                    }),
                                    placeholder: "Duration",
                                    error: errors.parametrs?.duration,
                                    style: {
                                        width: "31%"
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                            control: control,
                            name: "genres",
                            render: ({ field , fieldState: { error  }  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DynamicSelect, {
                                    field: field,
                                    options: genres || [],
                                    isLoading: isGenresLoading,
                                    isMulti: true,
                                    placeholder: "Genres",
                                    error: error
                                }),
                            rules: {
                                required: ":Please select at least one genre"
                            }
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                            name: "actors",
                            control: control,
                            rules: {
                                required: "Please select at least one actor!"
                            },
                            render: ({ field , fieldState: { error  }  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DynamicSelect, {
                                    error: error,
                                    field: field,
                                    placeholder: "Actors",
                                    options: actors || [],
                                    isLoading: isActorsLoading,
                                    isMulti: true
                                })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                            control: control,
                            name: "poster",
                            defaultValue: "",
                            render: ({ field: { value , onChange  } , fieldState: { error  }  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_FormElement_UploadField_UploadField__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    onChange: onChange,
                                    error: error,
                                    folder: "movies",
                                    placeholder: "Poster",
                                    value: value
                                }),
                            rules: {
                                required: "Poster is required"
                            }
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                            control: control,
                            name: "bigPoster",
                            defaultValue: "",
                            render: ({ field: { value , onChange  } , fieldState: { error  }  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_FormElement_UploadField_UploadField__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    onChange: onChange,
                                    error: error,
                                    folder: "movies",
                                    placeholder: "Big poster",
                                    value: value
                                }),
                            rules: {
                                required: "Big poster is required"
                            }
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_3__.Controller, {
                            control: control,
                            name: "videoUrl",
                            defaultValue: "",
                            render: ({ field: { value , onChange  } , fieldState: { error  }  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_FormElement_UploadField_UploadField__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    onChange: onChange,
                                    error: error,
                                    folder: "movies",
                                    placeholder: "Video",
                                    value: value,
                                    style: {
                                        marginTop: "-25px"
                                    },
                                    isNoImage: true
                                }),
                            rules: {
                                required: "Video is required"
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieEdit);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8852:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ useAdminActors)
/* harmony export */ });
/* harmony import */ var _services_actor_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8361);
/* harmony import */ var _utils_toast_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4460);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_actor_service__WEBPACK_IMPORTED_MODULE_0__]);
_services_actor_service__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const useAdminActors = ()=>{
    const queryData = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)("List of actor", ()=>_services_actor_service__WEBPACK_IMPORTED_MODULE_0__/* .ActorService.getAll */ .V.getAll(), {
        select: ({ data  })=>data.map((actor)=>({
                    label: actor?.name ? actor?.name : "",
                    value: actor?._id ? actor?._id : "" //
                })),
        onError: (error)=>{
            (0,_utils_toast_error__WEBPACK_IMPORTED_MODULE_1__/* .toastError */ ._)(error, "Actor list");
        }
    });
    return queryData;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1860:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ useAdminGenres)
/* harmony export */ });
/* harmony import */ var _services_genre_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4933);
/* harmony import */ var _utils_toast_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4460);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_genre_service__WEBPACK_IMPORTED_MODULE_0__]);
_services_genre_service__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const useAdminGenres = ()=>{
    const queryData = (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)("List of genre", ()=>_services_genre_service__WEBPACK_IMPORTED_MODULE_0__/* .GenreService.getAll */ .c.getAll(), {
        select: ({ data  })=>data.map((genre)=>({
                    label: genre.name,
                    value: genre._id
                })),
        onError: (error)=>{
            (0,_utils_toast_error__WEBPACK_IMPORTED_MODULE_1__/* .toastError */ ._)(error, "Actor list");
        }
    });
    return queryData;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6348:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ useMovieEdit)
/* harmony export */ });
/* harmony import */ var _config_url_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6470);
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7669);
/* harmony import */ var _utils_object_getKeys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4052);
/* harmony import */ var _utils_toast_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4460);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1424);
/* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_movie_service__WEBPACK_IMPORTED_MODULE_0__]);
_services_movie_service__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const useMovieEdit = (setValue)=>{
    const { push , query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const movieId = String(query.id);
    const { isLoading  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([
        "movie",
        movieId
    ], ()=>_services_movie_service__WEBPACK_IMPORTED_MODULE_0__/* .MovieService.getById */ .u.getById(movieId), {
        onSuccess: ({ data  })=>{
            (0,_utils_object_getKeys__WEBPACK_IMPORTED_MODULE_5__/* .getKeys */ .R)(data).forEach((key)=>{
                setValue(key, data[key]);
            });
        },
        onError: (error)=>{
            (0,_utils_toast_error__WEBPACK_IMPORTED_MODULE_1__/* .toastError */ ._)(error, "Get movie");
        },
        enabled: !!query.id
    });
    const { mutateAsync  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)("update movie", (data)=>_services_movie_service__WEBPACK_IMPORTED_MODULE_0__/* .MovieService.update */ .u.update(movieId, data), {
        onError: (error)=>{
            (0,_utils_toast_error__WEBPACK_IMPORTED_MODULE_1__/* .toastError */ ._)(error, "Update movie");
        },
        onSuccess: ()=>{
            react_redux_toastr__WEBPACK_IMPORTED_MODULE_4__.toastr.success("Update movie", "Update was successful");
            push((0,_config_url_config__WEBPACK_IMPORTED_MODULE_6__/* .getAdminUrl */ .A7)("movies"));
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

/***/ 2349:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_screens_admin_movieEdit_MovieEdit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7203);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_screens_admin_movieEdit_MovieEdit__WEBPACK_IMPORTED_MODULE_1__]);
_components_screens_admin_movieEdit_MovieEdit__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const MovieEditPage = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_screens_admin_movieEdit_MovieEdit__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {});
};
MovieEditPage.isOnlyAdmin = true;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieEditPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [664,636,675,152,512,638,470,669,517,422,798,410,60], () => (__webpack_exec__(2349)));
module.exports = __webpack_exports__;

})();