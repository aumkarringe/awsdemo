var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./metabase.lib.aggregation.js");
require("./metabase.lib.breakout.js");
require("./metabase.lib.dispatch.js");
require("./metabase.lib.equality.js");
require("./metabase.lib.hierarchy.js");
require("./metabase.lib.metadata.calculation.js");
require("./metabase.lib.options.js");
require("./metabase.lib.ref.js");
require("./metabase.lib.schema.js");
require("./metabase.lib.schema.expression.js");
require("./metabase.lib.schema.metadata.js");
require("./metabase.lib.schema.order_by.js");
require("./metabase.lib.util.js");
require("./metabase.lib.util.match.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.order_by.js");

goog.provide('metabase.lib.order_by');
metabase.lib.hierarchy.derive(new cljs.core.Keyword(null,"asc","asc",356854569),new cljs.core.Keyword("metabase.lib.order-by","order-by-clause","metabase.lib.order-by/order-by-clause",774979647));
metabase.lib.hierarchy.derive(new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.Keyword("metabase.lib.order-by","order-by-clause","metabase.lib.order-by/order-by-clause",774979647));
metabase.lib.metadata.calculation.describe_top_level_key_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"order-by","order-by",1527318070),(function (query,stage_number,_k){
var temp__5804__auto__ = cljs.core.not_empty(new cljs.core.Keyword(null,"order-by","order-by",1527318070).cljs$core$IFn$_invoke$arity$1(metabase.lib.util.query_stage(query,stage_number)));
if(cljs.core.truth_(temp__5804__auto__)){
var order_bys = temp__5804__auto__;
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("Sorted by {0}",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metabase.lib.util.join_strings_with_conjunction(metabase.shared.util.i18n.js_i18n("and"),(function (){var iter__5480__auto__ = (function metabase$lib$order_by$iter__79380(s__79381){
return (new cljs.core.LazySeq(null,(function (){
var s__79381__$1 = s__79381;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__79381__$1);
if(temp__5804__auto____$1){
var s__79381__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__79381__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__79381__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__79383 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__79382 = (0);
while(true){
if((i__79382 < size__5479__auto__)){
var order_by = cljs.core._nth(c__5478__auto__,i__79382);
cljs.core.chunk_append(b__79383,metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,order_by,new cljs.core.Keyword(null,"long","long",-171452093)));

var G__79420 = (i__79382 + (1));
i__79382 = G__79420;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79383),metabase$lib$order_by$iter__79380(cljs.core.chunk_rest(s__79381__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79383),null);
}
} else {
var order_by = cljs.core.first(s__79381__$2);
return cljs.core.cons(metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,order_by,new cljs.core.Keyword(null,"long","long",-171452093)),metabase$lib$order_by$iter__79380(cljs.core.rest(s__79381__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(order_bys);
})())], 0));
} else {
return null;
}
}));
metabase.lib.metadata.calculation.display_name_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.order-by","order-by-clause","metabase.lib.order-by/order-by-clause",774979647),(function (query,stage_number,p__79384,style){
var vec__79385 = p__79384;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79385,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79385,(1),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79385,(2),null);
var expr_display_name = metabase.lib.metadata.calculation.display_name.cljs$core$IFn$_invoke$arity$4(query,stage_number,expr,style);
var G__79388 = tag;
var G__79388__$1 = (((G__79388 instanceof cljs.core.Keyword))?G__79388.fqn:null);
switch (G__79388__$1) {
case "asc":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} ascending",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr_display_name], 0));

break;
case "desc":
return metabase.shared.util.i18n.js_i18n.cljs$core$IFn$_invoke$arity$variadic("{0} descending",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr_display_name], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79388__$1)].join('')));

}
}));
metabase.lib.metadata.calculation.display_info_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.order-by","order-by-clause","metabase.lib.order-by/order-by-clause",774979647),(function (query,stage_number,p__79389){
var vec__79390 = p__79389;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79390,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79390,(1),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79390,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(metabase.lib.metadata.calculation.display_info.cljs$core$IFn$_invoke$arity$3(query,stage_number,expr),new cljs.core.Keyword(null,"direction","direction",-633359395),tag);
}));
if((typeof metabase !== 'undefined') && (typeof metabase.lib !== 'undefined') && (typeof metabase.lib.order_by !== 'undefined') && (typeof metabase.lib.order_by.order_by_clause_method !== 'undefined')){
} else {
metabase.lib.order_by.order_by_clause_method = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),metabase.lib.hierarchy.hierarchy], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__79393 = cljs.core.get_global_hierarchy;
return (fexpr__79393.cljs$core$IFn$_invoke$arity$0 ? fexpr__79393.cljs$core$IFn$_invoke$arity$0() : fexpr__79393.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("metabase.lib.order-by","order-by-clause-method"),metabase.lib.dispatch.dispatch_value,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
metabase.lib.order_by.order_by_clause_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("metabase.lib.order-by","order-by-clause","metabase.lib.order-by/order-by-clause",774979647),(function (clause){
return metabase.lib.options.ensure_uuid(clause);
}));
metabase.lib.order_by.order_by_clause_method.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
if((x == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(metabase.shared.util.i18n.js_i18n("Can''t order by nil"),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return metabase.lib.options.ensure_uuid(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"asc","asc",356854569),metabase.lib.ref.ref(x)], null));
}));
/**
 * Inputs: [clause :- :metabase.lib.schema.order-by/order-by direction :- :metabase.lib.schema.order-by/direction]
 *   Return: :metabase.lib.schema.order-by/order-by
 *        
 * 
 *   Update the direction of an order by clause.
 */
