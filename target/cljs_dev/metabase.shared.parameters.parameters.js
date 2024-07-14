var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./shadow.js.shim.module$moment.js");
require("./clojure.string.js");
require("./metabase.legacy_mbql.normalize.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.shared.parameters.parameters.js");

goog.provide('metabase.shared.parameters.parameters');
if((typeof metabase !== 'undefined') && (typeof metabase.shared !== 'undefined') && (typeof metabase.shared.parameters !== 'undefined') && (typeof metabase.shared.parameters.parameters !== 'undefined') && (typeof metabase.shared.parameters.parameters.formatted_value !== 'undefined')){
} else {
/**
 * Formats a value appropriately for inclusion in a text card, based on its type. Does not do any escaping.
 *   For datetime parameters, the logic here should mirror the logic (as best as possible) in
 *   frontend/src/metabase/parameters/utils/date-formatting.ts
 */
metabase.shared.parameters.parameters.formatted_value = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__80387 = cljs.core.get_global_hierarchy;
return (fexpr__80387.cljs$core$IFn$_invoke$arity$0 ? fexpr__80387.cljs$core$IFn$_invoke$arity$0() : fexpr__80387.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.shared.parameters.parameters","formatted-value"),(function (tyype,_value,_locale){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(tyype);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
metabase.shared.parameters.parameters.formatted_value.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("date","single","date/single",1554682003),(function (_,value,locale){
var m = shadow.js.shim.module$moment(value).locale(locale);
return m.format("MMMM D, YYYY");
}));
metabase.shared.parameters.parameters.formatted_value.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("date","month-year","date/month-year",1948031290),(function (_,value,locale){
var m = shadow.js.shim.module$moment(value,"YYYY-MM").locale(locale);
if(cljs.core.truth_(m.isValid())){
return m.format("MMMM, YYYY");
} else {
return "";
}
}));
metabase.shared.parameters.parameters.formatted_value.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("date","quarter-year","date/quarter-year",-1453950150),(function (_,value,locale){
var m = shadow.js.shim.module$moment(value,"[Q]Q-YYYY").locale(locale);
if(cljs.core.truth_(m.isValid())){
return m.format("[Q]Q, YYYY");
} else {
return "";
}
}));
metabase.shared.parameters.parameters.formatted_value.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("date","range","date/range",1647265776),(function (_,value,locale){
var vec__80432 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,/~/);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80432,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80432,(1),null);
if(cljs.core.truth_((function (){var and__5000__auto__ = start;
if(cljs.core.truth_(and__5000__auto__)){
return end;
} else {
return and__5000__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.shared.parameters.parameters.formatted_value.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("date","single","date/single",1554682003),start,locale))," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(metabase.shared.parameters.parameters.formatted_value.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("date","single","date/single",1554682003),end,locale))].join('');
} else {
return "";
}
}));
metabase.shared.parameters.parameters.translated_interval = (function metabase$shared$parameters$parameters$translated_interval(interval,n){
var G__80435 = interval;
switch (G__80435) {
case "minutes":
return metabase.shared.util.i18n.js_i18n_n("Minute","Minutes",n);

break;
case "hours":
return metabase.shared.util.i18n.js_i18n_n("Hour","Hours",n);

break;
case "days":
return metabase.shared.util.i18n.js_i18n_n("Day","Days",n);

break;
case "weeks":
return metabase.shared.util.i18n.js_i18n_n("Week","Weeks",n);

break;
case "months":
return metabase.shared.util.i18n.js_i18n_n("Month","Months",n);

break;
case "quarters":
return metabase.shared.util.i18n.js_i18n_n("Quarter","Quarters",n);

break;
case "years":
return metabase.shared.util.i18n.js_i18n_n("Year","Years",n);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80435)].join('')));

}
});
metabase.shared.parameters.parameters.format_relative_date = (function metabase$shared$parameters$parameters$format_relative_date(prefix,n,interval){
var n__$1 = parseInt(n);
var interval__$1 = metabase.shared.parameters.parameters.translated_interval(interval,n__$1);
var G__80438 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prefix,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,(1))], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["past",true], null),G__80438)){
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Previous {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([interval__$1], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["past",false], null),G__80438)){
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Previous {0} {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n__$1,interval__$1], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["next",true], null),G__80438)){
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Next {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([interval__$1], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["next",false], null),G__80438)){
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Next {0} {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n__$1,interval__$1], 0));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80438)].join('')));

}
}
}
}
});
metabase.shared.parameters.parameters.formatted_value.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("date","relative","date/relative",25987732),(function (_,value,___$1){
var pred__80443 = (function (re,value__$1){
return cljs.core.next(cljs.core.re_find(re,value__$1));
});
var expr__80444 = value;
if(pred__80443(/^today$/,expr__80444)){
return metabase.shared.util.i18n.js_i18n("Today");
} else {
if(pred__80443(/^thisday$/,expr__80444)){
return metabase.shared.util.i18n.js_i18n("Today");
} else {
if(pred__80443(/^thisweek$/,expr__80444)){
return metabase.shared.util.i18n.js_i18n("This Week");
} else {
if(pred__80443(/^thismonth$/,expr__80444)){
return metabase.shared.util.i18n.js_i18n("This Month");
} else {
if(pred__80443(/^thisquarter$/,expr__80444)){
return metabase.shared.util.i18n.js_i18n("This Quarter");
} else {
if(pred__80443(/^thisyear$/,expr__80444)){
return metabase.shared.util.i18n.js_i18n("This Year");
} else {
if(pred__80443(/^past1days$/,expr__80444)){
return metabase.shared.util.i18n.js_i18n("Yesterday");
} else {
if(pred__80443(/^next1days$/,expr__80444)){
return metabase.shared.util.i18n.js_i18n("Tomorrow");
} else {
var temp__5802__auto__ = pred__80443(/^(past|next)([0-9]+)([a-z]+)~?$/,expr__80444);
if(temp__5802__auto__){
var p__5434__auto__ = temp__5802__auto__;
return (function (matches){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(metabase.shared.parameters.parameters.format_relative_date,matches);
})(p__5434__auto__);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__80444)].join('')));
}
}
}
}
}
}
}
}
}
}));
metabase.shared.parameters.parameters.formatted_value.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("date","all-options","date/all-options",549325958),(function (_,value,locale){
var pred__80449 = (function (re,value__$1){
return cljs.core.second(cljs.core.re_find(re,value__$1));
});
var expr__80450 = value;
var temp__5802__auto__ = pred__80449(/^(this[a-z]+)$/,expr__80450);
if(cljs.core.truth_(temp__5802__auto__)){
var p__5434__auto__ = temp__5802__auto__;
return (function (p1__80446_SHARP_){
return metabase.shared.parameters.parameters.formatted_value.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("date","relative","date/relative",25987732),p1__80446_SHARP_,locale);
})(p__5434__auto__);
} else {
var temp__5802__auto____$1 = pred__80449(/^~?([0-9-T:]+)~?$/,expr__80450);
if(cljs.core.truth_(temp__5802__auto____$1)){
var p__5434__auto__ = temp__5802__auto____$1;
return (function (p1__80447_SHARP_){
return metabase.shared.parameters.parameters.formatted_value.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("date","single","date/single",1554682003),p1__80447_SHARP_,locale);
})(p__5434__auto__);
} else {
var temp__5802__auto____$2 = pred__80449(/^([0-9-T:]+~[0-9-T:]+)$/,expr__80450);
if(cljs.core.truth_(temp__5802__auto____$2)){
var p__5434__auto__ = temp__5802__auto____$2;
return (function (p1__80448_SHARP_){
return metabase.shared.parameters.parameters.formatted_value.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("date","range","date/range",1647265776),p1__80448_SHARP_,locale);
})(p__5434__auto__);
} else {
return metabase.shared.parameters.parameters.formatted_value.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("date","relative","date/relative",25987732),value,locale);
}
}
}
}));
/**
 * Given a seq of parameter values, returns them as a single comma-separated string. Does not do additional formatting
 *   on the values.
 */
