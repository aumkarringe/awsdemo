var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./medley.core.js");
require("./metabase.lib.card.js");
require("./metabase.lib.convert.js");
require("./metabase.lib.dispatch.js");
require("./metabase.lib.hierarchy.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.options.js");
require("./metabase.lib.ref.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.id.js");
require("./metabase.lib.schema.metadata.js");
require("./metabase.lib.schema.ref.js");
require("./metabase.lib.temporal_bucket.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.equality.js");

goog.provide('metabase.lib.equality');
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.equality !== 'undefined') && (typeof metabase.lib.equality._EQ_ !== 'undefined')){
} else {
/**
 * Determine whether two already-normalized pMBQL maps, clauses, or other sorts of expressions are equal. The basic rule
 *   is that two things are considered equal if they are [[clojure.core/=]], or, if they are both maps, if they
 *   are [[clojure.core/=]] if you ignore all qualified keyword keys besides `:lib/type`.
 */
metabase.lib.equality._EQ_ = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__77822 = cljs.core.get_global_hierarchy;
return (fexpr__77822.cljs$core$IFn$_invoke$arity$0 ? fexpr__77822.cljs$core$IFn$_invoke$arity$0() : fexpr__77822.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.equality","="),(function (x,y){
var x_dispatch_value = metabase.lib.dispatch.dispatch_value(x);
var y_dispatch_value = metabase.lib.dispatch.dispatch_value(y);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x_dispatch_value,y_dispatch_value)){
return new cljs.core.Keyword("metabase.lib.equality","different-dispatch-values","metabase.lib.equality/different-dispatch-values",-2107733395);
} else {
return x_dispatch_value;
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
metabase.lib.equality._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.equality","different-dispatch-values","metabase.lib.equality/different-dispatch-values",-2107733395),(function (_x,_y){
return false;
}));
/**
 * Set of keys in a map that we consider relevant for [[=]] purposes.
 */
metabase.lib.equality.relevant_keys_set = (function metabase$lib$equality$relevant_keys_set(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (k){
return ((cljs.core.qualified_keyword_QMARK_(k)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword("lib","type","lib/type",1175424801))));
})),cljs.core.keys(m));
});
metabase.lib.equality._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("dispatch-type","map","dispatch-type/map",-758153422),(function (m1,m2){
var m1_keys = metabase.lib.equality.relevant_keys_set(m1);
var m2_keys = metabase.lib.equality.relevant_keys_set(m2);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m1_keys,m2_keys)) && (cljs.core.every_QMARK_((function (k){
return metabase.lib.equality._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m1,k),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m2,k));
}),m1_keys)));
}));
metabase.lib.equality._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("dispatch-type","sequential","dispatch-type/sequential",1056993969),(function (xs,ys){
var and__5000__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(xs),cljs.core.count(ys));
if(and__5000__auto__){
var G__77829 = xs;
var vec__77831 = G__77829;
var seq__77832 = cljs.core.seq(vec__77831);
var first__77833 = cljs.core.first(seq__77832);
var seq__77832__$1 = cljs.core.next(seq__77832);
var x = first__77833;
var more_x = seq__77832__$1;
var G__77830 = ys;
var vec__77834 = G__77830;
var seq__77835 = cljs.core.seq(vec__77834);
var first__77836 = cljs.core.first(seq__77835);
var seq__77835__$1 = cljs.core.next(seq__77835);
var y = first__77836;
var more_y = seq__77835__$1;
var G__77829__$1 = G__77829;
var G__77830__$1 = G__77830;
while(true){
var vec__77837 = G__77829__$1;
var seq__77838 = cljs.core.seq(vec__77837);
var first__77839 = cljs.core.first(seq__77838);
var seq__77838__$1 = cljs.core.next(seq__77838);
var x__$1 = first__77839;
var more_x__$1 = seq__77838__$1;
var vec__77840 = G__77830__$1;
var seq__77841 = cljs.core.seq(vec__77840);
var first__77842 = cljs.core.first(seq__77841);
var seq__77841__$1 = cljs.core.next(seq__77841);
var y__$1 = first__77842;
var more_y__$1 = seq__77841__$1;
var and__5000__auto____$1 = metabase.lib.equality._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,y__$1);
if(cljs.core.truth_(and__5000__auto____$1)){
var or__5002__auto__ = cljs.core.empty_QMARK_(more_x__$1);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var G__77928 = more_x__$1;
var G__77929 = more_y__$1;
G__77829__$1 = G__77928;
G__77830__$1 = G__77929;
continue;
}
} else {
return and__5000__auto____$1;
}
break;
}
} else {
return and__5000__auto__;
}
}));
metabase.lib.equality._STAR_side__GT_uuid__GT_index_STAR_ = null;
metabase.lib.equality.aggregation_uuid__GT_index = (function metabase$lib$equality$aggregation_uuid__GT_index(stage){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (idx,p__77843){
var vec__77844 = p__77843;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77844,(0),null);
var map__77847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77844,(1),null);
var map__77847__$1 = cljs.core.__destructure_map(map__77847);
var ag_uuid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77847__$1,new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ag_uuid,idx], null);
})),new cljs.core.Keyword(null,"aggregation","aggregation",1597476696).cljs$core$IFn$_invoke$arity$1(stage));
});
metabase.lib.equality._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("mbql.stage","mbql","mbql.stage/mbql",1578747798),(function (x,y){
var _STAR_side__GT_uuid__GT_index_STAR__orig_val__77848 = metabase.lib.equality._STAR_side__GT_uuid__GT_index_STAR_;
var _STAR_side__GT_uuid__GT_index_STAR__temp_val__77849 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),metabase.lib.equality.aggregation_uuid__GT_index(x),new cljs.core.Keyword(null,"right","right",-452581833),metabase.lib.equality.aggregation_uuid__GT_index(y)], null);
(metabase.lib.equality._STAR_side__GT_uuid__GT_index_STAR_ = _STAR_side__GT_uuid__GT_index_STAR__temp_val__77849);

