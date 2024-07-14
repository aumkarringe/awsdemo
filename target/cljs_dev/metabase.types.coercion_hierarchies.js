var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.set.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.types.coercion_hierarchies.js");

goog.provide('metabase.types.coercion_hierarchies');
if((typeof metabase !== 'undefined') && (typeof metabase.types !== 'undefined') && (typeof metabase.types.coercion_hierarchies !== 'undefined') && (typeof metabase.types.coercion_hierarchies.strategy__GT_allowed_base_types !== 'undefined')){
} else {
/**
 * Map of `coercion-strategy -> #{allowed-base-type}`.
 */
metabase.types.coercion_hierarchies.strategy__GT_allowed_base_types = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof metabase !== 'undefined') && (typeof metabase.types !== 'undefined') && (typeof metabase.types.coercion_hierarchies !== 'undefined') && (typeof metabase.types.coercion_hierarchies.strategy__GT_effective_type !== 'undefined')){
} else {
/**
 * Map of coercion strategy -> resulting effective-type
 */
metabase.types.coercion_hierarchies.strategy__GT_effective_type = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof metabase !== 'undefined') && (typeof metabase.types !== 'undefined') && (typeof metabase.types.coercion_hierarchies !== 'undefined') && (typeof metabase.types.coercion_hierarchies.non_descending_base_type__GT_strategy !== 'undefined')){
} else {
/**
 * Map of base-type -> #{strategy} which are not inheritable. Eg, binary fields are marked `type/*` and may be coerced
 *   to timestamps with `:Coercion/YYYYMMDDHHMMSSBytes->Temporal` but we don't want all children of `type/*` to be
 *   coerced as such.
 */
metabase.types.coercion_hierarchies.non_descending_base_type__GT_strategy = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Get a map of strategies -> allowed-base-types. These must live outside of the hierarchy.
 */
metabase.types.coercion_hierarchies.non_descending_strategies = (function metabase$types$coercion_hierarchies$non_descending_strategies(){
return cljs.core.deref(metabase.types.coercion_hierarchies.non_descending_base_type__GT_strategy);
});
/**
 * Gets the effective type for strategy. Essentially a getter over the
 *   private strategy->effective-type.
 */
metabase.types.coercion_hierarchies.effective_type_for_strategy = (function metabase$types$coercion_hierarchies$effective_type_for_strategy(strategy){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(metabase.types.coercion_hierarchies.strategy__GT_effective_type),strategy);
});
/**
 * Ensure x is a sequential collection. Copied from metabase.util as that namespace is not amenable to cljc.
 */
metabase.types.coercion_hierarchies.one_or_many = (function metabase$types$coercion_hierarchies$one_or_many(x){
if(cljs.core.truth_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.nil_QMARK_)(x))){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
});
/**
 * Define the `base-type-or-types` allowed and the resulting `effective-type` of a `coercion-strategy`.
 */
metabase.types.coercion_hierarchies.define_types_BANG_ = (function metabase$types$coercion_hierarchies$define_types_BANG_(coercion_strategy,base_type_or_types,effective_type){
var base_types_74723 = cljs.core.set(metabase.types.coercion_hierarchies.one_or_many(base_type_or_types));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metabase.types.coercion_hierarchies.strategy__GT_allowed_base_types,cljs.core.assoc,coercion_strategy,base_types_74723);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metabase.types.coercion_hierarchies.strategy__GT_effective_type,cljs.core.assoc,coercion_strategy,effective_type);
});
/**
 * Define coercion strategies that should not exist for all of the descendants of base-type-or-types.
 */