metabase.lib.order_by.with_direction = (function metabase$lib$order_by$with_direction(clause,direction){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(clause),(0),direction);
});
/**
 * Inputs: ([orderable]
 *         [orderable :- some? direction :- [:maybe [:enum :asc :desc]]])
 *   Return: :any
 *        
 * 
 *   Create an order-by clause independently of a query, e.g. for `replace` or whatever.
 */
metabase.lib.order_by.order_by_clause = (function() {
var metabase$lib$order_by$order_by_clause = null;
var metabase$lib$order_by$order_by_clause__1 = (function (orderable){
return (metabase.lib.order_by.order_by_clause.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.order_by.order_by_clause.cljs$core$IFn$_invoke$arity$2(orderable,new cljs.core.Keyword(null,"asc","asc",356854569)) : metabase.lib.order_by.order_by_clause.call(null,orderable,new cljs.core.Keyword(null,"asc","asc",356854569)));
});
var metabase$lib$order_by$order_by_clause__2 = (function (orderable,direction){
return metabase.lib.order_by.with_direction(metabase.lib.order_by.order_by_clause_method.cljs$core$IFn$_invoke$arity$1(orderable),(function (){var or__5002__auto__ = direction;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"asc","asc",356854569);
}
})());
});
metabase$lib$order_by$order_by_clause = function(orderable,direction){
switch(arguments.length){
case 1:
return metabase$lib$order_by$order_by_clause__1.call(this,orderable);
case 2:
return metabase$lib$order_by$order_by_clause__2.call(this,orderable,direction);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$order_by$order_by_clause.cljs$core$IFn$_invoke$arity$1 = metabase$lib$order_by$order_by_clause__1;
metabase$lib$order_by$order_by_clause.cljs$core$IFn$_invoke$arity$2 = metabase$lib$order_by$order_by_clause__2;
return metabase$lib$order_by$order_by_clause;
})()
;
/**
 * Inputs: ([query orderable]
 *         [query orderable direction]
 *         [query stage-number :- [:maybe :int] orderable :- some? direction :- [:maybe [:enum :asc :desc]]])
 *   Return: :any
 *        
 * 
 *   Add an MBQL order-by clause (i.e., `:asc` or `:desc`) from something that you can theoretically sort by -- maybe a
 *   Field, or `:field` clause, or expression of some sort, etc.
 * 
 *   You can teach Metabase lib how to generate order by clauses for different things by implementing the
 *   underlying [[order-by-clause-method]] multimethod.
 */
