var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./clojure.walk.js");
require("./no.en.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("inflections.core.js");

goog.provide('inflections.core');
/**
 * Coerce the string `s` to the type of `obj`.
 */
inflections.core.coerce = (function inflections$core$coerce(obj,s){
if((obj instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(s);
} else {
if((obj instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(s);
} else {
return s;

}
}
});

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
inflections.core.Rule = (function (pattern,replacement,__meta,__extmap,__hash){
this.pattern = pattern;
this.replacement = replacement;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(inflections.core.Rule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(inflections.core.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k84544,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__84559 = k84544;
var G__84559__$1 = (((G__84559 instanceof cljs.core.Keyword))?G__84559.fqn:null);
switch (G__84559__$1) {
case "pattern":
return self__.pattern;

break;
case "replacement":
return self__.replacement;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k84544,else__5303__auto__);

}
}));

(inflections.core.Rule.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__84561){
var vec__84562 = p__84561;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84562,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84562,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(inflections.core.Rule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#inflections.core.Rule{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"replacement","replacement",-1836238839),self__.replacement],null))], null),self__.__extmap));
}));

(inflections.core.Rule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__84543){
var self__ = this;
var G__84543__$1 = this;
return (new cljs.core.RecordIter((0),G__84543__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"replacement","replacement",-1836238839)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(inflections.core.Rule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(inflections.core.Rule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new inflections.core.Rule(self__.pattern,self__.replacement,self__.__meta,self__.__extmap,self__.__hash));
}));

(inflections.core.Rule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(inflections.core.Rule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1327743444 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(inflections.core.Rule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this84545,other84546){
var self__ = this;
var this84545__$1 = this;
return (((!((other84546 == null)))) && ((((this84545__$1.constructor === other84546.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84545__$1.pattern,other84546.pattern)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84545__$1.replacement,other84546.replacement)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84545__$1.__extmap,other84546.__extmap)))))))));
}));

(inflections.core.Rule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"replacement","replacement",-1836238839),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new inflections.core.Rule(self__.pattern,self__.replacement,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(inflections.core.Rule.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k84544){
var self__ = this;
var this__5307__auto____$1 = this;
var G__84584 = k84544;
var G__84584__$1 = (((G__84584 instanceof cljs.core.Keyword))?G__84584.fqn:null);
switch (G__84584__$1) {
case "pattern":
case "replacement":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k84544);

}
}));

(inflections.core.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__84543){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__84588 = cljs.core.keyword_identical_QMARK_;
var expr__84589 = k__5309__auto__;
if(cljs.core.truth_((pred__84588.cljs$core$IFn$_invoke$arity$2 ? pred__84588.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__84589) : pred__84588.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__84589)))){
return (new inflections.core.Rule(G__84543,self__.replacement,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__84588.cljs$core$IFn$_invoke$arity$2 ? pred__84588.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"replacement","replacement",-1836238839),expr__84589) : pred__84588.call(null,new cljs.core.Keyword(null,"replacement","replacement",-1836238839),expr__84589)))){
return (new inflections.core.Rule(self__.pattern,G__84543,self__.__meta,self__.__extmap,null));
} else {
return (new inflections.core.Rule(self__.pattern,self__.replacement,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__84543),null));
}
}
}));

(inflections.core.Rule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"replacement","replacement",-1836238839),self__.replacement,null))], null),self__.__extmap));
}));

(inflections.core.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__84543){
var self__ = this;
var this__5299__auto____$1 = this;
return (new inflections.core.Rule(self__.pattern,self__.replacement,G__84543,self__.__extmap,self__.__hash));
}));

(inflections.core.Rule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(inflections.core.Rule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),new cljs.core.Symbol(null,"replacement","replacement",-195707312,null)], null);
}));

(inflections.core.Rule.cljs$lang$type = true);

(inflections.core.Rule.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"inflections.core/Rule",null,(1),null));
}));

(inflections.core.Rule.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"inflections.core/Rule");
}));

/**
 * Positional factory function for inflections.core/Rule.
 */
inflections.core.__GT_Rule = (function inflections$core$__GT_Rule(pattern,replacement){
return (new inflections.core.Rule(pattern,replacement,null,null,null));
});

/**
 * Factory function for inflections.core/Rule, taking a map of keywords to field values.
 */
