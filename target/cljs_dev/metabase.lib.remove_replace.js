var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.set.js");
require("./clojure.walk.js");
require("./malli.core.js");
require("./medley.core.js");
require("./metabase.lib.common.js");
require("./metabase.lib.equality.js");
require("./metabase.lib.expression.js");
require("./metabase.lib.join.js");
require("./metabase.lib.join.util.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.options.js");
require("./metabase.lib.ref.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.util.js");
require("./metabase.lib.util.match.js");
require("./metabase.util.js");
require("./metabase.util.malli.js");
require("./metabase.util.malli.registry.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.remove_replace.js");

goog.provide('metabase.lib.remove_replace');
metabase.lib.remove_replace.stage_paths = (function metabase$lib$remove_replace$stage_paths(query,stage_number){
var joins = metabase.lib.join.joins.cljs$core$IFn$_invoke$arity$2(query,stage_number);
var join_indices = cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(joins));
var join_condition_paths = (function (){var iter__5480__auto__ = (function metabase$lib$remove_replace$stage_paths_$_iter__78743(s__78744){
return (new cljs.core.LazySeq(null,(function (){
var s__78744__$1 = s__78744;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__78744__$1);
if(temp__5804__auto__){
var s__78744__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__78744__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__78744__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__78746 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__78745 = (0);
while(true){
if((i__78745 < size__5479__auto__)){
var idx = cljs.core._nth(c__5478__auto__,i__78745);
cljs.core.chunk_append(b__78746,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"joins","joins",1033962699),idx,new cljs.core.Keyword(null,"conditions","conditions",-1647236270)], null));

var G__78925 = (i__78745 + (1));
i__78745 = G__78925;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__78746),metabase$lib$remove_replace$stage_paths_$_iter__78743(cljs.core.chunk_rest(s__78744__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__78746),null);
}
} else {
var idx = cljs.core.first(s__78744__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"joins","joins",1033962699),idx,new cljs.core.Keyword(null,"conditions","conditions",-1647236270)], null),metabase$lib$remove_replace$stage_paths_$_iter__78743(cljs.core.rest(s__78744__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(join_indices);
})();
var join_field_paths = (function (){var iter__5480__auto__ = (function metabase$lib$remove_replace$stage_paths_$_iter__78747(s__78748){
return (new cljs.core.LazySeq(null,(function (){
var s__78748__$1 = s__78748;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__78748__$1);
if(temp__5804__auto__){
var s__78748__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__78748__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__78748__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__78750 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__78749 = (0);
while(true){
if((i__78749 < size__5479__auto__)){
var idx = cljs.core._nth(c__5478__auto__,i__78749);
var join = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(joins,idx);
if((!((new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(join) instanceof cljs.core.Keyword)))){
cljs.core.chunk_append(b__78750,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"joins","joins",1033962699),idx,new cljs.core.Keyword(null,"fields","fields",-1932066230)], null));

var G__78926 = (i__78749 + (1));
i__78749 = G__78926;
continue;
} else {
var G__78927 = (i__78749 + (1));
i__78749 = G__78927;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__78750),metabase$lib$remove_replace$stage_paths_$_iter__78747(cljs.core.chunk_rest(s__78748__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__78750),null);
}
} else {
var idx = cljs.core.first(s__78748__$2);
var join = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(joins,idx);
if((!((new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(join) instanceof cljs.core.Keyword)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"joins","joins",1033962699),idx,new cljs.core.Keyword(null,"fields","fields",-1932066230)], null),metabase$lib$remove_replace$stage_paths_$_iter__78747(cljs.core.rest(s__78748__$2)));
} else {
var G__78928 = cljs.core.rest(s__78748__$2);
s__78748__$1 = G__78928;
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
return iter__5480__auto__(join_indices);
})();
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"order-by","order-by",1527318070)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"breakout","breakout",-732419050)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filters","filters",974726919)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fields","fields",-1932066230)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregation","aggregation",1597476696)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expressions","expressions",255689909)], null)], null),join_field_paths,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([join_condition_paths], 0));
});
metabase.lib.remove_replace.find_matching_order_by_index = (function metabase$lib$remove_replace$find_matching_order_by_index(query,stage_number,p__78752){
var vec__78753 = p__78752;
var target_op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78753,(0),null);
var map__78756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78753,(1),null);
var map__78756__$1 = cljs.core.__destructure_map(map__78756);
var temporal_unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78756__$1,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358));
var binning = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78756__$1,new cljs.core.Keyword(null,"binning","binning",1709835866));
var target_ref_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78753,(2),null);
return cljs.core.first(medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p__78757){
var vec__78758 = p__78757;
var _idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78758,(0),null);
var vec__78761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78758,(1),null);
var _dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78761,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78761,(1),null);
var ordered_clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78761,(2),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(ordered_clause),target_op)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358).cljs$core$IFn$_invoke$arity$1(cljs.core.second(ordered_clause)),temporal_unit)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"binning","binning",1709835866).cljs$core$IFn$_invoke$arity$1(cljs.core.second(ordered_clause)),binning)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(ordered_clause),target_ref_id)))))));
}),medley.core.indexed.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"order-by","order-by",1527318070).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number)))));
});
metabase.lib.remove_replace.sync_order_by_options_with_breakout = (function metabase$lib$remove_replace$sync_order_by_options_with_breakout(query,stage_number,target_clause,new_options){
var temp__5802__auto__ = metabase.lib.remove_replace.find_matching_order_by_index(query,stage_number,target_clause);
if(cljs.core.truth_(temp__5802__auto__)){
var order_by_idx = temp__5802__auto__;
return metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(query,stage_number,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"order-by","order-by",1527318070),order_by_idx,(2),(1)], null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__78764_SHARP_){
return medley.core.remove_vals(cljs.core.nil_QMARK_,p1__78764_SHARP_);
}),cljs.core.merge),new_options], 0));
} else {
return query;
}
});
metabase.lib.remove_replace.remove_breakout_order_by = (function metabase$lib$remove_replace$remove_breakout_order_by(query,stage_number,target_clause){
var temp__5802__auto__ = metabase.lib.remove_replace.find_matching_order_by_index(query,stage_number,target_clause);
if(cljs.core.truth_(temp__5802__auto__)){
var order_by_idx = temp__5802__auto__;
return metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(query,stage_number,metabase.lib.util.remove_clause,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"order-by","order-by",1527318070)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(metabase.lib.util.query_stage(query,stage_number),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"order-by","order-by",1527318070),order_by_idx], null)),stage_number], 0));
} else {
return query;
}
});
metabase.lib.remove_replace.remove_replace_location = (function metabase$lib$remove_replace$remove_replace_location(query,stage_number,unmodified_query_for_stage,location,target_clause,remove_replace_fn){
var result = metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(query,stage_number,remove_replace_fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([location,target_clause], 0));
var target_uuid = metabase.lib.options.uuid(target_clause);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(query,result)){
return cljs.core.first(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$lib$remove_replace$remove_replace_location_$_match_78765(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 1)))){
try{var _AMPERSAND_match_0__78769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__78769,new cljs.core.Keyword(null,"expressions","expressions",255689909))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__78793 = (function (){var G__78797 = result;
var G__78798 = stage_number;
var G__78799 = unmodified_query_for_stage;
var G__78800 = new cljs.core.Keyword(null,"expression","expression",202311876);
var G__78801 = cljs.core.PersistentArrayMap.EMPTY;
var G__78802 = metabase.lib.util.expression_name(target_clause);
return (metabase.lib.remove_replace.remove_local_references.cljs$core$IFn$_invoke$arity$6 ? metabase.lib.remove_replace.remove_local_references.cljs$core$IFn$_invoke$arity$6(G__78797,G__78798,G__78799,G__78800,G__78801,G__78802) : metabase.lib.remove_replace.remove_local_references.call(null,G__78797,G__78798,G__78799,G__78800,G__78801,G__78802));
})();
var G__78794 = stage_number;
var G__78795 = unmodified_query_for_stage;
var G__78796 = target_uuid;
return (metabase.lib.remove_replace.remove_stage_references.cljs$core$IFn$_invoke$arity$4 ? metabase.lib.remove_replace.remove_stage_references.cljs$core$IFn$_invoke$arity$4(G__78793,G__78794,G__78795,G__78796) : metabase.lib.remove_replace.remove_stage_references.call(null,G__78793,G__78794,G__78795,G__78796));
})()], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78781){if((e78781 instanceof Error)){
var e__46214__auto__ = e78781;
if((e__46214__auto__ === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__78769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__78769,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__78783 = (function (){var G__78787 = result;
var G__78788 = stage_number;
var G__78789 = unmodified_query_for_stage;
var G__78790 = new cljs.core.Keyword(null,"aggregation","aggregation",1597476696);
var G__78791 = cljs.core.PersistentArrayMap.EMPTY;
var G__78792 = target_uuid;
return (metabase.lib.remove_replace.remove_local_references.cljs$core$IFn$_invoke$arity$6 ? metabase.lib.remove_replace.remove_local_references.cljs$core$IFn$_invoke$arity$6(G__78787,G__78788,G__78789,G__78790,G__78791,G__78792) : metabase.lib.remove_replace.remove_local_references.call(null,G__78787,G__78788,G__78789,G__78790,G__78791,G__78792));
})();
var G__78784 = stage_number;
var G__78785 = unmodified_query_for_stage;
var G__78786 = target_uuid;
return (metabase.lib.remove_replace.remove_stage_references.cljs$core$IFn$_invoke$arity$4 ? metabase.lib.remove_replace.remove_stage_references.cljs$core$IFn$_invoke$arity$4(G__78783,G__78784,G__78785,G__78786) : metabase.lib.remove_replace.remove_stage_references.call(null,G__78783,G__78784,G__78785,G__78786));
})()], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78782){if((e78782 instanceof Error)){
var e__46214__auto____$1 = e78782;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$1;
}
} else {
throw e78782;

}
}} else {
throw e__46214__auto__;
}
} else {
throw e78781;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78774){if((e78774 instanceof Error)){
var e__46214__auto__ = e78774;
if((e__46214__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 1)))){
try{var _AMPERSAND_match_0__78770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__78770,new cljs.core.Keyword(null,"breakout","breakout",-732419050))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(metabase.lib.remove_replace.remove_stage_references.cljs$core$IFn$_invoke$arity$4 ? metabase.lib.remove_replace.remove_stage_references.cljs$core$IFn$_invoke$arity$4(result,stage_number,unmodified_query_for_stage,target_uuid) : metabase.lib.remove_replace.remove_stage_references.call(null,result,stage_number,unmodified_query_for_stage,target_uuid))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78779){if((e78779 instanceof Error)){
var e__46214__auto____$1 = e78779;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__78770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__78770,new cljs.core.Keyword(null,"fields","fields",-1932066230))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(metabase.lib.remove_replace.remove_stage_references.cljs$core$IFn$_invoke$arity$4 ? metabase.lib.remove_replace.remove_stage_references.cljs$core$IFn$_invoke$arity$4(result,stage_number,unmodified_query_for_stage,target_uuid) : metabase.lib.remove_replace.remove_stage_references.call(null,result,stage_number,unmodified_query_for_stage,target_uuid))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78780){if((e78780 instanceof Error)){
var e__46214__auto____$2 = e78780;
if((e__46214__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$2;
}
} else {
throw e78780;

}
}} else {
throw e__46214__auto____$1;
}
} else {
throw e78779;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78775){if((e78775 instanceof Error)){
var e__46214__auto____$1 = e78775;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 3)))){
try{var _AMPERSAND_match_0__78771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__78771,new cljs.core.Keyword(null,"joins","joins",1033962699))){
try{var _AMPERSAND_match_2__78773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_2__78773,new cljs.core.Keyword(null,"fields","fields",-1932066230))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(metabase.lib.remove_replace.remove_stage_references.cljs$core$IFn$_invoke$arity$4 ? metabase.lib.remove_replace.remove_stage_references.cljs$core$IFn$_invoke$arity$4(result,stage_number,unmodified_query_for_stage,target_uuid) : metabase.lib.remove_replace.remove_stage_references.call(null,result,stage_number,unmodified_query_for_stage,target_uuid))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78778){if((e78778 instanceof Error)){
var e__46214__auto____$2 = e78778;
if((e__46214__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$2;
}
} else {
throw e78778;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78777){if((e78777 instanceof Error)){
var e__46214__auto____$2 = e78777;
if((e__46214__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$2;
}
} else {
throw e78777;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78776){if((e78776 instanceof Error)){
var e__46214__auto____$2 = e78776;
if((e__46214__auto____$2 === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [result], null);
} else {
throw e__46214__auto____$2;
}
} else {
throw e78776;

}
}} else {
throw e__46214__auto____$1;
}
} else {
throw e78775;

}
}} else {
throw e__46214__auto__;
}
} else {
throw e78774;

}
}})(cljs.core.PersistentVector.EMPTY,location))));
} else {
return result;
}
});
metabase.lib.remove_replace.remove_local_references = (function metabase$lib$remove_replace$remove_local_references(query,stage_number,unmodified_query_for_stage,target_op,target_opts,target_ref_id){
var stage = metabase.lib.util.query_stage(query,stage_number);
var to_remove = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (location){
var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(stage,location);
if(cljs.core.truth_(temp__5804__auto__)){
var clauses = temp__5804__auto__;
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (clause){
return cljs.core.first(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$lib$remove_replace$remove_local_references_$_match_78810(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 3)))){
try{var _AMPERSAND_match_0__78813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_0__78813,target_op)){
try{var _AMPERSAND_match_1__78814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if((function (p1__78804_SHARP_){
return ((cljs.core.empty_QMARK_(target_opts)) || (clojure.set.subset_QMARK_(cljs.core.set(target_opts),cljs.core.set(p1__78804_SHARP_))));
})(_AMPERSAND_match_1__78814)){
try{var _AMPERSAND_match_2__78815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_2__78815,target_ref_id)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [location,clause], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78819){if((e78819 instanceof Error)){
var e__46214__auto__ = e78819;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e78819;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78818){if((e78818 instanceof Error)){
var e__46214__auto__ = e78818;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e78818;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78817){if((e78817 instanceof Error)){
var e__46214__auto__ = e78817;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e78817;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78816){if((e78816 instanceof Error)){
var e__46214__auto__ = e78816;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.match_in_collection(metabase$lib$remove_replace$remove_local_references_$_match_78810,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto__;
}
} else {
throw e78816;

}
}})(cljs.core.PersistentVector.EMPTY,clause))));
}),clauses);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.remove_replace.stage_paths(query,stage_number)], 0));
var dead_joins = cljs.core.volatile_BANG_(cljs.core.transient$(cljs.core.PersistentVector.EMPTY));
var q = query;
var q__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (query__$1,p__78820){
var vec__78821 = p__78820;
var location__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78821,(0),null);
var target_clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78821,(1),null);
return metabase.lib.remove_replace.remove_replace_location(query__$1,stage_number,unmodified_query_for_stage,location__$1,target_clause,(function (p1__78805_SHARP_,p2__78806_SHARP_,p3__78807_SHARP_){
try{return metabase.lib.util.remove_clause(p1__78805_SHARP_,p2__78806_SHARP_,p3__78807_SHARP_,stage_number);
}catch (e78824){if((e78824 instanceof Error)){
var e = e78824;
var map__78825 = cljs.core.ex_data(e);
var map__78825__$1 = cljs.core.__destructure_map(map__78825);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78825__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var join = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78825__$1,new cljs.core.Keyword(null,"join","join",-758861890));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(error,new cljs.core.Keyword("metabase.lib.util","cannot-remove-final-join-condition","metabase.lib.util/cannot-remove-final-join-condition",-470911224))){
dead_joins.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(dead_joins.cljs$core$IDeref$_deref$arity$1(null),join));

return p1__78805_SHARP_;
} else {
throw e;
}
} else {
throw e78824;

}
}}));
}),q,to_remove);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__78808_SHARP_,p2__78809_SHARP_){
return (metabase.lib.remove_replace.remove_join.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.remove_replace.remove_join.cljs$core$IFn$_invoke$arity$3(p1__78808_SHARP_,stage_number,p2__78809_SHARP_) : metabase.lib.remove_replace.remove_join.call(null,p1__78808_SHARP_,stage_number,p2__78809_SHARP_));
}),q__$1,cljs.core.persistent_BANG_(cljs.core.deref(dead_joins)));
});
metabase.lib.remove_replace.remove_stage_references = (function metabase$lib$remove_replace$remove_stage_references(query,previous_stage_number,unmodified_query_for_stage,target_uuid){
var temp__5802__auto__ = metabase.lib.util.next_stage_number(unmodified_query_for_stage,previous_stage_number);
if(cljs.core.truth_(temp__5802__auto__)){
var stage_number = temp__5802__auto__;
var stage = metabase.lib.util.query_stage(unmodified_query_for_stage,stage_number);
var target_ref_id = cljs.core.some((function (p__78826){
var map__78827 = p__78826;
var map__78827__$1 = cljs.core.__destructure_map(map__78827);
var column = map__78827__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78827__$1,new cljs.core.Keyword("lib","source","lib/source",-434086550));
var source_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78827__$1,new cljs.core.Keyword("lib","source-uuid","lib/source-uuid",1828897581));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("source","previous-stage","source/previous-stage",1962610878),source)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target_uuid,source_uuid)))){
return new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402).cljs$core$IFn$_invoke$arity$1(column);
} else {
return null;
}
}),metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$3(unmodified_query_for_stage,stage_number,stage));
if(cljs.core.truth_(target_ref_id)){
return metabase.lib.remove_replace.remove_local_references(query,stage_number,query,new cljs.core.Keyword(null,"field","field",-1302436500),cljs.core.PersistentArrayMap.EMPTY,target_ref_id);
} else {
return query;
}
} else {
return query;
}
});
metabase.lib.remove_replace.remove_replace_STAR_ = (function metabase$lib$remove_replace$remove_replace_STAR_(query,stage_number,target_clause,remove_or_replace,replacement){
var target_clause__$1 = metabase.lib.common.__GT_op_arg.cljs$core$IFn$_invoke$arity$1(target_clause);
var stage = metabase.lib.util.query_stage(query,stage_number);
var location__$1 = medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (possible_location){
var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(stage,possible_location);
if(cljs.core.truth_(temp__5804__auto__)){
var clauses = temp__5804__auto__;
var target_uuid = metabase.lib.options.uuid(target_clause__$1);
if(cljs.core.truth_(cljs.core.some(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.createAsIfByAssoc([target_uuid]),new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720),cljs.core.second),clauses))){
return possible_location;
} else {
return null;
}
} else {
return null;
}
}),metabase.lib.remove_replace.stage_paths(query,stage_number));
var replace_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"replace","replace",-786587770),remove_or_replace);
var replacement_clause = ((replace_QMARK_)?metabase.lib.common.__GT_op_arg.cljs$core$IFn$_invoke$arity$1(replacement):null);
var remove_replace_fn = ((replace_QMARK_)?(function (p1__78828_SHARP_,p2__78829_SHARP_,p3__78830_SHARP_){
return metabase.lib.util.replace_clause(p1__78828_SHARP_,p2__78829_SHARP_,p3__78830_SHARP_,replacement_clause);
}):(function (p1__78831_SHARP_,p2__78832_SHARP_,p3__78833_SHARP_){
return metabase.lib.util.remove_clause(p1__78831_SHARP_,p2__78832_SHARP_,p3__78833_SHARP_,stage_number);
}));
var changing_breakout_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"breakout","breakout",-732419050)], null),location__$1);
var sync_breakout_ordering_QMARK_ = ((replace_QMARK_) && (((changing_breakout_QMARK_) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(target_clause__$1),cljs.core.first(replacement_clause))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(target_clause__$1),cljs.core.last(replacement_clause))))))));
var query__$1 = ((sync_breakout_ordering_QMARK_)?metabase.lib.remove_replace.sync_order_by_options_with_breakout(query,stage_number,target_clause__$1,cljs.core.select_keys(cljs.core.second(replacement_clause),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binning","binning",1709835866),new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358)], null))):((changing_breakout_QMARK_)?metabase.lib.remove_replace.remove_breakout_order_by(query,stage_number,target_clause__$1):query
));
if(cljs.core.truth_(location__$1)){
var G__78834 = metabase.lib.remove_replace.remove_replace_location(query__$1,stage_number,query__$1,location__$1,target_clause__$1,remove_replace_fn);
var G__78835 = location__$1;
return (metabase.lib.remove_replace.normalize_fields_clauses.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.remove_replace.normalize_fields_clauses.cljs$core$IFn$_invoke$arity$2(G__78834,G__78835) : metabase.lib.remove_replace.normalize_fields_clauses.call(null,G__78834,G__78835));
} else {
return query__$1;
}
});
/**
 * Inputs: ([query :- :metabase.lib.schema/query target-clause]
 *         [query :- :metabase.lib.schema/query stage-number :- :int target-clause])
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Removes the `target-clause` from the stage specified by `stage-number` of `query`.
 *   If `stage-number` is not specified, the last stage is used.
 */
