var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.set.js");
require("./clojure.walk.js");
require("./medley.core.js");
require("./metabase.legacy_mbql.schema.js");
require("./metabase.legacy_mbql.util.js");
require("./metabase.lib.normalize.js");
require("./metabase.lib.util.match.js");
require("./metabase.shared.util.i18n.js");
require("./metabase.util.js");
require("./metabase.util.log.js");
require("./metabase.util.malli.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.legacy_mbql.normalize.js");

goog.provide('metabase.legacy_mbql.normalize');
/**
 * True if `x` is an MBQL clause (a sequence with a token as its first arg). (This is different from the implementation
 *   in `mbql.u` because it also supports un-normalized clauses. You shouldn't need to use this outside of this
 *   namespace.)
 */
metabase.legacy_mbql.normalize.mbql_clause_QMARK_ = (function metabase$legacy_mbql$normalize$mbql_clause_QMARK_(x){
var and__5000__auto__ = cljs.core.sequential_QMARK_(x);
if(and__5000__auto__){
var and__5000__auto____$1 = (!(cljs.core.map_entry_QMARK_(x)));
if(and__5000__auto____$1){
return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.string_QMARK_)(cljs.core.first(x));
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});
/**
 * Normalize token `x`, but only if it's a keyword or string.
 */
metabase.legacy_mbql.normalize.maybe_normalize_token = (function metabase$legacy_mbql$normalize$maybe_normalize_token(x){
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.string_QMARK_)(x))){
return metabase.legacy_mbql.util.normalize_token(x);
} else {
return x;
}
});
/**
 * If `x` an MBQL clause, and an instance of clauses defined by keyword(s) `k-or-ks`?
 * 
 *  (is-clause? :count [:count 10])        ; -> true
 *  (is-clause? #{:+ :- :* :/} [:+ 10 20]) ; -> true
 * 
 *   (This is different from the implementation in `mbql.u` because it also supports un-normalized clauses. You shouldn't
 *   need to use this outside of this namespace.)
 */
metabase.legacy_mbql.normalize.is_clause_QMARK_ = (function metabase$legacy_mbql$normalize$is_clause_QMARK_(k_or_ks,x){
var and__5000__auto__ = metabase.legacy_mbql.normalize.mbql_clause_QMARK_(x);
if(cljs.core.truth_(and__5000__auto__)){
var clause_name = metabase.legacy_mbql.normalize.maybe_normalize_token(cljs.core.first(x));
if(cljs.core.coll_QMARK_(k_or_ks)){
var fexpr__76508 = cljs.core.set(k_or_ks);
return (fexpr__76508.cljs$core$IFn$_invoke$arity$1 ? fexpr__76508.cljs$core$IFn$_invoke$arity$1(clause_name) : fexpr__76508.call(null,clause_name));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_or_ks,clause_name);
}
} else {
return and__5000__auto__;
}
});
if((typeof metabase !== 'undefined') && (typeof metabase.legacy_mbql !== 'undefined') && (typeof metabase.legacy_mbql.normalize !== 'undefined') && (typeof metabase.legacy_mbql.normalize.normalize_mbql_clause_tokens !== 'undefined')){
} else {
metabase.legacy_mbql.normalize.normalize_mbql_clause_tokens = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__76509 = cljs.core.get_global_hierarchy;
return (fexpr__76509.cljs$core$IFn$_invoke$arity$0 ? fexpr__76509.cljs$core$IFn$_invoke$arity$0() : fexpr__76509.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.legacy-mbql.normalize","normalize-mbql-clause-tokens"),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(metabase.legacy_mbql.normalize.maybe_normalize_token,cljs.core.first),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
metabase.legacy_mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),(function (p__76510){
var vec__76511 = p__76510;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76511,(0),null);
var aggregation_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76511,(1),null);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76511,(2),null);
var G__76514 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),aggregation_index], null);
if((!((option == null)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__76514,option);
} else {
return G__76514;
}
}));
metabase.legacy_mbql.normalize.normalize_ref_opts = (function metabase$legacy_mbql$normalize$normalize_ref_opts(opts){
var opts__$1 = (metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.legacy_mbql.normalize.normalize_tokens.call(null,opts,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)));
var G__76518 = opts__$1;
var G__76518__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(opts__$1))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__76518,new cljs.core.Keyword(null,"base-type","base-type",1167971299),cljs.core.keyword):G__76518);
var G__76518__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"effective-type","effective-type",-355725458).cljs$core$IFn$_invoke$arity$1(opts__$1))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__76518__$1,new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),cljs.core.keyword):G__76518__$1);
var G__76518__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358).cljs$core$IFn$_invoke$arity$1(opts__$1))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__76518__$2,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358),cljs.core.keyword):G__76518__$2);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binning","binning",1709835866).cljs$core$IFn$_invoke$arity$1(opts__$1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__76518__$3,new cljs.core.Keyword(null,"binning","binning",1709835866),(function (binning){
var G__76519 = binning;
if(cljs.core.truth_(new cljs.core.Keyword(null,"strategy","strategy",-1471631918).cljs$core$IFn$_invoke$arity$1(binning))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__76519,new cljs.core.Keyword(null,"strategy","strategy",-1471631918),cljs.core.keyword);
} else {
return G__76519;
}
}));
} else {
return G__76518__$3;
}
});
metabase.legacy_mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"expression","expression",202311876),(function (p__76520){
var vec__76521 = p__76520;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76521,(0),null);
var expression_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76521,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76521,(2),null);
var expression = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expression","expression",202311876),(((expression_name instanceof cljs.core.Keyword))?metabase.util.qualified_name(expression_name):expression_name)], null);
var opts__$1 = cljs.core.not_empty(medley.core.filter_keys(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),null,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358),null,new cljs.core.Keyword(null,"binning","binning",1709835866),null], null), null),metabase.legacy_mbql.normalize.normalize_ref_opts(opts)));
var G__76524 = expression;
if(cljs.core.truth_(opts__$1)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__76524,opts__$1);
} else {
return G__76524;
}
}));
metabase.legacy_mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"binning-strategy","binning-strategy",2063329158),(function (p__76525){
var vec__76526 = p__76525;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76526,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76526,(1),null);
var strategy_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76526,(2),null);
var strategy_param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76526,(3),null);
if(cljs.core.truth_(strategy_param)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(metabase.legacy_mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binning-strategy","binning-strategy",2063329158),field,strategy_name], null)),strategy_param);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binning-strategy","binning-strategy",2063329158),(metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.legacy_mbql.normalize.normalize_tokens.call(null,field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061))),metabase.legacy_mbql.normalize.maybe_normalize_token(strategy_name)], null);
}
}));
metabase.legacy_mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (p__76529){
var vec__76530 = p__76529;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76530,(0),null);
var id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76530,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76530,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),id_or_name,metabase.legacy_mbql.normalize.normalize_ref_opts(opts)], null);
}));
metabase.legacy_mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field-literal","field-literal",-1295883554),(function (p__76533){
var vec__76534 = p__76533;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76534,(0),null);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76534,(1),null);
var field_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76534,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field-literal","field-literal",-1295883554),(((field_name instanceof cljs.core.Keyword))?metabase.util.qualified_name(field_name):field_name),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(field_type)], null);
}));
metabase.legacy_mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"datetime-field","datetime-field",21731696),(function (p__76538){
var vec__76539 = p__76538;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76539,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76539,(1),null);
var as_or_unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76539,(2),null);
var maybe_unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76539,(3),null);
if(cljs.core.truth_(maybe_unit)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datetime-field","datetime-field",21731696),(metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.legacy_mbql.normalize.normalize_tokens.call(null,field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061))),new cljs.core.Keyword(null,"as","as",1148689641),metabase.legacy_mbql.normalize.maybe_normalize_token(maybe_unit)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datetime-field","datetime-field",21731696),(metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.legacy_mbql.normalize.normalize_tokens.call(null,field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061))),metabase.legacy_mbql.normalize.maybe_normalize_token(as_or_unit)], null);
}
}));
metabase.legacy_mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"time-interval","time-interval",704622015),(function (p__76546){
var vec__76547 = p__76546;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76547,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76547,(1),null);
var amount = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76547,(2),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76547,(3),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76547,(4),null);
if(cljs.core.truth_(options)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(metabase.legacy_mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-interval","time-interval",704622015),field,amount,unit], null)),(metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.legacy_mbql.normalize.normalize_tokens.call(null,options,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061))));
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-interval","time-interval",704622015),(metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.legacy_mbql.normalize.normalize_tokens.call(null,field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061))),((cljs.core.integer_QMARK_(amount))?amount:metabase.legacy_mbql.normalize.maybe_normalize_token(amount)),metabase.legacy_mbql.normalize.maybe_normalize_token(unit)], null);
}
}));
metabase.legacy_mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),(function (p__76550){
var vec__76551 = p__76550;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76551,(0),null);
var amount = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76551,(1),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76551,(2),null);
if(cljs.core.truth_(unit)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),amount,metabase.legacy_mbql.normalize.maybe_normalize_token(unit)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),new cljs.core.Keyword(null,"current","current",-1088038603)], null);
}
}));
metabase.legacy_mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"interval","interval",1708495417),(function (p__76554){
var vec__76555 = p__76554;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76555,(0),null);
var amount = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76555,(1),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76555,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"interval","interval",1708495417),amount,metabase.legacy_mbql.normalize.maybe_normalize_token(unit)], null);
}));
metabase.legacy_mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"datetime-add","datetime-add",209603411),(function (p__76558){
var vec__76559 = p__76558;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76559,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76559,(1),null);
var amount = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76559,(2),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76559,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datetime-add","datetime-add",209603411),(metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.legacy_mbql.normalize.normalize_tokens.call(null,field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061))),amount,metabase.legacy_mbql.normalize.maybe_normalize_token(unit)], null);
}));
metabase.legacy_mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"datetime-subtract","datetime-subtract",275307697),(function (p__76564){
var vec__76565 = p__76564;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76565,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76565,(1),null);
var amount = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76565,(2),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76565,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datetime-subtract","datetime-subtract",275307697),(metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.legacy_mbql.normalize.normalize_tokens.call(null,field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061))),amount,metabase.legacy_mbql.normalize.maybe_normalize_token(unit)], null);
}));
metabase.legacy_mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"get-week","get-week",-888059349),(function (p__76568){
var vec__76569 = p__76568;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76569,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76569,(1),null);
var mode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76569,(2),null);
if(cljs.core.truth_(mode)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-week","get-week",-888059349),(metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.legacy_mbql.normalize.normalize_tokens.call(null,field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061))),metabase.legacy_mbql.normalize.maybe_normalize_token(mode)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-week","get-week",-888059349),(metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.legacy_mbql.normalize.normalize_tokens.call(null,field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)))], null);
}
}));
metabase.legacy_mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"temporal-extract","temporal-extract",1781686405),(function (p__76572){
var vec__76573 = p__76572;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76573,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76573,(1),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76573,(2),null);
var mode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76573,(3),null);
if(cljs.core.truth_(mode)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temporal-extract","temporal-extract",1781686405),(metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.legacy_mbql.normalize.normalize_tokens.call(null,field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061))),metabase.legacy_mbql.normalize.maybe_normalize_token(unit),metabase.legacy_mbql.normalize.maybe_normalize_token(mode)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temporal-extract","temporal-extract",1781686405),(metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.legacy_mbql.normalize.normalize_tokens.call(null,field,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061))),metabase.legacy_mbql.normalize.maybe_normalize_token(unit)], null);
}
}));
metabase.legacy_mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"datetime-diff","datetime-diff",1133112155),(function (p__76577){
var vec__76578 = p__76577;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76578,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76578,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76578,(2),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76578,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datetime-diff","datetime-diff",1133112155),(metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.legacy_mbql.normalize.normalize_tokens.call(null,x,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061))),(metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(y,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.legacy_mbql.normalize.normalize_tokens.call(null,y,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061))),metabase.legacy_mbql.normalize.maybe_normalize_token(unit)], null);
}));
metabase.legacy_mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"value","value",305978217),(function (p__76583){
var vec__76584 = p__76583;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76584,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76584,(1),null);
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76584,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),value,info], null);
}));
metabase.legacy_mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"offset","offset",296498311),(function (p__76587){
var vec__76588 = p__76587;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76588,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76588,(1),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76588,(2),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76588,(3),null);
var clause = vec__76588;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(clause),(4))){
} else {
throw (new Error("Assert failed: (= (count clause) 4)"));
}

