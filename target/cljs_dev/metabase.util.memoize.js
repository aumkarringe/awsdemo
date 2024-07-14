var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./cljs.cache.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.util.memoize.js");

goog.provide('metabase.util.memoize');

/**
* @constructor
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IDeref}
*/
metabase.util.memoize.RetryingDelay = (function (fun,available_QMARK_,value){
this.fun = fun;
this.available_QMARK_ = available_QMARK_;
this.value = value;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 1;
});
(metabase.util.memoize.RetryingDelay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.available_QMARK_)){
return self__.value;
} else {
var v = (self__.fun.cljs$core$IFn$_invoke$arity$0 ? self__.fun.cljs$core$IFn$_invoke$arity$0() : self__.fun.call(null));
(self__.value = v);

(self__.available_QMARK_ = true);

return v;
}
}));

(metabase.util.memoize.RetryingDelay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.available_QMARK_;
}));

(metabase.util.memoize.RetryingDelay.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fun","fun",375373482,null),cljs.core.with_meta(new cljs.core.Symbol(null,"available?","available?",-1894014505,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411),true], null))], null);
}));

(metabase.util.memoize.RetryingDelay.cljs$lang$type = true);

(metabase.util.memoize.RetryingDelay.cljs$lang$ctorStr = "metabase.util.memoize/RetryingDelay");

(metabase.util.memoize.RetryingDelay.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"metabase.util.memoize/RetryingDelay");
}));

/**
 * Positional factory function for metabase.util.memoize/RetryingDelay.
 */
metabase.util.memoize.__GT_RetryingDelay = (function metabase$util$memoize$__GT_RetryingDelay(fun,available_QMARK_,value){
return (new metabase.util.memoize.RetryingDelay(fun,available_QMARK_,value));
});

metabase.util.memoize.d_lay = (function metabase$util$memoize$d_lay(fun){
return metabase.util.memoize.__GT_RetryingDelay(fun,false,null);
});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
metabase.util.memoize.t_metabase$util$memoize74657 = (function (v,meta74658){
this.v = v;
this.meta74658 = meta74658;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(metabase.util.memoize.t_metabase$util$memoize74657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74659,meta74658__$1){
var self__ = this;
var _74659__$1 = this;
return (new metabase.util.memoize.t_metabase$util$memoize74657(self__.v,meta74658__$1));
}));

(metabase.util.memoize.t_metabase$util$memoize74657.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74659){
var self__ = this;
var _74659__$1 = this;
return self__.meta74658;
}));

(metabase.util.memoize.t_metabase$util$memoize74657.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.v;
}));

(metabase.util.memoize.t_metabase$util$memoize74657.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta74658","meta74658",-1991291854,null)], null);
}));

(metabase.util.memoize.t_metabase$util$memoize74657.cljs$lang$type = true);

(metabase.util.memoize.t_metabase$util$memoize74657.cljs$lang$ctorStr = "metabase.util.memoize/t_metabase$util$memoize74657");

(metabase.util.memoize.t_metabase$util$memoize74657.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"metabase.util.memoize/t_metabase$util$memoize74657");
}));

/**
 * Positional factory function for metabase.util.memoize/t_metabase$util$memoize74657.
 */
metabase.util.memoize.__GT_t_metabase$util$memoize74657 = (function metabase$util$memoize$__GT_t_metabase$util$memoize74657(v,meta74658){
return (new metabase.util.memoize.t_metabase$util$memoize74657(v,meta74658));
});


/**
 * If a value is not already derefable, wrap it up.
 * 
 *   This is used to help rebuild seed/base maps passed in to the various
 *   caches so that they conform to core.memoize's world view.
 */
metabase.util.memoize.make_derefable = (function metabase$util$memoize$make_derefable(v){
if((v instanceof cljs.core.IDeref)){
return v;
} else {
return (new metabase.util.memoize.t_metabase$util$memoize74657(v,cljs.core.PersistentArrayMap.EMPTY));
}
});
/**
 * Given a seed/base map, ensure all the values in it are derefable.
 */
metabase.util.memoize.derefable_seed = (function metabase$util$memoize$derefable_seed(seed){
return cljs.core.update_vals(seed,metabase.util.memoize.make_derefable);
});

/**
* @constructor
 * @implements {cljs.cache.CacheProtocol}
*/
metabase.util.memoize.PluggableMemoization = (function (f,cache){
this.f = f;
this.cache = cache;
});
(metabase.util.memoize.PluggableMemoization.prototype.cljs$cache$CacheProtocol$ = cljs.core.PROTOCOL_SENTINEL);

(metabase.util.memoize.PluggableMemoization.prototype.cljs$cache$CacheProtocol$has_QMARK_$arity$2 = (function (_,item){
var self__ = this;
var ___$1 = this;
return cljs.cache.has_QMARK_(self__.cache,item);
}));