inflections.core.map__GT_Rule = (function inflections$core$map__GT_Rule(G__84550){
var extmap__5342__auto__ = (function (){var G__84602 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__84550,new cljs.core.Keyword(null,"pattern","pattern",242135423),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"replacement","replacement",-1836238839)], 0));
if(cljs.core.record_QMARK_(G__84550)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__84602);
} else {
return G__84602;
}
})();
return (new inflections.core.Rule(new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__84550),new cljs.core.Keyword(null,"replacement","replacement",-1836238839).cljs$core$IFn$_invoke$arity$1(G__84550),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

inflections.core.add_rule_BANG_ = (function inflections$core$add_rule_BANG_(rules,rule){
if((!(cljs.core.contains_QMARK_(cljs.core.set(cljs.core.deref(rules)),rule)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(rules,cljs.core.conj,rule);
} else {
return null;
}
});
/**
 * Returns a seq of rules, where the pattern and replacement must be
 *   given in pairs of two elements.
 */
inflections.core.slurp_rules = (function inflections$core$slurp_rules(var_args){
var args__5732__auto__ = [];
var len__5726__auto___84859 = arguments.length;
var i__5727__auto___84860 = (0);
while(true){
if((i__5727__auto___84860 < len__5726__auto___84859)){
args__5732__auto__.push((arguments[i__5727__auto___84860]));

var G__84861 = (i__5727__auto___84860 + (1));
i__5727__auto___84860 = G__84861;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return inflections.core.slurp_rules.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(inflections.core.slurp_rules.cljs$core$IFn$_invoke$arity$variadic = (function (patterns_and_replacements){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__84607_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(inflections.core.__GT_Rule,p1__84607_SHARP_);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),patterns_and_replacements));
}));

(inflections.core.slurp_rules.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(inflections.core.slurp_rules.cljs$lang$applyTo = (function (seq84608){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq84608));
}));

inflections.core.resolve_rule = (function inflections$core$resolve_rule(rule,word){
if(cljs.core.truth_((function (){var and__5000__auto__ = rule;
if(cljs.core.truth_(and__5000__auto__)){
return word;
} else {
return and__5000__auto__;
}
})())){
var pattern = new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(rule);
var replacement = new cljs.core.Keyword(null,"replacement","replacement",-1836238839).cljs$core$IFn$_invoke$arity$1(rule);
if(cljs.core.truth_(cljs.core.re_find(pattern,word))){
return clojure.string.replace(word,pattern,replacement);
} else {
return null;
}
} else {
return null;
}
});
inflections.core.resolve_rules = (function inflections$core$resolve_rules(rules,word){
return cljs.core.first(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__84615_SHARP_){
return inflections.core.resolve_rule(p1__84615_SHARP_,word);
}),rules));
});
/**
 * Resets the list of plural rules.
 */
inflections.core.reset_rules_BANG_ = (function inflections$core$reset_rules_BANG_(rules){
return cljs.core.reset_BANG_(rules,cljs.core.PersistentVector.EMPTY);
});
/**
 * Same as `clojure.core/name`, but keeps the namespace for keywords
 *   and symbols.
 */
inflections.core.str_name = (function inflections$core$str_name(x){
if((x == null)){
return x;
} else {
if(typeof x === 'string'){
return x;
} else {
if((((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)))){
var temp__5802__auto__ = cljs.core.namespace(x);
if(cljs.core.truth_(temp__5802__auto__)){
var ns = temp__5802__auto__;
return [ns,"/",cljs.core.name(x)].join('');
} else {
return cljs.core.name(x);
}
} else {
return null;
}
}
}
});
inflections.core._STAR_uncountable_words_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 81, ["gossip",null,"sadness",null,"space",null,"happiness",null,"blood",null,"silver",null,"cotton",null,"species",null,"mist",null,"paper",null,"education",null,"wine",null,"up",null,"food",null,"sugar",null,"gold",null,"literature",null,"pork",null,"lightning",null,"sheep",null,"shopping",null,"fresh",null,"news",null,"pepper",null,"experience",null,"milk",null,"honey",null,"oxygen",null,"fiction",null,"luck",null,"vinegar",null,"coffee",null,"ground",null,"peanut",null,"confusion",null,"tennis",null,"power",null,"meat",null,"butter",null,"music",null,"luggage",null,"love",null,"grass",null,"knowledge",null,"time",null,"cheese",null,"jam",null,"thunder",null,"electricity",null,"gum",null,"sunshine",null,"history",null,"snow",null,"money",null,"wool",null,"rice",null,"series",null,"liquid",null,"equipment",null,"pressure",null,"oil",null,"information",null,"steam",null,"chewing",null,"petrol",null,"research",null,"patience",null,"toothpaste",null,"speed",null,"entertainment",null,"wood",null,"tea",null,"art",null,"washing",null,"forgiveness",null,"traffic",null,"alcohol",null,"ice",null,"homework",null,"fish",null,"air",null], null), null));
inflections.core._STAR_acronyms_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["hst","HST","nasa","NASA"], null));
/**
 * Returns the the acronym for `s` if it is one, otherwise nil.
 */
inflections.core.acronym = (function inflections$core$acronym(s){
if(cljs.core.truth_(s)){
var G__84621 = inflections.core.str_name(s);
var G__84621__$1 = (((G__84621 == null))?null:clojure.string.lower_case(G__84621));
var G__84621__$2 = (((G__84621__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(inflections.core._STAR_acronyms_STAR_),G__84621__$1));
if((G__84621__$2 == null)){
return null;
} else {
return inflections.core.coerce(s,G__84621__$2);
}
} else {
return null;
}
});
/**
 * Adds `word` to the set of `*acronyms*`.
 */
inflections.core.add_acronym_BANG_ = (function inflections$core$add_acronym_BANG_(word){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inflections.core._STAR_acronyms_STAR_,cljs.core.assoc,clojure.string.lower_case(inflections.core.str_name(word)),inflections.core.str_name(word));
});
/**
 * Delete `word` from the set of `*acronyms*`.
 */