metabase.shared.parameters.parameters.formatted_list = (function metabase$shared$parameters$parameters$formatted_list(values){
var pred__80452 = cljs.core._EQ_;
var expr__80453 = cljs.core.count(values);
if(cljs.core.truth_((pred__80452.cljs$core$IFn$_invoke$arity$2 ? pred__80452.cljs$core$IFn$_invoke$arity$2((1),expr__80453) : pred__80452.call(null,(1),expr__80453)))){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(values));
} else {
if(cljs.core.truth_((pred__80452.cljs$core$IFn$_invoke$arity$2 ? pred__80452.cljs$core$IFn$_invoke$arity$2((2),expr__80453) : pred__80452.call(null,(2),expr__80453)))){
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} and {1}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(values),cljs.core.second(values)], 0));
} else {
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0}, {1}, and {2}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),values)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(values,(cljs.core.count(values) - (2))),cljs.core.last(values)], 0));
}
}
});
metabase.shared.parameters.parameters.formatted_value.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,value,___$1){
if(cljs.core.sequential_QMARK_(value)){
return metabase.shared.parameters.parameters.formatted_list(value);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

}
}));
/**
 * Used markdown characters.
 */
metabase.shared.parameters.parameters.escaped_chars_regex = /[\\\/*_`'\[\](){}<>#+-.!$@%^&=|\?~]/;
/**
 * Escape markdown characters.
 */
metabase.shared.parameters.parameters.escape_chars = (function metabase$shared$parameters$parameters$escape_chars(text,regex){
return clojure.string.replace(text,regex,(function (p1__80459_SHARP_){
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__80459_SHARP_)].join('');
}));
});
metabase.shared.parameters.parameters.value = (function metabase$shared$parameters$parameters$value(tag_name,tag__GT_param,locale,escape_markdown){
var param = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tag__GT_param,tag_name);
var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(param);
var tyype = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(param);
if(cljs.core.truth_(value)){
try{var G__80464 = metabase.shared.parameters.parameters.formatted_value.cljs$core$IFn$_invoke$arity$3(tyype,value,locale);
if(cljs.core.truth_(escape_markdown)){
return metabase.shared.parameters.parameters.escape_chars(G__80464,metabase.shared.parameters.parameters.escaped_chars_regex);
} else {
return G__80464;
}
}catch (e80463){if((e80463 instanceof Error)){
var _ = e80463;
return metabase.shared.parameters.parameters.formatted_value.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"default","default",-1987822328),value,locale);
} else {
throw e80463;

}
}} else {
return null;
}
});
/**
 * A regex to find template tags in a text card on a dashboard. This should mirror the regex used to find template
 *   tags in native queries, with the exception of snippets and card ID references (see the metabase-lib function
 *   `recognizeTemplateTags` for that regex).
 * 
 *   If you modify this, also modify `template-tag-splitting-regex` below.
 */
