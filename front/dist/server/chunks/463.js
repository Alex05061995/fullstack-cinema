exports.id = 463;
exports.ids = [463,470];
exports.modules = {

/***/ 9871:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "adminHeader_header__EVL_f"
};


/***/ }),

/***/ 2045:
/***/ ((module) => {

// Exports
module.exports = {
	"actions": "adminTable_actions__2Z0V9",
	"item": "adminTable_item__GRvwA",
	"itemHeader": "adminTable_itemHeader__UVYFX",
	"notFound": "adminTable_notFound__2tqmS"
};


/***/ }),

/***/ 5903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ AdminHeader_AdminHeader)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./app/components/ui/SearchField/searchField.tsx
var searchField = __webpack_require__(2240);
// EXTERNAL MODULE: ./app/components/ui/FormElement/Button.tsx
var Button = __webpack_require__(3141);
;// CONCATENATED MODULE: ./app/components/ui/AdminTable/AdminHeader/AdminCreateButton/AdminCreateButton.tsx


const AdminCreateButton = ({ onClick  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(Button/* default */.Z, {
        onClick: onClick,
        children: "Create new"
    });
};
/* harmony default export */ const AdminCreateButton_AdminCreateButton = (AdminCreateButton);

// EXTERNAL MODULE: ./app/components/ui/AdminTable/AdminHeader/adminHeader.module.scss
var adminHeader_module = __webpack_require__(9871);
var adminHeader_module_default = /*#__PURE__*/__webpack_require__.n(adminHeader_module);
;// CONCATENATED MODULE: ./app/components/ui/AdminTable/AdminHeader/AdminHeader.tsx




const AdminHeader = ({ handleSearch , onClick , searchTerm  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (adminHeader_module_default()).header,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(searchField/* default */.Z, {
                searchTerm: searchTerm,
                handleSearch: handleSearch
            }),
            onClick && /*#__PURE__*/ (0,jsx_runtime_.jsx)(AdminCreateButton_AdminCreateButton, {
                onClick: onClick
            })
        ]
    });
};
/* harmony default export */ const AdminHeader_AdminHeader = (AdminHeader);


/***/ }),

/***/ 8561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ AdminTable_AdminTable)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./app/components/ui/SkeletonLoader.tsx
var SkeletonLoader = __webpack_require__(9730);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./app/components/ui/AdminTable/AdminTable/adminTable.module.scss
var adminTable_module = __webpack_require__(2045);
var adminTable_module_default = /*#__PURE__*/__webpack_require__.n(adminTable_module);
;// CONCATENATED MODULE: ./app/components/ui/AdminTable/AdminTable/AdminTableHeader.tsx



(external_classnames_default());
const AdminTableHeader = ({ headerItems  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()((adminTable_module_default()).item, (adminTable_module_default()).itemHeader),
        children: [
            headerItems.map((value)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        value,
                        " "
                    ]
                }, value)),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                children: "Actions"
            })
        ]
    });
};
/* harmony default export */ const AdminTable_AdminTableHeader = (AdminTableHeader);

// EXTERNAL MODULE: ./app/components/ui/MaterialIcon.tsx + 1 modules
var MaterialIcon = __webpack_require__(7681);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./app/components/ui/AdminTable/AdminTable/AdminActions/AdmintActions.tsx




const AdmintActions = ({ editUrl , removeHandler  })=>{
    const { push  } = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (adminTable_module_default()).actions,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("button", {
                onClick: ()=>push(editUrl),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(MaterialIcon/* MaterialIcon */.O, {
                    name: "MdEdit"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("button", {
                onClick: removeHandler,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(MaterialIcon/* MaterialIcon */.O, {
                    name: "MdClose"
                })
            })
        ]
    });
};
/* harmony default export */ const AdminActions_AdmintActions = (AdmintActions);

;// CONCATENATED MODULE: ./app/components/ui/AdminTable/AdminTable/AdminTableItem.tsx



const AdminTableItem = ({ removeHandler , tableItem  })=>{
    let i = 0;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (adminTable_module_default()).item,
        children: [
            tableItem.items.map((value)=>/*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    children: value
                }, value + i++)),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(AdminActions_AdmintActions, {
                editUrl: tableItem.editUrl,
                removeHandler: removeHandler
            })
        ]
    });
};
/* harmony default export */ const AdminTable_AdminTableItem = (AdminTableItem);

;// CONCATENATED MODULE: ./app/components/ui/AdminTable/AdminTable/AdminTable.tsx





const AdminTable = ({ tableItems , headerItems , isLoading , removeHandler  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(AdminTable_AdminTableHeader, {
                headerItems: headerItems
            }),
            isLoading ? /*#__PURE__*/ (0,jsx_runtime_.jsx)(SkeletonLoader/* default */.Z, {
                count: 1,
                height: 48,
                className: "mt-4"
            }) : tableItems.length ? tableItems.map((tableItem)=>/*#__PURE__*/ (0,jsx_runtime_.jsx)(AdminTable_AdminTableItem, {
                    removeHandler: ()=>removeHandler(tableItem._id),
                    tableItem: tableItem
                }, tableItem._id)) : /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: (adminTable_module_default()).notFound,
                children: "Elements not found"
            })
        ]
    });
};
/* harmony default export */ const AdminTable_AdminTable = (AdminTable);


/***/ }),

/***/ 6470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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