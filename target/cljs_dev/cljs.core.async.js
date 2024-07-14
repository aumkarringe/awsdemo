var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./cljs.core.async.impl.protocols.js");
require("./cljs.core.async.impl.channels.js");
require("./cljs.core.async.impl.buffers.js");
require("./cljs.core.async.impl.timers.js");
require("./cljs.core.async.impl.dispatch.js");
require("./cljs.core.async.impl.ioc_helpers.js");
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

$CLJS.SHADOW_ENV.setLoaded("cljs.core.async.js");

goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38964 = (function (f,blockable,meta38965){
this.f = f;
this.blockable = blockable;
this.meta38965 = meta38965;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38966,meta38965__$1){
var self__ = this;
var _38966__$1 = this;
return (new cljs.core.async.t_cljs$core$async38964(self__.f,self__.blockable,meta38965__$1));
}));

(cljs.core.async.t_cljs$core$async38964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38966){
var self__ = this;
var _38966__$1 = this;
return self__.meta38965;
}));

(cljs.core.async.t_cljs$core$async38964.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38964.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38964.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async38964.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async38964.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta38965","meta38965",-580792374,null)], null);
}));

(cljs.core.async.t_cljs$core$async38964.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38964.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38964");

(cljs.core.async.t_cljs$core$async38964.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async38964");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38964.
 */
cljs.core.async.__GT_t_cljs$core$async38964 = (function cljs$core$async$__GT_t_cljs$core$async38964(f,blockable,meta38965){
return (new cljs.core.async.t_cljs$core$async38964(f,blockable,meta38965));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__38955 = arguments.length;
switch (G__38955) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async38964(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__38971 = arguments.length;
switch (G__38971) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__38973 = arguments.length;
switch (G__38973) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__38975 = arguments.length;
switch (G__38975) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_41044 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_41044) : fn1.call(null,val_41044));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_41044) : fn1.call(null,val_41044));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__38977 = arguments.length;
switch (G__38977) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___41052 = n;
var x_41053 = (0);
while(true){
if((x_41053 < n__5593__auto___41052)){
(a[x_41053] = x_41053);

var G__41055 = (x_41053 + (1));
x_41053 = G__41055;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38978 = (function (flag,meta38979){
this.flag = flag;
this.meta38979 = meta38979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38980,meta38979__$1){
var self__ = this;
var _38980__$1 = this;
return (new cljs.core.async.t_cljs$core$async38978(self__.flag,meta38979__$1));
}));

(cljs.core.async.t_cljs$core$async38978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38980){
var self__ = this;
var _38980__$1 = this;
return self__.meta38979;
}));

(cljs.core.async.t_cljs$core$async38978.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38978.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async38978.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38978.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async38978.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta38979","meta38979",-60827350,null)], null);
}));

(cljs.core.async.t_cljs$core$async38978.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38978.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38978");

(cljs.core.async.t_cljs$core$async38978.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async38978");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38978.
 */
cljs.core.async.__GT_t_cljs$core$async38978 = (function cljs$core$async$__GT_t_cljs$core$async38978(flag,meta38979){
return (new cljs.core.async.t_cljs$core$async38978(flag,meta38979));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async38978(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38981 = (function (flag,cb,meta38982){
this.flag = flag;
this.cb = cb;
this.meta38982 = meta38982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38983,meta38982__$1){
var self__ = this;
var _38983__$1 = this;
return (new cljs.core.async.t_cljs$core$async38981(self__.flag,self__.cb,meta38982__$1));
}));

(cljs.core.async.t_cljs$core$async38981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38983){
var self__ = this;
var _38983__$1 = this;
return self__.meta38982;
}));

(cljs.core.async.t_cljs$core$async38981.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38981.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async38981.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38981.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async38981.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta38982","meta38982",1766230747,null)], null);
}));

