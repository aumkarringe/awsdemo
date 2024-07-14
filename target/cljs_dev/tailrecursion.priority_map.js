var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./cljs.reader.js");
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

$CLJS.SHADOW_ENV.setLoaded("tailrecursion.priority_map.js");

goog.provide('tailrecursion.priority_map');

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISorted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
tailrecursion.priority_map.PersistentPriorityMap = (function (priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){
this.priority__GT_set_of_items = priority__GT_set_of_items;
this.item__GT_priority = item__GT_priority;
this.meta = meta;
this.keyfn = keyfn;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2565220111;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,item,not_found){
var self__ = this;
var coll__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,not_found);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
var pr_pair = (function (keyval){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer(writer,pr_pair,"#tailrecursion.priority-map {",", ","}",opts,coll__$1);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.count(self__.item__GT_priority);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.item__GT_priority) === (0))){
return null;
} else {
var f = cljs.core.first(self__.priority__GT_set_of_items);
var item = cljs.core.first(cljs.core.val(f));
if(cljs.core.truth_(self__.keyfn)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,cljs.core.key(f)], null);
}
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.item__GT_priority) === (0))){
throw (new Error("Can't pop empty priority map"));
} else {
var f = cljs.core.first(self__.priority__GT_set_of_items);
var item_set = cljs.core.val(f);
var item = cljs.core.first(item_set);
var priority_key = cljs.core.key(f);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,priority_key),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(item_set,item)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
}
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq((function (){var iter__5480__auto__ = (function tailrecursion$priority_map$iter__59554(s__59555){
return (new cljs.core.LazySeq(null,(function (){
var s__59555__$1 = s__59555;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__59555__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__59560 = cljs.core.first(xs__6360__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59560,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59560,(1),null);
var iterys__5476__auto__ = ((function (s__59555__$1,vec__59560,priority,item_set,xs__6360__auto__,temp__5804__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__59554_$_iter__59556(s__59557){
return (new cljs.core.LazySeq(null,((function (s__59555__$1,vec__59560,priority,item_set,xs__6360__auto__,temp__5804__auto__,coll__$1){
return (function (){
var s__59557__$1 = s__59557;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__59557__$1);
if(temp__5804__auto____$1){
var s__59557__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59557__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__59557__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__59559 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__59558 = (0);
while(true){
if((i__59558 < size__5479__auto__)){
var item = cljs.core._nth(c__5478__auto__,i__59558);
cljs.core.chunk_append(b__59559,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null));

var G__59627 = (i__59558 + (1));
i__59558 = G__59627;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59559),tailrecursion$priority_map$iter__59554_$_iter__59556(cljs.core.chunk_rest(s__59557__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59559),null);
}
} else {
var item = cljs.core.first(s__59557__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null),tailrecursion$priority_map$iter__59554_$_iter__59556(cljs.core.rest(s__59557__$2)));
}
} else {
return null;
}
break;
}
});})(s__59555__$1,vec__59560,priority,item_set,xs__6360__auto__,temp__5804__auto__,coll__$1))
,null,null));
});})(s__59555__$1,vec__59560,priority,item_set,xs__6360__auto__,temp__5804__auto__,coll__$1))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(item_set));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,tailrecursion$priority_map$iter__59554(cljs.core.rest(s__59555__$1)));
} else {
var G__59629 = cljs.core.rest(s__59555__$1);
s__59555__$1 = G__59629;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.rseq(self__.priority__GT_set_of_items));
})());
} else {
return cljs.core.seq((function (){var iter__5480__auto__ = (function tailrecursion$priority_map$iter__59563(s__59564){
return (new cljs.core.LazySeq(null,(function (){
var s__59564__$1 = s__59564;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__59564__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__59569 = cljs.core.first(xs__6360__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59569,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59569,(1),null);
var iterys__5476__auto__ = ((function (s__59564__$1,vec__59569,priority,item_set,xs__6360__auto__,temp__5804__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__59563_$_iter__59565(s__59566){
return (new cljs.core.LazySeq(null,((function (s__59564__$1,vec__59569,priority,item_set,xs__6360__auto__,temp__5804__auto__,coll__$1){
return (function (){
var s__59566__$1 = s__59566;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__59566__$1);
if(temp__5804__auto____$1){
var s__59566__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59566__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__59566__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__59568 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__59567 = (0);
while(true){
if((i__59567 < size__5479__auto__)){
var item = cljs.core._nth(c__5478__auto__,i__59567);
cljs.core.chunk_append(b__59568,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__59633 = (i__59567 + (1));
i__59567 = G__59633;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59568),tailrecursion$priority_map$iter__59563_$_iter__59565(cljs.core.chunk_rest(s__59566__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59568),null);
}
} else {
var item = cljs.core.first(s__59566__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__59563_$_iter__59565(cljs.core.rest(s__59566__$2)));
}
} else {
return null;
}
break;
}
});})(s__59564__$1,vec__59569,priority,item_set,xs__6360__auto__,temp__5804__auto__,coll__$1))
,null,null));
});})(s__59564__$1,vec__59569,priority,item_set,xs__6360__auto__,temp__5804__auto__,coll__$1))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(item_set));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,tailrecursion$priority_map$iter__59563(cljs.core.rest(s__59564__$1)));
} else {
var G__59634 = cljs.core.rest(s__59564__$1);
s__59564__$1 = G__59634;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.rseq(self__.priority__GT_set_of_items));
})());
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = cljs.core.hash_unordered_coll(this$__$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return cljs.core._equiv(self__.item__GT_priority,other);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.with_meta(tailrecursion.priority_map.PersistentPriorityMap.EMPTY,self__.meta);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
var priority = (self__.item__GT_priority.cljs$core$IFn$_invoke$arity$2 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517)) : self__.item__GT_priority.call(null,item,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(priority,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517))){
return this$__$1;
} else {
var priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(priority) : self__.keyfn.call(null,priority));
var item_set = (self__.priority__GT_set_of_items.cljs$core$IFn$_invoke$arity$1 ? self__.priority__GT_set_of_items.cljs$core$IFn$_invoke$arity$1(priority_key) : self__.priority__GT_set_of_items.call(null,priority_key));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,priority_key),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(item_set,item)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
}
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,item,priority){
var self__ = this;
var this$__$1 = this;
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,null);
if(cljs.core.truth_(temp__5802__auto__)){
var current_priority = temp__5802__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_priority,priority)){
return this$__$1;
} else {
var priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(priority) : self__.keyfn.call(null,priority));
var current_priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(current_priority) : self__.keyfn.call(null,current_priority));
var item_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority_key);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority_key),priority_key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__.priority__GT_set_of_items,current_priority_key,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority_key),item),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([priority_key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
}
}
} else {
var priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(priority) : self__.keyfn.call(null,priority));
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.contains_QMARK_(self__.item__GT_priority,item);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq((function (){var iter__5480__auto__ = (function tailrecursion$priority_map$iter__59572(s__59573){
return (new cljs.core.LazySeq(null,(function (){
var s__59573__$1 = s__59573;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__59573__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__59578 = cljs.core.first(xs__6360__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59578,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59578,(1),null);
var iterys__5476__auto__ = ((function (s__59573__$1,vec__59578,priority,item_set,xs__6360__auto__,temp__5804__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__59572_$_iter__59574(s__59575){
return (new cljs.core.LazySeq(null,((function (s__59573__$1,vec__59578,priority,item_set,xs__6360__auto__,temp__5804__auto__,this$__$1){
return (function (){
var s__59575__$1 = s__59575;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__59575__$1);
if(temp__5804__auto____$1){
var s__59575__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59575__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__59575__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__59577 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__59576 = (0);
while(true){
if((i__59576 < size__5479__auto__)){
var item = cljs.core._nth(c__5478__auto__,i__59576);
cljs.core.chunk_append(b__59577,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null));

var G__59635 = (i__59576 + (1));
i__59576 = G__59635;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59577),tailrecursion$priority_map$iter__59572_$_iter__59574(cljs.core.chunk_rest(s__59575__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59577),null);
}
} else {
var item = cljs.core.first(s__59575__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null),tailrecursion$priority_map$iter__59572_$_iter__59574(cljs.core.rest(s__59575__$2)));
}
} else {
return null;
}
break;
}
});})(s__59573__$1,vec__59578,priority,item_set,xs__6360__auto__,temp__5804__auto__,this$__$1))
,null,null));
});})(s__59573__$1,vec__59578,priority,item_set,xs__6360__auto__,temp__5804__auto__,this$__$1))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(item_set));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,tailrecursion$priority_map$iter__59572(cljs.core.rest(s__59573__$1)));
} else {
var G__59636 = cljs.core.rest(s__59573__$1);
s__59573__$1 = G__59636;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(self__.priority__GT_set_of_items);
})());
} else {
return cljs.core.seq((function (){var iter__5480__auto__ = (function tailrecursion$priority_map$iter__59581(s__59582){
return (new cljs.core.LazySeq(null,(function (){
var s__59582__$1 = s__59582;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__59582__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__59587 = cljs.core.first(xs__6360__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59587,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59587,(1),null);
var iterys__5476__auto__ = ((function (s__59582__$1,vec__59587,priority,item_set,xs__6360__auto__,temp__5804__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__59581_$_iter__59583(s__59584){
return (new cljs.core.LazySeq(null,((function (s__59582__$1,vec__59587,priority,item_set,xs__6360__auto__,temp__5804__auto__,this$__$1){
return (function (){
var s__59584__$1 = s__59584;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__59584__$1);
if(temp__5804__auto____$1){
var s__59584__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59584__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__59584__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__59586 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__59585 = (0);
while(true){
if((i__59585 < size__5479__auto__)){
var item = cljs.core._nth(c__5478__auto__,i__59585);
cljs.core.chunk_append(b__59586,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__59637 = (i__59585 + (1));
i__59585 = G__59637;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59586),tailrecursion$priority_map$iter__59581_$_iter__59583(cljs.core.chunk_rest(s__59584__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59586),null);
}
} else {
var item = cljs.core.first(s__59584__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__59581_$_iter__59583(cljs.core.rest(s__59584__$2)));
}
} else {
return null;
}
break;
}
});})(s__59582__$1,vec__59587,priority,item_set,xs__6360__auto__,temp__5804__auto__,this$__$1))
,null,null));
});})(s__59582__$1,vec__59587,priority,item_set,xs__6360__auto__,temp__5804__auto__,this$__$1))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(item_set));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,tailrecursion$priority_map$iter__59581(cljs.core.rest(s__59582__$1)));
} else {
var G__59638 = cljs.core.rest(s__59582__$1);
s__59582__$1 = G__59638;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(self__.priority__GT_set_of_items);
})());
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new tailrecursion.priority_map.PersistentPriorityMap(self__.priority__GT_set_of_items,self__.item__GT_priority,meta__$1,self__.keyfn,self__.__hash));
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_(entry)){
return this$__$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry,(0)),cljs.core._nth(entry,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this$__$1,entry);
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.call = (function (unused__11804__auto__){
var self__ = this;
var self__ = this;
var G__59590 = (arguments.length - (1));
switch (G__59590) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args59553){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args59553)));
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (item){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (item,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (this$,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
var fexpr__59591 = (cljs.core.truth_(ascending_QMARK_)?cljs.core.seq:cljs.core.rseq);
return (fexpr__59591.cljs$core$IFn$_invoke$arity$1 ? fexpr__59591.cljs$core$IFn$_invoke$arity$1(this$__$1) : fexpr__59591.call(null,this$__$1));
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
var sets = (cljs.core.truth_(ascending_QMARK_)?cljs.core.subseq.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,cljs.core._GT__EQ_,k):cljs.core.rsubseq.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,cljs.core._LT__EQ_,k));
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq((function (){var iter__5480__auto__ = (function tailrecursion$priority_map$iter__59592(s__59593){
return (new cljs.core.LazySeq(null,(function (){
var s__59593__$1 = s__59593;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__59593__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__59598 = cljs.core.first(xs__6360__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59598,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59598,(1),null);
var iterys__5476__auto__ = ((function (s__59593__$1,vec__59598,priority,item_set,xs__6360__auto__,temp__5804__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__59592_$_iter__59594(s__59595){
return (new cljs.core.LazySeq(null,((function (s__59593__$1,vec__59598,priority,item_set,xs__6360__auto__,temp__5804__auto__,sets,this$__$1){
return (function (){
var s__59595__$1 = s__59595;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__59595__$1);
if(temp__5804__auto____$1){
var s__59595__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59595__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__59595__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__59597 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__59596 = (0);
while(true){
if((i__59596 < size__5479__auto__)){
var item = cljs.core._nth(c__5478__auto__,i__59596);
cljs.core.chunk_append(b__59597,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null));

var G__59640 = (i__59596 + (1));
i__59596 = G__59640;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59597),tailrecursion$priority_map$iter__59592_$_iter__59594(cljs.core.chunk_rest(s__59595__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59597),null);
}
} else {
var item = cljs.core.first(s__59595__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null),tailrecursion$priority_map$iter__59592_$_iter__59594(cljs.core.rest(s__59595__$2)));
}
} else {
return null;
}
break;
}
});})(s__59593__$1,vec__59598,priority,item_set,xs__6360__auto__,temp__5804__auto__,sets,this$__$1))
,null,null));
});})(s__59593__$1,vec__59598,priority,item_set,xs__6360__auto__,temp__5804__auto__,sets,this$__$1))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(item_set));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,tailrecursion$priority_map$iter__59592(cljs.core.rest(s__59593__$1)));
} else {
var G__59641 = cljs.core.rest(s__59593__$1);
s__59593__$1 = G__59641;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(sets);
})());
} else {
return cljs.core.seq((function (){var iter__5480__auto__ = (function tailrecursion$priority_map$iter__59601(s__59602){
return (new cljs.core.LazySeq(null,(function (){
var s__59602__$1 = s__59602;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__59602__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var vec__59607 = cljs.core.first(xs__6360__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59607,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59607,(1),null);
var iterys__5476__auto__ = ((function (s__59602__$1,vec__59607,priority,item_set,xs__6360__auto__,temp__5804__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__59601_$_iter__59603(s__59604){
return (new cljs.core.LazySeq(null,((function (s__59602__$1,vec__59607,priority,item_set,xs__6360__auto__,temp__5804__auto__,sets,this$__$1){
return (function (){
var s__59604__$1 = s__59604;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__59604__$1);
if(temp__5804__auto____$1){
var s__59604__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59604__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__59604__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__59606 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__59605 = (0);
while(true){
if((i__59605 < size__5479__auto__)){
var item = cljs.core._nth(c__5478__auto__,i__59605);
cljs.core.chunk_append(b__59606,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__59650 = (i__59605 + (1));
i__59605 = G__59650;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59606),tailrecursion$priority_map$iter__59601_$_iter__59603(cljs.core.chunk_rest(s__59604__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59606),null);
}
} else {
var item = cljs.core.first(s__59604__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__59601_$_iter__59603(cljs.core.rest(s__59604__$2)));
}
} else {
return null;
}
break;
}
});})(s__59602__$1,vec__59607,priority,item_set,xs__6360__auto__,temp__5804__auto__,sets,this$__$1))
,null,null));
});})(s__59602__$1,vec__59607,priority,item_set,xs__6360__auto__,temp__5804__auto__,sets,this$__$1))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(item_set));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,tailrecursion$priority_map$iter__59601(cljs.core.rest(s__59602__$1)));
} else {
var G__59651 = cljs.core.rest(s__59602__$1);
s__59602__$1 = G__59651;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(sets);
})());
}
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
var G__59610 = cljs.core.val(entry);
return (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(G__59610) : self__.keyfn.call(null,G__59610));
}));

(tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.compare;
}));

(tailrecursion.priority_map.PersistentPriorityMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"priority->set-of-items","priority->set-of-items",-1256537211,null),new cljs.core.Symbol(null,"item->priority","item->priority",-899999435,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"keyfn","keyfn",-1874375437,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$type = true);

(tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorStr = "tailrecursion.priority-map/PersistentPriorityMap");

(tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
}));

/**
 * Positional factory function for tailrecursion.priority-map/PersistentPriorityMap.
 */
tailrecursion.priority_map.__GT_PersistentPriorityMap = (function tailrecursion$priority_map$__GT_PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){
return (new tailrecursion.priority_map.PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash));
});

(tailrecursion.priority_map.PersistentPriorityMap.EMPTY = (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map(),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null)));
tailrecursion.priority_map.pm_empty_by = (function tailrecursion$priority_map$pm_empty_by(comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by(comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
});
tailrecursion.priority_map.pm_empty_keyfn = (function tailrecursion$priority_map$pm_empty_keyfn(var_args){
var G__59612 = arguments.length;
switch (G__59612) {
case 1:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map(),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,keyfn,null));
}));

(tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by(comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,keyfn,null));
}));

(tailrecursion.priority_map.pm_empty_keyfn.cljs$lang$maxFixedArity = 2);