try{var fexpr__77850 = cljs.core.get_method(metabase.lib.equality._EQ_,new cljs.core.Keyword("dispatch-type","map","dispatch-type/map",-758153422));
return (fexpr__77850.cljs$core$IFn$_invoke$arity$2 ? fexpr__77850.cljs$core$IFn$_invoke$arity$2(x,y) : fexpr__77850.call(null,x,y));
}finally {(metabase.lib.equality._STAR_side__GT_uuid__GT_index_STAR_ = _STAR_side__GT_uuid__GT_index_STAR__orig_val__77848);
}}));
metabase.lib.equality._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696),(function (p__77851,p__77852){
var vec__77853 = p__77851;
var x_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77853,(0),null);
var x_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77853,(1),null);
var x_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77853,(2),null);
var x = vec__77853;
var vec__77856 = p__77852;
var y_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77856,(0),null);
var y_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77856,(1),null);
var y_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77856,(2),null);
var y = vec__77856;
var and__5000__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic((3),cljs.core.count(x),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.count(y)], 0));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x_tag,y_tag);
if(and__5000__auto____$1){
var and__5000__auto____$2 = metabase.lib.equality._EQ_.cljs$core$IFn$_invoke$arity$2(x_opts,y_opts);
if(cljs.core.truth_(and__5000__auto____$2)){
if(cljs.core.truth_(metabase.lib.equality._STAR_side__GT_uuid__GT_index_STAR_)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(metabase.lib.equality._STAR_side__GT_uuid__GT_index_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),x_uuid], null),new cljs.core.Keyword("metabase.lib.equality","no-left","metabase.lib.equality/no-left",-1403666439)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(metabase.lib.equality._STAR_side__GT_uuid__GT_index_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),y_uuid], null),new cljs.core.Keyword("metabase.lib.equality","no-right","metabase.lib.equality/no-right",2015744769)));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x_uuid,y_uuid);
}
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}));
metabase.lib.equality._EQ_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x,y){
if(cljs.core.map_QMARK_(x)){
var fexpr__77859 = cljs.core.get_method(metabase.lib.equality._EQ_,new cljs.core.Keyword("dispatch-type","map","dispatch-type/map",-758153422));
return (fexpr__77859.cljs$core$IFn$_invoke$arity$2 ? fexpr__77859.cljs$core$IFn$_invoke$arity$2(x,y) : fexpr__77859.call(null,x,y));
} else {
if(cljs.core.sequential_QMARK_(x)){
var fexpr__77860 = cljs.core.get_method(metabase.lib.equality._EQ_,new cljs.core.Keyword("dispatch-type","sequential","dispatch-type/sequential",1056993969));
return (fexpr__77860.cljs$core$IFn$_invoke$arity$2 ? fexpr__77860.cljs$core$IFn$_invoke$arity$2(x,y) : fexpr__77860.call(null,x,y));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);

}
}
}));
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int field-id :- :metabase.lib.schema.id/field]
 *   Return: :metabase.lib.schema.metadata/column
 *        
 * 
 *   Integer Field ID: get metadata from the metadata provider. If this is the first stage of the query, merge in
 *   Saved Question metadata if available.
 * 
 *   This doesn't really have a good home. It's used here and by [[metabase.lib.field]], but because it depends on eg.
 *   [[metabase.lib.card]] and [[metabase.lib.convert]] it can't go in [[metabase.lib.metadata.calculation]].
 */
metabase.lib.equality.resolve_field_id = (function metabase$lib$equality$resolve_field_id(query,stage_number,field_id){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((metabase.lib.util.first_stage_QMARK_(query,stage_number))?(function (){var temp__5804__auto__ = metabase.lib.util.source_card_id(query);
if(cljs.core.truth_(temp__5804__auto__)){
var card_id = temp__5804__auto__;
var temp__5804__auto____$1 = metabase.lib.card.saved_question_metadata(query,card_id);
if(cljs.core.truth_(temp__5804__auto____$1)){
var card_metadata = temp__5804__auto____$1;
return medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p1__77861_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__77861_SHARP_),field_id);
}),card_metadata);
} else {
return null;
}
} else {
return null;
}
})():null),(function (){try{return metabase.lib.metadata.field(query,field_id);
}catch (e77862){var _ = e77862;
return null;
}})()], 0));
});
/**
 * Inputs: [column :- :metabase.lib.schema.metadata/column]
 *   Return: [:maybe :string]
 */
