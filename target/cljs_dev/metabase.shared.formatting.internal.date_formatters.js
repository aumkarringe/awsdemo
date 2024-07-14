var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./metabase.shared.formatting.constants.js");
require("./metabase.shared.formatting.internal.date_builder.js");
require("./metabase.util.log.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.shared.formatting.internal.date_formatters.js");

goog.provide('metabase.shared.formatting.internal.date_formatters');
metabase.shared.formatting.internal.date_formatters.apply_date_separator = (function metabase$shared$formatting$internal$date_formatters$apply_date_separator(format_list,date_separator){
if(cljs.core.truth_(date_separator)){
var iter__5480__auto__ = (function metabase$shared$formatting$internal$date_formatters$apply_date_separator_$_iter__79547(s__79548){
return (new cljs.core.LazySeq(null,(function (){
var s__79548__$1 = s__79548;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__79548__$1);
if(temp__5804__auto__){
var s__79548__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__79548__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__79548__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__79550 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__79549 = (0);
while(true){
if((i__79549 < size__5479__auto__)){
var fmt = cljs.core._nth(c__5478__auto__,i__79549);
cljs.core.chunk_append(b__79550,((typeof fmt === 'string')?clojure.string.replace(fmt,/\//,date_separator):fmt));

var G__79586 = (i__79549 + (1));
i__79549 = G__79586;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79550),metabase$shared$formatting$internal$date_formatters$apply_date_separator_$_iter__79547(cljs.core.chunk_rest(s__79548__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79550),null);
}
} else {
var fmt = cljs.core.first(s__79548__$2);
return cljs.core.cons(((typeof fmt === 'string')?clojure.string.replace(fmt,/\//,date_separator):fmt),metabase$shared$formatting$internal$date_formatters$apply_date_separator_$_iter__79547(cljs.core.rest(s__79548__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(format_list);
} else {
return format_list;
}
});
metabase.shared.formatting.internal.date_formatters.apply_date_abbreviation = (function metabase$shared$formatting$internal$date_formatters$apply_date_abbreviation(format_list){
var iter__5480__auto__ = (function metabase$shared$formatting$internal$date_formatters$apply_date_abbreviation_$_iter__79551(s__79552){
return (new cljs.core.LazySeq(null,(function (){
var s__79552__$1 = s__79552;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__79552__$1);
if(temp__5804__auto__){
var s__79552__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__79552__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__79552__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__79554 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__79553 = (0);
while(true){
if((i__79553 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__79553);
cljs.core.chunk_append(b__79554,(function (){var G__79555 = k;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"month-full","month-full",-980003620),G__79555)){
return new cljs.core.Keyword(null,"month-short","month-short",-1531335142);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":month-full",G__79555)){
return new cljs.core.Keyword(null,"month-short","month-short",-1531335142);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"day-of-week-full","day-of-week-full",-1338599604),G__79555)){
return new cljs.core.Keyword(null,"day-of-week-short","day-of-week-short",-1161935710);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":day-of-week-full",G__79555)){
return new cljs.core.Keyword(null,"day-of-week-short","day-of-week-short",-1161935710);
} else {
return k;

}
}
}
}
})());

var G__79587 = (i__79553 + (1));
i__79553 = G__79587;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79554),metabase$shared$formatting$internal$date_formatters$apply_date_abbreviation_$_iter__79551(cljs.core.chunk_rest(s__79552__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79554),null);
}
} else {
var k = cljs.core.first(s__79552__$2);
return cljs.core.cons((function (){var G__79556 = k;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"month-full","month-full",-980003620),G__79556)){
return new cljs.core.Keyword(null,"month-short","month-short",-1531335142);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":month-full",G__79556)){
return new cljs.core.Keyword(null,"month-short","month-short",-1531335142);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"day-of-week-full","day-of-week-full",-1338599604),G__79556)){
return new cljs.core.Keyword(null,"day-of-week-short","day-of-week-short",-1161935710);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":day-of-week-full",G__79556)){
return new cljs.core.Keyword(null,"day-of-week-short","day-of-week-short",-1161935710);
} else {
return k;

}
}
}
}
})(),metabase$shared$formatting$internal$date_formatters$apply_date_abbreviation_$_iter__79551(cljs.core.rest(s__79552__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(format_list);
});
/**
 * Maps each unit to the default way of formatting that unit.
 *   This uses full month and weekday names; abbreviated output replaces these with the short forms later.
 */
metabase.shared.formatting.internal.date_formatters.default_date_formats_for_unit = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"quarter","quarter",-508147616),new cljs.core.Keyword(null,"day-of-week","day-of-week",1639326729),new cljs.core.Keyword(null,"month-of-year","month-of-year",760756492),new cljs.core.Keyword(null,"day-of-month","day-of-month",-1096650288),new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"day-of-year","day-of-year",478600113),new cljs.core.Keyword(null,"week-of-year","week-of-year",-910114435),new cljs.core.Keyword(null,"quarter-of-year","quarter-of-year",-472803491),new cljs.core.Keyword(null,"minute-of-hour","minute-of-hour",1903220478)],[new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Q",new cljs.core.Keyword(null,"quarter","quarter",-508147616)," - ",new cljs.core.Keyword(null,"year","year",335913393)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day-of-week-full","day-of-week-full",-1338599604)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month-full","month-full",-980003620)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day-of-month-d","day-of-month-d",1004545973)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day-of-year","day-of-year",478600113)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"week-of-year","week-of-year",-910114435)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Q",new cljs.core.Keyword(null,"quarter","quarter",-508147616)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minute-d","minute-d",1161226726)], null)]);
/**
 * Map of `{date_style {unit format}}`.
 *   If given eg. the style `"M/D/YYYY"` but a unit of months, we don't want to use that directly for the format,
 *   since it contains days.
 *   This map transforms the `date_style + unit` pair to the format data structure.
 */
