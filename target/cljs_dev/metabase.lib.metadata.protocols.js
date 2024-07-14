var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./medley.core.js");
require("./metabase.lib.schema.id.js");
require("./metabase.lib.schema.metadata.js");
require("./metabase.util.malli.js");
require("./metabase.util.malli.registry.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.metadata.protocols.js");

goog.provide('metabase.lib.metadata.protocols');

/**
 * Protocol for something that we can get information about Tables and Fields from. This can be provided in various ways
 *   various ways:
 * 
 *   1. By raw metadata attached to the query itself
 * 
 *   2. By the application database in Clj code
 * 
 *   3. By the Query Processor store in Clj code
 * 
 *   4. By the Redux store in JS
 * 
 *   5. By (hopefully cached) REST API calls
 * 
 *   This protocol is pretty limited at this point; in the future, we'll probably want to add:
 * 
 *   - methods for searching for Tables or Fields matching some string
 * 
 *   - paging, so if you have 10k Tables we don't do crazy requests that fetch them all at once
 * 
 *   For all of these methods: if no matching object can be found, you should generally return `nil` rather than throwing
 *   an Exception. Let [[metabase.lib.metadata]] worry about throwing exceptions.
 * @interface
 */
metabase.lib.metadata.protocols.MetadataProvider = function(){};