metabase.lib.equality.column_join_alias = (function metabase$lib$equality$column_join_alias(column){
return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("metabase.lib.join","join-alias","metabase.lib.join/join-alias",1166233023),new cljs.core.Keyword(null,"source-alias","source-alias",1652088724))(column);
});
/**
 * Inputs: [[_ref-kind {:keys [join-alias source-field]} _ref-id] :- :metabase.lib.schema.ref/ref column :- :metabase.lib.schema.metadata/column]
 *   Return: :boolean
 */
metabase.lib.equality.matching_join_QMARK_ = (function metabase$lib$equality$matching_join_QMARK_(p__77863,column){
var vec__77864 = p__77863;
var _ref_kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77864,(0),null);
var map__77867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77864,(1),null);
var map__77867__$1 = cljs.core.__destructure_map(map__77867);
var join_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77867__$1,new cljs.core.Keyword(null,"join-alias","join-alias",1454206794));
var source_field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77867__$1,new cljs.core.Keyword(null,"source-field","source-field",933829534));
var _ref_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77864,(2),null);
var or__5002__auto__ = (function (){var and__5000__auto__ = source_field;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source_field,new cljs.core.Keyword(null,"fk-field-id","fk-field-id",1124127357).cljs$core$IFn$_invoke$arity$1(column));
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(metabase.lib.equality.column_join_alias(column),join_alias);
}
});
/**
 * Inputs: [[_ref-kind _opts ref-name :as a-ref] :- :metabase.lib.schema.ref/ref columns :- [:sequential :metabase.lib.schema.metadata/column]]
 *   Return: [:sequential :metabase.lib.schema.metadata/column]
 */
metabase.lib.equality.plausible_matches_for_name = (function metabase$lib$equality$plausible_matches_for_name(p__77870,columns){
var vec__77871 = p__77870;
var _ref_kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77871,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77871,(1),null);
var ref_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77871,(2),null);
var a_ref = vec__77871;
var or__5002__auto__ = cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__77868_SHARP_){
var and__5000__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402).cljs$core$IFn$_invoke$arity$1(p1__77868_SHARP_),ref_name);
if(and__5000__auto__){
return metabase.lib.equality.matching_join_QMARK_(a_ref,p1__77868_SHARP_);
} else {
return and__5000__auto__;
}
}),columns));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__77869_SHARP_){
var and__5000__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__77869_SHARP_),ref_name);
if(and__5000__auto__){
return metabase.lib.equality.matching_join_QMARK_(a_ref,p1__77869_SHARP_);
} else {
return and__5000__auto__;
}
}),columns);
}
});
/**
 * Inputs: [[_ref-kind opts ref-id :as a-ref] :- :metabase.lib.schema.ref/ref columns :- [:sequential :metabase.lib.schema.metadata/column] generous? :- [:maybe :boolean]]
 *   Return: [:sequential :metabase.lib.schema.metadata/column]
 */
metabase.lib.equality.plausible_matches_for_id = (function metabase$lib$equality$plausible_matches_for_id(p__77876,columns,generous_QMARK_){
var vec__77877 = p__77876;
var _ref_kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77877,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77877,(1),null);
var ref_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77877,(2),null);
var a_ref = vec__77877;
var or__5002__auto__ = cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__77874_SHARP_){
var and__5000__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__77874_SHARP_),ref_id);
if(and__5000__auto__){
var or__5002__auto__ = (function (){var and__5000__auto____$1 = cljs.core.not(new cljs.core.Keyword(null,"join-alias","join-alias",1454206794).cljs$core$IFn$_invoke$arity$1(opts));
if(and__5000__auto____$1){
var G__77881 = new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(p1__77874_SHARP_);
var fexpr__77880 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("source","card","source/card",-139977973),null,new cljs.core.Keyword("source","fields","source/fields",-649667981),null], null), null);
return (fexpr__77880.cljs$core$IFn$_invoke$arity$1 ? fexpr__77880.cljs$core$IFn$_invoke$arity$1(G__77881) : fexpr__77880.call(null,G__77881));
} else {
return and__5000__auto____$1;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return metabase.lib.equality.matching_join_QMARK_(a_ref,p1__77874_SHARP_);
}
} else {
return and__5000__auto__;
}
}),columns));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = (cljs.core.truth_(generous_QMARK_)?cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__77875_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__77875_SHARP_),ref_id);
}),columns)):null);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return cljs.core.PersistentVector.EMPTY;
}
}
});
metabase.lib.equality.ambiguous_match_error = (function metabase$lib$equality$ambiguous_match_error(a_ref,columns){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Ambiguous match! Implement more logic in disambiguate-matches.",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),a_ref,new cljs.core.Keyword(null,"columns","columns",1998437288),columns], null));
});
/**
 * Inputs: [column]
 *   Return: :any
 */
