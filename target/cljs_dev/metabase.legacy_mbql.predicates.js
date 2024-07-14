var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.legacy_mbql.schema.js");
require("./metabase.lib.schema.temporal_bucketing.js");
require("./metabase.util.malli.registry.js");
var cognitect=$CLJS.cognitect || ($CLJS.cognitect = {});
var weavejester=$CLJS.weavejester || ($CLJS.weavejester = {});
var borkdude=$CLJS.borkdude || ($CLJS.borkdude = {});
var module$shadow_js_shim_module$ttag=$CLJS.module$shadow_js_shim_module$ttag || ($CLJS.module$shadow_js_shim_module$ttag = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var module$shadow_js_shim_module$moment_timezone=$CLJS.module$shadow_js_shim_module$moment_timezone || ($CLJS.module$shadow_js_shim_module$moment_timezone = {});
var module$shadow_js_shim_module$moment=$CLJS.module$shadow_js_shim_module$moment || ($CLJS.module$shadow_js_shim_module$moment = {});
var tailrecursion=$CLJS.tailrecursion || ($CLJS.tailrecursion = {});
var module$shadow_js_shim_module$crc_32=$CLJS.module$shadow_js_shim_module$crc_32 || ($CLJS.module$shadow_js_shim_module$crc_32 = {});
var devtools=$CLJS.devtools || ($CLJS.devtools = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var inflections=$CLJS.inflections || ($CLJS.inflections = {});
var net=$CLJS.net || ($CLJS.net = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});
var camel_snake_kebab=$CLJS.camel_snake_kebab || ($CLJS.camel_snake_kebab = {});
var flatland=$CLJS.flatland || ($CLJS.flatland = {});
var lambdaisland=$CLJS.lambdaisland || ($CLJS.lambdaisland = {});
var medley=$CLJS.medley || ($CLJS.medley = {});
var no=$CLJS.no || ($CLJS.no = {});
var metabase=$CLJS.metabase || ($CLJS.metabase = {});
var malli=$CLJS.malli || ($CLJS.malli = {});
var com=$CLJS.com || ($CLJS.com = {});

$CLJS.SHADOW_ENV.setLoaded("metabase.legacy_mbql.predicates.js");

goog.provide('metabase.legacy_mbql.predicates');
/**
 * Is `unit` a valid datetime bucketing unit?
 */
metabase.legacy_mbql.predicates.DateTimeUnit_QMARK_ = metabase.util.malli.registry.validator(new cljs.core.Keyword("metabase.lib.schema.temporal-bucketing","unit","metabase.lib.schema.temporal-bucketing/unit",1808010880));
/**
 * Is this a valid Field clause?
 */
metabase.legacy_mbql.predicates.Field_QMARK_ = metabase.util.malli.registry.validator(metabase.legacy_mbql.schema.Field);
/**
 * Is this a valid `:filter` clause?
 */
metabase.legacy_mbql.predicates.Filter_QMARK_ = metabase.util.malli.registry.validator(metabase.legacy_mbql.schema.Filter);
/**
 * Is this a valid DatetimeExpression clause?
 */
metabase.legacy_mbql.predicates.DatetimeExpression_QMARK_ = metabase.util.malli.registry.validator(metabase.legacy_mbql.schema.DatetimeExpression);
/**
 * Is this a something that is valid as a top-level expression definition?
 */
metabase.legacy_mbql.predicates.FieldOrExpressionDef_QMARK_ = metabase.util.malli.registry.validator(new cljs.core.Keyword("metabase.legacy-mbql.schema","FieldOrExpressionDef","metabase.legacy-mbql.schema/FieldOrExpressionDef",336320065));

//# sourceMappingURL=metabase.legacy_mbql.predicates.js.map
