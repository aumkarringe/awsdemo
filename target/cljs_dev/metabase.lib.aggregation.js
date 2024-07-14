var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./medley.core.js");
require("./metabase.lib.common.js");
require("./metabase.lib.dispatch.js");
require("./metabase.lib.equality.js");
require("./metabase.lib.hierarchy.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.options.js");
require("./metabase.lib.ref.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.aggregation.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.schema.metadata.js");
require("./metabase.lib.temporal_bucket.js");
require("./metabase.lib.types.isa.js");
require("./metabase.lib.util.js");
require("./metabase.shared.util.i18n.js");
require("./metabase.util.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.aggregation.js");

goog.provide('metabase.lib.aggregation');
/**
 * Inputs: [metadata :- :metabase.lib.schema.metadata/column]
 *   Return: :mbql.clause/aggregation
 *        
 * 
 *   Given `:metadata/column` column metadata for an aggregation, construct an `:aggregation` reference.
 */
metabase.lib.aggregation.column_metadata__GT_aggregation_ref = (function metabase$lib$aggregation$column_metadata__GT_aggregation_ref(metadata){
var options = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),new cljs.core.Keyword(null,"base-type","base-type",1167971299))(metadata),new cljs.core.Keyword("lib","source-name","lib/source-name",1931622490),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(metadata)], null);
var ag_uuid = new cljs.core.Keyword("lib","source-uuid","lib/source-uuid",1828897581).cljs$core$IFn$_invoke$arity$1(metadata);
if(cljs.core.truth_(ag_uuid)){
} else {
throw (new Error(["Assert failed: ","Metadata for an aggregation reference should include :lib/source-uuid","\n","ag-uuid"].join('')));
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),options,ag_uuid], null);
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int ag-uuid :- :string]
 *   Return: :metabase.lib.schema.aggregation/aggregation
 *        
 * 
 *   Resolve an aggregation with a specific `ag-uuid`.
 */
metabase.lib.aggregation.resolve_aggregation = (function metabase$lib$aggregation$resolve_aggregation(query,stage_number,ag_uuid){
var map__77936 = metabase.lib.util.query_stage(query,stage_number);
var map__77936__$1 = cljs.core.__destructure_map(map__77936);
var aggregations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77936__$1,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696));
var found = medley.core.find_first.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.createAsIfByAssoc([ag_uuid]),new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720),cljs.core.second),aggregations);
if(cljs.core.truth_(found)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("No aggregation with uuid {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ag_uuid], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),ag_uuid,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"stage-number","stage-number",-1752729638),stage_number], null));
}

return found;
});
metabase.lib.metadata.calculation.describe_top_level_key_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),(function (query,stage_number,_k){
var temp__5804__auto__ = cljs.core.not_empty(new cljs.core.Keyword(null,"aggregation","aggregation",1597476696).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number)));
if(cljs.core.truth_(temp__5804__auto__)){
var aggregations = temp__5804__auto__;
return metabase.lib.util.join_strings_with_conjunction(metabase.shared.util.i18n.js_i18n("and"),(function (){var iter__5480__auto__ = (function metabase$lib$aggregation$iter__77942(s__77943){
return (new cljs.core.LazySeq(null,(function (){
var s__77943__$1 = s__77943;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__77943__$1);
if(temp__5804__auto____$1){
var s__77943__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__77943__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__77943__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__77945 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__77944 = (0);
while(true){
if((i__77944 < size__5479__auto__)){
var aggregation = cljs.core._nth(c__5478__auto__,i__77944);
cljs.core.chunk_append(b__77945,metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,aggregation,new cljs.core.Keyword(null,"long","long",-171452093)));

var G__78350 = (i__77944 + (1));
i__77944 = G__78350;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77945),metabase$lib$aggregation$iter__77942(cljs.core.chunk_rest(s__77943__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77945),null);
}
} else {
var aggregation = cljs.core.first(s__77943__$2);
return cljs.core.cons(metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,aggregation,new cljs.core.Keyword(null,"long","long",-171452093)),metabase$lib$aggregation$iter__77942(cljs.core.rest(s__77943__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(aggregations);
})());
} else {
return null;
}
}));
metabase.lib.metadata.calculation.metadata_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),(function (query,stage_number,p__77952){
var vec__77953 = p__77952;
var _ag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77953,(0),null);
var map__77956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77953,(1),null);
var map__77956__$1 = cljs.core.__destructure_map(map__77956);
var _opts = map__77956__$1;
var base_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77956__$1,new cljs.core.Keyword(null,"base-type","base-type",1167971299));
var effective_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77956__$1,new cljs.core.Keyword(null,"effective-type","effective-type",-355725458));
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77953,(2),null);
var _aggregation_ref = vec__77953;
var aggregation = metabase.lib.aggregation.resolve_aggregation(query,stage_number,index);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.metadata.calculation.metadata.cljs$core$IFn$_invoke$arity$3(query,stage_number,aggregation),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","aggregations","source/aggregations",-1828710137),new cljs.core.Keyword("lib","source-uuid","lib/source-uuid",1828897581),new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720).cljs$core$IFn$_invoke$arity$1(cljs.core.second(aggregation))], null),(cljs.core.truth_(base_type)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),base_type], null):null),(cljs.core.truth_(effective_type)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),effective_type], null):null)], 0));
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),(function (query,stage_number,p__77961,style){
var vec__77962 = p__77961;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77962,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77962,(1),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77962,(2),null);
return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,metabase.lib.aggregation.resolve_aggregation(query,stage_number,index),style);
}));
metabase.lib.hierarchy.derive(new cljs.core.Keyword("metabase.lib.aggregation","count-aggregation","metabase.lib.aggregation/count-aggregation",-21314018),new cljs.core.Keyword("metabase.lib.aggregation","aggregation","metabase.lib.aggregation/aggregation",1701573815));
var seq__77965_78351 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.Keyword(null,"cum-count","cum-count",-1964431543),new cljs.core.Keyword(null,"count-where","count-where",385407720)], null));
var chunk__77966_78352 = null;
var count__77967_78353 = (0);
var i__77968_78354 = (0);
while(true){
if((i__77968_78354 < count__77967_78353)){
var tag_78355 = chunk__77966_78352.cljs$core$IIndexed$_nth$arity$2(null,i__77968_78354);
metabase.lib.hierarchy.derive(tag_78355,new cljs.core.Keyword("metabase.lib.aggregation","count-aggregation","metabase.lib.aggregation/count-aggregation",-21314018));


var G__78356 = seq__77965_78351;
var G__78357 = chunk__77966_78352;
var G__78358 = count__77967_78353;
var G__78359 = (i__77968_78354 + (1));
seq__77965_78351 = G__78356;
chunk__77966_78352 = G__78357;
count__77967_78353 = G__78358;
i__77968_78354 = G__78359;
continue;
} else {
var temp__5804__auto___78361 = cljs.core.seq(seq__77965_78351);
if(temp__5804__auto___78361){
var seq__77965_78362__$1 = temp__5804__auto___78361;
if(cljs.core.chunked_seq_QMARK_(seq__77965_78362__$1)){
var c__5525__auto___78363 = cljs.core.chunk_first(seq__77965_78362__$1);
var G__78364 = cljs.core.chunk_rest(seq__77965_78362__$1);
var G__78365 = c__5525__auto___78363;
var G__78366 = cljs.core.count(c__5525__auto___78363);
var G__78367 = (0);
seq__77965_78351 = G__78364;
chunk__77966_78352 = G__78365;
count__77967_78353 = G__78366;
i__77968_78354 = G__78367;
continue;
} else {
var tag_78368 = cljs.core.first(seq__77965_78362__$1);
metabase.lib.hierarchy.derive(tag_78368,new cljs.core.Keyword("metabase.lib.aggregation","count-aggregation","metabase.lib.aggregation/count-aggregation",-21314018));


var G__78369 = cljs.core.next(seq__77965_78362__$1);
var G__78370 = null;
var G__78371 = (0);
var G__78372 = (0);
seq__77965_78351 = G__78369;
chunk__77966_78352 = G__78370;
count__77967_78353 = G__78371;
i__77968_78354 = G__78372;
continue;
}
} else {
}
}
break;
}
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.aggregation","count-aggregation","metabase.lib.aggregation/count-aggregation",-21314018),(function (query,stage_number,p__77973,style){
var vec__77974 = p__77973;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77974,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77974,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77974,(2),null);
if(cljs.core.truth_(x)){
var x_display_name = metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,x,style);
var G__77977 = tag;
var G__77977__$1 = (((G__77977 instanceof cljs.core.Keyword))?G__77977.fqn:null);
switch (G__77977__$1) {
case "count":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Count of {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x_display_name], 0));

