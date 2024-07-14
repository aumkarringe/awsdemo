var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.schema.expression.js");
require("./metabase.lib.schema.mbql_clause.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.schema.order_by.js");

goog.provide('metabase.lib.schema.order_by');
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.order-by","direction","metabase.lib.schema.order-by/direction",-586192897),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("decode","normalize","decode/normalize",1047511567),metabase.lib.schema.common.normalize_keyword], null),new cljs.core.Keyword(null,"asc","asc",356854569),new cljs.core.Keyword(null,"desc","desc",2093485764)], null));
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"asc","asc",356854569),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","orderable","metabase.lib.schema.expression/orderable",-1555566130)], null)], 0));
metabase.lib.schema.mbql_clause.define_tuple_mbql_clause.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"desc","desc",2093485764),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","orderable","metabase.lib.schema.expression/orderable",-1555566130)], null)], 0));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.order-by","order-by","metabase.lib.schema.order-by/order-by",1486475724),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),metabase.lib.schema.common.mbql_clause_tag], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"asc","asc",356854569),new cljs.core.Keyword("mbql.clause","asc","mbql.clause/asc",-1302036514)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.Keyword("mbql.clause","desc","mbql.clause/desc",1554537111)], null)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.order-by","order-bys","metabase.lib.schema.order-by/order-bys",-524479705),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.order-by","order-by","metabase.lib.schema.order-by/order-by",1486475724)], null)], null));

//# sourceMappingURL=metabase.lib.schema.order_by.js.map
