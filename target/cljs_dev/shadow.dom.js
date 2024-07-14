var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./cljs.core.async.js");
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

$CLJS.SHADOW_ENV.setLoaded("shadow.dom.js");

goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_42212 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_42212(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_42213 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_42213(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__41001 = coll;
var G__41002 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__41001,G__41002) : shadow.dom.lazy_native_coll_seq.call(null,G__41001,G__41002));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__41025 = arguments.length;
switch (G__41025) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__41028 = arguments.length;
switch (G__41028) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__41031 = arguments.length;
switch (G__41031) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__41042 = arguments.length;
switch (G__41042) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__41048 = arguments.length;
switch (G__41048) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__41057 = arguments.length;
switch (G__41057) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e41067){if((e41067 instanceof Object)){
var e = e41067;
return console.log("didnt support attachEvent",el,e);
} else {
throw e41067;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__41077 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__41078 = null;
var count__41079 = (0);
var i__41080 = (0);
while(true){
if((i__41080 < count__41079)){
var el = chunk__41078.cljs$core$IIndexed$_nth$arity$2(null,i__41080);
var handler_42220__$1 = ((function (seq__41077,chunk__41078,count__41079,i__41080,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__41077,chunk__41078,count__41079,i__41080,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_42220__$1);


var G__42221 = seq__41077;
var G__42222 = chunk__41078;
var G__42223 = count__41079;
var G__42224 = (i__41080 + (1));
seq__41077 = G__42221;
chunk__41078 = G__42222;
count__41079 = G__42223;
i__41080 = G__42224;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41077);
if(temp__5804__auto__){
var seq__41077__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41077__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__41077__$1);
var G__42225 = cljs.core.chunk_rest(seq__41077__$1);
var G__42226 = c__5525__auto__;
var G__42227 = cljs.core.count(c__5525__auto__);
var G__42228 = (0);
seq__41077 = G__42225;
chunk__41078 = G__42226;
count__41079 = G__42227;
i__41080 = G__42228;
continue;
} else {
var el = cljs.core.first(seq__41077__$1);
var handler_42229__$1 = ((function (seq__41077,chunk__41078,count__41079,i__41080,el,seq__41077__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__41077,chunk__41078,count__41079,i__41080,el,seq__41077__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_42229__$1);


var G__42230 = cljs.core.next(seq__41077__$1);
var G__42231 = null;
var G__42232 = (0);
var G__42233 = (0);
seq__41077 = G__42230;
chunk__41078 = G__42231;
count__41079 = G__42232;
i__41080 = G__42233;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__41101 = arguments.length;
switch (G__41101) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__41107 = cljs.core.seq(events);
var chunk__41108 = null;
var count__41109 = (0);
var i__41110 = (0);
while(true){
if((i__41110 < count__41109)){
var vec__41131 = chunk__41108.cljs$core$IIndexed$_nth$arity$2(null,i__41110);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41131,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41131,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__42235 = seq__41107;
var G__42236 = chunk__41108;
var G__42237 = count__41109;
var G__42238 = (i__41110 + (1));
seq__41107 = G__42235;
chunk__41108 = G__42236;
count__41109 = G__42237;
i__41110 = G__42238;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41107);
if(temp__5804__auto__){
var seq__41107__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41107__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__41107__$1);
var G__42239 = cljs.core.chunk_rest(seq__41107__$1);
var G__42240 = c__5525__auto__;
var G__42241 = cljs.core.count(c__5525__auto__);
var G__42242 = (0);
seq__41107 = G__42239;
chunk__41108 = G__42240;
count__41109 = G__42241;
i__41110 = G__42242;
continue;
} else {
var vec__41134 = cljs.core.first(seq__41107__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41134,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41134,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__42243 = cljs.core.next(seq__41107__$1);
var G__42244 = null;
var G__42245 = (0);
var G__42246 = (0);
seq__41107 = G__42243;
chunk__41108 = G__42244;
count__41109 = G__42245;
i__41110 = G__42246;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__41140 = cljs.core.seq(styles);
var chunk__41141 = null;
var count__41142 = (0);
var i__41143 = (0);
while(true){
if((i__41143 < count__41142)){
var vec__41166 = chunk__41141.cljs$core$IIndexed$_nth$arity$2(null,i__41143);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41166,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41166,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__42247 = seq__41140;
var G__42248 = chunk__41141;
var G__42249 = count__41142;
var G__42250 = (i__41143 + (1));
seq__41140 = G__42247;
chunk__41141 = G__42248;
count__41142 = G__42249;
i__41143 = G__42250;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41140);
if(temp__5804__auto__){
var seq__41140__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41140__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__41140__$1);
var G__42251 = cljs.core.chunk_rest(seq__41140__$1);
var G__42252 = c__5525__auto__;
var G__42253 = cljs.core.count(c__5525__auto__);
var G__42254 = (0);
seq__41140 = G__42251;
chunk__41141 = G__42252;
count__41142 = G__42253;
i__41143 = G__42254;
continue;
} else {
var vec__41185 = cljs.core.first(seq__41140__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41185,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41185,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__42255 = cljs.core.next(seq__41140__$1);
var G__42256 = null;
var G__42257 = (0);
var G__42258 = (0);
seq__41140 = G__42255;
chunk__41141 = G__42256;
count__41142 = G__42257;
i__41143 = G__42258;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__41213_42259 = key;
var G__41213_42260__$1 = (((G__41213_42259 instanceof cljs.core.Keyword))?G__41213_42259.fqn:null);
switch (G__41213_42260__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_42262 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_42262,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_42262,"aria-");
}
})())){
el.setAttribute(ks_42262,value);
} else {
(el[ks_42262] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__41254){
var map__41256 = p__41254;
var map__41256__$1 = cljs.core.__destructure_map(map__41256);
var props = map__41256__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41256__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__41259 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41259,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41259,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41259,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__41262 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__41262,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__41262;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__41266 = arguments.length;
switch (G__41266) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__41278){
var vec__41279 = p__41278;
var seq__41280 = cljs.core.seq(vec__41279);
var first__41281 = cljs.core.first(seq__41280);
var seq__41280__$1 = cljs.core.next(seq__41280);
var nn = first__41281;
var first__41281__$1 = cljs.core.first(seq__41280__$1);
var seq__41280__$2 = cljs.core.next(seq__41280__$1);
var np = first__41281__$1;
var nc = seq__41280__$2;
var node = vec__41279;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__41285 = nn;
var G__41286 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__41285,G__41286) : create_fn.call(null,G__41285,G__41286));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__41287 = nn;
var G__41288 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__41287,G__41288) : create_fn.call(null,G__41287,G__41288));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__41292 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41292,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41292,(1),null);
var seq__41296_42264 = cljs.core.seq(node_children);
var chunk__41297_42265 = null;
var count__41298_42266 = (0);
var i__41299_42267 = (0);
while(true){
if((i__41299_42267 < count__41298_42266)){
var child_struct_42268 = chunk__41297_42265.cljs$core$IIndexed$_nth$arity$2(null,i__41299_42267);
var children_42269 = shadow.dom.dom_node(child_struct_42268);
if(cljs.core.seq_QMARK_(children_42269)){
var seq__41352_42270 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_42269));
var chunk__41354_42271 = null;
var count__41355_42272 = (0);
var i__41356_42273 = (0);
while(true){
if((i__41356_42273 < count__41355_42272)){
var child_42274 = chunk__41354_42271.cljs$core$IIndexed$_nth$arity$2(null,i__41356_42273);
if(cljs.core.truth_(child_42274)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42274);


var G__42275 = seq__41352_42270;
var G__42276 = chunk__41354_42271;
var G__42277 = count__41355_42272;
var G__42278 = (i__41356_42273 + (1));
seq__41352_42270 = G__42275;
chunk__41354_42271 = G__42276;
count__41355_42272 = G__42277;
i__41356_42273 = G__42278;
continue;
} else {
var G__42282 = seq__41352_42270;
var G__42283 = chunk__41354_42271;
var G__42284 = count__41355_42272;
var G__42285 = (i__41356_42273 + (1));
seq__41352_42270 = G__42282;
chunk__41354_42271 = G__42283;
count__41355_42272 = G__42284;
i__41356_42273 = G__42285;
continue;
}
} else {
var temp__5804__auto___42286 = cljs.core.seq(seq__41352_42270);
if(temp__5804__auto___42286){
var seq__41352_42287__$1 = temp__5804__auto___42286;
if(cljs.core.chunked_seq_QMARK_(seq__41352_42287__$1)){
var c__5525__auto___42288 = cljs.core.chunk_first(seq__41352_42287__$1);
var G__42289 = cljs.core.chunk_rest(seq__41352_42287__$1);
var G__42290 = c__5525__auto___42288;
var G__42291 = cljs.core.count(c__5525__auto___42288);
var G__42292 = (0);
seq__41352_42270 = G__42289;
chunk__41354_42271 = G__42290;
count__41355_42272 = G__42291;
i__41356_42273 = G__42292;
continue;
} else {
var child_42293 = cljs.core.first(seq__41352_42287__$1);
if(cljs.core.truth_(child_42293)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42293);


var G__42294 = cljs.core.next(seq__41352_42287__$1);
var G__42295 = null;
var G__42296 = (0);
var G__42297 = (0);
seq__41352_42270 = G__42294;
chunk__41354_42271 = G__42295;
count__41355_42272 = G__42296;
i__41356_42273 = G__42297;
continue;
} else {
var G__42298 = cljs.core.next(seq__41352_42287__$1);
var G__42299 = null;
var G__42300 = (0);
var G__42301 = (0);
seq__41352_42270 = G__42298;
chunk__41354_42271 = G__42299;
count__41355_42272 = G__42300;
i__41356_42273 = G__42301;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_42269);
}


var G__42302 = seq__41296_42264;
var G__42303 = chunk__41297_42265;
var G__42304 = count__41298_42266;
var G__42305 = (i__41299_42267 + (1));
seq__41296_42264 = G__42302;
chunk__41297_42265 = G__42303;
count__41298_42266 = G__42304;
i__41299_42267 = G__42305;
continue;
} else {
var temp__5804__auto___42306 = cljs.core.seq(seq__41296_42264);
if(temp__5804__auto___42306){
var seq__41296_42307__$1 = temp__5804__auto___42306;
if(cljs.core.chunked_seq_QMARK_(seq__41296_42307__$1)){
var c__5525__auto___42308 = cljs.core.chunk_first(seq__41296_42307__$1);
var G__42309 = cljs.core.chunk_rest(seq__41296_42307__$1);
var G__42310 = c__5525__auto___42308;
var G__42311 = cljs.core.count(c__5525__auto___42308);
var G__42312 = (0);
seq__41296_42264 = G__42309;
chunk__41297_42265 = G__42310;
count__41298_42266 = G__42311;
i__41299_42267 = G__42312;
continue;
} else {
var child_struct_42313 = cljs.core.first(seq__41296_42307__$1);
var children_42314 = shadow.dom.dom_node(child_struct_42313);
if(cljs.core.seq_QMARK_(children_42314)){
var seq__41364_42315 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_42314));
var chunk__41367_42316 = null;
var count__41368_42317 = (0);
var i__41369_42318 = (0);
while(true){
if((i__41369_42318 < count__41368_42317)){
var child_42319 = chunk__41367_42316.cljs$core$IIndexed$_nth$arity$2(null,i__41369_42318);
if(cljs.core.truth_(child_42319)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42319);


var G__42320 = seq__41364_42315;
var G__42321 = chunk__41367_42316;
var G__42322 = count__41368_42317;
var G__42323 = (i__41369_42318 + (1));
seq__41364_42315 = G__42320;
chunk__41367_42316 = G__42321;
count__41368_42317 = G__42322;
i__41369_42318 = G__42323;
continue;
} else {
var G__42324 = seq__41364_42315;
var G__42325 = chunk__41367_42316;
var G__42326 = count__41368_42317;
var G__42327 = (i__41369_42318 + (1));
seq__41364_42315 = G__42324;
chunk__41367_42316 = G__42325;
count__41368_42317 = G__42326;
i__41369_42318 = G__42327;
continue;
}
} else {
var temp__5804__auto___42328__$1 = cljs.core.seq(seq__41364_42315);
if(temp__5804__auto___42328__$1){
var seq__41364_42329__$1 = temp__5804__auto___42328__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41364_42329__$1)){
var c__5525__auto___42330 = cljs.core.chunk_first(seq__41364_42329__$1);
var G__42331 = cljs.core.chunk_rest(seq__41364_42329__$1);
var G__42332 = c__5525__auto___42330;
var G__42333 = cljs.core.count(c__5525__auto___42330);
var G__42334 = (0);
seq__41364_42315 = G__42331;
chunk__41367_42316 = G__42332;
count__41368_42317 = G__42333;
i__41369_42318 = G__42334;
continue;
} else {
var child_42335 = cljs.core.first(seq__41364_42329__$1);
if(cljs.core.truth_(child_42335)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42335);


var G__42336 = cljs.core.next(seq__41364_42329__$1);
var G__42337 = null;
var G__42338 = (0);
var G__42339 = (0);
seq__41364_42315 = G__42336;
chunk__41367_42316 = G__42337;
count__41368_42317 = G__42338;
i__41369_42318 = G__42339;
continue;
} else {
var G__42340 = cljs.core.next(seq__41364_42329__$1);
var G__42341 = null;
var G__42342 = (0);
var G__42343 = (0);
seq__41364_42315 = G__42340;
chunk__41367_42316 = G__42341;
count__41368_42317 = G__42342;
i__41369_42318 = G__42343;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_42314);
}


var G__42344 = cljs.core.next(seq__41296_42307__$1);
var G__42345 = null;
var G__42346 = (0);
var G__42347 = (0);
seq__41296_42264 = G__42344;
chunk__41297_42265 = G__42345;
count__41298_42266 = G__42346;
i__41299_42267 = G__42347;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__41393 = cljs.core.seq(node);
var chunk__41394 = null;
var count__41395 = (0);
var i__41396 = (0);
while(true){
if((i__41396 < count__41395)){
var n = chunk__41394.cljs$core$IIndexed$_nth$arity$2(null,i__41396);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__42348 = seq__41393;
var G__42349 = chunk__41394;
var G__42350 = count__41395;
var G__42351 = (i__41396 + (1));
seq__41393 = G__42348;
chunk__41394 = G__42349;
count__41395 = G__42350;
i__41396 = G__42351;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41393);
if(temp__5804__auto__){
var seq__41393__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41393__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__41393__$1);
var G__42352 = cljs.core.chunk_rest(seq__41393__$1);
var G__42353 = c__5525__auto__;
var G__42354 = cljs.core.count(c__5525__auto__);
var G__42355 = (0);
seq__41393 = G__42352;
chunk__41394 = G__42353;
count__41395 = G__42354;
i__41396 = G__42355;
continue;
} else {
var n = cljs.core.first(seq__41393__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__42359 = cljs.core.next(seq__41393__$1);
var G__42360 = null;
var G__42361 = (0);
var G__42362 = (0);
seq__41393 = G__42359;
chunk__41394 = G__42360;
count__41395 = G__42361;
i__41396 = G__42362;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__41409 = arguments.length;
switch (G__41409) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__41415 = arguments.length;
switch (G__41415) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__41442 = arguments.length;
switch (G__41442) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___42379 = arguments.length;
var i__5727__auto___42380 = (0);
while(true){
if((i__5727__auto___42380 < len__5726__auto___42379)){
args__5732__auto__.push((arguments[i__5727__auto___42380]));

var G__42381 = (i__5727__auto___42380 + (1));
i__5727__auto___42380 = G__42381;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__41465_42382 = cljs.core.seq(nodes);
var chunk__41466_42383 = null;
var count__41467_42384 = (0);
var i__41468_42385 = (0);
while(true){
if((i__41468_42385 < count__41467_42384)){
var node_42386 = chunk__41466_42383.cljs$core$IIndexed$_nth$arity$2(null,i__41468_42385);
fragment.appendChild(shadow.dom._to_dom(node_42386));


var G__42387 = seq__41465_42382;
var G__42388 = chunk__41466_42383;
var G__42389 = count__41467_42384;
var G__42390 = (i__41468_42385 + (1));
seq__41465_42382 = G__42387;
chunk__41466_42383 = G__42388;
count__41467_42384 = G__42389;
i__41468_42385 = G__42390;
continue;
} else {
var temp__5804__auto___42391 = cljs.core.seq(seq__41465_42382);
if(temp__5804__auto___42391){
var seq__41465_42392__$1 = temp__5804__auto___42391;
if(cljs.core.chunked_seq_QMARK_(seq__41465_42392__$1)){
var c__5525__auto___42393 = cljs.core.chunk_first(seq__41465_42392__$1);
var G__42394 = cljs.core.chunk_rest(seq__41465_42392__$1);
var G__42395 = c__5525__auto___42393;
var G__42396 = cljs.core.count(c__5525__auto___42393);
var G__42397 = (0);
seq__41465_42382 = G__42394;
chunk__41466_42383 = G__42395;
count__41467_42384 = G__42396;
i__41468_42385 = G__42397;
continue;
} else {
var node_42398 = cljs.core.first(seq__41465_42392__$1);
fragment.appendChild(shadow.dom._to_dom(node_42398));


var G__42399 = cljs.core.next(seq__41465_42392__$1);
var G__42400 = null;
var G__42401 = (0);
var G__42402 = (0);
seq__41465_42382 = G__42399;
chunk__41466_42383 = G__42400;
count__41467_42384 = G__42401;
i__41468_42385 = G__42402;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq41461){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41461));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__41480_42406 = cljs.core.seq(scripts);
var chunk__41481_42407 = null;
var count__41482_42408 = (0);
var i__41483_42409 = (0);
while(true){
if((i__41483_42409 < count__41482_42408)){
var vec__41493_42410 = chunk__41481_42407.cljs$core$IIndexed$_nth$arity$2(null,i__41483_42409);
var script_tag_42411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41493_42410,(0),null);
var script_body_42412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41493_42410,(1),null);
eval(script_body_42412);


var G__42413 = seq__41480_42406;
var G__42414 = chunk__41481_42407;
var G__42415 = count__41482_42408;
var G__42416 = (i__41483_42409 + (1));
seq__41480_42406 = G__42413;
chunk__41481_42407 = G__42414;
count__41482_42408 = G__42415;
i__41483_42409 = G__42416;
continue;
} else {
var temp__5804__auto___42417 = cljs.core.seq(seq__41480_42406);
if(temp__5804__auto___42417){
var seq__41480_42418__$1 = temp__5804__auto___42417;
if(cljs.core.chunked_seq_QMARK_(seq__41480_42418__$1)){
var c__5525__auto___42419 = cljs.core.chunk_first(seq__41480_42418__$1);
var G__42420 = cljs.core.chunk_rest(seq__41480_42418__$1);
var G__42421 = c__5525__auto___42419;
var G__42422 = cljs.core.count(c__5525__auto___42419);
var G__42423 = (0);
seq__41480_42406 = G__42420;
chunk__41481_42407 = G__42421;
count__41482_42408 = G__42422;
i__41483_42409 = G__42423;
continue;
} else {
var vec__41496_42424 = cljs.core.first(seq__41480_42418__$1);
var script_tag_42425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41496_42424,(0),null);
var script_body_42426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41496_42424,(1),null);
eval(script_body_42426);


var G__42427 = cljs.core.next(seq__41480_42418__$1);
var G__42428 = null;
var G__42429 = (0);
var G__42430 = (0);
seq__41480_42406 = G__42427;
chunk__41481_42407 = G__42428;
count__41482_42408 = G__42429;
i__41483_42409 = G__42430;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__41499){
var vec__41500 = p__41499;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41500,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41500,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__41530 = arguments.length;
switch (G__41530) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__41554 = cljs.core.seq(style_keys);
var chunk__41555 = null;
var count__41556 = (0);
var i__41557 = (0);
while(true){
if((i__41557 < count__41556)){
var it = chunk__41555.cljs$core$IIndexed$_nth$arity$2(null,i__41557);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__42466 = seq__41554;
var G__42467 = chunk__41555;
var G__42468 = count__41556;
var G__42469 = (i__41557 + (1));
seq__41554 = G__42466;
chunk__41555 = G__42467;
count__41556 = G__42468;
i__41557 = G__42469;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41554);
if(temp__5804__auto__){
var seq__41554__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41554__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__41554__$1);
var G__42470 = cljs.core.chunk_rest(seq__41554__$1);
var G__42471 = c__5525__auto__;
var G__42472 = cljs.core.count(c__5525__auto__);
var G__42473 = (0);
seq__41554 = G__42470;
chunk__41555 = G__42471;
count__41556 = G__42472;
i__41557 = G__42473;
continue;
} else {
var it = cljs.core.first(seq__41554__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__42474 = cljs.core.next(seq__41554__$1);
var G__42475 = null;
var G__42476 = (0);
var G__42477 = (0);
seq__41554 = G__42474;
chunk__41555 = G__42475;
count__41556 = G__42476;
i__41557 = G__42477;
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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k41581,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__41600 = k41581;
var G__41600__$1 = (((G__41600 instanceof cljs.core.Keyword))?G__41600.fqn:null);
switch (G__41600__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41581,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__41602){
var vec__41603 = p__41602;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41603,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41603,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41580){
var self__ = this;
var G__41580__$1 = this;
return (new cljs.core.RecordIter((0),G__41580__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41582,other41583){
var self__ = this;
var this41582__$1 = this;
return (((!((other41583 == null)))) && ((((this41582__$1.constructor === other41583.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41582__$1.x,other41583.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41582__$1.y,other41583.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41582__$1.__extmap,other41583.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k41581){
var self__ = this;
var this__5307__auto____$1 = this;
var G__41627 = k41581;
var G__41627__$1 = (((G__41627 instanceof cljs.core.Keyword))?G__41627.fqn:null);
switch (G__41627__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k41581);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__41580){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__41631 = cljs.core.keyword_identical_QMARK_;
var expr__41632 = k__5309__auto__;
if(cljs.core.truth_((pred__41631.cljs$core$IFn$_invoke$arity$2 ? pred__41631.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__41632) : pred__41631.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__41632)))){
return (new shadow.dom.Coordinate(G__41580,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__41631.cljs$core$IFn$_invoke$arity$2 ? pred__41631.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__41632) : pred__41631.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__41632)))){
return (new shadow.dom.Coordinate(self__.x,G__41580,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__41580),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__41580){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__41580,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__41585){
var extmap__5342__auto__ = (function (){var G__41645 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__41585,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__41585)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41645);
} else {
return G__41645;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__41585),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__41585),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k41650,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__41658 = k41650;
var G__41658__$1 = (((G__41658 instanceof cljs.core.Keyword))?G__41658.fqn:null);
switch (G__41658__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41650,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__41670){
var vec__41672 = p__41670;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41672,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41672,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41649){
var self__ = this;
var G__41649__$1 = this;
return (new cljs.core.RecordIter((0),G__41649__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41651,other41652){
var self__ = this;
var this41651__$1 = this;
return (((!((other41652 == null)))) && ((((this41651__$1.constructor === other41652.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41651__$1.w,other41652.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41651__$1.h,other41652.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41651__$1.__extmap,other41652.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k41650){
var self__ = this;
var this__5307__auto____$1 = this;
var G__41705 = k41650;
var G__41705__$1 = (((G__41705 instanceof cljs.core.Keyword))?G__41705.fqn:null);
switch (G__41705__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k41650);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__41649){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__41707 = cljs.core.keyword_identical_QMARK_;
var expr__41708 = k__5309__auto__;
if(cljs.core.truth_((pred__41707.cljs$core$IFn$_invoke$arity$2 ? pred__41707.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__41708) : pred__41707.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__41708)))){
return (new shadow.dom.Size(G__41649,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__41707.cljs$core$IFn$_invoke$arity$2 ? pred__41707.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__41708) : pred__41707.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__41708)))){
return (new shadow.dom.Size(self__.w,G__41649,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__41649),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__41649){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__41649,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__41653){
var extmap__5342__auto__ = (function (){var G__41715 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__41653,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__41653)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41715);
} else {
return G__41715;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__41653),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__41653),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__42516 = (i + (1));
var G__42517 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__42516;
ret = G__42517;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41726){
var vec__41727 = p__41726;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41727,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41727,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__41731 = arguments.length;
switch (G__41731) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__42523 = ps;
var G__42524 = (i + (1));
el__$1 = G__42523;
i = G__42524;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__41904 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41904,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41904,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41904,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__41916_42525 = cljs.core.seq(props);
var chunk__41917_42526 = null;
var count__41918_42527 = (0);
var i__41919_42528 = (0);
while(true){
if((i__41919_42528 < count__41918_42527)){
var vec__41944_42529 = chunk__41917_42526.cljs$core$IIndexed$_nth$arity$2(null,i__41919_42528);
var k_42530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41944_42529,(0),null);
var v_42531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41944_42529,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_42530);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_42530),v_42531);


var G__42533 = seq__41916_42525;
var G__42535 = chunk__41917_42526;
var G__42536 = count__41918_42527;
var G__42537 = (i__41919_42528 + (1));
seq__41916_42525 = G__42533;
chunk__41917_42526 = G__42535;
count__41918_42527 = G__42536;
i__41919_42528 = G__42537;
continue;
} else {
var temp__5804__auto___42538 = cljs.core.seq(seq__41916_42525);
if(temp__5804__auto___42538){
var seq__41916_42539__$1 = temp__5804__auto___42538;
if(cljs.core.chunked_seq_QMARK_(seq__41916_42539__$1)){
var c__5525__auto___42540 = cljs.core.chunk_first(seq__41916_42539__$1);
var G__42541 = cljs.core.chunk_rest(seq__41916_42539__$1);
var G__42542 = c__5525__auto___42540;
var G__42543 = cljs.core.count(c__5525__auto___42540);
var G__42544 = (0);
seq__41916_42525 = G__42541;
chunk__41917_42526 = G__42542;
count__41918_42527 = G__42543;
i__41919_42528 = G__42544;
continue;
} else {
var vec__41979_42545 = cljs.core.first(seq__41916_42539__$1);
var k_42546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41979_42545,(0),null);
var v_42547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41979_42545,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_42546);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_42546),v_42547);


var G__42550 = cljs.core.next(seq__41916_42539__$1);
var G__42551 = null;
var G__42552 = (0);
var G__42553 = (0);
seq__41916_42525 = G__42550;
chunk__41917_42526 = G__42551;
count__41918_42527 = G__42552;
i__41919_42528 = G__42553;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__42024 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42024,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42024,(1),null);
var seq__42031_42556 = cljs.core.seq(node_children);
var chunk__42033_42557 = null;
var count__42034_42558 = (0);
var i__42035_42559 = (0);
while(true){
if((i__42035_42559 < count__42034_42558)){
var child_struct_42560 = chunk__42033_42557.cljs$core$IIndexed$_nth$arity$2(null,i__42035_42559);
if((!((child_struct_42560 == null)))){
if(typeof child_struct_42560 === 'string'){
var text_42561 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_42561),child_struct_42560].join(''));
} else {
var children_42562 = shadow.dom.svg_node(child_struct_42560);
if(cljs.core.seq_QMARK_(children_42562)){
var seq__42117_42563 = cljs.core.seq(children_42562);
var chunk__42119_42564 = null;
var count__42120_42565 = (0);
var i__42121_42566 = (0);
while(true){
if((i__42121_42566 < count__42120_42565)){
var child_42567 = chunk__42119_42564.cljs$core$IIndexed$_nth$arity$2(null,i__42121_42566);
if(cljs.core.truth_(child_42567)){
node.appendChild(child_42567);


var G__42568 = seq__42117_42563;
var G__42569 = chunk__42119_42564;
var G__42570 = count__42120_42565;
var G__42571 = (i__42121_42566 + (1));
seq__42117_42563 = G__42568;
chunk__42119_42564 = G__42569;
count__42120_42565 = G__42570;
i__42121_42566 = G__42571;
continue;
} else {
var G__42572 = seq__42117_42563;
var G__42573 = chunk__42119_42564;
var G__42574 = count__42120_42565;
var G__42575 = (i__42121_42566 + (1));
seq__42117_42563 = G__42572;
chunk__42119_42564 = G__42573;
count__42120_42565 = G__42574;
i__42121_42566 = G__42575;
continue;
}
} else {
var temp__5804__auto___42576 = cljs.core.seq(seq__42117_42563);
if(temp__5804__auto___42576){
var seq__42117_42577__$1 = temp__5804__auto___42576;
if(cljs.core.chunked_seq_QMARK_(seq__42117_42577__$1)){
var c__5525__auto___42578 = cljs.core.chunk_first(seq__42117_42577__$1);
var G__42579 = cljs.core.chunk_rest(seq__42117_42577__$1);
var G__42580 = c__5525__auto___42578;
var G__42581 = cljs.core.count(c__5525__auto___42578);
var G__42582 = (0);
seq__42117_42563 = G__42579;
chunk__42119_42564 = G__42580;
count__42120_42565 = G__42581;
i__42121_42566 = G__42582;
continue;
} else {
var child_42583 = cljs.core.first(seq__42117_42577__$1);
if(cljs.core.truth_(child_42583)){
node.appendChild(child_42583);


var G__42584 = cljs.core.next(seq__42117_42577__$1);
var G__42585 = null;
var G__42586 = (0);
var G__42587 = (0);
seq__42117_42563 = G__42584;
chunk__42119_42564 = G__42585;
count__42120_42565 = G__42586;
i__42121_42566 = G__42587;
continue;
} else {
var G__42588 = cljs.core.next(seq__42117_42577__$1);
var G__42589 = null;
var G__42590 = (0);
var G__42591 = (0);
seq__42117_42563 = G__42588;
chunk__42119_42564 = G__42589;
count__42120_42565 = G__42590;
i__42121_42566 = G__42591;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_42562);
}
}


var G__42592 = seq__42031_42556;
var G__42593 = chunk__42033_42557;
var G__42594 = count__42034_42558;
var G__42595 = (i__42035_42559 + (1));
seq__42031_42556 = G__42592;
chunk__42033_42557 = G__42593;
count__42034_42558 = G__42594;
i__42035_42559 = G__42595;
continue;
} else {
var G__42600 = seq__42031_42556;
var G__42601 = chunk__42033_42557;
var G__42602 = count__42034_42558;
var G__42603 = (i__42035_42559 + (1));
seq__42031_42556 = G__42600;
chunk__42033_42557 = G__42601;
count__42034_42558 = G__42602;
i__42035_42559 = G__42603;
continue;
}
} else {
var temp__5804__auto___42604 = cljs.core.seq(seq__42031_42556);
if(temp__5804__auto___42604){
var seq__42031_42605__$1 = temp__5804__auto___42604;
if(cljs.core.chunked_seq_QMARK_(seq__42031_42605__$1)){
var c__5525__auto___42606 = cljs.core.chunk_first(seq__42031_42605__$1);
var G__42607 = cljs.core.chunk_rest(seq__42031_42605__$1);
var G__42608 = c__5525__auto___42606;
var G__42609 = cljs.core.count(c__5525__auto___42606);
var G__42610 = (0);
seq__42031_42556 = G__42607;
chunk__42033_42557 = G__42608;
count__42034_42558 = G__42609;
i__42035_42559 = G__42610;
continue;
} else {
var child_struct_42614 = cljs.core.first(seq__42031_42605__$1);
if((!((child_struct_42614 == null)))){
if(typeof child_struct_42614 === 'string'){
var text_42615 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_42615),child_struct_42614].join(''));
} else {
var children_42617 = shadow.dom.svg_node(child_struct_42614);
if(cljs.core.seq_QMARK_(children_42617)){
var seq__42144_42618 = cljs.core.seq(children_42617);
var chunk__42146_42619 = null;
var count__42147_42620 = (0);
var i__42148_42621 = (0);
while(true){
if((i__42148_42621 < count__42147_42620)){
var child_42626 = chunk__42146_42619.cljs$core$IIndexed$_nth$arity$2(null,i__42148_42621);
if(cljs.core.truth_(child_42626)){
node.appendChild(child_42626);


var G__42627 = seq__42144_42618;
var G__42628 = chunk__42146_42619;
var G__42629 = count__42147_42620;
var G__42630 = (i__42148_42621 + (1));
seq__42144_42618 = G__42627;
chunk__42146_42619 = G__42628;
count__42147_42620 = G__42629;
i__42148_42621 = G__42630;
continue;
} else {
var G__42631 = seq__42144_42618;
var G__42632 = chunk__42146_42619;
var G__42633 = count__42147_42620;
var G__42634 = (i__42148_42621 + (1));
seq__42144_42618 = G__42631;
chunk__42146_42619 = G__42632;
count__42147_42620 = G__42633;
i__42148_42621 = G__42634;
continue;
}
} else {
var temp__5804__auto___42636__$1 = cljs.core.seq(seq__42144_42618);
if(temp__5804__auto___42636__$1){
var seq__42144_42638__$1 = temp__5804__auto___42636__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42144_42638__$1)){
var c__5525__auto___42639 = cljs.core.chunk_first(seq__42144_42638__$1);
var G__42640 = cljs.core.chunk_rest(seq__42144_42638__$1);
var G__42641 = c__5525__auto___42639;
var G__42642 = cljs.core.count(c__5525__auto___42639);
var G__42643 = (0);
seq__42144_42618 = G__42640;
chunk__42146_42619 = G__42641;
count__42147_42620 = G__42642;
i__42148_42621 = G__42643;
continue;
} else {
var child_42644 = cljs.core.first(seq__42144_42638__$1);
if(cljs.core.truth_(child_42644)){
node.appendChild(child_42644);


var G__42645 = cljs.core.next(seq__42144_42638__$1);
var G__42646 = null;
var G__42647 = (0);
var G__42648 = (0);
seq__42144_42618 = G__42645;
chunk__42146_42619 = G__42646;
count__42147_42620 = G__42647;
i__42148_42621 = G__42648;
continue;
} else {
var G__42649 = cljs.core.next(seq__42144_42638__$1);
var G__42650 = null;
var G__42651 = (0);
var G__42652 = (0);
seq__42144_42618 = G__42649;
chunk__42146_42619 = G__42650;
count__42147_42620 = G__42651;
i__42148_42621 = G__42652;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_42617);
}
}


var G__42653 = cljs.core.next(seq__42031_42605__$1);
var G__42654 = null;
var G__42655 = (0);
var G__42656 = (0);
seq__42031_42556 = G__42653;
chunk__42033_42557 = G__42654;
count__42034_42558 = G__42655;
i__42035_42559 = G__42656;
continue;
} else {
var G__42657 = cljs.core.next(seq__42031_42605__$1);
var G__42658 = null;
var G__42659 = (0);
var G__42660 = (0);
seq__42031_42556 = G__42657;
chunk__42033_42557 = G__42658;
count__42034_42558 = G__42659;
i__42035_42559 = G__42660;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___42666 = arguments.length;
var i__5727__auto___42667 = (0);
while(true){
if((i__5727__auto___42667 < len__5726__auto___42666)){
args__5732__auto__.push((arguments[i__5727__auto___42667]));

var G__42668 = (i__5727__auto___42667 + (1));
i__5727__auto___42667 = G__42668;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq42186){
var G__42187 = cljs.core.first(seq42186);
var seq42186__$1 = cljs.core.next(seq42186);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42187,seq42186__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__42198 = arguments.length;
switch (G__42198) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5000__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5000__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5000__auto__;
}
})())){
var c__38850__auto___42689 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__38851__auto__ = (function (){var switch__38430__auto__ = (function (state_42204){
var state_val_42205 = (state_42204[(1)]);
if((state_val_42205 === (1))){
var state_42204__$1 = state_42204;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42204__$1,(2),once_or_cleanup);
} else {
if((state_val_42205 === (2))){
var inst_42201 = (state_42204[(2)]);
var inst_42202 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_42204__$1 = (function (){var statearr_42206 = state_42204;
(statearr_42206[(7)] = inst_42201);

return statearr_42206;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42204__$1,inst_42202);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__38431__auto__ = null;
var shadow$dom$state_machine__38431__auto____0 = (function (){
var statearr_42207 = [null,null,null,null,null,null,null,null];
(statearr_42207[(0)] = shadow$dom$state_machine__38431__auto__);

(statearr_42207[(1)] = (1));

return statearr_42207;
});
var shadow$dom$state_machine__38431__auto____1 = (function (state_42204){
while(true){
var ret_value__38432__auto__ = (function (){try{while(true){
var result__38433__auto__ = switch__38430__auto__(state_42204);
if(cljs.core.keyword_identical_QMARK_(result__38433__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38433__auto__;
}
break;
}
}catch (e42208){var ex__38434__auto__ = e42208;
var statearr_42209_42695 = state_42204;
(statearr_42209_42695[(2)] = ex__38434__auto__);


if(cljs.core.seq((state_42204[(4)]))){
var statearr_42210_42696 = state_42204;
(statearr_42210_42696[(1)] = cljs.core.first((state_42204[(4)])));

} else {
throw ex__38434__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42697 = state_42204;
state_42204 = G__42697;
continue;
} else {
return ret_value__38432__auto__;
}
break;
}
});
shadow$dom$state_machine__38431__auto__ = function(state_42204){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__38431__auto____0.call(this);
case 1:
return shadow$dom$state_machine__38431__auto____1.call(this,state_42204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__38431__auto____0;
shadow$dom$state_machine__38431__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__38431__auto____1;
return shadow$dom$state_machine__38431__auto__;
})()
})();
var state__38852__auto__ = (function (){var statearr_42211 = f__38851__auto__();
(statearr_42211[(6)] = c__38850__auto___42689);

return statearr_42211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38852__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
