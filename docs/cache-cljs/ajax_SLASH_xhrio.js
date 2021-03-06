goog.provide("ajax.xhrio");
goog.net.XhrIo.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.XhrIo.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__30,handler){
var map__31 = p__30;
var map__31__$1 = ((((!((map__31 == null)))?((((map__31.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31):map__31);
var uri = cljs.core.get.call(null,map__31__$1,new cljs.core.Keyword(null,"uri","uri",(-774711847)));
var method = cljs.core.get.call(null,map__31__$1,new cljs.core.Keyword(null,"method","method",(55703592)));
var body = cljs.core.get.call(null,map__31__$1,new cljs.core.Keyword(null,"body","body",(-2049205669)));
var headers = cljs.core.get.call(null,map__31__$1,new cljs.core.Keyword(null,"headers","headers",(-835030129)));
var timeout = cljs.core.get.call(null,map__31__$1,new cljs.core.Keyword(null,"timeout","timeout",(-318625318)),(0));
var with_credentials = cljs.core.get.call(null,map__31__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",(-1163127235)),false);
var response_format = cljs.core.get.call(null,map__31__$1,new cljs.core.Keyword(null,"response-format","response-format",(1664465322)));
var this$__$1 = this;
var temp__22562__auto___34 = new cljs.core.Keyword(null,"type","type",(1174270348)).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__22562__auto___34)){
var response_type_35 = temp__22562__auto___34;
this$__$1.setResponseType(cljs.core.name.call(null,response_type_35));
} else {
}

var G__33 = this$__$1;
goog.events.listen(G__33,goog.net.EventType.COMPLETE,((function (G__33,this$__$1,map__31,map__31__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__1_SHARP_){
return handler.call(null,p1__1_SHARP_.target);
});})(G__33,this$__$1,map__31,map__31__$1,uri,method,body,headers,timeout,with_credentials,response_format))
);

G__33.setTimeoutInterval(timeout);

G__33.setWithCredentials(with_credentials);

G__33.send(uri,method,body,cljs.core.clj__GT_js.call(null,headers));

return G__33;
});

goog.net.XhrIo.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.XhrIo.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort(goog.net.ErrorCode.ABORT);
});

goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getResponse();
});

goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatus();
});

goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatusText();
});

goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,this$__$1.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
goog.net.XhrManager.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.XhrManager.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__36,handler){
var map__37 = p__36;
var map__37__$1 = ((((!((map__37 == null)))?((((map__37.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37):map__37);
var uri = cljs.core.get.call(null,map__37__$1,new cljs.core.Keyword(null,"uri","uri",(-774711847)));
var method = cljs.core.get.call(null,map__37__$1,new cljs.core.Keyword(null,"method","method",(55703592)));
var body = cljs.core.get.call(null,map__37__$1,new cljs.core.Keyword(null,"body","body",(-2049205669)));
var headers = cljs.core.get.call(null,map__37__$1,new cljs.core.Keyword(null,"headers","headers",(-835030129)));
var id = cljs.core.get.call(null,map__37__$1,new cljs.core.Keyword(null,"id","id",(-1388402092)));
var timeout = cljs.core.get.call(null,map__37__$1,new cljs.core.Keyword(null,"timeout","timeout",(-318625318)),(0));
var priority = cljs.core.get.call(null,map__37__$1,new cljs.core.Keyword(null,"priority","priority",(1431093715)));
var max_retries = cljs.core.get.call(null,map__37__$1,new cljs.core.Keyword(null,"max-retries","max-retries",(-1933762121)));
var this$__$1 = this;
return this$__$1.send(id,uri,method,body,cljs.core.clj__GT_js.call(null,headers),priority,handler,max_retries);
});
