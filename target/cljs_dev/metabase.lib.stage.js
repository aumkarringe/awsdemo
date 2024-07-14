var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./medley.core.js");
require("./metabase.legacy_mbql.normalize.js");
require("./metabase.lib.aggregation.js");
require("./metabase.lib.breakout.js");
require("./metabase.lib.convert.js");
require("./metabase.lib.expression.js");
require("./metabase.lib.field.js");
require("./metabase.lib.hierarchy.js");
require("./metabase.lib.join.js");
require("./metabase.lib.join.util.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.id.js");
require("./metabase.lib.schema.metadata.js");
require("./metabase.lib.util.js");
require("./metabase.lib.util.match.js");
require("./metabase.shared.util.i18n.js");
require("./metabase.util.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.stage.js");

goog.provide('metabase.lib.stage');
metabase.lib.hierarchy.derive(new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798),new cljs.core.Keyword("metabase.lib.stage","stage","metabase.lib.stage/stage",1448689281));
metabase.lib.hierarchy.derive(new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194),new cljs.core.Keyword("metabase.lib.stage","stage","metabase.lib.stage/stage",1448689281));
metabase.lib.metadata.calculation.metadata_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.stage","stage","metabase.lib.stage/stage",1448689281),(function (_query,_stage_number,_stage){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("You can't calculate a metadata map for a stage! Use lib.metadata.calculation/returned-columns-method instead.",cljs.core.PersistentArrayMap.EMPTY);
}));
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int]
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Recursively calculate the metadata for the previous stages and add it to them, we'll need it for metadata
 *   calculations for [[lib.metadata.calculation/returned-columns]] and [[lib.metadata.calculation/visible-columns]], and
 *   we don't want to have to calculate it more than once...
 */
metabase.lib.stage.ensure_previous_stages_have_metadata = (function metabase$lib$stage$ensure_previous_stages_have_metadata(query,stage_number){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (query__$1,stage_number__$1){
return metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(query__$1,stage_number__$1,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("metabase.lib.stage","cached-metadata","metabase.lib.stage/cached-metadata",-1406479151),metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$3(query__$1,stage_number__$1,metabase.lib.util.query_stage(query__$1,stage_number__$1))], 0));
}),query,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),metabase.lib.util.canonical_stage_index(query,stage_number)));
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int]
 *   Return: [:maybe lib.metadata.calculation/ColumnsWithUniqueAliases]
 *        
 * 
 *   Return existing stage metadata attached to a stage if is already present: return it as-is, but only if this is a
 *   native stage or a source-Card or a metric stage. If it's any other sort of stage then ignore the metadata, it's
 *   probably wrong; we can recalculate the correct metadata anyway.
 */
