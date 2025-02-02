var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.walk.js");
require("./malli.core.js");
require("./malli.impl.util.js");
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

$CLJS.SHADOW_ENV.setLoaded("malli.destructure.js");

goog.provide('malli.destructure');
malli.destructure._map_like_QMARK_ = (function malli$destructure$_map_like_QMARK_(x){
return ((cljs.core.map_QMARK_(x)) || (((cljs.core.seqable_QMARK_(x)) && (cljs.core.every_QMARK_((function (e){
return ((cljs.core.vector_QMARK_(e)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(e))));
}),x)))));
});
malli.destructure._qualified_key_QMARK_ = (function malli$destructure$_qualified_key_QMARK_(k){
var and__5000__auto__ = cljs.core.qualified_keyword_QMARK_(k);
if(and__5000__auto__){
var G__53201 = cljs.core.name(k);
var fexpr__53200 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["syms",null,"keys",null], null), null);
return (fexpr__53200.cljs$core$IFn$_invoke$arity$1 ? fexpr__53200.cljs$core$IFn$_invoke$arity$1(G__53201) : fexpr__53200.call(null,G__53201));
} else {
return and__5000__auto__;
}
});
malli.destructure.MapLike = malli.core._collection_schema(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"MapLike","MapLike",2050503324,null),new cljs.core.Keyword(null,"empty","empty",767870958),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"pred","pred",1927423397),malli.destructure._map_like_QMARK_], null));
malli.destructure.Never = malli.core._simple_schema(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Symbol(null,"Never","Never",-484329064,null),new cljs.core.Keyword(null,"pred","pred",1927423397),(function (_){
return false;
})], null));
malli.destructure._create = (function malli$destructure$_create(inline_schemas){
return malli.core.schema.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registry","registry",1021159018),cljs.core.PersistentHashMap.fromArrays(["Symbol","Schema","Map","Arg","Binding","ArgType","Amp","Separator","Vector","As"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),cljs.core.symbol_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not","not",-595976884),"Amp"], null)], null),cljs.core.any_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [malli.destructure.MapLike,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"keys","keys",1068423698)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.core.ident_QMARK_], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"strs","strs",1175537277)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.core.ident_QMARK_], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"syms","syms",-1575891762)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.core.ident_QMARK_], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"or","or",235744169)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),cljs.core.simple_symbol_QMARK_,cljs.core.any_QMARK_], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"as","as",1148689641)], null),"Symbol"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),malli.destructure._qualified_key_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.core.ident_QMARK_], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),"ArgType"], null),cljs.core.any_QMARK_], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catn","catn",-48807277),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arg","arg",-1747261837),"ArgType"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catn","catn",-48807277),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arg","arg",-1747261837),"ArgType"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-","-",-2112348439),"Separator"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),"Schema"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catn","catn",-48807277),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elems","elems",-547490822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),"Arg"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"?","?",-1703165233),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catn","catn",-48807277),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"amp","amp",271690571),"Amp"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arg","arg",-1747261837),"Arg"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"orn","orn",738436484),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym","sym",-1444860305),"Symbol"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),"Map"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vec","vec",-657847931),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),"Vector"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Symbol(null,"&","&",-2144855648,null)], null),(cljs.core.truth_(inline_schemas)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"-","-",-2112348439)], null):malli.destructure.Never),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catn","catn",-48807277),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elems","elems",-547490822),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),"Arg"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"?","?",-1703165233),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catn","catn",-48807277),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"amp","amp",271690571),"Amp"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"arg","arg",-1747261837),"Arg"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"?","?",-1703165233),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catn","catn",-48807277),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"as","as",1148689641),"As"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym","sym",-1444860305),"Symbol"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"?","?",-1703165233),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catn","catn",-48807277),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-","-",-2112348439),"Separator"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),"Schema"], null)], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"as","as",1148689641)], null)])], null),"Binding"], null));
});
malli.destructure.Binding = malli.destructure._create(false);
malli.destructure.SchematizedBinding = malli.destructure._create(true);
malli.destructure._any_QMARK_ = (function malli$destructure$_any_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"any","any",1705907423),x);
});
malli.destructure._maybe_QMARK_ = (function malli$destructure$_maybe_QMARK_(x){
return ((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"maybe","maybe",-314397560),cljs.core.first(x))));
});
malli.destructure._vector = (function malli$destructure$_vector(p__53251,options){
var map__53252 = p__53251;
var map__53252__$1 = cljs.core.__destructure_map(map__53252);
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53252__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var elems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53252__$1,new cljs.core.Keyword(null,"elems","elems",-547490822));
var rest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53252__$1,new cljs.core.Keyword(null,"rest","rest",-1241696419));
var or__5002__auto__ = (function (){var G__53255 = as;
var G__53255__$1 = (((G__53255 == null))?null:new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__53255));
var G__53255__$2 = (((G__53255__$1 == null))?null:new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__53255__$1));
if((G__53255__$2 == null)){
return null;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),G__53255__$2);
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var ess = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53234_SHARP_){
var s = (malli.destructure._transform.cljs$core$IFn$_invoke$arity$3 ? malli.destructure._transform.cljs$core$IFn$_invoke$arity$3(p1__53234_SHARP_,options,false) : malli.destructure._transform.call(null,p1__53234_SHARP_,options,false));
var G__53261 = s;
if((!(malli.destructure._maybe_QMARK_(s)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"?","?",-1703165233)], null),G__53261);
} else {
return G__53261;
}
}),elems);
var rs = (cljs.core.truth_(rest)?(function (){var G__53262 = new cljs.core.Keyword(null,"arg","arg",-1747261837).cljs$core$IFn$_invoke$arity$1(rest);
var G__53263 = options;
var G__53264 = true;
return (malli.destructure._transform.cljs$core$IFn$_invoke$arity$3 ? malli.destructure._transform.cljs$core$IFn$_invoke$arity$3(G__53262,G__53263,G__53264) : malli.destructure._transform.call(null,G__53262,G__53263,G__53264));
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.Keyword(null,"any","any",1705907423)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),((cljs.core.seq(ess))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207)], null),ess),rs):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),rs], null))], null);
}
});
malli.destructure._qualified_keys = (function malli$destructure$_qualified_keys(m){
var iter__5480__auto__ = (function malli$destructure$_qualified_keys_$_iter__53276(s__53277){
return (new cljs.core.LazySeq(null,(function (){
var s__53277__$1 = s__53277;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__53277__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__53286 = cljs.core.first(xs__6360__auto__);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53286,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53286,(1),null);
if(cljs.core.truth_(malli.destructure._qualified_key_QMARK_(k))){
var f = (function (){var G__53290 = cljs.core.name(k);
var fexpr__53289 = new cljs.core.PersistentArrayMap(null, 2, ["keys",cljs.core.keyword,"syms",cljs.core.symbol], null);
return (fexpr__53289.cljs$core$IFn$_invoke$arity$1 ? fexpr__53289.cljs$core$IFn$_invoke$arity$1(G__53290) : fexpr__53289.call(null,G__53290));
})();
if(cljs.core.truth_(f)){
var iterys__5476__auto__ = ((function (s__53277__$1,f,vec__53286,k,vs,xs__6360__auto__,temp__5804__auto__){
return (function malli$destructure$_qualified_keys_$_iter__53276_$_iter__53278(s__53279){
return (new cljs.core.LazySeq(null,((function (s__53277__$1,f,vec__53286,k,vs,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__53279__$1 = s__53279;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__53279__$1);
if(temp__5804__auto____$1){
var s__53279__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53279__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__53279__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__53281 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__53280 = (0);
while(true){
if((i__53280 < size__5479__auto__)){
var v = cljs.core._nth(c__5478__auto__,i__53280);
cljs.core.chunk_append(b__53281,(function (){var G__53305 = cljs.core.namespace(k);
var G__53306 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__53305,G__53306) : f.call(null,G__53305,G__53306));
})());

var G__53521 = (i__53280 + (1));
i__53280 = G__53521;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53281),malli$destructure$_qualified_keys_$_iter__53276_$_iter__53278(cljs.core.chunk_rest(s__53279__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53281),null);
}
} else {
var v = cljs.core.first(s__53279__$2);
return cljs.core.cons((function (){var G__53311 = cljs.core.namespace(k);
var G__53312 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__53311,G__53312) : f.call(null,G__53311,G__53312));
})(),malli$destructure$_qualified_keys_$_iter__53276_$_iter__53278(cljs.core.rest(s__53279__$2)));
}
} else {
return null;
}
break;
}
});})(s__53277__$1,f,vec__53286,k,vs,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__53277__$1,f,vec__53286,k,vs,xs__6360__auto__,temp__5804__auto__))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(vs));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,malli$destructure$_qualified_keys_$_iter__53276(cljs.core.rest(s__53277__$1)));
} else {
var G__53522 = cljs.core.rest(s__53277__$1);
s__53277__$1 = G__53522;
continue;
}
} else {
var G__53523 = cljs.core.rest(s__53277__$1);
s__53277__$1 = G__53523;
continue;
}
} else {
var G__53524 = cljs.core.rest(s__53277__$1);
s__53277__$1 = G__53524;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(m);
});
malli.destructure._keys = (function malli$destructure$_keys(p__53328,p__53329){
var map__53330 = p__53328;
var map__53330__$1 = cljs.core.__destructure_map(map__53330);
var arg = map__53330__$1;
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53330__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var strs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53330__$1,new cljs.core.Keyword(null,"strs","strs",1175537277));
var syms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53330__$1,new cljs.core.Keyword(null,"syms","syms",-1575891762));
var map__53331 = p__53329;
var map__53331__$1 = cljs.core.__destructure_map(map__53331);
var options = map__53331__$1;
var references = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53331__$1,new cljs.core.Keyword("malli.destructure","references","malli.destructure/references",2009815400),true);
var any = (function (f,ks){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),new cljs.core.Keyword(null,"any","any",1705907423)], null);
}),ks);
});
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(any(cljs.core.keyword,keys),any(cljs.core.str,strs),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([any(cljs.core.identity,syms),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(cljs.core.truth_((function (){var and__5000__auto__ = references;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.qualified_keyword_QMARK_(k);
} else {
return and__5000__auto__;
}
})())?k:new cljs.core.Keyword(null,"any","any",1705907423))], null);
}),malli.destructure._qualified_keys(arg)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__53335){
var vec__53336 = p__53335;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53336,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53336,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,(function (){var G__53344 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arg","arg",-1747261837),k], null);
var G__53345 = options;
var G__53346 = false;
return (malli.destructure._transform.cljs$core$IFn$_invoke$arity$3 ? malli.destructure._transform.cljs$core$IFn$_invoke$arity$3(G__53344,G__53345,G__53346) : malli.destructure._transform.call(null,G__53344,G__53345,G__53346));
})()], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__53321_SHARP_){
return malli.impl.util._tagged_QMARK_(cljs.core.key(p1__53321_SHARP_));
}),arg))], 0)));
});
malli.destructure._map = (function malli$destructure$_map(arg,p__53352,rest){
var map__53354 = p__53352;
var map__53354__$1 = cljs.core.__destructure_map(map__53354);
var options = map__53354__$1;
var references = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53354__$1,new cljs.core.Keyword("malli.destructure","references","malli.destructure/references",2009815400),true);
var required_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53354__$1,new cljs.core.Keyword("malli.destructure","required-keys","malli.destructure/required-keys",-574411982));
var closed_maps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53354__$1,new cljs.core.Keyword("malli.destructure","closed-maps","malli.destructure/closed-maps",427279776));
var sequential_maps = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53354__$1,new cljs.core.Keyword("malli.destructure","sequential-maps","malli.destructure/sequential-maps",-1286646829),true);
var keys = malli.destructure._keys(arg,options);
var __GT_entry = (function (p__53360){
var vec__53364 = p__53360;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53364,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53364,(1),null);
var ref = (function (){var and__5000__auto__ = references;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.qualified_keyword_QMARK_(k);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5000__auto__ = ref;
if(cljs.core.truth_(and__5000__auto__)){
return required_keys;
} else {
return and__5000__auto__;
}
})())){
return k;
} else {
if(cljs.core.truth_(required_keys)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,t], null);
} else {
var G__53367 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null)], null);
if(cljs.core.not(ref)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__53367,t);
} else {
return G__53367;
}

}
}
});
var __GT_arg = (function (p__53368){
var vec__53371 = p__53368;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53371,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53371,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),k], null),(cljs.core.truth_((function (){var and__5000__auto__ = references;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.qualified_keyword_QMARK_(k);
} else {
return and__5000__auto__;
}
})())?k:t)], null);
});
var schema = (function (){var G__53374 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461)], null);
var G__53374__$1 = (cljs.core.truth_(closed_maps)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__53374,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"closed","closed",-919675359),true], null)):G__53374);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__53374__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2(__GT_entry,keys));

})();
if(cljs.core.truth_((function (){var or__5002__auto__ = rest;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return sequential_maps;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"altn","altn",1717854417),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),schema], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),(function (){var G__53378 = (function (){var G__53379 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alt","alt",-3214426)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(__GT_arg,keys));
if(cljs.core.not(closed_maps)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__53379,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"any","any",1705907423),new cljs.core.Keyword(null,"any","any",1705907423)], null));
} else {
return G__53379;
}
})();
var G__53378__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318)], null),G__53378)
;
if(cljs.core.not(rest)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791)], null),G__53378__$1);
} else {
return G__53378__$1;
}
})()], null)], null);
} else {
return schema;
}
});
malli.destructure._transform = (function malli$destructure$_transform(p__53390,options,rest){
var map__53394 = p__53390;
var map__53394__$1 = cljs.core.__destructure_map(map__53394);
var all = map__53394__$1;
var vec__53395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53394__$1,new cljs.core.Keyword(null,"arg","arg",-1747261837));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53395,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53395,(1),null);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53394__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
if(cljs.core.truth_((function (){var and__5000__auto__ = schema;
if(cljs.core.truth_(and__5000__auto__)){
return rest;
} else {
return and__5000__auto__;
}
})())){
var s = (malli.destructure._transform.cljs$core$IFn$_invoke$arity$3 ? malli.destructure._transform.cljs$core$IFn$_invoke$arity$3(all,options,false) : malli.destructure._transform.call(null,all,options,false));
if(malli.destructure._any_QMARK_(s)){
return schema;
} else {
return s;
}
} else {
if(cljs.core.truth_(schema)){
return schema;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vec","vec",-657847931),k)){
return malli.destructure._vector(v,options);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"map","map",1371690461),k)){
return malli.destructure._map(v,options,rest);
} else {
if(cljs.core.truth_(rest)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.Keyword(null,"any","any",1705907423)], null);
} else {
return new cljs.core.Keyword(null,"any","any",1705907423);

}
}
}
}
}
});
malli.destructure._schema = (function malli$destructure$_schema(p__53419,options){
var map__53420 = p__53419;
var map__53420__$1 = cljs.core.__destructure_map(map__53420);
var elems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53420__$1,new cljs.core.Keyword(null,"elems","elems",-547490822));
var rest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53420__$1,new cljs.core.Keyword(null,"rest","rest",-1241696419));
var G__53421 = new cljs.core.Keyword(null,"cat","cat",-1457810207);
var G__53421__$1 = (cljs.core.truth_((function (){var or__5002__auto__ = cljs.core.seq(elems);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return rest;
}
})())?(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__53421],null)):G__53421);
var G__53421__$2 = ((cljs.core.seq(elems))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__53421__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53415_SHARP_){
return malli.destructure._transform(p1__53415_SHARP_,options,false);
}),elems)):G__53421__$1);
if(cljs.core.truth_(rest)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__53421__$2,malli.destructure._transform(new cljs.core.Keyword(null,"arg","arg",-1747261837).cljs$core$IFn$_invoke$arity$1(rest),options,true));
} else {
return G__53421__$2;
}
});
malli.destructure._unschematize = (function malli$destructure$_unschematize(x){
return clojure.walk.prewalk((function (p1__53422_SHARP_){
var G__53424 = p1__53422_SHARP_;
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.map_QMARK_(p1__53422_SHARP_);
if(and__5000__auto__){
return new cljs.core.Keyword(null,"-","-",-2112348439).cljs$core$IFn$_invoke$arity$1(p1__53422_SHARP_);
} else {
return and__5000__auto__;
}
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53424,new cljs.core.Keyword(null,"-","-",-2112348439),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"schema","schema",-1582001791)], 0));
} else {
return G__53424;
}
}),x);
});
malli.destructure._function_schema = (function malli$destructure$_function_schema(var_args){
var G__53426 = arguments.length;
switch (G__53426) {
case 1:
return malli.destructure._function_schema.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.destructure._function_schema.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.destructure._function_schema.cljs$core$IFn$_invoke$arity$1 = (function (arglists){
return malli.destructure._function_schema.cljs$core$IFn$_invoke$arity$2(arglists,null);
}));

(malli.destructure._function_schema.cljs$core$IFn$_invoke$arity$2 = (function (arglists,options){
var __GT_schema = (function (arglist){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=>","=>",1841166128),malli.destructure._schema(malli.core.parse.cljs$core$IFn$_invoke$arity$2(malli.destructure.SchematizedBinding,arglist),options),new cljs.core.Keyword(null,"any","any",1705907423)], null);
});
var $ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(__GT_schema,arglists);
if(cljs.core.next($)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"function","function",-2127255473)], null),$);
} else {
return cljs.core.first($);
}
}));

