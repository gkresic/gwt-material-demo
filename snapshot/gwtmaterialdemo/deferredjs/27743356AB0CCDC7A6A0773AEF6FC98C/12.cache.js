$wnd.gwtmaterialdemo.runAsyncCallback12("function $clinit_MaterialScrollfire(){\n  $clinit_MaterialScrollfire = emptyMethod;\n  !startupState && (startupState = new StartupState$DebugState);\n  startupState?($clinit_MaterialDesignBase() , injectJs(($clinit_MaterialScrollfireDebugClientBundle_default_InlineClientBundleGenerator$scrollfireDebugJsInitializer() , scrollfireDebugJs), false, true)):($clinit_MaterialDesignBase() , injectJs(($clinit_MaterialScrollfireClientBundle_default_InlineClientBundleGenerator$scrollfireJsInitializer() , scrollfireJs), true, false));\n}\n\nfunction $apply(this$static){\n  var uid;\n  if (this$static.element) {\n    uid = ($clinit_DOM() , $createUniqueId($doc));\n    $setId(this$static.element, uid);\n    $wnd.apply('#' + uid, this$static.offset_0, makeLambdaFunction(MaterialScrollfire$0methodref$call$Type.prototype.call_6, MaterialScrollfire$0methodref$call$Type, [this$static.callback_0]));\n  }\n   else {\n    new IllegalStateException;\n    $clinit_GWT();\n  }\n}\n\nfunction MaterialScrollfire(){\n}\n\nfunction apply_1(element, callback){\n  $clinit_MaterialScrollfire();\n  var scrollfire;\n  scrollfire = new MaterialScrollfire;\n  scrollfire.element = element;\n  scrollfire.callback_0 = callback;\n  scrollfire.offset_0 = 100;\n  $apply(scrollfire);\n}\n\ndefineClass(1661, 1, {}, MaterialScrollfire);\n_.offset_0 = 100;\nvar Lgwt_material_design_addins_client_scrollfire_MaterialScrollfire_2_classLit = createForClass('gwt.material.design.addins.client.scrollfire', 'MaterialScrollfire', 1661);\nfunction MaterialScrollfire$0methodref$call$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(2505, $wnd.Function, {}, MaterialScrollfire$0methodref$call$Type);\n_.call_6 = function call_47(){\n  this.$$outer_0.call(null);\n}\n;\nvar scrollfireJs;\nfunction MaterialScrollfireClientBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(1799, 1, {}, MaterialScrollfireClientBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_46(){\n  return 'scrollfireJs';\n}\n;\n_.getText = function getText_37(){\n  return 'function apply(selector, offset, callback) {var didScroll = false; var done = false; var callbacks = $.Callbacks(); window.addEventListener(\"scroll\", function() {didScroll = true; }); setInterval(function() {if(didScroll) {didScroll = false; var windowScroll = window.pageYOffset + window.innerHeight; var currentElement = document.querySelector(selector); if ( currentElement !== null) {var elementOffset = currentElement.getBoundingClientRect().top + window.pageYOffset; if (windowScroll > (elementOffset + offset)) {if (done !== true) {callbacks.add(callback); callbacks.fire(); done = true; } } } } }, 100); }';\n}\n;\nvar Lgwt_material_design_addins_client_scrollfire_MaterialScrollfireClientBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.addins.client.scrollfire', 'MaterialScrollfireClientBundle_default_InlineClientBundleGenerator/1', 1799);\nfunction $clinit_MaterialScrollfireClientBundle_default_InlineClientBundleGenerator$scrollfireJsInitializer(){\n  $clinit_MaterialScrollfireClientBundle_default_InlineClientBundleGenerator$scrollfireJsInitializer = emptyMethod;\n  scrollfireJs = new MaterialScrollfireClientBundle_default_InlineClientBundleGenerator$1;\n}\n\nvar scrollfireDebugJs;\nfunction MaterialScrollfireDebugClientBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(1798, 1, {}, MaterialScrollfireDebugClientBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_47(){\n  return 'scrollfireDebugJs';\n}\n;\n_.getText = function getText_38(){\n  return 'function apply(selector, offset, callback) {\\r\\n    var didScroll = false;\\r\\n    var done = false;\\r\\n    var callbacks = $.Callbacks();\\r\\n\\r\\n    /*callbacks.fire();*/\\r\\n\\r\\n    window.addEventListener(\"scroll\", function() {\\r\\n        didScroll = true;\\r\\n    });\\r\\n\\r\\n\\r\\n\\r\\n    // Rate limit to 100ms\\r\\n    // Rate limit to 100ms\\r\\n    setInterval(function() {\\r\\n        if(didScroll) {\\r\\n            didScroll = false;\\r\\n\\r\\n            var windowScroll = window.pageYOffset + window.innerHeight;\\r\\n\\r\\n            var currentElement = document.querySelector(selector);\\r\\n            if ( currentElement !== null) {\\r\\n                var elementOffset = currentElement.getBoundingClientRect().top + window.pageYOffset;\\r\\n\\r\\n                if (windowScroll > (elementOffset + offset)) {\\r\\n                    if (done !== true) {\\r\\n                        callbacks.add(callback);\\r\\n                        callbacks.fire();\\r\\n                        done = true;\\r\\n                    }\\r\\n                }\\r\\n            }\\r\\n        }\\r\\n    }, 100);\\r\\n}';\n}\n;\nvar Lgwt_material_design_addins_client_scrollfire_MaterialScrollfireDebugClientBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.addins.client.scrollfire', 'MaterialScrollfireDebugClientBundle_default_InlineClientBundleGenerator/1', 1798);\nfunction $clinit_MaterialScrollfireDebugClientBundle_default_InlineClientBundleGenerator$scrollfireDebugJsInitializer(){\n  $clinit_MaterialScrollfireDebugClientBundle_default_InlineClientBundleGenerator$scrollfireDebugJsInitializer = emptyMethod;\n  scrollfireDebugJs = new MaterialScrollfireDebugClientBundle_default_InlineClientBundleGenerator$1;\n}\n\nfunction ScrollFirePresenter(eventBus, view, proxy){\n  $clinit_ScrollFirePresenter();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(821, 60, $intern_57, ScrollFirePresenter);\n_.onReveal = function onReveal_19(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Scrollfire', \"Executes callback functions depending on how far into the page you've scrolled.\", 'addins/scrollfire/ScrollFireView'));\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_scrollfire_ScrollFirePresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.scrollfire', 'ScrollFirePresenter', 821);\nfunction $lambda$1_18(this$static){\n  animate_0(($clinit_Transition() , SHOW_STAGGERED_LIST), this$static.listContainer, 0);\n}\n\nfunction $lambda$2_16(this$static){\n  animate_0(($clinit_Transition() , FADE_IN_IMAGE), this$static.image, 0);\n}\n\nfunction ScrollFireView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_16(new ScrollFireView_BinderImpl$Widgets(this)));\n  $clinit_MaterialScrollfire();\n  apply_1($getElement(this.panel), makeLambdaFunction(ScrollFireView$lambda$0$Type.prototype.call_6, ScrollFireView$lambda$0$Type, []));\n  apply_1($getElement(this.listContainer), makeLambdaFunction(ScrollFireView$lambda$1$Type.prototype.call_6, ScrollFireView$lambda$1$Type, [this]));\n  apply_1($getElement(this.image), makeLambdaFunction(ScrollFireView$lambda$2$Type.prototype.call_6, ScrollFireView$lambda$2$Type, [this]));\n}\n\ndefineClass(1080, 63, $intern_58, ScrollFireView);\nvar Lgwt_material_design_demo_client_application_addins_scrollfire_ScrollFireView_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.scrollfire', 'ScrollFireView', 1080);\nfunction ScrollFireView$lambda$0$Type(){\n}\n\ndefineClass(2415, $wnd.Function, {}, ScrollFireView$lambda$0$Type);\n_.call_6 = function call_138(){\n  $toast(new MaterialToast_0(stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_3, 21, 0, [])), 'Toasted', $intern_69, null);\n}\n;\nfunction ScrollFireView$lambda$1$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(2416, $wnd.Function, {}, ScrollFireView$lambda$1$Type);\n_.call_6 = function call_139(){\n  $lambda$1_18(this.$$outer_0);\n}\n;\nfunction ScrollFireView$lambda$2$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(2417, $wnd.Function, {}, ScrollFireView$lambda$2$Type);\n_.call_6 = function call_140(){\n  $lambda$2_16(this.$$outer_0);\n}\n;\nfunction $build_f_HTMLPanel1_16(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialRow2, f_MaterialTitle3, panel, f_PrettyPre4, sb, listContainer, f_ListItem5, f_MaterialTitle6, f_ListItem7, f_MaterialTitle8, f_ListItem9, f_MaterialTitle10, f_ListItem11, f_MaterialTitle12, image;\n  f_HTMLPanel1 = new HTMLPanel($html2(this$static.domId0).html_0);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element_0));\n  $get_0(this$static.domId0Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow2 = new MaterialRow , $add_14(f_MaterialRow2, (f_MaterialTitle3 = new MaterialTitle , $setText_13(f_MaterialTitle3.paragraph, '') , $setInnerHTML($getElement(f_MaterialTitle3.header), ($clinit_SafeHtmlUtils() , (new SafeHtmlString(htmlEscape('Usage'))).html_0)) , f_MaterialTitle3)) , $add_14(f_MaterialRow2, (panel = new MaterialPanel , this$static.owner.panel = panel , panel)) , $add_14(f_MaterialRow2, (f_PrettyPre4 = new PrettyPre , $setHTML_0(f_PrettyPre4, (sb = new StringBuilder , sb.string += '\\u2003MaterialScrollfire.apply(panel.getElement(), () -&gt; { <br> \\u2003MaterialToast.fireToast(\"Toasted\"); <br> }); <br> MaterialScrollfire.apply(listContainer.getElement(), () -&gt; { <br> \\u2003MaterialAnimator.animate(Transition.SHOW_STAGGERED_LIST, listContainer, 0); <br> }); <br> MaterialScrollfire.apply(image.getElement(), () -&gt; { <br> \\u2003MaterialAnimator.animate(Transition.FADE_IN_IMAGE, image, 0); <br> });' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre4.element_0, 'lang-java', true) , f_PrettyPre4)) , $add_14(f_MaterialRow2, (listContainer = new UnorderedList , $add_18(listContainer, (f_ListItem5 = new ListItem , $add_14(f_ListItem5, (f_MaterialTitle6 = new MaterialTitle , $setText_13(f_MaterialTitle6.paragraph, 'List Item') , $setInnerHTML($getElement(f_MaterialTitle6.header), (new SafeHtmlString(htmlEscape('List Item'))).html_0) , f_MaterialTitle6)) , f_ListItem5.element_0.style.opacity = 0 , f_ListItem5)) , $add_18(listContainer, (f_ListItem7 = new ListItem , $add_14(f_ListItem7, (f_MaterialTitle8 = new MaterialTitle , $setText_13(f_MaterialTitle8.paragraph, 'List Item') , $setInnerHTML($getElement(f_MaterialTitle8.header), (new SafeHtmlString(htmlEscape('List Item'))).html_0) , f_MaterialTitle8)) , f_ListItem7.element_0.style.opacity = 0 , f_ListItem7)) , $add_18(listContainer, (f_ListItem9 = new ListItem , $add_14(f_ListItem9, (f_MaterialTitle10 = new MaterialTitle , $setText_13(f_MaterialTitle10.paragraph, 'List Item') , $setInnerHTML($getElement(f_MaterialTitle10.header), (new SafeHtmlString(htmlEscape('List Item'))).html_0) , f_MaterialTitle10)) , f_ListItem9.element_0.style.opacity = 0 , f_ListItem9)) , $add_18(listContainer, (f_ListItem11 = new ListItem , $add_14(f_ListItem11, (f_MaterialTitle12 = new MaterialTitle , $setText_13(f_MaterialTitle12.paragraph, 'List Item') , $setInnerHTML($getElement(f_MaterialTitle12.header), (new SafeHtmlString(htmlEscape('List Item'))).html_0) , f_MaterialTitle12)) , f_ListItem11.element_0.style.opacity = 0 , f_ListItem11)) , this$static.owner.listContainer = listContainer , listContainer)) , $add_14(f_MaterialRow2, (image = new MaterialImage , $setResource_1(image, ($clinit_MaterialResources_default_InlineClientBundleGenerator() , $clinit_MaterialResources_default_InlineClientBundleGenerator$imageInitializer() , $clinit_MaterialResources_default_InlineClientBundleGenerator() , image_0)) , image.element_0.setAttribute('data-caption', 'I love Material Design') , image.element_0.style.opacity = 0 , this$static.owner.image = image , image)) , setStyleName(f_MaterialRow2.element_0, 'code', true) , f_MaterialRow2), $get_0(this$static.domId0Element));\n  return f_HTMLPanel1;\n}\n\nfunction ScrollFireView_BinderImpl$Widgets(owner){\n  this.owner = owner;\n  this.domId0 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n}\n\ndefineClass(1386, 1, {}, ScrollFireView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_addins_scrollfire_ScrollFireView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.scrollfire', 'ScrollFireView_BinderImpl/Widgets', 1386);\nfunction $html2(arg0){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_4(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFirePresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFirePresenter$_annotation$$none$$) {\n    result0 = new ScrollFirePresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFireView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFirePresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFirePresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFirePresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFireView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFireView$_annotation$$none$$) {\n    result = new ScrollFireView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFireView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFireView$_annotation$$none$$;\n}\n\ndefineClass(720, 1, $intern_108);\n_.onSuccess_0 = function onSuccess_13(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$addins$scrollfire$ScrollFirePresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(12);\n\n//# sourceURL=gwtmaterialdemo-12.js\n")
