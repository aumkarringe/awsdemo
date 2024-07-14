var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./medley.core.js");
require("./metabase.lib.aggregation.js");
require("./metabase.lib.binning.js");
require("./metabase.lib.drill_thru.common.js");
require("./metabase.lib.filter.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.options.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.drill_thru.js");
require("./metabase.lib.schema.metadata.js");
require("./metabase.lib.temporal_bucket.js");
require("./metabase.lib.types.isa.js");
require("./metabase.lib.underlying.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.drill_thru.underlying_records.js");

goog.provide('metabase.lib.drill_thru.underlying_records');
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int {:keys [column column-ref dimensions value], :as _context} :- :metabase.lib.schema.drill-thru/context]
 *   Return: [:maybe :metabase.lib.schema.drill-thru/drill-thru.underlying-records]
 *        
 * 
 *   When clicking on a particular broken-out group, offer a look at the details of all the rows that went into this
 *   bucket. Eg. distribution of People by State, then click New York and see the table of all People filtered by
 *   `STATE = 'New York'`.
 * 
 *   There is another quite different case: clicking the legend of a chart with multiple bars or lines broken out by
 *   category. Then `column` is nil!
 */
metabase.lib.drill_thru.underlying_records.underlying_records_drill = (function metabase$lib$drill_thru$underlying_records$underlying_records_drill(query,stage_number,p__79072){
var map__79073 = p__79072;
var map__79073__$1 = cljs.core.__destructure_map(map__79073);
var _context = map__79073__$1;
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79073__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var column_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79073__$1,new cljs.core.Keyword(null,"column-ref","column-ref",2018188376));
var dimensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79073__$1,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79073__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__5000__auto__ = metabase.lib.drill_thru.common.mbql_stage_QMARK_(query,stage_number);
if(and__5000__auto__){
var and__5000__auto____$1 = (function (){var or__5002__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("source","aggregations","source/aggregations",-1828710137));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return cljs.core.not_empty(dimensions);
}
})();
if(cljs.core.truth_(and__5000__auto____$1)){
var and__5000__auto____$2 = (function (){var or__5002__auto__ = (function (){var and__5000__auto____$2 = column;
if(cljs.core.truth_(and__5000__auto____$2)){
return (!((value == null)));
} else {
return and__5000__auto____$2;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (((column == null)) && ((value == null)));
}
})();
if(cljs.core.truth_(and__5000__auto____$2)){
return cljs.core.not((function (){var and__5000__auto____$3 = column;
if(cljs.core.truth_(and__5000__auto____$3)){
return metabase.lib.types.isa.structured_QMARK_(column);
} else {
return and__5000__auto____$3;
}
})());
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metabase.lib.drill-thru","drill-thru","metabase.lib.drill-thru/drill-thru",-67424984),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("drill-thru","underlying-records","drill-thru/underlying-records",-1420917644),new cljs.core.Keyword(null,"row-count","row-count",1060167988),((((typeof value === 'number') && ((!((value < (0)))))))?value:(2)),new cljs.core.Keyword(null,"table-name","table-name",-2117866341),(function (){var temp__5804__auto__ = (function (){var or__5002__auto__ = (function (){var G__79078 = query;
var G__79078__$1 = (((G__79078 == null))?null:metabase.lib.util.source_table_id(G__79078));
if((G__79078__$1 == null)){
return null;
} else {
return metabase.lib.metadata.table(query,G__79078__$1);
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__79079 = query;
var G__79079__$1 = (((G__79079 == null))?null:metabase.lib.util.source_card_id(G__79079));
if((G__79079__$1 == null)){
return null;
} else {
return metabase.lib.metadata.card(query,G__79079__$1);
}
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var table_or_card = temp__5804__auto__;
return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,table_or_card);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),dimensions,new cljs.core.Keyword(null,"column-ref","column-ref",2018188376),column_ref], null);
} else {
return null;
}
});
metabase.lib.drill_thru.common.drill_thru_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("drill-thru","underlying-records","drill-thru/underlying-records",-1420917644),(function (_query,_stage_number,p__79080){
var map__79081 = p__79080;
var map__79081__$1 = cljs.core.__destructure_map(map__79081);
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79081__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var table_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79081__$1,new cljs.core.Keyword(null,"table-name","table-name",-2117866341));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("drill-thru","underlying-records","drill-thru/underlying-records",-1420917644),new cljs.core.Keyword(null,"row-count","row-count",1060167988),row_count,new cljs.core.Keyword(null,"table-name","table-name",-2117866341),table_name], null);
}));
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int column :- :metabase.lib.schema.metadata/column value :- :any]
 *   Return: :metabase.lib.schema/query
 */
