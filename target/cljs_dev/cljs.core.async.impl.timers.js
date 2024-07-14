var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./cljs.core.async.impl.protocols.js");
require("./cljs.core.async.impl.channels.js");
require("./cljs.core.async.impl.dispatch.js");
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

$CLJS.SHADOW_ENV.setLoaded("cljs.core.async.impl.timers.js");

goog.provide('cljs.core.async.impl.timers');
cljs.core.async.impl.timers.MAX_LEVEL = (15);
cljs.core.async.impl.timers.P = ((1) / (2));
cljs.core.async.impl.timers.random_level = (function cljs$core$async$impl$timers$random_level(var_args){
var G__38624 = arguments.length;
switch (G__38624) {
case 0:
return cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$1((0));
}));

(cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$1 = (function (level){
while(true){
if((((Math.random() < cljs.core.async.impl.timers.P)) && ((level < cljs.core.async.impl.timers.MAX_LEVEL)))){
var G__38784 = (level + (1));
level = G__38784;
continue;
} else {
return level;
}
break;
}
}));

(cljs.core.async.impl.timers.random_level.cljs$lang$maxFixedArity = 1);


/**
* @constructor
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
*/
cljs.core.async.impl.timers.SkipListNode = (function (key,val,forward){
this.key = key;
this.val = val;
this.forward = forward;
this.cljs$lang$protocol_mask$partition0$ = 2155872256;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.timers.SkipListNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.List(null,self__.key,(new cljs.core.List(null,self__.val,null,(1),null)),(2),null));
}));

(cljs.core.async.impl.timers.SkipListNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
}));

(cljs.core.async.impl.timers.SkipListNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),cljs.core.with_meta(new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"forward","forward",1083186224,null)], null);
}));

(cljs.core.async.impl.timers.SkipListNode.cljs$lang$type = true);

(cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorStr = "cljs.core.async.impl.timers/SkipListNode");

(cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async.impl.timers/SkipListNode");
}));

/**
 * Positional factory function for cljs.core.async.impl.timers/SkipListNode.
 */
cljs.core.async.impl.timers.__GT_SkipListNode = (function cljs$core$async$impl$timers$__GT_SkipListNode(key,val,forward){
return (new cljs.core.async.impl.timers.SkipListNode(key,val,forward));
});

