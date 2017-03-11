goog.provide("re_frisk.help");
(function (){
re_frisk.help.fx = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"db","db",(993250759)),"reset! app-db with a new value. Expects a map. / re-frame's internal",new cljs.core.Keyword(null,"dispatch","dispatch",(1319337009)),"`dispatch` one event. Expects a single vector. / re-frame's internal",new cljs.core.Keyword(null,"dispatch-n","dispatch-n",(-504469236)),"`dispatch` more than one event. Expects a list or vector of events. Something for which sequential? returns true. / re-frame's internal",new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",(-1096518994)),"Removes a previously registered event handler. Expects either a single id (typically a keyword), or a seq of ids. / re-frame's internal",new cljs.core.Keyword(null,"dispatch-later","dispatch-later",(291951390)),"`dispatch` one or more events after given delays. Expects a collection of maps with two keys:  :`ms` and `:dispatch`. / re-frame's internal"], null); return (
new cljs.core.Var(function(){return re_frisk.help.fx;},new cljs.core.Symbol("re-frisk.help","fx","re-frisk.help/fx",(2022299575),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frisk.help","re-frisk.help",(1522482612),null),new cljs.core.Symbol(null,"fx","fx",(402701955),null),"re_frisk/help.cljs",(8),(1),(3),(3),cljs.core.List.EMPTY,null,(cljs.core.truth_(re_frisk.help.fx)?re_frisk.help.fx.cljs$lang$test:null)])));})()
;
(function (){
re_frisk.help.cofx = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",(993250759)),"Adds to coeffects the value in `app-db`, under the key `:db`. / re-frame's internal"], null); return (
new cljs.core.Var(function(){return re_frisk.help.cofx;},new cljs.core.Symbol("re-frisk.help","cofx","re-frisk.help/cofx",(-129185514),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frisk.help","re-frisk.help",(1522482612),null),new cljs.core.Symbol(null,"cofx","cofx",(-641232862),null),"re_frisk/help.cljs",(10),(1),(9),(9),cljs.core.List.EMPTY,null,(cljs.core.truth_(re_frisk.help.cofx)?re_frisk.help.cofx.cljs$lang$test:null)])));})()
;
(function (){
re_frisk.help.intrcp = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"coeffects","coeffects",(497912985)),"An interceptor which injects re-frame :db coeffect. / re-frame's internal",new cljs.core.Keyword(null,"do-fx","do-fx",(1194163050)),"An interceptor which actions a `context's` (side) `:effects`. For each key in the `:effects` map, call the `effects handler` previously registered using `reg-fx`. / re-frame's internal",new cljs.core.Keyword(null,"db-handler","db-handler",(579530098)),"An interceptor which wraps the kind of event handler given to `reg-event-db`. These handlers take two arguments;  `db` and `event`, and they return `db`. / re-frame's internal",new cljs.core.Keyword(null,"fx-handler","fx-handler",(-549783097)),"An interceptor which wraps the kind of event handler given to `reg-event-fx`. These handlers take two arguments;  `coeffects` and `event`, and they return `effects`. / re-frame's internal"], null); return (
new cljs.core.Var(function(){return re_frisk.help.intrcp;},new cljs.core.Symbol("re-frisk.help","intrcp","re-frisk.help/intrcp",(-684398114),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frisk.help","re-frisk.help",(1522482612),null),new cljs.core.Symbol(null,"intrcp","intrcp",(810387202),null),"re_frisk/help.cljs",(12),(1),(11),(11),cljs.core.List.EMPTY,null,(cljs.core.truth_(re_frisk.help.intrcp)?re_frisk.help.intrcp.cljs$lang$test:null)])));})()
;
(function (){
re_frisk.help.intrcp_fn = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"coeffects","coeffects",(497912985)),"Function which adds to coeffects the value in `app-db`, under the key `:db`. / re-frame's internal",new cljs.core.Keyword(null,"do-fx","do-fx",(1194163050)),"Function which calls the `effects handler` previously registered using `reg-fx` for each key in the `:effects` map. / re-frame's internal",new cljs.core.Keyword(null,"db-handler","db-handler",(579530098)),"Function which calls the handler given to `reg-event-db`. This handler take two arguments;  `db` and `event`, and returns `db`. / re-frame's internal",new cljs.core.Keyword(null,"fx-handler","fx-handler",(-549783097)),"Function which calls the handler given to `reg-event-fx`. This handler take two arguments;  `coeffects` and `event`, and returns `effects`. / re-frame's internal"], null); return (
new cljs.core.Var(function(){return re_frisk.help.intrcp_fn;},new cljs.core.Symbol("re-frisk.help","intrcp-fn","re-frisk.help/intrcp-fn",(-557568370),null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"file","file",(-1269645878)),new cljs.core.Keyword(null,"end-column","end-column",(1425389514)),new cljs.core.Keyword(null,"column","column",(2078222095)),new cljs.core.Keyword(null,"line","line",(212345235)),new cljs.core.Keyword(null,"end-line","end-line",(1837326455)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"test","test",(577538877))],[new cljs.core.Symbol(null,"re-frisk.help","re-frisk.help",(1522482612),null),new cljs.core.Symbol(null,"intrcp-fn","intrcp-fn",(-1102228390),null),"re_frisk/help.cljs",(15),(1),(16),(16),cljs.core.List.EMPTY,null,(cljs.core.truth_(re_frisk.help.intrcp_fn)?re_frisk.help.intrcp_fn.cljs$lang$test:null)])));})()
;