metabase.lib.stage.existing_stage_metadata = (function metabase$lib$stage$existing_stage_metadata(query,stage_number){
var map__79066 = metabase.lib.util.query_stage(query,stage_number);
var map__79066__$1 = cljs.core.__destructure_map(map__79066);
var stage = map__79066__$1;
var stage_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79066__$1,new cljs.core.Keyword("lib","type","lib/type",1175424801));
var source_card = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79066__$1,new cljs.core.Keyword(null,"source-card","source-card",-1580820390));
var or__5002__auto__ = new cljs.core.Keyword("metabase.lib.stage","cached-metadata","metabase.lib.stage/cached-metadata",-1406479151).cljs$core$IFn$_invoke$arity$1(stage);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var temp__5804__auto__ = new cljs.core.Keyword("lib","stage-metadata","lib/stage-metadata",1079153610).cljs$core$IFn$_invoke$arity$1(stage);
if(cljs.core.truth_(temp__5804__auto__)){
var metadata = temp__5804__auto__;
if(cljs.core.truth_((function (){var or__5002__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stage_type,new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194));
if(or__5002__auto____$1){
return or__5002__auto____$1;
} else {
return source_card;
}
})())){
var source_type = (function (){var G__79067 = stage_type;
var G__79067__$1 = (((G__79067 instanceof cljs.core.Keyword))?G__79067.fqn:null);
switch (G__79067__$1) {
case "mbql.stage/native":
return new cljs.core.Keyword("source","native","source/native",-1444604147);

break;
case "mbql.stage/mbql":
return new cljs.core.Keyword("source","card","source/card",-139977973);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79067__$1)].join('')));

}
})();
return cljs.core.not_empty((function (){var iter__5480__auto__ = (function metabase$lib$stage$existing_stage_metadata_$_iter__79068(s__79069){
return (new cljs.core.LazySeq(null,(function (){
var s__79069__$1 = s__79069;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__79069__$1);
if(temp__5804__auto____$1){
var s__79069__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__79069__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__79069__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__79071 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__79070 = (0);
while(true){
if((i__79070 < size__5479__auto__)){
var col = cljs.core._nth(c__5478__auto__,i__79070);
cljs.core.chunk_append(b__79071,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(col),new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(col)], null),col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lib","source","lib/source",-434086550),source_type], null)], 0)));

var G__79236 = (i__79070 + (1));
i__79070 = G__79236;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79071),metabase$lib$stage$existing_stage_metadata_$_iter__79068(cljs.core.chunk_rest(s__79069__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79071),null);
}
} else {
var col = cljs.core.first(s__79069__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(col),new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(col)], null),col,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lib","source","lib/source",-434086550),source_type], null)], 0)),metabase$lib$stage$existing_stage_metadata_$_iter__79068(cljs.core.rest(s__79069__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(metadata));
})());
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int unique-name-fn :- :metabase.lib.metadata.calculation/unique-name-fn]
 *   Return: [:maybe lib.metadata.calculation/ColumnsWithUniqueAliases]
 */
metabase.lib.stage.breakouts_columns = (function metabase$lib$stage$breakouts_columns(query,stage_number,unique_name_fn){
return cljs.core.not_empty((function (){var iter__5480__auto__ = (function metabase$lib$stage$breakouts_columns_$_iter__79130(s__79131){
return (new cljs.core.LazySeq(null,(function (){
var s__79131__$1 = s__79131;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__79131__$1);
if(temp__5804__auto__){
var s__79131__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__79131__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__79131__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__79133 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__79132 = (0);
while(true){
if((i__79132 < size__5479__auto__)){
var breakout = cljs.core._nth(c__5478__auto__,i__79132);
cljs.core.chunk_append(b__79133,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(breakout,new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","breakouts","source/breakouts",-1706018158),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),new cljs.core.Keyword(null,"name","name",1843675177))(breakout),new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),(function (){var G__79134 = metabase.lib.join.util.desired_alias(query,breakout);
return (unique_name_fn.cljs$core$IFn$_invoke$arity$1 ? unique_name_fn.cljs$core$IFn$_invoke$arity$1(G__79134) : unique_name_fn.call(null,G__79134));
})()], 0)));

var G__79237 = (i__79132 + (1));
i__79132 = G__79237;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79133),metabase$lib$stage$breakouts_columns_$_iter__79130(cljs.core.chunk_rest(s__79131__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79133),null);
}
} else {
var breakout = cljs.core.first(s__79131__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(breakout,new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","breakouts","source/breakouts",-1706018158),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),new cljs.core.Keyword(null,"name","name",1843675177))(breakout),new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),(function (){var G__79135 = metabase.lib.join.util.desired_alias(query,breakout);
return (unique_name_fn.cljs$core$IFn$_invoke$arity$1 ? unique_name_fn.cljs$core$IFn$_invoke$arity$1(G__79135) : unique_name_fn.call(null,G__79135));
})()], 0)),metabase$lib$stage$breakouts_columns_$_iter__79130(cljs.core.rest(s__79131__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(metabase.lib.breakout.breakouts_metadata.cljs$core$IFn$_invoke$arity$2(query,stage_number));
})());
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int unique-name-fn :- :metabase.lib.metadata.calculation/unique-name-fn]
 *   Return: [:maybe lib.metadata.calculation/ColumnsWithUniqueAliases]
 */
metabase.lib.stage.aggregations_columns = (function metabase$lib$stage$aggregations_columns(query,stage_number,unique_name_fn){
return cljs.core.not_empty((function (){var iter__5480__auto__ = (function metabase$lib$stage$aggregations_columns_$_iter__79136(s__79137){
return (new cljs.core.LazySeq(null,(function (){
var s__79137__$1 = s__79137;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__79137__$1);
if(temp__5804__auto__){
var s__79137__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__79137__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__79137__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__79139 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__79138 = (0);
while(true){
if((i__79138 < size__5479__auto__)){
var ag = cljs.core._nth(c__5478__auto__,i__79138);
cljs.core.chunk_append(b__79139,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ag,new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","aggregations","source/aggregations",-1828710137),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ag),new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),(function (){var G__79140 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ag);
return (unique_name_fn.cljs$core$IFn$_invoke$arity$1 ? unique_name_fn.cljs$core$IFn$_invoke$arity$1(G__79140) : unique_name_fn.call(null,G__79140));
})()], 0)));

var G__79238 = (i__79138 + (1));
i__79138 = G__79238;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79139),metabase$lib$stage$aggregations_columns_$_iter__79136(cljs.core.chunk_rest(s__79137__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79139),null);
}
} else {
var ag = cljs.core.first(s__79137__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ag,new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","aggregations","source/aggregations",-1828710137),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ag),new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),(function (){var G__79141 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ag);
return (unique_name_fn.cljs$core$IFn$_invoke$arity$1 ? unique_name_fn.cljs$core$IFn$_invoke$arity$1(G__79141) : unique_name_fn.call(null,G__79141));
})()], 0)),metabase$lib$stage$aggregations_columns_$_iter__79136(cljs.core.rest(s__79137__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(metabase.lib.aggregation.aggregations_metadata.cljs$core$IFn$_invoke$arity$2(query,stage_number));
})());
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int unique-name-fn :- :metabase.lib.metadata.calculation/unique-name-fn]
 *   Return: [:maybe lib.metadata.calculation/ColumnsWithUniqueAliases]
 */
metabase.lib.stage.fields_columns = (function metabase$lib$stage$fields_columns(query,stage_number,unique_name_fn){
var temp__5804__auto__ = metabase.lib.util.query_stage(query,stage_number);
if(cljs.core.truth_(temp__5804__auto__)){
var map__79142 = temp__5804__auto__;
var map__79142__$1 = cljs.core.__destructure_map(map__79142);
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79142__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
return cljs.core.not_empty((function (){var iter__5480__auto__ = (function metabase$lib$stage$fields_columns_$_iter__79143(s__79144){
return (new cljs.core.LazySeq(null,(function (){
var s__79144__$1 = s__79144;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__79144__$1);
if(temp__5804__auto____$1){
var s__79144__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__79144__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__79144__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__79146 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__79145 = (0);
while(true){
if((i__79145 < size__5479__auto__)){
var vec__79147 = cljs.core._nth(c__5478__auto__,i__79145);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79147,(0),null);
var ref_clause = vec__79147;
var source = (function (){var G__79150 = tag;
var G__79150__$1 = (((G__79150 instanceof cljs.core.Keyword))?G__79150.fqn:null);
switch (G__79150__$1) {
case "field":
return new cljs.core.Keyword("source","fields","source/fields",-649667981);

break;
case "expression":
return new cljs.core.Keyword("source","expressions","source/expressions",-458367840);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79150__$1)].join('')));

}
})();
var metadata = metabase.lib.metadata.calculation.metadata.cljs$core$IFn$_invoke$arity$3(query,stage_number,ref_clause);
cljs.core.chunk_append(b__79146,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(metadata,new cljs.core.Keyword("lib","source","lib/source",-434086550),source,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),metabase.lib.metadata.calculation.column_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,metadata),new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),(function (){var G__79151 = metabase.lib.join.util.desired_alias(query,metadata);
return (unique_name_fn.cljs$core$IFn$_invoke$arity$1 ? unique_name_fn.cljs$core$IFn$_invoke$arity$1(G__79151) : unique_name_fn.call(null,G__79151));
})()], 0)));

var G__79240 = (i__79145 + (1));
i__79145 = G__79240;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79146),metabase$lib$stage$fields_columns_$_iter__79143(cljs.core.chunk_rest(s__79144__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79146),null);
}
} else {
var vec__79152 = cljs.core.first(s__79144__$2);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79152,(0),null);
var ref_clause = vec__79152;
var source = (function (){var G__79155 = tag;
var G__79155__$1 = (((G__79155 instanceof cljs.core.Keyword))?G__79155.fqn:null);
switch (G__79155__$1) {
case "field":
return new cljs.core.Keyword("source","fields","source/fields",-649667981);

break;
case "expression":
return new cljs.core.Keyword("source","expressions","source/expressions",-458367840);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79155__$1)].join('')));

}
})();
var metadata = metabase.lib.metadata.calculation.metadata.cljs$core$IFn$_invoke$arity$3(query,stage_number,ref_clause);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(metadata,new cljs.core.Keyword("lib","source","lib/source",-434086550),source,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),metabase.lib.metadata.calculation.column_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,metadata),new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),(function (){var G__79156 = metabase.lib.join.util.desired_alias(query,metadata);
return (unique_name_fn.cljs$core$IFn$_invoke$arity$1 ? unique_name_fn.cljs$core$IFn$_invoke$arity$1(G__79156) : unique_name_fn.call(null,G__79156));
})()], 0)),metabase$lib$stage$fields_columns_$_iter__79143(cljs.core.rest(s__79144__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(fields);
})());
} else {
return null;
}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int unique-name-fn :- :metabase.lib.metadata.calculation/unique-name-fn]
 *   Return: [:maybe lib.metadata.calculation/ColumnsWithUniqueAliases]
 */
