var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./metabase.shared.formatting.internal.numbers_core.js");
require("./metabase.shared.util.currency.js");
require("./metabase.util.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.shared.formatting.internal.numbers.js");

goog.provide('metabase.shared.formatting.internal.numbers');
metabase.shared.formatting.internal.numbers.default_number_separators = ".,";
metabase.shared.formatting.internal.numbers.adjust_number_separators = (function metabase$shared$formatting$internal$numbers$adjust_number_separators(text,separators){
if(cljs.core.truth_((function (){var and__5000__auto__ = separators;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(separators,metabase.shared.formatting.internal.numbers.default_number_separators);
} else {
return and__5000__auto__;
}
})())){
var decimal = cljs.core.first(separators);
var grouping = (function (){var or__5002__auto__ = cljs.core.second(separators);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})();
var transform = new cljs.core.PersistentArrayMap(null, 2, [",",grouping,".",decimal], null);
return clojure.string.replace(text,/[\.,]/,transform);
} else {
return text;
}
});
metabase.shared.formatting.internal.numbers.fix_currency_symbols = (function metabase$shared$formatting$internal$numbers$fix_currency_symbols(text,currency){
var sym = metabase.shared.util.currency.currency_symbol(currency);
return clojure.string.replace(clojure.string.replace(text,[cljs.core.name(currency),metabase.shared.formatting.internal.numbers_core.non_breaking_space].join(''),sym),cljs.core.name(currency),sym);
});
metabase.shared.formatting.internal.numbers.base_format_scientific = (function metabase$shared$formatting$internal$numbers$base_format_scientific(nf,number){
var transform = (function metabase$shared$formatting$internal$numbers$base_format_scientific_$_transform(p__78325){
var map__78326 = p__78325;
var map__78326__$1 = cljs.core.__destructure_map(map__78326);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78326__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78326__$1,new cljs.core.Keyword(null,"value","value",305978217));
var G__78327 = type;
switch (G__78327) {
case "exponentSeparator":
return "e";

break;
default:
return value;

}
});
var parts = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(nf.formatToParts(number),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], null)], 0));
var parts__$1 = (cljs.core.truth_(cljs.core.some((function (p1__78318_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__78318_SHARP_),"exponentMinusSign");
}),parts))?parts:(function (){var vec__78332 = cljs.core.split_with((function (p1__78319_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__78319_SHARP_),"exponentInteger");
}),parts);
var pre = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78332,(0),null);
var post = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78332,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(pre,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"exponentPlusSign",new cljs.core.Keyword(null,"value","value",305978217),"+"], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([post], 0));
})());
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(transform,parts__$1));
});
metabase.shared.formatting.internal.numbers.number_formatter_for_options_baseline = (function metabase$shared$formatting$internal$numbers$number_formatter_for_options_baseline(options){
var default_fraction_digits = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"number-style","number-style",-1326567402).cljs$core$IFn$_invoke$arity$1(options),"currency"))?(2):null);
return (new Intl.NumberFormat("en",cljs.core.clj__GT_js(metabase.util.remove_nils(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"maximumFractionDigits","maximumFractionDigits",-1989827678),new cljs.core.Keyword(null,"currencyDisplay","currencyDisplay",853992613),new cljs.core.Keyword(null,"maximumSignificantDigits","maximumSignificantDigits",-1174196981),new cljs.core.Keyword(null,"minimumIntegerDigits","minimumIntegerDigits",-858445265),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"currency","currency",-898327568),new cljs.core.Keyword(null,"useGrouping","useGrouping",-1755386126),new cljs.core.Keyword(null,"minimumFractionDigits","minimumFractionDigits",-1266761579),new cljs.core.Keyword(null,"notation","notation",-906109671),new cljs.core.Keyword(null,"minimumSignificantDigits","minimumSignificantDigits",1936852126)],[new cljs.core.Keyword(null,"maximum-fraction-digits","maximum-fraction-digits",1232463505).cljs$core$IFn$_invoke$arity$2(options,default_fraction_digits),new cljs.core.Keyword(null,"currency-style","currency-style",-1629734318).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"maximum-significant-digits","maximum-significant-digits",599508904).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"minimum-integer-digits","minimum-integer-digits",-1035850713).cljs$core$IFn$_invoke$arity$1(options),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"number-style","number-style",-1326567402).cljs$core$IFn$_invoke$arity$1(options),"scientific"))?null:new cljs.core.Keyword(null,"number-style","number-style",-1326567402).cljs$core$IFn$_invoke$arity$2(options,"decimal")),new cljs.core.Keyword(null,"currency","currency",-898327568).cljs$core$IFn$_invoke$arity$1(options),true,new cljs.core.Keyword(null,"minimum-fraction-digits","minimum-fraction-digits",994355100).cljs$core$IFn$_invoke$arity$2(options,default_fraction_digits),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"number-style","number-style",-1326567402).cljs$core$IFn$_invoke$arity$1(options),"scientific"))?"scientific":null),new cljs.core.Keyword(null,"minimum-significant-digits","minimum-significant-digits",-1841461464).cljs$core$IFn$_invoke$arity$1(options)])))));
});
metabase.shared.formatting.internal.numbers.currency_symbols_QMARK_ = (function metabase$shared$formatting$internal$numbers$currency_symbols_QMARK_(options){
var style = new cljs.core.Keyword(null,"currency-style","currency-style",-1629734318).cljs$core$IFn$_invoke$arity$1(options);
var and__5000__auto__ = new cljs.core.Keyword(null,"currency","currency",-898327568).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(and__5000__auto__)){
return (((style == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style,"symbol")));
} else {
return and__5000__auto__;
}
});
metabase.shared.formatting.internal.numbers.formatter_fn = (function metabase$shared$formatting$internal$numbers$formatter_fn(nf,options){
var G__78345 = new cljs.core.Keyword(null,"number-style","number-style",-1326567402).cljs$core$IFn$_invoke$arity$1(options);
switch (G__78345) {
case "scientific":
return (function (p1__78340_SHARP_){
return metabase.shared.formatting.internal.numbers.base_format_scientific(nf,p1__78340_SHARP_);
});

break;
default:
return (function (p1__78341_SHARP_){
return nf.format(p1__78341_SHARP_);
});

}
});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {metabase.shared.formatting.internal.numbers_core.NumberFormatter}
 * @implements {cljs.core.IWithMeta}
