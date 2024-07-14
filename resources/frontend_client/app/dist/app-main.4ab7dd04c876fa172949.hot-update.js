/*!
 * /*
 * * This file is subject to the terms and conditions defined in
 *  * file 'LICENSE.txt', which is part of this source code package.
 *  * /
 *
 */
"use strict";
self["webpackHotUpdate"]("app-main",{

/***/ "./admin/app/reducers.ts":
/*!*******************************!*\
  !*** ./admin/app/reducers.ts ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appReducer: () => (/* binding */ appReducer),
/* harmony export */   getAdminPaths: () => (/* binding */ getAdminPaths)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @reduxjs/toolkit */ "../../../node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs");
/* harmony import */ var ttag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ttag */ "../../../node_modules/ttag/index.js");
/* harmony import */ var ttag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ttag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var metabase_lib_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! metabase/lib/redux */ "./lib/redux/index.ts");
/* harmony import */ var metabase_lib_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! metabase/lib/settings */ "./lib/settings.ts");
/* harmony import */ var metabase_lib_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! metabase/lib/types */ "./lib/types.ts");
/* harmony import */ var metabase_plugins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! metabase/plugins */ "./plugins/index.ts");
/* harmony import */ var metabase_redux_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! metabase/redux/user */ "./redux/user.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions */ "./admin/app/actions.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");









const getAdminPaths = () => {
  const items = [{
    name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Settings`,
    path: "/admin/settings",
    key: "settings"
  }, {
    name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Databases`,
    path: "/admin/databases",
    key: "databases"
  }, {
    name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Table Metadata`,
    path: "/admin/datamodel",
    key: "data-model"
  }, {
    name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`People`,
    path: "/admin/people",
    key: "people"
  }, {
    name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Permissions`,
    path: "/admin/permissions",
    key: "permissions"
  }, {
    name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Performance`,
    path: "/admin/performance",
    key: "performance"
  }];
  const isModelPersistenceEnabled = metabase_lib_settings__WEBPACK_IMPORTED_MODULE_2__["default"].get("persisted-models-enabled");
  if (isModelPersistenceEnabled || metabase_plugins__WEBPACK_IMPORTED_MODULE_4__.PLUGIN_ADMIN_TOOLS.EXTRA_ROUTES.length > 0) {
    items.push({
      name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Tools`,
      path: "/admin/tools",
      key: "tools"
    });
  }

  // items.push(...PLUGIN_ADMIN_NAV_ITEMS, {
  //   name: t`Troubleshooting`,
  //   path: "/admin/troubleshooting",
  //   key: "troubleshooting",
  // });

  return items;
};
const paths = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_7__.createReducer)(getAdminPaths(), builder => {
  builder.addCase(metabase_redux_user__WEBPACK_IMPORTED_MODULE_5__.refreshCurrentUser.fulfilled, (state, _ref) => {
    let {
      payload: user
    } = _ref;
    if (user?.is_superuser) {
      return state;
    }
    const allowedPaths = metabase_plugins__WEBPACK_IMPORTED_MODULE_4__.PLUGIN_ADMIN_ALLOWED_PATH_GETTERS.map(getter => {
      return getter(user);
    }).flat().reduce((acc, pathKey) => {
      acc.add(pathKey);
      return acc;
    }, new Set());
    return state.filter(path => allowedPaths.has(path.key) ? path : null).filter(metabase_lib_types__WEBPACK_IMPORTED_MODULE_3__.isNotNull);
  });
});
const isNoticeEnabled = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_7__.createReducer)(metabase_lib_settings__WEBPACK_IMPORTED_MODULE_2__["default"].deprecationNoticeEnabled(), builder => {
  builder.addCase(_actions__WEBPACK_IMPORTED_MODULE_6__.disableNotice.fulfilled, () => false);
});
const appReducer = (0,metabase_lib_redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  isNoticeEnabled,
  paths
});

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
//# sourceMappingURL=app-main.4ab7dd04c876fa172949.hot-update.js.map