var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.expression.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.expression.js");
require("./metabase.lib.schema.extraction.js");
require("./metabase.lib.schema.metadata.js");
require("./metabase.lib.temporal_bucket.js");
require("./metabase.lib.types.isa.js");
require("./metabase.lib.util.js");
require("./metabase.shared.util.i18n.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.extraction.js");

goog.provide('metabase.lib.extraction');
metabase.lib.extraction.column_extract_temporal_units = (function metabase$lib$extraction$column_extract_temporal_units(column){
var time_units = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hour-of-day","hour-of-day",2086777099)], null);
var date_units = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day-of-month","day-of-month",-1096650288),new cljs.core.Keyword(null,"day-of-week","day-of-week",1639326729),new cljs.core.Keyword(null,"month-of-year","month-of-year",760756492),new cljs.core.Keyword(null,"quarter-of-year","quarter-of-year",-472803491),new cljs.core.Keyword(null,"year","year",335913393)], null);
return cljs.core.vec((function (){var iter__5480__auto__ = (function metabase$lib$extraction$column_extract_temporal_units_$_iter__78891(s__78892){
return (new cljs.core.LazySeq(null,(function (){
var s__78892__$1 = s__78892;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__78892__$1);
if(temp__5804__auto__){
var s__78892__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__78892__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__78892__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__78894 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__78893 = (0);
while(true){
if((i__78893 < size__5479__auto__)){
var unit = cljs.core._nth(c__5478__auto__,i__78893);
cljs.core.chunk_append(b__78894,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metabase.lib.extraction","extraction","metabase.lib.extraction/extraction",-456588411),new cljs.core.Keyword(null,"tag","tag",-1290361223),unit,new cljs.core.Keyword(null,"column","column",2078222095),column,new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.lib.temporal_bucket.describe_temporal_unit.cljs$core$IFn$_invoke$arity$1(unit)], null));

var G__78917 = (i__78893 + (1));
i__78893 = G__78917;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__78894),metabase$lib$extraction$column_extract_temporal_units_$_iter__78891(cljs.core.chunk_rest(s__78892__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__78894),null);
}
} else {
var unit = cljs.core.first(s__78892__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metabase.lib.extraction","extraction","metabase.lib.extraction/extraction",-456588411),new cljs.core.Keyword(null,"tag","tag",-1290361223),unit,new cljs.core.Keyword(null,"column","column",2078222095),column,new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.lib.temporal_bucket.describe_temporal_unit.cljs$core$IFn$_invoke$arity$1(unit)], null),metabase$lib$extraction$column_extract_temporal_units_$_iter__78891(cljs.core.rest(s__78892__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((metabase.lib.types.isa.date_without_time_QMARK_(column))?null:time_units),((metabase.lib.types.isa.time_QMARK_(column))?null:date_units)));
})());
});
metabase.lib.extraction.regex_available_QMARK_ = (function metabase$lib$extraction$regex_available_QMARK_(metadata_providerable){
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(metabase.lib.metadata.database(metadata_providerable)),new cljs.core.Keyword(null,"regex","regex",939488856));
});
metabase.lib.extraction.domain_extraction = (function metabase$lib$extraction$domain_extraction(column){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metabase.lib.extraction","extraction","metabase.lib.extraction/extraction",-456588411),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"domain","domain",1847214937),new cljs.core.Keyword(null,"column","column",2078222095),column,new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.shared.util.i18n.js_i18n("Domain")], null);
});
metabase.lib.extraction.subdomain_extraction = (function metabase$lib$extraction$subdomain_extraction(column){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metabase.lib.extraction","extraction","metabase.lib.extraction/extraction",-456588411),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"subdomain","subdomain",-524487312),new cljs.core.Keyword(null,"column","column",2078222095),column,new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.shared.util.i18n.js_i18n("Subdomain")], null);
});
metabase.lib.extraction.host_extraction = (function metabase$lib$extraction$host_extraction(column){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metabase.lib.extraction","extraction","metabase.lib.extraction/extraction",-456588411),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"column","column",2078222095),column,new cljs.core.Keyword(null,"display-name","display-name",694513143),metabase.shared.util.i18n.js_i18n("Host")], null);
});
metabase.lib.extraction.email_extractions = (function metabase$lib$extraction$email_extractions(column){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.extraction.domain_extraction(column),metabase.lib.extraction.host_extraction(column)], null);
});
metabase.lib.extraction.url_extractions = (function metabase$lib$extraction$url_extractions(column){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.extraction.domain_extraction(column),metabase.lib.extraction.subdomain_extraction(column),metabase.lib.extraction.host_extraction(column)], null);
});
/**
 * Inputs: [query :- :metabase.lib.schema/query column :- :metabase.lib.schema.metadata/column]
 *   Return: [:maybe [:sequential :metabase.lib.schema.extraction/extraction]]
 *        
 * 
 *   Column extractions are a set of transformations possible on a given `column`, based on its type.
 * 
 *   For example, we might extract the day of the week from a temporal column, or the domain name from an email or URL.
 * 
 *   Returns a list of possible column extractions for the given column, or `nil` if there are none.
 */
metabase.lib.extraction.column_extractions = (function metabase$lib$extraction$column_extractions(query,column){
if(metabase.lib.types.isa.temporal_QMARK_(column)){
return metabase.lib.extraction.column_extract_temporal_units(column);
} else {
if((!(metabase.lib.extraction.regex_available_QMARK_(query)))){
return null;
} else {
if(metabase.lib.types.isa.email_QMARK_(column)){
return metabase.lib.extraction.email_extractions(column);
} else {
if(metabase.lib.types.isa.URL_QMARK_(column)){
return metabase.lib.extraction.url_extractions(column);
} else {
return null;
}
}
}
}
});
metabase.lib.metadata.calculation.display_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.extraction","extraction","metabase.lib.extraction/extraction",-456588411),(function (_query,_stage_number,extraction){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(extraction,new cljs.core.Keyword("lib","type","lib/type",1175424801),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"column","column",2078222095)], 0));
}));
/**
 * Inputs: [{:keys [column tag], :as _expression} :- :metabase.lib.schema.extraction/extraction]
 *   Return: :metabase.lib.schema.expression/expression
 *        
 * 
 *   Given an `extraction` as returned by [[column-extractions]], return the expression clause that should be added to a
 *   query.
 */