metabase.shared.formatting.internal.date_formatters.date_style_to_format_overrides = (function (){var m_y = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month-d","month-d",-417018321),"/",new cljs.core.Keyword(null,"year","year",335913393)], null);
var mmm_y = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month-full","month-full",-980003620),", ",new cljs.core.Keyword(null,"year","year",335913393)], null);
return new cljs.core.PersistentArrayMap(null, 6, ["M/D/YYYY",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"month","month",-1960248533),m_y], null),"D/M/YYYY",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"month","month",-1960248533),m_y], null),"YYYY/M/D",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"month","month",-1960248533),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),"/",new cljs.core.Keyword(null,"month-d","month-d",-417018321)], null),new cljs.core.Keyword(null,"quarter","quarter",-508147616),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393)," - Q",new cljs.core.Keyword(null,"quarter","quarter",-508147616)], null)], null),"MMMM D, YYYY",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"month","month",-1960248533),mmm_y], null),"D MMMM, YYYY",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"month","month",-1960248533),mmm_y], null),"dddd, MMMM D, YYYY",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"week","week",-1326473278),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month-full","month-full",-980003620)," ",new cljs.core.Keyword(null,"day-of-month-d","day-of-month-d",1004545973),", ",new cljs.core.Keyword(null,"year","year",335913393)], null),new cljs.core.Keyword(null,"month","month",-1960248533),mmm_y], null)], null);
})();
metabase.shared.formatting.internal.date_formatters.iso_format = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),"-",new cljs.core.Keyword(null,"month-dd","month-dd",-765979484),"-",new cljs.core.Keyword(null,"day-of-month-dd","day-of-month-dd",1447745891),"T",new cljs.core.Keyword(null,"hour-24-dd","hour-24-dd",520374299),":",new cljs.core.Keyword(null,"minute-dd","minute-dd",-53740577),":",new cljs.core.Keyword(null,"second-dd","second-dd",267328546)], null);
/**
 * Datetime iso formatter.
 */
metabase.shared.formatting.internal.date_formatters.__GT_iso = metabase.shared.formatting.internal.date_builder.__GT_formatter(metabase.shared.formatting.internal.date_formatters.iso_format);
/**
 * The `:date-style` is transformed to a `:date-format` as follows:
 *   0. If `:date-format` is set, just use that.
 *   1. Check [[date-style-to-format-overrides]] for a style + unit override.
 *   2. Check [[default-date-formats-for-unit]] for a unit-specific format.
 *   3. Check [[constants/known-date-styles]] for a basic format.
 *   4. Fall back to a standard ISO date string, emitting a warning.
 */
