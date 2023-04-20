(() => {
var exports = {};
exports.id = 226;
exports.ids = [226,197];
exports.modules = {

/***/ 8903:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "contentList_list__z4yFg",
	"name": "contentList_name__zykk6",
	"links": "contentList_links__mj1WZ",
	"href": "contentList_href__8Jkvv"
};


/***/ }),

/***/ 1158:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "content_content__0eJwC",
	"rating": "content_rating__KiwUq",
	"details": "content_details__o5HQF"
};


/***/ }),

/***/ 9175:
/***/ ((module) => {

// Exports
module.exports = {
	"banner": "bunner_banner__PxazH"
};


/***/ }),

/***/ 3972:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_MaterialIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5994);
/* harmony import */ var _config_url_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4851);
/* harmony import */ var _ContentList_ContentList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5214);
/* harmony import */ var _content_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1158);
/* harmony import */ var _content_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_content_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _FavoriteButton_FavoriteButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(606);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FavoriteButton_FavoriteButton__WEBPACK_IMPORTED_MODULE_3__]);
_FavoriteButton_FavoriteButton__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Content = ({ movie  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_content_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
                children: movie.title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_content_module_scss__WEBPACK_IMPORTED_MODULE_4___default().details),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        children: [
                            movie.parametrs.year,
                            " . "
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        children: [
                            movie.parametrs.country,
                            " . "
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        children: [
                            movie.parametrs.duration,
                            " min. "
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ContentList_ContentList__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                name: "Genres",
                links: movie.genres.slice(0, 3).map((g)=>({
                        _id: g._id,
                        link: (0,_config_url_config__WEBPACK_IMPORTED_MODULE_5__/* .getGenreUrl */ .i8)(g.slug),
                        title: g.name
                    }))
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ContentList_ContentList__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                name: "Actors",
                links: movie.actors.slice(0, 3).map((a)=>({
                        _id: a._id,
                        link: (0,_config_url_config__WEBPACK_IMPORTED_MODULE_5__/* .getActorUrl */ .F_)(a.slug),
                        title: a.name
                    }))
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_content_module_scss__WEBPACK_IMPORTED_MODULE_4___default().rating),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_MaterialIcon__WEBPACK_IMPORTED_MODULE_1__/* .MaterialIcon */ .O, {
                        name: "MdStarRate"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        children: movie.rating.toFixed(1)
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_FavoriteButton_FavoriteButton__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                movieId: movie._id
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contentList_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8903);
/* harmony import */ var _contentList_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_contentList_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




const ContentList = ({ links , name  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: (_contentList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().list),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: (_contentList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().link),
            children: links.map((link, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            className: (_contentList_module_scss__WEBPACK_IMPORTED_MODULE_3___default().href),
                            href: link.link,
                            children: [
                                name,
                                " : ",
                                link.title
                            ]
                        }),
                        index + 1 !== links.length ? "," : ""
                    ]
                }, link.link))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentList);


/***/ }),