var metabase$lib$metadata$protocols$MetadataProvider$database$dyn_76071 = (function (metadata_provider){
var x__5350__auto__ = (((metadata_provider == null))?null:metadata_provider);
var m__5351__auto__ = (metabase.lib.metadata.protocols.database[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(metadata_provider) : m__5351__auto__.call(null,metadata_provider));
} else {
var m__5349__auto__ = (metabase.lib.metadata.protocols.database["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(metadata_provider) : m__5349__auto__.call(null,metadata_provider));
} else {
throw cljs.core.missing_protocol("MetadataProvider.database",metadata_provider);
}
}
});
/**
 * Metadata about the Database we're querying. Should match the [[metabase.lib.metadata/DatabaseMetadata]] schema.
 *   This includes important info such as the supported `:features` and the like.
 */
metabase.lib.metadata.protocols.database = (function metabase$lib$metadata$protocols$database(metadata_provider){
if((((!((metadata_provider == null)))) && ((!((metadata_provider.metabase$lib$metadata$protocols$MetadataProvider$database$arity$1 == null)))))){
return metadata_provider.metabase$lib$metadata$protocols$MetadataProvider$database$arity$1(metadata_provider);
} else {
return metabase$lib$metadata$protocols$MetadataProvider$database$dyn_76071(metadata_provider);
}
});

var metabase$lib$metadata$protocols$MetadataProvider$metadatas$dyn_76072 = (function (metadata_provider,metadata_type,metadata_ids){
var x__5350__auto__ = (((metadata_provider == null))?null:metadata_provider);
var m__5351__auto__ = (metabase.lib.metadata.protocols.metadatas[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(metadata_provider,metadata_type,metadata_ids) : m__5351__auto__.call(null,metadata_provider,metadata_type,metadata_ids));
} else {
var m__5349__auto__ = (metabase.lib.metadata.protocols.metadatas["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(metadata_provider,metadata_type,metadata_ids) : m__5349__auto__.call(null,metadata_provider,metadata_type,metadata_ids));
} else {
throw cljs.core.missing_protocol("MetadataProvider.metadatas",metadata_provider);
}
}
});
/**
 * Return a sequence of non-nil metadata objects of `metadata-type` associated with `metadata-ids`, which is either
 *  a sequence or set of integer object IDs. Objects should be fetched as needed, but if this MetadataProvider has an
 *  internal cache (i.e., if it is a [[CachedMetadataProvider]]), it should return any cached objects and only fetch ones
 *  not present in the cache. This should not error if any objects were not found. The order objects are returned in does
 *  not matter. For MetadataProviders that have a cache, calling this method can be done for side-effects (to warm the
 *  cache).
 */
metabase.lib.metadata.protocols.metadatas = (function metabase$lib$metadata$protocols$metadatas(metadata_provider,metadata_type,metadata_ids){
if((((!((metadata_provider == null)))) && ((!((metadata_provider.metabase$lib$metadata$protocols$MetadataProvider$metadatas$arity$3 == null)))))){
return metadata_provider.metabase$lib$metadata$protocols$MetadataProvider$metadatas$arity$3(metadata_provider,metadata_type,metadata_ids);
} else {
return metabase$lib$metadata$protocols$MetadataProvider$metadatas$dyn_76072(metadata_provider,metadata_type,metadata_ids);
}
});

var metabase$lib$metadata$protocols$MetadataProvider$tables$dyn_76073 = (function (metadata_provider){
var x__5350__auto__ = (((metadata_provider == null))?null:metadata_provider);
var m__5351__auto__ = (metabase.lib.metadata.protocols.tables[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(metadata_provider) : m__5351__auto__.call(null,metadata_provider));
} else {
var m__5349__auto__ = (metabase.lib.metadata.protocols.tables["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(metadata_provider) : m__5349__auto__.call(null,metadata_provider));
} else {
throw cljs.core.missing_protocol("MetadataProvider.tables",metadata_provider);
}
}
});
/**
 * Return a sequence of Tables in this Database. Tables should satisfy the `:metabase.lib.schema.metadata/table`
 *   schema. This should also include things that serve as 'virtual' tables, e.g. Saved Questions or Models. But users of
 *   MLv2 should not need to know that! If we add support for Super Models or Quantum Questions in the future, they can
 *   just come back from this method in the same shape as everything else, the Query Builder can display them, and the
 *   internals can be tucked away here in MLv2.
 */
metabase.lib.metadata.protocols.tables = (function metabase$lib$metadata$protocols$tables(metadata_provider){
if((((!((metadata_provider == null)))) && ((!((metadata_provider.metabase$lib$metadata$protocols$MetadataProvider$tables$arity$1 == null)))))){
return metadata_provider.metabase$lib$metadata$protocols$MetadataProvider$tables$arity$1(metadata_provider);
} else {
return metabase$lib$metadata$protocols$MetadataProvider$tables$dyn_76073(metadata_provider);
}
});

var metabase$lib$metadata$protocols$MetadataProvider$metadatas_for_table$dyn_76074 = (function (metadata_provider,metadata_type,table_id){
var x__5350__auto__ = (((metadata_provider == null))?null:metadata_provider);
var m__5351__auto__ = (metabase.lib.metadata.protocols.metadatas_for_table[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(metadata_provider,metadata_type,table_id) : m__5351__auto__.call(null,metadata_provider,metadata_type,table_id));
} else {
var m__5349__auto__ = (metabase.lib.metadata.protocols.metadatas_for_table["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(metadata_provider,metadata_type,table_id) : m__5349__auto__.call(null,metadata_provider,metadata_type,table_id));
} else {
throw cljs.core.missing_protocol("MetadataProvider.metadatas-for-table",metadata_provider);
}
}
});
/**
 * Return active (non-archived) metadatas associated with a particular Table, either Fields, Metrics, or
 *   Segments -- `metadata-type` must be one of either `:metadata/column`, `:metadata/metric`, or `:metadata/segment`.
 */
metabase.lib.metadata.protocols.metadatas_for_table = (function metabase$lib$metadata$protocols$metadatas_for_table(metadata_provider,metadata_type,table_id){
if((((!((metadata_provider == null)))) && ((!((metadata_provider.metabase$lib$metadata$protocols$MetadataProvider$metadatas_for_table$arity$3 == null)))))){
return metadata_provider.metabase$lib$metadata$protocols$MetadataProvider$metadatas_for_table$arity$3(metadata_provider,metadata_type,table_id);
} else {
return metabase$lib$metadata$protocols$MetadataProvider$metadatas_for_table$dyn_76074(metadata_provider,metadata_type,table_id);
}
});

var metabase$lib$metadata$protocols$MetadataProvider$metadatas_for_tables$dyn_76075 = (function (metadata_provider,metadata_type,table_ids){
var x__5350__auto__ = (((metadata_provider == null))?null:metadata_provider);
var m__5351__auto__ = (metabase.lib.metadata.protocols.metadatas_for_tables[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(metadata_provider,metadata_type,table_ids) : m__5351__auto__.call(null,metadata_provider,metadata_type,table_ids));
} else {
var m__5349__auto__ = (metabase.lib.metadata.protocols.metadatas_for_tables["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(metadata_provider,metadata_type,table_ids) : m__5349__auto__.call(null,metadata_provider,metadata_type,table_ids));
} else {
throw cljs.core.missing_protocol("MetadataProvider.metadatas-for-tables",metadata_provider);
}
}
});
/**
 * As [[metadatas-for-table]], but for multiple tables and returning a lazy sequence instead of a vector.
 */
metabase.lib.metadata.protocols.metadatas_for_tables = (function metabase$lib$metadata$protocols$metadatas_for_tables(metadata_provider,metadata_type,table_ids){
if((((!((metadata_provider == null)))) && ((!((metadata_provider.metabase$lib$metadata$protocols$MetadataProvider$metadatas_for_tables$arity$3 == null)))))){
return metadata_provider.metabase$lib$metadata$protocols$MetadataProvider$metadatas_for_tables$arity$3(metadata_provider,metadata_type,table_ids);
} else {
return metabase$lib$metadata$protocols$MetadataProvider$metadatas_for_tables$dyn_76075(metadata_provider,metadata_type,table_ids);
}
});

var metabase$lib$metadata$protocols$MetadataProvider$setting$dyn_76078 = (function (metadata_provider,setting_key){
var x__5350__auto__ = (((metadata_provider == null))?null:metadata_provider);
var m__5351__auto__ = (metabase.lib.metadata.protocols.setting[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(metadata_provider,setting_key) : m__5351__auto__.call(null,metadata_provider,setting_key));
} else {
var m__5349__auto__ = (metabase.lib.metadata.protocols.setting["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(metadata_provider,setting_key) : m__5349__auto__.call(null,metadata_provider,setting_key));
} else {
throw cljs.core.missing_protocol("MetadataProvider.setting",metadata_provider);
}
}
});
/**
 * Return the value of the given Metabase setting with keyword `setting-name`.
 */
metabase.lib.metadata.protocols.setting = (function metabase$lib$metadata$protocols$setting(metadata_provider,setting_key){
if((((!((metadata_provider == null)))) && ((!((metadata_provider.metabase$lib$metadata$protocols$MetadataProvider$setting$arity$2 == null)))))){
return metadata_provider.metabase$lib$metadata$protocols$MetadataProvider$setting$arity$2(metadata_provider,setting_key);
} else {
return metabase$lib$metadata$protocols$MetadataProvider$setting$dyn_76078(metadata_provider,setting_key);
}
});

/**
 * Whether `x` is a valid [[MetadataProvider]].
 */
metabase.lib.metadata.protocols.metadata_provider_QMARK_ = (function metabase$lib$metadata$protocols$metadata_provider_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.metabase$lib$metadata$protocols$MetadataProvider$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(metabase.lib.metadata.protocols.MetadataProvider,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(metabase.lib.metadata.protocols.MetadataProvider,x);
}
});
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.metadata.protocols","metadata-provider","metabase.lib.metadata.protocols/metadata-provider",-1016689381),metabase.util.malli.registry._with_doc(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"Valid MetadataProvider"], null),new cljs.core.Var(function(){return metabase.lib.metadata.protocols.metadata_provider_QMARK_;},new cljs.core.Symbol("metabase.lib.metadata.protocols","metadata-provider?","metabase.lib.metadata.protocols/metadata-provider?",-472923865,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"metabase.lib.metadata.protocols","metabase.lib.metadata.protocols",128660233,null),new cljs.core.Symbol(null,"metadata-provider?","metadata-provider?",1669871524,null),"metabase/lib/metadata/protocols.cljc",25,1,61,61,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Whether `x` is a valid [[MetadataProvider]].",(cljs.core.truth_(metabase.lib.metadata.protocols.metadata_provider_QMARK_)?metabase.lib.metadata.protocols.metadata_provider_QMARK_.cljs$lang$test:null)]))], null),"Schema for something that satisfies the [[metabase.lib.metadata.protocols/MetadataProvider]] protocol."));
/**
 * Whether `x` is a [[metadata-provider?]], or has one attached at `:lib/metadata` (i.e., a query).
 */
