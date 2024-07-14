var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.legacy_mbql.normalize.js");
require("./metabase.util.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.legacy_mbql.js.js");

goog.provide('metabase.legacy_mbql.js');
/**
 * Sometimes JS queries are passed in with a `Join` or `Aggregation` clause object instead of a simple Array.
 *   These clauses `extend Array` so `Array.isArray(x)` is true, but they're treated as opaque by `js->clj`.
 *   This recurses over the whole query, unwrapping these values to their `.raw()` form.
 */
metabase.legacy_mbql.js.unwrap = (function metabase$legacy_mbql$js$unwrap(x){
if((((x instanceof Object)) && (cljs.core.fn_QMARK_(x.raw)))){
var G__77882 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(x.raw());
return (metabase.legacy_mbql.js.unwrap.cljs$core$IFn$_invoke$arity$1 ? metabase.legacy_mbql.js.unwrap.cljs$core$IFn$_invoke$arity$1(G__77882) : metabase.legacy_mbql.js.unwrap.call(null,G__77882));
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.update_vals(x,metabase.legacy_mbql.js.unwrap);
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.legacy_mbql.js.unwrap,x);
} else {
return x;

}
}
}
});
/**
 * Normalize an MBQL query, and convert it to the latest and greatest version of MBQL.
 * 
 *   Returns the CLJS form of the normalized query. Use [[normalize]] for the JS form.
 */
metabase.legacy_mbql.js.normalize_cljs = (function metabase$legacy_mbql$js$normalize_cljs(query){
return metabase.legacy_mbql.normalize.normalize(metabase.legacy_mbql.js.unwrap(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(query)));
});
/**
 * Normalize an MBQL query, and convert it to the latest and greatest version of MBQL.
 * 
 *   Returns the JS form of the normalized query. Use [[normalize-cljs]] for the CLJS form.
 */
metabase.legacy_mbql.js.normalize = (function metabase$legacy_mbql$js$normalize(query){
return cljs.core.clj__GT_js.cljs$core$IFn$_invoke$arity$variadic(metabase.legacy_mbql.js.normalize_cljs(query),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keyword-fn","keyword-fn",-64566675),metabase.util.qualified_name], 0));
});
Object.defineProperty(module.exports, "normalize", { enumerable: true, get: function() { return metabase.legacy_mbql.js.normalize; } });
//# sourceMappingURL=metabase.legacy_mbql.js.js.map
