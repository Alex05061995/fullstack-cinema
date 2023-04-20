(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 1071:
/***/ ((module) => {

// Exports
module.exports = {
	"arrow": "slideArrow_arrow__Ipguh",
	"fade": "slideArrow_fade__k89gK",
	"left": "slideArrow_left__4xSH2",
	"right": "slideArrow_right__7GwOe"
};


/***/ }),

/***/ 7744:
/***/ ((module) => {

// Exports
module.exports = {
	"slider": "slider_slider__7q761",
	"slide": "slider_slide__frq2p",
	"image": "slider_image__1KzGU",
	"content": "slider_content__z_RVn",
	"heading": "slider_heading__SE6ef",
	"subHeading": "slider_subHeading__EEvuH",
	"button": "slider_button__4RBz4"
};


/***/ }),

/***/ 8604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ home_Home)
});

// UNUSED EXPORTS: Home

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./app/components/ui/Heading/Heading.tsx
var Heading = __webpack_require__(8135);
// EXTERNAL MODULE: ./app/utils/meta/Meta.tsx + 2 modules
var Meta = __webpack_require__(9671);
;// CONCATENATED MODULE: external "react-transition-group"
const external_react_transition_group_namespaceObject = require("react-transition-group");
// EXTERNAL MODULE: ./app/components/ui/Slider/SlideArrow/slideArrow.module.scss
var slideArrow_module = __webpack_require__(1071);
var slideArrow_module_default = /*#__PURE__*/__webpack_require__.n(slideArrow_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./app/components/ui/MaterialIcon.tsx + 1 modules
var MaterialIcon = __webpack_require__(7681);
;// CONCATENATED MODULE: ./app/components/ui/Slider/SlideArrow/SlideArrow.tsx




const SlideArrow = ({ clickHandler , variant  })=>{
    const isLeft = variant === "left";
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)("button", {
        className: external_classnames_default()((slideArrow_module_default()).arrow, {
            [(slideArrow_module_default()).left]: isLeft,
            [(slideArrow_module_default()).right]: !isLeft
        }),
        onClick: clickHandler,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(MaterialIcon/* MaterialIcon */.O, {
            name: isLeft ? "MdChevronLeft" : "MdChevronRight"
        })
    });
};
/* harmony default export */ const SlideArrow_SlideArrow = (SlideArrow);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./app/components/ui/Slider/slider.module.scss
var slider_module = __webpack_require__(7744);
var slider_module_default = /*#__PURE__*/__webpack_require__.n(slider_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./app/components/ui/Slider/SlideItem.tsx




const SlideItem = ({ slide , buttonTitle ="watch"  })=>{
    const { push  } = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (slider_module_default()).slide,
        children: [
            slide.bigPoster && /*#__PURE__*/ (0,jsx_runtime_.jsx)((image_default()), {
                fill: true,
                className: (slider_module_default()).image,
                src: slide.bigPoster,
                alt: slide.title,
                draggable: "false",
                unoptimized: true,
                priority: true
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (slider_module_default()).content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: (slider_module_default()).heading,
                        children: slide.title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: (slider_module_default()).subHeading,
                        children: slide.subTitle
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("button", {
                        className: (slider_module_default()).button,
                        onClick: ()=>push(slide.link),
                        children: buttonTitle
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Slider_SlideItem = (SlideItem);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./app/components/ui/Slider/useSlider.ts

const useSlider = (length)=>{
    const [currentIndex, setCurrentIndex] = (0,external_react_.useState)(0);
    const [slideIn, setSlideIn] = (0,external_react_.useState)(true);
    const isExistNext = currentIndex + 1 < length;
    const isExistPrev = currentIndex ? currentIndex - 1 < length : false;
    const hadleArrowClick = (direction)=>{
        const newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
        setSlideIn(false);
        setTimeout(()=>{
            setCurrentIndex(newIndex);
            setSlideIn(true);
        }, 300);
    };
    return {
        slideIn,
        index: currentIndex,
        isNext: isExistNext,
        isPrev: isExistPrev,
        handleClick: hadleArrowClick
    };
};

;// CONCATENATED MODULE: ./app/components/ui/Slider/Slider.tsx






const Slider = ({ slides , buttonTitle  })=>{
    const { slideIn , index , isNext , isPrev , handleClick  } = useSlider(slides.length);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (slider_module_default()).slider,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(external_react_transition_group_namespaceObject.CSSTransition, {
                in: slideIn,
                classNames: "slide-animation",
                timeout: 300,
                unmountOnExit: true,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(Slider_SlideItem, {
                    slide: slides[index],
                    buttonTitle: buttonTitle
                })
            }),
            isPrev && /*#__PURE__*/ (0,jsx_runtime_.jsx)(SlideArrow_SlideArrow, {
                variant: "left",
                clickHandler: ()=>handleClick("prev")
            }),
            isNext && /*#__PURE__*/ (0,jsx_runtime_.jsx)(SlideArrow_SlideArrow, {
                variant: "right",
                clickHandler: ()=>handleClick("next")
            })
        ]
    });
};
/* harmony default export */ const Slider_Slider = (Slider);

// EXTERNAL MODULE: ./app/components/ui/Heading/SubHeading.tsx
var SubHeading = __webpack_require__(1946);
// EXTERNAL MODULE: ./app/components/ui/Gallery/Gallery.tsx
var Gallery = __webpack_require__(6092);
;// CONCATENATED MODULE: ./app/components/screens/home/Home.tsx






const Home = ({ slides , actors , trendingMovies  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Meta/* default */.Z, {
        title: "Watch movie online",
        description: "Stream right now in your browser",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(Heading/* default */.Z, {
                title: "Watch movies online",
                className: "text-grey-300 mb-8  text-xl"
            }),
            slides.length && /*#__PURE__*/ (0,jsx_runtime_.jsx)(Slider_Slider, {
                slides: slides
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "my-10",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(SubHeading/* default */.Z, {
                        title: "Trending now"
                    }),
                    trendingMovies.length && /*#__PURE__*/ (0,jsx_runtime_.jsx)(Gallery/* default */.Z, {
                        items: trendingMovies
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(SubHeading/* default */.Z, {
                        title: "Best actors"
                    }),
                    actors.length && /*#__PURE__*/ (0,jsx_runtime_.jsx)(Gallery/* default */.Z, {
                        items: actors
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const home_Home = (Home);


/***/ }),

/***/ 8361:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ ActorService)
/* harmony export */ });
/* harmony import */ var _config_api_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4754);
/* harmony import */ var api_interceptors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8979);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([api_interceptors__WEBPACK_IMPORTED_MODULE_0__]);
api_interceptors__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const ActorService = {
    async getAll (searchTerm) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* .axiosClassic.get */ .vV.get((0,_config_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getActorssUrl */ .bc)(""), {
            params: searchTerm ? {
                searchTerm
            } : {}
        });
    },
    async getBySlug (slug) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* .axiosClassic.get */ .vV.get(`actors/by-slug/${slug}`);
    },
    async update (_id, data) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"].put */ .ZP.put((0,_config_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getActorssUrl */ .bc)(`/${_id}`), data);
    },
    async getById (_id) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .ZP.get((0,_config_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getActorssUrl */ .bc)(`/${_id}`));
    },
    async delete (_id) {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"]["delete"] */ .ZP["delete"]((0,_config_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getActorssUrl */ .bc)(`/${_id}`));
    },
    async create () {
        return api_interceptors__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .ZP.post((0,_config_api_config__WEBPACK_IMPORTED_MODULE_1__/* .getActorssUrl */ .bc)(""));
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ getGenresList),
/* harmony export */   "R": () => (/* binding */ getGenresListEach)
/* harmony export */ });
const getGenresListEach = (index, lenght, name)=>index + 1 === lenght ? name : name + "";
const getGenresList = (array)=>array.map((i)=>i.name).join(", ");


/***/ }),

