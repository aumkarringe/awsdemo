var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.binning.js");
require("./metabase.lib.breakout.js");
require("./metabase.lib.drill_thru.common.js");
require("./metabase.lib.equality.js");
require("./metabase.lib.filter.js");
require("./metabase.lib.remove_replace.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.binning.js");
require("./metabase.lib.schema.drill_thru.js");
require("./metabase.lib.schema.metadata.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.drill_thru.zoom_in_bins.js");

goog.provide('metabase.lib.drill_thru.zoom_in_bins');
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int {:keys [column value], :as _context} :- :metabase.lib.schema.drill-thru/context]
 *   Return: [:maybe :metabase.lib.schema.drill-thru/drill-thru.zoom-in.binning]
 *        
 * 
 *   Return a drill thru that 'zooms in' on a breakout that uses `:binning` if applicable.
 *   See [[metabase.lib.drill-thru.zoom-in-bins]] docstring for more information.
 */
metabase.lib.drill_thru.zoom_in_bins.zoom_in_binning_drill = (function metabase$lib$drill_thru$zoom_in_bins$zoom_in_binning_drill(query,stage_number,p__79427){
var map__79428 = p__79427;
var map__79428__$1 = cljs.core.__destructure_map(map__79428);
var _context = map__79428__$1;
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79428__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79428__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__5000__auto__ = column;
if(cljs.core.truth_(and__5000__auto__)){
return value;
} else {
return and__5000__auto__;
}
})())){
var temp__5804__auto__ = cljs.core.first(metabase.lib.breakout.existing_breakouts.cljs$core$IFn$_invoke$arity$3(query,stage_number,column));
if(cljs.core.truth_(temp__5804__auto__)){
var existing_breakout = temp__5804__auto__;
var temp__5804__auto____$1 = metabase.lib.binning.binning(existing_breakout);
if(cljs.core.truth_(temp__5804__auto____$1)){
var binning = temp__5804__auto____$1;
var temp__5804__auto____$2 = metabase.lib.binning.resolve_bin_width(query,column,value);
if(cljs.core.truth_(temp__5804__auto____$2)){
var map__79469 = temp__5804__auto____$2;
var map__79469__$1 = cljs.core.__destructure_map(map__79469);
var min_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79469__$1,new cljs.core.Keyword(null,"min-value","min-value",-1119123315));
var max_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79469__$1,new cljs.core.Keyword(null,"max-value","max-value",687805168));
var bin_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79469__$1,new cljs.core.Keyword(null,"bin-width","bin-width",1377922579));
var G__79473 = new cljs.core.Keyword(null,"strategy","strategy",-1471631918).cljs$core$IFn$_invoke$arity$1(binning);
var G__79473__$1 = (((G__79473 instanceof cljs.core.Keyword))?G__79473.fqn:null);
switch (G__79473__$1) {
case "num-bins":
case "default":
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metabase.lib.drill-thru","drill-thru","metabase.lib.drill-thru/drill-thru",-67424984),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("drill-thru","zoom-in.binning","drill-thru/zoom-in.binning",-1445008256),new cljs.core.Keyword(null,"column","column",2078222095),column,new cljs.core.Keyword(null,"min-value","min-value",-1119123315),value,new cljs.core.Keyword(null,"max-value","max-value",687805168),(value + bin_width),new cljs.core.Keyword(null,"new-binning","new-binning",-1788373115),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"strategy","strategy",-1471631918),new cljs.core.Keyword(null,"default","default",-1987822328)], null)], null);

break;
case "bin-width":
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metabase.lib.drill-thru","drill-thru","metabase.lib.drill-thru/drill-thru",-67424984),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("drill-thru","zoom-in.binning","drill-thru/zoom-in.binning",-1445008256),new cljs.core.Keyword(null,"column","column",2078222095),column,new cljs.core.Keyword(null,"min-value","min-value",-1119123315),min_value,new cljs.core.Keyword(null,"max-value","max-value",687805168),max_value,new cljs.core.Keyword(null,"new-binning","new-binning",-1788373115),cljs.core.update.cljs$core$IFn$_invoke$arity$3(binning,new cljs.core.Keyword(null,"bin-width","bin-width",1377922579),(function (p1__79426_SHARP_){
return (p1__79426_SHARP_ / 10.0);
}))], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79473__$1)].join('')));

}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int column :- :metabase.lib.schema.metadata/column new-binning :- :metabase.lib.schema.binning/binning]
 *   Return: :metabase.lib.schema/query
 */
metabase.lib.drill_thru.zoom_in_bins.update_breakout = (function metabase$lib$drill_thru$zoom_in_bins$update_breakout(query,stage_number,column,new_binning){
var temp__5802__auto__ = cljs.core.first(metabase.lib.breakout.existing_breakouts.cljs$core$IFn$_invoke$arity$3(query,stage_number,column));
if(cljs.core.truth_(temp__5802__auto__)){
var existing_breakout = temp__5802__auto__;
return metabase.lib.remove_replace.replace_clause.cljs$core$IFn$_invoke$arity$4(query,stage_number,existing_breakout,metabase.lib.binning.with_binning(column,new_binning));
} else {
return metabase.lib.breakout.breakout.cljs$core$IFn$_invoke$arity$3(query,stage_number,metabase.lib.binning.with_binning(column,new_binning));
}
});
metabase.lib.drill_thru.common.drill_thru_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("drill-thru","zoom-in.binning","drill-thru/zoom-in.binning",-1445008256),(function (query,stage_number,p__79482){
var map__79483 = p__79482;
var map__79483__$1 = cljs.core.__destructure_map(map__79483);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79483__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var min_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79483__$1,new cljs.core.Keyword(null,"min-value","min-value",-1119123315));
var max_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79483__$1,new cljs.core.Keyword(null,"max-value","max-value",687805168));
var new_binning = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79483__$1,new cljs.core.Keyword(null,"new-binning","new-binning",-1788373115));
var old_filters = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__79484){
var vec__79485 = p__79484;
var operator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79485,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79485,(1),null);
var filter_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79485,(2),null);
var and__5000__auto__ = (function (){var fexpr__79489 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,">=",">=",-623615505),null,new cljs.core.Keyword(null,"<","<",-646864291),null], null), null);
return (fexpr__79489.cljs$core$IFn$_invoke$arity$1 ? fexpr__79489.cljs$core$IFn$_invoke$arity$1(operator) : fexpr__79489.call(null,operator));
})();
if(cljs.core.truth_(and__5000__auto__)){
return metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$2(filter_column,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column], null));
} else {
return and__5000__auto__;
}
}),metabase.lib.filter.filters.cljs$core$IFn$_invoke$arity$2(query,stage_number));
return metabase.lib.drill_thru.zoom_in_bins.update_breakout(metabase.lib.filter.filter.cljs$core$IFn$_invoke$arity$3(metabase.lib.filter.filter.cljs$core$IFn$_invoke$arity$3(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(metabase.lib.remove_replace.remove_clause,query,old_filters),stage_number,metabase.lib.filter._GT__EQ_(column,min_value)),stage_number,metabase.lib.filter._LT_(column,max_value)),stage_number,column,new_binning);
}));

//# sourceMappingURL=metabase.lib.drill_thru.zoom_in_bins.js.map