metabase.lib.metadata.protocols.metadata_providerable_QMARK_ = (function metabase$lib$metadata$protocols$metadata_providerable_QMARK_(x){
var or__5002__auto__ = metabase.lib.metadata.protocols.metadata_provider_QMARK_(x);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var G__75985 = x;
var G__75985__$1 = (((G__75985 == null))?null:new cljs.core.Keyword("lib","metadata","lib/metadata",1798917220).cljs$core$IFn$_invoke$arity$1(G__75985));
if((G__75985__$1 == null)){
return null;
} else {
return (metabase.lib.metadata.protocols.metadata_providerable_QMARK_.cljs$core$IFn$_invoke$arity$1 ? metabase.lib.metadata.protocols.metadata_providerable_QMARK_.cljs$core$IFn$_invoke$arity$1(G__75985__$1) : metabase.lib.metadata.protocols.metadata_providerable_QMARK_.call(null,G__75985__$1));
}
}
});
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.metadata.protocols","metadata-providerable","metabase.lib.metadata.protocols/metadata-providerable",1013790848),metabase.util.malli.registry._with_doc(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"Valid MetadataProvider, or a map with a MetadataProvider in the key :lib/metadata (i.e. a query)"], null),new cljs.core.Var(function(){return metabase.lib.metadata.protocols.metadata_providerable_QMARK_;},new cljs.core.Symbol("metabase.lib.metadata.protocols","metadata-providerable?","metabase.lib.metadata.protocols/metadata-providerable?",-803679539,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"metabase.lib.metadata.protocols","metabase.lib.metadata.protocols",128660233,null),new cljs.core.Symbol(null,"metadata-providerable?","metadata-providerable?",1875311688,null),"metabase/lib/metadata/protocols.cljc",29,1,72,72,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Whether `x` is a [[metadata-provider?]], or has one attached at `:lib/metadata` (i.e., a query).",(cljs.core.truth_(metabase.lib.metadata.protocols.metadata_providerable_QMARK_)?metabase.lib.metadata.protocols.metadata_providerable_QMARK_.cljs$lang$test:null)]))], null),"Something that can be used to get a MetadataProvider. Either a MetadataProvider, or a map with a MetadataProvider in\n  the key `:lib/metadata` (i.e., a query)."));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.metadata.protocols","metadata-type-excluding-database","metabase.lib.metadata.protocols/metadata-type-excluding-database",343380082),metabase.util.malli.registry._with_doc(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword("metadata","table","metadata/table",-882499405),new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),new cljs.core.Keyword("metadata","card","metadata/card",-1039333889),new cljs.core.Keyword("metadata","segment","metadata/segment",-1286738015)], null),"Database metadata is stored separately/in a special way. These are the types of metadata that are stored with the\n  other non-Database methods."));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.metadata.protocols","metadata","metabase.lib.metadata.protocols/metadata",-344128164),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lib","type","lib/type",1175424801),new cljs.core.Keyword("metabase.lib.metadata.protocols","metadata-type-excluding-database","metabase.lib.metadata.protocols/metadata-type-excluding-database",343380082)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.pos_int_QMARK_], null)], null));
/**
 * Inputs: [metadata-provider :- :metabase.lib.metadata.protocols/metadata-provider metadata-type :- :metabase.lib.metadata.protocols/metadata-type-excluding-database metadata-id :- pos-int?]
 *   Return: [:maybe :metabase.lib.metadata.protocols/metadata]
 */
