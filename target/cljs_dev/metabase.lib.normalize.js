var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./malli.core.js");
require("./malli.transform.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.mbql_clause.js");
require("./metabase.lib.schema.metadata.js");
require("./metabase.shared.util.i18n.js");
require("./metabase.util.js");
require("./metabase.util.log.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.normalize.js");

goog.provide('metabase.lib.normalize');
metabase.lib.normalize.lib_type = (function metabase$lib$normalize$lib_type(x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.some((function (p1__76445_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,p1__76445_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","type","lib/type",1175424801),"lib/type"], null)));
} else {
return null;
}
});
metabase.lib.normalize.lib_type__GT_schema = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("metadata","segment","metadata/segment",-1286738015),new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),new cljs.core.Keyword("metadata","database","metadata/database",-924828824),new cljs.core.Keyword("mbql","query","mbql/query",-1285688662),new cljs.core.Keyword("metadata","metric","metadata/metric",538003406),new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194),new cljs.core.Keyword("metadata","table","metadata/table",-882499405),new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798),new cljs.core.Keyword("metadata","card","metadata/card",-1039333889)],[new cljs.core.Keyword("metabase.lib.schema.metadata","segment","metabase.lib.schema.metadata/segment",-393440267),new cljs.core.Keyword("metabase.lib.schema.metadata","column","metabase.lib.schema.metadata/column",-570344650),new cljs.core.Keyword("metabase.lib.schema.metadata","database","metabase.lib.schema.metadata/database",270611124),new cljs.core.Keyword("metabase.lib.schema","query","metabase.lib.schema/query",-1207387140),new cljs.core.Keyword("metabase.lib.schema.metadata","metric","metabase.lib.schema.metadata/metric",1984974682),new cljs.core.Keyword("metabase.lib.schema","stage.native","metabase.lib.schema/stage.native",-1206212320),new cljs.core.Keyword("metabase.lib.schema.metadata","table","metabase.lib.schema.metadata/table",-2128230385),new cljs.core.Keyword("metabase.lib.schema","stage.mbql","metabase.lib.schema/stage.mbql",1051351388),new cljs.core.Keyword("metabase.lib.schema.metadata","card","metabase.lib.schema.metadata/card",147726027)]);
metabase.lib.normalize.infer_schema = (function metabase$lib$normalize$infer_schema(x){
if(cljs.core.map_QMARK_(x)){
var or__5002__auto__ = (function (){var G__76447 = metabase.lib.normalize.lib_type(x);
return (metabase.lib.normalize.lib_type__GT_schema.cljs$core$IFn$_invoke$arity$1 ? metabase.lib.normalize.lib_type__GT_schema.cljs$core$IFn$_invoke$arity$1(G__76447) : metabase.lib.normalize.lib_type__GT_schema.call(null,G__76447));
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"map","map",1371690461);
}
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.vector_QMARK_(x);
if(and__5000__auto__){
return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.simple_keyword_QMARK_,cljs.core.string_QMARK_)(cljs.core.first(x));
} else {
return and__5000__auto__;
}
})())){
return metabase.lib.schema.mbql_clause.tag__GT_registered_schema_name(cljs.core.first(x));
} else {
return new cljs.core.Keyword(null,"any","any",1705907423);

}
}
});
/**
 * If normalization errors somewhere, just log the error and return the partially-normalized result. Easier to debug
 *   this way.
 */
metabase.lib.normalize.default_error_fn = (function metabase$lib$normalize$default_error_fn(error){
var level__73199__auto___76490 = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"warn","warn",-436710552));
var logger__73200__auto___76491 = "metabase.lib.normalize";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__73200__auto___76491,level__73199__auto___76490))){
var x__73201__auto___76492 = "Error normalizing pMBQL:\n%s";
if((x__73201__auto___76492 instanceof Error)){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73200__auto___76491,level__73199__auto___76490,metabase.util.log.format_msg(metabase.util.pprint_to_str.cljs$core$IFn$_invoke$arity$1(error)),x__73201__auto___76492);
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73200__auto___76491,level__73199__auto___76490,metabase.util.log.format_msg.cljs$core$IFn$_invoke$arity$variadic(x__73201__auto___76492,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.util.pprint_to_str.cljs$core$IFn$_invoke$arity$1(error)], 0)),null);
}
} else {
}