metabase.lib.remove_replace.remove_clause = (function() {
var metabase$lib$remove_replace$remove_clause = null;
var metabase$lib$remove_replace$remove_clause__2 = (function (query,target_clause){
return (metabase.lib.remove_replace.remove_clause.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.remove_replace.remove_clause.cljs$core$IFn$_invoke$arity$3(query,(-1),target_clause) : metabase.lib.remove_replace.remove_clause.call(null,query,(-1),target_clause));
});
var metabase$lib$remove_replace$remove_clause__3 = (function (query,stage_number,target_clause){
if(((cljs.core.map_QMARK_(target_clause)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(target_clause),new cljs.core.Keyword("mbql","join","mbql/join",-709512370))))){
return (metabase.lib.remove_replace.remove_join.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.remove_replace.remove_join.cljs$core$IFn$_invoke$arity$3(query,stage_number,target_clause) : metabase.lib.remove_replace.remove_join.call(null,query,stage_number,target_clause));
} else {
return metabase.lib.remove_replace.remove_replace_STAR_(query,stage_number,target_clause,new cljs.core.Keyword(null,"remove","remove",-131428414),null);
}
});
metabase$lib$remove_replace$remove_clause = function(query,stage_number,target_clause){
switch(arguments.length){
case 2:
return metabase$lib$remove_replace$remove_clause__2.call(this,query,stage_number);
case 3:
return metabase$lib$remove_replace$remove_clause__3.call(this,query,stage_number,target_clause);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$remove_replace$remove_clause.cljs$core$IFn$_invoke$arity$2 = metabase$lib$remove_replace$remove_clause__2;
metabase$lib$remove_replace$remove_clause.cljs$core$IFn$_invoke$arity$3 = metabase$lib$remove_replace$remove_clause__3;
return metabase$lib$remove_replace$remove_clause;
})()
;
metabase.lib.remove_replace.fresh_ref = (function metabase$lib$remove_replace$fresh_ref(reference){
return metabase.lib.options.update_options.cljs$core$IFn$_invoke$arity$variadic(reference,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())], 0));
});
metabase.lib.remove_replace.local_replace_expression_references = (function metabase$lib$remove_replace$local_replace_expression_references(stage,target_ref_id,replacement_ref){
var replace_embedded_refs = (function metabase$lib$remove_replace$local_replace_expression_references_$_replace_refs(stage__$1){
return (function metabase$lib$remove_replace$local_replace_expression_references_$_replace_refs_$_replace_78836(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 3)))){
try{var _AMPERSAND_match_0__78839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__78839,new cljs.core.Keyword(null,"expression","expression",202311876))){
try{var _AMPERSAND_match_2__78841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_2__78841,target_ref_id)){
return metabase.lib.remove_replace.fresh_ref(replacement_ref);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78844){if((e78844 instanceof Error)){
var e__46214__auto__ = e78844;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e78844;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78843){if((e78843 instanceof Error)){
var e__46214__auto__ = e78843;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e78843;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78842){if((e78842 instanceof Error)){
var e__46214__auto__ = e78842;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.replace_in_collection(metabase$lib$remove_replace$local_replace_expression_references_$_replace_refs_$_replace_78836,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto__;
}
} else {
throw e78842;

}
}})(cljs.core.PersistentVector.EMPTY,stage__$1);
});
return replace_embedded_refs(stage);
});
metabase.lib.remove_replace.local_replace_expression = (function metabase$lib$remove_replace$local_replace_expression(stage,target,replacement){
var replacement_name = (function (){var or__5002__auto__ = metabase.lib.util.expression_name(replacement);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(metabase.lib.options.options(replacement));
}
})();
var top_level_replacement = metabase.lib.remove_replace.fresh_ref(metabase.lib.util.top_level_expression_clause(replacement,replacement_name));
var replaced = cljs.core.update.cljs$core$IFn$_invoke$arity$3(stage,new cljs.core.Keyword(null,"expressions","expressions",255689909),(function (exprs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__78845_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__78845_SHARP_,target)){
return top_level_replacement;
} else {
return p1__78845_SHARP_;
}
}),exprs);
}));
var target_name = metabase.lib.util.expression_name(target);
var replacement_type = new cljs.core.Keyword(null,"effective-type","effective-type",-355725458).cljs$core$IFn$_invoke$arity$1(metabase.lib.options.options(replacement));
var replacement_ref = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expression","expression",202311876),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),replacement_type], null),replacement_name], null);
return metabase.lib.remove_replace.local_replace_expression_references(replaced,target_name,replacement_ref);
});
metabase.lib.remove_replace.local_replace = (function metabase$lib$remove_replace$local_replace(stage,target,replacement){
return clojure.walk.postwalk((function (p1__78847_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__78847_SHARP_,metabase.lib.options.uuid(target))){
return metabase.lib.options.uuid(replacement);
} else {
return p1__78847_SHARP_;
}
}),(cljs.core.truth_(metabase.lib.util.expression_name(target))?metabase.lib.remove_replace.local_replace_expression(stage,target,replacement):clojure.walk.postwalk((function (p1__78846_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__78846_SHARP_,target)){
return replacement;
} else {
return p1__78846_SHARP_;
}
}),stage)));
});
metabase.lib.remove_replace.returned_columns_at_stage = (function metabase$lib$remove_replace$returned_columns_at_stage(query,stage_number){
return metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$3(query,stage_number,metabase.lib.util.query_stage(query,stage_number));
});
metabase.lib.remove_replace.replaced_columns = (function metabase$lib$remove_replace$replaced_columns(query,stage_number,replaced){
var cols = metabase.lib.remove_replace.returned_columns_at_stage(query,stage_number);
var replaced_cols = metabase.lib.remove_replace.returned_columns_at_stage(replaced,stage_number);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__78848_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__78848_SHARP_),cljs.core.second(p1__78848_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cols,replaced_cols));
});
metabase.lib.remove_replace.next_stage_replacement = (function metabase$lib$remove_replace$next_stage_replacement(query,next_stage_number,p__78849){
var vec__78850 = p__78849;
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78850,(0),null);
var replaced_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78850,(1),null);
var target_ref_id = new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402).cljs$core$IFn$_invoke$arity$1(col);
var replaced_ref = metabase.lib.ref.ref(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(replaced_col,new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","previous-stage","source/previous-stage",1962610878)));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (target_ref){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target_ref,metabase.lib.remove_replace.fresh_ref(replaced_ref)], null);
}),cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$lib$remove_replace$next_stage_replacement_$_match_78853(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 3)))){
try{var _AMPERSAND_match_0__78856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__78856,new cljs.core.Keyword(null,"field","field",-1302436500))){
try{var _AMPERSAND_match_2__78858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_2__78858,target_ref_id)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_AMPERSAND_match], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78861){if((e78861 instanceof Error)){
var e__46214__auto__ = e78861;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e78861;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78860){if((e78860 instanceof Error)){
var e__46214__auto__ = e78860;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e78860;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78859){if((e78859 instanceof Error)){
var e__46214__auto__ = e78859;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.match_in_collection(metabase$lib$remove_replace$next_stage_replacement_$_match_78853,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto__;
}
} else {
throw e78859;

}
}})(cljs.core.PersistentVector.EMPTY,metabase.lib.util.query_stage(query,next_stage_number)))));
});
metabase.lib.remove_replace.typed_expression = (function metabase$lib$remove_replace$typed_expression(query,stage_number,expression){
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"effective-type","effective-type",-355725458).cljs$core$IFn$_invoke$arity$1(metabase.lib.options.options(expression));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return ((cljs.core.not(metabase.lib.expression.expression_clause_QMARK_(expression))) || ((!(metabase.lib.util.clause_QMARK_(expression)))));
}
})())){
return expression;
} else {
var t = metabase.lib.metadata.calculation.type_of.cljs$core$IFn$_invoke$arity$3(query,stage_number,expression);
return metabase.lib.options.update_options.cljs$core$IFn$_invoke$arity$variadic(expression,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),t], 0));
}
});
metabase.lib.remove_replace.expression_validator = malli.core.validator.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("metabase.lib.schema.expression","expression","metabase.lib.schema.expression/expression",-1389098704));
/**
 * Returns if `an-expression` and `new-expression` are both expressions.
 */
