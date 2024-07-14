var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./cljs.math.js");
require("./metabase.lib.metadata.js");
require("./metabase.lib.schema.binning.js");
require("./metabase.lib.schema.metadata.js");
require("./metabase.lib.types.isa.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.binning.util.js");

goog.provide('metabase.lib.binning.util');
/**
 * Inputs: [min-value :- number? max-value :- number? num-bins :- :metabase.lib.schema.binning/num-bins]
 *   Return: :metabase.lib.schema.binning/bin-width
 *        
 * 
 *   Calculate bin width required to cover interval [`min-value`, `max-value`] with `num-bins`.
 */
metabase.lib.binning.util.calculate_bin_width = (function metabase$lib$binning$util$calculate_bin_width(min_value,max_value,num_bins){
return metabase.util.round_to_decimals((5),((max_value - min_value) / num_bins));
});
/**
 * Inputs: [min-value :- number? max-value :- number? bin-width :- :metabase.lib.schema.binning/bin-width]
 *   Return: :metabase.lib.schema.binning/num-bins
 *        
 * 
 *   Calculate number of bins of width `bin-width` required to cover interval [`min-value`, `max-value`].
 */
metabase.lib.binning.util.calculate_num_bins = (function metabase$lib$binning$util$calculate_num_bins(min_value,max_value,bin_width){
var x__5087__auto__ = cljs.core.long$(cljs.math.ceil(((max_value - min_value) / bin_width)));
var y__5088__auto__ = (1);
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
});
metabase.lib.binning.util.ResolvedStrategy = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"bin-width","bin-width",1377922579),new cljs.core.Keyword(null,"num-bins","num-bins",847672055)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bin-width","bin-width",1377922579),new cljs.core.Keyword("metabase.lib.schema.binning","bin-width","metabase.lib.schema.binning/bin-width",538632740)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"num-bins","num-bins",847672055),new cljs.core.Keyword("metabase.lib.schema.binning","num-bins","metabase.lib.schema.binning/num-bins",1151926022)], null)], null)], null);
/**
 * Inputs: [metadata-providerable :- :metabase.lib.schema.metadata/metadata-providerable column :- :metabase.lib.schema.metadata/column min-value :- number? max-value :- number?]
 *   Return: ResolvedStrategy
 *        
 * 
 *   Determine the approprate strategy & options to use when `:default` strategy was specified.
 */
metabase.lib.binning.util.resolve_default_strategy = (function metabase$lib$binning$util$resolve_default_strategy(metadata_providerable,column,min_value,max_value){
if(metabase.lib.types.isa.coordinate_QMARK_(column)){
var bin_width = metabase.lib.metadata.setting(metadata_providerable,new cljs.core.Keyword(null,"breakout-bin-width","breakout-bin-width",267638497));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bin-width","bin-width",1377922579),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bin-width","bin-width",1377922579),bin_width,new cljs.core.Keyword(null,"num-bins","num-bins",847672055),metabase.lib.binning.util.calculate_num_bins(min_value,max_value,bin_width)], null)], null);
} else {
var num_bins = metabase.lib.metadata.setting(metadata_providerable,new cljs.core.Keyword(null,"breakout-bins-num","breakout-bins-num",-1252933347));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"num-bins","num-bins",847672055),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-bins","num-bins",847672055),num_bins,new cljs.core.Keyword(null,"bin-width","bin-width",1377922579),metabase.lib.binning.util.calculate_bin_width(min_value,max_value,num_bins)], null)], null);
}
});
metabase.lib.binning.util.ceil_to = (function metabase$lib$binning$util$ceil_to(precision,x){
return (cljs.math.ceil((x / precision)) * precision);
});
metabase.lib.binning.util.floor_to = (function metabase$lib$binning$util$floor_to(precision,x){
return (cljs.math.floor((x / precision)) * precision);
});
metabase.lib.binning.util.pleasing_numbers = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),1.25,(2),2.5,(3),(5),7.5,(10)], null);
/**
 * Inputs: [min-value :- number? max-value :- number? num-bins :- :metabase.lib.schema.binning/num-bins]
 *   Return: :metabase.lib.schema.binning/bin-width
 *        
 * 
 *   Calculate the bin width we should use for `:num-bins` binning based on `min-value` and `max-value`, taken from a
 *   column's fingerprint... rather than simply doing
 * 
 *  (/ (- max-value min-value) num-bins)
 * 
 *   this function attempts to return a 'pleasing' bin width, e.g. 20 instead of 15.01.
 */
metabase.lib.binning.util.nicer_bin_width = (function metabase$lib$binning$util$nicer_bin_width(min_value,max_value,num_bins){
var min_bin_width = metabase.lib.binning.util.calculate_bin_width(min_value,max_value,num_bins);
var scale = cljs.math.pow((10),metabase.util.order_of_magnitude(min_bin_width));
return cljs.core.some((function (pleasing_number){
var candidate_width = (pleasing_number * scale);
if((candidate_width >= min_bin_width)){
return candidate_width;
} else {
return null;
}
}),metabase.lib.binning.util.pleasing_numbers);
});
/**
 * Inputs: [min-value :- number? max-value :- number? bin-width :- :metabase.lib.schema.binning/bin-width]
 *   Return: [:tuple number? number?]
 */
