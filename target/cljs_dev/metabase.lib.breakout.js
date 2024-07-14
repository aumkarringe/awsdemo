var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./metabase.lib.binning.js");
require("./metabase.lib.equality.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.ref.js");
require("./metabase.lib.remove_replace.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.expression.js");
require("./metabase.lib.schema.metadata.js");
require("./metabase.lib.schema.ref.js");
require("./metabase.lib.temporal_bucket.js");
require("./metabase.lib.util.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.breakout.js");

goog.provide('metabase.lib.breakout');
metabase.lib.metadata.calculation.describe_top_level_key_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"breakout","breakout",-732419050),(function (query,stage_number,_k){
var temp__5804__auto__ = cljs.core.not_empty(new cljs.core.Keyword(null,"breakout","breakout",-732419050).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number)));
if(cljs.core.truth_(temp__5804__auto__)){
var breakouts = temp__5804__auto__;
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Grouped by {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2([" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.shared.util.i18n.js_i18n("and"))," "].join(''),(function (){var iter__5480__auto__ = (function metabase$lib$breakout$iter__78929(s__78930){
return (new cljs.core.LazySeq(null,(function (){
var s__78930__$1 = s__78930;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__78930__$1);
if(temp__5804__auto____$1){
var s__78930__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__78930__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__78930__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__78932 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__78931 = (0);
while(true){
if((i__78931 < size__5479__auto__)){
var breakout = cljs.core._nth(c__5478__auto__,i__78931);
cljs.core.chunk_append(b__78932,metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,breakout,new cljs.core.Keyword(null,"long","long",-171452093)));

var G__78953 = (i__78931 + (1));
i__78931 = G__78953;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__78932),metabase$lib$breakout$iter__78929(cljs.core.chunk_rest(s__78930__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__78932),null);
}
} else {
var breakout = cljs.core.first(s__78930__$2);
return cljs.core.cons(metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,breakout,new cljs.core.Keyword(null,"long","long",-171452093)),metabase$lib$breakout$iter__78929(cljs.core.rest(s__78930__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(breakouts);
})())], 0));
} else {
return null;
}
}));
/**
 * Inputs: ([query expr]
 *         [query :- :metabase.lib.schema/query stage-number :- :int expr :- some?])
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Add a new breakout on an expression, presumably a Field reference.
 */
