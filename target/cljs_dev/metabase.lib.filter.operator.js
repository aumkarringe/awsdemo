var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.schema.filter.js");
require("./metabase.lib.schema.metadata.js");
require("./metabase.lib.types.isa.js");
require("./metabase.shared.util.i18n.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.filter.operator.js");

goog.provide('metabase.lib.filter.operator');
/**
 * Inputs: ([tag]
 *         [tag display-name-style])
 *   Return: :metabase.lib.schema.filter/operator
 *        
 * 
 *   Get a filter operator definition for the MBQL filter with `tag`, e.g. `:=`. In some cases various tags have alternate
 *   display names used for different situations e.g. for numbers vs temporal values; pass in the
 *   `display-name-style` to choose a non-default display-name.
 */
metabase.lib.filter.operator.operator_def = (function() {
var metabase$lib$filter$operator$operator_def = null;
var metabase$lib$filter$operator$operator_def__1 = (function (tag){
return (metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"default","default",-1987822328)) : metabase.lib.filter.operator.operator_def.call(null,tag,new cljs.core.Keyword(null,"default","default",-1987822328)));
});
var metabase$lib$filter$operator$operator_def__2 = (function (tag,display_name_style){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("operator","filter","operator/filter",-1518842858),new cljs.core.Keyword(null,"short","short",1928760516),tag,new cljs.core.Keyword(null,"display-name-variant","display-name-variant",-1831788853),display_name_style], null);
});
metabase$lib$filter$operator$operator_def = function(tag,display_name_style){
switch(arguments.length){
case 1:
return metabase$lib$filter$operator$operator_def__1.call(this,tag);
case 2:
return metabase$lib$filter$operator$operator_def__2.call(this,tag,display_name_style);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$filter$operator$operator_def.cljs$core$IFn$_invoke$arity$1 = metabase$lib$filter$operator$operator_def__1;
metabase$lib$filter$operator$operator_def.cljs$core$IFn$_invoke$arity$2 = metabase$lib$filter$operator$operator_def__2;
return metabase$lib$filter$operator$operator_def;
})()
;
metabase.lib.filter.operator.numeric_key_operators = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"=","=",1152933628)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"!=","!=",-1841737356)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,">",">",-555517146)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"<","<",-646864291)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"between","between",1131099276)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,">=",">=",-623615505)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"<=","<=",-395636158)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"is-null","is-null",-1997050930),new cljs.core.Keyword(null,"is-empty","is-empty",-1040302908)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"not-null","not-null",-1326718535),new cljs.core.Keyword(null,"not-empty","not-empty",388922063))], null);
metabase.lib.filter.operator.location_operators = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"=","=",1152933628)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"!=","!=",-1841737356)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"is-empty","is-empty",-1040302908)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"not-empty","not-empty",388922063)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"contains","contains",676899812)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"does-not-contain","does-not-contain",-274946853)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"starts-with","starts-with",366503009)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ends-with","ends-with",-456791011))], null);
metabase.lib.filter.operator.temporal_operators = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"!=","!=",-1841737356),new cljs.core.Keyword(null,"excludes","excludes",-1791725945)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"=","=",1152933628)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<","<",-646864291),new cljs.core.Keyword(null,"before","before",-1633692388)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,"after","after",594996914)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"between","between",1131099276)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"is-null","is-null",-1997050930),new cljs.core.Keyword(null,"is-empty","is-empty",-1040302908)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"not-null","not-null",-1326718535),new cljs.core.Keyword(null,"not-empty","not-empty",388922063))], null);
metabase.lib.filter.operator.coordinate_operators = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"=","=",1152933628)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"!=","!=",-1841737356)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"inside","inside",1972503011)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,">",">",-555517146)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"<","<",-646864291)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"between","between",1131099276)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,">=",">=",-623615505)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"<=","<=",-395636158))], null);
metabase.lib.filter.operator.number_operators = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"equal-to","equal-to",608296653)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"!=","!=",-1841737356),new cljs.core.Keyword(null,"not-equal-to","not-equal-to",-343181655)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,">",">",-555517146)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"<","<",-646864291)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"between","between",1131099276)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,">=",">=",-623615505)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"<=","<=",-395636158)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"is-null","is-null",-1997050930),new cljs.core.Keyword(null,"is-empty","is-empty",-1040302908)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"not-null","not-null",-1326718535),new cljs.core.Keyword(null,"not-empty","not-empty",388922063))], null);
metabase.lib.filter.operator.text_operators = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"=","=",1152933628)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"!=","!=",-1841737356)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"contains","contains",676899812)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"does-not-contain","does-not-contain",-274946853)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"is-null","is-null",-1997050930)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"not-null","not-null",-1326718535)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"is-empty","is-empty",-1040302908)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"not-empty","not-empty",388922063)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"starts-with","starts-with",366503009)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ends-with","ends-with",-456791011))], null);
metabase.lib.filter.operator.text_like_operators = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"=","=",1152933628)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"!=","!=",-1841737356)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"is-null","is-null",-1997050930)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"not-null","not-null",-1326718535)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"is-empty","is-empty",-1040302908)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"not-empty","not-empty",388922063))], null);
metabase.lib.filter.operator.boolean_operators = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"=","=",1152933628)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"is-null","is-null",-1997050930),new cljs.core.Keyword(null,"is-empty","is-empty",-1040302908)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"not-null","not-null",-1326718535),new cljs.core.Keyword(null,"not-empty","not-empty",388922063))], null);
metabase.lib.filter.operator.default_operators = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"=","=",1152933628)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"!=","!=",-1841737356)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"is-null","is-null",-1997050930)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"not-null","not-null",-1326718535))], null);
/**
 * Operators that should be listed as options in join conditions.
 */
