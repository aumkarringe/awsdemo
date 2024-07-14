var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./shadow.json.js");
require("./shadow.cljs.devtools.client.env.js");
require("./shadow.cljs.devtools.client.console.js");
require("./shadow.cljs.devtools.client.hud.js");
require("./shadow.cljs.devtools.client.websocket.js");
require("./shadow.cljs.devtools.client.shared.js");
require("./shadow.remote.runtime.api.js");
require("./shadow.remote.runtime.shared.js");
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

$CLJS.SHADOW_ENV.setLoaded("shadow.cljs.devtools.client.browser.js");

goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___44160 = arguments.length;
var i__5727__auto___44161 = (0);
while(true){
if((i__5727__auto___44161 < len__5726__auto___44160)){
args__5732__auto__.push((arguments[i__5727__auto___44161]));

var G__44162 = (i__5727__auto___44161 + (1));
i__5727__auto___44161 = G__44162;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq43544){
var G__43545 = cljs.core.first(seq43544);
var seq43544__$1 = cljs.core.next(seq43544);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43545,seq43544__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__43548 = cljs.core.seq(sources);
var chunk__43549 = null;
var count__43550 = (0);
var i__43551 = (0);
while(true){
if((i__43551 < count__43550)){
var map__43556 = chunk__43549.cljs$core$IIndexed$_nth$arity$2(null,i__43551);
var map__43556__$1 = cljs.core.__destructure_map(map__43556);
var src = map__43556__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43556__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43556__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43556__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43556__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e43557){var e_44163 = e43557;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_44163);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_44163.message)].join('')));
}

var G__44164 = seq__43548;
var G__44165 = chunk__43549;
var G__44166 = count__43550;
var G__44167 = (i__43551 + (1));
seq__43548 = G__44164;
chunk__43549 = G__44165;
count__43550 = G__44166;
i__43551 = G__44167;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__43548);
if(temp__5804__auto__){
var seq__43548__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43548__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__43548__$1);
var G__44168 = cljs.core.chunk_rest(seq__43548__$1);
var G__44169 = c__5525__auto__;
var G__44170 = cljs.core.count(c__5525__auto__);
var G__44171 = (0);
seq__43548 = G__44168;
chunk__43549 = G__44169;
count__43550 = G__44170;
i__43551 = G__44171;
continue;
} else {
var map__43558 = cljs.core.first(seq__43548__$1);
var map__43558__$1 = cljs.core.__destructure_map(map__43558);
var src = map__43558__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43558__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43558__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43558__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43558__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e43559){var e_44172 = e43559;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_44172);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_44172.message)].join('')));
}

var G__44173 = cljs.core.next(seq__43548__$1);
var G__44174 = null;
var G__44175 = (0);
var G__44176 = (0);
seq__43548 = G__44173;
chunk__43549 = G__44174;
count__43550 = G__44175;
i__43551 = G__44176;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__43560 = cljs.core.seq(js_requires);
var chunk__43561 = null;
var count__43562 = (0);
var i__43563 = (0);
while(true){
if((i__43563 < count__43562)){
var js_ns = chunk__43561.cljs$core$IIndexed$_nth$arity$2(null,i__43563);
var require_str_44177 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_44177);


var G__44178 = seq__43560;
var G__44179 = chunk__43561;
var G__44180 = count__43562;
var G__44181 = (i__43563 + (1));
seq__43560 = G__44178;
chunk__43561 = G__44179;
count__43562 = G__44180;
i__43563 = G__44181;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__43560);
if(temp__5804__auto__){
var seq__43560__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43560__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__43560__$1);
var G__44182 = cljs.core.chunk_rest(seq__43560__$1);
var G__44183 = c__5525__auto__;
var G__44184 = cljs.core.count(c__5525__auto__);
var G__44185 = (0);
seq__43560 = G__44182;
chunk__43561 = G__44183;
count__43562 = G__44184;
i__43563 = G__44185;
continue;
} else {
var js_ns = cljs.core.first(seq__43560__$1);
var require_str_44186 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_44186);


