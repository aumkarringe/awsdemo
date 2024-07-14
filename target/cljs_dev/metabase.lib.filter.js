var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./inflections.core.js");
require("./medley.core.js");
require("./metabase.legacy_mbql.normalize.js");
require("./metabase.lib.common.js");
require("./metabase.lib.convert.js");
require("./metabase.lib.dispatch.js");
require("./metabase.lib.equality.js");
require("./metabase.lib.filter.operator.js");
require("./metabase.lib.hierarchy.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.options.js");
require("./metabase.lib.ref.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.schema.expression.js");
require("./metabase.lib.schema.filter.js");
require("./metabase.lib.schema.metadata.js");
require("./metabase.lib.schema.temporal_bucketing.js");
require("./metabase.lib.temporal_bucket.js");
require("./metabase.lib.types.isa.js");
require("./metabase.lib.util.js");
require("./metabase.lib.util.match.js");
require("./metabase.shared.util.i18n.js");
require("./metabase.shared.util.time.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.filter.js");

goog.provide('metabase.lib.filter');
var seq__77932_78381 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"or","or",235744169)], null));
var chunk__77933_78382 = null;
var count__77934_78383 = (0);
var i__77935_78384 = (0);
while(true){
if((i__77935_78384 < count__77934_78383)){
var tag_78390 = chunk__77933_78382.cljs$core$IIndexed$_nth$arity$2(null,i__77935_78384);
metabase.lib.hierarchy.derive(tag_78390,new cljs.core.Keyword("metabase.lib.filter","compound","metabase.lib.filter/compound",1924103780));


var G__78394 = seq__77932_78381;
var G__78396 = chunk__77933_78382;
var G__78398 = count__77934_78383;
var G__78400 = (i__77935_78384 + (1));
seq__77932_78381 = G__78394;
chunk__77933_78382 = G__78396;
count__77934_78383 = G__78398;
i__77935_78384 = G__78400;
continue;
} else {
var temp__5804__auto___78401 = cljs.core.seq(seq__77932_78381);
if(temp__5804__auto___78401){
var seq__77932_78403__$1 = temp__5804__auto___78401;
if(cljs.core.chunked_seq_QMARK_(seq__77932_78403__$1)){
var c__5525__auto___78408 = cljs.core.chunk_first(seq__77932_78403__$1);
var G__78409 = cljs.core.chunk_rest(seq__77932_78403__$1);
var G__78410 = c__5525__auto___78408;
var G__78411 = cljs.core.count(c__5525__auto___78408);
var G__78412 = (0);
seq__77932_78381 = G__78409;
chunk__77933_78382 = G__78410;
count__77934_78383 = G__78411;
i__77935_78384 = G__78412;
continue;
} else {
var tag_78413 = cljs.core.first(seq__77932_78403__$1);
metabase.lib.hierarchy.derive(tag_78413,new cljs.core.Keyword("metabase.lib.filter","compound","metabase.lib.filter/compound",1924103780));


var G__78414 = cljs.core.next(seq__77932_78403__$1);
var G__78415 = null;
var G__78416 = (0);
var G__78417 = (0);
seq__77932_78381 = G__78414;
chunk__77933_78382 = G__78415;
count__77934_78383 = G__78416;
i__77935_78384 = G__78417;
continue;
}
} else {
}
}
break;
}
var seq__77937_78418 = cljs.core.seq(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"!=","!=",-1841737356),new cljs.core.Keyword(null,"starts-with","starts-with",366503009),new cljs.core.Keyword(null,"ends-with","ends-with",-456791011),new cljs.core.Keyword(null,"contains","contains",676899812),new cljs.core.Keyword(null,"does-not-contain","does-not-contain",-274946853)], null));
var chunk__77938_78419 = null;
var count__77939_78420 = (0);
var i__77940_78421 = (0);
while(true){
if((i__77940_78421 < count__77939_78420)){
var tag_78423 = chunk__77938_78419.cljs$core$IIndexed$_nth$arity$2(null,i__77940_78421);
metabase.lib.hierarchy.derive(tag_78423,new cljs.core.Keyword("metabase.lib.filter","varargs","metabase.lib.filter/varargs",1417033079));


var G__78424 = seq__77937_78418;
var G__78425 = chunk__77938_78419;
var G__78426 = count__77939_78420;
var G__78427 = (i__77940_78421 + (1));
seq__77937_78418 = G__78424;
chunk__77938_78419 = G__78425;
count__77939_78420 = G__78426;
i__77940_78421 = G__78427;
continue;
} else {
var temp__5804__auto___78428 = cljs.core.seq(seq__77937_78418);
if(temp__5804__auto___78428){
var seq__77937_78429__$1 = temp__5804__auto___78428;
if(cljs.core.chunked_seq_QMARK_(seq__77937_78429__$1)){
var c__5525__auto___78430 = cljs.core.chunk_first(seq__77937_78429__$1);
var G__78431 = cljs.core.chunk_rest(seq__77937_78429__$1);
var G__78432 = c__5525__auto___78430;
var G__78433 = cljs.core.count(c__5525__auto___78430);
var G__78434 = (0);
seq__77937_78418 = G__78431;
chunk__77938_78419 = G__78432;
count__77939_78420 = G__78433;
i__77940_78421 = G__78434;
continue;
} else {
var tag_78435 = cljs.core.first(seq__77937_78429__$1);
metabase.lib.hierarchy.derive(tag_78435,new cljs.core.Keyword("metabase.lib.filter","varargs","metabase.lib.filter/varargs",1417033079));


var G__78436 = cljs.core.next(seq__77937_78429__$1);
var G__78437 = null;
var G__78438 = (0);
var G__78439 = (0);
seq__77937_78418 = G__78436;
chunk__77938_78419 = G__78437;
count__77939_78420 = G__78438;
i__77940_78421 = G__78439;
continue;
}
} else {
}
}
break;
}
var seq__77947_78441 = cljs.core.seq(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<","<",-646864291),new cljs.core.Keyword(null,"<=","<=",-395636158),new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,">=",">=",-623615505)], null));
var chunk__77948_78442 = null;
var count__77949_78443 = (0);
var i__77950_78444 = (0);
while(true){
if((i__77950_78444 < count__77949_78443)){
var tag_78445 = chunk__77948_78442.cljs$core$IIndexed$_nth$arity$2(null,i__77950_78444);
metabase.lib.hierarchy.derive(tag_78445,new cljs.core.Keyword("metabase.lib.filter","binary","metabase.lib.filter/binary",-1921360491));


var G__78446 = seq__77947_78441;
var G__78447 = chunk__77948_78442;
var G__78448 = count__77949_78443;
var G__78449 = (i__77950_78444 + (1));
seq__77947_78441 = G__78446;
chunk__77948_78442 = G__78447;
count__77949_78443 = G__78448;
i__77950_78444 = G__78449;
continue;
} else {
var temp__5804__auto___78450 = cljs.core.seq(seq__77947_78441);
if(temp__5804__auto___78450){
var seq__77947_78451__$1 = temp__5804__auto___78450;
if(cljs.core.chunked_seq_QMARK_(seq__77947_78451__$1)){
var c__5525__auto___78452 = cljs.core.chunk_first(seq__77947_78451__$1);
var G__78453 = cljs.core.chunk_rest(seq__77947_78451__$1);
var G__78454 = c__5525__auto___78452;
var G__78455 = cljs.core.count(c__5525__auto___78452);
var G__78456 = (0);
seq__77947_78441 = G__78453;
chunk__77948_78442 = G__78454;
count__77949_78443 = G__78455;
i__77950_78444 = G__78456;
continue;
} else {
var tag_78457 = cljs.core.first(seq__77947_78451__$1);
metabase.lib.hierarchy.derive(tag_78457,new cljs.core.Keyword("metabase.lib.filter","binary","metabase.lib.filter/binary",-1921360491));


var G__78458 = cljs.core.next(seq__77947_78451__$1);
var G__78459 = null;
var G__78460 = (0);
var G__78461 = (0);
seq__77947_78441 = G__78458;
chunk__77948_78442 = G__78459;
count__77949_78443 = G__78460;
i__77950_78444 = G__78461;
continue;
}
} else {
}
}
break;
}
var seq__77957_78462 = cljs.core.seq(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-null","is-null",-1997050930),new cljs.core.Keyword(null,"not-null","not-null",-1326718535),new cljs.core.Keyword(null,"is-empty","is-empty",-1040302908),new cljs.core.Keyword(null,"not-empty","not-empty",388922063),new cljs.core.Keyword(null,"not","not",-595976884)], null));
var chunk__77958_78463 = null;
var count__77959_78464 = (0);
var i__77960_78465 = (0);
while(true){
if((i__77960_78465 < count__77959_78464)){
var tag_78486 = chunk__77958_78463.cljs$core$IIndexed$_nth$arity$2(null,i__77960_78465);
metabase.lib.hierarchy.derive(tag_78486,new cljs.core.Keyword("metabase.lib.filter","unary","metabase.lib.filter/unary",-336199667));


var G__78490 = seq__77957_78462;
var G__78491 = chunk__77958_78463;
var G__78492 = count__77959_78464;
var G__78493 = (i__77960_78465 + (1));
seq__77957_78462 = G__78490;
chunk__77958_78463 = G__78491;
count__77959_78464 = G__78492;
i__77960_78465 = G__78493;
continue;
} else {
var temp__5804__auto___78494 = cljs.core.seq(seq__77957_78462);
if(temp__5804__auto___78494){
var seq__77957_78495__$1 = temp__5804__auto___78494;
if(cljs.core.chunked_seq_QMARK_(seq__77957_78495__$1)){
var c__5525__auto___78496 = cljs.core.chunk_first(seq__77957_78495__$1);
var G__78497 = cljs.core.chunk_rest(seq__77957_78495__$1);
var G__78498 = c__5525__auto___78496;
var G__78499 = cljs.core.count(c__5525__auto___78496);
var G__78500 = (0);
seq__77957_78462 = G__78497;
chunk__77958_78463 = G__78498;
count__77959_78464 = G__78499;
i__77960_78465 = G__78500;
continue;
} else {
var tag_78505 = cljs.core.first(seq__77957_78495__$1);
metabase.lib.hierarchy.derive(tag_78505,new cljs.core.Keyword("metabase.lib.filter","unary","metabase.lib.filter/unary",-336199667));


var G__78507 = cljs.core.next(seq__77957_78495__$1);
var G__78508 = null;
var G__78509 = (0);
var G__78510 = (0);
seq__77957_78462 = G__78507;
chunk__77958_78463 = G__78508;
count__77959_78464 = G__78509;
i__77960_78465 = G__78510;
continue;
}
} else {
}
}
break;
}
metabase.lib.metadata.calculation.describe_top_level_key_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"filters","filters",974726919),(function (query,stage_number,_key){
var temp__5804__auto__ = cljs.core.not_empty(new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number)));
if(cljs.core.truth_(temp__5804__auto__)){
var filters = temp__5804__auto__;
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Filtered by {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.util.join_strings_with_conjunction(metabase.shared.util.i18n.js_i18n("and"),(function (){var iter__5480__auto__ = (function metabase$lib$filter$iter__77969(s__77970){
return (new cljs.core.LazySeq(null,(function (){
var s__77970__$1 = s__77970;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__77970__$1);
if(temp__5804__auto____$1){
var s__77970__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__77970__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__77970__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__77972 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__77971 = (0);
while(true){
if((i__77971 < size__5479__auto__)){
var filter = cljs.core._nth(c__5478__auto__,i__77971);
cljs.core.chunk_append(b__77972,metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,filter,new cljs.core.Keyword(null,"long","long",-171452093)));

var G__78518 = (i__77971 + (1));
i__77971 = G__78518;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77972),metabase$lib$filter$iter__77969(cljs.core.chunk_rest(s__77970__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77972),null);
}
} else {
var filter = cljs.core.first(s__77970__$2);
return cljs.core.cons(metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,filter,new cljs.core.Keyword(null,"long","long",-171452093)),metabase$lib$filter$iter__77969(cljs.core.rest(s__77970__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(filters);
})())], 0));
} else {
return null;
}
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.filter","compound","metabase.lib.filter/compound",1924103780),(function (query,stage_number,p__77979,style){
var vec__77980 = p__77979;
var seq__77981 = cljs.core.seq(vec__77980);
var first__77982 = cljs.core.first(seq__77981);
var seq__77981__$1 = cljs.core.next(seq__77981);
var tag = first__77982;
var first__77982__$1 = cljs.core.first(seq__77981__$1);
var seq__77981__$2 = cljs.core.next(seq__77981__$1);
var _opts = first__77982__$1;
var subclauses = seq__77981__$2;
return metabase.lib.util.join_strings_with_conjunction((function (){var G__77983 = tag;
var G__77983__$1 = (((G__77983 instanceof cljs.core.Keyword))?G__77983.fqn:null);
switch (G__77983__$1) {
case "and":
return metabase.shared.util.i18n.js_i18n("and");

break;
case "or":
return metabase.shared.util.i18n.js_i18n("or");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77983__$1)].join('')));

}
})(),(function (){var iter__5480__auto__ = (function metabase$lib$filter$iter__77989(s__77990){
return (new cljs.core.LazySeq(null,(function (){
var s__77990__$1 = s__77990;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__77990__$1);
if(temp__5804__auto__){
var s__77990__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77990__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__77990__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__77992 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__77991 = (0);
while(true){
if((i__77991 < size__5479__auto__)){
var clause = cljs.core._nth(c__5478__auto__,i__77991);
cljs.core.chunk_append(b__77992,metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,clause,style));

var G__78536 = (i__77991 + (1));
i__77991 = G__78536;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77992),metabase$lib$filter$iter__77989(cljs.core.chunk_rest(s__77990__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77992),null);
}
} else {
var clause = cljs.core.first(s__77990__$2);
return cljs.core.cons(metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,clause,style),metabase$lib$filter$iter__77989(cljs.core.rest(s__77990__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(subclauses);
})());
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.filter","varargs","metabase.lib.filter/varargs",1417033079),(function (query,stage_number,expr,style){
var __GT_display_name = (function (p1__77998_SHARP_){
return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,p1__77998_SHARP_,style);
});
var __GT_temporal_name = metabase.lib.temporal_bucket.describe_temporal_pair;
var numeric_QMARK_ = (function (p1__77999_SHARP_){
return ((metabase.lib.util.original_isa_QMARK_(p1__77999_SHARP_,new cljs.core.Keyword("type","Number","type/Number",-2071693690))) && (((metabase.lib.util.clause_QMARK_(p1__77999_SHARP_)) && ((!(metabase.lib.types.isa.id_QMARK_(metabase.lib.metadata.calculation.metadata.cljs$core$IFn$_invoke$arity$3(query,stage_number,p1__77999_SHARP_))))))));
});
var temporal_QMARK_ = (function (p1__78000_SHARP_){
return metabase.lib.util.original_isa_QMARK_(p1__78000_SHARP_,new cljs.core.Keyword("type","Temporal","type/Temporal",-237169010));
});
var unit_is = (function (unit_or_units){
var units = cljs.core.set(metabase.util.one_or_many(unit_or_units));
return (function (a){
return ((temporal_QMARK_(a)) && (((metabase.lib.util.clause_QMARK_(a)) && (cljs.core.contains_QMARK_(units,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358).cljs$core$IFn$_invoke$arity$1(cljs.core.second(a)))))));
});
});
var __GT_unbucketed_display_name = (function (p1__78001_SHARP_){
return __GT_display_name(cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__78001_SHARP_,(1),cljs.core.dissoc,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358)));
});
var __GT_bucket_name = (function (p1__78002_SHARP_){
return metabase.util.lower_case_en(metabase.lib.temporal_bucket.describe_temporal_unit.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__78002_SHARP_))));
});
return cljs.core.first(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$lib$filter$match_78003(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 4)))){
try{var _AMPERSAND_match_0__78036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__78036,new cljs.core.Keyword(null,"=","=",1152933628))){
try{var _AMPERSAND_match_2__78038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(numeric_QMARK_(_AMPERSAND_match_2__78038)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is equal to {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_display_name(a),__GT_display_name(b)], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78165){if((e78165 instanceof Error)){
var e__46214__auto__ = e78165;
if((e__46214__auto__ === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_2__78038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.truth_(unit_is(metabase.lib.schema.temporal_bucketing.datetime_truncation_units)(_AMPERSAND_match_2__78038))){
try{var _AMPERSAND_match_3__78039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
if(typeof _AMPERSAND_match_3__78039 === 'string'){
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_unbucketed_display_name(a),metabase.shared.util.time.format_relative_date_range.cljs$core$IFn$_invoke$arity$6(b,(0),new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358).cljs$core$IFn$_invoke$arity$1(cljs.core.second(a)),null,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-current","include-current",-1602371981),true], null))], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78171){if((e78171 instanceof Error)){
var e__46214__auto____$1 = e78171;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$1;
}
} else {
throw e78171;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78166){if((e78166 instanceof Error)){
var e__46214__auto____$1 = e78166;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_2__78038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.truth_(unit_is(new cljs.core.Keyword(null,"day-of-week","day-of-week",1639326729))(_AMPERSAND_match_2__78038))){
try{var _AMPERSAND_match_3__78039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.int_QMARK_,cljs.core.string_QMARK_)(_AMPERSAND_match_3__78039))){
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_display_name(a),(__GT_temporal_name.cljs$core$IFn$_invoke$arity$2 ? __GT_temporal_name.cljs$core$IFn$_invoke$arity$2(a,b) : __GT_temporal_name.call(null,a,b))], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78170){if((e78170 instanceof Error)){
var e__46214__auto____$2 = e78170;
if((e__46214__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$2;
}
} else {
throw e78170;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78167){if((e78167 instanceof Error)){
var e__46214__auto____$2 = e78167;
if((e__46214__auto____$2 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_2__78038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(temporal_QMARK_(_AMPERSAND_match_2__78038)){
try{var _AMPERSAND_match_3__78039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.int_QMARK_,cljs.core.string_QMARK_)(_AMPERSAND_match_3__78039))){
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is on {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_display_name(a),(__GT_temporal_name.cljs$core$IFn$_invoke$arity$2 ? __GT_temporal_name.cljs$core$IFn$_invoke$arity$2(a,b) : __GT_temporal_name.call(null,a,b))], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78169){if((e78169 instanceof Error)){
var e__46214__auto____$3 = e78169;
if((e__46214__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$3;
}
} else {
throw e78169;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78168){if((e78168 instanceof Error)){
var e__46214__auto____$3 = e78168;
if((e__46214__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$3;
}
} else {
throw e78168;

}
}} else {
throw e__46214__auto____$2;
}
} else {
throw e78167;

}
}} else {
throw e__46214__auto____$1;
}
} else {
throw e78166;

}
}} else {
throw e__46214__auto__;
}
} else {
throw e78165;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78142){if((e78142 instanceof Error)){
var e__46214__auto__ = e78142;
if((e__46214__auto__ === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__78036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__78036,new cljs.core.Keyword(null,"!=","!=",-1841737356))){
try{var _AMPERSAND_match_2__78038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(numeric_QMARK_(_AMPERSAND_match_2__78038)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is not equal to {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_display_name(a),__GT_display_name(b)], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78154){if((e78154 instanceof Error)){
var e__46214__auto____$1 = e78154;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_2__78038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.truth_(unit_is(new cljs.core.Keyword(null,"day-of-week","day-of-week",1639326729))(_AMPERSAND_match_2__78038))){
try{var _AMPERSAND_match_3__78039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.int_QMARK_,cljs.core.string_QMARK_)(_AMPERSAND_match_3__78039))){
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} excludes {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_unbucketed_display_name(a),inflections.core.plural((__GT_temporal_name.cljs$core$IFn$_invoke$arity$2 ? __GT_temporal_name.cljs$core$IFn$_invoke$arity$2(a,b) : __GT_temporal_name.call(null,a,b)))], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78164){if((e78164 instanceof Error)){
var e__46214__auto____$2 = e78164;
if((e__46214__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$2;
}
} else {
throw e78164;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78155){if((e78155 instanceof Error)){
var e__46214__auto____$2 = e78155;
if((e__46214__auto____$2 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_2__78038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.truth_(unit_is(new cljs.core.Keyword(null,"month-of-year","month-of-year",760756492))(_AMPERSAND_match_2__78038))){
try{var _AMPERSAND_match_3__78039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.int_QMARK_,cljs.core.string_QMARK_)(_AMPERSAND_match_3__78039))){
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} excludes each {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_unbucketed_display_name(a),(__GT_temporal_name.cljs$core$IFn$_invoke$arity$2 ? __GT_temporal_name.cljs$core$IFn$_invoke$arity$2(a,b) : __GT_temporal_name.call(null,a,b))], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78163){if((e78163 instanceof Error)){
var e__46214__auto____$3 = e78163;
if((e__46214__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$3;
}
} else {
throw e78163;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78156){if((e78156 instanceof Error)){
var e__46214__auto____$3 = e78156;
if((e__46214__auto____$3 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_2__78038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.truth_(unit_is(new cljs.core.Keyword(null,"quarter-of-year","quarter-of-year",-472803491))(_AMPERSAND_match_2__78038))){
try{var _AMPERSAND_match_3__78039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.int_QMARK_,cljs.core.string_QMARK_)(_AMPERSAND_match_3__78039))){
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} excludes {1} each year",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_unbucketed_display_name(a),(__GT_temporal_name.cljs$core$IFn$_invoke$arity$2 ? __GT_temporal_name.cljs$core$IFn$_invoke$arity$2(a,b) : __GT_temporal_name.call(null,a,b))], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78162){if((e78162 instanceof Error)){
var e__46214__auto____$4 = e78162;
if((e__46214__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$4;
}
} else {
throw e78162;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78157){if((e78157 instanceof Error)){
var e__46214__auto____$4 = e78157;
if((e__46214__auto____$4 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_2__78038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(cljs.core.truth_(unit_is(new cljs.core.Keyword(null,"hour-of-day","hour-of-day",2086777099))(_AMPERSAND_match_2__78038))){
try{var _AMPERSAND_match_3__78039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.int_QMARK_,cljs.core.string_QMARK_)(_AMPERSAND_match_3__78039))){
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} excludes the hour of {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_unbucketed_display_name(a),(__GT_temporal_name.cljs$core$IFn$_invoke$arity$2 ? __GT_temporal_name.cljs$core$IFn$_invoke$arity$2(a,b) : __GT_temporal_name.call(null,a,b))], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78161){if((e78161 instanceof Error)){
var e__46214__auto____$5 = e78161;
if((e__46214__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$5;
}
} else {
throw e78161;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78158){if((e78158 instanceof Error)){
var e__46214__auto____$5 = e78158;
if((e__46214__auto____$5 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_2__78038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(temporal_QMARK_(_AMPERSAND_match_2__78038)){
try{var _AMPERSAND_match_3__78039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.int_QMARK_,cljs.core.string_QMARK_)(_AMPERSAND_match_3__78039))){
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} excludes {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_display_name(a),(__GT_temporal_name.cljs$core$IFn$_invoke$arity$2 ? __GT_temporal_name.cljs$core$IFn$_invoke$arity$2(a,b) : __GT_temporal_name.call(null,a,b))], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78160){if((e78160 instanceof Error)){
var e__46214__auto____$6 = e78160;
if((e__46214__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$6;
}
} else {
throw e78160;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78159){if((e78159 instanceof Error)){
var e__46214__auto____$6 = e78159;
if((e__46214__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$6;
}
} else {
throw e78159;

}
}} else {
throw e__46214__auto____$5;
}
} else {
throw e78158;

}
}} else {
throw e__46214__auto____$4;
}
} else {
throw e78157;

}
}} else {
throw e__46214__auto____$3;
}
} else {
throw e78156;

}
}} else {
throw e__46214__auto____$2;
}
} else {
throw e78155;

}
}} else {
throw e__46214__auto____$1;
}
} else {
throw e78154;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78143){if((e78143 instanceof Error)){
var e__46214__auto____$1 = e78143;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__78036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__78036,new cljs.core.Keyword(null,"=","=",1152933628))){
try{var _AMPERSAND_match_3__78039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
if(typeof _AMPERSAND_match_3__78039 === 'string'){
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_display_name(a),b], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78148){if((e78148 instanceof Error)){
var e__46214__auto____$2 = e78148;
if((e__46214__auto____$2 === cljs.core.match.backtrack)){
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_display_name(a),__GT_display_name(b)], 0))], null);
} else {
throw e__46214__auto____$2;
}
} else {
throw e78148;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78144){if((e78144 instanceof Error)){
var e__46214__auto____$2 = e78144;
if((e__46214__auto____$2 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__78036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__78036,new cljs.core.Keyword(null,"!=","!=",-1841737356))){
try{var _AMPERSAND_match_3__78039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
if(typeof _AMPERSAND_match_3__78039 === 'string'){
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is not {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_display_name(a),b], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78146){if((e78146 instanceof Error)){
var e__46214__auto____$3 = e78146;
if((e__46214__auto____$3 === cljs.core.match.backtrack)){
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is not {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_display_name(a),__GT_display_name(b)], 0))], null);
} else {
throw e__46214__auto____$3;
}
} else {
throw e78146;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78145){if((e78145 instanceof Error)){
var e__46214__auto____$3 = e78145;
if((e__46214__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$3;
}
} else {
throw e78145;

}
}} else {
throw e__46214__auto____$2;
}
} else {
throw e78144;

}
}} else {
throw e__46214__auto____$1;
}
} else {
throw e78143;

}
}} else {
throw e__46214__auto__;
}
} else {
throw e78142;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78081){if((e78081 instanceof Error)){
var e__46214__auto__ = e78081;
if((e__46214__auto__ === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (3))))){
try{var _AMPERSAND_match_left__78040 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(3));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__78040)) && ((cljs.core.count(_AMPERSAND_match_left__78040) === (3))))){
try{var _AMPERSAND_match_left__78040_0__78042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__78040,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__78040_0__78042,new cljs.core.Keyword(null,"=","=",1152933628))){
try{var _AMPERSAND_match_left__78040_2__78044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__78040,(2));
if(numeric_QMARK_(_AMPERSAND_match_left__78040_2__78044)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__78040,(2));
var args = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is equal to {1} selections",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_display_name(a),cljs.core.count(args)], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78134){if((e78134 instanceof Error)){
var e__46214__auto____$1 = e78134;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$1;
}
} else {
throw e78134;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78126){if((e78126 instanceof Error)){
var e__46214__auto____$1 = e78126;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_left__78040_0__78042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__78040,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__78040_0__78042,new cljs.core.Keyword(null,"!=","!=",-1841737356))){
try{var _AMPERSAND_match_left__78040_2__78044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__78040,(2));
if(numeric_QMARK_(_AMPERSAND_match_left__78040_2__78044)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__78040,(2));
var args = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is not equal to {1} selections",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_display_name(a),cljs.core.count(args)], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78130){if((e78130 instanceof Error)){
var e__46214__auto____$2 = e78130;
if((e__46214__auto____$2 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_left__78040_2__78044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__78040,(2));
if(temporal_QMARK_(_AMPERSAND_match_left__78040_2__78044)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__78040,(2));
var args = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} excludes {1} {2} selections",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_unbucketed_display_name(a),cljs.core.count(args),__GT_bucket_name(a)], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78131){if((e78131 instanceof Error)){
var e__46214__auto____$3 = e78131;
if((e__46214__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$3;
}
} else {
throw e78131;

}
}} else {
throw e__46214__auto____$2;
}
} else {
throw e78130;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78127){if((e78127 instanceof Error)){
var e__46214__auto____$2 = e78127;
if((e__46214__auto____$2 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_left__78040_0__78042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__78040,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__78040_0__78042,new cljs.core.Keyword(null,"=","=",1152933628))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__78040,(2));
var args = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is {1} selections",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_display_name(a),cljs.core.count(args)], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78128){if((e78128 instanceof Error)){
var e__46214__auto____$3 = e78128;
if((e__46214__auto____$3 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_left__78040_0__78042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__78040,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__78040_0__78042,new cljs.core.Keyword(null,"!=","!=",-1841737356))){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__78040,(2));
var args = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is not {1} selections",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_display_name(a),cljs.core.count(args)], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78129){if((e78129 instanceof Error)){
var e__46214__auto____$4 = e78129;
if((e__46214__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$4;
}
} else {
throw e78129;

}
}} else {
throw e__46214__auto____$3;
}
} else {
throw e78128;

}
}} else {
throw e__46214__auto____$2;
}
} else {
throw e78127;

}
}} else {
throw e__46214__auto____$1;
}
} else {
throw e78126;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78121){if((e78121 instanceof Error)){
var e__46214__auto____$1 = e78121;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$1;
}
} else {
throw e78121;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78082){if((e78082 instanceof Error)){
var e__46214__auto____$1 = e78082;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 4)))){
try{var _AMPERSAND_match_0__78045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__78045,new cljs.core.Keyword(null,"starts-with","starts-with",366503009))){
try{var _AMPERSAND_match_3__78048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
if(typeof _AMPERSAND_match_3__78048 === 'string'){
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} starts with {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_display_name(x),y], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78116){if((e78116 instanceof Error)){
var e__46214__auto____$2 = e78116;
if((e__46214__auto____$2 === cljs.core.match.backtrack)){
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} starts with {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_display_name(x),__GT_display_name(y)], 0))], null);
} else {
throw e__46214__auto____$2;
}
} else {
throw e78116;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78115){if((e78115 instanceof Error)){
var e__46214__auto____$2 = e78115;
if((e__46214__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$2;
}
} else {
throw e78115;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78083){if((e78083 instanceof Error)){
var e__46214__auto____$2 = e78083;
if((e__46214__auto____$2 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (3))))){
try{var _AMPERSAND_match_left__78049 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(3));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__78049)) && ((cljs.core.count(_AMPERSAND_match_left__78049) === (3))))){
try{var _AMPERSAND_match_left__78049_0__78051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__78049,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__78049_0__78051,new cljs.core.Keyword(null,"starts-with","starts-with",366503009))){
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__78049,(2));
var args = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} starts with {1} selections",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_display_name(x),cljs.core.count(args)], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78113){if((e78113 instanceof Error)){
var e__46214__auto____$3 = e78113;
if((e__46214__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$3;
}
} else {
throw e78113;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78112){if((e78112 instanceof Error)){
var e__46214__auto____$3 = e78112;
if((e__46214__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$3;
}
} else {
throw e78112;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78084){if((e78084 instanceof Error)){
var e__46214__auto____$3 = e78084;
if((e__46214__auto____$3 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 4)))){
try{var _AMPERSAND_match_0__78054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__78054,new cljs.core.Keyword(null,"ends-with","ends-with",-456791011))){
try{var _AMPERSAND_match_3__78057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
if(typeof _AMPERSAND_match_3__78057 === 'string'){
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} ends with {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_display_name(x),y], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78111){if((e78111 instanceof Error)){
var e__46214__auto____$4 = e78111;
if((e__46214__auto____$4 === cljs.core.match.backtrack)){
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} ends with {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_display_name(x),__GT_display_name(y)], 0))], null);
} else {
throw e__46214__auto____$4;
}
} else {
throw e78111;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78110){if((e78110 instanceof Error)){
var e__46214__auto____$4 = e78110;
if((e__46214__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$4;
}
} else {
throw e78110;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78085){if((e78085 instanceof Error)){
var e__46214__auto____$4 = e78085;
if((e__46214__auto____$4 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (3))))){
try{var _AMPERSAND_match_left__78058 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(3));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__78058)) && ((cljs.core.count(_AMPERSAND_match_left__78058) === (3))))){
try{var _AMPERSAND_match_left__78058_0__78060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__78058,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__78058_0__78060,new cljs.core.Keyword(null,"ends-with","ends-with",-456791011))){
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__78058,(2));
var args = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} ends with {1} selections",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_display_name(x),cljs.core.count(args)], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78109){if((e78109 instanceof Error)){
var e__46214__auto____$5 = e78109;
if((e__46214__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$5;
}
} else {
throw e78109;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78105){if((e78105 instanceof Error)){
var e__46214__auto____$5 = e78105;
if((e__46214__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$5;
}
} else {
throw e78105;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78086){if((e78086 instanceof Error)){
var e__46214__auto____$5 = e78086;
if((e__46214__auto____$5 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 4)))){
try{var _AMPERSAND_match_0__78063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__78063,new cljs.core.Keyword(null,"contains","contains",676899812))){
try{var _AMPERSAND_match_3__78066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
if(typeof _AMPERSAND_match_3__78066 === 'string'){
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} contains {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_display_name(x),y], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78103){if((e78103 instanceof Error)){
var e__46214__auto____$6 = e78103;
if((e__46214__auto____$6 === cljs.core.match.backtrack)){
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} contains {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_display_name(x),__GT_display_name(y)], 0))], null);
} else {
throw e__46214__auto____$6;
}
} else {
throw e78103;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78102){if((e78102 instanceof Error)){
var e__46214__auto____$6 = e78102;
if((e__46214__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$6;
}
} else {
throw e78102;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78087){if((e78087 instanceof Error)){
var e__46214__auto____$6 = e78087;
if((e__46214__auto____$6 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (3))))){
try{var _AMPERSAND_match_left__78067 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(3));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__78067)) && ((cljs.core.count(_AMPERSAND_match_left__78067) === (3))))){
try{var _AMPERSAND_match_left__78067_0__78069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__78067,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__78067_0__78069,new cljs.core.Keyword(null,"contains","contains",676899812))){
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__78067,(2));
var args = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} contains {1} selections",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_display_name(x),cljs.core.count(args)], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78101){if((e78101 instanceof Error)){
var e__46214__auto____$7 = e78101;
if((e__46214__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$7;
}
} else {
throw e78101;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78100){if((e78100 instanceof Error)){
var e__46214__auto____$7 = e78100;
if((e__46214__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$7;
}
} else {
throw e78100;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78088){if((e78088 instanceof Error)){
var e__46214__auto____$7 = e78088;
if((e__46214__auto____$7 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 4)))){
try{var _AMPERSAND_match_0__78072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__78072,new cljs.core.Keyword(null,"does-not-contain","does-not-contain",-274946853))){
try{var _AMPERSAND_match_3__78075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
if(typeof _AMPERSAND_match_3__78075 === 'string'){
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} does not contain {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_display_name(x),y], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78099){if((e78099 instanceof Error)){
var e__46214__auto____$8 = e78099;
if((e__46214__auto____$8 === cljs.core.match.backtrack)){
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} does not contain {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_display_name(x),__GT_display_name(y)], 0))], null);
} else {
throw e__46214__auto____$8;
}
} else {
throw e78099;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78094){if((e78094 instanceof Error)){
var e__46214__auto____$8 = e78094;
if((e__46214__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$8;
}
} else {
throw e78094;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78089){if((e78089 instanceof Error)){
var e__46214__auto____$8 = e78089;
if((e__46214__auto____$8 === cljs.core.match.backtrack)){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) >= (3))))){
try{var _AMPERSAND_match_left__78076 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(3));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_left__78076)) && ((cljs.core.count(_AMPERSAND_match_left__78076) === (3))))){
try{var _AMPERSAND_match_left__78076_0__78078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__78076,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_left__78076_0__78078,new cljs.core.Keyword(null,"does-not-contain","does-not-contain",-274946853))){
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_left__78076,(2));
var args = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} does not contain {1} selections",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_display_name(x),cljs.core.count(args)], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78092){if((e78092 instanceof Error)){
var e__46214__auto____$9 = e78092;
if((e__46214__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$9;
}
} else {
throw e78092;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78091){if((e78091 instanceof Error)){
var e__46214__auto____$9 = e78091;
if((e__46214__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$9;
}
} else {
throw e78091;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78090){if((e78090 instanceof Error)){
var e__46214__auto____$9 = e78090;
if((e__46214__auto____$9 === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.match_in_collection(metabase$lib$filter$match_78003,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto____$9;
}
} else {
throw e78090;

}
}} else {
throw e__46214__auto____$8;
}
} else {
throw e78089;

}
}} else {
throw e__46214__auto____$7;
}
} else {
throw e78088;

}
}} else {
throw e__46214__auto____$6;
}
} else {
throw e78087;

}
}} else {
throw e__46214__auto____$5;
}
} else {
throw e78086;

}
}} else {
throw e__46214__auto____$4;
}
} else {
throw e78085;

}
}} else {
throw e__46214__auto____$3;
}
} else {
throw e78084;

}
}} else {
throw e__46214__auto____$2;
}
} else {
throw e78083;

}
}} else {
throw e__46214__auto____$1;
}
} else {
throw e78082;

}
}} else {
throw e__46214__auto__;
}
} else {
throw e78081;

}
}})(cljs.core.PersistentVector.EMPTY,expr))));
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.filter","binary","metabase.lib.filter/binary",-1921360491),(function (query,stage_number,expr,style){
var __GT_display_name = (function (p1__78172_SHARP_){
return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,p1__78172_SHARP_,style);
});
var __GT_temporal_name = (function (p1__78173_SHARP_){
return metabase.shared.util.time.format_unit.cljs$core$IFn$_invoke$arity$2(p1__78173_SHARP_,null);
});
var temporal_QMARK_ = (function (p1__78174_SHARP_){
return metabase.lib.util.original_isa_QMARK_(p1__78174_SHARP_,new cljs.core.Keyword("type","Temporal","type/Temporal",-237169010));
});
return cljs.core.first(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$lib$filter$match_78175(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 4)))){
try{var _AMPERSAND_match_0__78183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__78183,new cljs.core.Keyword(null,"<","<",-646864291))){
try{var _AMPERSAND_match_2__78185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(temporal_QMARK_(_AMPERSAND_match_2__78185)){
try{var _AMPERSAND_match_3__78186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
if(typeof _AMPERSAND_match_3__78186 === 'string'){
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is before {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_display_name(x),__GT_temporal_name(y)], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78195){if((e78195 instanceof Error)){
var e__46214__auto__ = e78195;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e78195;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78194){if((e78194 instanceof Error)){
var e__46214__auto__ = e78194;
if((e__46214__auto__ === cljs.core.match.backtrack)){
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is less than {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_display_name(x),__GT_display_name(y)], 0))], null);
} else {
throw e__46214__auto__;
}
} else {
throw e78194;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78188){if((e78188 instanceof Error)){
var e__46214__auto__ = e78188;
if((e__46214__auto__ === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__78183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__78183,new cljs.core.Keyword(null,"<=","<=",-395636158))){
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is less than or equal to {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_display_name(x),__GT_display_name(y)], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78189){if((e78189 instanceof Error)){
var e__46214__auto____$1 = e78189;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__78183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__78183,new cljs.core.Keyword(null,">",">",-555517146))){
try{var _AMPERSAND_match_2__78185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(temporal_QMARK_(_AMPERSAND_match_2__78185)){
try{var _AMPERSAND_match_3__78186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
if(typeof _AMPERSAND_match_3__78186 === 'string'){
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is after {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_display_name(x),__GT_temporal_name(y)], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78193){if((e78193 instanceof Error)){
var e__46214__auto____$2 = e78193;
if((e__46214__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$2;
}
} else {
throw e78193;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78192){if((e78192 instanceof Error)){
var e__46214__auto____$2 = e78192;
if((e__46214__auto____$2 === cljs.core.match.backtrack)){
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is greater than {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_display_name(x),__GT_display_name(y)], 0))], null);
} else {
throw e__46214__auto____$2;
}
} else {
throw e78192;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78190){if((e78190 instanceof Error)){
var e__46214__auto____$2 = e78190;
if((e__46214__auto____$2 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_0__78183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__78183,new cljs.core.Keyword(null,">=",">=",-623615505))){
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is greater than or equal to {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_display_name(x),__GT_display_name(y)], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78191){if((e78191 instanceof Error)){
var e__46214__auto____$3 = e78191;
if((e__46214__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$3;
}
} else {
throw e78191;

}
}} else {
throw e__46214__auto____$2;
}
} else {
throw e78190;

}
}} else {
throw e__46214__auto____$1;
}
} else {
throw e78189;

}
}} else {
throw e__46214__auto__;
}
} else {
throw e78188;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78187){if((e78187 instanceof Error)){
var e__46214__auto__ = e78187;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.match_in_collection(metabase$lib$filter$match_78175,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto__;
}
} else {
throw e78187;

}
}})(cljs.core.PersistentVector.EMPTY,expr))));
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"between","between",1131099276),(function (query,stage_number,expr,style){
var __GT_display_name = (function (p1__78196_SHARP_){
return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,p1__78196_SHARP_,style);
});
var __GT_unbucketed_display_name = (function (p1__78197_SHARP_){
return __GT_display_name(cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__78197_SHARP_,(1),cljs.core.dissoc,new cljs.core.Keyword(null,"temporal-unit","temporal-unit",-1892306358)));
});
return cljs.core.first(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,(function metabase$lib$filter$match_78198(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 5)))){
try{var _AMPERSAND_match_0__78214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_0__78214,new cljs.core.Keyword(null,"between","between",1131099276))){
try{var _AMPERSAND_match_3__78217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
if(typeof _AMPERSAND_match_3__78217 === 'string'){
try{var _AMPERSAND_match_4__78218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
if(typeof _AMPERSAND_match_4__78218 === 'string'){
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_unbucketed_display_name(x),metabase.shared.util.time.format_diff(y,z)], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78250){if((e78250 instanceof Error)){
var e__46214__auto__ = e78250;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e78250;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78237){if((e78237 instanceof Error)){
var e__46214__auto__ = e78237;
if((e__46214__auto__ === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_3__78217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_3__78217)) && ((cljs.core.count(_AMPERSAND_match_3__78217) === 4)))){
try{var _AMPERSAND_match_3__78217_0__78219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_3__78217,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_3__78217_0__78219,new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278))){
try{var _AMPERSAND_match_2__78216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_2__78216)) && ((cljs.core.count(_AMPERSAND_match_2__78216) === 4)))){
try{var _AMPERSAND_match_2__78216_0__78223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_2__78216,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_2__78216_0__78223,new cljs.core.Keyword(null,"+","+",1913524883))){
try{var _AMPERSAND_match_2__78216_3__78226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_2__78216,(3));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_2__78216_3__78226)) && ((cljs.core.count(_AMPERSAND_match_2__78216_3__78226) === 4)))){
try{var _AMPERSAND_match_2__78216_3__78226_0__78227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_2__78216_3__78226,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_2__78216_3__78226_0__78227,new cljs.core.Keyword(null,"interval","interval",1708495417))){
try{var _AMPERSAND_match_4__78218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
if(((cljs.core.vector_QMARK_(_AMPERSAND_match_4__78218)) && ((cljs.core.count(_AMPERSAND_match_4__78218) === 4)))){
try{var _AMPERSAND_match_4__78218_0__78231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_4__78218,(0));
if(cljs.core.keyword_identical_QMARK_(_AMPERSAND_match_4__78218_0__78231,new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278))){
try{var _AMPERSAND_match_4__78218_2__78233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_4__78218,(2));
if((_AMPERSAND_match_4__78218_2__78233 === (0))){
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_2__78216_3__78226,(2));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_2__78216_3__78226,(3));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_2__78216,(2));
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_3__78217,(2));
var unit2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_3__78217,(3));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is in the {1}, starting {2} ago",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_display_name(x),metabase.util.lower_case_en(metabase.lib.temporal_bucket.describe_temporal_interval(n2,unit2)),inflections.core.pluralize(n,cljs.core.name(unit))], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78248){if((e78248 instanceof Error)){
var e__46214__auto____$1 = e78248;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
try{var _AMPERSAND_match_3__78217_2__78221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_3__78217,(2));
if((_AMPERSAND_match_3__78217_2__78221 === (0))){
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_4__78218,(2));
var unit2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_4__78218,(3));
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_2__78216_3__78226,(2));
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_2__78216_3__78226,(3));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match_2__78216,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is in the {1}, starting {2} from now",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_display_name(x),metabase.util.lower_case_en(metabase.lib.temporal_bucket.describe_temporal_interval(n2,unit2)),inflections.core.pluralize(cljs.core.abs(n),cljs.core.name(unit))], 0))], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e78249){if((e78249 instanceof Error)){
var e__46214__auto____$2 = e78249;
if((e__46214__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$2;
}
} else {
throw e78249;

}
}} else {
throw e__46214__auto____$1;
}
} else {
throw e78248;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78247){if((e78247 instanceof Error)){
var e__46214__auto____$1 = e78247;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$1;
}
} else {
throw e78247;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78246){if((e78246 instanceof Error)){
var e__46214__auto____$1 = e78246;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$1;
}
} else {
throw e78246;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78245){if((e78245 instanceof Error)){
var e__46214__auto____$1 = e78245;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$1;
}
} else {
throw e78245;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78244){if((e78244 instanceof Error)){
var e__46214__auto____$1 = e78244;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$1;
}
} else {
throw e78244;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78242){if((e78242 instanceof Error)){
var e__46214__auto____$1 = e78242;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$1;
}
} else {
throw e78242;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78240){if((e78240 instanceof Error)){
var e__46214__auto____$1 = e78240;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$1;
}
} else {
throw e78240;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78239){if((e78239 instanceof Error)){
var e__46214__auto____$1 = e78239;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto____$1;
}
} else {
throw e78239;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78238){if((e78238 instanceof Error)){
var e__46214__auto____$1 = e78238;
if((e__46214__auto____$1 === cljs.core.match.backtrack)){
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(3));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(2));
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(4));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is between {1} and {2}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([__GT_display_name(x),__GT_display_name(y),__GT_display_name(z)], 0))], null);
} else {
throw e__46214__auto____$1;
}
} else {
throw e78238;

}
}} else {
throw e__46214__auto__;
}
} else {
throw e78237;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78236){if((e78236 instanceof Error)){
var e__46214__auto__ = e78236;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e78236;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e78235){if((e78235 instanceof Error)){
var e__46214__auto__ = e78235;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.match_in_collection(metabase$lib$filter$match_78198,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto__;
}
} else {
throw e78235;

}
}})(cljs.core.PersistentVector.EMPTY,expr))));
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"inside","inside",1972503011),(function (query,stage_number,p__78251,style){
var vec__78252 = p__78251;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78252,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78252,(1),null);
var lat_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78252,(2),null);
var lon_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78252,(3),null);
var lat_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78252,(4),null);
var lon_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78252,(5),null);
var lat_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78252,(6),null);
var lon_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78252,(7),null);
return metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),opts,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),opts,lat_expr,lat_min,lat_max], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"between","between",1131099276),opts,lon_expr,lon_min,lon_max], null)], null),style);
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.filter","unary","metabase.lib.filter/unary",-336199667),(function (query,stage_number,p__78255,style){
var vec__78256 = p__78255;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78256,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78256,(1),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78256,(2),null);
var expr__$1 = metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,expr,style);
var G__78259 = tag;
var G__78259__$1 = (((G__78259 instanceof cljs.core.Keyword))?G__78259.fqn:null);
switch (G__78259__$1) {
case "is-null":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is empty",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr__$1], 0));

break;
case "not-null":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is not empty",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr__$1], 0));

break;
case "is-empty":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is empty",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr__$1], 0));

break;
case "not-empty":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is not empty",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr__$1], 0));

break;
case "not":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("not {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr__$1], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78259__$1)].join('')));

}
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"time-interval","time-interval",704622015),(function (query,stage_number,p__78260,style){
var vec__78261 = p__78260;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78261,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78261,(1),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78261,(2),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78261,(3),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78261,(4),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,new cljs.core.Keyword(null,"current","current",-1088038603))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.abs(n),(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unit,new cljs.core.Keyword(null,"day","day",-274800446))))))){
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,expr,style),metabase.util.lower_case_en(metabase.lib.temporal_bucket.describe_temporal_interval(n,unit))], 0));
} else {
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} is in the {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,expr,style),metabase.util.lower_case_en(metabase.lib.temporal_bucket.describe_temporal_interval(n,unit))], 0));
}
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"relative-datetime","relative-datetime",1285169278),(function (_query,_stage_number,p__78265,_style){
var vec__78266 = p__78265;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78266,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78266,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78266,(2),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78266,(3),null);
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.temporal_bucket.describe_temporal_interval(n,unit)], 0));
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"interval","interval",1708495417),(function (_query,_stage_number,p__78269,_style){
var vec__78270 = p__78269;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78270,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78270,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78270,(2),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78270,(3),null);
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.temporal_bucket.describe_temporal_interval(n,unit)], 0));
}));
/**
 * Inputs: ([x y & more])
 *   Return: :mbql.clause/and
 *        
 * 
 *   Create a standalone clause of type `and`.
 * @param {...*} var_args
 */