metabase.lib.stage.summary_columns = (function metabase$lib$stage$summary_columns(query,stage_number,unique_name_fn){
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (f){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(query,stage_number,unique_name_fn) : f.call(null,query,stage_number,unique_name_fn));
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.stage.breakouts_columns,metabase.lib.stage.aggregations_columns], null)));
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int unique-name-fn :- :metabase.lib.metadata.calculation/unique-name-fn]
 *   Return: [:maybe lib.metadata.calculation/ColumnsWithUniqueAliases]
 *        
 * 
 *   Metadata for the previous stage, if there is one.
 */
metabase.lib.stage.previous_stage_metadata = (function metabase$lib$stage$previous_stage_metadata(query,stage_number,unique_name_fn){
var temp__5804__auto__ = metabase.lib.util.previous_stage_number(query,stage_number);
if(cljs.core.truth_(temp__5804__auto__)){
var previous_stage_number = temp__5804__auto__;
return cljs.core.not_empty((function (){var iter__5480__auto__ = (function metabase$lib$stage$previous_stage_metadata_$_iter__79157(s__79158){
return (new cljs.core.LazySeq(null,(function (){
var s__79158__$1 = s__79158;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__79158__$1);
if(temp__5804__auto____$1){
var s__79158__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__79158__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__79158__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__79160 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__79159 = (0);
while(true){
if((i__79159 < size__5479__auto__)){
var col = cljs.core._nth(c__5478__auto__,i__79159);
var source_alias = (function (){var or__5002__auto__ = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386))(col);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return metabase.lib.metadata.calculation.column_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,col);
}
})();
cljs.core.chunk_append(b__79160,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([col,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","previous-stage","source/previous-stage",1962610878),new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),source_alias,new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),(unique_name_fn.cljs$core$IFn$_invoke$arity$1 ? unique_name_fn.cljs$core$IFn$_invoke$arity$1(source_alias) : unique_name_fn.call(null,source_alias))], null),(cljs.core.truth_(new cljs.core.Keyword("metabase.lib.card","force-broken-id-refs","metabase.lib.card/force-broken-id-refs",-868945458).cljs$core$IFn$_invoke$arity$1(col))?cljs.core.select_keys(col,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("metabase.lib.card","force-broken-id-refs","metabase.lib.card/force-broken-id-refs",-868945458)], null)):null)], 0)),new cljs.core.Keyword("metabase.lib.field","temporal-unit","metabase.lib.field/temporal-unit",602312727),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","expression-name","lib/expression-name",-1799326590)], 0)));

var G__79243 = (i__79159 + (1));
i__79159 = G__79243;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79160),metabase$lib$stage$previous_stage_metadata_$_iter__79157(cljs.core.chunk_rest(s__79158__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79160),null);
}
} else {
var col = cljs.core.first(s__79158__$2);
var source_alias = (function (){var or__5002__auto__ = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386))(col);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return metabase.lib.metadata.calculation.column_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,col);
}
})();
return cljs.core.cons(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([col,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","previous-stage","source/previous-stage",1962610878),new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),source_alias,new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),(unique_name_fn.cljs$core$IFn$_invoke$arity$1 ? unique_name_fn.cljs$core$IFn$_invoke$arity$1(source_alias) : unique_name_fn.call(null,source_alias))], null),(cljs.core.truth_(new cljs.core.Keyword("metabase.lib.card","force-broken-id-refs","metabase.lib.card/force-broken-id-refs",-868945458).cljs$core$IFn$_invoke$arity$1(col))?cljs.core.select_keys(col,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("metabase.lib.card","force-broken-id-refs","metabase.lib.card/force-broken-id-refs",-868945458)], null)):null)], 0)),new cljs.core.Keyword("metabase.lib.field","temporal-unit","metabase.lib.field/temporal-unit",602312727),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","expression-name","lib/expression-name",-1799326590)], 0)),metabase$lib$stage$previous_stage_metadata_$_iter__79157(cljs.core.rest(s__79158__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$3(query,previous_stage_number,metabase.lib.util.query_stage(query,previous_stage_number)));
})());
} else {
return null;
}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int card-id :- [:maybe :metabase.lib.schema.id/card] options :- lib.metadata.calculation/VisibleColumnsOptions]
 *   Return: [:maybe lib.metadata.calculation/ColumnsWithUniqueAliases]
 *        
 * 
 *   Metadata associated with a Saved Question, e.g. if we have a `:source-card`
 */
