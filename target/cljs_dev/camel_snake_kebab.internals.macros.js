var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./camel_snake_kebab.internals.alter_name.js");
require("./camel_snake_kebab.internals.misc.js");
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

$CLJS.SHADOW_ENV.setLoaded("camel_snake_kebab.internals.macros.js");

goog.provide('camel_snake_kebab.internals.macros');
camel_snake_kebab.internals.macros.resolve = (function camel_snake_kebab$internals$macros$resolve(sym){
return cljs.core.eval(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null))))));
});
camel_snake_kebab.internals.macros.type_preserving_function = (function camel_snake_kebab$internals$macros$type_preserving_function(case_label,first_fn,rest_fn,sep){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["->",cljs.core.str.cljs$core$IFn$_invoke$arity$1(case_label)].join('')),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"s__53428__auto__","s__53428__auto__",-52422285,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"rest__53429__auto__","rest__53429__auto__",-55251420,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"convert-case__53430__auto__","convert-case__53430__auto__",-1639249435,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"p1__53427__53431__auto__","p1__53427__53431__auto__",1536412057,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("camel-snake-kebab.internals.misc","convert-case","camel-snake-kebab.internals.misc/convert-case",6867913,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,first_fn,null,(1),null)),(new cljs.core.List(null,rest_fn,null,(1),null)),(new cljs.core.List(null,sep,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__53427__53431__auto__","p1__53427__53431__auto__",1536412057,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"rest__53429__auto__","rest__53429__auto__",-55251420,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("camel-snake-kebab.internals.alter-name","alter-name","camel-snake-kebab.internals.alter-name/alter-name",1345910614,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__53428__auto__","s__53428__auto__",-52422285,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"convert-case__53430__auto__","convert-case__53430__auto__",-1639249435,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
camel_snake_kebab.internals.macros.type_converting_functions = (function camel_snake_kebab$internals$macros$type_converting_functions(case_label,first_fn,rest_fn,sep){
var make_name = (function camel_snake_kebab$internals$macros$type_converting_functions_$_make_name(type_label){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["->",camel_snake_kebab.internals.misc.convert_case(camel_snake_kebab.internals.macros.resolve(first_fn),camel_snake_kebab.internals.macros.resolve(rest_fn),sep,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(case_label)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type_label)].join(''))].join(''));
});
var iter__5480__auto__ = (function camel_snake_kebab$internals$macros$type_converting_functions_$_iter__53441(s__53442){
return (new cljs.core.LazySeq(null,(function (){
var s__53442__$1 = s__53442;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__53442__$1);
if(temp__5804__auto__){
var s__53442__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53442__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__53442__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__53444 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__53443 = (0);
while(true){
if((i__53443 < size__5479__auto__)){
var vec__53454 = cljs.core._nth(c__5478__auto__,i__53443);
var type_label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53454,(0),null);
var type_converter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53454,(1),null);
cljs.core.chunk_append(b__53444,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,make_name(type_label),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"s__53438__auto__","s__53438__auto__",1278478805,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"rest__53439__auto__","rest__53439__auto__",-1330075562,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,type_converter,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("camel-snake-kebab.internals.misc","convert-case","camel-snake-kebab.internals.misc/convert-case",6867913,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,first_fn,null,(1),null)),(new cljs.core.List(null,rest_fn,null,(1),null)),(new cljs.core.List(null,sep,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","name","cljs.core/name",-260873443,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__53438__auto__","s__53438__auto__",1278478805,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"rest__53439__auto__","rest__53439__auto__",-1330075562,null),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))));

var G__53506 = (i__53443 + (1));
i__53443 = G__53506;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53444),camel_snake_kebab$internals$macros$type_converting_functions_$_iter__53441(cljs.core.chunk_rest(s__53442__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53444),null);
}
} else {
var vec__53463 = cljs.core.first(s__53442__$2);
var type_label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53463,(0),null);
var type_converter = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53463,(1),null);
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,make_name(type_label),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"s__53438__auto__","s__53438__auto__",1278478805,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"rest__53439__auto__","rest__53439__auto__",-1330075562,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,type_converter,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("camel-snake-kebab.internals.misc","convert-case","camel-snake-kebab.internals.misc/convert-case",6867913,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,first_fn,null,(1),null)),(new cljs.core.List(null,rest_fn,null,(1),null)),(new cljs.core.List(null,sep,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","name","cljs.core/name",-260873443,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__53438__auto__","s__53438__auto__",1278478805,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"rest__53439__auto__","rest__53439__auto__",-1330075562,null),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),camel_snake_kebab$internals$macros$type_converting_functions_$_iter__53441(cljs.core.rest(s__53442__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.PersistentArrayMap(null, 3, ["string",new cljs.core.Symbol("cljs.core","identity","cljs.core/identity",725118887,null),"symbol",new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null),"keyword",new cljs.core.Symbol("cljs.core","keyword","cljs.core/keyword",-337316415,null)], null));
});

//# sourceMappingURL=camel_snake_kebab.internals.macros.js.map