metabase.lib.filter.and = (function() { 
var metabase$lib$filter$and__delegate = function (x,y,more){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"and","and",-971899817),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(x,y,more));
};
var metabase$lib$filter$and = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__78609__i = 0, G__78609__a = new Array(arguments.length -  2);
while (G__78609__i < G__78609__a.length) {G__78609__a[G__78609__i] = arguments[G__78609__i + 2]; ++G__78609__i;}
  more = new cljs.core.IndexedSeq(G__78609__a,0,null);
} 
return metabase$lib$filter$and__delegate.call(this,x,y,more);};
metabase$lib$filter$and.cljs$lang$maxFixedArity = 2;
metabase$lib$filter$and.cljs$lang$applyTo = (function (arglist__78610){
var x = cljs.core.first(arglist__78610);
arglist__78610 = cljs.core.next(arglist__78610);
var y = cljs.core.first(arglist__78610);
var more = cljs.core.rest(arglist__78610);
return metabase$lib$filter$and__delegate(x,y,more);
});
metabase$lib$filter$and.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$filter$and__delegate;
return metabase$lib$filter$and;
})()
;
/**
 * Inputs: ([x y & more])
 *   Return: :mbql.clause/or
 *        
 * 
 *   Create a standalone clause of type `or`.
 * @param {...*} var_args
 */
