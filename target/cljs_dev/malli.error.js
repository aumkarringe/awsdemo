var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
require("./clojure.string.js");
require("./malli.core.js");
require("./malli.util.js");
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

$CLJS.SHADOW_ENV.setLoaded("malli.error.js");

goog.provide('malli.error');
malli.error._pred_min_max_error_fn = (function malli$error$_pred_min_max_error_fn(p__53773){
var map__53774 = p__53773;
var map__53774__$1 = cljs.core.__destructure_map(map__53774);
var pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53774__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53774__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return (function (p__53781,_){
var map__53782 = p__53781;
var map__53782__$1 = cljs.core.__destructure_map(map__53782);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53782__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53782__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__53783 = malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema);
var map__53783__$1 = cljs.core.__destructure_map(map__53783);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53783__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53783__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core.not((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(value) : pred.call(null,value)))){
return message;
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = min;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(min,max);
} else {
return and__5000__auto__;
}
})())){
return ["should be ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(min)].join('');
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = min;
if(cljs.core.truth_(and__5000__auto__)){
return max;
} else {
return and__5000__auto__;
}
})())){
return ["should be between ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(min)," and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max)].join('');
} else {
if(cljs.core.truth_(min)){
return ["should be at least ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(min)].join('');
} else {
if(cljs.core.truth_(max)){
return ["should be at most ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max)].join('');
} else {
return null;
}
}
}
}
}
});
});
malli.error.default_errors = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("malli.core","extra-key","malli.core/extra-key",574816512),new cljs.core.Symbol(null,"true?","true?",-1600332395,null),new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"qualified-symbol","qualified-symbol",-665513695),new cljs.core.Symbol(null,"uri?","uri?",2029475116,null),new cljs.core.Symbol(null,"simple-keyword?","simple-keyword?",-367134735,null),new cljs.core.Keyword(null,"<=","<=",-395636158),new cljs.core.Keyword(null,"double","double",884886883),new cljs.core.Symbol(null,"uuid?","uuid?",400077689,null),new cljs.core.Symbol(null,"inst?","inst?",1614698981,null),new cljs.core.Symbol(null,"simple-ident?","simple-ident?",194189851,null),new cljs.core.Keyword(null,"not=","not=",-173995323),new cljs.core.Symbol(null,"int?","int?",1799729645,null),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Symbol(null,"float?","float?",673884616,null),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"any?","any?",-318999933,null),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Symbol(null,"false?","false?",-1522377573,null),new cljs.core.Symbol(null,"associative?","associative?",-141666771,null),new cljs.core.Keyword(null,"re","re",228676202),new cljs.core.Symbol(null,"ident?","ident?",-2061359468,null),new cljs.core.Keyword(null,"qualified-keyword","qualified-keyword",736041675),new cljs.core.Symbol(null,"char?","char?",-1072221244,null),new cljs.core.Symbol(null,"neg-int?","neg-int?",-1610409390,null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),new cljs.core.Keyword(null,">=",">=",-623615505),new cljs.core.Symbol(null,"list?","list?",-1494629,null),new cljs.core.Keyword("malli.error","misspelled-value","malli.error/misspelled-value",-1135752848),new cljs.core.Symbol(null,"qualified-ident?","qualified-ident?",-928894763,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.Keyword(null,"=>","=>",1841166128),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Keyword("malli.core","limits","malli.core/limits",-1343466863),new cljs.core.Symbol(null,"simple-symbol?","simple-symbol?",1408454822,null),new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Keyword("malli.core","missing-key","malli.core/missing-key",1439107666),new cljs.core.Keyword("malli.core","tuple-size","malli.core/tuple-size",-1004468077),new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Symbol(null,"qualified-keyword?","qualified-keyword?",375456001,null),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Keyword("malli.core","end-of-input","malli.core/end-of-input",-491237771),new cljs.core.Symbol(null,"qualified-symbol?","qualified-symbol?",98763807,null),new cljs.core.Keyword("malli.core","input-remaining","malli.core/input-remaining",372310422),new cljs.core.Symbol(null,"seq?","seq?",-1951934719,null),new cljs.core.Symbol(null,"nat-int?","nat-int?",-1879663400,null),new cljs.core.Symbol(null,"set?","set?",1636014792,null),new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"boolean?","boolean?",1790940868,null),new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"sequential?","sequential?",1102351463,null),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword("malli.error","unknown","malli.error/unknown",594142330),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),new cljs.core.Keyword("malli.core","invalid-dispatch-value","malli.core/invalid-dispatch-value",516707675),new cljs.core.Symbol(null,"double?","double?",-2146564276,null),new cljs.core.Symbol(null,"seqable?","seqable?",72462495,null),new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"<","<",-646864291),new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null),new cljs.core.Keyword("malli.error","misspelled-key","malli.error/misspelled-key",616486174),new cljs.core.Keyword("malli.core","invalid-type","malli.core/invalid-type",-1367388450),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null),new cljs.core.Keyword(null,"any","any",1705907423),new cljs.core.Symbol(null,"indexed?","indexed?",1234610384,null)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"disallowed key"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be true"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__53808,_){
var map__53809 = p__53808;
var map__53809__$1 = cljs.core.__destructure_map(map__53809);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53809__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
return ["should be ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema))))?cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema)):["either ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.butlast(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema)))," or ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema)))].join('')))].join('');
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a qualified symbol"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a uri"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a simple keyword"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__53810,_){
var map__53811 = p__53810;
var map__53811__$1 = cljs.core.__destructure_map(map__53811);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53811__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53811__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(typeof value === 'number'){
return ["should be at most ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema)))].join('');
} else {
return "should be a number";
}
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),malli.error._pred_min_max_error_fn(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.double_QMARK_,new cljs.core.Keyword(null,"message","message",-406056002),"should be a double"], null))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a uuid"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be an inst"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a simple ident"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__53813,_){
var map__53814 = p__53813;
var map__53814__$1 = cljs.core.__destructure_map(map__53814);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53814__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
return ["should not be ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema)))].join('');
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be an int"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be nil"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),malli.error._pred_min_max_error_fn(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.int_QMARK_,new cljs.core.Keyword(null,"message","message",-406056002),"should be an integer"], null))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__53824,_){
var map__53825 = p__53824;
var map__53825__$1 = cljs.core.__destructure_map(map__53825);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53825__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53825__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(typeof value === 'number'){
return ["should be larger than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema)))].join('');
} else {
return "should be a number";
}
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a float"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be an ifn"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a map"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a vector"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be any"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a symbol"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be false"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be an associative"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should match regex"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be an ident"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a qualified keyword"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a char"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a negative int"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__53828,_){
var map__53829 = p__53828;
var map__53829__$1 = cljs.core.__destructure_map(map__53829);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53829__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53829__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__53830 = malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema);
var map__53830__$1 = cljs.core.__destructure_map(map__53830);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53830__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53830__$1,new cljs.core.Keyword(null,"max","max",61366548));
if((!(typeof value === 'string'))){
return "should be a string";
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = min;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(min,max);
} else {
return and__5000__auto__;
}
})())){
return ["should be ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(min)," characters"].join('');
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = min;
if(cljs.core.truth_(and__5000__auto__)){
return max;
} else {
return and__5000__auto__;
}
})())){
return ["should be between ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(min)," and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max)," characters"].join('');
} else {
if(cljs.core.truth_(min)){
return ["should be at least ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(min)," characters"].join('');
} else {
if(cljs.core.truth_(max)){
return ["should be at most ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max)," characters"].join('');
} else {
return null;
}
}
}
}
}
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a symbol"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__53832,_){
var map__53833 = p__53832;
var map__53833__$1 = cljs.core.__destructure_map(map__53833);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53833__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53833__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(typeof value === 'number'){
return ["should be at least ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema)))].join('');
} else {
return "should be a number";
}
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a list"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__53834,_){
var map__53835 = p__53834;
var map__53835__$1 = cljs.core.__destructure_map(map__53835);
var likely_misspelling_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53835__$1,new cljs.core.Keyword("malli.error","likely-misspelling-of","malli.error/likely-misspelling-of",1504085033));
return ["did you mean ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" or ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,likely_misspelling_of))].join('');
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a qualified ident"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a coll"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"invalid function"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a keyword"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__53836,_){
var map__53837 = p__53836;
var map__53837__$1 = cljs.core.__destructure_map(map__53837);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53837__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var _value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53837__$1,new cljs.core.Keyword(null,"_value","_value",1295875052));
var map__53839 = malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema);
var map__53839__$1 = cljs.core.__destructure_map(map__53839);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53839__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53839__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core.truth_((function (){var and__5000__auto__ = min;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(min,max);
} else {
return and__5000__auto__;
}
})())){
return ["should have ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(min)," elements"].join('');
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = min;
if(cljs.core.truth_(and__5000__auto__)){
return max;
} else {
return and__5000__auto__;
}
})())){
return ["should have between ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(min)," and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max)," elements"].join('');
} else {
if(cljs.core.truth_(min)){
return ["should have at least ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(min)," elements"].join('');
} else {
if(cljs.core.truth_(max)){
return ["should have at most ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max)," elements"].join('');
} else {
return null;
}
}
}
}
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a simple symbol"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be empty"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be an integer"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"missing required key"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__53841,_){
var map__53842 = p__53841;
var map__53842__$1 = cljs.core.__destructure_map(map__53842);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53842__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53842__$1,new cljs.core.Keyword(null,"value","value",305978217));
var size = cljs.core.count(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema));
return ["invalid tuple size ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(value)),", expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)].join('');
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be zero"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a keyword"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be nil"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a qualified keyword"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a string"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"end of input"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a qualified symbol"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"input remaining"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a seq"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a non-negative int"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a set"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be some"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be positive"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a boolean"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be an fn"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a sequential"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a uuid"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"unknown error"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a number"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"invalid dispatch value"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a double"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a seqable"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__53847,_){
var map__53848 = p__53847;
var map__53848__$1 = cljs.core.__destructure_map(map__53848);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53848__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
return ["should be ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema)))].join('');
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a boolean"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__53849,_){
var map__53850 = p__53849;
var map__53850__$1 = cljs.core.__destructure_map(map__53850);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53850__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53850__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(typeof value === 'number'){
return ["should be smaller than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$1(schema)))].join('');
} else {
return "should be a number";
}
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be negative"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","fn","error/fn",-1263293860),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),(function (p__53852,_){
var map__53853 = p__53852;
var map__53853__$1 = cljs.core.__destructure_map(map__53853);
var likely_misspelling_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53853__$1,new cljs.core.Keyword("malli.error","likely-misspelling-of","malli.error/likely-misspelling-of",1504085033));
return ["should be spelled ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(" or ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,likely_misspelling_of))].join('');
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"invalid type"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be a positive int"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be any"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"en","en",88457073),"should be an indexed"], null)], null)]);
malli.error._maybe_localized = (function malli$error$_maybe_localized(x,locale){
if(cljs.core.map_QMARK_(x)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,locale);
} else {
return x;
}
});
malli.error._message = (function malli$error$_message(error,props,locale,options){
var options__$1 = (function (){var or__5002__auto__ = options;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return malli.core.options.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(error));
}
})();
if(cljs.core.truth_(props)){
var or__5002__auto__ = (function (){var temp__5804__auto__ = malli.error._maybe_localized(new cljs.core.Keyword("error","fn","error/fn",-1263293860).cljs$core$IFn$_invoke$arity$1(props),locale);
if(cljs.core.truth_(temp__5804__auto__)){
var fn = temp__5804__auto__;
var fexpr__53858 = malli.core.eval.cljs$core$IFn$_invoke$arity$2(fn,options__$1);
return (fexpr__53858.cljs$core$IFn$_invoke$arity$2 ? fexpr__53858.cljs$core$IFn$_invoke$arity$2(error,options__$1) : fexpr__53858.call(null,error,options__$1));
} else {
return null;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return malli.error._maybe_localized(new cljs.core.Keyword("error","message","error/message",-502809098).cljs$core$IFn$_invoke$arity$1(props),locale);
}
} else {
return null;
}
});
malli.error._error = (function malli$error$_error(e){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("malli.error","error","malli.error/error",-522553785),true], null));
});
malli.error._error_QMARK_ = (function malli$error$_error_QMARK_(x){
return new cljs.core.Keyword("malli.error","error","malli.error/error",-522553785).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x));
});
malli.error._get = (function malli$error$_get(x,k){
if(((cljs.core.set_QMARK_(x)) || (cljs.core.associative_QMARK_(x)))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,k);
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(x),k);
} else {
return null;
}
}
});
malli.error._concat = (function malli$error$_concat(x,y){
var G__53859 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(x,y);
if((((!((x == null)))) && ((!(cljs.core.seq_QMARK_(x)))))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(x),G__53859);
} else {
return G__53859;
}
});
malli.error._fill = (function malli$error$_fill(x,i,fill){
return malli.error._concat(x,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((i - cljs.core.count(x)),fill));
});
malli.error._push = (function malli$error$_push(x,k,v,fill){
var x_SINGLEQUOTE_ = (function (){var G__53869 = x;
if(((cljs.core.int_QMARK_(k)) && (((cljs.core.sequential_QMARK_(x)) && ((k > cljs.core.count(x))))))){
return malli.error._fill(G__53869,k,fill);
} else {
return G__53869;
}
})();
if((((x_SINGLEQUOTE_ == null)) || (cljs.core.associative_QMARK_(x_SINGLEQUOTE_)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x_SINGLEQUOTE_,k,v);
} else {
if(cljs.core.set_QMARK_(x_SINGLEQUOTE_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(x_SINGLEQUOTE_,v);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(x_SINGLEQUOTE_),k,v));

}
}
});
malli.error._push_in = (function malli$error$_push_in(a,v,p__53880,e){
var vec__53881 = p__53880;
var seq__53882 = cljs.core.seq(vec__53881);
var first__53883 = cljs.core.first(seq__53882);
var seq__53882__$1 = cljs.core.next(seq__53882);
var p = first__53883;
var ps = seq__53882__$1;
var v_SINGLEQUOTE_ = malli.error._get(v,p);
var a_SINGLEQUOTE_ = (function (){var or__5002__auto__ = a;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.sequential_QMARK_(v)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.record_QMARK_(v)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.empty(v);

}
}
}
})();
if(cljs.core.truth_((function (){var and__5000__auto__ = p;
if(cljs.core.truth_(and__5000__auto__)){
return malli.error._error_QMARK_(a_SINGLEQUOTE_);
} else {
return and__5000__auto__;
}
})())){
return a;
} else {
if(cljs.core.truth_(p)){
return malli.error._push(a_SINGLEQUOTE_,p,(function (){var G__53885 = malli.error._get(a_SINGLEQUOTE_,p);
var G__53886 = v_SINGLEQUOTE_;
var G__53887 = ps;
var G__53888 = e;
return (malli.error._push_in.cljs$core$IFn$_invoke$arity$4 ? malli.error._push_in.cljs$core$IFn$_invoke$arity$4(G__53885,G__53886,G__53887,G__53888) : malli.error._push_in.call(null,G__53885,G__53886,G__53887,G__53888));
})(),null);
} else {
if(cljs.core.map_QMARK_(a)){
var G__53889 = a_SINGLEQUOTE_;
var G__53890 = v;
var G__53891 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli","error","malli/error",-1152359159)], null);
var G__53892 = e;
return (malli.error._push_in.cljs$core$IFn$_invoke$arity$4 ? malli.error._push_in.cljs$core$IFn$_invoke$arity$4(G__53889,G__53890,G__53891,G__53892) : malli.error._push_in.call(null,G__53889,G__53890,G__53891,G__53892));
} else {
if(cljs.core.truth_(malli.error._error_QMARK_(a_SINGLEQUOTE_))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a_SINGLEQUOTE_,e);
} else {
if(cljs.core.vector_QMARK_(cljs.core.not_empty(a_SINGLEQUOTE_))){
return a_SINGLEQUOTE_;
} else {
return malli.error._error(e);

}
}
}
}
}
});
malli.error._path = (function malli$error$_path(p__53907,p__53908){
var map__53911 = p__53907;
var map__53911__$1 = cljs.core.__destructure_map(map__53911);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53911__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var map__53913 = p__53908;
var map__53913__$1 = cljs.core.__destructure_map(map__53913);
var locale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53913__$1,new cljs.core.Keyword(null,"locale","locale",-2115712697));
var default_locale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53913__$1,new cljs.core.Keyword(null,"default-locale","default-locale",-677515761),new cljs.core.Keyword(null,"en","en",88457073));
var properties = malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema);
var or__5002__auto__ = malli.error._maybe_localized(new cljs.core.Keyword("error","path","error/path",-419192760).cljs$core$IFn$_invoke$arity$1(properties),locale);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return malli.error._maybe_localized(new cljs.core.Keyword("error","path","error/path",-419192760).cljs$core$IFn$_invoke$arity$1(properties),default_locale);
}
});
malli.error._replace_in = (function malli$error$_replace_in(a,v,p__53918,e,fill){
var vec__53920 = p__53918;
var seq__53921 = cljs.core.seq(vec__53920);
var first__53922 = cljs.core.first(seq__53921);
var seq__53921__$1 = cljs.core.next(seq__53921);
var p = first__53922;
var ps = seq__53921__$1;
var a_SINGLEQUOTE_ = (function (){var or__5002__auto__ = a;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.record_QMARK_(v)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.empty(v);
}
}
})();
if(cljs.core.truth_(p)){
return malli.error._push((function (){var G__53923 = a_SINGLEQUOTE_;
if(cljs.core.set_QMARK_(a_SINGLEQUOTE_)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(G__53923,p);
} else {
return G__53923;
}
})(),p,(function (){var G__53924 = malli.error._get(a_SINGLEQUOTE_,p);
var G__53925 = malli.error._get(v,p);
var G__53926 = ps;
var G__53927 = e;
var G__53928 = fill;
return (malli.error._replace_in.cljs$core$IFn$_invoke$arity$5 ? malli.error._replace_in.cljs$core$IFn$_invoke$arity$5(G__53924,G__53925,G__53926,G__53927,G__53928) : malli.error._replace_in.call(null,G__53924,G__53925,G__53926,G__53927,G__53928));
})(),fill);
} else {
return e;
}
});
malli.error._error_value = (function malli$error$_error_value(p__53933,options){
var map__53934 = p__53933;
var map__53934__$1 = cljs.core.__destructure_map(map__53934);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53934__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53934__$1,new cljs.core.Keyword(null,"value","value",305978217));
var mask = new cljs.core.Keyword("malli.error","mask-valid-values","malli.error/mask-valid-values",1682135332).cljs$core$IFn$_invoke$arity$1(options);
var accept = new cljs.core.Keyword("malli.error","accept-error","malli.error/accept-error",-1477373739).cljs$core$IFn$_invoke$arity$2(options,(function (p1__53930_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__53930_SHARP_),new cljs.core.Keyword("malli.core","missing-key","malli.core/missing-key",1439107666));
}));
var wrap = new cljs.core.Keyword("malli.error","wrap-error","malli.error/wrap-error",173149242).cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"value","value",305978217));
var acc = (cljs.core.truth_(new cljs.core.Keyword("malli.error","keep-valid-values","malli.error/keep-valid-values",691578138).cljs$core$IFn$_invoke$arity$1(options))?value:null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,error){
var G__53937 = acc__$1;
if(cljs.core.truth_((accept.cljs$core$IFn$_invoke$arity$1 ? accept.cljs$core$IFn$_invoke$arity$1(error) : accept.call(null,error)))){
return malli.error._replace_in(G__53937,value,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(error),(wrap.cljs$core$IFn$_invoke$arity$1 ? wrap.cljs$core$IFn$_invoke$arity$1(error) : wrap.call(null,error)),mask);
} else {
return G__53937;
}
}),acc,errors);
});
malli.error._masked = (function malli$error$_masked(mask,x,y){
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv((function (acc,k,v){
var e = cljs.core.find(y,k);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,(cljs.core.truth_(e)?(function (){var G__53938 = mask;
var G__53939 = v;
var G__53940 = cljs.core.val(e);
return (malli.error._masked.cljs$core$IFn$_invoke$arity$3 ? malli.error._masked.cljs$core$IFn$_invoke$arity$3(G__53938,G__53939,G__53940) : malli.error._masked.call(null,G__53938,G__53939,G__53940));
})():mask));
}),y,x);
} else {
if(cljs.core.set_QMARK_(x)){
var G__53941 = y;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(y))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__53941,mask);
} else {
return G__53941;
}
} else {
if(cljs.core.sequential_QMARK_(x)){
return malli.error._fill(y,cljs.core.count(x),mask);
} else {
return y;

}
}
}
});
malli.error._length__GT_threshold = (function malli$error$_length__GT_threshold(len){
var pred__53944 = (function (p1__53943_SHARP_,p2__53942_SHARP_){
return (p2__53942_SHARP_ <= p1__53943_SHARP_);
});
var expr__53945 = len;
if(pred__53944((2),expr__53945)){
return (0);
} else {
if(pred__53944((5),expr__53945)){
return (1);
} else {
if(pred__53944((6),expr__53945)){
return (2);
} else {
if(pred__53944((11),expr__53945)){
return (3);
} else {
if(pred__53944((20),expr__53945)){
return (4);
} else {
return ((0.2 * len) | (0));
}
}
}
}
}
});
malli.error._next_row = (function malli$error$_next_row(previous,current,other_seq){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (row,p__53947){
var vec__53948 = p__53947;
var diagonal = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53948,(0),null);
var above = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53948,(1),null);
var other = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53948,(2),null);
var update_val = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(other,current))?diagonal:((function (){var x__5090__auto__ = (function (){var x__5090__auto__ = diagonal;
var y__5091__auto__ = above;
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
var y__5091__auto__ = cljs.core.peek(row);
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})() + (1)));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(row,update_val);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.first(previous) + (1))], null),cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,previous,cljs.core.next(previous),other_seq));
});
malli.error._levenshtein = (function malli$error$_levenshtein(sequence1,sequence2){
return cljs.core.peek(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (previous,current){
return malli.error._next_row(previous,current,sequence2);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__53952_SHARP_,p2__53951_SHARP_){
return cljs.core.identity(p2__53951_SHARP_);
}),cljs.core.cons(null,sequence2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),sequence1));
});
malli.error._similar_key = (function malli$error$_similar_key(ky,ky2){
var min_len = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.core._comp.cljs$core$IFn$_invoke$arity$3(cljs.core.count,(function (p1__53953_SHARP_){
if(clojure.string.starts_with_QMARK_(p1__53953_SHARP_,":")){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__53953_SHARP_,(1));
} else {
return p1__53953_SHARP_;
}
}),cljs.core.str),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ky,ky2], null)));
var dist = malli.error._levenshtein(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ky),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ky2));
if((dist <= malli.error._length__GT_threshold(min_len))){
return dist;
} else {
return null;
}
});
malli.error._likely_misspelled = (function malli$error$_likely_misspelled(keys,known_keys,key){
if(cljs.core.truth_((known_keys.cljs$core$IFn$_invoke$arity$1 ? known_keys.cljs$core$IFn$_invoke$arity$1(key) : known_keys.call(null,key)))){
return null;
} else {
return cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(keys,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__53954_SHARP_){
return malli.error._similar_key(p1__53954_SHARP_,key);
}),known_keys)));
}
});
malli.error._most_similar_to = (function malli$error$_most_similar_to(keys,key,known_keys){
return cljs.core.not_empty(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__53964_SHARP_){
return malli.error._levenshtein(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__53964_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key));
}),cljs.core.identity),malli.error._likely_misspelled(keys,known_keys,key))))));
});
malli.error.error_path = (function malli$error$error_path(var_args){
var G__53975 = arguments.length;
switch (G__53975) {
case 1:
return malli.error.error_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.error.error_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.error.error_path.cljs$core$IFn$_invoke$arity$1 = (function (error){
return malli.error.error_path.cljs$core$IFn$_invoke$arity$2(error,null);
}));

(malli.error.error_path.cljs$core$IFn$_invoke$arity$2 = (function (error,options){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(error),malli.error._path(error,options));
}));

(malli.error.error_path.cljs$lang$maxFixedArity = 2);

malli.error.error_message = (function malli$error$error_message(var_args){
var G__53986 = arguments.length;
switch (G__53986) {
case 1:
return malli.error.error_message.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.error.error_message.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.error.error_message.cljs$core$IFn$_invoke$arity$1 = (function (error){
return malli.error.error_message.cljs$core$IFn$_invoke$arity$2(error,null);
}));

(malli.error.error_message.cljs$core$IFn$_invoke$arity$2 = (function (p__53991,p__53992){
var map__53993 = p__53991;
var map__53993__$1 = cljs.core.__destructure_map(map__53993);
var error = map__53993__$1;
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53993__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53993__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var map__53994 = p__53992;
var map__53994__$1 = cljs.core.__destructure_map(map__53994);
var options = map__53994__$1;
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53994__$1,new cljs.core.Keyword(null,"errors","errors",-908790718),malli.error.default_errors);
var unknown = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53994__$1,new cljs.core.Keyword(null,"unknown","unknown",-935977881),true);
var locale = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53994__$1,new cljs.core.Keyword(null,"locale","locale",-2115712697));
var default_locale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53994__$1,new cljs.core.Keyword(null,"default-locale","default-locale",-677515761),new cljs.core.Keyword(null,"en","en",88457073));
var or__5002__auto__ = malli.error._message(error,malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema),locale,options);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = malli.error._message(error,malli.core.type_properties.cljs$core$IFn$_invoke$arity$1(schema),locale,options);
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
var or__5002__auto____$2 = malli.error._message(error,(errors.cljs$core$IFn$_invoke$arity$1 ? errors.cljs$core$IFn$_invoke$arity$1(type) : errors.call(null,type)),locale,options);
if(cljs.core.truth_(or__5002__auto____$2)){
return or__5002__auto____$2;
} else {
var or__5002__auto____$3 = malli.error._message(error,(function (){var G__53995 = malli.core.type.cljs$core$IFn$_invoke$arity$1(schema);
return (errors.cljs$core$IFn$_invoke$arity$1 ? errors.cljs$core$IFn$_invoke$arity$1(G__53995) : errors.call(null,G__53995));
})(),locale,options);
if(cljs.core.truth_(or__5002__auto____$3)){
return or__5002__auto____$3;
} else {
var or__5002__auto____$4 = malli.error._message(error,malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema),default_locale,options);
if(cljs.core.truth_(or__5002__auto____$4)){
return or__5002__auto____$4;
} else {
var or__5002__auto____$5 = malli.error._message(error,malli.core.type_properties.cljs$core$IFn$_invoke$arity$1(schema),default_locale,options);
if(cljs.core.truth_(or__5002__auto____$5)){
return or__5002__auto____$5;
} else {
var or__5002__auto____$6 = malli.error._message(error,(errors.cljs$core$IFn$_invoke$arity$1 ? errors.cljs$core$IFn$_invoke$arity$1(type) : errors.call(null,type)),default_locale,options);
if(cljs.core.truth_(or__5002__auto____$6)){
return or__5002__auto____$6;
} else {
var or__5002__auto____$7 = malli.error._message(error,(function (){var G__53996 = malli.core.type.cljs$core$IFn$_invoke$arity$1(schema);
return (errors.cljs$core$IFn$_invoke$arity$1 ? errors.cljs$core$IFn$_invoke$arity$1(G__53996) : errors.call(null,G__53996));
})(),default_locale,options);
if(cljs.core.truth_(or__5002__auto____$7)){
return or__5002__auto____$7;
} else {
var or__5002__auto____$8 = (function (){var and__5000__auto__ = unknown;
if(cljs.core.truth_(and__5000__auto__)){
return malli.error._message(error,(errors.cljs$core$IFn$_invoke$arity$1 ? errors.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("malli.error","unknown","malli.error/unknown",594142330)) : errors.call(null,new cljs.core.Keyword("malli.error","unknown","malli.error/unknown",594142330))),locale,options);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(or__5002__auto____$8)){
return or__5002__auto____$8;
} else {
var and__5000__auto__ = unknown;
if(cljs.core.truth_(and__5000__auto__)){
return malli.error._message(error,(errors.cljs$core$IFn$_invoke$arity$1 ? errors.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("malli.error","unknown","malli.error/unknown",594142330)) : errors.call(null,new cljs.core.Keyword("malli.error","unknown","malli.error/unknown",594142330))),default_locale,options);
} else {
return and__5000__auto__;
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
}));

(malli.error.error_message.cljs$lang$maxFixedArity = 2);

malli.error._resolve_direct_error = (function malli$error$_resolve_direct_error(_,error,options){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [malli.error.error_path.cljs$core$IFn$_invoke$arity$2(error,options),malli.error.error_message.cljs$core$IFn$_invoke$arity$2(error,options)], null);
});
malli.error._resolve_root_error = (function malli$error$_resolve_root_error(p__53997,p__53998,options){
var map__53999 = p__53997;
var map__53999__$1 = cljs.core.__destructure_map(map__53999);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53999__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var map__54000 = p__53998;
var map__54000__$1 = cljs.core.__destructure_map(map__54000);
var error = map__54000__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54000__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54000__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"unknown","unknown",-935977881),false);
var path__$1 = path;
var l = null;
var mp = path__$1;
var p = malli.core.properties.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(error));
var m = malli.error.error_message.cljs$core$IFn$_invoke$arity$2(error,options__$1);
while(true){
var vec__54009 = (function (){var or__5002__auto__ = (function (){var schema__$1 = malli.util.get_in.cljs$core$IFn$_invoke$arity$2(schema,path__$1);
var temp__5804__auto__ = malli.error.error_message.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1], null),options__$1);
if(cljs.core.truth_(temp__5804__auto__)){
var m_SINGLEQUOTE_ = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [path__$1,m_SINGLEQUOTE_,malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema__$1)], null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = (function (){var res = (function (){var and__5000__auto__ = l;
if(cljs.core.truth_(and__5000__auto__)){
return malli.util.find.cljs$core$IFn$_invoke$arity$2(malli.util.get_in.cljs$core$IFn$_invoke$arity$2(schema,path__$1),l);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.vector_QMARK_(res)){
var vec__54012 = res;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54012,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54012,(1),null);
var schema__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54012,(2),null);
var schema__$2 = malli.util.update_properties.cljs$core$IFn$_invoke$arity$variadic(schema__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0));
var message = malli.error.error_message.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$2], null),options__$1);
if(cljs.core.truth_(message)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,l),message,malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema__$2)], null);
} else {
return null;
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
if(cljs.core.truth_(m)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mp,m,p], null);
} else {
return null;
}
}
}
})();
var path_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54009,(0),null);
var m_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54009,(1),null);
var p_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54009,(2),null);
if(cljs.core.seq(path__$1)){
var G__54114 = cljs.core.pop(path__$1);
var G__54115 = cljs.core.last(path__$1);
var G__54116 = path_SINGLEQUOTE_;
var G__54117 = p_SINGLEQUOTE_;
var G__54118 = m_SINGLEQUOTE_;
path__$1 = G__54114;
l = G__54115;
mp = G__54116;
p = G__54117;
m = G__54118;
continue;
} else {
if(cljs.core.truth_(m)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.seq(in$))?malli.util.path__GT_in(schema,path_SINGLEQUOTE_):malli.error.error_path.cljs$core$IFn$_invoke$arity$2(error,options__$1)),m_SINGLEQUOTE_,p_SINGLEQUOTE_], null);
} else {
return null;
}
}
break;
}
});
malli.error.with_error_message = (function malli$error$with_error_message(var_args){
var G__54016 = arguments.length;
switch (G__54016) {
case 1:
return malli.error.with_error_message.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.error.with_error_message.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.error.with_error_message.cljs$core$IFn$_invoke$arity$1 = (function (error){
return malli.error.with_error_message.cljs$core$IFn$_invoke$arity$2(error,null);
}));

(malli.error.with_error_message.cljs$core$IFn$_invoke$arity$2 = (function (error,options){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(error,new cljs.core.Keyword(null,"message","message",-406056002),malli.error.error_message.cljs$core$IFn$_invoke$arity$2(error,options));
}));

(malli.error.with_error_message.cljs$lang$maxFixedArity = 2);

malli.error.with_error_messages = (function malli$error$with_error_messages(var_args){
var G__54023 = arguments.length;
switch (G__54023) {
case 1:
return malli.error.with_error_messages.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.error.with_error_messages.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.error.with_error_messages.cljs$core$IFn$_invoke$arity$1 = (function (explanation){
return malli.error.with_error_messages.cljs$core$IFn$_invoke$arity$2(explanation,null);
}));

(malli.error.with_error_messages.cljs$core$IFn$_invoke$arity$2 = (function (explanation,p__54024){
var map__54025 = p__54024;
var map__54025__$1 = cljs.core.__destructure_map(map__54025);
var options = map__54025__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54025__$1,new cljs.core.Keyword(null,"wrap","wrap",851669987),cljs.core.identity);
if(cljs.core.truth_(explanation)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(explanation,new cljs.core.Keyword(null,"errors","errors",-908790718),(function (errors){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54021_SHARP_){
var G__54026 = malli.error.with_error_message.cljs$core$IFn$_invoke$arity$2(p1__54021_SHARP_,options);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__54026) : f.call(null,G__54026));
}),errors));
}));
} else {
return null;
}
}));

