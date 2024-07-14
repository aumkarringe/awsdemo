var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.drill_thru.common.js");
require("./metabase.lib.filter.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.query.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.drill_thru.fk_details.js");

goog.provide('metabase.lib.drill_thru.fk_details');
/**
 * Inputs: [query :- :metabase.lib.schema/query _stage-number :- :int {:keys [column value], :as _context} :- :metabase.lib.schema.drill-thru/context]
 *   Return: [:maybe :metabase.lib.schema.drill-thru/drill-thru.fk-details]
 *        
 * 
 *   Return an `:fk-details` 'View details' drill when clicking on the value of a FK column.
 */
metabase.lib.drill_thru.fk_details.fk_details_drill = (function metabase$lib$drill_thru$fk_details$fk_details_drill(query,_stage_number,p__79206){
var map__79208 = p__79206;
var map__79208__$1 = cljs.core.__destructure_map(map__79208);
var _context = map__79208__$1;
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79208__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79208__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(((metabase.lib.types.isa.foreign_key_QMARK_(column)) && ((((!((value == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"null","null",-180137709))))))){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metabase.lib.drill-thru","drill-thru","metabase.lib.drill-thru/drill-thru",-67424984),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("drill-thru","fk-details","drill-thru/fk-details",-687193600),new cljs.core.Keyword(null,"column","column",2078222095),column,new cljs.core.Keyword(null,"object-id","object-id",-754527291),value,new cljs.core.Keyword(null,"many-pks?","many-pks?",-459675021),metabase.lib.drill_thru.common.many_pks_QMARK_(query)], null);
} else {
return null;
}
});
metabase.lib.drill_thru.common.drill_thru_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("drill-thru","fk-details","drill-thru/fk-details",-687193600),(function (_query,_stage_number,drill_thru){
return cljs.core.select_keys(drill_thru,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"many-pks?","many-pks?",-459675021),new cljs.core.Keyword(null,"object-id","object-id",-754527291),new cljs.core.Keyword(null,"type","type",1174270348)], null));
}));
metabase.lib.drill_thru.common.drill_thru_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("drill-thru","fk-details","drill-thru/fk-details",-687193600),(function() { 
var G__79227__delegate = function (query,stage_number,p__79215,_){
var map__79216 = p__79215;
var map__79216__$1 = cljs.core.__destructure_map(map__79216);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79216__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var object_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79216__$1,new cljs.core.Keyword(null,"object-id","object-id",-754527291));
var fk_column_id = new cljs.core.Keyword(null,"fk-target-field-id","fk-target-field-id",2019750287).cljs$core$IFn$_invoke$arity$1(column);
var fk_column = (function (){var G__79219 = fk_column_id;
if((G__79219 == null)){
return null;
} else {
return metabase.lib.metadata.field(query,G__79219);
}
})();
var fk_column_table = (function (){var G__79220 = new cljs.core.Keyword(null,"table-id","table-id",-766649466).cljs$core$IFn$_invoke$arity$1(fk_column);
if((G__79220 == null)){
return null;
} else {
return metabase.lib.metadata.table(query,G__79220);
}
})();
var other_fk_filters = (function (){var iter__5480__auto__ = (function metabase$lib$drill_thru$fk_details$iter__79221(s__79222){
return (new cljs.core.LazySeq(null,(function (){
var s__79222__$1 = s__79222;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__79222__$1);
if(temp__5804__auto__){
var s__79222__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__79222__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__79222__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__79224 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__79223 = (0);
while(true){
if((i__79223 < size__5479__auto__)){
var filter_clause = cljs.core._nth(c__5478__auto__,i__79223);
var parts = metabase.lib.filter.filter_parts.cljs$core$IFn$_invoke$arity$3(query,stage_number,filter_clause);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"short","short",1928760516).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"operator","operator",-1860875338).cljs$core$IFn$_invoke$arity$1(parts)),new cljs.core.Keyword(null,"=","=",1152933628))){
var other_fk_target = (function (){var G__79225 = parts;
var G__79225__$1 = (((G__79225 == null))?null:new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(G__79225));
var G__79225__$2 = (((G__79225__$1 == null))?null:new cljs.core.Keyword(null,"fk-target-field-id","fk-target-field-id",2019750287).cljs$core$IFn$_invoke$arity$1(G__79225__$1));
if((G__79225__$2 == null)){
return null;
} else {
return metabase.lib.metadata.field(query,G__79225__$2);
}
})();
if(cljs.core.truth_((function (){var and__5000__auto__ = other_fk_target;
if(cljs.core.truth_(and__5000__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"table-id","table-id",-766649466).cljs$core$IFn$_invoke$arity$1(other_fk_target),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(fk_column_table))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(other_fk_target),fk_column_id)));
} else {
return and__5000__auto__;
}
})())){
cljs.core.chunk_append(b__79224,metabase.lib.filter._EQ_(other_fk_target,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(parts))));

var G__79228 = (i__79223 + (1));
i__79223 = G__79228;
continue;
} else {
var G__79229 = (i__79223 + (1));
i__79223 = G__79229;
continue;
}
} else {
var G__79230 = (i__79223 + (1));
i__79223 = G__79230;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79224),metabase$lib$drill_thru$fk_details$iter__79221(cljs.core.chunk_rest(s__79222__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79224),null);
}
} else {
var filter_clause = cljs.core.first(s__79222__$2);
var parts = metabase.lib.filter.filter_parts.cljs$core$IFn$_invoke$arity$3(query,stage_number,filter_clause);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"short","short",1928760516).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"operator","operator",-1860875338).cljs$core$IFn$_invoke$arity$1(parts)),new cljs.core.Keyword(null,"=","=",1152933628))){
var other_fk_target = (function (){var G__79226 = parts;
var G__79226__$1 = (((G__79226 == null))?null:new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(G__79226));
var G__79226__$2 = (((G__79226__$1 == null))?null:new cljs.core.Keyword(null,"fk-target-field-id","fk-target-field-id",2019750287).cljs$core$IFn$_invoke$arity$1(G__79226__$1));
if((G__79226__$2 == null)){
return null;
} else {
return metabase.lib.metadata.field(query,G__79226__$2);
}
})();
if(cljs.core.truth_((function (){var and__5000__auto__ = other_fk_target;
if(cljs.core.truth_(and__5000__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"table-id","table-id",-766649466).cljs$core$IFn$_invoke$arity$1(other_fk_target),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(fk_column_table))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(other_fk_target),fk_column_id)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.cons(metabase.lib.filter._EQ_(other_fk_target,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(parts))),metabase$lib$drill_thru$fk_details$iter__79221(cljs.core.rest(s__79222__$2)));
} else {
var G__79231 = cljs.core.rest(s__79222__$2);
s__79222__$1 = G__79231;
continue;
}
} else {
var G__79232 = cljs.core.rest(s__79222__$2);
s__79222__$1 = G__79232;
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
return iter__5480__auto__(metabase.lib.filter.filters.cljs$core$IFn$_invoke$arity$2(query,stage_number));
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__79212_SHARP_,p2__79214_SHARP_){
return metabase.lib.filter.filter.cljs$core$IFn$_invoke$arity$3(p1__79212_SHARP_,stage_number,p2__79214_SHARP_);
}),metabase.lib.query.query(query,fk_column_table),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(other_fk_filters,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.filter._EQ_(fk_column,object_id)], null)));
};
var G__79227 = function (query,stage_number,p__79215,var_args){
var _ = null;
if (arguments.length > 3) {
var G__79233__i = 0, G__79233__a = new Array(arguments.length -  3);
while (G__79233__i < G__79233__a.length) {G__79233__a[G__79233__i] = arguments[G__79233__i + 3]; ++G__79233__i;}
  _ = new cljs.core.IndexedSeq(G__79233__a,0,null);
} 
return G__79227__delegate.call(this,query,stage_number,p__79215,_);};
G__79227.cljs$lang$maxFixedArity = 3;
G__79227.cljs$lang$applyTo = (function (arglist__79234){
var query = cljs.core.first(arglist__79234);
arglist__79234 = cljs.core.next(arglist__79234);
var stage_number = cljs.core.first(arglist__79234);
arglist__79234 = cljs.core.next(arglist__79234);
var p__79215 = cljs.core.first(arglist__79234);
var _ = cljs.core.rest(arglist__79234);
return G__79227__delegate(query,stage_number,p__79215,_);
});
G__79227.cljs$core$IFn$_invoke$arity$variadic = G__79227__delegate;
return G__79227;
})()
);

//# sourceMappingURL=metabase.lib.drill_thru.fk_details.js.map