metabase.lib.filter.or = (function() { 
var metabase$lib$filter$or__delegate = function (x,y,more){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"or","or",235744169),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(x,y,more));
};
var metabase$lib$filter$or = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__78611__i = 0, G__78611__a = new Array(arguments.length -  2);
while (G__78611__i < G__78611__a.length) {G__78611__a[G__78611__i] = arguments[G__78611__i + 2]; ++G__78611__i;}
  more = new cljs.core.IndexedSeq(G__78611__a,0,null);
} 
return metabase$lib$filter$or__delegate.call(this,x,y,more);};
metabase$lib$filter$or.cljs$lang$maxFixedArity = 2;
metabase$lib$filter$or.cljs$lang$applyTo = (function (arglist__78612){
var x = cljs.core.first(arglist__78612);
arglist__78612 = cljs.core.next(arglist__78612);
var y = cljs.core.first(arglist__78612);
var more = cljs.core.rest(arglist__78612);
return metabase$lib$filter$or__delegate(x,y,more);
});
metabase$lib$filter$or.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$filter$or__delegate;
return metabase$lib$filter$or;
})()
;
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/not
 *        
 * 
 *   Create a standalone clause of type `not`.
 */
metabase.lib.filter.not = (function metabase$lib$filter$not(x){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"not","not",-595976884),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x y & more])
 *   Return: :mbql.clause/=
 *        
 * 
 *   Create a standalone clause of type `=`.
 * @param {...*} var_args
 */
