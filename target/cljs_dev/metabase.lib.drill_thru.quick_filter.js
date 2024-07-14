var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./medley.core.js");
require("./metabase.lib.drill_thru.column_filter.js");
require("./metabase.lib.drill_thru.common.js");
require("./metabase.lib.filter.js");
require("./metabase.lib.options.js");
require("./metabase.lib.ref.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.schema.drill_thru.js");
require("./metabase.lib.schema.expression.js");
require("./metabase.lib.schema.metadata.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.drill_thru.quick_filter.js");

goog.provide('metabase.lib.drill_thru.quick_filter');
metabase.lib.drill_thru.quick_filter.operator = (function metabase$lib$drill_thru$quick_filter$operator(var_args){
var args__5732__auto__ = [];
var len__5726__auto___79371 = arguments.length;
var i__5727__auto___79372 = (0);
while(true){
if((i__5727__auto___79372 < len__5726__auto___79371)){
args__5732__auto__.push((arguments[i__5727__auto___79372]));

var G__79373 = (i__5727__auto___79372 + (1));
i__5727__auto___79372 = G__79373;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return metabase.lib.drill_thru.quick_filter.operator.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(metabase.lib.drill_thru.quick_filter.operator.cljs$core$IFn$_invoke$arity$variadic = (function (op,args){
return metabase.lib.options.ensure_uuid(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,cljs.core.PersistentArrayMap.EMPTY], null),args));
}));

(metabase.lib.drill_thru.quick_filter.operator.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.lib.drill_thru.quick_filter.operator.cljs$lang$applyTo = (function (seq79322){
var G__79323 = cljs.core.first(seq79322);
var seq79322__$1 = cljs.core.next(seq79322);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__79323,seq79322__$1);
}));

/**
 * Inputs: [column :- :metabase.lib.schema.metadata/column value]
 *   Return: [:sequential :metabase.lib.schema.drill-thru/drill-thru.quick-filter.operator]
 */
