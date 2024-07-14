var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.hierarchy.js");
require("./metabase.lib.schema.expression.js");
require("./metabase.lib.schema.mbql_clause.js");
require("./metabase.shared.util.i18n.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.schema.aggregation.js");

goog.provide('metabase.lib.schema.aggregation');
metabase.lib.schema.mbql_clause.define_catn_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword("type","Integer","type/Integer",-638928316),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expression","expression",202311876),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"?","?",-1703165233),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","expression","metabase.lib.schema.expression/expression",-1389098704)], null)], null)], null)], null)], 0));
metabase.lib.schema.mbql_clause.define_catn_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"cum-count","cum-count",-1964431543),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword("type","Integer","type/Integer",-638928316),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expression","expression",202311876),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"?","?",-1703165233),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","expression","metabase.lib.schema.expression/expression",-1389098704)], null)], null)], null)], null)], 0));
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"avg","avg",197406200),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword("type","Float","type/Float",1261800143),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","number","metabase.lib.schema.expression/number",779948930)], null)], null)], 0));
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"distinct","distinct",-1788879121),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword("type","Integer","type/Integer",-638928316),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","expression","metabase.lib.schema.expression/expression",-1389098704)], null)], null)], 0));
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"count-where","count-where",385407720),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword("type","Integer","type/Integer",-638928316),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","boolean","metabase.lib.schema.expression/boolean",-1396506592)], null)], null)], 0));
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"max","max",61366548),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","orderable","metabase.lib.schema.expression/orderable",-1555566130)], null)], null)], 0));
metabase.lib.hierarchy.derive(new cljs.core.Keyword("metabase.lib.schema.aggregation","type-is-type-of-first-arg-or-number","metabase.lib.schema.aggregation/type-is-type-of-first-arg-or-number",364841426),new cljs.core.Keyword("lib.type-of","type-is-type-of-first-arg","lib.type-of/type-is-type-of-first-arg",-317600808));
metabase.lib.schema.expression.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.schema.aggregation","type-is-type-of-first-arg-or-number","metabase.lib.schema.aggregation/type-is-type-of-first-arg-or-number",364841426),(function (expr){
var expr_type = (function (){var fexpr__75296 = cljs.core.get_method(metabase.lib.schema.expression.type_of_method,new cljs.core.Keyword("lib.type-of","type-is-type-of-first-arg","lib.type-of/type-is-type-of-first-arg",-317600808));
return (fexpr__75296.cljs$core$IFn$_invoke$arity$1 ? fexpr__75296.cljs$core$IFn$_invoke$arity$1(expr) : fexpr__75296.call(null,expr));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expr_type,new cljs.core.Keyword("metabase.lib.schema.expression","type.unknown","metabase.lib.schema.expression/type.unknown",-98159107))){
return new cljs.core.Keyword("type","Number","type/Number",-2071693690);
} else {
return expr_type;
}
}));
metabase.lib.hierarchy.derive(new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword("metabase.lib.schema.aggregation","type-is-type-of-first-arg-or-number","metabase.lib.schema.aggregation/type-is-type-of-first-arg-or-number",364841426));
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"median","median",569566131),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","number","metabase.lib.schema.expression/number",779948930)], null)], null)], 0));
metabase.lib.hierarchy.derive(new cljs.core.Keyword(null,"median","median",569566131),new cljs.core.Keyword("metabase.lib.schema.aggregation","type-is-type-of-first-arg-or-number","metabase.lib.schema.aggregation/type-is-type-of-first-arg-or-number",364841426));
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"min","min",444991522),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","orderable","metabase.lib.schema.expression/orderable",-1555566130)], null)], null)], 0));
metabase.lib.hierarchy.derive(new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword("metabase.lib.schema.aggregation","type-is-type-of-first-arg-or-number","metabase.lib.schema.aggregation/type-is-type-of-first-arg-or-number",364841426));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.aggregation","percentile.percentile","metabase.lib.schema.aggregation/percentile.percentile",-144637711),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"valid percentile"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","number","metabase.lib.schema.expression/number",779948930)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"percentile must be between zero and one"], null),(function (p1__75297_SHARP_){
return ((((0) <= p1__75297_SHARP_)) && ((p1__75297_SHARP_ <= (1))));
})], null)], null));
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"percentile","percentile",-601188752),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","number","metabase.lib.schema.expression/number",779948930)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.aggregation","percentile.percentile","metabase.lib.schema.aggregation/percentile.percentile",-144637711)], null)], 0));
metabase.lib.hierarchy.derive(new cljs.core.Keyword(null,"percentile","percentile",-601188752),new cljs.core.Keyword("metabase.lib.schema.aggregation","type-is-type-of-first-arg-or-number","metabase.lib.schema.aggregation/type-is-type-of-first-arg-or-number",364841426));
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"share","share",-589433933),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword("type","Float","type/Float",1261800143),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","boolean","metabase.lib.schema.expression/boolean",-1396506592)], null)], null)], 0));
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stddev","stddev",-865474939),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword("type","Float","type/Float",1261800143),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","number","metabase.lib.schema.expression/number",779948930)], null)], null)], 0));
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"sum","sum",136986814),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","number","metabase.lib.schema.expression/number",779948930)], null)], null)], 0));
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"cum-sum","cum-sum",2064902349),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","number","metabase.lib.schema.expression/number",779948930)], null)], null)], 0));
metabase.lib.hierarchy.derive(new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword("metabase.lib.schema.aggregation","type-is-type-of-first-arg-or-number","metabase.lib.schema.aggregation/type-is-type-of-first-arg-or-number",364841426));
metabase.lib.hierarchy.derive(new cljs.core.Keyword(null,"cum-sum","cum-sum",2064902349),new cljs.core.Keyword("metabase.lib.schema.aggregation","type-is-type-of-first-arg-or-number","metabase.lib.schema.aggregation/type-is-type-of-first-arg-or-number",364841426));
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"sum-where","sum-where",2135348428),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","number","metabase.lib.schema.expression/number",779948930)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","boolean","metabase.lib.schema.expression/boolean",-1396506592)], null)], null)], 0));
metabase.lib.hierarchy.derive(new cljs.core.Keyword(null,"sum-where","sum-where",2135348428),new cljs.core.Keyword("metabase.lib.schema.aggregation","type-is-type-of-first-arg-or-number","metabase.lib.schema.aggregation/type-is-type-of-first-arg-or-number",364841426));
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"var","var",-769682797),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword("type","Float","type/Float",1261800143),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","number","metabase.lib.schema.expression/number",779948930)], null)], null)], 0));
var seq__75298_75372 = cljs.core.seq(new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avg","avg",197406200),new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"cum-count","cum-count",-1964431543),new cljs.core.Keyword(null,"count-where","count-where",385407720),new cljs.core.Keyword(null,"distinct","distinct",-1788879121),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"median","median",569566131),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"percentile","percentile",-601188752),new cljs.core.Keyword(null,"share","share",-589433933),new cljs.core.Keyword(null,"stddev","stddev",-865474939),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"cum-sum","cum-sum",2064902349),new cljs.core.Keyword(null,"sum-where","sum-where",2135348428),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"metric","metric",408798077)], null));
var chunk__75299_75373 = null;
var count__75300_75374 = (0);
var i__75301_75375 = (0);
while(true){
if((i__75301_75375 < count__75300_75374)){
var tag_75376 = chunk__75299_75373.cljs$core$IIndexed$_nth$arity$2(null,i__75301_75375);
metabase.lib.hierarchy.derive(tag_75376,new cljs.core.Keyword("metabase.lib.schema.aggregation","aggregation-clause-tag","metabase.lib.schema.aggregation/aggregation-clause-tag",-1394393003));


var G__75377 = seq__75298_75372;
var G__75378 = chunk__75299_75373;
var G__75379 = count__75300_75374;
var G__75380 = (i__75301_75375 + (1));
seq__75298_75372 = G__75377;
chunk__75299_75373 = G__75378;
count__75300_75374 = G__75379;
i__75301_75375 = G__75380;
continue;
} else {
var temp__5804__auto___75381 = cljs.core.seq(seq__75298_75372);
if(temp__5804__auto___75381){
var seq__75298_75382__$1 = temp__5804__auto___75381;
if(cljs.core.chunked_seq_QMARK_(seq__75298_75382__$1)){
var c__5525__auto___75383 = cljs.core.chunk_first(seq__75298_75382__$1);
var G__75384 = cljs.core.chunk_rest(seq__75298_75382__$1);
var G__75385 = c__5525__auto___75383;
var G__75386 = cljs.core.count(c__5525__auto___75383);
var G__75387 = (0);
seq__75298_75372 = G__75384;
chunk__75299_75373 = G__75385;
count__75300_75374 = G__75386;
i__75301_75375 = G__75387;
continue;
} else {
var tag_75388 = cljs.core.first(seq__75298_75382__$1);
metabase.lib.hierarchy.derive(tag_75388,new cljs.core.Keyword("metabase.lib.schema.aggregation","aggregation-clause-tag","metabase.lib.schema.aggregation/aggregation-clause-tag",-1394393003));


var G__75389 = cljs.core.next(seq__75298_75382__$1);
var G__75390 = null;
var G__75391 = (0);
var G__75392 = (0);
seq__75298_75372 = G__75389;
chunk__75299_75373 = G__75390;
count__75300_75374 = G__75391;
i__75301_75375 = G__75392;
continue;
}
} else {
}
}
break;
}
/**
 * A clause is a valid aggregation if it is an aggregation clause, or it is an expression that transitively contains
 *   a single aggregation clause.
 */
metabase.lib.schema.aggregation.aggregation_expression_QMARK_ = (function metabase$lib$schema$aggregation$aggregation_expression_QMARK_(x){
var temp__5804__auto__ = (function (){var and__5000__auto__ = cljs.core.vector_QMARK_(x);
if(and__5000__auto__){
return x;
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var vec__75344 = temp__5804__auto__;
var seq__75345 = cljs.core.seq(vec__75344);
var first__75346 = cljs.core.first(seq__75345);
var seq__75345__$1 = cljs.core.next(seq__75345);
var tag = first__75346;
var first__75346__$1 = cljs.core.first(seq__75345__$1);
var seq__75345__$2 = cljs.core.next(seq__75345__$1);
var _opts = first__75346__$1;
var args = seq__75345__$2;
var or__5002__auto__ = metabase.lib.hierarchy.isa_QMARK_(tag,new cljs.core.Keyword("metabase.lib.schema.aggregation","aggregation-clause-tag","metabase.lib.schema.aggregation/aggregation-clause-tag",-1394393003));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return cljs.core.some(metabase.lib.schema.aggregation.aggregation_expression_QMARK_,args);
}
} else {
return null;
}
});
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.aggregation","aggregation","metabase.lib.schema.aggregation/aggregation",-736862750),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.mbql-clause","clause","metabase.lib.schema.mbql-clause/clause",955279388)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"Valid aggregation clause"], null),metabase.lib.schema.aggregation.aggregation_expression_QMARK_], null)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.aggregation","aggregations","metabase.lib.schema.aggregation/aggregations",-203649172),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.aggregation","aggregation","metabase.lib.schema.aggregation/aggregation",-736862750)], null)], null));
/**
 * The list of available aggregation operator.
 *   The order of operators is relevant for the front end.
 */