metabase.lib.filter._EQ_ = (function() { 
var metabase$lib$filter$_EQ___delegate = function (x,y,more){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"=","=",1152933628),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(x,y,more));
};
var metabase$lib$filter$_EQ_ = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__78613__i = 0, G__78613__a = new Array(arguments.length -  2);
while (G__78613__i < G__78613__a.length) {G__78613__a[G__78613__i] = arguments[G__78613__i + 2]; ++G__78613__i;}
  more = new cljs.core.IndexedSeq(G__78613__a,0,null);
} 
return metabase$lib$filter$_EQ___delegate.call(this,x,y,more);};
metabase$lib$filter$_EQ_.cljs$lang$maxFixedArity = 2;
metabase$lib$filter$_EQ_.cljs$lang$applyTo = (function (arglist__78614){
var x = cljs.core.first(arglist__78614);
arglist__78614 = cljs.core.next(arglist__78614);
var y = cljs.core.first(arglist__78614);
var more = cljs.core.rest(arglist__78614);
return metabase$lib$filter$_EQ___delegate(x,y,more);
});
metabase$lib$filter$_EQ_.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$filter$_EQ___delegate;
return metabase$lib$filter$_EQ_;
})()
;
/**
 * Inputs: ([x y & more])
 *   Return: :mbql.clause/!=
 *        
 * 
 *   Create a standalone clause of type `!=`.
 * @param {...*} var_args
 */