break;
case "cum-count":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Cumulative count of {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x_display_name], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77977__$1)].join('')));

}
} else {
var G__77978 = tag;
var G__77978__$1 = (((G__77978 instanceof cljs.core.Keyword))?G__77978.fqn:null);
switch (G__77978__$1) {
case "count":
return metabase.shared.util.i18n.js_i18n("Count");

break;
case "cum-count":
return metabase.shared.util.i18n.js_i18n("Cumulative count");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77978__$1)].join('')));

}
}
}));
metabase.lib.metadata.calculation.column_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.aggregation","count-aggregation","metabase.lib.aggregation/count-aggregation",-21314018),(function (_query,_stage_number,p__77984){
var vec__77985 = p__77984;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77985,(0),null);
var _clause = vec__77985;
var G__77988 = tag;
var G__77988__$1 = (((G__77988 instanceof cljs.core.Keyword))?G__77988.fqn:null);
switch (G__77988__$1) {
case "count":
return "count";

break;
case "cum-count":
return "count";

break;
case "count-where":
return "count_where";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77988__$1)].join('')));

}
}));
metabase.lib.metadata.calculation.metadata_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.aggregation","quantity-aggregation","metabase.lib.aggregation/quantity-aggregation",411632918),(function (query,stage_number,clause){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var fexpr__77993 = cljs.core.get_method(metabase.lib.metadata.calculation.metadata_method,new cljs.core.Keyword("metabase.lib.aggregation","aggregation","metabase.lib.aggregation/aggregation",1701573815));
return (fexpr__77993.cljs$core$IFn$_invoke$arity$3 ? fexpr__77993.cljs$core$IFn$_invoke$arity$3(query,stage_number,clause) : fexpr__77993.call(null,query,stage_number,clause));
})(),new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107),new cljs.core.Keyword("type","Quantity","type/Quantity",-1936151227));
}));
metabase.lib.hierarchy.derive(new cljs.core.Keyword("metabase.lib.aggregation","quantity-aggregation","metabase.lib.aggregation/quantity-aggregation",411632918),new cljs.core.Keyword("metabase.lib.aggregation","aggregation","metabase.lib.aggregation/aggregation",1701573815));
metabase.lib.hierarchy.derive(new cljs.core.Keyword("metabase.lib.aggregation","count-aggregation","metabase.lib.aggregation/count-aggregation",-21314018),new cljs.core.Keyword("metabase.lib.aggregation","quantity-aggregation","metabase.lib.aggregation/quantity-aggregation",411632918));
metabase.lib.hierarchy.derive(new cljs.core.Keyword(null,"distinct","distinct",-1788879121),new cljs.core.Keyword("metabase.lib.aggregation","quantity-aggregation","metabase.lib.aggregation/quantity-aggregation",411632918));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (_query,_stage_number,_case,_style){
return metabase.shared.util.i18n.js_i18n("Case");
}));
metabase.lib.metadata.calculation.column_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (_query,_stage_number,_case){
return "case";
}));
metabase.lib.hierarchy.derive(new cljs.core.Keyword("metabase.lib.aggregation","unary-aggregation","metabase.lib.aggregation/unary-aggregation",1064133592),new cljs.core.Keyword("metabase.lib.aggregation","aggregation","metabase.lib.aggregation/aggregation",1701573815));
var seq__77994_78376 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avg","avg",197406200),new cljs.core.Keyword(null,"cum-sum","cum-sum",2064902349),new cljs.core.Keyword(null,"distinct","distinct",-1788879121),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"median","median",569566131),new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"stddev","stddev",-865474939),new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.Keyword(null,"var","var",-769682797)], null));
var chunk__77995_78377 = null;
var count__77996_78378 = (0);
var i__77997_78379 = (0);
while(true){
if((i__77997_78379 < count__77996_78378)){
var tag_78380 = chunk__77995_78377.cljs$core$IIndexed$_nth$arity$2(null,i__77997_78379);
metabase.lib.hierarchy.derive(tag_78380,new cljs.core.Keyword("metabase.lib.aggregation","unary-aggregation","metabase.lib.aggregation/unary-aggregation",1064133592));


var G__78385 = seq__77994_78376;
var G__78386 = chunk__77995_78377;
var G__78387 = count__77996_78378;
var G__78388 = (i__77997_78379 + (1));
seq__77994_78376 = G__78385;
chunk__77995_78377 = G__78386;
count__77996_78378 = G__78387;
i__77997_78379 = G__78388;
continue;
} else {
var temp__5804__auto___78389 = cljs.core.seq(seq__77994_78376);
if(temp__5804__auto___78389){
var seq__77994_78391__$1 = temp__5804__auto___78389;
if(cljs.core.chunked_seq_QMARK_(seq__77994_78391__$1)){
var c__5525__auto___78392 = cljs.core.chunk_first(seq__77994_78391__$1);
var G__78393 = cljs.core.chunk_rest(seq__77994_78391__$1);
var G__78395 = c__5525__auto___78392;
var G__78397 = cljs.core.count(c__5525__auto___78392);
var G__78399 = (0);
seq__77994_78376 = G__78393;
chunk__77995_78377 = G__78395;
count__77996_78378 = G__78397;
i__77997_78379 = G__78399;
continue;
} else {
var tag_78402 = cljs.core.first(seq__77994_78391__$1);
metabase.lib.hierarchy.derive(tag_78402,new cljs.core.Keyword("metabase.lib.aggregation","unary-aggregation","metabase.lib.aggregation/unary-aggregation",1064133592));


var G__78404 = cljs.core.next(seq__77994_78391__$1);
var G__78405 = null;
var G__78406 = (0);
var G__78407 = (0);
seq__77994_78376 = G__78404;
chunk__77995_78377 = G__78405;
count__77996_78378 = G__78406;
i__77997_78379 = G__78407;
continue;
}
} else {
}
}
break;
}
metabase.lib.metadata.calculation.column_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.aggregation","unary-aggregation","metabase.lib.aggregation/unary-aggregation",1064133592),(function (_query,_stage_number,p__78093){
var vec__78095 = p__78093;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78095,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78095,(1),null);
var _arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78095,(2),null);
var G__78098 = tag;
var G__78098__$1 = (((G__78098 instanceof cljs.core.Keyword))?G__78098.fqn:null);
switch (G__78098__$1) {
case "avg":
return "avg";

break;
case "cum-sum":
return "sum";

break;
case "distinct":
return "count";

break;
case "max":
return "max";

break;
case "median":
return "median";

break;
case "min":
return "min";

break;
case "stddev":
return "stddev";

break;
case "sum":
return "sum";

break;
case "var":
return "var";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78098__$1)].join('')));

}
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.aggregation","unary-aggregation","metabase.lib.aggregation/unary-aggregation",1064133592),(function (query,stage_number,p__78104,style){
var vec__78106 = p__78104;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78106,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78106,(1),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78106,(2),null);
var arg__$1 = metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,arg,style);
var G__78114 = tag;
var G__78114__$1 = (((G__78114 instanceof cljs.core.Keyword))?G__78114.fqn:null);
switch (G__78114__$1) {
case "avg":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Average of {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg__$1], 0));

