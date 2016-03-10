$wnd.gwtmaterialdemo.runAsyncCallback4("function $setIconSize(this$static, size_0){\n  $setCssName(this$static.sizeMixin, size_0);\n}\n\nfunction MaterialIconMorph(){\n  MaterialWidget_0.call(this, $doc.createElement('div'));\n  this.sizeMixin = new CssNameMixin(this);\n  $setClassName(($clinit_DOM() , this.element), 'anim-container');\n  $setAttribute(this.element, 'onclick', \"this.classList.toggle('morphed')\");\n}\n\ndefineClass(246, 24, $intern_61, MaterialIconMorph);\n_.onLoad = function onLoad_10(){\n  var source, target;\n  if (this.children_0.size_0 >= 2) {\n    source = dynamicCast($get_3(this.children_0, 0), 32);\n    setStyleName(($clinit_DOM() , source.element), 'icons source', true);\n    target = dynamicCast($get_3(this.children_0, 1), 32);\n    setStyleName(target.element, 'icons target', true);\n  }\n   else {\n    $toast(new MaterialToast_0(initValues(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_3, 21, 0, [])), 'Nothing', $intern_75, null);\n  }\n}\n;\nvar Lgwt_material_design_addins_client_ui_MaterialIconMorph_2_classLit = createForClass('gwt.material.design.addins.client.ui', 'MaterialIconMorph', 246);\nfunction IconMorphPresenter(eventBus, view, proxy){\n  $clinit_IconMorphPresenter();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(647, 56, $intern_54, IconMorphPresenter);\n_.onReveal = function onReveal_7(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Icon Morph', 'Provides visual continuity by morphing two material icons.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_iconmorph_IconMorphPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.iconmorph', 'IconMorphPresenter', 647);\nfunction IconMorphView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_4(new IconMorphView_BinderImpl$Widgets));\n}\n\ndefineClass(841, 59, $intern_55, IconMorphView);\nvar Lgwt_material_design_demo_client_application_addins_iconmorph_IconMorphView_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.iconmorph', 'IconMorphView', 841);\nfunction IconMorphView_BinderImpl(){\n}\n\ndefineClass(1091, 1, {}, IconMorphView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_addins_iconmorph_IconMorphView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.iconmorph', 'IconMorphView_BinderImpl', 1091);\nfunction $build_f_HTMLPanel1_4(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialTitle2, f_MaterialIconMorph3, f_PrettyPre6, f_MaterialTitle7, f_MaterialIconMorph8, f_MaterialIconMorph11, f_MaterialIconMorph14, f_MaterialIconMorph17, f_PrettyPre20, f_MaterialIcon4, f_MaterialIcon5, sb, f_MaterialIcon9, f_MaterialIcon10, f_MaterialIcon12, f_MaterialIcon13, f_MaterialIcon15, f_MaterialIcon16, f_MaterialIcon18, f_MaterialIcon19, sb_0;\n  f_HTMLPanel1 = new HTMLPanel($html3_0(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4, this$static.domId5, this$static.domId6, this$static.domId7, this$static.domId8).html_0);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  $get_0(this$static.domId4Element);\n  $get_0(this$static.domId5Element);\n  $get_0(this$static.domId6Element);\n  $get_0(this$static.domId7Element);\n  $get_0(this$static.domId8Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle2.header), 'Usage') , $setText_9(f_MaterialTitle2.paragraph, 'Contain your Source and Target Icon components into MaterialIconMorph to be able to apply morphing transition.') , f_MaterialTitle2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialIconMorph3 = new MaterialIconMorph , $add_13(f_MaterialIconMorph3, (f_MaterialIcon4 = new MaterialIcon , setStyleName(f_MaterialIcon4.element, 'source', true) , $setIconType_3(f_MaterialIcon4, ($clinit_IconType() , MENU_0)) , f_MaterialIcon4)) , $add_13(f_MaterialIconMorph3, (f_MaterialIcon5 = new MaterialIcon , setStyleName(f_MaterialIcon5.element, 'target', true) , $setIconType_3(f_MaterialIcon5, ARROW_BACK) , f_MaterialIcon5)) , $setIconSize(f_MaterialIconMorph3, ($clinit_IconSize() , MEDIUM_0)) , f_MaterialIconMorph3), $get_0(this$static.domId1Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre6 = new PrettyPre , $setHTML(f_PrettyPre6, (sb = new StringBuilder , sb.string += '\\u2003&lt;m.addins:MaterialIconMorph iconSize=\"MEDIUM\"&gt;<br> \\u2003&lt;m:MaterialIcon iconType=\"MENU\" addStyleNames=\"source\"/&gt;<br> \\u2003&lt;m:MaterialIcon iconType=\"ARROW_BACK\" addStyleNames=\"target\"/&gt;<br> &lt;/m.addins:MaterialIconMorph&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre6.element, 'lang-xml', true) , setStyleName(f_PrettyPre6.element, 'z-depth-1', true) , f_PrettyPre6), $get_0(this$static.domId2Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle7 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle7.header), 'Sizes') , $setText_9(f_MaterialTitle7.paragraph, \"Like Material Icons you can easily adjust the sizes of icons by adding iconSize='SIZE' into your MaterialIconMorph component\") , f_MaterialTitle7), $get_0(this$static.domId3Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialIconMorph8 = new MaterialIconMorph , $add_13(f_MaterialIconMorph8, (f_MaterialIcon9 = new MaterialIcon , setStyleName(f_MaterialIcon9.element, 'source', true) , $setIconType_3(f_MaterialIcon9, POLYMER) , f_MaterialIcon9)) , $add_13(f_MaterialIconMorph8, (f_MaterialIcon10 = new MaterialIcon , setStyleName(f_MaterialIcon10.element, 'target', true) , $setIconType_3(f_MaterialIcon10, DONE) , f_MaterialIcon10)) , $setIconSize(f_MaterialIconMorph8, TINY) , f_MaterialIconMorph8), $get_0(this$static.domId4Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialIconMorph11 = new MaterialIconMorph , $add_13(f_MaterialIconMorph11, (f_MaterialIcon12 = new MaterialIcon , setStyleName(f_MaterialIcon12.element, 'source', true) , $setIconType_3(f_MaterialIcon12, POLYMER) , f_MaterialIcon12)) , $add_13(f_MaterialIconMorph11, (f_MaterialIcon13 = new MaterialIcon , setStyleName(f_MaterialIcon13.element, 'target', true) , $setIconType_3(f_MaterialIcon13, DONE) , f_MaterialIcon13)) , $setIconSize(f_MaterialIconMorph11, SMALL) , f_MaterialIconMorph11), $get_0(this$static.domId5Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialIconMorph14 = new MaterialIconMorph , $add_13(f_MaterialIconMorph14, (f_MaterialIcon15 = new MaterialIcon , setStyleName(f_MaterialIcon15.element, 'source', true) , $setIconType_3(f_MaterialIcon15, POLYMER) , f_MaterialIcon15)) , $add_13(f_MaterialIconMorph14, (f_MaterialIcon16 = new MaterialIcon , setStyleName(f_MaterialIcon16.element, 'target', true) , $setIconType_3(f_MaterialIcon16, DONE) , f_MaterialIcon16)) , $setIconSize(f_MaterialIconMorph14, MEDIUM_0) , f_MaterialIconMorph14), $get_0(this$static.domId6Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialIconMorph17 = new MaterialIconMorph , $add_13(f_MaterialIconMorph17, (f_MaterialIcon18 = new MaterialIcon , setStyleName(f_MaterialIcon18.element, 'source', true) , $setIconType_3(f_MaterialIcon18, POLYMER) , f_MaterialIcon18)) , $add_13(f_MaterialIconMorph17, (f_MaterialIcon19 = new MaterialIcon , setStyleName(f_MaterialIcon19.element, 'target', true) , $setIconType_3(f_MaterialIcon19, DONE) , f_MaterialIcon19)) , $setIconSize(f_MaterialIconMorph17, LARGE_0) , f_MaterialIconMorph17), $get_0(this$static.domId7Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_PrettyPre20 = new PrettyPre , $setHTML(f_PrettyPre20, (sb_0 = new StringBuilder , sb_0.string += '\\u2003&lt;m.addins:MaterialIconMorph iconSize=\"TINY\"&gt;<br> \\u2003&lt;m:MaterialIcon iconType=\"POLYMER\" addStyleNames=\"source\"/&gt;<br> \\u2003&lt;m:MaterialIcon iconType=\"DONE\" addStyleNames=\"target\"/&gt;<br> &lt;/m.addins:MaterialIconMorph&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre20.element, 'lang-xml', true) , setStyleName(f_PrettyPre20.element, 'z-depth-1', true) , f_PrettyPre20), $get_0(this$static.domId8Element));\n  return f_HTMLPanel1;\n}\n\nfunction IconMorphView_BinderImpl$Widgets(){\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId5 = $createUniqueId($doc);\n  this.domId6 = $createUniqueId($doc);\n  this.domId7 = $createUniqueId($doc);\n  this.domId8 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n  this.domId5Element = new LazyDomElement(this.domId5);\n  this.domId6Element = new LazyDomElement(this.domId6);\n  this.domId7Element = new LazyDomElement(this.domId7);\n  this.domId8Element = new LazyDomElement(this.domId8);\n}\n\ndefineClass(1092, 1, {}, IconMorphView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_addins_iconmorph_IconMorphView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.iconmorph', 'IconMorphView_BinderImpl/Widgets', 1092);\nfunction $html3_0(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_3(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span>   <span id='\";\n  $append_3(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_3(sb, htmlEscape(arg5));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_3(sb, htmlEscape(arg6));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_3(sb, htmlEscape(arg7));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_3(sb, htmlEscape(arg8));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$iconmorph$IconMorphPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$iconmorph$IconMorphPresenter$_annotation$$none$$) {\n    result = new IconMorphPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$addins$iconmorph$IconMorphView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$addins$iconmorph$IconMorphPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$iconmorph$IconMorphPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$iconmorph$IconMorphPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$iconmorph$IconMorphView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$iconmorph$IconMorphView$_annotation$$none$$) {\n    result = new IconMorphView(new IconMorphView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$iconmorph$IconMorphView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$iconmorph$IconMorphView$_annotation$$none$$;\n}\n\ndefineClass(552, 1, $intern_79);\n_.onSuccess_0 = function onSuccess_4(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$addins$iconmorph$IconMorphPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_1)(4);\n\n//# sourceURL=gwtmaterialdemo-4.js\n")