metabase.lib.metadata.protocols.metadata = (function metabase$lib$metadata$protocols$metadata(metadata_provider,metadata_type,metadata_id){
return medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (object){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(object),metadata_id);
}),metabase.lib.metadata.protocols.metadatas(metadata_provider,metadata_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metadata_id], null)));
});
/**
 * Inputs: [metadata-provider :- :metabase.lib.metadata.protocols/metadata-provider table-id :- :metabase.lib.schema.id/table]
 *   Return: [:maybe :metabase.lib.schema.metadata/table]
 *        
 * 
 *   Return metadata for a specific Table. Metadata should satisfy `:metabase.lib.schema.metadata/table`.
 */
metabase.lib.metadata.protocols.table = (function metabase$lib$metadata$protocols$table(metadata_provider,table_id){
return metabase.lib.metadata.protocols.metadata(metadata_provider,new cljs.core.Keyword("metadata","table","metadata/table",-882499405),table_id);
});
/**
 * Inputs: [metadata-provider :- :metabase.lib.metadata.protocols/metadata-provider field-id :- :metabase.lib.schema.id/field]
 *   Return: [:maybe :metabase.lib.schema.metadata/column]
 *        
 * 
 *   Return metadata for a specific Field. Metadata should satisfy `:metabase.lib.schema.metadata/column`.
 */