inflections.core.delete_acronym_BANG_ = (function inflections$core$delete_acronym_BANG_(word){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(inflections.core._STAR_acronyms_STAR_,cljs.core.dissoc,clojure.string.lower_case(inflections.core.str_name(word)));
});
/**
 * Returns true if `s` is countable, otherwise false.
 */
inflections.core.countable_QMARK_ = (function inflections$core$countable_QMARK_(s){
if(cljs.core.truth_(s)){
return (!(cljs.core.contains_QMARK_(cljs.core.deref(inflections.core._STAR_uncountable_words_STAR_),clojure.string.lower_case(inflections.core.str_name(s)))));
} else {
return null;
}
});
/**
 * Returns true if `x` is uncountable, otherwise false.
 */
inflections.core.uncountable_QMARK_ = (function inflections$core$uncountable_QMARK_(x){
if(cljs.core.truth_(x)){
return cljs.core.not(inflections.core.countable_QMARK_(x));
} else {
return null;
}
});
/**
 * Adds `word` to the set of `*uncountable-words*`.
 */
inflections.core.add_uncountable_BANG_ = (function inflections$core$add_uncountable_BANG_(word){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(inflections.core._STAR_uncountable_words_STAR_,cljs.core.conj,clojure.string.lower_case(inflections.core.str_name(word)));
});
/**
 * Delete `word` from the set of `*uncountable-words*`.
 */
inflections.core.delete_uncountable_BANG_ = (function inflections$core$delete_uncountable_BANG_(word){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(inflections.core._STAR_uncountable_words_STAR_,cljs.core.disj,clojure.string.lower_case(inflections.core.str_name(word)));
});
inflections.core._STAR_plural_rules_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
/**
 * Returns the plural of s.
 */
inflections.core.plural = (function inflections$core$plural(s){
var s__$1 = inflections.core.str_name(s);
if(cljs.core.truth_((function (){var or__5002__auto__ = clojure.string.blank_QMARK_(s__$1);
if(or__5002__auto__){
return or__5002__auto__;
} else {
return inflections.core.uncountable_QMARK_(s__$1);
}
})())){
return s__$1;
} else {
return inflections.core.resolve_rules(cljs.core.rseq(cljs.core.deref(inflections.core._STAR_plural_rules_STAR_)),s__$1);
}
});
/**
 * Define rule(s) to map words from singular to plural.
 * 
 *   Examples: (plural! #"$(?i)" "s")
 *          (plural! #"(ax|test)is$(?i)" "$1es"
 *                   #"(octop|vir)us$(?i)" "$1i")
 */
inflections.core.plural_BANG_ = (function inflections$core$plural_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___84862 = arguments.length;
var i__5727__auto___84863 = (0);
while(true){
if((i__5727__auto___84863 < len__5726__auto___84862)){
args__5732__auto__.push((arguments[i__5727__auto___84863]));

var G__84864 = (i__5727__auto___84863 + (1));
i__5727__auto___84863 = G__84864;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return inflections.core.plural_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(inflections.core.plural_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (patterns_and_replacements){
var seq__84638 = cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(inflections.core.slurp_rules,patterns_and_replacements));
var chunk__84639 = null;
var count__84640 = (0);
var i__84641 = (0);
while(true){
if((i__84641 < count__84640)){
var rule = chunk__84639.cljs$core$IIndexed$_nth$arity$2(null,i__84641);
inflections.core.add_rule_BANG_(inflections.core._STAR_plural_rules_STAR_,rule);


var G__84865 = seq__84638;
var G__84866 = chunk__84639;
var G__84867 = count__84640;
var G__84868 = (i__84641 + (1));
seq__84638 = G__84865;
chunk__84639 = G__84866;
count__84640 = G__84867;
i__84641 = G__84868;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__84638);
if(temp__5804__auto__){
var seq__84638__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__84638__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__84638__$1);
var G__84869 = cljs.core.chunk_rest(seq__84638__$1);
var G__84870 = c__5525__auto__;
var G__84871 = cljs.core.count(c__5525__auto__);
var G__84872 = (0);
seq__84638 = G__84869;
chunk__84639 = G__84870;
count__84640 = G__84871;
i__84641 = G__84872;
continue;
} else {
var rule = cljs.core.first(seq__84638__$1);
inflections.core.add_rule_BANG_(inflections.core._STAR_plural_rules_STAR_,rule);


var G__84873 = cljs.core.next(seq__84638__$1);
var G__84874 = null;
var G__84875 = (0);
var G__84876 = (0);
seq__84638 = G__84873;
chunk__84639 = G__84874;
count__84640 = G__84875;
i__84641 = G__84876;
continue;
}
} else {
return null;
}
}
break;
}
}));

(inflections.core.plural_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(inflections.core.plural_BANG_.cljs$lang$applyTo = (function (seq84637){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq84637));
}));