metabase.shared.formatting.internal.date_formatters.resolve_date_style = (function metabase$shared$formatting$internal$date_formatters$resolve_date_style(p__79557){
var map__79558 = p__79557;
var map__79558__$1 = cljs.core.__destructure_map(map__79558);
var date_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79558__$1,new cljs.core.Keyword(null,"date-format","date-format",-557196721));
var date_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79558__$1,new cljs.core.Keyword(null,"date-style","date-style",-192846325));
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79558__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var or__5002__auto__ = date_format;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(metabase.shared.formatting.internal.date_formatters.date_style_to_format_overrides,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [date_style,unit], null));
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(metabase.shared.formatting.internal.date_formatters.default_date_formats_for_unit,unit);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
var or__5002__auto____$3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(metabase.shared.formatting.constants.known_date_styles,date_style);
if(cljs.core.truth_(or__5002__auto____$3)){
return or__5002__auto____$3;
} else {
var level__73195__auto___79588 = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"warn","warn",-436710552));
var logger__73196__auto___79589 = "metabase.shared.formatting.internal.date-formatters";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__73196__auto___79589,level__73195__auto___79588))){
var x__73197__auto___79590 = "Unrecognized date style";
if((x__73197__auto___79590 instanceof Error)){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73196__auto___79589,level__73195__auto___79588,cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date-style","date-style",-192846325),date_style,new cljs.core.Keyword(null,"unit","unit",375175175),unit], null)], 0)),x__73197__auto___79590);
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73196__auto___79589,level__73195__auto___79588,cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__73197__auto___79590,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"date-style","date-style",-192846325),date_style,new cljs.core.Keyword(null,"unit","unit",375175175),unit], null)], 0)),null);
}
} else {
}

return metabase.shared.formatting.internal.date_formatters.iso_format;
}
}
}
}
});
metabase.shared.formatting.internal.date_formatters.normalize_date_format = (function metabase$shared$formatting$internal$date_formatters$normalize_date_format(p__79559){
var map__79560 = p__79559;
var map__79560__$1 = cljs.core.__destructure_map(map__79560);
var options = map__79560__$1;
var date_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79560__$1,new cljs.core.Keyword(null,"date-format","date-format",-557196721));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,cljs.core.get.cljs$core$IFn$_invoke$arity$2(metabase.shared.formatting.constants.known_datetime_styles,date_format)], 0));
});
metabase.shared.formatting.internal.date_formatters.prepend_weekday = (function metabase$shared$formatting$internal$date_formatters$prepend_weekday(date_format){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day-of-week-short","day-of-week-short",-1161935710),", "], null),date_format);
});
/**
 * Derives a date format data structure from an options map.
 * 
 *   There are three possible sources of the final date format:
 *   1. A directly provided `:date-format`, which is either a string or a
 *   [[metabase.shared.formatting.internal.date-builder]] format structure.
 *   2. `:date_style` as a provided string, a legacy Moment.js format string.
 *   3. [[constants/default-date-style]]
 * 
 *   A string `:date-format` is converted to a `date-builder` structure.
 *   If `:date-format` is provided in either form, `:date-style` is ignored.
 *   See [[resolve-date-style]] for the details of how the `:date-style` is transformed to a format structure.
 *   
 */