var G__44187 = cljs.core.next(seq__43560__$1);
var G__44188 = null;
var G__44189 = (0);
var G__44190 = (0);
seq__43560 = G__44187;
chunk__43561 = G__44188;
count__43562 = G__44189;
i__43563 = G__44190;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__43574){
var map__43575 = p__43574;
var map__43575__$1 = cljs.core.__destructure_map(map__43575);
var msg = map__43575__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43575__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43575__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43576(s__43577){
return (new cljs.core.LazySeq(null,(function (){
var s__43577__$1 = s__43577;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__43577__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__43585 = cljs.core.first(xs__6360__auto__);
var map__43585__$1 = cljs.core.__destructure_map(map__43585);
var src = map__43585__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43585__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43585__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__43577__$1,map__43585,map__43585__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__43575,map__43575__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43576_$_iter__43578(s__43579){
return (new cljs.core.LazySeq(null,((function (s__43577__$1,map__43585,map__43585__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__43575,map__43575__$1,msg,info,reload_info){
return (function (){
var s__43579__$1 = s__43579;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__43579__$1);
if(temp__5804__auto____$1){
var s__43579__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43579__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__43579__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__43581 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__43580 = (0);
while(true){
if((i__43580 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__43580);
cljs.core.chunk_append(b__43581,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__44196 = (i__43580 + (1));
i__43580 = G__44196;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43581),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43576_$_iter__43578(cljs.core.chunk_rest(s__43579__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43581),null);
}
} else {
var warning = cljs.core.first(s__43579__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43576_$_iter__43578(cljs.core.rest(s__43579__$2)));
}
} else {
return null;
}
break;
}
});})(s__43577__$1,map__43585,map__43585__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__43575,map__43575__$1,msg,info,reload_info))
,null,null));
});})(s__43577__$1,map__43585,map__43585__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__43575,map__43575__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__43576(cljs.core.rest(s__43577__$1)));
} else {
var G__44197 = cljs.core.rest(s__43577__$1);
s__43577__$1 = G__44197;
continue;
}
} else {
var G__44198 = cljs.core.rest(s__43577__$1);
s__43577__$1 = G__44198;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__43586_44199 = cljs.core.seq(warnings);
var chunk__43587_44200 = null;
var count__43588_44201 = (0);
var i__43589_44202 = (0);
while(true){
if((i__43589_44202 < count__43588_44201)){
var map__43592_44203 = chunk__43587_44200.cljs$core$IIndexed$_nth$arity$2(null,i__43589_44202);
var map__43592_44204__$1 = cljs.core.__destructure_map(map__43592_44203);
var w_44205 = map__43592_44204__$1;
var msg_44206__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43592_44204__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_44207 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43592_44204__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_44208 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43592_44204__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_44209 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43592_44204__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_44209)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_44207),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_44208),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_44206__$1)].join(''));


var G__44210 = seq__43586_44199;
var G__44211 = chunk__43587_44200;
var G__44212 = count__43588_44201;
var G__44213 = (i__43589_44202 + (1));
seq__43586_44199 = G__44210;
chunk__43587_44200 = G__44211;
count__43588_44201 = G__44212;
i__43589_44202 = G__44213;
continue;
} else {
var temp__5804__auto___44214 = cljs.core.seq(seq__43586_44199);
if(temp__5804__auto___44214){
var seq__43586_44215__$1 = temp__5804__auto___44214;
if(cljs.core.chunked_seq_QMARK_(seq__43586_44215__$1)){
var c__5525__auto___44216 = cljs.core.chunk_first(seq__43586_44215__$1);
var G__44217 = cljs.core.chunk_rest(seq__43586_44215__$1);
var G__44218 = c__5525__auto___44216;
var G__44219 = cljs.core.count(c__5525__auto___44216);
var G__44220 = (0);
seq__43586_44199 = G__44217;
chunk__43587_44200 = G__44218;
count__43588_44201 = G__44219;
i__43589_44202 = G__44220;
continue;
} else {
var map__43594_44221 = cljs.core.first(seq__43586_44215__$1);
var map__43594_44222__$1 = cljs.core.__destructure_map(map__43594_44221);
var w_44223 = map__43594_44222__$1;
var msg_44224__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43594_44222__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_44225 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43594_44222__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_44226 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43594_44222__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_44227 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43594_44222__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_44227)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_44225),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_44226),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_44224__$1)].join(''));