*/
metabase.shared.formatting.internal.numbers.t_metabase$shared$formatting$internal$numbers78347 = (function (options,nf,symbols_QMARK_,formatter,meta78348){
this.options = options;
this.nf = nf;
this.symbols_QMARK_ = symbols_QMARK_;
this.formatter = formatter;
this.meta78348 = meta78348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(metabase.shared.formatting.internal.numbers.t_metabase$shared$formatting$internal$numbers78347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_78349,meta78348__$1){
var self__ = this;
var _78349__$1 = this;
return (new metabase.shared.formatting.internal.numbers.t_metabase$shared$formatting$internal$numbers78347(self__.options,self__.nf,self__.symbols_QMARK_,self__.formatter,meta78348__$1));
}));

(metabase.shared.formatting.internal.numbers.t_metabase$shared$formatting$internal$numbers78347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_78349){
var self__ = this;
var _78349__$1 = this;
return self__.meta78348;
}));

(metabase.shared.formatting.internal.numbers.t_metabase$shared$formatting$internal$numbers78347.prototype.metabase$shared$formatting$internal$numbers_core$NumberFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(metabase.shared.formatting.internal.numbers.t_metabase$shared$formatting$internal$numbers78347.prototype.metabase$shared$formatting$internal$numbers_core$NumberFormatter$format_number_basic$arity$2 = (function (_,number){
var self__ = this;
var ___$1 = this;
var G__78360 = (self__.formatter.cljs$core$IFn$_invoke$arity$1 ? self__.formatter.cljs$core$IFn$_invoke$arity$1(number) : self__.formatter.call(null,number));
var G__78360__$1 = metabase.shared.formatting.internal.numbers.adjust_number_separators(G__78360,new cljs.core.Keyword(null,"number-separators","number-separators",-885442734).cljs$core$IFn$_invoke$arity$1(self__.options))
;
if(cljs.core.truth_(self__.symbols_QMARK_)){
return metabase.shared.formatting.internal.numbers.fix_currency_symbols(G__78360__$1,new cljs.core.Keyword(null,"currency","currency",-898327568).cljs$core$IFn$_invoke$arity$1(self__.options));
} else {
return G__78360__$1;
}
}));

(metabase.shared.formatting.internal.numbers.t_metabase$shared$formatting$internal$numbers78347.prototype.metabase$shared$formatting$internal$numbers_core$NumberFormatter$wrap_currency$arity$2 = (function (_,text){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (){var iter__5480__auto__ = (function metabase$shared$formatting$internal$numbers$iter__78477(s__78478){
return (new cljs.core.LazySeq(null,(function (){
var s__78478__$1 = s__78478;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__78478__$1);
if(temp__5804__auto__){
var s__78478__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__78478__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__78478__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__78480 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__78479 = (0);
while(true){
if((i__78479 < size__5479__auto__)){
var map__78481 = cljs.core._nth(c__5478__auto__,i__78479);
var map__78481__$1 = cljs.core.__destructure_map(map__78481);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78481__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78481__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var fexpr__78482 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["currency",null,"integer",null], null), null);
return (fexpr__78482.cljs$core$IFn$_invoke$arity$1 ? fexpr__78482.cljs$core$IFn$_invoke$arity$1(type) : fexpr__78482.call(null,type));
})())){
cljs.core.chunk_append(b__78480,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"integer"))?text:value));

var G__78537 = (i__78479 + (1));
i__78479 = G__78537;
continue;
} else {
var G__78538 = (i__78479 + (1));
i__78479 = G__78538;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__78480),metabase$shared$formatting$internal$numbers$iter__78477(cljs.core.chunk_rest(s__78478__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__78480),null);
}
} else {
var map__78483 = cljs.core.first(s__78478__$2);
var map__78483__$1 = cljs.core.__destructure_map(map__78483);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78483__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78483__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var fexpr__78484 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["currency",null,"integer",null], null), null);
return (fexpr__78484.cljs$core$IFn$_invoke$arity$1 ? fexpr__78484.cljs$core$IFn$_invoke$arity$1(type) : fexpr__78484.call(null,type));
})())){
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"integer"))?text:value),metabase$shared$formatting$internal$numbers$iter__78477(cljs.core.rest(s__78478__$2)));
} else {
var G__78542 = cljs.core.rest(s__78478__$2);
s__78478__$1 = G__78542;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(self__.nf.formatToParts((1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
})());
}));