inflections.core.init_plural_rules_BANG_ = (function inflections$core$init_plural_rules_BANG_(){
return inflections.core.plural_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([/$/i,"s",/s$/i,"s",/(ax|test)is$/i,"$1es",/(octop|vir)us$/i,"$1i",/(alias|status)$/i,"$1es",/(bu)s$/i,"$1ses",/(buffal|tomat)o$/i,"$1oes",/([ti])um$/i,"$1a",/sis$/i,"ses",/(?:([^f])fe|([lr])f)$/i,"$1$2ves",/(hive)$/i,"$1s",/([^aeiouy]|qu)y$/i,"$1ies",/(x|ch|ss|sh)$/i,"$1es",/(matr|vert|ind)(?:ix|ex)$/i,"$1ices",/([m|l])ouse$/i,"$1ice",/^(ox)$/i,"$1en",/(quiz)$/i,"$1zes"], 0));
});
inflections.core._STAR_singular_rules_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
/**
 * Returns the singular of s.
 */
inflections.core.singular = (function inflections$core$singular(s){
var s_SINGLEQUOTE_ = inflections.core.str_name(s);
if(cljs.core.not(inflections.core.uncountable_QMARK_(s_SINGLEQUOTE_))){
return inflections.core.coerce(s,(function (){var or__5002__auto__ = inflections.core.resolve_rules(cljs.core.rseq(cljs.core.deref(inflections.core._STAR_singular_rules_STAR_)),s_SINGLEQUOTE_);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return s_SINGLEQUOTE_;
}
})());
} else {
return s;
}
});
/**
 * Define rule(s) to map words from singular to plural.
 * 
 *   Examples: (singular! #"(n)ews$(?i)" "$1ews")
 *          (singular! #"(m)ovies$(?i)" "$1ovie"
 *                     #"([m|l])ice$(?i)" "$1ouse")
 */
inflections.core.singular_BANG_ = (function inflections$core$singular_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___84877 = arguments.length;
var i__5727__auto___84878 = (0);
while(true){
if((i__5727__auto___84878 < len__5726__auto___84877)){
args__5732__auto__.push((arguments[i__5727__auto___84878]));

var G__84879 = (i__5727__auto___84878 + (1));
i__5727__auto___84878 = G__84879;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return inflections.core.singular_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(inflections.core.singular_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (patterns_and_replacements){
var seq__84655 = cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(inflections.core.slurp_rules,patterns_and_replacements));
var chunk__84656 = null;
var count__84657 = (0);
var i__84658 = (0);
while(true){
if((i__84658 < count__84657)){
var rule = chunk__84656.cljs$core$IIndexed$_nth$arity$2(null,i__84658);
inflections.core.add_rule_BANG_(inflections.core._STAR_singular_rules_STAR_,rule);


var G__84880 = seq__84655;
var G__84881 = chunk__84656;
var G__84882 = count__84657;
var G__84883 = (i__84658 + (1));
seq__84655 = G__84880;
chunk__84656 = G__84881;
count__84657 = G__84882;
i__84658 = G__84883;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__84655);
if(temp__5804__auto__){
var seq__84655__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__84655__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__84655__$1);
var G__84884 = cljs.core.chunk_rest(seq__84655__$1);
var G__84885 = c__5525__auto__;
var G__84886 = cljs.core.count(c__5525__auto__);
var G__84887 = (0);
seq__84655 = G__84884;
chunk__84656 = G__84885;
count__84657 = G__84886;
i__84658 = G__84887;
continue;
} else {
var rule = cljs.core.first(seq__84655__$1);
inflections.core.add_rule_BANG_(inflections.core._STAR_singular_rules_STAR_,rule);


var G__84889 = cljs.core.next(seq__84655__$1);
var G__84890 = null;
var G__84891 = (0);
var G__84892 = (0);
seq__84655 = G__84889;
chunk__84656 = G__84890;
count__84657 = G__84891;
i__84658 = G__84892;
continue;
}
} else {
return null;
}
}
break;
}
}));

(inflections.core.singular_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(inflections.core.singular_BANG_.cljs$lang$applyTo = (function (seq84651){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq84651));
}));

inflections.core.init_singular_rules_BANG_ = (function inflections$core$init_singular_rules_BANG_(){
return inflections.core.singular_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([/s$/i,"",/(ss)$/i,"$1",/(n)ews$/i,"$1ews",/([ti])a$/i,"$1um",/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(sis|ses)$/i,"$1$2sis",/(^analy)(sis|ses)$/i,"$1sis",/([^f])ves$/i,"$1fe",/(hive)s$/i,"$1",/(tive)s$/i,"$1",/([lr])ves$/i,"$1f",/([^aeiouy]|qu)ies$/i,"$1y",/(s)eries$/i,"$1eries",/(m)ovies$/i,"$1ovie",/(x|ch|ss|sh)es$/i,"$1",/([m|l])ice$/i,"$1ouse",/(bus)(es)?$/i,"$1",/(o)es$/i,"$1",/(shoe)s$/i,"$1",/(cris|ax|test)(is|es)$/i,"$1is",/(octop|vir)(us|i)$/i,"$1us",/(alias|status)(es)?$/i,"$1",/^(ox)en/i,"$1",/(vert|ind)ices$/i,"$1ex",/(matr)ices$/i,"$1ix",/(quiz)zes$/i,"$1",/(database)s$/i,"$1"], 0));
});
inflections.core._STAR_irregular_words_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_set());
/**
 * Returns true if `word` is an irregular word, otherwise false.
 */