(malli.error.with_error_messages.cljs$lang$maxFixedArity = 2);

malli.error.with_spell_checking = (function malli$error$with_spell_checking(var_args){
var G__54030 = arguments.length;
switch (G__54030) {
case 1:
return malli.error.with_spell_checking.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.error.with_spell_checking.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.error.with_spell_checking.cljs$core$IFn$_invoke$arity$1 = (function (explanation){
return malli.error.with_spell_checking.cljs$core$IFn$_invoke$arity$2(explanation,null);
}));

(malli.error.with_spell_checking.cljs$core$IFn$_invoke$arity$2 = (function (explanation,p__54031){
var map__54032 = p__54031;
var map__54032__$1 = cljs.core.__destructure_map(map__54032);
var keep_likely_misspelled_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54032__$1,new cljs.core.Keyword(null,"keep-likely-misspelled-of","keep-likely-misspelled-of",288878171));
if(cljs.core.truth_(explanation)){
var _BANG_likely_misspelling_of = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var handle_invalid_value = (function (schema,_,value){
var dispatch = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$1(malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema));
if((dispatch instanceof cljs.core.Keyword)){
var value__$1 = dispatch.cljs$core$IFn$_invoke$arity$1(value);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli.error","misspelled-value","malli.error/misspelled-value",-1135752848),value__$1,cljs.core.PersistentHashSet.createAsIfByAssoc([value__$1])], null);
} else {
return null;
}
});
var types = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("malli.core","extra-key","malli.core/extra-key",574816512),(function (_,path,value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("malli.error","misspelled-key","malli.error/misspelled-key",616486174),cljs.core.last(path),(function (){var or__5002__auto__ = cljs.core.set(cljs.core.keys(value));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})()], null);
}),new cljs.core.Keyword("malli.core","invalid-dispatch-value","malli.core/invalid-dispatch-value",516707675),handle_invalid_value], null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(explanation,new cljs.core.Keyword(null,"errors","errors",-908790718),(function (errors){
var $ = errors;
var $__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__54036){
var map__54037 = p__54036;
var map__54037__$1 = cljs.core.__destructure_map(map__54037);
var error = map__54037__$1;
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54037__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54037__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54037__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var temp__5802__auto__ = (types.cljs$core$IFn$_invoke$arity$1 ? types.cljs$core$IFn$_invoke$arity$1(type) : types.call(null,type));
if(cljs.core.truth_(temp__5802__auto__)){
var get_keys = temp__5802__auto__;
var known_keys = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,malli.core.entries.cljs$core$IFn$_invoke$arity$1(schema)));
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(explanation),cljs.core.butlast(path));
var vec__54038 = (get_keys.cljs$core$IFn$_invoke$arity$3 ? get_keys.cljs$core$IFn$_invoke$arity$3(schema,path,value) : get_keys.call(null,schema,path,value));
var error_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54038,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54038,(1),null);
var keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54038,(2),null);
var similar = malli.error._most_similar_to(keys,key,known_keys);
var likely_misspelling_of = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__54028_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(path)),p1__54028_SHARP_);
}),cljs.core.vec(similar));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(_BANG_likely_misspelling_of,cljs.core.into,likely_misspelling_of);

