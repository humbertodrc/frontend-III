"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/card */ \"./src/components/ui/card/index.ts\");\n/* harmony import */ var _components_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layouts/Layout */ \"./src/components/layouts/Layout.tsx\");\n\n\n\n\nconst Home = (param)=>{\n    let { character } = param;\n    var _characters;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Bienvenido a mi sitio web\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HUMBERTO\\\\OneDrive\\\\Documentos\\\\Humberto\\\\Frontend-III\\\\frontend-III\\\\semana-1\\\\ecommerce-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 16,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().grid),\n                children: (_characters = characters) === null || _characters === void 0 ? void 0 : _characters.map((character)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                        character: character\n                    }, character.tail, false, {\n                        fileName: \"C:\\\\Users\\\\HUMBERTO\\\\OneDrive\\\\Documentos\\\\Humberto\\\\Frontend-III\\\\frontend-III\\\\semana-1\\\\ecommerce-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 6\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HUMBERTO\\\\OneDrive\\\\Documentos\\\\Humberto\\\\Frontend-III\\\\frontend-III\\\\semana-1\\\\ecommerce-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 17,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HUMBERTO\\\\OneDrive\\\\Documentos\\\\Humberto\\\\Frontend-III\\\\frontend-III\\\\semana-1\\\\ecommerce-app\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 15,\n        columnNumber: 3\n    }, undefined);\n};\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQThDO0FBS0o7QUFDUztBQUtuRCxNQUFNRyxPQUFnQjtRQUFDLEVBQUNDLFNBQVMsRUFBQztRQU03QkM7SUFKSixxQkFDQyw4REFBQ0gsOERBQU1BOzswQkFDTiw4REFBQ0k7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQUlDLFdBQVdSLHFFQUFXOzJCQUN6QkssY0FBQUEsd0JBQUFBLGtDQUFBQSxZQUFZSyxHQUFHLENBQUMsQ0FBQ04sMEJBQ2pCLDhEQUFDSCxxREFBSUE7d0JBQXNCRyxXQUFXQTt1QkFBM0JBLFVBQVVPLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLOUI7S0FaTVI7O0FBeUJOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NoYXJhY3Rlcn0gZnJvbSBcIi4uL2ludGVyZmFjZVwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHtDYXJkfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NhcmRcIjtcclxuaW1wb3J0IHtMYXlvdXR9IGZyb20gXCJAL2NvbXBvbmVudHMvbGF5b3V0cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7IH1cclxuXHJcbmNvbnN0IEhvbWU6TmV4dFBhZ2UgPSAoe2NoYXJhY3Rlcn0pID0+IHtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxMYXlvdXQ+XHJcblx0XHRcdDxoMT5CaWVudmVuaWRvIGEgbWkgc2l0aW8gd2ViPC9oMT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cclxuXHRcdFx0XHR7Y2hhcmFjdGVycz8ubWFwKChjaGFyYWN0ZXIpID0+IChcclxuXHRcdFx0XHRcdDxDYXJkIGtleT17Y2hhcmFjdGVyLnRhaWx9IGNoYXJhY3Rlcj17Y2hhcmFjdGVyfSAvPlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvTGF5b3V0PlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuXHRjb25zdCBjaGFyYWN0ZXJzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3d3dy5hbWlpYm9hcGkuY29tL2FwaS9hbWlpYm8vXCIpO1xyXG5cdGNvbnN0IHJlc3AgPSBhd2FpdCBjaGFyYWN0ZXJzLmpzb24oKTtcclxuXHRjb25zdCBkYXRhID0gcmVzcC5hbWlpYm8uc2xpY2UoMCwgMjApO1xyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRjaGFyYWN0ZXJzOiBkYXRhXHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkNhcmQiLCJMYXlvdXQiLCJIb21lIiwiY2hhcmFjdGVyIiwiY2hhcmFjdGVycyIsImgxIiwiZGl2IiwiY2xhc3NOYW1lIiwiZ3JpZCIsIm1hcCIsInRhaWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});