metabase.lib.stage.saved_question_metadata = (function metabase$lib$stage$saved_question_metadata(query,stage_number,card_id,options){
if(cljs.core.truth_(card_id)){
var temp__5804__auto__ = metabase.lib.metadata.card(query,card_id);
if(cljs.core.truth_(temp__5804__auto__)){
var card = temp__5804__auto__;
return cljs.core.not_empty(metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$4(query,stage_number,card,options));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query _stage-number :- :int card :- :metabase.lib.schema.metadata/card options :- lib.metadata.calculation/VisibleColumnsOptions]
 *   Return: [:maybe lib.metadata.calculation/ColumnsWithUniqueAliases]
 */
metabase.lib.stage.metric_metadata = (function metabase$lib$stage$metric_metadata(query,_stage_number,card,options){
var metric_query = metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(metabase.lib.convert.__GT_pMBQL.cljs$core$IFn$_invoke$arity$1(metabase.legacy_mbql.normalize.normalize(new cljs.core.Keyword(null,"dataset-query","dataset-query",1851066427).cljs$core$IFn$_invoke$arity$1(card))),(-1),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),new cljs.core.Keyword(null,"breakout","breakout",-732419050)], 0));
return cljs.core.not_empty(metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(metric_query,new cljs.core.Keyword("lib","metadata","lib/metadata",1798917220),new cljs.core.Keyword("lib","metadata","lib/metadata",1798917220).cljs$core$IFn$_invoke$arity$1(query)),(-1),metabase.lib.util.query_stage(metric_query,(-1)),options));
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int unique-name-fn :- :metabase.lib.metadata.calculation/unique-name-fn {:keys [include-late-exprs?]} :- [:map [:include-late-exprs? {:optional true} :boolean]]]
 *   Return: [:maybe lib.metadata.calculation/ColumnsWithUniqueAliases]
 */
