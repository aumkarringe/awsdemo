var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.core.protocols.js");
require("./clojure.string.js");
require("./clojure.walk.js");
require("./medley.core.js");
require("./metabase.lib.cache.js");
require("./metabase.lib.metadata.protocols.js");
require("./metabase.lib.util.js");
require("./metabase.util.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.js.metadata.js");

goog.provide('metabase.lib.js.metadata');
goog.scope(function(){
  metabase.lib.js.metadata.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Even tho [[u/->kebab-case-en]] has LRU memoization, plain memoization is significantly faster, and since the keys
 *   we're parsing here are bounded it's fine to memoize this stuff forever.
 */
metabase.lib.js.metadata.memoized_kebab_key = cljs.core.memoize(metabase.util.__GT_kebab_case_en);
metabase.lib.js.metadata.object_get = (function metabase$lib$js$metadata$object_get(obj,k){
if(cljs.core.truth_((function (){var and__5000__auto__ = obj;
if(cljs.core.truth_(and__5000__auto__)){
return k in obj;
} else {
return and__5000__auto__;
}
})())){
return metabase.lib.js.metadata.goog$module$goog$object.get(obj,k);
} else {
return null;
}
});
/**
 * Convert a JS object of *any* class to a ClojureScript object.
 */
metabase.lib.js.metadata.obj__GT_clj = (function metabase$lib$js$metadata$obj__GT_clj(var_args){
var G__79847 = arguments.length;
switch (G__79847) {
case 2:
return metabase.lib.js.metadata.obj__GT_clj.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.js.metadata.obj__GT_clj.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.js.metadata.obj__GT_clj.cljs$core$IFn$_invoke$arity$2 = (function (xform,obj){
return metabase.lib.js.metadata.obj__GT_clj.cljs$core$IFn$_invoke$arity$3(xform,obj,cljs.core.PersistentArrayMap.EMPTY);
}));

(metabase.lib.js.metadata.obj__GT_clj.cljs$core$IFn$_invoke$arity$3 = (function (xform,obj,p__79848){
var map__79849 = p__79848;
var map__79849__$1 = cljs.core.__destructure_map(map__79849);
var use_plain_object_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__79849__$1,new cljs.core.Keyword(null,"use-plain-object?","use-plain-object?",-1174595475),true);
if(cljs.core.map_QMARK_(obj)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,xform,obj);
} else {
var temp__5802__auto__ = (cljs.core.truth_(use_plain_object_QMARK_)?(function (){var G__79850 = metabase.lib.js.metadata.object_get(obj,"_plainObject");
var G__79850__$1 = (((G__79850 == null))?null:cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(G__79850));
if((G__79850__$1 == null)){
return null;
} else {
return cljs.core.not_empty(G__79850__$1);
}
})():null);
if(cljs.core.truth_(temp__5802__auto__)){
var plain_object = temp__5802__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,xform,plain_object);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,metabase.lib.js.metadata.object_get(obj,k)], null);
})),cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__79851){
var vec__79852 = p__79851;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79852,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79852,(1),null);
return typeof v === 'function';
})),xform),cljs.core.js_keys(obj));
}
}
}));

(metabase.lib.js.metadata.obj__GT_clj.cljs$lang$maxFixedArity = 3);