var opts__$1 = metabase.lib.normalize.normalize.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metabase.lib.schema.common","options","metabase.lib.schema.common/options",-1078359294),(function (){var or__5002__auto__ = opts;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",296498311),opts__$1,(metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(expr,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.legacy_mbql.normalize.normalize_tokens.call(null,expr,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061))),n], null);
}));
metabase.legacy_mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__76597){
var vec__76598 = p__76597;
var seq__76599 = cljs.core.seq(vec__76598);
var first__76600 = cljs.core.first(seq__76599);
var seq__76599__$1 = cljs.core.next(seq__76599);
var clause_name = first__76600;
var args = seq__76599__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.legacy_mbql.normalize.maybe_normalize_token(clause_name)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__76595_SHARP_){
return (metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(p1__76595_SHARP_,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.legacy_mbql.normalize.normalize_tokens.call(null,p1__76595_SHARP_,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)));
})),args);
}));
metabase.legacy_mbql.normalize.aggregation_subclause_QMARK_ = (function metabase$legacy_mbql$normalize$aggregation_subclause_QMARK_(x){
var or__5002__auto__ = (cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.string_QMARK_)(x))?(function (){var G__76603 = metabase.legacy_mbql.normalize.maybe_normalize_token(x);
var fexpr__76602 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 18, [new cljs.core.Keyword(null,"min","min",444991522),null,new cljs.core.Keyword(null,"*","*",-1294732318),null,new cljs.core.Keyword(null,"stddev","stddev",-865474939),null,new cljs.core.Keyword(null,"count-where","count-where",385407720),null,new cljs.core.Keyword(null,"-","-",-2112348439),null,new cljs.core.Keyword(null,"cum-count","cum-count",-1964431543),null,new cljs.core.Keyword(null,"sum-where","sum-where",2135348428),null,new cljs.core.Keyword(null,"/","/",1282502798),null,new cljs.core.Keyword(null,"distinct","distinct",-1788879121),null,new cljs.core.Keyword(null,"percentile","percentile",-601188752),null,new cljs.core.Keyword(null,"+","+",1913524883),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"median","median",569566131),null,new cljs.core.Keyword(null,"share","share",-589433933),null,new cljs.core.Keyword(null,"max","max",61366548),null,new cljs.core.Keyword(null,"count","count",2139924085),null,new cljs.core.Keyword(null,"avg","avg",197406200),null,new cljs.core.Keyword(null,"sum","sum",136986814),null], null), null);
return (fexpr__76602.cljs$core$IFn$_invoke$arity$1 ? fexpr__76602.cljs$core$IFn$_invoke$arity$1(G__76603) : fexpr__76602.call(null,G__76603));
})():null);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.truth_(metabase.legacy_mbql.normalize.mbql_clause_QMARK_(x))){
var G__76608 = cljs.core.first(x);
return (metabase.legacy_mbql.normalize.aggregation_subclause_QMARK_.cljs$core$IFn$_invoke$arity$1 ? metabase.legacy_mbql.normalize.aggregation_subclause_QMARK_.cljs$core$IFn$_invoke$arity$1(G__76608) : metabase.legacy_mbql.normalize.aggregation_subclause_QMARK_.call(null,G__76608));
} else {
return null;
}
}
});
/**
 * For old-style aggregations like `{:aggregation :count}` make sure we normalize the ag type (`:count`). Other wacky
 *   clauses like `{:aggregation [:count :count]}` need to be handled as well :(
 */
metabase.legacy_mbql.normalize.normalize_ag_clause_tokens = (function metabase$legacy_mbql$normalize$normalize_ag_clause_tokens(ag_clause){
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.string_QMARK_)(ag_clause))){
return metabase.legacy_mbql.normalize.maybe_normalize_token(ag_clause);
} else {
if(cljs.core.truth_(metabase.legacy_mbql.normalize.is_clause_QMARK_(new cljs.core.Keyword(null,"named","named",-422393479),ag_clause))){
var vec__76611 = ag_clause;
var seq__76612 = cljs.core.seq(vec__76611);
var first__76613 = cljs.core.first(seq__76612);
var seq__76612__$1 = cljs.core.next(seq__76612);
var _ = first__76613;
var first__76613__$1 = cljs.core.first(seq__76612__$1);
var seq__76612__$2 = cljs.core.next(seq__76612__$1);
var wrapped_ag = first__76613__$1;
var more = seq__76612__$2;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"named","named",-422393479),(metabase.legacy_mbql.normalize.normalize_ag_clause_tokens.cljs$core$IFn$_invoke$arity$1 ? metabase.legacy_mbql.normalize.normalize_ag_clause_tokens.cljs$core$IFn$_invoke$arity$1(wrapped_ag) : metabase.legacy_mbql.normalize.normalize_ag_clause_tokens.call(null,wrapped_ag))], null),more);
} else {
if(cljs.core.truth_((cljs.core.truth_(metabase.legacy_mbql.normalize.mbql_clause_QMARK_(ag_clause))?metabase.legacy_mbql.normalize.aggregation_subclause_QMARK_(cljs.core.second(ag_clause)):null))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.legacy_mbql.normalize.normalize_ag_clause_tokens,ag_clause);
} else {
return (metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(ag_clause,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.legacy_mbql.normalize.normalize_tokens.call(null,ag_clause,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)));

}
}
}
});
/**
 * For expressions, we don't want to normalize the name of the expression; keep that as is, and make it a string;
 * normalize the definitions as normal.
 */
metabase.legacy_mbql.normalize.normalize_expressions_tokens = (function metabase$legacy_mbql$normalize$normalize_expressions_tokens(expressions_clause){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5480__auto__ = (function metabase$legacy_mbql$normalize$normalize_expressions_tokens_$_iter__76615(s__76616){
return (new cljs.core.LazySeq(null,(function (){
var s__76616__$1 = s__76616;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__76616__$1);
if(temp__5804__auto__){
var s__76616__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__76616__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__76616__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__76618 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__76617 = (0);
while(true){
if((i__76617 < size__5479__auto__)){
var vec__76620 = cljs.core._nth(c__5478__auto__,i__76617);
var expression_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76620,(0),null);
var definition = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76620,(1),null);
cljs.core.chunk_append(b__76618,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.util.qualified_name(expression_name),(metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(definition,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.legacy_mbql.normalize.normalize_tokens.call(null,definition,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)))], null));

var G__77194 = (i__76617 + (1));
i__76617 = G__77194;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__76618),metabase$legacy_mbql$normalize$normalize_expressions_tokens_$_iter__76615(cljs.core.chunk_rest(s__76616__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__76618),null);
}
} else {
var vec__76624 = cljs.core.first(s__76616__$2);
var expression_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76624,(0),null);
var definition = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76624,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.util.qualified_name(expression_name),(metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(definition,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.legacy_mbql.normalize.normalize_tokens.call(null,definition,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)))], null),metabase$legacy_mbql$normalize$normalize_expressions_tokens_$_iter__76615(cljs.core.rest(s__76616__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(expressions_clause);
})());
});
/**
 * Normalize tokens in the order-by clause, which can have different syntax when using MBQL 95 or 98
 *   rules (`[<field> :asc]` vs `[:asc <field>]`, for example).
 */
metabase.legacy_mbql.normalize.normalize_order_by_tokens = (function metabase$legacy_mbql$normalize$normalize_order_by_tokens(clauses){
return cljs.core.vec((function (){var iter__5480__auto__ = (function metabase$legacy_mbql$normalize$normalize_order_by_tokens_$_iter__76632(s__76633){
return (new cljs.core.LazySeq(null,(function (){
var s__76633__$1 = s__76633;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__76633__$1);
if(temp__5804__auto__){
var s__76633__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__76633__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__76633__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__76635 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__76634 = (0);
while(true){
if((i__76634 < size__5479__auto__)){
var subclause = cljs.core._nth(c__5478__auto__,i__76634);
cljs.core.chunk_append(b__76635,(cljs.core.truth_(metabase.legacy_mbql.normalize.mbql_clause_QMARK_(subclause))?metabase.legacy_mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IFn$_invoke$arity$1(subclause):cljs.core.reverse(metabase.legacy_mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IFn$_invoke$arity$1(cljs.core.reverse(subclause)))));

var G__77321 = (i__76634 + (1));
i__76634 = G__77321;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__76635),metabase$legacy_mbql$normalize$normalize_order_by_tokens_$_iter__76632(cljs.core.chunk_rest(s__76633__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__76635),null);
}
} else {
var subclause = cljs.core.first(s__76633__$2);
return cljs.core.cons((cljs.core.truth_(metabase.legacy_mbql.normalize.mbql_clause_QMARK_(subclause))?metabase.legacy_mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IFn$_invoke$arity$1(subclause):cljs.core.reverse(metabase.legacy_mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IFn$_invoke$arity$1(cljs.core.reverse(subclause)))),metabase$legacy_mbql$normalize$normalize_order_by_tokens_$_iter__76632(cljs.core.rest(s__76633__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(clauses);
})());
});
/**
 * Get the function that should be used to transform values for normalized key `k` in a template tag definition.
 */
metabase.legacy_mbql.normalize.template_tag_definition_key__GT_transform_fn = (function metabase$legacy_mbql$normalize$template_tag_definition_key__GT_transform_fn(k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.identity,new cljs.core.Keyword(null,"type","type",1174270348),metabase.legacy_mbql.normalize.maybe_normalize_token,new cljs.core.Keyword(null,"widget-type","widget-type",1836256899),metabase.legacy_mbql.normalize.maybe_normalize_token], null),k,(function (v){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__76639 = cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]);
var G__76640 = new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061);
return (metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(G__76639,G__76640) : metabase.legacy_mbql.normalize.normalize_tokens.call(null,G__76639,G__76640));
})(),k);
}));
});
/**
 * For a template tag definition, normalize all the keys appropriately.
 */
metabase.legacy_mbql.normalize.normalize_template_tag_definition = (function metabase$legacy_mbql$normalize$normalize_template_tag_definition(tag_definition){
var tag_def = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__76641){
var vec__76642 = p__76641;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76642,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76642,(1),null);
var k__$1 = metabase.legacy_mbql.normalize.maybe_normalize_token(k);
var transform_fn = metabase.legacy_mbql.normalize.template_tag_definition_key__GT_transform_fn(k__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,(transform_fn.cljs$core$IFn$_invoke$arity$1 ? transform_fn.cljs$core$IFn$_invoke$arity$1(v) : transform_fn.call(null,v))], null);
})),tag_definition);
var G__76645 = tag_def;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(tag_def),new cljs.core.Keyword(null,"dimension","dimension",543254198))) && (cljs.core.not(new cljs.core.Keyword(null,"widget-type","widget-type",1836256899).cljs$core$IFn$_invoke$arity$1(tag_def))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__76645,new cljs.core.Keyword(null,"widget-type","widget-type",1836256899),new cljs.core.Keyword(null,"category","category",-593092832));
} else {
return G__76645;
}
});
/**
 * Normalize native-query template tags. Like `expressions` we want to preserve the original name rather than normalize
 *   it.
 */
metabase.legacy_mbql.normalize.normalize_template_tags = (function metabase$legacy_mbql$normalize$normalize_template_tags(template_tags){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__76646){
var vec__76647 = p__76646;
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76647,(0),null);
var tag_definition = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76647,(1),null);
var tag_name__$1 = metabase.util.qualified_name(tag_name);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag_name__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(metabase.legacy_mbql.normalize.normalize_template_tag_definition(tag_definition),new cljs.core.Keyword(null,"name","name",1843675177),tag_name__$1)], null);
})),template_tags);
});
/**
 * Normalize a parameter in the query `:parameters` list.
 */
metabase.legacy_mbql.normalize.normalize_query_parameter = (function metabase$legacy_mbql$normalize$normalize_query_parameter(p__76653){
var map__76654 = p__76653;
var map__76654__$1 = cljs.core.__destructure_map(map__76654);
var param = map__76654__$1;
var param_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76654__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76654__$1,new cljs.core.Keyword(null,"target","target",253001721));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76654__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var values_source_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76654__$1,new cljs.core.Keyword(null,"values_source_config","values_source_config",-590570309));
var G__76655 = param;
var G__76655__$1 = (cljs.core.truth_(id)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__76655,new cljs.core.Keyword(null,"id","id",-1388402092),metabase.util.qualified_name):G__76655);
var G__76655__$2 = (cljs.core.truth_(param_type)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__76655__$1,new cljs.core.Keyword(null,"type","type",1174270348),metabase.legacy_mbql.normalize.maybe_normalize_token):G__76655__$1);
var G__76655__$3 = (cljs.core.truth_(target)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__76655__$2,new cljs.core.Keyword(null,"target","target",253001721),(function (p1__76650_SHARP_){
return (metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(p1__76650_SHARP_,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.legacy_mbql.normalize.normalize_tokens.call(null,p1__76650_SHARP_,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)));
})):G__76655__$2);
var G__76655__$4 = (cljs.core.truth_(values_source_config)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__76655__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values_source_config","values_source_config",-590570309),new cljs.core.Keyword(null,"label_field","label_field",-1573182765)], null),(function (p1__76651_SHARP_){
return (metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(p1__76651_SHARP_,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.legacy_mbql.normalize.normalize_tokens.call(null,p1__76651_SHARP_,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)));
})):G__76655__$3);
if(cljs.core.truth_(values_source_config)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__76655__$4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values_source_config","values_source_config",-590570309),new cljs.core.Keyword(null,"value_field","value_field",-980977878)], null),(function (p1__76652_SHARP_){
return (metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(p1__76652_SHARP_,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)) : metabase.legacy_mbql.normalize.normalize_tokens.call(null,p1__76652_SHARP_,new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)));
}));
} else {
return G__76655__$4;
}
});
metabase.legacy_mbql.normalize.normalize_source_query = (function metabase$legacy_mbql$normalize$normalize_source_query(source_query){
var map__76656 = cljs.core.update_keys(source_query,metabase.legacy_mbql.normalize.maybe_normalize_token);
var map__76656__$1 = cljs.core.__destructure_map(map__76656);
var source_query__$1 = map__76656__$1;
var native_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76656__$1,new cljs.core.Keyword(null,"native","native",-613060878));
if(cljs.core.truth_(native_QMARK_)){
return clojure.set.rename_keys((function (){var G__76658 = clojure.set.rename_keys(source_query__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"native","native",-613060878),new cljs.core.Keyword(null,"query","query",-1288509510)], null));
var G__76659 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"native","native",-613060878)], null);
return (metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(G__76658,G__76659) : metabase.legacy_mbql.normalize.normalize_tokens.call(null,G__76658,G__76659));
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"native","native",-613060878)], null));
} else {
var G__76660 = source_query__$1;
var G__76661 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510)], null);
return (metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(G__76660,G__76661) : metabase.legacy_mbql.normalize.normalize_tokens.call(null,G__76660,G__76661));
}
});
metabase.legacy_mbql.normalize.normalize_join = (function metabase$legacy_mbql$normalize$normalize_join(join){
var map__76662 = (metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2 ? metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$2(join,new cljs.core.Keyword(null,"query","query",-1288509510)) : metabase.legacy_mbql.normalize.normalize_tokens.call(null,join,new cljs.core.Keyword(null,"query","query",-1288509510)));
var map__76662__$1 = cljs.core.__destructure_map(map__76662);
var join__$1 = map__76662__$1;
var join_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76662__$1,new cljs.core.Keyword(null,"alias","alias",-2039751630));
var strategy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76662__$1,new cljs.core.Keyword(null,"strategy","strategy",-1471631918));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76662__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var G__76663 = join__$1;
var G__76663__$1 = (cljs.core.truth_(strategy)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__76663,new cljs.core.Keyword(null,"strategy","strategy",-1471631918),metabase.legacy_mbql.normalize.maybe_normalize_token):G__76663);
var G__76663__$2 = (cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.string_QMARK_)(fields))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__76663__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230),metabase.legacy_mbql.normalize.maybe_normalize_token):G__76663__$1);
if(cljs.core.truth_(join_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__76663__$2,new cljs.core.Keyword(null,"alias","alias",-2039751630),metabase.util.qualified_name);
} else {
return G__76663__$2;
}
});
/**
 * Normalize the field ref. Ensure it's well-formed mbql, not just json.
 */
