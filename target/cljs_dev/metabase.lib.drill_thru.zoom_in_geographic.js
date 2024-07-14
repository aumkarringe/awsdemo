var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./medley.core.js");
require("./metabase.lib.binning.js");
require("./metabase.lib.breakout.js");
require("./metabase.lib.drill_thru.common.js");
require("./metabase.lib.filter.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.remove_replace.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.binning.js");
require("./metabase.lib.schema.drill_thru.js");
require("./metabase.lib.schema.metadata.js");
require("./metabase.lib.types.isa.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.drill_thru.zoom_in_geographic.js");

goog.provide('metabase.lib.drill_thru.zoom_in_geographic');
metabase.lib.drill_thru.zoom_in_geographic.ContextWithLatLon = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.Keyword("metabase.lib.schema.drill-thru","context","metabase.lib.schema.drill-thru/context",122725764),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lat-column","lat-column",1965458315),new cljs.core.Keyword("metabase.lib.schema.metadata","column","metabase.lib.schema.metadata/column",-570344650)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lon-column","lon-column",429789861),new cljs.core.Keyword("metabase.lib.schema.metadata","column","metabase.lib.schema.metadata/column",-570344650)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lat-value","lat-value",814957942),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),cljs.core.number_QMARK_], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lon-value","lon-value",-636095859),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),cljs.core.number_QMARK_], null)], null)], null)], null);
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int {:keys [row], :as context} :- :metabase.lib.schema.drill-thru/context]
 *   Return: [:maybe ContextWithLatLon]
 */
metabase.lib.drill_thru.zoom_in_geographic.context_with_lat_lon = (function metabase$lib$drill_thru$zoom_in_geographic$context_with_lat_lon(query,stage_number,p__79440){
var map__79442 = p__79440;
var map__79442__$1 = cljs.core.__destructure_map(map__79442);
var context = map__79442__$1;
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79442__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var stage = metabase.lib.util.query_stage(query,stage_number);
var vec__79444 = cljs.core.some((function (columns){
var temp__5804__auto__ = medley.core.find_first.cljs$core$IFn$_invoke$arity$2(metabase.lib.types.isa.latitude_QMARK_,columns);
if(cljs.core.truth_(temp__5804__auto__)){
var lat_column = temp__5804__auto__;
var temp__5804__auto____$1 = medley.core.find_first.cljs$core$IFn$_invoke$arity$2(metabase.lib.types.isa.longitude_QMARK_,columns);
if(cljs.core.truth_(temp__5804__auto____$1)){
var lon_column = temp__5804__auto____$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lat_column,lon_column], null);
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$3(query,stage_number,stage),metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$3(query,stage_number,stage)], null));
var lat_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79444,(0),null);
var lon_column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79444,(1),null);
if(cljs.core.truth_((function (){var and__5000__auto__ = lat_column;
if(cljs.core.truth_(and__5000__auto__)){
return lon_column;
} else {
return and__5000__auto__;
}
})())){
var same_column_QMARK_ = (function metabase$lib$drill_thru$zoom_in_geographic$context_with_lat_lon_$_same_column_QMARK_(col_x,col_y){
if(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(col_x))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(col_x),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(col_y));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402).cljs$core$IFn$_invoke$arity$1(col_x),new cljs.core.Keyword("lib","desired-column-alias","lib/desired-column-alias",-1998967402).cljs$core$IFn$_invoke$arity$1(col_y));
}
});
var column_value = (function metabase$lib$drill_thru$zoom_in_geographic$context_with_lat_lon_$_column_value(column){
return cljs.core.some((function (row_value){
if(cljs.core.truth_(same_column_QMARK_(column,new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(row_value)))){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(row_value);
} else {
return null;
}
}),row);
});
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(context,new cljs.core.Keyword(null,"lat-column","lat-column",1965458315),lat_column,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lon-column","lon-column",429789861),lon_column,new cljs.core.Keyword(null,"lat-value","lat-value",814957942),column_value(lat_column),new cljs.core.Keyword(null,"lon-value","lon-value",-636095859),column_value(lon_column)], 0));
} else {
return null;
}
});
/**
 * Inputs: [{:keys [column value lat-column lon-column], :as _context} :- ContextWithLatLon lat-lon-bin-width :- :metabase.lib.schema.binning/bin-width]
 *   Return: [:maybe :metabase.lib.schema.drill-thru/drill-thru.zoom-in.geographic.country-state-city->binned-lat-lon]
 */