if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.js !== 'undefined') && (typeof metabase.lib.js.metadata !== 'undefined') && (typeof metabase.lib.js.metadata.excluded_keys !== 'undefined')){
} else {
metabase.lib.js.metadata.excluded_keys = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__79855 = cljs.core.get_global_hierarchy;
return (fexpr__79855.cljs$core$IFn$_invoke$arity$0 ? fexpr__79855.cljs$core$IFn$_invoke$arity$0() : fexpr__79855.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.js.metadata","excluded-keys"),cljs.core.keyword,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
metabase.lib.js.metadata.excluded_keys.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return null;
}));
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.js !== 'undefined') && (typeof metabase.lib.js.metadata !== 'undefined') && (typeof metabase.lib.js.metadata.parse_field_fn !== 'undefined')){
} else {
/**
 * Return a function with the signature
 * 
 *  (f k v) => v'
 * 
 *   For parsing an individual field.
 */
metabase.lib.js.metadata.parse_field_fn = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__79856 = cljs.core.get_global_hierarchy;
return (fexpr__79856.cljs$core$IFn$_invoke$arity$0 ? fexpr__79856.cljs$core$IFn$_invoke$arity$0() : fexpr__79856.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.js.metadata","parse-field-fn"),cljs.core.keyword,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
metabase.lib.js.metadata.parse_field_fn.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_object_type){
return null;
}));
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.js !== 'undefined') && (typeof metabase.lib.js.metadata !== 'undefined') && (typeof metabase.lib.js.metadata.lib_type !== 'undefined')){
} else {
/**
 * The metadata type that should be attached the sorts of metadatas with the `:lib/type` key, e.g. `:metadata/table`.
 */
metabase.lib.js.metadata.lib_type = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__79857 = cljs.core.get_global_hierarchy;
return (fexpr__79857.cljs$core$IFn$_invoke$arity$0 ? fexpr__79857.cljs$core$IFn$_invoke$arity$0() : fexpr__79857.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.js.metadata","lib-type"),cljs.core.keyword,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.js !== 'undefined') && (typeof metabase.lib.js.metadata !== 'undefined') && (typeof metabase.lib.js.metadata.rename_key_fn !== 'undefined')){
} else {
/**
 * Returns a function of the keys, either renaming each one or preserving it.
 *   If this function returns nil for a given key, the original key is preserved.
 *   Use [[excluded-keys]] to drop keys from the input.
 * 
 *   Defaults to nil, which means no renaming is done.
 */
metabase.lib.js.metadata.rename_key_fn = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__79858 = cljs.core.get_global_hierarchy;
return (fexpr__79858.cljs$core$IFn$_invoke$arity$0 ? fexpr__79858.cljs$core$IFn$_invoke$arity$0() : fexpr__79858.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.js.metadata","rename-key-fn"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
metabase.lib.js.metadata.rename_key_fn.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return null;
}));
metabase.lib.js.metadata.parse_object_xform = (function metabase$lib$js$metadata$parse_object_xform(object_type){
var excluded_keys_set = metabase.lib.js.metadata.excluded_keys.cljs$core$IFn$_invoke$arity$1(object_type);
var parse_field = metabase.lib.js.metadata.parse_field_fn.cljs$core$IFn$_invoke$arity$1(object_type);
var rename_key = metabase.lib.js.metadata.rename_key_fn.cljs$core$IFn$_invoke$arity$1(object_type);
return cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__79860){
var vec__79862 = p__79860;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79862,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79862,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__79866 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(metabase.lib.js.metadata.memoized_kebab_key(k));
if(cljs.core.truth_(rename_key)){
return (function (p1__79859_SHARP_){
var or__5002__auto__ = (rename_key.cljs$core$IFn$_invoke$arity$1 ? rename_key.cljs$core$IFn$_invoke$arity$1(p1__79859_SHARP_) : rename_key.call(null,p1__79859_SHARP_));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return p1__79859_SHARP_;
}
})(G__79866);
} else {
return G__79866;
}
})(),v], null);
})),((cljs.core.empty_QMARK_(excluded_keys_set))?cljs.core.identity:cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__79868){
var vec__79869 = p__79868;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79869,(0),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79869,(1),null);
return cljs.core.contains_QMARK_(excluded_keys_set,k);
}))),((cljs.core.not(parse_field))?cljs.core.identity:cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__79872){
var vec__79873 = p__79872;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79873,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79873,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(parse_field.cljs$core$IFn$_invoke$arity$2 ? parse_field.cljs$core$IFn$_invoke$arity$2(k,v) : parse_field.call(null,k,v))], null);
}))));
});
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.js !== 'undefined') && (typeof metabase.lib.js.metadata !== 'undefined') && (typeof metabase.lib.js.metadata.parse_object_fn_STAR_ !== 'undefined')){
} else {
metabase.lib.js.metadata.parse_object_fn_STAR_ = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__79876 = cljs.core.get_global_hierarchy;
return (fexpr__79876.cljs$core$IFn$_invoke$arity$0 ? fexpr__79876.cljs$core$IFn$_invoke$arity$0() : fexpr__79876.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.js.metadata","parse-object-fn*"),(function (object_type,_opts){
return object_type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
metabase.lib.js.metadata.parse_object_fn = (function metabase$lib$js$metadata$parse_object_fn(var_args){
var G__79878 = arguments.length;
switch (G__79878) {
case 1:
return metabase.lib.js.metadata.parse_object_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.js.metadata.parse_object_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.js.metadata.parse_object_fn.cljs$core$IFn$_invoke$arity$1 = (function (object_type){
return metabase.lib.js.metadata.parse_object_fn_STAR_.cljs$core$IFn$_invoke$arity$2(object_type,cljs.core.PersistentArrayMap.EMPTY);
}));

(metabase.lib.js.metadata.parse_object_fn.cljs$core$IFn$_invoke$arity$2 = (function (object_type,opts){
return metabase.lib.js.metadata.parse_object_fn_STAR_.cljs$core$IFn$_invoke$arity$2(object_type,opts);
}));

(metabase.lib.js.metadata.parse_object_fn.cljs$lang$maxFixedArity = 2);

metabase.lib.js.metadata.parse_object_fn_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (object_type,opts){
var xform = metabase.lib.js.metadata.parse_object_xform(object_type);
var lib_type_name = metabase.lib.js.metadata.lib_type.cljs$core$IFn$_invoke$arity$1(object_type);
return (function (object){
try{var parsed = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(metabase.lib.js.metadata.obj__GT_clj.cljs$core$IFn$_invoke$arity$3(xform,object,opts),new cljs.core.Keyword("lib","type","lib/type",1175424801),lib_type_name);
var level__73199__auto___80014 = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"debug","debug",-1608172596));
var logger__73200__auto___80015 = "metabase.lib.js.metadata";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__73200__auto___80015,level__73199__auto___80014))){
var x__73201__auto___80018 = "Parsed metadata %s %s\n%s";
if((x__73201__auto___80018 instanceof Error)){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73200__auto___80015,level__73199__auto___80014,metabase.util.log.format_msg.cljs$core$IFn$_invoke$arity$variadic(object_type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parsed),metabase.util.pprint_to_str.cljs$core$IFn$_invoke$arity$1(parsed)], 0)),x__73201__auto___80018);
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73200__auto___80015,level__73199__auto___80014,metabase.util.log.format_msg.cljs$core$IFn$_invoke$arity$variadic(x__73201__auto___80018,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([object_type,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parsed),metabase.util.pprint_to_str.cljs$core$IFn$_invoke$arity$1(parsed)], 0)),null);
}
} else {
}