metabase.lib.remove_replace.expression_replacement_QMARK_ = (function metabase$lib$remove_replace$expression_replacement_QMARK_(an_expression,new_expression){
var and__5000__auto__ = (metabase.lib.remove_replace.expression_validator.cljs$core$IFn$_invoke$arity$1 ? metabase.lib.remove_replace.expression_validator.cljs$core$IFn$_invoke$arity$1(an_expression) : metabase.lib.remove_replace.expression_validator.call(null,an_expression));
if(cljs.core.truth_(and__5000__auto__)){
return (metabase.lib.remove_replace.expression_validator.cljs$core$IFn$_invoke$arity$1 ? metabase.lib.remove_replace.expression_validator.cljs$core$IFn$_invoke$arity$1(new_expression) : metabase.lib.remove_replace.expression_validator.call(null,new_expression));
} else {
return and__5000__auto__;
}
});
metabase.lib.remove_replace.with_default_name = (function metabase$lib$remove_replace$with_default_name(target,replacement){
var target_name = metabase.lib.util.expression_name(target);
var G__78862 = replacement;
if(cljs.core.truth_((function (){var and__5000__auto__ = target_name;
if(cljs.core.truth_(and__5000__auto__)){
return ((cljs.core.not(metabase.lib.util.expression_name(replacement))) && (cljs.core.not(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(metabase.lib.options.options(replacement)))));
} else {
return and__5000__auto__;
}
})())){
return metabase.lib.util.top_level_expression_clause(G__78862,target_name);
} else {
return G__78862;
}
});
/**
 * Return `query` with `target` replaced by `replacement` at stage `stage-number`.
 * 
 *   This function can make changes that produce an invalid query. It is expected that the
 *   caller checks the result and removes invalid parts or uses an other way to make the
 *   replacement happen.
 */