metabase.lib.equality.expression_column_QMARK_ = (function metabase$lib$equality$expression_column_QMARK_(column){
var or__5002__auto__ = metabase.lib.equality._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword("source","expressions","source/expressions",-458367840));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword("lib","expression-name","lib/expression-name",-1799326590).cljs$core$IFn$_invoke$arity$1(column);
}
});
/**
 * Inputs: [a-ref :- :metabase.lib.schema.ref/ref columns :- [:sequential :metabase.lib.schema.metadata/column]]
 *   Return: [:maybe :metabase.lib.schema.metadata/column]
 *        
 * 
 *   If a custom column is a simple wrapper for a field, that column gets `:id`, `:table_id`, etc.
 *   A custom column should get a ref like `[:expression {} "expr name"]`, not `[:field {} 17]`.
 *   If we got a `:field` ref, prefer matches which are not `:lib/source :source/expressions`.
 */
metabase.lib.equality.disambiguate_matches_dislike_field_refs_to_expressions = (function metabase$lib$equality$disambiguate_matches_dislike_field_refs_to_expressions(a_ref,columns){
var or__5002__auto__ = (cljs.core.truth_(metabase.lib.equality._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(a_ref),new cljs.core.Keyword(null,"field","field",-1302436500)))?(function (){var temp__5804__auto__ = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(metabase.lib.equality.expression_column_QMARK_,columns));
if(cljs.core.truth_(temp__5804__auto__)){
var non_exprs = temp__5804__auto__;
if(cljs.core.next(non_exprs)){
return null;
} else {
return cljs.core.first(non_exprs);
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return console.warn(metabase.lib.equality.ambiguous_match_error(a_ref,columns));
}
});
/**
 * Inputs: [a-ref :- :metabase.lib.schema.ref/ref columns :- [:sequential {:min 2} :metabase.lib.schema.metadata/column]]
 *   Return: [:maybe :metabase.lib.schema.metadata/column]
 *        
 * 
 *   If there are multiple matching columns and `a-ref` has a temporal bucket, check if only one column has that same
 *   unit.
 */
metabase.lib.equality.disambiguate_matches_find_match_with_same_temporal_bucket = (function metabase$lib$equality$disambiguate_matches_find_match_with_same_temporal_bucket(a_ref,columns){
var or__5002__auto__ = (function (){var temp__5804__auto__ = metabase.lib.temporal_bucket.raw_temporal_bucket(a_ref);
if(cljs.core.truth_(temp__5804__auto__)){
var temporal_bucket = temp__5804__auto__;
var matching_columns = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (col){
return metabase.lib.equality._EQ_.cljs$core$IFn$_invoke$arity$2(metabase.lib.temporal_bucket.raw_temporal_bucket(col),temporal_bucket);
}),columns);
if(cljs.core.truth_(metabase.lib.equality._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(matching_columns),(1)))){
return cljs.core.first(matching_columns);
} else {
return null;
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return metabase.lib.equality.disambiguate_matches_dislike_field_refs_to_expressions(a_ref,columns);
}
});
/**
 * Inputs: [a-ref :- :metabase.lib.schema.ref/ref columns :- [:sequential :metabase.lib.schema.metadata/column]]
 *   Return: [:maybe :metabase.lib.schema.metadata/column]
 *        
 * 
 *   Prefers table-default or explicitly joined columns over implicitly joinable ones.
 */
metabase.lib.equality.disambiguate_matches_prefer_explicit = (function metabase$lib$equality$disambiguate_matches_prefer_explicit(a_ref,columns){
var temp__5802__auto__ = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fk-field-id","fk-field-id",1124127357),columns));
if(cljs.core.truth_(temp__5802__auto__)){
var no_implicit = temp__5802__auto__;
if(cljs.core.not(cljs.core.next(no_implicit))){
return cljs.core.first(no_implicit);
} else {
return metabase.lib.equality.disambiguate_matches_find_match_with_same_temporal_bucket(a_ref,no_implicit);
}
} else {
return null;
}
});
/**
 * Inputs: [a-ref :- :metabase.lib.schema.ref/ref columns :- [:sequential :metabase.lib.schema.metadata/column]]
 *   Return: [:maybe :metabase.lib.schema.metadata/column]
 */
metabase.lib.equality.disambiguate_matches_no_alias = (function metabase$lib$equality$disambiguate_matches_no_alias(a_ref,columns){
var temp__5802__auto__ = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__77883_SHARP_){
var and__5000__auto__ = metabase.lib.equality.column_join_alias(p1__77883_SHARP_);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not((function (){var G__77885 = new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(p1__77883_SHARP_);
var fexpr__77884 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("source","card","source/card",-139977973),null], null), null);
return (fexpr__77884.cljs$core$IFn$_invoke$arity$1 ? fexpr__77884.cljs$core$IFn$_invoke$arity$1(G__77885) : fexpr__77884.call(null,G__77885));
})());
} else {
return and__5000__auto__;
}
}),columns));
if(cljs.core.truth_(temp__5802__auto__)){
var no_alias = temp__5802__auto__;
if(cljs.core.not(cljs.core.next(no_alias))){
return cljs.core.first(no_alias);
} else {
return metabase.lib.equality.disambiguate_matches_prefer_explicit(a_ref,no_alias);
}
} else {
return null;
}
});
/**
 * Inputs: [a-ref :- :metabase.lib.schema.ref/ref columns :- [:sequential :metabase.lib.schema.metadata/column]]
 *   Return: [:maybe :metabase.lib.schema.metadata/column]
 */