metabase.lib.stage.expressions_metadata = (function metabase$lib$stage$expressions_metadata(query,stage_number,unique_name_fn,p__79161){
var map__79162 = p__79161;
var map__79162__$1 = cljs.core.__destructure_map(map__79162);
var include_late_exprs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79162__$1,new cljs.core.Keyword(null,"include-late-exprs?","include-late-exprs?",40924800));
return cljs.core.not_empty((function (){var iter__5480__auto__ = (function metabase$lib$stage$expressions_metadata_$_iter__79165(s__79166){
return (new cljs.core.LazySeq(null,(function (){
var s__79166__$1 = s__79166;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__79166__$1);
if(temp__5804__auto__){
var s__79166__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__79166__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__79166__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__79168 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__79167 = (0);
while(true){
if((i__79167 < size__5479__auto__)){
var vec__79169 = cljs.core._nth(c__5478__auto__,i__79167);
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79169,(0),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79169,(1),null);
if(cljs.core.truth_((function (){var or__5002__auto__ = include_late_exprs_QMARK_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.not(cljs.core.first(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,((function (i__79167,s__79166__$1,or__5002__auto__,vec__79169,clause,metadata,c__5478__auto__,size__5479__auto__,b__79168,s__79166__$2,temp__5804__auto__,map__79162,map__79162__$1,include_late_exprs_QMARK_){
return (function metabase$lib$stage$expressions_metadata_$_iter__79165_$_match_79172(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (1))))){
try{var _AMPERSAND_match_left__79175 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__79175)) && ((cljs.core.count(_AMPERSAND_match_left__79175) === (1))))){
try{var _AMPERSAND_match_left__79175_0__79177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__79175,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__79175_0__79177,new cljs.core.Keyword(null,"offset","offset",296498311))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_AMPERSAND_match], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e79180){if((e79180 instanceof Error)){
var e__46214__auto__ = e79180;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e79180;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e79179){if((e79179 instanceof Error)){
var e__46214__auto__ = e79179;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e79179;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e79178){if((e79178 instanceof Error)){
var e__46214__auto__ = e79178;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.match_in_collection(metabase$lib$stage$expressions_metadata_$_iter__79165_$_match_79172,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto__;
}
} else {
throw e79178;

}
}});})(i__79167,s__79166__$1,or__5002__auto__,vec__79169,clause,metadata,c__5478__auto__,size__5479__auto__,b__79168,s__79166__$2,temp__5804__auto__,map__79162,map__79162__$1,include_late_exprs_QMARK_))
(cljs.core.PersistentVector.EMPTY,clause)))));
}
})())){
cljs.core.chunk_append(b__79168,(function (){var base_type = new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(metadata);
return metabase.util.assoc_default.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(metadata,new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","expressions","source/expressions",-458367840),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(metadata),new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),(function (){var G__79181 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(metadata);
return (unique_name_fn.cljs$core$IFn$_invoke$arity$1 ? unique_name_fn.cljs$core$IFn$_invoke$arity$1(G__79181) : unique_name_fn.call(null,G__79181));
})()], 0)),new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),(function (){var or__5002__auto__ = base_type;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword("type","*","type/*",-1283496752);
}
})());
})());