tailrecursion.priority_map.read_priority_map = (function tailrecursion$priority_map$read_priority_map(elems){
if(cljs.core.map_QMARK_(elems)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(tailrecursion.priority_map.PersistentPriorityMap.EMPTY,elems);
} else {
throw Error("Priority map literal expects a map for its elements.");
}
});
cljs.reader.register_tag_parser_BANG_("tailrecursion.priority-map",tailrecursion.priority_map.read_priority_map);
/**
 * keyval => key val
 *   Returns a new priority map with supplied mappings.
 */
tailrecursion.priority_map.priority_map = (function tailrecursion$priority_map$priority_map(var_args){
var args__5732__auto__ = [];
var len__5726__auto___59657 = arguments.length;
var i__5727__auto___59658 = (0);
while(true){
if((i__5727__auto___59658 < len__5726__auto___59657)){
args__5732__auto__.push((arguments[i__5727__auto___59658]));

var G__59659 = (i__5727__auto___59658 + (1));
i__5727__auto___59658 = G__59659;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.PersistentPriorityMap.EMPTY;
while(true){
if(in$){
var G__59660 = cljs.core.nnext(in$);
var G__59661 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__59660;
out = G__59661;
continue;
} else {
return out;
}
break;
}
}));

(tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq59613){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59613));
}));

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(var_args){
var args__5732__auto__ = [];
var len__5726__auto___59662 = arguments.length;
var i__5727__auto___59663 = (0);
while(true){
if((i__5727__auto___59663 < len__5726__auto___59662)){
args__5732__auto__.push((arguments[i__5727__auto___59663]));

var G__59664 = (i__5727__auto___59663 + (1));
i__5727__auto___59663 = G__59664;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic = (function (comparator,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.pm_empty_by(comparator);
while(true){
if(in$){
var G__59665 = cljs.core.nnext(in$);
var G__59666 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__59665;
out = G__59666;
continue;
} else {
return out;
}
break;
}
}));

(tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq59614){
var G__59615 = cljs.core.first(seq59614);
var seq59614__$1 = cljs.core.next(seq59614);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59615,seq59614__$1);
}));

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn.
 */