return parsed;
}catch (e79879){if((e79879 instanceof Error)){
var e = e79879;
var level__73199__auto___80023 = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"error","error",-978969032));
var logger__73200__auto___80024 = "metabase.lib.js.metadata";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__73200__auto___80024,level__73199__auto___80023))){
var x__73201__auto___80025 = e;
if((x__73201__auto___80025 instanceof Error)){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73200__auto___80024,level__73199__auto___80023,metabase.util.log.format_msg.cljs$core$IFn$_invoke$arity$variadic("Error parsing %s %s: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([object_type,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([object], 0)),cljs.core.ex_message(e)], 0)),x__73201__auto___80025);
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73200__auto___80024,level__73199__auto___80023,metabase.util.log.format_msg.cljs$core$IFn$_invoke$arity$variadic(x__73201__auto___80025,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error parsing %s %s: %s",object_type,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([object], 0)),cljs.core.ex_message(e)], 0)),null);
}
} else {
}

return null;
} else {
throw e79879;

}
}});
}));
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.js !== 'undefined') && (typeof metabase.lib.js.metadata !== 'undefined') && (typeof metabase.lib.js.metadata.parse_objects !== 'undefined')){
} else {
metabase.lib.js.metadata.parse_objects = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__79880 = cljs.core.get_global_hierarchy;
return (fexpr__79880.cljs$core$IFn$_invoke$arity$0 ? fexpr__79880.cljs$core$IFn$_invoke$arity$0() : fexpr__79880.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.js.metadata","parse-objects"),(function (object_type,_metadata){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(object_type);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.js !== 'undefined') && (typeof metabase.lib.js.metadata !== 'undefined') && (typeof metabase.lib.js.metadata.parse_objects_default_key !== 'undefined')){
} else {
/**
 * Key to use to get unparsed objects of this type from the metadata, if you're using the default implementation
 *   of [[parse-objects]].
 */
metabase.lib.js.metadata.parse_objects_default_key = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__79881 = cljs.core.get_global_hierarchy;
return (fexpr__79881.cljs$core$IFn$_invoke$arity$0 ? fexpr__79881.cljs$core$IFn$_invoke$arity$0() : fexpr__79881.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.js.metadata","parse-objects-default-key"),cljs.core.keyword,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
metabase.lib.js.metadata.parse_objects.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (object_type,metadata){
var parse_object = metabase.lib.js.metadata.parse_object_fn.cljs$core$IFn$_invoke$arity$1(object_type);
return metabase.lib.js.metadata.obj__GT_clj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__79882){
var vec__79883 = p__79882;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79883,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79883,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.parse_long(k),(new cljs.core.Delay((function (){
return (parse_object.cljs$core$IFn$_invoke$arity$1 ? parse_object.cljs$core$IFn$_invoke$arity$1(v) : parse_object.call(null,v));
}),null))], null);
})),metabase.lib.js.metadata.object_get(metadata,metabase.lib.js.metadata.parse_objects_default_key.cljs$core$IFn$_invoke$arity$1(object_type)));
}));
metabase.lib.js.metadata.lib_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"database","database",1849087575),(function (_object_type){
return new cljs.core.Keyword("metadata","database","metadata/database",-924828824);
}));
metabase.lib.js.metadata.excluded_keys.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"database","database",1849087575),(function (_object_type){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fields","fields",-1932066230),null,new cljs.core.Keyword(null,"tables","tables",1334623052),null], null), null);
}));
metabase.lib.js.metadata.parse_field_fn.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"database","database",1849087575),(function (_object_type){
return (function (k,v){
var G__79886 = k;
var G__79886__$1 = (((G__79886 instanceof cljs.core.Keyword))?G__79886.fqn:null);
switch (G__79886__$1) {
case "dbms-version":
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));

break;
case "features":
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword),v);

break;
case "native-permissions":
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);

break;
default:
return v;

}
});
}));
metabase.lib.js.metadata.parse_objects_default_key.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"database","database",1849087575),(function (_object_type){
return "databases";
}));
metabase.lib.js.metadata.lib_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"table","table",-564943036),(function (_object_type){
return new cljs.core.Keyword("metadata","table","metadata/table",-882499405);
}));
metabase.lib.js.metadata.excluded_keys.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"table","table",-564943036),(function (_object_type){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dimension-options","dimension-options",2122379680),null,new cljs.core.Keyword(null,"fields","fields",-1932066230),null,new cljs.core.Keyword(null,"segments","segments",1937535949),null,new cljs.core.Keyword(null,"database","database",1849087575),null,new cljs.core.Keyword(null,"metrics","metrics",394093469),null], null), null);
}));
metabase.lib.js.metadata.parse_field_fn.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"table","table",-564943036),(function (_object_type){
return (function (k,v){
var G__79887 = k;
var G__79887__$1 = (((G__79887 instanceof cljs.core.Keyword))?G__79887.fqn:null);
switch (G__79887__$1) {
case "entity-type":
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);

break;
case "field-order":
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);

break;
case "initial-sync-status":
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);

break;
case "visibility-type":
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);

break;
default:
return v;

}
});
}));
metabase.lib.js.metadata.parse_objects.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"table","table",-564943036),(function (object_type,metadata){
var parse_table = metabase.lib.js.metadata.parse_object_fn.cljs$core$IFn$_invoke$arity$1(object_type);
return metabase.lib.js.metadata.obj__GT_clj.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__79888){
var vec__79889 = p__79888;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79889,(0),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79889,(1),null);
return clojure.string.starts_with_QMARK_(k,"card__");
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__79892){
var vec__79893 = p__79892;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79893,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79893,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.parse_long(k),(new cljs.core.Delay((function (){
return (parse_table.cljs$core$IFn$_invoke$arity$1 ? parse_table.cljs$core$IFn$_invoke$arity$1(v) : parse_table.call(null,v));
}),null))], null);
}))),metabase.lib.js.metadata.object_get(metadata,"tables"));
}));
metabase.lib.js.metadata.lib_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (_object_type){
return new cljs.core.Keyword("metadata","column","metadata/column",-1799249054);
}));
metabase.lib.js.metadata.excluded_keys.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (_object_type){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"dimension-options","dimension-options",2122379680),null,new cljs.core.Keyword(null,"table","table",-564943036),null,new cljs.core.Keyword(null,"default-dimension-option","default-dimension-option",149055958),null,new cljs.core.Keyword(null,"database","database",1849087575),null,new cljs.core.Keyword(null,"_comesFromEndpoint","_comesFromEndpoint",-1390455588),null,new cljs.core.Keyword(null,"metrics","metrics",394093469),null], null), null);
}));
metabase.lib.js.metadata.rename_key_fn.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (_object_type){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword("metabase.lib.field","temporal-unit","metabase.lib.field/temporal-unit",602312727),new cljs.core.Keyword(null,"expression-name","expression-name",-1798450709),new cljs.core.Keyword("lib","expression-name","lib/expression-name",-1799326590),new cljs.core.Keyword(null,"binning-info","binning-info",-2117036653),new cljs.core.Keyword("metabase.lib.field","binning","metabase.lib.field/binning",-222751823),new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),new cljs.core.Keyword("metabase.lib.js.metadata","dimension","metabase.lib.js.metadata/dimension",2004773191),new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.Keyword("metabase.lib.js.metadata","field-values","metabase.lib.js.metadata/field-values",-88384962)], null);
}));
metabase.lib.js.metadata.parse_field_id = (function metabase$lib$js$metadata$parse_field_id(id){
var G__79896 = id;
if(cljs.core.vector_QMARK_(id)){
return cljs.core.second(G__79896);
} else {
return G__79896;
}
});
metabase.lib.js.metadata.parse_binning_info = (function metabase$lib$js$metadata$parse_binning_info(m){
return metabase.lib.js.metadata.obj__GT_clj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__79897){
var vec__79898 = p__79897;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79898,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79898,(1),null);
var k__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(metabase.lib.js.metadata.memoized_kebab_key(k));
var k__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k__$1,new cljs.core.Keyword(null,"binning-strategy","binning-strategy",2063329158)))?new cljs.core.Keyword(null,"strategy","strategy",-1471631918):k__$1);
var v__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k__$2,new cljs.core.Keyword(null,"strategy","strategy",-1471631918)))?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v):v);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$2,v__$1], null);
})),m);
});
metabase.lib.js.metadata.parse_field_values = (function metabase$lib$js$metadata$parse_field_values(field_values){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(metabase.lib.js.metadata.object_get(field_values,"type"),"full")){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"values","values",372645556),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(metabase.lib.js.metadata.object_get(field_values,"values")),new cljs.core.Keyword(null,"human-readable-values","human-readable-values",-624842907),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(metabase.lib.js.metadata.object_get(field_values,"human_readable_values"))], null);
} else {
return null;
}
});
/**
 * `:dimensions` comes in as an array for historical reasons, even tho a Field can only have one. So it should never
 *   have more than one element. See #27054. Anyways just to be safe let's make sure it's either `:external` or
 *   `:internal`.
 */
