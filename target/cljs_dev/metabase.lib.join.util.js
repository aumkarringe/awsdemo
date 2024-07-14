var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.dispatch.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.options.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.schema.join.js");
require("./metabase.lib.schema.metadata.js");
require("./metabase.lib.util.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.join.util.js");

goog.provide('metabase.lib.join.util');
/**
 * A Join that may not yet have an `:alias`, which is normally required; [[join]] accepts this and will add a default
 *   alias if one is not present.
 */
metabase.lib.join.util.JoinWithOptionalAlias = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.join","join","metabase.lib.schema.join/join",1110197236)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"alias","alias",-2039751630),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.join","alias","metabase.lib.schema.join/alias",53862412)], null)], null)], null)], null);
/**
 * A join that may not yet have an `:alias` or `:conditions`.
 */
metabase.lib.join.util.PartialJoin = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),metabase.lib.join.util.JoinWithOptionalAlias,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conditions","conditions",-1647236270),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.join","conditions","metabase.lib.schema.join/conditions",118173612)], null)], null)], null)], null);
/**
 * A field in a join, either `:metabase.lib.schema.metadata/column` or a `:field` ref.
 */
metabase.lib.join.util.Field = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.metadata","column","metabase.lib.schema.metadata/column",-570344650)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("mbql.clause","field","mbql.clause/field",1497292735)], null)], null);
/**
 * A field or a partial join.
 */
metabase.lib.join.util.FieldOrPartialJoin = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),metabase.lib.join.util.Field,metabase.lib.join.util.PartialJoin], null);
/**
 * Inputs: [field-or-join :- [:maybe FieldOrPartialJoin]]
 *   Return: [:maybe :metabase.lib.schema.common/non-blank-string]
 *        
 * 
 *   Get the current join alias associated with something, if it has one.
 */
metabase.lib.join.util.current_join_alias = (function metabase$lib$join$util$current_join_alias(field_or_join){
var G__76819 = metabase.lib.dispatch.dispatch_value(field_or_join);
var G__76819__$1 = (((G__76819 instanceof cljs.core.Keyword))?G__76819.fqn:null);
switch (G__76819__$1) {
case "dispatch-type/nil":
return null;

break;
case "field":
return new cljs.core.Keyword(null,"join-alias","join-alias",1454206794).cljs$core$IFn$_invoke$arity$1(metabase.lib.options.options(field_or_join));

break;
case "metadata/column":
return new cljs.core.Keyword("metabase.lib.join","join-alias","metabase.lib.join/join-alias",1166233023).cljs$core$IFn$_invoke$arity$1(field_or_join);

break;
case "mbql/join":
return new cljs.core.Keyword(null,"alias","alias",-2039751630).cljs$core$IFn$_invoke$arity$1(field_or_join);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__76819__$1)].join('')));

}
});
/**
 * Inputs: [join-alias :- :metabase.lib.schema.common/non-blank-string field-name :- :metabase.lib.schema.common/non-blank-string]
 *   Return: :metabase.lib.schema.common/non-blank-string
 *        
 * 
 *   Desired alias for a Field that comes from a join, e.g.
 * 
 *  MyJoin__my_field
 * 
 *   You should pass the results thru a unique name function e.g. one returned
 *   by [[metabase.lib.util/unique-name-generator]].
 */
metabase.lib.join.util.joined_field_desired_alias = (function metabase$lib$join$util$joined_field_desired_alias(join_alias,field_name){
return (metabase.lib.util.format.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.util.format.cljs$core$IFn$_invoke$arity$3("%s__%s",join_alias,field_name) : metabase.lib.util.format.call(null,"%s__%s",join_alias,field_name));
});
/**
 * Inputs: [table-name :- :metabase.lib.schema.common/non-blank-string source-field-id-name :- :metabase.lib.schema.common/non-blank-string]
 *   Return: :metabase.lib.schema.common/non-blank-string
 *        
 * 
 *   Name for an implicit join against `table-name` via an FK field, e.g.
 * 
 *  CATEGORIES__via__CATEGORY_ID
 * 
 *   You should make sure this gets ran thru a unique-name fn e.g. one returned
 *   by [[metabase.lib.util/unique-name-generator]].
 */
metabase.lib.join.util.format_implicit_join_name = (function metabase$lib$join$util$format_implicit_join_name(table_name,source_field_id_name){
return (metabase.lib.util.format.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.util.format.cljs$core$IFn$_invoke$arity$3("%s__via__%s",table_name,source_field_id_name) : metabase.lib.util.format.call(null,"%s__via__%s",table_name,source_field_id_name));
});
metabase.lib.join.util.implicit_join_name = (function metabase$lib$join$util$implicit_join_name(query,p__76826){
var map__76827 = p__76826;
var map__76827__$1 = cljs.core.__destructure_map(map__76827);
var _field_metadata = map__76827__$1;
var fk_field_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76827__$1,new cljs.core.Keyword(null,"fk-field-id","fk-field-id",1124127357));
var table_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76827__$1,new cljs.core.Keyword(null,"table-id","table-id",-766649466));
if(cljs.core.truth_((function (){var and__5000__auto__ = fk_field_id;
if(cljs.core.truth_(and__5000__auto__)){
return table_id;
} else {
return and__5000__auto__;
}
})())){
var temp__5804__auto__ = metabase.lib.metadata.table_or_card(query,table_id);
if(cljs.core.truth_(temp__5804__auto__)){
var table = temp__5804__auto__;
var table_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(table);
var source_field_id_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(metabase.lib.metadata.field(query,fk_field_id));
return metabase.lib.join.util.format_implicit_join_name(table_name,source_field_id_name);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query field-metadata :- :metabase.lib.schema.metadata/column]
 *   Return: :metabase.lib.schema.common/non-blank-string
 *        
 * 
 *   Desired alias for a Field e.g.
 * 
 *  my_field
 * 
 *  OR
 * 
 *  MyJoin__my_field
 * 
 *   You should pass the results thru a unique name function.
 */
metabase.lib.join.util.desired_alias = (function metabase$lib$join$util$desired_alias(query,field_metadata){
var temp__5802__auto__ = (function (){var or__5002__auto__ = metabase.lib.join.util.current_join_alias(field_metadata);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return metabase.lib.join.util.implicit_join_name(query,field_metadata);
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var join_alias = temp__5802__auto__;
return metabase.lib.join.util.joined_field_desired_alias(join_alias,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field_metadata));
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(field_metadata);
}
});

//# sourceMappingURL=metabase.lib.join.util.js.map