metabase.lib.filter._BANG__EQ_ = (function() { 
var metabase$lib$filter$_BANG__EQ___delegate = function (x,y,more){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"!=","!=",-1841737356),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(x,y,more));
};
var metabase$lib$filter$_BANG__EQ_ = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__78615__i = 0, G__78615__a = new Array(arguments.length -  2);
while (G__78615__i < G__78615__a.length) {G__78615__a[G__78615__i] = arguments[G__78615__i + 2]; ++G__78615__i;}
  more = new cljs.core.IndexedSeq(G__78615__a,0,null);
} 
return metabase$lib$filter$_BANG__EQ___delegate.call(this,x,y,more);};
metabase$lib$filter$_BANG__EQ_.cljs$lang$maxFixedArity = 2;
metabase$lib$filter$_BANG__EQ_.cljs$lang$applyTo = (function (arglist__78616){
var x = cljs.core.first(arglist__78616);
arglist__78616 = cljs.core.next(arglist__78616);
var y = cljs.core.first(arglist__78616);
var more = cljs.core.rest(arglist__78616);
return metabase$lib$filter$_BANG__EQ___delegate(x,y,more);
});
metabase$lib$filter$_BANG__EQ_.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$filter$_BANG__EQ___delegate;
return metabase$lib$filter$_BANG__EQ_;
})()
;
/**
 * Inputs: ([x y])
 *   Return: :mbql.clause/<
 *        
 * 
 *   Create a standalone clause of type `<`.
 */
