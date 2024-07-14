var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./medley.core.js");
require("./metabase.lib.drill_thru.common.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.drill_thru.js");
require("./metabase.lib.types.isa.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.drill_thru.zoom.js");

goog.provide('metabase.lib.drill_thru.zoom');
metabase.lib.drill_thru.zoom.zoom_drill_STAR_ = (function metabase$lib$drill_thru$zoom$zoom_drill_STAR_(column,value){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metabase.lib.drill-thru","drill-thru","metabase.lib.drill-thru/drill-thru",-67424984),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("drill-thru","zoom","drill-thru/zoom",-1212878631),new cljs.core.Keyword(null,"column","column",2078222095),column,new cljs.core.Keyword(null,"object-id","object-id",-754527291),value,new cljs.core.Keyword(null,"many-pks?","many-pks?",-459675021),false], null);
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int {:keys [column value row], :as _context} :- :metabase.lib.schema.drill-thru/context]
 *   Return: [:maybe :metabase.lib.schema.drill-thru/drill-thru.zoom]
 *        
 * 
 *   Return a `:zoom` drill when clicking on the value of a PK column in a Table that has only one PK column.
 */
metabase.lib.drill_thru.zoom.zoom_drill = (function metabase$lib$drill_thru$zoom$zoom_drill(query,stage_number,p__79293){
var map__79294 = p__79293;
var map__79294__$1 = cljs.core.__destructure_map(map__79294);
var _context = map__79294__$1;
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79294__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79294__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79294__$1,new cljs.core.Keyword(null,"row","row",-570139521));
if((((!((value == null)))) && (((metabase.lib.drill_thru.common.mbql_stage_QMARK_(query,stage_number)) && ((!(metabase.lib.drill_thru.common.many_pks_QMARK_(query)))))))){
if(metabase.lib.types.isa.primary_key_QMARK_(column)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"null","null",-180137709))){
return null;
} else {
return metabase.lib.drill_thru.zoom.zoom_drill_STAR_(column,value);
}
} else {
var vec__79295 = metabase.lib.metadata.calculation.primary_keys(query);
var pk_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79295,(0),null);
var temp__5804__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p1__79292_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(p1__79292_SHARP_)),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(pk_column));
}),row));
if(cljs.core.truth_(temp__5804__auto__)){
var pk_value = temp__5804__auto__;
if((pk_value == null)){
return null;
} else {
return metabase.lib.drill_thru.zoom.zoom_drill_STAR_(pk_column,pk_value);
}
} else {
return null;
}
}
} else {
return null;
}
});
metabase.lib.drill_thru.common.drill_thru_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("drill-thru","zoom","drill-thru/zoom",-1212878631),(function (_query,_stage_number,drill_thru){
return cljs.core.select_keys(drill_thru,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"many-pks?","many-pks?",-459675021),new cljs.core.Keyword(null,"object-id","object-id",-754527291),new cljs.core.Keyword(null,"type","type",1174270348)], null));
}));
metabase.lib.drill_thru.common.drill_thru_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("drill-thru","zoom","drill-thru/zoom",-1212878631),(function (query,_stage_number,_drill){
return query;
}));

//# sourceMappingURL=metabase.lib.drill_thru.zoom.js.map