var G__54041 = error;
if(cljs.core.truth_(similar)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__54041,new cljs.core.Keyword(null,"type","type",1174270348),error_type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("malli.error","likely-misspelling-of","malli.error/likely-misspelling-of",1504085033),likely_misspelling_of], 0));
} else {
return G__54041;
}
} else {
return error;
}
}),$);
if(cljs.core.not(keep_likely_misspelled_of)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__54042){
var map__54043 = p__54042;
var map__54043__$1 = cljs.core.__destructure_map(map__54043);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54043__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54043__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var and__5000__auto__ = (function (){var fexpr__54044 = cljs.core.deref(_BANG_likely_misspelling_of);
return (fexpr__54044.cljs$core$IFn$_invoke$arity$1 ? fexpr__54044.cljs$core$IFn$_invoke$arity$1(path) : fexpr__54044.call(null,path));
})();
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword("malli.core","missing-key","malli.core/missing-key",1439107666));
} else {
return and__5000__auto__;
}
}),$__$1);
} else {
return $__$1;
}
}));
} else {
return null;
}
}));

(malli.error.with_spell_checking.cljs$lang$maxFixedArity = 2);

/**
 * Humanized a explanation. Accepts the following options:
 * 
 *   - `:wrap`, a function of `error -> message`, defaulting to `:message`
 *   - `:resolve`, a function of `explanation error options -> path message`
 */