metabase.legacy_mbql.normalize.normalize_field_ref = (function metabase$legacy_mbql$normalize$normalize_field_ref(clause){
var G__76664 = (metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$1 ? metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$1(clause) : metabase.legacy_mbql.normalize.normalize_tokens.call(null,clause));
return (metabase.legacy_mbql.normalize.canonicalize_mbql_clauses.cljs$core$IFn$_invoke$arity$1 ? metabase.legacy_mbql.normalize.canonicalize_mbql_clauses.cljs$core$IFn$_invoke$arity$1(G__76664) : metabase.legacy_mbql.normalize.canonicalize_mbql_clauses.call(null,G__76664));
});
/**
 * Normalize source/results metadata for a single column.
 */
metabase.legacy_mbql.normalize.normalize_source_metadata = (function metabase$legacy_mbql$normalize$normalize_source_metadata(metadata){
if(cljs.core.map_QMARK_(metadata)){
} else {
throw (new Error("Assert failed: (map? metadata)"));
}

return medley.core.update_existing.cljs$core$IFn$_invoke$arity$3(medley.core.update_existing.cljs$core$IFn$_invoke$arity$3(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__76665_SHARP_,p2__76666_SHARP_){
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$3(p1__76665_SHARP_,p2__76666_SHARP_,cljs.core.keyword);
}),metadata,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base_type","base_type",1908272670),new cljs.core.Keyword(null,"effective_type","effective_type",1699478099),new cljs.core.Keyword(null,"semantic_type","semantic_type",272485089),new cljs.core.Keyword(null,"visibility_type","visibility_type",-508434247),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"unit","unit",375175175)], null)),new cljs.core.Keyword(null,"field_ref","field_ref",-1985640334),metabase.legacy_mbql.normalize.normalize_field_ref),new cljs.core.Keyword(null,"fingerprint","fingerprint",598613022),clojure.walk.keywordize_keys);
});
/**
 * For native queries, normalize the top-level keys, and template tags, but nothing else.
 */
metabase.legacy_mbql.normalize.normalize_native_query = (function metabase$legacy_mbql$normalize$normalize_native_query(native_query){
var native_query__$1 = cljs.core.update_keys(native_query,metabase.legacy_mbql.normalize.maybe_normalize_token);
var G__76667 = native_query__$1;
if(cljs.core.seq(new cljs.core.Keyword(null,"template-tags","template-tags",1853115685).cljs$core$IFn$_invoke$arity$1(native_query__$1))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__76667,new cljs.core.Keyword(null,"template-tags","template-tags",1853115685),metabase.legacy_mbql.normalize.normalize_template_tags);
} else {
return G__76667;
}
});
metabase.legacy_mbql.normalize.normalize_actions_row = (function metabase$legacy_mbql$normalize$normalize_actions_row(row){
var G__76668 = row;
if(cljs.core.map_QMARK_(row)){
return cljs.core.update_keys(G__76668,metabase.util.qualified_name);
} else {
return G__76668;
}
});
/**
 * Map of special functions that should be used to perform token normalization for a given path. For example, the
 *   `:expressions` key in an MBQL query should preserve the case of the expression names; this custom behavior is
 *   defined below.
 */
metabase.legacy_mbql.normalize.path__GT_special_token_normalization_fn = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"create-row","create-row",1226455653),new cljs.core.Keyword(null,"source-metadata","source-metadata",-477816085),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"update-row","update-row",-2028796244),new cljs.core.Keyword(null,"native","native",-613060878),new cljs.core.Keyword(null,"viz-settings","viz-settings",256055379),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"parameters","parameters",-1229919748)],[metabase.legacy_mbql.normalize.normalize_actions_row,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("metabase.legacy-mbql.normalize","sequence","metabase.legacy-mbql.normalize/sequence",750828401),metabase.legacy_mbql.normalize.normalize_source_metadata], null),metabase.legacy_mbql.normalize.maybe_normalize_token,metabase.legacy_mbql.normalize.normalize_actions_row,metabase.legacy_mbql.normalize.normalize_native_query,metabase.legacy_mbql.normalize.maybe_normalize_token,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("metadata","model-metadata","metadata/model-metadata",441385983),cljs.core.identity,new cljs.core.Keyword("pivot","original-query","pivot/original-query",27743080),(function (_){
return null;
}),new cljs.core.Keyword(null,"visualization-settings","visualization-settings",-1425937971),cljs.core.identity,new cljs.core.Keyword(null,"context","context",-830191113),metabase.legacy_mbql.normalize.maybe_normalize_token], null),(function (p1__76669_SHARP_){
var G__76670 = p1__76669_SHARP_;
if((G__76670 == null)){
return null;
} else {
return metabase.legacy_mbql.normalize.maybe_normalize_token(G__76670);
}
}),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),metabase.legacy_mbql.normalize.normalize_ag_clause_tokens,new cljs.core.Keyword(null,"expressions","expressions",255689909),metabase.legacy_mbql.normalize.normalize_expressions_tokens,new cljs.core.Keyword(null,"order-by","order-by",1527318070),metabase.legacy_mbql.normalize.normalize_order_by_tokens,new cljs.core.Keyword(null,"source-query","source-query",198004422),metabase.legacy_mbql.normalize.normalize_source_query,new cljs.core.Keyword(null,"source-metadata","source-metadata",-477816085),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("metabase.legacy-mbql.normalize","sequence","metabase.legacy-mbql.normalize/sequence",750828401),metabase.legacy_mbql.normalize.normalize_source_metadata], null),new cljs.core.Keyword(null,"joins","joins",1033962699),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("metabase.legacy-mbql.normalize","sequence","metabase.legacy-mbql.normalize/sequence",750828401),metabase.legacy_mbql.normalize.normalize_join], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("metabase.legacy-mbql.normalize","sequence","metabase.legacy-mbql.normalize/sequence",750828401),metabase.legacy_mbql.normalize.normalize_query_parameter], null)]);
/**
 * Recursively normalize tokens in `x`.
 * 
 *   Every time this function recurses (thru a map value) it adds a new (normalized) key to key path, e.g. `path` will be
 *   `[:query :order-by]` when we're in the MBQL order-by clause. If we need to handle these top-level clauses in special
 *   ways add a function to `path->special-token-normalization-fn` above.
 * 
 *   In some cases, dealing with the path isn't desirable, but we don't want to accidentally trigger normalization
 *   functions (such as accidentally normalizing the `:type` key in something other than the top-level of the query), so
 *   by convention please pass `:ignore-path` to avoid accidentally triggering path functions.
 */
metabase.legacy_mbql.normalize.normalize_tokens = (function metabase$legacy_mbql$normalize$normalize_tokens(var_args){
var args__5732__auto__ = [];
var len__5726__auto___77349 = arguments.length;
var i__5727__auto___77350 = (0);
while(true){
if((i__5727__auto___77350 < len__5726__auto___77349)){
args__5732__auto__.push((arguments[i__5727__auto___77350]));

var G__77351 = (i__5727__auto___77350 + (1));
i__5727__auto___77350 = G__77351;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__76675){
var vec__76676 = p__76675;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76676,(0),null);
var path__$1 = (((path instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null):cljs.core.vec(path));
var special_fn = ((cljs.core.seq(path__$1))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(metabase.legacy_mbql.normalize.path__GT_special_token_normalization_fn,path__$1):null);
try{if(cljs.core.fn_QMARK_(special_fn)){
return (special_fn.cljs$core$IFn$_invoke$arity$1 ? special_fn.cljs$core$IFn$_invoke$arity$1(x) : special_fn.call(null,x));
} else {
if(cljs.core.record_QMARK_(x)){
return x;
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5480__auto__ = (function metabase$legacy_mbql$normalize$iter__76682(s__76683){
return (new cljs.core.LazySeq(null,(function (){
var s__76683__$1 = s__76683;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__76683__$1);
if(temp__5804__auto__){
var s__76683__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__76683__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__76683__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__76685 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__76684 = (0);
while(true){
if((i__76684 < size__5479__auto__)){
var vec__76686 = cljs.core._nth(c__5478__auto__,i__76684);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76686,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76686,(1),null);
var k__$1 = metabase.legacy_mbql.normalize.maybe_normalize_token(k);
cljs.core.chunk_append(b__76685,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(path__$1),k__$1)], 0))], null));

var G__77354 = (i__76684 + (1));
i__76684 = G__77354;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__76685),metabase$legacy_mbql$normalize$iter__76682(cljs.core.chunk_rest(s__76683__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__76685),null);
}
} else {
var vec__76690 = cljs.core.first(s__76683__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76690,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76690,(1),null);
var k__$1 = metabase.legacy_mbql.normalize.maybe_normalize_token(k);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(path__$1),k__$1)], 0))], null),metabase$legacy_mbql$normalize$iter__76682(cljs.core.rest(s__76683__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(x);
})());
} else {
if(cljs.core.truth_(metabase.legacy_mbql.normalize.mbql_clause_QMARK_(x))){
return metabase.legacy_mbql.normalize.normalize_mbql_clause_tokens.cljs$core$IFn$_invoke$arity$1(x);
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__76671_SHARP_){
return metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$variadic(p1__76671_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(path__$1),new cljs.core.Keyword("metabase.legacy-mbql.normalize","sequence","metabase.legacy-mbql.normalize/sequence",750828401))], 0));
}),x);
} else {
return x;

}
}
}
}
}
}catch (e76679){if((e76679 instanceof Error)){
var e = e76679;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Error normalizing form: {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.ex_message(e)], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form","form",-1624062471),x,new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"special-fn","special-fn",1290649344),special_fn], null),e);
} else {
throw e76679;

}
}}));

(metabase.legacy_mbql.normalize.normalize_tokens.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.legacy_mbql.normalize.normalize_tokens.cljs$lang$applyTo = (function (seq76672){
var G__76673 = cljs.core.first(seq76672);
var seq76672__$1 = cljs.core.next(seq76672);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__76673,seq76672__$1);
}));

/**
 * Wrap raw integer Field IDs (i.e., those in an implicit 'field' position) in a `:field` clause if they're not
 *   already. Done for MBQL 95 backwards-compatibility. e.g.:
 * 
 *  {:filter [:= 10 20]} ; -> {:filter [:= [:field 10 nil] 20]}
 */
metabase.legacy_mbql.normalize.wrap_implicit_field_id = (function metabase$legacy_mbql$normalize$wrap_implicit_field_id(field){
if(cljs.core.integer_QMARK_(field)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),field,null], null);
} else {
return field;
}
});
if((typeof metabase !== 'undefined') && (typeof metabase.legacy_mbql !== 'undefined') && (typeof metabase.legacy_mbql.normalize !== 'undefined') && (typeof metabase.legacy_mbql.normalize.canonicalize_mbql_clause !== 'undefined')){
} else {
metabase.legacy_mbql.normalize.canonicalize_mbql_clause = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__76693 = cljs.core.get_global_hierarchy;
return (fexpr__76693.cljs$core$IFn$_invoke$arity$0 ? fexpr__76693.cljs$core$IFn$_invoke$arity$0() : fexpr__76693.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.legacy-mbql.normalize","canonicalize-mbql-clause"),(function (clause){
if(cljs.core.truth_(metabase.legacy_mbql.normalize.mbql_clause_QMARK_(clause))){
return cljs.core.first(clause);
} else {
return null;
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (clause){
return clause;
}));
/**
 * If `clause` is a raw integer ID wrap it in a `:field` clause. Either way, canonicalize the resulting clause.
 */
metabase.legacy_mbql.normalize.canonicalize_implicit_field_id = (function metabase$legacy_mbql$normalize$canonicalize_implicit_field_id(clause){
return metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(metabase.legacy_mbql.normalize.wrap_implicit_field_id(clause));
});
metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (p__76760){
var vec__76761 = p__76760;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76761,(0),null);
var id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76761,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76761,(2),null);
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,cljs.core.nil_QMARK_)(opts))){
} else {
throw (new Error("Assert failed: ((some-fn map? nil?) opts)"));
}