metabase.lib.filter._LT_ = (function metabase$lib$filter$_LT_(x,y){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"<","<",-646864291),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
/**
 * Inputs: ([x y])
 *   Return: :mbql.clause/<=
 *        
 * 
 *   Create a standalone clause of type `<=`.
 */
metabase.lib.filter._LT__EQ_ = (function metabase$lib$filter$_LT__EQ_(x,y){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"<=","<=",-395636158),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
/**
 * Inputs: ([x y])
 *   Return: :mbql.clause/>
 *        
 * 
 *   Create a standalone clause of type `>`.
 */
metabase.lib.filter._GT_ = (function metabase$lib$filter$_GT_(x,y){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
/**
 * Inputs: ([x y])
 *   Return: :mbql.clause/>=
 *        
 * 
 *   Create a standalone clause of type `>=`.
 */
metabase.lib.filter._GT__EQ_ = (function metabase$lib$filter$_GT__EQ_(x,y){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,">=",">=",-623615505),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
/**
 * Inputs: ([x lower upper])
 *   Return: :mbql.clause/between
 *        
 * 
 *   Create a standalone clause of type `between`.
 */
metabase.lib.filter.between = (function metabase$lib$filter$between(x,lower,upper){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,lower,upper], null));
});
/**
 * Inputs: ([lat lon lat-max lon-min lat-min lon-max])
 *   Return: :mbql.clause/inside
 *        
 * 
 *   Create a standalone clause of type `inside`.
 */
metabase.lib.filter.inside = (function metabase$lib$filter$inside(lat,lon,lat_max,lon_min,lat_min,lon_max){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"inside","inside",1972503011),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat,lon,lat_max,lon_min,lat_min,lon_max], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/is-null
 *        
 * 
 *   Create a standalone clause of type `is-null`.
 */
metabase.lib.filter.is_null = (function metabase$lib$filter$is_null(x){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"is-null","is-null",-1997050930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/not-null
 *        
 * 
 *   Create a standalone clause of type `not-null`.
 */
metabase.lib.filter.not_null = (function metabase$lib$filter$not_null(x){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"not-null","not-null",-1326718535),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/is-empty
 *        
 * 
 *   Create a standalone clause of type `is-empty`.
 */
metabase.lib.filter.is_empty = (function metabase$lib$filter$is_empty(x){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"is-empty","is-empty",-1040302908),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([x])
 *   Return: :mbql.clause/not-empty
 *        
 * 
 *   Create a standalone clause of type `not-empty`.
 */
metabase.lib.filter.not_empty = (function metabase$lib$filter$not_empty(x){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"not-empty","not-empty",388922063),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));
});
/**
 * Inputs: ([whole part])
 *   Return: :mbql.clause/starts-with
 *        
 * 
 *   Create a standalone clause of type `starts-with`.
 */
metabase.lib.filter.starts_with = (function metabase$lib$filter$starts_with(whole,part){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"starts-with","starts-with",366503009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [whole,part], null));
});
/**
 * Inputs: ([whole part])
 *   Return: :mbql.clause/ends-with
 *        
 * 
 *   Create a standalone clause of type `ends-with`.
 */
metabase.lib.filter.ends_with = (function metabase$lib$filter$ends_with(whole,part){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"ends-with","ends-with",-456791011),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [whole,part], null));
});
/**
 * Inputs: ([whole part])
 *   Return: :mbql.clause/contains
 *        
 * 
 *   Create a standalone clause of type `contains`.
 */
metabase.lib.filter.contains = (function metabase$lib$filter$contains(whole,part){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"contains","contains",676899812),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [whole,part], null));
});
/**
 * Inputs: ([whole part])
 *   Return: :mbql.clause/does-not-contain
 *        
 * 
 *   Create a standalone clause of type `does-not-contain`.
 */
metabase.lib.filter.does_not_contain = (function metabase$lib$filter$does_not_contain(whole,part){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"does-not-contain","does-not-contain",-274946853),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [whole,part], null));
});
/**
 * Inputs: ([x amount unit])
 *   Return: :mbql.clause/time-interval
 *        
 * 
 *   Create a standalone clause of type `time-interval`.
 */
metabase.lib.filter.time_interval = (function metabase$lib$filter$time_interval(x,amount,unit){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"time-interval","time-interval",704622015),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,amount,unit], null));
});
/**
 * Inputs: ([segment-id])
 *   Return: :mbql.clause/segment
 *        
 * 
 *   Create a standalone clause of type `segment`.
 */
metabase.lib.filter.segment = (function metabase$lib$filter$segment(segment_id){
return metabase.lib.common.defop_create(new cljs.core.Keyword(null,"segment","segment",-964921196),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segment_id], null));
});
/**
 * Inputs: [stage :- :metabase.lib.schema/stage new-filter :- [:maybe :metabase.lib.schema.expression/boolean]]
 *   Return: :any
 *        
 * 
 *   Add a new filter clause to a `stage`, ignoring it if it is a duplicate clause (ignoring :lib/uuid).
 */
metabase.lib.filter.add_filter_to_stage = (function metabase$lib$filter$add_filter_to_stage(stage,new_filter){
if(cljs.core.not(new_filter)){
return stage;
} else {
var existing_filter_QMARK_ = cljs.core.some((function (existing_filter){
return metabase.lib.equality._EQ_.cljs$core$IFn$_invoke$arity$2(existing_filter,new_filter);
}),new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(stage));
if(cljs.core.truth_(existing_filter_QMARK_)){
return stage;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(stage,new cljs.core.Keyword(null,"filters","filters",974726919),(function (p1__78289_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(p1__78289_SHARP_),new_filter);
}));
}
}
});
/**
 * Inputs: [stage :- :metabase.lib.schema/stage new-filters :- [:maybe [:sequential :metabase.lib.schema.expression/boolean]]]
 *   Return: :metabase.lib.schema/stage
 *        
 * 
 *   Add additional filter clauses to a `stage`. Ignores any duplicate clauses (ignoring :lib/uuid).
 */
metabase.lib.filter.add_filters_to_stage = (function metabase$lib$filter$add_filters_to_stage(stage,new_filters){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(metabase.lib.filter.add_filter_to_stage,stage,new_filters);
});
/**
 * Inputs: [stage :- :metabase.lib.schema/stage]
 *   Return: :metabase.lib.schema/stage
 *        
 * 
 *   Remove any duplicate filters from a query `stage` (ignoring :lib/uuid).
 */
metabase.lib.filter.remove_duplicate_filters_in_stage = (function metabase$lib$filter$remove_duplicate_filters_in_stage(stage){
return metabase.lib.filter.add_filters_to_stage(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(stage,new cljs.core.Keyword(null,"filters","filters",974726919)),new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(stage));
});
/**
 * Inputs: [stage :- :metabase.lib.schema/stage]
 *   Return: :metabase.lib.schema/stage
 *        
 * 
 *   Flatten any `:and` filters in a `stage`. Does multiple passes until all `:and` filters are flattened.
 */
metabase.lib.filter.flatten_compound_filters_in_stage = (function metabase$lib$filter$flatten_compound_filters_in_stage(stage){
var flatten_filters = (function metabase$lib$filter$flatten_compound_filters_in_stage_$_flatten_filters(filter_clauses){
while(true){
var did_some_flattening_QMARK_ = cljs.core.volatile_BANG_(false);
var filter_clauses_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(((function (filter_clauses,did_some_flattening_QMARK_){
return (function (p__78306){
var vec__78307 = p__78306;
var seq__78308 = cljs.core.seq(vec__78307);
var first__78309 = cljs.core.first(seq__78308);
var seq__78308__$1 = cljs.core.next(seq__78308);
var tag = first__78309;
var first__78309__$1 = cljs.core.first(seq__78308__$1);
var seq__78308__$2 = cljs.core.next(seq__78308__$1);
var _opts = first__78309__$1;
var args = seq__78308__$2;
var filter_clause = vec__78307;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"and","and",-971899817))){
cljs.core.vreset_BANG_(did_some_flattening_QMARK_,true);

return args;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [filter_clause], null);
}
});})(filter_clauses,did_some_flattening_QMARK_))
),filter_clauses);
if(cljs.core.truth_(cljs.core.deref(did_some_flattening_QMARK_))){
var G__78617 = filter_clauses_SINGLEQUOTE_;
filter_clauses = G__78617;
continue;
} else {
return filter_clauses_SINGLEQUOTE_;
}
break;
}
});
var G__78310 = stage;
if(cljs.core.seq(new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(stage))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__78310,new cljs.core.Keyword(null,"filters","filters",974726919),flatten_filters);
} else {
return G__78310;
}
});
/**
 * Inputs: ([query :- :metabase.lib.schema/query boolean-expression]
 *         [query :- :metabase.lib.schema/query stage-number :- [:maybe :int] boolean-expression])
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Sets `boolean-expression` as a filter on `query`. Ignores duplicate filters (ignoring :lib/uuid).
 */