metabase.lib.js.metadata.parse_dimension = (function metabase$lib$js$metadata$parse_dimension(dimensions){
var temp__5804__auto__ = medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (dimension){
var G__79902 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dimension,"type");
var fexpr__79901 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["internal",null,"external",null], null), null);
return (fexpr__79901.cljs$core$IFn$_invoke$arity$1 ? fexpr__79901.cljs$core$IFn$_invoke$arity$1(G__79902) : fexpr__79901.call(null,G__79902));
}),dimensions);
if(cljs.core.truth_(temp__5804__auto__)){
var dimension = temp__5804__auto__;
var dimension_type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dimension,"type"));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.cljs$core$IFn$_invoke$arity$2(dimension,"id"),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get.cljs$core$IFn$_invoke$arity$2(dimension,"name")], null),(function (){var G__79903 = dimension_type;
var G__79903__$1 = (((G__79903 instanceof cljs.core.Keyword))?G__79903.fqn:null);
switch (G__79903__$1) {
case "external":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metadata.column.remapping","external","metadata.column.remapping/external",-1813287755),new cljs.core.Keyword(null,"field-id","field-id",-353751335),cljs.core.get.cljs$core$IFn$_invoke$arity$2(dimension,"human_readable_field_id")], null);

break;
case "internal":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metadata.column.remapping","internal","metadata.column.remapping/internal",-1077920983)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79903__$1)].join('')));

}
})()], 0));
} else {
return null;
}
});
metabase.lib.js.metadata.parse_field_fn.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (_object_type){
return (function (k,v){
var G__79904 = k;
var G__79904__$1 = (((G__79904 instanceof cljs.core.Keyword))?G__79904.fqn:null);
switch (G__79904__$1) {
case "base-type":
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);

break;
case "coercion-strategy":
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);

break;
case "effective-type":
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);

break;
case "fingerprint":
if(cljs.core.map_QMARK_(v)){
return clojure.walk.keywordize_keys(v);
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}

break;
case "has-field-values":
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);

break;
case "field-ref":
return cljs.core.to_array(v);

break;
case "lib/source":
var G__79905 = v;
switch (G__79905) {
case "aggregation":
return new cljs.core.Keyword("source","aggregations","source/aggregations",-1828710137);

break;
case "breakout":
return new cljs.core.Keyword("source","breakouts","source/breakouts",-1706018158);

break;
default:
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("source",v);

}

break;
case "metabase.lib.field/temporal-unit":
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);

break;
case "semantic-type":
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);

break;
case "visibility-type":
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);

break;
case "id":
return metabase.lib.js.metadata.parse_field_id(v);

break;
case "metabase.lib.field/binning":
return metabase.lib.js.metadata.parse_binning_info(v);

break;
case "metabase.lib.js.metadata/field-values":
return metabase.lib.js.metadata.parse_field_values(v);

break;
case "metabase.lib.js.metadata/dimension":
return metabase.lib.js.metadata.parse_dimension(v);

