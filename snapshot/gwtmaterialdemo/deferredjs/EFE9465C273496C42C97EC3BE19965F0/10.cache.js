$wnd.gwtmaterialdemo.runAsyncCallback10("function $clinit_DateTimeFormat_0(){\n  $clinit_DateTimeFormat_0 = emptyMethod;\n  $clinit_DateTimeFormat();\n  cache_0 = new HashMap;\n}\n\nfunction DateTimeFormat_0(){\n  DateTimeFormat.call(this, 'hh:mm a');\n}\n\nfunction getFormat_0(dtfi){\n  $clinit_DateTimeFormat_0();\n  var defaultDtfi, dtf;\n  defaultDtfi = $getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_2));\n  dtf = null;\n  dtfi == defaultDtfi && (dtf = dynamicCast(cache_0.get_3('hh:mm a'), 326));\n  if (!dtf) {\n    dtf = new DateTimeFormat_0;\n    dtfi == defaultDtfi && cache_0.put('hh:mm a', dtf);\n  }\n  return dtf;\n}\n\ndefineClass(326, 242, {326:1, 242:1}, DateTimeFormat_0);\nvar cache_0;\nvar Lcom_google_gwt_i18n_client_DateTimeFormat_2_classLit = createForClass('com.google.gwt.i18n.client', 'DateTimeFormat', 326);\nfunction TimePickersPresenter(eventBus, view, proxy){\n  $clinit_TimePickersPresenter();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(655, 56, $intern_55, TimePickersPresenter);\n_.onReveal = function onReveal_15(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Time Pickers', 'A dialog picker is used to select a single time (hours:minutes) on mobile.\\n\\nThe selected time is indicated by the filled circle at the end of the clock hand.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersPresenter', 655);\nfunction TimePickersView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_MaterialPanel1_4(new TimePickersView_BinderImpl$Widgets(this)));\n  $addHandler(this.tpEvents, new TimePickersView$1, (!TYPE_16 && (TYPE_16 = new GwtEvent$Type) , TYPE_16));\n  $addHandler(this.tpEvents, new TimePickersView$2, TYPE_15?TYPE_15:(TYPE_15 = new GwtEvent$Type));\n  $addHandler(this.tpEvents, new TimePickersView$3, (!TYPE_19 && (TYPE_19 = new GwtEvent$Type) , TYPE_19));\n}\n\ndefineClass(853, 59, $intern_56, TimePickersView);\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersView_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersView', 853);\nfunction TimePickersView$1(){\n}\n\ndefineClass(854, 1, $intern_81, TimePickersView$1);\n_.onOpen = function onOpen_0(event_0){\n  $toast(new MaterialToast_0(initValues(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_3, 21, 0, [])), 'Opened Time Picker', $intern_76, null);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersView$1_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersView/1', 854);\nfunction TimePickersView$2(){\n}\n\ndefineClass(855, 1, $intern_48, TimePickersView$2);\n_.onClose = function onClose_2(event_0){\n  $toast(new MaterialToast_0(initValues(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_3, 21, 0, [])), 'Closed Time Picker', $intern_76, null);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersView$2_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersView/2', 855);\nfunction TimePickersView$3(){\n}\n\ndefineClass(856, 1, $intern_45, TimePickersView$3);\n_.onValueChange = function onValueChange_2(event_0){\n  var dtf, time;\n  dtf = ($clinit_DateTimeFormat_0() , getFormat_0($getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_2))));\n  time = dynamicCast(event_0.value_0, 99);\n  fireToast('MaterialTimePicker value changed to: ' + $format(dtf, time, null));\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersView$3_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersView/3', 856);\nfunction TimePickersView_BinderImpl(){\n}\n\ndefineClass(1142, 1, {}, TimePickersView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersView_BinderImpl', 1142);\nfunction $build_f_MaterialPanel1_4(this$static){\n  var f_MaterialPanel1, f_MaterialTitle2, tp, f_PrettyPre3, f_MaterialTitle4, f_MaterialTimePicker5, f_MaterialTitle6, f_MaterialTimePicker7, f_PrettyPre8, f_MaterialTitle9, tpEvents, f_PrettyPre10, f_MaterialTitle11, tpClear, btnClear, f_PrettyPre12, sb, sb_0, sb_1, sb_2;\n  f_MaterialPanel1 = new MaterialPanel;\n  $add_13(f_MaterialPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle2.header), 'Time Picker') , $setText_9(f_MaterialTitle2.paragraph, 'Tap between the hour and minute label in the title bar to switch between the hour or minute view. Additionally, tap on the AM/PM label in the title bar to switch between AM or PM (in 12-hour clock mode).') , f_MaterialTitle2));\n  $add_13(f_MaterialPanel1, (tp = new MaterialTimePicker , $setAttribute($getElement(tp.input_0), 'placeholder', 'Snooze Time') , tp));\n  $add_13(f_MaterialPanel1, (f_PrettyPre3 = new PrettyPre , $setHTML(f_PrettyPre3, (sb = new StringBuilder , sb.string += '&lt;m:MaterialTimePicker ui:field=\"tp\" placeholder=\"Snooze Time\" /&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(($clinit_DOM() , f_PrettyPre3.element), 'lang-xml', true) , setStyleName(f_PrettyPre3.element, 'z-depth-1', true) , f_PrettyPre3));\n  $add_13(f_MaterialPanel1, (f_MaterialTitle4 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle4.header), 'Disabled Styles') , $setText_9(f_MaterialTitle4.paragraph, \"You can disable your time picker by adding enabled='false'\") , f_MaterialTitle4));\n  $add_13(f_MaterialPanel1, (f_MaterialTimePicker5 = new MaterialTimePicker , $setEnabled_1(f_MaterialTimePicker5.input_0, false) , $setAttribute($getElement(f_MaterialTimePicker5.input_0), 'placeholder', 'Snooze Time') , f_MaterialTimePicker5));\n  $add_13(f_MaterialPanel1, (f_MaterialTitle6 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle6.header), '24 Hour format') , $setText_9(f_MaterialTitle6.paragraph, \"You can set 24 hour format of time picker by adding a parameter : hour24='true'\") , f_MaterialTitle6));\n  $add_13(f_MaterialPanel1, (f_MaterialTimePicker7 = new MaterialTimePicker , $setAttribute($getElement(f_MaterialTimePicker7.input_0), 'placeholder', 'Snooze Time') , f_MaterialTimePicker7.hour24 = true , f_MaterialTimePicker7));\n  $add_13(f_MaterialPanel1, (f_PrettyPre8 = new PrettyPre , $setHTML(f_PrettyPre8, (sb_0 = new StringBuilder , sb_0.string += '&lt;m:MaterialTimePicker ui:field=\"tp\" placeholder=\"Snooze Time\" hour24=\"true\"/&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre8.element, 'lang-xml', true) , setStyleName(f_PrettyPre8.element, 'z-depth-1', true) , f_PrettyPre8));\n  $add_13(f_MaterialPanel1, (f_MaterialTitle9 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle9.header), 'Events') , $setText_9(f_MaterialTitle9.paragraph, 'We provided events on time picker namely : Close, Open, ValueChange events.') , f_MaterialTitle9));\n  $add_13(f_MaterialPanel1, (tpEvents = new MaterialTimePicker , $setAttribute($getElement(tpEvents.input_0), 'placeholder', 'Alarm Time') , this$static.owner.tpEvents = tpEvents , tpEvents));\n  $add_13(f_MaterialPanel1, (f_PrettyPre10 = new PrettyPre , $setHTML(f_PrettyPre10, (sb_1 = new StringBuilder , sb_1.string += '\\u2003// Open Handler<br> tpEvents.addOpenHandler(new OpenHandler&lt;String&gt;() {<br> \\u2003@Override<br> \\u2003public void onOpen(OpenEvent&lt;String&gt; event) {<br> \\u2003\\u2003MaterialToast.fireToast(\"Opened Time Picker\");<br> \\u2003}<br> });<br><br> // Close Handler<br> tpEvents.addCloseHandler(new CloseHandler&lt;String&gt;() {<br> \\u2003@Override<br> \\u2003public void onClose(CloseEvent&lt;String&gt; event) {<br> \\u2003\\u2003MaterialToast.fireToast(\"Closed Time Picker\");<br> \\u2003}<br> });<br><br> // ValueChange Handler<br> tpEvents.addValueChangeHandler(new ValueChangeHandler&lt;Date&gt;() {<br> \\u2003@Override<br> \\u2003public void onValueChange(ValueChangeEvent&lt;Date&gt; event) {<br> \\u2003\\u2003DateTimeFormat dtf = DateTimeFormat.getFormat(\"hh:mm a\");<br> \\u2003\\u2003Date time = event.getValue();<br> \\u2003\\u2003MaterialToast.fireToast(\"MaterialTimePicker value changed to: \" + dtf.format(time));<br> \\u2003}<br> });<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , setStyleName(f_PrettyPre10.element, 'lang-java', true) , setStyleName(f_PrettyPre10.element, 'z-depth-1', true) , f_PrettyPre10));\n  $add_13(f_MaterialPanel1, (f_MaterialTitle11 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle11.header), 'Clear()') , $setText_9(f_MaterialTitle11.paragraph, 'Clear your time picker value') , f_MaterialTitle11));\n  $add_13(f_MaterialPanel1, (tpClear = new MaterialTimePicker , $setAttribute($getElement(tpClear.input_0), 'placeholder', 'Snooze Time') , this$static.owner.tpClear = tpClear , tpClear));\n  $add_13(f_MaterialPanel1, (btnClear = new MaterialButton , btnClear.span_1.setText('Clear') , $add_13(btnClear, btnClear.span_1) , $setIconType(btnClear, ($clinit_IconType() , REFRESH)) , $addDomHandler(btnClear, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1)) , btnClear));\n  $add_13(f_MaterialPanel1, (f_PrettyPre12 = new PrettyPre , $setHTML(f_PrettyPre12, (sb_2 = new StringBuilder , sb_2.string += 'timepick.clear();' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html_0) , setStyleName(f_PrettyPre12.element, 'lang-java', true) , setStyleName(f_PrettyPre12.element, 'z-depth-1', true) , f_PrettyPre12));\n  return f_MaterialPanel1;\n}\n\nfunction TimePickersView_BinderImpl$Widgets(owner){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new TimePickersView_BinderImpl$Widgets$1(this);\n  this.owner = owner;\n}\n\ndefineClass(1143, 1, {}, TimePickersView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersView_BinderImpl/Widgets', 1143);\nfunction TimePickersView_BinderImpl$Widgets$1(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1144, 1, $intern_64, TimePickersView_BinderImpl$Widgets$1);\n_.onClick = function onClick_69(event_0){\n  $clearTimePickerValue($getElement(this.this$11.owner.tpClear.input_0));\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_timepickers_TimePickersView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.timepickers', 'TimePickersView_BinderImpl/Widgets/1', 1144);\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersPresenter$_annotation$$none$$) {\n    result = new TimePickersPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersView$_annotation$$none$$) {\n    result = new TimePickersView(new TimePickersView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersView$_annotation$$none$$;\n}\n\ndefineClass(566, 1, $intern_80);\n_.onSuccess_0 = function onSuccess_10(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$addins$timepickers$TimePickersPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_1)(10);\n\n//# sourceURL=gwtmaterialdemo-10.js\n")