metabase.shared.parameters.parameters.template_tag_regex = /\{\{\s*([A-Za-z0-9_\.]+?)\s*\}\}/;
/**
 * A regex for spliting text around template tags. This should be identical to `template-tag-regex` above, but without
 *   the capture group around the tag name.
 */
metabase.shared.parameters.parameters.template_tag_splitting_regex = /\{\{\s*[A-Za-z0-9_\.]+?\s*\}\}/;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
metabase.shared.parameters.parameters.TextParam = (function (tag,source,__meta,__extmap,__hash){
this.tag = tag;
this.source = source;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(metabase.shared.parameters.parameters.TextParam.prototype.toString = (function (){
var self__ = this;
var x = this;
var or__5002__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return self__.source;
}
}));

(metabase.shared.parameters.parameters.TextParam.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(metabase.shared.parameters.parameters.TextParam.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k80479,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__80507 = k80479;
var G__80507__$1 = (((G__80507 instanceof cljs.core.Keyword))?G__80507.fqn:null);
switch (G__80507__$1) {
case "tag":
return self__.tag;

break;
case "source":
return self__.source;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k80479,else__5303__auto__);

}
}));

(metabase.shared.parameters.parameters.TextParam.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__80508){
var vec__80509 = p__80508;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80509,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80509,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(metabase.shared.parameters.parameters.TextParam.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#metabase.shared.parameters.parameters.TextParam{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null))], null),self__.__extmap));
}));

