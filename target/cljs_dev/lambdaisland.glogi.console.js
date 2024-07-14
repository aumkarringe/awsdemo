var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./lambdaisland.glogi.js");
require("./lambdaisland.glogi.print.js");
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

$CLJS.SHADOW_ENV.setLoaded("lambdaisland.glogi.console.js");

goog.provide('lambdaisland.glogi.console');
goog.scope(function(){
  lambdaisland.glogi.console.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * @define {string}
 */
lambdaisland.glogi.console.colorize = goog.define("lambdaisland.glogi.console.colorize","auto");
lambdaisland.glogi.console.log_method = (function lambdaisland$glogi$console$log_method(level){
var pred__58429 = (function (p1__58428_SHARP_,p2__58426_SHARP_){
return (p2__58426_SHARP_ >= p1__58428_SHARP_);
});
var expr__58430 = lambdaisland.glogi.level_value(level);
if(pred__58429(lambdaisland.glogi.level_value(new cljs.core.Keyword(null,"severe","severe",-1364500238)),expr__58430)){
return "error";
} else {
if(pred__58429(lambdaisland.glogi.level_value(new cljs.core.Keyword(null,"warning","warning",-1685650671)),expr__58430)){
return "warn";
} else {
if(pred__58429(lambdaisland.glogi.level_value(new cljs.core.Keyword(null,"info","info",-317069002)),expr__58430)){
return "info";
} else {
if(pred__58429(lambdaisland.glogi.level_value(new cljs.core.Keyword(null,"config","config",994861415)),expr__58430)){
return "log";
} else {
return "log";
}
}
}
}
});
lambdaisland.glogi.console.format_raw = (function lambdaisland$glogi$console$format_raw(p__58432){
var map__58433 = p__58432;
var map__58433__$1 = cljs.core.__destructure_map(map__58433);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58433__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var logger_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58433__$1,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58433__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58433__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(logger_name),"]"].join(''),message], null);
});
lambdaisland.glogi.console.format_css = (function lambdaisland$glogi$console$format_css(p__58437){
var map__58438 = p__58437;
var map__58438__$1 = cljs.core.__destructure_map(map__58438);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58438__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var logger_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58438__$1,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58438__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58438__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
return lambdaisland.glogi.print.format(level,logger_name,message);
});
lambdaisland.glogi.console.format_plain = (function lambdaisland$glogi$console$format_plain(p__58439){
var map__58440 = p__58439;
var map__58440__$1 = cljs.core.__destructure_map(map__58440);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58440__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var logger_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58440__$1,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58440__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58440__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(logger_name),"]"].join(''),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([message], 0))], null);
});
lambdaisland.glogi.console.make_console_log = (function lambdaisland$glogi$console$make_console_log(format){
return (function (p__58441){
var map__58444 = p__58441;
var map__58444__$1 = cljs.core.__destructure_map(map__58444);
var record = map__58444__$1;
var logger_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58444__$1,new cljs.core.Keyword(null,"logger-name","logger-name",-1988126927));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58444__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58444__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var method_name = lambdaisland.glogi.console.log_method(level);
var method = (function (){var or__5002__auto__ = lambdaisland.glogi.console.goog$module$goog$object.get(console,method_name);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return console.log;
}
})();
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(method,(format.cljs$core$IFn$_invoke$arity$1 ? format.cljs$core$IFn$_invoke$arity$1(record) : format.call(null,record)));

if(cljs.core.truth_(exception)){
var G__58447 = ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(logger_name),"]"].join('');
var G__58448 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(exception);
var G__58449 = "\n";
var G__58450 = exception.stack;
return (method.cljs$core$IFn$_invoke$arity$4 ? method.cljs$core$IFn$_invoke$arity$4(G__58447,G__58448,G__58449,G__58450) : method.call(null,G__58447,G__58448,G__58449,G__58450));
} else {
return null;
}
});
});
if((typeof lambdaisland !== 'undefined') && (typeof lambdaisland.glogi !== 'undefined') && (typeof lambdaisland.glogi.console !== 'undefined') && (typeof lambdaisland.glogi.console.console_log_raw !== 'undefined')){
} else {
lambdaisland.glogi.console.console_log_raw = lambdaisland.glogi.console.make_console_log(lambdaisland.glogi.console.format_raw);
}
if((typeof lambdaisland !== 'undefined') && (typeof lambdaisland.glogi !== 'undefined') && (typeof lambdaisland.glogi.console !== 'undefined') && (typeof lambdaisland.glogi.console.console_log_css !== 'undefined')){
} else {
lambdaisland.glogi.console.console_log_css = lambdaisland.glogi.console.make_console_log(lambdaisland.glogi.console.format_css);
}
if((typeof lambdaisland !== 'undefined') && (typeof lambdaisland.glogi !== 'undefined') && (typeof lambdaisland.glogi.console !== 'undefined') && (typeof lambdaisland.glogi.console.console_log_plain !== 'undefined')){
} else {
lambdaisland.glogi.console.console_log_plain = lambdaisland.glogi.console.make_console_log(lambdaisland.glogi.console.format_plain);
}
if((typeof lambdaisland !== 'undefined') && (typeof lambdaisland.glogi !== 'undefined') && (typeof lambdaisland.glogi.console !== 'undefined') && (typeof lambdaisland.glogi.console.format !== 'undefined')){
} else {
lambdaisland.glogi.console.format = lambdaisland.glogi.console.format_plain;
}
if((typeof lambdaisland !== 'undefined') && (typeof lambdaisland.glogi !== 'undefined') && (typeof lambdaisland.glogi.console !== 'undefined') && (typeof lambdaisland.glogi.console.console_log !== 'undefined')){
} else {
lambdaisland.glogi.console.console_log = lambdaisland.glogi.console.console_log_plain;
}
lambdaisland.glogi.console.devtools_installed_QMARK_ = (function lambdaisland$glogi$console$devtools_installed_QMARK_(){
var and__5000__auto__ = (typeof devtools !== 'undefined') && (typeof devtools.core !== 'undefined') && (typeof devtools.core.installed_QMARK_ !== 'undefined');
if(and__5000__auto__){
return devtools.core.installed_QMARK_();
} else {
return and__5000__auto__;
}
});
lambdaisland.glogi.console.browser_QMARK_ = (function lambdaisland$glogi$console$browser_QMARK_(){
return (typeof window !== 'undefined');
});
lambdaisland.glogi.console.ie_QMARK_ = (function lambdaisland$glogi$console$ie_QMARK_(){
return ((lambdaisland.glogi.console.browser_QMARK_()) && ((((typeof window !== 'undefined') && (typeof window.navigator !== 'undefined')) && ((((typeof window !== 'undefined') && (typeof window.navigator !== 'undefined') && (typeof window.navigator.userAgent !== 'undefined')) && ((((window.navigator.userAgent.indexOf("MSIE") > (-1))) || ((window.navigator.userAgent.indexOf("Trident") > (-1))))))))));
});
lambdaisland.glogi.console.select_handler = (function lambdaisland$glogi$console$select_handler(){
var G__58456 = lambdaisland.glogi.console.colorize;
switch (G__58456) {
case "auto":
if(cljs.core.truth_(lambdaisland.glogi.console.devtools_installed_QMARK_())){
return lambdaisland.glogi.console.console_log_raw;
} else {
if(((lambdaisland.glogi.console.browser_QMARK_()) && ((!(lambdaisland.glogi.console.ie_QMARK_()))))){
return lambdaisland.glogi.console.console_log_css;
} else {
return lambdaisland.glogi.console.console_log_plain;

}
}

break;
case "raw":
return lambdaisland.glogi.console.console_log_raw;

break;
case "true":
return lambdaisland.glogi.console.console_log_css;

break;
case "false":
return lambdaisland.glogi.console.console_log_plain;

break;
default:
throw (new Error(["No matching clause: ",G__58456].join('')));

}
});
lambdaisland.glogi.console.install_BANG_ = (function lambdaisland$glogi$console$install_BANG_(){
var temp__5804__auto___58466 = goog.debug.Console.instance;
if(cljs.core.truth_(temp__5804__auto___58466)){
var instance_58467 = temp__5804__auto___58466;
instance_58467.setCapturing(false);
} else {
}

var G__58458 = lambdaisland.glogi.console.select_handler();
return (lambdaisland.glogi.add_handler_once.cljs$core$IFn$_invoke$arity$1 ? lambdaisland.glogi.add_handler_once.cljs$core$IFn$_invoke$arity$1(G__58458) : lambdaisland.glogi.add_handler_once.call(null,G__58458));
});

//# sourceMappingURL=lambdaisland.glogi.console.js.map