(malli.destructure._function_schema.cljs$lang$maxFixedArity = 2);

/**
 * Takes a destructuring bindings vector (arglist)
 * and returns a map with keys:
 * 
 * | key            | description |
 * | ---------------|-------------|
 * | `:raw-arglist` | the original arglist (can have type-hints)
 * | `:arglist`     | simplified clojure arglist (no type-hints)
 * | `:schema`      | extracted malli schema
 * | `:parsed`      | full parse results
 * 
 * Parsing can be configured using the following options:
 * 
 * | key                    | description |
 * | -----------------------|-------------|
 * | `::md/inline-schemas`  | support plumatic-style inline schemas (true)
 * | `::md/sequential-maps` | support sequential maps in non-rest position (true)
 * | `::md/references`      | qualified schema references used (true)
 * | `::md/required-keys`   | destructured keys are required (false)
 * | `::md/closed-maps`     | destructured maps are closed (false)
 * 
 * Examples:
 * 
 *    (require '[malli.destructure :as md])
 * 
 *    (-> '[a b & cs] (md/parse) :schema)
 *    ; => [:cat :any :any [:* :any]]
 * 
 *    (-> '[a :- :string, b & cs :- [:* :int]] (md/parse) :schema)
 *    ; => [:cat :string :any [:* :int]]
 */
