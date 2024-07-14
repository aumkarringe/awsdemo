/*!
 * /*
 * * This file is subject to the terms and conditions defined in
 *  * file 'LICENSE.txt', which is part of this source code package.
 *  * /
 *
 */
self["webpackHotUpdate"]("app-main",{

/***/ "./admin/settings/components/CloudPanel/CloudPanel.tsx":
/*!*************************************************************!*\
  !*** ./admin/settings/components/CloudPanel/CloudPanel.tsx ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");

// import { useEffect, useMemo, useState } from "react";
// import { t } from "ttag";

// import {
//   useGetCloudMigrationQuery,
//   useCreateCloudMigrationMutation,
// } from "metabase/api";
// import { useSetting } from "metabase/common/hooks";
// import LoadingAndErrorWrapper from "metabase/components/LoadingAndErrorWrapper";
// import { useDispatch } from "metabase/lib/redux";
// import { refreshSiteSettings } from "metabase/redux/settings";
// import { Box, Text } from "metabase/ui";
// import type { CloudMigration } from "metabase-types/api/cloud-migration";

// import { MigrationCreationError } from "./MigrationCreationError";
// import { MigrationError } from "./MigrationError";
// import { MigrationInProgress } from "./MigrationInProgress";
// import { MigrationStart } from "./MigrationStart";
// import { MigrationSuccess } from "./MigrationSuccess";
// import {
//   type InternalCloudMigrationState,
//   isInProgressMigration,
//   getStartedVisibleStates,
//   defaultGetPollingInterval,
//   openCheckoutInNewTab,
// } from "./utils";

// interface CloudPanelProps {
//   getPollingInterval: (migration: CloudMigration) => number | undefined;
//   onMigrationStart: (storeUrl: string, migration: CloudMigration) => void;
// }

// export const CloudPanel = ({
//   getPollingInterval = defaultGetPollingInterval,
//   onMigrationStart = openCheckoutInNewTab,
// }: CloudPanelProps) => {
//   const dispatch = useDispatch();
//   const [pollingInterval, setPollingInterval] = useState<number | undefined>(
//     undefined,
//   );

//   const {
//     data: migration,
//     isLoading,
//     error,
//   } = useGetCloudMigrationQuery(undefined, {
//     refetchOnMountOrArgChange: true,
//     pollingInterval,
//   });

//   const migrationState: InternalCloudMigrationState =
//     migration?.state ?? "uninitialized";

//   useEffect(
//     function syncPollingInterval() {
//       if (migration) {
//         setPollingInterval(getPollingInterval(migration));
//       }
//     },
//     [migration, getPollingInterval],
//   );

//   useEffect(
//     function syncSiteSettings() {
//       if (migrationState) {
//         dispatch(refreshSiteSettings({}));
//       }
//     },
//     [dispatch, migrationState],
//   );

//   const storeUrl = useSetting("store-url");

//   const checkoutUrl = useMemo(() => {
//     return migration
//       ? `${storeUrl}/checkout?migration-id=${migration.external_id}`
//       : `${storeUrl}/checkout`;
//   }, [migration, storeUrl]);

//   const [createCloudMigration, createCloudMigrationResult] =
//     useCreateCloudMigrationMutation();

//   const handleCreateMigration = async () => {
//     const newMigration = await createCloudMigration().unwrap();
//     await dispatch(refreshSiteSettings({}));
//     onMigrationStart(storeUrl, newMigration);
//   };

//   return (
//     <LoadingAndErrorWrapper loading={isLoading} error={error}>
//       <Box maw="36rem">
//         {/* <Text fw="bold" size="1.5rem" mb="2rem">{t`Migrate to Cloud`}</Text>

//         {getStartedVisibleStates.has(migrationState) && (
//           <MigrationStart
//             startNewMigration={handleCreateMigration}
//             isStarting={createCloudMigrationResult.isLoading}
//           />
//         )} */}

//         <Box mt="2rem">
//           {migration && isInProgressMigration(migration) && (
//             <MigrationInProgress
//               migration={migration}
//               checkoutUrl={checkoutUrl}
//             />
//           )}

//           {migration && migrationState === "done" && (
//             <MigrationSuccess
//               migration={migration}
//               restartMigration={handleCreateMigration}
//               isRestarting={createCloudMigrationResult.isLoading}
//               checkoutUrl={checkoutUrl}
//             />
//           )}

//           {migration && migrationState === "error" && (
//             <MigrationError migration={migration} />
//           )}

//           {createCloudMigrationResult.isError && (
//             <MigrationCreationError error={createCloudMigrationResult.error} />
//           )}
//         </Box>
//       </Box>
//     </LoadingAndErrorWrapper>
//   );
// };

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

/***/ "./admin/settings/components/CloudPanel/index.ts":
/*!*******************************************************!*\
  !*** ./admin/settings/components/CloudPanel/index.ts ***!
  \*******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CloudPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CloudPanel */ "./admin/settings/components/CloudPanel/CloudPanel.tsx");
/* harmony import */ var _CloudPanel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_CloudPanel__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _CloudPanel__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _CloudPanel__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "../../../node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ../../../node_modules/react-refresh/runtime.js */ "../../../node_modules/react-refresh/runtime.js");



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
//# sourceMappingURL=app-main.94cb7475c5197b294f30.hot-update.js.map