metabase.lib.order_by.order_by = (function() {
var metabase$lib$order_by$order_by = null;
var metabase$lib$order_by$order_by__2 = (function (query,orderable){
return (metabase.lib.order_by.order_by.cljs$core$IFn$_invoke$arity$4 ? metabase.lib.order_by.order_by.cljs$core$IFn$_invoke$arity$4(query,(-1),orderable,null) : metabase.lib.order_by.order_by.call(null,query,(-1),orderable,null));
});
var metabase$lib$order_by$order_by__3 = (function (query,orderable,direction){
return (metabase.lib.order_by.order_by.cljs$core$IFn$_invoke$arity$4 ? metabase.lib.order_by.order_by.cljs$core$IFn$_invoke$arity$4(query,(-1),orderable,direction) : metabase.lib.order_by.order_by.call(null,query,(-1),orderable,direction));
});
var metabase$lib$order_by$order_by__4 = (function (query,stage_number,orderable,direction){
var stage_number__$1 = (function (){var or__5002__auto__ = stage_number;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (-1);
}
})();
var new_order_by = (function (){var G__79394 = metabase.lib.order_by.order_by_clause_method.cljs$core$IFn$_invoke$arity$1(orderable);
if(cljs.core.truth_(direction)){
return metabase.lib.order_by.with_direction(G__79394,direction);
} else {
return G__79394;
}
})();
return metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(query,stage_number__$1,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"order-by","order-by",1527318070),(function (order_bys){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(order_bys),new_order_by);
})], 0));
});
metabase$lib$order_by$order_by = function(query,stage_number,orderable,direction){
switch(arguments.length){
case 2:
return metabase$lib$order_by$order_by__2.call(this,query,stage_number);
case 3:
return metabase$lib$order_by$order_by__3.call(this,query,stage_number,orderable);
case 4:
return metabase$lib$order_by$order_by__4.call(this,query,stage_number,orderable,direction);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$order_by$order_by.cljs$core$IFn$_invoke$arity$2 = metabase$lib$order_by$order_by__2;
metabase$lib$order_by$order_by.cljs$core$IFn$_invoke$arity$3 = metabase$lib$order_by$order_by__3;
metabase$lib$order_by$order_by.cljs$core$IFn$_invoke$arity$4 = metabase$lib$order_by$order_by__4;
return metabase$lib$order_by$order_by;
})()
;
/**
 * Inputs: ([query :- :metabase.lib.schema/query]
 *         [query :- :metabase.lib.schema/query stage-number :- :int])
 *   Return: [:maybe [:sequential :metabase.lib.schema.order-by/order-by]]
 *        
 * 
 *   Get the order-by clauses in a query.
 */
metabase.lib.order_by.order_bys = (function() {
var metabase$lib$order_by$order_bys = null;
var metabase$lib$order_by$order_bys__1 = (function (query){
return (metabase.lib.order_by.order_bys.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.order_by.order_bys.cljs$core$IFn$_invoke$arity$2(query,(-1)) : metabase.lib.order_by.order_bys.call(null,query,(-1)));
});
var metabase$lib$order_by$order_bys__2 = (function (query,stage_number){
return cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(metabase.lib.util.query_stage(query,stage_number),new cljs.core.Keyword(null,"order-by","order-by",1527318070)));
});
metabase$lib$order_by$order_bys = function(query,stage_number){
switch(arguments.length){
case 1:
return metabase$lib$order_by$order_bys__1.call(this,query);
case 2:
return metabase$lib$order_by$order_bys__2.call(this,query,stage_number);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$order_by$order_bys.cljs$core$IFn$_invoke$arity$1 = metabase$lib$order_by$order_bys__1;
metabase$lib$order_by$order_bys.cljs$core$IFn$_invoke$arity$2 = metabase$lib$order_by$order_bys__2;
return metabase$lib$order_by$order_bys;
})()
;
metabase.lib.order_by.orderable_column_QMARK_ = (function metabase$lib$order_by$orderable_column_QMARK_(p__79395){
var map__79396 = p__79395;
var map__79396__$1 = cljs.core.__destructure_map(map__79396);
var base_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79396__$1,new cljs.core.Keyword(null,"base-type","base-type",1167971299));
return cljs.core.some((function (orderable_base_type){
return cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(base_type,orderable_base_type);
}),metabase.lib.schema.expression.orderable_types);
});
/**
 * Inputs: ([query :- :metabase.lib.schema/query]
 *         [query :- :metabase.lib.schema/query stage-number :- :int])
 *   Return: [:maybe [:sequential :metabase.lib.schema.metadata/column]]
 *        
 * 
 *   Get column metadata for all the columns you can order by in a given `stage-number` of a `query`. Rules are as
 *   follows:
 * 
 *   1. If the stage has aggregations or breakouts, you can only order by those columns. E.g.
 * 
 *       SELECT id, count(*) AS count FROM core_user GROUP BY id ORDER BY count ASC;
 * 
 *   You can't ORDER BY something not in the SELECT, e.g. ORDER BY user.first_name would not make sense here.
 * 
 *   2. If the stage has no aggregations or breakouts, you can order by any visible Field:
 * 
 *   a. You can filter by any custom `:expressions` in this stage of the query
 * 
 *   b. You can filter by any Field 'exported' by the previous stage of the query, if there is one; otherwise you can
 *      filter by any Fields from the current `:source-table`.
 * 
 *   c. You can filter by any Fields exported by any explicit joins
 * 
 *   d. You can filter by and Fields in Tables that are implicitly joinable.
 */