metabase.lib.binning.util.nicer_bounds = (function metabase$lib$binning$util$nicer_bounds(min_value,max_value,bin_width){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metabase.lib.binning.util.floor_to(bin_width,min_value),metabase.lib.binning.util.ceil_to(bin_width,max_value)], null);
});
metabase.lib.binning.util.max_steps = (10);
metabase.lib.binning.util.fixed_point = (function metabase$lib$binning$util$fixed_point(f){
return (function (x){
return cljs.core.ffirst(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,cljs.core.not_EQ_),cljs.core.take.cljs$core$IFn$_invoke$arity$2((10),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.iterate(f,x)))));
});
});
/**
 * Inputs: [strategy :- :metabase.lib.schema.binning/strategy {:keys [min-value max-value bin-width num-bins]} :- [:map [:min-value number?] [:max-value number?] [:bin-width {:optional true} :metabase.lib.schema.binning/bin-width] [:num-bins {:optional true} :metabase.lib.schema.binning/num-bins]]]
 *   Return: :map
 *        
 * 
 *   Humanize binning: extend interval to start and end on a "nice" number and, when number of bins is fixed, have a
 *   "nice" step (bin width).
 */
metabase.lib.binning.util.nicer_breakout_STAR_ = (function metabase$lib$binning$util$nicer_breakout_STAR_(strategy,p__78290){
var map__78291 = p__78290;
var map__78291__$1 = cljs.core.__destructure_map(map__78291);
var min_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78291__$1,new cljs.core.Keyword(null,"min-value","min-value",-1119123315));
var max_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78291__$1,new cljs.core.Keyword(null,"max-value","max-value",687805168));
var bin_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78291__$1,new cljs.core.Keyword(null,"bin-width","bin-width",1377922579));
var num_bins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78291__$1,new cljs.core.Keyword(null,"num-bins","num-bins",847672055));
var bin_width__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(strategy,new cljs.core.Keyword(null,"num-bins","num-bins",847672055)))?metabase.lib.binning.util.nicer_bin_width(min_value,max_value,num_bins):bin_width);
var vec__78292 = metabase.lib.binning.util.nicer_bounds(min_value,max_value,bin_width__$1);
var min_value__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78292,(0),null);
var max_value__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78292,(1),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min-value","min-value",-1119123315),min_value__$1,new cljs.core.Keyword(null,"max-value","max-value",687805168),max_value__$1,new cljs.core.Keyword(null,"num-bins","num-bins",847672055),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(strategy,new cljs.core.Keyword(null,"num-bins","num-bins",847672055)))?num_bins:metabase.lib.binning.util.calculate_num_bins(min_value__$1,max_value__$1,bin_width__$1)),new cljs.core.Keyword(null,"bin-width","bin-width",1377922579),bin_width__$1], null);
});
/**
 * Inputs: [strategy :- :metabase.lib.schema.binning/strategy opts :- :map]
 *   Return: [:maybe :map]
 *        
 * 
 *   Make the current breakout a little nicer? Not 100% sure exactly how this is used, refer
 *   to [[metabase.query-processor.middleware.binning/update-binned-field]].
 */
metabase.lib.binning.util.nicer_breakout = (function metabase$lib$binning$util$nicer_breakout(strategy,opts){
var f = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(metabase.lib.binning.util.nicer_breakout_STAR_,strategy);
return metabase.lib.binning.util.fixed_point(f)(opts);
});
/**
 * Inputs: [metadata-providerable :- :metabase.lib.schema.metadata/metadata-providerable strategy :- :metabase.lib.schema.binning/strategy strategy-param :- [:maybe number?] column :- :metabase.lib.schema.metadata/column min-value :- number? max-value :- number?]
 *   Return: ResolvedStrategy
 *        
 * 
 *   Given any binning `:strategy`, determine the `:bin-width` and `:num-bins` we should use based on the column's
 *   fingerprint.
 */
metabase.lib.binning.util.resolve_options = (function metabase$lib$binning$util$resolve_options(metadata_providerable,strategy,strategy_param,column,min_value,max_value){
var G__78301 = strategy;
var G__78301__$1 = (((G__78301 instanceof cljs.core.Keyword))?G__78301.fqn:null);
switch (G__78301__$1) {
case "num-bins":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"num-bins","num-bins",847672055),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-bins","num-bins",847672055),strategy_param,new cljs.core.Keyword(null,"bin-width","bin-width",1377922579),metabase.lib.binning.util.calculate_bin_width(min_value,max_value,strategy_param)], null)], null);

break;
case "bin-width":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bin-width","bin-width",1377922579),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bin-width","bin-width",1377922579),strategy_param,new cljs.core.Keyword(null,"num-bins","num-bins",847672055),metabase.lib.binning.util.calculate_num_bins(min_value,max_value,strategy_param)], null)], null);

break;
case "default":
return metabase.lib.binning.util.resolve_default_strategy(metadata_providerable,column,min_value,max_value);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78301__$1)].join('')));

}
});

//# sourceMappingURL=metabase.lib.binning.util.js.map
