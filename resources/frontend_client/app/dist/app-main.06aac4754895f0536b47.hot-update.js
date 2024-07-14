/*!
 * /*
 * * This file is subject to the terms and conditions defined in
 *  * file 'LICENSE.txt', which is part of this source code package.
 *  * /
 *
 */
self["webpackHotUpdate"]("app-main",{

/***/ "./admin/settings/auth/components/GoogleAuthForm/GoogleAuthForm.tsx":
/*!**************************************************************************!*\
  !*** ./admin/settings/auth/components/GoogleAuthForm/GoogleAuthForm.tsx ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// import { useMemo } from "react";
// import { jt, t } from "ttag";
// import _ from "underscore";

// import Breadcrumbs from "metabase/components/Breadcrumbs";
// import ExternalLink from "metabase/core/components/ExternalLink";
// import FormErrorMessage from "metabase/core/components/FormErrorMessage";
// import FormInput from "metabase/core/components/FormInput";
// import FormSubmitButton from "metabase/core/components/FormSubmitButton";
// import { FormProvider } from "metabase/forms";
// import MetabaseSettings from "metabase/lib/settings";
// import type { SettingDefinition, Settings } from "metabase-types/api";

// import { GOOGLE_SCHEMA } from "../../constants";

// import {
//   GoogleForm,
//   GoogleFormCaption,
//   GoogleFormHeader,
// } from "./GoogleAuthForm.styled";

// const ENABLED_KEY = "google-auth-enabled";
// const CLIENT_ID_KEY = "google-auth-client-id";
// const DOMAIN_KEY = "google-auth-auto-create-accounts-domain";

// const BREADCRUMBS = [
//   [t`Authentication`, "/admin/settings/authentication"],
//   [t`Google Sign-In`],
// ];

// export interface GoogleAuthFormProps {
//   elements?: SettingDefinition[];
//   settingValues?: Partial<Settings>;
//   isEnabled: boolean;
//   isSsoEnabled: boolean;
//   onSubmit: (settingValues: Partial<Settings>) => void;
// }

// const GoogleAuthForm = ({
//   elements = [],
//   settingValues = {},
//   isEnabled,
//   isSsoEnabled,
//   onSubmit,
// }: GoogleAuthFormProps): JSX.Element => {
//   const settings = useMemo(() => {
//     return _.indexBy(elements, "key");
//   }, [elements]);

//   const initialValues = useMemo(() => {
//     const values = GOOGLE_SCHEMA.cast(settingValues, { stripUnknown: true });
//     return { ...values, [ENABLED_KEY]: true };
//   }, [settingValues]);

//   return (
//     <FormProvider
//       initialValues={initialValues}
//       enableReinitialize
//       validationSchema={GOOGLE_SCHEMA}
//       validationContext={settings}
//       onSubmit={onSubmit}
//     >
//       {({ dirty }) => (
//         <GoogleForm disabled={!dirty}>
//           <Breadcrumbs crumbs={BREADCRUMBS} />
//           <GoogleFormHeader>{t`Sign in with Google`}</GoogleFormHeader>
//           <GoogleFormCaption>
//             {t`Allows users with existing Metabase accounts to login with a Google account that matches their email address in addition to their Metabase username and password.`}
//           </GoogleFormCaption>
//           <GoogleFormCaption>
//             {jt`To allow users to sign in with Google you'll need to give Metabase a Google Developers console application client ID. It only takes a few steps and instructions on how to create a key can be found ${(
//               <ExternalLink key="link" href={getDocsLink()}>
//                 {t`here`}
//               </ExternalLink>
//             )}.`}
//           </GoogleFormCaption>
//           <FormInput
//             name={CLIENT_ID_KEY}
//             title={t`Client ID`}
//             placeholder={t`{your-client-id}.apps.googleusercontent.com`}
//             {...getFormFieldProps(settings[CLIENT_ID_KEY])}
//           />
//           <FormInput
//             name={DOMAIN_KEY}
//             title={t`Domain`}
//             description={
//               isSsoEnabled
//                 ? t`Allow users to sign up on their own if their Google account email address is from one of the domains you specify here:`
//                 : t`Allow users to sign up on their own if their Google account email address is from:`
//             }
//             placeholder={
//               isSsoEnabled
//                 ? "mycompany.com, example.com.br, otherdomain.co.uk"
//                 : "mycompany.com"
//             }
//             nullable
//             {...getFormFieldProps(settings[DOMAIN_KEY])}
//           />
//           <FormSubmitButton
//             title={isEnabled ? t`Save changes` : t`Save and enable`}
//             primary
//             disabled={!dirty}
//           />
//           <FormErrorMessage />
//         </GoogleForm>
//       )}
//     </FormProvider>
//   );
// };

// const getFormFieldProps = (setting?: SettingDefinition) => {
//   if (setting?.is_env_setting) {
//     return { placeholder: t`Using ${setting.env_name}`, readOnly: true };
//   }
// };

// const getDocsLink = (): string => {
//   return MetabaseSettings.docsUrl(
//     "people-and-groups/google-and-ldap",
//     "enabling-google-sign-in",
//   );
// };

// // eslint-disable-next-line import/no-default-export -- deprecated usage
// export default GoogleAuthForm;

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

/***/ }),

/***/ "./admin/settings/auth/components/GoogleAuthForm/index.ts":
/*!****************************************************************!*\
  !*** ./admin/settings/auth/components/GoogleAuthForm/index.ts ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport default from dynamic */ _GoogleAuthForm__WEBPACK_IMPORTED_MODULE_0___default.a)
/* harmony export */ });
/* harmony import */ var _GoogleAuthForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoogleAuthForm */ "./admin/settings/auth/components/GoogleAuthForm/GoogleAuthForm.tsx");
/* harmony import */ var _GoogleAuthForm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_GoogleAuthForm__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// eslint-disable-next-line import/no-default-export -- deprecated usage


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
//# sourceMappingURL=app-main.06aac4754895f0536b47.hot-update.js.map