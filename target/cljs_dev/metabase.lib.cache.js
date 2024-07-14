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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.cache.js");

goog.provide('metabase.lib.cache');
goog.scope(function(){
  metabase.lib.cache.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Caching wrapper for use in [[side-channel-cache]].
 * 
 *   Uses an `(atom {})` as the cache and any CLJS value as the `subkey`.
 */
metabase.lib.cache.atomic_map_cache_fn = (function metabase$lib$cache$atomic_map_cache_fn(var_args){
var G__76165 = arguments.length;
switch (G__76165) {
case 0:
return metabase.lib.cache.atomic_map_cache_fn.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return metabase.lib.cache.atomic_map_cache_fn.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return metabase.lib.cache.atomic_map_cache_fn.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.cache.atomic_map_cache_fn.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(metabase.lib.cache.atomic_map_cache_fn.cljs$core$IFn$_invoke$arity$3 = (function (cache,subkey,_x){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cache),subkey);
}));

(metabase.lib.cache.atomic_map_cache_fn.cljs$core$IFn$_invoke$arity$4 = (function (cache,subkey,_x,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cache,cljs.core.assoc,subkey,value);
}));

(metabase.lib.cache.atomic_map_cache_fn.cljs$lang$maxFixedArity = 4);

/**
 * Caching wrapper for use in [[side-channel-cache*]].
 * 
 *   Uses a two-layer cache: the outer layer is a vanilla JS object with string `subkey`s as its keys. The values are
 *   `WeakMap`s, using the input value `x` as the key and holding the cached result.
 * 
 *   For example, this works for caching by `:database-id` and then by legacy query object.
 */
metabase.lib.cache.js_weak_map_cache_fn = (function metabase$lib$cache$js_weak_map_cache_fn(var_args){
var G__76180 = arguments.length;
switch (G__76180) {
case 0:
return metabase.lib.cache.js_weak_map_cache_fn.cljs$core$IFn$_invoke$arity$0();

break;
case 3:
return metabase.lib.cache.js_weak_map_cache_fn.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return metabase.lib.cache.js_weak_map_cache_fn.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.cache.js_weak_map_cache_fn.cljs$core$IFn$_invoke$arity$0 = (function (){
return ({});
}));

(metabase.lib.cache.js_weak_map_cache_fn.cljs$core$IFn$_invoke$arity$3 = (function (cache,subkey,x){
var temp__5804__auto__ = metabase.lib.cache.goog$module$goog$object.get(cache,subkey);
if(cljs.core.truth_(temp__5804__auto__)){
var inner_cache = temp__5804__auto__;
return inner_cache.get(x);
} else {
return null;
}
}));

(metabase.lib.cache.js_weak_map_cache_fn.cljs$core$IFn$_invoke$arity$4 = (function (cache,subkey,x,value){
var inner_cache = metabase.lib.cache.goog$module$goog$object.setWithReturnValueIfNotSet(cache,subkey,(function (){
return (new WeakMap());
}));
return inner_cache.set(x,value);
}));

(metabase.lib.cache.js_weak_map_cache_fn.cljs$lang$maxFixedArity = 4);

/**
 * (CLJS only; this is a pass-through in CLJ.)
 * 
 *   Attaches a JS property `__mbcache` to `host` (a JS object or CLJS map) if it doesn't already have one.
 * 
 *   This cache forms a "personal" cache attached to `host`. `subkey` is used as the key into that cache, and on a cache
 *   miss the value is computed with `(f x)`.
 * 
 *   If the `host` is a CLJS value like a map, the cache is ignored by CLJS since it's a raw JS property. Any change to
 *   the CLJS map will return a new object, effectively invalidating the cache.
 * 
 *   If the `host` is a JS object, it cannot have had `Object.freeze()` called on it before the first call to
 *   [[side-channel-cache*]]. The `host` JS object must also be treated as immutable, since if it is modified the cache will
 *   contain outdated values. You have been warned.
 * 
 *   The caches are passed both `subkey` and the input value `x` to use as keys. Which of these are actually used as keys
 *   is up to the `cache-fn`.
 * 
 *   If there is no existing value in the cache for `subkey` and `x`, `(f x)` is called the result is cached for `subkey`
 *   and `x`.
 * 
 *   Options:
 *   - The optional `:cache-fn` option defines how the cache is implemented.
 *  It should be a function with 0-arity, 3-arity, and 4-arity forms, and works like this:
 *  - `(cache-fn)` returns a new, empty cache.
 *  - `(cache-fn cache subkey x)` looks up `subkey` and `x` (the input value) in the cache.
 *    Returns the value, or `nil`.
 *  - `(cache-fn cache subkey x value)` caches `value` as the value for `subkey` and `x`.
 *    Returns nothing - the cache is mutable.
 * 
 *  By default, the cache is an `(atom {})` with `get` and `(swap! ... assoc ...)`; see [[atomic-map-cache-fn]].
 *   - `:force? true` causes the caching to be used even if the `host` does not meet the usual safety check of
 *  being a vanilla JS object or a CLJS map. (Eg. if the `host` is an instance of a JS class.)
 */
metabase.lib.cache.side_channel_cache_STAR_ = (function metabase$lib$cache$side_channel_cache_STAR_(subkey,host,x,f,p__76221){
var map__76222 = p__76221;
var map__76222__$1 = cljs.core.__destructure_map(map__76222);
var cache_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__76222__$1,new cljs.core.Keyword(null,"cache-fn","cache-fn",5561939),metabase.lib.cache.atomic_map_cache_fn);
var force_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76222__$1,new cljs.core.Keyword(null,"force?","force?",1839038675));

if(cljs.core.truth_((function (){var or__5002__auto__ = force_QMARK_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return ((cljs.core.object_QMARK_(host)) || (cljs.core.map_QMARK_(host)));
}
})())){
if(cljs.core.truth_(host.__mbcache)){
} else {
(host.__mbcache = (cache_fn.cljs$core$IFn$_invoke$arity$0 ? cache_fn.cljs$core$IFn$_invoke$arity$0() : cache_fn.call(null)));
}

var temp__5802__auto__ = host.__mbcache;
if(cljs.core.truth_(temp__5802__auto__)){
var cache = temp__5802__auto__;
var temp__5802__auto____$1 = (cache_fn.cljs$core$IFn$_invoke$arity$3 ? cache_fn.cljs$core$IFn$_invoke$arity$3(cache,subkey,x) : cache_fn.call(null,cache,subkey,x));
if(cljs.core.truth_(temp__5802__auto____$1)){
var cached = temp__5802__auto____$1;
return cached;
} else {
var value = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
(cache_fn.cljs$core$IFn$_invoke$arity$4 ? cache_fn.cljs$core$IFn$_invoke$arity$4(cache,subkey,x,value) : cache_fn.call(null,cache,subkey,x,value));

return value;
}
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
}
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
}
});
/**
 * (CLJS only; this is a pass-through in CLJ.)
 * 
 *   Attaches a JS property `__mbcache` to `host` (a JS object or CLJS map) if it doesn't already have one.
 * 
 *   This cache forms a "personal" cache attached to `host`. `subkey` is used as the key into that cache, and on a cache
 *   miss the value is computed with `(f x)`.
 * 
 *   The 3-arity uses `x` and both the cache host and the value passed to `f`. The 5-arity has separate `host` and `x`.
 * 
 *   If the `host` is a CLJS value like a map, the cache is ignored by CLJS since it's a raw JS property. Any change to
 *   the CLJS map will return a new object, effectively invalidating the cache.
 * 
 *   If the `host` is a JS object, it cannot have had `Object.freeze()` called on it before the first call to
 *   [[side-channel-cache*]]. The `host` JS object must also be treated as immutable, since if it is modified the cache will
 *   contain outdated values. You have been warned.
 * 
 *   If there is no existing value at `subkey` in the cache, this will call `(f x)` and cache the result at `subkey`.
 * 
 *   The cache is an `(atom {})` and any CLJS value can be used as the `subkey`; typically strings are used.
 * 
 *   Options:
 *   - `:force? true` causes the caching to be used even if the `host` does not meet the usual safety check of
 *  being a vanilla JS object or a CLJS map. (Eg. if the `host` is an instance of a JS class.)
 */
metabase.lib.cache.side_channel_cache = (function metabase$lib$cache$side_channel_cache(var_args){
var G__76225 = arguments.length;
switch (G__76225) {
case 3:
return metabase.lib.cache.side_channel_cache.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return metabase.lib.cache.side_channel_cache.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return metabase.lib.cache.side_channel_cache.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.cache.side_channel_cache.cljs$core$IFn$_invoke$arity$3 = (function (subkey,x,f){
return metabase.lib.cache.side_channel_cache.cljs$core$IFn$_invoke$arity$4(subkey,x,f,false);
}));

(metabase.lib.cache.side_channel_cache.cljs$core$IFn$_invoke$arity$4 = (function (subkey,x,f,force_QMARK_){
return metabase.lib.cache.side_channel_cache_STAR_(subkey,x,x,f,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cache-fn","cache-fn",5561939),metabase.lib.cache.atomic_map_cache_fn,new cljs.core.Keyword(null,"force?","force?",1839038675),force_QMARK_], null));
}));

(metabase.lib.cache.side_channel_cache.cljs$core$IFn$_invoke$arity$5 = (function (subkey,host,x,f,opts){
return metabase.lib.cache.side_channel_cache_STAR_(subkey,host,x,f,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cache-fn","cache-fn",5561939),metabase.lib.cache.atomic_map_cache_fn], null),opts], 0)));
}));

(metabase.lib.cache.side_channel_cache.cljs$lang$maxFixedArity = 5);

/**
 * See [[side-channel-cache]] for the overview.
 * 
 *   This version uses a JS `WeakMap` as the cache and JS objects as the `subkey`s.
 */
metabase.lib.cache.side_channel_cache_weak_refs = (function metabase$lib$cache$side_channel_cache_weak_refs(subkey,host,x,f,opts){
return metabase.lib.cache.side_channel_cache_STAR_(subkey,host,x,f,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cache-fn","cache-fn",5561939),metabase.lib.cache.js_weak_map_cache_fn], null),opts], 0)));
});

//# sourceMappingURL=metabase.lib.cache.js.map