(metabase.shared.parameters.parameters.TextParam.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__80478){
var self__ = this;
var G__80478__$1 = this;
return (new cljs.core.RecordIter((0),G__80478__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"source","source",-433931539)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(metabase.shared.parameters.parameters.TextParam.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(metabase.shared.parameters.parameters.TextParam.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new metabase.shared.parameters.parameters.TextParam(self__.tag,self__.source,self__.__meta,self__.__extmap,self__.__hash));
}));

(metabase.shared.parameters.parameters.TextParam.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(metabase.shared.parameters.parameters.TextParam.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-884441273 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(metabase.shared.parameters.parameters.TextParam.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this80480,other80481){
var self__ = this;
var this80480__$1 = this;
return (((!((other80481 == null)))) && ((((this80480__$1.constructor === other80481.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this80480__$1.tag,other80481.tag)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this80480__$1.source,other80481.source)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this80480__$1.__extmap,other80481.__extmap)))))))));
}));

(metabase.shared.parameters.parameters.TextParam.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new metabase.shared.parameters.parameters.TextParam(self__.tag,self__.source,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(metabase.shared.parameters.parameters.TextParam.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k80479){
var self__ = this;
var this__5307__auto____$1 = this;
var G__80512 = k80479;
var G__80512__$1 = (((G__80512 instanceof cljs.core.Keyword))?G__80512.fqn:null);
switch (G__80512__$1) {
case "tag":
case "source":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k80479);

}
}));

(metabase.shared.parameters.parameters.TextParam.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__80478){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__80513 = cljs.core.keyword_identical_QMARK_;
var expr__80514 = k__5309__auto__;
if(cljs.core.truth_((pred__80513.cljs$core$IFn$_invoke$arity$2 ? pred__80513.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__80514) : pred__80513.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__80514)))){
return (new metabase.shared.parameters.parameters.TextParam(G__80478,self__.source,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__80513.cljs$core$IFn$_invoke$arity$2 ? pred__80513.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source","source",-433931539),expr__80514) : pred__80513.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__80514)))){
return (new metabase.shared.parameters.parameters.TextParam(self__.tag,G__80478,self__.__meta,self__.__extmap,null));
} else {
return (new metabase.shared.parameters.parameters.TextParam(self__.tag,self__.source,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__80478),null));
}
}
}));

(metabase.shared.parameters.parameters.TextParam.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source","source",-433931539),self__.source,null))], null),self__.__extmap));
}));

(metabase.shared.parameters.parameters.TextParam.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__80478){
var self__ = this;
var this__5299__auto____$1 = this;
return (new metabase.shared.parameters.parameters.TextParam(self__.tag,self__.source,G__80478,self__.__extmap,self__.__hash));
}));

(metabase.shared.parameters.parameters.TextParam.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(metabase.shared.parameters.parameters.TextParam.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"source","source",1206599988,null)], null);
}));

(metabase.shared.parameters.parameters.TextParam.cljs$lang$type = true);

(metabase.shared.parameters.parameters.TextParam.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"metabase.shared.parameters.parameters/TextParam",null,(1),null));
}));

(metabase.shared.parameters.parameters.TextParam.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"metabase.shared.parameters.parameters/TextParam");
}));