metabase.lib.extraction.extraction_expression = (function metabase$lib$extraction$extraction_expression(p__78902){
var map__78904 = p__78902;
var map__78904__$1 = cljs.core.__destructure_map(map__78904);
var _expression = map__78904__$1;
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78904__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78904__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var G__78905 = tag;
var G__78905__$1 = (((G__78905 instanceof cljs.core.Keyword))?G__78905.fqn:null);
switch (G__78905__$1) {
case "hour-of-day":
return metabase.lib.expression.get_hour(column);

break;
case "day-of-month":
return metabase.lib.expression.get_day(column);

break;
case "day-of-week":
return metabase.lib.expression.day_name(metabase.lib.expression.get_day_of_week(column));

break;
case "month-of-year":
return metabase.lib.expression.month_name(metabase.lib.expression.get_month(column));

break;
case "quarter-of-year":
return metabase.lib.expression.quarter_name(metabase.lib.expression.get_quarter(column));

break;
case "year":
return metabase.lib.expression.get_year(column);

break;
case "domain":
return metabase.lib.expression.domain(column);

break;
case "subdomain":
return metabase.lib.expression.subdomain(column);

break;
case "host":
return metabase.lib.expression.host(column);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78905__$1)].join('')));

}
});
/**
 * Inputs: [query :- :metabase.lib.schema/query stage-number :- :int {:keys [display-name], :as extraction} :- :metabase.lib.schema.extraction/extraction]
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Given a query, stage and extraction as returned by [[column-extractions]], apply that extraction to the query.
 */
metabase.lib.extraction.extract = (function metabase$lib$extraction$extract(query,stage_number,p__78908){
var map__78909 = p__78908;
var map__78909__$1 = cljs.core.__destructure_map(map__78909);
var extraction = map__78909__$1;
var display_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78909__$1,new cljs.core.Keyword(null,"display-name","display-name",694513143));
var unique_name_fn = metabase.lib.util.unique_name_generator.cljs$core$IFn$_invoke$arity$2(metabase.lib.metadata.__GT_metadata_provider(query),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),metabase.lib.metadata.calculation.returned_columns.cljs$core$IFn$_invoke$arity$3(query,stage_number,metabase.lib.util.query_stage(query,stage_number))));
return metabase.lib.expression.expression.cljs$core$IFn$_invoke$arity$4(query,stage_number,(unique_name_fn.cljs$core$IFn$_invoke$arity$1 ? unique_name_fn.cljs$core$IFn$_invoke$arity$1(display_name) : unique_name_fn.call(null,display_name)),metabase.lib.extraction.extraction_expression(extraction));
});

//# sourceMappingURL=metabase.lib.extraction.js.map
