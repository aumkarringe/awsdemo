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

$CLJS.SHADOW_ENV.setLoaded("malli.registry.js");

goog.provide('malli.registry');
/**
 * @define {string}
 */
malli.registry.mode = goog.define("malli.registry.mode","default");
/**
 * @define {string}
 */
malli.registry.type = goog.define("malli.registry.type","default");

/**
 * @interface
 */
malli.registry.Registry = function(){};

var malli$registry$Registry$_schema$dyn_44447 = (function (this$,type){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (malli.registry._schema[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5351__auto__.call(null,this$,type));
} else {
var m__5349__auto__ = (malli.registry._schema["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5349__auto__.call(null,this$,type));
} else {
throw cljs.core.missing_protocol("Registry.-schema",this$);
}
}
});
/**
 * returns the schema from a registry
 */
malli.registry._schema = (function malli$registry$_schema(this$,type){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schema$arity$2 == null)))))){
return this$.malli$registry$Registry$_schema$arity$2(this$,type);
} else {
return malli$registry$Registry$_schema$dyn_44447(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_44449 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (malli.registry._schemas[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (malli.registry._schemas["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Registry.-schemas",this$);
}
}
});
/**
 * returns all schemas from a registry
 */
malli.registry._schemas = (function malli$registry$_schemas(this$){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schemas$arity$1 == null)))))){
return this$.malli$registry$Registry$_schemas$arity$1(this$);
} else {
return malli$registry$Registry$_schemas$dyn_44449(this$);
}
});

malli.registry.registry_QMARK_ = (function malli$registry$registry_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.malli$registry$Registry$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry43945 = (function (m,fm,meta43946){
this.m = m;
this.fm = fm;
this.meta43946 = meta43946;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry43945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43947,meta43946__$1){
var self__ = this;
var _43947__$1 = this;
return (new malli.registry.t_malli$registry43945(self__.m,self__.fm,meta43946__$1));
}));

(malli.registry.t_malli$registry43945.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43947){
var self__ = this;
var _43947__$1 = this;
return self__.meta43946;
}));

(malli.registry.t_malli$registry43945.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry43945.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry43945.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry43945.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta43946","meta43946",1431871337,null)], null);
}));

(malli.registry.t_malli$registry43945.cljs$lang$type = true);

(malli.registry.t_malli$registry43945.cljs$lang$ctorStr = "malli.registry/t_malli$registry43945");

(malli.registry.t_malli$registry43945.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry43945");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry43945.
 */
malli.registry.__GT_t_malli$registry43945 = (function malli$registry$__GT_t_malli$registry43945(m,fm,meta43946){
return (new malli.registry.t_malli$registry43945(m,fm,meta43946));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry43945(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry44052 = (function (m,meta44053){
this.m = m;
this.meta44053 = meta44053;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry44052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44054,meta44053__$1){
var self__ = this;
var _44054__$1 = this;
return (new malli.registry.t_malli$registry44052(self__.m,meta44053__$1));
}));

(malli.registry.t_malli$registry44052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44054){
var self__ = this;
var _44054__$1 = this;
return self__.meta44053;
}));

(malli.registry.t_malli$registry44052.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry44052.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry44052.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry44052.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta44053","meta44053",1646116084,null)], null);
}));

(malli.registry.t_malli$registry44052.cljs$lang$type = true);

(malli.registry.t_malli$registry44052.cljs$lang$ctorStr = "malli.registry/t_malli$registry44052");

