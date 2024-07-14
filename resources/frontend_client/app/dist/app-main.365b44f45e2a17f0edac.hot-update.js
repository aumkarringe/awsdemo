/*!
 * /*
 * * This file is subject to the terms and conditions defined in
 *  * file 'LICENSE.txt', which is part of this source code package.
 *  * /
 *
 */
"use strict";
self["webpackHotUpdate"]("app-main",{

/***/ "./admin/settings/components/CloudPanel/CloudPanel.tsx":
/*!*************************************************************!*\
  !*** ./admin/settings/components/CloudPanel/CloudPanel.tsx ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CloudPanel: () => (/* binding */ CloudPanel)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var metabase_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! metabase/api */ "./api/index.ts");
/* harmony import */ var metabase_common_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! metabase/common/hooks */ "./common/hooks/index.ts");
/* harmony import */ var metabase_components_LoadingAndErrorWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! metabase/components/LoadingAndErrorWrapper */ "./components/LoadingAndErrorWrapper/index.jsx");
/* harmony import */ var metabase_lib_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! metabase/lib/redux */ "./lib/redux/index.ts");
/* harmony import */ var metabase_redux_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! metabase/redux/settings */ "./redux/settings.ts");
/* harmony import */ var metabase_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! metabase/ui */ "./ui/index.ts");
/* harmony import */ var _MigrationCreationError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MigrationCreationError */ "./admin/settings/components/CloudPanel/MigrationCreationError.tsx");
/* harmony import */ var _MigrationError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MigrationError */ "./admin/settings/components/CloudPanel/MigrationError.tsx");
/* harmony import */ var _MigrationInProgress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MigrationInProgress */ "./admin/settings/components/CloudPanel/MigrationInProgress.tsx");
/* harmony import */ var _MigrationSuccess__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MigrationSuccess */ "./admin/settings/components/CloudPanel/MigrationSuccess.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils */ "./admin/settings/components/CloudPanel/utils.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "../../../node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();














const CloudPanel = _ref => {
  _s();
  let {
    getPollingInterval = _utils__WEBPACK_IMPORTED_MODULE_11__.defaultGetPollingInterval,
    onMigrationStart = _utils__WEBPACK_IMPORTED_MODULE_11__.openCheckoutInNewTab
  } = _ref;
  const dispatch = (0,metabase_lib_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const [pollingInterval, setPollingInterval] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
  const {
    data: migration,
    isLoading,
    error
  } = (0,metabase_api__WEBPACK_IMPORTED_MODULE_1__.useGetCloudMigrationQuery)(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval
  });
  const migrationState = migration?.state ?? "uninitialized";
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function syncPollingInterval() {
    if (migration) {
      setPollingInterval(getPollingInterval(migration));
    }
  }, [migration, getPollingInterval]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function syncSiteSettings() {
    if (migrationState) {
      dispatch((0,metabase_redux_settings__WEBPACK_IMPORTED_MODULE_5__.refreshSiteSettings)({}));
    }
  }, [dispatch, migrationState]);
  const storeUrl = (0,metabase_common_hooks__WEBPACK_IMPORTED_MODULE_2__.useSetting)("store-url");
  const checkoutUrl = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return migration ? `${storeUrl}/checkout?migration-id=${migration.external_id}` : `${storeUrl}/checkout`;
  }, [migration, storeUrl]);
  const [createCloudMigration, createCloudMigrationResult] = (0,metabase_api__WEBPACK_IMPORTED_MODULE_1__.useCreateCloudMigrationMutation)();
  const handleCreateMigration = async () => {
    const newMigration = await createCloudMigration().unwrap();
    await dispatch((0,metabase_redux_settings__WEBPACK_IMPORTED_MODULE_5__.refreshSiteSettings)({}));
    onMigrationStart(storeUrl, newMigration);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(metabase_components_LoadingAndErrorWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    loading: isLoading,
    error: error,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(metabase_ui__WEBPACK_IMPORTED_MODULE_6__.Box, {
      maw: "36rem",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(metabase_ui__WEBPACK_IMPORTED_MODULE_6__.Box, {
        mt: "2rem",
        children: [migration && (0,_utils__WEBPACK_IMPORTED_MODULE_11__.isInProgressMigration)(migration) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_MigrationInProgress__WEBPACK_IMPORTED_MODULE_9__.MigrationInProgress, {
          migration: migration,
          checkoutUrl: checkoutUrl
        }), migration && migrationState === "done" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_MigrationSuccess__WEBPACK_IMPORTED_MODULE_10__.MigrationSuccess, {
          migration: migration,
          restartMigration: handleCreateMigration,
          isRestarting: createCloudMigrationResult.isLoading,
          checkoutUrl: checkoutUrl
        }), migration && migrationState === "error" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_MigrationError__WEBPACK_IMPORTED_MODULE_8__.MigrationError, {
          migration: migration
        }), createCloudMigrationResult.isError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_MigrationCreationError__WEBPACK_IMPORTED_MODULE_7__.MigrationCreationError, {
          error: createCloudMigrationResult.error
        })]
      })
    })
  });
};
_s(CloudPanel, "jbUP6JBNC8D6bf45VNZa9+7kYUE=", false, function () {
  return [metabase_lib_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch, metabase_api__WEBPACK_IMPORTED_MODULE_1__.useGetCloudMigrationQuery, metabase_common_hooks__WEBPACK_IMPORTED_MODULE_2__.useSetting, metabase_api__WEBPACK_IMPORTED_MODULE_1__.useCreateCloudMigrationMutation];
});
_c = CloudPanel;
var _c;
__webpack_require__.$Refresh$.register(_c, "CloudPanel");

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
//# sourceMappingURL=app-main.365b44f45e2a17f0edac.hot-update.js.map