"use strict";
exports.id = 618;
exports.ids = [618];
exports.modules = {

/***/ 5618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ auth_AuthFields)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./app/components/ui/FormElement/Field.tsx
var Field = __webpack_require__(4798);
;// CONCATENATED MODULE: ./app/shared/regex.ts
const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

;// CONCATENATED MODULE: ./app/components/screens/auth/AuthFields.tsx



const AuthFields = ({ register , formState: { errors  } , isPasswordRequired =false  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(Field/* default */.Z, {
                ...register("email", {
                    required: "Email is required!",
                    pattern: {
                        value: validEmail,
                        message: "Please enter a valid email"
                    }
                }),
                placeholder: "E-mail",
                error: errors.email
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)(Field/* default */.Z, {
                ...register("password", isPasswordRequired ? {
                    required: "Password is required",
                    minLength: {
                        value: 6,
                        message: "Min length should be 6 symbols"
                    }
                } : {}),
                type: "password",
                placeholder: "Password",
                error: errors.password
            })
        ]
    });
};
/* harmony default export */ const auth_AuthFields = (AuthFields);


/***/ })

};
;