if(cljs.core.truth_(metabase.legacy_mbql.normalize.is_clause_QMARK_(new cljs.core.Keyword(null,"field","field",-1302436500),id_or_name))){
var vec__76764 = id_or_name;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76764,(0),null);
var nested_id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76764,(1),null);
var nested_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76764,(2),null);
return metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),nested_id_or_name,cljs.core.not_empty(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nested_opts,opts], 0)))], null));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),id_or_name,cljs.core.not_empty(opts)], null);
}
}));
metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),(function (p__76767){
var vec__76768 = p__76767;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76768,(0),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76768,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76768,(2),null);
if(cljs.core.empty_QMARK_(opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),index], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),index,opts], null);
}
}));
metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field-id","field-id",-353751335),(function (p__76771){
var vec__76772 = p__76771;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76772,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76772,(1),null);
if(cljs.core.truth_(metabase.legacy_mbql.normalize.mbql_clause_QMARK_(id))){
return metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(id);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),id,null], null);
}
}));
metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field-literal","field-literal",-1295883554),(function (p__76775){
var vec__76776 = p__76775;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76776,(0),null);
var field_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76776,(1),null);
var base_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76776,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),field_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),base_type], null)], null);
}));
metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fk->","fk->",-499026738),(function (p__76779){
var vec__76780 = p__76779;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76780,(0),null);
var field_1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76780,(1),null);
var field_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76780,(2),null);
var vec__76783 = metabase.legacy_mbql.normalize.canonicalize_implicit_field_id(field_1);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76783,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76783,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76783,(2),null);
var vec__76786 = metabase.legacy_mbql.normalize.canonicalize_implicit_field_id(field_2);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76786,(0),null);
var dest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76786,(1),null);
var dest_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76786,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),dest,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dest_opts,new cljs.core.Keyword(null,"source-field","source-field",933829534),source)], null);
}));
metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"joined-field","joined-field",-2048778268),(function (p__76789){
var vec__76790 = p__76789;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76790,(0),null);
var join_alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76790,(1),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76790,(2),null);
return metabase.legacy_mbql.util.assoc_field_options.cljs$core$IFn$_invoke$arity$variadic(metabase.legacy_mbql.normalize.canonicalize_implicit_field_id(field),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"join-alias","join-alias",1454206794),join_alias], 0));
}));
metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"datetime-field","datetime-field",21731696),(function (clause){
var G__76793 = cljs.core.count(clause);
switch (G__76793) {
case (3):
var vec__76794 = clause;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76794,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76794,(1),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76794,(2),null);
return metabase.legacy_mbql.util.with_temporal_unit(metabase.legacy_mbql.normalize.canonicalize_implicit_field_id(field),unit);

break;
case (4):
var vec__76797 = clause;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76797,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76797,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76797,(2),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76797,(3),null);
return metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datetime-field","datetime-field",21731696),field,unit], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__76793)].join('')));

}
}));
metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"binning-strategy","binning-strategy",2063329158),(function (p__76800){
var vec__76801 = p__76800;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76801,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76801,(1),null);
var strategy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76801,(2),null);
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76801,(3),null);
var binning_options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76801,(4),null);
var vec__76804 = metabase.legacy_mbql.normalize.canonicalize_implicit_field_id(field);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76804,(0),null);
var id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76804,(1),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76804,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),id_or_name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"binning","binning",1709835866),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"strategy","strategy",-1471631918),strategy], null),(cljs.core.truth_(param)?cljs.core.PersistentArrayMap.createAsIfByAssoc([strategy,param]):null),binning_options], 0)))], null);
}));
metabase.legacy_mbql.normalize.canonicalize_compound_filter_clause = (function metabase$legacy_mbql$normalize$canonicalize_compound_filter_clause(p__76807){
var vec__76808 = p__76807;
var seq__76809 = cljs.core.seq(vec__76808);
var first__76810 = cljs.core.first(seq__76809);
var seq__76809__$1 = cljs.core.next(seq__76809);
var filter_name = first__76810;
var args = seq__76809__$1;
return metabase.legacy_mbql.util.simplify_compound_filter(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [filter_name], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.legacy_mbql.normalize.canonicalize_mbql_clause,args)));
});
var seq__76811_77389 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"not","not",-595976884)], null));
var chunk__76812_77390 = null;
var count__76813_77391 = (0);
var i__76814_77392 = (0);
while(true){
if((i__76814_77392 < count__76813_77391)){
var clause_name_77393 = chunk__76812_77390.cljs$core$IIndexed$_nth$arity$2(null,i__76814_77392);
metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,clause_name_77393,((function (seq__76811_77389,chunk__76812_77390,count__76813_77391,i__76814_77392,clause_name_77393){
return (function (clause){
return metabase.legacy_mbql.normalize.canonicalize_compound_filter_clause(clause);
});})(seq__76811_77389,chunk__76812_77390,count__76813_77391,i__76814_77392,clause_name_77393))
);


var G__77394 = seq__76811_77389;
var G__77395 = chunk__76812_77390;
var G__77396 = count__76813_77391;
var G__77397 = (i__76814_77392 + (1));
seq__76811_77389 = G__77394;
chunk__76812_77390 = G__77395;
count__76813_77391 = G__77396;
i__76814_77392 = G__77397;
continue;
} else {
var temp__5804__auto___77398 = cljs.core.seq(seq__76811_77389);
if(temp__5804__auto___77398){
var seq__76811_77399__$1 = temp__5804__auto___77398;
if(cljs.core.chunked_seq_QMARK_(seq__76811_77399__$1)){
var c__5525__auto___77400 = cljs.core.chunk_first(seq__76811_77399__$1);
var G__77401 = cljs.core.chunk_rest(seq__76811_77399__$1);
var G__77402 = c__5525__auto___77400;
var G__77403 = cljs.core.count(c__5525__auto___77400);
var G__77404 = (0);
seq__76811_77389 = G__77401;
chunk__76812_77390 = G__77402;
count__76813_77391 = G__77403;
i__76814_77392 = G__77404;
continue;
} else {
var clause_name_77406 = cljs.core.first(seq__76811_77399__$1);
metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,clause_name_77406,((function (seq__76811_77389,chunk__76812_77390,count__76813_77391,i__76814_77392,clause_name_77406,seq__76811_77399__$1,temp__5804__auto___77398){
return (function (clause){
return metabase.legacy_mbql.normalize.canonicalize_compound_filter_clause(clause);
});})(seq__76811_77389,chunk__76812_77390,count__76813_77391,i__76814_77392,clause_name_77406,seq__76811_77399__$1,temp__5804__auto___77398))
);


var G__77410 = cljs.core.next(seq__76811_77399__$1);
var G__77411 = null;
var G__77412 = (0);
var G__77413 = (0);
seq__76811_77389 = G__77410;
chunk__76812_77390 = G__77411;
count__76813_77391 = G__77412;
i__76814_77392 = G__77413;
continue;
}
} else {
}
}
break;
}
metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"inside","inside",1972503011),(function (p__76815){
var vec__76816 = p__76815;
var seq__76817 = cljs.core.seq(vec__76816);
var first__76818 = cljs.core.first(seq__76817);
var seq__76817__$1 = cljs.core.next(seq__76817);
var _ = first__76818;
var first__76818__$1 = cljs.core.first(seq__76817__$1);
var seq__76817__$2 = cljs.core.next(seq__76817__$1);
var field_1 = first__76818__$1;
var first__76818__$2 = cljs.core.first(seq__76817__$2);
var seq__76817__$3 = cljs.core.next(seq__76817__$2);
var field_2 = first__76818__$2;
var coordinates = seq__76817__$3;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inside","inside",1972503011),metabase.legacy_mbql.normalize.canonicalize_implicit_field_id(field_1),metabase.legacy_mbql.normalize.canonicalize_implicit_field_id(field_2)], null),coordinates);
}));
metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"time-interval","time-interval",704622015),(function (p__76820){
var vec__76821 = p__76820;
var seq__76822 = cljs.core.seq(vec__76821);
var first__76823 = cljs.core.first(seq__76822);
var seq__76822__$1 = cljs.core.next(seq__76822);
var _ = first__76823;
var first__76823__$1 = cljs.core.first(seq__76822__$1);
var seq__76822__$2 = cljs.core.next(seq__76822__$1);
var field = first__76823__$1;
var args = seq__76822__$2;
var field__$1 = (function (){var G__76824 = metabase.legacy_mbql.normalize.canonicalize_implicit_field_id(field);
if(cljs.core.truth_(metabase.legacy_mbql.util.is_clause_QMARK_(new cljs.core.Keyword(null,"field","field",-1302436500),field))){
return metabase.legacy_mbql.util.update_field_options.cljs$core$IFn$_invoke$arity$variadic(G__76824,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358)], 0));
} else {
return G__76824;
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-interval","time-interval",704622015),field__$1], null),args);
}));
metabase.legacy_mbql.normalize.canonicalize_simple_filter_clause = (function metabase$legacy_mbql$normalize$canonicalize_simple_filter_clause(p__76825){
var vec__76829 = p__76825;
var seq__76830 = cljs.core.seq(vec__76829);
var first__76831 = cljs.core.first(seq__76830);
var seq__76830__$1 = cljs.core.next(seq__76830);
var filter_name = first__76831;
var first__76831__$1 = cljs.core.first(seq__76830__$1);
var seq__76830__$2 = cljs.core.next(seq__76830__$1);
var first_arg = first__76831__$1;
var other_args = seq__76830__$2;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filter_name,metabase.legacy_mbql.normalize.canonicalize_implicit_field_id(first_arg)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.legacy_mbql.normalize.canonicalize_mbql_clause,other_args));
});
var seq__76832_77418 = cljs.core.seq(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"!=","!=",-1841737356),new cljs.core.Keyword(null,"<","<",-646864291),new cljs.core.Keyword(null,"<=","<=",-395636158),new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,">=",">=",-623615505),new cljs.core.Keyword(null,"is-empty","is-empty",-1040302908),new cljs.core.Keyword(null,"not-empty","not-empty",388922063),new cljs.core.Keyword(null,"is-null","is-null",-1997050930),new cljs.core.Keyword(null,"not-null","not-null",-1326718535),new cljs.core.Keyword(null,"between","between",1131099276)], null));
var chunk__76833_77419 = null;
var count__76834_77420 = (0);
var i__76835_77421 = (0);
while(true){
if((i__76835_77421 < count__76834_77420)){
var clause_name_77423 = chunk__76833_77419.cljs$core$IIndexed$_nth$arity$2(null,i__76835_77421);
metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,clause_name_77423,((function (seq__76832_77418,chunk__76833_77419,count__76834_77420,i__76835_77421,clause_name_77423){
return (function (clause){
return metabase.legacy_mbql.normalize.canonicalize_simple_filter_clause(clause);
});})(seq__76832_77418,chunk__76833_77419,count__76834_77420,i__76835_77421,clause_name_77423))
);


var G__77427 = seq__76832_77418;
var G__77428 = chunk__76833_77419;
var G__77429 = count__76834_77420;
var G__77430 = (i__76835_77421 + (1));
seq__76832_77418 = G__77427;
chunk__76833_77419 = G__77428;
count__76834_77420 = G__77429;
i__76835_77421 = G__77430;
continue;
} else {
var temp__5804__auto___77431 = cljs.core.seq(seq__76832_77418);
if(temp__5804__auto___77431){
var seq__76832_77432__$1 = temp__5804__auto___77431;
if(cljs.core.chunked_seq_QMARK_(seq__76832_77432__$1)){
var c__5525__auto___77433 = cljs.core.chunk_first(seq__76832_77432__$1);
var G__77434 = cljs.core.chunk_rest(seq__76832_77432__$1);
var G__77435 = c__5525__auto___77433;
var G__77436 = cljs.core.count(c__5525__auto___77433);
var G__77437 = (0);
seq__76832_77418 = G__77434;
chunk__76833_77419 = G__77435;
count__76834_77420 = G__77436;
i__76835_77421 = G__77437;
continue;
} else {
var clause_name_77439 = cljs.core.first(seq__76832_77432__$1);
metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,clause_name_77439,((function (seq__76832_77418,chunk__76833_77419,count__76834_77420,i__76835_77421,clause_name_77439,seq__76832_77432__$1,temp__5804__auto___77431){
return (function (clause){
return metabase.legacy_mbql.normalize.canonicalize_simple_filter_clause(clause);
});})(seq__76832_77418,chunk__76833_77419,count__76834_77420,i__76835_77421,clause_name_77439,seq__76832_77432__$1,temp__5804__auto___77431))
);


var G__77440 = cljs.core.next(seq__76832_77432__$1);
var G__77441 = null;
var G__77442 = (0);
var G__77443 = (0);
seq__76832_77418 = G__77440;
chunk__76833_77419 = G__77441;
count__76834_77420 = G__77442;
i__76835_77421 = G__77443;
continue;
}
} else {
}
}
break;
}
var seq__76836_77444 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"starts-with","starts-with",366503009),new cljs.core.Keyword(null,"ends-with","ends-with",-456791011),new cljs.core.Keyword(null,"contains","contains",676899812),new cljs.core.Keyword(null,"does-not-contain","does-not-contain",-274946853)], null));
var chunk__76837_77445 = null;
var count__76838_77446 = (0);
var i__76839_77447 = (0);
while(true){
if((i__76839_77447 < count__76838_77446)){
var tag_77449 = chunk__76837_77445.cljs$core$IIndexed$_nth$arity$2(null,i__76839_77447);
metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,tag_77449,((function (seq__76836_77444,chunk__76837_77445,count__76838_77446,i__76839_77447,tag_77449){
return (function (p__76848){
var vec__76849 = p__76848;
var seq__76850 = cljs.core.seq(vec__76849);
var first__76851 = cljs.core.first(seq__76850);
var seq__76850__$1 = cljs.core.next(seq__76850);
var _tag = first__76851;
var first__76851__$1 = cljs.core.first(seq__76850__$1);
var seq__76850__$2 = cljs.core.next(seq__76850__$1);
var opts = first__76851__$1;
var args = seq__76850__$2;
var clause = vec__76849;
if((cljs.core.count(args) > (2))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag_77449,(function (){var or__5002__auto__ = opts;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.legacy_mbql.normalize.canonicalize_mbql_clause,args));
} else {
return metabase.legacy_mbql.normalize.canonicalize_simple_filter_clause(clause);
}
});})(seq__76836_77444,chunk__76837_77445,count__76838_77446,i__76839_77447,tag_77449))
);


var G__77451 = seq__76836_77444;
var G__77452 = chunk__76837_77445;
var G__77453 = count__76838_77446;
var G__77454 = (i__76839_77447 + (1));
seq__76836_77444 = G__77451;
chunk__76837_77445 = G__77452;
count__76838_77446 = G__77453;
i__76839_77447 = G__77454;
continue;
} else {
var temp__5804__auto___77455 = cljs.core.seq(seq__76836_77444);
if(temp__5804__auto___77455){
var seq__76836_77456__$1 = temp__5804__auto___77455;
if(cljs.core.chunked_seq_QMARK_(seq__76836_77456__$1)){
var c__5525__auto___77457 = cljs.core.chunk_first(seq__76836_77456__$1);
var G__77458 = cljs.core.chunk_rest(seq__76836_77456__$1);
var G__77459 = c__5525__auto___77457;
var G__77460 = cljs.core.count(c__5525__auto___77457);
var G__77461 = (0);
seq__76836_77444 = G__77458;
chunk__76837_77445 = G__77459;
count__76838_77446 = G__77460;
i__76839_77447 = G__77461;
continue;
} else {
var tag_77462 = cljs.core.first(seq__76836_77456__$1);
metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,tag_77462,((function (seq__76836_77444,chunk__76837_77445,count__76838_77446,i__76839_77447,tag_77462,seq__76836_77456__$1,temp__5804__auto___77455){
return (function (p__76852){
var vec__76853 = p__76852;
var seq__76854 = cljs.core.seq(vec__76853);
var first__76855 = cljs.core.first(seq__76854);
var seq__76854__$1 = cljs.core.next(seq__76854);
var _tag = first__76855;
var first__76855__$1 = cljs.core.first(seq__76854__$1);
var seq__76854__$2 = cljs.core.next(seq__76854__$1);
var opts = first__76855__$1;
var args = seq__76854__$2;
var clause = vec__76853;
if((cljs.core.count(args) > (2))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag_77462,(function (){var or__5002__auto__ = opts;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.legacy_mbql.normalize.canonicalize_mbql_clause,args));
} else {
return metabase.legacy_mbql.normalize.canonicalize_simple_filter_clause(clause);
}
});})(seq__76836_77444,chunk__76837_77445,count__76838_77446,i__76839_77447,tag_77462,seq__76836_77456__$1,temp__5804__auto___77455))
);


var G__77464 = cljs.core.next(seq__76836_77456__$1);
var G__77465 = null;
var G__77466 = (0);
var G__77467 = (0);
seq__76836_77444 = G__77464;
chunk__76837_77445 = G__77465;
count__76838_77446 = G__77466;
i__76839_77447 = G__77467;
continue;
}
} else {
}
}
break;
}
metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rows","rows",850049680),(function (_){
return null;
}));
metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"aggregation-options","aggregation-options",-1904917550),(function (p__76856){
var vec__76857 = p__76856;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76857,(0),null);
var wrapped_aggregation_clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76857,(1),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76857,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregation-options","aggregation-options",-1904917550),metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(wrapped_aggregation_clause),options], null);
}));
metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"named","named",-422393479),(function (p__76861){
var vec__76862 = p__76861;
var seq__76863 = cljs.core.seq(vec__76862);
var first__76864 = cljs.core.first(seq__76863);
var seq__76863__$1 = cljs.core.next(seq__76863);
var _ = first__76864;
var first__76864__$1 = cljs.core.first(seq__76863__$1);
var seq__76863__$2 = cljs.core.next(seq__76863__$1);
var wrapped_ag = first__76864__$1;
var first__76864__$2 = cljs.core.first(seq__76863__$2);
var seq__76863__$3 = cljs.core.next(seq__76863__$2);
var expr_name = first__76864__$2;
var more = seq__76863__$3;
return metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregation-options","aggregation-options",-1904917550),metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(wrapped_ag),(function (){var vec__76866 = more;
var map__76869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76866,(0),null);
var map__76869__$1 = cljs.core.__destructure_map(map__76869);
var use_as_display_name_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76869__$1,new cljs.core.Keyword(null,"use-as-display-name?","use-as-display-name?",686752941));
if(use_as_display_name_QMARK_ === false){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),expr_name], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display-name","display-name",694513143),expr_name], null);
}
})()], null));
}));
metabase.legacy_mbql.normalize.canonicalize_count_clause = (function metabase$legacy_mbql$normalize$canonicalize_count_clause(p__76870){
var vec__76871 = p__76870;
var clause_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76871,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76871,(1),null);
if(cljs.core.truth_(field)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_name,metabase.legacy_mbql.normalize.canonicalize_implicit_field_id(field)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_name], null);
}
});
var seq__76874_77492 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"cum-count","cum-count",-1964431543)], null));
var chunk__76875_77493 = null;
var count__76876_77494 = (0);
var i__76877_77495 = (0);
while(true){
if((i__76877_77495 < count__76876_77494)){
var clause_name_77496 = chunk__76875_77493.cljs$core$IIndexed$_nth$arity$2(null,i__76877_77495);
metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,clause_name_77496,((function (seq__76874_77492,chunk__76875_77493,count__76876_77494,i__76877_77495,clause_name_77496){
return (function (clause){
return metabase.legacy_mbql.normalize.canonicalize_count_clause(clause);
});})(seq__76874_77492,chunk__76875_77493,count__76876_77494,i__76877_77495,clause_name_77496))
);


var G__77497 = seq__76874_77492;
var G__77498 = chunk__76875_77493;
var G__77499 = count__76876_77494;
var G__77500 = (i__76877_77495 + (1));
seq__76874_77492 = G__77497;
chunk__76875_77493 = G__77498;
count__76876_77494 = G__77499;
i__76877_77495 = G__77500;
continue;
} else {
var temp__5804__auto___77501 = cljs.core.seq(seq__76874_77492);
if(temp__5804__auto___77501){
var seq__76874_77502__$1 = temp__5804__auto___77501;
if(cljs.core.chunked_seq_QMARK_(seq__76874_77502__$1)){
var c__5525__auto___77503 = cljs.core.chunk_first(seq__76874_77502__$1);
var G__77509 = cljs.core.chunk_rest(seq__76874_77502__$1);
var G__77510 = c__5525__auto___77503;
var G__77511 = cljs.core.count(c__5525__auto___77503);
var G__77512 = (0);
seq__76874_77492 = G__77509;
chunk__76875_77493 = G__77510;
count__76876_77494 = G__77511;
i__76877_77495 = G__77512;
continue;
} else {
var clause_name_77513 = cljs.core.first(seq__76874_77502__$1);
metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,clause_name_77513,((function (seq__76874_77492,chunk__76875_77493,count__76876_77494,i__76877_77495,clause_name_77513,seq__76874_77502__$1,temp__5804__auto___77501){
return (function (clause){
return metabase.legacy_mbql.normalize.canonicalize_count_clause(clause);
});})(seq__76874_77492,chunk__76875_77493,count__76876_77494,i__76877_77495,clause_name_77513,seq__76874_77502__$1,temp__5804__auto___77501))
);


var G__77514 = cljs.core.next(seq__76874_77502__$1);
var G__77515 = null;
var G__77516 = (0);
var G__77517 = (0);
seq__76874_77492 = G__77514;
chunk__76875_77493 = G__77515;
count__76876_77494 = G__77516;
i__76877_77495 = G__77517;
continue;
}
} else {
}
}
break;
}
metabase.legacy_mbql.normalize.canonicalize_simple_aggregation_with_field = (function metabase$legacy_mbql$normalize$canonicalize_simple_aggregation_with_field(p__76880){
var vec__76881 = p__76880;
var clause_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76881,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76881,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_name,metabase.legacy_mbql.normalize.canonicalize_implicit_field_id(field)], null);
});
var seq__76884_77518 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avg","avg",197406200),new cljs.core.Keyword(null,"cum-sum","cum-sum",2064902349),new cljs.core.Keyword(null,"distinct","distinct",-1788879121),new cljs.core.Keyword(null,"stddev","stddev",-865474939),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"median","median",569566131),new cljs.core.Keyword(null,"var","var",-769682797)], null));
var chunk__76885_77519 = null;
var count__76886_77520 = (0);
var i__76887_77521 = (0);
while(true){
if((i__76887_77521 < count__76886_77520)){
var clause_name_77522 = chunk__76885_77519.cljs$core$IIndexed$_nth$arity$2(null,i__76887_77521);
metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,clause_name_77522,((function (seq__76884_77518,chunk__76885_77519,count__76886_77520,i__76887_77521,clause_name_77522){
return (function (clause){
return metabase.legacy_mbql.normalize.canonicalize_simple_aggregation_with_field(clause);
});})(seq__76884_77518,chunk__76885_77519,count__76886_77520,i__76887_77521,clause_name_77522))
);


var G__77525 = seq__76884_77518;
var G__77526 = chunk__76885_77519;
var G__77527 = count__76886_77520;
var G__77528 = (i__76887_77521 + (1));
seq__76884_77518 = G__77525;
chunk__76885_77519 = G__77526;
count__76886_77520 = G__77527;
i__76887_77521 = G__77528;
continue;
} else {
var temp__5804__auto___77529 = cljs.core.seq(seq__76884_77518);
if(temp__5804__auto___77529){
var seq__76884_77530__$1 = temp__5804__auto___77529;
if(cljs.core.chunked_seq_QMARK_(seq__76884_77530__$1)){
var c__5525__auto___77531 = cljs.core.chunk_first(seq__76884_77530__$1);
var G__77532 = cljs.core.chunk_rest(seq__76884_77530__$1);
var G__77533 = c__5525__auto___77531;
var G__77534 = cljs.core.count(c__5525__auto___77531);
var G__77535 = (0);
seq__76884_77518 = G__77532;
chunk__76885_77519 = G__77533;
count__76886_77520 = G__77534;
i__76887_77521 = G__77535;
continue;
} else {
var clause_name_77536 = cljs.core.first(seq__76884_77530__$1);
metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,clause_name_77536,((function (seq__76884_77518,chunk__76885_77519,count__76886_77520,i__76887_77521,clause_name_77536,seq__76884_77530__$1,temp__5804__auto___77529){
return (function (clause){
return metabase.legacy_mbql.normalize.canonicalize_simple_aggregation_with_field(clause);
});})(seq__76884_77518,chunk__76885_77519,count__76886_77520,i__76887_77521,clause_name_77536,seq__76884_77530__$1,temp__5804__auto___77529))
);


var G__77539 = cljs.core.next(seq__76884_77530__$1);
var G__77540 = null;
var G__77541 = (0);
var G__77542 = (0);
seq__76884_77518 = G__77539;
chunk__76885_77519 = G__77540;
count__76886_77520 = G__77541;
i__76887_77521 = G__77542;
continue;
}
} else {
}
}
break;
}
metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"percentile","percentile",-601188752),(function (p__76888){
var vec__76889 = p__76888;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76889,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76889,(1),null);
var percentile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76889,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"percentile","percentile",-601188752),metabase.legacy_mbql.normalize.canonicalize_implicit_field_id(field),percentile], null);
}));
metabase.legacy_mbql.normalize.canonicalize_filtered_aggregation_clause = (function metabase$legacy_mbql$normalize$canonicalize_filtered_aggregation_clause(p__76893){
var vec__76894 = p__76893;
var clause_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76894,(0),null);
var filter_subclause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76894,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_name,metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(filter_subclause)], null);
});
var seq__76897_77543 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"share","share",-589433933),new cljs.core.Keyword(null,"count-where","count-where",385407720)], null));
var chunk__76898_77544 = null;
var count__76899_77545 = (0);
var i__76900_77546 = (0);
while(true){
if((i__76900_77546 < count__76899_77545)){
var clause_name_77547 = chunk__76898_77544.cljs$core$IIndexed$_nth$arity$2(null,i__76900_77546);
metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,clause_name_77547,((function (seq__76897_77543,chunk__76898_77544,count__76899_77545,i__76900_77546,clause_name_77547){
return (function (clause){
return metabase.legacy_mbql.normalize.canonicalize_filtered_aggregation_clause(clause);
});})(seq__76897_77543,chunk__76898_77544,count__76899_77545,i__76900_77546,clause_name_77547))
);


var G__77548 = seq__76897_77543;
var G__77549 = chunk__76898_77544;
var G__77550 = count__76899_77545;
var G__77551 = (i__76900_77546 + (1));
seq__76897_77543 = G__77548;
chunk__76898_77544 = G__77549;
count__76899_77545 = G__77550;
i__76900_77546 = G__77551;
continue;
} else {
var temp__5804__auto___77552 = cljs.core.seq(seq__76897_77543);
if(temp__5804__auto___77552){
var seq__76897_77553__$1 = temp__5804__auto___77552;
if(cljs.core.chunked_seq_QMARK_(seq__76897_77553__$1)){
var c__5525__auto___77555 = cljs.core.chunk_first(seq__76897_77553__$1);
var G__77556 = cljs.core.chunk_rest(seq__76897_77553__$1);
var G__77557 = c__5525__auto___77555;
var G__77558 = cljs.core.count(c__5525__auto___77555);
var G__77559 = (0);
seq__76897_77543 = G__77556;
chunk__76898_77544 = G__77557;
count__76899_77545 = G__77558;
i__76900_77546 = G__77559;
continue;
} else {
var clause_name_77562 = cljs.core.first(seq__76897_77553__$1);
metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,clause_name_77562,((function (seq__76897_77543,chunk__76898_77544,count__76899_77545,i__76900_77546,clause_name_77562,seq__76897_77553__$1,temp__5804__auto___77552){
return (function (clause){
return metabase.legacy_mbql.normalize.canonicalize_filtered_aggregation_clause(clause);
});})(seq__76897_77543,chunk__76898_77544,count__76899_77545,i__76900_77546,clause_name_77562,seq__76897_77553__$1,temp__5804__auto___77552))
);


var G__77563 = cljs.core.next(seq__76897_77553__$1);
var G__77564 = null;
var G__77565 = (0);
var G__77566 = (0);
seq__76897_77543 = G__77563;
chunk__76898_77544 = G__77564;
count__76899_77545 = G__77565;
i__76900_77546 = G__77566;
continue;
}
} else {
}
}
break;
}
metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"sum-where","sum-where",2135348428),(function (p__76903){
var vec__76904 = p__76903;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76904,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76904,(1),null);
var filter_subclause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76904,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sum-where","sum-where",2135348428),metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(field),metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(filter_subclause)], null);
}));
metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__76907){
var vec__76908 = p__76907;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76908,(0),null);
var clauses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76908,(1),null);
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76908,(2),null);
if(cljs.core.truth_(options)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"case","case",1143702196),clauses], null)),metabase.legacy_mbql.normalize.normalize_tokens.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ignore-path","ignore-path",944069061)], 0)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"case","case",1143702196),cljs.core.vec((function (){var iter__5480__auto__ = (function metabase$legacy_mbql$normalize$iter__76911(s__76912){
return (new cljs.core.LazySeq(null,(function (){
var s__76912__$1 = s__76912;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__76912__$1);
if(temp__5804__auto__){
var s__76912__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__76912__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__76912__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__76914 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__76913 = (0);
while(true){
if((i__76913 < size__5479__auto__)){
var vec__76927 = cljs.core._nth(c__5478__auto__,i__76913);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76927,(0),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76927,(1),null);
cljs.core.chunk_append(b__76914,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(pred),metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(expr)], null));

var G__77568 = (i__76913 + (1));
i__76913 = G__77568;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__76914),metabase$legacy_mbql$normalize$iter__76911(cljs.core.chunk_rest(s__76912__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__76914),null);
}
} else {
var vec__76930 = cljs.core.first(s__76912__$2);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76930,(0),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76930,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(pred),metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(expr)], null),metabase$legacy_mbql$normalize$iter__76911(cljs.core.rest(s__76912__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(clauses);
})())], null);
}
}));
metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"substring","substring",1140866276),(function (p__76934){
var vec__76935 = p__76934;
var seq__76936 = cljs.core.seq(vec__76935);
var first__76937 = cljs.core.first(seq__76936);
var seq__76936__$1 = cljs.core.next(seq__76936);
var _ = first__76937;
var first__76937__$1 = cljs.core.first(seq__76936__$1);
var seq__76936__$2 = cljs.core.next(seq__76936__$1);
var arg = first__76937__$1;
var first__76937__$2 = cljs.core.first(seq__76936__$2);
var seq__76936__$3 = cljs.core.next(seq__76936__$2);
var start = first__76937__$2;
var more = seq__76936__$3;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"substring","substring",1140866276),metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(arg),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),start))?(1):metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(start))], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.legacy_mbql.normalize.canonicalize_mbql_clause,more));
}));
metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"offset","offset",296498311),(function (p__76938){
var vec__76939 = p__76938;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76939,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76939,(1),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76939,(2),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76939,(3),null);
var clause = vec__76939;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(clause),(4))){
} else {
throw (new Error("Assert failed: (= (count clause) 4)"));
}

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",296498311),(function (){var or__5002__auto__ = opts;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(expr),n], null);
}));
/**
 * Walk an `mbql-query` an canonicalize non-top-level clauses like `:fk->`.
 */
