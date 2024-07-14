var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("camel_snake_kebab.internals.alter_name.js");

goog.provide('camel_snake_kebab.internals.alter_name');

/**
 * @interface
 */
camel_snake_kebab.internals.alter_name.AlterName = function(){};

var camel_snake_kebab$internals$alter_name$AlterName$alter_name$dyn_48612 = (function (this$,f){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (camel_snake_kebab.internals.alter_name.alter_name[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__5351__auto__.call(null,this$,f));
} else {
var m__5349__auto__ = (camel_snake_kebab.internals.alter_name.alter_name["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__5349__auto__.call(null,this$,f));
} else {
throw cljs.core.missing_protocol("AlterName.alter-name",this$);
}
}
});
/**
 * Alters the name of this with f.
 */
camel_snake_kebab.internals.alter_name.alter_name = (function camel_snake_kebab$internals$alter_name$alter_name(this$,f){
if((((!((this$ == null)))) && ((!((this$.camel_snake_kebab$internals$alter_name$AlterName$alter_name$arity$2 == null)))))){
return this$.camel_snake_kebab$internals$alter_name$AlterName$alter_name$arity$2(this$,f);
} else {
return camel_snake_kebab$internals$alter_name$AlterName$alter_name$dyn_48612(this$,f);
}
});

(camel_snake_kebab.internals.alter_name.AlterName["string"] = true);

(camel_snake_kebab.internals.alter_name.alter_name["string"] = (function (this$,f){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(this$) : f.call(null,this$));
}));

(cljs.core.Keyword.prototype.camel_snake_kebab$internals$alter_name$AlterName$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.camel_snake_kebab$internals$alter_name$AlterName$alter_name$arity$2 = (function (this$,f){
var this$__$1 = this;
if(cljs.core.truth_(cljs.core.namespace(this$__$1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Namespaced keywords are not supported",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),this$__$1], null));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var G__48606 = cljs.core.name(this$__$1);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__48606) : f.call(null,G__48606));
})());
}
}));

(cljs.core.Symbol.prototype.camel_snake_kebab$internals$alter_name$AlterName$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.camel_snake_kebab$internals$alter_name$AlterName$alter_name$arity$2 = (function (this$,f){
var this$__$1 = this;
if(cljs.core.truth_(cljs.core.namespace(this$__$1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Namespaced symbols are not supported",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),this$__$1], null));
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__48608 = cljs.core.name(this$__$1);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__48608) : f.call(null,G__48608));
})());
}
}));

//# sourceMappingURL=camel_snake_kebab.internals.alter_name.js.map
