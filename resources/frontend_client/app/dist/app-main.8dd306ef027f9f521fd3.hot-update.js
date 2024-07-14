/*!
 * /*
 * * This file is subject to the terms and conditions defined in
 *  * file 'LICENSE.txt', which is part of this source code package.
 *  * /
 *
 */
"use strict";
self["webpackHotUpdate"]("app-main",{

/***/ "./admin/settings/selectors.js":
/*!*************************************!*\
  !*** ./admin/settings/selectors.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADMIN_SETTINGS_SECTIONS: () => (/* binding */ ADMIN_SETTINGS_SECTIONS),
/* harmony export */   getActiveSection: () => (/* binding */ getActiveSection),
/* harmony export */   getActiveSectionName: () => (/* binding */ getActiveSectionName),
/* harmony export */   getDerivedSettingValues: () => (/* binding */ getDerivedSettingValues),
/* harmony export */   getNewVersionAvailable: () => (/* binding */ getNewVersionAvailable),
/* harmony export */   getSections: () => (/* binding */ getSections),
/* harmony export */   getSectionsWithPlugins: () => (/* binding */ getSectionsWithPlugins),
/* harmony export */   getSettingValues: () => (/* binding */ getSettingValues),
/* harmony export */   getSettings: () => (/* binding */ getSettings)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @reduxjs/toolkit */ "../../../node_modules/reselect/dist/reselect.mjs");
/* harmony import */ var ttag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ttag */ "../../../node_modules/ttag/index.js");
/* harmony import */ var ttag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ttag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! underscore */ "../../../node_modules/underscore/modules/index-all.js");
/* harmony import */ var metabase_admin_settings_components_Email_SMTPConnectionForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! metabase/admin/settings/components/Email/SMTPConnectionForm */ "./admin/settings/components/Email/SMTPConnectionForm.tsx");
/* harmony import */ var metabase_components_Breadcrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! metabase/components/Breadcrumbs */ "./components/Breadcrumbs/index.jsx");
/* harmony import */ var metabase_components_DashboardSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! metabase/components/DashboardSelector */ "./components/DashboardSelector/index.ts");
/* harmony import */ var metabase_lib_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! metabase/lib/settings */ "./lib/settings.ts");
/* harmony import */ var metabase_plugins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! metabase/plugins */ "./plugins/index.ts");
/* harmony import */ var metabase_redux_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! metabase/redux/user */ "./redux/user.ts");
/* harmony import */ var metabase_selectors_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! metabase/selectors/user */ "./selectors/user.ts");
/* harmony import */ var _analytics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./analytics */ "./admin/settings/analytics.ts");
/* harmony import */ var _components_CloudPanel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/CloudPanel */ "./admin/settings/components/CloudPanel/index.ts");
/* harmony import */ var _components_Email_BccToggleWidget__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Email/BccToggleWidget */ "./admin/settings/components/Email/BccToggleWidget.tsx");
/* harmony import */ var _components_Email_SettingsEmailForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/Email/SettingsEmailForm */ "./admin/settings/components/Email/SettingsEmailForm.tsx");
/* harmony import */ var _components_SettingsLicense__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/SettingsLicense */ "./admin/settings/components/SettingsLicense/index.ts");
/* harmony import */ var _components_SettingsUpdatesForm_SettingsUpdatesForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/SettingsUpdatesForm/SettingsUpdatesForm */ "./admin/settings/components/SettingsUpdatesForm/SettingsUpdatesForm.jsx");
/* harmony import */ var _components_UploadSettings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/UploadSettings */ "./admin/settings/components/UploadSettings/index.ts");
/* harmony import */ var _components_widgets_CustomGeoJSONWidget__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/widgets/CustomGeoJSONWidget */ "./admin/settings/components/widgets/CustomGeoJSONWidget.jsx");
/* harmony import */ var _components_widgets_EmbeddingOption__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/widgets/EmbeddingOption */ "./admin/settings/components/widgets/EmbeddingOption/index.ts");
/* harmony import */ var _components_widgets_EmbeddingSwitchWidget__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/widgets/EmbeddingSwitchWidget */ "./admin/settings/components/widgets/EmbeddingSwitchWidget/index.ts");
/* harmony import */ var _components_widgets_FormattingWidget__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/widgets/FormattingWidget */ "./admin/settings/components/widgets/FormattingWidget.jsx");
/* harmony import */ var _components_widgets_HttpsOnlyWidget__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/widgets/HttpsOnlyWidget */ "./admin/settings/components/widgets/HttpsOnlyWidget.jsx");
/* harmony import */ var _components_widgets_PublicLinksListing__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/widgets/PublicLinksListing */ "./admin/settings/components/widgets/PublicLinksListing/index.js");
/* harmony import */ var _components_widgets_RedirectWidget__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/widgets/RedirectWidget */ "./admin/settings/components/widgets/RedirectWidget/index.ts");
/* harmony import */ var _components_widgets_SecretKeyWidget__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/widgets/SecretKeyWidget */ "./admin/settings/components/widgets/SecretKeyWidget/index.ts");
/* harmony import */ var _components_widgets_SettingCommaDelimitedInput__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/widgets/SettingCommaDelimitedInput */ "./admin/settings/components/widgets/SettingCommaDelimitedInput.jsx");
/* harmony import */ var _components_widgets_SiteUrlWidget__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/widgets/SiteUrlWidget */ "./admin/settings/components/widgets/SiteUrlWidget.jsx");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./settings */ "./admin/settings/settings.js");
/* harmony import */ var _setup_components_SetupCheckList__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./setup/components/SetupCheckList */ "./admin/settings/setup/components/SetupCheckList/index.ts");
/* harmony import */ var _slack_containers_SlackSettings__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./slack/containers/SlackSettings */ "./admin/settings/slack/containers/SlackSettings/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react/jsx-runtime */ "../../../node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");
