metabase.lib.filter.operator.join_operators = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"=","=",1152933628)),new cljs.core.Keyword(null,"default","default",-1987822328),true),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,">",">",-555517146)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"<","<",-646864291)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,">=",">=",-623615505)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"<=","<=",-395636158)),metabase.lib.filter.operator.operator_def.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"!=","!=",-1841737356))], null);
metabase.lib.filter.operator.key_operators_for = (function metabase$lib$filter$operator$key_operators_for(column){
var pred__77598 = metabase.lib.types.isa.field_type_QMARK_;
var expr__77599 = column;
if(cljs.core.truth_((pred__77598.cljs$core$IFn$_invoke$arity$2 ? pred__77598.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metabase.lib.types.constants","string","metabase.lib.types.constants/string",-2076057579),expr__77599) : pred__77598.call(null,new cljs.core.Keyword("metabase.lib.types.constants","string","metabase.lib.types.constants/string",-2076057579),expr__77599)))){
return metabase.lib.filter.operator.text_operators;
} else {
if(cljs.core.truth_((pred__77598.cljs$core$IFn$_invoke$arity$2 ? pred__77598.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metabase.lib.types.constants","string_like","metabase.lib.types.constants/string_like",-1907279613),expr__77599) : pred__77598.call(null,new cljs.core.Keyword("metabase.lib.types.constants","string_like","metabase.lib.types.constants/string_like",-1907279613),expr__77599)))){
return metabase.lib.filter.operator.text_like_operators;
} else {
return metabase.lib.filter.operator.numeric_key_operators;
}
}
});
/**
 * Inputs: [column :- :metabase.lib.schema.metadata/column]
 *   Return: [:sequential :metabase.lib.schema.filter/operator]
 *        
 * 
 *   The list of available filter operators.
 * The order of operators is relevant for the front end.
 * There are slight differences between names and ordering for the different base types.
 */
metabase.lib.filter.operator.filter_operators = (function metabase$lib$filter$operator$filter_operators(column){
var pred__77601 = metabase.lib.types.isa.field_type_QMARK_;
var expr__77602 = column;
if(cljs.core.truth_((pred__77601.cljs$core$IFn$_invoke$arity$2 ? pred__77601.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metabase.lib.types.constants","primary_key","metabase.lib.types.constants/primary_key",1915474107),expr__77602) : pred__77601.call(null,new cljs.core.Keyword("metabase.lib.types.constants","primary_key","metabase.lib.types.constants/primary_key",1915474107),expr__77602)))){
return metabase.lib.filter.operator.key_operators_for(column);
} else {
if(cljs.core.truth_((pred__77601.cljs$core$IFn$_invoke$arity$2 ? pred__77601.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metabase.lib.types.constants","foreign_key","metabase.lib.types.constants/foreign_key",-1061052182),expr__77602) : pred__77601.call(null,new cljs.core.Keyword("metabase.lib.types.constants","foreign_key","metabase.lib.types.constants/foreign_key",-1061052182),expr__77602)))){
return metabase.lib.filter.operator.key_operators_for(column);
} else {
if(cljs.core.truth_((pred__77601.cljs$core$IFn$_invoke$arity$2 ? pred__77601.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metabase.lib.types.constants","location","metabase.lib.types.constants/location",1597944369),expr__77602) : pred__77601.call(null,new cljs.core.Keyword("metabase.lib.types.constants","location","metabase.lib.types.constants/location",1597944369),expr__77602)))){
return metabase.lib.filter.operator.location_operators;
} else {
if(cljs.core.truth_((pred__77601.cljs$core$IFn$_invoke$arity$2 ? pred__77601.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metabase.lib.types.constants","temporal","metabase.lib.types.constants/temporal",896988859),expr__77602) : pred__77601.call(null,new cljs.core.Keyword("metabase.lib.types.constants","temporal","metabase.lib.types.constants/temporal",896988859),expr__77602)))){
return metabase.lib.filter.operator.temporal_operators;
} else {
if(cljs.core.truth_((pred__77601.cljs$core$IFn$_invoke$arity$2 ? pred__77601.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metabase.lib.types.constants","coordinate","metabase.lib.types.constants/coordinate",-565327840),expr__77602) : pred__77601.call(null,new cljs.core.Keyword("metabase.lib.types.constants","coordinate","metabase.lib.types.constants/coordinate",-565327840),expr__77602)))){
return metabase.lib.filter.operator.coordinate_operators;
} else {
if(cljs.core.truth_((pred__77601.cljs$core$IFn$_invoke$arity$2 ? pred__77601.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metabase.lib.types.constants","number","metabase.lib.types.constants/number",1385378285),expr__77602) : pred__77601.call(null,new cljs.core.Keyword("metabase.lib.types.constants","number","metabase.lib.types.constants/number",1385378285),expr__77602)))){
return metabase.lib.filter.operator.number_operators;
} else {
if(cljs.core.truth_((pred__77601.cljs$core$IFn$_invoke$arity$2 ? pred__77601.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metabase.lib.types.constants","boolean","metabase.lib.types.constants/boolean",-2002690319),expr__77602) : pred__77601.call(null,new cljs.core.Keyword("metabase.lib.types.constants","boolean","metabase.lib.types.constants/boolean",-2002690319),expr__77602)))){
return metabase.lib.filter.operator.boolean_operators;
} else {
if(cljs.core.truth_((pred__77601.cljs$core$IFn$_invoke$arity$2 ? pred__77601.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metabase.lib.types.constants","string","metabase.lib.types.constants/string",-2076057579),expr__77602) : pred__77601.call(null,new cljs.core.Keyword("metabase.lib.types.constants","string","metabase.lib.types.constants/string",-2076057579),expr__77602)))){
return metabase.lib.filter.operator.text_operators;
} else {
if(cljs.core.truth_((pred__77601.cljs$core$IFn$_invoke$arity$2 ? pred__77601.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metabase.lib.types.constants","string_like","metabase.lib.types.constants/string_like",-1907279613),expr__77602) : pred__77601.call(null,new cljs.core.Keyword("metabase.lib.types.constants","string_like","metabase.lib.types.constants/string_like",-1907279613),expr__77602)))){
return metabase.lib.filter.operator.text_like_operators;
} else {
return metabase.lib.filter.operator.default_operators;
}
}
}
}
}
}
}
}
}
});
/**
 * Inputs: [tag :- :keyword display-name-variant :- :keyword]
 *   Return: :metabase.lib.schema.common/non-blank-string
 */
metabase.lib.filter.operator.filter_operator_long_display_name = (function metabase$lib$filter$operator$filter_operator_long_display_name(tag,display_name_variant){
var G__77605 = tag;
var G__77605__$1 = (((G__77605 instanceof cljs.core.Keyword))?G__77605.fqn:null);
switch (G__77605__$1) {
case "=":
var G__77607 = display_name_variant;
var G__77607__$1 = (((G__77607 instanceof cljs.core.Keyword))?G__77607.fqn:null);
switch (G__77607__$1) {
case "equal-to":
return metabase.shared.util.i18n.js_i18n("Equal to");

break;
case "default":
return metabase.shared.util.i18n.js_i18n("Is");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77607__$1)].join('')));

}

break;
case "!=":
var G__77608 = display_name_variant;
var G__77608__$1 = (((G__77608 instanceof cljs.core.Keyword))?G__77608.fqn:null);
switch (G__77608__$1) {
case "not-equal-to":
return metabase.shared.util.i18n.js_i18n("Not equal to");

break;
case "excludes":
return metabase.shared.util.i18n.js_i18n("Excludes");

break;
case "default":
return metabase.shared.util.i18n.js_i18n("Is not");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77608__$1)].join('')));

}

break;
case ">":
var G__77609 = display_name_variant;
var G__77609__$1 = (((G__77609 instanceof cljs.core.Keyword))?G__77609.fqn:null);
switch (G__77609__$1) {
case "after":
return metabase.shared.util.i18n.js_i18n("After");

break;
case "default":
return metabase.shared.util.i18n.js_i18n("Greater than");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77609__$1)].join('')));

}

break;
case "<":
var G__77610 = display_name_variant;
var G__77610__$1 = (((G__77610 instanceof cljs.core.Keyword))?G__77610.fqn:null);
switch (G__77610__$1) {
case "before":
return metabase.shared.util.i18n.js_i18n("Before");

break;
case "default":
return metabase.shared.util.i18n.js_i18n("Less than");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77610__$1)].join('')));

}

break;
case ">=":
var G__77615 = display_name_variant;
var G__77615__$1 = (((G__77615 instanceof cljs.core.Keyword))?G__77615.fqn:null);
switch (G__77615__$1) {
case "default":
return metabase.shared.util.i18n.js_i18n("Greater than or equal to");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77615__$1)].join('')));

}

break;
case "<=":
var G__77622 = display_name_variant;
var G__77622__$1 = (((G__77622 instanceof cljs.core.Keyword))?G__77622.fqn:null);
switch (G__77622__$1) {
case "default":
return metabase.shared.util.i18n.js_i18n("Less than or equal to");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77622__$1)].join('')));

}

break;
case "between":
var G__77630 = display_name_variant;
var G__77630__$1 = (((G__77630 instanceof cljs.core.Keyword))?G__77630.fqn:null);
switch (G__77630__$1) {
case "default":
return metabase.shared.util.i18n.js_i18n("Between");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77630__$1)].join('')));

}

