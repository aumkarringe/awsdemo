var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./medley.core.js");
require("./metabase.legacy_mbql.util.js");
require("./metabase.lib.schema.actions.js");
require("./metabase.lib.schema.aggregation.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.schema.expression.js");
require("./metabase.lib.schema.expression.arithmetic.js");
require("./metabase.lib.schema.expression.conditional.js");
require("./metabase.lib.schema.expression.string.js");
require("./metabase.lib.schema.expression.temporal.js");
require("./metabase.lib.schema.expression.window.js");
require("./metabase.lib.schema.filter.js");
require("./metabase.lib.schema.id.js");
require("./metabase.lib.schema.info.js");
require("./metabase.lib.schema.join.js");
require("./metabase.lib.schema.literal.js");
require("./metabase.lib.schema.order_by.js");
require("./metabase.lib.schema.parameter.js");
require("./metabase.lib.schema.ref.js");
require("./metabase.lib.schema.template_tag.js");
require("./metabase.lib.schema.util.js");
require("./metabase.lib.util.match.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.schema.js");

goog.provide('metabase.lib.schema');
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema","stage.native","metabase.lib.schema/stage.native",-1206212320),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("decode","normalize","decode/normalize",1047511567),metabase.lib.schema.common.normalize_map], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("decode","normalize","decode/normalize",1047511567),metabase.lib.schema.common.normalize_keyword], null),new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"native","native",-613060878),cljs.core.some_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword("metabase.lib.schema.literal","literal","metabase.lib.schema.literal/literal",1150545690)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collection","collection",-683361892),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("metabase.lib.schema.common","non-blank-string","metabase.lib.schema.common/non-blank-string",-2032366619)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template-tags","template-tags",1853115685),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.template-tag","template-tag-map","metabase.lib.schema.template-tag/template-tag-map",1471181299)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("metabase.models.query.permissions","referenced-card-ids","metabase.models.query.permissions/referenced-card-ids",440766092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword("metabase.lib.schema.id","card","metabase.lib.schema.id/card",-801728009)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),":source-table is not allowed in a native query stage."], null),(function (p1__76373_SHARP_){
return (!(cljs.core.contains_QMARK_(p1__76373_SHARP_,new cljs.core.Keyword(null,"source-table","source-table",-225307692))));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),":source-card is not allowed in a native query stage."], null),(function (p1__76374_SHARP_){
return (!(cljs.core.contains_QMARK_(p1__76374_SHARP_,new cljs.core.Keyword(null,"source-card","source-card",-1580820390))));
})], null)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema","breakout","metabase.lib.schema/breakout",-921298600),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.ref","ref","metabase.lib.schema.ref/ref",-1124116498)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema","breakouts","metabase.lib.schema/breakouts",1354104361),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null),new cljs.core.Keyword("metabase.lib.schema","breakout","metabase.lib.schema/breakout",-921298600)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"Breakouts must be distinct"], null),new cljs.core.Var(function(){return metabase.lib.schema.util.distinct_refs_QMARK_;},new cljs.core.Symbol("metabase.lib.schema.util","distinct-refs?","metabase.lib.schema.util/distinct-refs?",-262561159,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"metabase.lib.schema.util","metabase.lib.schema.util",782894276,null),new cljs.core.Symbol(null,"distinct-refs?","distinct-refs?",-2065255505,null),"metabase/lib/schema/util.cljc",21,1,65,65,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"refs","refs",80480079,null)], null)),"Is a sequence of `refs` distinct for the purposes of appearing in `:fields` or `:breakouts` (ignoring keys that\n  aren't important such as namespaced keys and type info)?",(cljs.core.truth_(metabase.lib.schema.util.distinct_refs_QMARK_)?metabase.lib.schema.util.distinct_refs_QMARK_.cljs$lang$test:null)]))], null)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema","fields","metabase.lib.schema/fields",-2010307316),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.ref","ref","metabase.lib.schema.ref/ref",-1124116498)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),":fields must be distinct"], null),new cljs.core.Var(function(){return metabase.lib.schema.util.distinct_refs_QMARK_;},new cljs.core.Symbol("metabase.lib.schema.util","distinct-refs?","metabase.lib.schema.util/distinct-refs?",-262561159,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"metabase.lib.schema.util","metabase.lib.schema.util",782894276,null),new cljs.core.Symbol(null,"distinct-refs?","distinct-refs?",-2065255505,null),"metabase/lib/schema/util.cljc",21,1,65,65,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"refs","refs",80480079,null)], null)),"Is a sequence of `refs` distinct for the purposes of appearing in `:fields` or `:breakouts` (ignoring keys that\n  aren't important such as namespaced keys and type info)?",(cljs.core.truth_(metabase.lib.schema.util.distinct_refs_QMARK_)?metabase.lib.schema.util.distinct_refs_QMARK_.cljs$lang$test:null)]))], null)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema","filterable","metabase.lib.schema/filterable",-1640076631),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","boolean","metabase.lib.schema.expression/boolean",-1396506592)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema","filters","metabase.lib.schema/filters",889389881),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null),new cljs.core.Keyword("metabase.lib.schema","filterable","metabase.lib.schema/filterable",-1640076631)], null));
metabase.lib.schema.bad_ref_clause_QMARK_ = (function metabase$lib$schema$bad_ref_clause_QMARK_(ref_type,valid_ids,x){
return ((cljs.core.vector_QMARK_(x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ref_type,cljs.core.first(x))) && ((!(cljs.core.contains_QMARK_(valid_ids,cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,(2)))))))));
});
/**
 * For ref validation purposes we should ignore `:joins` and any namespaced keys that might be used to record additional
 *   info e.g. `:lib/metadata`.
 */