metabase.types.coercion_hierarchies.define_non_inheritable_type_BANG_ = (function metabase$types$coercion_hierarchies$define_non_inheritable_type_BANG_(coercion_strategy,base_type_or_types,effective_type){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(metabase.types.coercion_hierarchies.non_descending_base_type__GT_strategy,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,clojure.set.union),cljs.core.zipmap(metabase.types.coercion_hierarchies.one_or_many(base_type_or_types),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.createAsIfByAssoc([coercion_strategy]))));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(metabase.types.coercion_hierarchies.strategy__GT_effective_type,cljs.core.assoc,coercion_strategy,effective_type);
});
metabase.types.coercion_hierarchies.build_hierarchy = (function metabase$types$coercion_hierarchies$build_hierarchy(pairs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (h,p__74666){
var vec__74667 = p__74666;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74667,(0),null);
var parent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74667,(1),null);
return cljs.core.derive.cljs$core$IFn$_invoke$arity$3(h,tag,parent);
}),cljs.core.deref((function (){var fexpr__74670 = new cljs.core.Var(function(){return cljs.core.get_global_hierarchy;},new cljs.core.Symbol("cljs.core","get-global-hierarchy","cljs.core/get-global-hierarchy",48052871,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"get-global-hierarchy","get-global-hierarchy",1780260380,null),"cljs/core.cljs",(28),(1),(11306),(11306),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(cljs.core.get_global_hierarchy)?cljs.core.get_global_hierarchy.cljs$lang$test:null)]));
return (fexpr__74670.cljs$core$IFn$_invoke$arity$0 ? fexpr__74670.cljs$core$IFn$_invoke$arity$0() : fexpr__74670.call(null));
})()),pairs);
});
metabase.types.coercion_hierarchies.base_type_hierarchy_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
/**
 * The global hierarchy, with coercion strategies added as ancestors of their allowed base type(s).
 */