break;
case "is-null":
var G__77635 = display_name_variant;
var G__77635__$1 = (((G__77635 instanceof cljs.core.Keyword))?G__77635.fqn:null);
switch (G__77635__$1) {
case "is-empty":
return metabase.shared.util.i18n.js_i18n("Is empty");

break;
case "default":
return metabase.shared.util.i18n.js_i18n("Is null");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77635__$1)].join('')));

}

break;
case "not-null":
var G__77636 = display_name_variant;
var G__77636__$1 = (((G__77636 instanceof cljs.core.Keyword))?G__77636.fqn:null);
switch (G__77636__$1) {
case "not-empty":
return metabase.shared.util.i18n.js_i18n("Not empty");

break;
case "default":
return metabase.shared.util.i18n.js_i18n("Not null");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77636__$1)].join('')));

}

break;
case "is-empty":
var G__77637 = display_name_variant;
var G__77637__$1 = (((G__77637 instanceof cljs.core.Keyword))?G__77637.fqn:null);
switch (G__77637__$1) {
case "default":
return metabase.shared.util.i18n.js_i18n("Is empty");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77637__$1)].join('')));

}

break;
case "not-empty":
var G__77638 = display_name_variant;
var G__77638__$1 = (((G__77638 instanceof cljs.core.Keyword))?G__77638.fqn:null);
switch (G__77638__$1) {
case "default":
return metabase.shared.util.i18n.js_i18n("Not empty");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77638__$1)].join('')));

}

