/*!
 * /*
 * * This file is subject to the terms and conditions defined in
 *  * file 'LICENSE.txt', which is part of this source code package.
 *  * /
 *
 */
"use strict";
self["webpackHotUpdate"]("app-main",{

/***/ "./admin/routes.jsx":
/*!**************************!*\
  !*** ./admin/routes.jsx ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "../../../node_modules/react-router/es/index.js");
/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-redux */ "../../../node_modules/react-router-redux/lib/index.js");
/* harmony import */ var redux_auth_wrapper_history3_redirect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-auth-wrapper/history3/redirect */ "../../../node_modules/redux-auth-wrapper/history3/redirect.js");
/* harmony import */ var ttag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ttag */ "../../../node_modules/ttag/index.js");
/* harmony import */ var ttag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ttag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var metabase_admin_app_components_AdminApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! metabase/admin/app/components/AdminApp */ "./admin/app/components/AdminApp/index.ts");
/* harmony import */ var metabase_admin_databases_containers_DatabaseEditApp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! metabase/admin/databases/containers/DatabaseEditApp */ "./admin/databases/containers/DatabaseEditApp.tsx");
/* harmony import */ var metabase_admin_databases_containers_DatabaseListApp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! metabase/admin/databases/containers/DatabaseListApp */ "./admin/databases/containers/DatabaseListApp.jsx");
/* harmony import */ var metabase_admin_datamodel_containers_DataModelApp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! metabase/admin/datamodel/containers/DataModelApp */ "./admin/datamodel/containers/DataModelApp/index.ts");
/* harmony import */ var metabase_admin_datamodel_containers_RevisionHistoryApp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! metabase/admin/datamodel/containers/RevisionHistoryApp */ "./admin/datamodel/containers/RevisionHistoryApp.jsx");
/* harmony import */ var metabase_admin_datamodel_containers_SegmentApp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! metabase/admin/datamodel/containers/SegmentApp */ "./admin/datamodel/containers/SegmentApp.jsx");
/* harmony import */ var metabase_admin_datamodel_containers_SegmentListApp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! metabase/admin/datamodel/containers/SegmentListApp */ "./admin/datamodel/containers/SegmentListApp.jsx");
/* harmony import */ var metabase_admin_datamodel_metadata_routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! metabase/admin/datamodel/metadata/routes */ "./admin/datamodel/metadata/routes.tsx");
/* harmony import */ var metabase_admin_people_containers_AdminPeopleApp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! metabase/admin/people/containers/AdminPeopleApp */ "./admin/people/containers/AdminPeopleApp.tsx");
/* harmony import */ var metabase_admin_people_containers_EditUserModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! metabase/admin/people/containers/EditUserModal */ "./admin/people/containers/EditUserModal.tsx");
/* harmony import */ var metabase_admin_people_containers_GroupDetailApp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! metabase/admin/people/containers/GroupDetailApp */ "./admin/people/containers/GroupDetailApp.jsx");
/* harmony import */ var metabase_admin_people_containers_GroupsListingApp__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! metabase/admin/people/containers/GroupsListingApp */ "./admin/people/containers/GroupsListingApp.jsx");
/* harmony import */ var metabase_admin_people_containers_NewUserModal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! metabase/admin/people/containers/NewUserModal */ "./admin/people/containers/NewUserModal.tsx");
/* harmony import */ var metabase_admin_people_containers_PeopleListingApp__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! metabase/admin/people/containers/PeopleListingApp */ "./admin/people/containers/PeopleListingApp.jsx");
/* harmony import */ var metabase_admin_people_containers_UserActivationModal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! metabase/admin/people/containers/UserActivationModal */ "./admin/people/containers/UserActivationModal.jsx");
/* harmony import */ var metabase_admin_people_containers_UserPasswordResetModal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! metabase/admin/people/containers/UserPasswordResetModal */ "./admin/people/containers/UserPasswordResetModal.jsx");
/* harmony import */ var metabase_admin_people_containers_UserSuccessModal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! metabase/admin/people/containers/UserSuccessModal */ "./admin/people/containers/UserSuccessModal.jsx");
/* harmony import */ var metabase_admin_performance_components_PerformanceApp__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! metabase/admin/performance/components/PerformanceApp */ "./admin/performance/components/PerformanceApp.tsx");
/* harmony import */ var metabase_admin_permissions_routes__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! metabase/admin/permissions/routes */ "./admin/permissions/routes.jsx");
/* harmony import */ var metabase_admin_settings_app_components_SettingsEditor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! metabase/admin/settings/app/components/SettingsEditor */ "./admin/settings/app/components/SettingsEditor/index.ts");
/* harmony import */ var metabase_admin_tasks_components_Help__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! metabase/admin/tasks/components/Help */ "./admin/tasks/components/Help/index.ts");
/* harmony import */ var metabase_admin_tasks_components_Logs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! metabase/admin/tasks/components/Logs */ "./admin/tasks/components/Logs/index.ts");
/* harmony import */ var metabase_admin_tasks_containers_JobInfoApp__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! metabase/admin/tasks/containers/JobInfoApp */ "./admin/tasks/containers/JobInfoApp.jsx");
/* harmony import */ var metabase_admin_tasks_containers_JobTriggersModal__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! metabase/admin/tasks/containers/JobTriggersModal */ "./admin/tasks/containers/JobTriggersModal.jsx");
/* harmony import */ var metabase_admin_tasks_containers_ModelCacheRefreshJobs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! metabase/admin/tasks/containers/ModelCacheRefreshJobs */ "./admin/tasks/containers/ModelCacheRefreshJobs/index.ts");
/* harmony import */ var metabase_admin_tasks_containers_TaskModal__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! metabase/admin/tasks/containers/TaskModal */ "./admin/tasks/containers/TaskModal.tsx");
/* harmony import */ var metabase_admin_tasks_containers_TasksApp__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! metabase/admin/tasks/containers/TasksApp */ "./admin/tasks/containers/TasksApp.tsx");
/* harmony import */ var metabase_admin_tasks_containers_TroubleshootingApp__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! metabase/admin/tasks/containers/TroubleshootingApp */ "./admin/tasks/containers/TroubleshootingApp.jsx");
/* harmony import */ var metabase_admin_tools_containers_Tools__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! metabase/admin/tools/containers/Tools */ "./admin/tools/containers/Tools.tsx");
/* harmony import */ var metabase_admin_utils__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! metabase/admin/utils */ "./admin/utils.js");
/* harmony import */ var metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! metabase/css/core/index.css */ "./css/core/index.css");
/* harmony import */ var metabase_hoc_Background__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! metabase/hoc/Background */ "./hoc/Background.jsx");
/* harmony import */ var metabase_hoc_ModalRoute__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! metabase/hoc/ModalRoute */ "./hoc/ModalRoute.tsx");
/* harmony import */ var metabase_hoc_Title__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! metabase/hoc/Title */ "./hoc/Title.jsx");
/* harmony import */ var metabase_plugins__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! metabase/plugins */ "./plugins/index.ts");
/* harmony import */ var metabase_selectors_settings__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! metabase/selectors/settings */ "./selectors/settings.ts");
/* harmony import */ var _performance_types__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./performance/types */ "./admin/performance/types.ts");
/* harmony import */ var _settings_containers_RedirectToAllowedSettings__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./settings/containers/RedirectToAllowedSettings */ "./admin/settings/containers/RedirectToAllowedSettings.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! react/jsx-runtime */ "../../../node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");














