inflections.core.irregular_QMARK_ = (function inflections$core$irregular_QMARK_(word){
if(cljs.core.truth_(word)){
return cljs.core.contains_QMARK_(cljs.core.deref(inflections.core._STAR_irregular_words_STAR_),clojure.string.lower_case(inflections.core.str_name(word)));
} else {
return null;
}
});
/**
 * Add `singular` and `plural` to the set of `*irregular-words*`.
 */
inflections.core.add_irregular_BANG_ = (function inflections$core$add_irregular_BANG_(singular,plural){
var singular__$1 = clojure.string.lower_case(inflections.core.str_name(singular));
var plural__$1 = clojure.string.lower_case(inflections.core.str_name(plural));
inflections.core.delete_uncountable_BANG_(singular__$1);

inflections.core.delete_uncountable_BANG_(plural__$1);

inflections.core.singular_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.re_pattern(["^",plural__$1,"$"].join('')),singular__$1], 0));

inflections.core.plural_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.re_pattern(["^",singular__$1,"$"].join('')),plural__$1], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(inflections.core._STAR_irregular_words_STAR_,cljs.core.conj,singular__$1);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(inflections.core._STAR_irregular_words_STAR_,cljs.core.conj,plural__$1);
});
/**
 * Delete `singular` and `plural` from the set of *irregular-words*.
 */
inflections.core.delete_irregular_BANG_ = (function inflections$core$delete_irregular_BANG_(singular,plural){
var singular__$1 = clojure.string.lower_case(inflections.core.str_name(singular));
var plural__$1 = clojure.string.lower_case(inflections.core.str_name(plural));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(inflections.core._STAR_irregular_words_STAR_,cljs.core.disj,singular__$1);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(inflections.core._STAR_irregular_words_STAR_,cljs.core.disj,plural__$1);
});
inflections.core.init_irregular_words_BANG_ = (function inflections$core$init_irregular_words_BANG_(){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__84700_SHARP_){
return inflections.core.add_irregular_BANG_(cljs.core.first(p1__84700_SHARP_),cljs.core.second(p1__84700_SHARP_));
}),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["amenity","amenities"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["child","children"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cow","kine"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["foot","feet"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["louse","lice"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mailman","mailmen"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["man","men"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["mouse","mice"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["move","moves"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ox","oxen"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["person","people"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sex","sexes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tooth","teeth"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["woman","women"], null)], null)));
});
/**
 * Convert `word` to camel case. By default, camel-case converts to
 *   UpperCamelCase. If the argument to camel-case is set to :lower then
 *   camel-case produces lowerCamelCase.
 * 
 *   Examples:
 * 
 *  (camel-case "active_record")
 *  ;=> "ActiveRecord"
 * 
 *  (camel-case "active_record" :lower)
 *  ;=> "activeRecord"
 * 
 *  (camel-case "active_record/errors")
 *  ;=> "ActiveRecord/Errors"
 * 
 *  (camel-case "active_record/errors" :lower)
 *  ;=> "activeRecord/Errors"
 */
inflections.core.camel_case = (function inflections$core$camel_case(var_args){
var args__5732__auto__ = [];
var len__5726__auto___84900 = arguments.length;
var i__5727__auto___84901 = (0);
while(true){
if((i__5727__auto___84901 < len__5726__auto___84900)){
args__5732__auto__.push((arguments[i__5727__auto___84901]));

var G__84902 = (i__5727__auto___84901 + (1));
i__5727__auto___84901 = G__84902;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return inflections.core.camel_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(inflections.core.camel_case.cljs$core$IFn$_invoke$arity$variadic = (function (word,p__84708){
var vec__84709 = p__84708;
var mode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84709,(0),null);
if(cljs.core.truth_(word)){
return inflections.core.coerce(word,(function (){var word__$1 = inflections.core.str_name(word);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"lower","lower",1120320821))){
return inflections.core.camel_case.cljs$core$IFn$_invoke$arity$variadic(word__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.lower_case], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"upper","upper",246243906))){
return inflections.core.camel_case.cljs$core$IFn$_invoke$arity$variadic(word__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.string.upper_case], 0));
} else {
if(cljs.core.fn_QMARK_(mode)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__84714 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(word__$1));
return (mode.cljs$core$IFn$_invoke$arity$1 ? mode.cljs$core$IFn$_invoke$arity$1(G__84714) : mode.call(null,G__84714));
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest(inflections.core.camel_case.cljs$core$IFn$_invoke$arity$variadic(word__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)))))].join('');
} else {
return clojure.string.replace(clojure.string.replace(word__$1,/\/(.?)/,(function (p1__84703_SHARP_){
return ["/",clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__84703_SHARP_,(1)))].join('');
})),/(^|_|-)(.)/,(function (p1__84705_SHARP_){
var vec__84715 = p1__84705_SHARP_;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84715,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84715,(1),null);
var letter_to_uppercase = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84715,(2),null);
return clojure.string.upper_case(letter_to_uppercase);
}));

}
}
}
})());
} else {
return null;
}
}));