metabase.lib.filter.filter = (function() {
var metabase$lib$filter$filter = null;
var metabase$lib$filter$filter__2 = (function (query,boolean_expression){
return (metabase.lib.filter.filter.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.filter.filter.cljs$core$IFn$_invoke$arity$3(query,null,boolean_expression) : metabase.lib.filter.filter.call(null,query,null,boolean_expression));
});
var metabase$lib$filter$filter__3 = (function (query,stage_number,boolean_expression){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(metabase.lib.dispatch.dispatch_value(boolean_expression),new cljs.core.Keyword("metadata","segment","metadata/segment",-1286738015))){
var G__78618 = query;
var G__78619 = stage_number;
var G__78620 = metabase.lib.ref.ref(boolean_expression);
query = G__78618;
stage_number = G__78619;
boolean_expression = G__78620;
continue;
} else {
var stage_number__$1 = (function (){var or__5002__auto__ = stage_number;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (-1);
}
})();
var new_filter = metabase.lib.common.__GT_op_arg.cljs$core$IFn$_invoke$arity$1(boolean_expression);
return metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(query,stage_number__$1,metabase.lib.filter.add_filter_to_stage,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_filter], 0));
}
break;
}
});
metabase$lib$filter$filter = function(query,stage_number,boolean_expression){
switch(arguments.length){
case 2:
return metabase$lib$filter$filter__2.call(this,query,stage_number);
case 3:
return metabase$lib$filter$filter__3.call(this,query,stage_number,boolean_expression);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$filter$filter.cljs$core$IFn$_invoke$arity$2 = metabase$lib$filter$filter__2;
metabase$lib$filter$filter.cljs$core$IFn$_invoke$arity$3 = metabase$lib$filter$filter__3;
return metabase$lib$filter$filter;
})()
;
/**
 * Inputs: ([query :- :metabase.lib.schema/query]
 *         [query :- :metabase.lib.schema/query stage-number :- [:maybe :int]])
 *   Return: [:maybe [:ref :metabase.lib.schema/filters]]
 *        
 * 
 *   Returns the current filters in stage with `stage-number` of `query`.
 *   If `stage-number` is omitted, the last stage is used. Logicaly, the
 *   filter attached to the query is the conjunction of the expressions
 *   in the returned list. If the returned list is empty, then there is no
 *   filter attached to the query.
 *   See also [[metabase.lib.util/query-stage]].
 */
metabase.lib.filter.filters = (function() {
var metabase$lib$filter$filters = null;
var metabase$lib$filter$filters__1 = (function (query){
return (metabase.lib.filter.filters.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.filter.filters.cljs$core$IFn$_invoke$arity$2(query,null) : metabase.lib.filter.filters.call(null,query,null));
});
var metabase$lib$filter$filters__2 = (function (query,stage_number){
return cljs.core.not_empty(new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,(function (){var or__5002__auto__ = stage_number;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (-1);
}
})())));
});
metabase$lib$filter$filters = function(query,stage_number){
switch(arguments.length){
case 1:
return metabase$lib$filter$filters__1.call(this,query);
case 2:
return metabase$lib$filter$filters__2.call(this,query,stage_number);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$filter$filters.cljs$core$IFn$_invoke$arity$1 = metabase$lib$filter$filters__1;
metabase$lib$filter$filters.cljs$core$IFn$_invoke$arity$2 = metabase$lib$filter$filters__2;
return metabase$lib$filter$filters;
})()
;
/**
 * Malli schema for ColumnMetadata extended with the list of applicable operators.
 */
metabase.lib.filter.ColumnWithOperators = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.metadata","column","metabase.lib.schema.metadata/column",-570344650)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operators","operators",-2064102509),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.filter","operator","metabase.lib.schema.filter/operator",-805746630)], null)], null)], null)], null)], null);
/**
 * Inputs: [filterable-column :- ColumnWithOperators]
 *   Return: [:maybe [:sequential :metabase.lib.schema.filter/operator]]
 *        
 * 
 *   Returns the operators for which `filterable-column` is applicable.
 */
metabase.lib.filter.filterable_column_operators = (function metabase$lib$filter$filterable_column_operators(filterable_column){
return new cljs.core.Keyword(null,"operators","operators",-2064102509).cljs$core$IFn$_invoke$arity$1(filterable_column);
});
/**
 * Inputs: [column :- :metabase.lib.schema.metadata/column]
 *   Return: ColumnWithOperators
 *        
 * 
 *   Extend the column metadata with the available operators if any.
 */
metabase.lib.filter.add_column_operators = (function metabase$lib$filter$add_column_operators(column){
var operators = metabase.lib.filter.operator.filter_operators(column);
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3(column,new cljs.core.Keyword(null,"operators","operators",-2064102509),cljs.core.not_empty(operators));
});
/**
 * Returns the first argument of `a-filter` if it is a reference clause, nil otherwise.
 */
metabase.lib.filter.leading_ref = (function metabase$lib$filter$leading_ref(a_filter){
var temp__5804__auto__ = (function (){var and__5000__auto__ = metabase.lib.util.clause_QMARK_(a_filter);
if(and__5000__auto__){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(a_filter,(2));
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var leading_arg = temp__5804__auto__;
if(metabase.lib.util.ref_clause_QMARK_(leading_arg)){
return leading_arg;
} else {
return null;
}
} else {
return null;
}
});
/**
 * Inputs: ([query :- :metabase.lib.schema/query]
 *         [query :- :metabase.lib.schema/query stage-number :- :int])
 *   Return: [:sequential ColumnWithOperators]
 *        
 * 
 *   Get column metadata for all the columns that can be filtered in
 *   the stage number `stage-number` of the query `query`
 *   If `stage-number` is omitted, the last stage is used.
 *   The rules for determining which columns can be broken out by are as follows:
 * 
 *   1. custom `:expressions` in this stage of the query
 * 
 *   2. Fields 'exported' by the previous stage of the query, if there is one;
 *   otherwise Fields from the current `:source-table`
 * 
 *   3. Fields exported by explicit joins
 * 
 *   4. Fields in Tables that are implicitly joinable.
 */
metabase.lib.filter.filterable_columns = (function() {
var metabase$lib$filter$filterable_columns = null;
var metabase$lib$filter$filterable_columns__1 = (function (query){
return (metabase.lib.filter.filterable_columns.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.filter.filterable_columns.cljs$core$IFn$_invoke$arity$2(query,(-1)) : metabase.lib.filter.filterable_columns.call(null,query,(-1)));
});
var metabase$lib$filter$filterable_columns__2 = (function (query,stage_number){
var stage = metabase.lib.util.query_stage(query,stage_number);
var columns = cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(metabase.lib.filter.add_column_operators),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"operators","operators",-2064102509))),metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$3(query,stage_number,stage));
var existing_filters = metabase.lib.filter.filters.cljs$core$IFn$_invoke$arity$2(query,stage_number);
if(cljs.core.empty_QMARK_(columns)){
return null;
} else {
if(cljs.core.empty_QMARK_(existing_filters)){
return cljs.core.vec(columns);
} else {
var matching = cljs.core.group_by((function (filter_pos){
var temp__5804__auto__ = metabase.lib.filter.leading_ref(cljs.core.get.cljs$core$IFn$_invoke$arity$2(existing_filters,filter_pos));
if(cljs.core.truth_(temp__5804__auto__)){
var a_ref = temp__5804__auto__;
return metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$4(query,stage_number,a_ref,columns);
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(existing_filters)));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__78312_SHARP_){
var positions = (matching.cljs$core$IFn$_invoke$arity$1 ? matching.cljs$core$IFn$_invoke$arity$1(p1__78312_SHARP_) : matching.call(null,p1__78312_SHARP_));
var G__78313 = p1__78312_SHARP_;
if(cljs.core.truth_(positions)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__78313,new cljs.core.Keyword(null,"filter-positions","filter-positions",378749375),positions);
} else {
return G__78313;
}
}),columns);

}
}
});
metabase$lib$filter$filterable_columns = function(query,stage_number){
switch(arguments.length){
case 1:
return metabase$lib$filter$filterable_columns__1.call(this,query);
case 2:
return metabase$lib$filter$filterable_columns__2.call(this,query,stage_number);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$filter$filterable_columns.cljs$core$IFn$_invoke$arity$1 = metabase$lib$filter$filterable_columns__1;
metabase$lib$filter$filterable_columns.cljs$core$IFn$_invoke$arity$2 = metabase$lib$filter$filterable_columns__2;
return metabase$lib$filter$filterable_columns;
})()
;
/**
 * Inputs: [filter-operator :- [:or :metabase.lib.schema.filter/operator :keyword :string] column :- :metabase.lib.schema.metadata/column & args]
 *   Return: :metabase.lib.schema.expression/boolean
 *        
 * 
 *   Returns a standalone filter clause for a `filter-operator`,
 *   a `column`, and arguments.
 * @param {...*} var_args
 */
metabase.lib.filter.filter_clause = (function() { 
var metabase$lib$filter$filter_clause__delegate = function (filter_operator,column,args){
var tag = ((cljs.core.map_QMARK_(filter_operator))?new cljs.core.Keyword(null,"short","short",1928760516).cljs$core$IFn$_invoke$arity$1(filter_operator):cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(filter_operator));
return metabase.lib.options.ensure_uuid(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.PersistentArrayMap.EMPTY,metabase.lib.common.__GT_op_arg.cljs$core$IFn$_invoke$arity$1(column)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(metabase.lib.common.__GT_op_arg,args)));
};
var metabase$lib$filter$filter_clause = function (filter_operator,column,var_args){
var args = null;
if (arguments.length > 2) {
var G__78623__i = 0, G__78623__a = new Array(arguments.length -  2);
while (G__78623__i < G__78623__a.length) {G__78623__a[G__78623__i] = arguments[G__78623__i + 2]; ++G__78623__i;}
  args = new cljs.core.IndexedSeq(G__78623__a,0,null);
} 
return metabase$lib$filter$filter_clause__delegate.call(this,filter_operator,column,args);};
metabase$lib$filter$filter_clause.cljs$lang$maxFixedArity = 2;
metabase$lib$filter$filter_clause.cljs$lang$applyTo = (function (arglist__78624){
var filter_operator = cljs.core.first(arglist__78624);
arglist__78624 = cljs.core.next(arglist__78624);
var column = cljs.core.first(arglist__78624);
var args = cljs.core.rest(arglist__78624);
return metabase$lib$filter$filter_clause__delegate(filter_operator,column,args);
});
metabase$lib$filter$filter_clause.cljs$core$IFn$_invoke$arity$variadic = metabase$lib$filter$filter_clause__delegate;
return metabase$lib$filter$filter_clause;
})()
;
/**
 * Inputs: ([query a-filter-clause]
 *         [query :- :metabase.lib.schema/query stage-number :- :int a-filter-clause :- :metabase.lib.schema.expression/boolean])
 *   Return: :metabase.lib.schema.filter/operator
 *        
 * 
 *   Return the filter operator of the boolean expression `filter-clause`
 *   at `stage-number` in `query`.
 *   If `stage-number` is omitted, the last stage is used.
 */