break;
case "contains":
var G__77641 = display_name_variant;
var G__77641__$1 = (((G__77641 instanceof cljs.core.Keyword))?G__77641.fqn:null);
switch (G__77641__$1) {
case "default":
return metabase.shared.util.i18n.js_i18n("Contains");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77641__$1)].join('')));

}

break;
case "does-not-contain":
var G__77642 = display_name_variant;
var G__77642__$1 = (((G__77642 instanceof cljs.core.Keyword))?G__77642.fqn:null);
switch (G__77642__$1) {
case "default":
return metabase.shared.util.i18n.js_i18n("Does not contain");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77642__$1)].join('')));

}

break;
case "starts-with":
var G__77644 = display_name_variant;
var G__77644__$1 = (((G__77644 instanceof cljs.core.Keyword))?G__77644.fqn:null);
switch (G__77644__$1) {
case "default":
return metabase.shared.util.i18n.js_i18n("Starts with");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77644__$1)].join('')));

}

break;
case "ends-with":
var G__77646 = display_name_variant;
var G__77646__$1 = (((G__77646 instanceof cljs.core.Keyword))?G__77646.fqn:null);
switch (G__77646__$1) {
case "default":
return metabase.shared.util.i18n.js_i18n("Ends with");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77646__$1)].join('')));

}

