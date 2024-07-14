var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./medley.core.js");
require("./metabase.lib.card.js");
require("./metabase.lib.join.js");
require("./metabase.lib.join.util.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.schema.common.js");
require("./metabase.lib.schema.id.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.column_group.js");

goog.provide('metabase.lib.column_group');
metabase.lib.column_group.GroupType = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword("group-type","main","group-type/main",-938346573),new cljs.core.Keyword("group-type","join.explicit","group-type/join.explicit",-627022785),new cljs.core.Keyword("group-type","join.implicit","group-type/join.implicit",-684408229)], null);
metabase.lib.column_group.group_type_ordering = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("group-type","main","group-type/main",-938346573),(1),new cljs.core.Keyword("group-type","join.explicit","group-type/join.explicit",-627022785),(2),new cljs.core.Keyword("group-type","join.implicit","group-type/join.implicit",-684408229),(3)], null);
/**
 * Schema for the metadata returned by [[group-columns]], and accepted by [[columns-group-columns]].
 */
metabase.lib.column_group.ColumnGroup = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword("metadata","column-group","metadata/column-group",-902258024)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("metabase.lib.column-group","group-type","metabase.lib.column-group/group-type",6276454),metabase.lib.column_group.GroupType], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("metabase.lib.column-group","columns","metabase.lib.column-group/columns",1229087729),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.metadata","column","metabase.lib.schema.metadata/column",-570344650)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword("metabase.lib.column-group","group-type","metabase.lib.column-group/group-type",6276454)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("group-type","main","group-type/main",-938346573),cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("group-type","join.explicit","group-type/join.explicit",-627022785),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"join-alias","join-alias",1454206794),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.common","non-blank-string","metabase.lib.schema.common/non-blank-string",-2032366619)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table-id","table-id",-766649466),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.id","table","metabase.lib.schema.id/table",-583250693)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-id","card-id",-1770060179),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.id","card","metabase.lib.schema.id/card",-801728009)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),":group-type/join.explicit should only have at most one of :join-alias, :table-id, or :card-id"], null),(function (m){
return (cljs.core.count(cljs.core.keys(cljs.core.select_keys(m,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"join-alias","join-alias",1454206794),new cljs.core.Keyword(null,"table-id","table-id",-766649466),new cljs.core.Keyword(null,"card-id","card-id",-1770060179)], null)))) >= (1));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("group-type","join.implicit","group-type/join.implicit",-684408229),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fk-field-id","fk-field-id",1124127357),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("metabase.lib.schema.id","field","metabase.lib.schema.id/field",-985236431)], null)], null)], null)], null)], null)], null);
metabase.lib.metadata.calculation.metadata_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","column-group","metadata/column-group",-902258024),(function (_query,_stage_number,column_group){
return column_group;
}));
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.column_group !== 'undefined') && (typeof metabase.lib.column_group.display_info_for_group_method !== 'undefined')){
} else {
metabase.lib.column_group.display_info_for_group_method = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__78723 = cljs.core.get_global_hierarchy;
return (fexpr__78723.cljs$core$IFn$_invoke$arity$0 ? fexpr__78723.cljs$core$IFn$_invoke$arity$0() : fexpr__78723.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.column-group","display-info-for-group-method"),(function (_query,_stage_number,column_group){
return new cljs.core.Keyword("metabase.lib.column-group","group-type","metabase.lib.column-group/group-type",6276454).cljs$core$IFn$_invoke$arity$1(column_group);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
metabase.lib.column_group.display_info_for_group_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("group-type","main","group-type/main",-938346573),(function (query,stage_number,_column_group){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var stage = metabase.lib.util.query_stage(query,stage_number);
var or__5002__auto__ = (function (){var temp__5804__auto__ = (function (){var G__78724 = new cljs.core.Keyword(null,"source-table","source-table",-225307692).cljs$core$IFn$_invoke$arity$1(stage);
if((G__78724 == null)){
return null;
} else {
return metabase.lib.metadata.table(query,G__78724);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var table = temp__5804__auto__;
return metabase.lib.metadata.calculation.display_info.cljs$core$IFn$_invoke$arity$3(query,stage_number,table);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = (function (){var temp__5804__auto__ = (function (){var G__78725 = new cljs.core.Keyword(null,"source-card","source-card",-1580820390).cljs$core$IFn$_invoke$arity$1(stage);
if((G__78725 == null)){
return null;
} else {
return metabase.lib.metadata.card(query,G__78725);
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var card = temp__5804__auto__;
return metabase.lib.metadata.calculation.display_info.cljs$core$IFn$_invoke$arity$3(query,stage_number,card);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = ((cljs.core.next(new cljs.core.Keyword(null,"stages","stages",-442109532).cljs$core$IFn$_invoke$arity$1(query)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display-name","display-name",694513143),""], null):null);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$3(query,stage_number,stage)], null);
}
}
}
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"is-from-join","is-from-join",-1107917905),false,new cljs.core.Keyword(null,"is-implicitly-joinable","is-implicitly-joinable",2054926844),false], null)], 0));
}));
metabase.lib.column_group.display_info_for_group_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("group-type","join.explicit","group-type/join.explicit",-627022785),(function (query,stage_number,p__78726){
var map__78727 = p__78726;
var map__78727__$1 = cljs.core.__destructure_map(map__78727);
var _column_group = map__78727__$1;
var join_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78727__$1,new cljs.core.Keyword(null,"join-alias","join-alias",1454206794));
var table_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78727__$1,new cljs.core.Keyword(null,"table-id","table-id",-766649466));
var card_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78727__$1,new cljs.core.Keyword(null,"card-id","card-id",-1770060179));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = (cljs.core.truth_(join_alias)?(function (){var temp__5804__auto__ = metabase.lib.join.resolve_join(query,stage_number,join_alias);
if(cljs.core.truth_(temp__5804__auto__)){
var join = temp__5804__auto__;
return metabase.lib.metadata.calculation.display_info.cljs$core$IFn$_invoke$arity$3(query,stage_number,join);
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = (cljs.core.truth_(table_id)?(function (){var temp__5804__auto__ = metabase.lib.metadata.table(query,table_id);
if(cljs.core.truth_(temp__5804__auto__)){
var table = temp__5804__auto__;
return metabase.lib.metadata.calculation.display_info.cljs$core$IFn$_invoke$arity$3(query,stage_number,table);
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
if(cljs.core.truth_(card_id)){
var temp__5802__auto__ = metabase.lib.metadata.card(query,card_id);
if(cljs.core.truth_(temp__5802__auto__)){
var card = temp__5802__auto__;
return metabase.lib.metadata.calculation.display_info.cljs$core$IFn$_invoke$arity$3(query,stage_number,card);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.lib.card.fallback_display_name(card_id)], null);
}
} else {
return null;
}
}
}
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"is-from-join","is-from-join",-1107917905),true,new cljs.core.Keyword(null,"is-implicitly-joinable","is-implicitly-joinable",2054926844),false], null)], 0));
}));
metabase.lib.column_group.display_info_for_group_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("group-type","join.implicit","group-type/join.implicit",-684408229),(function (query,stage_number,p__78729){
var map__78730 = p__78729;
var map__78730__$1 = cljs.core.__destructure_map(map__78730);
var _column_group = map__78730__$1;
var fk_field_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78730__$1,new cljs.core.Keyword(null,"fk-field-id","fk-field-id",1124127357));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var temp__5804__auto__ = medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p1__78728_SHARP_){
var and__5000__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__78728_SHARP_),fk_field_id);
if(and__5000__auto__){
return new cljs.core.Keyword(null,"fk-target-field-id","fk-target-field-id",2019750287).cljs$core$IFn$_invoke$arity$1(p1__78728_SHARP_);
} else {
return and__5000__auto__;
}
}),metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$3(query,stage_number,metabase.lib.util.query_stage(query,stage_number)));
if(cljs.core.truth_(temp__5804__auto__)){
var fk_column = temp__5804__auto__;
var fk_info = metabase.lib.metadata.calculation.display_info.cljs$core$IFn$_invoke$arity$3(query,stage_number,fk_column);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(fk_info,new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.lib.util.strip_id);
} else {
return null;
}
})(),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"is-from-join","is-from-join",-1107917905),false,new cljs.core.Keyword(null,"is-implicitly-joinable","is-implicitly-joinable",2054926844),true], null)], 0));
}));
metabase.lib.metadata.calculation.display_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","column-group","metadata/column-group",-902258024),(function (query,stage_number,column_group){
return metabase.lib.column_group.display_info_for_group_method.cljs$core$IFn$_invoke$arity$3(query,stage_number,column_group);
}));
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.column_group !== 'undefined') && (typeof metabase.lib.column_group.column_group_info_method !== 'undefined')){
} else {
metabase.lib.column_group.column_group_info_method = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__78731 = cljs.core.get_global_hierarchy;
return (fexpr__78731.cljs$core$IFn$_invoke$arity$0 ? fexpr__78731.cljs$core$IFn$_invoke$arity$0() : fexpr__78731.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.column-group","column-group-info-method"),new cljs.core.Keyword("lib","source","lib/source",-434086550),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
metabase.lib.column_group.column_group_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("source","implicitly-joinable","source/implicitly-joinable",-729101197),(function (column_metadata){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("metabase.lib.column-group","group-type","metabase.lib.column-group/group-type",6276454),new cljs.core.Keyword("group-type","join.implicit","group-type/join.implicit",-684408229),new cljs.core.Keyword(null,"fk-field-id","fk-field-id",1124127357),new cljs.core.Keyword(null,"fk-field-id","fk-field-id",1124127357).cljs$core$IFn$_invoke$arity$1(column_metadata),new cljs.core.Keyword(null,"fk-join-alias","fk-join-alias",997510084),new cljs.core.Keyword(null,"fk-join-alias","fk-join-alias",997510084).cljs$core$IFn$_invoke$arity$1(column_metadata)], null);
}));
metabase.lib.column_group.column_group_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("source","joins","source/joins",1225821486),(function (p__78732){
var map__78733 = p__78732;
var map__78733__$1 = cljs.core.__destructure_map(map__78733);
var column_metadata = map__78733__$1;
var table_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78733__$1,new cljs.core.Keyword(null,"table-id","table-id",-766649466));
var card_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78733__$1,new cljs.core.Keyword("lib","card-id","lib/card-id",-1770167062));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("metabase.lib.column-group","group-type","metabase.lib.column-group/group-type",6276454),new cljs.core.Keyword("group-type","join.explicit","group-type/join.explicit",-627022785)], null),(function (){var or__5002__auto__ = (function (){var temp__5804__auto__ = metabase.lib.join.util.current_join_alias(column_metadata);
if(cljs.core.truth_(temp__5804__auto__)){
var join_alias = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"join-alias","join-alias",1454206794),join_alias], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = (cljs.core.truth_(card_id)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"card-id","card-id",-1770060179),card_id], null):null);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
if(cljs.core.truth_(table_id)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"table-id","table-id",-766649466),table_id], null);
} else {
return null;
}
}
}
})()], 0));
}));
metabase.lib.column_group.column_group_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_column_metadata){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("metabase.lib.column-group","group-type","metabase.lib.column-group/group-type",6276454),new cljs.core.Keyword("group-type","main","group-type/main",-938346573)], null);
}));
/**
 * Inputs: [column-metadata :- :metabase.lib.schema.metadata/column]
 *   Return: [:map [:metabase.lib.column-group/group-type GroupType]]
 *        
 * 
 *   The value we should use to `group-by` inside [[group-columns]].
 */