tailrecursion.priority_map.priority_map_keyfn = (function tailrecursion$priority_map$priority_map_keyfn(var_args){
var args__5732__auto__ = [];
var len__5726__auto___59667 = arguments.length;
var i__5727__auto___59668 = (0);
while(true){
if((i__5727__auto___59668 < len__5726__auto___59667)){
args__5732__auto__.push((arguments[i__5727__auto___59668]));

var G__59669 = (i__5727__auto___59668 + (1));
i__5727__auto___59668 = G__59669;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1(keyfn);
while(true){
if(in$){
var G__59672 = cljs.core.nnext(in$);
var G__59673 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__59672;
out = G__59673;
continue;
} else {
return out;
}
break;
}
}));

(tailrecursion.priority_map.priority_map_keyfn.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tailrecursion.priority_map.priority_map_keyfn.cljs$lang$applyTo = (function (seq59616){
var G__59617 = cljs.core.first(seq59616);
var seq59616__$1 = cljs.core.next(seq59616);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59617,seq59616__$1);
}));

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn and comparator.
 */
tailrecursion.priority_map.priority_map_keyfn_by = (function tailrecursion$priority_map$priority_map_keyfn_by(var_args){
var args__5732__auto__ = [];
var len__5726__auto___59676 = arguments.length;
var i__5727__auto___59677 = (0);
while(true){
if((i__5727__auto___59677 < len__5726__auto___59676)){
args__5732__auto__.push((arguments[i__5727__auto___59677]));

var G__59678 = (i__5727__auto___59677 + (1));
i__5727__auto___59677 = G__59678;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,comparator,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2(keyfn,comparator);
while(true){
if(in$){
var G__59679 = cljs.core.nnext(in$);
var G__59680 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__59679;
out = G__59680;
continue;
} else {
return out;
}
break;
}
}));

(tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$applyTo = (function (seq59618){
var G__59619 = cljs.core.first(seq59618);
var seq59618__$1 = cljs.core.next(seq59618);
var G__59620 = cljs.core.first(seq59618__$1);
var seq59618__$2 = cljs.core.next(seq59618__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59619,G__59620,seq59618__$2);
}));


//# sourceMappingURL=tailrecursion.priority_map.js.map
