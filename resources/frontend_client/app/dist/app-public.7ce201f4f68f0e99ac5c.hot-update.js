/*!
 * /*
 * * This file is subject to the terms and conditions defined in
 *  * file 'LICENSE.txt', which is part of this source code package.
 *  * /
 *
 */
"use strict";
self["webpackHotUpdate"]("app-public",{

/***/ "./routes-public.jsx":
/*!***************************!*\
  !*** ./routes-public.jsx ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRoutes: () => (/* binding */ getRoutes)
/* harmony export */ });
/* harmony import */ var metabase_hoc_Title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! metabase/hoc/Title */ "./hoc/Title.jsx");
/* harmony import */ var metabase_public_components_PublicNotFound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! metabase/public/components/PublicNotFound */ "./public/components/PublicNotFound.tsx");
/* harmony import */ var metabase_public_containers_PublicAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! metabase/public/containers/PublicAction */ "./public/containers/PublicAction/index.ts");
/* harmony import */ var metabase_public_containers_PublicApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! metabase/public/containers/PublicApp */ "./public/containers/PublicApp/index.ts");
/* harmony import */ var metabase_public_containers_PublicOrEmbeddedQuestion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! metabase/public/containers/PublicOrEmbeddedQuestion */ "./public/containers/PublicOrEmbeddedQuestion/index.ts");
/* harmony import */ var _public_containers_PublicOrEmbeddedDashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./public/containers/PublicOrEmbeddedDashboard */ "./public/containers/PublicOrEmbeddedDashboard/index.ts");
/* harmony import */ var _selectors_whitelabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selectors/whitelabel */ "./selectors/whitelabel/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "../../../node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");










const getRoutes = store => {
  const applicationName = (0,_selectors_whitelabel__WEBPACK_IMPORTED_MODULE_6__.getApplicationName)(store.getState());
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(metabase_hoc_Title__WEBPACK_IMPORTED_MODULE_0__.Route, {
    title: applicationName,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(metabase_hoc_Title__WEBPACK_IMPORTED_MODULE_0__.Route, {
      path: "public",
      component: metabase_public_containers_PublicApp__WEBPACK_IMPORTED_MODULE_3__["default"],
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(metabase_hoc_Title__WEBPACK_IMPORTED_MODULE_0__.Route, {
        path: "action/:uuid",
        component: metabase_public_containers_PublicAction__WEBPACK_IMPORTED_MODULE_2__["default"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(metabase_hoc_Title__WEBPACK_IMPORTED_MODULE_0__.Route, {
        path: "question/:uuid",
        component: metabase_public_containers_PublicOrEmbeddedQuestion__WEBPACK_IMPORTED_MODULE_4__.PublicOrEmbeddedQuestion
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(metabase_hoc_Title__WEBPACK_IMPORTED_MODULE_0__.Route, {
        path: "dashboard/:uuid(/:tabSlug)",
        component: _public_containers_PublicOrEmbeddedDashboard__WEBPACK_IMPORTED_MODULE_5__.PublicOrEmbeddedDashboardPage
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(metabase_hoc_Title__WEBPACK_IMPORTED_MODULE_0__.Route, {
        path: "*",
        component: metabase_public_components_PublicNotFound__WEBPACK_IMPORTED_MODULE_1__.PublicNotFound
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(metabase_hoc_Title__WEBPACK_IMPORTED_MODULE_0__.Route, {
      path: "*",
      component: metabase_public_components_PublicNotFound__WEBPACK_IMPORTED_MODULE_1__.PublicNotFound
    })]
  });
};

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

});
//# sourceMappingURL=app-public.7ce201f4f68f0e99ac5c.hot-update.js.map