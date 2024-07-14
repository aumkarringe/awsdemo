var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.remote.runtime.api.js");
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

$CLJS.SHADOW_ENV.setLoaded("shadow.remote.runtime.shared.js");

goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__38625){
var map__38626 = p__38625;
var map__38626__$1 = cljs.core.__destructure_map(map__38626);
var runtime = map__38626__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38626__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_38864 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_38864)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__38645 = runtime;
var G__38646 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_38864);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__38645,G__38646) : shadow.remote.runtime.shared.process.call(null,G__38645,G__38646));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__38651,res){
var map__38652 = p__38651;
var map__38652__$1 = cljs.core.__destructure_map(map__38652);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38652__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38652__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__38653 = res;
var G__38653__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38653,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__38653);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38653__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__38653__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__38683 = arguments.length;
switch (G__38683) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__38693,msg,handlers,timeout_after_ms){
var map__38711 = p__38693;
var map__38711__$1 = cljs.core.__destructure_map(map__38711);
var runtime = map__38711__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38711__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___38909 = arguments.length;
var i__5727__auto___38910 = (0);
while(true){
if((i__5727__auto___38910 < len__5726__auto___38909)){
args__5732__auto__.push((arguments[i__5727__auto___38910]));

var G__38911 = (i__5727__auto___38910 + (1));
i__5727__auto___38910 = G__38911;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__38773,ev,args){
var map__38774 = p__38773;
var map__38774__$1 = cljs.core.__destructure_map(map__38774);
var runtime = map__38774__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38774__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__38775 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__38778 = null;
var count__38779 = (0);
var i__38780 = (0);
while(true){
if((i__38780 < count__38779)){
var ext = chunk__38778.cljs$core$IIndexed$_nth$arity$2(null,i__38780);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__38912 = seq__38775;
var G__38913 = chunk__38778;
var G__38914 = count__38779;
var G__38915 = (i__38780 + (1));
seq__38775 = G__38912;
chunk__38778 = G__38913;
count__38779 = G__38914;
i__38780 = G__38915;
continue;
} else {
var G__38916 = seq__38775;
var G__38917 = chunk__38778;
var G__38918 = count__38779;
var G__38919 = (i__38780 + (1));
seq__38775 = G__38916;
chunk__38778 = G__38917;
count__38779 = G__38918;
i__38780 = G__38919;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38775);
if(temp__5804__auto__){
var seq__38775__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38775__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__38775__$1);
var G__38920 = cljs.core.chunk_rest(seq__38775__$1);
var G__38921 = c__5525__auto__;
var G__38922 = cljs.core.count(c__5525__auto__);
var G__38923 = (0);
seq__38775 = G__38920;
chunk__38778 = G__38921;
count__38779 = G__38922;
i__38780 = G__38923;
continue;
} else {
var ext = cljs.core.first(seq__38775__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__38924 = cljs.core.next(seq__38775__$1);
var G__38925 = null;
var G__38926 = (0);
var G__38927 = (0);
seq__38775 = G__38924;
chunk__38778 = G__38925;
count__38779 = G__38926;
i__38780 = G__38927;
continue;
} else {
var G__38928 = cljs.core.next(seq__38775__$1);
var G__38929 = null;
var G__38930 = (0);
var G__38931 = (0);
seq__38775 = G__38928;
chunk__38778 = G__38929;
count__38779 = G__38930;
i__38780 = G__38931;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq38757){
var G__38758 = cljs.core.first(seq38757);
var seq38757__$1 = cljs.core.next(seq38757);
var G__38759 = cljs.core.first(seq38757__$1);
var seq38757__$2 = cljs.core.next(seq38757__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38758,G__38759,seq38757__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__38786,p__38787){
var map__38788 = p__38786;
var map__38788__$1 = cljs.core.__destructure_map(map__38788);
var runtime = map__38788__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38788__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__38789 = p__38787;
var map__38789__$1 = cljs.core.__destructure_map(map__38789);
var msg = map__38789__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38789__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__38792 = cljs.core.deref(state_ref);
var map__38792__$1 = cljs.core.__destructure_map(map__38792);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38792__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38792__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__38799,msg){
var map__38800 = p__38799;
var map__38800__$1 = cljs.core.__destructure_map(map__38800);
var runtime = map__38800__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38800__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__38805,key,p__38806){
var map__38807 = p__38805;
var map__38807__$1 = cljs.core.__destructure_map(map__38807);
var state = map__38807__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38807__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__38808 = p__38806;
var map__38808__$1 = cljs.core.__destructure_map(map__38808);
var spec = map__38808__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38808__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__38815,key,spec){
var map__38817 = p__38815;
var map__38817__$1 = cljs.core.__destructure_map(map__38817);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38817__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__38822_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__38822_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__38823_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__38823_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__38824_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__38824_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__38825_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__38825_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__38826_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__38826_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__38832,key){
var map__38833 = p__38832;
var map__38833__$1 = cljs.core.__destructure_map(map__38833);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38833__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__38840,msg){
var map__38841 = p__38840;
var map__38841__$1 = cljs.core.__destructure_map(map__38841);
var runtime = map__38841__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38841__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__38846,p__38847){
var map__38848 = p__38846;
var map__38848__$1 = cljs.core.__destructure_map(map__38848);
var runtime = map__38848__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38848__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__38849 = p__38847;
var map__38849__$1 = cljs.core.__destructure_map(map__38849);
var msg = map__38849__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38849__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38849__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__38853 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__38855 = null;
var count__38856 = (0);
var i__38857 = (0);
while(true){
if((i__38857 < count__38856)){
var map__38862 = chunk__38855.cljs$core$IIndexed$_nth$arity$2(null,i__38857);
var map__38862__$1 = cljs.core.__destructure_map(map__38862);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38862__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__38942 = seq__38853;
var G__38943 = chunk__38855;
var G__38944 = count__38856;
var G__38945 = (i__38857 + (1));
seq__38853 = G__38942;
chunk__38855 = G__38943;
count__38856 = G__38944;
i__38857 = G__38945;
continue;
} else {
var G__38947 = seq__38853;
var G__38948 = chunk__38855;
var G__38949 = count__38856;
var G__38950 = (i__38857 + (1));
seq__38853 = G__38947;
chunk__38855 = G__38948;
count__38856 = G__38949;
i__38857 = G__38950;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38853);
if(temp__5804__auto__){
var seq__38853__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38853__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__38853__$1);
var G__38951 = cljs.core.chunk_rest(seq__38853__$1);
var G__38952 = c__5525__auto__;
var G__38953 = cljs.core.count(c__5525__auto__);
var G__38954 = (0);
seq__38853 = G__38951;
chunk__38855 = G__38952;
count__38856 = G__38953;
i__38857 = G__38954;
continue;
} else {
var map__38863 = cljs.core.first(seq__38853__$1);
var map__38863__$1 = cljs.core.__destructure_map(map__38863);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38863__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__38956 = cljs.core.next(seq__38853__$1);
var G__38957 = null;
var G__38958 = (0);
var G__38959 = (0);
seq__38853 = G__38956;
chunk__38855 = G__38957;
count__38856 = G__38958;
i__38857 = G__38959;
continue;
} else {
var G__38960 = cljs.core.next(seq__38853__$1);
var G__38961 = null;
var G__38962 = (0);
var G__38963 = (0);
seq__38853 = G__38960;
chunk__38855 = G__38961;
count__38856 = G__38962;
i__38857 = G__38963;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
