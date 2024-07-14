var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.remote.runtime.api.js");
require("./shadow.remote.runtime.shared.js");
require("./shadow.remote.runtime.obj_support.js");
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

$CLJS.SHADOW_ENV.setLoaded("shadow.remote.runtime.tap_support.js");

goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__42744,p__42745){
var map__42747 = p__42744;
var map__42747__$1 = cljs.core.__destructure_map(map__42747);
var svc = map__42747__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42747__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42747__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42747__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__42748 = p__42745;
var map__42748__$1 = cljs.core.__destructure_map(map__42748);
var msg = map__42748__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42748__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42748__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42748__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42748__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__42751,p__42752){
var map__42753 = p__42751;
var map__42753__$1 = cljs.core.__destructure_map(map__42753);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42753__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__42754 = p__42752;
var map__42754__$1 = cljs.core.__destructure_map(map__42754);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42754__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__42757,p__42758){
var map__42759 = p__42757;
var map__42759__$1 = cljs.core.__destructure_map(map__42759);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42759__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42759__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__42760 = p__42758;
var map__42760__$1 = cljs.core.__destructure_map(map__42760);
var msg = map__42760__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42760__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__42761,tid){
var map__42762 = p__42761;
var map__42762__$1 = cljs.core.__destructure_map(map__42762);
var svc = map__42762__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42762__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__42768 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__42769 = null;
var count__42770 = (0);
var i__42771 = (0);
while(true){
if((i__42771 < count__42770)){
var vec__42786 = chunk__42769.cljs$core$IIndexed$_nth$arity$2(null,i__42771);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42786,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42786,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__42814 = seq__42768;
var G__42815 = chunk__42769;
var G__42816 = count__42770;
var G__42817 = (i__42771 + (1));
seq__42768 = G__42814;
chunk__42769 = G__42815;
count__42770 = G__42816;
i__42771 = G__42817;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__42768);
if(temp__5804__auto__){
var seq__42768__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42768__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__42768__$1);
var G__42823 = cljs.core.chunk_rest(seq__42768__$1);
var G__42824 = c__5525__auto__;
var G__42825 = cljs.core.count(c__5525__auto__);
var G__42826 = (0);
seq__42768 = G__42823;
chunk__42769 = G__42824;
count__42770 = G__42825;
i__42771 = G__42826;
continue;
} else {
var vec__42789 = cljs.core.first(seq__42768__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42789,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42789,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__42827 = cljs.core.next(seq__42768__$1);
var G__42828 = null;
var G__42829 = (0);
var G__42830 = (0);
seq__42768 = G__42827;
chunk__42769 = G__42828;
count__42770 = G__42829;
i__42771 = G__42830;
continue;
}
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
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__42764_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__42764_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__42765_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__42765_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__42766_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__42766_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__42767_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__42767_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__42799){
var map__42800 = p__42799;
var map__42800__$1 = cljs.core.__destructure_map(map__42800);
var svc = map__42800__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42800__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42800__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
