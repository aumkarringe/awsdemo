var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.util.match.impl.js");

goog.provide('metabase.lib.util.match.impl');
/**
 * Return a function to use for pattern matching via `core.match`'s `:guard` functionality based on the value of a
 *   `pred-or-class` passed in as a pattern to `match` or `replace`.
 * 
 *   (Class-based matching currently only works in Clojure. For ClojureScript, only predicate function matching works.)
 */
metabase.lib.util.match.impl.match_with_pred_or_class = (function metabase$lib$util$match$impl$match_with_pred_or_class(pred_or_class){
if(cljs.core.fn_QMARK_(pred_or_class)){
return pred_or_class;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid pattern: don't know how to handle symbol.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),pred_or_class], null));

}
});
/**
 * Internal impl for `match`. If `form` is a collection, call `match-fn` to recursively look for matches in it.
 */
metabase.lib.util.match.impl.match_in_collection = (function metabase$lib$util$match$impl$match_in_collection(match_fn,clause_parents,form){
if(cljs.core.fn_QMARK_(match_fn)){
} else {
throw (new Error("Assert failed: (fn? match-fn)"));
}

if(cljs.core.vector_QMARK_(clause_parents)){
} else {
throw (new Error("Assert failed: (vector? clause-parents)"));
}

if(cljs.core.map_QMARK_(form)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__75246){
var vec__75247 = p__75246;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75247,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75247,(1),null);
var G__75250 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clause_parents,k);
var G__75251 = v;
return (match_fn.cljs$core$IFn$_invoke$arity$2 ? match_fn.cljs$core$IFn$_invoke$arity$2(G__75250,G__75251) : match_fn.call(null,G__75250,G__75251));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0));
} else {
if(cljs.core.sequential_QMARK_(form)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(match_fn,(((cljs.core.first(form) instanceof cljs.core.Keyword))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clause_parents,cljs.core.first(form)):clause_parents)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0));
} else {
return null;
}
}
});
/**
 * Inernal impl for `replace`. Recursively replace values in a collection using a `replace-fn`.
 */
metabase.lib.util.match.impl.replace_in_collection = (function metabase$lib$util$match$impl$replace_in_collection(replace_fn,clause_parents,form){
if(cljs.core.map_QMARK_(form)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(form,(function (){var iter__5480__auto__ = (function metabase$lib$util$match$impl$replace_in_collection_$_iter__75252(s__75253){
return (new cljs.core.LazySeq(null,(function (){
var s__75253__$1 = s__75253;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__75253__$1);
if(temp__5804__auto__){
var s__75253__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__75253__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__75253__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__75255 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__75254 = (0);
while(true){
if((i__75254 < size__5479__auto__)){
var vec__75256 = cljs.core._nth(c__5478__auto__,i__75254);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75256,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75256,(1),null);
cljs.core.chunk_append(b__75255,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__75259 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clause_parents,k);
var G__75260 = v;
return (replace_fn.cljs$core$IFn$_invoke$arity$2 ? replace_fn.cljs$core$IFn$_invoke$arity$2(G__75259,G__75260) : replace_fn.call(null,G__75259,G__75260));
})()], null));

var G__75288 = (i__75254 + (1));
i__75254 = G__75288;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__75255),metabase$lib$util$match$impl$replace_in_collection_$_iter__75252(cljs.core.chunk_rest(s__75253__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__75255),null);
}
} else {
var vec__75261 = cljs.core.first(s__75253__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75261,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75261,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__75264 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clause_parents,k);
var G__75265 = v;
return (replace_fn.cljs$core$IFn$_invoke$arity$2 ? replace_fn.cljs$core$IFn$_invoke$arity$2(G__75264,G__75265) : replace_fn.call(null,G__75264,G__75265));
})()], null),metabase$lib$util$match$impl$replace_in_collection_$_iter__75252(cljs.core.rest(s__75253__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(form);
})());
} else {
if(cljs.core.sequential_QMARK_(form)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(replace_fn,(((cljs.core.first(form) instanceof cljs.core.Keyword))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clause_parents,cljs.core.first(form)):clause_parents)),form);
} else {
return form;

}
}
});
/**
 * Like `update-in`, but only updates in the existing value is non-empty.
 */
metabase.lib.util.match.impl.update_in_unless_empty = (function metabase$lib$util$match$impl$update_in_unless_empty(var_args){
var args__5732__auto__ = [];
var len__5726__auto___75289 = arguments.length;
var i__5727__auto___75290 = (0);
while(true){
if((i__5727__auto___75290 < len__5726__auto___75289)){
args__5732__auto__.push((arguments[i__5727__auto___75290]));

var G__75291 = (i__5727__auto___75290 + (1));
i__5727__auto___75290 = G__75291;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return metabase.lib.util.match.impl.update_in_unless_empty.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(metabase.lib.util.match.impl.update_in_unless_empty.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,f,args){
if(cljs.core.not(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,ks)))){
return m;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in,m,ks,f,args);
}
}));

(metabase.lib.util.match.impl.update_in_unless_empty.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(metabase.lib.util.match.impl.update_in_unless_empty.cljs$lang$applyTo = (function (seq75266){
var G__75267 = cljs.core.first(seq75266);
var seq75266__$1 = cljs.core.next(seq75266);
var G__75268 = cljs.core.first(seq75266__$1);
var seq75266__$2 = cljs.core.next(seq75266__$1);
var G__75269 = cljs.core.first(seq75266__$2);
var seq75266__$3 = cljs.core.next(seq75266__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75267,G__75268,G__75269,seq75266__$3);
}));


//# sourceMappingURL=metabase.lib.util.match.impl.js.map