metabase.lib.equality.disambiguate_matches = (function metabase$lib$equality$disambiguate_matches(a_ref,columns){
var map__77887 = metabase.lib.options.options(a_ref);
var map__77887__$1 = cljs.core.__destructure_map(map__77887);
var join_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77887__$1,new cljs.core.Keyword(null,"join-alias","join-alias",1454206794));
if(cljs.core.truth_(join_alias)){
var temp__5804__auto__ = cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__77886_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(metabase.lib.equality.column_join_alias(p1__77886_SHARP_),join_alias);
}),columns));
if(cljs.core.truth_(temp__5804__auto__)){
var matches = temp__5804__auto__;
if(cljs.core.not(cljs.core.next(matches))){
return cljs.core.first(matches);
} else {
return console.warn("Multiple plausible matches with the same :join-alias - more disambiguation needed",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),a_ref,new cljs.core.Keyword(null,"matches","matches",635497998),matches], null));
}
} else {
return null;
}
} else {
return metabase.lib.equality.disambiguate_matches_no_alias(a_ref,columns);
}
});
metabase.lib.equality.FindMatchingColumnOptions = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"generous?","generous?",1247836118),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null);
/**
 * Inputs: ([a-ref columns]
 *         [[ref-kind _opts ref-id :as a-ref] :- :metabase.lib.schema.ref/ref columns :- [:sequential :metabase.lib.schema.metadata/column] {:keys [generous?]} :- FindMatchingColumnOptions]
 *         [query stage-number a-ref-or-column columns]
 *         [query :- [:maybe :metabase.lib.schema/query] stage-number :- :int a-ref-or-column :- [:or :metabase.lib.schema.metadata/column :metabase.lib.schema.ref/ref] columns :- [:sequential :metabase.lib.schema.metadata/column] opts :- FindMatchingColumnOptions])
 *   Return: [:maybe :metabase.lib.schema.metadata/column]
 *        
 * 
 *   Given `a-ref-or-column` and a list of `columns`, finds the column that best matches this ref or column.
 * 
 *   Matching is based on finding the basically plausible matches first. There is often zero or one plausible matches, and
 *   this can return quickly.
 * 
 *   If there are multiple plausible matches, they are disambiguated by the most important extra included in the `ref`.
 *   (`:join-alias` first, then `:temporal-unit`, etc.)
 * 
 *   - Integer IDs in the `ref` are matched by ID; this usually is unambiguous.
 *  - If there are multiple joins on one table (including possible implicit joins), check `:join-alias` next.
 *    - If `a-ref` has a `:join-alias`, only a column which matches it can be the match, and it should be unique.
 *    - If `a-ref` doesn't have a `:join-alias`, prefer the column with no `:join-alias`, and prefer already selected
 *      columns over implicitly joinable ones.
 *  - There may be broken cases where the ref has an ID but the column does not. Therefore the ID must be resolved to a
 *    name or `:lib/desired-column-alias` and matched that way.
 *    - `query` and `stage-number` are required for this case, since they're needed to resolve the correct name.
 *    - Columns with `:id` set are dropped to prevent them matching. (If they didn't match by `:id` above they shouldn't
 *      match by name due to a coincidence of column names in different tables.)
 *   - String IDs are checked against `:lib/desired-column-alias` first.
 *  - If that doesn't match any columns, `:name` is compared next.
 *  - The same disambiguation (by `:join-alias` etc.) is applied if there are multiple plausible matches.
 * 
 *   Returns the matching column, or nil if no match is found.
 */
metabase.lib.equality.find_matching_column = (function() {
var metabase$lib$equality$find_matching_column = null;
var metabase$lib$equality$find_matching_column__2 = (function (a_ref,columns){
var G__77892 = a_ref;
var G__77893 = columns;
var G__77894 = cljs.core.PersistentArrayMap.EMPTY;
return (metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$3(G__77892,G__77893,G__77894) : metabase.lib.equality.find_matching_column.call(null,G__77892,G__77893,G__77894));
});
var metabase$lib$equality$find_matching_column__3 = (function (p__77890,columns,p__77891){
var vec__77895 = p__77890;
var ref_kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77895,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77895,(1),null);
var ref_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77895,(2),null);
var a_ref = vec__77895;
var map__77898 = p__77891;
var map__77898__$1 = cljs.core.__destructure_map(map__77898);
var generous_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77898__$1,new cljs.core.Keyword(null,"generous?","generous?",1247836118));
var G__77899 = ref_kind;
var G__77899__$1 = (((G__77899 instanceof cljs.core.Keyword))?G__77899.fqn:null);
switch (G__77899__$1) {
case "aggregation":
return medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p1__77888_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(p1__77888_SHARP_),new cljs.core.Keyword("source","aggregations","source/aggregations",-1828710137))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source-uuid","lib/source-uuid",1828897581).cljs$core$IFn$_invoke$arity$1(p1__77888_SHARP_),ref_id)));
}),columns);