metabase.lib.drill_thru.zoom_in_geographic.country_state_city__GT_binned_lat_lon_drill = (function metabase$lib$drill_thru$zoom_in_geographic$country_state_city__GT_binned_lat_lon_drill(p__79452,lat_lon_bin_width){
var map__79453 = p__79452;
var map__79453__$1 = cljs.core.__destructure_map(map__79453);
var _context = map__79453__$1;
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79453__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79453__$1,new cljs.core.Keyword(null,"value","value",305978217));
var lat_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79453__$1,new cljs.core.Keyword(null,"lat-column","lat-column",1965458315));
var lon_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79453__$1,new cljs.core.Keyword(null,"lon-column","lon-column",429789861));
if(cljs.core.truth_(value)){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metabase.lib.drill-thru","drill-thru","metabase.lib.drill-thru/drill-thru",-67424984),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("drill-thru","zoom-in.geographic","drill-thru/zoom-in.geographic",1219982283),new cljs.core.Keyword(null,"subtype","subtype",-2092672993),new cljs.core.Keyword("drill-thru.zoom-in.geographic","country-state-city->binned-lat-lon","drill-thru.zoom-in.geographic/country-state-city->binned-lat-lon",1962666885),new cljs.core.Keyword(null,"column","column",2078222095),column,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column","column",2078222095),lat_column,new cljs.core.Keyword(null,"bin-width","bin-width",1377922579),lat_lon_bin_width], null),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column","column",2078222095),lon_column,new cljs.core.Keyword(null,"bin-width","bin-width",1377922579),lat_lon_bin_width], null)], null);
} else {
return null;
}
});
/**
 * Inputs: [{:keys [column], :as context} :- ContextWithLatLon]
 *   Return: [:maybe :metabase.lib.schema.drill-thru/drill-thru.zoom-in.geographic.country-state-city->binned-lat-lon]
 */
metabase.lib.drill_thru.zoom_in_geographic.country__GT_binned_lat_lon_drill = (function metabase$lib$drill_thru$zoom_in_geographic$country__GT_binned_lat_lon_drill(p__79454){
var map__79455 = p__79454;
var map__79455__$1 = cljs.core.__destructure_map(map__79455);
var context = map__79455__$1;
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79455__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_((function (){var G__79456 = column;
if((G__79456 == null)){
return null;
} else {
return metabase.lib.types.isa.country_QMARK_(G__79456);
}
})())){
return metabase.lib.drill_thru.zoom_in_geographic.country_state_city__GT_binned_lat_lon_drill(context,(10));
} else {
return null;
}
});
/**
 * Inputs: [{:keys [column], :as context} :- ContextWithLatLon]
 *   Return: [:maybe :metabase.lib.schema.drill-thru/drill-thru.zoom-in.geographic.country-state-city->binned-lat-lon]
 */
metabase.lib.drill_thru.zoom_in_geographic.state__GT_binned_lat_lon_drill = (function metabase$lib$drill_thru$zoom_in_geographic$state__GT_binned_lat_lon_drill(p__79459){
var map__79460 = p__79459;
var map__79460__$1 = cljs.core.__destructure_map(map__79460);
var context = map__79460__$1;
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79460__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_((function (){var G__79461 = column;
if((G__79461 == null)){
return null;
} else {
return metabase.lib.types.isa.state_QMARK_(G__79461);
}
})())){
return metabase.lib.drill_thru.zoom_in_geographic.country_state_city__GT_binned_lat_lon_drill(context,(1));
} else {
return null;
}
});
/**
 * Inputs: [{:keys [column], :as context} :- ContextWithLatLon]
 *   Return: [:maybe :metabase.lib.schema.drill-thru/drill-thru.zoom-in.geographic.country-state-city->binned-lat-lon]
 */