(metabase.util.memoize.PluggableMemoization.prototype.cljs$cache$CacheProtocol$hit$arity$2 = (function (_,item){
var self__ = this;
var ___$1 = this;
return (new metabase.util.memoize.PluggableMemoization(self__.f,cljs.cache.hit(self__.cache,item)));
}));

(metabase.util.memoize.PluggableMemoization.prototype.cljs$cache$CacheProtocol$miss$arity$3 = (function (_,item,result){
var self__ = this;
var ___$1 = this;
return (new metabase.util.memoize.PluggableMemoization(self__.f,cljs.cache.miss(self__.cache,item,result)));
}));

(metabase.util.memoize.PluggableMemoization.prototype.cljs$cache$CacheProtocol$evict$arity$2 = (function (_,key){
var self__ = this;
var ___$1 = this;
return (new metabase.util.memoize.PluggableMemoization(self__.f,cljs.cache.evict(self__.cache,key)));
}));

(metabase.util.memoize.PluggableMemoization.prototype.cljs$cache$CacheProtocol$lookup$arity$2 = (function (_,item){
var self__ = this;
var ___$1 = this;
return cljs.cache.lookup(self__.cache,item,null);
}));

(metabase.util.memoize.PluggableMemoization.prototype.cljs$cache$CacheProtocol$lookup$arity$3 = (function (_,item,not_found){
var self__ = this;
var ___$1 = this;
return cljs.cache.lookup(self__.cache,item,(new cljs.core.Delay((function (){
return not_found;
}),null)));
}));

(metabase.util.memoize.PluggableMemoization.prototype.cljs$cache$CacheProtocol$seed$arity$2 = (function (_,base){
var self__ = this;
var ___$1 = this;
return (new metabase.util.memoize.PluggableMemoization(self__.f,cljs.cache.seed(self__.cache,metabase.util.memoize.derefable_seed(base))));
}));

(metabase.util.memoize.PluggableMemoization.prototype.toString = (function (){
var self__ = this;
var _ = this;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.cache);
}));

(metabase.util.memoize.PluggableMemoization.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"cache","cache",403508473,null)], null);
}));

(metabase.util.memoize.PluggableMemoization.cljs$lang$type = true);

(metabase.util.memoize.PluggableMemoization.cljs$lang$ctorStr = "metabase.util.memoize/PluggableMemoization");

(metabase.util.memoize.PluggableMemoization.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"metabase.util.memoize/PluggableMemoization");
}));

/**
 * Positional factory function for metabase.util.memoize/PluggableMemoization.
 */
metabase.util.memoize.__GT_PluggableMemoization = (function metabase$util$memoize$__GT_PluggableMemoization(f,cache){
return (new metabase.util.memoize.PluggableMemoization(f,cache));
});

/**
 * Returns a function's argument transformer.
 */
metabase.util.memoize.args_fn = (function metabase$util$memoize$args_fn(p1__74713_SHARP_){
var or__5002__auto__ = new cljs.core.Keyword("metabase.util.memoize","args-fn","metabase.util.memoize/args-fn",1057252156).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__74713_SHARP_));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.identity;
}
});
/**
 * The basic hit/miss logic for the cache system based on `cache/through`.
 *   Clojure delays are used to hold the cache value.
 */
metabase.util.memoize.through_STAR_ = (function metabase$util$memoize$through_STAR_(cache,f,args,item){
return cljs.cache.through.cljs$core$IFn$_invoke$arity$4((function (f__$1,_){
return metabase.util.memoize.d_lay((function (){
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(args) : f__$1.call(null,args));
}));
}),(function (p1__74714_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,p1__74714_SHARP_);
}),cache,item);
});
/**
 * Given a function, an atom containing a (pluggable memoization cache), and
 *   and cache key function, return a new function that behaves like the original
 *   function except it is cached, based on its arguments.
 */
