var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.options.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.schema.util.js");

goog.provide('metabase.lib.schema.util');
metabase.lib.schema.util.collect_uuids_in_map = (function metabase$lib$schema$util$collect_uuids_in_map(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3((function (){var temp__5802__auto__ = (function (){var or__5002__auto__ = new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720).cljs$core$IFn$_invoke$arity$1(metabase.lib.options.options(m));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720).cljs$core$IFn$_invoke$arity$1(m);
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var our_uuid = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [our_uuid], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__75852){
var vec__75853 = p__75852;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75853,(0),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75853,(1),null);
return cljs.core.qualified_keyword_QMARK_(k);
})),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p__75856){
var vec__75857 = p__75856;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75857,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75857,(1),null);
return (metabase.lib.schema.util.collect_uuids.cljs$core$IFn$_invoke$arity$1 ? metabase.lib.schema.util.collect_uuids.cljs$core$IFn$_invoke$arity$1(v) : metabase.lib.schema.util.collect_uuids.call(null,v));
}))),m);
});
metabase.lib.schema.util.collect_uuids_in_sequence = (function metabase$lib$schema$util$collect_uuids_in_sequence(xs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(metabase.lib.schema.util.collect_uuids),xs);
});
/**
 * Return all the `:lib/uuid`s in a part of an MBQL query (a clause or map) as a sequence. This will be used to ensure
 *   there are no duplicates.
 */
metabase.lib.schema.util.collect_uuids = (function metabase$lib$schema$util$collect_uuids(x){
if(cljs.core.map_QMARK_(x)){
return metabase.lib.schema.util.collect_uuids_in_map(x);
} else {
if(cljs.core.sequential_QMARK_(x)){
return metabase.lib.schema.util.collect_uuids_in_sequence(x);
} else {
return null;

}
}
});
metabase.lib.schema.util.find_duplicate_uuid = (function metabase$lib$schema$util$find_duplicate_uuid(x){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,(function() {
var G__75870 = null;
var G__75870__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var G__75870__1 = (function (result){
if(typeof result === 'string'){
return result;
} else {
return null;
}
});
var G__75870__2 = (function (seen,a_uuid){
if(cljs.core.contains_QMARK_(seen,a_uuid)){
return cljs.core.reduced(a_uuid);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,a_uuid);
}
});
G__75870 = function(seen,a_uuid){
switch(arguments.length){
case 0:
return G__75870__0.call(this);
case 1:
return G__75870__1.call(this,seen);
case 2:
return G__75870__2.call(this,seen,a_uuid);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__75870.cljs$core$IFn$_invoke$arity$0 = G__75870__0;
G__75870.cljs$core$IFn$_invoke$arity$1 = G__75870__1;
G__75870.cljs$core$IFn$_invoke$arity$2 = G__75870__2;
return G__75870;
})()
,metabase.lib.schema.util.collect_uuids(x));
});
/**
 * True if all the `:lib/uuid`s in something are unique.
 */
metabase.lib.schema.util.unique_uuids_QMARK_ = (function metabase$lib$schema$util$unique_uuids_QMARK_(x){
return cljs.core.not(metabase.lib.schema.util.find_duplicate_uuid(x));
});
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.util","unique-uuids","metabase.lib.schema.util/unique-uuids",1812604220),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","message","error/message",-502809098),"all :lib/uuids must be unique",new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p__75860,_){
var map__75861 = p__75860;
var map__75861__$1 = cljs.core.__destructure_map(map__75861);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75861__$1,new cljs.core.Keyword(null,"value","value",305978217));
return ["Duplicate :lib/uuid ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.schema.util.find_duplicate_uuid(value)], 0))].join('');
})], null),new cljs.core.Var(function(){return metabase.lib.schema.util.unique_uuids_QMARK_;},new cljs.core.Symbol("metabase.lib.schema.util","unique-uuids?","metabase.lib.schema.util/unique-uuids?",638115116,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"metabase.lib.schema.util","metabase.lib.schema.util",782894276,null),new cljs.core.Symbol(null,"unique-uuids?","unique-uuids?",-1723224962,null),"metabase/lib/schema/util.cljc",20,1,47,47,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"True if all the `:lib/uuid`s in something are unique.",(cljs.core.truth_(metabase.lib.schema.util.unique_uuids_QMARK_)?metabase.lib.schema.util.unique_uuids_QMARK_.cljs$lang$test:null)]))], null));
/**
 * Remove all the namespaced keys from a map.
 */
metabase.lib.schema.util.remove_namespaced_keys = (function metabase$lib$schema$util$remove_namespaced_keys(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__75862){
var vec__75863 = p__75862;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75863,(0),null);
var _v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75863,(1),null);
return cljs.core.qualified_keyword_QMARK_(k);
})),m);
});
/**
 * Is a sequence of `refs` distinct for the purposes of appearing in `:fields` or `:breakouts` (ignoring keys that
 *   aren't important such as namespaced keys and type info)?
 */
metabase.lib.schema.util.distinct_refs_QMARK_ = (function metabase$lib$schema$util$distinct_refs_QMARK_(refs){
var or__5002__auto__ = (cljs.core.count(refs) < (2));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,(function (){var iter__5480__auto__ = (function metabase$lib$schema$util$distinct_refs_QMARK__$_iter__75866(s__75867){
return (new cljs.core.LazySeq(null,(function (){
var s__75867__$1 = s__75867;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__75867__$1);
if(temp__5804__auto__){
var s__75867__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__75867__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__75867__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__75869 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__75868 = (0);
while(true){
if((i__75868 < size__5479__auto__)){
var ref = cljs.core._nth(c__5478__auto__,i__75868);
cljs.core.chunk_append(b__75869,metabase.lib.options.update_options(ref,((function (i__75868,ref,c__5478__auto__,size__5479__auto__,b__75869,s__75867__$2,temp__5804__auto__,or__5002__auto__){
return (function (options){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(metabase.lib.schema.util.remove_namespaced_keys(options),new cljs.core.Keyword(null,"base-type","base-type",1167971299),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"effective-type","effective-type",-355725458)], 0));
});})(i__75868,ref,c__5478__auto__,size__5479__auto__,b__75869,s__75867__$2,temp__5804__auto__,or__5002__auto__))
));

var G__75871 = (i__75868 + (1));
i__75868 = G__75871;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__75869),metabase$lib$schema$util$distinct_refs_QMARK__$_iter__75866(cljs.core.chunk_rest(s__75867__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__75869),null);
}
} else {
var ref = cljs.core.first(s__75867__$2);
return cljs.core.cons(metabase.lib.options.update_options(ref,((function (ref,s__75867__$2,temp__5804__auto__,or__5002__auto__){
return (function (options){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(metabase.lib.schema.util.remove_namespaced_keys(options),new cljs.core.Keyword(null,"base-type","base-type",1167971299),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"effective-type","effective-type",-355725458)], 0));
});})(ref,s__75867__$2,temp__5804__auto__,or__5002__auto__))
),metabase$lib$schema$util$distinct_refs_QMARK__$_iter__75866(cljs.core.rest(s__75867__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(refs);
})());
}
});

//# sourceMappingURL=metabase.lib.schema.util.js.map