(malli.registry.t_malli$registry44052.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry44052");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry44052.
 */
malli.registry.__GT_t_malli$registry44052 = (function malli$registry$__GT_t_malli$registry44052(m,meta44053){
return (new malli.registry.t_malli$registry44052(m,meta44053));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry44052(m,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.registry = (function malli$registry$registry(_QMARK_registry){
if((_QMARK_registry == null)){
return null;
} else {
if(malli.registry.registry_QMARK_(_QMARK_registry)){
return _QMARK_registry;
} else {
if(cljs.core.map_QMARK_(_QMARK_registry)){
return malli.registry.simple_registry(_QMARK_registry);
} else {
if((((!((_QMARK_registry == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === _QMARK_registry.malli$registry$Registry$))))?true:(((!_QMARK_registry.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry):false)):cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry))){
return _QMARK_registry;
} else {
return null;
}
}
}
}
});
malli.registry.registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(malli.registry.simple_registry(cljs.core.PersistentArrayMap.EMPTY));
malli.registry.set_default_registry_BANG_ = (function malli$registry$set_default_registry_BANG_(_QMARK_registry){
if((!((malli.registry.mode === "strict")))){
return cljs.core.reset_BANG_(malli.registry.registry_STAR_,malli.registry.registry(_QMARK_registry));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("can't set default registry, invalid mode",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),malli.registry.mode,new cljs.core.Keyword(null,"type","type",1174270348),malli.registry.type], null));
}
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry44104 = (function (meta44105){
this.meta44105 = meta44105;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry44104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44106,meta44105__$1){
var self__ = this;
var _44106__$1 = this;
return (new malli.registry.t_malli$registry44104(meta44105__$1));
}));

(malli.registry.t_malli$registry44104.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44106){
var self__ = this;
var _44106__$1 = this;
return self__.meta44105;
}));

(malli.registry.t_malli$registry44104.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry44104.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry44104.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry44104.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44105","meta44105",1176722908,null)], null);
}));

(malli.registry.t_malli$registry44104.cljs$lang$type = true);

(malli.registry.t_malli$registry44104.cljs$lang$ctorStr = "malli.registry/t_malli$registry44104");

(malli.registry.t_malli$registry44104.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry44104");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry44104.
 */
malli.registry.__GT_t_malli$registry44104 = (function malli$registry$__GT_t_malli$registry44104(meta44105){
return (new malli.registry.t_malli$registry44104(meta44105));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry44104(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry44122 = (function (_QMARK_registries,registries,meta44123){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta44123 = meta44123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry44122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44124,meta44123__$1){
var self__ = this;
var _44124__$1 = this;
return (new malli.registry.t_malli$registry44122(self__._QMARK_registries,self__.registries,meta44123__$1));
}));

(malli.registry.t_malli$registry44122.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44124){
var self__ = this;
var _44124__$1 = this;
return self__.meta44123;
}));

(malli.registry.t_malli$registry44122.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry44122.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__44117_SHARP_){
return malli.registry._schema(p1__44117_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry44122.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry44122.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta44123","meta44123",-1376797065,null)], null);
}));

(malli.registry.t_malli$registry44122.cljs$lang$type = true);

(malli.registry.t_malli$registry44122.cljs$lang$ctorStr = "malli.registry/t_malli$registry44122");

(malli.registry.t_malli$registry44122.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry44122");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry44122.
 */
malli.registry.__GT_t_malli$registry44122 = (function malli$registry$__GT_t_malli$registry44122(_QMARK_registries,registries,meta44123){
return (new malli.registry.t_malli$registry44122(_QMARK_registries,registries,meta44123));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5732__auto__ = [];
var len__5726__auto___44490 = arguments.length;
var i__5727__auto___44491 = (0);
while(true){
if((i__5727__auto___44491 < len__5726__auto___44490)){
args__5732__auto__.push((arguments[i__5727__auto___44491]));

var G__44492 = (i__5727__auto___44491 + (1));
i__5727__auto___44491 = G__44492;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_registries){
var registries = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(malli.registry.registry,_QMARK_registries);
return (new malli.registry.t_malli$registry44122(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq44119){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44119));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry44138 = (function (db,meta44139){
this.db = db;
this.meta44139 = meta44139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry44138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44140,meta44139__$1){
var self__ = this;
var _44140__$1 = this;
return (new malli.registry.t_malli$registry44138(self__.db,meta44139__$1));
}));

(malli.registry.t_malli$registry44138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44140){
var self__ = this;
var _44140__$1 = this;
return self__.meta44139;
}));

(malli.registry.t_malli$registry44138.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry44138.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry44138.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry44138.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta44139","meta44139",973826858,null)], null);
}));

(malli.registry.t_malli$registry44138.cljs$lang$type = true);

(malli.registry.t_malli$registry44138.cljs$lang$ctorStr = "malli.registry/t_malli$registry44138");

