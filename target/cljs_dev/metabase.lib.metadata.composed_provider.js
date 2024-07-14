var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.core.protocols.js");
require("./clojure.datafy.js");
require("./clojure.set.js");
require("./medley.core.js");
require("./metabase.lib.metadata.protocols.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.metadata.composed_provider.js");

goog.provide('metabase.lib.metadata.composed_provider');
metabase.lib.metadata.composed_provider.cached_providers = (function metabase$lib$metadata$composed_provider$cached_providers(providers){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(metabase.lib.metadata.protocols.cached_metadata_provider_QMARK_,providers);
});
metabase.lib.metadata.composed_provider.invocation_tracker_providers = (function metabase$lib$metadata$composed_provider$invocation_tracker_providers(providers){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__79744_SHARP_){
if((!((p1__79744_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__79744_SHARP_.metabase$lib$metadata$protocols$InvocationTracker$)))){
return true;
} else {
if((!p1__79744_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(metabase.lib.metadata.protocols.InvocationTracker,p1__79744_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(metabase.lib.metadata.protocols.InvocationTracker,p1__79744_SHARP_);
}
}),providers);
});
metabase.lib.metadata.composed_provider.metadatas_for_f = (function metabase$lib$metadata$composed_provider$metadatas_for_f(f,providers,metadata_type,ids){
var G__79749 = providers;
var vec__79750 = G__79749;
var seq__79751 = cljs.core.seq(vec__79750);
var first__79752 = cljs.core.first(seq__79751);
var seq__79751__$1 = cljs.core.next(seq__79751);
var provider = first__79752;
var more_providers = seq__79751__$1;
var unfetched_ids = cljs.core.set(ids);
var fetched = cljs.core.PersistentVector.EMPTY;
var G__79749__$1 = G__79749;
var unfetched_ids__$1 = unfetched_ids;
var fetched__$1 = fetched;
while(true){
var vec__79756 = G__79749__$1;
var seq__79757 = cljs.core.seq(vec__79756);
var first__79758 = cljs.core.first(seq__79757);
var seq__79757__$1 = cljs.core.next(seq__79757);
var provider__$1 = first__79758;
var more_providers__$1 = seq__79757__$1;
var unfetched_ids__$2 = unfetched_ids__$1;
var fetched__$2 = fetched__$1;
if(cljs.core.empty_QMARK_(unfetched_ids__$2)){
return fetched__$2;
} else {
if(cljs.core.not(provider__$1)){
return fetched__$2;
} else {
var newly_fetched = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(provider__$1,metadata_type,unfetched_ids__$2) : f.call(null,provider__$1,metadata_type,unfetched_ids__$2));
var newly_fetched_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)),newly_fetched);
var unfetched_ids__$3 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(unfetched_ids__$2,newly_fetched_ids);
var G__79817 = more_providers__$1;
var G__79818 = unfetched_ids__$3;
var G__79819 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(fetched__$2,newly_fetched);
G__79749__$1 = G__79817;
unfetched_ids__$1 = G__79818;
fetched__$1 = G__79819;
continue;

}
}
break;
}
});
metabase.lib.metadata.composed_provider.metadatas = (function metabase$lib$metadata$composed_provider$metadatas(providers,metadata_type,ids){
return metabase.lib.metadata.composed_provider.metadatas_for_f(metabase.lib.metadata.protocols.metadatas,providers,metadata_type,ids);
});
metabase.lib.metadata.composed_provider.cached_metadatas = (function metabase$lib$metadata$composed_provider$cached_metadatas(providers,metadata_type,ids){
return metabase.lib.metadata.composed_provider.metadatas_for_f(metabase.lib.metadata.protocols.cached_metadatas,metabase.lib.metadata.composed_provider.cached_providers(providers),metadata_type,ids);
});
metabase.lib.metadata.composed_provider.store_metadata_BANG_ = (function metabase$lib$metadata$composed_provider$store_metadata_BANG_(metadata_providers,metadata){
var temp__5804__auto__ = cljs.core.seq(metabase.lib.metadata.composed_provider.cached_providers(metadata_providers));
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var provider = cljs.core.first(xs__6360__auto__);
return metabase.lib.metadata.protocols.store_metadata_BANG_(provider,metadata);
} else {
return null;
}
});
metabase.lib.metadata.composed_provider.tables = (function metabase$lib$metadata$composed_provider$tables(metadata_providers){
return medley.core.distinct_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(metabase.lib.metadata.protocols.tables,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metadata_providers], 0)));
});
metabase.lib.metadata.composed_provider.metadatas_for_table = (function metabase$lib$metadata$composed_provider$metadatas_for_table(metadata_type,table_id,metadata_providers){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (provider){
return metabase.lib.metadata.protocols.metadatas_for_table(provider,metadata_type,table_id);
})),medley.core.distinct_by.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092))),metadata_providers);
});
metabase.lib.metadata.composed_provider.metadatas_for_tables = (function metabase$lib$metadata$composed_provider$metadatas_for_tables(metadata_type,table_ids,metadata_providers){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (provider){
return metabase.lib.metadata.protocols.metadatas_for_tables(provider,metadata_type,table_ids);
})),medley.core.distinct_by.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092))),metadata_providers);
});
metabase.lib.metadata.composed_provider.setting = (function metabase$lib$metadata$composed_provider$setting(metadata_providers,setting_key){
return cljs.core.some((function (provider){
return metabase.lib.metadata.protocols.setting(provider,setting_key);
}),metadata_providers);
});