metabase.lib.schema.stage_with_joins_and_namespaced_keys_removed = (function metabase$lib$schema$stage_with_joins_and_namespaced_keys_removed(stage){
return cljs.core.select_keys(stage,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.simple_keyword_QMARK_),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,new cljs.core.Keyword(null,"joins","joins",1033962699)))),cljs.core.keys(stage)));
});
metabase.lib.schema.expression_ref_errors_for_stage = (function metabase$lib$schema$expression_ref_errors_for_stage(stage){
var expression_names = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","expression-name","lib/expression-name",-1799326590),cljs.core.second)),new cljs.core.Keyword(null,"expressions","expressions",255689909).cljs$core$IFn$_invoke$arity$1(stage));
return metabase.legacy_mbql.util.matching_locations(metabase.lib.schema.stage_with_joins_and_namespaced_keys_removed(stage),(function (p1__76375_SHARP_){
return metabase.lib.schema.bad_ref_clause_QMARK_(new cljs.core.Keyword(null,"expression","expression",202311876),expression_names,p1__76375_SHARP_);
}));
});
metabase.lib.schema.aggregation_ref_errors_for_stage = (function metabase$lib$schema$aggregation_ref_errors_for_stage(stage){
var uuids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720),cljs.core.second)),new cljs.core.Keyword(null,"aggregation","aggregation",1597476696).cljs$core$IFn$_invoke$arity$1(stage));
return metabase.legacy_mbql.util.matching_locations(metabase.lib.schema.stage_with_joins_and_namespaced_keys_removed(stage),(function (p1__76376_SHARP_){
return metabase.lib.schema.bad_ref_clause_QMARK_(new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),uuids,p1__76376_SHARP_);
}));
});
/**
 * Return the locations and the clauses with dangling expression or aggregation references.
 *   The return value is sequence of pairs (vectors) with the first element specifying the location
 *   as a vector usable in [[get-in]] and the second element being the clause with dangling reference.
 */
