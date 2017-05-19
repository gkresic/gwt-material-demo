$wnd.gwtmaterialdemo.runAsyncCallback43("function ServiceWorkerPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(924, 57, $intern_56, ServiceWorkerPresenter);\n_.onReveal = function onReveal_64(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('ServiceWorker', \"A service worker is a script that your browser runs in the background, separate from a web page, opening the door to features that don't need a web page or user interaction. \", 'pwa/serviceworker/ServiceWorkerView', null));\n}\n;\nvar Lgwt_material_design_demo_client_application_pwa_serviceworker_ServiceWorkerPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.pwa.serviceworker', 'ServiceWorkerPresenter', 924);\nfunction ServiceWorkerView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_MaterialPanel1_22(new ServiceWorkerView_BinderImpl$Widgets));\n}\n\ndefineClass(1300, 60, $intern_57, ServiceWorkerView);\nvar Lgwt_material_design_demo_client_application_pwa_serviceworker_ServiceWorkerView_2_classLit = createForClass('gwt.material.design.demo.client.application.pwa.serviceworker', 'ServiceWorkerView', 1300);\nfunction $build_f_MaterialPanel1_22(this$static){\n  var f_MaterialPanel1, f_MaterialRow2, f_MaterialRow7, f_MaterialRow10, f_MaterialTitle3, f_MaterialRow4, f_MaterialAnchorButton5, f_MaterialImage6, f_MaterialTitle8, f_PrettyPre9, sb, f_MaterialTitle11, btnGetScope, f_PrettyPre12, sb_0, btnGetState, f_PrettyPre13, sb_1, btnUnregister, f_PrettyPre14, sb_2;\n  f_MaterialPanel1 = new MaterialPanel;\n  $add_14(f_MaterialPanel1, (f_MaterialRow2 = new MaterialRow , $add_14(f_MaterialRow2, (f_MaterialTitle3 = new MaterialTitle , $setText_13(f_MaterialTitle3.paragraph, 'Click the link below and download / copy the file and put it under your webapp directory.') , $setInnerHTML($getElement(f_MaterialTitle3.header), ($clinit_SafeHtmlUtils() , (new SafeHtmlString(htmlEscape('Create your service-worker.js'))).html_0)) , f_MaterialTitle3)) , $add_14(f_MaterialRow2, (f_MaterialRow4 = new MaterialRow , $add_14(f_MaterialRow4, (f_MaterialAnchorButton5 = new MaterialAnchorButton , $setText_9(f_MaterialAnchorButton5.span_1, 'Link to File') , f_MaterialAnchorButton5.span_1.attached || $add_14(f_MaterialAnchorButton5, f_MaterialAnchorButton5.span_1) , ($clinit_DOM() , f_MaterialAnchorButton5.element_0).setAttribute('href', 'https://gist.github.com/kevzlou7979/ad8eb8a779fc6faa0c7b4b3c9108c3c5') , f_MaterialAnchorButton5.element_0.setAttribute('target', '_blank') , f_MaterialAnchorButton5)) , f_MaterialRow4)) , $add_14(f_MaterialRow2, (f_MaterialImage6 = new MaterialImage , $setUrl_3(f_MaterialImage6.imageMixin, 'https://i.imgur.com/WI8PPiB.png') , f_MaterialImage6)) , setStyleName(f_MaterialRow2.element_0, 'code', true) , f_MaterialRow2));\n  $add_14(f_MaterialPanel1, (f_MaterialRow7 = new MaterialRow , $add_14(f_MaterialRow7, (f_MaterialTitle8 = new MaterialTitle , $setText_13(f_MaterialTitle8.paragraph, 'Last Step is to link your service-worker.js into your GWT *App.xml file.') , $setInnerHTML($getElement(f_MaterialTitle8.header), (new SafeHtmlString(htmlEscape('Link to GWT'))).html_0) , f_MaterialTitle8)) , $add_14(f_MaterialRow7, (f_PrettyPre9 = new PrettyPre , $setHTML_0(f_PrettyPre9, (sb = new StringBuilder , sb.string += '\\u2003&lt;set-configuration-property name=\"serviceWorker\" value=\"service-worker.js\" /&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre9.element_0, 'lang-java', true) , f_PrettyPre9)) , setStyleName(f_MaterialRow7.element_0, 'code', true) , f_MaterialRow7));\n  $add_14(f_MaterialPanel1, (f_MaterialRow10 = new MaterialRow , $add_14(f_MaterialRow10, (f_MaterialTitle11 = new MaterialTitle , $setText_13(f_MaterialTitle11.paragraph, 'We build a built-in helper methods to access Service Worker API') , $setInnerHTML($getElement(f_MaterialTitle11.header), (new SafeHtmlString(htmlEscape('Service Worker : Helper Method API'))).html_0) , f_MaterialTitle11)) , $add_14(f_MaterialRow10, (btnGetScope = new MaterialButton , $setText_9(btnGetScope.span_1, 'Get Scope') , btnGetScope.span_1.attached || $add_14(btnGetScope, btnGetScope.span_1) , $addClickHandler(btnGetScope, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1) , btnGetScope)) , $add_14(f_MaterialRow10, (f_PrettyPre12 = new PrettyPre , $setHTML_0(f_PrettyPre12, (sb_0 = new StringBuilder , sb_0.string += 'PwaManager.getInstance().getServiceWorker().scriptURL' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre12.element_0, 'lang-java', true) , f_PrettyPre12)) , $add_14(f_MaterialRow10, (btnGetState = new MaterialButton , $setText_9(btnGetState.span_1, 'Get State') , btnGetState.span_1.attached || $add_14(btnGetState, btnGetState.span_1) , $addClickHandler(btnGetState, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2) , btnGetState)) , $add_14(f_MaterialRow10, (f_PrettyPre13 = new PrettyPre , $setHTML_0(f_PrettyPre13, (sb_1 = new StringBuilder , sb_1.string += 'PwaManager.getInstance().getServiceWorker().state' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , setStyleName(f_PrettyPre13.element_0, 'lang-java', true) , f_PrettyPre13)) , $add_14(f_MaterialRow10, (btnUnregister = new MaterialButton , $setText_9(btnUnregister.span_1, 'Unregister Service Worker') , btnUnregister.span_1.attached || $add_14(btnUnregister, btnUnregister.span_1) , $addClickHandler(btnUnregister, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3) , btnUnregister)) , $add_14(f_MaterialRow10, (f_PrettyPre14 = new PrettyPre , $setHTML_0(f_PrettyPre14, (sb_2 = new StringBuilder , sb_2.string += 'PwaManager.getInstance().unRegisterServiceWorker();' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html_0) , setStyleName(f_PrettyPre14.element_0, 'lang-java', true) , f_PrettyPre14)) , setStyleName(f_MaterialRow10.element_0, 'code', true) , f_MaterialRow10));\n  return f_MaterialPanel1;\n}\n\nfunction ServiceWorkerView_BinderImpl$Widgets(){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ServiceWorkerView_BinderImpl$Widgets$1;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new ServiceWorkerView_BinderImpl$Widgets$2;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new ServiceWorkerView_BinderImpl$Widgets$3;\n}\n\ndefineClass(1746, 1, {}, ServiceWorkerView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_pwa_serviceworker_ServiceWorkerView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.pwa.serviceworker', 'ServiceWorkerView_BinderImpl/Widgets', 1746);\nfunction ServiceWorkerView_BinderImpl$Widgets$1(){\n}\n\ndefineClass(1747, 1, $intern_66, ServiceWorkerView_BinderImpl$Widgets$1);\n_.onClick_0 = function onClick_272(event_0){\n  fireToast(($clinit_PwaManager() , $wnd.navigator.serviceWorker.controller).scriptURL);\n}\n;\nvar Lgwt_material_design_demo_client_application_pwa_serviceworker_ServiceWorkerView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.pwa.serviceworker', 'ServiceWorkerView_BinderImpl/Widgets/1', 1747);\nfunction ServiceWorkerView_BinderImpl$Widgets$2(){\n}\n\ndefineClass(1748, 1, $intern_66, ServiceWorkerView_BinderImpl$Widgets$2);\n_.onClick_0 = function onClick_273(event_0){\n  fireToast(($clinit_PwaManager() , $wnd.navigator.serviceWorker.controller).state);\n}\n;\nvar Lgwt_material_design_demo_client_application_pwa_serviceworker_ServiceWorkerView_1BinderImpl$Widgets$2_2_classLit = createForClass('gwt.material.design.demo.client.application.pwa.serviceworker', 'ServiceWorkerView_BinderImpl/Widgets/2', 1748);\nfunction ServiceWorkerView_BinderImpl$Widgets$3(){\n}\n\ndefineClass(1749, 1, $intern_66, ServiceWorkerView_BinderImpl$Widgets$3);\n_.onClick_0 = function onClick_274(event_0){\n  $clinit_PwaManager();\n  $wnd.navigator.serviceWorker != null && $wnd.navigator.serviceWorker.getRegistration().then(makeLambdaFunction(PwaManager$lambda$1$Type.prototype.call_11, PwaManager$lambda$1$Type, []));\n}\n;\nvar Lgwt_material_design_demo_client_application_pwa_serviceworker_ServiceWorkerView_1BinderImpl$Widgets$3_2_classLit = createForClass('gwt.material.design.demo.client.application.pwa.serviceworker', 'ServiceWorkerView_BinderImpl/Widgets/3', 1749);\nfunction $get_Key$type$gwt$material$design$demo$client$application$pwa$serviceworker$ServiceWorkerPresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$pwa$serviceworker$ServiceWorkerPresenter$_annotation$$none$$) {\n    result0 = new ServiceWorkerPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$pwa$serviceworker$ServiceWorkerView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$pwa$serviceworker$ServiceWorkerPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$pwa$serviceworker$ServiceWorkerPresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$pwa$serviceworker$ServiceWorkerPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$pwa$serviceworker$ServiceWorkerView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$pwa$serviceworker$ServiceWorkerView$_annotation$$none$$) {\n    result = new ServiceWorkerView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$pwa$serviceworker$ServiceWorkerView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$pwa$serviceworker$ServiceWorkerView$_annotation$$none$$;\n}\n\ndefineClass(834, 1, $intern_110);\n_.onSuccess_0 = function onSuccess_44(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$pwa$serviceworker$ServiceWorkerPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(43);\n\n//# sourceURL=gwtmaterialdemo-43.js\n")
