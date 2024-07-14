var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./medley.core.js");
require("./metabase.lib.drill_thru.common.js");
require("./metabase.lib.equality.js");
require("./metabase.lib.filter.js");
require("./metabase.lib.filter.operator.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.drill_thru.js");
require("./metabase.lib.schema.metadata.js");
require("./metabase.lib.schema.ref.js");
require("./metabase.lib.stage.js");
require("./metabase.lib.types.isa.js");
require("./metabase.lib.util.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.drill_thru.column_filter.js");

goog.provide('metabase.lib.drill_thru.column_filter');
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int column :- :metabase.lib.schema.metadata/column column-ref :- :metabase.lib.schema.ref/ref adding :- [:enum :filter :expression]]
 *   Return: [:map [:query :metabase.lib.schema/query] [:stage-number :int] [:column lib.filter/ColumnWithOperators]]
 *        
 * 
 *   If the column we're filtering on is an aggregation, the filtering must happen in a later stage. This function returns
 *   a map with that possibly-updated `:query` and `:stage-number`, plus the `:column` for filtering in that stage (with
 *   filter operators, as returned by [[lib.filter/filterable-columns]]).
 * 
 *   If the column is an aggregation but the query already has a later stage, that stage is reused.
 *   If the column is not an aggregation, the query and stage-number are returned unchanged, but the
 *   [[lib.filter/filterable-columns]] counterpart of the input `column` is still returned.
 * 
 *   This query and filterable column are exactly what the FE needs to render the filtering UI for a column filter drill,
 *   or certain tricky cases of quick filter.
 */
metabase.lib.drill_thru.column_filter.prepare_query_for_drill_addition = (function metabase$lib$drill_thru$column_filter$prepare_query_for_drill_addition(query,stage_number,column,column_ref,adding){
var next_stage = metabase.lib.util.next_stage_number(query,metabase.lib.util.canonical_stage_index(query,stage_number));
var base = (((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("source","aggregations","source/aggregations",-1828710137))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("source","breakouts","source/breakouts",-1706018158))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(adding,new cljs.core.Keyword(null,"expression","expression",202311876)))))))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"stage-number","stage-number",-1752729638),stage_number], null):(cljs.core.truth_(next_stage)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"stage-number","stage-number",-1752729638),next_stage], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),metabase.lib.stage.append_stage(query),new cljs.core.Keyword(null,"stage-number","stage-number",-1752729638),(-1)], null)
));
var columns = metabase.lib.filter.filterable_columns.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(base),new cljs.core.Keyword(null,"stage-number","stage-number",-1752729638).cljs$core$IFn$_invoke$arity$1(base));
var filter_column = (function (){var or__5002__auto__ = metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(base),new cljs.core.Keyword(null,"stage-number","stage-number",-1752729638).cljs$core$IFn$_invoke$arity$1(base),column_ref,columns);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = new cljs.core.Keyword("lib","source-uuid","lib/source-uuid",1828897581).cljs$core$IFn$_invoke$arity$1(column);
if(cljs.core.truth_(and__5000__auto__)){
return medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p1__79242_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source-uuid","lib/source-uuid",1828897581).cljs$core$IFn$_invoke$arity$1(p1__79242_SHARP_),new cljs.core.Keyword("lib","source-uuid","lib/source-uuid",1828897581).cljs$core$IFn$_invoke$arity$1(column));
}),columns);
} else {
return and__5000__auto__;
}
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(base,new cljs.core.Keyword(null,"column","column",2078222095),filter_column);
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int {:keys [column column-ref value]} :- :metabase.lib.schema.drill-thru/context]
 *   Return: [:maybe :metabase.lib.schema.drill-thru/drill-thru.column-filter]
 *        
 * 
 *   Filtering at the column level, based on its type. Displays a submenu of eg. "Today", "This Week", etc. for date
 *   columns.
 * 
 *   Note that if the clicked column is an aggregation, filtering by it will require a new stage. Therefore this drill
 *   returns a possibly-updated `:query` and `:stage-number` along with a `:column` referencing that later stage.
 */
metabase.lib.drill_thru.column_filter.column_filter_drill = (function metabase$lib$drill_thru$column_filter$column_filter_drill(query,stage_number,p__79248){
var map__79249 = p__79248;
var map__79249__$1 = cljs.core.__destructure_map(map__79249);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79249__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var column_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79249__$1,new cljs.core.Keyword(null,"column-ref","column-ref",2018188376));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79249__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__5000__auto__ = metabase.lib.drill_thru.common.mbql_stage_QMARK_(query,stage_number);
if(and__5000__auto__){
var and__5000__auto____$1 = column;
if(cljs.core.truth_(and__5000__auto____$1)){
return (((value == null)) && ((!(metabase.lib.types.isa.structured_QMARK_(column)))));
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
var initial_op = ((metabase.lib.types.isa.temporal_QMARK_(column))?null:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(metabase.lib.filter.operator.filter_operators(column)),new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("operator","filter","operator/filter",-1518842858)));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metabase.lib.drill-thru","drill-thru","metabase.lib.drill-thru/drill-thru",-67424984),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("drill-thru","column-filter","drill-thru/column-filter",1535293733),new cljs.core.Keyword(null,"initial-op","initial-op",918033121),initial_op], null),metabase.lib.drill_thru.column_filter.prepare_query_for_drill_addition(query,stage_number,column,column_ref,new cljs.core.Keyword(null,"filter","filter",-948537934))], 0));
} else {
return null;
}
});
metabase.lib.drill_thru.common.drill_thru_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("drill-thru","column-filter","drill-thru/column-filter",1535293733),(function (_query,_stage_number,p__79253){
var map__79254 = p__79253;
var map__79254__$1 = cljs.core.__destructure_map(map__79254);
var initial_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79254__$1,new cljs.core.Keyword(null,"initial-op","initial-op",918033121));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("drill-thru","column-filter","drill-thru/column-filter",1535293733),new cljs.core.Keyword(null,"initial-op","initial-op",918033121),initial_op], null);
}));
metabase.lib.drill_thru.common.drill_thru_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("drill-thru","column-filter","drill-thru/column-filter",1535293733),(function (query,stage_number,p__79259,filter_op,value){
var map__79260 = p__79259;
var map__79260__$1 = cljs.core.__destructure_map(map__79260);
var _drill_thru = map__79260__$1;
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79260__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return metabase.lib.filter.filter.cljs$core$IFn$_invoke$arity$3(query,stage_number,metabase.lib.filter.filter_clause.cljs$core$IFn$_invoke$arity$variadic(filter_op,column,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
}));

//# sourceMappingURL=metabase.lib.drill_thru.column_filter.js.map
