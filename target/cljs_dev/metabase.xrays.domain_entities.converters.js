var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./malli.core.js");
require("./malli.transform.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.xrays.domain_entities.converters.js");

goog.provide('metabase.xrays.domain_entities.converters');
metabase.xrays.domain_entities.converters.decode_map = (function metabase$xrays$domain_entities$converters$decode_map(schema,_){
var by_prop = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5480__auto__ = (function metabase$xrays$domain_entities$converters$decode_map_$_iter__80473(s__80474){
return (new cljs.core.LazySeq(null,(function (){
var s__80474__$1 = s__80474;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__80474__$1);
if(temp__5804__auto__){
var s__80474__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80474__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__80474__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__80476 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__80475 = (0);
while(true){
if((i__80475 < size__5479__auto__)){
var vec__80483 = cljs.core._nth(c__5478__auto__,i__80475);
var map_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80483,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80483,(1),null);
cljs.core.chunk_append(b__80476,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword("js","prop","js/prop",-515165077));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__80486 = metabase.util.qualified_name(map_key);
return (metabase.util.__GT_snake_case_en.cljs$core$IFn$_invoke$arity$1 ? metabase.util.__GT_snake_case_en.cljs$core$IFn$_invoke$arity$1(G__80486) : metabase.util.__GT_snake_case_en.call(null,G__80486));
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map-key","map-key",1899483661),map_key], null)], null));

var G__80574 = (i__80475 + (1));
i__80475 = G__80574;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80476),metabase$xrays$domain_entities$converters$decode_map_$_iter__80473(cljs.core.chunk_rest(s__80474__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80476),null);
}
} else {
var vec__80487 = cljs.core.first(s__80474__$2);
var map_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80487,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80487,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword("js","prop","js/prop",-515165077));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__80490 = metabase.util.qualified_name(map_key);
return (metabase.util.__GT_snake_case_en.cljs$core$IFn$_invoke$arity$1 ? metabase.util.__GT_snake_case_en.cljs$core$IFn$_invoke$arity$1(G__80490) : metabase.util.__GT_snake_case_en.call(null,G__80490));
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map-key","map-key",1899483661),map_key], null)], null),metabase$xrays$domain_entities$converters$decode_map_$_iter__80473(cljs.core.rest(s__80474__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema));
})());
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enter","enter",1792452624),(function (x){
if(cljs.core.map_QMARK_(x)){
return x;
} else {
if(cljs.core.object_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5480__auto__ = (function metabase$xrays$domain_entities$converters$decode_map_$_iter__80499(s__80500){
return (new cljs.core.LazySeq(null,(function (){
var s__80500__$1 = s__80500;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__80500__$1);
if(temp__5804__auto__){
var s__80500__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80500__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__80500__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__80502 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__80501 = (0);
while(true){
if((i__80501 < size__5479__auto__)){
var prop = cljs.core._nth(c__5478__auto__,i__80501);
var js_val = (x[prop]);
var map_key = (function (){var or__5002__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(by_prop,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,new cljs.core.Keyword(null,"map-key","map-key",1899483661)], null));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((metabase.util.__GT_kebab_case_en.cljs$core$IFn$_invoke$arity$1 ? metabase.util.__GT_kebab_case_en.cljs$core$IFn$_invoke$arity$1(prop) : metabase.util.__GT_kebab_case_en.call(null,prop)));
}
})();
cljs.core.chunk_append(b__80502,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [map_key,js_val], null));

var G__80575 = (i__80501 + (1));
i__80501 = G__80575;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80502),metabase$xrays$domain_entities$converters$decode_map_$_iter__80499(cljs.core.chunk_rest(s__80500__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80502),null);
}
} else {
var prop = cljs.core.first(s__80500__$2);
var js_val = (x[prop]);
var map_key = (function (){var or__5002__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(by_prop,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,new cljs.core.Keyword(null,"map-key","map-key",1899483661)], null));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((metabase.util.__GT_kebab_case_en.cljs$core$IFn$_invoke$arity$1 ? metabase.util.__GT_kebab_case_en.cljs$core$IFn$_invoke$arity$1(prop) : metabase.util.__GT_kebab_case_en.call(null,prop)));
}
})();
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [map_key,js_val], null),metabase$xrays$domain_entities$converters$decode_map_$_iter__80499(cljs.core.rest(s__80500__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.js_keys(x));
})());
} else {
return null;
}
}
}),new cljs.core.Keyword(null,"leave","leave",1022579443),(function (x){
if(cljs.core.object_QMARK_(x)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("decode-map leaving with a JS object not a CLJS map",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),x,new cljs.core.Keyword(null,"schema","schema",-1582001791),malli.core.form.cljs$core$IFn$_invoke$arity$1(schema)], null));
} else {
return x;
}
})], null);
});
metabase.xrays.domain_entities.converters.infer_child_decoder = (function metabase$xrays$domain_entities$converters$infer_child_decoder(schema,_){
var mapping = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5480__auto__ = (function metabase$xrays$domain_entities$converters$infer_child_decoder_$_iter__80518(s__80519){
return (new cljs.core.LazySeq(null,(function (){
var s__80519__$1 = s__80519;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__80519__$1);
if(temp__5804__auto__){
var s__80519__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80519__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__80519__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__80521 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__80520 = (0);
while(true){
if((i__80520 < size__5479__auto__)){
var c = cljs.core._nth(c__5478__auto__,i__80520);
cljs.core.chunk_append(b__80521,(((c instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(c),c], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,c], null)));

var G__80578 = (i__80520 + (1));
i__80520 = G__80578;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80521),metabase$xrays$domain_entities$converters$infer_child_decoder_$_iter__80518(cljs.core.chunk_rest(s__80519__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80521),null);
}
} else {
var c = cljs.core.first(s__80519__$2);
return cljs.core.cons((((c instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name(c),c], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,c], null)),metabase$xrays$domain_entities$converters$infer_child_decoder_$_iter__80518(cljs.core.rest(s__80519__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema));
})());
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enter","enter",1792452624),(function (p1__80517_SHARP_){
return (mapping.cljs$core$IFn$_invoke$arity$2 ? mapping.cljs$core$IFn$_invoke$arity$2(p1__80517_SHARP_,p1__80517_SHARP_) : mapping.call(null,p1__80517_SHARP_,p1__80517_SHARP_));
})], null);
});
metabase.xrays.domain_entities.converters.infer_child_encoder = (function metabase$xrays$domain_entities$converters$infer_child_encoder(schema,_){
var mapping = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5480__auto__ = (function metabase$xrays$domain_entities$converters$infer_child_encoder_$_iter__80527(s__80528){
return (new cljs.core.LazySeq(null,(function (){
var s__80528__$1 = s__80528;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__80528__$1);
if(temp__5804__auto__){
var s__80528__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80528__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__80528__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__80530 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__80529 = (0);
while(true){
if((i__80529 < size__5479__auto__)){
var c = cljs.core._nth(c__5478__auto__,i__80529);
cljs.core.chunk_append(b__80530,(((c instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.name(c)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,c], null)));

var G__80579 = (i__80529 + (1));
i__80529 = G__80579;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80530),metabase$xrays$domain_entities$converters$infer_child_encoder_$_iter__80527(cljs.core.chunk_rest(s__80528__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80530),null);
}
} else {
var c = cljs.core.first(s__80528__$2);
return cljs.core.cons((((c instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.name(c)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,c], null)),metabase$xrays$domain_entities$converters$infer_child_encoder_$_iter__80527(cljs.core.rest(s__80528__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema));
})());
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enter","enter",1792452624),(function (p1__80525_SHARP_){
return (mapping.cljs$core$IFn$_invoke$arity$2 ? mapping.cljs$core$IFn$_invoke$arity$2(p1__80525_SHARP_,p1__80525_SHARP_) : mapping.call(null,p1__80525_SHARP_,p1__80525_SHARP_));
})], null);
});
metabase.xrays.domain_entities.converters.decode_map_of = (function metabase$xrays$domain_entities$converters$decode_map_of(keydec,x){
if(cljs.core.map_QMARK_(x)){
return x;
} else {
if(cljs.core.object_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5480__auto__ = (function metabase$xrays$domain_entities$converters$decode_map_of_$_iter__80533(s__80534){
return (new cljs.core.LazySeq(null,(function (){
var s__80534__$1 = s__80534;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__80534__$1);
if(temp__5804__auto__){
var s__80534__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80534__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__80534__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__80536 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__80535 = (0);
while(true){
if((i__80535 < size__5479__auto__)){
var prop = cljs.core._nth(c__5478__auto__,i__80535);
cljs.core.chunk_append(b__80536,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keydec.cljs$core$IFn$_invoke$arity$1 ? keydec.cljs$core$IFn$_invoke$arity$1(prop) : keydec.call(null,prop)),(x[prop])], null));

var G__80585 = (i__80535 + (1));
i__80535 = G__80585;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80536),metabase$xrays$domain_entities$converters$decode_map_of_$_iter__80533(cljs.core.chunk_rest(s__80534__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80536),null);
}
} else {
var prop = cljs.core.first(s__80534__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keydec.cljs$core$IFn$_invoke$arity$1 ? keydec.cljs$core$IFn$_invoke$arity$1(prop) : keydec.call(null,prop)),(x[prop])], null),metabase$xrays$domain_entities$converters$decode_map_of_$_iter__80533(cljs.core.rest(s__80534__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(Object.keys(x));
})());
} else {
return null;
}
}
});
metabase.xrays.domain_entities.converters.encode_map = (function metabase$xrays$domain_entities$converters$encode_map(x,keyenc){
if(cljs.core.object_QMARK_(x)){
return x;
} else {
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv((function (obj,k,v){
(obj[(keyenc.cljs$core$IFn$_invoke$arity$1 ? keyenc.cljs$core$IFn$_invoke$arity$1(k) : keyenc.call(null,k))] = v);

return obj;
}),({}),x);
} else {
return null;
}
}
});
metabase.xrays.domain_entities.converters.identity_transformers = cljs.core.zipmap(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Symbol(null,"int?","int?",1799729645,null),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Symbol(null,"double?","double?",-2146564276,null),new cljs.core.Keyword(null,"double","double",884886883),new cljs.core.Symbol(null,"float?","float?",673884616,null),new cljs.core.Keyword(null,"float","float",-1732389368)], null),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enter","enter",1792452624),cljs.core.identity], null)));
/**
 * Malli transformer for converting JavaScript data to and from CLJS data.
 * 
 *   This is a bit more flexible than a JSON transformer. In particular, it normalizes the keys of `:map`
 *   schema objects to `:kebab-case-keywords`, and restores them to strings with the original spelling when
 *   converting back.
 * 
 *   **On keyword conversion**
 * 
 *   Note that `"snake_case"` is the default spelling we expect in the JS data.
 *   This can be overridden with the `{:js/prop "correctSpelling"}` property on the schema, eg.
 *   ```
 *   [:map
 * [:camel-case {:js/prop "camelCase"} string?]
 * [:kebab-case {:js/prop "kebab-case"} number?]
 * [:snake-case [:enum "foo" "bar"]]]
 *   ```
 * 
 *   Observe that `:snake-case` does not need a `:js/prop` setting, since that is the default.
 * 
 *   **On `:map-of`**
 * 
 *   Note that `:map-of` is not `:map`. The spelling of the keys in a `:map-of` is not changed. If the key
 *   schema is `keyword?`, they will be converted to keywords and back, but with the original spelling.
 * 
 *   **On sequences**
 *   `:tuple`, `:vector` and `:sequential` all get transformed into CLJS vectors. When converting back to JS,
 *   they are JS arrays.
 */