break;
default:
return v;

}
});
}));
metabase.lib.js.metadata.parse_object_fn_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (object_type,opts){
var f = (function (){var fexpr__79906 = cljs.core.get_method(metabase.lib.js.metadata.parse_object_fn_STAR_,new cljs.core.Keyword(null,"default","default",-1987822328));
return (fexpr__79906.cljs$core$IFn$_invoke$arity$2 ? fexpr__79906.cljs$core$IFn$_invoke$arity$2(object_type,opts) : fexpr__79906.call(null,object_type,opts));
})();
return (function (unparsed){
var map__79907 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(unparsed) : f.call(null,unparsed));
var map__79907__$1 = cljs.core.__destructure_map(map__79907);
var parsed = map__79907__$1;
var map__79908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79907__$1,new cljs.core.Keyword("metabase.lib.js.metadata","dimension","metabase.lib.js.metadata/dimension",2004773191));
var map__79908__$1 = cljs.core.__destructure_map(map__79908);
var dimension = map__79908__$1;
var dimension_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79908__$1,new cljs.core.Keyword("lib","type","lib/type",1175424801));
var field_values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79907__$1,new cljs.core.Keyword("metabase.lib.js.metadata","field-values","metabase.lib.js.metadata/field-values",-88384962));
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic((function (){var G__79909 = dimension_type;
var G__79909__$1 = (((G__79909 instanceof cljs.core.Keyword))?G__79909.fqn:null);
switch (G__79909__$1) {
case "metadata.column.remapping/external":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parsed,new cljs.core.Keyword("lib","external-remap","lib/external-remap",543358316),dimension);

break;
case "metadata.column.remapping/internal":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parsed,new cljs.core.Keyword("lib","internal-remap","lib/internal-remap",-220033801),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dimension,field_values], 0)));

break;
default:
return parsed;

}
})(),new cljs.core.Keyword("metabase.lib.js.metadata","dimension","metabase.lib.js.metadata/dimension",2004773191),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("metabase.lib.js.metadata","field-values","metabase.lib.js.metadata/field-values",-88384962)], 0));
});
}));
metabase.lib.js.metadata.parse_objects.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (object_type,metadata){
var parse_object = metabase.lib.js.metadata.parse_object_fn.cljs$core$IFn$_invoke$arity$1(object_type);
var unparsed_fields = metabase.lib.js.metadata.object_get(metadata,"fields");
return metabase.lib.js.metadata.obj__GT_clj.cljs$core$IFn$_invoke$arity$2(cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p__79910){
var vec__79911 = p__79910;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79911,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79911,(1),null);
var temp__5804__auto__ = (function (){var or__5002__auto__ = cljs.core.parse_long(k);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var temp__5804__auto__ = cljs.core.re_matches(/card__\d+:(\d+)/,k);
if(cljs.core.truth_(temp__5804__auto__)){
var vec__79914 = temp__5804__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79914,(0),null);
var id_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79914,(1),null);
var and__5000__auto__ = (metabase.lib.js.metadata.object_get(unparsed_fields,id_str) == null);
if(and__5000__auto__){
return cljs.core.parse_long(id_str);
} else {
return and__5000__auto__;
}
} else {
return null;
}
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var field_id = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [field_id,(new cljs.core.Delay((function (){
return (parse_object.cljs$core$IFn$_invoke$arity$1 ? parse_object.cljs$core$IFn$_invoke$arity$1(v) : parse_object.call(null,v));
}),null))], null);
} else {
return null;
}
})),unparsed_fields);
}));
metabase.lib.js.metadata.lib_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"card","card",-1430355152),(function (_object_type){
return new cljs.core.Keyword("metadata","card","metadata/card",-1039333889);
}));
metabase.lib.js.metadata.excluded_keys.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"card","card",-1430355152),(function (_object_type){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"dimension-options","dimension-options",2122379680),null,new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"fks","fks",2041987076),null,new cljs.core.Keyword(null,"table","table",-564943036),null,new cljs.core.Keyword(null,"db","db",993250759),null,new cljs.core.Keyword(null,"plain-object","plain-object",-943264281),null,new cljs.core.Keyword(null,"segments","segments",1937535949),null,new cljs.core.Keyword(null,"database","database",1849087575),null,new cljs.core.Keyword(null,"metadata","metadata",1799301597),null,new cljs.core.Keyword(null,"metrics","metrics",394093469),null,new cljs.core.Keyword(null,"schema-name","schema-name",1666725119),null], null), null);
}));
metabase.lib.js.metadata.parse_fields = (function metabase$lib$js$metadata$parse_fields(fields){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.lib.js.metadata.parse_object_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"field","field",-1302436500)),fields);
});
metabase.lib.js.metadata.parse_field_fn.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"card","card",-1430355152),(function (_object_type){
return (function (k,v){
var G__79917 = k;
var G__79917__$1 = (((G__79917 instanceof cljs.core.Keyword))?G__79917.fqn:null);
switch (G__79917__$1) {
case "result-metadata":
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.sequential_QMARK_,cljs.core.array_QMARK_)(v))){
return metabase.lib.js.metadata.parse_fields(v);
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}

break;
case "fields":
return metabase.lib.js.metadata.parse_fields(v);

break;
case "visibility-type":
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);

break;
case "dataset-query":
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));

break;
case "type":
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);

break;
default:
return v;

}
});
}));
/**
 * Sometimes a card is stored in the metadata as some sort of weird object where the thing we actually want is under the
 *   key `_card` (not sure why), but if it is just unwrap it and then parse it normally.
 */