metabase.lib.metadata.protocols.field = (function metabase$lib$metadata$protocols$field(metadata_provider,field_id){
return metabase.lib.metadata.protocols.metadata(metadata_provider,new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),field_id);
});
/**
 * Inputs: [metadata-provider :- :metabase.lib.metadata.protocols/metadata-provider card-id :- :metabase.lib.schema.id/card]
 *   Return: [:maybe :metabase.lib.schema.metadata/card]
 *        
 * 
 *   Return information about a specific Saved Question, aka a Card. This should match
 *   `:metabase.lib.schema.metadata/card`. Currently just used for display name purposes if you have a Card as a source
 *   query.
 */
metabase.lib.metadata.protocols.card = (function metabase$lib$metadata$protocols$card(metadata_provider,card_id){
return metabase.lib.metadata.protocols.metadata(metadata_provider,new cljs.core.Keyword("metadata","card","metadata/card",-1039333889),card_id);
});
/**
 * Inputs: [metadata-provider :- :metabase.lib.metadata.protocols/metadata-provider segment-id :- :metabase.lib.schema.id/segment]
 *   Return: [:maybe :metabase.lib.schema.metadata/segment]
 *        
 * 
 *   Return metadata for a particular captial-S Segment, i.e. something from the `segment` table in the application
 *   database. Metadata should match `:metabase.lib.schema.metadata/segment`.
 */
metabase.lib.metadata.protocols.segment = (function metabase$lib$metadata$protocols$segment(metadata_provider,segment_id){
return metabase.lib.metadata.protocols.metadata(metadata_provider,new cljs.core.Keyword("metadata","segment","metadata/segment",-1286738015),segment_id);
});
/**
 * Inputs: [metadata-provider :- :metabase.lib.metadata.protocols/metadata-provider table-id :- :metabase.lib.schema.id/table]
 *   Return: [:maybe [:sequential :metabase.lib.schema.metadata/column]]
 *        
 * 
 *   Return a sequence of Fields associated with a Table with the given `table-id`. Fields should satisfy
 *   the `:metabase.lib.schema.metadata/column` schema. If no such Table exists, this should error.
 */