break;
case "inside":
var G__77647 = display_name_variant;
var G__77647__$1 = (((G__77647 instanceof cljs.core.Keyword))?G__77647.fqn:null);
switch (G__77647__$1) {
case "default":
return metabase.shared.util.i18n.js_i18n("Inside");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77647__$1)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77605__$1)].join('')));

}
});
/**
 * Inputs: [tag :- :keyword display-name-variant :- :keyword]
 *   Return: :metabase.lib.schema.common/non-blank-string
 */
metabase.lib.filter.operator.filter_operator_display_name = (function metabase$lib$filter$operator$filter_operator_display_name(tag,display_name_variant){
var G__77648 = tag;
var G__77648__$1 = (((G__77648 instanceof cljs.core.Keyword))?G__77648.fqn:null);
switch (G__77648__$1) {
case "=":
return "=";

break;
case "!=":
return "\u2260";

break;
case ">":
return ">";

break;
case "<":
return "<";

break;
case ">=":
return "\u2265";

break;
case "<=":
return "\u2264";

break;
default:
return metabase.lib.filter.operator.filter_operator_long_display_name(tag,display_name_variant);

}
});
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("operator","filter","operator/filter",-1518842858),(function (_query,_stage_number,p__77649,display_name_style){
var map__77650 = p__77649;
var map__77650__$1 = cljs.core.__destructure_map(map__77650);
var short_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77650__$1,new cljs.core.Keyword(null,"short","short",1928760516));
var display_name_variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77650__$1,new cljs.core.Keyword(null,"display-name-variant","display-name-variant",-1831788853));
var G__77651 = display_name_style;
var G__77651__$1 = (((G__77651 instanceof cljs.core.Keyword))?G__77651.fqn:null);
switch (G__77651__$1) {
case "default":
return metabase.lib.filter.operator.filter_operator_display_name(short_name,display_name_variant);

break;
case "long":
return metabase.lib.filter.operator.filter_operator_long_display_name(short_name,display_name_variant);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77651__$1)].join('')));

}
}));
metabase.lib.metadata.calculation.display_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("operator","filter","operator/filter",-1518842858),(function (_query,_stage_number,p__77654){
var map__77658 = p__77654;
var map__77658__$1 = cljs.core.__destructure_map(map__77658);
var short_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77658__$1,new cljs.core.Keyword(null,"short","short",1928760516));
var display_name_variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77658__$1,new cljs.core.Keyword(null,"display-name-variant","display-name-variant",-1831788853));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77658__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var G__77664 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"short-name","short-name",-1767085022),metabase.util.qualified_name(short_name),new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.lib.filter.operator.filter_operator_display_name(short_name,display_name_variant),new cljs.core.Keyword(null,"long-display-name","long-display-name",1550784464),metabase.lib.filter.operator.filter_operator_long_display_name(short_name,display_name_variant)], null);
if(cljs.core.truth_(default$)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__77664,new cljs.core.Keyword(null,"default","default",-1987822328),true);
} else {
return G__77664;
}
}));

//# sourceMappingURL=metabase.lib.filter.operator.js.map