metabase.legacy_mbql.normalize.canonicalize_mbql_clauses = (function metabase$legacy_mbql$normalize$canonicalize_mbql_clauses(form){
if(cljs.core.record_QMARK_(form)){
return cljs.core.reduce_kv((function (r,k,x){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,k,(metabase.legacy_mbql.normalize.canonicalize_mbql_clauses.cljs$core$IFn$_invoke$arity$1 ? metabase.legacy_mbql.normalize.canonicalize_mbql_clauses.cljs$core$IFn$_invoke$arity$1(x) : metabase.legacy_mbql.normalize.canonicalize_mbql_clauses.call(null,x)));
}),form,form);
} else {
if(cljs.core.map_QMARK_(form)){
return cljs.core.update_vals(form,metabase.legacy_mbql.normalize.canonicalize_mbql_clauses);
} else {
if(cljs.core.truth_(metabase.legacy_mbql.normalize.mbql_clause_QMARK_(form))){
var top_canonical = (function (){try{return metabase.legacy_mbql.normalize.canonicalize_mbql_clause.cljs$core$IFn$_invoke$arity$1(form);
}catch (e76942){if((e76942 instanceof Error)){
var e = e76942;
var level__73195__auto___77584 = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"error","error",-978969032));
var logger__73196__auto___77586 = "metabase.legacy-mbql.normalize";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__73196__auto___77586,level__73195__auto___77584))){
var x__73197__auto___77587 = "Invalid clause:";
if((x__73197__auto___77587 instanceof Error)){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73196__auto___77586,level__73195__auto___77584,cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0)),x__73197__auto___77587);
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73196__auto___77586,level__73195__auto___77584,cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__73197__auto___77587,form], 0)),null);
}
} else {
}

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Invalid MBQL clause: {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.ex_message(e)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clause","clause",1479668060),form], null),e);
} else {
throw e76942;

}
}})();
if(cljs.core.seq(top_canonical)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(top_canonical),cljs.core.first(top_canonical)),cljs.core.map.cljs$core$IFn$_invoke$arity$1(metabase.legacy_mbql.normalize.canonicalize_mbql_clauses),cljs.core.rest(top_canonical));
} else {
return top_canonical;
}
} else {
if(cljs.core.seq_QMARK_(form)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.legacy_mbql.normalize.canonicalize_mbql_clauses,form);
} else {
if(cljs.core.coll_QMARK_(form)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(form),cljs.core.map.cljs$core$IFn$_invoke$arity$1(metabase.legacy_mbql.normalize.canonicalize_mbql_clauses),form);
} else {
return form;

}
}
}
}
}
});
/**
 * Convert old MBQL 95 single-aggregations like `{:aggregation :count}` or `{:aggregation [:count]}` to MBQL 98+
 *   multiple-aggregation syntax (e.g. `{:aggregation [[:count]]}`).
 */