break;
case "cum-sum":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Cumulative sum of {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg__$1], 0));

break;
case "distinct":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Distinct values of {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg__$1], 0));

break;
case "max":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Max of {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg__$1], 0));

break;
case "median":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Median of {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg__$1], 0));

break;
case "min":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Min of {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg__$1], 0));

break;
case "stddev":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Standard deviation of {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg__$1], 0));

break;
case "sum":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Sum of {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg__$1], 0));

break;
case "var":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Variance of {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg__$1], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78114__$1)].join('')));

}
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"percentile","percentile",-601188752),(function (query,stage_number,p__78117,style){
var vec__78118 = p__78117;
var _percentile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78118,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78118,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78118,(2),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78118,(3),null);
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0}th percentile of {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p,metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,x,style)], 0));
}));
metabase.lib.metadata.calculation.column_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"percentile","percentile",-601188752),(function (_query,_stage_number,_clause){
return "percentile";
}));
metabase.lib.hierarchy.derive(new cljs.core.Keyword("metabase.lib.aggregation","no-semantic-type","metabase.lib.aggregation/no-semantic-type",-789440092),new cljs.core.Keyword("metabase.lib.aggregation","aggregation","metabase.lib.aggregation/aggregation",1701573815));
var seq__78122_78466 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"percentile","percentile",-601188752),new cljs.core.Keyword(null,"var","var",-769682797)], null));
var chunk__78123_78467 = null;
var count__78124_78468 = (0);
var i__78125_78469 = (0);
while(true){
if((i__78125_78469 < count__78124_78468)){
var tag_78470 = chunk__78123_78467.cljs$core$IIndexed$_nth$arity$2(null,i__78125_78469);
metabase.lib.hierarchy.derive(tag_78470,new cljs.core.Keyword("metabase.lib.aggregation","no-semantic-type","metabase.lib.aggregation/no-semantic-type",-789440092));


var G__78471 = seq__78122_78466;
var G__78472 = chunk__78123_78467;
var G__78473 = count__78124_78468;
var G__78474 = (i__78125_78469 + (1));
seq__78122_78466 = G__78471;
chunk__78123_78467 = G__78472;
count__78124_78468 = G__78473;
i__78125_78469 = G__78474;
continue;
} else {
var temp__5804__auto___78475 = cljs.core.seq(seq__78122_78466);
if(temp__5804__auto___78475){
var seq__78122_78476__$1 = temp__5804__auto___78475;
if(cljs.core.chunked_seq_QMARK_(seq__78122_78476__$1)){
var c__5525__auto___78523 = cljs.core.chunk_first(seq__78122_78476__$1);
var G__78525 = cljs.core.chunk_rest(seq__78122_78476__$1);
var G__78526 = c__5525__auto___78523;
var G__78527 = cljs.core.count(c__5525__auto___78523);
var G__78528 = (0);
seq__78122_78466 = G__78525;
chunk__78123_78467 = G__78526;
count__78124_78468 = G__78527;
i__78125_78469 = G__78528;
continue;
} else {
var tag_78529 = cljs.core.first(seq__78122_78476__$1);
metabase.lib.hierarchy.derive(tag_78529,new cljs.core.Keyword("metabase.lib.aggregation","no-semantic-type","metabase.lib.aggregation/no-semantic-type",-789440092));


var G__78532 = cljs.core.next(seq__78122_78476__$1);
var G__78533 = null;
var G__78534 = (0);
var G__78535 = (0);
seq__78122_78466 = G__78532;
chunk__78123_78467 = G__78533;
count__78124_78468 = G__78534;
i__78125_78469 = G__78535;
continue;
}
} else {
}
}
break;
}
metabase.lib.metadata.calculation.metadata_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.aggregation","no-semantic-type","metabase.lib.aggregation/no-semantic-type",-789440092),(function (query,stage_number,clause){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__78132 = cljs.core.get_method(metabase.lib.metadata.calculation.metadata_method,new cljs.core.Keyword("metabase.lib.aggregation","aggregation","metabase.lib.aggregation/aggregation",1701573815));
return (fexpr__78132.cljs$core$IFn$_invoke$arity$3 ? fexpr__78132.cljs$core$IFn$_invoke$arity$3(query,stage_number,clause) : fexpr__78132.call(null,query,stage_number,clause));
})(),new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107));
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"sum-where","sum-where",2135348428),(function (query,stage_number,p__78133,style){
var vec__78135 = p__78133;
var _sum_where = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78135,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78135,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78135,(2),null);
var _pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78135,(3),null);
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Sum of {0} matching condition",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,x,style)], 0));
}));
metabase.lib.metadata.calculation.column_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"sum-where","sum-where",2135348428),(function (query,stage_number,p__78138){
var vec__78139 = p__78138;
var _sum_where = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78139,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78139,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78139,(2),null);
var _pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78139,(3),null);
return ["sum_where_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.lib.metadata.calculation.column_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,x))].join('');
}));
metabase.lib.hierarchy.derive(new cljs.core.Keyword(null,"sum-where","sum-where",2135348428),new cljs.core.Keyword("metabase.lib.aggregation","aggregation","metabase.lib.aggregation/aggregation",1701573815));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"share","share",-589433933),(function (_query,_stage_number,_share,_style){
return metabase.shared.util.i18n.js_i18n("Share of rows matching condition");
}));
metabase.lib.metadata.calculation.column_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"share","share",-589433933),(function (_query,_stage_number,_share){
return "share";
}));
metabase.lib.metadata.calculation.metadata_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"share","share",-589433933),(function (query,stage_number,clause){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var fexpr__78147 = cljs.core.get_method(metabase.lib.metadata.calculation.metadata_method,new cljs.core.Keyword("metabase.lib.aggregation","aggregation","metabase.lib.aggregation/aggregation",1701573815));
return (fexpr__78147.cljs$core$IFn$_invoke$arity$3 ? fexpr__78147.cljs$core$IFn$_invoke$arity$3(query,stage_number,clause) : fexpr__78147.call(null,query,stage_number,clause));
})(),new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107),new cljs.core.Keyword("type","Percentage","type/Percentage",763302456));
}));
metabase.lib.hierarchy.derive(new cljs.core.Keyword(null,"share","share",-589433933),new cljs.core.Keyword("metabase.lib.aggregation","aggregation","metabase.lib.aggregation/aggregation",1701573815));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"count-where","count-where",385407720),(function (_query,_stage_number,_count_where,_style){
return metabase.shared.util.i18n.js_i18n("Count of rows matching condition");
}));
metabase.lib.metadata.calculation.metadata_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.aggregation","aggregation","metabase.lib.aggregation/aggregation",1701573815),(function (query,stage_number,p__78149){
var vec__78150 = p__78149;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78150,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78150,(1),null);
var first_arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78150,(2),null);
var clause = vec__78150;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(first_arg)?cljs.core.select_keys(metabase.lib.metadata.calculation.metadata.cljs$core$IFn$_invoke$arity$3(query,stage_number,first_arg),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"semantic-type","semantic-type",-310722107)], null)):null),(function (){var fexpr__78153 = cljs.core.get_method(metabase.lib.metadata.calculation.metadata_method,new cljs.core.Keyword(null,"default","default",-1987822328));
return (fexpr__78153.cljs$core$IFn$_invoke$arity$3 ? fexpr__78153.cljs$core$IFn$_invoke$arity$3(query,stage_number,clause) : fexpr__78153.call(null,query,stage_number,clause));
})()], 0));
}));
/**
 * Inputs: ([]
 *         [x])
 *   Return: :mbql.clause/count
 *        
 * 
 *   Create a standalone clause of type `count`.
 */
