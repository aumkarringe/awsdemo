var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./medley.core.js");
require("./metabase.lib.drill_thru.common.js");
require("./metabase.lib.filter.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.drill_thru.pk.js");

goog.provide('metabase.lib.drill_thru.pk');
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int {:keys [column value row], :as _context} :- :metabase.lib.schema.drill-thru/context]
 *   Return: [:maybe :metabase.lib.schema.drill-thru/drill-thru.pk]
 *        
 * 
 *   'View details' drill when you click on a value in a table that has MULTIPLE PKs. There are two subtypes of PK
 *   drills:
 * 
 *   1) if you click on a PK column value, then we return a drill that will add a filter for that PK column/value
 * 
 *   2) if you click a non-PK column value, then we return a drill that will add filters for the PK columns/values in the
 *   row. This is never returned for FK columns; we return [[metabase.lib.drill-thru.fk-details]] drills instead.
 */
metabase.lib.drill_thru.pk.pk_drill = (function metabase$lib$drill_thru$pk$pk_drill(query,stage_number,p__79266){
var map__79267 = p__79266;
var map__79267__$1 = cljs.core.__destructure_map(map__79267);
var _context = map__79267__$1;
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79267__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79267__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79267__$1,new cljs.core.Keyword(null,"row","row",-570139521));
if((((!((value == null)))) && (((metabase.lib.drill_thru.common.mbql_stage_QMARK_(query,stage_number)) && (((metabase.lib.drill_thru.common.many_pks_QMARK_(query)) && ((!(metabase.lib.types.isa.foreign_key_QMARK_(column)))))))))){
if(metabase.lib.types.isa.primary_key_QMARK_(column)){
if((((!((value == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"null","null",-180137709))))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metabase.lib.drill-thru","drill-thru","metabase.lib.drill-thru/drill-thru",-67424984),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("drill-thru","pk","drill-thru/pk",1721977789),new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column","column",2078222095),column,new cljs.core.Keyword(null,"value","value",305978217),value], null)], null)], null);
} else {
return null;
}
} else {
var pk_columns = metabase.lib.metadata.calculation.primary_keys(query);
var dimensions = (function (){var iter__5480__auto__ = (function metabase$lib$drill_thru$pk$pk_drill_$_iter__79270(s__79271){
return (new cljs.core.LazySeq(null,(function (){
var s__79271__$1 = s__79271;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__79271__$1);
if(temp__5804__auto__){
var s__79271__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__79271__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__79271__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__79273 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__79272 = (0);
while(true){
if((i__79272 < size__5479__auto__)){
var pk_column = cljs.core._nth(c__5478__auto__,i__79272);
var value__$1 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(medley.core.find_first.cljs$core$IFn$_invoke$arity$2(((function (i__79272,s__79271__$1,pk_column,c__5478__auto__,size__5479__auto__,b__79273,s__79271__$2,temp__5804__auto__,pk_columns,map__79267,map__79267__$1,_context,column,value,row){
return (function (p1__79264_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(p1__79264_SHARP_)),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(pk_column));
});})(i__79272,s__79271__$1,pk_column,c__5478__auto__,size__5479__auto__,b__79273,s__79271__$2,temp__5804__auto__,pk_columns,map__79267,map__79267__$1,_context,column,value,row))
,row));
if(cljs.core.truth_(value__$1)){
cljs.core.chunk_append(b__79273,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column","column",2078222095),pk_column,new cljs.core.Keyword(null,"value","value",305978217),value__$1], null));

var G__79289 = (i__79272 + (1));
i__79272 = G__79289;
continue;
} else {
var G__79290 = (i__79272 + (1));
i__79272 = G__79290;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79273),metabase$lib$drill_thru$pk$pk_drill_$_iter__79270(cljs.core.chunk_rest(s__79271__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79273),null);
}
} else {
var pk_column = cljs.core.first(s__79271__$2);
var value__$1 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(medley.core.find_first.cljs$core$IFn$_invoke$arity$2(((function (s__79271__$1,pk_column,s__79271__$2,temp__5804__auto__,pk_columns,map__79267,map__79267__$1,_context,column,value,row){
return (function (p1__79264_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(p1__79264_SHARP_)),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(pk_column));
});})(s__79271__$1,pk_column,s__79271__$2,temp__5804__auto__,pk_columns,map__79267,map__79267__$1,_context,column,value,row))
,row));
if(cljs.core.truth_(value__$1)){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column","column",2078222095),pk_column,new cljs.core.Keyword(null,"value","value",305978217),value__$1], null),metabase$lib$drill_thru$pk$pk_drill_$_iter__79270(cljs.core.rest(s__79271__$2)));
} else {
var G__79291 = cljs.core.rest(s__79271__$2);
s__79271__$1 = G__79291;
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
return iter__5480__auto__(pk_columns);
})();
if(cljs.core.seq(dimensions)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metabase.lib.drill-thru","drill-thru","metabase.lib.drill-thru/drill-thru",-67424984),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("drill-thru","pk","drill-thru/pk",1721977789),new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__79265_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__79265_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
}),dimensions))], null);
} else {
return null;
}
}
} else {
return null;
}
});
metabase.lib.drill_thru.common.drill_thru_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("drill-thru","pk","drill-thru/pk",1721977789),(function (_query,_stage_number,drill_thru){
return cljs.core.select_keys(drill_thru,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"dimensions","dimensions",-254818097)], null));
}));
metabase.lib.drill_thru.common.drill_thru_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("drill-thru","pk","drill-thru/pk",1721977789),(function (query,stage_number,p__79282){
var map__79283 = p__79282;
var map__79283__$1 = cljs.core.__destructure_map(map__79283);
var _pk_drill = map__79283__$1;
var dimensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79283__$1,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (query__$1,p__79284){
var map__79285 = p__79284;
var map__79285__$1 = cljs.core.__destructure_map(map__79285);
var _dimension = map__79285__$1;
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79285__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79285__$1,new cljs.core.Keyword(null,"value","value",305978217));
return metabase.lib.filter.filter.cljs$core$IFn$_invoke$arity$3(query__$1,stage_number,metabase.lib.filter._EQ_(column,value));
}),query,dimensions);
}));

//# sourceMappingURL=metabase.lib.drill_thru.pk.js.map
