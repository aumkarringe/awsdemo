var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./metabase.types.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.schema.common.js");

goog.provide('metabase.lib.schema.common');
/**
 * Base normalization behavior for something that should be a keyword: calls [[clojure.core/keyword]] on it if it is a
 *   string. This is preferable to using [[clojure.core/keyword]] directly, because that will be tried on things that
 *   should not get converted to keywords, like numbers.
 */
metabase.lib.schema.common.normalize_keyword = (function metabase$lib$schema$common$normalize_keyword(x){
var G__74988 = x;
if(typeof x === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__74988);
} else {
return G__74988;
}
});
/**
 * Base normalization behavior for a pMBQL map: keywordize keys and keywordize `:lib/type`.
 */
metabase.lib.schema.common.normalize_map = (function metabase$lib$schema$common$normalize_map(m){
var m__$1 = (function (){var G__74990 = m;
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.map_QMARK_(m);
if(and__5000__auto__){
return cljs.core.some(cljs.core.string_QMARK_,cljs.core.keys(m));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.update_keys(G__74990,cljs.core.keyword);
} else {
return G__74990;
}
})();
var G__74992 = m__$1;
if(typeof new cljs.core.Keyword("lib","type","lib/type",1175424801).cljs$core$IFn$_invoke$arity$1(m__$1) === 'string'){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__74992,new cljs.core.Keyword("lib","type","lib/type",1175424801),cljs.core.keyword);
} else {
return G__74992;
}
});
/**
 * Base normalization behavior for things that should be string map keys. Converts keywords to strings if needed. This
 *   is mostly to work around the REST API recursively keywordizing the entire request body by default.
 */
metabase.lib.schema.common.normalize_string_key = (function metabase$lib$schema$common$normalize_string_key(x){
var G__74993 = x;
if((x instanceof cljs.core.Keyword)){
return metabase.util.qualified_name(G__74993);
} else {
return G__74993;
}
});
/**
 * Inputs: [x]
 *   Return: [:maybe :keyword]
 *        
 * 
 *   If `x` is a (possibly not-yet-normalized) MBQL clause, return its `tag`.
 */
metabase.lib.schema.common.mbql_clause_tag = (function metabase$lib$schema$common$mbql_clause_tag(x){
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.vector_QMARK_(x);
if(and__5000__auto__){
return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.string_QMARK_)(cljs.core.first(x));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(x));
} else {
return null;
}
});
/**
 * Inputs: [tag :- :keyword x]
 *   Return: :any
 *        
 * 
 *   Whether `x` is a (possibly not-yet-normalized) MBQL clause with `tag`. Does not check that the clause is valid.
 */