metabase.xrays.domain_entities.converters.js_transformer = malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"decoders","decoders",1132818244),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.xrays.domain_entities.converters.identity_transformers,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"qualified-keyword","qualified-keyword",736041675),new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"catn","catn",-48807277),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"map","map",1371690461)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),metabase.xrays.domain_entities.converters.infer_child_decoder], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enter","enter",1792452624),(function (p1__80540_SHARP_){
var and__5000__auto__ = p1__80540_SHARP_;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.vec(p1__80540_SHARP_);
} else {
return and__5000__auto__;
}
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enter","enter",1792452624),(function (p1__80538_SHARP_){
var and__5000__auto__ = p1__80538_SHARP_;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.vec(p1__80538_SHARP_);
} else {
return and__5000__auto__;
}
})], null),cljs.core.keyword,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enter","enter",1792452624),(function (p1__80539_SHARP_){
var and__5000__auto__ = p1__80539_SHARP_;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.vec(p1__80539_SHARP_);
} else {
return and__5000__auto__;
}
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enter","enter",1792452624),(function (p1__80537_SHARP_){
var and__5000__auto__ = p1__80537_SHARP_;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.vec(p1__80537_SHARP_);
} else {
return and__5000__auto__;
}
})], null),cljs.core.keyword,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),(function (schema,_){
var vec__80551 = malli.core.children.cljs$core$IFn$_invoke$arity$1(schema);
var key_schema = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80551,(0),null);
var keydec = malli.core.decoder.cljs$core$IFn$_invoke$arity$2(key_schema,metabase.xrays.domain_entities.converters.js_transformer);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enter","enter",1792452624),(function (p1__80542_SHARP_){
return metabase.xrays.domain_entities.converters.decode_map_of(keydec,p1__80542_SHARP_);
})], null);
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enter","enter",1792452624),(function (p1__80541_SHARP_){
var and__5000__auto__ = p1__80541_SHARP_;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.vec(p1__80541_SHARP_);
} else {
return and__5000__auto__;
}
})], null),cljs.core.keyword,cljs.core.parse_uuid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),metabase.xrays.domain_entities.converters.infer_child_decoder], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),metabase.xrays.domain_entities.converters.decode_map], null)])], 0)),new cljs.core.Keyword(null,"encoders","encoders",-111722908),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.xrays.domain_entities.converters.identity_transformers,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.Keyword(null,"qualified-keyword","qualified-keyword",736041675),new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"map","map",1371690461)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),metabase.xrays.domain_entities.converters.infer_child_encoder], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"leave","leave",1022579443),cljs.core.clj__GT_js], null),(function (p1__80543_SHARP_){
return [cljs.core.namespace(p1__80543_SHARP_),"/",cljs.core.name(p1__80543_SHARP_)].join('');
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"leave","leave",1022579443),cljs.core.clj__GT_js], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"leave","leave",1022579443),cljs.core.clj__GT_js], null),cljs.core.name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"leave","leave",1022579443),(function (p1__80546_SHARP_){
return metabase.xrays.domain_entities.converters.encode_map(p1__80546_SHARP_,cljs.core.name);
})], null),cljs.core.name,cljs.core.str,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),metabase.xrays.domain_entities.converters.infer_child_encoder], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),(function (schema,_){
var js_props = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5480__auto__ = (function metabase$xrays$domain_entities$converters$iter__80554(s__80555){
return (new cljs.core.LazySeq(null,(function (){
var s__80555__$1 = s__80555;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__80555__$1);
if(temp__5804__auto__){
var s__80555__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80555__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__80555__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__80557 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__80556 = (0);
while(true){
if((i__80556 < size__5479__auto__)){
var vec__80564 = cljs.core._nth(c__5478__auto__,i__80556);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80564,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80564,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword("js","prop","js/prop",-515165077).cljs$core$IFn$_invoke$arity$1(props))){
cljs.core.chunk_append(b__80557,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword("js","prop","js/prop",-515165077).cljs$core$IFn$_invoke$arity$1(props)], null));

var G__80590 = (i__80556 + (1));
i__80556 = G__80590;
continue;
} else {
var G__80591 = (i__80556 + (1));
i__80556 = G__80591;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80557),metabase$xrays$domain_entities$converters$iter__80554(cljs.core.chunk_rest(s__80555__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80557),null);
}
} else {
var vec__80568 = cljs.core.first(s__80555__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80568,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80568,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword("js","prop","js/prop",-515165077).cljs$core$IFn$_invoke$arity$1(props))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword("js","prop","js/prop",-515165077).cljs$core$IFn$_invoke$arity$1(props)], null),metabase$xrays$domain_entities$converters$iter__80554(cljs.core.rest(s__80555__$2)));
} else {
var G__80592 = cljs.core.rest(s__80555__$2);
s__80555__$1 = G__80592;
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
return iter__5480__auto__(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema));
})());
var keyenc = (function (k){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_props,k);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var G__80572 = metabase.util.qualified_name(k);
return (metabase.util.__GT_snake_case_en.cljs$core$IFn$_invoke$arity$1 ? metabase.util.__GT_snake_case_en.cljs$core$IFn$_invoke$arity$1(G__80572) : metabase.util.__GT_snake_case_en.call(null,G__80572));
}
});
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"leave","leave",1022579443),(function (p1__80545_SHARP_){
return metabase.xrays.domain_entities.converters.encode_map(p1__80545_SHARP_,keyenc);
})], null);
})], null)])], 0))], null)], 0));
/**
 * Returns a function for converting a JS value into CLJS data structures, based on a schema.
 */
metabase.xrays.domain_entities.converters.incoming = (function metabase$xrays$domain_entities$converters$incoming(schema){
return malli.core.decoder.cljs$core$IFn$_invoke$arity$2(schema,metabase.xrays.domain_entities.converters.js_transformer);
});
/**
 * Returns a function for converting a CLJS value back into a plain JS one, based on its schema.
 */
metabase.xrays.domain_entities.converters.outgoing = (function metabase$xrays$domain_entities$converters$outgoing(schema){
return malli.core.encoder.cljs$core$IFn$_invoke$arity$2(schema,metabase.xrays.domain_entities.converters.js_transformer);
});

//# sourceMappingURL=metabase.xrays.domain_entities.converters.js.map