(inflections.core.camel_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(inflections.core.camel_case.cljs$lang$applyTo = (function (seq84706){
var G__84707 = cljs.core.first(seq84706);
var seq84706__$1 = cljs.core.next(seq84706);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__84707,seq84706__$1);
}));

/**
 * Convert the first letter in `word` to upper case.
 * 
 *   Examples:
 * 
 *  (capitalize "hello")
 *  ;=> "Hello"
 * 
 *  (capitalize "HELLO")
 *  ;=> "Hello"
 * 
 *  (capitalize "abc123")
 *  ;=> "Abc123"
 */
inflections.core.capitalize = (function inflections$core$capitalize(word){
if(cljs.core.truth_(word)){
var temp__5802__auto__ = inflections.core.acronym(word);
if(cljs.core.truth_(temp__5802__auto__)){
var acronym = temp__5802__auto__;
return acronym;
} else {
var word_SINGLEQUOTE_ = inflections.core.str_name(word);
return inflections.core.coerce(word,[clojure.string.upper_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(word_SINGLEQUOTE_))),((cljs.core.next(word_SINGLEQUOTE_))?clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(word_SINGLEQUOTE_,(1))):null)].join(''));
}
} else {
return null;
}
});
/**
 * Convert `s` into a title.
 */
inflections.core.titleize = (function inflections$core$titleize(s){
if(cljs.core.truth_(s)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(inflections.core.capitalize,clojure.string.split.cljs$core$IFn$_invoke$arity$2(inflections.core.str_name(s),/[-_.\/ ]/)));
} else {
return null;
}
});
/**
 * Replaces all underscores in `s` with dashes.
 * 
 *   Examples:
 * 
 *  (dasherize "puni_puni")
 *  ;=> "puni-puni"
 */
inflections.core.dasherize = (function inflections$core$dasherize(s){
if(cljs.core.truth_(s)){
return inflections.core.coerce(s,clojure.string.replace(inflections.core.str_name(s),/_/,"-"));
} else {
return null;
}
});
/**
 * Removes the module part from `x`.
 * 
 *   Examples:
 * 
 *  (demodulize "inflections.MyRecord")
 *  ;=> "MyRecord"
 * 
 *  (demodulize "ActiveRecord::CoreExtensions::String::Inflections")
 *  ;=> "Inflections"
 * 
 *  (demodulize "Inflections")
 *  ;=> "Inflections"
 */
inflections.core.demodulize = (function inflections$core$demodulize(x){
if(cljs.core.truth_(x)){
return inflections.core.coerce(x,clojure.string.replace(inflections.core.str_name(x),/^.*(::|\.)/,""));
} else {
return null;
}
});
/**
 * Hyphenate x, which is the same as threading `x` through the str,
 *   underscore and dasherize fns.
 * 
 *   Examples:
 * 
 *  (hyphenate 'Continent)
 *  ; => "continent"
 * 
 *  (hyphenate "CountryFlag")
 *  ; => "country-flag"
 */
inflections.core.hyphenate = (function inflections$core$hyphenate(x){
if(cljs.core.truth_(x)){
return inflections.core.coerce(x,clojure.string.lower_case(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(inflections.core.str_name(x),/([A-Z]+)([A-Z][a-z])/,"$1-$2"),/([a-z\d])([A-Z])/,"$1-$2"),/\s+/,"-"),/_/,"-")));
} else {
return null;
}
});
/**
 * Turns `x` into an ordinal string used to denote the position in an
 *   ordered sequence such as 1st, 2nd, 3rd, 4th, etc.
 * 
 *   Examples:
 * 
 *  (ordinalize "1")
 *  ;=> "1st"
 * 
 *  (ordinalize "23")
 *  ;=> "23rd"
 */
inflections.core.ordinalize = (function inflections$core$ordinalize(x){
var temp__5802__auto__ = no.en.core.parse_integer(x);
if(cljs.core.truth_(temp__5802__auto__)){
var number = temp__5802__auto__;
if(cljs.core.contains_QMARK_(cljs.core.set(cljs.core.range.cljs$core$IFn$_invoke$arity$2((11),(14))),cljs.core.mod(number,(100)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(number),"th"].join('');
} else {
var modulus = cljs.core.mod(number,(10));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(modulus,(1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(number),"st"].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(modulus,(2))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(number),"nd"].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(modulus,(3))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(number),"rd"].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(number),"th"].join('');

}
}
}
}
} else {
return null;
}
});
/**
 * Replaces special characters in `x` with the default separator
 *   "-". so that it may be used as part of a pretty URL.
 * 
 *   Examples:
 * 
 *  (parameterize "Donald E. Knuth")
 *  ; => "donald-e-knuth"
 * 
 *  (parameterize "Donald E. Knuth" "_")
 *  ; => "donald_e_knuth"
 */
