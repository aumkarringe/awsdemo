/*!
 * /*
 * * This file is subject to the terms and conditions defined in
 *  * file 'LICENSE.txt', which is part of this source code package.
 *  * /
 *
 */
"use strict";
self["webpackHotUpdate"]("app-main",{

/***/ "./plugins/index.ts":
/*!**************************!*\
  !*** ./plugins/index.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PLUGIN_ADMIN_ALLOWED_PATH_GETTERS: () => (/* binding */ PLUGIN_ADMIN_ALLOWED_PATH_GETTERS),
/* harmony export */   PLUGIN_ADMIN_NAV_ITEMS: () => (/* binding */ PLUGIN_ADMIN_NAV_ITEMS),
/* harmony export */   PLUGIN_ADMIN_PERMISSIONS_DATABASE_ACTIONS: () => (/* binding */ PLUGIN_ADMIN_PERMISSIONS_DATABASE_ACTIONS),
/* harmony export */   PLUGIN_ADMIN_PERMISSIONS_DATABASE_GROUP_ROUTES: () => (/* binding */ PLUGIN_ADMIN_PERMISSIONS_DATABASE_GROUP_ROUTES),
/* harmony export */   PLUGIN_ADMIN_PERMISSIONS_DATABASE_POST_ACTIONS: () => (/* binding */ PLUGIN_ADMIN_PERMISSIONS_DATABASE_POST_ACTIONS),
/* harmony export */   PLUGIN_ADMIN_PERMISSIONS_DATABASE_ROUTES: () => (/* binding */ PLUGIN_ADMIN_PERMISSIONS_DATABASE_ROUTES),
/* harmony export */   PLUGIN_ADMIN_PERMISSIONS_TABLE_FIELDS_ACTIONS: () => (/* binding */ PLUGIN_ADMIN_PERMISSIONS_TABLE_FIELDS_ACTIONS),
/* harmony export */   PLUGIN_ADMIN_PERMISSIONS_TABLE_FIELDS_CONFIRMATIONS: () => (/* binding */ PLUGIN_ADMIN_PERMISSIONS_TABLE_FIELDS_CONFIRMATIONS),
/* harmony export */   PLUGIN_ADMIN_PERMISSIONS_TABLE_FIELDS_OPTIONS: () => (/* binding */ PLUGIN_ADMIN_PERMISSIONS_TABLE_FIELDS_OPTIONS),
/* harmony export */   PLUGIN_ADMIN_PERMISSIONS_TABLE_FIELDS_POST_ACTION: () => (/* binding */ PLUGIN_ADMIN_PERMISSIONS_TABLE_FIELDS_POST_ACTION),
/* harmony export */   PLUGIN_ADMIN_PERMISSIONS_TABLE_GROUP_ROUTES: () => (/* binding */ PLUGIN_ADMIN_PERMISSIONS_TABLE_GROUP_ROUTES),
/* harmony export */   PLUGIN_ADMIN_PERMISSIONS_TABLE_ROUTES: () => (/* binding */ PLUGIN_ADMIN_PERMISSIONS_TABLE_ROUTES),
/* harmony export */   PLUGIN_ADMIN_ROUTES: () => (/* binding */ PLUGIN_ADMIN_ROUTES),
/* harmony export */   PLUGIN_ADMIN_SETTINGS_UPDATES: () => (/* binding */ PLUGIN_ADMIN_SETTINGS_UPDATES),
/* harmony export */   PLUGIN_ADMIN_TOOLS: () => (/* binding */ PLUGIN_ADMIN_TOOLS),
/* harmony export */   PLUGIN_ADMIN_USER_FORM_FIELDS: () => (/* binding */ PLUGIN_ADMIN_USER_FORM_FIELDS),
/* harmony export */   PLUGIN_ADMIN_USER_MENU_ITEMS: () => (/* binding */ PLUGIN_ADMIN_USER_MENU_ITEMS),
/* harmony export */   PLUGIN_ADMIN_USER_MENU_ROUTES: () => (/* binding */ PLUGIN_ADMIN_USER_MENU_ROUTES),
/* harmony export */   PLUGIN_ADVANCED_PERMISSIONS: () => (/* binding */ PLUGIN_ADVANCED_PERMISSIONS),
/* harmony export */   PLUGIN_APPLICATION_PERMISSIONS: () => (/* binding */ PLUGIN_APPLICATION_PERMISSIONS),
/* harmony export */   PLUGIN_APP_INIT_FUNCTIONS: () => (/* binding */ PLUGIN_APP_INIT_FUNCTIONS),
/* harmony export */   PLUGIN_AUTH_PROVIDERS: () => (/* binding */ PLUGIN_AUTH_PROVIDERS),
/* harmony export */   PLUGIN_CACHING: () => (/* binding */ PLUGIN_CACHING),
/* harmony export */   PLUGIN_COLLECTIONS: () => (/* binding */ PLUGIN_COLLECTIONS),
/* harmony export */   PLUGIN_COLLECTION_COMPONENTS: () => (/* binding */ PLUGIN_COLLECTION_COMPONENTS),
/* harmony export */   PLUGIN_CONTENT_VERIFICATION: () => (/* binding */ PLUGIN_CONTENT_VERIFICATION),
/* harmony export */   PLUGIN_DASHBOARD_HEADER: () => (/* binding */ PLUGIN_DASHBOARD_HEADER),
/* harmony export */   PLUGIN_DASHBOARD_SUBSCRIPTION_PARAMETERS_SECTION_OVERRIDE: () => (/* binding */ PLUGIN_DASHBOARD_SUBSCRIPTION_PARAMETERS_SECTION_OVERRIDE),
/* harmony export */   PLUGIN_DATA_PERMISSIONS: () => (/* binding */ PLUGIN_DATA_PERMISSIONS),
/* harmony export */   PLUGIN_EMBEDDING: () => (/* binding */ PLUGIN_EMBEDDING),
/* harmony export */   PLUGIN_FEATURE_LEVEL_PERMISSIONS: () => (/* binding */ PLUGIN_FEATURE_LEVEL_PERMISSIONS),
/* harmony export */   PLUGIN_FORM_WIDGETS: () => (/* binding */ PLUGIN_FORM_WIDGETS),
/* harmony export */   PLUGIN_GROUP_MANAGERS: () => (/* binding */ PLUGIN_GROUP_MANAGERS),
/* harmony export */   PLUGIN_IS_EE_BUILD: () => (/* binding */ PLUGIN_IS_EE_BUILD),
/* harmony export */   PLUGIN_IS_PASSWORD_USER: () => (/* binding */ PLUGIN_IS_PASSWORD_USER),
/* harmony export */   PLUGIN_LANDING_PAGE: () => (/* binding */ PLUGIN_LANDING_PAGE),
/* harmony export */   PLUGIN_LDAP_FORM_FIELDS: () => (/* binding */ PLUGIN_LDAP_FORM_FIELDS),
/* harmony export */   PLUGIN_LLM_AUTODESCRIPTION: () => (/* binding */ PLUGIN_LLM_AUTODESCRIPTION),
/* harmony export */   PLUGIN_LOGO_ICON_COMPONENTS: () => (/* binding */ PLUGIN_LOGO_ICON_COMPONENTS),
/* harmony export */   PLUGIN_MODEL_PERSISTENCE: () => (/* binding */ PLUGIN_MODEL_PERSISTENCE),
/* harmony export */   PLUGIN_MODERATION: () => (/* binding */ PLUGIN_MODERATION),
/* harmony export */   PLUGIN_QUERY_BUILDER_HEADER: () => (/* binding */ PLUGIN_QUERY_BUILDER_HEADER),
/* harmony export */   PLUGIN_REDUCERS: () => (/* binding */ PLUGIN_REDUCERS),
/* harmony export */   PLUGIN_REDUX_MIDDLEWARES: () => (/* binding */ PLUGIN_REDUX_MIDDLEWARES),
/* harmony export */   PLUGIN_SELECTORS: () => (/* binding */ PLUGIN_SELECTORS),
/* harmony export */   PLUGIN_SNIPPET_SIDEBAR_HEADER_BUTTONS: () => (/* binding */ PLUGIN_SNIPPET_SIDEBAR_HEADER_BUTTONS),
/* harmony export */   PLUGIN_SNIPPET_SIDEBAR_MODALS: () => (/* binding */ PLUGIN_SNIPPET_SIDEBAR_MODALS),
/* harmony export */   PLUGIN_SNIPPET_SIDEBAR_PLUS_MENU_OPTIONS: () => (/* binding */ PLUGIN_SNIPPET_SIDEBAR_PLUS_MENU_OPTIONS),
/* harmony export */   PLUGIN_SNIPPET_SIDEBAR_ROW_RENDERERS: () => (/* binding */ PLUGIN_SNIPPET_SIDEBAR_ROW_RENDERERS),
/* harmony export */   PLUGIN_UPLOAD_MANAGEMENT: () => (/* binding */ PLUGIN_UPLOAD_MANAGEMENT)
/* harmony export */ });
/* harmony import */ var ttag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ttag */ "../../../node_modules/ttag/index.js");
/* harmony import */ var ttag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ttag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ "../../../node_modules/underscore/modules/index-all.js");
/* harmony import */ var assets_img_no_results_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/img/no_results.svg */ "../../../resources/frontend_client/app/assets/img/no_results.svg");
/* harmony import */ var metabase_admin_performance_constants_complex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! metabase/admin/performance/constants/complex */ "./admin/performance/constants/complex.ts");
/* harmony import */ var metabase_admin_permissions_constants_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! metabase/admin/permissions/constants/messages */ "./admin/permissions/constants/messages.ts");
/* harmony import */ var metabase_admin_permissions_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! metabase/admin/permissions/types */ "./admin/permissions/types.ts");
/* harmony import */ var metabase_lib_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! metabase/lib/icon */ "./lib/icon.ts");
/* harmony import */ var metabase_plugins_components_PluginPlaceholder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! metabase/plugins/components/PluginPlaceholder */ "./plugins/components/PluginPlaceholder/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");