metabase.lib.js.metadata.unwrap_card = (function metabase$lib$js$metadata$unwrap_card(obj){
var or__5002__auto__ = metabase.lib.js.metadata.object_get(obj,"_card");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return obj;
}
});
metabase.lib.js.metadata.assemble_card = (function metabase$lib$js$metadata$assemble_card(metadata,id){
var parse_card_ignoring_plain_object = metabase.lib.js.metadata.parse_object_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"card","card",-1430355152),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-plain-object?","use-plain-object?",-1174595475),false], null));
var parse_card = metabase.lib.js.metadata.parse_object_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"card","card",-1430355152));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__79918 = metabase.lib.js.metadata.object_get(metabase.lib.js.metadata.object_get(metadata,"tables"),["card__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
return (parse_card_ignoring_plain_object.cljs$core$IFn$_invoke$arity$1 ? parse_card_ignoring_plain_object.cljs$core$IFn$_invoke$arity$1(G__79918) : parse_card_ignoring_plain_object.call(null,G__79918));
})(),new cljs.core.Keyword(null,"id","id",-1388402092),id),(function (){var G__79919 = metabase.lib.js.metadata.unwrap_card(metabase.lib.js.metadata.object_get(metabase.lib.js.metadata.object_get(metadata,"questions"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
return (parse_card.cljs$core$IFn$_invoke$arity$1 ? parse_card.cljs$core$IFn$_invoke$arity$1(G__79919) : parse_card.call(null,G__79919));
})()], 0));
});
metabase.lib.js.metadata.parse_objects.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"card","card",-1430355152),(function (_object_type,metadata){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,(new cljs.core.Delay((function (){
return metabase.lib.js.metadata.assemble_card(metadata,id);
}),null))], null);
})),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(metabase.lib.util.legacy_string_table_id__GT_card_id),cljs.core.js_keys(metabase.lib.js.metadata.object_get(metadata,"tables"))),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.parse_long),cljs.core.js_keys(metabase.lib.js.metadata.object_get(metadata,"questions"))));
}));
metabase.lib.js.metadata.lib_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"metric","metric",408798077),(function (_object_type){
return new cljs.core.Keyword("metadata","metric","metadata/metric",538003406);
}));
metabase.lib.js.metadata.excluded_keys.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"metric","metric",408798077),(function (_object_type){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table","table",-564943036),null,new cljs.core.Keyword(null,"database","database",1849087575),null], null), null);
}));
metabase.lib.js.metadata.parse_field_fn.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"metric","metric",408798077),(function (_object_type){
return (function (_k,v){
return v;
});
}));
metabase.lib.js.metadata.parse_objects_default_key.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"metric","metric",408798077),(function (_object_type){
return "metrics";
}));
metabase.lib.js.metadata.lib_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"segment","segment",-964921196),(function (_object_type){
return new cljs.core.Keyword("metadata","segment","metadata/segment",-1286738015);
}));
metabase.lib.js.metadata.excluded_keys.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"segment","segment",-964921196),(function (_object_type){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table","table",-564943036),null,new cljs.core.Keyword(null,"database","database",1849087575),null], null), null);
}));
metabase.lib.js.metadata.parse_field_fn.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"segment","segment",-964921196),(function (_object_type){
return (function (_k,v){
return v;
});
}));
metabase.lib.js.metadata.parse_objects_default_key.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"segment","segment",-964921196),(function (_object_type){
return "segments";
}));
metabase.lib.js.metadata.parse_objects_delay = (function metabase$lib$js$metadata$parse_objects_delay(object_type,metadata){
return (new cljs.core.Delay((function (){
try{return metabase.lib.js.metadata.parse_objects.cljs$core$IFn$_invoke$arity$2(object_type,metadata);
}catch (e79920){if((e79920 instanceof Error)){
var e = e79920;
var level__73199__auto___80136 = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"error","error",-978969032));
var logger__73200__auto___80137 = "metabase.lib.js.metadata";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__73200__auto___80137,level__73199__auto___80136))){
var x__73201__auto___80140 = e;
if((x__73201__auto___80140 instanceof Error)){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73200__auto___80137,level__73199__auto___80136,metabase.util.log.format_msg.cljs$core$IFn$_invoke$arity$variadic("Error parsing %s objects: %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([object_type,cljs.core.ex_message(e)], 0)),x__73201__auto___80140);
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73200__auto___80137,level__73199__auto___80136,metabase.util.log.format_msg.cljs$core$IFn$_invoke$arity$variadic(x__73201__auto___80140,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error parsing %s objects: %s",object_type,cljs.core.ex_message(e)], 0)),null);
}
} else {
}

return null;
} else {
throw e79920;

}
}}),null));
});
metabase.lib.js.metadata.metric_cards = (function metabase$lib$js$metadata$metric_cards(delayed_cards){
var temp__5804__auto__ = cljs.core.deref(delayed_cards);
if(cljs.core.truth_(temp__5804__auto__)){
var cards = temp__5804__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p__79921){
var vec__79922 = p__79921;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79922,(0),null);
var card = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79922,(1),null);
if(cljs.core.truth_((function (){var and__5000__auto__ = card;
if(cljs.core.truth_(and__5000__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(card)),new cljs.core.Keyword(null,"metric","metric",408798077))) && (cljs.core.not(new cljs.core.Keyword(null,"archived","archived",1018596768).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(card)))));
} else {
return and__5000__auto__;
}
})())){
var card__$1 = cljs.core.deref(card);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,(new cljs.core.Delay((function (){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.select_keys(card__$1,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"table-id","table-id",-766649466),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"archived","archived",1018596768),new cljs.core.Keyword(null,"dataset-query","dataset-query",1851066427)], null)),new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metadata","metric","metadata/metric",538003406));
}),null))], null);
} else {
return null;
}
})),cards);
} else {
return null;
}
});
metabase.lib.js.metadata.parse_metadata = (function metabase$lib$js$metadata$parse_metadata(metadata){
var delayed_cards = metabase.lib.js.metadata.parse_objects_delay(new cljs.core.Keyword(null,"card","card",-1430355152),metadata);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"databases","databases",2040134125),metabase.lib.js.metadata.parse_objects_delay(new cljs.core.Keyword(null,"database","database",1849087575),metadata),new cljs.core.Keyword(null,"tables","tables",1334623052),metabase.lib.js.metadata.parse_objects_delay(new cljs.core.Keyword(null,"table","table",-564943036),metadata),new cljs.core.Keyword(null,"fields","fields",-1932066230),metabase.lib.js.metadata.parse_objects_delay(new cljs.core.Keyword(null,"field","field",-1302436500),metadata),new cljs.core.Keyword(null,"cards","cards",169174038),delayed_cards,new cljs.core.Keyword(null,"metrics","metrics",394093469),(new cljs.core.Delay((function (){
return metabase.lib.js.metadata.metric_cards(delayed_cards);
}),null)),new cljs.core.Keyword(null,"segments","segments",1937535949),metabase.lib.js.metadata.parse_objects_delay(new cljs.core.Keyword(null,"segment","segment",-964921196),metadata)], null);
});
metabase.lib.js.metadata.database = (function metabase$lib$js$metadata$database(metadata,database_id){
var G__79925 = metadata;
var G__79925__$1 = (((G__79925 == null))?null:new cljs.core.Keyword(null,"databases","databases",2040134125).cljs$core$IFn$_invoke$arity$1(G__79925));
var G__79925__$2 = (((G__79925__$1 == null))?null:cljs.core.deref(G__79925__$1));
var G__79925__$3 = (((G__79925__$2 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__79925__$2,database_id));
if((G__79925__$3 == null)){
return null;
} else {
return cljs.core.deref(G__79925__$3);
}
});
metabase.lib.js.metadata.metadatas = (function metabase$lib$js$metadata$metadatas(metadata,metadata_type,ids){
var k = (function (){var G__79926 = metadata_type;
var G__79926__$1 = (((G__79926 instanceof cljs.core.Keyword))?G__79926.fqn:null);
switch (G__79926__$1) {
case "metadata/table":
return new cljs.core.Keyword(null,"tables","tables",1334623052);

break;
case "metadata/column":
return new cljs.core.Keyword(null,"fields","fields",-1932066230);

break;
case "metadata/card":
return new cljs.core.Keyword(null,"cards","cards",169174038);

break;
case "metadata/segment":
return new cljs.core.Keyword(null,"segments","segments",1937535949);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79926__$1)].join('')));

}
})();
var metadatas_STAR_ = (function (){var G__79927 = metadata;
var G__79927__$1 = (((G__79927 == null))?null:(k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__79927) : k.call(null,G__79927)));
if((G__79927__$1 == null)){
return null;
} else {
return cljs.core.deref(G__79927__$1);
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (id){
var G__79928 = metadatas_STAR_;
var G__79928__$1 = (((G__79928 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__79928,id));
if((G__79928__$1 == null)){
return null;
} else {
return cljs.core.deref(G__79928__$1);
}
})),ids);
});
metabase.lib.js.metadata.tables = (function metabase$lib$js$metadata$tables(metadata,database_id){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p__79929){
var vec__79930 = p__79929;
var _id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79930,(0),null);
var dlay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79930,(1),null);
var temp__5804__auto__ = (function (){var G__79933 = dlay;
if((G__79933 == null)){
return null;
} else {
return cljs.core.deref(G__79933);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var table = temp__5804__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(table),database_id)){
return table;
} else {
return null;
}
} else {
return null;
}
})),(function (){var G__79934 = metadata;
var G__79934__$1 = (((G__79934 == null))?null:new cljs.core.Keyword(null,"tables","tables",1334623052).cljs$core$IFn$_invoke$arity$1(G__79934));
if((G__79934__$1 == null)){
return null;
} else {
return cljs.core.deref(G__79934__$1);
}
})());
});
metabase.lib.js.metadata.metadatas_for_table = (function metabase$lib$js$metadata$metadatas_for_table(metadata,metadata_type,table_id){
var k = (function (){var G__79935 = metadata_type;
var G__79935__$1 = (((G__79935 instanceof cljs.core.Keyword))?G__79935.fqn:null);
switch (G__79935__$1) {
case "metadata/column":
return new cljs.core.Keyword(null,"fields","fields",-1932066230);

break;
case "metadata/metric":
return new cljs.core.Keyword(null,"metrics","metrics",394093469);

break;
case "metadata/segment":
return new cljs.core.Keyword(null,"segments","segments",1937535949);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79935__$1)].join('')));

}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p__79936){
var vec__79937 = p__79936;
var _id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79937,(0),null);
var dlay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79937,(1),null);
var temp__5804__auto__ = (function (){var G__79940 = dlay;
if((G__79940 == null)){
return null;
} else {
return cljs.core.deref(G__79940);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var object = temp__5804__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"table-id","table-id",-766649466).cljs$core$IFn$_invoke$arity$1(object),table_id)){
return object;
} else {
return null;
}
} else {
return null;
}
})),(function (){var G__79941 = metadata;
var G__79941__$1 = (((G__79941 == null))?null:(k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__79941) : k.call(null,G__79941)));
if((G__79941__$1 == null)){
return null;
} else {
return cljs.core.deref(G__79941__$1);
}
})());
});
metabase.lib.js.metadata.setting = (function metabase$lib$js$metadata$setting(unparsed_metadata,setting_key){
return metabase.lib.js.metadata.object_get(metabase.lib.js.metadata.object_get(unparsed_metadata,"settings"),cljs.core.name(setting_key));
});