metabase.lib.aggregation.count = (function() {
var metabase$lib$aggregation$count = null;
var metabase$lib$aggregation$count__0 = (function (){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.PersistentVector.EMPTY);
});
var metabase$lib$aggregation$count__1 = (function (x){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
metabase$lib$aggregation$count = function(x){
switch(arguments.length){
case 0:
return metabase$lib$aggregation$count__0.call(this);
case 1:
return metabase$lib$aggregation$count__1.call(this,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$aggregation$count.cljs$core$IFn$_invoke$arity$0 = metabase$lib$aggregation$count__0;
metabase$lib$aggregation$count.cljs$core$IFn$_invoke$arity$1 = metabase$lib$aggregation$count__1;
return metabase$lib$aggregation$count;
})()
;
/**
 * Inputs: ([]
 *         [x])
 *   Return: :mbql.clause/cum-count
 *        
 * 
 *   Create a standalone clause of type `cum-count`.
 */
metabase.lib.aggregation.cum_count = (function() {
var metabase$lib$aggregation$cum_count = null;
var metabase$lib$aggregation$cum_count__0 = (function (){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"cum-count","cum-count",-1964431543),cljs.core.PersistentVector.EMPTY);
});
var metabase$lib$aggregation$cum_count__1 = (function (x){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"cum-count","cum-count",-1964431543),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
metabase$lib$aggregation$cum_count = function(x){
switch(arguments.length){
case 0:
return metabase$lib$aggregation$cum_count__0.call(this);
case 1:
return metabase$lib$aggregation$cum_count__1.call(this,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$aggregation$cum_count.cljs$core$IFn$_invoke$arity$0 = metabase$lib$aggregation$cum_count__0;
metabase$lib$aggregation$cum_count.cljs$core$IFn$_invoke$arity$1 = metabase$lib$aggregation$cum_count__1;
return metabase$lib$aggregation$cum_count;
})()
;
/**
 * Inputs: ([x y])
 *   Return: :mbql.clause/count-where
 *        
 * 
 *   Create a standalone clause of type `count-where`.
 */
metabase.lib.aggregation.count_where = (function metabase$lib$aggregation$count_where(x,y){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"count-where","count-where",385407720),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/avg
 *        
 * 
 *   Create a standalone clause of type `avg`.
 */
metabase.lib.aggregation.avg = (function metabase$lib$aggregation$avg(x){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"avg","avg",197406200),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/distinct
 *        
 * 
 *   Create a standalone clause of type `distinct`.
 */
metabase.lib.aggregation.distinct = (function metabase$lib$aggregation$distinct(x){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"distinct","distinct",-1788879121),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/max
 *        
 * 
 *   Create a standalone clause of type `max`.
 */
metabase.lib.aggregation.max = (function metabase$lib$aggregation$max(x){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/median
 *        
 * 
 *   Create a standalone clause of type `median`.
 */
metabase.lib.aggregation.median = (function metabase$lib$aggregation$median(x){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"median","median",569566131),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/min
 *        
 * 
 *   Create a standalone clause of type `min`.
 */
metabase.lib.aggregation.min = (function metabase$lib$aggregation$min(x){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x y])
 *   Return: :mbql.clause/percentile
 *        
 * 
 *   Create a standalone clause of type `percentile`.
 */
metabase.lib.aggregation.percentile = (function metabase$lib$aggregation$percentile(x,y){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"percentile","percentile",-601188752),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/share
 *        
 * 
 *   Create a standalone clause of type `share`.
 */
metabase.lib.aggregation.share = (function metabase$lib$aggregation$share(x){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"share","share",-589433933),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/stddev
 *        
 * 
 *   Create a standalone clause of type `stddev`.
 */
metabase.lib.aggregation.stddev = (function metabase$lib$aggregation$stddev(x){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"stddev","stddev",-865474939),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/sum
 *        
 * 
 *   Create a standalone clause of type `sum`.
 */
metabase.lib.aggregation.sum = (function metabase$lib$aggregation$sum(x){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"sum","sum",136986814),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/cum-sum
 *        
 * 
 *   Create a standalone clause of type `cum-sum`.
 */
metabase.lib.aggregation.cum_sum = (function metabase$lib$aggregation$cum_sum(x){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"cum-sum","cum-sum",2064902349),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x y])
 *   Return: :mbql.clause/sum-where
 *        
 * 
 *   Create a standalone clause of type `sum-where`.
 */
metabase.lib.aggregation.sum_where = (function metabase$lib$aggregation$sum_where(x,y){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"sum-where","sum-where",2135348428),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/var
 *        
 * 
 *   Create a standalone clause of type `var`.
 */
metabase.lib.aggregation.var$ = (function metabase$lib$aggregation$var(x){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
metabase.lib.ref.ref_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),(function (aggregation_clause){
return aggregation_clause;
}));
/**
 * Schema for something you can pass to [[aggregate]] to add to a query as an aggregation.
 */
metabase.lib.aggregation.Aggregable = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword("metabase.lib.schema.aggregation","aggregation","metabase.lib.schema.aggregation/aggregation",-736862750),new cljs.core.Keyword("metabase.lib.schema.common","external-op","metabase.lib.schema.common/external-op",1918684841),new cljs.core.Keyword("metabase.lib.schema.metadata","metric","metabase.lib.schema.metadata/metric",1984974682)], null);
/**
 * Inputs: ([query aggregable]
 *         [query :- :metabase.lib.schema/query stage-number :- :int aggregable :- Aggregable])
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Adds an aggregation to query.
 */
metabase.lib.aggregation.aggregate = (function() {
var metabase$lib$aggregation$aggregate = null;
var metabase$lib$aggregation$aggregate__2 = (function (query,aggregable){
return (metabase.lib.aggregation.aggregate.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.aggregation.aggregate.cljs$core$IFn$_invoke$arity$3(query,(-1),aggregable) : metabase.lib.aggregation.aggregate.call(null,query,(-1),aggregable));
});
var metabase$lib$aggregation$aggregate__3 = (function (query,stage_number,aggregable){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(metabase.lib.dispatch.dispatch_value(aggregable),new cljs.core.Keyword("metadata","metric","metadata/metric",538003406))){
var G__78552 = query;
var G__78553 = stage_number;
var G__78554 = metabase.lib.ref.ref(aggregable);
query = G__78552;
stage_number = G__78553;
aggregable = G__78554;
continue;
} else {
return metabase.lib.util.add_summary_clause(query,stage_number,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),aggregable);
}
break;
}
});
metabase$lib$aggregation$aggregate = function(query,stage_number,aggregable){
switch(arguments.length){
case 2:
return metabase$lib$aggregation$aggregate__2.call(this,query,stage_number);
case 3:
return metabase$lib$aggregation$aggregate__3.call(this,query,stage_number,aggregable);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$aggregation$aggregate.cljs$core$IFn$_invoke$arity$2 = metabase$lib$aggregation$aggregate__2;
metabase$lib$aggregation$aggregate.cljs$core$IFn$_invoke$arity$3 = metabase$lib$aggregation$aggregate__3;
return metabase$lib$aggregation$aggregate;
})()
;
/**
 * Inputs: ([query]
 *         [query :- :metabase.lib.schema/query stage-number :- :int])
 *   Return: [:maybe [:sequential :metabase.lib.schema.aggregation/aggregation]]
 *        
 * 
 *   Get the aggregations in a given stage of a query.
 */
metabase.lib.aggregation.aggregations = (function() {
var metabase$lib$aggregation$aggregations = null;
var metabase$lib$aggregation$aggregations__1 = (function (query){
return (metabase.lib.aggregation.aggregations.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.aggregation.aggregations.cljs$core$IFn$_invoke$arity$2(query,(-1)) : metabase.lib.aggregation.aggregations.call(null,query,(-1)));
});
var metabase$lib$aggregation$aggregations__2 = (function (query,stage_number){
return cljs.core.not_empty(new cljs.core.Keyword(null,"aggregation","aggregation",1597476696).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number)));
});
metabase$lib$aggregation$aggregations = function(query,stage_number){
switch(arguments.length){
case 1:
return metabase$lib$aggregation$aggregations__1.call(this,query);
case 2:
return metabase$lib$aggregation$aggregations__2.call(this,query,stage_number);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$aggregation$aggregations.cljs$core$IFn$_invoke$arity$1 = metabase$lib$aggregation$aggregations__1;
metabase$lib$aggregation$aggregations.cljs$core$IFn$_invoke$arity$2 = metabase$lib$aggregation$aggregations__2;
return metabase$lib$aggregation$aggregations;
})()
;
/**
 * Inputs: ([query]
 *         [query :- :metabase.lib.schema/query stage-number :- :int])
 *   Return: [:maybe [:sequential :metabase.lib.schema.metadata/column]]
 *        
 * 
 *   Get metadata about the aggregations in a given stage of a query.
 */
metabase.lib.aggregation.aggregations_metadata = (function() {
var metabase$lib$aggregation$aggregations_metadata = null;
var metabase$lib$aggregation$aggregations_metadata__1 = (function (query){
return (metabase.lib.aggregation.aggregations_metadata.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.aggregation.aggregations_metadata.cljs$core$IFn$_invoke$arity$2(query,(-1)) : metabase.lib.aggregation.aggregations_metadata.call(null,query,(-1)));
});
var metabase$lib$aggregation$aggregations_metadata__2 = (function (query,stage_number){
var G__78241 = cljs.core.not_empty(new cljs.core.Keyword(null,"aggregation","aggregation",1597476696).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number)));
if((G__78241 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (aggregation){
var metadata = metabase.lib.metadata.calculation.metadata.cljs$core$IFn$_invoke$arity$3(query,stage_number,aggregation);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(metabase.util.assoc_default.cljs$core$IFn$_invoke$arity$3(metadata,new cljs.core.Keyword(null,"effective-type","effective-type",-355725458),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"base-type","base-type",1167971299).cljs$core$IFn$_invoke$arity$1(metadata);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword("type","*","type/*",-1283496752);
}
})()),new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword("source","aggregations","source/aggregations",-1828710137),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("lib","source-uuid","lib/source-uuid",1828897581),new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720).cljs$core$IFn$_invoke$arity$1(cljs.core.second(aggregation))], 0));
})),G__78241);
}
});
metabase$lib$aggregation$aggregations_metadata = function(query,stage_number){
switch(arguments.length){
case 1:
return metabase$lib$aggregation$aggregations_metadata__1.call(this,query);
case 2:
return metabase$lib$aggregation$aggregations_metadata__2.call(this,query,stage_number);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$aggregation$aggregations_metadata.cljs$core$IFn$_invoke$arity$1 = metabase$lib$aggregation$aggregations_metadata__1;
metabase$lib$aggregation$aggregations_metadata.cljs$core$IFn$_invoke$arity$2 = metabase$lib$aggregation$aggregations_metadata__2;
return metabase$lib$aggregation$aggregations_metadata;
})()
;
metabase.lib.aggregation.OperatorWithColumns = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.Keyword("metabase.lib.schema.aggregation","operator","metabase.lib.schema.aggregation/operator",2070038764),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword("metabase.lib.schema.metadata","column","metabase.lib.schema.metadata/column",-570344650)], null)], null)], null)], null);
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("operator","aggregation","operator/aggregation",-1961510924),(function (_query,_stage_number,p__78243,_display_name_style){
var map__78277 = p__78243;
var map__78277__$1 = cljs.core.__destructure_map(map__78277);
var display_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78277__$1,new cljs.core.Keyword(null,"display-info","display-info",-816930907));
return new cljs.core.Keyword(null,"display-name","display-name",694513143).cljs$core$IFn$_invoke$arity$1((display_info.cljs$core$IFn$_invoke$arity$0 ? display_info.cljs$core$IFn$_invoke$arity$0() : display_info.call(null)));
}));
metabase.lib.metadata.calculation.display_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("operator","aggregation","operator/aggregation",-1961510924),(function (_query,_stage_number,p__78279){
var map__78280 = p__78279;
var map__78280__$1 = cljs.core.__destructure_map(map__78280);
var short_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78280__$1,new cljs.core.Keyword(null,"short","short",1928760516));
var display_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78280__$1,new cljs.core.Keyword(null,"display-info","display-info",-816930907));
var requires_column_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78280__$1,new cljs.core.Keyword(null,"requires-column?","requires-column?",1623131448));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78280__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var G__78281 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((display_info.cljs$core$IFn$_invoke$arity$0 ? display_info.cljs$core$IFn$_invoke$arity$0() : display_info.call(null)),new cljs.core.Keyword(null,"short-name","short-name",-1767085022),metabase.util.qualified_name(short_name),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"requires-column","requires-column",934105295),requires_column_QMARK_], 0));
if((!((selected_QMARK_ == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78281,new cljs.core.Keyword(null,"selected","selected",574897764),selected_QMARK_);
} else {
return G__78281;
}
}));
/**
 * Inputs: [aggregation-operator :- OperatorWithColumns]
 *   Return: [:maybe [:sequential :metabase.lib.schema.metadata/column]]
 *        
 * 
 *   Returns the columns for which `aggregation-operator` is applicable.
 */
