var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./devtools.core.js");
require("./shadow.cljs.devtools.client.browser.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.util.devtools.js");

goog.provide('metabase.util.devtools');
devtools.core.set_pref_BANG_(new cljs.core.Keyword(null,"disable-advanced-mode-check","disable-advanced-mode-check",-968346539),true);

devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0();

console.log("CLJS Devtools loaded");

if((typeof metabase !== 'undefined') && (typeof metabase.util !== 'undefined') && (typeof metabase.util.devtools !== 'undefined') && (typeof metabase.util.devtools.unload_handler_set_QMARK_ !== 'undefined')){
} else {
metabase.util.devtools.unload_handler_set_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}

metabase.util.devtools.on_reload = (function metabase$util$devtools$on_reload(){
if(cljs.core.compare_and_set_BANG_(metabase.util.devtools.unload_handler_set_QMARK_,false,true)){
console.log("CLJS code hot loaded; setting up webpack invalidation on unload");

return window.addEventListener("beforeunload",(function (_event){
console.log("invalidating webpack build");

fetch("http://localhost:8080/webpack-dev-server/invalidate");

var target = (performance.now() + (500));
while(true){
if((performance.now() < target)){
continue;
} else {
return null;
}
break;
}
}));
} else {
return null;
}
});

//# sourceMappingURL=metabase.util.devtools.js.map