metabase.shared.formatting.internal.date_formatters.date_format_for_options = (function metabase$shared$formatting$internal$date_formatters$date_format_for_options(p__79564){
var map__79565 = p__79564;
var map__79565__$1 = cljs.core.__destructure_map(map__79565);
var options = map__79565__$1;
var date_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79565__$1,new cljs.core.Keyword(null,"date-separator","date-separator",-882342810));
var weekday_enabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79565__$1,new cljs.core.Keyword(null,"weekday-enabled","weekday-enabled",-1447123049));
var date_format = metabase.shared.formatting.internal.date_formatters.resolve_date_style(metabase.shared.formatting.internal.date_formatters.normalize_date_format(options));
var G__79566 = date_format;
var G__79566__$1 = (cljs.core.truth_(date_separator)?metabase.shared.formatting.internal.date_formatters.apply_date_separator(G__79566,date_separator):G__79566);
var G__79566__$2 = (cljs.core.truth_(weekday_enabled)?metabase.shared.formatting.internal.date_formatters.prepend_weekday(G__79566__$1):G__79566__$1);
if(metabase.shared.formatting.constants.abbreviated_QMARK_(options)){
return metabase.shared.formatting.internal.date_formatters.apply_date_abbreviation(G__79566__$2);
} else {
return G__79566__$2;
}
});
metabase.shared.formatting.internal.date_formatters.short_month_day = metabase.shared.formatting.internal.date_builder.__GT_formatter(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month-short","month-short",-1531335142)," ",new cljs.core.Keyword(null,"day-of-month-d","day-of-month-d",1004545973)], null));
metabase.shared.formatting.internal.date_formatters.full_month_day = metabase.shared.formatting.internal.date_builder.__GT_formatter(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month-full","month-full",-980003620)," ",new cljs.core.Keyword(null,"day-of-month-d","day-of-month-d",1004545973)], null));
metabase.shared.formatting.internal.date_formatters.short_month_day_year = metabase.shared.formatting.internal.date_builder.__GT_formatter(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month-short","month-short",-1531335142)," ",new cljs.core.Keyword(null,"day-of-month-d","day-of-month-d",1004545973),", ",new cljs.core.Keyword(null,"year","year",335913393)], null));
metabase.shared.formatting.internal.date_formatters.full_month_day_year = metabase.shared.formatting.internal.date_builder.__GT_formatter(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"month-full","month-full",-980003620)," ",new cljs.core.Keyword(null,"day-of-month-d","day-of-month-d",1004545973),", ",new cljs.core.Keyword(null,"year","year",335913393)], null));
metabase.shared.formatting.internal.date_formatters.short_months_QMARK_ = (function metabase$shared$formatting$internal$date_formatters$short_months_QMARK_(p__79567){
var map__79568 = p__79567;
var map__79568__$1 = cljs.core.__destructure_map(map__79568);
var options = map__79568__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79568__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return ((metabase.shared.formatting.constants.abbreviated_QMARK_(options)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(type,"tooltip")));
});
/**
 * Helper that gets the right month-day-year format based on the options: either full `"April 6, 2022"` or shortened
 *   `"Apr 6, 2022"`.
 */
metabase.shared.formatting.internal.date_formatters.month_day_year = (function metabase$shared$formatting$internal$date_formatters$month_day_year(options){
if(metabase.shared.formatting.internal.date_formatters.short_months_QMARK_(options)){
return metabase.shared.formatting.internal.date_formatters.short_month_day_year;
} else {
return metabase.shared.formatting.internal.date_formatters.full_month_day_year;
}
});
/**
 * Helper that gets the right month-day format based on the options: either full `"April 6"` or shortened
 *   `"Apr 6"`.
 */
metabase.shared.formatting.internal.date_formatters.month_day = (function metabase$shared$formatting$internal$date_formatters$month_day(options){
if(metabase.shared.formatting.internal.date_formatters.short_months_QMARK_(options)){
return metabase.shared.formatting.internal.date_formatters.short_month_day;
} else {
return metabase.shared.formatting.internal.date_formatters.full_month_day;
}
});
metabase.shared.formatting.internal.date_formatters.big_endian_day_format = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"year","year",335913393),"-",new cljs.core.Keyword(null,"month-dd","month-dd",-765979484),"-",new cljs.core.Keyword(null,"day-of-month-dd","day-of-month-dd",1447745891)], null);
/**
 * A cached, commonly used formatter for dates in `"2022-04-22"` form.
 */
metabase.shared.formatting.internal.date_formatters.big_endian_day = metabase.shared.formatting.internal.date_builder.__GT_formatter(metabase.shared.formatting.internal.date_formatters.big_endian_day_format);
/**
 * A cached, commonly used formatter for times in 12-hour `"7 PM"` form.
 */