metabase.lib.remove_replace.tweak_expression = (function metabase$lib$remove_replace$tweak_expression(query,stage_number,target,replacement){
var unmodified_query = query;
var replacement__$1 = metabase.lib.remove_replace.typed_expression(query,stage_number,metabase.lib.remove_replace.with_default_name(target,replacement));
var query__$1 = metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(query,stage_number,metabase.lib.remove_replace.local_replace,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target,replacement__$1], 0));
var stage_number__$1 = stage_number;
while(true){
var temp__5802__auto__ = metabase.lib.util.next_stage_number(query__$1,stage_number__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var next_stage_number = temp__5802__auto__;
var next_replacements = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (query__$1,stage_number__$1,next_stage_number,temp__5802__auto__,unmodified_query,replacement__$1){
return (function (p1__78863_SHARP_){
return metabase.lib.remove_replace.next_stage_replacement(query__$1,next_stage_number,p1__78863_SHARP_);
});})(query__$1,stage_number__$1,next_stage_number,temp__5802__auto__,unmodified_query,replacement__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.remove_replace.replaced_columns(unmodified_query,stage_number__$1,query__$1)], 0));
var G__78946 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (query__$1,stage_number__$1,next_replacements,next_stage_number,temp__5802__auto__,unmodified_query,replacement__$1){
return (function (query__$2,p__78868){
var vec__78869 = p__78868;
var target__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78869,(0),null);
var replacement__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78869,(1),null);
return metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(query__$2,next_stage_number,metabase.lib.remove_replace.local_replace,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target__$1,replacement__$2], 0));
});})(query__$1,stage_number__$1,next_replacements,next_stage_number,temp__5802__auto__,unmodified_query,replacement__$1))
,query__$1,next_replacements);
var G__78947 = next_stage_number;
query__$1 = G__78946;
stage_number__$1 = G__78947;
continue;
} else {
return query__$1;
}
break;
}
});
metabase.lib.remove_replace.prefix = (function metabase$lib$remove_replace$prefix(part,whole){
if(cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._EQ_,part,whole))){
return part;
} else {
return null;
}
});
/**
 * Given a Malli `error` in `query`, return the a path to the erroneous part of the query we can remove
 *   to fix the problem or nil if there is no such path.
 */