metabase.legacy_mbql.normalize.wrap_single_aggregations = (function metabase$legacy_mbql$normalize$wrap_single_aggregations(aggregations){
return (function metabase$legacy_mbql$normalize$wrap_single_aggregations_$_replace_76944(_AMPERSAND_parents,_AMPERSAND_match){
try{if(cljs.core.truth_((function (){var fexpr__77003 = metabase.lib.util.match.impl.match_with_pred_or_class(cljs.core.seq_QMARK_);
return (fexpr__77003.cljs$core$IFn$_invoke$arity$1 ? fexpr__77003.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match) : fexpr__77003.call(null,_AMPERSAND_match));
})())){
return metabase$legacy_mbql$normalize$wrap_single_aggregations_$_replace_76944(_AMPERSAND_parents,cljs.core.vec(_AMPERSAND_match));
} else {
throw cljs.core.match.backtrack;

}
}catch (e76961){if((e76961 instanceof Error)){
var e__46214__auto__ = e76961;
if((e__46214__auto__ === cljs.core.match.backtrack)){
try{if(cljs.core.truth_((function (){var fexpr__77002 = metabase.lib.util.match.impl.match_with_pred_or_class(cljs.core.keyword_QMARK_);
return (fexpr__77002.cljs$core$IFn$_invoke$arity$1 ? fexpr__77002.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match) : fexpr__77002.call(null,_AMPERSAND_match));
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_AMPERSAND_match], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e76962){if((e76962 instanceof Error)){
var e__46214__auto____$1 = e76962;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (2))))){
try{var _AMPERSAND_match_left__76954 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(2));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__76954)) && ((cljs.core.count(_AMPERSAND_match_left__76954) === (2))))){
try{var _AMPERSAND_match_left__76954_0__76956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__76954,(0));
if(cljs.core.truth_(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"*","*",-1294732318),null,new cljs.core.Keyword(null,"-","-",-2112348439),null,new cljs.core.Keyword(null,"/","/",1282502798),null,new cljs.core.Keyword(null,"+","+",1913524883),null,new cljs.core.Keyword(null,"named","named",-422393479),null], null), null)))(_AMPERSAND_match_left__76954_0__76956))){
try{var _AMPERSAND_match_left__76954_1__76957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__76954,(1));
if(cljs.core.truth_(metabase.legacy_mbql.normalize.aggregation_subclause_QMARK_(_AMPERSAND_match_left__76954_1__76957))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(metabase.legacy_mbql.normalize.wrap_single_aggregations),aggregations);
} else {
throw cljs.core.match.backtrack;

}
}catch (e76998){if((e76998 instanceof Error)){
var e__46214__auto____$2 = e76998;
if((e__46214__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$2;
}
} else {
throw e76998;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76997){if((e76997 instanceof Error)){
var e__46214__auto____$2 = e76997;
if((e__46214__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$2;
}
} else {
throw e76997;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76996){if((e76996 instanceof Error)){
var e__46214__auto____$2 = e76996;
if((e__46214__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$2;
}
} else {
throw e76996;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76963){if((e76963 instanceof Error)){
var e__46214__auto____$2 = e76963;
if((e__46214__auto____$2 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (1))))){
try{var _AMPERSAND_match_left__76958 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(1));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__76958)) && ((cljs.core.count(_AMPERSAND_match_left__76958) === (1))))){
try{var _AMPERSAND_match_left__76958_0__76960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__76958,(0));
if((_AMPERSAND_match_left__76958_0__76960 instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_AMPERSAND_match], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e76994){if((e76994 instanceof Error)){
var e__46214__auto____$3 = e76994;
if((e__46214__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$3;
}
} else {
throw e76994;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76965){if((e76965 instanceof Error)){
var e__46214__auto____$3 = e76965;
if((e__46214__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$3;
}
} else {
throw e76965;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76964){if((e76964 instanceof Error)){
var e__46214__auto____$3 = e76964;
if((e__46214__auto____$3 === cljs.core.match.backtrack)){
return _AMPERSAND_match;
} else {
throw e__46214__auto____$3;
}
} else {
throw e76964;

}
}} else {
throw e__46214__auto____$2;
}
} else {
throw e76963;

}
}} else {
throw e__46214__auto____$1;
}
} else {
throw e76962;

}
}} else {
throw e__46214__auto__;
}
} else {
throw e76961;

}
}})(cljs.core.PersistentVector.EMPTY,aggregations);
});
/**
 * Canonicalize subclauses (see above) and make sure `:aggregation` is a sequence of clauses instead of a single
 *   clause.
 */
metabase.legacy_mbql.normalize.canonicalize_aggregations = (function metabase$legacy_mbql$normalize$canonicalize_aggregations(aggregations){
return cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(metabase.legacy_mbql.normalize.canonicalize_mbql_clauses,metabase.legacy_mbql.normalize.wrap_single_aggregations(aggregations)));
});
metabase.legacy_mbql.normalize.canonicalize_breakouts = (function metabase$legacy_mbql$normalize$canonicalize_breakouts(breakouts){
while(true){
if(cljs.core.truth_(metabase.legacy_mbql.normalize.mbql_clause_QMARK_(breakouts))){
var G__77590 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [breakouts], null);
breakouts = G__77590;
continue;
} else {
return cljs.core.not_empty(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.legacy_mbql.normalize.wrap_implicit_field_id,breakouts));
}
break;
}
});
/**
 * Make sure order by clauses like `[:asc 10]` get `:field-id` added where appropriate, e.g. `[:asc [:field-id 10]]`
 */