metabase.lib.drill_thru.underlying_records.drill_filter = (function metabase$lib$drill_thru$underlying_records$drill_filter(query,stage_number,column,value){
var filter_clauses = (function (){var or__5002__auto__ = (cljs.core.truth_(metabase.lib.binning.binning(column))?(function (){var unbinned_column = metabase.lib.binning.with_binning(column,null);
if((!((value == null)))){
var temp__5804__auto__ = metabase.lib.binning.resolve_bin_width(query,column,value);
if(cljs.core.truth_(temp__5804__auto__)){
var map__79082 = temp__5804__auto__;
var map__79082__$1 = cljs.core.__destructure_map(map__79082);
var min_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79082__$1,new cljs.core.Keyword(null,"min-value","min-value",-1119123315));
var max_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79082__$1,new cljs.core.Keyword(null,"max-value","max-value",687805168));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.filter._GT__EQ_(unbinned_column,min_value),metabase.lib.filter._LT_(unbinned_column,max_value)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.filter.is_null(unbinned_column)], null);
}
})():null);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var column__$1 = (function (){var temp__5802__auto__ = new cljs.core.Keyword("metabase.lib.underlying","temporal-unit","metabase.lib.underlying/temporal-unit",1900868940).cljs$core$IFn$_invoke$arity$1(column);
if(cljs.core.truth_(temp__5802__auto__)){
var temporal_unit = temp__5802__auto__;
return metabase.lib.temporal_bucket.with_temporal_bucket(column,temporal_unit);
} else {
return column;
}
})();
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.filter._EQ_(column__$1,value)], null);
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (query__$1,filter_clause){
return metabase.lib.filter.filter.cljs$core$IFn$_invoke$arity$3(query__$1,stage_number,filter_clause);
}),query,filter_clauses);
});
/**
 * Drops aggregations, breakouts, orders, limits and field, then applies a filter for each of the dimensions (including
 *   for metrics, and aggregations that imply a filter like `:sum-where`).
 * 
 *   Extracted to a helper since it's reused by automatic-insights drill.
 */