/***/ 2603:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_screens_home_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8604);
/* harmony import */ var _config_url_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6470);
/* harmony import */ var _services_actor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8361);
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7669);
/* harmony import */ var _utils_movie_getGenresListEach__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6349);
/* harmony import */ var api_api_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6358);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_actor_service__WEBPACK_IMPORTED_MODULE_2__, _services_movie_service__WEBPACK_IMPORTED_MODULE_3__]);
([_services_actor_service__WEBPACK_IMPORTED_MODULE_2__, _services_movie_service__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const HomePage = ({ slides , actors , trendingMovies  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_screens_home_Home__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        slides: slides,
        actors: actors,
        trendingMovies: trendingMovies
    });
};
const getStaticProps = async ()=>{
    try {
        const { data: movies  } = await _services_movie_service__WEBPACK_IMPORTED_MODULE_3__/* .MovieService.getAll */ .u.getAll();
        const slides = movies.slice(0, 3).map((m)=>({
                _id: m._id,
                link: (0,_config_url_config__WEBPACK_IMPORTED_MODULE_4__/* .getMovieUrl */ .Xl)(m.slug),
                subTitle: (0,_utils_movie_getGenresListEach__WEBPACK_IMPORTED_MODULE_5__/* .getGenresList */ .Q)(m.genres),
                title: m.title,
                bigPoster: m.bigPoster
            }));
        const { data: dataActors  } = await _services_actor_service__WEBPACK_IMPORTED_MODULE_2__/* .ActorService.getAll */ .V.getAll();
        const actors = dataActors.slice(0, 7).map((a)=>({
                posterPath: a.photo,
                link: `actors/by-slug/${a.slug}`,
                name: a.name,
                content: {
                    title: a.name,
                    subTitle: `+${a.countMovies} movies`
                }
            }));
        const dataTrendingMovies = await _services_movie_service__WEBPACK_IMPORTED_MODULE_3__/* .MovieService.getMostPopularMovies */ .u.getMostPopularMovies();
        const trendingMovies = dataTrendingMovies.slice(0, 7).map((m)=>({
                posterPath: m.poster,
                link: (0,_config_url_config__WEBPACK_IMPORTED_MODULE_4__/* .getMovieUrl */ .Xl)(m.slug),
                name: m.title
            }));
        return {
            props: {
                slides,
                actors,
                trendingMovies
            },
            revalidate: 60
        };
    } catch (error) {
        console.log((0,api_api_helpers__WEBPACK_IMPORTED_MODULE_6__/* .errorCatch */ .l)(error));
        return {
            props: {
                slides: [],
                actors: [],
                trendingMovies: []
            }
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,636,675,512,638,470,669,594,64], () => (__webpack_exec__(2603)));
module.exports = __webpack_exports__;

})();