metabase.lib.metadata.protocols.fields = (function metabase$lib$metadata$protocols$fields(metadata_provider,table_id){
return metabase.lib.metadata.protocols.metadatas_for_table(metadata_provider,new cljs.core.Keyword("metadata","column","metadata/column",-1799249054),table_id);
});
/**
 * Inputs: [metadata-provider :- :metabase.lib.metadata.protocols/metadata-provider table-id :- :metabase.lib.schema.id/table]
 *   Return: [:maybe [:sequential :metabase.lib.schema.metadata/segment]]
 *        
 * 
 *   Return a sequence of legacy Segments associated with a Table with the given `table-id`. Segments should satisfy
 *   the `:metabase.lib.schema.metadata/segment` schema. If no Table with ID `table-id` exists, this should error.
 */
metabase.lib.metadata.protocols.segments = (function metabase$lib$metadata$protocols$segments(metadata_provider,table_id){
return metabase.lib.metadata.protocols.metadatas_for_table(metadata_provider,new cljs.core.Keyword("metadata","segment","metadata/segment",-1286738015),table_id);
});

/**
 * Optional. A protocol for a MetadataProvider that some sort of internal cache. This is mostly useful for
 *   MetadataProviders that can hit some sort of relatively expensive external service,
 *   e.g. [[metabase.lib.metadata.jvm/application-database-metadata-provider]]. The main purpose of this is to allow
 *   pre-warming the cache with stuff that was already fetched elsewhere.
 *   See [[metabase.models.metric/warmed-metadata-provider]] for example.
 * 
 *   See [[metabase.lib.metadata.cached-provider/cached-metadata-provider]] for a way to wrap an existing
 *   MetadataProvider to add caching on top of it.
 * @interface
 */
metabase.lib.metadata.protocols.CachedMetadataProvider = function(){};

var metabase$lib$metadata$protocols$CachedMetadataProvider$cached_metadatas$dyn_76129 = (function (cached_metadata_provider,metadata_type,metadata_ids){
var x__5350__auto__ = (((cached_metadata_provider == null))?null:cached_metadata_provider);
var m__5351__auto__ = (metabase.lib.metadata.protocols.cached_metadatas[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(cached_metadata_provider,metadata_type,metadata_ids) : m__5351__auto__.call(null,cached_metadata_provider,metadata_type,metadata_ids));
} else {
var m__5349__auto__ = (metabase.lib.metadata.protocols.cached_metadatas["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(cached_metadata_provider,metadata_type,metadata_ids) : m__5349__auto__.call(null,cached_metadata_provider,metadata_type,metadata_ids));
} else {
throw cljs.core.missing_protocol("CachedMetadataProvider.cached-metadatas",cached_metadata_provider);
}
}
});
/**
 * Like [[metadatas]], but only return metadata that is already present in the cache.
 */
metabase.lib.metadata.protocols.cached_metadatas = (function metabase$lib$metadata$protocols$cached_metadatas(cached_metadata_provider,metadata_type,metadata_ids){
if((((!((cached_metadata_provider == null)))) && ((!((cached_metadata_provider.metabase$lib$metadata$protocols$CachedMetadataProvider$cached_metadatas$arity$3 == null)))))){
return cached_metadata_provider.metabase$lib$metadata$protocols$CachedMetadataProvider$cached_metadatas$arity$3(cached_metadata_provider,metadata_type,metadata_ids);
} else {
return metabase$lib$metadata$protocols$CachedMetadataProvider$cached_metadatas$dyn_76129(cached_metadata_provider,metadata_type,metadata_ids);
}
});

var metabase$lib$metadata$protocols$CachedMetadataProvider$store_metadata_BANG_$dyn_76134 = (function (cached_metadata_provider,object){
var x__5350__auto__ = (((cached_metadata_provider == null))?null:cached_metadata_provider);
var m__5351__auto__ = (metabase.lib.metadata.protocols.store_metadata_BANG_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(cached_metadata_provider,object) : m__5351__auto__.call(null,cached_metadata_provider,object));
} else {
var m__5349__auto__ = (metabase.lib.metadata.protocols.store_metadata_BANG_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(cached_metadata_provider,object) : m__5349__auto__.call(null,cached_metadata_provider,object));
} else {
throw cljs.core.missing_protocol("CachedMetadataProvider.store-metadata!",cached_metadata_provider);
}
}
});
/**
 * Store metadata of a specific type, e.g. `:metadata/table`.
 */