metabase.lib.drill_thru.zoom_in_geographic.city__GT_binned_lat_lon_drill = (function metabase$lib$drill_thru$zoom_in_geographic$city__GT_binned_lat_lon_drill(p__79462){
var map__79463 = p__79462;
var map__79463__$1 = cljs.core.__destructure_map(map__79463);
var context = map__79463__$1;
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79463__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_((function (){var G__79464 = column;
if((G__79464 == null)){
return null;
} else {
return metabase.lib.types.isa.city_QMARK_(G__79464);
}
})())){
return metabase.lib.drill_thru.zoom_in_geographic.country_state_city__GT_binned_lat_lon_drill(context,0.1);
} else {
return null;
}
});
/**
 * Inputs: [metadata-providerable :- :metabase.lib.schema.metadata/metadata-providerable {:keys [lat-column lon-column lat-value lon-value], :as _context} :- ContextWithLatLon]
 *   Return: [:maybe :metabase.lib.schema.drill-thru/drill-thru.zoom-in.geographic.binned-lat-lon->binned-lat-lon]
 */
metabase.lib.drill_thru.zoom_in_geographic.binned_lat_lon__GT_binned_lat_lon_drill = (function metabase$lib$drill_thru$zoom_in_geographic$binned_lat_lon__GT_binned_lat_lon_drill(metadata_providerable,p__79465){
var map__79466 = p__79465;
var map__79466__$1 = cljs.core.__destructure_map(map__79466);
var _context = map__79466__$1;
var lat_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79466__$1,new cljs.core.Keyword(null,"lat-column","lat-column",1965458315));
var lon_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79466__$1,new cljs.core.Keyword(null,"lon-column","lon-column",429789861));
var lat_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79466__$1,new cljs.core.Keyword(null,"lat-value","lat-value",814957942));
var lon_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79466__$1,new cljs.core.Keyword(null,"lon-value","lon-value",-636095859));
if(cljs.core.truth_((function (){var and__5000__auto__ = lat_value;
if(cljs.core.truth_(and__5000__auto__)){
return lon_value;
} else {
return and__5000__auto__;
}
})())){
var temp__5804__auto__ = metabase.lib.binning.resolve_bin_width(metadata_providerable,lat_column,lat_value);
if(cljs.core.truth_(temp__5804__auto__)){
var map__79467 = temp__5804__auto__;
var map__79467__$1 = cljs.core.__destructure_map(map__79467);
var lat_bin_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79467__$1,new cljs.core.Keyword(null,"bin-width","bin-width",1377922579));
var temp__5804__auto____$1 = metabase.lib.binning.resolve_bin_width(metadata_providerable,lon_column,lon_value);
if(cljs.core.truth_(temp__5804__auto____$1)){
var map__79468 = temp__5804__auto____$1;
var map__79468__$1 = cljs.core.__destructure_map(map__79468);
var lon_bin_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79468__$1,new cljs.core.Keyword(null,"bin-width","bin-width",1377922579));
var vec__79470 = (((((lat_bin_width >= (20))) && ((lon_bin_width >= (20)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(10)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(lat_bin_width / 10.0),(lon_bin_width / 10.0)], null));
var new_lat_bin_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79470,(0),null);
var new_lon_bin_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79470,(1),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metabase.lib.drill-thru","drill-thru","metabase.lib.drill-thru/drill-thru",-67424984),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("drill-thru","zoom-in.geographic","drill-thru/zoom-in.geographic",1219982283),new cljs.core.Keyword(null,"subtype","subtype",-2092672993),new cljs.core.Keyword("drill-thru.zoom-in.geographic","binned-lat-lon->binned-lat-lon","drill-thru.zoom-in.geographic/binned-lat-lon->binned-lat-lon",-273899694),new cljs.core.Keyword(null,"latitude","latitude",394867543),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"column","column",2078222095),lat_column,new cljs.core.Keyword(null,"bin-width","bin-width",1377922579),new_lat_bin_width,new cljs.core.Keyword(null,"min","min",444991522),lat_value,new cljs.core.Keyword(null,"max","max",61366548),(lat_value + lat_bin_width)], null),new cljs.core.Keyword(null,"longitude","longitude",-1268876372),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"column","column",2078222095),lon_column,new cljs.core.Keyword(null,"bin-width","bin-width",1377922579),new_lon_bin_width,new cljs.core.Keyword(null,"min","min",444991522),lon_value,new cljs.core.Keyword(null,"max","max",61366548),(lon_value + lon_bin_width)], null)], null);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int {:keys [value], :as context} :- :metabase.lib.schema.drill-thru/context]
 *   Return: [:maybe :metabase.lib.schema.drill-thru/drill-thru.zoom-in.geographic]
 *        
 * 
 *   Return a `:drill-thru/zoom-in.geographic` drill if appropriate. See docstring
 *   for [[metabase.lib.drill-thru.zoom-in-geographic]] for more information on what circumstances this is returned in
 *   and what it means to apply this drill.
 */
metabase.lib.drill_thru.zoom_in_geographic.zoom_in_geographic_drill = (function metabase$lib$drill_thru$zoom_in_geographic$zoom_in_geographic_drill(query,stage_number,p__79474){
var map__79481 = p__79474;
var map__79481__$1 = cljs.core.__destructure_map(map__79481);
var context = map__79481__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79481__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_(value)){
var temp__5804__auto__ = metabase.lib.drill_thru.zoom_in_geographic.context_with_lat_lon(query,stage_number,context);
if(cljs.core.truth_(temp__5804__auto__)){
var context__$1 = temp__5804__auto__;
return cljs.core.some((function (f){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(context__$1) : f.call(null,context__$1));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.drill_thru.zoom_in_geographic.country__GT_binned_lat_lon_drill,metabase.lib.drill_thru.zoom_in_geographic.state__GT_binned_lat_lon_drill,metabase.lib.drill_thru.zoom_in_geographic.city__GT_binned_lat_lon_drill,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(metabase.lib.drill_thru.zoom_in_geographic.binned_lat_lon__GT_binned_lat_lon_drill,query)], null));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int column :- :metabase.lib.schema.metadata/column bin-width :- pos?]
 *   Return: :metabase.lib.schema/query
 */
metabase.lib.drill_thru.zoom_in_geographic.add_or_update_binning = (function metabase$lib$drill_thru$zoom_in_geographic$add_or_update_binning(query,stage_number,column,bin_width){
var binning = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"strategy","strategy",-1471631918),new cljs.core.Keyword(null,"bin-width","bin-width",1377922579),new cljs.core.Keyword(null,"bin-width","bin-width",1377922579),bin_width], null);
var temp__5802__auto__ = cljs.core.first(metabase.lib.breakout.existing_breakouts.cljs$core$IFn$_invoke$arity$3(query,stage_number,column));
if(cljs.core.truth_(temp__5802__auto__)){
var existing_breakout = temp__5802__auto__;
var new_breakout = metabase.lib.binning.with_binning(existing_breakout,binning);
return metabase.lib.remove_replace.replace_clause.cljs$core$IFn$_invoke$arity$4(query,stage_number,existing_breakout,new_breakout);
} else {
return metabase.lib.breakout.breakout.cljs$core$IFn$_invoke$arity$3(query,stage_number,metabase.lib.binning.with_binning(column,binning));
}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int {{lat :column, lat-bin-width :bin-width} :latitude, {lon :column, lon-bin-width :bin-width} :longitude} :- :metabase.lib.schema.drill-thru/drill-thru.zoom-in.geographic]
 *   Return: :metabase.lib.schema/query
 */
metabase.lib.drill_thru.zoom_in_geographic.add_or_update_lat_lon_binning = (function metabase$lib$drill_thru$zoom_in_geographic$add_or_update_lat_lon_binning(query,stage_number,p__79490){
var map__79491 = p__79490;
var map__79491__$1 = cljs.core.__destructure_map(map__79491);
var map__79492 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79491__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var map__79492__$1 = cljs.core.__destructure_map(map__79492);
var lat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79492__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var lat_bin_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79492__$1,new cljs.core.Keyword(null,"bin-width","bin-width",1377922579));
var map__79493 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79491__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var map__79493__$1 = cljs.core.__destructure_map(map__79493);
var lon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79493__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var lon_bin_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79493__$1,new cljs.core.Keyword(null,"bin-width","bin-width",1377922579));
return metabase.lib.drill_thru.zoom_in_geographic.add_or_update_binning(metabase.lib.drill_thru.zoom_in_geographic.add_or_update_binning(query,stage_number,lat,lat_bin_width),stage_number,lon,lon_bin_width);
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int {:keys [column value], :as drill} :- :metabase.lib.schema.drill-thru/drill-thru.zoom-in.geographic.country-state-city->binned-lat-lon]
 *   Return: :metabase.lib.schema/query
 */