metabase.lib.schema.ref_errors_for_stage = (function metabase$lib$schema$ref_errors_for_stage(stage){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(metabase.lib.schema.expression_ref_errors_for_stage(stage),metabase.lib.schema.aggregation_ref_errors_for_stage(stage));
});
metabase.lib.schema.expression_ref_error_for_stage = (function metabase$lib$schema$expression_ref_error_for_stage(stage){
var temp__5804__auto__ = cljs.core.first(metabase.lib.schema.expression_ref_errors_for_stage(stage));
if(cljs.core.truth_(temp__5804__auto__)){
var err_loc = temp__5804__auto__;
var temp__5802__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(err_loc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null));
if(cljs.core.truth_(temp__5802__auto__)){
var expression_name = temp__5802__auto__;
return ["Invalid :expression reference: no expression named ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expression_name], 0))].join('');
} else {
return ["Invalid :expression reference: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(err_loc,(1)))].join('');
}
} else {
return null;
}
});
metabase.lib.schema.aggregation_ref_error_for_stage = (function metabase$lib$schema$aggregation_ref_error_for_stage(stage){
var temp__5804__auto__ = cljs.core.first(metabase.lib.schema.aggregation_ref_errors_for_stage(stage));
if(cljs.core.truth_(temp__5804__auto__)){
var err_loc = temp__5804__auto__;
var temp__5802__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(err_loc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null));
if(cljs.core.truth_(temp__5802__auto__)){
var ag_uuid = temp__5802__auto__;
return ["Invalid :aggregation reference: no aggregation with uuid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ag_uuid)].join('');
} else {
return ["Invalid :aggregation reference: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(err_loc,(1)))].join('');
}
} else {
return null;
}
});
/**
 * Validate references in the context of a single `stage`, independent of any previous stages. If there is an error with
 *   a reference, return a string describing the error.
 */
metabase.lib.schema.ref_error_for_stage = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(metabase.lib.schema.expression_ref_error_for_stage,metabase.lib.schema.aggregation_ref_error_for_stage);
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema","stage.valid-refs","metabase.lib.schema/stage.valid-refs",-383625241),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","message","error/message",-502809098),"Valid references for a single query stage",new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p__76377,_){
var map__76378 = p__76377;
var map__76378__$1 = cljs.core.__destructure_map(map__76378);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76378__$1,new cljs.core.Keyword(null,"value","value",305978217));
return metabase.lib.schema.ref_error_for_stage(value);
})], null),cljs.core.complement(metabase.lib.schema.ref_error_for_stage)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema","page","metabase.lib.schema/page",928376015),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("decode","normalize","decode/normalize",1047511567),metabase.lib.schema.common.normalize_map], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),cljs.core.pos_int_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.pos_int_QMARK_], null)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema","stage.mbql","metabase.lib.schema/stage.mbql",1051351388),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("decode","normalize","decode/normalize",1047511567),metabase.lib.schema.common.normalize_map], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("decode","normalize","decode/normalize",1047511567),metabase.lib.schema.common.normalize_keyword], null),new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"joins","joins",1033962699),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.join","joins","metabase.lib.schema.join/joins",106891649)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expressions","expressions",255689909),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.expression","expressions","metabase.lib.schema.expression/expressions",790922225)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"breakout","breakout",-732419050),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema","breakouts","metabase.lib.schema/breakouts",1354104361)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.aggregation","aggregations","metabase.lib.schema.aggregation/aggregations",-203649172)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema","fields","metabase.lib.schema/fields",-2010307316)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema","filters","metabase.lib.schema/filters",889389881)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"order-by","order-by",1527318070),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.order-by","order-bys","metabase.lib.schema.order-by/order-bys",-524479705)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-table","source-table",-225307692),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.id","table","metabase.lib.schema.id/table",-583250693)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-card","source-card",-1580820390),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.id","card","metabase.lib.schema.id/card",-801728009)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema","page","metabase.lib.schema/page",928376015)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),":source-query is not allowed in pMBQL queries."], null),(function (p1__76379_SHARP_){
return (!(cljs.core.contains_QMARK_(p1__76379_SHARP_,new cljs.core.Keyword(null,"source-query","source-query",198004422))));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),":native is not allowed in an MBQL stage."], null),(function (p1__76380_SHARP_){
return (!(cljs.core.contains_QMARK_(p1__76380_SHARP_,new cljs.core.Keyword(null,"native","native",-613060878))));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"A query must have exactly one of :source-table or :source-card"], null),cljs.core.complement(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__76381_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(p1__76381_SHARP_),(1));
}),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source-table","source-table",-225307692),null,new cljs.core.Keyword(null,"source-card","source-card",-1580820390),null], null), null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema","stage.valid-refs","metabase.lib.schema/stage.valid-refs",-383625241)], null)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema","stage.type","metabase.lib.schema/stage.type",1362996639),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("decode","normalize","decode/normalize",1047511567),metabase.lib.schema.common.normalize_keyword], null),new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194),new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798)], null));
metabase.lib.schema.lib_type = (function metabase$lib$schema$lib_type(x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.some((function (p1__76382_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,p1__76382_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","type","lib/type",1175424801),"lib/type"], null)));
} else {
return null;
}
});
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema","stage","metabase.lib.schema/stage",1626908550),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("decode","normalize","decode/normalize",1047511567),metabase.lib.schema.common.normalize_map,new cljs.core.Keyword("encode","serialize","encode/serialize",829266136),(function (p1__76385_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(p1__76385_SHARP_,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.Keyword("lib","stage-metadata","lib/stage-metadata",1079153610),new cljs.core.Keyword(null,"middleware","middleware",1462115504)], 0));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema","stage.type","metabase.lib.schema/stage.type",1362996639)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),metabase.lib.schema.lib_type,new cljs.core.Keyword("error","message","error/message",-502809098),"Invalid stage :lib/type: expected :mbql.stage/native or :mbql.stage/mbql"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema","stage.native","metabase.lib.schema/stage.native",-1206212320)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema","stage.mbql","metabase.lib.schema/stage.mbql",1051351388)], null)], null)], null)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema","stage.initial","metabase.lib.schema/stage.initial",-1483255395),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),metabase.lib.schema.lib_type,new cljs.core.Keyword("error","message","error/message",-502809098),"Invalid stage :lib/type: expected :mbql.stage/native or :mbql.stage/mbql"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194),new cljs.core.Keyword(null,"map","map",1371690461)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"An initial MBQL stage of a query must have :source-table or :source-card"], null),cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source-table","source-table",-225307692),new cljs.core.Keyword(null,"source-card","source-card",-1580820390))], null)], null)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema","stage.additional","metabase.lib.schema/stage.additional",1347605157),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),metabase.lib.schema.lib_type,new cljs.core.Keyword("error","message","error/message",-502809098),"Invalid stage :lib/type: expected :mbql.stage/native or :mbql.stage/mbql"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("mbql.stage","native","mbql.stage/native",359422194),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"Native stages are only allowed as the first stage of a query or join."], null),cljs.core.constantly(false)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"Only the initial stage of a query can have a :source-table or :source-card"], null),cljs.core.complement(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source-table","source-table",-225307692),new cljs.core.Keyword(null,"source-card","source-card",-1580820390)))], null)], null)], null));
/**
 * Apparently you're allowed to use a join alias for a join that appeared in any previous stage or the current stage, or
 *   *inside* any join in any previous stage or the current stage. Why? Who knows, but this is a real thing.
 *   See [[metabase.driver.sql.query-processor-test/join-source-queries-with-joins-test]] for example.
 * 
 *   This doesn't really make sense IMO (you should use string field refs to refer to things from a previous
 *   stage...right?) but for now we'll have to allow it until we can figure out how to go fix all of the old broken queries.
 * 
 *   Also, it's apparently legal to use a join alias to refer to a column that comes from a join in a source Card, and
 *   there is no way for us to know what joins exist in the source Card without a metadata provider, so we're just going
 *   to have to go ahead and skip validation in that case. Icky! But it's better than being overly strict and rejecting
 *   queries that the QP could have fixed.
 * 
 *   Anyways, this function returns a function with the signature:
 * 
 *  (visible-join-alias? <join-alias>) => boolean
 */