metabase.lib.remove_replace.on_stage_path = (function metabase$lib$remove_replace$on_stage_path(query,error){
var in$ = new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(error);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(in$),new cljs.core.Keyword(null,"stages","stages",-442109532))){
var stage_number = cljs.core.second(in$);
var path_in_stage = cljs.core.nnext(in$);
var temp__5804__auto__ = (function (){var and__5000__auto__ = cljs.core.next(path_in_stage);
if(and__5000__auto__){
return cljs.core.some((function (p1__78872_SHARP_){
return metabase.lib.remove_replace.prefix(p1__78872_SHARP_,path_in_stage);
}),metabase.lib.remove_replace.stage_paths(query,stage_number));
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var p = temp__5804__auto__;
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(in$,(0),((cljs.core.count(p) + (2)) + (1)));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Inputs: [unmodified-query :- :metabase.lib.schema/query stage-number :- :int target :- :metabase.lib.schema.expression/expression replacement :- :metabase.lib.schema.expression/expression]
 *   Return: :metabase.lib.schema/query
 */
metabase.lib.remove_replace.replace_expression_removing_erroneous_parts = (function metabase$lib$remove_replace$replace_expression_removing_erroneous_parts(unmodified_query,stage_number,target,replacement){
var query = metabase.lib.remove_replace.tweak_expression(unmodified_query,stage_number,target,replacement);
while(true){
var explanation = metabase.util.malli.registry.explain(new cljs.core.Keyword("metabase.lib.schema","query","metabase.lib.schema/query",-1207387140),query);
var error_paths = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (query,explanation){
return (function (p1__78873_SHARP_){
return metabase.lib.remove_replace.on_stage_path(query,p1__78873_SHARP_);
});})(query,explanation))
,new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(explanation)));
if(cljs.core.seq(error_paths)){
var G__78954 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (query,explanation,error_paths){
return (function (q,path){
try{return metabase.lib.remove_replace.remove_clause.cljs$core$IFn$_invoke$arity$3(q,cljs.core.second(path),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(q,path));
}catch (e78874){if((e78874 instanceof Error)){
var e = e78874;
var map__78875 = cljs.core.ex_data(e);
var map__78875__$1 = cljs.core.__destructure_map(map__78875);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78875__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var join = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78875__$1,new cljs.core.Keyword(null,"join","join",-758861890));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(error,new cljs.core.Keyword("metabase.lib.util","cannot-remove-final-join-condition","metabase.lib.util/cannot-remove-final-join-condition",-470911224))){
var G__78876 = q;
var G__78877 = cljs.core.second(path);
var G__78878 = join;
return (metabase.lib.remove_replace.remove_join.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.remove_replace.remove_join.cljs$core$IFn$_invoke$arity$3(G__78876,G__78877,G__78878) : metabase.lib.remove_replace.remove_join.call(null,G__78876,G__78877,G__78878));
} else {
throw e;
}
} else {
throw e78874;

}
}});})(query,explanation,error_paths))
,query,error_paths);
query = G__78954;
continue;
} else {
if(cljs.core.truth_(explanation)){
return metabase.lib.remove_replace.remove_replace_STAR_(unmodified_query,stage_number,target,new cljs.core.Keyword(null,"replace","replace",-786587770),replacement);
} else {
return query;
}
}
break;
}
});
/**
 * Inputs: ([query :- :metabase.lib.schema/query target-clause new-clause]
 *         [query :- :metabase.lib.schema/query stage-number :- :int target-clause new-clause])
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Replaces the `target-clause` with `new-clause` in the `query` stage specified by `stage-number`.
 *   If `stage-number` is not specified, the last stage is used.
 */