metabase.legacy_mbql.normalize.canonicalize_order_by = (function metabase$legacy_mbql$normalize$canonicalize_order_by(clauses){
return (function metabase$legacy_mbql$normalize$canonicalize_order_by_$_replace_77005(_AMPERSAND_parents,_AMPERSAND_match){
try{if(cljs.core.truth_((function (){var fexpr__77029 = metabase.lib.util.match.impl.match_with_pred_or_class(cljs.core.seq_QMARK_);
return (fexpr__77029.cljs$core$IFn$_invoke$arity$1 ? fexpr__77029.cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match) : fexpr__77029.call(null,_AMPERSAND_match));
})())){
return metabase$legacy_mbql$normalize$canonicalize_order_by_$_replace_77005(_AMPERSAND_parents,cljs.core.vec(_AMPERSAND_match));
} else {
throw cljs.core.match.backtrack;

}
}catch (e77012){if((e77012 instanceof Error)){
var e__46214__auto__ = e77012;
if((e__46214__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 2)))){
try{var _AMPERSAND_match_1__77009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_1__77009,new cljs.core.Keyword(null,"asc","asc",356854569))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
return metabase$legacy_mbql$normalize$canonicalize_order_by_$_replace_77005(_AMPERSAND_parents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"asc","asc",356854569),field], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e77019){if((e77019 instanceof Error)){
var e__46214__auto____$1 = e77019;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_1__77009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_1__77009,new cljs.core.Keyword(null,"desc","desc",2093485764))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
return metabase$legacy_mbql$normalize$canonicalize_order_by_$_replace_77005(_AMPERSAND_parents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"desc","desc",2093485764),field], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e77020){if((e77020 instanceof Error)){
var e__46214__auto____$2 = e77020;
if((e__46214__auto____$2 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_1__77009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_1__77009,new cljs.core.Keyword(null,"ascending","ascending",-988350486))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
return metabase$legacy_mbql$normalize$canonicalize_order_by_$_replace_77005(_AMPERSAND_parents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"asc","asc",356854569),field], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e77021){if((e77021 instanceof Error)){
var e__46214__auto____$3 = e77021;
if((e__46214__auto____$3 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_1__77009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_1__77009,new cljs.core.Keyword(null,"descending","descending",-24766135))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
return metabase$legacy_mbql$normalize$canonicalize_order_by_$_replace_77005(_AMPERSAND_parents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"desc","desc",2093485764),field], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e77022){if((e77022 instanceof Error)){
var e__46214__auto____$4 = e77022;
if((e__46214__auto____$4 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__77008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__77008,new cljs.core.Keyword(null,"ascending","ascending",-988350486))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return metabase$legacy_mbql$normalize$canonicalize_order_by_$_replace_77005(_AMPERSAND_parents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"asc","asc",356854569),field], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e77023){if((e77023 instanceof Error)){
var e__46214__auto____$5 = e77023;
if((e__46214__auto____$5 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__77008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__77008,new cljs.core.Keyword(null,"descending","descending",-24766135))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return metabase$legacy_mbql$normalize$canonicalize_order_by_$_replace_77005(_AMPERSAND_parents,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"desc","desc",2093485764),field], null));
} else {
throw cljs.core.match.backtrack;

}
}catch (e77024){if((e77024 instanceof Error)){
var e__46214__auto____$6 = e77024;
if((e__46214__auto____$6 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__77008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__77008,new cljs.core.Keyword(null,"asc","asc",356854569))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"asc","asc",356854569),metabase.legacy_mbql.normalize.canonicalize_implicit_field_id(field)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e77026){if((e77026 instanceof Error)){
var e__46214__auto____$7 = e77026;
if((e__46214__auto____$7 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__77008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__77008,new cljs.core.Keyword(null,"desc","desc",2093485764))){
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"desc","desc",2093485764),metabase.legacy_mbql.normalize.canonicalize_implicit_field_id(field)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e77027){if((e77027 instanceof Error)){
var e__46214__auto____$8 = e77027;
if((e__46214__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$8;
}
} else {
throw e77027;

}
}} else {
throw e__46214__auto____$7;
}
} else {
throw e77026;

}
}} else {
throw e__46214__auto____$6;
}
} else {
throw e77024;

}
}} else {
throw e__46214__auto____$5;
}
} else {
throw e77023;

}
}} else {
throw e__46214__auto____$4;
}
} else {
throw e77022;

}
}} else {
throw e__46214__auto____$3;
}
} else {
throw e77021;

}
}} else {
throw e__46214__auto____$2;
}
} else {
throw e77020;

}
}} else {
throw e__46214__auto____$1;
}
} else {
throw e77019;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e77013){if((e77013 instanceof Error)){
var e__46214__auto____$1 = e77013;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (0))))){
try{var _AMPERSAND_match_left__77010 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(0));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__77010)) && ((cljs.core.count(_AMPERSAND_match_left__77010) === (0))))){
try{var _AMPERSAND_match_right__77011 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_right__77011,clauses)){
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.legacy_mbql.normalize.canonicalize_order_by,clauses)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e77017){if((e77017 instanceof Error)){
var e__46214__auto____$2 = e77017;
if((e__46214__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$2;
}
} else {
throw e77017;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e77015){if((e77015 instanceof Error)){
var e__46214__auto____$2 = e77015;
if((e__46214__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$2;
}
} else {
throw e77015;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e77014){if((e77014 instanceof Error)){
var e__46214__auto____$2 = e77014;
if((e__46214__auto____$2 === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.replace_in_collection(metabase$legacy_mbql$normalize$canonicalize_order_by_$_replace_77005,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto____$2;
}
} else {
throw e77014;

}
}} else {
throw e__46214__auto____$1;
}
} else {
throw e77013;

}
}} else {
throw e__46214__auto__;
}
} else {
throw e77012;

}
}})(cljs.core.PersistentVector.EMPTY,clauses);
});
metabase.legacy_mbql.normalize.canonicalize_template_tag = (function metabase$legacy_mbql$normalize$canonicalize_template_tag(p__77031){
var map__77032 = p__77031;
var map__77032__$1 = cljs.core.__destructure_map(map__77032);
var tag = map__77032__$1;
var dimension = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77032__$1,new cljs.core.Keyword(null,"dimension","dimension",543254198));
var G__77033 = tag;
if(cljs.core.truth_(dimension)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__77033,new cljs.core.Keyword(null,"dimension","dimension",543254198),metabase.legacy_mbql.normalize.canonicalize_mbql_clause);
} else {
return G__77033;
}
});
metabase.legacy_mbql.normalize.canonicalize_template_tags = (function metabase$legacy_mbql$normalize$canonicalize_template_tags(tags){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5480__auto__ = (function metabase$legacy_mbql$normalize$canonicalize_template_tags_$_iter__77035(s__77036){
return (new cljs.core.LazySeq(null,(function (){
var s__77036__$1 = s__77036;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__77036__$1);
if(temp__5804__auto__){
var s__77036__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77036__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__77036__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__77038 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__77037 = (0);
while(true){
if((i__77037 < size__5479__auto__)){
var vec__77041 = cljs.core._nth(c__5478__auto__,i__77037);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77041,(0),null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77041,(1),null);
cljs.core.chunk_append(b__77038,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag_name,metabase.legacy_mbql.normalize.canonicalize_template_tag(tag)], null));

var G__77597 = (i__77037 + (1));
i__77037 = G__77597;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77038),metabase$legacy_mbql$normalize$canonicalize_template_tags_$_iter__77035(cljs.core.chunk_rest(s__77036__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77038),null);
}
} else {
var vec__77044 = cljs.core.first(s__77036__$2);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77044,(0),null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77044,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag_name,metabase.legacy_mbql.normalize.canonicalize_template_tag(tag)], null),metabase$legacy_mbql$normalize$canonicalize_template_tags_$_iter__77035(cljs.core.rest(s__77036__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(tags);
})());
});
metabase.legacy_mbql.normalize.canonicalize_native_query = (function metabase$legacy_mbql$normalize$canonicalize_native_query(p__77047){
var map__77048 = p__77047;
var map__77048__$1 = cljs.core.__destructure_map(map__77048);
var native_query = map__77048__$1;
var template_tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77048__$1,new cljs.core.Keyword(null,"template-tags","template-tags",1853115685));
var G__77049 = native_query;
if(cljs.core.truth_(template_tags)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__77049,new cljs.core.Keyword(null,"template-tags","template-tags",1853115685),metabase.legacy_mbql.normalize.canonicalize_template_tags);
} else {
return G__77049;
}
});
metabase.legacy_mbql.normalize.canonicalize_source_query = (function metabase$legacy_mbql$normalize$canonicalize_source_query(p__77051){
var map__77052 = p__77051;
var map__77052__$1 = cljs.core.__destructure_map(map__77052);
var source_query = map__77052__$1;
var native_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77052__$1,new cljs.core.Keyword(null,"native","native",-613060878));
var G__77053 = source_query;
var G__77053__$1 = ((cljs.core.not(native_QMARK_))?(metabase.legacy_mbql.normalize.canonicalize_inner_mbql_query.cljs$core$IFn$_invoke$arity$1 ? metabase.legacy_mbql.normalize.canonicalize_inner_mbql_query.cljs$core$IFn$_invoke$arity$1(G__77053) : metabase.legacy_mbql.normalize.canonicalize_inner_mbql_query.call(null,G__77053)):G__77053);
if(cljs.core.truth_(native_QMARK_)){
return metabase.legacy_mbql.normalize.canonicalize_native_query(G__77053__$1);
} else {
return G__77053__$1;
}
});
metabase.legacy_mbql.normalize.non_empty_QMARK_ = (function metabase$legacy_mbql$normalize$non_empty_QMARK_(x){
if(cljs.core.coll_QMARK_(x)){
return cljs.core.seq(x);
} else {
return (!((x == null)));
}
});
/**
 * Perform specific steps to canonicalize the various top-level clauses in an MBQL query.
 */
metabase.legacy_mbql.normalize.canonicalize_top_level_mbql_clauses = (function metabase$legacy_mbql$normalize$canonicalize_top_level_mbql_clauses(mbql_query){
var G__77054 = mbql_query;
var G__77054__$1 = ((metabase.legacy_mbql.normalize.non_empty_QMARK_(new cljs.core.Keyword(null,"aggregation","aggregation",1597476696).cljs$core$IFn$_invoke$arity$1(mbql_query)))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__77054,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),metabase.legacy_mbql.normalize.canonicalize_aggregations):G__77054);
var G__77054__$2 = ((metabase.legacy_mbql.normalize.non_empty_QMARK_(new cljs.core.Keyword(null,"breakout","breakout",-732419050).cljs$core$IFn$_invoke$arity$1(mbql_query)))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__77054__$1,new cljs.core.Keyword(null,"breakout","breakout",-732419050),metabase.legacy_mbql.normalize.canonicalize_breakouts):G__77054__$1);
var G__77054__$3 = ((metabase.legacy_mbql.normalize.non_empty_QMARK_(new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(mbql_query)))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__77054__$2,new cljs.core.Keyword(null,"fields","fields",-1932066230),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,metabase.legacy_mbql.normalize.wrap_implicit_field_id)):G__77054__$2);
var G__77054__$4 = ((metabase.legacy_mbql.normalize.non_empty_QMARK_(new cljs.core.Keyword(null,"order-by","order-by",1527318070).cljs$core$IFn$_invoke$arity$1(mbql_query)))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__77054__$3,new cljs.core.Keyword(null,"order-by","order-by",1527318070),metabase.legacy_mbql.normalize.canonicalize_order_by):G__77054__$3);
if(metabase.legacy_mbql.normalize.non_empty_QMARK_(new cljs.core.Keyword(null,"source-query","source-query",198004422).cljs$core$IFn$_invoke$arity$1(mbql_query))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__77054__$4,new cljs.core.Keyword(null,"source-query","source-query",198004422),metabase.legacy_mbql.normalize.canonicalize_source_query);
} else {
return G__77054__$4;
}
});
metabase.legacy_mbql.normalize.canonicalize_inner_mbql_query = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(metabase.legacy_mbql.normalize.canonicalize_mbql_clauses,metabase.legacy_mbql.normalize.canonicalize_top_level_mbql_clauses);
/**
 * In Metabase 0.33.0 `:source-metadata` about resolved queries is added to the 'inner' MBQL query rather than to the
 *   top-level; if we encounter the old style, move it to the appropriate location.
 */
metabase.legacy_mbql.normalize.move_source_metadata_to_mbql_query = (function metabase$legacy_mbql$normalize$move_source_metadata_to_mbql_query(p__77055){
var map__77056 = p__77055;
var map__77056__$1 = cljs.core.__destructure_map(map__77056);
var query = map__77056__$1;
var source_metadata = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77056__$1,new cljs.core.Keyword(null,"source-metadata","source-metadata",-477816085));
return cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(query,new cljs.core.Keyword(null,"source-metadata","source-metadata",-477816085)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"source-metadata","source-metadata",-477816085)], null),source_metadata);
});
metabase.legacy_mbql.normalize.canonicalize_mbql_clauses_excluding_native = (function metabase$legacy_mbql$normalize$canonicalize_mbql_clauses_excluding_native(p__77058){
var map__77059 = p__77058;
var map__77059__$1 = cljs.core.__destructure_map(map__77059);
var outer_query = map__77059__$1;
var native$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77059__$1,new cljs.core.Keyword(null,"native","native",-613060878));
if(cljs.core.truth_(native$)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(metabase.legacy_mbql.normalize.canonicalize_mbql_clauses(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(outer_query,new cljs.core.Keyword(null,"native","native",-613060878))),new cljs.core.Keyword(null,"native","native",-613060878),native$);
} else {
return metabase.legacy_mbql.normalize.canonicalize_mbql_clauses(outer_query);
}
});
/**
 * Canonicalize a query [MBQL query], rewriting the query as if you perfectly followed the recommended style guides for
 *   writing MBQL. Does things like removes unneeded and empty clauses, converts older MBQL '95 syntax to MBQL '98, etc.
 */
metabase.legacy_mbql.normalize.canonicalize = (function metabase$legacy_mbql$normalize$canonicalize(p__77061){
var map__77062 = p__77061;
var map__77062__$1 = cljs.core.__destructure_map(map__77062);
var outer_query = map__77062__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77062__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77062__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var source_metadata = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77062__$1,new cljs.core.Keyword(null,"source-metadata","source-metadata",-477816085));
var native$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77062__$1,new cljs.core.Keyword(null,"native","native",-613060878));
try{var G__77064 = outer_query;
var G__77064__$1 = (cljs.core.truth_(source_metadata)?metabase.legacy_mbql.normalize.move_source_metadata_to_mbql_query(G__77064):G__77064);
var G__77064__$2 = (cljs.core.truth_(query)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__77064__$1,new cljs.core.Keyword(null,"query","query",-1288509510),metabase.legacy_mbql.normalize.canonicalize_inner_mbql_query):G__77064__$1);
var G__77064__$3 = (cljs.core.truth_(parameters)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__77064__$2,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,metabase.legacy_mbql.normalize.canonicalize_mbql_clauses)):G__77064__$2);
var G__77064__$4 = (cljs.core.truth_(native$)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__77064__$3,new cljs.core.Keyword(null,"native","native",-613060878),metabase.legacy_mbql.normalize.canonicalize_native_query):G__77064__$3);
return metabase.legacy_mbql.normalize.canonicalize_mbql_clauses_excluding_native(G__77064__$4);

}catch (e77063){if((e77063 instanceof Error)){
var e = e77063;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Error canonicalizing query: {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.ex_message(e)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),query], null),e);
} else {
throw e77063;

}
}});
/**
 * Remove any Fields specified in both `:breakout` and `:fields` from `:fields`; it is implied that any breakout Field
 *   will be returned, specifying it in both would imply it is to be returned twice, which tends to cause confusion for
 *   the QP and drivers. (This is done to work around historic bugs with the way queries were generated on the frontend;
 *   I'm not sure this behavior makes sense, but removing it would break existing queries.)
 * 
 *   We will remove either exact matches:
 * 
 *  {:breakout [[:field-id 10]], :fields [[:field-id 10]]} ; -> {:breakout [[:field-id 10]]}
 * 
 *   or unbucketed matches:
 * 
 *  {:breakout [[:datetime-field [:field-id 10] :month]], :fields [[:field-id 10]]}
 *  ;; -> {:breakout [[:field-id 10]]}
 */