metabase.lib.column_group.column_group_info = (function metabase$lib$column_group$column_group_info(column_metadata){
return metabase.lib.column_group.column_group_info_method.cljs$core$IFn$_invoke$arity$1(column_metadata);
});
metabase.lib.column_group.column_group_ordering = (function metabase$lib$column_group$column_group_ordering(fk_field_names,p__78734){
var map__78735 = p__78734;
var map__78735__$1 = cljs.core.__destructure_map(map__78735);
var column_group = map__78735__$1;
var group_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78735__$1,new cljs.core.Keyword("metabase.lib.column-group","group-type","metabase.lib.column-group/group-type",6276454));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(metabase.lib.column_group.group_type_ordering.cljs$core$IFn$_invoke$arity$1 ? metabase.lib.column_group.group_type_ordering.cljs$core$IFn$_invoke$arity$1(group_type) : metabase.lib.column_group.group_type_ordering.call(null,group_type))], null),(function (){var G__78736 = group_type;
var G__78736__$1 = (((G__78736 instanceof cljs.core.Keyword))?G__78736.fqn:null);
switch (G__78736__$1) {
case "group-type/main":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["main"], null);

break;
case "group-type/join.explicit":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"join-alias","join-alias",1454206794).cljs$core$IFn$_invoke$arity$1(column_group)], null);