metabase.lib.metadata.protocols.store_metadata_BANG_ = (function metabase$lib$metadata$protocols$store_metadata_BANG_(cached_metadata_provider,object){
if((((!((cached_metadata_provider == null)))) && ((!((cached_metadata_provider.metabase$lib$metadata$protocols$CachedMetadataProvider$store_metadata_BANG_$arity$2 == null)))))){
return cached_metadata_provider.metabase$lib$metadata$protocols$CachedMetadataProvider$store_metadata_BANG_$arity$2(cached_metadata_provider,object);
} else {
return metabase$lib$metadata$protocols$CachedMetadataProvider$store_metadata_BANG_$dyn_76134(cached_metadata_provider,object);
}
});

/**
 * Whether `x` is a valid [[CachedMetadataProvider]].
 */
metabase.lib.metadata.protocols.cached_metadata_provider_QMARK_ = (function metabase$lib$metadata$protocols$cached_metadata_provider_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.metabase$lib$metadata$protocols$CachedMetadataProvider$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(metabase.lib.metadata.protocols.CachedMetadataProvider,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(metabase.lib.metadata.protocols.CachedMetadataProvider,x);
}
});
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.metadata.protocols","cached-metadata-provider","metabase.lib.metadata.protocols/cached-metadata-provider",459676321),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),"A CachedMetadataProvider"], null),new cljs.core.Var(function(){return metabase.lib.metadata.protocols.cached_metadata_provider_QMARK_;},new cljs.core.Symbol("metabase.lib.metadata.protocols","cached-metadata-provider?","metabase.lib.metadata.protocols/cached-metadata-provider?",-367144196,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"metabase.lib.metadata.protocols","metabase.lib.metadata.protocols",128660233,null),new cljs.core.Symbol(null,"cached-metadata-provider?","cached-metadata-provider?",1784167807,null),"metabase/lib/metadata/protocols.cljc",32,1,158,158,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Whether `x` is a valid [[CachedMetadataProvider]].",(cljs.core.truth_(metabase.lib.metadata.protocols.cached_metadata_provider_QMARK_)?metabase.lib.metadata.protocols.cached_metadata_provider_QMARK_.cljs$lang$test:null)]))], null));
/**
 * Inputs: [cached-metadata-provider :- :metabase.lib.metadata.protocols/cached-metadata-provider objects :- [:maybe [:sequential :metabase.lib.metadata.protocols/metadata]]]
 *   Return: :any
 *        
 * 
 *   Convenience. Store several metadata maps at once.
 */