var G__44228 = cljs.core.next(seq__43586_44215__$1);
var G__44229 = null;
var G__44230 = (0);
var G__44231 = (0);
seq__43586_44199 = G__44228;
chunk__43587_44200 = G__44229;
count__43588_44201 = G__44230;
i__43589_44202 = G__44231;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__43570_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__43570_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__43654){
var map__43655 = p__43654;
var map__43655__$1 = cljs.core.__destructure_map(map__43655);
var msg = map__43655__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43655__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43655__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__43656 = cljs.core.seq(updates);
var chunk__43659 = null;
var count__43660 = (0);
var i__43661 = (0);
while(true){
if((i__43661 < count__43660)){
var path = chunk__43659.cljs$core$IIndexed$_nth$arity$2(null,i__43661);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__43888_44232 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__43892_44233 = null;
var count__43893_44234 = (0);
var i__43894_44235 = (0);
while(true){
if((i__43894_44235 < count__43893_44234)){
var node_44236 = chunk__43892_44233.cljs$core$IIndexed$_nth$arity$2(null,i__43894_44235);
if(cljs.core.not(node_44236.shadow$old)){
var path_match_44237 = shadow.cljs.devtools.client.browser.match_paths(node_44236.getAttribute("href"),path);
if(cljs.core.truth_(path_match_44237)){
var new_link_44238 = (function (){var G__43967 = node_44236.cloneNode(true);
G__43967.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_44237),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__43967;
})();
(node_44236.shadow$old = true);

(new_link_44238.onload = ((function (seq__43888_44232,chunk__43892_44233,count__43893_44234,i__43894_44235,seq__43656,chunk__43659,count__43660,i__43661,new_link_44238,path_match_44237,node_44236,path,map__43655,map__43655__$1,msg,updates,reload_info){
return (function (e){
var seq__43968_44239 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__43970_44240 = null;
var count__43971_44241 = (0);
var i__43972_44242 = (0);
while(true){
if((i__43972_44242 < count__43971_44241)){
var map__43980_44243 = chunk__43970_44240.cljs$core$IIndexed$_nth$arity$2(null,i__43972_44242);
var map__43980_44244__$1 = cljs.core.__destructure_map(map__43980_44243);
var task_44245 = map__43980_44244__$1;
var fn_str_44246 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43980_44244__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44247 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43980_44244__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44248 = goog.getObjectByName(fn_str_44246,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44247)].join(''));

(fn_obj_44248.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44248.cljs$core$IFn$_invoke$arity$2(path,new_link_44238) : fn_obj_44248.call(null,path,new_link_44238));


var G__44249 = seq__43968_44239;
var G__44250 = chunk__43970_44240;
var G__44251 = count__43971_44241;
var G__44252 = (i__43972_44242 + (1));
seq__43968_44239 = G__44249;
chunk__43970_44240 = G__44250;
count__43971_44241 = G__44251;
i__43972_44242 = G__44252;
continue;
} else {
var temp__5804__auto___44253 = cljs.core.seq(seq__43968_44239);
if(temp__5804__auto___44253){
var seq__43968_44254__$1 = temp__5804__auto___44253;
if(cljs.core.chunked_seq_QMARK_(seq__43968_44254__$1)){
var c__5525__auto___44255 = cljs.core.chunk_first(seq__43968_44254__$1);
var G__44256 = cljs.core.chunk_rest(seq__43968_44254__$1);
var G__44257 = c__5525__auto___44255;
var G__44258 = cljs.core.count(c__5525__auto___44255);
var G__44259 = (0);
seq__43968_44239 = G__44256;
chunk__43970_44240 = G__44257;
count__43971_44241 = G__44258;
i__43972_44242 = G__44259;
continue;
} else {
var map__43983_44260 = cljs.core.first(seq__43968_44254__$1);
var map__43983_44261__$1 = cljs.core.__destructure_map(map__43983_44260);
var task_44262 = map__43983_44261__$1;
var fn_str_44263 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43983_44261__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44264 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43983_44261__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44265 = goog.getObjectByName(fn_str_44263,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44264)].join(''));

(fn_obj_44265.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44265.cljs$core$IFn$_invoke$arity$2(path,new_link_44238) : fn_obj_44265.call(null,path,new_link_44238));


var G__44266 = cljs.core.next(seq__43968_44254__$1);
var G__44267 = null;
var G__44268 = (0);
var G__44269 = (0);
seq__43968_44239 = G__44266;
chunk__43970_44240 = G__44267;
count__43971_44241 = G__44268;
i__43972_44242 = G__44269;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_44236);
});})(seq__43888_44232,chunk__43892_44233,count__43893_44234,i__43894_44235,seq__43656,chunk__43659,count__43660,i__43661,new_link_44238,path_match_44237,node_44236,path,map__43655,map__43655__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_44237], 0));

goog.dom.insertSiblingAfter(new_link_44238,node_44236);


var G__44270 = seq__43888_44232;
var G__44271 = chunk__43892_44233;
var G__44272 = count__43893_44234;
var G__44273 = (i__43894_44235 + (1));
seq__43888_44232 = G__44270;
chunk__43892_44233 = G__44271;
count__43893_44234 = G__44272;
i__43894_44235 = G__44273;
continue;
} else {
var G__44274 = seq__43888_44232;
var G__44275 = chunk__43892_44233;
var G__44276 = count__43893_44234;
var G__44277 = (i__43894_44235 + (1));
seq__43888_44232 = G__44274;
chunk__43892_44233 = G__44275;
count__43893_44234 = G__44276;
i__43894_44235 = G__44277;
continue;
}
} else {
var G__44278 = seq__43888_44232;
var G__44279 = chunk__43892_44233;
var G__44280 = count__43893_44234;
var G__44281 = (i__43894_44235 + (1));
seq__43888_44232 = G__44278;
chunk__43892_44233 = G__44279;
count__43893_44234 = G__44280;
i__43894_44235 = G__44281;
continue;
}
} else {
var temp__5804__auto___44282 = cljs.core.seq(seq__43888_44232);
if(temp__5804__auto___44282){
var seq__43888_44283__$1 = temp__5804__auto___44282;
if(cljs.core.chunked_seq_QMARK_(seq__43888_44283__$1)){
var c__5525__auto___44284 = cljs.core.chunk_first(seq__43888_44283__$1);
var G__44285 = cljs.core.chunk_rest(seq__43888_44283__$1);
var G__44286 = c__5525__auto___44284;
var G__44287 = cljs.core.count(c__5525__auto___44284);
var G__44288 = (0);
seq__43888_44232 = G__44285;
chunk__43892_44233 = G__44286;
count__43893_44234 = G__44287;
i__43894_44235 = G__44288;
continue;
} else {
var node_44289 = cljs.core.first(seq__43888_44283__$1);
if(cljs.core.not(node_44289.shadow$old)){
var path_match_44290 = shadow.cljs.devtools.client.browser.match_paths(node_44289.getAttribute("href"),path);
if(cljs.core.truth_(path_match_44290)){
var new_link_44292 = (function (){var G__43986 = node_44289.cloneNode(true);
G__43986.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_44290),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__43986;
})();
(node_44289.shadow$old = true);

(new_link_44292.onload = ((function (seq__43888_44232,chunk__43892_44233,count__43893_44234,i__43894_44235,seq__43656,chunk__43659,count__43660,i__43661,new_link_44292,path_match_44290,node_44289,seq__43888_44283__$1,temp__5804__auto___44282,path,map__43655,map__43655__$1,msg,updates,reload_info){
return (function (e){
var seq__43988_44293 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__43990_44294 = null;
var count__43991_44295 = (0);
var i__43992_44296 = (0);
while(true){
if((i__43992_44296 < count__43991_44295)){
var map__44000_44297 = chunk__43990_44294.cljs$core$IIndexed$_nth$arity$2(null,i__43992_44296);
var map__44000_44298__$1 = cljs.core.__destructure_map(map__44000_44297);
var task_44299 = map__44000_44298__$1;
var fn_str_44300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44000_44298__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44000_44298__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44302 = goog.getObjectByName(fn_str_44300,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44301)].join(''));

(fn_obj_44302.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44302.cljs$core$IFn$_invoke$arity$2(path,new_link_44292) : fn_obj_44302.call(null,path,new_link_44292));


var G__44303 = seq__43988_44293;
var G__44304 = chunk__43990_44294;
var G__44305 = count__43991_44295;
var G__44306 = (i__43992_44296 + (1));
seq__43988_44293 = G__44303;
chunk__43990_44294 = G__44304;
count__43991_44295 = G__44305;
i__43992_44296 = G__44306;
continue;
} else {
var temp__5804__auto___44307__$1 = cljs.core.seq(seq__43988_44293);
if(temp__5804__auto___44307__$1){
var seq__43988_44308__$1 = temp__5804__auto___44307__$1;
if(cljs.core.chunked_seq_QMARK_(seq__43988_44308__$1)){
var c__5525__auto___44312 = cljs.core.chunk_first(seq__43988_44308__$1);
var G__44313 = cljs.core.chunk_rest(seq__43988_44308__$1);
var G__44314 = c__5525__auto___44312;
var G__44315 = cljs.core.count(c__5525__auto___44312);
var G__44316 = (0);
seq__43988_44293 = G__44313;
chunk__43990_44294 = G__44314;
count__43991_44295 = G__44315;
i__43992_44296 = G__44316;
continue;
} else {
var map__44001_44317 = cljs.core.first(seq__43988_44308__$1);
var map__44001_44318__$1 = cljs.core.__destructure_map(map__44001_44317);
var task_44319 = map__44001_44318__$1;
var fn_str_44320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44001_44318__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44001_44318__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44322 = goog.getObjectByName(fn_str_44320,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44321)].join(''));

(fn_obj_44322.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44322.cljs$core$IFn$_invoke$arity$2(path,new_link_44292) : fn_obj_44322.call(null,path,new_link_44292));


var G__44323 = cljs.core.next(seq__43988_44308__$1);
var G__44324 = null;
var G__44325 = (0);
var G__44326 = (0);
seq__43988_44293 = G__44323;
chunk__43990_44294 = G__44324;
count__43991_44295 = G__44325;
i__43992_44296 = G__44326;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_44289);
});})(seq__43888_44232,chunk__43892_44233,count__43893_44234,i__43894_44235,seq__43656,chunk__43659,count__43660,i__43661,new_link_44292,path_match_44290,node_44289,seq__43888_44283__$1,temp__5804__auto___44282,path,map__43655,map__43655__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_44290], 0));

goog.dom.insertSiblingAfter(new_link_44292,node_44289);


var G__44327 = cljs.core.next(seq__43888_44283__$1);
var G__44328 = null;
var G__44329 = (0);
var G__44330 = (0);
seq__43888_44232 = G__44327;
chunk__43892_44233 = G__44328;
count__43893_44234 = G__44329;
i__43894_44235 = G__44330;
continue;
} else {
var G__44331 = cljs.core.next(seq__43888_44283__$1);
var G__44332 = null;
var G__44333 = (0);
var G__44334 = (0);
seq__43888_44232 = G__44331;
chunk__43892_44233 = G__44332;
count__43893_44234 = G__44333;
i__43894_44235 = G__44334;
continue;
}
} else {
var G__44335 = cljs.core.next(seq__43888_44283__$1);
var G__44336 = null;
var G__44337 = (0);
var G__44338 = (0);
seq__43888_44232 = G__44335;
chunk__43892_44233 = G__44336;
count__43893_44234 = G__44337;
i__43894_44235 = G__44338;
continue;
}
}
} else {
}
}
break;
}