break;
case "group-type/join.implicit":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"fk-join-alias","fk-join-alias",997510084).cljs$core$IFn$_invoke$arity$1(column_group);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})(),(function (){var G__78737 = new cljs.core.Keyword(null,"fk-field-id","fk-field-id",1124127357).cljs$core$IFn$_invoke$arity$1(column_group);
var G__78738 = "";
return (fk_field_names.cljs$core$IFn$_invoke$arity$2 ? fk_field_names.cljs$core$IFn$_invoke$arity$2(G__78737,G__78738) : fk_field_names.call(null,G__78737,G__78738));
})()], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78736__$1)].join('')));

}
})());
});
/**
 * Inputs: [column-metadatas :- [:sequential :metabase.lib.schema.metadata/column]]
 *   Return: [:sequential ColumnGroup]
 *        
 * 
 *   Given a group of columns returned by a function like [[metabase.lib.order-by/orderable-columns]], group the columns
 *   by Table or equivalent (e.g. Saved Question) so that they're in an appropriate shape for showing in the Query
 *   Builder. e.g a sequence of columns like
 * 
 *  [venues.id
 *   venues.name
 *   venues.category-id
 *   ;; implicitly joinable
 *   categories.id
 *   categories.name]
 * 
 *   would get grouped into groups like
 * 
 *  [{::columns [venues.id
 *               venues.name
 *               venues.category-id]}
 *   {::columns [categories.id
 *               categories.name]}]
 * 
 *   Groups have the type `:metadata/column-group` and can be passed directly
 *   to [[metabase.lib.metadata.calculation/display-info]].
 * 
 *   Ordered to put own columns first, then explicit joins alphabetically by join alias, then implicit joins alphabetically
 *   by FK join alias + FK field name (which is used as the table name). So if the same FK is available multiple times,
 *   they are ordered: own first, then alphabetically by the join alias for that FK.
 */