var G__79246 = (i__79167 + (1));
i__79167 = G__79246;
continue;
} else {
var G__79247 = (i__79167 + (1));
i__79167 = G__79247;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79168),metabase$lib$stage$expressions_metadata_$_iter__79165(cljs.core.chunk_rest(s__79166__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79168),null);
}
} else {
var vec__79182 = cljs.core.first(s__79166__$2);
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79182,(0),null);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79182,(1),null);
if(cljs.core.truth_((function (){var or__5002__auto__ = include_late_exprs_QMARK_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.not(cljs.core.first(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,((function (s__79166__$1,or__5002__auto__,vec__79182,clause,metadata,s__79166__$2,temp__5804__auto__,map__79162,map__79162__$1,include_late_exprs_QMARK_){
return (function metabase$lib$stage$expressions_metadata_$_iter__79165_$_match_79185(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (1))))){
try{var _AMPERSAND_match_left__79188 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__79188)) && ((cljs.core.count(_AMPERSAND_match_left__79188) === (1))))){
try{var _AMPERSAND_match_left__79188_0__79190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__79188,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__79188_0__79190,new cljs.core.Keyword(null,"offset","offset",296498311))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_AMPERSAND_match], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e79193){if((e79193 instanceof Error)){
var e__46214__auto__ = e79193;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e79193;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e79192){if((e79192 instanceof Error)){
var e__46214__auto__ = e79192;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e79192;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e79191){if((e79191 instanceof Error)){
var e__46214__auto__ = e79191;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.match_in_collection(metabase$lib$stage$expressions_metadata_$_iter__79165_$_match_79185,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto__;
}
} else {
throw e79191;

}
}});})(s__79166__$1,or__5002__auto__,vec__79182,clause,metadata,s__79166__$2,temp__5804__auto__,map__79162,map__79162__$1,include_late_exprs_QMARK_))
(cljs.core.PersistentVector.EMPTY,clause)))));
}
})())){
return cljs.core.cons((function (){var base_type = new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(metadata);
return metabase.util.assoc_default.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(metadata,new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","expressions","source/expressions",-458367840),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(metadata),new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),(function (){var G__79194 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(metadata);
return (unique_name_fn.cljs$core$IFn$_invoke$arity$1 ? unique_name_fn.cljs$core$IFn$_invoke$arity$1(G__79194) : unique_name_fn.call(null,G__79194));
})()], 0)),new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),(function (){var or__5002__auto__ = base_type;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword("type","*","type/*",-1283496752);
}
})());
})(),metabase$lib$stage$expressions_metadata_$_iter__79165(cljs.core.rest(s__79166__$2)));
} else {
var G__79251 = cljs.core.rest(s__79166__$2);
s__79166__$1 = G__79251;
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
return iter__5480__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"expressions","expressions",255689909).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number)),metabase.lib.expression.expressions_metadata.cljs$core$IFn$_invoke$arity$2(query,stage_number)));
})());
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int {:keys [unique-name-fn], :as options} :- lib.metadata.calculation/VisibleColumnsOptions]
 *   Return: lib.metadata.calculation/ColumnsWithUniqueAliases
 *        
 * 
 *   Return columns from the previous query stage or source Table/Card.
 */
metabase.lib.stage.previous_stage_or_source_visible_columns = (function metabase$lib$stage$previous_stage_or_source_visible_columns(query,stage_number,p__79196){
var map__79197 = p__79196;
var map__79197__$1 = cljs.core.__destructure_map(map__79197);
var options = map__79197__$1;
var unique_name_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79197__$1,new cljs.core.Keyword(null,"unique-name-fn","unique-name-fn",-755402870));
if(cljs.core.fn_QMARK_(unique_name_fn)){
} else {
throw (new Error("Assert failed: (fn? unique-name-fn)"));
}

var map__79198 = metabase.lib.util.query_stage(query,stage_number);
var map__79198__$1 = cljs.core.__destructure_map(map__79198);
var this_stage = map__79198__$1;
var source_table = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79198__$1,new cljs.core.Keyword(null,"source-table","source-table",-225307692));
var source_card = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79198__$1,new cljs.core.Keyword(null,"source-card","source-card",-1580820390));
var card = (function (){var G__79199 = source_card;
if((G__79199 == null)){
return null;
} else {
return metabase.lib.metadata.card(query,G__79199);
}
})();
var metric_based_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(card),new cljs.core.Keyword(null,"metric","metric",408798077));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,((metric_based_QMARK_)?cljs.core.identity:cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__79195_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(p1__79195_SHARP_,new cljs.core.Keyword("metabase.lib.join","join-alias","metabase.lib.join/join-alias",1166233023),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("metabase.lib.field","temporal-unit","metabase.lib.field/temporal-unit",602312727),new cljs.core.Keyword("metabase.lib.field","binning","metabase.lib.field/binning",-222751823),new cljs.core.Keyword(null,"fk-field-id","fk-field-id",1124127357)], 0));
}))),(function (){var or__5002__auto__ = metabase.lib.stage.previous_stage_metadata(query,stage_number,unique_name_fn);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = (cljs.core.truth_(source_table)?(function (){
if(cljs.core.integer_QMARK_(source_table)){
} else {
throw (new Error("Assert failed: (integer? source-table)"));
}

var table_metadata = metabase.lib.metadata.table(query,source_table);
return metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$4(query,stage_number,table_metadata,options);
})()
:null);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = ((metric_based_QMARK_)?metabase.lib.stage.metric_metadata(query,stage_number,card,options):null);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
var or__5002__auto____$3 = (cljs.core.truth_(source_card)?metabase.lib.stage.saved_question_metadata(query,stage_number,source_card,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"include-implicitly-joinable?","include-implicitly-joinable?",-772701866),false)):null);
if(cljs.core.truth_(or__5002__auto____$3)){
return or__5002__auto____$3;
} else {
var iter__5480__auto__ = (function metabase$lib$stage$previous_stage_or_source_visible_columns_$_iter__79200(s__79201){
return (new cljs.core.LazySeq(null,(function (){
var s__79201__$1 = s__79201;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__79201__$1);
if(temp__5804__auto__){
var s__79201__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__79201__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__79201__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__79203 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__79202 = (0);
while(true){
if((i__79202 < size__5479__auto__)){
var col = cljs.core._nth(c__5478__auto__,i__79202);
cljs.core.chunk_append(b__79203,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(col,new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","native","source/native",-1444604147),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(col),new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),(function (){var G__79204 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(col);
return (unique_name_fn.cljs$core$IFn$_invoke$arity$1 ? unique_name_fn.cljs$core$IFn$_invoke$arity$1(G__79204) : unique_name_fn.call(null,G__79204));
})()], 0)));

var G__79255 = (i__79202 + (1));
i__79202 = G__79255;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79203),metabase$lib$stage$previous_stage_or_source_visible_columns_$_iter__79200(cljs.core.chunk_rest(s__79201__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79203),null);
}
} else {
var col = cljs.core.first(s__79201__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(col,new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","native","source/native",-1444604147),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","source-column-alias","lib/source-column-alias",1494821386),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(col),new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402),(function (){var G__79205 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(col);
return (unique_name_fn.cljs$core$IFn$_invoke$arity$1 ? unique_name_fn.cljs$core$IFn$_invoke$arity$1(G__79205) : unique_name_fn.call(null,G__79205));
})()], 0)),metabase$lib$stage$previous_stage_or_source_visible_columns_$_iter__79200(cljs.core.rest(s__79201__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("lib","stage-metadata","lib/stage-metadata",1079153610).cljs$core$IFn$_invoke$arity$1(this_stage)));
}
}
}
}
})());
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int {:keys [unique-name-fn include-joined? include-expressions?], :as options} :- lib.metadata.calculation/VisibleColumnsOptions]
 *   Return: lib.metadata.calculation/ColumnsWithUniqueAliases
 */