malli.destructure.parse = (function malli$destructure$parse(var_args){
var G__53433 = arguments.length;
switch (G__53433) {
case 1:
return malli.destructure.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.destructure.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.destructure.parse.cljs$core$IFn$_invoke$arity$1 = (function (arglist){
return malli.destructure.parse.cljs$core$IFn$_invoke$arity$2(arglist,null);
}));

(malli.destructure.parse.cljs$core$IFn$_invoke$arity$2 = (function (arglist,p__53435){
var map__53436 = p__53435;
var map__53436__$1 = cljs.core.__destructure_map(map__53436);
var options = map__53436__$1;
var inline_schemas = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53436__$1,new cljs.core.Keyword("malli.destructure","inline-schemas","malli.destructure/inline-schemas",-722033998),true);
var parse_scheme = (cljs.core.truth_(inline_schemas)?malli.destructure.SchematizedBinding:malli.destructure.Binding);
var parsed = malli.core.parse.cljs$core$IFn$_invoke$arity$2(parse_scheme,arglist);
var arglist_SINGLEQUOTE_ = malli.core.unparse.cljs$core$IFn$_invoke$arity$2(malli.destructure.Binding,malli.destructure._unschematize(parsed));
var schema_SINGLEQUOTE_ = malli.destructure._schema(parsed,options);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli.core","invalid","malli.core/invalid",362080900),arglist_SINGLEQUOTE_)){
malli.core._fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli.destructure","invalid-arglist","malli.destructure/invalid-arglist",-130304268),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglist","arglist",-1808272150),arglist], null));
} else {
}

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"raw-arglist","raw-arglist",2067005493),arglist,new cljs.core.Keyword(null,"parsed","parsed",-819589156),parsed,new cljs.core.Keyword(null,"arglist","arglist",-1808272150),arglist_SINGLEQUOTE_,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema_SINGLEQUOTE_], null);
}));

(malli.destructure.parse.cljs$lang$maxFixedArity = 2);

/**
 * Infers a schema from a function Var. Best effort.
 */
malli.destructure.infer = (function malli$destructure$infer(var_args){
var G__53440 = arguments.length;
switch (G__53440) {
case 1:
return malli.destructure.infer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.destructure.infer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.destructure.infer.cljs$core$IFn$_invoke$arity$1 = (function (var$){
return malli.destructure.infer.cljs$core$IFn$_invoke$arity$2(var$,null);
}));

(malli.destructure.infer.cljs$core$IFn$_invoke$arity$2 = (function (var$,options){
return malli.destructure._function_schema.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(var$)),options);
}));

(malli.destructure.infer.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=malli.destructure.js.map