metabase.types.coercion_hierarchies.base_type_hierarchy = (function metabase$types$coercion_hierarchies$base_type_hierarchy(){
if(cljs.core.truth_(cljs.core.deref(metabase.types.coercion_hierarchies.base_type_hierarchy_STAR_))){
} else {
if(cljs.core.truth_(cljs.core.deref(metabase.types.coercion_hierarchies.base_type_hierarchy_STAR_))){
} else {
cljs.core.reset_BANG_(metabase.types.coercion_hierarchies.base_type_hierarchy_STAR_,metabase.types.coercion_hierarchies.build_hierarchy((function (){var iter__5480__auto__ = (function metabase$types$coercion_hierarchies$base_type_hierarchy_$_iter__74699(s__74701){
return (new cljs.core.LazySeq(null,(function (){
var s__74701__$1 = s__74701;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__74701__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__74710 = cljs.core.first(xs__6360__auto__);
var strategy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74710,(0),null);
var base_types = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74710,(1),null);
var iterys__5476__auto__ = ((function (s__74701__$1,vec__74710,strategy,base_types,xs__6360__auto__,temp__5804__auto__){
return (function metabase$types$coercion_hierarchies$base_type_hierarchy_$_iter__74699_$_iter__74702(s__74703){
return (new cljs.core.LazySeq(null,((function (s__74701__$1,vec__74710,strategy,base_types,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__74703__$1 = s__74703;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__74703__$1);
if(temp__5804__auto____$1){
var s__74703__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__74703__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__74703__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__74705 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__74704 = (0);
while(true){
if((i__74704 < size__5479__auto__)){
var base_type = cljs.core._nth(c__5478__auto__,i__74704);
cljs.core.chunk_append(b__74705,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [base_type,strategy], null));

var G__74737 = (i__74704 + (1));
i__74704 = G__74737;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__74705),metabase$types$coercion_hierarchies$base_type_hierarchy_$_iter__74699_$_iter__74702(cljs.core.chunk_rest(s__74703__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__74705),null);
}
} else {
var base_type = cljs.core.first(s__74703__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [base_type,strategy], null),metabase$types$coercion_hierarchies$base_type_hierarchy_$_iter__74699_$_iter__74702(cljs.core.rest(s__74703__$2)));
}
} else {
return null;
}
break;
}
});})(s__74701__$1,vec__74710,strategy,base_types,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__74701__$1,vec__74710,strategy,base_types,xs__6360__auto__,temp__5804__auto__))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(base_types));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,metabase$types$coercion_hierarchies$base_type_hierarchy_$_iter__74699(cljs.core.rest(s__74701__$1)));
} else {
var G__74738 = cljs.core.rest(s__74701__$1);
s__74701__$1 = G__74738;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.deref(metabase.types.coercion_hierarchies.strategy__GT_allowed_base_types));
})()));
}
}

return cljs.core.deref(metabase.types.coercion_hierarchies.base_type_hierarchy_STAR_);
});
metabase.types.coercion_hierarchies.effective_type_hierarchy_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
/**
 * The global hierarchy, with coercion strategies added as children of their resulting effective type.
 */
metabase.types.coercion_hierarchies.effective_type_hierarchy = (function metabase$types$coercion_hierarchies$effective_type_hierarchy(){
if(cljs.core.truth_(cljs.core.deref(metabase.types.coercion_hierarchies.effective_type_hierarchy_STAR_))){
} else {
if(cljs.core.truth_(cljs.core.deref(metabase.types.coercion_hierarchies.effective_type_hierarchy_STAR_))){
} else {
cljs.core.reset_BANG_(metabase.types.coercion_hierarchies.effective_type_hierarchy_STAR_,metabase.types.coercion_hierarchies.build_hierarchy(cljs.core.seq(cljs.core.deref(metabase.types.coercion_hierarchies.strategy__GT_effective_type))));
}
}

return cljs.core.deref(metabase.types.coercion_hierarchies.effective_type_hierarchy_STAR_);
});
cljs.core.add_watch((function (){var fexpr__74717 = new cljs.core.Var(function(){return cljs.core.get_global_hierarchy;},new cljs.core.Symbol("cljs.core","get-global-hierarchy","cljs.core/get-global-hierarchy",48052871,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"get-global-hierarchy","get-global-hierarchy",1780260380,null),"cljs/core.cljs",(28),(1),(11306),(11306),cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(cljs.core.get_global_hierarchy)?cljs.core.get_global_hierarchy.cljs$lang$test:null)]));
return (fexpr__74717.cljs$core$IFn$_invoke$arity$0 ? fexpr__74717.cljs$core$IFn$_invoke$arity$0() : fexpr__74717.call(null));
})(),new cljs.core.Keyword("metabase.types.coercion-hierarchies","rebuild-hierarchies","metabase.types.coercion-hierarchies/rebuild-hierarchies",1454847607),(function (_key,_ref,old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return null;
} else {
cljs.core.reset_BANG_(metabase.types.coercion_hierarchies.base_type_hierarchy_STAR_,null);

return cljs.core.reset_BANG_(metabase.types.coercion_hierarchies.effective_type_hierarchy_STAR_,null);
}
}));
cljs.core.add_watch(metabase.types.coercion_hierarchies.strategy__GT_allowed_base_types,new cljs.core.Keyword("metabase.types.coercion-hierarchies","rebuild-hierarchies","metabase.types.coercion-hierarchies/rebuild-hierarchies",1454847607),(function (_key,_ref,old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return null;
} else {
return cljs.core.reset_BANG_(metabase.types.coercion_hierarchies.base_type_hierarchy_STAR_,null);
}
}));
cljs.core.add_watch(metabase.types.coercion_hierarchies.strategy__GT_effective_type,new cljs.core.Keyword("metabase.types.coercion-hierarchies","rebuild-hierarchies","metabase.types.coercion-hierarchies/rebuild-hierarchies",1454847607),(function (_key,_ref,old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return null;
} else {
return cljs.core.reset_BANG_(metabase.types.coercion_hierarchies.effective_type_hierarchy_STAR_,null);
}
}));

//# sourceMappingURL=metabase.types.coercion_hierarchies.js.map