metabase.lib.order_by.orderable_columns = (function() {
var metabase$lib$order_by$orderable_columns = null;
var metabase$lib$order_by$orderable_columns__1 = (function (query){
return (metabase.lib.order_by.orderable_columns.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.order_by.orderable_columns.cljs$core$IFn$_invoke$arity$2(query,(-1)) : metabase.lib.order_by.orderable_columns.call(null,query,(-1)));
});
var metabase$lib$order_by$orderable_columns__2 = (function (query,stage_number){
var breakouts = cljs.core.not_empty(metabase.lib.breakout.breakouts_metadata.cljs$core$IFn$_invoke$arity$2(query,stage_number));
var aggregations = cljs.core.not_empty(metabase.lib.aggregation.aggregations_metadata.cljs$core$IFn$_invoke$arity$2(query,stage_number));
var columns = (cljs.core.truth_((function (){var or__5002__auto__ = breakouts;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return aggregations;
}
})())?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(breakouts,aggregations):(function (){var stage = metabase.lib.util.query_stage(query,stage_number);
var options = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-implicitly-joinable-for-source-card?","include-implicitly-joinable-for-source-card?",1240062794),false], null);
return metabase.lib.metadata.calculation.visible_columns.cljs$core$IFn$_invoke$arity$4(query,stage_number,stage,options);
})());
var columns__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(metabase.lib.order_by.orderable_column_QMARK_,columns);
var existing_order_bys = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__79398){
var vec__79399 = p__79398;
var _tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79399,(0),null);
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79399,(1),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79399,(2),null);
return expr;
}),metabase.lib.order_by.order_bys.cljs$core$IFn$_invoke$arity$2(query,stage_number));
if(cljs.core.empty_QMARK_(columns__$1)){
return null;
} else {
if(cljs.core.empty_QMARK_(existing_order_bys)){
return cljs.core.vec(columns__$1);
} else {
var matching = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(metabase.lib.ref.ref),cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$1((function (index,an_order_by){
var temp__5804__auto__ = metabase.lib.equality.find_matching_column.cljs$core$IFn$_invoke$arity$4(query,stage_number,an_order_by,columns__$1);
if(cljs.core.truth_(temp__5804__auto__)){
var col = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col,index], null);
} else {
return null;
}
}))),existing_order_bys);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__79397_SHARP_){
var pos = (matching.cljs$core$IFn$_invoke$arity$1 ? matching.cljs$core$IFn$_invoke$arity$1(p1__79397_SHARP_) : matching.call(null,p1__79397_SHARP_));
var G__79402 = p1__79397_SHARP_;
if(cljs.core.truth_(pos)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79402,new cljs.core.Keyword(null,"order-by-position","order-by-position",-1307229997),pos);
} else {
return G__79402;
}
}),columns__$1);

}
}
});
metabase$lib$order_by$orderable_columns = function(query,stage_number){
switch(arguments.length){
case 1:
return metabase$lib$order_by$orderable_columns__1.call(this,query);
case 2:
return metabase$lib$order_by$orderable_columns__2.call(this,query,stage_number);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$order_by$orderable_columns.cljs$core$IFn$_invoke$arity$1 = metabase$lib$order_by$orderable_columns__1;
metabase$lib$order_by$orderable_columns.cljs$core$IFn$_invoke$arity$2 = metabase$lib$order_by$orderable_columns__2;
return metabase$lib$order_by$orderable_columns;
})()
;
metabase.lib.order_by.opposite_direction = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"asc","asc",356854569),new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.Keyword(null,"desc","desc",2093485764),new cljs.core.Keyword(null,"asc","asc",356854569)], null);
/**
 * Inputs: ([query :- :metabase.lib.schema/query current-order-by :- :metabase.lib.schema.order-by/order-by])
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Flip the direction of `current-order-by` in `query`.
 */