metabase.shared.formatting.internal.date_formatters.hour_only = metabase.shared.formatting.internal.date_builder.__GT_formatter(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hour-12-d","hour-12-d",-1761180644)," ",new cljs.core.Keyword(null,"am-pm","am-pm",-2014941402)], null));
/**
 * A cached, commonly used formatter for full weekday names.
 */
metabase.shared.formatting.internal.date_formatters.weekday = metabase.shared.formatting.internal.date_builder.__GT_formatter(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"day-of-week-full","day-of-week-full",-1338599604)], null));
metabase.shared.formatting.internal.date_formatters.english_time_seconds = (function metabase$shared$formatting$internal$date_formatters$english_time_seconds(inner){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hour-12-d","hour-12-d",-1761180644),":",new cljs.core.Keyword(null,"minute-dd","minute-dd",-53740577),":",new cljs.core.Keyword(null,"second-dd","second-dd",267328546)], null),inner,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",new cljs.core.Keyword(null,"am-pm","am-pm",-2014941402)], null)], 0)));
});
metabase.shared.formatting.internal.date_formatters.iso_time_seconds = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hour-24-dd","hour-24-dd",520374299),":",new cljs.core.Keyword(null,"minute-dd","minute-dd",-53740577),":",new cljs.core.Keyword(null,"second-dd","second-dd",267328546)], null);
metabase.shared.formatting.internal.date_formatters.time_style_to_format = new cljs.core.PersistentArrayMap(null, 2, ["h:mm A",new cljs.core.PersistentArrayMap(null, 3, [null,metabase.shared.formatting.internal.date_formatters.english_time_seconds(cljs.core.PersistentVector.EMPTY),"seconds",metabase.shared.formatting.internal.date_formatters.english_time_seconds(cljs.core.PersistentVector.EMPTY),"milliseconds",metabase.shared.formatting.internal.date_formatters.english_time_seconds(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".",new cljs.core.Keyword(null,"millisecond-ddd","millisecond-ddd",1751196715)], null))], null),"HH:mm",new cljs.core.PersistentArrayMap(null, 3, [null,metabase.shared.formatting.internal.date_formatters.iso_time_seconds,"seconds",metabase.shared.formatting.internal.date_formatters.iso_time_seconds,"milliseconds",cljs.core.into.cljs$core$IFn$_invoke$arity$2(metabase.shared.formatting.internal.date_formatters.iso_time_seconds,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".",new cljs.core.Keyword(null,"millisecond-ddd","millisecond-ddd",1751196715)], null))], null)], null);
metabase.shared.formatting.internal.date_formatters.fallback_iso_time = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hour-24-dd","hour-24-dd",520374299),":",new cljs.core.Keyword(null,"minute-dd","minute-dd",-53740577),":",new cljs.core.Keyword(null,"second-dd","second-dd",267328546)], null);
/**
 * The time format is resolved as follows:
 *   1. If a `:time-format` is provided as a string, look it up in [[constants/known-time-styles]], throwing if not found.
 *   2. If a `:time-format` is provided directly as a [[builder]] structure, use that.
 *   3. Check [[time-style-to-format]] for a supported `:time-style + :time-enabled` resolution pair.
 *   4. Look up `:time-style` in [[constants/known-time-styles]].
 *   5. Throw an exception, since the time style is unknown.
 */
metabase.shared.formatting.internal.date_formatters.time_format_for_options = (function metabase$shared$formatting$internal$date_formatters$time_format_for_options(p__79574){
var map__79575 = p__79574;
var map__79575__$1 = cljs.core.__destructure_map(map__79575);
var options = map__79575__$1;
var time_enabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79575__$1,new cljs.core.Keyword(null,"time-enabled","time-enabled",-1856094894));
var time_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79575__$1,new cljs.core.Keyword(null,"time-format","time-format",511469226));
var time_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79575__$1,new cljs.core.Keyword(null,"time-style","time-style",-1943466186));
var or__5002__auto__ = (function (){var and__5000__auto__ = typeof time_format === 'string';
if(and__5000__auto__){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(metabase.shared.formatting.constants.known_time_styles,time_format);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unknown time format",options);
}
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = time_format;
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(metabase.shared.formatting.internal.date_formatters.time_style_to_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [time_style,time_enabled], null));
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
var or__5002__auto____$3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(metabase.shared.formatting.constants.known_time_styles,time_style);
if(cljs.core.truth_(or__5002__auto____$3)){
return or__5002__auto____$3;
} else {
var level__73195__auto___79591 = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"warn","warn",-436710552));
var logger__73196__auto___79592 = "metabase.shared.formatting.internal.date-formatters";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__73196__auto___79592,level__73195__auto___79591))){
var x__73197__auto___79593 = "Unrecognized time style";
if((x__73197__auto___79593 instanceof Error)){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73196__auto___79592,level__73195__auto___79591,cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"time-style","time-style",-1943466186),time_style,new cljs.core.Keyword(null,"time-enabled","time-enabled",-1856094894),time_enabled], null)], 0)),x__73197__auto___79593);
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73196__auto___79592,level__73195__auto___79591,cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__73197__auto___79593,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"time-style","time-style",-1943466186),time_style,new cljs.core.Keyword(null,"time-enabled","time-enabled",-1856094894),time_enabled], null)], 0)),null);
}
} else {
}