metabase.lib.drill_thru.quick_filter.operators_for = (function metabase$lib$drill_thru$quick_filter$operators_for(column,value){
var field_ref = metabase.lib.ref.ref(column);
if(metabase.lib.types.isa.structured_QMARK_(column)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"null","null",-180137709))){
var iter__5480__auto__ = (function metabase$lib$drill_thru$quick_filter$operators_for_$_iter__79324(s__79325){
return (new cljs.core.LazySeq(null,(function (){
var s__79325__$1 = s__79325;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__79325__$1);
if(temp__5804__auto__){
var s__79325__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__79325__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__79325__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__79327 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__79326 = (0);
while(true){
if((i__79326 < size__5479__auto__)){
var vec__79328 = cljs.core._nth(c__5478__auto__,i__79326);
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79328,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79328,(1),null);
cljs.core.chunk_append(b__79327,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),label,new cljs.core.Keyword(null,"filter","filter",-948537934),metabase.lib.drill_thru.quick_filter.operator.cljs$core$IFn$_invoke$arity$variadic(op,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field_ref], 0))], null));

var G__79374 = (i__79326 + (1));
i__79326 = G__79374;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79327),metabase$lib$drill_thru$quick_filter$operators_for_$_iter__79324(cljs.core.chunk_rest(s__79325__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79327),null);
}
} else {
var vec__79331 = cljs.core.first(s__79325__$2);
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79331,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79331,(1),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),label,new cljs.core.Keyword(null,"filter","filter",-948537934),metabase.lib.drill_thru.quick_filter.operator.cljs$core$IFn$_invoke$arity$variadic(op,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field_ref], 0))], null),metabase$lib$drill_thru$quick_filter$operators_for_$_iter__79324(cljs.core.rest(s__79325__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(((((metabase.lib.types.isa.string_QMARK_(column)) || (metabase.lib.types.isa.string_like_QMARK_(column))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-empty","is-empty",-1040302908),"="], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-empty","not-empty",388922063),"\u2260"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-null","is-null",-1997050930),"="], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-null","not-null",-1326718535),"\u2260"], null)], null)));
} else {
if(((metabase.lib.types.isa.numeric_QMARK_(column)) || (metabase.lib.types.isa.temporal_QMARK_(column)))){
var iter__5480__auto__ = (function metabase$lib$drill_thru$quick_filter$operators_for_$_iter__79334(s__79335){
return (new cljs.core.LazySeq(null,(function (){
var s__79335__$1 = s__79335;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__79335__$1);
if(temp__5804__auto__){
var s__79335__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__79335__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__79335__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__79337 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__79336 = (0);
while(true){
if((i__79336 < size__5479__auto__)){
var vec__79338 = cljs.core._nth(c__5478__auto__,i__79336);
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79338,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79338,(1),null);
if(cljs.core.truth_((function (){var or__5002__auto__ = cljs.core.not((function (){var fexpr__79341 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,">",">",-555517146),null,new cljs.core.Keyword(null,"<","<",-646864291),null], null), null);
return (fexpr__79341.cljs$core$IFn$_invoke$arity$1 ? fexpr__79341.cljs$core$IFn$_invoke$arity$1(op) : fexpr__79341.call(null,op));
})());
if(or__5002__auto__){
return or__5002__auto__;
} else {
return metabase.lib.schema.expression.comparable_expressions_QMARK_(field_ref,value);
}
})())){
cljs.core.chunk_append(b__79337,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),label,new cljs.core.Keyword(null,"filter","filter",-948537934),metabase.lib.drill_thru.quick_filter.operator.cljs$core$IFn$_invoke$arity$variadic(op,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field_ref,value], 0))], null));

var G__79375 = (i__79336 + (1));
i__79336 = G__79375;
continue;
} else {
var G__79376 = (i__79336 + (1));
i__79336 = G__79376;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79337),metabase$lib$drill_thru$quick_filter$operators_for_$_iter__79334(cljs.core.chunk_rest(s__79335__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79337),null);
}
} else {
var vec__79342 = cljs.core.first(s__79335__$2);
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79342,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79342,(1),null);
if(cljs.core.truth_((function (){var or__5002__auto__ = cljs.core.not((function (){var fexpr__79345 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,">",">",-555517146),null,new cljs.core.Keyword(null,"<","<",-646864291),null], null), null);
return (fexpr__79345.cljs$core$IFn$_invoke$arity$1 ? fexpr__79345.cljs$core$IFn$_invoke$arity$1(op) : fexpr__79345.call(null,op));
})());
if(or__5002__auto__){
return or__5002__auto__;
} else {
return metabase.lib.schema.expression.comparable_expressions_QMARK_(field_ref,value);
}
})())){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),label,new cljs.core.Keyword(null,"filter","filter",-948537934),metabase.lib.drill_thru.quick_filter.operator.cljs$core$IFn$_invoke$arity$variadic(op,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field_ref,value], 0))], null),metabase$lib$drill_thru$quick_filter$operators_for_$_iter__79334(cljs.core.rest(s__79335__$2)));
} else {
var G__79377 = cljs.core.rest(s__79335__$2);
s__79335__$1 = G__79377;
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
return iter__5480__auto__(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<","<",-646864291),"<"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),">"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),"="], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!=","!=",-1841737356),"\u2260"], null)], null));
} else {
if(((metabase.lib.types.isa.string_QMARK_(column)) && (((metabase.lib.types.isa.comment_QMARK_(column)) || (metabase.lib.types.isa.description_QMARK_(column)))))){
var iter__5480__auto__ = (function metabase$lib$drill_thru$quick_filter$operators_for_$_iter__79346(s__79347){
return (new cljs.core.LazySeq(null,(function (){
var s__79347__$1 = s__79347;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__79347__$1);
if(temp__5804__auto__){
var s__79347__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__79347__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__79347__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__79349 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__79348 = (0);
while(true){
if((i__79348 < size__5479__auto__)){
var vec__79350 = cljs.core._nth(c__5478__auto__,i__79348);
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79350,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79350,(1),null);
cljs.core.chunk_append(b__79349,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),label,new cljs.core.Keyword(null,"filter","filter",-948537934),metabase.lib.drill_thru.quick_filter.operator.cljs$core$IFn$_invoke$arity$variadic(op,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field_ref,value], 0))], null));

var G__79378 = (i__79348 + (1));
i__79348 = G__79378;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79349),metabase$lib$drill_thru$quick_filter$operators_for_$_iter__79346(cljs.core.chunk_rest(s__79347__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79349),null);
}
} else {
var vec__79353 = cljs.core.first(s__79347__$2);
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79353,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79353,(1),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),label,new cljs.core.Keyword(null,"filter","filter",-948537934),metabase.lib.drill_thru.quick_filter.operator.cljs$core$IFn$_invoke$arity$variadic(op,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field_ref,value], 0))], null),metabase$lib$drill_thru$quick_filter$operators_for_$_iter__79346(cljs.core.rest(s__79347__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contains","contains",676899812),"contains"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"does-not-contain","does-not-contain",-274946853),"does-not-contain"], null)], null));
} else {
var iter__5480__auto__ = (function metabase$lib$drill_thru$quick_filter$operators_for_$_iter__79356(s__79357){
return (new cljs.core.LazySeq(null,(function (){
var s__79357__$1 = s__79357;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__79357__$1);
if(temp__5804__auto__){
var s__79357__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__79357__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__79357__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__79359 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__79358 = (0);
while(true){
if((i__79358 < size__5479__auto__)){
var vec__79360 = cljs.core._nth(c__5478__auto__,i__79358);
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79360,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79360,(1),null);
cljs.core.chunk_append(b__79359,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),label,new cljs.core.Keyword(null,"filter","filter",-948537934),metabase.lib.drill_thru.quick_filter.operator.cljs$core$IFn$_invoke$arity$variadic(op,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field_ref,value], 0))], null));

var G__79379 = (i__79358 + (1));
i__79358 = G__79379;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79359),metabase$lib$drill_thru$quick_filter$operators_for_$_iter__79356(cljs.core.chunk_rest(s__79357__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79359),null);
}
} else {
var vec__79363 = cljs.core.first(s__79357__$2);
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79363,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79363,(1),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),label,new cljs.core.Keyword(null,"filter","filter",-948537934),metabase.lib.drill_thru.quick_filter.operator.cljs$core$IFn$_invoke$arity$variadic(op,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field_ref,value], 0))], null),metabase$lib$drill_thru$quick_filter$operators_for_$_iter__79356(cljs.core.rest(s__79357__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),"="], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"!=","!=",-1841737356),"\u2260"], null)], null));

}
}
}
}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int {:keys [column column-ref dimensions value], :as _context} :- :metabase.lib.schema.drill-thru/context]
 *   Return: [:maybe :metabase.lib.schema.drill-thru/drill-thru.quick-filter]
 *        
 * 
 *   Filter the current query based on the value clicked.
 * 
 *   The options vary depending on the type of the field:
 *   - `:is-null` and `:not-null` for a `NULL` value;
 *   - `:=` and `:!=` for everything else;
 *   - plus `:<` and `:>` for numeric and date columns.
 * 
 *   Note that this returns a single `::drill-thru` value with 1 or more `:operators`; these are rendered as a set of small
 *   buttons in a single row of the drop-down.
 */