return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(error);
});
metabase.lib.normalize._STAR_error_fn_STAR_ = metabase.lib.normalize.default_error_fn;
metabase.lib.normalize.coercer = (function metabase$lib$normalize$coercer(schema){
return metabase.util.malli.registry.cached(new cljs.core.Keyword("metabase.lib.normalize","coercer","metabase.lib.normalize/coercer",2101244775),schema,(function (){
var respond = cljs.core.identity;
var raise = new cljs.core.Var(function(){return metabase.lib.normalize._STAR_error_fn_STAR_;},new cljs.core.Symbol("metabase.lib.normalize","*error-fn*","metabase.lib.normalize/*error-fn*",-1535715190,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"metabase.lib.normalize","metabase.lib.normalize",1475547913,null),new cljs.core.Symbol(null,"*error-fn*","*error-fn*",1604807254,null),"metabase/lib/normalize.cljc",36,1,true,49,49,cljs.core.List.EMPTY,null,(cljs.core.truth_(metabase.lib.normalize._STAR_error_fn_STAR_)?metabase.lib.normalize._STAR_error_fn_STAR_.cljs$lang$test:null)]));
return malli.core.coercer.cljs$core$IFn$_invoke$arity$4(schema,malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"normalize","normalize",-1904390051)], null)], 0)),respond,raise);
}));
});
/**
 * Ensure some part of an MBQL query `x`, e.g. a clause or map, is in the right shape after coming in from JavaScript or
 *   deserialized JSON (from the app DB or a REST API request). This is intended for things that are already in a
 *   generally correct pMBQL; to 'normalize' things from legacy MBQL, use [[metabase.lib.convert]].
 * 
 *   Normalization logic is defined in various schemas; grep for `:decode/normalize` in the `metabase.lib.schema*`
 *   namespaces.
 * 
 *   The default implementation will keywordize keys for maps, and convert some known keys
 *   using [[default-map-value-fns]]; for MBQL clauses, it will convert the clause name to a keyword and recursively
 *   normalize its options and arguments. Implement this method if you need custom behavior for something.
 * 
 *   Pass in a `nil` schema to automatically attempt to infer the schema based on `x` itself.
 * 
 *   By default, does not throw Exceptions -- just logs them and returns what it was able to normalize, but you can pass
 *   in the option `{:throw? true}` to have it throw exceptions when normalization fails.
 */
metabase.lib.normalize.normalize = (function metabase$lib$normalize$normalize(var_args){
var G__76472 = arguments.length;
switch (G__76472) {
case 1:
return metabase.lib.normalize.normalize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.lib.normalize.normalize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return metabase.lib.normalize.normalize.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.normalize.normalize.cljs$core$IFn$_invoke$arity$1 = (function (x){
return metabase.lib.normalize.normalize.cljs$core$IFn$_invoke$arity$2(null,x);
}));

(metabase.lib.normalize.normalize.cljs$core$IFn$_invoke$arity$2 = (function (schema,x){
return metabase.lib.normalize.normalize.cljs$core$IFn$_invoke$arity$3(schema,x,null);
}));

(metabase.lib.normalize.normalize.cljs$core$IFn$_invoke$arity$3 = (function (schema,x,p__76482){
var map__76483 = p__76482;
var map__76483__$1 = cljs.core.__destructure_map(map__76483);
var _options = map__76483__$1;
var throw_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__76483__$1,new cljs.core.Keyword(null,"throw?","throw?",-2036749118),false);
var schema__$1 = (function (){var or__5002__auto__ = schema;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return metabase.lib.normalize.infer_schema(x);
}
})();
var thunk = (function (){
var fexpr__76487 = metabase.lib.normalize.coercer(schema__$1);
return (fexpr__76487.cljs$core$IFn$_invoke$arity$1 ? fexpr__76487.cljs$core$IFn$_invoke$arity$1(x) : fexpr__76487.call(null,x));
});
if(cljs.core.truth_(throw_QMARK_)){
var _STAR_error_fn_STAR__orig_val__76488 = metabase.lib.normalize._STAR_error_fn_STAR_;
var _STAR_error_fn_STAR__temp_val__76489 = (function (error){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.i18n.js_i18n("Normalization error"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"error","error",-978969032),error], null));
});
(metabase.lib.normalize._STAR_error_fn_STAR_ = _STAR_error_fn_STAR__temp_val__76489);

try{return thunk();
}finally {(metabase.lib.normalize._STAR_error_fn_STAR_ = _STAR_error_fn_STAR__orig_val__76488);
}} else {
return thunk();
}
}));

(metabase.lib.normalize.normalize.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=metabase.lib.normalize.js.map
