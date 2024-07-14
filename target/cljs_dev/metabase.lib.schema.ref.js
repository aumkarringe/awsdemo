var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./medley.core.js");
require("./metabase.lib.dispatch.js");
require("./metabase.lib.hierarchy.js");
require("./metabase.lib.schema.binning.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.schema.expression.js");
require("./metabase.lib.schema.id.js");
require("./metabase.lib.schema.mbql_clause.js");
require("./metabase.lib.schema.temporal_bucketing.js");
require("./metabase.types.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.schema.ref.js");

goog.provide('metabase.lib.schema.ref');
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.ref","field.options","metabase.lib.schema.ref/field.options",408316031),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("encode","serialize","encode/serialize",829266136),(function (opts){
return medley.core.filter_keys((function (k){
return ((cljs.core.simple_keyword_QMARK_(k)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(k),"lib")));
}),opts);
})], null),new cljs.core.Keyword("metabase.lib.schema.common","options","metabase.lib.schema.common/options",-1078359294),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.temporal-bucketing","unit","metabase.lib.schema.temporal-bucketing/unit",1808010880)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binning","binning",1709835866),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.binning","binning","metabase.lib.schema.binning/binning",-806522293)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("metabase.lib.field","original-effective-type","metabase.lib.field/original-effective-type",34164372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.common","base-type","metabase.lib.schema.common/base-type",999524206)], null)], null)], null)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.ref","field.literal.options","metabase.lib.schema.ref/field.literal.options",-860446668),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.Keyword("metabase.lib.schema.ref","field.options","metabase.lib.schema.ref/field.options",408316031),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.common","base-type","metabase.lib.schema.common/base-type",999524206)], null)], null)], null)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.ref","field.literal","metabase.lib.schema.ref/field.literal",-1228060748),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"field","field",-1302436500)], null),new cljs.core.Keyword("metabase.lib.schema.ref","field.literal.options","metabase.lib.schema.ref/field.literal.options",-860446668),new cljs.core.Keyword("metabase.lib.schema.common","non-blank-string","metabase.lib.schema.common/non-blank-string",-2032366619)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.ref","field.id","metabase.lib.schema.ref/field.id",-956546909),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"field","field",-1302436500)], null),new cljs.core.Keyword("metabase.lib.schema.ref","field.options","metabase.lib.schema.ref/field.options",408316031),new cljs.core.Keyword("metabase.lib.schema.id","field","metabase.lib.schema.id/field",-985236431)], null));
metabase.lib.schema.mbql_clause.define_mbql_clause.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("decode","normalize","decode/normalize",1047511567),metabase.lib.schema.common.normalize_keyword], null),new cljs.core.Keyword(null,"field","field",-1302436500)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.ref","field.options","metabase.lib.schema.ref/field.options",408316031)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword("metabase.lib.schema.id","field","metabase.lib.schema.id/field",-985236431),new cljs.core.Keyword("metabase.lib.schema.common","non-blank-string","metabase.lib.schema.common/non-blank-string",-2032366619)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (clause){
if(cljs.core.sequential_QMARK_(clause)){
var vec__75776 = clause;
var _field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75776,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75776,(1),null);
var id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75776,(2),null);
return metabase.lib.dispatch.dispatch_value(id_or_name);
} else {
return null;
}
}),new cljs.core.Keyword("error","message","error/message",-502809098),"Invalid :field clause ID or name: must be a string or integer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dispatch-type","integer","dispatch-type/integer",1558418815),new cljs.core.Keyword("metabase.lib.schema.ref","field.id","metabase.lib.schema.ref/field.id",-956546909)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dispatch-type","string","dispatch-type/string",171698561),new cljs.core.Keyword("metabase.lib.schema.ref","field.literal","metabase.lib.schema.ref/field.literal",-1228060748)], null)], null)], null));
metabase.lib.hierarchy.derive(new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword("metabase.lib.schema.ref","ref","metabase.lib.schema.ref/ref",-1124116498));
metabase.lib.schema.expression.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"field","field",-1302436500),(function (p__75787){
var vec__75788 = p__75787;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75788,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75788,(1),null);
var _id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75788,(2),null);
var or__5002__auto__ = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),new cljs.core.Keyword(null,"base-type","base-type",1167971299))(opts);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword("metabase.lib.schema.expression","type.unknown","metabase.lib.schema.expression/type.unknown",-98159107);
}
}));
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"expression","expression",202311876),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("metabase.lib.schema.common","non-blank-string","metabase.lib.schema.common/non-blank-string",-2032366619)], 0));
metabase.lib.schema.expression.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"expression","expression",202311876),(function (p__75840){
var vec__75841 = p__75840;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75841,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75841,(1),null);
var _expression_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75841,(2),null);
var or__5002__auto__ = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),new cljs.core.Keyword(null,"base-type","base-type",1167971299))(opts);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword("metabase.lib.schema.expression","type.unknown","metabase.lib.schema.expression/type.unknown",-98159107);
}
}));
metabase.lib.hierarchy.derive(new cljs.core.Keyword(null,"expression","expression",202311876),new cljs.core.Keyword("metabase.lib.schema.ref","ref","metabase.lib.schema.ref/ref",-1124116498));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.ref","aggregation-options","metabase.lib.schema.ref/aggregation-options",-15566487),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.Keyword("metabase.lib.schema.common","options","metabase.lib.schema.common/options",-1078359294),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("metabase.lib.schema.common","non-blank-string","metabase.lib.schema.common/non-blank-string",-2032366619)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"display-name","display-name",694513143),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("metabase.lib.schema.common","non-blank-string","metabase.lib.schema.common/non-blank-string",-2032366619)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","source-name","lib/source-name",1931622490),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("metabase.lib.schema.common","non-blank-string","metabase.lib.schema.common/non-blank-string",-2032366619)], null)], null)], null));
metabase.lib.schema.mbql_clause.define_mbql_clause.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("decode","normalize","decode/normalize",1047511567),metabase.lib.schema.common.normalize_keyword], null),new cljs.core.Keyword(null,"aggregation","aggregation",1597476696)], null),new cljs.core.Keyword("metabase.lib.schema.ref","aggregation-options","metabase.lib.schema.ref/aggregation-options",-15566487),new cljs.core.Keyword(null,"string","string",-1989541586)], null));
metabase.lib.schema.expression.type_of_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),(function (p__75844){
var vec__75845 = p__75844;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75845,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75845,(1),null);
var _index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75845,(2),null);
var or__5002__auto__ = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),new cljs.core.Keyword(null,"base-type","base-type",1167971299))(opts);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword("metabase.lib.schema.expression","type.unknown","metabase.lib.schema.expression/type.unknown",-98159107);
}
}));
metabase.lib.hierarchy.derive(new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),new cljs.core.Keyword("metabase.lib.schema.ref","ref","metabase.lib.schema.ref/ref",-1124116498));
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"segment","segment",-964921196),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword("type","Boolean","type/Boolean",26348630),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.id","segment","metabase.lib.schema.id/segment",-983297351)], null)], null)], 0));
metabase.lib.hierarchy.derive(new cljs.core.Keyword(null,"segment","segment",-964921196),new cljs.core.Keyword("metabase.lib.schema.ref","ref","metabase.lib.schema.ref/ref",-1124116498));
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"metric","metric",408798077),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword("metabase.lib.schema.expression","type.unknown","metabase.lib.schema.expression/type.unknown",-98159107),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.id","metric","metabase.lib.schema.id/metric",369478774)], null)], null)], 0));
metabase.lib.hierarchy.derive(new cljs.core.Keyword(null,"metric","metric",408798077),new cljs.core.Keyword("metabase.lib.schema.ref","ref","metabase.lib.schema.ref/ref",-1124116498));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.ref","ref","metabase.lib.schema.ref/ref",-1124116498),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword("metabase.lib.schema.mbql-clause","clause","metabase.lib.schema.mbql-clause/clause",955279388),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (_,___$1){
return ["Valid reference, must be one of these clauses: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.descendants.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(metabase.lib.hierarchy.hierarchy),new cljs.core.Keyword("metabase.lib.schema.ref","ref","metabase.lib.schema.ref/ref",-1124116498))))].join('');
})], null),(function (p__75848){
var vec__75849 = p__75848;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75849,(0),null);
var _clause = vec__75849;
return metabase.lib.hierarchy.isa_QMARK_(tag,new cljs.core.Keyword("metabase.lib.schema.ref","ref","metabase.lib.schema.ref/ref",-1124116498));
})], null)], null));

//# sourceMappingURL=metabase.lib.schema.ref.js.map
