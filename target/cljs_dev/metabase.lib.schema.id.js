var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
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

$CLJS.SHADOW_ENV.setLoaded("metabase.lib.schema.id.js");

goog.provide('metabase.lib.schema.id');
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.id","database","metabase.lib.schema.id/database",2063511424),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("doc","title","doc/title",636406695),"Valid Database ID"], null),cljs.core.pos_int_QMARK_], null));
/**
 * The ID used to signify that a database is 'virtual' rather than physical.
 * 
 * A fake integer ID is used so as to minimize the number of changes that need to be made on the frontend -- by using
 * something that would otherwise be a legal ID, *nothing* need change there, and the frontend can query against this
 * 'database' none the wiser. (This integer ID is negative which means it will never conflict with a *real* database
 * ID.)
 * 
 * This ID acts as a sort of flag. The relevant places in the middleware can check whether the DB we're querying is
 * this 'virtual' database and take the appropriate actions.
 */
metabase.lib.schema.id.saved_questions_virtual_database_id = (-1337);
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.id","saved-questions-virtual-database","metabase.lib.schema.id/saved-questions-virtual-database",700243236),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("doc","title","doc/title",636406695),"Saved Questions Virtual Database ID",new cljs.core.Keyword("doc","message","doc/message",-406025466),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(new cljs.core.Var(function(){return metabase.lib.schema.id.saved_questions_virtual_database_id;},new cljs.core.Symbol("metabase.lib.schema.id","saved-questions-virtual-database-id","metabase.lib.schema.id/saved-questions-virtual-database-id",1989022851,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"metabase.lib.schema.id","metabase.lib.schema.id",1432263728,null),new cljs.core.Symbol(null,"saved-questions-virtual-database-id","saved-questions-virtual-database-id",1785133892,null),"metabase/lib/schema/id.cljc",41,1,11,11,cljs.core.List.EMPTY,"The ID used to signify that a database is 'virtual' rather than physical.\n\n   A fake integer ID is used so as to minimize the number of changes that need to be made on the frontend -- by using\n   something that would otherwise be a legal ID, *nothing* need change there, and the frontend can query against this\n   'database' none the wiser. (This integer ID is negative which means it will never conflict with a *real* database\n   ID.)\n\n   This ID acts as a sort of flag. The relevant places in the middleware can check whether the DB we're querying is\n   this 'virtual' database and take the appropriate actions.",(cljs.core.truth_(metabase.lib.schema.id.saved_questions_virtual_database_id)?metabase.lib.schema.id.saved_questions_virtual_database_id.cljs$lang$test:null)]))))], null),metabase.lib.schema.id.saved_questions_virtual_database_id], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.id","table","metabase.lib.schema.id/table",-583250693),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("doc","title","doc/title",636406695),"Valid Table ID"], null),cljs.core.pos_int_QMARK_], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.id","field","metabase.lib.schema.id/field",-985236431),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("doc","title","doc/title",636406695),"Valid Field ID"], null),cljs.core.pos_int_QMARK_], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.id","card","metabase.lib.schema.id/card",-801728009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("doc","title","doc/title",636406695),"Valid Card ID"], null),cljs.core.pos_int_QMARK_], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.id","segment","metabase.lib.schema.id/segment",-983297351),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("doc","title","doc/title",636406695),"Valid legacy Segment ID"], null),cljs.core.pos_int_QMARK_], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.id","metric","metabase.lib.schema.id/metric",369478774),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("doc","title","doc/title",636406695),"Valid legacy Metric ID"], null),cljs.core.pos_int_QMARK_], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.id","snippet","metabase.lib.schema.id/snippet",909029873),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("doc","title","doc/title",636406695),"Valid Snippet ID"], null),cljs.core.pos_int_QMARK_], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.id","dimension","metabase.lib.schema.id/dimension",1027174259),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("doc","title","doc/title",636406695),"Valid Dimension ID"], null),cljs.core.pos_int_QMARK_], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.id","action","metabase.lib.schema.id/action",-607281617),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("doc","title","doc/title",636406695),"Valid Action ID"], null),cljs.core.pos_int_QMARK_], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.id","dashboard","metabase.lib.schema.id/dashboard",-915378651),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("doc","title","doc/title",636406695),"Valid Dashboard ID"], null),cljs.core.pos_int_QMARK_], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.id","dashcard","metabase.lib.schema.id/dashcard",947664553),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("doc","title","doc/title",636406695),"Valid DashboardCard ID"], null),cljs.core.pos_int_QMARK_], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.id","user","metabase.lib.schema.id/user",1044330305),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("doc","title","doc/title",636406695),"Valid User ID"], null),cljs.core.pos_int_QMARK_], null));
metabase.util.malli.registry.register_BANG_(new cljs.core.Keyword("metabase.lib.schema.id","pulse","metabase.lib.schema.id/pulse",-564843347),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("doc","title","doc/title",636406695),"Valid Pulse ID"], null),cljs.core.pos_int_QMARK_], null));

//# sourceMappingURL=metabase.lib.schema.id.js.map