/**
* @constructor
 * @implements {metabase.lib.metadata.protocols.MetadataProvider}
 * @implements {clojure.core.protocols.Datafiable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
metabase.lib.js.metadata.t_metabase$lib$js$metadata79943 = (function (database_id,unparsed_metadata,metadata,meta79944){
this.database_id = database_id;
this.unparsed_metadata = unparsed_metadata;
this.metadata = metadata;
this.meta79944 = meta79944;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(metabase.lib.js.metadata.t_metabase$lib$js$metadata79943.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_79945,meta79944__$1){
var self__ = this;
var _79945__$1 = this;
return (new metabase.lib.js.metadata.t_metabase$lib$js$metadata79943(self__.database_id,self__.unparsed_metadata,self__.metadata,meta79944__$1));
}));

(metabase.lib.js.metadata.t_metabase$lib$js$metadata79943.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_79945){
var self__ = this;
var _79945__$1 = this;
return self__.meta79944;
}));

(metabase.lib.js.metadata.t_metabase$lib$js$metadata79943.prototype.metabase$lib$metadata$protocols$MetadataProvider$ = cljs.core.PROTOCOL_SENTINEL);

(metabase.lib.js.metadata.t_metabase$lib$js$metadata79943.prototype.metabase$lib$metadata$protocols$MetadataProvider$database$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return metabase.lib.js.metadata.database(self__.metadata,self__.database_id);
}));

(metabase.lib.js.metadata.t_metabase$lib$js$metadata79943.prototype.metabase$lib$metadata$protocols$MetadataProvider$metadatas$arity$3 = (function (_this,metadata_type,ids){
var self__ = this;
var _this__$1 = this;
return metabase.lib.js.metadata.metadatas(self__.metadata,metadata_type,ids);
}));

(metabase.lib.js.metadata.t_metabase$lib$js$metadata79943.prototype.metabase$lib$metadata$protocols$MetadataProvider$tables$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return metabase.lib.js.metadata.tables(self__.metadata,self__.database_id);
}));

(metabase.lib.js.metadata.t_metabase$lib$js$metadata79943.prototype.metabase$lib$metadata$protocols$MetadataProvider$metadatas_for_table$arity$3 = (function (_this,metadata_type,table_id){
var self__ = this;
var _this__$1 = this;
return metabase.lib.js.metadata.metadatas_for_table(self__.metadata,metadata_type,table_id);
}));

(metabase.lib.js.metadata.t_metabase$lib$js$metadata79943.prototype.metabase$lib$metadata$protocols$MetadataProvider$metadatas_for_tables$arity$3 = (function (_this,metadata_type,table_ids){
var self__ = this;
var _this__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__79942_SHARP_){
return metabase.lib.js.metadata.metadatas_for_table(self__.metadata,metadata_type,p1__79942_SHARP_);
}),table_ids);
}));

(metabase.lib.js.metadata.t_metabase$lib$js$metadata79943.prototype.metabase$lib$metadata$protocols$MetadataProvider$setting$arity$2 = (function (_this,setting_key){
var self__ = this;
var _this__$1 = this;
return metabase.lib.js.metadata.setting(self__.unparsed_metadata,setting_key);
}));

(metabase.lib.js.metadata.t_metabase$lib$js$metadata79943.prototype.clojure$core$protocols$Datafiable$ = cljs.core.PROTOCOL_SENTINEL);

(metabase.lib.js.metadata.t_metabase$lib$js$metadata79943.prototype.clojure$core$protocols$Datafiable$datafy$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return clojure.walk.postwalk((function (form){
if(cljs.core.delay_QMARK_(form)){
return cljs.core.deref(form);
} else {
return form;
}
}),self__.metadata);
}));

(metabase.lib.js.metadata.t_metabase$lib$js$metadata79943.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"database-id","database-id",-770609443,null),new cljs.core.Symbol(null,"unparsed-metadata","unparsed-metadata",69213290,null),new cljs.core.Symbol(null,"metadata","metadata",-855134172,null),new cljs.core.Symbol(null,"meta79944","meta79944",-1837988099,null)], null);
}));

(metabase.lib.js.metadata.t_metabase$lib$js$metadata79943.cljs$lang$type = true);

(metabase.lib.js.metadata.t_metabase$lib$js$metadata79943.cljs$lang$ctorStr = "metabase.lib.js.metadata/t_metabase$lib$js$metadata79943");

(metabase.lib.js.metadata.t_metabase$lib$js$metadata79943.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"metabase.lib.js.metadata/t_metabase$lib$js$metadata79943");
}));

/**
 * Positional factory function for metabase.lib.js.metadata/t_metabase$lib$js$metadata79943.
 */
