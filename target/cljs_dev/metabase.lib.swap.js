var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.options.js");
require("./metabase.lib.util.js");
require("./metabase.util.log.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.swap.js");

goog.provide('metabase.lib.swap');
metabase.lib.swap.swap_failure_no_match = (function metabase$lib$swap$swap_failure_no_match(stage,target_clause){
var level__73195__auto__ = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"warn","warn",-436710552));
var logger__73196__auto__ = "metabase.lib.swap";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__73196__auto__,level__73195__auto__))){
var x__73197__auto__ = "No matching clause in swap-clauses";
if((x__73197__auto__ instanceof Error)){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73196__auto__,level__73195__auto__,cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target_clause,stage], 0)),x__73197__auto__);
} else {
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73196__auto__,level__73195__auto__,cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__73197__auto__,target_clause,stage], 0)),null);
}
} else {
return null;
}
});
metabase.lib.swap.swap_failure_ambiguous = (function metabase$lib$swap$swap_failure_ambiguous(target_clause,matches){
var level__73195__auto__ = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"warn","warn",-436710552));
var logger__73196__auto__ = "metabase.lib.swap";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__73196__auto__,level__73195__auto__))){
var x__73197__auto__ = "Ambiguous match for clause in swap-clauses";
if((x__73197__auto__ instanceof Error)){
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73196__auto__,level__73195__auto__,cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([target_clause,matches], 0)),x__73197__auto__);
} else {
return lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73196__auto__,level__73195__auto__,cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__73197__auto__,target_clause,matches], 0)),null);
}
} else {
return null;
}
});
metabase.lib.swap.uuid_match = (function metabase$lib$swap$uuid_match(stage,target_clause){
var target_uuid = metabase.lib.options.uuid(target_clause);
var matches = (function (){var iter__5480__auto__ = (function metabase$lib$swap$uuid_match_$_iter__79807(s__79808){
return (new cljs.core.LazySeq(null,(function (){
var s__79808__$1 = s__79808;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__79808__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var root = cljs.core.first(xs__6360__auto__);
var iterys__5476__auto__ = ((function (s__79808__$1,root,xs__6360__auto__,temp__5804__auto__,target_uuid){
return (function metabase$lib$swap$uuid_match_$_iter__79807_$_iter__79809(s__79810){
return (new cljs.core.LazySeq(null,((function (s__79808__$1,root,xs__6360__auto__,temp__5804__auto__,target_uuid){
return (function (){
var s__79810__$1 = s__79810;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__79810__$1);
if(temp__5804__auto____$1){
var s__79810__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__79810__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__79810__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__79812 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__79811 = (0);
while(true){
if((i__79811 < size__5479__auto__)){
var index = cljs.core._nth(c__5478__auto__,i__79811);
var path = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [root,index], null);
var clause = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(stage,path);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(metabase.lib.options.uuid(clause),target_uuid)){
cljs.core.chunk_append(b__79812,path);

var G__79820 = (i__79811 + (1));
i__79811 = G__79820;
continue;
} else {
var G__79821 = (i__79811 + (1));
i__79811 = G__79821;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79812),metabase$lib$swap$uuid_match_$_iter__79807_$_iter__79809(cljs.core.chunk_rest(s__79810__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79812),null);
}
} else {
var index = cljs.core.first(s__79810__$2);
var path = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [root,index], null);
var clause = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(stage,path);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(metabase.lib.options.uuid(clause),target_uuid)){
return cljs.core.cons(path,metabase$lib$swap$uuid_match_$_iter__79807_$_iter__79809(cljs.core.rest(s__79810__$2)));
} else {
var G__79822 = cljs.core.rest(s__79810__$2);
s__79810__$1 = G__79822;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__79808__$1,root,xs__6360__auto__,temp__5804__auto__,target_uuid))
,null,null));
});})(s__79808__$1,root,xs__6360__auto__,temp__5804__auto__,target_uuid))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(stage,root)))));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,metabase$lib$swap$uuid_match_$_iter__79807(cljs.core.rest(s__79808__$1)));
} else {
var G__79823 = cljs.core.rest(s__79808__$1);
s__79808__$1 = G__79823;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),new cljs.core.Keyword(null,"breakout","breakout",-732419050),new cljs.core.Keyword(null,"expressions","expressions",255689909),new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"order-by","order-by",1527318070)], null));
})();
var G__79814 = cljs.core.count(matches);
switch (G__79814) {
case (1):
return cljs.core.first(matches);

break;
case (0):
return metabase.lib.swap.swap_failure_no_match(stage,target_clause);

break;
default:
return metabase.lib.swap.swap_failure_ambiguous(target_clause,matches);

}
});
metabase.lib.swap.do_swap = (function metabase$lib$swap$do_swap(stage,source_path,target_path,source_clause,target_clause){
return cljs.core.assoc_in(cljs.core.assoc_in(stage,source_path,target_clause),target_path,source_clause);
});
/**
 * Given a `query` and `stage-number`, and two clauses, swaps the position of these two clauses in a list of clauses on
 *   this stage. Can be used to reorder clauses in the UI.
 * 
 *   Returns the query with the two clauses exchanged.
 * 
 *   If either clause is not found inside the same list, emits a warning and returns the query unchanged.
 */
metabase.lib.swap.swap_clauses = (function metabase$lib$swap$swap_clauses(query,stage_number,source_clause,target_clause){
var stage = metabase.lib.util.query_stage(query,stage_number);
var source_path = metabase.lib.swap.uuid_match(stage,source_clause);
var target_path = metabase.lib.swap.uuid_match(stage,target_clause);
if(cljs.core.truth_((function (){var and__5000__auto__ = source_path;
if(cljs.core.truth_(and__5000__auto__)){
return target_path;
} else {
return and__5000__auto__;
}
})())){
return metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(query,stage_number,metabase.lib.swap.do_swap,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([source_path,target_path,source_clause,target_clause], 0));
} else {
return query;
}
});

//# sourceMappingURL=metabase.lib.swap.js.map