metabase.lib.schema.visible_join_alias_QMARK__fn = (function metabase$lib$schema$visible_join_alias_QMARK__fn(stage){
if(cljs.core.truth_(new cljs.core.Keyword(null,"source-card","source-card",-1580820390).cljs$core$IFn$_invoke$arity$1(stage))){
return cljs.core.constantly(true);
} else {
var join_aliases_in_join = (function metabase$lib$schema$visible_join_alias_QMARK__fn_$_join_aliases_in_join(join){
return cljs.core.cons(new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(join),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(join_aliases_in_stage,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(join)], 0)));
});
var join_aliases_in_stage = (function metabase$lib$schema$visible_join_alias_QMARK__fn_$_join_aliases_in_stage(stage__$1){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(join_aliases_in_join,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"joins","joins",1033962699).cljs$core$IFn$_invoke$arity$1(stage__$1)], 0));
});
return cljs.core.set(join_aliases_in_stage(stage));
}
});
metabase.lib.schema.join_ref_error_for_stages = (function metabase$lib$schema$join_ref_error_for_stages(stages){
if(cljs.core.sequential_QMARK_(stages)){
var visible_join_alias_QMARK_ = cljs.core.constantly(false);
var i = (0);
var G__76390 = stages;
var vec__76391 = G__76390;
var seq__76392 = cljs.core.seq(vec__76391);
var first__76393 = cljs.core.first(seq__76392);
var seq__76392__$1 = cljs.core.next(seq__76392);
var stage = first__76393;
var more = seq__76392__$1;
var visible_join_alias_QMARK___$1 = visible_join_alias_QMARK_;
var i__$1 = i;
var G__76390__$1 = G__76390;
while(true){
var visible_join_alias_QMARK___$2 = visible_join_alias_QMARK___$1;
var i__$2 = i__$1;
var vec__76412 = G__76390__$1;
var seq__76413 = cljs.core.seq(vec__76412);
var first__76414 = cljs.core.first(seq__76413);
var seq__76413__$1 = cljs.core.next(seq__76413);
var stage__$1 = first__76414;
var more__$1 = seq__76413__$1;
var visible_join_alias_QMARK___$3 = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(visible_join_alias_QMARK___$2,metabase.lib.schema.visible_join_alias_QMARK__fn(stage__$1));
var or__5002__auto__ = ((cljs.core.map_QMARK_(stage__$1))?cljs.core.first(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,((function (visible_join_alias_QMARK___$1,i__$1,G__76390__$1,visible_join_alias_QMARK___$3,visible_join_alias_QMARK___$2,i__$2,vec__76412,seq__76413,first__76414,seq__76413__$1,stage__$1,more__$1,visible_join_alias_QMARK_,i,G__76390,vec__76391,seq__76392,first__76393,seq__76392__$1,stage,more){
return (function metabase$lib$schema$join_ref_error_for_stages_$_match_76415(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 3)))){
try{var _AMPERSAND_match_0__76417 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__76417,new cljs.core.Keyword(null,"field","field",-1302436500))){
try{var _AMPERSAND_match_1__76418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if(cljs.core.truth_(new cljs.core.Keyword(null,"join-alias","join-alias",1454206794).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_match_1__76418))){
try{var _AMPERSAND_match_1__76418__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if((((!((_AMPERSAND_match_1__76418__$1 == null))))?(((((_AMPERSAND_match_1__76418__$1.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === _AMPERSAND_match_1__76418__$1.cljs$core$ILookup$))))?true:(((!_AMPERSAND_match_1__76418__$1.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,_AMPERSAND_match_1__76418__$1):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,_AMPERSAND_match_1__76418__$1))){
try{var _AMPERSAND_match_1__76418_join_alias__76422 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match_1__76418__$1,new cljs.core.Keyword(null,"join-alias","join-alias",1454206794),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.truth_(cljs.core.complement(visible_join_alias_QMARK___$3)(_AMPERSAND_match_1__76418_join_alias__76422))){
var join_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_1__76418__$1,new cljs.core.Keyword(null,"join-alias","join-alias",1454206794));
var _id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["Invalid :field reference in stage ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i__$2),": no join named ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([join_alias], 0))].join('')], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e76428){if((e76428 instanceof Error)){
var e__46214__auto__ = e76428;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e76428;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76426){if((e76426 instanceof Error)){
var e__46214__auto__ = e76426;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e76426;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76425){if((e76425 instanceof Error)){
var e__46214__auto__ = e76425;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e76425;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76424){if((e76424 instanceof Error)){
var e__46214__auto__ = e76424;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e76424;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e76423){if((e76423 instanceof Error)){
var e__46214__auto__ = e76423;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.match_in_collection(metabase$lib$schema$join_ref_error_for_stages_$_match_76415,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto__;
}
} else {
throw e76423;

}
}});})(visible_join_alias_QMARK___$1,i__$1,G__76390__$1,visible_join_alias_QMARK___$3,visible_join_alias_QMARK___$2,i__$2,vec__76412,seq__76413,first__76414,seq__76413__$1,stage__$1,more__$1,visible_join_alias_QMARK_,i,G__76390,vec__76391,seq__76392,first__76393,seq__76392__$1,stage,more))
(cljs.core.PersistentVector.EMPTY,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(stage__$1,new cljs.core.Keyword(null,"joins","joins",1033962699),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("stage","metadata","stage/metadata",1707239131)], 0)))))):null);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.seq(more__$1)){
var G__76451 = visible_join_alias_QMARK___$3;
var G__76452 = (i__$2 + (1));
var G__76453 = more__$1;
visible_join_alias_QMARK___$1 = G__76451;
i__$1 = G__76452;
G__76390__$1 = G__76453;
continue;
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
/**
 * Like [[ref-error-for-stage]], but validate references in the context of a sequence of several stages; for validations
 *   that can't be done on the basis of just a single stage. For example join alias validation needs to take into account
 *   previous stages.
 */
metabase.lib.schema.ref_error_for_stages = metabase.lib.schema.join_ref_error_for_stages;
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema","stages.valid-refs","metabase.lib.schema/stages.valid-refs",-193458245),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","message","error/message",-502809098),"Valid references for all query stages",new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p__76430,_){
var map__76431 = p__76430;
var map__76431__$1 = cljs.core.__destructure_map(map__76431);
var stages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76431__$1,new cljs.core.Keyword(null,"value","value",305978217));
return (metabase.lib.schema.ref_error_for_stages.cljs$core$IFn$_invoke$arity$1 ? metabase.lib.schema.ref_error_for_stages.cljs$core$IFn$_invoke$arity$1(stages) : metabase.lib.schema.ref_error_for_stages.call(null,stages));
})], null),cljs.core.complement(metabase.lib.schema.ref_error_for_stages)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema","stages","metabase.lib.schema/stages",-391672350),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema","stage","metabase.lib.schema/stage",1626908550)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema","stage.initial","metabase.lib.schema/stage.initial",-1483255395)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema","stage.additional","metabase.lib.schema/stage.additional",1347605157)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema","stages.valid-refs","metabase.lib.schema/stages.valid-refs",-193458245)], null)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema","settings","metabase.lib.schema/settings",1488356533),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("decode","normalize","decode/normalize",1047511567),metabase.lib.schema.common.normalize_map], null),new cljs.core.Keyword("metabase.legacy-mbql.schema","Settings","metabase.legacy-mbql.schema/Settings",-1301217075)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema","middleware-options","metabase.lib.schema/middleware-options",-56842418),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("decode","normalize","decode/normalize",1047511567),metabase.lib.schema.common.normalize_map], null),new cljs.core.Keyword("metabase.legacy-mbql.schema","MiddlewareOptions","metabase.legacy-mbql.schema/MiddlewareOptions",2015114427)], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema","constraints","metabase.lib.schema/constraints",499985458),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("decode","normalize","decode/normalize",1047511567),metabase.lib.schema.common.normalize_map], null),new cljs.core.Keyword("metabase.legacy-mbql.schema","Constraints","metabase.legacy-mbql.schema/Constraints",-729103120)], null));
metabase.lib.schema.serialize_query = (function metabase$lib$schema$serialize_query(query){
var keys_to_remove = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("lib","metadata","lib/metadata",1798917220),null,new cljs.core.Keyword(null,"viz-settings","viz-settings",256055379),null,new cljs.core.Keyword(null,"info","info",-317069002),null,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),null], null), null);
return medley.core.filter_keys((function (k){
return (((!(cljs.core.contains_QMARK_(keys_to_remove,k)))) && (((cljs.core.simple_keyword_QMARK_(k)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(k),"lib")))));
}),query);
});
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema","query","metabase.lib.schema/query",-1207387140),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("decode","normalize","decode/normalize",1047511567),metabase.lib.schema.common.normalize_map,new cljs.core.Keyword("encode","serialize","encode/serialize",829266136),metabase.lib.schema.serialize_query], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("decode","normalize","decode/normalize",1047511567),metabase.lib.schema.common.normalize_keyword], null),new cljs.core.Keyword("mbql","query","mbql/query",-1285688662)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"database","database",1849087575),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,metabase.lib.schema.id.saved_questions_virtual_database_id)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.Keyword("metabase.lib.schema.id","saved-questions-virtual-database","metabase.lib.schema.id/saved-questions-virtual-database",700243236)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.Keyword("metabase.lib.schema.id","database","metabase.lib.schema.id/database",2063511424)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stages","stages",-442109532),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema","stages","metabase.lib.schema/stages",-391672350)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.parameter","parameters","metabase.lib.schema.parameter/parameters",-1970025857)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema","settings","metabase.lib.schema/settings",1488356533)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constraints","constraints",422775616),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema","constraints","metabase.lib.schema/constraints",499985458)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema","middleware-options","metabase.lib.schema/middleware-options",-56842418)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.info","info","metabase.lib.schema.info/info",2011194452)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-row","create-row",1226455653),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.actions","row","metabase.lib.schema.actions/row",751956816)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-row","update-row",-2028796244),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.actions","row","metabase.lib.schema.actions/row",751956816)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.util","unique-uuids","metabase.lib.schema.util/unique-uuids",1812604220)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),":expressions is not allowed in the top level of a query -- it is only allowed in MBQL stages"], null),(function (p1__76435_SHARP_){
return (!(cljs.core.contains_QMARK_(p1__76435_SHARP_,new cljs.core.Keyword(null,"expressions","expressions",255689909))));
})], null)], null));

//# sourceMappingURL=metabase.lib.schema.js.map