const UserCanAccessTools = (0,redux_auth_wrapper_history3_redirect__WEBPACK_IMPORTED_MODULE_3__.connectedReduxRedirect)({
  wrapperDisplayName: "UserCanAccessTools",
  redirectPath: "/admin",
  allowRedirectBack: false,
  authenticatedSelector: state => {
    if (metabase_plugins__WEBPACK_IMPORTED_MODULE_39__.PLUGIN_ADMIN_TOOLS.EXTRA_ROUTES.length > 0) {
      return true;
    }
    const isModelPersistenceEnabled = (0,metabase_selectors_settings__WEBPACK_IMPORTED_MODULE_40__.getSetting)(state, "persisted-models-enabled");
    const hasLoadedSettings = typeof isModelPersistenceEnabled === "boolean";
    return !hasLoadedSettings || isModelPersistenceEnabled;
  },
  redirectAction: react_router_redux__WEBPACK_IMPORTED_MODULE_2__.routerActions.replace
});
const getRoutes = (store, CanAccessSettings, IsAdmin) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsx)(metabase_hoc_Title__WEBPACK_IMPORTED_MODULE_38__.Route, {
  path: "/admin",
  component: (0,metabase_hoc_Background__WEBPACK_IMPORTED_MODULE_36__.withBackground)(metabase_css_core_index_css__WEBPACK_IMPORTED_MODULE_35__["default"].bgWhite)(CanAccessSettings),
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsxs)(metabase_hoc_Title__WEBPACK_IMPORTED_MODULE_38__.Route, {
    title: ttag__WEBPACK_IMPORTED_MODULE_4__.t`Admin`,
    component: metabase_admin_app_components_AdminApp__WEBPACK_IMPORTED_MODULE_5__["default"],
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_1__.IndexRoute, {
      component: _settings_containers_RedirectToAllowedSettings__WEBPACK_IMPORTED_MODULE_42__["default"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsxs)(metabase_hoc_Title__WEBPACK_IMPORTED_MODULE_38__.Route, {
      path: "databases",
      title: ttag__WEBPACK_IMPORTED_MODULE_4__.t`Databases`,
      component: (0,metabase_admin_utils__WEBPACK_IMPORTED_MODULE_34__.createAdminRouteGuard)("databases"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_1__.IndexRoute, {
        component: metabase_admin_databases_containers_DatabaseListApp__WEBPACK_IMPORTED_MODULE_7__["default"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsx)(metabase_hoc_Title__WEBPACK_IMPORTED_MODULE_38__.Route, {
        path: "create",
        component: metabase_admin_databases_containers_DatabaseEditApp__WEBPACK_IMPORTED_MODULE_6__["default"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsx)(metabase_hoc_Title__WEBPACK_IMPORTED_MODULE_38__.Route, {
        path: ":databaseId",
        component: metabase_admin_databases_containers_DatabaseEditApp__WEBPACK_IMPORTED_MODULE_6__["default"]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsx)(metabase_hoc_Title__WEBPACK_IMPORTED_MODULE_38__.Route, {
      path: "datamodel",
      component: (0,metabase_admin_utils__WEBPACK_IMPORTED_MODULE_34__.createAdminRouteGuard)("data-model"),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsxs)(metabase_hoc_Title__WEBPACK_IMPORTED_MODULE_38__.Route, {
        title: ttag__WEBPACK_IMPORTED_MODULE_4__.t`Table Metadata`,
        component: metabase_admin_datamodel_containers_DataModelApp__WEBPACK_IMPORTED_MODULE_8__["default"],
        children: [(0,metabase_admin_datamodel_metadata_routes__WEBPACK_IMPORTED_MODULE_12__.getMetadataRoutes)(), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsx)(metabase_hoc_Title__WEBPACK_IMPORTED_MODULE_38__.Route, {
          path: "segments",
          component: metabase_admin_datamodel_containers_SegmentListApp__WEBPACK_IMPORTED_MODULE_11__["default"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsx)(metabase_hoc_Title__WEBPACK_IMPORTED_MODULE_38__.Route, {
          path: "segment/create",
          component: metabase_admin_datamodel_containers_SegmentApp__WEBPACK_IMPORTED_MODULE_10__["default"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsx)(metabase_hoc_Title__WEBPACK_IMPORTED_MODULE_38__.Route, {
          path: "segment/:id",
          component: metabase_admin_datamodel_containers_SegmentApp__WEBPACK_IMPORTED_MODULE_10__["default"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsx)(metabase_hoc_Title__WEBPACK_IMPORTED_MODULE_38__.Route, {
          path: "segment/:id/revisions",
          component: metabase_admin_datamodel_containers_RevisionHistoryApp__WEBPACK_IMPORTED_MODULE_9__["default"]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsx)(metabase_hoc_Title__WEBPACK_IMPORTED_MODULE_38__.Route, {
      path: "people",
      component: (0,metabase_admin_utils__WEBPACK_IMPORTED_MODULE_34__.createAdminRouteGuard)("people"),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsxs)(metabase_hoc_Title__WEBPACK_IMPORTED_MODULE_38__.Route, {
        title: ttag__WEBPACK_IMPORTED_MODULE_4__.t`People`,
        component: metabase_admin_people_containers_AdminPeopleApp__WEBPACK_IMPORTED_MODULE_13__.AdminPeopleApp,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_1__.IndexRoute, {
          component: metabase_admin_people_containers_PeopleListingApp__WEBPACK_IMPORTED_MODULE_18__["default"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsxs)(metabase_hoc_Title__WEBPACK_IMPORTED_MODULE_38__.Route, {
          path: "groups",
          title: ttag__WEBPACK_IMPORTED_MODULE_4__.t`Groups`,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_1__.IndexRoute, {
            component: metabase_admin_people_containers_GroupsListingApp__WEBPACK_IMPORTED_MODULE_16__["default"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsx)(metabase_hoc_Title__WEBPACK_IMPORTED_MODULE_38__.Route, {
            path: ":groupId",
            component: metabase_admin_people_containers_GroupDetailApp__WEBPACK_IMPORTED_MODULE_15__["default"]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsx)(metabase_hoc_Title__WEBPACK_IMPORTED_MODULE_38__.Route, {
          path: "",
          component: metabase_admin_people_containers_PeopleListingApp__WEBPACK_IMPORTED_MODULE_18__["default"],
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsx)(metabase_hoc_ModalRoute__WEBPACK_IMPORTED_MODULE_37__.ModalRoute, {
            path: "new",
            modal: metabase_admin_people_containers_NewUserModal__WEBPACK_IMPORTED_MODULE_17__.NewUserModal
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsxs)(metabase_hoc_Title__WEBPACK_IMPORTED_MODULE_38__.Route, {
          path: ":userId",
          component: metabase_admin_people_containers_PeopleListingApp__WEBPACK_IMPORTED_MODULE_18__["default"],
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_1__.IndexRedirect, {
            to: "/admin/people"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsx)(metabase_hoc_ModalRoute__WEBPACK_IMPORTED_MODULE_37__.ModalRoute, {
            path: "edit",
            modal: metabase_admin_people_containers_EditUserModal__WEBPACK_IMPORTED_MODULE_14__.EditUserModal
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsx)(metabase_hoc_ModalRoute__WEBPACK_IMPORTED_MODULE_37__.ModalRoute, {
            path: "success",
            modal: metabase_admin_people_containers_UserSuccessModal__WEBPACK_IMPORTED_MODULE_21__["default"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsx)(metabase_hoc_ModalRoute__WEBPACK_IMPORTED_MODULE_37__.ModalRoute, {
            path: "reset",
            modal: metabase_admin_people_containers_UserPasswordResetModal__WEBPACK_IMPORTED_MODULE_20__["default"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsx)(metabase_hoc_ModalRoute__WEBPACK_IMPORTED_MODULE_37__.ModalRoute, {
            path: "deactivate",
            modal: metabase_admin_people_containers_UserActivationModal__WEBPACK_IMPORTED_MODULE_19__["default"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsx)(metabase_hoc_ModalRoute__WEBPACK_IMPORTED_MODULE_37__.ModalRoute, {
            path: "reactivate",
            modal: metabase_admin_people_containers_UserActivationModal__WEBPACK_IMPORTED_MODULE_19__["default"]
          }), metabase_plugins__WEBPACK_IMPORTED_MODULE_39__.PLUGIN_ADMIN_USER_MENU_ROUTES.map((getRoutes, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: getRoutes(store)
          }, index))]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsxs)(metabase_hoc_Title__WEBPACK_IMPORTED_MODULE_38__.Route, {
      path: "settings",
      component: (0,metabase_admin_utils__WEBPACK_IMPORTED_MODULE_34__.createAdminRouteGuard)("settings"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_1__.IndexRoute, {
        component: (0,metabase_admin_utils__WEBPACK_IMPORTED_MODULE_34__.createAdminRedirect)("setup", "general")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsx)(metabase_hoc_Title__WEBPACK_IMPORTED_MODULE_38__.Route, {
        title: ttag__WEBPACK_IMPORTED_MODULE_4__.t`Settings`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsx)(metabase_hoc_Title__WEBPACK_IMPORTED_MODULE_38__.Route, {
          path: "*",
          component: metabase_admin_settings_app_components_SettingsEditor__WEBPACK_IMPORTED_MODULE_24__.SettingsEditor
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsx)(metabase_hoc_Title__WEBPACK_IMPORTED_MODULE_38__.Route, {
      path: "permissions",
      component: IsAdmin,
      children: (0,metabase_admin_permissions_routes__WEBPACK_IMPORTED_MODULE_23__["default"])(store)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsxs)(metabase_hoc_Title__WEBPACK_IMPORTED_MODULE_38__.Route, {
      path: "performance",
      component: (0,metabase_admin_utils__WEBPACK_IMPORTED_MODULE_34__.createAdminRouteGuard)("performance"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_1__.IndexRoute, {
        title: ttag__WEBPACK_IMPORTED_MODULE_4__.t`Performance`,
        path: "",
        component: metabase_admin_performance_components_PerformanceApp__WEBPACK_IMPORTED_MODULE_22__.PerformanceApp
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsx)(metabase_hoc_Title__WEBPACK_IMPORTED_MODULE_38__.Route, {
        title: ttag__WEBPACK_IMPORTED_MODULE_4__.t`Model persistence`,
        path: _performance_types__WEBPACK_IMPORTED_MODULE_41__.PerformanceTabId.Models,
        component: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsx)(metabase_admin_performance_components_PerformanceApp__WEBPACK_IMPORTED_MODULE_22__.PerformanceApp, {
          tabId: _performance_types__WEBPACK_IMPORTED_MODULE_41__.PerformanceTabId.Models
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsx)(metabase_hoc_Title__WEBPACK_IMPORTED_MODULE_38__.Route, {
      path: "tools",
      component: UserCanAccessTools((0,metabase_admin_utils__WEBPACK_IMPORTED_MODULE_34__.createAdminRouteGuard)("tools")),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsxs)(metabase_hoc_Title__WEBPACK_IMPORTED_MODULE_38__.Route, {
        title: ttag__WEBPACK_IMPORTED_MODULE_4__.t`Tools`,
        component: metabase_admin_tools_containers_Tools__WEBPACK_IMPORTED_MODULE_33__["default"],
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsx)(react_router__WEBPACK_IMPORTED_MODULE_1__.IndexRedirect, {
          to: metabase_plugins__WEBPACK_IMPORTED_MODULE_39__.PLUGIN_ADMIN_TOOLS.INDEX_ROUTE
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsx)(metabase_hoc_Title__WEBPACK_IMPORTED_MODULE_38__.Route, {
          path: "model-caching",
          title: ttag__WEBPACK_IMPORTED_MODULE_4__.t`Model Caching Log`,
          component: metabase_admin_tasks_containers_ModelCacheRefreshJobs__WEBPACK_IMPORTED_MODULE_29__.ModelCacheRefreshJobs,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsx)(metabase_hoc_ModalRoute__WEBPACK_IMPORTED_MODULE_37__.ModalRoute, {
            path: ":jobId",
            modal: metabase_admin_tasks_containers_ModelCacheRefreshJobs__WEBPACK_IMPORTED_MODULE_29__.ModelCacheRefreshJobModal
          })
        }), metabase_plugins__WEBPACK_IMPORTED_MODULE_39__.PLUGIN_ADMIN_TOOLS.EXTRA_ROUTES]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_43__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: metabase_plugins__WEBPACK_IMPORTED_MODULE_39__.PLUGIN_ADMIN_ROUTES.map(getRoutes => getRoutes(store))
    })]
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRoutes);

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
//# sourceMappingURL=app-main.5d9774d5d9a82933a047.hot-update.js.map