malli.error.humanize = (function malli$error$humanize(var_args){
var G__54046 = arguments.length;
switch (G__54046) {
case 1:
return malli.error.humanize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.error.humanize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.error.humanize.cljs$core$IFn$_invoke$arity$1 = (function (explanation){
return malli.error.humanize.cljs$core$IFn$_invoke$arity$2(explanation,null);
}));

(malli.error.humanize.cljs$core$IFn$_invoke$arity$2 = (function (p__54047,p__54048){
var map__54049 = p__54047;
var map__54049__$1 = cljs.core.__destructure_map(map__54049);
var explanation = map__54049__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54049__$1,new cljs.core.Keyword(null,"value","value",305978217));
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54049__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var map__54050 = p__54048;
var map__54050__$1 = cljs.core.__destructure_map(map__54050);
var options = map__54050__$1;
var wrap = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54050__$1,new cljs.core.Keyword(null,"wrap","wrap",851669987),new cljs.core.Keyword(null,"message","message",-406056002));
var resolve = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54050__$1,new cljs.core.Keyword(null,"resolve","resolve",-1584445482),malli.error._resolve_direct_error);
if(cljs.core.truth_(errors)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,error){
var vec__54051 = (resolve.cljs$core$IFn$_invoke$arity$3 ? resolve.cljs$core$IFn$_invoke$arity$3(explanation,error,options) : resolve.call(null,explanation,error,options));
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54051,(0),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54051,(1),null);
return malli.error._push_in(acc,value,path,(function (){var G__54054 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(error,new cljs.core.Keyword(null,"message","message",-406056002),message);
return (wrap.cljs$core$IFn$_invoke$arity$1 ? wrap.cljs$core$IFn$_invoke$arity$1(G__54054) : wrap.call(null,G__54054));
})());
}),null,errors);
} else {
return null;
}
}));