metabase.lib.remove_replace.replace_clause = (function() {
var metabase$lib$remove_replace$replace_clause = null;
var metabase$lib$remove_replace$replace_clause__3 = (function (query,target_clause,new_clause){
return (metabase.lib.remove_replace.replace_clause.cljs$core$IFn$_invoke$arity$4 ? metabase.lib.remove_replace.replace_clause.cljs$core$IFn$_invoke$arity$4(query,(-1),target_clause,new_clause) : metabase.lib.remove_replace.replace_clause.call(null,query,(-1),target_clause,new_clause));
});
var metabase$lib$remove_replace$replace_clause__4 = (function (query,stage_number,target_clause,new_clause){
if(((cljs.core.map_QMARK_(target_clause)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(target_clause),new cljs.core.Keyword("mbql","join","mbql/join",-709512370))))){
return (metabase.lib.remove_replace.replace_join.cljs$core$IFn$_invoke$arity$4 ? metabase.lib.remove_replace.replace_join.cljs$core$IFn$_invoke$arity$4(query,stage_number,target_clause,new_clause) : metabase.lib.remove_replace.replace_join.call(null,query,stage_number,target_clause,new_clause));
} else {
if(cljs.core.truth_(metabase.lib.remove_replace.expression_replacement_QMARK_(target_clause,new_clause))){
return metabase.lib.remove_replace.replace_expression_removing_erroneous_parts(query,stage_number,target_clause,new_clause);
} else {
return metabase.lib.remove_replace.remove_replace_STAR_(query,stage_number,target_clause,new cljs.core.Keyword(null,"replace","replace",-786587770),new_clause);

}
}
});
metabase$lib$remove_replace$replace_clause = function(query,stage_number,target_clause,new_clause){
switch(arguments.length){
case 3:
return metabase$lib$remove_replace$replace_clause__3.call(this,query,stage_number,target_clause);
case 4:
return metabase$lib$remove_replace$replace_clause__4.call(this,query,stage_number,target_clause,new_clause);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$remove_replace$replace_clause.cljs$core$IFn$_invoke$arity$3 = metabase$lib$remove_replace$replace_clause__3;
metabase$lib$remove_replace$replace_clause.cljs$core$IFn$_invoke$arity$4 = metabase$lib$remove_replace$replace_clause__4;
return metabase$lib$remove_replace$replace_clause;
})()
;
metabase.lib.remove_replace.field_clause_with_join_alias_QMARK_ = (function metabase$lib$remove_replace$field_clause_with_join_alias_QMARK_(field_clause,join_alias){
return ((metabase.lib.util.field_clause_QMARK_(field_clause)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(metabase.lib.join.util.current_join_alias(field_clause),join_alias)));
});
metabase.lib.remove_replace.replace_join_alias = (function metabase$lib$remove_replace$replace_join_alias(a_join,old_name,new_name){
return (function metabase$lib$remove_replace$replace_join_alias_$_replace_78880(_AMPERSAND_parents,_AMPERSAND_match){
try{if((function (p1__78879_SHARP_){
return metabase.lib.remove_replace.field_clause_with_join_alias_QMARK_(p1__78879_SHARP_,old_name);
})(_AMPERSAND_match)){
var field = _AMPERSAND_match;
return metabase.lib.join.with_join_alias(field,new_name);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78882){if((e78882 instanceof Error)){
var e__46214__auto__ = e78882;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.replace_in_collection(metabase$lib$remove_replace$replace_join_alias_$_replace_78880,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto__;
}
} else {
throw e78882;

}
}})(cljs.core.PersistentVector.EMPTY,a_join);
});
metabase.lib.remove_replace.rename_join_in_stage = (function metabase$lib$remove_replace$rename_join_in_stage(metadata_providerable,stage,idx,new_name){
var the_joins = new cljs.core.Keyword(null,"joins","joins",1033962699).cljs$core$IFn$_invoke$arity$1(stage);
var vec__78883 = ((((((-1) < idx)) && ((idx < cljs.core.count(the_joins)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(the_joins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,new cljs.core.Keyword(null,"alias","alias",-2039751630)], null))], null):null);
var idx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78883,(0),null);
var old_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78883,(1),null);
if(cljs.core.truth_((function (){var and__5000__auto__ = idx__$1;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_name,new_name);
} else {
return and__5000__auto__;
}
})())){
var unique_name_fn = metabase.lib.util.unique_name_generator.cljs$core$IFn$_invoke$arity$1(metabase.lib.metadata.__GT_metadata_provider(metadata_providerable));
var _ = cljs.core.run_BANG_(unique_name_fn,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"alias","alias",-2039751630),the_joins));
var unique_name = (unique_name_fn.cljs$core$IFn$_invoke$arity$1 ? unique_name_fn.cljs$core$IFn$_invoke$arity$1(new_name) : unique_name_fn.call(null,new_name));
return metabase.lib.remove_replace.replace_join_alias(cljs.core.assoc_in(stage,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"joins","joins",1033962699),idx__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630)], null),unique_name),old_name,unique_name);
} else {
return stage;
}
});
metabase.lib.remove_replace.join_spec__GT_clause = (function metabase$lib$remove_replace$join_spec__GT_clause(query,stage_number,join_spec){
if(cljs.core.integer_QMARK_(join_spec)){
return join_spec;
} else {
var pred = (function (){var G__78886 = cljs.core.PersistentHashSet.createAsIfByAssoc([join_spec]);
if(typeof join_spec === 'string'){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(G__78886,new cljs.core.Keyword(null,"alias","alias",-2039751630));
} else {
return G__78886;
}
})();
return cljs.core.some((function (p__78887){
var vec__78888 = p__78887;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78888,(0),null);
var a_join = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78888,(1),null);
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(a_join) : pred.call(null,a_join)))){
return idx;
} else {
return null;
}
}),medley.core.indexed.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"joins","joins",1033962699).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number))));
}
});
/**
 * Inputs: ([query join-spec new-name]
 *         [query :- :metabase.lib.schema/query stage-number :- :int join-spec :- [:or :metabase.lib.schema.join/join :string :int] new-name :- :metabase.lib.schema.common/non-blank-string])
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Rename the join specified by `join-spec` in `query` at `stage-number` to `new-name`.
 *   The join can be specified either by itself (as returned by [[joins]]), by its alias
 *   or by its index in the list of joins as returned by [[joins]].
 *   If `stage-number` is not provided, the last stage is used.
 *   If the specified join cannot be found, then `query` is returned as is.
 *   If renaming the join to `new-name` would clash with an existing join, a
 *   suffix is appended to `new-name` to make it unique.
 */