/**
* @constructor
 * @implements {metabase.lib.metadata.protocols.MetadataProvider}
 * @implements {cljs.core.IEquiv}
 * @implements {metabase.lib.metadata.protocols.InvocationTracker}
 * @implements {clojure.core.protocols.Datafiable}
 * @implements {metabase.lib.metadata.protocols.CachedMetadataProvider}
*/
metabase.lib.metadata.composed_provider.ComposedMetadataProvider = (function (metadata_providers){
this.metadata_providers = metadata_providers;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(metabase.lib.metadata.composed_provider.ComposedMetadataProvider.prototype.metabase$lib$metadata$protocols$MetadataProvider$ = cljs.core.PROTOCOL_SENTINEL);

(metabase.lib.metadata.composed_provider.ComposedMetadataProvider.prototype.metabase$lib$metadata$protocols$MetadataProvider$database$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return cljs.core.some(metabase.lib.metadata.protocols.database,self__.metadata_providers);
}));

(metabase.lib.metadata.composed_provider.ComposedMetadataProvider.prototype.metabase$lib$metadata$protocols$MetadataProvider$metadatas$arity$3 = (function (_this,metadata_type,ids){
var self__ = this;
var _this__$1 = this;
return metabase.lib.metadata.composed_provider.metadatas(self__.metadata_providers,metadata_type,ids);
}));

(metabase.lib.metadata.composed_provider.ComposedMetadataProvider.prototype.metabase$lib$metadata$protocols$MetadataProvider$tables$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return metabase.lib.metadata.composed_provider.tables(self__.metadata_providers);
}));

(metabase.lib.metadata.composed_provider.ComposedMetadataProvider.prototype.metabase$lib$metadata$protocols$MetadataProvider$metadatas_for_table$arity$3 = (function (_this,metadata_type,table_id){
var self__ = this;
var _this__$1 = this;
return metabase.lib.metadata.composed_provider.metadatas_for_table(metadata_type,table_id,self__.metadata_providers);
}));

(metabase.lib.metadata.composed_provider.ComposedMetadataProvider.prototype.metabase$lib$metadata$protocols$MetadataProvider$metadatas_for_tables$arity$3 = (function (_this,metadata_type,table_ids){
var self__ = this;
var _this__$1 = this;
return metabase.lib.metadata.composed_provider.metadatas_for_tables(metadata_type,table_ids,self__.metadata_providers);
}));

(metabase.lib.metadata.composed_provider.ComposedMetadataProvider.prototype.metabase$lib$metadata$protocols$MetadataProvider$setting$arity$2 = (function (_this,setting_key){
var self__ = this;
var _this__$1 = this;
return metabase.lib.metadata.composed_provider.setting(self__.metadata_providers,setting_key);
}));

(metabase.lib.metadata.composed_provider.ComposedMetadataProvider.prototype.metabase$lib$metadata$protocols$CachedMetadataProvider$ = cljs.core.PROTOCOL_SENTINEL);

(metabase.lib.metadata.composed_provider.ComposedMetadataProvider.prototype.metabase$lib$metadata$protocols$CachedMetadataProvider$cached_metadatas$arity$3 = (function (_this,metadata_type,metadata_ids){
var self__ = this;
var _this__$1 = this;
return metabase.lib.metadata.composed_provider.cached_metadatas(self__.metadata_providers,metadata_type,metadata_ids);
}));