metabase.lib.drill_thru.quick_filter.quick_filter_drill = (function metabase$lib$drill_thru$quick_filter$quick_filter_drill(query,stage_number,p__79366){
var map__79367 = p__79366;
var map__79367__$1 = cljs.core.__destructure_map(map__79367);
var _context = map__79367__$1;
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79367__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var column_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79367__$1,new cljs.core.Keyword(null,"column-ref","column-ref",2018188376));
var dimensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79367__$1,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79367__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__5000__auto__ = metabase.lib.drill_thru.common.mbql_stage_QMARK_(query,stage_number);
if(and__5000__auto__){
var and__5000__auto____$1 = column;
if(cljs.core.truth_(and__5000__auto____$1)){
return (((!((value == null)))) && (((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("source","aggregations","source/aggregations",-1828710137))) || (cljs.core.seq(dimensions)))) && ((((!(metabase.lib.types.isa.structured_QMARK_(column)))) && ((((!(metabase.lib.types.isa.primary_key_QMARK_(column)))) && ((!(metabase.lib.types.isa.foreign_key_QMARK_(column)))))))))));
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
var adjusted = metabase.lib.drill_thru.column_filter.prepare_query_for_drill_addition(query,stage_number,column,column_ref,new cljs.core.Keyword(null,"filter","filter",-948537934));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metabase.lib.drill-thru","drill-thru","metabase.lib.drill-thru/drill-thru",-67424984),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("drill-thru","quick-filter","drill-thru/quick-filter",-1465756422),new cljs.core.Keyword(null,"operators","operators",-2064102509),metabase.lib.drill_thru.quick_filter.operators_for(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(adjusted),value),new cljs.core.Keyword(null,"value","value",305978217),value], null),adjusted], 0));
} else {
return null;
}
});
metabase.lib.drill_thru.common.drill_thru_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("drill-thru","quick-filter","drill-thru/quick-filter",-1465756422),(function (_query,_stage_number,drill_thru){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.select_keys(drill_thru,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"operators","operators",-2064102509),new cljs.core.Keyword(null,"value","value",305978217)], null)),new cljs.core.Keyword(null,"value","value",305978217),metabase.lib.drill_thru.common.drill_value__GT_js),new cljs.core.Keyword(null,"operators","operators",-2064102509),(function (operators){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),operators);
}));
}));
metabase.lib.drill_thru.common.drill_thru_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("drill-thru","quick-filter","drill-thru/quick-filter",-1465756422),(function (_query,_stage_number,p__79369,filter_op){
var map__79370 = p__79369;
var map__79370__$1 = cljs.core.__destructure_map(map__79370);
var drill = map__79370__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79370__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var stage_number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79370__$1,new cljs.core.Keyword(null,"stage-number","stage-number",-1752729638));
var quick_filter = (function (){var or__5002__auto__ = medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p1__79368_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__79368_SHARP_),filter_op);
}),new cljs.core.Keyword(null,"operators","operators",-2064102509).cljs$core$IFn$_invoke$arity$1(drill));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["No matching filter for operator ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filter_op)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"drill-thru","drill-thru",1364123038),drill,new cljs.core.Keyword(null,"operator","operator",-1860875338),filter_op,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"stage-number","stage-number",-1752729638),stage_number], null));
}
})();
return metabase.lib.filter.filter.cljs$core$IFn$_invoke$arity$3(query,stage_number,new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(quick_filter));
}));

//# sourceMappingURL=metabase.lib.drill_thru.quick_filter.js.map