metabase.lib.js.metadata.__GT_t_metabase$lib$js$metadata79943 = (function metabase$lib$js$metadata$__GT_t_metabase$lib$js$metadata79943(database_id,unparsed_metadata,metadata,meta79944){
return (new metabase.lib.js.metadata.t_metabase$lib$js$metadata79943(database_id,unparsed_metadata,metadata,meta79944));
});


/**
 * Inner implementation for [[metadata-provider]], which wraps this with a cache.
 */
metabase.lib.js.metadata.metadata_provider_STAR_ = (function metabase$lib$js$metadata$metadata_provider_STAR_(database_id,unparsed_metadata){
var metadata = metabase.lib.js.metadata.parse_metadata(unparsed_metadata);
var level__73195__auto___80214 = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"debug","debug",-1608172596));
var logger__73196__auto___80215 = "metabase.lib.js.metadata";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__73196__auto___80215,level__73195__auto___80214))){
var x__73197__auto___80217 = "Created metadata provider for metadata";
if((x__73197__auto___80217 instanceof Error)){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73196__auto___80215,level__73195__auto___80214,cljs.core.print_str(),x__73197__auto___80217);
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73196__auto___80215,level__73195__auto___80214,cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__73197__auto___80217], 0)),null);
}
} else {
}

return (new metabase.lib.js.metadata.t_metabase$lib$js$metadata79943(database_id,unparsed_metadata,metadata,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Use a `metabase-lib/metadata/Metadata` as a [[metabase.lib.metadata.protocols/MetadataProvider]].
 */
metabase.lib.js.metadata.metadata_provider = (function metabase$lib$js$metadata$metadata_provider(database_id,unparsed_metadata){
return metabase.lib.cache.side_channel_cache.cljs$core$IFn$_invoke$arity$4(cljs.core.str.cljs$core$IFn$_invoke$arity$1(database_id),unparsed_metadata,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(metabase.lib.js.metadata.metadata_provider_STAR_,database_id),true);
});
/**
 * Parses a JS column provided by the FE into a :metadata/column value for use in MLv2.
 */
metabase.lib.js.metadata.parse_column = metabase.lib.js.metadata.parse_object_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"field","field",-1302436500));

//# sourceMappingURL=metabase.lib.js.metadata.js.map