metabase.lib.drill_thru.underlying_records.drill_underlying_records = (function metabase$lib$drill_thru$underlying_records$drill_underlying_records(query,p__79086){
var map__79087 = p__79086;
var map__79087__$1 = cljs.core.__destructure_map(map__79087);
var _context = map__79087__$1;
var column_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79087__$1,new cljs.core.Keyword(null,"column-ref","column-ref",2018188376));
var dimensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79087__$1,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097));
var base_query = metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(query,(-1),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),new cljs.core.Keyword(null,"breakout","breakout",-732419050),new cljs.core.Keyword(null,"order-by","order-by",1527318070),new cljs.core.Keyword(null,"limit","limit",-1355822363),new cljs.core.Keyword(null,"fields","fields",-1932066230)], 0));
var filtered = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (q,p__79088){
var map__79089 = p__79088;
var map__79089__$1 = cljs.core.__destructure_map(map__79089);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79089__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79089__$1,new cljs.core.Keyword(null,"value","value",305978217));
return metabase.lib.drill_thru.underlying_records.drill_filter(q,(-1),column,value);
}),base_query,(function (){var iter__5480__auto__ = (function metabase$lib$drill_thru$underlying_records$drill_underlying_records_$_iter__79090(s__79091){
return (new cljs.core.LazySeq(null,(function (){
var s__79091__$1 = s__79091;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__79091__$1);
if(temp__5804__auto__){
var s__79091__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__79091__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__79091__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__79093 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__79092 = (0);
while(true){
if((i__79092 < size__5479__auto__)){
var dimension = cljs.core._nth(c__5478__auto__,i__79092);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(dimension)),new cljs.core.Keyword("source","aggregations","source/aggregations",-1828710137))){
cljs.core.chunk_append(b__79093,dimension);

var G__79109 = (i__79092 + (1));
i__79092 = G__79109;
continue;
} else {
var G__79110 = (i__79092 + (1));
i__79092 = G__79110;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79093),metabase$lib$drill_thru$underlying_records$drill_underlying_records_$_iter__79090(cljs.core.chunk_rest(s__79091__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79093),null);
}
} else {
var dimension = cljs.core.first(s__79091__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(dimension)),new cljs.core.Keyword("source","aggregations","source/aggregations",-1828710137))){
return cljs.core.cons(dimension,metabase$lib$drill_thru$underlying_records$drill_underlying_records_$_iter__79090(cljs.core.rest(s__79091__$2)));
} else {
var G__79120 = cljs.core.rest(s__79091__$2);
s__79091__$1 = G__79120;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(dimensions);
})());
var aggregation = (function (){var temp__5804__auto__ = cljs.core.last(column_ref);
if(cljs.core.truth_(temp__5804__auto__)){
var agg_uuid = temp__5804__auto__;
return medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p1__79083_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(metabase.lib.options.uuid(p1__79083_SHARP_),agg_uuid);
}),metabase.lib.aggregation.aggregations.cljs$core$IFn$_invoke$arity$2(query,(-1)));
} else {
return null;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__79084_SHARP_,p2__79085_SHARP_){
return metabase.lib.filter.filter.cljs$core$IFn$_invoke$arity$3(p1__79084_SHARP_,(-1),p2__79085_SHARP_);
}),filtered,(cljs.core.truth_(aggregation)?(function (){var G__79096 = cljs.core.first(aggregation);
var G__79096__$1 = (((G__79096 instanceof cljs.core.Keyword))?G__79096.fqn:null);
switch (G__79096__$1) {
case "sum-where":
case "count-where":
case "share":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(aggregation)], null);

break;
default:
return null;

}
})():null));
});
metabase.lib.drill_thru.common.drill_thru_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("drill-thru","underlying-records","drill-thru/underlying-records",-1420917644),(function() { 
var G__79122__delegate = function (query,_stage_number,context,_){
return metabase.lib.drill_thru.underlying_records.drill_underlying_records(metabase.lib.underlying.top_level_query(query),cljs.core.update.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),(function (dims){
var iter__5480__auto__ = (function metabase$lib$drill_thru$underlying_records$iter__79100(s__79101){
return (new cljs.core.LazySeq(null,(function (){
var s__79101__$1 = s__79101;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__79101__$1);
if(temp__5804__auto__){
var s__79101__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__79101__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__79101__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__79103 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__79102 = (0);
while(true){
if((i__79102 < size__5479__auto__)){
var dim = cljs.core._nth(c__5478__auto__,i__79102);
cljs.core.chunk_append(b__79103,cljs.core.update.cljs$core$IFn$_invoke$arity$3(dim,new cljs.core.Keyword(null,"column","column",2078222095),((function (i__79102,dim,c__5478__auto__,size__5479__auto__,b__79103,s__79101__$2,temp__5804__auto__){
return (function (p1__79097_SHARP_){
return metabase.lib.underlying.top_level_column(query,p1__79097_SHARP_);
});})(i__79102,dim,c__5478__auto__,size__5479__auto__,b__79103,s__79101__$2,temp__5804__auto__))
));

var G__79124 = (i__79102 + (1));
i__79102 = G__79124;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79103),metabase$lib$drill_thru$underlying_records$iter__79100(cljs.core.chunk_rest(s__79101__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79103),null);
}
} else {
var dim = cljs.core.first(s__79101__$2);
return cljs.core.cons(cljs.core.update.cljs$core$IFn$_invoke$arity$3(dim,new cljs.core.Keyword(null,"column","column",2078222095),((function (dim,s__79101__$2,temp__5804__auto__){
return (function (p1__79097_SHARP_){
return metabase.lib.underlying.top_level_column(query,p1__79097_SHARP_);
});})(dim,s__79101__$2,temp__5804__auto__))
),metabase$lib$drill_thru$underlying_records$iter__79100(cljs.core.rest(s__79101__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(dims);
})));
};
var G__79122 = function (query,_stage_number,context,var_args){
var _ = null;
if (arguments.length > 3) {
var G__79125__i = 0, G__79125__a = new Array(arguments.length -  3);
while (G__79125__i < G__79125__a.length) {G__79125__a[G__79125__i] = arguments[G__79125__i + 3]; ++G__79125__i;}
  _ = new cljs.core.IndexedSeq(G__79125__a,0,null);
} 
return G__79122__delegate.call(this,query,_stage_number,context,_);};
G__79122.cljs$lang$maxFixedArity = 3;
G__79122.cljs$lang$applyTo = (function (arglist__79128){
var query = cljs.core.first(arglist__79128);
arglist__79128 = cljs.core.next(arglist__79128);
var _stage_number = cljs.core.first(arglist__79128);
arglist__79128 = cljs.core.next(arglist__79128);
var context = cljs.core.first(arglist__79128);
var _ = cljs.core.rest(arglist__79128);
return G__79122__delegate(query,_stage_number,context,_);
});
G__79122.cljs$core$IFn$_invoke$arity$variadic = G__79122__delegate;
return G__79122;
})()
);

//# sourceMappingURL=metabase.lib.drill_thru.underlying_records.js.map