var G__44339 = seq__43656;
var G__44340 = chunk__43659;
var G__44341 = count__43660;
var G__44342 = (i__43661 + (1));
seq__43656 = G__44339;
chunk__43659 = G__44340;
count__43660 = G__44341;
i__43661 = G__44342;
continue;
} else {
var G__44343 = seq__43656;
var G__44344 = chunk__43659;
var G__44345 = count__43660;
var G__44346 = (i__43661 + (1));
seq__43656 = G__44343;
chunk__43659 = G__44344;
count__43660 = G__44345;
i__43661 = G__44346;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__43656);
if(temp__5804__auto__){
var seq__43656__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43656__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__43656__$1);
var G__44347 = cljs.core.chunk_rest(seq__43656__$1);
var G__44348 = c__5525__auto__;
var G__44349 = cljs.core.count(c__5525__auto__);
var G__44350 = (0);
seq__43656 = G__44347;
chunk__43659 = G__44348;
count__43660 = G__44349;
i__43661 = G__44350;
continue;
} else {
var path = cljs.core.first(seq__43656__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__44002_44351 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__44006_44352 = null;
var count__44007_44353 = (0);
var i__44008_44354 = (0);
while(true){
if((i__44008_44354 < count__44007_44353)){
var node_44355 = chunk__44006_44352.cljs$core$IIndexed$_nth$arity$2(null,i__44008_44354);
if(cljs.core.not(node_44355.shadow$old)){
var path_match_44356 = shadow.cljs.devtools.client.browser.match_paths(node_44355.getAttribute("href"),path);
if(cljs.core.truth_(path_match_44356)){
var new_link_44357 = (function (){var G__44034 = node_44355.cloneNode(true);
G__44034.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_44356),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44034;
})();
(node_44355.shadow$old = true);

(new_link_44357.onload = ((function (seq__44002_44351,chunk__44006_44352,count__44007_44353,i__44008_44354,seq__43656,chunk__43659,count__43660,i__43661,new_link_44357,path_match_44356,node_44355,path,seq__43656__$1,temp__5804__auto__,map__43655,map__43655__$1,msg,updates,reload_info){
return (function (e){
var seq__44035_44359 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__44037_44360 = null;
var count__44038_44361 = (0);
var i__44039_44362 = (0);
while(true){
if((i__44039_44362 < count__44038_44361)){
var map__44043_44363 = chunk__44037_44360.cljs$core$IIndexed$_nth$arity$2(null,i__44039_44362);
var map__44043_44364__$1 = cljs.core.__destructure_map(map__44043_44363);
var task_44365 = map__44043_44364__$1;
var fn_str_44366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44043_44364__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44043_44364__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44370 = goog.getObjectByName(fn_str_44366,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44367)].join(''));

(fn_obj_44370.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44370.cljs$core$IFn$_invoke$arity$2(path,new_link_44357) : fn_obj_44370.call(null,path,new_link_44357));


var G__44371 = seq__44035_44359;
var G__44372 = chunk__44037_44360;
var G__44373 = count__44038_44361;
var G__44374 = (i__44039_44362 + (1));
seq__44035_44359 = G__44371;
chunk__44037_44360 = G__44372;
count__44038_44361 = G__44373;
i__44039_44362 = G__44374;
continue;
} else {
var temp__5804__auto___44375__$1 = cljs.core.seq(seq__44035_44359);
if(temp__5804__auto___44375__$1){
var seq__44035_44376__$1 = temp__5804__auto___44375__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44035_44376__$1)){
var c__5525__auto___44377 = cljs.core.chunk_first(seq__44035_44376__$1);
var G__44378 = cljs.core.chunk_rest(seq__44035_44376__$1);
var G__44379 = c__5525__auto___44377;
var G__44380 = cljs.core.count(c__5525__auto___44377);
var G__44381 = (0);
seq__44035_44359 = G__44378;
chunk__44037_44360 = G__44379;
count__44038_44361 = G__44380;
i__44039_44362 = G__44381;
continue;
} else {
var map__44044_44382 = cljs.core.first(seq__44035_44376__$1);
var map__44044_44383__$1 = cljs.core.__destructure_map(map__44044_44382);
var task_44384 = map__44044_44383__$1;
var fn_str_44385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44044_44383__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44044_44383__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44387 = goog.getObjectByName(fn_str_44385,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44386)].join(''));

(fn_obj_44387.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44387.cljs$core$IFn$_invoke$arity$2(path,new_link_44357) : fn_obj_44387.call(null,path,new_link_44357));


var G__44388 = cljs.core.next(seq__44035_44376__$1);
var G__44389 = null;
var G__44390 = (0);
var G__44391 = (0);
seq__44035_44359 = G__44388;
chunk__44037_44360 = G__44389;
count__44038_44361 = G__44390;
i__44039_44362 = G__44391;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_44355);
});})(seq__44002_44351,chunk__44006_44352,count__44007_44353,i__44008_44354,seq__43656,chunk__43659,count__43660,i__43661,new_link_44357,path_match_44356,node_44355,path,seq__43656__$1,temp__5804__auto__,map__43655,map__43655__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_44356], 0));

goog.dom.insertSiblingAfter(new_link_44357,node_44355);


var G__44392 = seq__44002_44351;
var G__44393 = chunk__44006_44352;
var G__44394 = count__44007_44353;
var G__44395 = (i__44008_44354 + (1));
seq__44002_44351 = G__44392;
chunk__44006_44352 = G__44393;
count__44007_44353 = G__44394;
i__44008_44354 = G__44395;
continue;
} else {
var G__44396 = seq__44002_44351;
var G__44397 = chunk__44006_44352;
var G__44398 = count__44007_44353;
var G__44399 = (i__44008_44354 + (1));
seq__44002_44351 = G__44396;
chunk__44006_44352 = G__44397;
count__44007_44353 = G__44398;
i__44008_44354 = G__44399;
continue;
}
} else {
var G__44400 = seq__44002_44351;
var G__44401 = chunk__44006_44352;
var G__44402 = count__44007_44353;
var G__44403 = (i__44008_44354 + (1));
seq__44002_44351 = G__44400;
chunk__44006_44352 = G__44401;
count__44007_44353 = G__44402;
i__44008_44354 = G__44403;
continue;
}
} else {
var temp__5804__auto___44404__$1 = cljs.core.seq(seq__44002_44351);
if(temp__5804__auto___44404__$1){
var seq__44002_44405__$1 = temp__5804__auto___44404__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44002_44405__$1)){
var c__5525__auto___44406 = cljs.core.chunk_first(seq__44002_44405__$1);
var G__44407 = cljs.core.chunk_rest(seq__44002_44405__$1);
var G__44408 = c__5525__auto___44406;
var G__44409 = cljs.core.count(c__5525__auto___44406);
var G__44410 = (0);
seq__44002_44351 = G__44407;
chunk__44006_44352 = G__44408;
count__44007_44353 = G__44409;
i__44008_44354 = G__44410;
continue;
} else {
var node_44411 = cljs.core.first(seq__44002_44405__$1);
if(cljs.core.not(node_44411.shadow$old)){
var path_match_44412 = shadow.cljs.devtools.client.browser.match_paths(node_44411.getAttribute("href"),path);
if(cljs.core.truth_(path_match_44412)){
var new_link_44413 = (function (){var G__44045 = node_44411.cloneNode(true);
G__44045.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_44412),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__44045;
})();
(node_44411.shadow$old = true);

(new_link_44413.onload = ((function (seq__44002_44351,chunk__44006_44352,count__44007_44353,i__44008_44354,seq__43656,chunk__43659,count__43660,i__43661,new_link_44413,path_match_44412,node_44411,seq__44002_44405__$1,temp__5804__auto___44404__$1,path,seq__43656__$1,temp__5804__auto__,map__43655,map__43655__$1,msg,updates,reload_info){
return (function (e){
var seq__44046_44414 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__44048_44415 = null;
var count__44049_44416 = (0);
var i__44050_44417 = (0);
while(true){
if((i__44050_44417 < count__44049_44416)){
var map__44057_44418 = chunk__44048_44415.cljs$core$IIndexed$_nth$arity$2(null,i__44050_44417);
var map__44057_44419__$1 = cljs.core.__destructure_map(map__44057_44418);
var task_44420 = map__44057_44419__$1;
var fn_str_44421 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44057_44419__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44057_44419__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44423 = goog.getObjectByName(fn_str_44421,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44422)].join(''));

(fn_obj_44423.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44423.cljs$core$IFn$_invoke$arity$2(path,new_link_44413) : fn_obj_44423.call(null,path,new_link_44413));


var G__44424 = seq__44046_44414;
var G__44425 = chunk__44048_44415;
var G__44426 = count__44049_44416;
var G__44427 = (i__44050_44417 + (1));
seq__44046_44414 = G__44424;
chunk__44048_44415 = G__44425;
count__44049_44416 = G__44426;
i__44050_44417 = G__44427;
continue;
} else {
var temp__5804__auto___44428__$2 = cljs.core.seq(seq__44046_44414);
if(temp__5804__auto___44428__$2){
var seq__44046_44429__$1 = temp__5804__auto___44428__$2;
if(cljs.core.chunked_seq_QMARK_(seq__44046_44429__$1)){
var c__5525__auto___44430 = cljs.core.chunk_first(seq__44046_44429__$1);
var G__44431 = cljs.core.chunk_rest(seq__44046_44429__$1);
var G__44432 = c__5525__auto___44430;
var G__44433 = cljs.core.count(c__5525__auto___44430);
var G__44434 = (0);
seq__44046_44414 = G__44431;
chunk__44048_44415 = G__44432;
count__44049_44416 = G__44433;
i__44050_44417 = G__44434;
continue;
} else {
var map__44061_44436 = cljs.core.first(seq__44046_44429__$1);
var map__44061_44437__$1 = cljs.core.__destructure_map(map__44061_44436);
var task_44438 = map__44061_44437__$1;
var fn_str_44439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44061_44437__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_44440 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44061_44437__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_44441 = goog.getObjectByName(fn_str_44439,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_44440)].join(''));

(fn_obj_44441.cljs$core$IFn$_invoke$arity$2 ? fn_obj_44441.cljs$core$IFn$_invoke$arity$2(path,new_link_44413) : fn_obj_44441.call(null,path,new_link_44413));


var G__44460 = cljs.core.next(seq__44046_44429__$1);
var G__44461 = null;
var G__44462 = (0);
var G__44463 = (0);
seq__44046_44414 = G__44460;
chunk__44048_44415 = G__44461;
count__44049_44416 = G__44462;
i__44050_44417 = G__44463;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_44411);
});})(seq__44002_44351,chunk__44006_44352,count__44007_44353,i__44008_44354,seq__43656,chunk__43659,count__43660,i__43661,new_link_44413,path_match_44412,node_44411,seq__44002_44405__$1,temp__5804__auto___44404__$1,path,seq__43656__$1,temp__5804__auto__,map__43655,map__43655__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_44412], 0));

goog.dom.insertSiblingAfter(new_link_44413,node_44411);


var G__44464 = cljs.core.next(seq__44002_44405__$1);
var G__44465 = null;
var G__44466 = (0);
var G__44467 = (0);
seq__44002_44351 = G__44464;
chunk__44006_44352 = G__44465;
count__44007_44353 = G__44466;
i__44008_44354 = G__44467;
continue;
} else {
var G__44468 = cljs.core.next(seq__44002_44405__$1);
var G__44469 = null;
var G__44470 = (0);
var G__44471 = (0);
seq__44002_44351 = G__44468;
chunk__44006_44352 = G__44469;
count__44007_44353 = G__44470;
i__44008_44354 = G__44471;
continue;
}
} else {
var G__44472 = cljs.core.next(seq__44002_44405__$1);
var G__44473 = null;
var G__44474 = (0);
var G__44475 = (0);
seq__44002_44351 = G__44472;
chunk__44006_44352 = G__44473;
count__44007_44353 = G__44474;
i__44008_44354 = G__44475;
continue;
}
}
} else {
}
}
break;
}


