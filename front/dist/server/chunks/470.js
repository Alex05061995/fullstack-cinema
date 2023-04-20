"use strict";
exports.id = 470;
exports.ids = [470];
exports.modules = {

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


/***/ })

};
;