var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./malli.core.js");
require("./malli.registry.js");
require("./malli.util.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.util.malli.registry.js");

goog.provide('metabase.util.malli.registry');
if((typeof metabase !== 'undefined') && (typeof metabase.util !== 'undefined') && (typeof metabase.util.malli !== 'undefined') && (typeof metabase.util.malli.registry !== 'undefined') && (typeof metabase.util.malli.registry.cache !== 'undefined')){
} else {
metabase.util.malli.registry.cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Get a cached value for `k` + `schema`. Cache is cleared whenever a schema is (re)defined
 *   with [[metabase.util.malli.registry/def]]. If value doesn't exist, `value-thunk` is used to calculate (and cache)
 *   it.
 * 
 *   You generally shouldn't use this outside of this namespace unless you have a really good reason to do so! Make sure
 *   you used namespaced keys if you are using it elsewhere.
 */
metabase.util.malli.registry.cached = (function metabase$util$malli$registry$cached(k,schema,value_thunk){
var or__5002__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(metabase.util.malli.registry.cache),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,schema], null));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var v = (value_thunk.cljs$core$IFn$_invoke$arity$0 ? value_thunk.cljs$core$IFn$_invoke$arity$0() : value_thunk.call(null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metabase.util.malli.registry.cache,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,schema], null),v);

return v;
}
});
/**
 * Fetch a cached [[mc/validator]] for `schema`, creating one if needed. The cache is flushed whenever the registry
 *   changes.
 */
metabase.util.malli.registry.validator = (function metabase$util$malli$registry$validator(schema){
return metabase.util.malli.registry.cached(new cljs.core.Keyword(null,"validator","validator",-1966190681),schema,(function (){
return malli.core.validator.cljs$core$IFn$_invoke$arity$1(schema);
}));
});
/**
 * [[mc/validate]], but uses a cached validator from [[validator]].
 */
metabase.util.malli.registry.validate = (function metabase$util$malli$registry$validate(schema,value){
var fexpr__74650 = metabase.util.malli.registry.validator(schema);
return (fexpr__74650.cljs$core$IFn$_invoke$arity$1 ? fexpr__74650.cljs$core$IFn$_invoke$arity$1(value) : fexpr__74650.call(null,value));
});
/**
 * Fetch a cached [[mc/explainer]] for `schema`, creating one if needed. The cache is flushed whenever the registry
 *   changes.
 */
metabase.util.malli.registry.explainer = (function metabase$util$malli$registry$explainer(schema){
var make_explainer = (function metabase$util$malli$registry$explainer_$_make_explainer(){
var validator_STAR_ = malli.core.validator.cljs$core$IFn$_invoke$arity$1(schema);
var explainer_STAR_ = malli.core.explainer.cljs$core$IFn$_invoke$arity$1(schema);
return (function metabase$util$malli$registry$explainer_$_make_explainer_$_schema_explainer(value){
if(cljs.core.truth_((validator_STAR_.cljs$core$IFn$_invoke$arity$1 ? validator_STAR_.cljs$core$IFn$_invoke$arity$1(value) : validator_STAR_.call(null,value)))){
return null;
} else {
return (explainer_STAR_.cljs$core$IFn$_invoke$arity$1 ? explainer_STAR_.cljs$core$IFn$_invoke$arity$1(value) : explainer_STAR_.call(null,value));
}
});
});
return metabase.util.malli.registry.cached(new cljs.core.Keyword(null,"explainer","explainer",-2002221924),schema,make_explainer);
});
/**
 * [[mc/explain]], but uses a cached explainer from [[explainer]].
 */
metabase.util.malli.registry.explain = (function metabase$util$malli$registry$explain(schema,value){
var fexpr__74671 = metabase.util.malli.registry.explainer(schema);
return (fexpr__74671.cljs$core$IFn$_invoke$arity$1 ? fexpr__74671.cljs$core$IFn$_invoke$arity$1(value) : fexpr__74671.call(null,value));
});
if((typeof metabase !== 'undefined') && (typeof metabase.util !== 'undefined') && (typeof metabase.util.malli !== 'undefined') && (typeof metabase.util.malli.registry !== 'undefined') && (typeof metabase.util.malli.registry.registry_STAR_ !== 'undefined')){
} else {
metabase.util.malli.registry.registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([malli.core.default_schemas(),malli.util.schemas()], 0)));
}
if((typeof metabase !== 'undefined') && (typeof metabase.util !== 'undefined') && (typeof metabase.util.malli !== 'undefined') && (typeof metabase.util.malli.registry !== 'undefined') && (typeof metabase.util.malli.registry.registry !== 'undefined')){
} else {
metabase.util.malli.registry.registry = malli.registry.mutable_registry(metabase.util.malli.registry.registry_STAR_);
}
malli.registry.set_default_registry_BANG_(metabase.util.malli.registry.registry);
/**
 * Register a spec with our Malli spec registry.
 */
metabase.util.malli.registry.register_BANG_ = (function metabase$util$malli$registry$register_BANG_(schema,definition){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metabase.util.malli.registry.registry_STAR_,cljs.core.assoc,schema,definition);

cljs.core.reset_BANG_(metabase.util.malli.registry.cache,cljs.core.PersistentArrayMap.EMPTY);

return null;
});
/**
 * Get the Malli schema for `type` from the registry.
 */
metabase.util.malli.registry.schema = (function metabase$util$malli$registry$schema(type){
return malli.registry.schema(metabase.util.malli.registry.registry,type);
});
/**
 * Add a `:doc/message` option to a `schema`. Tries to merge it in existing vector schemas to avoid unnecessary
 *   indirection.
 */
metabase.util.malli.registry._with_doc = (function metabase$util$malli$registry$_with_doc(schema,docstring){
if(((cljs.core.vector_QMARK_(schema)) && (cljs.core.map_QMARK_(cljs.core.second(schema))))){
var vec__74687 = schema;
var seq__74688 = cljs.core.seq(vec__74687);
var first__74689 = cljs.core.first(seq__74688);
var seq__74688__$1 = cljs.core.next(seq__74688);
var tag = first__74689;
var first__74689__$1 = cljs.core.first(seq__74688__$1);
var seq__74688__$2 = cljs.core.next(seq__74688__$1);
var opts = first__74689__$1;
var args = seq__74688__$2;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword("doc","message","doc/message",-406025466),docstring)], null),args);
} else {
if(cljs.core.vector_QMARK_(schema)){
var vec__74696 = schema;
var seq__74697 = cljs.core.seq(vec__74696);
var first__74698 = cljs.core.first(seq__74697);
var seq__74697__$1 = cljs.core.next(seq__74697);
var tag = first__74698;
var args = seq__74697__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("doc","message","doc/message",-406025466),docstring], null)], null),args);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("doc","message","doc/message",-406025466),docstring], null),schema], null);

}
}
});
/**
 * For REPL/test usage: get the definition of a registered schema from the registry.
 */
metabase.util.malli.registry.resolve_schema = (function metabase$util$malli$registry$resolve_schema(schema){
return malli.core.deref_all.cljs$core$IFn$_invoke$arity$1(malli.core.schema.cljs$core$IFn$_invoke$arity$1(schema));
});

//# sourceMappingURL=metabase.util.malli.registry.js.map