/**
 * Positional factory function for metabase.shared.parameters.parameters/TextParam.
 */
metabase.shared.parameters.parameters.__GT_TextParam = (function metabase$shared$parameters$parameters$__GT_TextParam(tag,source){
return (new metabase.shared.parameters.parameters.TextParam(tag,source,null,null,null));
});

/**
 * Factory function for metabase.shared.parameters.parameters/TextParam, taking a map of keywords to field values.
 */
metabase.shared.parameters.parameters.map__GT_TextParam = (function metabase$shared$parameters$parameters$map__GT_TextParam(G__80498){
var extmap__5342__auto__ = (function (){var G__80516 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__80498,new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"source","source",-433931539)], 0));
if(cljs.core.record_QMARK_(G__80498)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__80516);
} else {
return G__80516;
}
})();
return (new metabase.shared.parameters.parameters.TextParam(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__80498),new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__80498),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

metabase.shared.parameters.parameters.TextParam_QMARK_ = (function metabase$shared$parameters$parameters$TextParam_QMARK_(x){
return (x instanceof metabase.shared.parameters.parameters.TextParam);
});
/**
 * Given the text of a Markdown card, splits it into a sequence of alternating strings and TextParam records.
 */
metabase.shared.parameters.parameters.split_on_tags = (function metabase$shared$parameters$parameters$split_on_tags(text){
var split_text = clojure.string.split.cljs$core$IFn$_invoke$arity$2(text,metabase.shared.parameters.parameters.template_tag_splitting_regex);
var matches = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.re_seq(metabase.shared.parameters.parameters.template_tag_regex,text));
var max_len = (function (){var x__5087__auto__ = cljs.core.count(split_text);
var y__5088__auto__ = cljs.core.count(matches);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var padded_text = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(split_text,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((max_len - cljs.core.count(split_text)),cljs.core.constantly("")));
var padded_matches = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(matches,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((max_len - cljs.core.count(matches)),cljs.core.constantly("")));
var full_split_text = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(padded_text,padded_matches);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (text__$1){
var temp__5802__auto__ = cljs.core.re_matches(metabase.shared.parameters.parameters.template_tag_regex,text__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var vec__80522 = temp__5802__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80522,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80522,(1),null);
return metabase.shared.parameters.parameters.__GT_TextParam(match,text__$1);
} else {
return text__$1;
}
}),full_split_text);
});
/**
 * Given a vector of strings and/or TextParam, concatenate consecutive strings and TextParams without values.
 */
metabase.shared.parameters.parameters.join_consecutive_strings = (function metabase$shared$parameters$parameters$join_consecutive_strings(strs_or_vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (strs_or_var){
if(typeof cljs.core.first(strs_or_var) === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.cljs$core$IFn$_invoke$arity$1(strs_or_var)], null);
} else {
return strs_or_var;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2((function (str_or_var){
return ((typeof str_or_var === 'string') || (cljs.core.not(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(str_or_var))));
}),strs_or_vars)], 0));
});
/**
 * Given `split-text`, containing a list of alternating strings and TextParam, add a :value key to any TextParams
 *   with a corresponding value in `tag->normalized-param`.
 */
metabase.shared.parameters.parameters.add_values_to_variables = (function metabase$shared$parameters$parameters$add_values_to_variables(tag__GT_normalized_param,locale,escape_markdown,split_text){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (maybe_variable){
if(metabase.shared.parameters.parameters.TextParam_QMARK_(maybe_variable)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(maybe_variable,new cljs.core.Keyword(null,"value","value",305978217),metabase.shared.parameters.parameters.value(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(maybe_variable),tag__GT_normalized_param,locale,escape_markdown));
} else {
return maybe_variable;
}
}),split_text);
});
metabase.shared.parameters.parameters.optional_block_regex = /\[\[.+\]\]/;
metabase.shared.parameters.parameters.non_optional_block_regex = /\[\[(.+?)\]\]/;
/**
 * Removes any [[optional]] blocks from individual strings in `split-text`, which are blocks that have no parameters
 *   with values. Then, concatenates the full string and removes the brackets from any remaining optional blocks.
 */