metabase.lib.breakout.breakout = (function() {
var metabase$lib$breakout$breakout = null;
var metabase$lib$breakout$breakout__2 = (function (query,expr){
return (metabase.lib.breakout.breakout.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.breakout.breakout.cljs$core$IFn$_invoke$arity$3(query,(-1),expr) : metabase.lib.breakout.breakout.call(null,query,(-1),expr));
});
var metabase$lib$breakout$breakout__3 = (function (query,stage_number,expr){
var expr__$1 = metabase.lib.ref.ref(((cljs.core.fn_QMARK_(expr))?(expr.cljs$core$IFn$_invoke$arity$2 ? expr.cljs$core$IFn$_invoke$arity$2(query,stage_number) : expr.call(null,query,stage_number)):expr));
return metabase.lib.util.add_summary_clause(query,stage_number,new cljs.core.Keyword(null,"breakout","breakout",-732419050),expr__$1);
});
metabase$lib$breakout$breakout = function(query,stage_number,expr){
switch(arguments.length){
case 2:
return metabase$lib$breakout$breakout__2.call(this,query,stage_number);
case 3:
return metabase$lib$breakout$breakout__3.call(this,query,stage_number,expr);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$breakout$breakout.cljs$core$IFn$_invoke$arity$2 = metabase$lib$breakout$breakout__2;
metabase$lib$breakout$breakout.cljs$core$IFn$_invoke$arity$3 = metabase$lib$breakout$breakout__3;
return metabase$lib$breakout$breakout;
})()
;
/**
 * Inputs: ([query]
 *         [query :- :metabase.lib.schema/query stage-number :- :int])
 *   Return: [:maybe [:sequential :metabase.lib.schema.expression/expression]]
 *        
 * 
 *   Return the current breakouts
 */
metabase.lib.breakout.breakouts = (function() {
var metabase$lib$breakout$breakouts = null;
var metabase$lib$breakout$breakouts__1 = (function (query){
return (metabase.lib.breakout.breakouts.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.breakout.breakouts.cljs$core$IFn$_invoke$arity$2(query,(-1)) : metabase.lib.breakout.breakouts.call(null,query,(-1)));
});
var metabase$lib$breakout$breakouts__2 = (function (query,stage_number){
return cljs.core.not_empty(new cljs.core.Keyword(null,"breakout","breakout",-732419050).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number)));
});
metabase$lib$breakout$breakouts = function(query,stage_number){
switch(arguments.length){
case 1:
return metabase$lib$breakout$breakouts__1.call(this,query);
case 2:
return metabase$lib$breakout$breakouts__2.call(this,query,stage_number);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$breakout$breakouts.cljs$core$IFn$_invoke$arity$1 = metabase$lib$breakout$breakouts__1;
metabase$lib$breakout$breakouts.cljs$core$IFn$_invoke$arity$2 = metabase$lib$breakout$breakouts__2;
return metabase$lib$breakout$breakouts;
})()
;
/**
 * Inputs: ([query]
 *         [query :- :metabase.lib.schema/query stage-number :- :int])
 *   Return: [:maybe [:sequential :metabase.lib.schema.metadata/column]]
 *        
 * 
 *   Get metadata about the breakouts in a given stage of a `query`.
 */
metabase.lib.breakout.breakouts_metadata = (function() {
var metabase$lib$breakout$breakouts_metadata = null;
var metabase$lib$breakout$breakouts_metadata__1 = (function (query){
return (metabase.lib.breakout.breakouts_metadata.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.breakout.breakouts_metadata.cljs$core$IFn$_invoke$arity$2(query,(-1)) : metabase.lib.breakout.breakouts_metadata.call(null,query,(-1)));
});
var metabase$lib$breakout$breakouts_metadata__2 = (function (query,stage_number){
var G__78933 = metabase.lib.breakout.breakouts.cljs$core$IFn$_invoke$arity$2(query,stage_number);
if((G__78933 == null)){
return null;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (field_ref){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(metabase.lib.metadata.calculation.metadata.cljs$core$IFn$_invoke$arity$3(query,stage_number,field_ref),new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","breakouts","source/breakouts",-1706018158));
}),G__78933);
}
});
metabase$lib$breakout$breakouts_metadata = function(query,stage_number){
switch(arguments.length){
case 1:
return metabase$lib$breakout$breakouts_metadata__1.call(this,query);
case 2:
return metabase$lib$breakout$breakouts_metadata__2.call(this,query,stage_number);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$breakout$breakouts_metadata.cljs$core$IFn$_invoke$arity$1 = metabase$lib$breakout$breakouts_metadata__1;
metabase$lib$breakout$breakouts_metadata.cljs$core$IFn$_invoke$arity$2 = metabase$lib$breakout$breakouts_metadata__2;
return metabase$lib$breakout$breakouts_metadata;
})()
;
/**
 * Inputs: ([query :- :metabase.lib.schema/query]
 *         [query :- :metabase.lib.schema/query stage-number :- :int])
 *   Return: [:sequential :metabase.lib.schema.metadata/column]
 *        
 * 
 *   Get column metadata for all the columns that can be broken out by in
 *   the stage number `stage-number` of the query `query`
 *   If `stage-number` is omitted, the last stage is used.
 *   The rules for determining which columns can be broken out by are as follows:
 * 
 *   1. custom `:expressions` in this stage of the query
 * 
 *   2. Fields 'exported' by the previous stage of the query, if there is one;
 *   otherwise Fields from the current `:source-table`
 * 
 *   3. Fields exported by explicit joins
 * 
 *   4. Fields in Tables that are implicitly joinable.
 */
metabase.lib.breakout.breakoutable_columns = (function() {
var metabase$lib$breakout$breakoutable_columns = null;
var metabase$lib$breakout$breakoutable_columns__1 = (function (query){
return (metabase.lib.breakout.breakoutable_columns.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.breakout.breakoutable_columns.cljs$core$IFn$_invoke$arity$2(query,(-1)) : metabase.lib.breakout.breakoutable_columns.call(null,query,(-1)));
});
var metabase$lib$breakout$breakoutable_columns__2 = (function (query,stage_number){
var cols = (function (){var stage = metabase.lib.util.query_stage(query,stage_number);
var options = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-implicitly-joinable-for-source-card?","include-implicitly-joinable-for-source-card?",1240062794),false], null);
return metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$4(query,stage_number,stage,options);
})();
if(cljs.core.seq(cols)){
var matching = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (index,a_breakout){
var temp__5804__auto__ = metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$5(query,stage_number,a_breakout,cols,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"generous?","generous?",1247836118),true], null));
if(cljs.core.truth_(temp__5804__auto__)){
var col = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,a_breakout], null)], null);
} else {
return null;
}
}),(function (){var or__5002__auto__ = metabase.lib.breakout.breakouts.cljs$core$IFn$_invoke$arity$2(query,stage_number);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__78934_SHARP_){
var vec__78936 = (matching.cljs$core$IFn$_invoke$arity$1 ? matching.cljs$core$IFn$_invoke$arity$1(p1__78934_SHARP_) : matching.call(null,p1__78934_SHARP_));
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78936,(0),null);
var a_breakout = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78936,(1),null);
var binning = metabase.lib.binning.binning(a_breakout);
var map__78939 = metabase.lib.temporal_bucket.temporal_bucket(a_breakout);
var map__78939__$1 = cljs.core.__destructure_map(map__78939);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78939__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var G__78940 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__78934_SHARP_,new cljs.core.Keyword("lib","hide-bin-bucket?","lib/hide-bin-bucket?",-701033945),true);
var G__78940__$1 = (cljs.core.truth_(binning)?metabase.lib.binning.with_binning(G__78940,binning):G__78940);
var G__78940__$2 = (cljs.core.truth_(unit)?metabase.lib.temporal_bucket.with_temporal_bucket(G__78940__$1,unit):G__78940__$1);
if(cljs.core.truth_(pos)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78940__$2,new cljs.core.Keyword(null,"breakout-position","breakout-position",-760153191),pos);
} else {
return G__78940__$2;
}
}),cols);
} else {
return null;
}
});
metabase$lib$breakout$breakoutable_columns = function(query,stage_number){
switch(arguments.length){
case 1:
return metabase$lib$breakout$breakoutable_columns__1.call(this,query);
case 2:
return metabase$lib$breakout$breakoutable_columns__2.call(this,query,stage_number);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$breakout$breakoutable_columns.cljs$core$IFn$_invoke$arity$1 = metabase$lib$breakout$breakoutable_columns__1;
metabase$lib$breakout$breakoutable_columns.cljs$core$IFn$_invoke$arity$2 = metabase$lib$breakout$breakoutable_columns__2;
return metabase$lib$breakout$breakoutable_columns;
})()
;
/**
 * Inputs: ([query stage-number column]
 *         [query :- :metabase.lib.schema/query stage-number :- :int column :- :metabase.lib.schema.metadata/column {:keys [same-temporal-bucket?], :as _options} :- [:maybe [:map [:same-temporal-bucket? {:optional true} [:maybe :boolean]]]]])
 *   Return: [:maybe [:sequential {:min 1} :metabase.lib.schema.ref/ref]]
 *        
 * 
 *   Returns existing breakouts (as MBQL expressions) for `column` in a stage if there are any. Returns `nil` if there
 *   are no existing breakouts.
 */