// functions called when the application is started
const PLUGIN_APP_INIT_FUNCTIONS = [];

// function to determine the landing page
const PLUGIN_LANDING_PAGE = [];
const PLUGIN_REDUX_MIDDLEWARES = [];

// override for LogoIcon
const PLUGIN_LOGO_ICON_COMPONENTS = [];

// admin nav items and routes
const PLUGIN_ADMIN_NAV_ITEMS = [];
const PLUGIN_ADMIN_ROUTES = [];
const PLUGIN_ADMIN_ALLOWED_PATH_GETTERS = [];
const PLUGIN_ADMIN_TOOLS = {
  INDEX_ROUTE: "model-caching",
  EXTRA_ROUTES_INFO: [],
  EXTRA_ROUTES: []
};

// functions that update the sections
const PLUGIN_ADMIN_SETTINGS_UPDATES = [];

// admin permissions
const PLUGIN_ADMIN_PERMISSIONS_DATABASE_ROUTES = [];
const PLUGIN_ADMIN_PERMISSIONS_DATABASE_GROUP_ROUTES = [];
const PLUGIN_ADMIN_PERMISSIONS_DATABASE_POST_ACTIONS = {
  impersonated: null
};
const PLUGIN_ADMIN_PERMISSIONS_DATABASE_ACTIONS = {
  impersonated: []
};
const PLUGIN_ADMIN_PERMISSIONS_TABLE_ROUTES = [];
const PLUGIN_ADMIN_PERMISSIONS_TABLE_GROUP_ROUTES = [];
const PLUGIN_ADMIN_PERMISSIONS_TABLE_FIELDS_OPTIONS = [];
const PLUGIN_ADMIN_PERMISSIONS_TABLE_FIELDS_CONFIRMATIONS = [];
const PLUGIN_ADMIN_PERMISSIONS_TABLE_FIELDS_ACTIONS = {
  sandboxed: []
};
const PLUGIN_ADMIN_PERMISSIONS_TABLE_FIELDS_POST_ACTION = {
  sandboxed: null
};
const PLUGIN_DATA_PERMISSIONS = {
  permissionsPayloadExtraSelectors: [],
  hasChanges: [],
  upgradeViewPermissionsIfNeeded: null,
  shouldRestrictNativeQueryPermissions: () => false
};