metabase.lib.stage.existing_visible_columns = (function metabase$lib$stage$existing_visible_columns(query,stage_number,p__79207){
var map__79209 = p__79207;
var map__79209__$1 = cljs.core.__destructure_map(map__79209);
var options = map__79209__$1;
var unique_name_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79209__$1,new cljs.core.Keyword(null,"unique-name-fn","unique-name-fn",-755402870));
var include_joined_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79209__$1,new cljs.core.Keyword(null,"include-joined?","include-joined?",-410632824));
var include_expressions_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79209__$1,new cljs.core.Keyword(null,"include-expressions?","include-expressions?",-1817639288));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(metabase.lib.stage.previous_stage_or_source_visible_columns(query,stage_number,options),(cljs.core.truth_(include_expressions_QMARK_)?metabase.lib.stage.expressions_metadata(query,stage_number,unique_name_fn,cljs.core.PersistentArrayMap.EMPTY):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(include_joined_QMARK_)?metabase.lib.join.all_joins_visible_columns(query,stage_number,unique_name_fn):null)], 0));
});
metabase.lib.metadata.calculation.visible_columns_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.stage","stage","metabase.lib.stage/stage",1448689281),(function (query,stage_number,_stage,p__79210){
var map__79211 = p__79210;
var map__79211__$1 = cljs.core.__destructure_map(map__79211);
var options = map__79211__$1;
var unique_name_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79211__$1,new cljs.core.Keyword(null,"unique-name-fn","unique-name-fn",-755402870));
var include_implicitly_joinable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79211__$1,new cljs.core.Keyword(null,"include-implicitly-joinable?","include-implicitly-joinable?",-772701866));
var query__$1 = metabase.lib.stage.ensure_previous_stages_have_metadata(query,stage_number);
var existing_columns = metabase.lib.stage.existing_visible_columns(query__$1,stage_number,options);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(existing_columns,(cljs.core.truth_(include_implicitly_joinable_QMARK_)?metabase.lib.metadata.calculation.implicitly_joinable_columns(query__$1,stage_number,existing_columns,unique_name_fn):null)));
}));
metabase.lib.metadata.calculation.returned_columns_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.stage","stage","metabase.lib.stage/stage",1448689281),(function (query,stage_number,_stage,p__79217){
var map__79218 = p__79217;
var map__79218__$1 = cljs.core.__destructure_map(map__79218);
var options = map__79218__$1;
var unique_name_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79218__$1,new cljs.core.Keyword(null,"unique-name-fn","unique-name-fn",-755402870));
var or__5002__auto__ = metabase.lib.stage.existing_stage_metadata(query,stage_number);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var query__$1 = metabase.lib.stage.ensure_previous_stages_have_metadata(query,stage_number);
var summary_cols = metabase.lib.stage.summary_columns(query__$1,stage_number,unique_name_fn);
var field_cols = metabase.lib.stage.fields_columns(query__$1,stage_number,unique_name_fn);
if(cljs.core.truth_(summary_cols)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(summary_cols,field_cols);
} else {
if(cljs.core.truth_(field_cols)){
cljs.core.doall.cljs$core$IFn$_invoke$arity$1(field_cols);

return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,medley.core.distinct_by.cljs$core$IFn$_invoke$arity$1((function (p1__79213_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(p1__79213_SHARP_,new cljs.core.Keyword(null,"source-alias","source-alias",1652088724),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("lib","source-uuid","lib/source-uuid",1828897581),new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402)], 0));
})),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(field_cols,metabase.lib.join.all_joins_expected_columns(query__$1,stage_number,options)));
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(metabase.lib.stage.previous_stage_or_source_visible_columns(query__$1,stage_number,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"include-implicitly-joinable?","include-implicitly-joinable?",-772701866),false,new cljs.core.Keyword(null,"unique-name-fn","unique-name-fn",-755402870),unique_name_fn], null)),metabase.lib.stage.expressions_metadata(query__$1,stage_number,unique_name_fn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-late-exprs?","include-late-exprs?",40924800),true], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.join.all_joins_expected_columns(query__$1,stage_number,options)], 0));

}
}
}
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194),(function (_query,_stage_number,_stage,_style){
return metabase.shared.util.i18n.js_i18n("Native query");
}));
metabase.lib.stage.display_name_source_parts = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-table","source-table",-225307692),new cljs.core.Keyword(null,"source-card","source-card",-1580820390),new cljs.core.Keyword(null,"joins","joins",1033962699)], null);
metabase.lib.stage.display_name_other_parts = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),new cljs.core.Keyword(null,"breakout","breakout",-732419050),new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"order-by","order-by",1527318070),new cljs.core.Keyword(null,"limit","limit",-1355822363)], null);
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798),(function (query,stage_number,_stage,style){
var query__$1 = metabase.lib.stage.ensure_previous_stages_have_metadata(query,stage_number);
var or__5002__auto__ = cljs.core.not_empty((function (){var part__GT_description = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cat,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,metabase.lib.metadata.calculation.describe_top_level_key.cljs$core$IFn$_invoke$arity$3(query__$1,stage_number,k)], null);
}))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.stage.display_name_source_parts,metabase.lib.stage.display_name_other_parts], null));
var source_description = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" + ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(part__GT_description,metabase.lib.stage.display_name_source_parts)));
var other_descriptions = cljs.core.map.cljs$core$IFn$_invoke$arity$2(part__GT_description,metabase.lib.stage.display_name_other_parts);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.cons(source_description,other_descriptions)));
})());
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var temp__5804__auto__ = metabase.lib.util.previous_stage_number(query__$1,stage_number);
if(cljs.core.truth_(temp__5804__auto__)){
var previous_stage_number = temp__5804__auto__;
return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query__$1,previous_stage_number,metabase.lib.util.query_stage(query__$1,previous_stage_number),style);
} else {
return null;
}
}
}));
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int]
 *   Return: :boolean
 *        
 * 
 *   Does given query stage have any clauses?
 */