metabase.lib.drill_thru.zoom_in_geographic.apply_country_state_city__GT_binned_lat_lon_drill = (function metabase$lib$drill_thru$zoom_in_geographic$apply_country_state_city__GT_binned_lat_lon_drill(query,stage_number,p__79495){
var map__79496 = p__79495;
var map__79496__$1 = cljs.core.__destructure_map(map__79496);
var drill = map__79496__$1;
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79496__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79496__$1,new cljs.core.Keyword(null,"value","value",305978217));
return metabase.lib.drill_thru.zoom_in_geographic.add_or_update_lat_lon_binning(metabase.lib.filter.filter.cljs$core$IFn$_invoke$arity$3(metabase.lib.breakout.remove_existing_breakouts_for_column.cljs$core$IFn$_invoke$arity$3(query,stage_number,column),stage_number,metabase.lib.filter._EQ_(column,value)),stage_number,drill);
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int {{lat :column, lat-min :min, lat-max :max} :latitude, {lon :column, lon-min :min, lon-max :max} :longitude, :as drill} :- :metabase.lib.schema.drill-thru/drill-thru.zoom-in.geographic.binned-lat-lon->binned-lat-lon]
 *   Return: :metabase.lib.schema/query
 */
metabase.lib.drill_thru.zoom_in_geographic.apply_binned_lat_lon__GT_binned_lat_lon_drill = (function metabase$lib$drill_thru$zoom_in_geographic$apply_binned_lat_lon__GT_binned_lat_lon_drill(query,stage_number,p__79504){
var map__79505 = p__79504;
var map__79505__$1 = cljs.core.__destructure_map(map__79505);
var drill = map__79505__$1;
var map__79506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79505__$1,new cljs.core.Keyword(null,"latitude","latitude",394867543));
var map__79506__$1 = cljs.core.__destructure_map(map__79506);
var lat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79506__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var lat_min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79506__$1,new cljs.core.Keyword(null,"min","min",444991522));
var lat_max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79506__$1,new cljs.core.Keyword(null,"max","max",61366548));
var map__79507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79505__$1,new cljs.core.Keyword(null,"longitude","longitude",-1268876372));
var map__79507__$1 = cljs.core.__destructure_map(map__79507);
var lon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79507__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var lon_min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79507__$1,new cljs.core.Keyword(null,"min","min",444991522));
var lon_max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79507__$1,new cljs.core.Keyword(null,"max","max",61366548));
return metabase.lib.drill_thru.zoom_in_geographic.add_or_update_lat_lon_binning(metabase.lib.filter.filter.cljs$core$IFn$_invoke$arity$3(metabase.lib.filter.filter.cljs$core$IFn$_invoke$arity$3(metabase.lib.filter.filter.cljs$core$IFn$_invoke$arity$3(metabase.lib.filter.filter.cljs$core$IFn$_invoke$arity$3(query,stage_number,metabase.lib.filter._GT__EQ_(lat,lat_min)),stage_number,metabase.lib.filter._LT_(lat,lat_max)),stage_number,metabase.lib.filter._GT__EQ_(lon,lon_min)),stage_number,metabase.lib.filter._LT_(lon,lon_max)),stage_number,drill);
});
metabase.lib.drill_thru.common.drill_thru_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("drill-thru","zoom-in.geographic","drill-thru/zoom-in.geographic",1219982283),(function (query,stage_number,p__79509){
var map__79510 = p__79509;
var map__79510__$1 = cljs.core.__destructure_map(map__79510);
var drill = map__79510__$1;
var subtype = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79510__$1,new cljs.core.Keyword(null,"subtype","subtype",-2092672993));
var G__79511 = subtype;
var G__79511__$1 = (((G__79511 instanceof cljs.core.Keyword))?G__79511.fqn:null);
switch (G__79511__$1) {
case "drill-thru.zoom-in.geographic/country-state-city->binned-lat-lon":
return metabase.lib.drill_thru.zoom_in_geographic.apply_country_state_city__GT_binned_lat_lon_drill(query,stage_number,drill);

break;
case "drill-thru.zoom-in.geographic/binned-lat-lon->binned-lat-lon":
return metabase.lib.drill_thru.zoom_in_geographic.apply_binned_lat_lon__GT_binned_lat_lon_drill(query,stage_number,drill);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79511__$1)].join('')));

}
}));

//# sourceMappingURL=metabase.lib.drill_thru.zoom_in_geographic.js.map