// user form fields, e.x. login attributes
const PLUGIN_ADMIN_USER_FORM_FIELDS = {
  FormLoginAttributes: metabase_plugins_components_PluginPlaceholder__WEBPACK_IMPORTED_MODULE_7__["default"]
};

// menu items in people management tab
const PLUGIN_ADMIN_USER_MENU_ITEMS = [];
const PLUGIN_ADMIN_USER_MENU_ROUTES = [];

// authentication providers
const PLUGIN_AUTH_PROVIDERS = [];
const PLUGIN_LDAP_FORM_FIELDS = {
  formFieldAttributes: [],
  defaultableFormFieldAttributes: [],
  formFieldsSchemas: {},
  UserProvisioning: () => null
};

// Only show the password tab in account settings if these functions all return true.
// Otherwise, the user is logged in via SSO and should hide first name, last name, and email field in profile settings metabase#23298.
const PLUGIN_IS_PASSWORD_USER = [];

// selectors that customize behavior between app versions
const PLUGIN_SELECTORS = {
  canWhitelabel: _state => false,
  getLoadingMessageFactory: _state => isSlow => isSlow ? ttag__WEBPACK_IMPORTED_MODULE_0__.t`Waiting for results...` : ttag__WEBPACK_IMPORTED_MODULE_0__.t`Doing science...`,
  getIsWhiteLabeling: _state => false,
  // eslint-disable-next-line no-literal-metabase-strings -- This is the actual Metabase name, so we don't want to translate it.
  getApplicationName: _state => "DataLM.ai",
  getShowMetabaseLinks: _state => true,
  getLoginPageIllustration: _state => {
    return {
      src: "app/img/bridge.svg",
      isDefault: true
    };
  },
  getLandingPageIllustration: _state => {
    return {
      src: "app/img/bridge.svg",
      isDefault: true
    };
  },
  getNoDataIllustration: _state => {
    return assets_img_no_results_svg__WEBPACK_IMPORTED_MODULE_2__;
  },
  getNoObjectIllustration: _state => {
    return assets_img_no_results_svg__WEBPACK_IMPORTED_MODULE_2__;
  }
};
const PLUGIN_FORM_WIDGETS = {};