metabase.lib.remove_replace.rename_join = (function() {
var metabase$lib$remove_replace$rename_join = null;
var metabase$lib$remove_replace$rename_join__3 = (function (query,join_spec,new_name){
return (metabase.lib.remove_replace.rename_join.cljs$core$IFn$_invoke$arity$4 ? metabase.lib.remove_replace.rename_join.cljs$core$IFn$_invoke$arity$4(query,(-1),join_spec,new_name) : metabase.lib.remove_replace.rename_join.call(null,query,(-1),join_spec,new_name));
});
var metabase$lib$remove_replace$rename_join__4 = (function (query,stage_number,join_spec,new_name){
var temp__5802__auto__ = metabase.lib.remove_replace.join_spec__GT_clause(query,stage_number,join_spec);
if(cljs.core.truth_(temp__5802__auto__)){
var idx = temp__5802__auto__;
return metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(query,stage_number,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(metabase.lib.remove_replace.rename_join_in_stage,query),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([idx,new_name], 0));
} else {
return query;
}
});
metabase$lib$remove_replace$rename_join = function(query,stage_number,join_spec,new_name){
switch(arguments.length){
case 3:
return metabase$lib$remove_replace$rename_join__3.call(this,query,stage_number,join_spec);
case 4:
return metabase$lib$remove_replace$rename_join__4.call(this,query,stage_number,join_spec,new_name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$remove_replace$rename_join.cljs$core$IFn$_invoke$arity$3 = metabase$lib$remove_replace$rename_join__3;
metabase$lib$remove_replace$rename_join.cljs$core$IFn$_invoke$arity$4 = metabase$lib$remove_replace$rename_join__4;
return metabase$lib$remove_replace$rename_join;
})()
;
metabase.lib.remove_replace.remove_matching_missing_columns = (function metabase$lib$remove_replace$remove_matching_missing_columns(query_after,query_before,stage_number,match_spec){
var removed_cols = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$3(query_before,stage_number,metabase.lib.util.query_stage(query_before,stage_number))),cljs.core.set(metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$3(query_after,stage_number,metabase.lib.util.query_stage(query_after,stage_number))));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__78895_SHARP_,p2__78896_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(metabase.lib.remove_replace.remove_local_references,p1__78895_SHARP_,stage_number,query_after,(match_spec.cljs$core$IFn$_invoke$arity$1 ? match_spec.cljs$core$IFn$_invoke$arity$1(p2__78896_SHARP_) : match_spec.call(null,p2__78896_SHARP_)));
}),query_after,removed_cols);
});
metabase.lib.remove_replace.remove_invalidated_refs = (function metabase$lib$remove_replace$remove_invalidated_refs(query_after,query_before,stage_number){
var query_without_local_refs = metabase.lib.remove_replace.remove_matching_missing_columns(query_after,query_before,stage_number,(function (column){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"join-alias","join-alias",1454206794),new cljs.core.Keyword("metabase.lib.join","join-alias","metabase.lib.join/join-alias",1166233023).cljs$core$IFn$_invoke$arity$1(column)], null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column)], null);
}));
var temp__5802__auto__ = metabase.lib.util.next_stage_number(query_without_local_refs,stage_number);
if(cljs.core.truth_(temp__5802__auto__)){
var stage_number__$1 = temp__5802__auto__;
return metabase.lib.remove_replace.remove_matching_missing_columns(query_without_local_refs,query_before,stage_number__$1,(function (column){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402).cljs$core$IFn$_invoke$arity$1(column)], null);
}));
} else {
return query_without_local_refs;
}
});
metabase.lib.remove_replace.join_spec__GT_alias = (function metabase$lib$remove_replace$join_spec__GT_alias(query,stage_number,join_spec){
if(cljs.core.integer_QMARK_(join_spec)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(metabase.lib.util.query_stage(query,stage_number),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"joins","joins",1033962699),join_spec,new cljs.core.Keyword(null,"alias","alias",-2039751630)], null));
} else {
if(cljs.core.map_QMARK_(join_spec)){
return new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(join_spec);
} else {
return join_spec;

}
}
});
metabase.lib.remove_replace.update_joins = (function metabase$lib$remove_replace$update_joins(query,stage_number,join_spec,f){
var temp__5802__auto__ = metabase.lib.remove_replace.join_spec__GT_alias(query,stage_number,join_spec);
if(cljs.core.truth_(temp__5802__auto__)){
var join_alias = temp__5802__auto__;
var query_after = (function (){var $q = query;
var $q__$1 = metabase.lib.util.update_query_stage($q,stage_number,(function (stage){
return metabase.util.assoc_dissoc(stage,new cljs.core.Keyword(null,"joins","joins",1033962699),(function (){var G__78898 = new cljs.core.Keyword(null,"joins","joins",1033962699).cljs$core$IFn$_invoke$arity$1(stage);
var G__78899 = join_alias;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__78898,G__78899) : f.call(null,G__78898,G__78899));
})());
}));
return metabase.lib.util.update_query_stage($q__$1,stage_number,(function (stage){
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$3(stage,new cljs.core.Keyword(null,"joins","joins",1033962699),(function (joins){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__78897_SHARP_){
return metabase.lib.join.add_default_alias($q__$1,stage_number,p1__78897_SHARP_);
}),joins);
}));
}));
})();
var G__78900 = metabase.lib.remove_replace.remove_invalidated_refs(query_after,query,stage_number);
return (metabase.lib.remove_replace.normalize_fields_clauses.cljs$core$IFn$_invoke$arity$1 ? metabase.lib.remove_replace.normalize_fields_clauses.cljs$core$IFn$_invoke$arity$1(G__78900) : metabase.lib.remove_replace.normalize_fields_clauses.call(null,G__78900));
} else {
return query;
}
});
metabase.lib.remove_replace.has_field_from_join_QMARK_ = (function metabase$lib$remove_replace$has_field_from_join_QMARK_(form,join_alias){
return (!((cljs.core.first(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$lib$remove_replace$has_field_from_join_QMARK__$_match_78903(_AMPERSAND_parents,_AMPERSAND_match){
try{if((function (p1__78901_SHARP_){
return metabase.lib.remove_replace.field_clause_with_join_alias_QMARK_(p1__78901_SHARP_,join_alias);
})(_AMPERSAND_match)){
var field = _AMPERSAND_match;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_AMPERSAND_match], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78907){if((e78907 instanceof Error)){
var e__46214__auto__ = e78907;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.match_in_collection(metabase$lib$remove_replace$has_field_from_join_QMARK__$_match_78903,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto__;
}
} else {
throw e78907;

}
}})(cljs.core.PersistentVector.EMPTY,form)))) == null)));
});
metabase.lib.remove_replace.dependent_join_QMARK_ = (function metabase$lib$remove_replace$dependent_join_QMARK_(join,join_alias){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(join),join_alias)) || (metabase.lib.remove_replace.has_field_from_join_QMARK_(join,join_alias)));
});
/**
 * Inputs: ([query join-spec]
 *         [query :- :metabase.lib.schema/query stage-number :- :int join-spec :- [:or :metabase.lib.schema.join/join :string :int]])
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Remove the join specified by `join-spec` in `query` at `stage-number`.
 *   The join can be specified either by itself (as returned by [[joins]]), by its alias
 *   or by its index in the list of joins as returned by [[joins]].
 *   If `stage-number` is not provided, the last stage is used.
 *   If the specified join cannot be found, then `query` is returned as is.
 *   Top level clauses containing references to the removed join are removed too.
 */
metabase.lib.remove_replace.remove_join = (function() {
var metabase$lib$remove_replace$remove_join = null;
var metabase$lib$remove_replace$remove_join__2 = (function (query,join_spec){
return (metabase.lib.remove_replace.remove_join.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.remove_replace.remove_join.cljs$core$IFn$_invoke$arity$3(query,(-1),join_spec) : metabase.lib.remove_replace.remove_join.call(null,query,(-1),join_spec));
});
var metabase$lib$remove_replace$remove_join__3 = (function (query,stage_number,join_spec){
try{return metabase.lib.remove_replace.update_joins(query,stage_number,join_spec,(function (joins,join_alias){
return cljs.core.not_empty(cljs.core.filterv((function (p1__78910_SHARP_){
return (!(metabase.lib.remove_replace.dependent_join_QMARK_(p1__78910_SHARP_,join_alias)));
}),joins));
}));
}catch (e78911){var e = e78911;
var map__78912 = cljs.core.ex_data(e);
var map__78912__$1 = cljs.core.__destructure_map(map__78912);
var error_stage_number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78912__$1,new cljs.core.Keyword(null,"stage-number","stage-number",-1752729638));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78912__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var join = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78912__$1,new cljs.core.Keyword(null,"join","join",-758861890));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(error,new cljs.core.Keyword("metabase.lib.util","cannot-remove-final-join-condition","metabase.lib.util/cannot-remove-final-join-condition",-470911224))){
var G__78913 = (metabase.lib.remove_replace.remove_join.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.remove_replace.remove_join.cljs$core$IFn$_invoke$arity$3(query,error_stage_number,join) : metabase.lib.remove_replace.remove_join.call(null,query,error_stage_number,join));
var G__78914 = stage_number;
var G__78915 = join_spec;
return (metabase.lib.remove_replace.remove_join.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.remove_replace.remove_join.cljs$core$IFn$_invoke$arity$3(G__78913,G__78914,G__78915) : metabase.lib.remove_replace.remove_join.call(null,G__78913,G__78914,G__78915));
} else {
throw e;
}
}});
metabase$lib$remove_replace$remove_join = function(query,stage_number,join_spec){
switch(arguments.length){
case 2:
return metabase$lib$remove_replace$remove_join__2.call(this,query,stage_number);
case 3:
return metabase$lib$remove_replace$remove_join__3.call(this,query,stage_number,join_spec);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$remove_replace$remove_join.cljs$core$IFn$_invoke$arity$2 = metabase$lib$remove_replace$remove_join__2;
metabase$lib$remove_replace$remove_join.cljs$core$IFn$_invoke$arity$3 = metabase$lib$remove_replace$remove_join__3;
return metabase$lib$remove_replace$remove_join;
})()
;
/**
 * Inputs: ([query join-spec new-join]
 *         [query :- :metabase.lib.schema/query stage-number :- :int join-spec :- [:or :metabase.lib.schema.join/join :string :int] new-join])
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Replace the join specified by `join-spec` in `query` at `stage-number` with `new-join`.
 *   If `new-join` is nil, the join is removed as if by [[remove-join]].
 *   The join can be specified either by itself (as returned by [[joins]]), by its alias
 *   or by its index in the list of joins as returned by [[joins]].
 *   If `stage-number` is not provided, the last stage is used.
 *   If the specified join cannot be found, then `query` is returned as is.
 *   Top level clauses containing references to the removed join are removed too.
 */