metabase.lib.filter.filter_operator = (function() {
var metabase$lib$filter$filter_operator = null;
var metabase$lib$filter$filter_operator__2 = (function (query,a_filter_clause){
return (metabase.lib.filter.filter_operator.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.filter.filter_operator.cljs$core$IFn$_invoke$arity$3(query,(-1),a_filter_clause) : metabase.lib.filter.filter_operator.call(null,query,(-1),a_filter_clause));
});
var metabase$lib$filter$filter_operator__3 = (function (query,stage_number,a_filter_clause){
var vec__78315 = a_filter_clause;
var op = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78315,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78315,(1),null);
var first_arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78315,(2),null);
var stage = metabase.lib.util.query_stage(query,stage_number);
var columns = metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$3(query,stage_number,stage);
var col = metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$4(query,stage_number,first_arg,columns);
var or__5002__auto__ = medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p1__78314_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"short","short",1928760516).cljs$core$IFn$_invoke$arity$1(p1__78314_SHARP_),op);
}),metabase.lib.filter.operator.filter_operators(col));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(op);
}
});
metabase$lib$filter$filter_operator = function(query,stage_number,a_filter_clause){
switch(arguments.length){
case 2:
return metabase$lib$filter$filter_operator__2.call(this,query,stage_number);
case 3:
return metabase$lib$filter$filter_operator__3.call(this,query,stage_number,a_filter_clause);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$filter$filter_operator.cljs$core$IFn$_invoke$arity$2 = metabase$lib$filter$filter_operator__2;
metabase$lib$filter$filter_operator.cljs$core$IFn$_invoke$arity$3 = metabase$lib$filter$filter_operator__3;
return metabase$lib$filter$filter_operator;
})()
;
/**
 * Inputs: ([query :- :metabase.lib.schema/query legacy-filter]
 *         [query :- :metabase.lib.schema/query stage-number :- :int legacy-filter :- some?])
 *   Return: [:maybe :metabase.lib.schema.expression/boolean]
 *        
 * 
 *   Return the filter clause in `query` at stage `stage-number` matching the legacy
 *   filter clause `legacy-filter`, if any.
 */
metabase.lib.filter.find_filter_for_legacy_filter = (function() {
var metabase$lib$filter$find_filter_for_legacy_filter = null;
var metabase$lib$filter$find_filter_for_legacy_filter__2 = (function (query,legacy_filter){
return (metabase.lib.filter.find_filter_for_legacy_filter.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.filter.find_filter_for_legacy_filter.cljs$core$IFn$_invoke$arity$3(query,(-1),legacy_filter) : metabase.lib.filter.find_filter_for_legacy_filter.call(null,query,(-1),legacy_filter));
});
var metabase$lib$filter$find_filter_for_legacy_filter__3 = (function (query,stage_number,legacy_filter){
var legacy_filter__$1 = metabase.legacy_mbql.normalize.normalize_fragment(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"filter","filter",-948537934)], null),legacy_filter);
var query_filters = cljs.core.vec(metabase.lib.filter.filters.cljs$core$IFn$_invoke$arity$2(query,stage_number));
var matching_filters = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__78320_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(metabase.legacy_mbql.normalize.normalize_fragment(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"filter","filter",-948537934)], null),metabase.lib.convert.__GT_legacy_MBQL.cljs$core$IFn$_invoke$arity$1(p1__78320_SHARP_)),legacy_filter__$1);
}),query_filters);
if(cljs.core.seq(matching_filters)){
if(cljs.core.next(matching_filters)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Multiple matching filters found",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"legacy-filter","legacy-filter",-948552546),legacy_filter__$1,new cljs.core.Keyword(null,"query-filters","query-filters",409521440),query_filters,new cljs.core.Keyword(null,"matching-filters","matching-filters",-326129659),matching_filters], null));
} else {
return cljs.core.first(matching_filters);
}
} else {
return null;
}
});
metabase$lib$filter$find_filter_for_legacy_filter = function(query,stage_number,legacy_filter){
switch(arguments.length){
case 2:
return metabase$lib$filter$find_filter_for_legacy_filter__2.call(this,query,stage_number);
case 3:
return metabase$lib$filter$find_filter_for_legacy_filter__3.call(this,query,stage_number,legacy_filter);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$filter$find_filter_for_legacy_filter.cljs$core$IFn$_invoke$arity$2 = metabase$lib$filter$find_filter_for_legacy_filter__2;
metabase$lib$filter$find_filter_for_legacy_filter.cljs$core$IFn$_invoke$arity$3 = metabase$lib$filter$find_filter_for_legacy_filter__3;
return metabase$lib$filter$find_filter_for_legacy_filter;
})()
;
/**
 * Inputs: ([query legacy-ref]
 *         [query :- :metabase.lib.schema/query stage-number :- :int legacy-ref :- some?])
 *   Return: [:maybe ColumnWithOperators]
 *        
 * 
 *   Given a legacy `:field` reference, return the filterable [[ColumnWithOperators]] that best fits it.
 */
metabase.lib.filter.find_filterable_column_for_legacy_ref = (function() {
var metabase$lib$filter$find_filterable_column_for_legacy_ref = null;
var metabase$lib$filter$find_filterable_column_for_legacy_ref__2 = (function (query,legacy_ref){
return (metabase.lib.filter.find_filterable_column_for_legacy_ref.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.filter.find_filterable_column_for_legacy_ref.cljs$core$IFn$_invoke$arity$3(query,(-1),legacy_ref) : metabase.lib.filter.find_filterable_column_for_legacy_ref.call(null,query,(-1),legacy_ref));
});
var metabase$lib$filter$find_filterable_column_for_legacy_ref__3 = (function (query,stage_number,legacy_ref){
var a_ref = metabase.lib.convert.legacy_ref__GT_pMBQL.cljs$core$IFn$_invoke$arity$3(query,stage_number,legacy_ref);
var columns = metabase.lib.filter.filterable_columns.cljs$core$IFn$_invoke$arity$2(query,stage_number);
return metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$2(a_ref,columns);
});
metabase$lib$filter$find_filterable_column_for_legacy_ref = function(query,stage_number,legacy_ref){
switch(arguments.length){
case 2:
return metabase$lib$filter$find_filterable_column_for_legacy_ref__2.call(this,query,stage_number);
case 3:
return metabase$lib$filter$find_filterable_column_for_legacy_ref__3.call(this,query,stage_number,legacy_ref);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$filter$find_filterable_column_for_legacy_ref.cljs$core$IFn$_invoke$arity$2 = metabase$lib$filter$find_filterable_column_for_legacy_ref__2;
metabase$lib$filter$find_filterable_column_for_legacy_ref.cljs$core$IFn$_invoke$arity$3 = metabase$lib$filter$find_filterable_column_for_legacy_ref__3;
return metabase$lib$filter$find_filterable_column_for_legacy_ref;
})()
;
metabase.lib.filter.FilterParts = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword("mbql","filter-parts","mbql/filter-parts",893592485)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operator","operator",-1860875338),new cljs.core.Keyword("metabase.lib.schema.filter","operator","metabase.lib.schema.filter/operator",-805746630)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword("metabase.lib.schema.common","options","metabase.lib.schema.common/options",-1078359294)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),metabase.lib.filter.ColumnWithOperators], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null)], null);
/**
 * Inputs: ([query a-filter-clause]
 *         [query :- :metabase.lib.schema/query stage-number :- :int a-filter-clause :- :metabase.lib.schema.expression/boolean])
 *   Return: FilterParts
 *        
 * 
 *   Return the parts of the filter clause `a-filter-clause` in query `query` at stage `stage-number`.
 *   Might obsolate [[filter-operator]].
 */
metabase.lib.filter.filter_parts = (function() {
var metabase$lib$filter$filter_parts = null;
var metabase$lib$filter$filter_parts__2 = (function (query,a_filter_clause){
return (metabase.lib.filter.filter_parts.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.filter.filter_parts.cljs$core$IFn$_invoke$arity$3(query,(-1),a_filter_clause) : metabase.lib.filter.filter_parts.call(null,query,(-1),a_filter_clause));
});
var metabase$lib$filter$filter_parts__3 = (function (query,stage_number,a_filter_clause){
var vec__78342 = a_filter_clause;
var seq__78343 = cljs.core.seq(vec__78342);
var first__78344 = cljs.core.first(seq__78343);
var seq__78343__$1 = cljs.core.next(seq__78343);
var op = first__78344;
var first__78344__$1 = cljs.core.first(seq__78343__$1);
var seq__78343__$2 = cljs.core.next(seq__78343__$1);
var options = first__78344__$1;
var first__78344__$2 = cljs.core.first(seq__78343__$2);
var seq__78343__$3 = cljs.core.next(seq__78343__$2);
var first_arg = first__78344__$2;
var rest_args = seq__78343__$3;
var stage = metabase.lib.util.query_stage(query,stage_number);
var columns = metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$3(query,stage_number,stage);
var col = metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$4(query,stage_number,first_arg,columns);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("mbql","filter-parts","mbql/filter-parts",893592485),new cljs.core.Keyword(null,"operator","operator",-1860875338),(function (){var or__5002__auto__ = medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p1__78339_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"short","short",1928760516).cljs$core$IFn$_invoke$arity$1(p1__78339_SHARP_),op);
}),metabase.lib.filter.operator.filter_operators(col));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(op);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),options,new cljs.core.Keyword(null,"column","column",2078222095),(function (){var G__78346 = col;
if((G__78346 == null)){
return null;
} else {
return metabase.lib.filter.add_column_operators(G__78346);
}
})(),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.vec(rest_args)], null);
});
metabase$lib$filter$filter_parts = function(query,stage_number,a_filter_clause){
switch(arguments.length){
case 2:
return metabase$lib$filter$filter_parts__2.call(this,query,stage_number);
case 3:
return metabase$lib$filter$filter_parts__3.call(this,query,stage_number,a_filter_clause);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$filter$filter_parts.cljs$core$IFn$_invoke$arity$2 = metabase$lib$filter$filter_parts__2;
metabase$lib$filter$filter_parts.cljs$core$IFn$_invoke$arity$3 = metabase$lib$filter$filter_parts__3;
return metabase$lib$filter$filter_parts;
})()
;

//# sourceMappingURL=metabase.lib.filter.js.map