metabase.lib.metadata.protocols.store_metadatas_BANG_ = (function metabase$lib$metadata$protocols$store_metadatas_BANG_(cached_metadata_provider,objects){
var seq__76049 = cljs.core.seq(objects);
var chunk__76050 = null;
var count__76051 = (0);
var i__76052 = (0);
while(true){
if((i__76052 < count__76051)){
var object = chunk__76050.cljs$core$IIndexed$_nth$arity$2(null,i__76052);
metabase.lib.metadata.protocols.store_metadata_BANG_(cached_metadata_provider,object);


var G__76138 = seq__76049;
var G__76139 = chunk__76050;
var G__76140 = count__76051;
var G__76141 = (i__76052 + (1));
seq__76049 = G__76138;
chunk__76050 = G__76139;
count__76051 = G__76140;
i__76052 = G__76141;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__76049);
if(temp__5804__auto__){
var seq__76049__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__76049__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__76049__$1);
var G__76142 = cljs.core.chunk_rest(seq__76049__$1);
var G__76143 = c__5525__auto__;
var G__76144 = cljs.core.count(c__5525__auto__);
var G__76145 = (0);
seq__76049 = G__76142;
chunk__76050 = G__76143;
count__76051 = G__76144;
i__76052 = G__76145;
continue;
} else {
var object = cljs.core.first(seq__76049__$1);
metabase.lib.metadata.protocols.store_metadata_BANG_(cached_metadata_provider,object);


var G__76146 = cljs.core.next(seq__76049__$1);
var G__76147 = null;
var G__76148 = (0);
var G__76149 = (0);
seq__76049 = G__76146;
chunk__76050 = G__76147;
count__76051 = G__76148;
i__76052 = G__76149;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Inputs: [cached-metadata-provider :- :metabase.lib.metadata.protocols/cached-metadata-provider metadata-type :- :metabase.lib.metadata.protocols/metadata-type-excluding-database id :- pos-int?]
 *   Return: [:maybe :metabase.lib.metadata.protocols/metadata]
 *        
 * 
 *   Get cached metadata of a specific type, e.g. `:metadata/table`.
 */
metabase.lib.metadata.protocols.cached_metadata = (function metabase$lib$metadata$protocols$cached_metadata(cached_metadata_provider,metadata_type,id){
return medley.core.find_first.cljs$core$IFn$_invoke$arity$2((function (object){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(object),id);
}),metabase.lib.metadata.protocols.cached_metadatas(cached_metadata_provider,metadata_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null)));
});
/**
 * Inputs: [metadata-provider :- :metabase.lib.metadata.protocols/metadata-provider metadata-type :- :metabase.lib.metadata.protocols/metadata-type-excluding-database object-ids :- [:maybe [:or [:set pos-int?] [:sequential pos-int?]]]]
 *   Return: :any
 *        
 * 
 *   Convenience for warming a `CachedMetadataProvider` for side-effects. Checks whether the provider is a cached
 *   metadata provider, and, if it is, calls [[metadatas]] to fetch the objects in question and warm the cache.
 */
metabase.lib.metadata.protocols.warm_cache = (function metabase$lib$metadata$protocols$warm_cache(metadata_provider,metadata_type,object_ids){
if(((metabase.lib.metadata.protocols.cached_metadata_provider_QMARK_(metadata_provider)) && (cljs.core.seq(object_ids)))){
return metabase.lib.metadata.protocols.metadatas(metadata_provider,metadata_type,object_ids);
} else {
return null;
}
});

/**
 * Optional. A protocol for a MetadataProvider that records the arguments of method invocations during query execution.
 *   This is useful for tracking which metdata ids were used during a query execution. The main purpose of this is to power
 *   updating card.last_used_at during query execution. see [[metabase.query-processor.middleware.update-used-cards/update-used-cards!]]
 * @interface
 */
metabase.lib.metadata.protocols.InvocationTracker = function(){};

var metabase$lib$metadata$protocols$InvocationTracker$invoked_ids$dyn_76150 = (function (this$,metadata_type){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (metabase.lib.metadata.protocols.invoked_ids[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,metadata_type) : m__5351__auto__.call(null,this$,metadata_type));
} else {
var m__5349__auto__ = (metabase.lib.metadata.protocols.invoked_ids["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,metadata_type) : m__5349__auto__.call(null,this$,metadata_type));
} else {
throw cljs.core.missing_protocol("InvocationTracker.invoked-ids",this$);
}
}
});
/**
 * Get all invoked ids of a metadata type thus far.
 */
metabase.lib.metadata.protocols.invoked_ids = (function metabase$lib$metadata$protocols$invoked_ids(this$,metadata_type){
if((((!((this$ == null)))) && ((!((this$.metabase$lib$metadata$protocols$InvocationTracker$invoked_ids$arity$2 == null)))))){
return this$.metabase$lib$metadata$protocols$InvocationTracker$invoked_ids$arity$2(this$,metadata_type);
} else {
return metabase$lib$metadata$protocols$InvocationTracker$invoked_ids$dyn_76150(this$,metadata_type);
}
});


//# sourceMappingURL=metabase.lib.metadata.protocols.js.map