break;
case "expression":
case "field":
var plausible = ((typeof ref_id === 'string')?metabase.lib.equality.plausible_matches_for_name(a_ref,columns):metabase.lib.equality.plausible_matches_for_id(a_ref,columns,generous_QMARK_));
var G__77900 = cljs.core.count(plausible);
switch (G__77900) {
case (0):
return null;

break;
case (1):
return cljs.core.first(plausible);

break;
default:
return metabase.lib.equality.disambiguate_matches(a_ref,plausible);

}

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unknown type of ref",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),a_ref], null));

}
});
var metabase$lib$equality$find_matching_column__4 = (function (query,stage_number,a_ref_or_column,columns){
var G__77901 = query;
var G__77902 = stage_number;
var G__77903 = a_ref_or_column;
var G__77904 = columns;
var G__77905 = cljs.core.PersistentArrayMap.EMPTY;
return (metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$5 ? metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$5(G__77901,G__77902,G__77903,G__77904,G__77905) : metabase.lib.equality.find_matching_column.call(null,G__77901,G__77902,G__77903,G__77904,G__77905));
});
var metabase$lib$equality$find_matching_column__5 = (function (query,stage_number,a_ref_or_column,columns,opts){
var vec__77906 = ((metabase.lib.util.clause_QMARK_(a_ref_or_column))?a_ref_or_column:metabase.lib.ref.ref(a_ref_or_column));
var ref_kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77906,(0),null);
var ref_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77906,(1),null);
var ref_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77906,(2),null);
var a_ref = vec__77906;
var or__5002__auto__ = (metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$3(a_ref,columns,opts) : metabase.lib.equality.find_matching_column.call(null,a_ref,columns,opts));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = (cljs.core.truth_((function (){var and__5000__auto__ = metabase.lib.equality._EQ_.cljs$core$IFn$_invoke$arity$2(ref_kind,new cljs.core.Keyword(null,"aggregation","aggregation",1597476696));
if(cljs.core.truth_(and__5000__auto__)){
return new cljs.core.Keyword("lib","source-name","lib/source-name",1931622490).cljs$core$IFn$_invoke$arity$1(ref_opts);
} else {
return and__5000__auto__;
}
})())?medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (p1__77889_SHARP_){
var and__5000__auto__ = metabase.lib.equality._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","source","lib/source",-434086550).cljs$core$IFn$_invoke$arity$1(p1__77889_SHARP_),new cljs.core.Keyword("source","aggregations","source/aggregations",-1828710137));
if(cljs.core.truth_(and__5000__auto__)){
return metabase.lib.equality._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__77889_SHARP_),new cljs.core.Keyword("lib","source-name","lib/source-name",1931622490).cljs$core$IFn$_invoke$arity$1(ref_opts));
} else {
return and__5000__auto__;
}
}),columns):null);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = query;
if(cljs.core.truth_(and__5000__auto__)){
return typeof ref_id === 'number';
} else {
return and__5000__auto__;
}
})())){
var temp__5804__auto__ = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),columns));
if(cljs.core.truth_(temp__5804__auto__)){
var no_id_columns = temp__5804__auto__;
var temp__5804__auto____$1 = ((metabase.lib.util.clause_QMARK_(a_ref_or_column))?metabase.lib.equality.resolve_field_id(query,stage_number,ref_id):a_ref_or_column);
if(cljs.core.truth_(temp__5804__auto____$1)){
var resolved = temp__5804__auto____$1;
var G__77909 = metabase.lib.options.update_options(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a_ref,(2),(function (){var or__5002__auto____$2 = new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402).cljs$core$IFn$_invoke$arity$1(resolved);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(resolved);
}
})()),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"base-type","base-type",1167971299),new cljs.core.Keyword("type","*","type/*",-1283496752)], null)));
var G__77910 = no_id_columns;
var G__77911 = opts;
return (metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$3 ? metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$3(G__77909,G__77910,G__77911) : metabase.lib.equality.find_matching_column.call(null,G__77909,G__77910,G__77911));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}
}
});
metabase$lib$equality$find_matching_column = function(query,stage_number,a_ref_or_column,columns,opts){
switch(arguments.length){
case 2:
return metabase$lib$equality$find_matching_column__2.call(this,query,stage_number);
case 3:
return metabase$lib$equality$find_matching_column__3.call(this,query,stage_number,a_ref_or_column);
case 4:
return metabase$lib$equality$find_matching_column__4.call(this,query,stage_number,a_ref_or_column,columns);
case 5:
return metabase$lib$equality$find_matching_column__5.call(this,query,stage_number,a_ref_or_column,columns,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$equality$find_matching_column.cljs$core$IFn$_invoke$arity$2 = metabase$lib$equality$find_matching_column__2;
metabase$lib$equality$find_matching_column.cljs$core$IFn$_invoke$arity$3 = metabase$lib$equality$find_matching_column__3;
metabase$lib$equality$find_matching_column.cljs$core$IFn$_invoke$arity$4 = metabase$lib$equality$find_matching_column__4;
metabase$lib$equality$find_matching_column.cljs$core$IFn$_invoke$arity$5 = metabase$lib$equality$find_matching_column__5;
return metabase$lib$equality$find_matching_column;
})()
;
metabase.lib.equality.ref_id_or_name = (function metabase$lib$equality$ref_id_or_name(p__77912){
var vec__77913 = p__77912;
var _ref_kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77913,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77913,(1),null);
var id_or_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77913,(2),null);
return id_or_name;
});
/**
 * Inputs: [column :- :metabase.lib.schema.metadata/column refs :- [:sequential :metabase.lib.schema.ref/ref]]
 *   Return: [:maybe :metabase.lib.schema.ref/ref]
 *        
 * 
 *   Given `column` and a list of `refs`, finds the ref that best matches this column.
 * 
 *   Throws if there are multiple, ambiguous matches.
 * 
 *   Returns the matching ref, or nil if no plausible matches are found.
 */