metabase.lib.breakout.existing_breakouts = (function() {
var metabase$lib$breakout$existing_breakouts = null;
var metabase$lib$breakout$existing_breakouts__3 = (function (query,stage_number,column){
return (metabase.lib.breakout.existing_breakouts.cljs$core$IFn$_invoke$arity$4 ? metabase.lib.breakout.existing_breakouts.cljs$core$IFn$_invoke$arity$4(query,stage_number,column,null) : metabase.lib.breakout.existing_breakouts.call(null,query,stage_number,column,null));
});
var metabase$lib$breakout$existing_breakouts__4 = (function (query,stage_number,column,p__78941){
var map__78944 = p__78941;
var map__78944__$1 = cljs.core.__destructure_map(map__78944);
var _options = map__78944__$1;
var same_temporal_bucket_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78944__$1,new cljs.core.Keyword(null,"same-temporal-bucket?","same-temporal-bucket?",2110106995));
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (a_breakout){
var and__5000__auto__ = metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$5(query,stage_number,a_breakout,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"generous?","generous?",1247836118),true], null));
if(cljs.core.truth_(and__5000__auto__)){
if(cljs.core.truth_(same_temporal_bucket_QMARK_)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(metabase.lib.temporal_bucket.temporal_bucket(a_breakout),metabase.lib.temporal_bucket.temporal_bucket(column));
} else {
return true;
}
} else {
return and__5000__auto__;
}
})),metabase.lib.breakout.breakouts.cljs$core$IFn$_invoke$arity$2(query,stage_number)));
});
metabase$lib$breakout$existing_breakouts = function(query,stage_number,column,p__78941){
switch(arguments.length){
case 3:
return metabase$lib$breakout$existing_breakouts__3.call(this,query,stage_number,column);
case 4:
return metabase$lib$breakout$existing_breakouts__4.call(this,query,stage_number,column,p__78941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$breakout$existing_breakouts.cljs$core$IFn$_invoke$arity$3 = metabase$lib$breakout$existing_breakouts__3;
metabase$lib$breakout$existing_breakouts.cljs$core$IFn$_invoke$arity$4 = metabase$lib$breakout$existing_breakouts__4;
return metabase$lib$breakout$existing_breakouts;
})()
;
/**
 * Returns if `column` is a breakout column of stage with `stage-number` of `query`.
 */
metabase.lib.breakout.breakout_column_QMARK_ = (function metabase$lib$breakout$breakout_column_QMARK_(query,stage_number,column){
return cljs.core.seq(metabase.lib.breakout.existing_breakouts.cljs$core$IFn$_invoke$arity$3(query,stage_number,column));
});
/**
 * Inputs: ([query column]
 *         [query :- :metabase.lib.schema/query stage-number :- :int column :- :metabase.lib.schema.metadata/column])
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Remove all existing breakouts against `column` if there are any in the stage in question. Disregards temporal
 *   bucketing and binning.
 */
metabase.lib.breakout.remove_existing_breakouts_for_column = (function() {
var metabase$lib$breakout$remove_existing_breakouts_for_column = null;
var metabase$lib$breakout$remove_existing_breakouts_for_column__2 = (function (query,column){
return (metabase.lib.breakout.remove_existing_breakouts_for_column.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.breakout.remove_existing_breakouts_for_column.cljs$core$IFn$_invoke$arity$3(query,(-1),column) : metabase.lib.breakout.remove_existing_breakouts_for_column.call(null,query,(-1),column));
});
var metabase$lib$breakout$remove_existing_breakouts_for_column__3 = (function (query,stage_number,column){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (query__$1,a_breakout){
return metabase.lib.remove_replace.remove_clause.cljs$core$IFn$_invoke$arity$3(query__$1,stage_number,a_breakout);
}),query,metabase.lib.breakout.existing_breakouts.cljs$core$IFn$_invoke$arity$3(query,stage_number,column));
});
metabase$lib$breakout$remove_existing_breakouts_for_column = function(query,stage_number,column){
switch(arguments.length){
case 2:
return metabase$lib$breakout$remove_existing_breakouts_for_column__2.call(this,query,stage_number);
case 3:
return metabase$lib$breakout$remove_existing_breakouts_for_column__3.call(this,query,stage_number,column);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$breakout$remove_existing_breakouts_for_column.cljs$core$IFn$_invoke$arity$2 = metabase$lib$breakout$remove_existing_breakouts_for_column__2;
metabase$lib$breakout$remove_existing_breakouts_for_column.cljs$core$IFn$_invoke$arity$3 = metabase$lib$breakout$remove_existing_breakouts_for_column__3;
return metabase$lib$breakout$remove_existing_breakouts_for_column;
})()
;
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int breakout-ref :- :metabase.lib.schema.ref/ref]
 *   Return: :metabase.lib.schema.metadata/column
 *        
 * 
 *   Returns the input column used for this breakout.
 */