/***/ 4450:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_meta_Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5495);
/* harmony import */ var _components_ui_Banner_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7263);
/* harmony import */ var _components_ui_Heading_SubHeading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4061);
/* harmony import */ var _components_ui_Gallery_Gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7793);
/* harmony import */ var _Content_Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3972);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _useUpdateCountOpened__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8916);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Content_Content__WEBPACK_IMPORTED_MODULE_5__, _useUpdateCountOpened__WEBPACK_IMPORTED_MODULE_7__]);
([_Content_Content__WEBPACK_IMPORTED_MODULE_5__, _useUpdateCountOpened__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






// import VideoPlayer from '@/components/ui/Video-player/Video-player'


const DynamicPlayer = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(null, {
    loadableGenerated: {
        modules: [
            "..\\app\\components\\screens\\single-movie\\SingleMovie.tsx -> " + "@/components/ui/Video-player/Video-player"
        ]
    },
    ssr: false
});
const DynamicRating = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(null, {
    loadableGenerated: {
        modules: [
            "..\\app\\components\\screens\\single-movie\\SingleMovie.tsx -> " + "./rate-movie/RateMovie"
        ]
    },
    ssr: false
});
const SingleMovie = ({ movie , similarMovies  })=>{
    (0,_useUpdateCountOpened__WEBPACK_IMPORTED_MODULE_7__/* .useUpdateCountOpened */ .X)(movie.slug);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_utils_meta_Meta__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        title: movie?.title || "",
        description: `Watch ${movie?.title}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_Banner_Banner__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                image: movie?.bigPoster || "",
                Detail: ()=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Content_Content__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        movie: movie
                    })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DynamicPlayer, {
                slug: movie.slug,
                videoSource: movie.videoUrl
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mt-12",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_Heading_SubHeading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        title: "Similar"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_Gallery_Gallery__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        items: similarMovies
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DynamicRating, {
                slug: movie.slug,
                id: movie._id
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleMovie);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8916:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ useUpdateCountOpened)
/* harmony export */ });
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6962);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_movie_service__WEBPACK_IMPORTED_MODULE_0__]);
_services_movie_service__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const useUpdateCountOpened = (slug)=>{
    const { mutateAsync  } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)("update count opened", ()=>_services_movie_service__WEBPACK_IMPORTED_MODULE_0__/* .MovieService.updateCountOpened */ .u.updateCountOpened(slug));
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        mutateAsync();
    }, []);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bunner_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9175);
/* harmony import */ var _bunner_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bunner_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);



const Banner = ({ image , Detail  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_bunner_module_scss__WEBPACK_IMPORTED_MODULE_2___default().banner),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                src: image,
                draggable: false,
                fill: true,
                className: "image-like-bg object-top",
                unoptimized: true,
                priority: true,
                alt: ""
            }),
            Detail && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Detail, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);


/***/ }),

/***/ 5838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Error404)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_Heading_Heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77);
/* harmony import */ var _utils_meta_Meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5495);



function Error404() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_utils_meta_Meta__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        title: "Page not found",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ui_Heading_Heading__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            title: "404 - Page not found"
        })
    });
}


/***/ }),

/***/ 7080:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_screens_single_movie_SingleMovie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4450);
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6962);
/* harmony import */ var _config_url_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4851);
/* harmony import */ var _404__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5838);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_screens_single_movie_SingleMovie__WEBPACK_IMPORTED_MODULE_1__, _services_movie_service__WEBPACK_IMPORTED_MODULE_2__]);
([_components_screens_single_movie_SingleMovie__WEBPACK_IMPORTED_MODULE_1__, _services_movie_service__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const ActorPage = ({ similarMovies , movie  })=>{
    return movie ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_screens_single_movie_SingleMovie__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        similarMovies: similarMovies || [],
        movie: movie
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_404__WEBPACK_IMPORTED_MODULE_3__["default"], {});
};
const getStaticPaths = async ()=>{
    try {
        const { data: movies  } = await _services_movie_service__WEBPACK_IMPORTED_MODULE_2__/* .MovieService.getAll */ .u.getAll();
        const paths = movies.map((m)=>({
                params: {
                    slug: m.slug
                }
            }));
        return {
            paths,
            fallback: "blocking"
        };
    } catch (e) {
        return {
            paths: [],
            fallback: false
        };
    }
};
const getStaticProps = async ({ params  })=>{
    try {
        const { data: movie  } = await _services_movie_service__WEBPACK_IMPORTED_MODULE_2__/* .MovieService.getBySlug */ .u.getBySlug(String(params?.slug));
        const { data: dataSimilarMovies  } = await _services_movie_service__WEBPACK_IMPORTED_MODULE_2__/* .MovieService.getByGenres */ .u.getByGenres(movie.genres.map((g)=>g._id));
        const similarMovies = dataSimilarMovies.filter((m)=>m._id !== movie._id).map((m)=>({
                name: m.title,
                posterPath: m.poster,
                link: (0,_config_url_config__WEBPACK_IMPORTED_MODULE_4__/* .getMovieUrl */ .Xl)(m.slug)
            }));
        return {
            props: {
                similarMovies,
                movie
            },
            revalidate: 60
        };
    } catch (e) {
        return {
            props: {},
            notFound: true
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ActorPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

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

/***/ 4041:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/md");

/***/ }),

/***/ 1175:
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,443,675,152,779,494,583,962,248,528,713,433], () => (__webpack_exec__(7080)));
module.exports = __webpack_exports__;

})();