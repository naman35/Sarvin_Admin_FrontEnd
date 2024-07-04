"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/layout/header.tsx":
/*!**************************************!*\
  !*** ./components/layout/header.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Header: function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation */ \"./components/layout/navigation.tsx\");\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logo */ \"./components/layout/logo.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Header = (props)=>{\n    var _ref_current;\n    _s();\n    const ref = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);\n    const [y, setY] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);\n    var _ref_current_getBoundingClientRect;\n    const { height = 0 } = (_ref_current_getBoundingClientRect = (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.getBoundingClientRect()) !== null && _ref_current_getBoundingClientRect !== void 0 ? _ref_current_getBoundingClientRect : {};\n    const { scrollY } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll)();\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{\n        return scrollY.onChange(()=>setY(scrollY.get()));\n    }, [\n        scrollY\n    ]);\n    const bg = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue)(\"whiteAlpha.700\", \"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        ref: ref,\n        as: \"header\",\n        top: \"0\",\n        w: \"full\",\n        position: \"fixed\",\n        backdropFilter: \"blur(5px)\",\n        zIndex: \"sticky\",\n        borderColor: \"whiteAlpha.100\",\n        transitionProperty: \"common\",\n        transitionDuration: \"normal\",\n        bg: y > height ? bg : \"\",\n        boxShadow: y > height ? \"md\" : \"\",\n        borderBottomWidth: y > height ? \"1px\" : \"\",\n        ...props,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Container, {\n            maxW: \"container.2xl\",\n            px: \"8\",\n            py: \"4\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                width: \"full\",\n                align: \"center\",\n                justify: \"space-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_3__.Logo, {\n                        onClick: (e)=>{\n                            if (window.location.pathname === \"/\") {\n                                e.preventDefault();\n                                window.scrollTo({\n                                    top: 0,\n                                    behavior: \"smooth\"\n                                });\n                            }\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/cogoport/Desktop/Private/Sarvin_Admin_FrontEnd/components/layout/header.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navigation__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/cogoport/Desktop/Private/Sarvin_Admin_FrontEnd/components/layout/header.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/cogoport/Desktop/Private/Sarvin_Admin_FrontEnd/components/layout/header.tsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/cogoport/Desktop/Private/Sarvin_Admin_FrontEnd/components/layout/header.tsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/cogoport/Desktop/Private/Sarvin_Admin_FrontEnd/components/layout/header.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"e/9BE2JWEfRLnZB/EaN9pJGhVjE=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useScroll,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBUUw7QUFDWTtBQUNSO0FBQ1k7QUFJbkMsTUFBTVEsU0FBUyxDQUFDQztRQUdFQzs7SUFGdkIsTUFBTUEsTUFBTVYseUNBQVksQ0FBcUI7SUFDN0MsTUFBTSxDQUFDWSxHQUFHQyxLQUFLLEdBQUdiLDJDQUFjLENBQUM7UUFDVlU7SUFBdkIsTUFBTSxFQUFFSyxTQUFTLENBQUMsRUFBRSxHQUFHTCxDQUFBQSxzQ0FBQUEsZUFBQUEsSUFBSU0sT0FBTyxjQUFYTixtQ0FBQUEsYUFBYU8scUJBQXFCLGdCQUFsQ1AsZ0RBQUFBLHFDQUF3QyxDQUFDO0lBRWhFLE1BQU0sRUFBRVEsT0FBTyxFQUFFLEdBQUdYLHdEQUFTQTtJQUM3QlAsNENBQWUsQ0FBQztRQUNkLE9BQU9rQixRQUFRRSxRQUFRLENBQUMsSUFBTVAsS0FBS0ssUUFBUUcsR0FBRztJQUNoRCxHQUFHO1FBQUNIO0tBQVE7SUFFWixNQUFNSSxLQUFLbEIsbUVBQWlCQSxDQUFDLGtCQUFrQjtJQUUvQyxxQkFDRSw4REFBQ0gsaURBQUdBO1FBQ0ZTLEtBQUtBO1FBQ0xhLElBQUc7UUFDSEMsS0FBSTtRQUNKQyxHQUFFO1FBQ0ZDLFVBQVM7UUFDVEMsZ0JBQWU7UUFDZkMsUUFBTztRQUNQQyxhQUFZO1FBQ1pDLG9CQUFtQjtRQUNuQkMsb0JBQW1CO1FBQ25CVCxJQUFJVixJQUFJRyxTQUFTTyxLQUFLO1FBQ3RCVSxXQUFXcEIsSUFBSUcsU0FBUyxPQUFPO1FBQy9Ca0IsbUJBQW1CckIsSUFBSUcsU0FBUyxRQUFRO1FBQ3ZDLEdBQUdOLEtBQUs7a0JBRVQsNEVBQUNQLHVEQUFTQTtZQUFDZ0MsTUFBSztZQUFnQkMsSUFBRztZQUFJQyxJQUFHO3NCQUN4Qyw0RUFBQ2pDLGtEQUFJQTtnQkFBQ2tDLE9BQU07Z0JBQU9DLE9BQU07Z0JBQVNDLFNBQVE7O2tDQUN4Qyw4REFBQ2pDLHVDQUFJQTt3QkFDSGtDLFNBQVMsQ0FBQ0M7NEJBQ1IsSUFBSUMsT0FBT0MsUUFBUSxDQUFDQyxRQUFRLEtBQUssS0FBSztnQ0FDcENILEVBQUVJLGNBQWM7Z0NBRWhCSCxPQUFPSSxRQUFRLENBQUM7b0NBQ2R0QixLQUFLO29DQUNMdUIsVUFBVTtnQ0FDWjs0QkFDRjt3QkFDRjs7Ozs7O2tDQUVGLDhEQUFDMUMsbURBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLckIsRUFBRTtHQWhEV0c7O1FBS1NELG9EQUFTQTtRQUtsQkgsK0RBQWlCQTs7O0tBVmpCSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXIudHN4P2IzNjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7XG4gIEJveCxcbiAgQm94UHJvcHMsXG4gIENvbnRhaW5lcixcbiAgRmxleCxcbiAgdXNlQ29sb3JNb2RlVmFsdWUsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBMb2dvIH0gZnJvbSBcIi4vbG9nb1wiO1xuaW1wb3J0IHsgdXNlU2Nyb2xsIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuZXhwb3J0IGludGVyZmFjZSBIZWFkZXJQcm9wcyBleHRlbmRzIE9taXQ8Qm94UHJvcHMsIFwiY2hpbGRyZW5cIj4ge31cblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IChwcm9wczogSGVhZGVyUHJvcHMpID0+IHtcbiAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmPEhUTUxIZWFkaW5nRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IFt5LCBzZXRZXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuICBjb25zdCB7IGhlaWdodCA9IDAgfSA9IHJlZi5jdXJyZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA/PyB7fTtcblxuICBjb25zdCB7IHNjcm9sbFkgfSA9IHVzZVNjcm9sbCgpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJldHVybiBzY3JvbGxZLm9uQ2hhbmdlKCgpID0+IHNldFkoc2Nyb2xsWS5nZXQoKSkpO1xuICB9LCBbc2Nyb2xsWV0pO1xuXG4gIGNvbnN0IGJnID0gdXNlQ29sb3JNb2RlVmFsdWUoXCJ3aGl0ZUFscGhhLjcwMFwiLCBcIlwiKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHJlZj17cmVmfVxuICAgICAgYXM9XCJoZWFkZXJcIlxuICAgICAgdG9wPVwiMFwiXG4gICAgICB3PVwiZnVsbFwiXG4gICAgICBwb3NpdGlvbj1cImZpeGVkXCJcbiAgICAgIGJhY2tkcm9wRmlsdGVyPVwiYmx1cig1cHgpXCJcbiAgICAgIHpJbmRleD1cInN0aWNreVwiXG4gICAgICBib3JkZXJDb2xvcj1cIndoaXRlQWxwaGEuMTAwXCJcbiAgICAgIHRyYW5zaXRpb25Qcm9wZXJ0eT1cImNvbW1vblwiXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb249XCJub3JtYWxcIlxuICAgICAgYmc9e3kgPiBoZWlnaHQgPyBiZyA6IFwiXCJ9XG4gICAgICBib3hTaGFkb3c9e3kgPiBoZWlnaHQgPyBcIm1kXCIgOiBcIlwifVxuICAgICAgYm9yZGVyQm90dG9tV2lkdGg9e3kgPiBoZWlnaHQgPyBcIjFweFwiIDogXCJcIn1cbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8Q29udGFpbmVyIG1heFc9XCJjb250YWluZXIuMnhsXCIgcHg9XCI4XCIgcHk9XCI0XCI+XG4gICAgICAgIDxGbGV4IHdpZHRoPVwiZnVsbFwiIGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgICA8TG9nb1xuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvXCIpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCb3giLCJDb250YWluZXIiLCJGbGV4IiwidXNlQ29sb3JNb2RlVmFsdWUiLCJOYXZpZ2F0aW9uIiwiTG9nbyIsInVzZVNjcm9sbCIsIkhlYWRlciIsInByb3BzIiwicmVmIiwidXNlUmVmIiwieSIsInNldFkiLCJ1c2VTdGF0ZSIsImhlaWdodCIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzY3JvbGxZIiwidXNlRWZmZWN0Iiwib25DaGFuZ2UiLCJnZXQiLCJiZyIsImFzIiwidG9wIiwidyIsInBvc2l0aW9uIiwiYmFja2Ryb3BGaWx0ZXIiLCJ6SW5kZXgiLCJib3JkZXJDb2xvciIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsInRyYW5zaXRpb25EdXJhdGlvbiIsImJveFNoYWRvdyIsImJvcmRlckJvdHRvbVdpZHRoIiwibWF4VyIsInB4IiwicHkiLCJ3aWR0aCIsImFsaWduIiwianVzdGlmeSIsIm9uQ2xpY2siLCJlIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInByZXZlbnREZWZhdWx0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/header.tsx\n"));

/***/ })

});