// snippet sidebar
const PLUGIN_SNIPPET_SIDEBAR_PLUS_MENU_OPTIONS = [];
const PLUGIN_SNIPPET_SIDEBAR_ROW_RENDERERS = {};
const PLUGIN_SNIPPET_SIDEBAR_MODALS = [];
const PLUGIN_SNIPPET_SIDEBAR_HEADER_BUTTONS = [];
const PLUGIN_DASHBOARD_SUBSCRIPTION_PARAMETERS_SECTION_OVERRIDE = {
  Component: undefined
};
const PLUGIN_LLM_AUTODESCRIPTION = {
  isEnabled: () => false,
  LLMSuggestQuestionInfo: metabase_plugins_components_PluginPlaceholder__WEBPACK_IMPORTED_MODULE_7__["default"]
};
const AUTHORITY_LEVEL_REGULAR = {
  type: null,
  name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Regular`,
  icon: "folder"
};
const PLUGIN_COLLECTIONS = {
  AUTHORITY_LEVEL: {
    [JSON.stringify(AUTHORITY_LEVEL_REGULAR.type)]: AUTHORITY_LEVEL_REGULAR
  },
  COLLECTION_TYPES: {
    [JSON.stringify(AUTHORITY_LEVEL_REGULAR.type)]: AUTHORITY_LEVEL_REGULAR
  },
  REGULAR_COLLECTION: AUTHORITY_LEVEL_REGULAR,
  isRegularCollection: _ => true,
  getCollectionType: _ => AUTHORITY_LEVEL_REGULAR,
  getInstanceAnalyticsCustomCollection: _collections => null,
  CUSTOM_INSTANCE_ANALYTICS_COLLECTION_ENTITY_ID: "",
  INSTANCE_ANALYTICS_ADMIN_READONLY_MESSAGE: metabase_admin_permissions_constants_messages__WEBPACK_IMPORTED_MODULE_4__.UNABLE_TO_CHANGE_ADMIN_PERMISSIONS,
  getAuthorityLevelMenuItems: (_collection, _onUpdate) => [],
  getIcon: metabase_lib_icon__WEBPACK_IMPORTED_MODULE_6__.getIconBase,
  filterOutItemsFromInstanceAnalytics: items => items
};
const PLUGIN_COLLECTION_COMPONENTS = {
  CollectionAuthorityLevelIcon: metabase_plugins_components_PluginPlaceholder__WEBPACK_IMPORTED_MODULE_7__["default"],
  FormCollectionAuthorityLevelPicker: metabase_plugins_components_PluginPlaceholder__WEBPACK_IMPORTED_MODULE_7__["default"],
  CollectionInstanceAnalyticsIcon: metabase_plugins_components_PluginPlaceholder__WEBPACK_IMPORTED_MODULE_7__["default"]
};
const PLUGIN_MODERATION = {
  isEnabled: () => false,
  QuestionModerationIcon: metabase_plugins_components_PluginPlaceholder__WEBPACK_IMPORTED_MODULE_7__["default"],
  QuestionModerationSection: metabase_plugins_components_PluginPlaceholder__WEBPACK_IMPORTED_MODULE_7__["default"],
  QuestionModerationButton: metabase_plugins_components_PluginPlaceholder__WEBPACK_IMPORTED_MODULE_7__["default"],
  ModerationReviewBanner: metabase_plugins_components_PluginPlaceholder__WEBPACK_IMPORTED_MODULE_7__["default"],
  ModerationStatusIcon: metabase_plugins_components_PluginPlaceholder__WEBPACK_IMPORTED_MODULE_7__["default"],
  getQuestionIcon: metabase_plugins_components_PluginPlaceholder__WEBPACK_IMPORTED_MODULE_7__["default"],
  getStatusIcon: _moderated_status => undefined,
  getModerationTimelineEvents: (_reviews, _usersById, _currentUser) => [],
  getMenuItems: (_question, _isModerator, _reload) => []
};
const PLUGIN_CACHING = {
  cacheTTLFormField: null,
  dashboardCacheTTLFormField: null,
  questionCacheTTLFormField: null,
  getQuestionsImplicitCacheTTL: _question => null,
  StrategyFormLauncherPanel: metabase_plugins_components_PluginPlaceholder__WEBPACK_IMPORTED_MODULE_7__["default"],
  GranularControlsExplanation: metabase_plugins_components_PluginPlaceholder__WEBPACK_IMPORTED_MODULE_7__["default"],
  DashboardStrategySidebar: metabase_plugins_components_PluginPlaceholder__WEBPACK_IMPORTED_MODULE_7__["default"],
  SidebarCacheSection: metabase_plugins_components_PluginPlaceholder__WEBPACK_IMPORTED_MODULE_7__["default"],
  SidebarCacheForm: metabase_plugins_components_PluginPlaceholder__WEBPACK_IMPORTED_MODULE_7__["default"],
  InvalidateNowButton: metabase_plugins_components_PluginPlaceholder__WEBPACK_IMPORTED_MODULE_7__["default"],
  isEnabled: () => false,
  hasQuestionCacheSection: _question => false,
  canOverrideRootStrategy: false,
  strategies: metabase_admin_performance_constants_complex__WEBPACK_IMPORTED_MODULE_3__.strategies
};
const PLUGIN_REDUCERS = {
  applicationPermissionsPlugin: () => null,
  sandboxingPlugin: () => null,
  shared: () => null
};
const PLUGIN_ADVANCED_PERMISSIONS = {
  addDatabasePermissionOptions: (permissions, _database) => permissions,
  addSchemaPermissionOptions: (permissions, _value) => permissions,
  addTablePermissionOptions: (permissions, _value) => permissions,
  getDatabaseLimitedAccessPermission: _value => null,
  isAccessPermissionDisabled: (_value, _subject) => false,
  isRestrictivePermission: _value => false,
  shouldShowViewDataColumn: false,
  defaultViewDataPermission: metabase_admin_permissions_types__WEBPACK_IMPORTED_MODULE_5__.DataPermissionValue.UNRESTRICTED
};
const PLUGIN_FEATURE_LEVEL_PERMISSIONS = {
  getFeatureLevelDataPermissions: (_entityId, _groupId, _isAdmin, _permissions, _dataAccessPermissionValue, _defaultGroup, _permissionSubject) => {
    return [];
  },
  getDataColumns: _subject => [],
  getDownloadWidgetMessageOverride: _result => null,
  canDownloadResults: _result => true,
  dataModelQueryProps: {},
  databaseDetailsQueryProps: {}
};
const PLUGIN_APPLICATION_PERMISSIONS = {
  getRoutes: () => null,
  tabs: [],
  selectors: {
    canManageSubscriptions: _state => true
  }
};
const PLUGIN_GROUP_MANAGERS = {
  UserTypeToggle: () => null,
  UserTypeCell: null,
  getChangeMembershipConfirmation: () => null,
  getRemoveMembershipConfirmation: () => null,
  deleteGroup: null,
  confirmDeleteMembershipAction: null,
  confirmUpdateMembershipAction: null
};
const PLUGIN_MODEL_PERSISTENCE = {
  isModelLevelPersistenceEnabled: () => false,
  ModelCacheControl: metabase_plugins_components_PluginPlaceholder__WEBPACK_IMPORTED_MODULE_7__["default"],
  getMenuItems: (_question, _onChange) => ({})
};
const PLUGIN_EMBEDDING = {
  isEnabled: () => false,
  isInteractiveEmbeddingEnabled: _state => false
};
const PLUGIN_CONTENT_VERIFICATION = {
  VerifiedFilter: {},
  availableModelFilters: {},
  ModelFilterControls: () => null,
  sortModelsByVerification: (_a, _b) => 0,
  sortCollectionsByVerification: (_a, _b) => 0,
  useModelFilterSettings: () => [{}, underscore__WEBPACK_IMPORTED_MODULE_1__["default"].noop]
};
const PLUGIN_DASHBOARD_HEADER = {
  extraButtons: _dashboard => []
};
const PLUGIN_QUERY_BUILDER_HEADER = {
  extraButtons: _question => []
};
const PLUGIN_UPLOAD_MANAGEMENT = {
  UploadManagementTable: metabase_plugins_components_PluginPlaceholder__WEBPACK_IMPORTED_MODULE_7__["default"]
};
const PLUGIN_IS_EE_BUILD = {
  isEEBuild: () => false
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
//# sourceMappingURL=app-main.12d68cec592acf36ada0.hot-update.js.map