metabase.lib.equality.find_matching_ref = (function metabase$lib$equality$find_matching_ref(column,refs){
var ref_tails = cljs.core.group_by(metabase.lib.equality.ref_id_or_name,refs);
var matches = (function (){var or__5002__auto__ = (function (){var G__77916 = column;
var G__77916__$1 = (((G__77916 == null))?null:new cljs.core.Keyword("lib","source-uuid","lib/source-uuid",1828897581).cljs$core$IFn$_invoke$arity$1(G__77916));
var G__77916__$2 = (((G__77916__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(ref_tails,G__77916__$1));
if((G__77916__$2 == null)){
return null;
} else {
return cljs.core.not_empty(G__77916__$2);
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(ref_tails,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column)));
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(ref_tails,new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402).cljs$core$IFn$_invoke$arity$1(column)));
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
var or__5002__auto____$3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ref_tails,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(column));
if(cljs.core.truth_(or__5002__auto____$3)){
return or__5002__auto____$3;
} else {
return cljs.core.PersistentVector.EMPTY;
}
}
}
}
})();
var G__77917 = cljs.core.count(matches);
switch (G__77917) {
case (0):
return null;

break;
case (1):
return cljs.core.first(matches);

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Ambiguous match: given column matches multiple refs",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column","column",2078222095),column,new cljs.core.Keyword(null,"matching-refs","matching-refs",324693611),matches], null));

}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int needles :- [:sequential :metabase.lib.schema.ref/ref] haystack :- [:sequential :metabase.lib.schema.metadata/column]]
 *   Return: [:sequential :int]
 *        
 * 
 *   Given a list `haystack` of columns or refs, and a list `needles` of refs to searc for, this returns a list parallel
 *   to `needles` with the corresponding index into the `haystack`, or -1 if not found.
 * 
 *   DISCOURAGED: This is intended for use only by [[metabase.lib.js/find-column-indexes-from-legacy-refs]].
 *   Other MLv2 code should use [[find-matching-column]] if the `haystack` is columns, or
 *   [[find-matching-ref]] if it's refs.
 */