// This allows plugins to update the settings sections

function updateSectionsWithPlugins(sections) {
  if (metabase_plugins__WEBPACK_IMPORTED_MODULE_6__.PLUGIN_ADMIN_SETTINGS_UPDATES.length > 0) {
    const reduced = metabase_plugins__WEBPACK_IMPORTED_MODULE_6__.PLUGIN_ADMIN_SETTINGS_UPDATES.reduce((sections, update) => update(sections), sections);

    // the update functions may change the key ordering inadvertently
    // see: https://github.com/aearly/icepick/issues/48
    // therefore, re-sort the reduced object according to the original key order
    const sortByOrder = (_ref, _ref2) => {
      let [, {
        order: order1 = Number.MAX_VALUE
      }] = _ref;
      let [, {
        order: order2 = Number.MAX_VALUE
      }] = _ref2;
      return order1 - order2;
    };
    return Object.fromEntries(Object.entries(reduced).sort(sortByOrder));
  } else {
    return sections;
  }
}
const ADMIN_SETTINGS_SECTIONS = {
  setup: {
    name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Setup`,
    order: 10,
    settings: [],
    component: _setup_components_SetupCheckList__WEBPACK_IMPORTED_MODULE_27__["default"],
    adminOnly: true
  },
  general: {
    name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`General`,
    order: 20,
    settings: [{
      key: "site-name",
      display_name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Site Name`,
      type: "string"
    }, {
      key: "site-url",
      display_name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Site URL`,
      type: "string",
      widget: _components_widgets_SiteUrlWidget__WEBPACK_IMPORTED_MODULE_25__["default"],
      warningMessage: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Only change this if you know what you're doing!`
    }, {
      key: "custom-homepage",
      display_name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Custom Homepage`,
      type: "boolean",
      postUpdateActions: [metabase_redux_user__WEBPACK_IMPORTED_MODULE_7__.refreshCurrentUser],
      onChanged: (oldVal, newVal, _settings, handleChangeSetting) => {
        if (!newVal && oldVal) {
          handleChangeSetting("custom-homepage-dashboard", null);
        }
      }
    }, {
      key: "custom-homepage-dashboard",
      description: null,
      getHidden: _ref3 => {
        let {
          "custom-homepage": customHomepage
        } = _ref3;
        return !customHomepage;
      },
      widget: metabase_components_DashboardSelector__WEBPACK_IMPORTED_MODULE_4__.DashboardSelector,
      postUpdateActions: [() => (0,_settings__WEBPACK_IMPORTED_MODULE_26__.updateSetting)({
        key: "dismissed-custom-dashboard-toast",
        value: true
      }), metabase_redux_user__WEBPACK_IMPORTED_MODULE_7__.refreshCurrentUser],
      getProps: setting => ({
        value: setting.value
      }),
      onChanged: (oldVal, newVal) => {
        if (newVal && !oldVal) {
          (0,_analytics__WEBPACK_IMPORTED_MODULE_9__.trackCustomHomepageDashboardEnabled)("admin");
        }
      }
    }, {
      key: "redirect-all-requests-to-https",
      display_name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Redirect to HTTPS`,
      type: "boolean",
      getHidden: _ref4 => {
        let {
          "site-url": url
        } = _ref4;
        return !/^https:\/\//.test(url);
      },
      widget: _components_widgets_HttpsOnlyWidget__WEBPACK_IMPORTED_MODULE_20__["default"]
    }, {
      key: "admin-email",
      display_name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Email Address for Help Requests`,
      type: "string"
    }, {
      key: "anon-tracking-enabled",
      display_name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Anonymous Tracking`,
      type: "boolean",
      onChanged: (_oldValue, newValue) => {
        (0,_analytics__WEBPACK_IMPORTED_MODULE_9__.trackTrackingPermissionChanged)(newValue);
      },
      onBeforeChanged: (_oldValue, newValue) => {
        (0,_analytics__WEBPACK_IMPORTED_MODULE_9__.trackTrackingPermissionChanged)(newValue);
      }
    }, {
      key: "humanization-strategy",
      display_name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Friendly Table and Field Names`,
      type: "select",
      options: [{
        value: "simple",
        name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Replace underscores and dashes with spaces`
      }, {
        value: "none",
        name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Disabled`
      }],
      defaultValue: "simple"
    }, {
      key: "enable-xrays",
      display_name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Enable X-ray features`,
      type: "boolean"
    }]
  },
  updates: {
    name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Updates`,
    order: 30,
    component: _components_SettingsUpdatesForm_SettingsUpdatesForm__WEBPACK_IMPORTED_MODULE_14__["default"],
    settings: [{
      key: "check-for-updates",
      display_name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Check for updates`,
      type: "boolean"
    }],
    adminOnly: true
  },
  // email: {
  //   name: t`Email`,
  //   order: 40,
  //   component: SettingsEmailForm,
  //   settings: [
  //     {
  //       key: "email-from-name",
  //       display_name: t`From Name`,
  //       placeholder: "Metabase",
  //       type: "string",
  //       required: false,
  //     },
  //     {
  //       key: "email-from-address",
  //       display_name: t`From Address`,
  //       placeholder: "metabase@yourcompany.com",
  //       type: "string",
  //       required: true,
  //       validations: [["email", t`That's not a valid email address`]],
  //     },
  //     {
  //       key: "email-reply-to",
  //       display_name: t`Reply-To Address`,
  //       placeholder: "metabase-replies@yourcompany.com",
  //       type: "string",
  //       required: false,
  //       widget: SettingCommaDelimitedInput,
  //       validations: [["email_list", t`That's not a valid email address`]],
  //     },
  //     {
  //       key: "bcc-enabled?",
  //       display_name: t`Add Recipients as CC or BCC`,
  //       description: t`Control the visibility of recipients.`,
  //       options: [
  //         { value: true, name: t`BCC - Hide recipients` },
  //         {
  //           value: false,
  //           name: t`CC - Disclose recipients`,
  //         },
  //       ],
  //       defaultValue: true,
  //       widget: BccToggleWidget,
  //     },
  //   ],
  // },
  // "email/smtp": {
  //   component: SMTPConnectionForm,
  //   settings: [
  //     {
  //       key: "email-smtp-host",
  //       display_name: t`SMTP Host`,
  //       placeholder: "smtp.yourservice.com",
  //       type: "string",
  //       required: true,
  //       autoFocus: true,
  //     },
  //     {
  //       key: "email-smtp-port",
  //       display_name: t`SMTP Port`,
  //       placeholder: "587",
  //       type: "number",
  //       required: true,
  //       validations: [["integer", t`That's not a valid port number`]],
  //     },
  //     {
  //       key: "email-smtp-security",
  //       display_name: t`SMTP Security`,
  //       description: null,
  //       type: "radio",
  //       options: { none: "None", ssl: "SSL", tls: "TLS", starttls: "STARTTLS" },
  //       defaultValue: "none",
  //     },
  //     {
  //       key: "email-smtp-username",
  //       display_name: t`SMTP Username`,
  //       description: null,
  //       placeholder: "nicetoseeyou",
  //       type: "string",
  //     },
  //     {
  //       key: "email-smtp-password",
  //       display_name: t`SMTP Password`,
  //       description: null,
  //       placeholder: "Shhh...",
  //       type: "password",
  //       getHidden: () => MetabaseSettings.isHosted(),
  //     },
  //   ],
  // },
  // slack: {
  //   name: "Slack",
  //   order: 50,
  //   component: SlackSettings,
  //   settings: [],
  // },
  authentication: {
    name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Authentication`,
    order: 60,
    settings: [],
    // added by plugins
    adminOnly: true
  },
  maps: {
    name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Maps`,
    order: 70,
    settings: [{
      key: "map-tile-server-url",
      display_name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Map tile server URL`,
      note: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Metabase uses OpenStreetMaps by default.`,
      type: "string"
    }, {
      key: "custom-geojson",
      display_name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Custom Maps`,
      description: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Add your own GeoJSON files to enable different region map visualizations`,
      widget: _components_widgets_CustomGeoJSONWidget__WEBPACK_IMPORTED_MODULE_16__["default"],
      noHeader: true
    }]
  },
  localization: {
    name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Localization`,
    order: 80,
    settings: [{
      display_name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Instance language`,
      key: "site-locale",
      type: "select",
      options: underscore__WEBPACK_IMPORTED_MODULE_1__["default"].sortBy(metabase_lib_settings__WEBPACK_IMPORTED_MODULE_5__["default"].get("available-locales") || [], _ref5 => {
        let [code, name] = _ref5;
        return name;
      }).map(_ref6 => {
        let [code, name] = _ref6;
        return {
          name,
          value: code
        };
      }),
      defaultValue: "en",
      onChanged: (oldLocale, newLocale) => {
        if (oldLocale !== newLocale) {
          window.location.reload();
        }
      }
    }, {
      key: "report-timezone",
      display_name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Report Timezone`,
      type: "select",
      options: [{
        name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Database Default`,
        value: ""
      }, ...(metabase_lib_settings__WEBPACK_IMPORTED_MODULE_5__["default"].get("available-timezones") || [])],
      note: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Not all databases support timezones, in which case this setting won't take effect.`,
      allowValueCollection: true,
      searchProp: "name",
      defaultValue: ""
    }, {
      key: "start-of-week",
      display_name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`First day of the week`,
      type: "select",
      options: [{
        value: "sunday",
        name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Sunday`
      }, {
        value: "monday",
        name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Monday`
      }, {
        value: "tuesday",
        name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Tuesday`
      }, {
        value: "wednesday",
        name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Wednesday`
      }, {
        value: "thursday",
        name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Thursday`
      }, {
        value: "friday",
        name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Friday`
      }, {
        value: "saturday",
        name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Saturday`
      }],
      defaultValue: "sunday"
    }, {
      display_name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Localization options`,
      description: "",
      key: "custom-formatting",
      widget: _components_widgets_FormattingWidget__WEBPACK_IMPORTED_MODULE_19__["default"]
    }]
  },
  uploads: {
    name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Uploads`,
    order: 85,
    adminOnly: false,
    component: _components_UploadSettings__WEBPACK_IMPORTED_MODULE_15__.UploadSettings,
    settings: [{
      key: "uploads-settings"
    }]
  },
  "public-sharing": {
    name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Public Sharing`,
    order: 90,
    settings: [{
      key: "enable-public-sharing",
      display_name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Enable Public Sharing`,
      description: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Enable admins to create publicly viewable links (and embeddable iframes) for Questions and Dashboards.`,
      type: "boolean"
    }, {
      key: "-public-sharing-dashboards",
      display_name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Shared Dashboards`,
      widget: _components_widgets_PublicLinksListing__WEBPACK_IMPORTED_MODULE_21__.PublicLinksDashboardListing,
      getHidden: (_, derivedSettings) => !derivedSettings["enable-public-sharing"]
    }, {
      key: "-public-sharing-questions",
      display_name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Shared Questions`,
      widget: _components_widgets_PublicLinksListing__WEBPACK_IMPORTED_MODULE_21__.PublicLinksQuestionListing,
      getHidden: (_, derivedSettings) => !derivedSettings["enable-public-sharing"]
    }, {
      key: "-public-sharing-actions",
      display_name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Shared Action Forms`,
      widget: _components_widgets_PublicLinksListing__WEBPACK_IMPORTED_MODULE_21__.PublicLinksActionListing,
      getHidden: (_, derivedSettings) => !derivedSettings["enable-public-sharing"]
    }]
  },
  "embedding-in-other-applications": {
    key: "enable-embedding",
    name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Embedding`,
    order: 100,
    settings: [{
      key: "enable-embedding",
      display_name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Embedding`,
      description: null,
      widget: _components_widgets_EmbeddingSwitchWidget__WEBPACK_IMPORTED_MODULE_18__.EmbeddingSwitchWidget
    }, {
      key: "-static-embedding",
      widget: _components_widgets_EmbeddingOption__WEBPACK_IMPORTED_MODULE_17__.StaticEmbeddingOptionCard
    }, {
      key: "-interactive-embedding",
      widget: _components_widgets_EmbeddingOption__WEBPACK_IMPORTED_MODULE_17__.InteractiveEmbeddingOptionCard
    }]
  },
  "embedding-in-other-applications/standalone": {
    settings: [{
      key: "-breadcrumb",
      widget: () => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx)(metabase_components_Breadcrumbs__WEBPACK_IMPORTED_MODULE_3__["default"], {
          size: "large",
          crumbs: [[ttag__WEBPACK_IMPORTED_MODULE_0__.t`Embedding`, "/admin/settings/embedding-in-other-applications"], [ttag__WEBPACK_IMPORTED_MODULE_0__.t`Static embedding`]]
        });
      }
    }, {
      key: "embedding-secret-key",
      display_name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Embedding secret key`,
      description: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Standalone Embed Secret Key used to sign JSON Web Tokens for requests to /api/embed endpoints. This lets you create a secure environment limited to specific users or organizations.`,
      widget: _components_widgets_SecretKeyWidget__WEBPACK_IMPORTED_MODULE_23__["default"],
      getHidden: (_, derivedSettings) => !derivedSettings["enable-embedding"],
      props: {
        confirmation: {
          header: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Regenerate embedding key?`,
          dialog: ttag__WEBPACK_IMPORTED_MODULE_0__.t`This will cause existing embeds to stop working until they are updated with the new key.`
        }
      }
    }, {
      key: "-embedded-resources",
      display_name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Manage embeds`,
      widget: _components_widgets_PublicLinksListing__WEBPACK_IMPORTED_MODULE_21__.EmbeddedResources,
      getHidden: (_, derivedSettings) => !derivedSettings["enable-embedding"]
    }, {
      key: "-redirect-widget",
      widget: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx)(_components_widgets_RedirectWidget__WEBPACK_IMPORTED_MODULE_22__["default"], {
        to: "/admin/settings/embedding-in-other-applications"
      }),
      getHidden: (_, derivedSettings) => derivedSettings["enable-embedding"]
    }]
  },
  "embedding-in-other-applications/full-app": {
    settings: [{
      key: "-breadcrumbs",
      widget: () => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx)(metabase_components_Breadcrumbs__WEBPACK_IMPORTED_MODULE_3__["default"], {
          size: "large",
          crumbs: [[ttag__WEBPACK_IMPORTED_MODULE_0__.t`Embedding`, "/admin/settings/embedding-in-other-applications"], [ttag__WEBPACK_IMPORTED_MODULE_0__.t`Interactive embedding`]]
        });
      }
    }, {
      key: "-redirect-widget",
      widget: () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_29__.jsx)(_components_widgets_RedirectWidget__WEBPACK_IMPORTED_MODULE_22__["default"], {
        to: "/admin/settings/embedding-in-other-applications"
      }),
      getHidden: (_, derivedSettings) => metabase_plugins__WEBPACK_IMPORTED_MODULE_6__.PLUGIN_EMBEDDING.isEnabled() && derivedSettings["enable-embedding"]
    }]
  },
  license: {
    name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`License`,
    order: 110,
    component: _components_SettingsLicense__WEBPACK_IMPORTED_MODULE_13__["default"],
    settings: []
  },
  metabot: {
    name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`Metabot`,
    order: 130,
    getHidden: settings => !settings["is-metabot-enabled"],
    settings: [{
      key: "openai-api-key",
      display_name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`OpenAI API Key`,
      description: null,
      type: "string",
      getHidden: (_, settings) => !settings["is-metabot-enabled"]
    }, {
      key: "openai-organization",
      display_name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`OpenAI Organization ID`,
      description: null,
      type: "string",
      getHidden: (_, settings) => !settings["is-metabot-enabled"]
    }, {
      key: "openai-model",
      display_name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`OpenAI Model`,
      description: null,
      type: "select",
      getProps: (_, settings) => {
        const models = settings["openai-available-models"] ?? [];
        return {
          options: models.map(model => ({
            name: model.id,
            value: model.id
          })),
          disabled: !models.length
        };
      },
      getHidden: (_, settings) => !settings["is-metabot-enabled"]
    }]
  },
  llm: {
    name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`AI Features`,
    getHidden: () => !metabase_plugins__WEBPACK_IMPORTED_MODULE_6__.PLUGIN_LLM_AUTODESCRIPTION.isEnabled(),
    order: 131,
    settings: [{
      key: "ee-ai-features-enabled",
      display_name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`AI features enabled`,
      note: ttag__WEBPACK_IMPORTED_MODULE_0__.t`You must supply an API key before AI features can be enabled.`,
      type: "boolean"
    }, {
      key: "ee-openai-api-key",
      display_name: ttag__WEBPACK_IMPORTED_MODULE_0__.t`EE OpenAI API Key`,
      description: ttag__WEBPACK_IMPORTED_MODULE_0__.t`API key used for Enterprise AI features`,
      type: "string"
    }]
  }
  // cloud: {
  //   name: t`Cloud`,
  //   getHidden: settings => settings["token-features"]?.hosting === true,
  //   order: 132,
  //   component: CloudPanel,
  //   settings: [],
  // },
};

const getSectionsWithPlugins = underscore__WEBPACK_IMPORTED_MODULE_1__["default"].once(() => updateSectionsWithPlugins(ADMIN_SETTINGS_SECTIONS));
const getSettings = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_30__.createSelector)(state => state.admin.settings.settings, state => state.admin.settings.warnings, (settings, warnings) => settings.map(setting => warnings[setting.key] ? {
  ...setting,
  warning: warnings[setting.key]
} : setting));

// getSettings selector returns settings for admin setting page and values specified by
// environment variables set to "null". Actual applied setting values are coming from
// /api/session/properties API handler and getDerivedSettingValues returns them.
const getDerivedSettingValues = state => state.settings?.values ?? {};
const getSettingValues = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_30__.createSelector)(getSettings, settings => {
  const settingValues = {};
  for (const setting of settings) {
    settingValues[setting.key] = setting.value;
  }
  return settingValues;
});
const getNewVersionAvailable = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_30__.createSelector)(getSettings, settings => {
  return metabase_lib_settings__WEBPACK_IMPORTED_MODULE_5__["default"].newVersionAvailable(settings);
});
const getSections = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_30__.createSelector)(getSettings, getDerivedSettingValues, metabase_selectors_user__WEBPACK_IMPORTED_MODULE_8__.getUserIsAdmin, (settings, derivedSettingValues, isAdmin) => {
  if (!settings || underscore__WEBPACK_IMPORTED_MODULE_1__["default"].isEmpty(settings)) {
    return {};
  }
  const sections = getSectionsWithPlugins();
  const settingsByKey = underscore__WEBPACK_IMPORTED_MODULE_1__["default"].groupBy(settings, "key");
  const sectionsWithAPISettings = {};
  for (const [slug, section] of Object.entries(sections)) {
    const isHidden = section.getHidden?.(derivedSettingValues);
    if (isHidden || section.adminOnly && !isAdmin) {
      continue;
    }
    const settings = section.settings.map(function (setting) {
      const apiSetting = settingsByKey[setting.key] && settingsByKey[setting.key][0];
      if (apiSetting) {
        const value = setting.showActualValue ? derivedSettingValues[setting.key] : apiSetting.value;
        return {
          placeholder: apiSetting.default,
          ...apiSetting,
          ...setting,
          value
        };
      } else {
        return setting;
      }
    });
    sectionsWithAPISettings[slug] = {
      ...section,
      settings
    };
  }
  return sectionsWithAPISettings;
});
const getActiveSectionName = (state, props) => props.params.splat;
const getActiveSection = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_30__.createSelector)(getActiveSectionName, getSections, function () {
  let section = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "setup";
  let sections = arguments.length > 1 ? arguments[1] : undefined;
  if (sections) {
    return sections[section];
  } else {
    return null;
  }
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
//# sourceMappingURL=app-main.8dd306ef027f9f521fd3.hot-update.js.map