metabase.lib.aggregation.aggregation_operator_columns = (function metabase$lib$aggregation$aggregation_operator_columns(aggregation_operator){
return new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(aggregation_operator);
});
/**
 * Inputs: ([query]
 *         [query :- :metabase.lib.schema/query stage-number :- :int])
 *   Return: [:maybe [:sequential OperatorWithColumns]]
 *        
 * 
 *   Returns the available aggegation operators for the stage with `stage-number` of `query`.
 *   If `stage-number` is omitted, uses the last stage.
 */
metabase.lib.aggregation.available_aggregation_operators = (function() {
var metabase$lib$aggregation$available_aggregation_operators = null;
var metabase$lib$aggregation$available_aggregation_operators__1 = (function (query){
return (metabase.lib.aggregation.available_aggregation_operators.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.aggregation.available_aggregation_operators.cljs$core$IFn$_invoke$arity$2(query,(-1)) : metabase.lib.aggregation.available_aggregation_operators.call(null,query,(-1)));
});
var metabase$lib$aggregation$available_aggregation_operators__2 = (function (query,stage_number){
var db_features = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(metabase.lib.metadata.database(query));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var stage = metabase.lib.util.query_stage(query,stage_number);
var columns = metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$3(query,stage_number,stage);
var with_columns = (function (p__78284){
var map__78285 = p__78284;
var map__78285__$1 = cljs.core.__destructure_map(map__78285);
var operator = map__78285__$1;
var requires_column_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78285__$1,new cljs.core.Keyword(null,"requires-column?","requires-column?",1623131448));
var supported_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78285__$1,new cljs.core.Keyword(null,"supported-field","supported-field",-2061545519));
if(cljs.core.not(requires_column_QMARK_)){
return operator;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(supported_field,new cljs.core.Keyword(null,"any","any",1705907423))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(operator,new cljs.core.Keyword(null,"columns","columns",1998437288),columns);
} else {
var temp__5804__auto__ = cljs.core.not_empty(cljs.core.filterv((function (p1__78282_SHARP_){
return metabase.lib.types.isa.field_type_QMARK_(supported_field,p1__78282_SHARP_);
}),columns));
if(cljs.core.truth_(temp__5804__auto__)){
var cols = temp__5804__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(operator,new cljs.core.Keyword(null,"columns","columns",1998437288),cols);
} else {
return null;
}

}
}
});
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (op){
var feature = new cljs.core.Keyword(null,"driver-feature","driver-feature",1905324248).cljs$core$IFn$_invoke$arity$1(op);
var or__5002__auto__ = (feature == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return (db_features.cljs$core$IFn$_invoke$arity$1 ? db_features.cljs$core$IFn$_invoke$arity$1(feature) : db_features.call(null,feature));
}
})),cljs.core.keep.cljs$core$IFn$_invoke$arity$1(with_columns),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__78283_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__78283_SHARP_,new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("operator","aggregation","operator/aggregation",-1961510924));
}))),metabase.lib.schema.aggregation.aggregation_operators));
});
metabase$lib$aggregation$available_aggregation_operators = function(query,stage_number){
switch(arguments.length){
case 1:
return metabase$lib$aggregation$available_aggregation_operators__1.call(this,query);
case 2:
return metabase$lib$aggregation$available_aggregation_operators__2.call(this,query,stage_number);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$aggregation$available_aggregation_operators.cljs$core$IFn$_invoke$arity$1 = metabase$lib$aggregation$available_aggregation_operators__1;
metabase$lib$aggregation$available_aggregation_operators.cljs$core$IFn$_invoke$arity$2 = metabase$lib$aggregation$available_aggregation_operators__2;
return metabase$lib$aggregation$available_aggregation_operators;
})()
;
/**
 * Inputs: ([aggregation-operator :- :metabase.lib.schema.aggregation/operator]
 *         [aggregation-operator :- :metabase.lib.schema.aggregation/operator column])
 *   Return: :metabase.lib.schema.aggregation/aggregation
 *        
 * 
 *   Returns a standalone aggregation clause for an `aggregation-operator` and
 *   a `column`.
 *   For aggregations requiring an argument `column` is mandatory, otherwise
 *   it is optional.
 */