(malli.registry.t_malli$registry44138.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry44138");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry44138.
 */
malli.registry.__GT_t_malli$registry44138 = (function malli$registry$__GT_t_malli$registry44138(db,meta44139){
return (new malli.registry.t_malli$registry44138(db,meta44139));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry44138(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry44151 = (function (meta44152){
this.meta44152 = meta44152;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry44151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44153,meta44152__$1){
var self__ = this;
var _44153__$1 = this;
return (new malli.registry.t_malli$registry44151(meta44152__$1));
}));

(malli.registry.t_malli$registry44151.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44153){
var self__ = this;
var _44153__$1 = this;
return self__.meta44152;
}));

(malli.registry.t_malli$registry44151.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry44151.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry44151.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry44151.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44152","meta44152",-260975648,null)], null);
}));

(malli.registry.t_malli$registry44151.cljs$lang$type = true);

(malli.registry.t_malli$registry44151.cljs$lang$ctorStr = "malli.registry/t_malli$registry44151");

(malli.registry.t_malli$registry44151.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry44151");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry44151.
 */
malli.registry.__GT_t_malli$registry44151 = (function malli$registry$__GT_t_malli$registry44151(meta44152){
return (new malli.registry.t_malli$registry44151(meta44152));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry44151(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry44193 = (function (meta44194){
this.meta44194 = meta44194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry44193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44195,meta44194__$1){
var self__ = this;
var _44195__$1 = this;
return (new malli.registry.t_malli$registry44193(meta44194__$1));
}));

(malli.registry.t_malli$registry44193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44195){
var self__ = this;
var _44195__$1 = this;
return self__.meta44194;
}));

(malli.registry.t_malli$registry44193.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry44193.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry44193.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry44193.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta44194","meta44194",1424079017,null)], null);
}));

(malli.registry.t_malli$registry44193.cljs$lang$type = true);

(malli.registry.t_malli$registry44193.cljs$lang$ctorStr = "malli.registry/t_malli$registry44193");

(malli.registry.t_malli$registry44193.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry44193");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry44193.
 */
malli.registry.__GT_t_malli$registry44193 = (function malli$registry$__GT_t_malli$registry44193(meta44194){
return (new malli.registry.t_malli$registry44193(meta44194));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry44193(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry44309 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta44310){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta44310 = meta44310;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry44309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44311,meta44310__$1){
var self__ = this;
var _44311__$1 = this;
return (new malli.registry.t_malli$registry44309(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta44310__$1));
}));

(malli.registry.t_malli$registry44309.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44311){
var self__ = this;
var _44311__$1 = this;
return self__.meta44310;
}));

(malli.registry.t_malli$registry44309.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry44309.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5002__auto__ = (function (){var fexpr__44358 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__44358.cljs$core$IFn$_invoke$arity$1 ? fexpr__44358.cljs$core$IFn$_invoke$arity$1(name) : fexpr__44358.call(null,name));
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var temp__5804__auto__ = (function (){var G__44368 = name;
var G__44369 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__44368,G__44369) : self__.provider.call(null,G__44368,G__44369));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var schema = temp__5804__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cache_STAR_,cljs.core.assoc,name,schema);

return schema;
} else {
return null;
}
}
}));

(malli.registry.t_malli$registry44309.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry44309.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta44310","meta44310",1511435506,null)], null);
}));

(malli.registry.t_malli$registry44309.cljs$lang$type = true);

(malli.registry.t_malli$registry44309.cljs$lang$ctorStr = "malli.registry/t_malli$registry44309");

(malli.registry.t_malli$registry44309.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"malli.registry/t_malli$registry44309");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry44309.
 */
malli.registry.__GT_t_malli$registry44309 = (function malli$registry$__GT_t_malli$registry44309(default_registry,provider,cache_STAR_,registry_STAR_,meta44310){
return (new malli.registry.t_malli$registry44309(default_registry,provider,cache_STAR_,registry_STAR_,meta44310));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry44309(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
});
/**
 * finds a schema from a registry
 */
malli.registry.schema = (function malli$registry$schema(registry,type){
return malli.registry._schema(registry,type);
});
/**
 * finds all schemas from a registry
 */
malli.registry.schemas = (function malli$registry$schemas(registry){
return malli.registry._schemas(registry);
});

//# sourceMappingURL=malli.registry.js.map