inflections.core.parameterize = (function inflections$core$parameterize(var_args){
var args__5732__auto__ = [];
var len__5726__auto___84903 = arguments.length;
var i__5727__auto___84904 = (0);
while(true){
if((i__5727__auto___84904 < len__5726__auto___84903)){
args__5732__auto__.push((arguments[i__5727__auto___84904]));

var G__84905 = (i__5727__auto___84904 + (1));
i__5727__auto___84904 = G__84905;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return inflections.core.parameterize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(inflections.core.parameterize.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__84776){
var vec__84781 = p__84776;
var sep = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84781,(0),null);
if(cljs.core.truth_(x)){
var sep__$1 = (function (){var or__5002__auto__ = sep;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "-";
}
})();
return clojure.string.lower_case(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(inflections.core.str_name(x),/[^A-Za-z0-9]+/,sep__$1),/\++/,sep__$1),cljs.core.re_pattern([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep__$1),"{2,}"].join('')),sep__$1),cljs.core.re_pattern(["(?i)(^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep__$1),")|(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep__$1),"$)"].join('')),""));
} else {
return null;
}
}));

(inflections.core.parameterize.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(inflections.core.parameterize.cljs$lang$applyTo = (function (seq84746){
var G__84748 = cljs.core.first(seq84746);
var seq84746__$1 = cljs.core.next(seq84746);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__84748,seq84746__$1);
}));

/**
 * Attempts to pluralize the word unless count is 1. If plural is
 *   supplied, it will use that when count is > 1, otherwise it will use
 *   the inflector to determine the plural form.
 */
inflections.core.pluralize = (function inflections$core$pluralize(var_args){
var args__5732__auto__ = [];
var len__5726__auto___84907 = arguments.length;
var i__5727__auto___84908 = (0);
while(true){
if((i__5727__auto___84908 < len__5726__auto___84907)){
args__5732__auto__.push((arguments[i__5727__auto___84908]));

var G__84912 = (i__5727__auto___84908 + (1));
i__5727__auto___84908 = G__84912;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return inflections.core.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(inflections.core.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (count,singular,p__84811){
var vec__84812 = p__84811;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84812,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(count)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),count))?singular:(function (){var or__5002__auto__ = plural;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return inflections.core.plural(singular);
}
})()))].join('');
}));

(inflections.core.pluralize.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(inflections.core.pluralize.cljs$lang$applyTo = (function (seq84808){
var G__84809 = cljs.core.first(seq84808);
var seq84808__$1 = cljs.core.next(seq84808);
var G__84810 = cljs.core.first(seq84808__$1);
var seq84808__$2 = cljs.core.next(seq84808__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__84809,G__84810,seq84808__$2);
}));

/**
 * The reverse of camel-case. Makes an underscored, lowercase form from
 *   the expression in the string.
 * 
 *   Examples:
 * 
 *  (underscore "ActiveRecord")
 *  ;=> "active_record"
 * 
 *  (underscore "ActiveRecord::Errors")
 *  ;=> "active_record::errors"
 */
inflections.core.underscore = (function inflections$core$underscore(x){
if(cljs.core.truth_(x)){
return inflections.core.coerce(x,clojure.string.lower_case(clojure.string.replace(clojure.string.replace(clojure.string.replace(inflections.core.str_name(x),/([A-Z\d]+)([A-Z][a-z])/,"$1_$2"),/([a-z\d])([A-Z])/,"$1_$2"),/-/,"_")));
} else {
return null;
}
});
/**
 * Converts `x` into a foreign key. The default separator "_" is
 *   placed between the name and "id".
 * 
 * 
 *   Examples:
 * 
 *  (foreign-key "Message")
 *  ;=> "message_id"
 * 
 *  (foreign-key "Message" false)
 *  ;=> "messageid"
 * 
 *  (foreign-key "Admin::Post")
 *  ;=> "post_id"
 */
inflections.core.foreign_key = (function inflections$core$foreign_key(var_args){
var args__5732__auto__ = [];
var len__5726__auto___84917 = arguments.length;
var i__5727__auto___84918 = (0);
while(true){
if((i__5727__auto___84918 < len__5726__auto___84917)){
args__5732__auto__.push((arguments[i__5727__auto___84918]));

var G__84919 = (i__5727__auto___84918 + (1));
i__5727__auto___84918 = G__84919;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return inflections.core.foreign_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(inflections.core.foreign_key.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__84820){
var vec__84821 = p__84820;
var sep = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84821,(0),null);
var x_SINGLEQUOTE_ = inflections.core.str_name(x);
if(clojure.string.blank_QMARK_(x_SINGLEQUOTE_)){
return null;
} else {
return inflections.core.coerce(x,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(inflections.core.underscore(inflections.core.hyphenate(inflections.core.singular(inflections.core.demodulize(x_SINGLEQUOTE_))))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = sep;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "_";
}
})()),"id"].join(''));
}
}));

(inflections.core.foreign_key.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(inflections.core.foreign_key.cljs$lang$applyTo = (function (seq84817){
var G__84818 = cljs.core.first(seq84817);
var seq84817__$1 = cljs.core.next(seq84817);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__84818,seq84817__$1);
}));

/**
 * Recursively transform all keys in the map `m` by applying `f` on them.
 */