metabase.util.memoize.cached_function = (function metabase$util$memoize$cached_function(f,cache_atom,ckey_fn){
return (function() { 
var G__74741__delegate = function (args){
var ckey = (function (){var or__5002__auto__ = (ckey_fn.cljs$core$IFn$_invoke$arity$1 ? ckey_fn.cljs$core$IFn$_invoke$arity$1(args) : ckey_fn.call(null,args));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var cs = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cache_atom,metabase.util.memoize.through_STAR_,f,args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ckey], 0));
var val = cljs.cache.lookup(cs,ckey,new cljs.core.Keyword("metabase.util.memoize","not-found","metabase.util.memoize/not-found",-2067188790));
if(cljs.core.truth_(val)){
var n = (0);
var v = cljs.core.deref(val);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metabase.util.memoize","not-found","metabase.util.memoize/not-found",-2067188790),v)){
var temp__5804__auto__ = cljs.cache.lookup(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cache_atom,metabase.util.memoize.through_STAR_,f,args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ckey], 0)),ckey,new cljs.core.Keyword("metabase.util.memoize","not-found","metabase.util.memoize/not-found",-2067188790));
if(cljs.core.truth_(temp__5804__auto__)){
var v_SINGLEQUOTE_ = temp__5804__auto__;
if((n < (10))){
var G__74742 = (n + (1));
var G__74743 = cljs.core.deref(v_SINGLEQUOTE_);
n = G__74742;
v = G__74743;
continue;
} else {
return null;
}
} else {
return null;
}
} else {
return v;
}
break;
}
} else {
return null;
}
};
var G__74741 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__74744__i = 0, G__74744__a = new Array(arguments.length -  0);
while (G__74744__i < G__74744__a.length) {G__74744__a[G__74744__i] = arguments[G__74744__i + 0]; ++G__74744__i;}
  args = new cljs.core.IndexedSeq(G__74744__a,0,null);
} 
return G__74741__delegate.call(this,args);};
G__74741.cljs$lang$maxFixedArity = 0;
G__74741.cljs$lang$applyTo = (function (arglist__74745){
var args = cljs.core.seq(arglist__74745);
return G__74741__delegate(args);
});
G__74741.cljs$core$IFn$_invoke$arity$variadic = G__74741__delegate;
return G__74741;
})()
;
});
/**
 * Build a pluggable memoized version of a function. Given a function and a
 *   (pluggable memoized) cache, and an optional seed (hash map of arguments to
 *   return values), return a cached version of that function.
 * 
 *   If you want to build your own cached function, perhaps with combined caches
 *   or customized caches, this is the preferred way to do so now.
 */
metabase.util.memoize.memoizer = (function metabase$util$memoize$memoizer(var_args){
var G__74716 = arguments.length;
switch (G__74716) {
case 2:
return metabase.util.memoize.memoizer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.util.memoize.memoizer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.util.memoize.memoizer.cljs$core$IFn$_invoke$arity$2 = (function (f,cache){
var cache__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((new metabase.util.memoize.PluggableMemoization(f,cache)));
var ckey_fn = metabase.util.memoize.args_fn(f);
return metabase.util.memoize.cached_function(f,cache__$1,ckey_fn);
}));

(metabase.util.memoize.memoizer.cljs$core$IFn$_invoke$arity$3 = (function (f,cache,seed){
var cache__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((new metabase.util.memoize.PluggableMemoization(f,cache)).cljs$cache$CacheProtocol$seed$arity$2(null,metabase.util.memoize.derefable_seed(seed)));
var ckey_fn = metabase.util.memoize.args_fn(f);
return metabase.util.memoize.cached_function(f,cache__$1,ckey_fn);
}));

(metabase.util.memoize.memoizer.cljs$lang$maxFixedArity = 3);

/**
 * Works the same as the basic memoization function (i.e.
 * `core.memoize` except when a given threshold is breached.
 * When the threshold is passed, the cache will expel the
 * **L**east **R**ecently **U**sed element in favor of the new.
 */
metabase.util.memoize.lru = (function metabase$util$memoize$lru(var_args){
var G__74725 = arguments.length;
switch (G__74725) {
case 1:
return metabase.util.memoize.lru.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.util.memoize.lru.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.util.memoize.lru.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return metabase.util.memoize.lru.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.util.memoize.lru.cljs$core$IFn$_invoke$arity$1 = (function (f){
return metabase.util.memoize.lru.cljs$core$IFn$_invoke$arity$4(f,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("lru","threshold","lru/threshold",204067006),(32));
}));

(metabase.util.memoize.lru.cljs$core$IFn$_invoke$arity$2 = (function (f,base){
return metabase.util.memoize.lru.cljs$core$IFn$_invoke$arity$4(f,base,new cljs.core.Keyword("lru","threshold","lru/threshold",204067006),(32));
}));

(metabase.util.memoize.lru.cljs$core$IFn$_invoke$arity$3 = (function (f,tkey,threshold){
return metabase.util.memoize.lru.cljs$core$IFn$_invoke$arity$4(f,cljs.core.PersistentArrayMap.EMPTY,tkey,threshold);
}));

(metabase.util.memoize.lru.cljs$core$IFn$_invoke$arity$4 = (function (f,base,key,threshold){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword("lru","threshold","lru/threshold",204067006))){
} else {
throw (new Error(["Assert failed: ",["wrong parameter key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join(''),"\n","(= key :lru/threshold)"].join('')));
}

return metabase.util.memoize.memoizer.cljs$core$IFn$_invoke$arity$3(f,cljs.cache.lru_cache_factory.cljs$core$IFn$_invoke$arity$variadic(cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"threshold","threshold",204221583),threshold], 0)),base);
}));

(metabase.util.memoize.lru.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=metabase.util.memoize.js.map
