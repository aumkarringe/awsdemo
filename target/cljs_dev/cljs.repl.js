var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./cljs.spec.alpha.js");
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var goog=$CLJS.goog || ($CLJS.goog = {});

$CLJS.SHADOW_ENV.setLoaded("cljs.repl.js");

goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__41647){
var map__41648 = p__41647;
var map__41648__$1 = cljs.core.__destructure_map(map__41648);
var m = map__41648__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41648__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41648__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41661_41939 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41662_41940 = null;
var count__41663_41941 = (0);
var i__41664_41942 = (0);
while(true){
if((i__41664_41942 < count__41663_41941)){
var f_41943 = chunk__41662_41940.cljs$core$IIndexed$_nth$arity$2(null,i__41664_41942);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_41943], 0));


var G__41947 = seq__41661_41939;
var G__41948 = chunk__41662_41940;
var G__41949 = count__41663_41941;
var G__41950 = (i__41664_41942 + (1));
seq__41661_41939 = G__41947;
chunk__41662_41940 = G__41948;
count__41663_41941 = G__41949;
i__41664_41942 = G__41950;
continue;
} else {
var temp__5804__auto___41952 = cljs.core.seq(seq__41661_41939);
if(temp__5804__auto___41952){
var seq__41661_41953__$1 = temp__5804__auto___41952;
if(cljs.core.chunked_seq_QMARK_(seq__41661_41953__$1)){
var c__5525__auto___41954 = cljs.core.chunk_first(seq__41661_41953__$1);
var G__41955 = cljs.core.chunk_rest(seq__41661_41953__$1);
var G__41956 = c__5525__auto___41954;
var G__41957 = cljs.core.count(c__5525__auto___41954);
var G__41958 = (0);
seq__41661_41939 = G__41955;
chunk__41662_41940 = G__41956;
count__41663_41941 = G__41957;
i__41664_41942 = G__41958;
continue;
} else {
var f_41983 = cljs.core.first(seq__41661_41953__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_41983], 0));


var G__41984 = cljs.core.next(seq__41661_41953__$1);
var G__41985 = null;
var G__41986 = (0);
var G__41987 = (0);
seq__41661_41939 = G__41984;
chunk__41662_41940 = G__41985;
count__41663_41941 = G__41986;
i__41664_41942 = G__41987;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41988 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_41988], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_41988)))?cljs.core.second(arglists_41988):arglists_41988)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41681_41992 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41682_41993 = null;
var count__41683_41994 = (0);
var i__41684_41995 = (0);
while(true){
if((i__41684_41995 < count__41683_41994)){
var vec__41701_41997 = chunk__41682_41993.cljs$core$IIndexed$_nth$arity$2(null,i__41684_41995);
var name_41998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41701_41997,(0),null);
var map__41704_41999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41701_41997,(1),null);
var map__41704_42000__$1 = cljs.core.__destructure_map(map__41704_41999);
var doc_42001 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41704_42000__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41704_42000__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_41998], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_42002], 0));

if(cljs.core.truth_(doc_42001)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_42001], 0));
} else {
}


var G__42004 = seq__41681_41992;
var G__42005 = chunk__41682_41993;
var G__42006 = count__41683_41994;
var G__42007 = (i__41684_41995 + (1));
seq__41681_41992 = G__42004;
chunk__41682_41993 = G__42005;
count__41683_41994 = G__42006;
i__41684_41995 = G__42007;
continue;
} else {
var temp__5804__auto___42008 = cljs.core.seq(seq__41681_41992);
if(temp__5804__auto___42008){
var seq__41681_42009__$1 = temp__5804__auto___42008;
if(cljs.core.chunked_seq_QMARK_(seq__41681_42009__$1)){
var c__5525__auto___42011 = cljs.core.chunk_first(seq__41681_42009__$1);
var G__42013 = cljs.core.chunk_rest(seq__41681_42009__$1);
var G__42014 = c__5525__auto___42011;
var G__42015 = cljs.core.count(c__5525__auto___42011);
var G__42016 = (0);
seq__41681_41992 = G__42013;
chunk__41682_41993 = G__42014;
count__41683_41994 = G__42015;
i__41684_41995 = G__42016;
continue;
} else {
var vec__41711_42017 = cljs.core.first(seq__41681_42009__$1);
var name_42018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41711_42017,(0),null);
var map__41714_42019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41711_42017,(1),null);
var map__41714_42020__$1 = cljs.core.__destructure_map(map__41714_42019);
var doc_42021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41714_42020__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42022 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41714_42020__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_42018], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_42022], 0));

if(cljs.core.truth_(doc_42021)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_42021], 0));
} else {
}


var G__42027 = cljs.core.next(seq__41681_42009__$1);
var G__42028 = null;
var G__42029 = (0);
var G__42030 = (0);
seq__41681_41992 = G__42027;
chunk__41682_41993 = G__42028;
count__41683_41994 = G__42029;
i__41684_41995 = G__42030;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__41718 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__41719 = null;
var count__41720 = (0);
var i__41721 = (0);
while(true){
if((i__41721 < count__41720)){
var role = chunk__41719.cljs$core$IIndexed$_nth$arity$2(null,i__41721);
var temp__5804__auto___42056__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___42056__$1)){
var spec_42057 = temp__5804__auto___42056__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_42057)], 0));
} else {
}


