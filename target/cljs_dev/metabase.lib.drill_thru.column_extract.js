var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./medley.core.js");
require("./metabase.lib.drill_thru.column_filter.js");
require("./metabase.lib.drill_thru.common.js");
require("./metabase.lib.extraction.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.drill_thru.js");
require("./metabase.lib.schema.extraction.js");
require("./metabase.lib.types.isa.js");
require("./metabase.shared.util.i18n.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.drill_thru.column_extract.js");

goog.provide('metabase.lib.drill_thru.column_extract');
metabase.lib.drill_thru.column_extract.column_extract_drill_for_column = (function metabase$lib$drill_thru$column_extract$column_extract_drill_for_column(query,column){
var temp__5804__auto__ = cljs.core.not_empty(metabase.lib.extraction.column_extractions(query,column));
if(cljs.core.truth_(temp__5804__auto__)){
var extractions = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extractions","extractions",60417875),extractions,new cljs.core.Keyword(null,"display-name","display-name",694513143),((metabase.lib.types.isa.temporal_QMARK_(column))?metabase.shared.util.i18n.js_i18n("Extract day, month\u2026"):((metabase.lib.types.isa.email_QMARK_(column))?metabase.shared.util.i18n.js_i18n("Extract domain, host\u2026"):((metabase.lib.types.isa.URL_QMARK_(column))?metabase.shared.util.i18n.js_i18n("Extract domain, subdomain\u2026"):null)))], null);
} else {
return null;
}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int {:keys [column column-ref value]} :- :metabase.lib.schema.drill-thru/context]
 *   Return: [:maybe :metabase.lib.schema.drill-thru/drill-thru.column-extract]
 *        
 * 
 *   Column clicks on temporal columns only.
 * 
 *   Might add a stage, like `:drill-thru/column-filter` does, if the current stage has aggregations.
 */
metabase.lib.drill_thru.column_extract.column_extract_drill = (function metabase$lib$drill_thru$column_extract$column_extract_drill(query,stage_number,p__79268){
var map__79269 = p__79268;
var map__79269__$1 = cljs.core.__destructure_map(map__79269);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79269__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var column_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79269__$1,new cljs.core.Keyword(null,"column-ref","column-ref",2018188376));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79269__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__5000__auto__ = column;
if(cljs.core.truth_(and__5000__auto__)){
return (((value == null)) && (metabase.lib.drill_thru.common.mbql_stage_QMARK_(query,stage_number)));
} else {
return and__5000__auto__;
}
})())){
var temp__5804__auto__ = metabase.lib.drill_thru.column_extract.column_extract_drill_for_column(query,column);
if(cljs.core.truth_(temp__5804__auto__)){
var drill = temp__5804__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([drill,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metabase.lib.drill-thru","drill-thru","metabase.lib.drill-thru/drill-thru",-67424984),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("drill-thru","column-extract","drill-thru/column-extract",-1745074912)], null),metabase.lib.drill_thru.column_filter.prepare_query_for_drill_addition(query,stage_number,column,column_ref,new cljs.core.Keyword(null,"expression","expression",202311876))], 0));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Inputs: [drill :- :metabase.lib.schema.drill-thru/drill-thru.column-extract]
 *   Return: [:sequential :metabase.lib.schema.extraction/extraction]
 *        
 * 
 *   Returns the extractions from a given drill.
 */
metabase.lib.drill_thru.column_extract.extractions_for_drill = (function metabase$lib$drill_thru$column_extract$extractions_for_drill(drill){
return new cljs.core.Keyword(null,"extractions","extractions",60417875).cljs$core$IFn$_invoke$arity$1(drill);
});
metabase.lib.drill_thru.common.drill_thru_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("drill-thru","column-extract","drill-thru/column-extract",-1745074912),(function (query,stage_number,drill){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.select_keys(drill,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display-name","display-name",694513143),new cljs.core.Keyword(null,"type","type",1174270348)], null)),new cljs.core.Keyword(null,"extractions","extractions",60417875),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__79274_SHARP_){
return metabase.lib.metadata.calculation.display_info.cljs$core$IFn$_invoke$arity$3(query,stage_number,p1__79274_SHARP_);
}),new cljs.core.Keyword(null,"extractions","extractions",60417875).cljs$core$IFn$_invoke$arity$1(drill)));
}));
metabase.lib.drill_thru.common.drill_thru_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("drill-thru","column-extract","drill-thru/column-extract",-1745074912),(function() { 
var G__79286__delegate = function (_query,_stage_number,p__79276,p__79277){
var map__79278 = p__79276;
var map__79278__$1 = cljs.core.__destructure_map(map__79278);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79278__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var stage_number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79278__$1,new cljs.core.Keyword(null,"stage-number","stage-number",-1752729638));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79278__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var extractions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79278__$1,new cljs.core.Keyword(null,"extractions","extractions",60417875));
var vec__79279 = p__79277;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79279,(0),null);
var tag__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tag);
var extraction = medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p1__79275_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__79275_SHARP_),tag__$1);
}),extractions);
return metabase.lib.extraction.extract(query,stage_number,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(extraction,new cljs.core.Keyword(null,"column","column",2078222095),column));
};
var G__79286 = function (_query,_stage_number,p__79276,var_args){
var p__79277 = null;
if (arguments.length > 3) {
var G__79287__i = 0, G__79287__a = new Array(arguments.length -  3);
while (G__79287__i < G__79287__a.length) {G__79287__a[G__79287__i] = arguments[G__79287__i + 3]; ++G__79287__i;}
  p__79277 = new cljs.core.IndexedSeq(G__79287__a,0,null);
} 
return G__79286__delegate.call(this,_query,_stage_number,p__79276,p__79277);};
G__79286.cljs$lang$maxFixedArity = 3;
G__79286.cljs$lang$applyTo = (function (arglist__79288){
var _query = cljs.core.first(arglist__79288);
arglist__79288 = cljs.core.next(arglist__79288);
var _stage_number = cljs.core.first(arglist__79288);
arglist__79288 = cljs.core.next(arglist__79288);
var p__79276 = cljs.core.first(arglist__79288);
var p__79277 = cljs.core.rest(arglist__79288);
return G__79286__delegate(_query,_stage_number,p__79276,p__79277);
});
G__79286.cljs$core$IFn$_invoke$arity$variadic = G__79286__delegate;
return G__79286;
})()
);

//# sourceMappingURL=metabase.lib.drill_thru.column_extract.js.map