return metabase.shared.formatting.internal.date_formatters.fallback_iso_time;
}
}
}
}
});
metabase.shared.formatting.internal.date_formatters.options__GT_formatter_STAR_ = (function metabase$shared$formatting$internal$date_formatters$options__GT_formatter_STAR_(p__79584){
var map__79585 = p__79584;
var map__79585__$1 = cljs.core.__destructure_map(map__79585);
var options = map__79585__$1;
var date_enabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79585__$1,new cljs.core.Keyword(null,"date-enabled","date-enabled",1961030769));
var time_enabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79585__$1,new cljs.core.Keyword(null,"time-enabled","time-enabled",-1856094894));
var date_format = (cljs.core.truth_(date_enabled)?metabase.shared.formatting.internal.date_formatters.date_format_for_options(options):null);
var time_format = (cljs.core.truth_(time_enabled)?metabase.shared.formatting.internal.date_formatters.time_format_for_options(options):null);
var format_list = (cljs.core.truth_((function (){var and__5000__auto__ = date_format;
if(cljs.core.truth_(and__5000__auto__)){
return time_format;
} else {
return and__5000__auto__;
}
})())?cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(date_format,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [", "], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([time_format], 0)):(function (){var or__5002__auto__ = date_format;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = time_format;
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var level__73195__auto___79594 = metabase.util.log.glogi_level(new cljs.core.Keyword(null,"warn","warn",-436710552));
var logger__73196__auto___79595 = "metabase.shared.formatting.internal.date-formatters";
if(cljs.core.truth_(metabase.util.log.is_loggable_QMARK_(logger__73196__auto___79595,level__73195__auto___79594))){
var x__73197__auto___79596 = "Unrecognized date/time format";
if((x__73197__auto___79596 instanceof Error)){
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73196__auto___79595,level__73195__auto___79594,cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options], 0)),x__73197__auto___79596);
} else {
lambdaisland.glogi.log.cljs$core$IFn$_invoke$arity$4(logger__73196__auto___79595,level__73195__auto___79594,cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x__73197__auto___79596,options], 0)),null);
}
} else {
}

return metabase.shared.formatting.internal.date_formatters.iso_format;
}
}
})());
return metabase.shared.formatting.internal.date_builder.__GT_formatter(format_list);
});
metabase.shared.formatting.internal.date_formatters.options__GT_formatter_cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Given the options map, this reduces it to a formatter function.
 *   Expects `date-style` and `time-style`, if provided, to be in the known set.
 *   If they're unknown, this logs a warning and defaults to a full ISO 8601 string format.
 *   If `date-style` or `time-style` are set to nil, that part will not be included.
 * 
 *   The options and corresponding formatters are cached indefinitely, since there are generally only a few dozen
 *   different sets of options, and from hundreds to many thousands of dates will be formatted in a typical session.
 */
metabase.shared.formatting.internal.date_formatters.options__GT_formatter = (function metabase$shared$formatting$internal$date_formatters$options__GT_formatter(options){
if(cljs.core.map_QMARK_(options)){
} else {
throw (new Error("Assert failed: (map? options)"));
}

var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(metabase.shared.formatting.internal.date_formatters.options__GT_formatter_cache),options);
if(cljs.core.truth_(temp__5802__auto__)){
var fmt = temp__5802__auto__;
return fmt;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(metabase.shared.formatting.internal.date_formatters.options__GT_formatter_cache,(function (cache){
if(cljs.core.contains_QMARK_(cache,options)){
return cache;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,options,metabase.shared.formatting.internal.date_formatters.options__GT_formatter_STAR_(options));
}
})),options);
}
});

//# sourceMappingURL=metabase.shared.formatting.internal.date_formatters.js.map
