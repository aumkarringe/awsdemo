var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./metabase.util.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.util.humanization.js");

goog.provide('metabase.util.humanization');
if((typeof metabase !== 'undefined') && (typeof metabase.util !== 'undefined') && (typeof metabase.util.humanization !== 'undefined') && (typeof metabase.util.humanization.name__GT_human_readable_name !== 'undefined')){
} else {
/**
 * Convert a name, such as `num_toucans`, to a human-readable name, such as `Num Toucans`.
 * 
 *  (name->human-readable-name :simple "cool_toucans") ;-> "Cool Toucans"
 * 
 *  ;; specifiy a different strategy:
 *  (name->human-readable-name :none "cool_toucans") ;-> "cool_toucans"
 */
metabase.util.humanization.name__GT_human_readable_name = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77193 = cljs.core.get_global_hierarchy;
return (fexpr__77193.cljs$core$IFn$_invoke$arity$0 ? fexpr__77193.cljs$core$IFn$_invoke$arity$0() : fexpr__77193.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.util.humanization","name->human-readable-name"),(function (strategy,_s){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(strategy);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
metabase.util.humanization.acronyms = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["url",null,"id",null,"uid",null,"uuid",null,"ip",null,"guid",null], null), null);
metabase.util.humanization.capitalize_word = (function metabase$util$humanization$capitalize_word(word){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["url",null,"id",null,"uid",null,"uuid",null,"ip",null,"guid",null], null), null),metabase.util.lower_case_en(word))){
return metabase.util.upper_case_en(word);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(word,metabase.util.upper_case_en(word))){
return clojure.string.capitalize(word);
} else {
return [clojure.string.capitalize(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(word,(0),(1))),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(word,(1))].join('');
}
}
});
metabase.util.humanization.name__GT_human_readable_name.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"simple","simple",-581868663),(function (_strategy,s){
if(cljs.core.seq(s)){
var humanized = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",(function (){var iter__5480__auto__ = (function metabase$util$humanization$iter__77195(s__77196){
return (new cljs.core.LazySeq(null,(function (){
var s__77196__$1 = s__77196;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__77196__$1);
if(temp__5804__auto__){
var s__77196__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77196__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__77196__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__77198 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__77197 = (0);
while(true){
if((i__77197 < size__5479__auto__)){
var part = cljs.core._nth(c__5478__auto__,i__77197);
if((!(clojure.string.blank_QMARK_(part)))){
cljs.core.chunk_append(b__77198,metabase.util.humanization.capitalize_word(part));

var G__77205 = (i__77197 + (1));
i__77197 = G__77205;
continue;
} else {
var G__77206 = (i__77197 + (1));
i__77197 = G__77206;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77198),metabase$util$humanization$iter__77195(cljs.core.chunk_rest(s__77196__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77198),null);
}
} else {
var part = cljs.core.first(s__77196__$2);
if((!(clojure.string.blank_QMARK_(part)))){
return cljs.core.cons(metabase.util.humanization.capitalize_word(part),metabase$util$humanization$iter__77195(cljs.core.rest(s__77196__$2)));
} else {
var G__77207 = cljs.core.rest(s__77196__$2);
s__77196__$1 = G__77207;
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
return iter__5480__auto__(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/[-_\s]+/));
})());
if(clojure.string.blank_QMARK_(humanized)){
return s;
} else {
return humanized;
}
} else {
return null;
}
}));
metabase.util.humanization.name__GT_human_readable_name.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"none","none",1333468478),(function (_strategy,s){
return s;
}));

//# sourceMappingURL=metabase.util.humanization.js.map