var G__44476 = cljs.core.next(seq__43656__$1);
var G__44477 = null;
var G__44478 = (0);
var G__44479 = (0);
seq__43656 = G__44476;
chunk__43659 = G__44477;
count__43660 = G__44478;
i__43661 = G__44479;
continue;
} else {
var G__44480 = cljs.core.next(seq__43656__$1);
var G__44481 = null;
var G__44482 = (0);
var G__44483 = (0);
seq__43656 = G__44480;
chunk__43659 = G__44481;
count__43660 = G__44482;
i__43661 = G__44483;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__44102){
var map__44103 = p__44102;
var map__44103__$1 = cljs.core.__destructure_map(map__44103);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44103__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__44115,done,error){
var map__44116 = p__44115;
var map__44116__$1 = cljs.core.__destructure_map(map__44116);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44116__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__44118,done,error){
var map__44120 = p__44118;
var map__44120__$1 = cljs.core.__destructure_map(map__44120);
var msg = map__44120__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44120__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44120__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44120__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__44125){
var map__44126 = p__44125;
var map__44126__$1 = cljs.core.__destructure_map(map__44126);
var src = map__44126__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44126__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__44129 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__44129) : done.call(null,G__44129));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__44134){
var map__44137 = p__44134;
var map__44137__$1 = cljs.core.__destructure_map(map__44137);
var msg__$1 = map__44137__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44137__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e44142){var ex = e44142;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__44143){
var map__44144 = p__44143;
var map__44144__$1 = cljs.core.__destructure_map(map__44144);
var env = map__44144__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44144__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__44154){
var map__44155 = p__44154;
var map__44155__$1 = cljs.core.__destructure_map(map__44155);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44155__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44155__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__44156){
var map__44157 = p__44156;
var map__44157__$1 = cljs.core.__destructure_map(map__44157);
var svc = map__44157__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44157__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