inflections.core.transform_keys = (function inflections$core$transform_keys(m,f){
if(cljs.core.map_QMARK_(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (memo,key){
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(memo,key),(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(key) : f.call(null,key)),((cljs.core.map_QMARK_(value))?(inflections.core.transform_keys.cljs$core$IFn$_invoke$arity$2 ? inflections.core.transform_keys.cljs$core$IFn$_invoke$arity$2(value,f) : inflections.core.transform_keys.call(null,value,f)):((cljs.core.vector_QMARK_(value))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__84825_SHARP_){
return (inflections.core.transform_keys.cljs$core$IFn$_invoke$arity$2 ? inflections.core.transform_keys.cljs$core$IFn$_invoke$arity$2(p1__84825_SHARP_,f) : inflections.core.transform_keys.call(null,p1__84825_SHARP_,f));
}),value):((cljs.core.sequential_QMARK_(value))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__84826_SHARP_){
return (inflections.core.transform_keys.cljs$core$IFn$_invoke$arity$2 ? inflections.core.transform_keys.cljs$core$IFn$_invoke$arity$2(p1__84826_SHARP_,f) : inflections.core.transform_keys.call(null,p1__84826_SHARP_,f));
}),value):value
))));
}),m,cljs.core.keys(m));
} else {
return m;
}
});
/**
 * Recursively transform all map values of m by applying f on them.
 */
inflections.core.transform_values = (function inflections$core$transform_values(m,f){
if(cljs.core.map_QMARK_(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (memo,key){
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(memo,key,((cljs.core.map_QMARK_(value))?(inflections.core.transform_values.cljs$core$IFn$_invoke$arity$2 ? inflections.core.transform_values.cljs$core$IFn$_invoke$arity$2(value,f) : inflections.core.transform_values.call(null,value,f)):(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(value) : f.call(null,value))));
}),m,cljs.core.keys(m));
} else {
return m;
}
});
/**
 * Recursively apply camel-case on all keys of m.
 */
inflections.core.camel_case_keys = (function inflections$core$camel_case_keys(var_args){
var args__5732__auto__ = [];
var len__5726__auto___84922 = arguments.length;
var i__5727__auto___84923 = (0);
while(true){
if((i__5727__auto___84923 < len__5726__auto___84922)){
args__5732__auto__.push((arguments[i__5727__auto___84923]));

var G__84924 = (i__5727__auto___84923 + (1));
i__5727__auto___84923 = G__84924;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return inflections.core.camel_case_keys.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(inflections.core.camel_case_keys.cljs$core$IFn$_invoke$arity$variadic = (function (m,p__84831){
var vec__84832 = p__84831;
var mode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84832,(0),null);
return clojure.walk.keywordize_keys(inflections.core.transform_keys(m,(function (p1__84828_SHARP_){
return inflections.core.camel_case.cljs$core$IFn$_invoke$arity$variadic(p1__84828_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([mode], 0));
})));
}));

(inflections.core.camel_case_keys.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(inflections.core.camel_case_keys.cljs$lang$applyTo = (function (seq84829){
var G__84830 = cljs.core.first(seq84829);
var seq84829__$1 = cljs.core.next(seq84829);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__84830,seq84829__$1);
}));

/**
 * Recursively apply hyphenate on all keys of m.
 */
inflections.core.hyphenate_keys = (function inflections$core$hyphenate_keys(m){
return inflections.core.transform_keys(m,inflections.core.hyphenate);
});
/**
 * Recursively apply hyphenate on all values of m.
 */
inflections.core.hyphenate_values = (function inflections$core$hyphenate_values(m){
return inflections.core.transform_values(m,inflections.core.hyphenate);
});
/**
 * Recursively transform all keys of m into strings.
 */
inflections.core.stringify_keys = (function inflections$core$stringify_keys(m){
return inflections.core.transform_keys(m,(function (p1__84835_SHARP_){
if((p1__84835_SHARP_ instanceof cljs.core.Keyword)){
return inflections.core.str_name(p1__84835_SHARP_);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__84835_SHARP_);
}
}));
});
/**
 * Recursively transform all values of m into strings.
 */
inflections.core.stringify_values = (function inflections$core$stringify_values(m){
return inflections.core.transform_values(m,(function (p1__84837_SHARP_){
if((p1__84837_SHARP_ instanceof cljs.core.Keyword)){
return inflections.core.str_name(p1__84837_SHARP_);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__84837_SHARP_);
}
}));
});
/**
 * Recursively apply underscore on all keys of m.
 */
inflections.core.underscore_keys = (function inflections$core$underscore_keys(m){
return inflections.core.transform_keys(m,inflections.core.underscore);
});
/**
 * Initialize the Inflections library with defaults.
 */
inflections.core.init_inflections_BANG_ = (function inflections$core$init_inflections_BANG_(){
inflections.core.init_plural_rules_BANG_();

inflections.core.init_singular_rules_BANG_();

return inflections.core.init_irregular_words_BANG_();
});
inflections.core.init_inflections_BANG_();

//# sourceMappingURL=inflections.core.js.map