metabase.lib.breakout.breakout_column = (function metabase$lib$breakout$breakout_column(query,stage_number,breakout_ref){
return metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$2(breakout_ref,metabase.lib.breakout.breakoutable_columns.cljs$core$IFn$_invoke$arity$2(query,stage_number));
});
/**
 * Inputs: ([query]
 *         [query :- :metabase.lib.schema/query stage-number :- :int])
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Remove all breakouts from a query stage.
 */
metabase.lib.breakout.remove_all_breakouts = (function() {
var metabase$lib$breakout$remove_all_breakouts = null;
var metabase$lib$breakout$remove_all_breakouts__1 = (function (query){
return (metabase.lib.breakout.remove_all_breakouts.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.breakout.remove_all_breakouts.cljs$core$IFn$_invoke$arity$2(query,(-1)) : metabase.lib.breakout.remove_all_breakouts.call(null,query,(-1)));
});
var metabase$lib$breakout$remove_all_breakouts__2 = (function (query,stage_number){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (query__$1,a_breakout){
return metabase.lib.remove_replace.remove_clause.cljs$core$IFn$_invoke$arity$3(query__$1,stage_number,a_breakout);
}),query,metabase.lib.breakout.breakouts.cljs$core$IFn$_invoke$arity$2(query,stage_number));
});
metabase$lib$breakout$remove_all_breakouts = function(query,stage_number){
switch(arguments.length){
case 1:
return metabase$lib$breakout$remove_all_breakouts__1.call(this,query);
case 2:
return metabase$lib$breakout$remove_all_breakouts__2.call(this,query,stage_number);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$breakout$remove_all_breakouts.cljs$core$IFn$_invoke$arity$1 = metabase$lib$breakout$remove_all_breakouts__1;
metabase$lib$breakout$remove_all_breakouts.cljs$core$IFn$_invoke$arity$2 = metabase$lib$breakout$remove_all_breakouts__2;
return metabase$lib$breakout$remove_all_breakouts;
})()
;

//# sourceMappingURL=metabase.lib.breakout.js.map