metabase.lib.aggregation.aggregation_clause = (function() {
var metabase$lib$aggregation$aggregation_clause = null;
var metabase$lib$aggregation$aggregation_clause__1 = (function (aggregation_operator){
if(cljs.core.not(new cljs.core.Keyword(null,"requires-column?","requires-column?",1623131448).cljs$core$IFn$_invoke$arity$1(aggregation_operator))){
return metabase.lib.options.ensure_uuid(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"short","short",1928760516).cljs$core$IFn$_invoke$arity$1(aggregation_operator),cljs.core.PersistentArrayMap.EMPTY], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((function (){var G__78295 = "aggregation operator %s requires an argument";
var G__78296 = new cljs.core.Keyword(null,"short","short",1928760516).cljs$core$IFn$_invoke$arity$1(aggregation_operator);
return (metabase.lib.util.format.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.util.format.cljs$core$IFn$_invoke$arity$2(G__78295,G__78296) : metabase.lib.util.format.call(null,G__78295,G__78296));
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aggregation-operator","aggregation-operator",-1978700834),aggregation_operator], null));
}
});
var metabase$lib$aggregation$aggregation_clause__2 = (function (aggregation_operator,column){
return metabase.lib.options.ensure_uuid(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"short","short",1928760516).cljs$core$IFn$_invoke$arity$1(aggregation_operator),cljs.core.PersistentArrayMap.EMPTY,metabase.lib.common.__GT_op_arg.cljs$core$IFn$_invoke$arity$1(column)], null));
});
metabase$lib$aggregation$aggregation_clause = function(aggregation_operator,column){
switch(arguments.length){
case 1:
return metabase$lib$aggregation$aggregation_clause__1.call(this,aggregation_operator);
case 2:
return metabase$lib$aggregation$aggregation_clause__2.call(this,aggregation_operator,column);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$aggregation$aggregation_clause.cljs$core$IFn$_invoke$arity$1 = metabase$lib$aggregation$aggregation_clause__1;
metabase$lib$aggregation$aggregation_clause.cljs$core$IFn$_invoke$arity$2 = metabase$lib$aggregation$aggregation_clause__2;
return metabase$lib$aggregation$aggregation_clause;
})()
;
metabase.lib.aggregation.SelectedOperatorWithColumns = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.Keyword("metabase.lib.schema.aggregation","operator","metabase.lib.schema.aggregation/operator",2070038764),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword("metabase.lib.schema.metadata","column","metabase.lib.schema.metadata/column",-570344650)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected?","selected?",-742502788),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null)], null);
/**
 * Inputs: [agg-operators :- [:maybe [:sequential OperatorWithColumns]] agg-clause]
 *   Return: [:maybe [:sequential SelectedOperatorWithColumns]]
 *        
 * 
 *   Mark the operator and the column (if any) in `agg-operators` selected by `agg-clause`.
 */
metabase.lib.aggregation.selected_aggregation_operators = (function metabase$lib$aggregation$selected_aggregation_operators(agg_operators,agg_clause){
if(cljs.core.seq(agg_operators)){
var vec__78302 = agg_clause;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78302,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78302,(1),null);
var agg_col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78302,(2),null);
var agg_temporal_unit = new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358).cljs$core$IFn$_invoke$arity$1(metabase.lib.options.options(agg_col));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (agg_op){
var G__78305 = agg_op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"short","short",1928760516).cljs$core$IFn$_invoke$arity$1(agg_op),op)){
return medley.core.update_existing.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78305,new cljs.core.Keyword(null,"selected?","selected?",-742502788),true),new cljs.core.Keyword(null,"columns","columns",1998437288),(function (cols){
if(metabase.lib.util.ref_clause_QMARK_(agg_col)){
var cols__$1 = metabase.lib.equality.mark_selected_columns.cljs$core$IFn$_invoke$arity$2(cols,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.options.update_options.cljs$core$IFn$_invoke$arity$variadic(agg_col,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358)], 0))], null));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (c){
var G__78323 = c;
if((!((agg_temporal_unit == null)))){
return metabase.lib.temporal_bucket.with_temporal_bucket(G__78323,agg_temporal_unit);
} else {
return G__78323;
}
}),cols__$1);
} else {
return cols;
}
}));
} else {
return G__78305;
}
}),agg_operators);
} else {
return null;
}
});
/**
 * Inputs: ([query ag-index]
 *         [query :- :metabase.lib.schema/query stage-number :- :int ag-index :- :metabase.lib.schema.common/int-greater-than-or-equal-to-zero])
 *   Return: :mbql.clause/aggregation
 *        
 * 
 *   Find the aggregation at `ag-index` and create an `:aggregation` ref for it. Intended for use
 *   when creating queries using threading macros e.g.
 * 
 *  (-> (lib/query ...)
 *      (lib/aggregate (lib/avg ...))
 *      (as-> <> (lib/order-by <> (lib/aggregation-ref <> 0))))
 */
