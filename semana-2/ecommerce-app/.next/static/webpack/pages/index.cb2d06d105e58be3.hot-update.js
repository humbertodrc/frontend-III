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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/card */ \"./src/components/ui/card/index.ts\");\n/* harmony import */ var _components_layouts_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/layouts/Layout */ \"./src/components/layouts/Layout.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Home = ()=>{\n    var _characters;\n    _s();\n    const [characters, setCharacters] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const getCharacters = async ()=>{\n        const characters = await fetch(\"https://www.amiiboapi.com/api/amiibo/\");\n        const resp = await characters.json();\n        const data = resp.amiibo.slice(0, 20);\n        setCharacters(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getCharacters();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_Layout__WEBPACK_IMPORTED_MODULE_3__.Layout, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Bienvenido a mi sitio web\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HUMBERTO\\\\OneDrive\\\\Documentos\\\\Humberto\\\\Frontend-III\\\\frontend-III\\\\semana-1\\\\ecommerce-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 26,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().grid),\n                children: (_characters = characters) === null || _characters === void 0 ? void 0 : _characters.map((character)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                        character: character\n                    }, character.tail, false, {\n                        fileName: \"C:\\\\Users\\\\HUMBERTO\\\\OneDrive\\\\Documentos\\\\Humberto\\\\Frontend-III\\\\frontend-III\\\\semana-1\\\\ecommerce-app\\\\src\\\\pages\\\\index.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 6\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HUMBERTO\\\\OneDrive\\\\Documentos\\\\Humberto\\\\Frontend-III\\\\frontend-III\\\\semana-1\\\\ecommerce-app\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 27,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HUMBERTO\\\\OneDrive\\\\Documentos\\\\Humberto\\\\Frontend-III\\\\frontend-III\\\\semana-1\\\\ecommerce-app\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 25,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Home, \"udnkyTfLDuVU2gbUKq3qMY7Sa5E=\");\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQThDO0FBRUo7QUFHQTtBQUNTO0FBR25ELE1BQU1LLE9BQWdCO1FBa0JqQkM7O0lBakJKLE1BQU0sQ0FBQ0EsWUFBWUMsY0FBYyxHQUFHTCwrQ0FBUUE7SUFFNUMsTUFBTU0sZ0JBQWdCO1FBQ3JCLE1BQU1GLGFBQWEsTUFBTUcsTUFBTTtRQUMvQixNQUFNQyxPQUFPLE1BQU1KLFdBQVdLLElBQUk7UUFDbEMsTUFBTUMsT0FBT0YsS0FBS0csTUFBTSxDQUFDQyxLQUFLLENBQUMsR0FBRztRQUNsQ1AsY0FBY0s7SUFDZjtJQUVBWCxnREFBU0EsQ0FBQztRQUNUTztJQUNELEdBQUcsRUFBRTtJQUVMLHFCQUNDLDhEQUFDSiw4REFBTUE7OzBCQUNOLDhEQUFDVzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBSUMsV0FBV2pCLHFFQUFXOzJCQUN6Qk0sY0FBQUEsd0JBQUFBLGtDQUFBQSxZQUFZYSxHQUFHLENBQUMsQ0FBQ0MsMEJBQ2pCLDhEQUFDakIscURBQUlBO3dCQUFzQmlCLFdBQVdBO3VCQUEzQkEsVUFBVUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7OztBQUs5QjtHQXhCTWhCO0tBQUFBOztBQThCTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtDaGFyYWN0ZXJ9IGZyb20gXCIuLi9pbnRlcmZhY2VcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7Q2FyZH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jYXJkXCI7XHJcbmltcG9ydCB7TGF5b3V0fSBmcm9tIFwiQC9jb21wb25lbnRzL2xheW91dHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XHJcblxyXG5jb25zdCBIb21lOk5leHRQYWdlID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtjaGFyYWN0ZXJzLCBzZXRDaGFyYWN0ZXJzXSA9IHVzZVN0YXRlPENoYXJhY3RlcltdPigpO1xyXG5cclxuXHRjb25zdCBnZXRDaGFyYWN0ZXJzID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0Y29uc3QgY2hhcmFjdGVycyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly93d3cuYW1paWJvYXBpLmNvbS9hcGkvYW1paWJvL1wiKTtcclxuXHRcdGNvbnN0IHJlc3AgPSBhd2FpdCBjaGFyYWN0ZXJzLmpzb24oKTtcclxuXHRcdGNvbnN0IGRhdGEgPSByZXNwLmFtaWliby5zbGljZSgwLCAyMCk7XHJcblx0XHRzZXRDaGFyYWN0ZXJzKGRhdGEpO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRnZXRDaGFyYWN0ZXJzKCk7XHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PExheW91dD5cclxuXHRcdFx0PGgxPkJpZW52ZW5pZG8gYSBtaSBzaXRpbyB3ZWI8L2gxPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxyXG5cdFx0XHRcdHtjaGFyYWN0ZXJzPy5tYXAoKGNoYXJhY3RlcikgPT4gKFxyXG5cdFx0XHRcdFx0PENhcmQga2V5PXtjaGFyYWN0ZXIudGFpbH0gY2hhcmFjdGVyPXtjaGFyYWN0ZXJ9IC8+XHJcblx0XHRcdFx0KSl9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9MYXlvdXQ+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG5cdFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2FyZCIsIkxheW91dCIsIkhvbWUiLCJjaGFyYWN0ZXJzIiwic2V0Q2hhcmFjdGVycyIsImdldENoYXJhY3RlcnMiLCJmZXRjaCIsInJlc3AiLCJqc29uIiwiZGF0YSIsImFtaWlibyIsInNsaWNlIiwiaDEiLCJkaXYiLCJjbGFzc05hbWUiLCJncmlkIiwibWFwIiwiY2hhcmFjdGVyIiwidGFpbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});