var G__42058 = seq__41718;
var G__42059 = chunk__41719;
var G__42060 = count__41720;
var G__42061 = (i__41721 + (1));
seq__41718 = G__42058;
chunk__41719 = G__42059;
count__41720 = G__42060;
i__41721 = G__42061;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__41718);
if(temp__5804__auto____$1){
var seq__41718__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__41718__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__41718__$1);
var G__42062 = cljs.core.chunk_rest(seq__41718__$1);
var G__42063 = c__5525__auto__;
var G__42064 = cljs.core.count(c__5525__auto__);
var G__42065 = (0);
seq__41718 = G__42062;
chunk__41719 = G__42063;
count__41720 = G__42064;
i__41721 = G__42065;
continue;
} else {
var role = cljs.core.first(seq__41718__$1);
var temp__5804__auto___42066__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___42066__$2)){
var spec_42067 = temp__5804__auto___42066__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_42067)], 0));
} else {
}


var G__42068 = cljs.core.next(seq__41718__$1);
var G__42069 = null;
var G__42070 = (0);
var G__42071 = (0);
seq__41718 = G__42068;
chunk__41719 = G__42069;
count__41720 = G__42070;
i__41721 = G__42071;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__41758 = datafied_throwable;
var map__41758__$1 = cljs.core.__destructure_map(map__41758);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41758__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41758__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41758__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__41760 = cljs.core.last(via);
var map__41760__$1 = cljs.core.__destructure_map(map__41760);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41760__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41760__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41760__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__41761 = data;
var map__41761__$1 = cljs.core.__destructure_map(map__41761);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41761__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41761__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41761__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__41762 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__41762__$1 = cljs.core.__destructure_map(map__41762);
var top_data = map__41762__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41762__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__41808 = phase;
var G__41808__$1 = (((G__41808 instanceof cljs.core.Keyword))?G__41808.fqn:null);
switch (G__41808__$1) {
case "read-source":
var map__41823 = data;
var map__41823__$1 = cljs.core.__destructure_map(map__41823);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41823__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41823__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__41827 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__41827__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41827,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__41827);
var G__41827__$2 = (cljs.core.truth_((function (){var fexpr__41828 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__41828.cljs$core$IFn$_invoke$arity$1 ? fexpr__41828.cljs$core$IFn$_invoke$arity$1(source) : fexpr__41828.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__41827__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__41827__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41827__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__41827__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__41829 = top_data;
var G__41829__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41829,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__41829);
var G__41829__$2 = (cljs.core.truth_((function (){var fexpr__41838 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__41838.cljs$core$IFn$_invoke$arity$1 ? fexpr__41838.cljs$core$IFn$_invoke$arity$1(source) : fexpr__41838.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__41829__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__41829__$1);
var G__41829__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41829__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__41829__$2);
var G__41829__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41829__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__41829__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41829__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__41829__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__41843 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41843,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41843,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41843,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41843,(3),null);
var G__41846 = top_data;
var G__41846__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41846,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__41846);
var G__41846__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41846__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__41846__$1);
var G__41846__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41846__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__41846__$2);
var G__41846__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41846__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__41846__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41846__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__41846__$4;
}

break;
case "execution":
var vec__41848 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41848,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41848,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41848,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41848,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__41750_SHARP_){
var or__5002__auto__ = (p1__41750_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__41851 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__41851.cljs$core$IFn$_invoke$arity$1 ? fexpr__41851.cljs$core$IFn$_invoke$arity$1(p1__41750_SHARP_) : fexpr__41851.call(null,p1__41750_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__41852 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__41852__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41852,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__41852);
var G__41852__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41852__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__41852__$1);
var G__41852__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41852__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__41852__$2);
var G__41852__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41852__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__41852__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41852__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__41852__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41808__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__41867){
var map__41869 = p__41867;
var map__41869__$1 = cljs.core.__destructure_map(map__41869);
var triage_data = map__41869__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41869__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41869__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41869__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41869__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41869__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41869__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41869__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41869__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__41874 = phase;
var G__41874__$1 = (((G__41874 instanceof cljs.core.Keyword))?G__41874.fqn:null);
switch (G__41874__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__41875 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__41876 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41877 = loc;
var G__41878 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__41881_42108 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41882_42109 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41883_42110 = true;
var _STAR_print_fn_STAR__temp_val__41884_42111 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41883_42110);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41884_42111);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41862_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__41862_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41882_42109);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41881_42108);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__41875,G__41876,G__41877,G__41878) : format.call(null,G__41875,G__41876,G__41877,G__41878));

break;
case "macroexpansion":
var G__41887 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__41888 = cause_type;
var G__41889 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41890 = loc;
var G__41891 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41887,G__41888,G__41889,G__41890,G__41891) : format.call(null,G__41887,G__41888,G__41889,G__41890,G__41891));

break;
case "compile-syntax-check":
var G__41893 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__41894 = cause_type;
var G__41895 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41896 = loc;
var G__41897 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41893,G__41894,G__41895,G__41896,G__41897) : format.call(null,G__41893,G__41894,G__41895,G__41896,G__41897));

break;
case "compilation":
var G__41899 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__41900 = cause_type;
var G__41901 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41902 = loc;
var G__41903 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41899,G__41900,G__41901,G__41902,G__41903) : format.call(null,G__41899,G__41900,G__41901,G__41902,G__41903));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__41907 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__41908 = symbol;
var G__41909 = loc;
var G__41910 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__41911_42112 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41912_42113 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41913_42114 = true;
var _STAR_print_fn_STAR__temp_val__41914_42115 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41913_42114);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41914_42115);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41865_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__41865_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41912_42113);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41911_42112);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__41907,G__41908,G__41909,G__41910) : format.call(null,G__41907,G__41908,G__41909,G__41910));
} else {
var G__41923 = "Execution error%s at %s(%s).\n%s\n";
var G__41924 = cause_type;
var G__41925 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41926 = loc;
var G__41927 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41923,G__41924,G__41925,G__41926,G__41927) : format.call(null,G__41923,G__41924,G__41925,G__41926,G__41927));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41874__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