metabase.lib.aggregation.aggregation_ref = (function() {
var metabase$lib$aggregation$aggregation_ref = null;
var metabase$lib$aggregation$aggregation_ref__2 = (function (query,ag_index){
return (metabase.lib.aggregation.aggregation_ref.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.aggregation.aggregation_ref.cljs$core$IFn$_invoke$arity$3(query,(-1),ag_index) : metabase.lib.aggregation.aggregation_ref.call(null,query,(-1),ag_index));
});
var metabase$lib$aggregation$aggregation_ref__3 = (function (query,stage_number,ag_index){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"aggregation","aggregation",1597476696).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number)),ag_index);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__78328 = temp__5802__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78328,(0),null);
var map__78331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78328,(1),null);
var map__78331__$1 = cljs.core.__destructure_map(map__78331);
var ag_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78331__$1,new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720));
return metabase.lib.options.ensure_uuid(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),cljs.core.PersistentArrayMap.EMPTY,ag_uuid], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Undefined aggregation ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ag_index)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"aggregation-index","aggregation-index",-1057045587),ag_index,new cljs.core.Keyword(null,"query","query",-1288509510),query,new cljs.core.Keyword(null,"stage-number","stage-number",-1752729638),stage_number], null));
}
});
metabase$lib$aggregation$aggregation_ref = function(query,stage_number,ag_index){
switch(arguments.length){
case 2:
return metabase$lib$aggregation$aggregation_ref__2.call(this,query,stage_number);
case 3:
return metabase$lib$aggregation$aggregation_ref__3.call(this,query,stage_number,ag_index);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$aggregation$aggregation_ref.cljs$core$IFn$_invoke$arity$2 = metabase$lib$aggregation$aggregation_ref__2;
metabase$lib$aggregation$aggregation_ref.cljs$core$IFn$_invoke$arity$3 = metabase$lib$aggregation$aggregation_ref__3;
return metabase$lib$aggregation$aggregation_ref;
})()
;
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int index :- :metabase.lib.schema.common/int-greater-than-or-equal-to-zero]
 *   Return: [:maybe :metabase.lib.schema.aggregation/aggregation]
 *        
 * 
 *   Get the aggregation at `index` in a stage of the query if it exists, otherwise `nil`. This is mostly for working
 *   with legacy references like
 * 
 *  [:aggregation 0]
 */
metabase.lib.aggregation.aggregation_at_index = (function metabase$lib$aggregation$aggregation_at_index(query,stage_number,index){
var ags = metabase.lib.aggregation.aggregations.cljs$core$IFn$_invoke$arity$2(query,stage_number);
if((cljs.core.count(ags) > index)){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ags,index);
} else {
return null;
}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int [_operator _opts column-ref :as _aggregation] :- :metabase.lib.schema.aggregation/aggregation]
 *   Return: [:maybe :metabase.lib.schema.metadata/column]
 *        
 * 
 *   Returns the column consumed by this aggregation, eg. the column being summed.
 * 
 *   Returns nil for aggregations like `[:count]` that don't specify a column.
 */
metabase.lib.aggregation.aggregation_column = (function metabase$lib$aggregation$aggregation_column(query,stage_number,p__78335){
var vec__78336 = p__78335;
var _operator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78336,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78336,(1),null);
var column_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78336,(2),null);
var _aggregation = vec__78336;
if(cljs.core.truth_(column_ref)){
return metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$2(column_ref,metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$3(query,stage_number,metabase.lib.util.query_stage(query,stage_number)));
} else {
return null;
}
});

//# sourceMappingURL=metabase.lib.aggregation.js.map