metabase.lib.schema.aggregation.aggregation_operators = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"requires-column?","requires-column?",1623131448),false,new cljs.core.Keyword(null,"driver-feature","driver-feature",1905324248),new cljs.core.Keyword(null,"basic-aggregations","basic-aggregations",-1628959228),new cljs.core.Keyword(null,"display-info","display-info",-816930907),(function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.shared.util.i18n.js_i18n("Count of rows"),new cljs.core.Keyword(null,"column-name","column-name",551523580),metabase.shared.util.i18n.js_i18n("Count"),new cljs.core.Keyword(null,"description","description",-1428560544),metabase.shared.util.i18n.js_i18n("Total number of rows in the answer.")], null);
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"supported-field","supported-field",-2061545519),new cljs.core.Keyword("metabase.lib.types.constants","summable","metabase.lib.types.constants/summable",54756759),new cljs.core.Keyword(null,"requires-column?","requires-column?",1623131448),true,new cljs.core.Keyword(null,"driver-feature","driver-feature",1905324248),new cljs.core.Keyword(null,"basic-aggregations","basic-aggregations",-1628959228),new cljs.core.Keyword(null,"display-info","display-info",-816930907),(function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.shared.util.i18n.js_i18n("Sum of ..."),new cljs.core.Keyword(null,"column-name","column-name",551523580),metabase.shared.util.i18n.js_i18n("Sum"),new cljs.core.Keyword(null,"description","description",-1428560544),metabase.shared.util.i18n.js_i18n("Sum of all the values of a column.")], null);
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.Keyword(null,"avg","avg",197406200),new cljs.core.Keyword(null,"supported-field","supported-field",-2061545519),new cljs.core.Keyword("metabase.lib.types.constants","summable","metabase.lib.types.constants/summable",54756759),new cljs.core.Keyword(null,"requires-column?","requires-column?",1623131448),true,new cljs.core.Keyword(null,"driver-feature","driver-feature",1905324248),new cljs.core.Keyword(null,"basic-aggregations","basic-aggregations",-1628959228),new cljs.core.Keyword(null,"display-info","display-info",-816930907),(function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.shared.util.i18n.js_i18n("Average of ..."),new cljs.core.Keyword(null,"column-name","column-name",551523580),metabase.shared.util.i18n.js_i18n("Average"),new cljs.core.Keyword(null,"description","description",-1428560544),metabase.shared.util.i18n.js_i18n("Average of all the values of a column")], null);
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.Keyword(null,"median","median",569566131),new cljs.core.Keyword(null,"supported-field","supported-field",-2061545519),new cljs.core.Keyword("metabase.lib.types.constants","summable","metabase.lib.types.constants/summable",54756759),new cljs.core.Keyword(null,"requires-column?","requires-column?",1623131448),true,new cljs.core.Keyword(null,"driver-feature","driver-feature",1905324248),new cljs.core.Keyword(null,"percentile-aggregations","percentile-aggregations",1241763983),new cljs.core.Keyword(null,"display-info","display-info",-816930907),(function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.shared.util.i18n.js_i18n("Median of ..."),new cljs.core.Keyword(null,"column-name","column-name",551523580),metabase.shared.util.i18n.js_i18n("Median"),new cljs.core.Keyword(null,"description","description",-1428560544),metabase.shared.util.i18n.js_i18n("Median of all the values of a column")], null);
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.Keyword(null,"distinct","distinct",-1788879121),new cljs.core.Keyword(null,"supported-field","supported-field",-2061545519),new cljs.core.Keyword(null,"any","any",1705907423),new cljs.core.Keyword(null,"requires-column?","requires-column?",1623131448),true,new cljs.core.Keyword(null,"driver-feature","driver-feature",1905324248),new cljs.core.Keyword(null,"basic-aggregations","basic-aggregations",-1628959228),new cljs.core.Keyword(null,"display-info","display-info",-816930907),(function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.shared.util.i18n.js_i18n("Number of distinct values of ..."),new cljs.core.Keyword(null,"column-name","column-name",551523580),metabase.shared.util.i18n.js_i18n("Distinct values"),new cljs.core.Keyword(null,"description","description",-1428560544),metabase.shared.util.i18n.js_i18n("Number of unique values of a column among all the rows in the answer.")], null);
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.Keyword(null,"cum-sum","cum-sum",2064902349),new cljs.core.Keyword(null,"supported-field","supported-field",-2061545519),new cljs.core.Keyword("metabase.lib.types.constants","summable","metabase.lib.types.constants/summable",54756759),new cljs.core.Keyword(null,"requires-column?","requires-column?",1623131448),true,new cljs.core.Keyword(null,"driver-feature","driver-feature",1905324248),new cljs.core.Keyword(null,"basic-aggregations","basic-aggregations",-1628959228),new cljs.core.Keyword(null,"display-info","display-info",-816930907),(function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.shared.util.i18n.js_i18n("Cumulative sum of ..."),new cljs.core.Keyword(null,"column-name","column-name",551523580),metabase.shared.util.i18n.js_i18n("Sum"),new cljs.core.Keyword(null,"description","description",-1428560544),metabase.shared.util.i18n.js_i18n("Additive sum of all the values of a column.\ne.x. total revenue over time.")], null);
})], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.Keyword(null,"cum-count","cum-count",-1964431543),new cljs.core.Keyword(null,"requires-column?","requires-column?",1623131448),false,new cljs.core.Keyword(null,"driver-feature","driver-feature",1905324248),new cljs.core.Keyword(null,"basic-aggregations","basic-aggregations",-1628959228),new cljs.core.Keyword(null,"display-info","display-info",-816930907),(function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.shared.util.i18n.js_i18n("Cumulative count of rows"),new cljs.core.Keyword(null,"column-name","column-name",551523580),metabase.shared.util.i18n.js_i18n("Count"),new cljs.core.Keyword(null,"description","description",-1428560544),metabase.shared.util.i18n.js_i18n("Additive count of the number of rows.\ne.x. total number of sales over time.")], null);
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.Keyword(null,"stddev","stddev",-865474939),new cljs.core.Keyword(null,"supported-field","supported-field",-2061545519),new cljs.core.Keyword("metabase.lib.types.constants","summable","metabase.lib.types.constants/summable",54756759),new cljs.core.Keyword(null,"requires-column?","requires-column?",1623131448),true,new cljs.core.Keyword(null,"driver-feature","driver-feature",1905324248),new cljs.core.Keyword(null,"standard-deviation-aggregations","standard-deviation-aggregations",-1683333464),new cljs.core.Keyword(null,"display-info","display-info",-816930907),(function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.shared.util.i18n.js_i18n("Standard deviation of ..."),new cljs.core.Keyword(null,"column-name","column-name",551523580),metabase.shared.util.i18n.js_i18n("SD"),new cljs.core.Keyword(null,"description","description",-1428560544),metabase.shared.util.i18n.js_i18n("Number which expresses how much the values of a column vary among all rows in the answer.")], null);
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"supported-field","supported-field",-2061545519),new cljs.core.Keyword("metabase.lib.types.constants","scope","metabase.lib.types.constants/scope",-390150453),new cljs.core.Keyword(null,"requires-column?","requires-column?",1623131448),true,new cljs.core.Keyword(null,"driver-feature","driver-feature",1905324248),new cljs.core.Keyword(null,"basic-aggregations","basic-aggregations",-1628959228),new cljs.core.Keyword(null,"display-info","display-info",-816930907),(function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.shared.util.i18n.js_i18n("Minimum of ..."),new cljs.core.Keyword(null,"column-name","column-name",551523580),metabase.shared.util.i18n.js_i18n("Min"),new cljs.core.Keyword(null,"description","description",-1428560544),metabase.shared.util.i18n.js_i18n("Minimum value of a column")], null);
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"supported-field","supported-field",-2061545519),new cljs.core.Keyword("metabase.lib.types.constants","scope","metabase.lib.types.constants/scope",-390150453),new cljs.core.Keyword(null,"requires-column?","requires-column?",1623131448),true,new cljs.core.Keyword(null,"driver-feature","driver-feature",1905324248),new cljs.core.Keyword(null,"basic-aggregations","basic-aggregations",-1628959228),new cljs.core.Keyword(null,"display-info","display-info",-816930907),(function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.shared.util.i18n.js_i18n("Maximum of ..."),new cljs.core.Keyword(null,"column-name","column-name",551523580),metabase.shared.util.i18n.js_i18n("Max"),new cljs.core.Keyword(null,"description","description",-1428560544),metabase.shared.util.i18n.js_i18n("Maximum value of a column")], null);
})], null)], null);
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.aggregation","operator","metabase.lib.schema.aggregation/operator",2070038764),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword("operator","aggregation","operator/aggregation",-1961510924)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"short","short",1928760516),cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"short","short",1928760516)),metabase.lib.schema.aggregation.aggregation_operators)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"supported-field","supported-field",-2061545519),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"requires-column?","requires-column?",1623131448),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"driver-feature","driver-feature",1905324248),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display-info","display-info",-816930907),cljs.core.fn_QMARK_], null)], null));

//# sourceMappingURL=metabase.lib.schema.aggregation.js.map