metabase.legacy_mbql.normalize.remove_breakout_fields_from_fields = (function metabase$legacy_mbql$normalize$remove_breakout_fields_from_fields(p__77065){
var map__77066 = p__77065;
var map__77066__$1 = cljs.core.__destructure_map(map__77066);
var query = map__77066__$1;
var map__77067 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77066__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var map__77067__$1 = cljs.core.__destructure_map(map__77067);
var breakout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77067__$1,new cljs.core.Keyword(null,"breakout","breakout",-732419050));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77067__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
if((!(((cljs.core.seq(breakout)) && (cljs.core.seq(fields)))))){
return query;
} else {
var breakout_fields = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.cat,cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$legacy_mbql$normalize$remove_breakout_fields_from_fields_$_match_77068(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 3)))){
try{var _AMPERSAND_match_0__77070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__77070,new cljs.core.Keyword(null,"field","field",-1302436500))){
var id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_AMPERSAND_match,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"field","field",-1302436500),id_or_name,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358))], null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e77074){if((e77074 instanceof Error)){
var e__46214__auto__ = e77074;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e77074;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e77073){if((e77073 instanceof Error)){
var e__46214__auto__ = e77073;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.match_in_collection(metabase$legacy_mbql$normalize$remove_breakout_fields_from_fields_$_match_77068,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto__;
}
} else {
throw e77073;

}
}})(cljs.core.PersistentVector.EMPTY,breakout))));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(query,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"fields","fields",-1932066230)], null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.remove,breakout_fields)));
}
});
/**
 * Perform transformations that operate on the query as a whole, making sure the structure as a whole is logical and
 *   consistent.
 */
metabase.legacy_mbql.normalize.perform_whole_query_transformations = (function metabase$legacy_mbql$normalize$perform_whole_query_transformations(query){
try{return metabase.legacy_mbql.normalize.remove_breakout_fields_from_fields(query);
}catch (e77075){if((e77075 instanceof Error)){
var e = e77075;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(metabase.shared.util.i18n.js_i18n("Error performing whole query transformations"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),query], null),e);
} else {
throw e77075;

}
}});
metabase.legacy_mbql.normalize.remove_empty_clauses_in_map = (function metabase$legacy_mbql$normalize$remove_empty_clauses_in_map(m,path){
var m__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(m),(function (){var iter__5480__auto__ = (function metabase$legacy_mbql$normalize$remove_empty_clauses_in_map_$_iter__77076(s__77077){
return (new cljs.core.LazySeq(null,(function (){
var s__77077__$1 = s__77077;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__77077__$1);
if(temp__5804__auto__){
var s__77077__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77077__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__77077__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__77079 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__77078 = (0);
while(true){
if((i__77078 < size__5479__auto__)){
var vec__77080 = cljs.core._nth(c__5478__auto__,i__77078);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77080,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77080,(1),null);
var v__$1 = (function (){var G__77083 = v;
var G__77084 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k);
return (metabase.legacy_mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2 ? metabase.legacy_mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2(G__77083,G__77084) : metabase.legacy_mbql.normalize.remove_empty_clauses.call(null,G__77083,G__77084));
})();
if((!((v__$1 == null)))){
cljs.core.chunk_append(b__77079,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v__$1], null));

var G__77639 = (i__77078 + (1));
i__77078 = G__77639;
continue;
} else {
var G__77640 = (i__77078 + (1));
i__77078 = G__77640;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77079),metabase$legacy_mbql$normalize$remove_empty_clauses_in_map_$_iter__77076(cljs.core.chunk_rest(s__77077__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77079),null);
}
} else {
var vec__77085 = cljs.core.first(s__77077__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77085,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77085,(1),null);
var v__$1 = (function (){var G__77088 = v;
var G__77089 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k);
return (metabase.legacy_mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2 ? metabase.legacy_mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2(G__77088,G__77089) : metabase.legacy_mbql.normalize.remove_empty_clauses.call(null,G__77088,G__77089));
})();
if((!((v__$1 == null)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v__$1], null),metabase$legacy_mbql$normalize$remove_empty_clauses_in_map_$_iter__77076(cljs.core.rest(s__77077__$2)));
} else {
var G__77643 = cljs.core.rest(s__77077__$2);
s__77077__$1 = G__77643;
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
return iter__5480__auto__(m);
})());
if(cljs.core.seq(m__$1)){
return m__$1;
} else {
return null;
}
});
metabase.legacy_mbql.normalize.remove_empty_clauses_in_sequence_STAR_ = (function metabase$legacy_mbql$normalize$remove_empty_clauses_in_sequence_STAR_(xs,path){
var xs__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__77090_SHARP_){
var G__77091 = p1__77090_SHARP_;
var G__77092 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword("metabase.legacy-mbql.normalize","sequence","metabase.legacy-mbql.normalize/sequence",750828401));
return (metabase.legacy_mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2 ? metabase.legacy_mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2(G__77091,G__77092) : metabase.legacy_mbql.normalize.remove_empty_clauses.call(null,G__77091,G__77092));
}),xs);
if(cljs.core.truth_(cljs.core.some(cljs.core.some_QMARK_,xs__$1))){
return xs__$1;
} else {
return null;
}
});
if((typeof metabase !== 'undefined') && (typeof metabase.legacy_mbql !== 'undefined') && (typeof metabase.legacy_mbql.normalize !== 'undefined') && (typeof metabase.legacy_mbql.normalize.remove_empty_clauses_in_mbql_clause !== 'undefined')){
} else {
metabase.legacy_mbql.normalize.remove_empty_clauses_in_mbql_clause = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77093 = cljs.core.get_global_hierarchy;
return (fexpr__77093.cljs$core$IFn$_invoke$arity$0 ? fexpr__77093.cljs$core$IFn$_invoke$arity$0() : fexpr__77093.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.legacy-mbql.normalize","remove-empty-clauses-in-mbql-clause"),(function (p__77094,_path){
var vec__77096 = p__77094;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77096,(0),null);
return tag;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
metabase.legacy_mbql.normalize.remove_empty_clauses_in_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (clause,path){
return metabase.legacy_mbql.normalize.remove_empty_clauses_in_sequence_STAR_(clause,path);
}));
metabase.legacy_mbql.normalize.remove_empty_clauses_in_mbql_clause.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"offset","offset",296498311),(function (p__77102,path){
var vec__77104 = p__77102;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77104,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77104,(1),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77104,(2),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77104,(3),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",296498311),opts,(function (){var G__77110 = expr;
var G__77111 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"offset","offset",296498311));
return (metabase.legacy_mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2 ? metabase.legacy_mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2(G__77110,G__77111) : metabase.legacy_mbql.normalize.remove_empty_clauses.call(null,G__77110,G__77111));
})(),n], null);
}));
metabase.legacy_mbql.normalize.remove_empty_clauses_in_sequence = (function metabase$legacy_mbql$normalize$remove_empty_clauses_in_sequence(x,path){
if(cljs.core.truth_(metabase.legacy_mbql.normalize.mbql_clause_QMARK_(x))){
return metabase.legacy_mbql.normalize.remove_empty_clauses_in_mbql_clause.cljs$core$IFn$_invoke$arity$2(x,path);
} else {
return metabase.legacy_mbql.normalize.remove_empty_clauses_in_sequence_STAR_(x,path);
}
});
metabase.legacy_mbql.normalize.remove_empty_clauses_in_join = (function metabase$legacy_mbql$normalize$remove_empty_clauses_in_join(join){
var G__77113 = join;
var G__77114 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510)], null);
return (metabase.legacy_mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2 ? metabase.legacy_mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2(G__77113,G__77114) : metabase.legacy_mbql.normalize.remove_empty_clauses.call(null,G__77113,G__77114));
});
metabase.legacy_mbql.normalize.remove_empty_clauses_in_source_query = (function metabase$legacy_mbql$normalize$remove_empty_clauses_in_source_query(p__77118){
var map__77119 = p__77118;
var map__77119__$1 = cljs.core.__destructure_map(map__77119);
var source_query = map__77119__$1;
var native_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77119__$1,new cljs.core.Keyword(null,"native","native",-613060878));
if(cljs.core.truth_(native_QMARK_)){
return clojure.set.rename_keys((function (){var G__77120 = clojure.set.rename_keys(source_query,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"native","native",-613060878),new cljs.core.Keyword(null,"query","query",-1288509510)], null));
var G__77121 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"native","native",-613060878)], null);
return (metabase.legacy_mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2 ? metabase.legacy_mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2(G__77120,G__77121) : metabase.legacy_mbql.normalize.remove_empty_clauses.call(null,G__77120,G__77121));
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"native","native",-613060878)], null));
} else {
var G__77123 = source_query;
var G__77124 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510)], null);
return (metabase.legacy_mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2 ? metabase.legacy_mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2(G__77123,G__77124) : metabase.legacy_mbql.normalize.remove_empty_clauses.call(null,G__77123,G__77124));
}
});
metabase.legacy_mbql.normalize.remove_empty_clauses_in_parameter = (function metabase$legacy_mbql$normalize$remove_empty_clauses_in_parameter(parameter){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(parameter,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null)),metabase.legacy_mbql.normalize.remove_empty_clauses_in_map(parameter,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.Keyword("metabase.legacy-mbql.normalize","sequence","metabase.legacy-mbql.normalize/sequence",750828401)], null))], 0));
});
metabase.legacy_mbql.normalize.path__GT_special_remove_empty_clauses_fn = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"native","native",-613060878),cljs.core.identity,new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source-query","source-query",198004422),metabase.legacy_mbql.normalize.remove_empty_clauses_in_source_query,new cljs.core.Keyword(null,"joins","joins",1033962699),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("metabase.legacy-mbql.normalize","sequence","metabase.legacy-mbql.normalize/sequence",750828401),metabase.legacy_mbql.normalize.remove_empty_clauses_in_join], null)], null),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("metabase.legacy-mbql.normalize","sequence","metabase.legacy-mbql.normalize/sequence",750828401),metabase.legacy_mbql.normalize.remove_empty_clauses_in_parameter], null),new cljs.core.Keyword(null,"viz-settings","viz-settings",256055379),cljs.core.identity,new cljs.core.Keyword(null,"create-row","create-row",1226455653),cljs.core.identity,new cljs.core.Keyword(null,"update-row","update-row",-2028796244),cljs.core.identity], null);
/**
 * Remove any empty or `nil` clauses in a query.
 */
metabase.legacy_mbql.normalize.remove_empty_clauses = (function metabase$legacy_mbql$normalize$remove_empty_clauses(var_args){
var G__77131 = arguments.length;
switch (G__77131) {
case 1:
return metabase.legacy_mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return metabase.legacy_mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.legacy_mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$1 = (function (query){
return metabase.legacy_mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2(query,cljs.core.PersistentVector.EMPTY);
}));

(metabase.legacy_mbql.normalize.remove_empty_clauses.cljs$core$IFn$_invoke$arity$2 = (function (x,path){
try{var special_fn = ((cljs.core.seq(path))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(metabase.legacy_mbql.normalize.path__GT_special_remove_empty_clauses_fn,path):null);
if(cljs.core.fn_QMARK_(special_fn)){
return (special_fn.cljs$core$IFn$_invoke$arity$1 ? special_fn.cljs$core$IFn$_invoke$arity$1(x) : special_fn.call(null,x));
} else {
if(cljs.core.record_QMARK_(x)){
return x;
} else {
if(cljs.core.map_QMARK_(x)){
return metabase.legacy_mbql.normalize.remove_empty_clauses_in_map(x,path);
} else {
if(cljs.core.sequential_QMARK_(x)){
return metabase.legacy_mbql.normalize.remove_empty_clauses_in_sequence(x,path);
} else {
return x;

}
}
}
}
}catch (e77136){if((e77136 instanceof Error)){
var e = e77136;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("Error removing empty clauses from form.",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"form","form",-1624062471),x,new cljs.core.Keyword(null,"path","path",-188191168),path], null),e);
} else {
throw e77136;

}
}}));

(metabase.legacy_mbql.normalize.remove_empty_clauses.cljs$lang$maxFixedArity = 2);

/**
 * Normalize the tokens in a Metabase query (i.e., make them all `lisp-case` keywords), rewrite deprecated clauses as
 *   up-to-date MBQL 2000, and remove empty clauses.
 */
metabase.legacy_mbql.normalize.normalize = (function (){var normalize_STAR_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(metabase.legacy_mbql.normalize.remove_empty_clauses,metabase.legacy_mbql.normalize.perform_whole_query_transformations,metabase.legacy_mbql.normalize.canonicalize,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.legacy_mbql.normalize.normalize_tokens], 0));
return (function (query){
try{return normalize_STAR_(query);
}catch (e77137){if((e77137 instanceof Error)){
var e = e77137;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Error normalizing query: {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.ex_message(e)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),query], null),e);
} else {
throw e77137;

}
}});
})();
/**
 * Inputs: [query :- :map]
 *   Return: :metabase.legacy-mbql.schema/Query
 *        
 * 
 *   Like [[normalize]], but checks the result against the Malli schema for a legacy query, which will cause it to throw
 *   if it fails (at least in dev).
 */
metabase.legacy_mbql.normalize.normalize_or_throw = (function metabase$legacy_mbql$normalize$normalize_or_throw(query){
return metabase.legacy_mbql.normalize.normalize(query);
});
/**
 * Inputs: [path :- [:maybe [:sequential :keyword]] x]
 *   Return: :any
 *        
 * 
 *   Normalize just a specific fragment of a query, such as just the inner MBQL part or just a filter clause. `path` is
 *   where this fragment would normally live in a full query.
 * 
 *  (normalize-fragment [:query :filter] ["=" 100 200])
 *  ;;-> [:= [:field-id 100] 200]
 */
metabase.legacy_mbql.normalize.normalize_fragment = (function metabase$legacy_mbql$normalize$normalize_fragment(path,x){
if(cljs.core.not(cljs.core.seq(path))){
return metabase.legacy_mbql.normalize.normalize(x);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__77146 = cljs.core.butlast(path);
var G__77147 = cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.last(path),x]);
return (metabase.legacy_mbql.normalize.normalize_fragment.cljs$core$IFn$_invoke$arity$2 ? metabase.legacy_mbql.normalize.normalize_fragment.cljs$core$IFn$_invoke$arity$2(G__77146,G__77147) : metabase.legacy_mbql.normalize.normalize_fragment.call(null,G__77146,G__77147));
})(),cljs.core.last(path));
}
});

//# sourceMappingURL=metabase.legacy_mbql.normalize.js.map