metabase.lib.stage.has_clauses_QMARK_ = (function metabase$lib$stage$has_clauses_QMARK_(query,stage_number){
return cljs.core.boolean$(cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(metabase.lib.util.query_stage(query,stage_number),new cljs.core.Keyword("lib","type","lib/type",1175424801),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"source-table","source-table",-225307692),new cljs.core.Keyword(null,"source-card","source-card",-1580820390)], 0))));
});
/**
 * Inputs: [query]
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Adds a new blank stage to the end of the pipeline.
 */
metabase.lib.stage.append_stage = (function metabase$lib$stage$append_stage(query){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(query,new cljs.core.Keyword(null,"stages","stages",-442109532),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798)], null));
});
/**
 * Inputs: [query]
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Drops the final stage in the pipeline, will no-op if it is the only stage
 */
metabase.lib.stage.drop_stage = (function metabase$lib$stage$drop_stage(query){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(query)))){
return query;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(query,new cljs.core.Keyword(null,"stages","stages",-442109532),cljs.core.pop);
}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query]
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Drops all empty stages in the pipeline.
 */
metabase.lib.stage.drop_empty_stages = (function metabase$lib$stage$drop_empty_stages(query){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(query,new cljs.core.Keyword(null,"stages","stages",-442109532),(function (stages){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$1((function (stage_number,stage){
if((((stage_number === (0))) || (metabase.lib.stage.has_clauses_QMARK_(query,stage_number)))){
return stage;
} else {
return null;
}
})),stages);
}));
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int]
 *   Return: [:tuple :metabase.lib.schema/query :int]
 *        
 * 
 *   Given a query and current stage, returns a tuple of `[query next-stage-number]`.
 * 
 *   If that stage already exists, the query is unchanged. If it does not, a new (MBQL) stage is appended and its index
 *   is returned.
 */
metabase.lib.stage.ensure_extra_stage = (function metabase$lib$stage$ensure_extra_stage(query,stage_number){
var stage_number__$1 = metabase.lib.util.canonical_stage_index(query,stage_number);
var temp__5802__auto__ = metabase.lib.util.next_stage_number(query,stage_number__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var next_number = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query,next_number], null);
} else {
var query__$1 = metabase.lib.stage.append_stage(query);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query__$1,metabase.lib.util.next_stage_number(query__$1,stage_number__$1)], null);
}
});

//# sourceMappingURL=metabase.lib.stage.js.map