metabase.lib.remove_replace.replace_join = (function() {
var metabase$lib$remove_replace$replace_join = null;
var metabase$lib$remove_replace$replace_join__3 = (function (query,join_spec,new_join){
return (metabase.lib.remove_replace.replace_join.cljs$core$IFn$_invoke$arity$4 ? metabase.lib.remove_replace.replace_join.cljs$core$IFn$_invoke$arity$4(query,(-1),join_spec,new_join) : metabase.lib.remove_replace.replace_join.call(null,query,(-1),join_spec,new_join));
});
var metabase$lib$remove_replace$replace_join__4 = (function (query,stage_number,join_spec,new_join){
if((new_join == null)){
return metabase.lib.remove_replace.remove_join.cljs$core$IFn$_invoke$arity$3(query,stage_number,join_spec);
} else {
return metabase.lib.remove_replace.update_joins(query,stage_number,join_spec,(function (joins,join_alias){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__78916_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(p1__78916_SHARP_),join_alias)){
return new_join;
} else {
return p1__78916_SHARP_;
}
}),joins);
}));
}
});
metabase$lib$remove_replace$replace_join = function(query,stage_number,join_spec,new_join){
switch(arguments.length){
case 3:
return metabase$lib$remove_replace$replace_join__3.call(this,query,stage_number,join_spec);
case 4:
return metabase$lib$remove_replace$replace_join__4.call(this,query,stage_number,join_spec,new_join);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$remove_replace$replace_join.cljs$core$IFn$_invoke$arity$3 = metabase$lib$remove_replace$replace_join__3;
metabase$lib$remove_replace$replace_join.cljs$core$IFn$_invoke$arity$4 = metabase$lib$remove_replace$replace_join__4;
return metabase$lib$remove_replace$replace_join;
})()
;
metabase.lib.remove_replace.specifies_default_fields_QMARK_ = (function metabase$lib$remove_replace$specifies_default_fields_QMARK_(query,stage_number){
var fields = new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number));
var and__5000__auto__ = fields;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = cljs.core.not(cljs.core.some(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source-field","source-field",933829534),metabase.lib.options.options),fields));
if(and__5000__auto____$1){
return metabase.lib.equality.matching_column_sets_QMARK_(query,stage_number,fields,metabase.lib.metadata.calculation.default_columns_for_stage(query,stage_number));
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});
metabase.lib.remove_replace.normalize_fields_for_join = (function metabase$lib$remove_replace$normalize_fields_for_join(query,stage_number,removed_location,join){
if(cljs.core.truth_((function (){var G__78920 = new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(join);
var fexpr__78919 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"all","all",892129742),null,new cljs.core.Keyword(null,"none","none",1333468478),null], null), null);
return (fexpr__78919.cljs$core$IFn$_invoke$arity$1 ? fexpr__78919.cljs$core$IFn$_invoke$arity$1(G__78920) : fexpr__78919.call(null,G__78920));
})())){
return join;
} else {
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(removed_location,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregation","aggregation",1597476696)], null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(removed_location,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"breakout","breakout",-732419050)], null))))) && ((!(cljs.core.contains_QMARK_(join,new cljs.core.Keyword(null,"fields","fields",-1932066230))))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(join,new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"all","all",892129742));
} else {
if(cljs.core.truth_(metabase.lib.equality.matching_column_sets_QMARK_(query,stage_number,new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(join),metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$3(query,stage_number,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(join,new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"all","all",892129742)))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(join,new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"all","all",892129742));
} else {
return join;

}
}
}
});
metabase.lib.remove_replace.normalize_fields_for_stage = (function metabase$lib$remove_replace$normalize_fields_for_stage(query,stage_number,removed_location){
var stage = metabase.lib.util.query_stage(query,stage_number);
var G__78922 = query;
var G__78922__$1 = (cljs.core.truth_(metabase.lib.remove_replace.specifies_default_fields_QMARK_(query,stage_number))?metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(G__78922,stage_number,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fields","fields",-1932066230)], 0)):G__78922);
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"aggregation","aggregation",1597476696).cljs$core$IFn$_invoke$arity$1(stage));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"breakout","breakout",-732419050).cljs$core$IFn$_invoke$arity$1(stage));
if(and__5000__auto____$1){
return new cljs.core.Keyword(null,"joins","joins",1033962699).cljs$core$IFn$_invoke$arity$1(stage);
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
return metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(G__78922__$1,stage_number,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"joins","joins",1033962699),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,(function (p1__78921_SHARP_){
return metabase.lib.remove_replace.normalize_fields_for_join(query,stage_number,removed_location,p1__78921_SHARP_);
}))], 0));
} else {
return G__78922__$1;
}
});
/**
 * Inputs: ([query :- :metabase.lib.schema/query]
 *         [query :- :metabase.lib.schema/query removed-location :- [:maybe [:sequential :any]]])
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Check all the `:fields` clauses in the query - on the stages and any joins - and drops them if they are equal to the
 *   defaults.
 *   - For stages, if the `:fields` list is identical to the default fields for this stage.
 *   - For joins, replace it with `:all` if it's all the fields that are in the join by default.
 *   - For joins, remove it if the list is empty (the default for joins is no fields).
 */
metabase.lib.remove_replace.normalize_fields_clauses = (function() {
var metabase$lib$remove_replace$normalize_fields_clauses = null;
var metabase$lib$remove_replace$normalize_fields_clauses__1 = (function (query){
return (metabase.lib.remove_replace.normalize_fields_clauses.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.remove_replace.normalize_fields_clauses.cljs$core$IFn$_invoke$arity$2(query,null) : metabase.lib.remove_replace.normalize_fields_clauses.call(null,query,null));
});
var metabase$lib$remove_replace$normalize_fields_clauses__2 = (function (query,removed_location){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__78923_SHARP_,p2__78924_SHARP_){
return metabase.lib.remove_replace.normalize_fields_for_stage(p1__78923_SHARP_,p2__78924_SHARP_,removed_location);
}),query,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(query))));
});
metabase$lib$remove_replace$normalize_fields_clauses = function(query,removed_location){
switch(arguments.length){
case 1:
return metabase$lib$remove_replace$normalize_fields_clauses__1.call(this,query);
case 2:
return metabase$lib$remove_replace$normalize_fields_clauses__2.call(this,query,removed_location);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$remove_replace$normalize_fields_clauses.cljs$core$IFn$_invoke$arity$1 = metabase$lib$remove_replace$normalize_fields_clauses__1;
metabase$lib$remove_replace$normalize_fields_clauses.cljs$core$IFn$_invoke$arity$2 = metabase$lib$remove_replace$normalize_fields_clauses__2;
return metabase$lib$remove_replace$normalize_fields_clauses;
})()
;

//# sourceMappingURL=metabase.lib.remove_replace.js.map