metabase.lib.schema.common.is_clause_QMARK_ = (function metabase$lib$schema$common$is_clause_QMARK_(tag,x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(metabase.lib.schema.common.mbql_clause_tag(x),tag);
});
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.common","non-blank-string","metabase.lib.schema.common/non-blank-string",-2032366619),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"non-blank string"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"non-blank string"], null),cljs.core.complement(clojure.string.blank_QMARK_)], null)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.common","int-greater-than-or-equal-to-zero","metabase.lib.schema.common/int-greater-than-or-equal-to-zero",-1646435681),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","message","error/message",-502809098),"integer greater than or equal to zero",new cljs.core.Keyword(null,"min","min",444991522),(0)], null)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.common","positive-number","metabase.lib.schema.common/positive-number",2061626826),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"positive number"], null),cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.number_QMARK_,cljs.core.pos_QMARK_)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.common","uuid","metabase.lib.schema.common/uuid",1172938098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("decode","normalize","decode/normalize",1047511567),(function (x){
var G__75004 = x;
if(cljs.core.uuid_QMARK_(x)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__75004);
} else {
return G__75004;
}
}),new cljs.core.Keyword(null,"min","min",444991522),(36),new cljs.core.Keyword(null,"max","max",61366548),(36)], null)], null));
metabase.lib.schema.common.semantic_type_QMARK_ = (function metabase$lib$schema$common$semantic_type_QMARK_(x){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword("Semantic","*","Semantic/*",-546724996));
});
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.common","semantic-type","metabase.lib.schema.common/semantic-type",-1623124128),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("decode","normalize","decode/normalize",1047511567),metabase.lib.schema.common.normalize_keyword], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","message","error/message",-502809098),"valid semantic type",new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p__75005,_){
var map__75006 = p__75005;
var map__75006__$1 = cljs.core.__destructure_map(map__75006);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75006__$1,new cljs.core.Keyword(null,"value","value",305978217));
return ["Not a valid semantic type: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('');
})], null),metabase.lib.schema.common.semantic_type_QMARK_], null)], null));
metabase.lib.schema.common.relation_type_QMARK_ = (function metabase$lib$schema$common$relation_type_QMARK_(x){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword("Relation","*","Relation/*",-706261522));
});
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.common","relation-type","metabase.lib.schema.common/relation-type",1412287664),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("decode","normalize","decode/normalize",1047511567),metabase.lib.schema.common.normalize_keyword], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","message","error/message",-502809098),"valid relation type",new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p__75007,_){
var map__75008 = p__75007;
var map__75008__$1 = cljs.core.__destructure_map(map__75008);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75008__$1,new cljs.core.Keyword(null,"value","value",305978217));
return ["Not a valid relation type: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('');
})], null),metabase.lib.schema.common.relation_type_QMARK_], null)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.common","semantic-or-relation-type","metabase.lib.schema.common/semantic-or-relation-type",-158604052),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("doc","message","doc/message",-406025466),"valid semantic or relation type"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("decode","normalize","decode/normalize",1047511567),metabase.lib.schema.common.normalize_keyword], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","message","error/message",-502809098),"valid semantic or relation type",new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p__75013,_){
var map__75014 = p__75013;
var map__75014__$1 = cljs.core.__destructure_map(map__75014);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75014__$1,new cljs.core.Keyword(null,"value","value",305978217));
return ["Not a valid semantic or relation type: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('');
})], null),cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(metabase.lib.schema.common.semantic_type_QMARK_,metabase.lib.schema.common.relation_type_QMARK_)], null)], null));
metabase.lib.schema.common.base_type_QMARK_ = (function metabase$lib$schema$common$base_type_QMARK_(x){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword("type","*","type/*",-1283496752));
});
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.common","base-type","metabase.lib.schema.common/base-type",999524206),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("decode","normalize","decode/normalize",1047511567),metabase.lib.schema.common.normalize_keyword], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","message","error/message",-502809098),"valid base type",new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p__75017,_){
var map__75018 = p__75017;
var map__75018__$1 = cljs.core.__destructure_map(map__75018);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75018__$1,new cljs.core.Keyword(null,"value","value",305978217));
return ["Not a valid base type: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('');
})], null),metabase.lib.schema.common.base_type_QMARK_], null)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.common","options","metabase.lib.schema.common/options",-1078359294),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("decode","normalize","decode/normalize",1047511567),(function (m){
var m__$1 = metabase.lib.schema.common.normalize_map(m);
var G__75024 = m__$1;
if(cljs.core.not(new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720).cljs$core$IFn$_invoke$arity$1(m__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75024,new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()));
} else {
return G__75024;
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720),new cljs.core.Keyword("metabase.lib.schema.common","uuid","metabase.lib.schema.common/uuid",1172938098)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword("metabase.lib.schema.common","base-type","metabase.lib.schema.common/base-type",999524206)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword("metabase.lib.schema.common","base-type","metabase.lib.schema.common/base-type",999524206)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword("metabase.lib.schema.common","semantic-or-relation-type","metabase.lib.schema.common/semantic-or-relation-type",-158604052)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"database-type","database-type",-426840562),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword("metabase.lib.schema.common","non-blank-string","metabase.lib.schema.common/non-blank-string",-2032366619)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword("metabase.lib.schema.common","non-blank-string","metabase.lib.schema.common/non-blank-string",-2032366619)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display-name","display-name",694513143),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword("metabase.lib.schema.common","non-blank-string","metabase.lib.schema.common/non-blank-string",-2032366619)], null)], null)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.common","external-op","metabase.lib.schema.common/external-op",1918684841),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword("lib","external-op","lib/external-op",-1470923877)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.Keyword(null,"keyword","keyword",811389747)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("metabase.lib.schema.common","options","metabase.lib.schema.common/options",-1078359294)], null)], null));

//# sourceMappingURL=metabase.lib.schema.common.js.map
