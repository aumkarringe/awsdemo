var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./malli.core.js");
require("./malli.destructure.js");
require("./malli.error.js");
require("./malli.util.js");
require("./metabase.shared.util.i18n.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.util.malli.js");

goog.provide('metabase.util.malli');
/**
 * Pass into mu/humanize to include the value received in the error message.
 */
metabase.util.malli.humanize_include_value = (function metabase$util$malli$humanize_include_value(p__74685){
var map__74686 = p__74685;
var map__74686__$1 = cljs.core.__destructure_map(map__74686);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74686__$1,new cljs.core.Keyword(null,"value","value",305978217));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74686__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.shared.util.i18n.js_i18n("received")),": ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('');
});
/**
 * Explains a schema failure, and returns the offending value.
 */
metabase.util.malli.explain = (function metabase$util$malli$explain(schema,value){
return malli.error.humanize.cljs$core$IFn$_invoke$arity$2(malli.core.explain.cljs$core$IFn$_invoke$arity$2(schema,value),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap","wrap",851669987),metabase.util.malli.humanize_include_value], null));
});
metabase.util.malli.Schema = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),cljs.core.any_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"a malli schema"], null),malli.core.schema], null)], null);
/**
 * Schema for localized string.
 */
metabase.util.malli.localized_string_schema = new cljs.core.Keyword(null,"string","string",-1989541586);
/**
 * Inputs: [mschema props]
 *   Return: :any
 *        
 * 
 *   Update a malli schema with an arbitrary map of properties
 */
metabase.util.malli.with$ = (function metabase$util$malli$with(mschema,props){
return malli.util.update_properties.cljs$core$IFn$_invoke$arity$variadic(malli.core.schema.cljs$core$IFn$_invoke$arity$1(mschema),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0));
});
/**
 * Inputs: ([mschema :- Schema error-message :- localized-string-schema]
 *         [mschema :- :any description-message :- localized-string-schema specific-error-message :- localized-string-schema])
 *   Return: :any
 *        
 * 
 *   Update a malli schema to have a :description (used by umd/describe, which is used by api docs),
 *   and a :error/fn (used by me/humanize, which is used by defendpoint).
 *   They don't have to be the same, but usually are.
 * 
 *   (with-api-error-message
 *  [:string {:min 1}]
 *  (deferred-tru "Must be a string with at least 1 character representing a User ID."))
 */
metabase.util.malli.with_api_error_message = (function() {
var metabase$util$malli$with_api_error_message = null;
var metabase$util$malli$with_api_error_message__2 = (function (mschema,error_message){
return (metabase.util.malli.with_api_error_message.cljs$core$IFn$_invoke$arity$3 ? metabase.util.malli.with_api_error_message.cljs$core$IFn$_invoke$arity$3(mschema,error_message,error_message) : metabase.util.malli.with_api_error_message.call(null,mschema,error_message,error_message));
});
var metabase$util$malli$with_api_error_message__3 = (function (mschema,description_message,specific_error_message){
return malli.util.update_properties.cljs$core$IFn$_invoke$arity$variadic(malli.core.schema.cljs$core$IFn$_invoke$arity$1(mschema),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"description","description",-1428560544),description_message,new cljs.core.Keyword("error","fn","error/fn",-1263293860),cljs.core.constantly(specific_error_message)], 0));
});
metabase$util$malli$with_api_error_message = function(mschema,description_message,specific_error_message){
switch(arguments.length){
case 2:
return metabase$util$malli$with_api_error_message__2.call(this,mschema,description_message);
case 3:
return metabase$util$malli$with_api_error_message__3.call(this,mschema,description_message,specific_error_message);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$util$malli$with_api_error_message.cljs$core$IFn$_invoke$arity$2 = metabase$util$malli$with_api_error_message__2;
metabase$util$malli$with_api_error_message.cljs$core$IFn$_invoke$arity$3 = metabase$util$malli$with_api_error_message__3;
return metabase$util$malli$with_api_error_message;
})()
;
/**
 * Returns a new schema that is the same as map-schema, but with the key k associated with the value v.
 * If kvs are provided, they are also associated with the schema.
 */
metabase.util.malli.map_schema_assoc = (function metabase$util$malli$map_schema_assoc(var_args){
var args__5732__auto__ = [];
var len__5726__auto___74726 = arguments.length;
var i__5727__auto___74727 = (0);
while(true){
if((i__5727__auto___74727 < len__5726__auto___74726)){
args__5732__auto__.push((arguments[i__5727__auto___74727]));

var G__74728 = (i__5727__auto___74727 + (1));
i__5727__auto___74727 = G__74728;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return metabase.util.malli.map_schema_assoc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(metabase.util.malli.map_schema_assoc.cljs$core$IFn$_invoke$arity$variadic = (function (map_schema,kvs){
while(true){
if(cljs.core.truth_(kvs)){
if(cljs.core.next(kvs)){
var key = cljs.core.first(kvs);
var val = cljs.core.first(cljs.core.next(kvs));
var ret = malli.util.assoc.cljs$core$IFn$_invoke$arity$3(map_schema,key,val);
var G__74731 = ret;
var G__74732 = cljs.core.nnext(kvs);
map_schema = G__74731;
kvs = G__74732;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("map-schema-assoc expects even number of arguments after schema-map, found odd number",cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return map_schema;
}
break;
}
}));

(metabase.util.malli.map_schema_assoc.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(metabase.util.malli.map_schema_assoc.cljs$lang$applyTo = (function (seq74719){
var G__74720 = cljs.core.first(seq74719);
var seq74719__$1 = cljs.core.next(seq74719);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74720,seq74719__$1);
}));


//# sourceMappingURL=metabase.util.malli.js.map