metabase.shared.parameters.parameters.strip_optional_blocks = (function metabase$shared$parameters$parameters$strip_optional_blocks(split_text){
var s = clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__80526_SHARP_){
if(metabase.shared.parameters.parameters.TextParam_QMARK_(p1__80526_SHARP_)){
return p1__80526_SHARP_;
} else {
return clojure.string.replace(p1__80526_SHARP_,metabase.shared.parameters.parameters.optional_block_regex,"");
}
}),split_text));
return clojure.string.replace(s,metabase.shared.parameters.parameters.non_optional_block_regex,cljs.core.second);
});
/**
 * Given the content of a text dashboard card, return a set of the unique names of template tags in the text.
 */
metabase.shared.parameters.parameters.tag_names = (function metabase$shared$parameters$parameters$tag_names(text){
var tag_names = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.re_seq(metabase.shared.parameters.parameters.template_tag_regex,(function (){var or__5002__auto__ = text;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})())));
return cljs.core.clj__GT_js(tag_names);
});
/**
 * Normalize a single parameter by calling [[mbql.normalize/normalize-fragment]] on it, and converting all string keys
 *   to keywords.
 */
metabase.shared.parameters.parameters.normalize_parameter = (function metabase$shared$parameters$parameters$normalize_parameter(parameter){
return cljs.core.update_keys(cljs.core.first(metabase.legacy_mbql.normalize.normalize_fragment(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parameters","parameters",-1229919748)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parameter], null))),cljs.core.keyword);
});
/**
 * Given the context of a text dashboard card, replace all template tags in the text with their corresponding values,
 *   formatted and escaped appropriately if escape-markdown is true. Specifically escape-markdown should be false when the
 *   output isn't being rendered directly as markdown, such as in header cards.
 */
metabase.shared.parameters.parameters.substitute_tags = (function metabase$shared$parameters$parameters$substitute_tags(var_args){
var G__80532 = arguments.length;
switch (G__80532) {
case 2:
return metabase.shared.parameters.parameters.substitute_tags.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return metabase.shared.parameters.parameters.substitute_tags.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('metabase.shared.parameters.parameters.substitute_tags', metabase.shared.parameters.parameters.substitute_tags);

(metabase.shared.parameters.parameters.substitute_tags.cljs$core$IFn$_invoke$arity$2 = (function (text,tag__GT_param){
return metabase.shared.parameters.parameters.substitute_tags.cljs$core$IFn$_invoke$arity$4(text,tag__GT_param,"en",true);
}));

(metabase.shared.parameters.parameters.substitute_tags.cljs$core$IFn$_invoke$arity$4 = (function (text,tag__GT_param,locale,escape_markdown){
if(cljs.core.truth_(text)){
var tag__GT_param__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(tag__GT_param);
var tag__GT_normalized_param = cljs.core.update_vals(tag__GT_param__$1,metabase.shared.parameters.parameters.normalize_parameter);
return metabase.shared.parameters.parameters.strip_optional_blocks(metabase.shared.parameters.parameters.join_consecutive_strings(metabase.shared.parameters.parameters.add_values_to_variables(tag__GT_normalized_param,locale,escape_markdown,metabase.shared.parameters.parameters.split_on_tags(text))));
} else {
return null;
}
}));

(metabase.shared.parameters.parameters.substitute_tags.cljs$lang$maxFixedArity = 4);

Object.defineProperty(module.exports, "tag_names", { enumerable: true, get: function() { return metabase.shared.parameters.parameters.tag_names; } });
Object.defineProperty(module.exports, "substitute_tags", { enumerable: true, get: function() { return metabase.shared.parameters.parameters.substitute_tags; } });
//# sourceMappingURL=metabase.shared.parameters.parameters.js.map