(cljs.core.async.t_cljs$core$async38981.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38981.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38981");

(cljs.core.async.t_cljs$core$async38981.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async38981");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38981.
 */
cljs.core.async.__GT_t_cljs$core$async38981 = (function cljs$core$async$__GT_t_cljs$core$async38981(flag,cb,meta38982){
return (new cljs.core.async.t_cljs$core$async38981(flag,cb,meta38982));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async38981(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__38984_SHARP_){
var G__38987 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38984_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__38987) : fret.call(null,G__38987));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__38985_SHARP_){
var G__38988 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38985_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__38988) : fret.call(null,G__38988));
});})(i,idx,port,wport,flag,ports__$1,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__41068 = (i + (1));
i = G__41068;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___41071 = arguments.length;
var i__5727__auto___41072 = (0);
while(true){
if((i__5727__auto___41072 < len__5726__auto___41071)){
args__5732__auto__.push((arguments[i__5727__auto___41072]));

var G__41073 = (i__5727__auto___41072 + (1));
i__5727__auto___41072 = G__41073;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__38992){
var map__38993 = p__38992;
var map__38993__$1 = cljs.core.__destructure_map(map__38993);
var opts = map__38993__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq38990){
var G__38991 = cljs.core.first(seq38990);
var seq38990__$1 = cljs.core.next(seq38990);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38991,seq38990__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__38998 = arguments.length;
switch (G__38998) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__38850__auto___41081 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38851__auto__ = (function (){var switch__38430__auto__ = (function (state_39032){
var state_val_39033 = (state_39032[(1)]);
if((state_val_39033 === (7))){
var inst_39027 = (state_39032[(2)]);
var state_39032__$1 = state_39032;
var statearr_39039_41082 = state_39032__$1;
(statearr_39039_41082[(2)] = inst_39027);

(statearr_39039_41082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39033 === (1))){
var state_39032__$1 = state_39032;
var statearr_39040_41083 = state_39032__$1;
(statearr_39040_41083[(2)] = null);

(statearr_39040_41083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39033 === (4))){
var inst_39009 = (state_39032[(7)]);
var inst_39009__$1 = (state_39032[(2)]);
var inst_39011 = (inst_39009__$1 == null);
var state_39032__$1 = (function (){var statearr_39041 = state_39032;
(statearr_39041[(7)] = inst_39009__$1);

return statearr_39041;
})();
if(cljs.core.truth_(inst_39011)){
var statearr_39042_41084 = state_39032__$1;
(statearr_39042_41084[(1)] = (5));

} else {
var statearr_39043_41085 = state_39032__$1;
(statearr_39043_41085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39033 === (13))){
var state_39032__$1 = state_39032;
var statearr_39045_41086 = state_39032__$1;
(statearr_39045_41086[(2)] = null);

(statearr_39045_41086[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39033 === (6))){
var inst_39009 = (state_39032[(7)]);
var state_39032__$1 = state_39032;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39032__$1,(11),to,inst_39009);
} else {
if((state_val_39033 === (3))){
var inst_39030 = (state_39032[(2)]);
var state_39032__$1 = state_39032;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39032__$1,inst_39030);
} else {
if((state_val_39033 === (12))){
var state_39032__$1 = state_39032;
var statearr_39046_41087 = state_39032__$1;
(statearr_39046_41087[(2)] = null);

(statearr_39046_41087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39033 === (2))){
var state_39032__$1 = state_39032;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39032__$1,(4),from);
} else {
if((state_val_39033 === (11))){
var inst_39020 = (state_39032[(2)]);
var state_39032__$1 = state_39032;
if(cljs.core.truth_(inst_39020)){
var statearr_39047_41088 = state_39032__$1;
(statearr_39047_41088[(1)] = (12));

} else {
var statearr_39048_41089 = state_39032__$1;
(statearr_39048_41089[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39033 === (9))){
var state_39032__$1 = state_39032;
var statearr_39049_41090 = state_39032__$1;
(statearr_39049_41090[(2)] = null);

(statearr_39049_41090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39033 === (5))){
var state_39032__$1 = state_39032;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39050_41091 = state_39032__$1;
(statearr_39050_41091[(1)] = (8));

} else {
var statearr_39051_41092 = state_39032__$1;
(statearr_39051_41092[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39033 === (14))){
var inst_39025 = (state_39032[(2)]);
var state_39032__$1 = state_39032;
var statearr_39053_41093 = state_39032__$1;
(statearr_39053_41093[(2)] = inst_39025);

(statearr_39053_41093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39033 === (10))){
var inst_39017 = (state_39032[(2)]);
var state_39032__$1 = state_39032;
var statearr_39054_41094 = state_39032__$1;
(statearr_39054_41094[(2)] = inst_39017);

(statearr_39054_41094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39033 === (8))){
var inst_39014 = cljs.core.async.close_BANG_(to);
var state_39032__$1 = state_39032;
var statearr_39055_41095 = state_39032__$1;
(statearr_39055_41095[(2)] = inst_39014);

(statearr_39055_41095[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__38431__auto__ = null;
var cljs$core$async$state_machine__38431__auto____0 = (function (){
var statearr_39056 = [null,null,null,null,null,null,null,null];
(statearr_39056[(0)] = cljs$core$async$state_machine__38431__auto__);

(statearr_39056[(1)] = (1));

return statearr_39056;
});
var cljs$core$async$state_machine__38431__auto____1 = (function (state_39032){
while(true){
var ret_value__38432__auto__ = (function (){try{while(true){
var result__38433__auto__ = switch__38430__auto__(state_39032);
if(cljs.core.keyword_identical_QMARK_(result__38433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38433__auto__;
}
break;
}
}catch (e39057){var ex__38434__auto__ = e39057;
var statearr_39058_41097 = state_39032;
(statearr_39058_41097[(2)] = ex__38434__auto__);


if(cljs.core.seq((state_39032[(4)]))){
var statearr_39059_41098 = state_39032;
(statearr_39059_41098[(1)] = cljs.core.first((state_39032[(4)])));

} else {
throw ex__38434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41100 = state_39032;
state_39032 = G__41100;
continue;
} else {
return ret_value__38432__auto__;
}
break;
}
});
cljs$core$async$state_machine__38431__auto__ = function(state_39032){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38431__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38431__auto____1.call(this,state_39032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38431__auto____0;
cljs$core$async$state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38431__auto____1;
return cljs$core$async$state_machine__38431__auto__;
})()
})();
var state__38852__auto__ = (function (){var statearr_39061 = f__38851__auto__();
(statearr_39061[(6)] = c__38850__auto___41081);

return statearr_39061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38852__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__39065){
var vec__39066 = p__39065;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39066,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39066,(1),null);
var job = vec__39066;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__38850__auto___41103 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38851__auto__ = (function (){var switch__38430__auto__ = (function (state_39073){
var state_val_39074 = (state_39073[(1)]);
if((state_val_39074 === (1))){
var state_39073__$1 = state_39073;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39073__$1,(2),res,v);
} else {
if((state_val_39074 === (2))){
var inst_39070 = (state_39073[(2)]);
var inst_39071 = cljs.core.async.close_BANG_(res);
var state_39073__$1 = (function (){var statearr_39076 = state_39073;
(statearr_39076[(7)] = inst_39070);

return statearr_39076;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39073__$1,inst_39071);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38431__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38431__auto____0 = (function (){
var statearr_39077 = [null,null,null,null,null,null,null,null];
(statearr_39077[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38431__auto__);

(statearr_39077[(1)] = (1));

return statearr_39077;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38431__auto____1 = (function (state_39073){
while(true){
var ret_value__38432__auto__ = (function (){try{while(true){
var result__38433__auto__ = switch__38430__auto__(state_39073);
if(cljs.core.keyword_identical_QMARK_(result__38433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38433__auto__;
}
break;
}
}catch (e39078){var ex__38434__auto__ = e39078;
var statearr_39079_41104 = state_39073;
(statearr_39079_41104[(2)] = ex__38434__auto__);


if(cljs.core.seq((state_39073[(4)]))){
var statearr_39080_41105 = state_39073;
(statearr_39080_41105[(1)] = cljs.core.first((state_39073[(4)])));

} else {
throw ex__38434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41106 = state_39073;
state_39073 = G__41106;
continue;
} else {
return ret_value__38432__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38431__auto__ = function(state_39073){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38431__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38431__auto____1.call(this,state_39073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38431__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38431__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38431__auto__;
})()
})();
var state__38852__auto__ = (function (){var statearr_39081 = f__38851__auto__();
(statearr_39081[(6)] = c__38850__auto___41103);

return statearr_39081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38852__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__39082){
var vec__39083 = p__39082;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39083,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39083,(1),null);
var job = vec__39083;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___41117 = n;
var __41118 = (0);
while(true){
if((__41118 < n__5593__auto___41117)){
var G__39086_41119 = type;
var G__39086_41120__$1 = (((G__39086_41119 instanceof cljs.core.Keyword))?G__39086_41119.fqn:null);
switch (G__39086_41120__$1) {
case "compute":
var c__38850__auto___41122 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__41118,c__38850__auto___41122,G__39086_41119,G__39086_41120__$1,n__5593__auto___41117,jobs,results,process__$1,async){
return (function (){
var f__38851__auto__ = (function (){var switch__38430__auto__ = ((function (__41118,c__38850__auto___41122,G__39086_41119,G__39086_41120__$1,n__5593__auto___41117,jobs,results,process__$1,async){
return (function (state_39100){
var state_val_39101 = (state_39100[(1)]);
if((state_val_39101 === (1))){
var state_39100__$1 = state_39100;
var statearr_39102_41123 = state_39100__$1;
(statearr_39102_41123[(2)] = null);

(statearr_39102_41123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39101 === (2))){
var state_39100__$1 = state_39100;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39100__$1,(4),jobs);
} else {
if((state_val_39101 === (3))){
var inst_39098 = (state_39100[(2)]);
var state_39100__$1 = state_39100;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39100__$1,inst_39098);
} else {
if((state_val_39101 === (4))){
var inst_39090 = (state_39100[(2)]);
var inst_39091 = process__$1(inst_39090);
var state_39100__$1 = state_39100;
if(cljs.core.truth_(inst_39091)){
var statearr_39103_41124 = state_39100__$1;
(statearr_39103_41124[(1)] = (5));

} else {
var statearr_39104_41125 = state_39100__$1;
(statearr_39104_41125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39101 === (5))){
var state_39100__$1 = state_39100;
var statearr_39105_41126 = state_39100__$1;
(statearr_39105_41126[(2)] = null);

(statearr_39105_41126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39101 === (6))){
var state_39100__$1 = state_39100;
var statearr_39106_41127 = state_39100__$1;
(statearr_39106_41127[(2)] = null);

(statearr_39106_41127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39101 === (7))){
var inst_39096 = (state_39100[(2)]);
var state_39100__$1 = state_39100;
var statearr_39107_41128 = state_39100__$1;
(statearr_39107_41128[(2)] = inst_39096);

(statearr_39107_41128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__41118,c__38850__auto___41122,G__39086_41119,G__39086_41120__$1,n__5593__auto___41117,jobs,results,process__$1,async))
;
return ((function (__41118,switch__38430__auto__,c__38850__auto___41122,G__39086_41119,G__39086_41120__$1,n__5593__auto___41117,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38431__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38431__auto____0 = (function (){
var statearr_39108 = [null,null,null,null,null,null,null];
(statearr_39108[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38431__auto__);

(statearr_39108[(1)] = (1));

return statearr_39108;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38431__auto____1 = (function (state_39100){
while(true){
var ret_value__38432__auto__ = (function (){try{while(true){
var result__38433__auto__ = switch__38430__auto__(state_39100);
if(cljs.core.keyword_identical_QMARK_(result__38433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38433__auto__;
}
break;
}
}catch (e39109){var ex__38434__auto__ = e39109;
var statearr_39110_41129 = state_39100;
(statearr_39110_41129[(2)] = ex__38434__auto__);


if(cljs.core.seq((state_39100[(4)]))){
var statearr_39111_41130 = state_39100;
(statearr_39111_41130[(1)] = cljs.core.first((state_39100[(4)])));

} else {
throw ex__38434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41137 = state_39100;
state_39100 = G__41137;
continue;
} else {
return ret_value__38432__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38431__auto__ = function(state_39100){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38431__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38431__auto____1.call(this,state_39100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38431__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38431__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38431__auto__;
})()
;})(__41118,switch__38430__auto__,c__38850__auto___41122,G__39086_41119,G__39086_41120__$1,n__5593__auto___41117,jobs,results,process__$1,async))
})();
var state__38852__auto__ = (function (){var statearr_39112 = f__38851__auto__();
(statearr_39112[(6)] = c__38850__auto___41122);

return statearr_39112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38852__auto__);
});})(__41118,c__38850__auto___41122,G__39086_41119,G__39086_41120__$1,n__5593__auto___41117,jobs,results,process__$1,async))
);


break;
case "async":
var c__38850__auto___41138 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__41118,c__38850__auto___41138,G__39086_41119,G__39086_41120__$1,n__5593__auto___41117,jobs,results,process__$1,async){
return (function (){
var f__38851__auto__ = (function (){var switch__38430__auto__ = ((function (__41118,c__38850__auto___41138,G__39086_41119,G__39086_41120__$1,n__5593__auto___41117,jobs,results,process__$1,async){
return (function (state_39126){
var state_val_39127 = (state_39126[(1)]);
if((state_val_39127 === (1))){
var state_39126__$1 = state_39126;
var statearr_39128_41139 = state_39126__$1;
(statearr_39128_41139[(2)] = null);

(statearr_39128_41139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39127 === (2))){
var state_39126__$1 = state_39126;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39126__$1,(4),jobs);
} else {
if((state_val_39127 === (3))){
var inst_39124 = (state_39126[(2)]);
var state_39126__$1 = state_39126;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39126__$1,inst_39124);
} else {
if((state_val_39127 === (4))){
var inst_39116 = (state_39126[(2)]);
var inst_39117 = async(inst_39116);
var state_39126__$1 = state_39126;
if(cljs.core.truth_(inst_39117)){
var statearr_39129_41144 = state_39126__$1;
(statearr_39129_41144[(1)] = (5));

} else {
var statearr_39130_41145 = state_39126__$1;
(statearr_39130_41145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39127 === (5))){
var state_39126__$1 = state_39126;
var statearr_39131_41149 = state_39126__$1;
(statearr_39131_41149[(2)] = null);

(statearr_39131_41149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39127 === (6))){
var state_39126__$1 = state_39126;
var statearr_39132_41150 = state_39126__$1;
(statearr_39132_41150[(2)] = null);

(statearr_39132_41150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39127 === (7))){
var inst_39122 = (state_39126[(2)]);
var state_39126__$1 = state_39126;
var statearr_39133_41151 = state_39126__$1;
(statearr_39133_41151[(2)] = inst_39122);

(statearr_39133_41151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__41118,c__38850__auto___41138,G__39086_41119,G__39086_41120__$1,n__5593__auto___41117,jobs,results,process__$1,async))
;
return ((function (__41118,switch__38430__auto__,c__38850__auto___41138,G__39086_41119,G__39086_41120__$1,n__5593__auto___41117,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38431__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38431__auto____0 = (function (){
var statearr_39134 = [null,null,null,null,null,null,null];
(statearr_39134[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38431__auto__);

(statearr_39134[(1)] = (1));

return statearr_39134;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38431__auto____1 = (function (state_39126){
while(true){
var ret_value__38432__auto__ = (function (){try{while(true){
var result__38433__auto__ = switch__38430__auto__(state_39126);
if(cljs.core.keyword_identical_QMARK_(result__38433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38433__auto__;
}
break;
}
}catch (e39135){var ex__38434__auto__ = e39135;
var statearr_39136_41155 = state_39126;
(statearr_39136_41155[(2)] = ex__38434__auto__);


if(cljs.core.seq((state_39126[(4)]))){
var statearr_39137_41156 = state_39126;
(statearr_39137_41156[(1)] = cljs.core.first((state_39126[(4)])));

} else {
throw ex__38434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41161 = state_39126;
state_39126 = G__41161;
continue;
} else {
return ret_value__38432__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38431__auto__ = function(state_39126){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38431__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38431__auto____1.call(this,state_39126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38431__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38431__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38431__auto__;
})()
;})(__41118,switch__38430__auto__,c__38850__auto___41138,G__39086_41119,G__39086_41120__$1,n__5593__auto___41117,jobs,results,process__$1,async))
})();
var state__38852__auto__ = (function (){var statearr_39138 = f__38851__auto__();
(statearr_39138[(6)] = c__38850__auto___41138);

return statearr_39138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38852__auto__);
});})(__41118,c__38850__auto___41138,G__39086_41119,G__39086_41120__$1,n__5593__auto___41117,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39086_41120__$1)].join('')));

}

var G__41162 = (__41118 + (1));
__41118 = G__41162;
continue;
} else {
}
break;
}

var c__38850__auto___41163 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38851__auto__ = (function (){var switch__38430__auto__ = (function (state_39161){
var state_val_39162 = (state_39161[(1)]);
if((state_val_39162 === (7))){
var inst_39157 = (state_39161[(2)]);
var state_39161__$1 = state_39161;
var statearr_39164_41164 = state_39161__$1;
(statearr_39164_41164[(2)] = inst_39157);

(statearr_39164_41164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (1))){
var state_39161__$1 = state_39161;
var statearr_39165_41165 = state_39161__$1;
(statearr_39165_41165[(2)] = null);

(statearr_39165_41165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (4))){
var inst_39141 = (state_39161[(7)]);
var inst_39141__$1 = (state_39161[(2)]);
var inst_39142 = (inst_39141__$1 == null);
var state_39161__$1 = (function (){var statearr_39166 = state_39161;
(statearr_39166[(7)] = inst_39141__$1);

return statearr_39166;
})();
if(cljs.core.truth_(inst_39142)){
var statearr_39167_41169 = state_39161__$1;
(statearr_39167_41169[(1)] = (5));

} else {
var statearr_39168_41170 = state_39161__$1;
(statearr_39168_41170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (6))){
var inst_39141 = (state_39161[(7)]);
var inst_39146 = (state_39161[(8)]);
var inst_39146__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_39148 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39149 = [inst_39141,inst_39146__$1];
var inst_39150 = (new cljs.core.PersistentVector(null,2,(5),inst_39148,inst_39149,null));
var state_39161__$1 = (function (){var statearr_39169 = state_39161;
(statearr_39169[(8)] = inst_39146__$1);

return statearr_39169;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39161__$1,(8),jobs,inst_39150);
} else {
if((state_val_39162 === (3))){
var inst_39159 = (state_39161[(2)]);
var state_39161__$1 = state_39161;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39161__$1,inst_39159);
} else {
if((state_val_39162 === (2))){
var state_39161__$1 = state_39161;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39161__$1,(4),from);
} else {
if((state_val_39162 === (9))){
var inst_39154 = (state_39161[(2)]);
var state_39161__$1 = (function (){var statearr_39171 = state_39161;
(statearr_39171[(9)] = inst_39154);

return statearr_39171;
})();
var statearr_39172_41172 = state_39161__$1;
(statearr_39172_41172[(2)] = null);

(statearr_39172_41172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (5))){
var inst_39144 = cljs.core.async.close_BANG_(jobs);
var state_39161__$1 = state_39161;
var statearr_39173_41173 = state_39161__$1;
(statearr_39173_41173[(2)] = inst_39144);

(statearr_39173_41173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39162 === (8))){
var inst_39146 = (state_39161[(8)]);
var inst_39152 = (state_39161[(2)]);
var state_39161__$1 = (function (){var statearr_39174 = state_39161;
(statearr_39174[(10)] = inst_39152);

return statearr_39174;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39161__$1,(9),results,inst_39146);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38431__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38431__auto____0 = (function (){
var statearr_39175 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39175[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38431__auto__);

(statearr_39175[(1)] = (1));

return statearr_39175;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38431__auto____1 = (function (state_39161){
while(true){
var ret_value__38432__auto__ = (function (){try{while(true){
var result__38433__auto__ = switch__38430__auto__(state_39161);
if(cljs.core.keyword_identical_QMARK_(result__38433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38433__auto__;
}
break;
}
}catch (e39176){var ex__38434__auto__ = e39176;
var statearr_39177_41183 = state_39161;
(statearr_39177_41183[(2)] = ex__38434__auto__);


if(cljs.core.seq((state_39161[(4)]))){
var statearr_39178_41184 = state_39161;
(statearr_39178_41184[(1)] = cljs.core.first((state_39161[(4)])));

} else {
throw ex__38434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41188 = state_39161;
state_39161 = G__41188;
continue;
} else {
return ret_value__38432__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38431__auto__ = function(state_39161){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38431__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38431__auto____1.call(this,state_39161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38431__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38431__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38431__auto__;
})()
})();
var state__38852__auto__ = (function (){var statearr_39180 = f__38851__auto__();
(statearr_39180[(6)] = c__38850__auto___41163);

return statearr_39180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38852__auto__);
}));


var c__38850__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38851__auto__ = (function (){var switch__38430__auto__ = (function (state_39220){
var state_val_39221 = (state_39220[(1)]);
if((state_val_39221 === (7))){
var inst_39216 = (state_39220[(2)]);
var state_39220__$1 = state_39220;
var statearr_39223_41193 = state_39220__$1;
(statearr_39223_41193[(2)] = inst_39216);

(statearr_39223_41193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39221 === (20))){
var state_39220__$1 = state_39220;
var statearr_39224_41194 = state_39220__$1;
(statearr_39224_41194[(2)] = null);

(statearr_39224_41194[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39221 === (1))){
var state_39220__$1 = state_39220;
var statearr_39226_41195 = state_39220__$1;
(statearr_39226_41195[(2)] = null);

(statearr_39226_41195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39221 === (4))){
var inst_39183 = (state_39220[(7)]);
var inst_39183__$1 = (state_39220[(2)]);
var inst_39184 = (inst_39183__$1 == null);
var state_39220__$1 = (function (){var statearr_39227 = state_39220;
(statearr_39227[(7)] = inst_39183__$1);

return statearr_39227;
})();
if(cljs.core.truth_(inst_39184)){
var statearr_39228_41196 = state_39220__$1;
(statearr_39228_41196[(1)] = (5));

} else {
var statearr_39229_41197 = state_39220__$1;
(statearr_39229_41197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39221 === (15))){
var inst_39197 = (state_39220[(8)]);
var state_39220__$1 = state_39220;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39220__$1,(18),to,inst_39197);
} else {
if((state_val_39221 === (21))){
var inst_39211 = (state_39220[(2)]);
var state_39220__$1 = state_39220;
var statearr_39230_41198 = state_39220__$1;
(statearr_39230_41198[(2)] = inst_39211);

(statearr_39230_41198[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39221 === (13))){
var inst_39213 = (state_39220[(2)]);
var state_39220__$1 = (function (){var statearr_39231 = state_39220;
(statearr_39231[(9)] = inst_39213);

return statearr_39231;
})();
var statearr_39232_41199 = state_39220__$1;
(statearr_39232_41199[(2)] = null);

(statearr_39232_41199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39221 === (6))){
var inst_39183 = (state_39220[(7)]);
var state_39220__$1 = state_39220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39220__$1,(11),inst_39183);
} else {
if((state_val_39221 === (17))){
var inst_39206 = (state_39220[(2)]);
var state_39220__$1 = state_39220;
if(cljs.core.truth_(inst_39206)){
var statearr_39233_41200 = state_39220__$1;
(statearr_39233_41200[(1)] = (19));

} else {
var statearr_39235_41202 = state_39220__$1;
(statearr_39235_41202[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39221 === (3))){
var inst_39218 = (state_39220[(2)]);
var state_39220__$1 = state_39220;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39220__$1,inst_39218);
} else {
if((state_val_39221 === (12))){
var inst_39193 = (state_39220[(10)]);
var state_39220__$1 = state_39220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39220__$1,(14),inst_39193);
} else {
if((state_val_39221 === (2))){
var state_39220__$1 = state_39220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39220__$1,(4),results);
} else {
if((state_val_39221 === (19))){
var state_39220__$1 = state_39220;
var statearr_39236_41208 = state_39220__$1;
(statearr_39236_41208[(2)] = null);

(statearr_39236_41208[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39221 === (11))){
var inst_39193 = (state_39220[(2)]);
var state_39220__$1 = (function (){var statearr_39237 = state_39220;
(statearr_39237[(10)] = inst_39193);

return statearr_39237;
})();
var statearr_39238_41209 = state_39220__$1;
(statearr_39238_41209[(2)] = null);

(statearr_39238_41209[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39221 === (9))){
var state_39220__$1 = state_39220;
var statearr_39239_41210 = state_39220__$1;
(statearr_39239_41210[(2)] = null);

(statearr_39239_41210[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39221 === (5))){
var state_39220__$1 = state_39220;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39240_41211 = state_39220__$1;
(statearr_39240_41211[(1)] = (8));

} else {
var statearr_39241_41212 = state_39220__$1;
(statearr_39241_41212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39221 === (14))){
var inst_39197 = (state_39220[(8)]);
var inst_39200 = (state_39220[(11)]);
var inst_39197__$1 = (state_39220[(2)]);
var inst_39199 = (inst_39197__$1 == null);
var inst_39200__$1 = cljs.core.not(inst_39199);
var state_39220__$1 = (function (){var statearr_39242 = state_39220;
(statearr_39242[(8)] = inst_39197__$1);

(statearr_39242[(11)] = inst_39200__$1);

return statearr_39242;
})();
if(inst_39200__$1){
var statearr_39243_41214 = state_39220__$1;
(statearr_39243_41214[(1)] = (15));

} else {
var statearr_39244_41215 = state_39220__$1;
(statearr_39244_41215[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39221 === (16))){
var inst_39200 = (state_39220[(11)]);
var state_39220__$1 = state_39220;
var statearr_39245_41216 = state_39220__$1;
(statearr_39245_41216[(2)] = inst_39200);

(statearr_39245_41216[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39221 === (10))){
var inst_39190 = (state_39220[(2)]);
var state_39220__$1 = state_39220;
var statearr_39246_41217 = state_39220__$1;
(statearr_39246_41217[(2)] = inst_39190);

(statearr_39246_41217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39221 === (18))){
var inst_39203 = (state_39220[(2)]);
var state_39220__$1 = state_39220;
var statearr_39247_41218 = state_39220__$1;
(statearr_39247_41218[(2)] = inst_39203);

(statearr_39247_41218[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39221 === (8))){
var inst_39187 = cljs.core.async.close_BANG_(to);
var state_39220__$1 = state_39220;
var statearr_39248_41219 = state_39220__$1;
(statearr_39248_41219[(2)] = inst_39187);

(statearr_39248_41219[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38431__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38431__auto____0 = (function (){
var statearr_39249 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39249[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38431__auto__);

(statearr_39249[(1)] = (1));

return statearr_39249;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38431__auto____1 = (function (state_39220){
while(true){
var ret_value__38432__auto__ = (function (){try{while(true){
var result__38433__auto__ = switch__38430__auto__(state_39220);
if(cljs.core.keyword_identical_QMARK_(result__38433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38433__auto__;
}
break;
}
}catch (e39250){var ex__38434__auto__ = e39250;
var statearr_39251_41226 = state_39220;
(statearr_39251_41226[(2)] = ex__38434__auto__);


if(cljs.core.seq((state_39220[(4)]))){
var statearr_39252_41227 = state_39220;
(statearr_39252_41227[(1)] = cljs.core.first((state_39220[(4)])));

} else {
throw ex__38434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41228 = state_39220;
state_39220 = G__41228;
continue;
} else {
return ret_value__38432__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38431__auto__ = function(state_39220){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38431__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38431__auto____1.call(this,state_39220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38431__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38431__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38431__auto__;
})()
})();
var state__38852__auto__ = (function (){var statearr_39254 = f__38851__auto__();
(statearr_39254[(6)] = c__38850__auto__);

return statearr_39254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38852__auto__);
}));

return c__38850__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__39256 = arguments.length;
switch (G__39256) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__39259 = arguments.length;
switch (G__39259) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__39261 = arguments.length;
switch (G__39261) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__38850__auto___41245 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38851__auto__ = (function (){var switch__38430__auto__ = (function (state_39288){
var state_val_39289 = (state_39288[(1)]);
if((state_val_39289 === (7))){
var inst_39284 = (state_39288[(2)]);
var state_39288__$1 = state_39288;
var statearr_39290_41247 = state_39288__$1;
(statearr_39290_41247[(2)] = inst_39284);

(statearr_39290_41247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39289 === (1))){
var state_39288__$1 = state_39288;
var statearr_39291_41248 = state_39288__$1;
(statearr_39291_41248[(2)] = null);

(statearr_39291_41248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39289 === (4))){
var inst_39265 = (state_39288[(7)]);
var inst_39265__$1 = (state_39288[(2)]);
var inst_39266 = (inst_39265__$1 == null);
var state_39288__$1 = (function (){var statearr_39292 = state_39288;
(statearr_39292[(7)] = inst_39265__$1);

return statearr_39292;
})();
if(cljs.core.truth_(inst_39266)){
var statearr_39293_41255 = state_39288__$1;
(statearr_39293_41255[(1)] = (5));

} else {
var statearr_39294_41257 = state_39288__$1;
(statearr_39294_41257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39289 === (13))){
var state_39288__$1 = state_39288;
var statearr_39295_41258 = state_39288__$1;
(statearr_39295_41258[(2)] = null);

(statearr_39295_41258[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39289 === (6))){
var inst_39265 = (state_39288[(7)]);
var inst_39271 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_39265) : p.call(null,inst_39265));
var state_39288__$1 = state_39288;
if(cljs.core.truth_(inst_39271)){
var statearr_39296_41263 = state_39288__$1;
(statearr_39296_41263[(1)] = (9));

} else {
var statearr_39298_41264 = state_39288__$1;
(statearr_39298_41264[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39289 === (3))){
var inst_39286 = (state_39288[(2)]);
var state_39288__$1 = state_39288;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39288__$1,inst_39286);
} else {
if((state_val_39289 === (12))){
var state_39288__$1 = state_39288;
var statearr_39299_41268 = state_39288__$1;
(statearr_39299_41268[(2)] = null);

(statearr_39299_41268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39289 === (2))){
var state_39288__$1 = state_39288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39288__$1,(4),ch);
} else {
if((state_val_39289 === (11))){
var inst_39265 = (state_39288[(7)]);
var inst_39275 = (state_39288[(2)]);
var state_39288__$1 = state_39288;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39288__$1,(8),inst_39275,inst_39265);
} else {
if((state_val_39289 === (9))){
var state_39288__$1 = state_39288;
var statearr_39301_41272 = state_39288__$1;
(statearr_39301_41272[(2)] = tc);

(statearr_39301_41272[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39289 === (5))){
var inst_39268 = cljs.core.async.close_BANG_(tc);
var inst_39269 = cljs.core.async.close_BANG_(fc);
var state_39288__$1 = (function (){var statearr_39303 = state_39288;
(statearr_39303[(8)] = inst_39268);

return statearr_39303;
})();
var statearr_39304_41273 = state_39288__$1;
(statearr_39304_41273[(2)] = inst_39269);

(statearr_39304_41273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39289 === (14))){
var inst_39282 = (state_39288[(2)]);
var state_39288__$1 = state_39288;
var statearr_39305_41274 = state_39288__$1;
(statearr_39305_41274[(2)] = inst_39282);

(statearr_39305_41274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39289 === (10))){
var state_39288__$1 = state_39288;
var statearr_39306_41275 = state_39288__$1;
(statearr_39306_41275[(2)] = fc);

(statearr_39306_41275[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39289 === (8))){
var inst_39277 = (state_39288[(2)]);
var state_39288__$1 = state_39288;
if(cljs.core.truth_(inst_39277)){
var statearr_39307_41276 = state_39288__$1;
(statearr_39307_41276[(1)] = (12));

} else {
var statearr_39308_41277 = state_39288__$1;
(statearr_39308_41277[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__38431__auto__ = null;
var cljs$core$async$state_machine__38431__auto____0 = (function (){
var statearr_39309 = [null,null,null,null,null,null,null,null,null];
(statearr_39309[(0)] = cljs$core$async$state_machine__38431__auto__);

(statearr_39309[(1)] = (1));

return statearr_39309;
});
var cljs$core$async$state_machine__38431__auto____1 = (function (state_39288){
while(true){
var ret_value__38432__auto__ = (function (){try{while(true){
var result__38433__auto__ = switch__38430__auto__(state_39288);
if(cljs.core.keyword_identical_QMARK_(result__38433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38433__auto__;
}
break;
}
}catch (e39310){var ex__38434__auto__ = e39310;
var statearr_39312_41282 = state_39288;
(statearr_39312_41282[(2)] = ex__38434__auto__);


if(cljs.core.seq((state_39288[(4)]))){
var statearr_39313_41283 = state_39288;
(statearr_39313_41283[(1)] = cljs.core.first((state_39288[(4)])));

} else {
throw ex__38434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41284 = state_39288;
state_39288 = G__41284;
continue;
} else {
return ret_value__38432__auto__;
}
break;
}
});
cljs$core$async$state_machine__38431__auto__ = function(state_39288){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38431__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38431__auto____1.call(this,state_39288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38431__auto____0;
cljs$core$async$state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38431__auto____1;
return cljs$core$async$state_machine__38431__auto__;
})()
})();
var state__38852__auto__ = (function (){var statearr_39314 = f__38851__auto__();
(statearr_39314[(6)] = c__38850__auto___41245);

return statearr_39314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38852__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__38850__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38851__auto__ = (function (){var switch__38430__auto__ = (function (state_39337){
var state_val_39338 = (state_39337[(1)]);
if((state_val_39338 === (7))){
var inst_39333 = (state_39337[(2)]);
var state_39337__$1 = state_39337;
var statearr_39339_41289 = state_39337__$1;
(statearr_39339_41289[(2)] = inst_39333);

(statearr_39339_41289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39338 === (1))){
var inst_39315 = init;
var inst_39316 = inst_39315;
var state_39337__$1 = (function (){var statearr_39340 = state_39337;
(statearr_39340[(7)] = inst_39316);

return statearr_39340;
})();
var statearr_39341_41290 = state_39337__$1;
(statearr_39341_41290[(2)] = null);

(statearr_39341_41290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39338 === (4))){
var inst_39320 = (state_39337[(8)]);
var inst_39320__$1 = (state_39337[(2)]);
var inst_39321 = (inst_39320__$1 == null);
var state_39337__$1 = (function (){var statearr_39342 = state_39337;
(statearr_39342[(8)] = inst_39320__$1);

return statearr_39342;
})();
if(cljs.core.truth_(inst_39321)){
var statearr_39343_41291 = state_39337__$1;
(statearr_39343_41291[(1)] = (5));

} else {
var statearr_39344_41295 = state_39337__$1;
(statearr_39344_41295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39338 === (6))){
var inst_39316 = (state_39337[(7)]);
var inst_39320 = (state_39337[(8)]);
var inst_39324 = (state_39337[(9)]);
var inst_39324__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_39316,inst_39320) : f.call(null,inst_39316,inst_39320));
var inst_39325 = cljs.core.reduced_QMARK_(inst_39324__$1);
var state_39337__$1 = (function (){var statearr_39345 = state_39337;
(statearr_39345[(9)] = inst_39324__$1);

return statearr_39345;
})();
if(inst_39325){
var statearr_39346_41300 = state_39337__$1;
(statearr_39346_41300[(1)] = (8));

} else {
var statearr_39347_41304 = state_39337__$1;
(statearr_39347_41304[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39338 === (3))){
var inst_39335 = (state_39337[(2)]);
var state_39337__$1 = state_39337;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39337__$1,inst_39335);
} else {
if((state_val_39338 === (2))){
var state_39337__$1 = state_39337;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39337__$1,(4),ch);
} else {
if((state_val_39338 === (9))){
var inst_39324 = (state_39337[(9)]);
var inst_39316 = inst_39324;
var state_39337__$1 = (function (){var statearr_39348 = state_39337;
(statearr_39348[(7)] = inst_39316);

return statearr_39348;
})();
var statearr_39349_41315 = state_39337__$1;
(statearr_39349_41315[(2)] = null);

(statearr_39349_41315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39338 === (5))){
var inst_39316 = (state_39337[(7)]);
var state_39337__$1 = state_39337;
var statearr_39350_41316 = state_39337__$1;
(statearr_39350_41316[(2)] = inst_39316);

(statearr_39350_41316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39338 === (10))){
var inst_39331 = (state_39337[(2)]);
var state_39337__$1 = state_39337;
var statearr_39351_41317 = state_39337__$1;
(statearr_39351_41317[(2)] = inst_39331);

(statearr_39351_41317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39338 === (8))){
var inst_39324 = (state_39337[(9)]);
var inst_39327 = cljs.core.deref(inst_39324);
var state_39337__$1 = state_39337;
var statearr_39353_41321 = state_39337__$1;
(statearr_39353_41321[(2)] = inst_39327);

(statearr_39353_41321[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__38431__auto__ = null;
var cljs$core$async$reduce_$_state_machine__38431__auto____0 = (function (){
var statearr_39354 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39354[(0)] = cljs$core$async$reduce_$_state_machine__38431__auto__);

(statearr_39354[(1)] = (1));

return statearr_39354;
});
var cljs$core$async$reduce_$_state_machine__38431__auto____1 = (function (state_39337){
while(true){
var ret_value__38432__auto__ = (function (){try{while(true){
var result__38433__auto__ = switch__38430__auto__(state_39337);
if(cljs.core.keyword_identical_QMARK_(result__38433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38433__auto__;
}
break;
}
}catch (e39355){var ex__38434__auto__ = e39355;
var statearr_39356_41322 = state_39337;
(statearr_39356_41322[(2)] = ex__38434__auto__);


if(cljs.core.seq((state_39337[(4)]))){
var statearr_39357_41323 = state_39337;
(statearr_39357_41323[(1)] = cljs.core.first((state_39337[(4)])));

} else {
throw ex__38434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41324 = state_39337;
state_39337 = G__41324;
continue;
} else {
return ret_value__38432__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__38431__auto__ = function(state_39337){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__38431__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__38431__auto____1.call(this,state_39337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__38431__auto____0;
cljs$core$async$reduce_$_state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__38431__auto____1;
return cljs$core$async$reduce_$_state_machine__38431__auto__;
})()
})();
var state__38852__auto__ = (function (){var statearr_39358 = f__38851__auto__();
(statearr_39358[(6)] = c__38850__auto__);

return statearr_39358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38852__auto__);
}));

return c__38850__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__38850__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38851__auto__ = (function (){var switch__38430__auto__ = (function (state_39365){
var state_val_39366 = (state_39365[(1)]);
if((state_val_39366 === (1))){
var inst_39360 = cljs.core.async.reduce(f__$1,init,ch);
var state_39365__$1 = state_39365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39365__$1,(2),inst_39360);
} else {
if((state_val_39366 === (2))){
var inst_39362 = (state_39365[(2)]);
var inst_39363 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_39362) : f__$1.call(null,inst_39362));
var state_39365__$1 = state_39365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39365__$1,inst_39363);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__38431__auto__ = null;
var cljs$core$async$transduce_$_state_machine__38431__auto____0 = (function (){
var statearr_39369 = [null,null,null,null,null,null,null];
(statearr_39369[(0)] = cljs$core$async$transduce_$_state_machine__38431__auto__);

(statearr_39369[(1)] = (1));

return statearr_39369;
});
var cljs$core$async$transduce_$_state_machine__38431__auto____1 = (function (state_39365){
while(true){
var ret_value__38432__auto__ = (function (){try{while(true){
var result__38433__auto__ = switch__38430__auto__(state_39365);
if(cljs.core.keyword_identical_QMARK_(result__38433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38433__auto__;
}
break;
}
}catch (e39370){var ex__38434__auto__ = e39370;
var statearr_39371_41325 = state_39365;
(statearr_39371_41325[(2)] = ex__38434__auto__);


if(cljs.core.seq((state_39365[(4)]))){
var statearr_39372_41326 = state_39365;
(statearr_39372_41326[(1)] = cljs.core.first((state_39365[(4)])));

} else {
throw ex__38434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41327 = state_39365;
state_39365 = G__41327;
continue;
} else {
return ret_value__38432__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__38431__auto__ = function(state_39365){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__38431__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__38431__auto____1.call(this,state_39365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__38431__auto____0;
cljs$core$async$transduce_$_state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__38431__auto____1;
return cljs$core$async$transduce_$_state_machine__38431__auto__;
})()
})();
var state__38852__auto__ = (function (){var statearr_39373 = f__38851__auto__();
(statearr_39373[(6)] = c__38850__auto__);

return statearr_39373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38852__auto__);
}));

return c__38850__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__39375 = arguments.length;
switch (G__39375) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__38850__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38851__auto__ = (function (){var switch__38430__auto__ = (function (state_39402){
var state_val_39403 = (state_39402[(1)]);
if((state_val_39403 === (7))){
var inst_39384 = (state_39402[(2)]);
var state_39402__$1 = state_39402;
var statearr_39404_41338 = state_39402__$1;
(statearr_39404_41338[(2)] = inst_39384);

(statearr_39404_41338[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39403 === (1))){
var inst_39378 = cljs.core.seq(coll);
var inst_39379 = inst_39378;
var state_39402__$1 = (function (){var statearr_39405 = state_39402;
(statearr_39405[(7)] = inst_39379);

return statearr_39405;
})();
var statearr_39406_41339 = state_39402__$1;
(statearr_39406_41339[(2)] = null);

(statearr_39406_41339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39403 === (4))){
var inst_39379 = (state_39402[(7)]);
var inst_39382 = cljs.core.first(inst_39379);
var state_39402__$1 = state_39402;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39402__$1,(7),ch,inst_39382);
} else {
if((state_val_39403 === (13))){
var inst_39396 = (state_39402[(2)]);
var state_39402__$1 = state_39402;
var statearr_39407_41340 = state_39402__$1;
(statearr_39407_41340[(2)] = inst_39396);

(statearr_39407_41340[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39403 === (6))){
var inst_39387 = (state_39402[(2)]);
var state_39402__$1 = state_39402;
if(cljs.core.truth_(inst_39387)){
var statearr_39408_41341 = state_39402__$1;
(statearr_39408_41341[(1)] = (8));

} else {
var statearr_39409_41342 = state_39402__$1;
(statearr_39409_41342[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39403 === (3))){
var inst_39400 = (state_39402[(2)]);
var state_39402__$1 = state_39402;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39402__$1,inst_39400);
} else {
if((state_val_39403 === (12))){
var state_39402__$1 = state_39402;
var statearr_39410_41343 = state_39402__$1;
(statearr_39410_41343[(2)] = null);

(statearr_39410_41343[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39403 === (2))){
var inst_39379 = (state_39402[(7)]);
var state_39402__$1 = state_39402;
if(cljs.core.truth_(inst_39379)){
var statearr_39411_41344 = state_39402__$1;
(statearr_39411_41344[(1)] = (4));

} else {
var statearr_39412_41345 = state_39402__$1;
(statearr_39412_41345[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39403 === (11))){
var inst_39393 = cljs.core.async.close_BANG_(ch);
var state_39402__$1 = state_39402;
var statearr_39413_41346 = state_39402__$1;
(statearr_39413_41346[(2)] = inst_39393);

(statearr_39413_41346[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39403 === (9))){
var state_39402__$1 = state_39402;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39415_41347 = state_39402__$1;
(statearr_39415_41347[(1)] = (11));

} else {
var statearr_39416_41348 = state_39402__$1;
(statearr_39416_41348[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39403 === (5))){
var inst_39379 = (state_39402[(7)]);
var state_39402__$1 = state_39402;
var statearr_39418_41349 = state_39402__$1;
(statearr_39418_41349[(2)] = inst_39379);

(statearr_39418_41349[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39403 === (10))){
var inst_39398 = (state_39402[(2)]);
var state_39402__$1 = state_39402;
var statearr_39419_41350 = state_39402__$1;
(statearr_39419_41350[(2)] = inst_39398);

(statearr_39419_41350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39403 === (8))){
var inst_39379 = (state_39402[(7)]);
var inst_39389 = cljs.core.next(inst_39379);
var inst_39379__$1 = inst_39389;
var state_39402__$1 = (function (){var statearr_39420 = state_39402;
(statearr_39420[(7)] = inst_39379__$1);

return statearr_39420;
})();
var statearr_39421_41351 = state_39402__$1;
(statearr_39421_41351[(2)] = null);

(statearr_39421_41351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__38431__auto__ = null;
var cljs$core$async$state_machine__38431__auto____0 = (function (){
var statearr_39422 = [null,null,null,null,null,null,null,null];
(statearr_39422[(0)] = cljs$core$async$state_machine__38431__auto__);

(statearr_39422[(1)] = (1));

return statearr_39422;
});
var cljs$core$async$state_machine__38431__auto____1 = (function (state_39402){
while(true){
var ret_value__38432__auto__ = (function (){try{while(true){
var result__38433__auto__ = switch__38430__auto__(state_39402);
if(cljs.core.keyword_identical_QMARK_(result__38433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38433__auto__;
}
break;
}
}catch (e39423){var ex__38434__auto__ = e39423;
var statearr_39424_41358 = state_39402;
(statearr_39424_41358[(2)] = ex__38434__auto__);


if(cljs.core.seq((state_39402[(4)]))){
var statearr_39425_41359 = state_39402;
(statearr_39425_41359[(1)] = cljs.core.first((state_39402[(4)])));

} else {
throw ex__38434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41360 = state_39402;
state_39402 = G__41360;
continue;
} else {
return ret_value__38432__auto__;
}
break;
}
});
cljs$core$async$state_machine__38431__auto__ = function(state_39402){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38431__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38431__auto____1.call(this,state_39402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38431__auto____0;
cljs$core$async$state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38431__auto____1;
return cljs$core$async$state_machine__38431__auto__;
})()
})();
var state__38852__auto__ = (function (){var statearr_39426 = f__38851__auto__();
(statearr_39426[(6)] = c__38850__auto__);

return statearr_39426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38852__auto__);
}));

return c__38850__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__39428 = arguments.length;
switch (G__39428) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_41362 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null,_));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_41362(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_41363 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_41363(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_41365 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_41365(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_41371 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_41371(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39448 = (function (ch,cs,meta39449){
this.ch = ch;
this.cs = cs;
this.meta39449 = meta39449;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39450,meta39449__$1){
var self__ = this;
var _39450__$1 = this;
return (new cljs.core.async.t_cljs$core$async39448(self__.ch,self__.cs,meta39449__$1));
}));

(cljs.core.async.t_cljs$core$async39448.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39450){
var self__ = this;
var _39450__$1 = this;
return self__.meta39449;
}));

(cljs.core.async.t_cljs$core$async39448.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39448.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async39448.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39448.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async39448.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async39448.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async39448.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta39449","meta39449",-1613247858,null)], null);
}));

(cljs.core.async.t_cljs$core$async39448.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39448.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39448");

(cljs.core.async.t_cljs$core$async39448.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async39448");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39448.
 */
cljs.core.async.__GT_t_cljs$core$async39448 = (function cljs$core$async$__GT_t_cljs$core$async39448(ch,cs,meta39449){
return (new cljs.core.async.t_cljs$core$async39448(ch,cs,meta39449));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async39448(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__38850__auto___41372 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38851__auto__ = (function (){var switch__38430__auto__ = (function (state_39630){
var state_val_39633 = (state_39630[(1)]);
if((state_val_39633 === (7))){
var inst_39625 = (state_39630[(2)]);
var state_39630__$1 = state_39630;
var statearr_39639_41373 = state_39630__$1;
(statearr_39639_41373[(2)] = inst_39625);

(statearr_39639_41373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (20))){
var inst_39511 = (state_39630[(7)]);
var inst_39527 = cljs.core.first(inst_39511);
var inst_39528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39527,(0),null);
var inst_39529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39527,(1),null);
var state_39630__$1 = (function (){var statearr_39641 = state_39630;
(statearr_39641[(8)] = inst_39528);

return statearr_39641;
})();
if(cljs.core.truth_(inst_39529)){
var statearr_39645_41374 = state_39630__$1;
(statearr_39645_41374[(1)] = (22));

} else {
var statearr_39646_41375 = state_39630__$1;
(statearr_39646_41375[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (27))){
var inst_39561 = (state_39630[(9)]);
var inst_39563 = (state_39630[(10)]);
var inst_39571 = (state_39630[(11)]);
var inst_39475 = (state_39630[(12)]);
var inst_39571__$1 = cljs.core._nth(inst_39561,inst_39563);
var inst_39572 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_39571__$1,inst_39475,done);
var state_39630__$1 = (function (){var statearr_39650 = state_39630;
(statearr_39650[(11)] = inst_39571__$1);

return statearr_39650;
})();
if(cljs.core.truth_(inst_39572)){
var statearr_39652_41376 = state_39630__$1;
(statearr_39652_41376[(1)] = (30));

} else {
var statearr_39654_41377 = state_39630__$1;
(statearr_39654_41377[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (1))){
var state_39630__$1 = state_39630;
var statearr_39660_41378 = state_39630__$1;
(statearr_39660_41378[(2)] = null);

(statearr_39660_41378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (24))){
var inst_39511 = (state_39630[(7)]);
var inst_39536 = (state_39630[(2)]);
var inst_39538 = cljs.core.next(inst_39511);
var inst_39485 = inst_39538;
var inst_39486 = null;
var inst_39487 = (0);
var inst_39488 = (0);
var state_39630__$1 = (function (){var statearr_39668 = state_39630;
(statearr_39668[(13)] = inst_39536);

(statearr_39668[(14)] = inst_39485);

(statearr_39668[(15)] = inst_39486);

(statearr_39668[(16)] = inst_39487);

(statearr_39668[(17)] = inst_39488);

return statearr_39668;
})();
var statearr_39672_41379 = state_39630__$1;
(statearr_39672_41379[(2)] = null);

(statearr_39672_41379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (39))){
var state_39630__$1 = state_39630;
var statearr_39689_41380 = state_39630__$1;
(statearr_39689_41380[(2)] = null);

(statearr_39689_41380[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (4))){
var inst_39475 = (state_39630[(12)]);
var inst_39475__$1 = (state_39630[(2)]);
var inst_39476 = (inst_39475__$1 == null);
var state_39630__$1 = (function (){var statearr_39693 = state_39630;
(statearr_39693[(12)] = inst_39475__$1);

return statearr_39693;
})();
if(cljs.core.truth_(inst_39476)){
var statearr_39695_41381 = state_39630__$1;
(statearr_39695_41381[(1)] = (5));

} else {
var statearr_39696_41382 = state_39630__$1;
(statearr_39696_41382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (15))){
var inst_39488 = (state_39630[(17)]);
var inst_39485 = (state_39630[(14)]);
var inst_39486 = (state_39630[(15)]);
var inst_39487 = (state_39630[(16)]);
var inst_39506 = (state_39630[(2)]);
var inst_39508 = (inst_39488 + (1));
var tmp39678 = inst_39487;
var tmp39681 = inst_39485;
var tmp39682 = inst_39486;
var inst_39485__$1 = tmp39681;
var inst_39486__$1 = tmp39682;
var inst_39487__$1 = tmp39678;
var inst_39488__$1 = inst_39508;
var state_39630__$1 = (function (){var statearr_39705 = state_39630;
(statearr_39705[(18)] = inst_39506);

(statearr_39705[(14)] = inst_39485__$1);

(statearr_39705[(15)] = inst_39486__$1);

(statearr_39705[(16)] = inst_39487__$1);

(statearr_39705[(17)] = inst_39488__$1);

return statearr_39705;
})();
var statearr_39706_41383 = state_39630__$1;
(statearr_39706_41383[(2)] = null);

(statearr_39706_41383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (21))){
var inst_39541 = (state_39630[(2)]);
var state_39630__$1 = state_39630;
var statearr_39713_41384 = state_39630__$1;
(statearr_39713_41384[(2)] = inst_39541);

(statearr_39713_41384[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (31))){
var inst_39571 = (state_39630[(11)]);
var inst_39575 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_39571);
var state_39630__$1 = state_39630;
var statearr_39715_41385 = state_39630__$1;
(statearr_39715_41385[(2)] = inst_39575);

(statearr_39715_41385[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (32))){
var inst_39563 = (state_39630[(10)]);
var inst_39560 = (state_39630[(19)]);
var inst_39561 = (state_39630[(9)]);
var inst_39562 = (state_39630[(20)]);
var inst_39577 = (state_39630[(2)]);
var inst_39579 = (inst_39563 + (1));
var tmp39709 = inst_39560;
var tmp39710 = inst_39561;
var tmp39711 = inst_39562;
var inst_39560__$1 = tmp39709;
var inst_39561__$1 = tmp39710;
var inst_39562__$1 = tmp39711;
var inst_39563__$1 = inst_39579;
var state_39630__$1 = (function (){var statearr_39720 = state_39630;
(statearr_39720[(21)] = inst_39577);

(statearr_39720[(19)] = inst_39560__$1);

(statearr_39720[(9)] = inst_39561__$1);

(statearr_39720[(20)] = inst_39562__$1);

(statearr_39720[(10)] = inst_39563__$1);

return statearr_39720;
})();
var statearr_39721_41386 = state_39630__$1;
(statearr_39721_41386[(2)] = null);

(statearr_39721_41386[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (40))){
var inst_39594 = (state_39630[(22)]);
var inst_39599 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_39594);
var state_39630__$1 = state_39630;
var statearr_39725_41387 = state_39630__$1;
(statearr_39725_41387[(2)] = inst_39599);

(statearr_39725_41387[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (33))){
var inst_39582 = (state_39630[(23)]);
var inst_39586 = cljs.core.chunked_seq_QMARK_(inst_39582);
var state_39630__$1 = state_39630;
if(inst_39586){
var statearr_39734_41388 = state_39630__$1;
(statearr_39734_41388[(1)] = (36));

} else {
var statearr_39736_41389 = state_39630__$1;
(statearr_39736_41389[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (13))){
var inst_39500 = (state_39630[(24)]);
var inst_39503 = cljs.core.async.close_BANG_(inst_39500);
var state_39630__$1 = state_39630;
var statearr_39740_41391 = state_39630__$1;
(statearr_39740_41391[(2)] = inst_39503);

(statearr_39740_41391[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (22))){
var inst_39528 = (state_39630[(8)]);
var inst_39533 = cljs.core.async.close_BANG_(inst_39528);
var state_39630__$1 = state_39630;
var statearr_39742_41392 = state_39630__$1;
(statearr_39742_41392[(2)] = inst_39533);

(statearr_39742_41392[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (36))){
var inst_39582 = (state_39630[(23)]);
var inst_39589 = cljs.core.chunk_first(inst_39582);
var inst_39590 = cljs.core.chunk_rest(inst_39582);
var inst_39591 = cljs.core.count(inst_39589);
var inst_39560 = inst_39590;
var inst_39561 = inst_39589;
var inst_39562 = inst_39591;
var inst_39563 = (0);
var state_39630__$1 = (function (){var statearr_39747 = state_39630;
(statearr_39747[(19)] = inst_39560);

(statearr_39747[(9)] = inst_39561);

(statearr_39747[(20)] = inst_39562);

(statearr_39747[(10)] = inst_39563);

return statearr_39747;
})();
var statearr_39750_41397 = state_39630__$1;
(statearr_39750_41397[(2)] = null);

(statearr_39750_41397[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (41))){
var inst_39582 = (state_39630[(23)]);
var inst_39601 = (state_39630[(2)]);
var inst_39602 = cljs.core.next(inst_39582);
var inst_39560 = inst_39602;
var inst_39561 = null;
var inst_39562 = (0);
var inst_39563 = (0);
var state_39630__$1 = (function (){var statearr_39753 = state_39630;
(statearr_39753[(25)] = inst_39601);

(statearr_39753[(19)] = inst_39560);

(statearr_39753[(9)] = inst_39561);

(statearr_39753[(20)] = inst_39562);

(statearr_39753[(10)] = inst_39563);

return statearr_39753;
})();
var statearr_39755_41398 = state_39630__$1;
(statearr_39755_41398[(2)] = null);

(statearr_39755_41398[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (43))){
var state_39630__$1 = state_39630;
var statearr_39758_41399 = state_39630__$1;
(statearr_39758_41399[(2)] = null);

(statearr_39758_41399[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (29))){
var inst_39610 = (state_39630[(2)]);
var state_39630__$1 = state_39630;
var statearr_39760_41400 = state_39630__$1;
(statearr_39760_41400[(2)] = inst_39610);

(statearr_39760_41400[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (44))){
var inst_39621 = (state_39630[(2)]);
var state_39630__$1 = (function (){var statearr_39763 = state_39630;
(statearr_39763[(26)] = inst_39621);

return statearr_39763;
})();
var statearr_39765_41401 = state_39630__$1;
(statearr_39765_41401[(2)] = null);

(statearr_39765_41401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (6))){
var inst_39551 = (state_39630[(27)]);
var inst_39550 = cljs.core.deref(cs);
var inst_39551__$1 = cljs.core.keys(inst_39550);
var inst_39553 = cljs.core.count(inst_39551__$1);
var inst_39554 = cljs.core.reset_BANG_(dctr,inst_39553);
var inst_39559 = cljs.core.seq(inst_39551__$1);
var inst_39560 = inst_39559;
var inst_39561 = null;
var inst_39562 = (0);
var inst_39563 = (0);
var state_39630__$1 = (function (){var statearr_39767 = state_39630;
(statearr_39767[(27)] = inst_39551__$1);

(statearr_39767[(28)] = inst_39554);

(statearr_39767[(19)] = inst_39560);

(statearr_39767[(9)] = inst_39561);

(statearr_39767[(20)] = inst_39562);

(statearr_39767[(10)] = inst_39563);

return statearr_39767;
})();
var statearr_39771_41402 = state_39630__$1;
(statearr_39771_41402[(2)] = null);

(statearr_39771_41402[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (28))){
var inst_39560 = (state_39630[(19)]);
var inst_39582 = (state_39630[(23)]);
var inst_39582__$1 = cljs.core.seq(inst_39560);
var state_39630__$1 = (function (){var statearr_39773 = state_39630;
(statearr_39773[(23)] = inst_39582__$1);

return statearr_39773;
})();
if(inst_39582__$1){
var statearr_39774_41403 = state_39630__$1;
(statearr_39774_41403[(1)] = (33));

} else {
var statearr_39775_41404 = state_39630__$1;
(statearr_39775_41404[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (25))){
var inst_39563 = (state_39630[(10)]);
var inst_39562 = (state_39630[(20)]);
var inst_39567 = (inst_39563 < inst_39562);
var inst_39568 = inst_39567;
var state_39630__$1 = state_39630;
if(cljs.core.truth_(inst_39568)){
var statearr_39779_41405 = state_39630__$1;
(statearr_39779_41405[(1)] = (27));

} else {
var statearr_39780_41406 = state_39630__$1;
(statearr_39780_41406[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (34))){
var state_39630__$1 = state_39630;
var statearr_39782_41407 = state_39630__$1;
(statearr_39782_41407[(2)] = null);

(statearr_39782_41407[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (17))){
var state_39630__$1 = state_39630;
var statearr_39786_41410 = state_39630__$1;
(statearr_39786_41410[(2)] = null);

(statearr_39786_41410[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (3))){
var inst_39627 = (state_39630[(2)]);
var state_39630__$1 = state_39630;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39630__$1,inst_39627);
} else {
if((state_val_39633 === (12))){
var inst_39546 = (state_39630[(2)]);
var state_39630__$1 = state_39630;
var statearr_39790_41411 = state_39630__$1;
(statearr_39790_41411[(2)] = inst_39546);

(statearr_39790_41411[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (2))){
var state_39630__$1 = state_39630;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39630__$1,(4),ch);
} else {
if((state_val_39633 === (23))){
var state_39630__$1 = state_39630;
var statearr_39792_41413 = state_39630__$1;
(statearr_39792_41413[(2)] = null);

(statearr_39792_41413[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (35))){
var inst_39608 = (state_39630[(2)]);
var state_39630__$1 = state_39630;
var statearr_39794_41414 = state_39630__$1;
(statearr_39794_41414[(2)] = inst_39608);

(statearr_39794_41414[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (19))){
var inst_39511 = (state_39630[(7)]);
var inst_39518 = cljs.core.chunk_first(inst_39511);
var inst_39519 = cljs.core.chunk_rest(inst_39511);
var inst_39520 = cljs.core.count(inst_39518);
var inst_39485 = inst_39519;
var inst_39486 = inst_39518;
var inst_39487 = inst_39520;
var inst_39488 = (0);
var state_39630__$1 = (function (){var statearr_39796 = state_39630;
(statearr_39796[(14)] = inst_39485);

(statearr_39796[(15)] = inst_39486);

(statearr_39796[(16)] = inst_39487);

(statearr_39796[(17)] = inst_39488);

return statearr_39796;
})();
var statearr_39797_41416 = state_39630__$1;
(statearr_39797_41416[(2)] = null);

(statearr_39797_41416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (11))){
var inst_39485 = (state_39630[(14)]);
var inst_39511 = (state_39630[(7)]);
var inst_39511__$1 = cljs.core.seq(inst_39485);
var state_39630__$1 = (function (){var statearr_39798 = state_39630;
(statearr_39798[(7)] = inst_39511__$1);

return statearr_39798;
})();
if(inst_39511__$1){
var statearr_39799_41418 = state_39630__$1;
(statearr_39799_41418[(1)] = (16));

} else {
var statearr_39800_41419 = state_39630__$1;
(statearr_39800_41419[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (9))){
var inst_39548 = (state_39630[(2)]);
var state_39630__$1 = state_39630;
var statearr_39801_41420 = state_39630__$1;
(statearr_39801_41420[(2)] = inst_39548);

(statearr_39801_41420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (5))){
var inst_39483 = cljs.core.deref(cs);
var inst_39484 = cljs.core.seq(inst_39483);
var inst_39485 = inst_39484;
var inst_39486 = null;
var inst_39487 = (0);
var inst_39488 = (0);
var state_39630__$1 = (function (){var statearr_39806 = state_39630;
(statearr_39806[(14)] = inst_39485);

(statearr_39806[(15)] = inst_39486);

(statearr_39806[(16)] = inst_39487);

(statearr_39806[(17)] = inst_39488);

return statearr_39806;
})();
var statearr_39807_41421 = state_39630__$1;
(statearr_39807_41421[(2)] = null);

(statearr_39807_41421[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (14))){
var state_39630__$1 = state_39630;
var statearr_39808_41422 = state_39630__$1;
(statearr_39808_41422[(2)] = null);

(statearr_39808_41422[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (45))){
var inst_39618 = (state_39630[(2)]);
var state_39630__$1 = state_39630;
var statearr_39809_41423 = state_39630__$1;
(statearr_39809_41423[(2)] = inst_39618);

(statearr_39809_41423[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (26))){
var inst_39551 = (state_39630[(27)]);
var inst_39612 = (state_39630[(2)]);
var inst_39614 = cljs.core.seq(inst_39551);
var state_39630__$1 = (function (){var statearr_39810 = state_39630;
(statearr_39810[(29)] = inst_39612);

return statearr_39810;
})();
if(inst_39614){
var statearr_39811_41427 = state_39630__$1;
(statearr_39811_41427[(1)] = (42));

} else {
var statearr_39812_41428 = state_39630__$1;
(statearr_39812_41428[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (16))){
var inst_39511 = (state_39630[(7)]);
var inst_39516 = cljs.core.chunked_seq_QMARK_(inst_39511);
var state_39630__$1 = state_39630;
if(inst_39516){
var statearr_39813_41429 = state_39630__$1;
(statearr_39813_41429[(1)] = (19));

} else {
var statearr_39814_41430 = state_39630__$1;
(statearr_39814_41430[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (38))){
var inst_39605 = (state_39630[(2)]);
var state_39630__$1 = state_39630;
var statearr_39815_41431 = state_39630__$1;
(statearr_39815_41431[(2)] = inst_39605);

(statearr_39815_41431[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (30))){
var state_39630__$1 = state_39630;
var statearr_39816_41432 = state_39630__$1;
(statearr_39816_41432[(2)] = null);

(statearr_39816_41432[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (10))){
var inst_39486 = (state_39630[(15)]);
var inst_39488 = (state_39630[(17)]);
var inst_39499 = cljs.core._nth(inst_39486,inst_39488);
var inst_39500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39499,(0),null);
var inst_39501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39499,(1),null);
var state_39630__$1 = (function (){var statearr_39817 = state_39630;
(statearr_39817[(24)] = inst_39500);

return statearr_39817;
})();
if(cljs.core.truth_(inst_39501)){
var statearr_39818_41436 = state_39630__$1;
(statearr_39818_41436[(1)] = (13));

} else {
var statearr_39819_41437 = state_39630__$1;
(statearr_39819_41437[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (18))){
var inst_39544 = (state_39630[(2)]);
var state_39630__$1 = state_39630;
var statearr_39820_41438 = state_39630__$1;
(statearr_39820_41438[(2)] = inst_39544);

(statearr_39820_41438[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (42))){
var state_39630__$1 = state_39630;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39630__$1,(45),dchan);
} else {
if((state_val_39633 === (37))){
var inst_39582 = (state_39630[(23)]);
var inst_39594 = (state_39630[(22)]);
var inst_39475 = (state_39630[(12)]);
var inst_39594__$1 = cljs.core.first(inst_39582);
var inst_39596 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_39594__$1,inst_39475,done);
var state_39630__$1 = (function (){var statearr_39821 = state_39630;
(statearr_39821[(22)] = inst_39594__$1);

return statearr_39821;
})();
if(cljs.core.truth_(inst_39596)){
var statearr_39822_41440 = state_39630__$1;
(statearr_39822_41440[(1)] = (39));

} else {
var statearr_39823_41441 = state_39630__$1;
(statearr_39823_41441[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39633 === (8))){
var inst_39488 = (state_39630[(17)]);
var inst_39487 = (state_39630[(16)]);
var inst_39490 = (inst_39488 < inst_39487);
var inst_39491 = inst_39490;
var state_39630__$1 = state_39630;
if(cljs.core.truth_(inst_39491)){
var statearr_39825_41443 = state_39630__$1;
(statearr_39825_41443[(1)] = (10));

} else {
var statearr_39826_41444 = state_39630__$1;
(statearr_39826_41444[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__38431__auto__ = null;
var cljs$core$async$mult_$_state_machine__38431__auto____0 = (function (){
var statearr_39828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39828[(0)] = cljs$core$async$mult_$_state_machine__38431__auto__);

(statearr_39828[(1)] = (1));

return statearr_39828;
});
var cljs$core$async$mult_$_state_machine__38431__auto____1 = (function (state_39630){
while(true){
var ret_value__38432__auto__ = (function (){try{while(true){
var result__38433__auto__ = switch__38430__auto__(state_39630);
if(cljs.core.keyword_identical_QMARK_(result__38433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38433__auto__;
}
break;
}
}catch (e39829){var ex__38434__auto__ = e39829;
var statearr_39830_41445 = state_39630;
(statearr_39830_41445[(2)] = ex__38434__auto__);


if(cljs.core.seq((state_39630[(4)]))){
var statearr_39831_41446 = state_39630;
(statearr_39831_41446[(1)] = cljs.core.first((state_39630[(4)])));

} else {
throw ex__38434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41447 = state_39630;
state_39630 = G__41447;
continue;
} else {
return ret_value__38432__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__38431__auto__ = function(state_39630){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__38431__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__38431__auto____1.call(this,state_39630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__38431__auto____0;
cljs$core$async$mult_$_state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__38431__auto____1;
return cljs$core$async$mult_$_state_machine__38431__auto__;
})()
})();
var state__38852__auto__ = (function (){var statearr_39832 = f__38851__auto__();
(statearr_39832[(6)] = c__38850__auto___41372);

return statearr_39832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38852__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__39834 = arguments.length;
switch (G__39834) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_41450 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_41450(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_41455 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_41455(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_41460 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_41460(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_41464 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null,m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_41464(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_41469 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null,m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_41469(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___41470 = arguments.length;
var i__5727__auto___41471 = (0);
while(true){
if((i__5727__auto___41471 < len__5726__auto___41470)){
args__5732__auto__.push((arguments[i__5727__auto___41471]));

var G__41472 = (i__5727__auto___41471 + (1));
i__5727__auto___41471 = G__41472;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__39841){
var map__39842 = p__39841;
var map__39842__$1 = cljs.core.__destructure_map(map__39842);
var opts = map__39842__$1;
var statearr_39843_41473 = state;
(statearr_39843_41473[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_39845_41474 = state;
(statearr_39845_41474[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_39847_41475 = state;
(statearr_39847_41475[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq39837){
var G__39838 = cljs.core.first(seq39837);
var seq39837__$1 = cljs.core.next(seq39837);
var G__39839 = cljs.core.first(seq39837__$1);
var seq39837__$2 = cljs.core.next(seq39837__$1);
var G__39840 = cljs.core.first(seq39837__$2);
var seq39837__$3 = cljs.core.next(seq39837__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39838,G__39839,G__39840,seq39837__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39877 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39878){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta39878 = meta39878;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39879,meta39878__$1){
var self__ = this;
var _39879__$1 = this;
return (new cljs.core.async.t_cljs$core$async39877(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta39878__$1));
}));

(cljs.core.async.t_cljs$core$async39877.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39879){
var self__ = this;
var _39879__$1 = this;
return self__.meta39878;
}));

(cljs.core.async.t_cljs$core$async39877.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39877.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async39877.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39877.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39877.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39877.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39877.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39877.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async39877.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta39878","meta39878",-856672762,null)], null);
}));

(cljs.core.async.t_cljs$core$async39877.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39877.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39877");

(cljs.core.async.t_cljs$core$async39877.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async39877");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39877.
 */
cljs.core.async.__GT_t_cljs$core$async39877 = (function cljs$core$async$__GT_t_cljs$core$async39877(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39878){
return (new cljs.core.async.t_cljs$core$async39877(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39878));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async39877(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__38850__auto___41504 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38851__auto__ = (function (){var switch__38430__auto__ = (function (state_39989){
var state_val_39990 = (state_39989[(1)]);
if((state_val_39990 === (7))){
var inst_39948 = (state_39989[(2)]);
var state_39989__$1 = state_39989;
if(cljs.core.truth_(inst_39948)){
var statearr_39992_41505 = state_39989__$1;
(statearr_39992_41505[(1)] = (8));

} else {
var statearr_39993_41506 = state_39989__$1;
(statearr_39993_41506[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (20))){
var inst_39941 = (state_39989[(7)]);
var state_39989__$1 = state_39989;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39989__$1,(23),out,inst_39941);
} else {
if((state_val_39990 === (1))){
var inst_39913 = calc_state();
var inst_39914 = cljs.core.__destructure_map(inst_39913);
var inst_39915 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39914,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39914,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39914,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39922 = inst_39913;
var state_39989__$1 = (function (){var statearr_39994 = state_39989;
(statearr_39994[(8)] = inst_39915);

(statearr_39994[(9)] = inst_39919);

(statearr_39994[(10)] = inst_39920);

(statearr_39994[(11)] = inst_39922);

return statearr_39994;
})();
var statearr_39995_41507 = state_39989__$1;
(statearr_39995_41507[(2)] = null);

(statearr_39995_41507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (24))){
var inst_39929 = (state_39989[(12)]);
var inst_39922 = inst_39929;
var state_39989__$1 = (function (){var statearr_39996 = state_39989;
(statearr_39996[(11)] = inst_39922);

return statearr_39996;
})();
var statearr_40001_41508 = state_39989__$1;
(statearr_40001_41508[(2)] = null);

(statearr_40001_41508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (4))){
var inst_39941 = (state_39989[(7)]);
var inst_39943 = (state_39989[(13)]);
var inst_39940 = (state_39989[(2)]);
var inst_39941__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39940,(0),null);
var inst_39942 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39940,(1),null);
var inst_39943__$1 = (inst_39941__$1 == null);
var state_39989__$1 = (function (){var statearr_40009 = state_39989;
(statearr_40009[(7)] = inst_39941__$1);

(statearr_40009[(14)] = inst_39942);

(statearr_40009[(13)] = inst_39943__$1);

return statearr_40009;
})();
if(cljs.core.truth_(inst_39943__$1)){
var statearr_40011_41509 = state_39989__$1;
(statearr_40011_41509[(1)] = (5));

} else {
var statearr_40012_41510 = state_39989__$1;
(statearr_40012_41510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (15))){
var inst_39930 = (state_39989[(15)]);
var inst_39963 = (state_39989[(16)]);
var inst_39963__$1 = cljs.core.empty_QMARK_(inst_39930);
var state_39989__$1 = (function (){var statearr_40013 = state_39989;
(statearr_40013[(16)] = inst_39963__$1);

return statearr_40013;
})();
if(inst_39963__$1){
var statearr_40014_41511 = state_39989__$1;
(statearr_40014_41511[(1)] = (17));

} else {
var statearr_40015_41512 = state_39989__$1;
(statearr_40015_41512[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (21))){
var inst_39929 = (state_39989[(12)]);
var inst_39922 = inst_39929;
var state_39989__$1 = (function (){var statearr_40019 = state_39989;
(statearr_40019[(11)] = inst_39922);

return statearr_40019;
})();
var statearr_40021_41516 = state_39989__$1;
(statearr_40021_41516[(2)] = null);

(statearr_40021_41516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (13))){
var inst_39955 = (state_39989[(2)]);
var inst_39957 = calc_state();
var inst_39922 = inst_39957;
var state_39989__$1 = (function (){var statearr_40026 = state_39989;
(statearr_40026[(17)] = inst_39955);

(statearr_40026[(11)] = inst_39922);

return statearr_40026;
})();
var statearr_40027_41517 = state_39989__$1;
(statearr_40027_41517[(2)] = null);

(statearr_40027_41517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (22))){
var inst_39983 = (state_39989[(2)]);
var state_39989__$1 = state_39989;
var statearr_40028_41518 = state_39989__$1;
(statearr_40028_41518[(2)] = inst_39983);

(statearr_40028_41518[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (6))){
var inst_39942 = (state_39989[(14)]);
var inst_39946 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39942,change);
var state_39989__$1 = state_39989;
var statearr_40029_41519 = state_39989__$1;
(statearr_40029_41519[(2)] = inst_39946);

(statearr_40029_41519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (25))){
var state_39989__$1 = state_39989;
var statearr_40030_41520 = state_39989__$1;
(statearr_40030_41520[(2)] = null);

(statearr_40030_41520[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (17))){
var inst_39931 = (state_39989[(18)]);
var inst_39942 = (state_39989[(14)]);
var inst_39965 = (inst_39931.cljs$core$IFn$_invoke$arity$1 ? inst_39931.cljs$core$IFn$_invoke$arity$1(inst_39942) : inst_39931.call(null,inst_39942));
var inst_39966 = cljs.core.not(inst_39965);
var state_39989__$1 = state_39989;
var statearr_40031_41521 = state_39989__$1;
(statearr_40031_41521[(2)] = inst_39966);

(statearr_40031_41521[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (3))){
var inst_39987 = (state_39989[(2)]);
var state_39989__$1 = state_39989;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39989__$1,inst_39987);
} else {
if((state_val_39990 === (12))){
var state_39989__$1 = state_39989;
var statearr_40032_41522 = state_39989__$1;
(statearr_40032_41522[(2)] = null);

(statearr_40032_41522[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (2))){
var inst_39922 = (state_39989[(11)]);
var inst_39929 = (state_39989[(12)]);
var inst_39929__$1 = cljs.core.__destructure_map(inst_39922);
var inst_39930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39929__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39931 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39929__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39932 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39929__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_39989__$1 = (function (){var statearr_40033 = state_39989;
(statearr_40033[(12)] = inst_39929__$1);

(statearr_40033[(15)] = inst_39930);

(statearr_40033[(18)] = inst_39931);

return statearr_40033;
})();
return cljs.core.async.ioc_alts_BANG_(state_39989__$1,(4),inst_39932);
} else {
if((state_val_39990 === (23))){
var inst_39974 = (state_39989[(2)]);
var state_39989__$1 = state_39989;
if(cljs.core.truth_(inst_39974)){
var statearr_40034_41523 = state_39989__$1;
(statearr_40034_41523[(1)] = (24));

} else {
var statearr_40035_41524 = state_39989__$1;
(statearr_40035_41524[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (19))){
var inst_39969 = (state_39989[(2)]);
var state_39989__$1 = state_39989;
var statearr_40036_41525 = state_39989__$1;
(statearr_40036_41525[(2)] = inst_39969);

(statearr_40036_41525[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (11))){
var inst_39942 = (state_39989[(14)]);
var inst_39952 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_39942);
var state_39989__$1 = state_39989;
var statearr_40037_41526 = state_39989__$1;
(statearr_40037_41526[(2)] = inst_39952);

(statearr_40037_41526[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (9))){
var inst_39930 = (state_39989[(15)]);
var inst_39942 = (state_39989[(14)]);
var inst_39960 = (state_39989[(19)]);
var inst_39960__$1 = (inst_39930.cljs$core$IFn$_invoke$arity$1 ? inst_39930.cljs$core$IFn$_invoke$arity$1(inst_39942) : inst_39930.call(null,inst_39942));
var state_39989__$1 = (function (){var statearr_40038 = state_39989;
(statearr_40038[(19)] = inst_39960__$1);

return statearr_40038;
})();
if(cljs.core.truth_(inst_39960__$1)){
var statearr_40039_41528 = state_39989__$1;
(statearr_40039_41528[(1)] = (14));

} else {
var statearr_40040_41529 = state_39989__$1;
(statearr_40040_41529[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (5))){
var inst_39943 = (state_39989[(13)]);
var state_39989__$1 = state_39989;
var statearr_40041_41531 = state_39989__$1;
(statearr_40041_41531[(2)] = inst_39943);

(statearr_40041_41531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (14))){
var inst_39960 = (state_39989[(19)]);
var state_39989__$1 = state_39989;
var statearr_40042_41532 = state_39989__$1;
(statearr_40042_41532[(2)] = inst_39960);

(statearr_40042_41532[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (26))){
var inst_39979 = (state_39989[(2)]);
var state_39989__$1 = state_39989;
var statearr_40048_41533 = state_39989__$1;
(statearr_40048_41533[(2)] = inst_39979);

(statearr_40048_41533[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (16))){
var inst_39971 = (state_39989[(2)]);
var state_39989__$1 = state_39989;
if(cljs.core.truth_(inst_39971)){
var statearr_40049_41534 = state_39989__$1;
(statearr_40049_41534[(1)] = (20));

} else {
var statearr_40050_41535 = state_39989__$1;
(statearr_40050_41535[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (10))){
var inst_39985 = (state_39989[(2)]);
var state_39989__$1 = state_39989;
var statearr_40051_41536 = state_39989__$1;
(statearr_40051_41536[(2)] = inst_39985);

(statearr_40051_41536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (18))){
var inst_39963 = (state_39989[(16)]);
var state_39989__$1 = state_39989;
var statearr_40052_41537 = state_39989__$1;
(statearr_40052_41537[(2)] = inst_39963);

(statearr_40052_41537[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39990 === (8))){
var inst_39941 = (state_39989[(7)]);
var inst_39950 = (inst_39941 == null);
var state_39989__$1 = state_39989;
if(cljs.core.truth_(inst_39950)){
var statearr_40053_41538 = state_39989__$1;
(statearr_40053_41538[(1)] = (11));

} else {
var statearr_40054_41539 = state_39989__$1;
(statearr_40054_41539[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__38431__auto__ = null;
var cljs$core$async$mix_$_state_machine__38431__auto____0 = (function (){
var statearr_40056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40056[(0)] = cljs$core$async$mix_$_state_machine__38431__auto__);

(statearr_40056[(1)] = (1));

return statearr_40056;
});
var cljs$core$async$mix_$_state_machine__38431__auto____1 = (function (state_39989){
while(true){
var ret_value__38432__auto__ = (function (){try{while(true){
var result__38433__auto__ = switch__38430__auto__(state_39989);
if(cljs.core.keyword_identical_QMARK_(result__38433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38433__auto__;
}
break;
}
}catch (e40057){var ex__38434__auto__ = e40057;
var statearr_40058_41540 = state_39989;
(statearr_40058_41540[(2)] = ex__38434__auto__);


if(cljs.core.seq((state_39989[(4)]))){
var statearr_40059_41541 = state_39989;
(statearr_40059_41541[(1)] = cljs.core.first((state_39989[(4)])));

} else {
throw ex__38434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41542 = state_39989;
state_39989 = G__41542;
continue;
} else {
return ret_value__38432__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__38431__auto__ = function(state_39989){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__38431__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__38431__auto____1.call(this,state_39989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__38431__auto____0;
cljs$core$async$mix_$_state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__38431__auto____1;
return cljs$core$async$mix_$_state_machine__38431__auto__;
})()
})();
var state__38852__auto__ = (function (){var statearr_40061 = f__38851__auto__();
(statearr_40061[(6)] = c__38850__auto___41504);

return statearr_40061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38852__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_41543 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_41543(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_41544 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null,p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_41544(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_41546 = (function() {
var G__41547 = null;
var G__41547__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null,p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__41547__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null,p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__41547 = function(p,v){
switch(arguments.length){
case 1:
return G__41547__1.call(this,p);
case 2:
return G__41547__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__41547.cljs$core$IFn$_invoke$arity$1 = G__41547__1;
G__41547.cljs$core$IFn$_invoke$arity$2 = G__41547__2;
return G__41547;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__40063 = arguments.length;
switch (G__40063) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_41546(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_41546(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40071 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40072){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40072 = meta40072;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40073,meta40072__$1){
var self__ = this;
var _40073__$1 = this;
return (new cljs.core.async.t_cljs$core$async40071(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40072__$1));
}));

(cljs.core.async.t_cljs$core$async40071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40073){
var self__ = this;
var _40073__$1 = this;
return self__.meta40072;
}));

(cljs.core.async.t_cljs$core$async40071.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40071.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async40071.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40071.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async40071.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async40071.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async40071.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async40071.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40072","meta40072",-913637668,null)], null);
}));

(cljs.core.async.t_cljs$core$async40071.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40071.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40071");

(cljs.core.async.t_cljs$core$async40071.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async40071");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40071.
 */
cljs.core.async.__GT_t_cljs$core$async40071 = (function cljs$core$async$__GT_t_cljs$core$async40071(ch,topic_fn,buf_fn,mults,ensure_mult,meta40072){
return (new cljs.core.async.t_cljs$core$async40071(ch,topic_fn,buf_fn,mults,ensure_mult,meta40072));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__40068 = arguments.length;
switch (G__40068) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__40064_SHARP_){
if(cljs.core.truth_((p1__40064_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__40064_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__40064_SHARP_.call(null,topic)))){
return p1__40064_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__40064_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async40071(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__38850__auto___41552 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38851__auto__ = (function (){var switch__38430__auto__ = (function (state_40155){
var state_val_40156 = (state_40155[(1)]);
if((state_val_40156 === (7))){
var inst_40150 = (state_40155[(2)]);
var state_40155__$1 = state_40155;
var statearr_40163_41553 = state_40155__$1;
(statearr_40163_41553[(2)] = inst_40150);

(statearr_40163_41553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (20))){
var state_40155__$1 = state_40155;
var statearr_40164_41558 = state_40155__$1;
(statearr_40164_41558[(2)] = null);

(statearr_40164_41558[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (1))){
var state_40155__$1 = state_40155;
var statearr_40165_41559 = state_40155__$1;
(statearr_40165_41559[(2)] = null);

(statearr_40165_41559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (24))){
var inst_40133 = (state_40155[(7)]);
var inst_40142 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_40133);
var state_40155__$1 = state_40155;
var statearr_40166_41560 = state_40155__$1;
(statearr_40166_41560[(2)] = inst_40142);

(statearr_40166_41560[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (4))){
var inst_40084 = (state_40155[(8)]);
var inst_40084__$1 = (state_40155[(2)]);
var inst_40085 = (inst_40084__$1 == null);
var state_40155__$1 = (function (){var statearr_40167 = state_40155;
(statearr_40167[(8)] = inst_40084__$1);

return statearr_40167;
})();
if(cljs.core.truth_(inst_40085)){
var statearr_40168_41561 = state_40155__$1;
(statearr_40168_41561[(1)] = (5));

} else {
var statearr_40169_41562 = state_40155__$1;
(statearr_40169_41562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (15))){
var inst_40127 = (state_40155[(2)]);
var state_40155__$1 = state_40155;
var statearr_40170_41563 = state_40155__$1;
(statearr_40170_41563[(2)] = inst_40127);

(statearr_40170_41563[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (21))){
var inst_40147 = (state_40155[(2)]);
var state_40155__$1 = (function (){var statearr_40171 = state_40155;
(statearr_40171[(9)] = inst_40147);

return statearr_40171;
})();
var statearr_40172_41564 = state_40155__$1;
(statearr_40172_41564[(2)] = null);

(statearr_40172_41564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (13))){
var inst_40108 = (state_40155[(10)]);
var inst_40110 = cljs.core.chunked_seq_QMARK_(inst_40108);
var state_40155__$1 = state_40155;
if(inst_40110){
var statearr_40179_41565 = state_40155__$1;
(statearr_40179_41565[(1)] = (16));

} else {
var statearr_40187_41566 = state_40155__$1;
(statearr_40187_41566[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (22))){
var inst_40139 = (state_40155[(2)]);
var state_40155__$1 = state_40155;
if(cljs.core.truth_(inst_40139)){
var statearr_40198_41567 = state_40155__$1;
(statearr_40198_41567[(1)] = (23));

} else {
var statearr_40199_41568 = state_40155__$1;
(statearr_40199_41568[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (6))){
var inst_40084 = (state_40155[(8)]);
var inst_40133 = (state_40155[(7)]);
var inst_40135 = (state_40155[(11)]);
var inst_40133__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_40084) : topic_fn.call(null,inst_40084));
var inst_40134 = cljs.core.deref(mults);
var inst_40135__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_40134,inst_40133__$1);
var state_40155__$1 = (function (){var statearr_40206 = state_40155;
(statearr_40206[(7)] = inst_40133__$1);

(statearr_40206[(11)] = inst_40135__$1);

return statearr_40206;
})();
if(cljs.core.truth_(inst_40135__$1)){
var statearr_40207_41569 = state_40155__$1;
(statearr_40207_41569[(1)] = (19));

} else {
var statearr_40208_41570 = state_40155__$1;
(statearr_40208_41570[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (25))){
var inst_40144 = (state_40155[(2)]);
var state_40155__$1 = state_40155;
var statearr_40212_41571 = state_40155__$1;
(statearr_40212_41571[(2)] = inst_40144);

(statearr_40212_41571[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (17))){
var inst_40108 = (state_40155[(10)]);
var inst_40117 = cljs.core.first(inst_40108);
var inst_40118 = cljs.core.async.muxch_STAR_(inst_40117);
var inst_40119 = cljs.core.async.close_BANG_(inst_40118);
var inst_40120 = cljs.core.next(inst_40108);
var inst_40094 = inst_40120;
var inst_40095 = null;
var inst_40096 = (0);
var inst_40097 = (0);
var state_40155__$1 = (function (){var statearr_40213 = state_40155;
(statearr_40213[(12)] = inst_40119);

(statearr_40213[(13)] = inst_40094);

(statearr_40213[(14)] = inst_40095);

(statearr_40213[(15)] = inst_40096);

(statearr_40213[(16)] = inst_40097);

return statearr_40213;
})();
var statearr_40214_41572 = state_40155__$1;
(statearr_40214_41572[(2)] = null);

(statearr_40214_41572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (3))){
var inst_40153 = (state_40155[(2)]);
var state_40155__$1 = state_40155;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40155__$1,inst_40153);
} else {
if((state_val_40156 === (12))){
var inst_40129 = (state_40155[(2)]);
var state_40155__$1 = state_40155;
var statearr_40215_41573 = state_40155__$1;
(statearr_40215_41573[(2)] = inst_40129);

(statearr_40215_41573[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (2))){
var state_40155__$1 = state_40155;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40155__$1,(4),ch);
} else {
if((state_val_40156 === (23))){
var state_40155__$1 = state_40155;
var statearr_40220_41574 = state_40155__$1;
(statearr_40220_41574[(2)] = null);

(statearr_40220_41574[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (19))){
var inst_40135 = (state_40155[(11)]);
var inst_40084 = (state_40155[(8)]);
var inst_40137 = cljs.core.async.muxch_STAR_(inst_40135);
var state_40155__$1 = state_40155;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40155__$1,(22),inst_40137,inst_40084);
} else {
if((state_val_40156 === (11))){
var inst_40094 = (state_40155[(13)]);
var inst_40108 = (state_40155[(10)]);
var inst_40108__$1 = cljs.core.seq(inst_40094);
var state_40155__$1 = (function (){var statearr_40221 = state_40155;
(statearr_40221[(10)] = inst_40108__$1);

return statearr_40221;
})();
if(inst_40108__$1){
var statearr_40222_41575 = state_40155__$1;
(statearr_40222_41575[(1)] = (13));

} else {
var statearr_40223_41576 = state_40155__$1;
(statearr_40223_41576[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (9))){
var inst_40131 = (state_40155[(2)]);
var state_40155__$1 = state_40155;
var statearr_40224_41577 = state_40155__$1;
(statearr_40224_41577[(2)] = inst_40131);

(statearr_40224_41577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (5))){
var inst_40091 = cljs.core.deref(mults);
var inst_40092 = cljs.core.vals(inst_40091);
var inst_40093 = cljs.core.seq(inst_40092);
var inst_40094 = inst_40093;
var inst_40095 = null;
var inst_40096 = (0);
var inst_40097 = (0);
var state_40155__$1 = (function (){var statearr_40229 = state_40155;
(statearr_40229[(13)] = inst_40094);

(statearr_40229[(14)] = inst_40095);

(statearr_40229[(15)] = inst_40096);

(statearr_40229[(16)] = inst_40097);

return statearr_40229;
})();
var statearr_40232_41578 = state_40155__$1;
(statearr_40232_41578[(2)] = null);

(statearr_40232_41578[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (14))){
var state_40155__$1 = state_40155;
var statearr_40238_41579 = state_40155__$1;
(statearr_40238_41579[(2)] = null);

(statearr_40238_41579[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (16))){
var inst_40108 = (state_40155[(10)]);
var inst_40112 = cljs.core.chunk_first(inst_40108);
var inst_40113 = cljs.core.chunk_rest(inst_40108);
var inst_40114 = cljs.core.count(inst_40112);
var inst_40094 = inst_40113;
var inst_40095 = inst_40112;
var inst_40096 = inst_40114;
var inst_40097 = (0);
var state_40155__$1 = (function (){var statearr_40239 = state_40155;
(statearr_40239[(13)] = inst_40094);

(statearr_40239[(14)] = inst_40095);

(statearr_40239[(15)] = inst_40096);

(statearr_40239[(16)] = inst_40097);

return statearr_40239;
})();
var statearr_40240_41584 = state_40155__$1;
(statearr_40240_41584[(2)] = null);

(statearr_40240_41584[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (10))){
var inst_40095 = (state_40155[(14)]);
var inst_40097 = (state_40155[(16)]);
var inst_40094 = (state_40155[(13)]);
var inst_40096 = (state_40155[(15)]);
var inst_40102 = cljs.core._nth(inst_40095,inst_40097);
var inst_40103 = cljs.core.async.muxch_STAR_(inst_40102);
var inst_40104 = cljs.core.async.close_BANG_(inst_40103);
var inst_40105 = (inst_40097 + (1));
var tmp40234 = inst_40096;
var tmp40235 = inst_40094;
var tmp40236 = inst_40095;
var inst_40094__$1 = tmp40235;
var inst_40095__$1 = tmp40236;
var inst_40096__$1 = tmp40234;
var inst_40097__$1 = inst_40105;
var state_40155__$1 = (function (){var statearr_40241 = state_40155;
(statearr_40241[(17)] = inst_40104);

(statearr_40241[(13)] = inst_40094__$1);

(statearr_40241[(14)] = inst_40095__$1);

(statearr_40241[(15)] = inst_40096__$1);

(statearr_40241[(16)] = inst_40097__$1);

return statearr_40241;
})();
var statearr_40242_41586 = state_40155__$1;
(statearr_40242_41586[(2)] = null);

(statearr_40242_41586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (18))){
var inst_40124 = (state_40155[(2)]);
var state_40155__$1 = state_40155;
var statearr_40243_41587 = state_40155__$1;
(statearr_40243_41587[(2)] = inst_40124);

(statearr_40243_41587[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40156 === (8))){
var inst_40097 = (state_40155[(16)]);
var inst_40096 = (state_40155[(15)]);
var inst_40099 = (inst_40097 < inst_40096);
var inst_40100 = inst_40099;
var state_40155__$1 = state_40155;
if(cljs.core.truth_(inst_40100)){
var statearr_40245_41588 = state_40155__$1;
(statearr_40245_41588[(1)] = (10));

} else {
var statearr_40246_41589 = state_40155__$1;
(statearr_40246_41589[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__38431__auto__ = null;
var cljs$core$async$state_machine__38431__auto____0 = (function (){
var statearr_40248 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40248[(0)] = cljs$core$async$state_machine__38431__auto__);

(statearr_40248[(1)] = (1));

return statearr_40248;
});
var cljs$core$async$state_machine__38431__auto____1 = (function (state_40155){
while(true){
var ret_value__38432__auto__ = (function (){try{while(true){
var result__38433__auto__ = switch__38430__auto__(state_40155);
if(cljs.core.keyword_identical_QMARK_(result__38433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38433__auto__;
}
break;
}
}catch (e40249){var ex__38434__auto__ = e40249;
var statearr_40250_41594 = state_40155;
(statearr_40250_41594[(2)] = ex__38434__auto__);


if(cljs.core.seq((state_40155[(4)]))){
var statearr_40251_41595 = state_40155;
(statearr_40251_41595[(1)] = cljs.core.first((state_40155[(4)])));

} else {
throw ex__38434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41601 = state_40155;
state_40155 = G__41601;
continue;
} else {
return ret_value__38432__auto__;
}
break;
}
});
cljs$core$async$state_machine__38431__auto__ = function(state_40155){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38431__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38431__auto____1.call(this,state_40155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38431__auto____0;
cljs$core$async$state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38431__auto____1;
return cljs$core$async$state_machine__38431__auto__;
})()
})();
var state__38852__auto__ = (function (){var statearr_40252 = f__38851__auto__();
(statearr_40252[(6)] = c__38850__auto___41552);

return statearr_40252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38852__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__40254 = arguments.length;
switch (G__40254) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__40261 = arguments.length;
switch (G__40261) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__40263 = arguments.length;
switch (G__40263) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__38850__auto___41609 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38851__auto__ = (function (){var switch__38430__auto__ = (function (state_40308){
var state_val_40312 = (state_40308[(1)]);
if((state_val_40312 === (7))){
var state_40308__$1 = state_40308;
var statearr_40315_41610 = state_40308__$1;
(statearr_40315_41610[(2)] = null);

(statearr_40315_41610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40312 === (1))){
var state_40308__$1 = state_40308;
var statearr_40316_41611 = state_40308__$1;
(statearr_40316_41611[(2)] = null);

(statearr_40316_41611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40312 === (4))){
var inst_40267 = (state_40308[(7)]);
var inst_40266 = (state_40308[(8)]);
var inst_40269 = (inst_40267 < inst_40266);
var state_40308__$1 = state_40308;
if(cljs.core.truth_(inst_40269)){
var statearr_40318_41612 = state_40308__$1;
(statearr_40318_41612[(1)] = (6));

} else {
var statearr_40319_41613 = state_40308__$1;
(statearr_40319_41613[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40312 === (15))){
var inst_40292 = (state_40308[(9)]);
var inst_40297 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_40292);
var state_40308__$1 = state_40308;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40308__$1,(17),out,inst_40297);
} else {
if((state_val_40312 === (13))){
var inst_40292 = (state_40308[(9)]);
var inst_40292__$1 = (state_40308[(2)]);
var inst_40293 = cljs.core.some(cljs.core.nil_QMARK_,inst_40292__$1);
var state_40308__$1 = (function (){var statearr_40324 = state_40308;
(statearr_40324[(9)] = inst_40292__$1);

return statearr_40324;
})();
if(cljs.core.truth_(inst_40293)){
var statearr_40325_41614 = state_40308__$1;
(statearr_40325_41614[(1)] = (14));

} else {
var statearr_40326_41615 = state_40308__$1;
(statearr_40326_41615[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40312 === (6))){
var state_40308__$1 = state_40308;
var statearr_40327_41616 = state_40308__$1;
(statearr_40327_41616[(2)] = null);

(statearr_40327_41616[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40312 === (17))){
var inst_40299 = (state_40308[(2)]);
var state_40308__$1 = (function (){var statearr_40329 = state_40308;
(statearr_40329[(10)] = inst_40299);

return statearr_40329;
})();
var statearr_40330_41617 = state_40308__$1;
(statearr_40330_41617[(2)] = null);

(statearr_40330_41617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40312 === (3))){
var inst_40304 = (state_40308[(2)]);
var state_40308__$1 = state_40308;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40308__$1,inst_40304);
} else {
if((state_val_40312 === (12))){
var _ = (function (){var statearr_40331 = state_40308;
(statearr_40331[(4)] = cljs.core.rest((state_40308[(4)])));

return statearr_40331;
})();
var state_40308__$1 = state_40308;
var ex40328 = (state_40308__$1[(2)]);
var statearr_40332_41618 = state_40308__$1;
(statearr_40332_41618[(5)] = ex40328);


if((ex40328 instanceof Object)){
var statearr_40333_41619 = state_40308__$1;
(statearr_40333_41619[(1)] = (11));

(statearr_40333_41619[(5)] = null);

} else {
throw ex40328;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40312 === (2))){
var inst_40265 = cljs.core.reset_BANG_(dctr,cnt);
var inst_40266 = cnt;
var inst_40267 = (0);
var state_40308__$1 = (function (){var statearr_40338 = state_40308;
(statearr_40338[(11)] = inst_40265);

(statearr_40338[(8)] = inst_40266);

(statearr_40338[(7)] = inst_40267);

return statearr_40338;
})();
var statearr_40339_41620 = state_40308__$1;
(statearr_40339_41620[(2)] = null);

(statearr_40339_41620[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40312 === (11))){
var inst_40271 = (state_40308[(2)]);
var inst_40272 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_40308__$1 = (function (){var statearr_40341 = state_40308;
(statearr_40341[(12)] = inst_40271);

return statearr_40341;
})();
var statearr_40345_41621 = state_40308__$1;
(statearr_40345_41621[(2)] = inst_40272);

(statearr_40345_41621[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40312 === (9))){
var inst_40267 = (state_40308[(7)]);
var _ = (function (){var statearr_40346 = state_40308;
(statearr_40346[(4)] = cljs.core.cons((12),(state_40308[(4)])));

return statearr_40346;
})();
var inst_40278 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_40267) : chs__$1.call(null,inst_40267));
var inst_40279 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_40267) : done.call(null,inst_40267));
var inst_40280 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_40278,inst_40279);
var ___$1 = (function (){var statearr_40347 = state_40308;
(statearr_40347[(4)] = cljs.core.rest((state_40308[(4)])));

return statearr_40347;
})();
var state_40308__$1 = state_40308;
var statearr_40348_41622 = state_40308__$1;
(statearr_40348_41622[(2)] = inst_40280);

(statearr_40348_41622[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40312 === (5))){
var inst_40290 = (state_40308[(2)]);
var state_40308__$1 = (function (){var statearr_40349 = state_40308;
(statearr_40349[(13)] = inst_40290);

return statearr_40349;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40308__$1,(13),dchan);
} else {
if((state_val_40312 === (14))){
var inst_40295 = cljs.core.async.close_BANG_(out);
var state_40308__$1 = state_40308;
var statearr_40350_41623 = state_40308__$1;
(statearr_40350_41623[(2)] = inst_40295);

(statearr_40350_41623[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40312 === (16))){
var inst_40302 = (state_40308[(2)]);
var state_40308__$1 = state_40308;
var statearr_40351_41624 = state_40308__$1;
(statearr_40351_41624[(2)] = inst_40302);

(statearr_40351_41624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40312 === (10))){
var inst_40267 = (state_40308[(7)]);
var inst_40283 = (state_40308[(2)]);
var inst_40284 = (inst_40267 + (1));
var inst_40267__$1 = inst_40284;
var state_40308__$1 = (function (){var statearr_40352 = state_40308;
(statearr_40352[(14)] = inst_40283);

(statearr_40352[(7)] = inst_40267__$1);

return statearr_40352;
})();
var statearr_40353_41625 = state_40308__$1;
(statearr_40353_41625[(2)] = null);

(statearr_40353_41625[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40312 === (8))){
var inst_40288 = (state_40308[(2)]);
var state_40308__$1 = state_40308;
var statearr_40354_41626 = state_40308__$1;
(statearr_40354_41626[(2)] = inst_40288);

(statearr_40354_41626[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__38431__auto__ = null;
var cljs$core$async$state_machine__38431__auto____0 = (function (){
var statearr_40360 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40360[(0)] = cljs$core$async$state_machine__38431__auto__);

(statearr_40360[(1)] = (1));

return statearr_40360;
});
var cljs$core$async$state_machine__38431__auto____1 = (function (state_40308){
while(true){
var ret_value__38432__auto__ = (function (){try{while(true){
var result__38433__auto__ = switch__38430__auto__(state_40308);
if(cljs.core.keyword_identical_QMARK_(result__38433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38433__auto__;
}
break;
}
}catch (e40361){var ex__38434__auto__ = e40361;
var statearr_40362_41628 = state_40308;
(statearr_40362_41628[(2)] = ex__38434__auto__);


if(cljs.core.seq((state_40308[(4)]))){
var statearr_40363_41629 = state_40308;
(statearr_40363_41629[(1)] = cljs.core.first((state_40308[(4)])));

} else {
throw ex__38434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41630 = state_40308;
state_40308 = G__41630;
continue;
} else {
return ret_value__38432__auto__;
}
break;
}
});
cljs$core$async$state_machine__38431__auto__ = function(state_40308){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38431__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38431__auto____1.call(this,state_40308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38431__auto____0;
cljs$core$async$state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38431__auto____1;
return cljs$core$async$state_machine__38431__auto__;
})()
})();
var state__38852__auto__ = (function (){var statearr_40364 = f__38851__auto__();
(statearr_40364[(6)] = c__38850__auto___41609);

return statearr_40364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38852__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__40367 = arguments.length;
switch (G__40367) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38850__auto___41635 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38851__auto__ = (function (){var switch__38430__auto__ = (function (state_40399){
var state_val_40400 = (state_40399[(1)]);
if((state_val_40400 === (7))){
var inst_40378 = (state_40399[(7)]);
var inst_40379 = (state_40399[(8)]);
var inst_40378__$1 = (state_40399[(2)]);
var inst_40379__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40378__$1,(0),null);
var inst_40380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_40378__$1,(1),null);
var inst_40381 = (inst_40379__$1 == null);
var state_40399__$1 = (function (){var statearr_40401 = state_40399;
(statearr_40401[(7)] = inst_40378__$1);

(statearr_40401[(8)] = inst_40379__$1);

(statearr_40401[(9)] = inst_40380);

return statearr_40401;
})();
if(cljs.core.truth_(inst_40381)){
var statearr_40402_41636 = state_40399__$1;
(statearr_40402_41636[(1)] = (8));

} else {
var statearr_40403_41637 = state_40399__$1;
(statearr_40403_41637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40400 === (1))){
var inst_40368 = cljs.core.vec(chs);
var inst_40369 = inst_40368;
var state_40399__$1 = (function (){var statearr_40404 = state_40399;
(statearr_40404[(10)] = inst_40369);

return statearr_40404;
})();
var statearr_40405_41638 = state_40399__$1;
(statearr_40405_41638[(2)] = null);

(statearr_40405_41638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40400 === (4))){
var inst_40369 = (state_40399[(10)]);
var state_40399__$1 = state_40399;
return cljs.core.async.ioc_alts_BANG_(state_40399__$1,(7),inst_40369);
} else {
if((state_val_40400 === (6))){
var inst_40395 = (state_40399[(2)]);
var state_40399__$1 = state_40399;
var statearr_40406_41639 = state_40399__$1;
(statearr_40406_41639[(2)] = inst_40395);

(statearr_40406_41639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40400 === (3))){
var inst_40397 = (state_40399[(2)]);
var state_40399__$1 = state_40399;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40399__$1,inst_40397);
} else {
if((state_val_40400 === (2))){
var inst_40369 = (state_40399[(10)]);
var inst_40371 = cljs.core.count(inst_40369);
var inst_40372 = (inst_40371 > (0));
var state_40399__$1 = state_40399;
if(cljs.core.truth_(inst_40372)){
var statearr_40408_41640 = state_40399__$1;
(statearr_40408_41640[(1)] = (4));

} else {
var statearr_40409_41641 = state_40399__$1;
(statearr_40409_41641[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40400 === (11))){
var inst_40369 = (state_40399[(10)]);
var inst_40388 = (state_40399[(2)]);
var tmp40407 = inst_40369;
var inst_40369__$1 = tmp40407;
var state_40399__$1 = (function (){var statearr_40410 = state_40399;
(statearr_40410[(11)] = inst_40388);

(statearr_40410[(10)] = inst_40369__$1);

return statearr_40410;
})();
var statearr_40411_41642 = state_40399__$1;
(statearr_40411_41642[(2)] = null);

(statearr_40411_41642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40400 === (9))){
var inst_40379 = (state_40399[(8)]);
var state_40399__$1 = state_40399;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40399__$1,(11),out,inst_40379);
} else {
if((state_val_40400 === (5))){
var inst_40393 = cljs.core.async.close_BANG_(out);
var state_40399__$1 = state_40399;
var statearr_40412_41643 = state_40399__$1;
(statearr_40412_41643[(2)] = inst_40393);

(statearr_40412_41643[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40400 === (10))){
var inst_40391 = (state_40399[(2)]);
var state_40399__$1 = state_40399;
var statearr_40413_41644 = state_40399__$1;
(statearr_40413_41644[(2)] = inst_40391);

(statearr_40413_41644[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40400 === (8))){
var inst_40369 = (state_40399[(10)]);
var inst_40378 = (state_40399[(7)]);
var inst_40379 = (state_40399[(8)]);
var inst_40380 = (state_40399[(9)]);
var inst_40383 = (function (){var cs = inst_40369;
var vec__40374 = inst_40378;
var v = inst_40379;
var c = inst_40380;
return (function (p1__40365_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__40365_SHARP_);
});
})();
var inst_40384 = cljs.core.filterv(inst_40383,inst_40369);
var inst_40369__$1 = inst_40384;
var state_40399__$1 = (function (){var statearr_40415 = state_40399;
(statearr_40415[(10)] = inst_40369__$1);

return statearr_40415;
})();
var statearr_40416_41646 = state_40399__$1;
(statearr_40416_41646[(2)] = null);

(statearr_40416_41646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__38431__auto__ = null;
var cljs$core$async$state_machine__38431__auto____0 = (function (){
var statearr_40417 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40417[(0)] = cljs$core$async$state_machine__38431__auto__);

(statearr_40417[(1)] = (1));

return statearr_40417;
});
var cljs$core$async$state_machine__38431__auto____1 = (function (state_40399){
while(true){
var ret_value__38432__auto__ = (function (){try{while(true){
var result__38433__auto__ = switch__38430__auto__(state_40399);
if(cljs.core.keyword_identical_QMARK_(result__38433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38433__auto__;
}
break;
}
}catch (e40418){var ex__38434__auto__ = e40418;
var statearr_40419_41654 = state_40399;
(statearr_40419_41654[(2)] = ex__38434__auto__);


if(cljs.core.seq((state_40399[(4)]))){
var statearr_40420_41655 = state_40399;
(statearr_40420_41655[(1)] = cljs.core.first((state_40399[(4)])));

} else {
throw ex__38434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41656 = state_40399;
state_40399 = G__41656;
continue;
} else {
return ret_value__38432__auto__;
}
break;
}
});
cljs$core$async$state_machine__38431__auto__ = function(state_40399){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38431__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38431__auto____1.call(this,state_40399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38431__auto____0;
cljs$core$async$state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38431__auto____1;
return cljs$core$async$state_machine__38431__auto__;
})()
})();
var state__38852__auto__ = (function (){var statearr_40421 = f__38851__auto__();
(statearr_40421[(6)] = c__38850__auto___41635);

return statearr_40421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38852__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__40423 = arguments.length;
switch (G__40423) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38850__auto___41659 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38851__auto__ = (function (){var switch__38430__auto__ = (function (state_40454){
var state_val_40455 = (state_40454[(1)]);
if((state_val_40455 === (7))){
var inst_40432 = (state_40454[(7)]);
var inst_40432__$1 = (state_40454[(2)]);
var inst_40433 = (inst_40432__$1 == null);
var inst_40434 = cljs.core.not(inst_40433);
var state_40454__$1 = (function (){var statearr_40464 = state_40454;
(statearr_40464[(7)] = inst_40432__$1);

return statearr_40464;
})();
if(inst_40434){
var statearr_40485_41665 = state_40454__$1;
(statearr_40485_41665[(1)] = (8));

} else {
var statearr_40492_41666 = state_40454__$1;
(statearr_40492_41666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40455 === (1))){
var inst_40427 = (0);
var state_40454__$1 = (function (){var statearr_40493 = state_40454;
(statearr_40493[(8)] = inst_40427);

return statearr_40493;
})();
var statearr_40494_41667 = state_40454__$1;
(statearr_40494_41667[(2)] = null);

(statearr_40494_41667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40455 === (4))){
var state_40454__$1 = state_40454;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40454__$1,(7),ch);
} else {
if((state_val_40455 === (6))){
var inst_40449 = (state_40454[(2)]);
var state_40454__$1 = state_40454;
var statearr_40501_41675 = state_40454__$1;
(statearr_40501_41675[(2)] = inst_40449);

(statearr_40501_41675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40455 === (3))){
var inst_40451 = (state_40454[(2)]);
var inst_40452 = cljs.core.async.close_BANG_(out);
var state_40454__$1 = (function (){var statearr_40502 = state_40454;
(statearr_40502[(9)] = inst_40451);

return statearr_40502;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40454__$1,inst_40452);
} else {
if((state_val_40455 === (2))){
var inst_40427 = (state_40454[(8)]);
var inst_40429 = (inst_40427 < n);
var state_40454__$1 = state_40454;
if(cljs.core.truth_(inst_40429)){
var statearr_40505_41679 = state_40454__$1;
(statearr_40505_41679[(1)] = (4));

} else {
var statearr_40506_41680 = state_40454__$1;
(statearr_40506_41680[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40455 === (11))){
var inst_40427 = (state_40454[(8)]);
var inst_40437 = (state_40454[(2)]);
var inst_40442 = (inst_40427 + (1));
var inst_40427__$1 = inst_40442;
var state_40454__$1 = (function (){var statearr_40507 = state_40454;
(statearr_40507[(10)] = inst_40437);

(statearr_40507[(8)] = inst_40427__$1);

return statearr_40507;
})();
var statearr_40509_41685 = state_40454__$1;
(statearr_40509_41685[(2)] = null);

(statearr_40509_41685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40455 === (9))){
var state_40454__$1 = state_40454;
var statearr_40510_41690 = state_40454__$1;
(statearr_40510_41690[(2)] = null);

(statearr_40510_41690[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40455 === (5))){
var state_40454__$1 = state_40454;
var statearr_40511_41691 = state_40454__$1;
(statearr_40511_41691[(2)] = null);

(statearr_40511_41691[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40455 === (10))){
var inst_40446 = (state_40454[(2)]);
var state_40454__$1 = state_40454;
var statearr_40512_41692 = state_40454__$1;
(statearr_40512_41692[(2)] = inst_40446);

(statearr_40512_41692[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40455 === (8))){
var inst_40432 = (state_40454[(7)]);
var state_40454__$1 = state_40454;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40454__$1,(11),out,inst_40432);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__38431__auto__ = null;
var cljs$core$async$state_machine__38431__auto____0 = (function (){
var statearr_40513 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40513[(0)] = cljs$core$async$state_machine__38431__auto__);

(statearr_40513[(1)] = (1));

return statearr_40513;
});
var cljs$core$async$state_machine__38431__auto____1 = (function (state_40454){
while(true){
var ret_value__38432__auto__ = (function (){try{while(true){
var result__38433__auto__ = switch__38430__auto__(state_40454);
if(cljs.core.keyword_identical_QMARK_(result__38433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38433__auto__;
}
break;
}
}catch (e40514){var ex__38434__auto__ = e40514;
var statearr_40515_41697 = state_40454;
(statearr_40515_41697[(2)] = ex__38434__auto__);


if(cljs.core.seq((state_40454[(4)]))){
var statearr_40516_41698 = state_40454;
(statearr_40516_41698[(1)] = cljs.core.first((state_40454[(4)])));

} else {
throw ex__38434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41710 = state_40454;
state_40454 = G__41710;
continue;
} else {
return ret_value__38432__auto__;
}
break;
}
});
cljs$core$async$state_machine__38431__auto__ = function(state_40454){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38431__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38431__auto____1.call(this,state_40454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38431__auto____0;
cljs$core$async$state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38431__auto____1;
return cljs$core$async$state_machine__38431__auto__;
})()
})();
var state__38852__auto__ = (function (){var statearr_40520 = f__38851__auto__();
(statearr_40520[(6)] = c__38850__auto___41659);

return statearr_40520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38852__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40525 = (function (f,ch,meta40523,_,fn1,meta40526){
this.f = f;
this.ch = ch;
this.meta40523 = meta40523;
this._ = _;
this.fn1 = fn1;
this.meta40526 = meta40526;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40527,meta40526__$1){
var self__ = this;
var _40527__$1 = this;
return (new cljs.core.async.t_cljs$core$async40525(self__.f,self__.ch,self__.meta40523,self__._,self__.fn1,meta40526__$1));
}));

(cljs.core.async.t_cljs$core$async40525.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40527){
var self__ = this;
var _40527__$1 = this;
return self__.meta40526;
}));

(cljs.core.async.t_cljs$core$async40525.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40525.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async40525.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40525.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__40521_SHARP_){
var G__40536 = (((p1__40521_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__40521_SHARP_) : self__.f.call(null,p1__40521_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__40536) : f1.call(null,G__40536));
});
}));

(cljs.core.async.t_cljs$core$async40525.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40523","meta40523",1648959230,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async40522","cljs.core.async/t_cljs$core$async40522",-1075258536,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40526","meta40526",743304492,null)], null);
}));

(cljs.core.async.t_cljs$core$async40525.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40525.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40525");

(cljs.core.async.t_cljs$core$async40525.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async40525");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40525.
 */
cljs.core.async.__GT_t_cljs$core$async40525 = (function cljs$core$async$__GT_t_cljs$core$async40525(f,ch,meta40523,_,fn1,meta40526){
return (new cljs.core.async.t_cljs$core$async40525(f,ch,meta40523,_,fn1,meta40526));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40522 = (function (f,ch,meta40523){
this.f = f;
this.ch = ch;
this.meta40523 = meta40523;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40524,meta40523__$1){
var self__ = this;
var _40524__$1 = this;
return (new cljs.core.async.t_cljs$core$async40522(self__.f,self__.ch,meta40523__$1));
}));

(cljs.core.async.t_cljs$core$async40522.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40524){
var self__ = this;
var _40524__$1 = this;
return self__.meta40523;
}));

(cljs.core.async.t_cljs$core$async40522.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40522.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40522.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40522.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40522.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async40525(self__.f,self__.ch,self__.meta40523,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__40540 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__40540) : self__.f.call(null,G__40540));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async40522.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40522.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async40522.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40523","meta40523",1648959230,null)], null);
}));

(cljs.core.async.t_cljs$core$async40522.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40522.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40522");

(cljs.core.async.t_cljs$core$async40522.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async40522");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40522.
 */
cljs.core.async.__GT_t_cljs$core$async40522 = (function cljs$core$async$__GT_t_cljs$core$async40522(f,ch,meta40523){
return (new cljs.core.async.t_cljs$core$async40522(f,ch,meta40523));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async40522(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40541 = (function (f,ch,meta40542){
this.f = f;
this.ch = ch;
this.meta40542 = meta40542;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40543,meta40542__$1){
var self__ = this;
var _40543__$1 = this;
return (new cljs.core.async.t_cljs$core$async40541(self__.f,self__.ch,meta40542__$1));
}));

(cljs.core.async.t_cljs$core$async40541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40543){
var self__ = this;
var _40543__$1 = this;
return self__.meta40542;
}));

(cljs.core.async.t_cljs$core$async40541.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40541.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40541.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40541.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async40541.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40541.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async40541.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40542","meta40542",-2062199349,null)], null);
}));

(cljs.core.async.t_cljs$core$async40541.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40541.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40541");

(cljs.core.async.t_cljs$core$async40541.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async40541");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40541.
 */
cljs.core.async.__GT_t_cljs$core$async40541 = (function cljs$core$async$__GT_t_cljs$core$async40541(f,ch,meta40542){
return (new cljs.core.async.t_cljs$core$async40541(f,ch,meta40542));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async40541(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40544 = (function (p,ch,meta40545){
this.p = p;
this.ch = ch;
this.meta40545 = meta40545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40546,meta40545__$1){
var self__ = this;
var _40546__$1 = this;
return (new cljs.core.async.t_cljs$core$async40544(self__.p,self__.ch,meta40545__$1));
}));

(cljs.core.async.t_cljs$core$async40544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40546){
var self__ = this;
var _40546__$1 = this;
return self__.meta40545;
}));

(cljs.core.async.t_cljs$core$async40544.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40544.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40544.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async40544.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40544.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async40544.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40544.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async40544.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40545","meta40545",812921666,null)], null);
}));

(cljs.core.async.t_cljs$core$async40544.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40544.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40544");

(cljs.core.async.t_cljs$core$async40544.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async40544");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40544.
 */
cljs.core.async.__GT_t_cljs$core$async40544 = (function cljs$core$async$__GT_t_cljs$core$async40544(p,ch,meta40545){
return (new cljs.core.async.t_cljs$core$async40544(p,ch,meta40545));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async40544(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__40550 = arguments.length;
switch (G__40550) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38850__auto___41763 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38851__auto__ = (function (){var switch__38430__auto__ = (function (state_40574){
var state_val_40575 = (state_40574[(1)]);
if((state_val_40575 === (7))){
var inst_40570 = (state_40574[(2)]);
var state_40574__$1 = state_40574;
var statearr_40577_41802 = state_40574__$1;
(statearr_40577_41802[(2)] = inst_40570);

(statearr_40577_41802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40575 === (1))){
var state_40574__$1 = state_40574;
var statearr_40578_41803 = state_40574__$1;
(statearr_40578_41803[(2)] = null);

(statearr_40578_41803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40575 === (4))){
var inst_40556 = (state_40574[(7)]);
var inst_40556__$1 = (state_40574[(2)]);
var inst_40557 = (inst_40556__$1 == null);
var state_40574__$1 = (function (){var statearr_40580 = state_40574;
(statearr_40580[(7)] = inst_40556__$1);

return statearr_40580;
})();
if(cljs.core.truth_(inst_40557)){
var statearr_40582_41853 = state_40574__$1;
(statearr_40582_41853[(1)] = (5));

} else {
var statearr_40583_41854 = state_40574__$1;
(statearr_40583_41854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40575 === (6))){
var inst_40556 = (state_40574[(7)]);
var inst_40561 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_40556) : p.call(null,inst_40556));
var state_40574__$1 = state_40574;
if(cljs.core.truth_(inst_40561)){
var statearr_40584_41855 = state_40574__$1;
(statearr_40584_41855[(1)] = (8));

} else {
var statearr_40585_41856 = state_40574__$1;
(statearr_40585_41856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40575 === (3))){
var inst_40572 = (state_40574[(2)]);
var state_40574__$1 = state_40574;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40574__$1,inst_40572);
} else {
if((state_val_40575 === (2))){
var state_40574__$1 = state_40574;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40574__$1,(4),ch);
} else {
if((state_val_40575 === (11))){
var inst_40564 = (state_40574[(2)]);
var state_40574__$1 = state_40574;
var statearr_40586_41857 = state_40574__$1;
(statearr_40586_41857[(2)] = inst_40564);

(statearr_40586_41857[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40575 === (9))){
var state_40574__$1 = state_40574;
var statearr_40587_41858 = state_40574__$1;
(statearr_40587_41858[(2)] = null);

(statearr_40587_41858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40575 === (5))){
var inst_40559 = cljs.core.async.close_BANG_(out);
var state_40574__$1 = state_40574;
var statearr_40588_41859 = state_40574__$1;
(statearr_40588_41859[(2)] = inst_40559);

(statearr_40588_41859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40575 === (10))){
var inst_40567 = (state_40574[(2)]);
var state_40574__$1 = (function (){var statearr_40589 = state_40574;
(statearr_40589[(8)] = inst_40567);

return statearr_40589;
})();
var statearr_40590_41860 = state_40574__$1;
(statearr_40590_41860[(2)] = null);

(statearr_40590_41860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40575 === (8))){
var inst_40556 = (state_40574[(7)]);
var state_40574__$1 = state_40574;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40574__$1,(11),out,inst_40556);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__38431__auto__ = null;
var cljs$core$async$state_machine__38431__auto____0 = (function (){
var statearr_40594 = [null,null,null,null,null,null,null,null,null];
(statearr_40594[(0)] = cljs$core$async$state_machine__38431__auto__);

(statearr_40594[(1)] = (1));

return statearr_40594;
});
var cljs$core$async$state_machine__38431__auto____1 = (function (state_40574){
while(true){
var ret_value__38432__auto__ = (function (){try{while(true){
var result__38433__auto__ = switch__38430__auto__(state_40574);
if(cljs.core.keyword_identical_QMARK_(result__38433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38433__auto__;
}
break;
}
}catch (e40595){var ex__38434__auto__ = e40595;
var statearr_40596_41861 = state_40574;
(statearr_40596_41861[(2)] = ex__38434__auto__);


if(cljs.core.seq((state_40574[(4)]))){
var statearr_40597_41863 = state_40574;
(statearr_40597_41863[(1)] = cljs.core.first((state_40574[(4)])));

} else {
throw ex__38434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41864 = state_40574;
state_40574 = G__41864;
continue;
} else {
return ret_value__38432__auto__;
}
break;
}
});
cljs$core$async$state_machine__38431__auto__ = function(state_40574){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38431__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38431__auto____1.call(this,state_40574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38431__auto____0;
cljs$core$async$state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38431__auto____1;
return cljs$core$async$state_machine__38431__auto__;
})()
})();
var state__38852__auto__ = (function (){var statearr_40605 = f__38851__auto__();
(statearr_40605[(6)] = c__38850__auto___41763);

return statearr_40605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38852__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__40613 = arguments.length;
switch (G__40613) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__38850__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38851__auto__ = (function (){var switch__38430__auto__ = (function (state_40702){
var state_val_40703 = (state_40702[(1)]);
if((state_val_40703 === (7))){
var inst_40698 = (state_40702[(2)]);
var state_40702__$1 = state_40702;
var statearr_40706_41870 = state_40702__$1;
(statearr_40706_41870[(2)] = inst_40698);

(statearr_40706_41870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40703 === (20))){
var inst_40668 = (state_40702[(7)]);
var inst_40679 = (state_40702[(2)]);
var inst_40680 = cljs.core.next(inst_40668);
var inst_40650 = inst_40680;
var inst_40651 = null;
var inst_40652 = (0);
var inst_40653 = (0);
var state_40702__$1 = (function (){var statearr_40707 = state_40702;
(statearr_40707[(8)] = inst_40679);

(statearr_40707[(9)] = inst_40650);

(statearr_40707[(10)] = inst_40651);

(statearr_40707[(11)] = inst_40652);

(statearr_40707[(12)] = inst_40653);

return statearr_40707;
})();
var statearr_40708_41871 = state_40702__$1;
(statearr_40708_41871[(2)] = null);

(statearr_40708_41871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40703 === (1))){
var state_40702__$1 = state_40702;
var statearr_40709_41872 = state_40702__$1;
(statearr_40709_41872[(2)] = null);

(statearr_40709_41872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40703 === (4))){
var inst_40636 = (state_40702[(13)]);
var inst_40636__$1 = (state_40702[(2)]);
var inst_40637 = (inst_40636__$1 == null);
var state_40702__$1 = (function (){var statearr_40710 = state_40702;
(statearr_40710[(13)] = inst_40636__$1);

return statearr_40710;
})();
if(cljs.core.truth_(inst_40637)){
var statearr_40711_41879 = state_40702__$1;
(statearr_40711_41879[(1)] = (5));

} else {
var statearr_40712_41880 = state_40702__$1;
(statearr_40712_41880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40703 === (15))){
var state_40702__$1 = state_40702;
var statearr_40716_41892 = state_40702__$1;
(statearr_40716_41892[(2)] = null);

(statearr_40716_41892[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40703 === (21))){
var state_40702__$1 = state_40702;
var statearr_40717_41898 = state_40702__$1;
(statearr_40717_41898[(2)] = null);

(statearr_40717_41898[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40703 === (13))){
var inst_40653 = (state_40702[(12)]);
var inst_40650 = (state_40702[(9)]);
var inst_40651 = (state_40702[(10)]);
var inst_40652 = (state_40702[(11)]);
var inst_40664 = (state_40702[(2)]);
var inst_40665 = (inst_40653 + (1));
var tmp40713 = inst_40651;
var tmp40714 = inst_40650;
var tmp40715 = inst_40652;
var inst_40650__$1 = tmp40714;
var inst_40651__$1 = tmp40713;
var inst_40652__$1 = tmp40715;
var inst_40653__$1 = inst_40665;
var state_40702__$1 = (function (){var statearr_40718 = state_40702;
(statearr_40718[(14)] = inst_40664);

(statearr_40718[(9)] = inst_40650__$1);

(statearr_40718[(10)] = inst_40651__$1);

(statearr_40718[(11)] = inst_40652__$1);

(statearr_40718[(12)] = inst_40653__$1);

return statearr_40718;
})();
var statearr_40719_41931 = state_40702__$1;
(statearr_40719_41931[(2)] = null);

(statearr_40719_41931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40703 === (22))){
var state_40702__$1 = state_40702;
var statearr_40720_41932 = state_40702__$1;
(statearr_40720_41932[(2)] = null);

(statearr_40720_41932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40703 === (6))){
var inst_40636 = (state_40702[(13)]);
var inst_40648 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40636) : f.call(null,inst_40636));
var inst_40649 = cljs.core.seq(inst_40648);
var inst_40650 = inst_40649;
var inst_40651 = null;
var inst_40652 = (0);
var inst_40653 = (0);
var state_40702__$1 = (function (){var statearr_40721 = state_40702;
(statearr_40721[(9)] = inst_40650);

(statearr_40721[(10)] = inst_40651);

(statearr_40721[(11)] = inst_40652);

(statearr_40721[(12)] = inst_40653);

return statearr_40721;
})();
var statearr_40722_41933 = state_40702__$1;
(statearr_40722_41933[(2)] = null);

(statearr_40722_41933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40703 === (17))){
var inst_40668 = (state_40702[(7)]);
var inst_40672 = cljs.core.chunk_first(inst_40668);
var inst_40673 = cljs.core.chunk_rest(inst_40668);
var inst_40674 = cljs.core.count(inst_40672);
var inst_40650 = inst_40673;
var inst_40651 = inst_40672;
var inst_40652 = inst_40674;
var inst_40653 = (0);
var state_40702__$1 = (function (){var statearr_40723 = state_40702;
(statearr_40723[(9)] = inst_40650);

(statearr_40723[(10)] = inst_40651);

(statearr_40723[(11)] = inst_40652);

(statearr_40723[(12)] = inst_40653);

return statearr_40723;
})();
var statearr_40724_41938 = state_40702__$1;
(statearr_40724_41938[(2)] = null);

(statearr_40724_41938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40703 === (3))){
var inst_40700 = (state_40702[(2)]);
var state_40702__$1 = state_40702;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40702__$1,inst_40700);
} else {
if((state_val_40703 === (12))){
var inst_40688 = (state_40702[(2)]);
var state_40702__$1 = state_40702;
var statearr_40725_41951 = state_40702__$1;
(statearr_40725_41951[(2)] = inst_40688);

(statearr_40725_41951[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40703 === (2))){
var state_40702__$1 = state_40702;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40702__$1,(4),in$);
} else {
if((state_val_40703 === (23))){
var inst_40696 = (state_40702[(2)]);
var state_40702__$1 = state_40702;
var statearr_40726_41959 = state_40702__$1;
(statearr_40726_41959[(2)] = inst_40696);

(statearr_40726_41959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40703 === (19))){
var inst_40683 = (state_40702[(2)]);
var state_40702__$1 = state_40702;
var statearr_40727_41960 = state_40702__$1;
(statearr_40727_41960[(2)] = inst_40683);

(statearr_40727_41960[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40703 === (11))){
var inst_40650 = (state_40702[(9)]);
var inst_40668 = (state_40702[(7)]);
var inst_40668__$1 = cljs.core.seq(inst_40650);
var state_40702__$1 = (function (){var statearr_40728 = state_40702;
(statearr_40728[(7)] = inst_40668__$1);

return statearr_40728;
})();
if(inst_40668__$1){
var statearr_40729_41963 = state_40702__$1;
(statearr_40729_41963[(1)] = (14));

} else {
var statearr_40730_41966 = state_40702__$1;
(statearr_40730_41966[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40703 === (9))){
var inst_40690 = (state_40702[(2)]);
var inst_40691 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_40702__$1 = (function (){var statearr_40731 = state_40702;
(statearr_40731[(15)] = inst_40690);

return statearr_40731;
})();
if(cljs.core.truth_(inst_40691)){
var statearr_40732_41967 = state_40702__$1;
(statearr_40732_41967[(1)] = (21));

} else {
var statearr_40733_41968 = state_40702__$1;
(statearr_40733_41968[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40703 === (5))){
var inst_40639 = cljs.core.async.close_BANG_(out);
var state_40702__$1 = state_40702;
var statearr_40734_41969 = state_40702__$1;
(statearr_40734_41969[(2)] = inst_40639);

(statearr_40734_41969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40703 === (14))){
var inst_40668 = (state_40702[(7)]);
var inst_40670 = cljs.core.chunked_seq_QMARK_(inst_40668);
var state_40702__$1 = state_40702;
if(inst_40670){
var statearr_40735_41970 = state_40702__$1;
(statearr_40735_41970[(1)] = (17));

} else {
var statearr_40736_41971 = state_40702__$1;
(statearr_40736_41971[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40703 === (16))){
var inst_40686 = (state_40702[(2)]);
var state_40702__$1 = state_40702;
var statearr_40737_41972 = state_40702__$1;
(statearr_40737_41972[(2)] = inst_40686);

(statearr_40737_41972[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40703 === (10))){
var inst_40651 = (state_40702[(10)]);
var inst_40653 = (state_40702[(12)]);
var inst_40658 = cljs.core._nth(inst_40651,inst_40653);
var state_40702__$1 = state_40702;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40702__$1,(13),out,inst_40658);
} else {
if((state_val_40703 === (18))){
var inst_40668 = (state_40702[(7)]);
var inst_40677 = cljs.core.first(inst_40668);
var state_40702__$1 = state_40702;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40702__$1,(20),out,inst_40677);
} else {
if((state_val_40703 === (8))){
var inst_40653 = (state_40702[(12)]);
var inst_40652 = (state_40702[(11)]);
var inst_40655 = (inst_40653 < inst_40652);
var inst_40656 = inst_40655;
var state_40702__$1 = state_40702;
if(cljs.core.truth_(inst_40656)){
var statearr_40738_41973 = state_40702__$1;
(statearr_40738_41973[(1)] = (10));

} else {
var statearr_40739_41974 = state_40702__$1;
(statearr_40739_41974[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__38431__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__38431__auto____0 = (function (){
var statearr_40740 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40740[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__38431__auto__);

(statearr_40740[(1)] = (1));

return statearr_40740;
});
var cljs$core$async$mapcat_STAR__$_state_machine__38431__auto____1 = (function (state_40702){
while(true){
var ret_value__38432__auto__ = (function (){try{while(true){
var result__38433__auto__ = switch__38430__auto__(state_40702);
if(cljs.core.keyword_identical_QMARK_(result__38433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38433__auto__;
}
break;
}
}catch (e40741){var ex__38434__auto__ = e40741;
var statearr_40742_41975 = state_40702;
(statearr_40742_41975[(2)] = ex__38434__auto__);


if(cljs.core.seq((state_40702[(4)]))){
var statearr_40743_41976 = state_40702;
(statearr_40743_41976[(1)] = cljs.core.first((state_40702[(4)])));

} else {
throw ex__38434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41977 = state_40702;
state_40702 = G__41977;
continue;
} else {
return ret_value__38432__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__38431__auto__ = function(state_40702){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__38431__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__38431__auto____1.call(this,state_40702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__38431__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__38431__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__38431__auto__;
})()
})();
var state__38852__auto__ = (function (){var statearr_40744 = f__38851__auto__();
(statearr_40744[(6)] = c__38850__auto__);

return statearr_40744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38852__auto__);
}));

return c__38850__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__40746 = arguments.length;
switch (G__40746) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__40748 = arguments.length;
switch (G__40748) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__40752 = arguments.length;
switch (G__40752) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38850__auto___41991 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38851__auto__ = (function (){var switch__38430__auto__ = (function (state_40788){
var state_val_40789 = (state_40788[(1)]);
if((state_val_40789 === (7))){
var inst_40783 = (state_40788[(2)]);
var state_40788__$1 = state_40788;
var statearr_40790_41996 = state_40788__$1;
(statearr_40790_41996[(2)] = inst_40783);

(statearr_40790_41996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40789 === (1))){
var inst_40753 = null;
var state_40788__$1 = (function (){var statearr_40791 = state_40788;
(statearr_40791[(7)] = inst_40753);

return statearr_40791;
})();
var statearr_40792_42003 = state_40788__$1;
(statearr_40792_42003[(2)] = null);

(statearr_40792_42003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40789 === (4))){
var inst_40767 = (state_40788[(8)]);
var inst_40767__$1 = (state_40788[(2)]);
var inst_40769 = (inst_40767__$1 == null);
var inst_40770 = cljs.core.not(inst_40769);
var state_40788__$1 = (function (){var statearr_40793 = state_40788;
(statearr_40793[(8)] = inst_40767__$1);

return statearr_40793;
})();
if(inst_40770){
var statearr_40794_42010 = state_40788__$1;
(statearr_40794_42010[(1)] = (5));

} else {
var statearr_40795_42012 = state_40788__$1;
(statearr_40795_42012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40789 === (6))){
var state_40788__$1 = state_40788;
var statearr_40796_42023 = state_40788__$1;
(statearr_40796_42023[(2)] = null);

(statearr_40796_42023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40789 === (3))){
var inst_40785 = (state_40788[(2)]);
var inst_40786 = cljs.core.async.close_BANG_(out);
var state_40788__$1 = (function (){var statearr_40797 = state_40788;
(statearr_40797[(9)] = inst_40785);

return statearr_40797;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40788__$1,inst_40786);
} else {
if((state_val_40789 === (2))){
var state_40788__$1 = state_40788;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40788__$1,(4),ch);
} else {
if((state_val_40789 === (11))){
var inst_40767 = (state_40788[(8)]);
var inst_40777 = (state_40788[(2)]);
var inst_40753 = inst_40767;
var state_40788__$1 = (function (){var statearr_40798 = state_40788;
(statearr_40798[(10)] = inst_40777);

(statearr_40798[(7)] = inst_40753);

return statearr_40798;
})();
var statearr_40799_42037 = state_40788__$1;
(statearr_40799_42037[(2)] = null);

(statearr_40799_42037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40789 === (9))){
var inst_40767 = (state_40788[(8)]);
var state_40788__$1 = state_40788;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40788__$1,(11),out,inst_40767);
} else {
if((state_val_40789 === (5))){
var inst_40767 = (state_40788[(8)]);
var inst_40753 = (state_40788[(7)]);
var inst_40772 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40767,inst_40753);
var state_40788__$1 = state_40788;
if(inst_40772){
var statearr_40801_42042 = state_40788__$1;
(statearr_40801_42042[(1)] = (8));

} else {
var statearr_40802_42043 = state_40788__$1;
(statearr_40802_42043[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40789 === (10))){
var inst_40780 = (state_40788[(2)]);
var state_40788__$1 = state_40788;
var statearr_40803_42045 = state_40788__$1;
(statearr_40803_42045[(2)] = inst_40780);

(statearr_40803_42045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40789 === (8))){
var inst_40753 = (state_40788[(7)]);
var tmp40800 = inst_40753;
var inst_40753__$1 = tmp40800;
var state_40788__$1 = (function (){var statearr_40804 = state_40788;
(statearr_40804[(7)] = inst_40753__$1);

return statearr_40804;
})();
var statearr_40805_42046 = state_40788__$1;
(statearr_40805_42046[(2)] = null);

(statearr_40805_42046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__38431__auto__ = null;
var cljs$core$async$state_machine__38431__auto____0 = (function (){
var statearr_40806 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40806[(0)] = cljs$core$async$state_machine__38431__auto__);

(statearr_40806[(1)] = (1));

return statearr_40806;
});
var cljs$core$async$state_machine__38431__auto____1 = (function (state_40788){
while(true){
var ret_value__38432__auto__ = (function (){try{while(true){
var result__38433__auto__ = switch__38430__auto__(state_40788);
if(cljs.core.keyword_identical_QMARK_(result__38433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38433__auto__;
}
break;
}
}catch (e40807){var ex__38434__auto__ = e40807;
var statearr_40808_42047 = state_40788;
(statearr_40808_42047[(2)] = ex__38434__auto__);


if(cljs.core.seq((state_40788[(4)]))){
var statearr_40810_42048 = state_40788;
(statearr_40810_42048[(1)] = cljs.core.first((state_40788[(4)])));

} else {
throw ex__38434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42049 = state_40788;
state_40788 = G__42049;
continue;
} else {
return ret_value__38432__auto__;
}
break;
}
});
cljs$core$async$state_machine__38431__auto__ = function(state_40788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38431__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38431__auto____1.call(this,state_40788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38431__auto____0;
cljs$core$async$state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38431__auto____1;
return cljs$core$async$state_machine__38431__auto__;
})()
})();
var state__38852__auto__ = (function (){var statearr_40811 = f__38851__auto__();
(statearr_40811[(6)] = c__38850__auto___41991);

return statearr_40811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38852__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__40813 = arguments.length;
switch (G__40813) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38850__auto___42074 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38851__auto__ = (function (){var switch__38430__auto__ = (function (state_40851){
var state_val_40852 = (state_40851[(1)]);
if((state_val_40852 === (7))){
var inst_40847 = (state_40851[(2)]);
var state_40851__$1 = state_40851;
var statearr_40853_42075 = state_40851__$1;
(statearr_40853_42075[(2)] = inst_40847);

(statearr_40853_42075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40852 === (1))){
var inst_40814 = (new Array(n));
var inst_40815 = inst_40814;
var inst_40816 = (0);
var state_40851__$1 = (function (){var statearr_40854 = state_40851;
(statearr_40854[(7)] = inst_40815);

(statearr_40854[(8)] = inst_40816);

return statearr_40854;
})();
var statearr_40855_42082 = state_40851__$1;
(statearr_40855_42082[(2)] = null);

(statearr_40855_42082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40852 === (4))){
var inst_40819 = (state_40851[(9)]);
var inst_40819__$1 = (state_40851[(2)]);
var inst_40820 = (inst_40819__$1 == null);
var inst_40821 = cljs.core.not(inst_40820);
var state_40851__$1 = (function (){var statearr_40856 = state_40851;
(statearr_40856[(9)] = inst_40819__$1);

return statearr_40856;
})();
if(inst_40821){
var statearr_40857_42093 = state_40851__$1;
(statearr_40857_42093[(1)] = (5));

} else {
var statearr_40858_42094 = state_40851__$1;
(statearr_40858_42094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40852 === (15))){
var inst_40841 = (state_40851[(2)]);
var state_40851__$1 = state_40851;
var statearr_40859_42095 = state_40851__$1;
(statearr_40859_42095[(2)] = inst_40841);

(statearr_40859_42095[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40852 === (13))){
var state_40851__$1 = state_40851;
var statearr_40860_42096 = state_40851__$1;
(statearr_40860_42096[(2)] = null);

(statearr_40860_42096[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40852 === (6))){
var inst_40816 = (state_40851[(8)]);
var inst_40837 = (inst_40816 > (0));
var state_40851__$1 = state_40851;
if(cljs.core.truth_(inst_40837)){
var statearr_40861_42097 = state_40851__$1;
(statearr_40861_42097[(1)] = (12));

} else {
var statearr_40862_42098 = state_40851__$1;
(statearr_40862_42098[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40852 === (3))){
var inst_40849 = (state_40851[(2)]);
var state_40851__$1 = state_40851;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40851__$1,inst_40849);
} else {
if((state_val_40852 === (12))){
var inst_40815 = (state_40851[(7)]);
var inst_40839 = cljs.core.vec(inst_40815);
var state_40851__$1 = state_40851;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40851__$1,(15),out,inst_40839);
} else {
if((state_val_40852 === (2))){
var state_40851__$1 = state_40851;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40851__$1,(4),ch);
} else {
if((state_val_40852 === (11))){
var inst_40831 = (state_40851[(2)]);
var inst_40832 = (new Array(n));
var inst_40815 = inst_40832;
var inst_40816 = (0);
var state_40851__$1 = (function (){var statearr_40863 = state_40851;
(statearr_40863[(10)] = inst_40831);

(statearr_40863[(7)] = inst_40815);

(statearr_40863[(8)] = inst_40816);

return statearr_40863;
})();
var statearr_40864_42100 = state_40851__$1;
(statearr_40864_42100[(2)] = null);

(statearr_40864_42100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40852 === (9))){
var inst_40815 = (state_40851[(7)]);
var inst_40829 = cljs.core.vec(inst_40815);
var state_40851__$1 = state_40851;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40851__$1,(11),out,inst_40829);
} else {
if((state_val_40852 === (5))){
var inst_40815 = (state_40851[(7)]);
var inst_40816 = (state_40851[(8)]);
var inst_40819 = (state_40851[(9)]);
var inst_40824 = (state_40851[(11)]);
var inst_40823 = (inst_40815[inst_40816] = inst_40819);
var inst_40824__$1 = (inst_40816 + (1));
var inst_40825 = (inst_40824__$1 < n);
var state_40851__$1 = (function (){var statearr_40865 = state_40851;
(statearr_40865[(12)] = inst_40823);

(statearr_40865[(11)] = inst_40824__$1);

return statearr_40865;
})();
if(cljs.core.truth_(inst_40825)){
var statearr_40866_42103 = state_40851__$1;
(statearr_40866_42103[(1)] = (8));

} else {
var statearr_40867_42104 = state_40851__$1;
(statearr_40867_42104[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40852 === (14))){
var inst_40844 = (state_40851[(2)]);
var inst_40845 = cljs.core.async.close_BANG_(out);
var state_40851__$1 = (function (){var statearr_40869 = state_40851;
(statearr_40869[(13)] = inst_40844);

return statearr_40869;
})();
var statearr_40870_42124 = state_40851__$1;
(statearr_40870_42124[(2)] = inst_40845);

(statearr_40870_42124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40852 === (10))){
var inst_40835 = (state_40851[(2)]);
var state_40851__$1 = state_40851;
var statearr_40871_42125 = state_40851__$1;
(statearr_40871_42125[(2)] = inst_40835);

(statearr_40871_42125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40852 === (8))){
var inst_40815 = (state_40851[(7)]);
var inst_40824 = (state_40851[(11)]);
var tmp40868 = inst_40815;
var inst_40815__$1 = tmp40868;
var inst_40816 = inst_40824;
var state_40851__$1 = (function (){var statearr_40872 = state_40851;
(statearr_40872[(7)] = inst_40815__$1);

(statearr_40872[(8)] = inst_40816);

return statearr_40872;
})();
var statearr_40873_42126 = state_40851__$1;
(statearr_40873_42126[(2)] = null);

(statearr_40873_42126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__38431__auto__ = null;
var cljs$core$async$state_machine__38431__auto____0 = (function (){
var statearr_40874 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40874[(0)] = cljs$core$async$state_machine__38431__auto__);

(statearr_40874[(1)] = (1));

return statearr_40874;
});
var cljs$core$async$state_machine__38431__auto____1 = (function (state_40851){
while(true){
var ret_value__38432__auto__ = (function (){try{while(true){
var result__38433__auto__ = switch__38430__auto__(state_40851);
if(cljs.core.keyword_identical_QMARK_(result__38433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38433__auto__;
}
break;
}
}catch (e40875){var ex__38434__auto__ = e40875;
var statearr_40876_42127 = state_40851;
(statearr_40876_42127[(2)] = ex__38434__auto__);


if(cljs.core.seq((state_40851[(4)]))){
var statearr_40877_42128 = state_40851;
(statearr_40877_42128[(1)] = cljs.core.first((state_40851[(4)])));

} else {
throw ex__38434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42129 = state_40851;
state_40851 = G__42129;
continue;
} else {
return ret_value__38432__auto__;
}
break;
}
});
cljs$core$async$state_machine__38431__auto__ = function(state_40851){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38431__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38431__auto____1.call(this,state_40851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38431__auto____0;
cljs$core$async$state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38431__auto____1;
return cljs$core$async$state_machine__38431__auto__;
})()
})();
var state__38852__auto__ = (function (){var statearr_40878 = f__38851__auto__();
(statearr_40878[(6)] = c__38850__auto___42074);

return statearr_40878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38852__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__40880 = arguments.length;
switch (G__40880) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__38850__auto___42133 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38851__auto__ = (function (){var switch__38430__auto__ = (function (state_40925){
var state_val_40926 = (state_40925[(1)]);
if((state_val_40926 === (7))){
var inst_40921 = (state_40925[(2)]);
var state_40925__$1 = state_40925;
var statearr_40927_42134 = state_40925__$1;
(statearr_40927_42134[(2)] = inst_40921);

(statearr_40927_42134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40926 === (1))){
var inst_40881 = [];
var inst_40882 = inst_40881;
var inst_40883 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_40925__$1 = (function (){var statearr_40928 = state_40925;
(statearr_40928[(7)] = inst_40882);

(statearr_40928[(8)] = inst_40883);

return statearr_40928;
})();
var statearr_40929_42135 = state_40925__$1;
(statearr_40929_42135[(2)] = null);

(statearr_40929_42135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40926 === (4))){
var inst_40886 = (state_40925[(9)]);
var inst_40886__$1 = (state_40925[(2)]);
var inst_40887 = (inst_40886__$1 == null);
var inst_40888 = cljs.core.not(inst_40887);
var state_40925__$1 = (function (){var statearr_40930 = state_40925;
(statearr_40930[(9)] = inst_40886__$1);

return statearr_40930;
})();
if(inst_40888){
var statearr_40931_42139 = state_40925__$1;
(statearr_40931_42139[(1)] = (5));

} else {
var statearr_40932_42140 = state_40925__$1;
(statearr_40932_42140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40926 === (15))){
var inst_40882 = (state_40925[(7)]);
var inst_40913 = cljs.core.vec(inst_40882);
var state_40925__$1 = state_40925;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40925__$1,(18),out,inst_40913);
} else {
if((state_val_40926 === (13))){
var inst_40908 = (state_40925[(2)]);
var state_40925__$1 = state_40925;
var statearr_40935_42150 = state_40925__$1;
(statearr_40935_42150[(2)] = inst_40908);

(statearr_40935_42150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40926 === (6))){
var inst_40882 = (state_40925[(7)]);
var inst_40910 = inst_40882.length;
var inst_40911 = (inst_40910 > (0));
var state_40925__$1 = state_40925;
if(cljs.core.truth_(inst_40911)){
var statearr_40936_42151 = state_40925__$1;
(statearr_40936_42151[(1)] = (15));

} else {
var statearr_40937_42152 = state_40925__$1;
(statearr_40937_42152[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40926 === (17))){
var inst_40918 = (state_40925[(2)]);
var inst_40919 = cljs.core.async.close_BANG_(out);
var state_40925__$1 = (function (){var statearr_40938 = state_40925;
(statearr_40938[(10)] = inst_40918);

return statearr_40938;
})();
var statearr_40939_42153 = state_40925__$1;
(statearr_40939_42153[(2)] = inst_40919);

(statearr_40939_42153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40926 === (3))){
var inst_40923 = (state_40925[(2)]);
var state_40925__$1 = state_40925;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40925__$1,inst_40923);
} else {
if((state_val_40926 === (12))){
var inst_40882 = (state_40925[(7)]);
var inst_40901 = cljs.core.vec(inst_40882);
var state_40925__$1 = state_40925;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40925__$1,(14),out,inst_40901);
} else {
if((state_val_40926 === (2))){
var state_40925__$1 = state_40925;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40925__$1,(4),ch);
} else {
if((state_val_40926 === (11))){
var inst_40882 = (state_40925[(7)]);
var inst_40886 = (state_40925[(9)]);
var inst_40890 = (state_40925[(11)]);
var inst_40898 = inst_40882.push(inst_40886);
var tmp40940 = inst_40882;
var inst_40882__$1 = tmp40940;
var inst_40883 = inst_40890;
var state_40925__$1 = (function (){var statearr_40942 = state_40925;
(statearr_40942[(12)] = inst_40898);

(statearr_40942[(7)] = inst_40882__$1);

(statearr_40942[(8)] = inst_40883);

return statearr_40942;
})();
var statearr_40943_42160 = state_40925__$1;
(statearr_40943_42160[(2)] = null);

(statearr_40943_42160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40926 === (9))){
var inst_40883 = (state_40925[(8)]);
var inst_40894 = cljs.core.keyword_identical_QMARK_(inst_40883,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_40925__$1 = state_40925;
var statearr_40944_42161 = state_40925__$1;
(statearr_40944_42161[(2)] = inst_40894);

(statearr_40944_42161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40926 === (5))){
var inst_40886 = (state_40925[(9)]);
var inst_40890 = (state_40925[(11)]);
var inst_40883 = (state_40925[(8)]);
var inst_40891 = (state_40925[(13)]);
var inst_40890__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40886) : f.call(null,inst_40886));
var inst_40891__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40890__$1,inst_40883);
var state_40925__$1 = (function (){var statearr_40945 = state_40925;
(statearr_40945[(11)] = inst_40890__$1);

(statearr_40945[(13)] = inst_40891__$1);

return statearr_40945;
})();
if(inst_40891__$1){
var statearr_40946_42162 = state_40925__$1;
(statearr_40946_42162[(1)] = (8));

} else {
var statearr_40947_42163 = state_40925__$1;
(statearr_40947_42163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40926 === (14))){
var inst_40886 = (state_40925[(9)]);
var inst_40890 = (state_40925[(11)]);
var inst_40903 = (state_40925[(2)]);
var inst_40904 = [];
var inst_40905 = inst_40904.push(inst_40886);
var inst_40882 = inst_40904;
var inst_40883 = inst_40890;
var state_40925__$1 = (function (){var statearr_40948 = state_40925;
(statearr_40948[(14)] = inst_40903);

(statearr_40948[(15)] = inst_40905);

(statearr_40948[(7)] = inst_40882);

(statearr_40948[(8)] = inst_40883);

return statearr_40948;
})();
var statearr_40949_42164 = state_40925__$1;
(statearr_40949_42164[(2)] = null);

(statearr_40949_42164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40926 === (16))){
var state_40925__$1 = state_40925;
var statearr_40950_42166 = state_40925__$1;
(statearr_40950_42166[(2)] = null);

(statearr_40950_42166[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40926 === (10))){
var inst_40896 = (state_40925[(2)]);
var state_40925__$1 = state_40925;
if(cljs.core.truth_(inst_40896)){
var statearr_40951_42168 = state_40925__$1;
(statearr_40951_42168[(1)] = (11));

} else {
var statearr_40952_42169 = state_40925__$1;
(statearr_40952_42169[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40926 === (18))){
var inst_40915 = (state_40925[(2)]);
var state_40925__$1 = state_40925;
var statearr_40953_42170 = state_40925__$1;
(statearr_40953_42170[(2)] = inst_40915);

(statearr_40953_42170[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40926 === (8))){
var inst_40891 = (state_40925[(13)]);
var state_40925__$1 = state_40925;
var statearr_40954_42175 = state_40925__$1;
(statearr_40954_42175[(2)] = inst_40891);

(statearr_40954_42175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__38431__auto__ = null;
var cljs$core$async$state_machine__38431__auto____0 = (function (){
var statearr_40964 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40964[(0)] = cljs$core$async$state_machine__38431__auto__);

(statearr_40964[(1)] = (1));

return statearr_40964;
});
var cljs$core$async$state_machine__38431__auto____1 = (function (state_40925){
while(true){
var ret_value__38432__auto__ = (function (){try{while(true){
var result__38433__auto__ = switch__38430__auto__(state_40925);
if(cljs.core.keyword_identical_QMARK_(result__38433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38433__auto__;
}
break;
}
}catch (e40965){var ex__38434__auto__ = e40965;
var statearr_40966_42178 = state_40925;
(statearr_40966_42178[(2)] = ex__38434__auto__);


if(cljs.core.seq((state_40925[(4)]))){
var statearr_40967_42179 = state_40925;
(statearr_40967_42179[(1)] = cljs.core.first((state_40925[(4)])));

} else {
throw ex__38434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42184 = state_40925;
state_40925 = G__42184;
continue;
} else {
return ret_value__38432__auto__;
}
break;
}
});
cljs$core$async$state_machine__38431__auto__ = function(state_40925){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38431__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38431__auto____1.call(this,state_40925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38431__auto____0;
cljs$core$async$state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38431__auto____1;
return cljs$core$async$state_machine__38431__auto__;
})()
})();
var state__38852__auto__ = (function (){var statearr_40968 = f__38851__auto__();
(statearr_40968[(6)] = c__38850__auto___42133);

return statearr_40968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38852__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