metabase.lib.order_by.change_direction = (function metabase$lib$order_by$change_direction(query,current_order_by){
var lib_uuid = metabase.lib.options.uuid(current_order_by);
return (function metabase$lib$order_by$change_direction_$_replace_79404(_AMPERSAND_parents,_AMPERSAND_match){
try{if(((cljs.core.vector_QMARK_(_AMPERSAND_match)) && ((cljs.core.count(_AMPERSAND_match) === 3)))){
try{var _AMPERSAND_match_1__79409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(1));
if((function (p1__79403_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("lib","uuid","lib/uuid",-2145250720).cljs$core$IFn$_invoke$arity$1(p1__79403_SHARP_),lib_uuid);
})(_AMPERSAND_match_1__79409)){
var direction = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_match,(0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_match,(0),(metabase.lib.order_by.opposite_direction.cljs$core$IFn$_invoke$arity$1 ? metabase.lib.order_by.opposite_direction.cljs$core$IFn$_invoke$arity$1(direction) : metabase.lib.order_by.opposite_direction.call(null,direction)));
} else {
throw cljs.core.match.backtrack;

}
}catch (e79412){if((e79412 instanceof Error)){
var e__46214__auto__ = e79412;
if((e__46214__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__46214__auto__;
}
} else {
throw e79412;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e79411){if((e79411 instanceof Error)){
var e__46214__auto__ = e79411;
if((e__46214__auto__ === cljs.core.match.backtrack)){
return metabase.lib.util.match.impl.replace_in_collection(metabase$lib$order_by$change_direction_$_replace_79404,_AMPERSAND_parents,_AMPERSAND_match);
} else {
throw e__46214__auto__;
}
} else {
throw e79411;

}
}})(cljs.core.PersistentVector.EMPTY,query);
});
/**
 * Inputs: ([query]
 *         [query :- :metabase.lib.schema/query stage-number :- :int])
 *   Return: :metabase.lib.schema/query
 *        
 * 
 *   Remove all order bys from this stage of the query.
 */
metabase.lib.order_by.remove_all_order_bys = (function() {
var metabase$lib$order_by$remove_all_order_bys = null;
var metabase$lib$order_by$remove_all_order_bys__1 = (function (query){
return (metabase.lib.order_by.remove_all_order_bys.cljs$core$IFn$_invoke$arity$2 ? metabase.lib.order_by.remove_all_order_bys.cljs$core$IFn$_invoke$arity$2(query,(-1)) : metabase.lib.order_by.remove_all_order_bys.call(null,query,(-1)));
});
var metabase$lib$order_by$remove_all_order_bys__2 = (function (query,stage_number){
return metabase.lib.util.update_query_stage.cljs$core$IFn$_invoke$arity$variadic(query,stage_number,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"order-by","order-by",1527318070)], 0));
});
metabase$lib$order_by$remove_all_order_bys = function(query,stage_number){
switch(arguments.length){
case 1:
return metabase$lib$order_by$remove_all_order_bys__1.call(this,query);
case 2:
return metabase$lib$order_by$remove_all_order_bys__2.call(this,query,stage_number);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
metabase$lib$order_by$remove_all_order_bys.cljs$core$IFn$_invoke$arity$1 = metabase$lib$order_by$remove_all_order_bys__1;
metabase$lib$order_by$remove_all_order_bys.cljs$core$IFn$_invoke$arity$2 = metabase$lib$order_by$remove_all_order_bys__2;
return metabase$lib$order_by$remove_all_order_bys;
})()
;

//# sourceMappingURL=metabase.lib.order_by.js.map