(metabase.lib.metadata.composed_provider.ComposedMetadataProvider.prototype.metabase$lib$metadata$protocols$CachedMetadataProvider$store_metadata_BANG_$arity$2 = (function (_this,metadata){
var self__ = this;
var _this__$1 = this;
return metabase.lib.metadata.composed_provider.store_metadata_BANG_(self__.metadata_providers,metadata);
}));

(metabase.lib.metadata.composed_provider.ComposedMetadataProvider.prototype.metabase$lib$metadata$protocols$InvocationTracker$ = cljs.core.PROTOCOL_SENTINEL);

(metabase.lib.metadata.composed_provider.ComposedMetadataProvider.prototype.metabase$lib$metadata$protocols$InvocationTracker$invoked_ids$arity$2 = (function (_this,metadata_type){
var self__ = this;
var _this__$1 = this;
var temp__5804__auto__ = cljs.core.seq(metabase.lib.metadata.composed_provider.invocation_tracker_providers(self__.metadata_providers));
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var provider = cljs.core.first(xs__6360__auto__);
return metabase.lib.metadata.protocols.invoked_ids(provider,metadata_type);
} else {
return null;
}
}));

(metabase.lib.metadata.composed_provider.ComposedMetadataProvider.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_this,another){
var self__ = this;
var _this__$1 = this;
return (((another instanceof metabase.lib.metadata.composed_provider.ComposedMetadataProvider)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.metadata_providers,another.metadata_providers)));
}));

(metabase.lib.metadata.composed_provider.ComposedMetadataProvider.prototype.clojure$core$protocols$Datafiable$ = cljs.core.PROTOCOL_SENTINEL);

(metabase.lib.metadata.composed_provider.ComposedMetadataProvider.prototype.clojure$core$protocols$Datafiable$datafy$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return cljs.core.cons(new cljs.core.Symbol("metabase.lib.metadata.composed-provider","composed-metadata-provider","metabase.lib.metadata.composed-provider/composed-metadata-provider",2033277351,null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.datafy.datafy,self__.metadata_providers));
}));

(metabase.lib.metadata.composed_provider.ComposedMetadataProvider.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"metadata-providers","metadata-providers",1627144178,null)], null);
}));

(metabase.lib.metadata.composed_provider.ComposedMetadataProvider.cljs$lang$type = true);

(metabase.lib.metadata.composed_provider.ComposedMetadataProvider.cljs$lang$ctorStr = "metabase.lib.metadata.composed-provider/ComposedMetadataProvider");

(metabase.lib.metadata.composed_provider.ComposedMetadataProvider.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"metabase.lib.metadata.composed-provider/ComposedMetadataProvider");
}));

/**
 * Positional factory function for metabase.lib.metadata.composed-provider/ComposedMetadataProvider.
 */
metabase.lib.metadata.composed_provider.__GT_ComposedMetadataProvider = (function metabase$lib$metadata$composed_provider$__GT_ComposedMetadataProvider(metadata_providers){
return (new metabase.lib.metadata.composed_provider.ComposedMetadataProvider(metadata_providers));
});

/**
 * A metadata provider composed of several different `metadata-providers`. Methods try each constituent provider in
 *   turn from left to right until one returns a truthy result.
 */
metabase.lib.metadata.composed_provider.composed_metadata_provider = (function metabase$lib$metadata$composed_provider$composed_metadata_provider(var_args){
var args__5732__auto__ = [];
var len__5726__auto___79861 = arguments.length;
var i__5727__auto___79865 = (0);
while(true){
if((i__5727__auto___79865 < len__5726__auto___79861)){
args__5732__auto__.push((arguments[i__5727__auto___79865]));

var G__79867 = (i__5727__auto___79865 + (1));
i__5727__auto___79865 = G__79867;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return metabase.lib.metadata.composed_provider.composed_metadata_provider.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(metabase.lib.metadata.composed_provider.composed_metadata_provider.cljs$core$IFn$_invoke$arity$variadic = (function (metadata_providers){
return metabase.lib.metadata.composed_provider.__GT_ComposedMetadataProvider(metadata_providers);
}));

(metabase.lib.metadata.composed_provider.composed_metadata_provider.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(metabase.lib.metadata.composed_provider.composed_metadata_provider.cljs$lang$applyTo = (function (seq79813){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq79813));
}));


//# sourceMappingURL=metabase.lib.metadata.composed_provider.js.map