(metabase.shared.formatting.internal.numbers.t_metabase$shared$formatting$internal$numbers78347.prototype.metabase$shared$formatting$internal$numbers_core$NumberFormatter$split_exponent$arity$2 = (function (_,formatted){
var self__ = this;
var ___$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("split-exponent not implemented",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),formatted], null));
}));

(metabase.shared.formatting.internal.numbers.t_metabase$shared$formatting$internal$numbers78347.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"nf","nf",1717289478,null),new cljs.core.Symbol(null,"symbols?","symbols?",-1708822311,null),new cljs.core.Symbol(null,"formatter","formatter",1157522704,null),new cljs.core.Symbol(null,"meta78348","meta78348",622304798,null)], null);
}));

(metabase.shared.formatting.internal.numbers.t_metabase$shared$formatting$internal$numbers78347.cljs$lang$type = true);

(metabase.shared.formatting.internal.numbers.t_metabase$shared$formatting$internal$numbers78347.cljs$lang$ctorStr = "metabase.shared.formatting.internal.numbers/t_metabase$shared$formatting$internal$numbers78347");

(metabase.shared.formatting.internal.numbers.t_metabase$shared$formatting$internal$numbers78347.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"metabase.shared.formatting.internal.numbers/t_metabase$shared$formatting$internal$numbers78347");
}));

/**
 * Positional factory function for metabase.shared.formatting.internal.numbers/t_metabase$shared$formatting$internal$numbers78347.
 */
metabase.shared.formatting.internal.numbers.__GT_t_metabase$shared$formatting$internal$numbers78347 = (function metabase$shared$formatting$internal$numbers$__GT_t_metabase$shared$formatting$internal$numbers78347(options,nf,symbols_QMARK_,formatter,meta78348){
return (new metabase.shared.formatting.internal.numbers.t_metabase$shared$formatting$internal$numbers78347(options,nf,symbols_QMARK_,formatter,meta78348));
});


/**
 * The key function implemented for each language, and called by the top-level number formatting.
 *   Returns a [[core/NumberFormatter]] instance for each set of options.
 *   These formatters are reusable, but this does no caching.
 */
metabase.shared.formatting.internal.numbers.number_formatter_for_options = (function metabase$shared$formatting$internal$numbers$number_formatter_for_options(options){
var nf = metabase.shared.formatting.internal.numbers.number_formatter_for_options_baseline(options);
var symbols_QMARK_ = metabase.shared.formatting.internal.numbers.currency_symbols_QMARK_(options);
var formatter = metabase.shared.formatting.internal.numbers.formatter_fn(nf,options);
return (new metabase.shared.formatting.internal.numbers.t_metabase$shared$formatting$internal$numbers78347(options,nf,symbols_QMARK_,formatter,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Formats a number in scientific notation. The wrangling required differs by platform.
 */
metabase.shared.formatting.internal.numbers.format_number_scientific = (function metabase$shared$formatting$internal$numbers$format_number_scientific(number,options){
return metabase.shared.formatting.internal.numbers.number_formatter_for_options(metabase.shared.formatting.internal.numbers_core.prep_options(options)).metabase$shared$formatting$internal$numbers_core$NumberFormatter$format_number_basic$arity$2(null,number);
});

//# sourceMappingURL=metabase.shared.formatting.internal.numbers.js.map