metabase.lib.equality.find_column_indexes_for_refs = (function metabase$lib$equality$find_column_indexes_for_refs(query,stage_number,needles,haystack){
var by_column = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (index,column){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column,index], null);
})),haystack);
var iter__5480__auto__ = (function metabase$lib$equality$find_column_indexes_for_refs_$_iter__77918(s__77919){
return (new cljs.core.LazySeq(null,(function (){
var s__77919__$1 = s__77919;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__77919__$1);
if(temp__5804__auto__){
var s__77919__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77919__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__77919__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__77921 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__77920 = (0);
while(true){
if((i__77920 < size__5479__auto__)){
var needle = cljs.core._nth(c__5478__auto__,i__77920);
var matched = metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$4(query,stage_number,needle,haystack);
cljs.core.chunk_append(b__77921,cljs.core.get.cljs$core$IFn$_invoke$arity$3(by_column,matched,(-1)));

var G__77946 = (i__77920 + (1));
i__77920 = G__77946;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77921),metabase$lib$equality$find_column_indexes_for_refs_$_iter__77918(cljs.core.chunk_rest(s__77919__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77921),null);
}
} else {
var needle = cljs.core.first(s__77919__$2);
var matched = metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$4(query,stage_number,needle,haystack);
return cljs.core.cons(cljs.core.get.cljs$core$IFn$_invoke$arity$3(by_column,matched,(-1)),metabase$lib$equality$find_column_indexes_for_refs_$_iter__77918(cljs.core.rest(s__77919__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(needles);
});
/**
 * Inputs: ([query legacy-ref metadatas]
 *         [query :- :metabase.lib.schema/query stage-number :- :int legacy-ref :- :some metadatas :- [:maybe [:sequential :metabase.lib.schema.metadata/column]]])
 *   Return: [:maybe :metabase.lib.schema.metadata/column]
 *        
 * 
 *   Like [[find-matching-column]], but takes a legacy MBQL reference. The name here is for consistency with other
 *   FE names for similar functions.
 */
metabase.lib.equality.find_column_for_legacy_ref = (function() {
var metabase$lib$equality$find_column_for_legacy_ref = null;
var metabase$lib$equality$find_column_for_legacy_ref__3 = (function (query,legacy_ref,metadatas){
return (metabase.lib.equality.find_column_for_legacy_ref.cljs$core$IFn$_invoke$arity$4 ? metabase.lib.equality.find_column_for_legacy_ref.cljs$core$IFn$_invoke$arity$4(query,(-1),legacy_ref,metadatas) : metabase.lib.equality.find_column_for_legacy_ref.call(null,query,(-1),legacy_ref,metadatas));
});
var metabase$lib$equality$find_column_for_legacy_ref__4 = (function (query,stage_number,legacy_ref,metadatas){
return metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$4(query,stage_number,metabase.lib.convert.legacy_ref__GT_pMBQL.cljs$core$IFn$_invoke$arity$3(query,stage_number,legacy_ref),metadatas);
});
metabase$lib$equality$find_column_for_legacy_ref = function(query,stage_number,legacy_ref,metadatas){
switch(arguments.length){
case 3:
return metabase$lib$equality$find_column_for_legacy_ref__3.call(this,query,stage_number,legacy_ref);
case 4:
return metabase$lib$equality$find_column_for_legacy_ref__4.call(this,query,stage_number,legacy_ref,metadatas);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$equality$find_column_for_legacy_ref.cljs$core$IFn$_invoke$arity$3 = metabase$lib$equality$find_column_for_legacy_ref__3;
metabase$lib$equality$find_column_for_legacy_ref.cljs$core$IFn$_invoke$arity$4 = metabase$lib$equality$find_column_for_legacy_ref__4;
return metabase$lib$equality$find_column_for_legacy_ref;
})()
;
/**
 * Mark `columns` as `:selected?` if they appear in `selected-columns-or-refs`. Uses fuzzy matching with
 *   [[find-matching-column]].
 * 
 *   Example usage:
 * 
 *  ;; example (simplified) implementation of [[metabase.lib.field/fieldable-columns]]
 *  ;;
 *  ;; return (visibile-columns query), but if any of those appear in `:fields`, mark then `:selected?`
 *  (mark-selected-columns (visible-columns query) (:fields stage))
 */
metabase.lib.equality.mark_selected_columns = (function metabase$lib$equality$mark_selected_columns(var_args){
var G__77925 = arguments.length;
switch (G__77925) {
case 2:
return metabase.lib.equality.mark_selected_columns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return metabase.lib.equality.mark_selected_columns.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(metabase.lib.equality.mark_selected_columns.cljs$core$IFn$_invoke$arity$2 = (function (cols,selected_columns_or_refs){
return metabase.lib.equality.mark_selected_columns.cljs$core$IFn$_invoke$arity$4(null,(-1),cols,selected_columns_or_refs);
}));

(metabase.lib.equality.mark_selected_columns.cljs$core$IFn$_invoke$arity$4 = (function (query,stage_number,cols,selected_columns_or_refs){
if(cljs.core.seq(cols)){
var selected_refs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(metabase.lib.ref.ref,selected_columns_or_refs);
var matching_selected_cols = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__77922_SHARP_){
return metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$4(query,stage_number,p1__77922_SHARP_,cols);
})),selected_refs);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__77923_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__77923_SHARP_,new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core.contains_QMARK_(matching_selected_cols,p1__77923_SHARP_));
}),cols);
} else {
return null;
}
}));

(metabase.lib.equality.mark_selected_columns.cljs$lang$maxFixedArity = 4);

/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int refs :- [:sequential :metabase.lib.schema.ref/ref] columns :- [:sequential :metabase.lib.schema.metadata/column]]
 *   Return: :boolean
 *        
 * 
 *   Returns true if the provided `refs` is the same set as the provided `columns`.
 * 
 *   Order is ignored. Only returns true if each of the `refs` matches a column, and each of the `columns` is matched by
 *   exactly 1 of the `refs`. (A bijection, in math terms.)
 */
metabase.lib.equality.matching_column_sets_QMARK_ = (function metabase$lib$equality$matching_column_sets_QMARK_(query,stage_number,refs,columns){
var and__5000__auto__ = metabase.lib.equality._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(refs),cljs.core.count(columns));
if(cljs.core.truth_(and__5000__auto__)){
var matching = cljs.core.group_by((function (p1__77926_SHARP_){
return metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$4(query,stage_number,p1__77926_SHARP_,columns);
}),refs);
var and__5000__auto____$1 = (!(cljs.core.contains_QMARK_(matching,null)));
if(and__5000__auto____$1){
var and__5000__auto____$2 = metabase.lib.equality._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(matching),cljs.core.count(columns));
if(cljs.core.truth_(and__5000__auto____$2)){
return cljs.core.every_QMARK_((function (p1__77927_SHARP_){
return metabase.lib.equality._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(p1__77927_SHARP_),(1));
}),cljs.core.vals(matching));
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});

//# sourceMappingURL=metabase.lib.equality.js.map