(malli.error.humanize.cljs$lang$maxFixedArity = 2);

/**
 * Returns the parts of value that are in error. Accepts the following options:
 * 
 *   - `::mask-valid-values`, value to mask valid values with
 *   - `::keep-valid-values`, keep valid values (overrides mask)
 *   - `::accept-error`, function to accept errors
 *   - `::wrap-error`, function to wrap the error map (default: `:value`)
 */
malli.error.error_value = (function malli$error$error_value(var_args){
var G__54056 = arguments.length;
switch (G__54056) {
case 1:
return malli.error.error_value.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.error.error_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.error.error_value.cljs$core$IFn$_invoke$arity$1 = (function (explanation){
return malli.error.error_value.cljs$core$IFn$_invoke$arity$2(explanation,null);
}));

(malli.error.error_value.cljs$core$IFn$_invoke$arity$2 = (function (explanation,p__54057){
var map__54058 = p__54057;
var map__54058__$1 = cljs.core.__destructure_map(map__54058);
var options = map__54058__$1;
var mask = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54058__$1,new cljs.core.Keyword("malli.error","mask-valid-values","malli.error/mask-valid-values",1682135332));
var G__54059 = malli.error._error_value(explanation,options);
if(cljs.core.truth_(mask)){
return malli.error._masked(mask,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(explanation),G__54059);
} else {
return G__54059;
}
}));

(malli.error.error_value.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=malli.error.js.map