metabase.lib.column_group.group_columns = (function metabase$lib$column_group$group_columns(column_metadatas){
var fk_field_names = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177)))),column_metadatas);
return cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(metabase.lib.column_group.column_group_ordering,fk_field_names),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__78739){
var vec__78740 = p__78739;
var group_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78740,(0),null);
var columns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78740,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(group_info,new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metadata","column-group","metadata/column-group",-902258024),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("metabase.lib.column-group","columns","metabase.lib.column-group/columns",1229087729),columns], 0));
}),cljs.core.group_by(metabase.lib.column_group.column_group_info,column_metadatas))));
});
/**
 * Inputs: [column-group :- ColumnGroup]
 *   Return: [:sequential :metabase.lib.schema.metadata/column]
 *        
 * 
 *   Get the columns associated with a column group
 */
metabase.lib.column_group.columns_group_columns = (function metabase$lib$column_group$columns_group_columns(column_group){
return new cljs.core.Keyword("metabase.lib.column-group","columns","metabase.lib.column-group/columns",1229087729).cljs$core$IFn$_invoke$arity$1(column_group);
});
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metadata","column-group","metadata/column-group",-902258024),(function (query,stage_number,column_group,_display_name_style){
return new cljs.core.Keyword(null,"display-name","display-name",694513143).cljs$core$IFn$_invoke$arity$1(metabase.lib.metadata.calculation.display_info.cljs$core$IFn$_invoke$arity$3(query,stage_number,column_group));
}));

//# sourceMappingURL=metabase.lib.column_group.js.map