cljs.core.async.impl.timers.skip_list_node = (function cljs$core$async$impl$timers$skip_list_node(var_args){
var G__38670 = arguments.length;
switch (G__38670) {
case 1:
return cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$1 = (function (level){
return cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$3(null,null,level);
}));

(cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$3 = (function (k,v,level){
var arr = (new Array((level + (1))));
var i_38790 = (0);
while(true){
if((i_38790 < arr.length)){
(arr[i_38790] = null);

var G__38791 = (i_38790 + (1));
i_38790 = G__38791;
continue;
} else {
}
break;
}

return (new cljs.core.async.impl.timers.SkipListNode(k,v,arr));
}));

(cljs.core.async.impl.timers.skip_list_node.cljs$lang$maxFixedArity = 3);

cljs.core.async.impl.timers.least_greater_node = (function cljs$core$async$impl$timers$least_greater_node(var_args){
var G__38688 = arguments.length;
switch (G__38688) {
case 3:
return cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$3 = (function (x,k,level){
return cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$4(x,k,level,null);
}));

(cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$4 = (function (x,k,level,update){
while(true){
if((!((level < (0))))){
var x__$1 = (function (){var x__$1 = x;
while(true){
var temp__5802__auto__ = (((level < x__$1.forward.length))?(x__$1.forward[level]):null);
if(cljs.core.truth_(temp__5802__auto__)){
var x_SINGLEQUOTE_ = temp__5802__auto__;
if((x_SINGLEQUOTE_.key < k)){
var G__38794 = x_SINGLEQUOTE_;
x__$1 = G__38794;
continue;
} else {
return x__$1;
}
} else {
return x__$1;
}
break;
}
})();
if((update == null)){
} else {
(update[level] = x__$1);
}

var G__38795 = x__$1;
var G__38796 = k;
var G__38797 = (level - (1));
var G__38798 = update;
x = G__38795;
k = G__38796;
level = G__38797;
update = G__38798;
continue;
} else {
return x;
}
break;
}
}));

(cljs.core.async.impl.timers.least_greater_node.cljs$lang$maxFixedArity = 4);


/**
* @constructor
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
*/
cljs.core.async.impl.timers.SkipList = (function (header,level){
this.header = header;
this.level = level;
this.cljs$lang$protocol_mask$partition0$ = 2155872256;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.timers.SkipList.prototype.put = (function (k,v){
var self__ = this;
var coll = this;
var update = (new Array(cljs.core.async.impl.timers.MAX_LEVEL));
var x = cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$4(self__.header,k,self__.level,update);
var x__$1 = (x.forward[(0)]);
if((((!((x__$1 == null)))) && ((x__$1.key === k)))){
return (x__$1.val = v);
} else {
var new_level = cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$0();
if((new_level > self__.level)){
var i_38801 = (self__.level + (1));
while(true){
if((i_38801 <= (new_level + (1)))){
(update[i_38801] = self__.header);

var G__38802 = (i_38801 + (1));
i_38801 = G__38802;
continue;
} else {
}
break;
}

(self__.level = new_level);
} else {
}

var x__$2 = cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$3(k,v,(new Array(new_level)));
var i = (0);
while(true){
if((i <= self__.level)){
var links_38803 = (update[i]).forward;
if((i < x__$2.forward.length)){
(x__$2.forward[i] = (links_38803[i]));
} else {
x__$2.forward.push((((i < links_38803.length))?(links_38803[i]):null));
}

if((i < links_38803.length)){
(links_38803[i] = x__$2);
} else {
links_38803.push(x__$2);
}

var G__38809 = (i + (1));
i = G__38809;
continue;
} else {
return null;
}
break;
}
}
}));

(cljs.core.async.impl.timers.SkipList.prototype.remove = (function (k){
var self__ = this;
var coll = this;
var update = (new Array(cljs.core.async.impl.timers.MAX_LEVEL));
var x = cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$4(self__.header,k,self__.level,update);
var x__$1 = (((x.forward.length === (0)))?null:(x.forward[(0)]));
if((((!((x__$1 == null)))) && ((x__$1.key === k)))){
var i_38810 = (0);
while(true){
if((i_38810 <= self__.level)){
var links_38811 = (update[i_38810]).forward;
if((x__$1 === (((i_38810 < links_38811.length))?(links_38811[i_38810]):null))){
(links_38811[i_38810] = (x__$1.forward[i_38810]));

var G__38812 = (i_38810 + (1));
i_38810 = G__38812;
continue;
} else {
var G__38813 = (i_38810 + (1));
i_38810 = G__38813;
continue;
}
} else {
}
break;
}

while(true){
if(((((((0) < self__.level)) && ((self__.level < self__.header.forward.length)))) && (((self__.header.forward[self__.level]) == null)))){
(self__.level = (self__.level - (1)));

continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}));

(cljs.core.async.impl.timers.SkipList.prototype.ceilingEntry = (function (k){
var self__ = this;
var coll = this;
var x = self__.header;
var level__$1 = self__.level;
while(true){
if((!((level__$1 < (0))))){
var nx = (function (){var x__$1 = x;
while(true){
var x_SINGLEQUOTE_ = (((level__$1 < x__$1.forward.length))?(x__$1.forward[level__$1]):null);
if((!((x_SINGLEQUOTE_ == null)))){
if((x_SINGLEQUOTE_.key > k)){
return x__$1;
} else {
var G__38816 = x_SINGLEQUOTE_;
x__$1 = G__38816;
continue;
}
} else {
if((level__$1 === (0))){
return x__$1;
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(nx)){
var G__38818 = nx;
var G__38819 = (level__$1 - (1));
x = G__38818;
level__$1 = G__38819;
continue;
} else {
var G__38820 = x;
var G__38821 = (level__$1 - (1));
x = G__38820;
level__$1 = G__38821;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x.key,k)){
return x;
} else {
return (x.forward[(0)]);
}
}
break;
}
}));

(cljs.core.async.impl.timers.SkipList.prototype.floorEntry = (function (k){
var self__ = this;
var coll = this;
var x = self__.header;
var level__$1 = self__.level;
while(true){
if((!((level__$1 < (0))))){
var nx = (function (){var x__$1 = x;
while(true){
var x_SINGLEQUOTE_ = (((level__$1 < x__$1.forward.length))?(x__$1.forward[level__$1]):null);
if((!((x_SINGLEQUOTE_ == null)))){
if((x_SINGLEQUOTE_.key > k)){
return x__$1;
} else {
var G__38827 = x_SINGLEQUOTE_;
x__$1 = G__38827;
continue;
}
} else {
if((level__$1 === (0))){
return x__$1;
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(nx)){
var G__38828 = nx;
var G__38829 = (level__$1 - (1));
x = G__38828;
level__$1 = G__38829;
continue;
} else {
var G__38830 = x;
var G__38831 = (level__$1 - (1));
x = G__38830;
level__$1 = G__38831;
continue;
}
} else {
if((x === self__.header)){
return null;
} else {
return x;
}
}
break;
}
}));

(cljs.core.async.impl.timers.SkipList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var iter = (function cljs$core$async$impl$timers$iter(node){
return (new cljs.core.LazySeq(null,(function (){
if((node == null)){
return null;
} else {
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node.key,node.val], null),cljs$core$async$impl$timers$iter((node.forward[(0)])));
}
}),null,null));
});
return iter((self__.header.forward[(0)]));
}));

(cljs.core.async.impl.timers.SkipList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
var pr_pair = (function (keyval){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer(writer,pr_pair,"{",", ","}",opts,coll__$1);
}));

(cljs.core.async.impl.timers.SkipList.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"header","header",1759972661,null),cljs.core.with_meta(new cljs.core.Symbol(null,"level","level",-1363938217,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(cljs.core.async.impl.timers.SkipList.cljs$lang$type = true);

(cljs.core.async.impl.timers.SkipList.cljs$lang$ctorStr = "cljs.core.async.impl.timers/SkipList");

(cljs.core.async.impl.timers.SkipList.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async.impl.timers/SkipList");
}));

/**
 * Positional factory function for cljs.core.async.impl.timers/SkipList.
 */
cljs.core.async.impl.timers.__GT_SkipList = (function cljs$core$async$impl$timers$__GT_SkipList(header,level){
return (new cljs.core.async.impl.timers.SkipList(header,level));
});

cljs.core.async.impl.timers.skip_list = (function cljs$core$async$impl$timers$skip_list(){
return (new cljs.core.async.impl.timers.SkipList(cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$1((0)),(0)));
});
cljs.core.async.impl.timers.timeouts_map = cljs.core.async.impl.timers.skip_list();
cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS = (10);
/**
 * returns a channel that will close after msecs
 */
cljs.core.async.impl.timers.timeout = (function cljs$core$async$impl$timers$timeout(msecs){
var timeout = ((new Date()).valueOf() + msecs);
var me = cljs.core.async.impl.timers.timeouts_map.ceilingEntry(timeout);
var or__5002__auto__ = (cljs.core.truth_((function (){var and__5000__auto__ = me;
if(cljs.core.truth_(and__5000__auto__)){
return (me.key < (timeout + cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS));
} else {
return and__5000__auto__;
}
})())?me.val:null);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var timeout_channel = cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1(null);
cljs.core.async.impl.timers.timeouts_map.put(timeout,timeout_channel);

cljs.core.async.impl.dispatch.queue_delay((function (){
cljs.core.async.impl.timers.timeouts_map.remove(timeout);

return cljs.core.async.impl.protocols.close_BANG_(timeout_channel);
}),msecs);

return timeout_channel;
}
});

//# sourceMappingURL=cljs.core.async.impl.timers.js.map
