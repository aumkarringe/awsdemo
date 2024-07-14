var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.drill_thru.fk_details.js");
require("./metabase.lib.drill_thru.pk.js");
require("./metabase.lib.drill_thru.zoom.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.drill_thru.js");
require("./metabase.util.malli.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.drill_thru.object_details.js");

goog.provide('metabase.lib.drill_thru.object_details');
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int context :- :metabase.lib.schema.drill-thru/context]
 *   Return: [:maybe
 *         [:or
 *          :metabase.lib.schema.drill-thru/drill-thru.pk
 *          :metabase.lib.schema.drill-thru/drill-thru.zoom
 *          :metabase.lib.schema.drill-thru/drill-thru.fk-details]]
 *        
 * 
 *   When clicking a foreign key or primary key value, drill through to the details for that specific object.
 * 
 *   Contrast [[metabase.lib.drill-thru.fk-filter/fk-filter-drill]], which filters this query to only those rows with a
 *   specific value for a FK column.
 */
metabase.lib.drill_thru.object_details.object_detail_drill = (function metabase$lib$drill_thru$object_details$object_detail_drill(query,stage_number,context){
return cljs.core.some((function (f){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(query,stage_number,context) : f.call(null,query,stage_number,context));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.drill_thru.fk_details.fk_details_drill,metabase.lib.drill_thru.pk.pk_drill,metabase.lib.drill_thru.zoom.zoom_drill], null));
});

//# sourceMappingURL=metabase.lib.drill_thru.object_details.js.map
