(this["webpackJsonpfreight-trust-react-charts"]=this["webpackJsonpfreight-trust-react-charts"]||[]).push([[0],{197:function(e,t,n){e.exports=n(296)},207:function(e,t,n){},296:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(41),o=n.n(i),c=n(14),l=n(189),u=n(21),b=n(96);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(205),n(206),n(207);var d=n(57),p=n(176),s=n(35),f=n(5),h=n(80),m=n(23),x=n.n(m),v=n(34),g=n(93),E=n.n(g),O=n(177),j=n.n(O),y="TABS/LOAD_INITIAL_STATE",T="TABS/RESTORE_STATE";var w=function(e){var t=e();return{variables:t.variables,chart:t.chart,chartForm:t.chartForm,chartValues:t.chartValues}};function A(e,t,n){return{type:"TABS/SET_TAB_OPTION",payload:{tabId:e,optionName:t,value:n}}}var _={tabArray:[999],tabById:{999:{id:999,name:"Tab 1",reRenderId:1,state:{},options:{legend:!0,tooltip:!0}}},activeTabId:999};var S=[{full_name:"211 - Bill of Lading",id:1,type:"X12",version:"C"},{full_name:"4010",id:2,type:"X12",version:"C"},{full_name:"D.07A",id:3,type:"EDIFACT",version:"C"},{full_name:"[TXID]",id:4,type:"vegetable",version:"C"},{full_name:"[TXID]",id:5,type:"X12",version:"C"},{full_name:"[TXID]",id:6,type:"X12",version:"hr"},{full_name:"[TXID]",id:7,type:"X12",version:"hr"},{full_name:"[TXID]",id:8,type:"X12",version:"hr"},{full_name:"[TXID]",id:9,type:"X12",version:"hr"},{full_name:"[TXID]",id:10,is_meter:0,name:"[TXID]",simulation_id:9,type:"X12",version:"hr"}],I={chart_data:"",chart_name:"tony pie",created_at:"2020-09-18T15:27:19.000000Z",id:9,options:{variables:[]},variables:[],type:"pie",updated_at:"2020-09-18T15:27:19.000000Z"},k="VARIABLES/SET_UNITS",C=function(){var e=Object(v.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){return setTimeout(e(t),3e3)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){return function(){var e=Object(v.a)(x.a.mark((function e(t){var n,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(S);case 2:n=e.sent,a=Object(g.uniq)(n.map((function(e){return e.units}))),t({type:"VARIABLES/FETCH_VARIABLES_START"}),t({type:k,payload:{units:a}}),t({type:"VARIABLES/FETCH_VARIABLES_SUCCESS",payload:n});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},B=function(e,t){return function(n){n({type:"VARIABLES/SET_FILTER_VARIABLE",payload:{type:e,value:t}})}},R={defaultVariables:[],variables:[],units:[],filter:{},plottedVariable:[],selectedPlottedVariable:{}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"VARIABLES/FETCH_VARIABLES_START":return Object(f.a)(Object(f.a)({},e),{},{defaultVariables:[],variables:[]});case"VARIABLES/FETCH_VARIABLES_SUCCESS":return Object(f.a)(Object(f.a)({},e),{},{defaultVariables:a,variables:a});case k:return Object(f.a)(Object(f.a)({},e),{},{units:a.units});case"VARIABLES/SET_FILTER_VARIABLE":var r=e.defaultVariables.filter((function(e){var t=!0;return"step"===a.type&&e.type.toLowerCase()!==a.value.toLowerCase()&&(t=!1),"units"===a.type&&e.units.toLowerCase()!==a.value.toLowerCase()&&(t=!1),"keyword"===a.type&&-1===e.full_name.toLowerCase().indexOf(a.value.toLowerCase())&&(t=!1),t}));return Object(f.a)(Object(f.a)({},e),{},{variables:r,filter:Object(f.a)(Object(f.a)({},e.filter),{},Object(s.a)({},a.type,a.value))});case"VARIABLES/RESET_FILTER_VARIABLE":return Object(f.a)(Object(f.a)({},e),{},{variables:e.defaultVariables});case"VARIABLES/TOGGLE_PLOTTED_VARIABLE":return Object(f.a)(Object(f.a)({},e),{},{plottedVariable:a.newPlotted,selectedPlottedVariable:a.newSelectedPlotted});case T:return a.variables?Object(f.a)(Object(f.a)({},e),{},{defaultVariables:a.variables.defaultVariables,variables:a.variables.variables,selectedPlottedVariable:a.variables.selectedPlottedVariable,plottedVariable:a.variables.plottedVariable}):e;case y:return R;default:return e}},P={},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"CHART/FETCH_CHART_SUCCESS":return a;default:return e}},F=n(81),H=n.n(F);function z(e,t){return t.find((function(t){var n=e.month,a=e.date,r=e.hour,i=e.minute,o=new Date(t.datetime),c=new Date(o.getFullYear(),H()(n)?Number(n)-1:o.getMonth(),H()(a)?Number(a)-1:o.getDate(),H()(r)?Number(r)-1:o.getHours(),H()(i)?Number(i)-1:o.getMinutes(),0,0);return o.getTime()===c.getTime()}))}function N(e){return X.apply(this,arguments)}function X(){return(X=Object(v.a)(x.a.mark((function e(t){var n,a,r,i;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t().chartForm.values,a=t().variables.plottedVariable,r=[],i={},a.forEach((function(e){e.variableValues=[{datetime:"Fri Sep 25 22:07:49 PDT 2020",max_datetime:null,max_value:null,min_datetime:null,min_value:null,output_variable_id:1,value:"12.722719046658695"}]})),a.forEach((function(e){var t=z(n,e.variableValues);t&&(r.push({group:e.full_name,value:Number(t.value*Math.random(1,100))}),i[e.full_name]=e.bgColor)})),e.abrupt("return",{chartValues:r,labels:i});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M=function(e,t){return function(){var n=Object(v.a)(x.a.mark((function n(a){return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:a({type:"CHART/SET_CHART_VALUES",payload:{chartValues:e,labels:t}});case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},U={chartValues:[],labels:{}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"CHART/SET_CHART_VALUES":return Object(f.a)(Object(f.a)({},e),{},{chartValues:a.chartValues,labels:a.labels});case T:return a.chartValues?a.chartValues:e;case y:return U;default:return e}},q="CHART_FORM/CLEAR_FORM",W={values:{startDate:"",endDate:"",maximumDatePoints:0,steps:"daily",maxDate:"",minDate:"",date:"",month:"",hour:"",minute:""},isSubmitting:!1,error:""};var J=Object(d.c)({variables:L,tabs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"TABS/ADD_TAB":var r=Number(E.a.uniqueId()),i="Tab ".concat(r+1);return Object(f.a)(Object(f.a)({},e),{},{activeTabId:r,tabArray:[].concat(Object(h.a)(e.tabArray),[r]),tabById:Object(f.a)(Object(f.a)({},e.tabById),{},Object(s.a)({},r,{id:r,name:i,state:{},options:{legend:!0,tooltip:!0}}))});case"TABS/SET_ACTIVE_TAB":return Object(f.a)(Object(f.a)({},e),{},{activeTabId:a.tabId});case"TABS/CLOSE_TAB":var o=a.tabId;return delete e.tabById[o],Object(f.a)(Object(f.a)({},e),{},{tabArray:e.tabArray.filter((function(e){return e!==o})),tabById:Object(f.a)({},e.tabById)});case"TABS/SET_TAB_OPTION":var c=a.tabId,l=a.optionName,u=a.value;return Object(f.a)(Object(f.a)({},e),{},{tabById:Object(f.a)(Object(f.a)({},e.tabById),{},Object(s.a)({},c,Object(f.a)(Object(f.a)({},e.tabById[c]),{},{reRenderId:Date.now(),options:Object(f.a)(Object(f.a)({},e.tabById[c].options),{},Object(s.a)({},l,u))})))});case"TABS/SAVE_STATE_DATA":var b=a.tabId,d=a.saveState;return Object(f.a)(Object(f.a)({},e),{},{tabById:Object(f.a)(Object(f.a)({},e.tabById),{},Object(s.a)({},b,Object(f.a)(Object(f.a)({},e.tabById[b]),{},{state:d})))});default:return e}},chart:D,chartForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"CHART_FORM/SET_FORM_VALUE_PIE":var r=a.formValues;return Object(f.a)(Object(f.a)({},e),{},{values:Object(f.a)(Object(f.a)({},e.values),{},{date:r.date||"",month:r.month||"",hour:r.hour||"",minute:r.minute||""})});case q:return W;case T:return a.chartForm?a.chartForm:e;case y:return W;default:return e}},chartValues:G}),Z=d.d,Y=Object(d.e)(J,Z(Object(d.a)(p.a))),$=n(6),K=n(7),Q=n(69),ee=n(97),te=n(305);function ne(){var e=Object($.a)(["\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n      "]);return ne=function(){return e},e}function ae(){var e=Object($.a)(["\n  background-color: ",";\n\n  .bx--form-item {\n    overflow: hidden;\n    width: 100%;\n  }\n  .bx--checkbox-label {\n    width: 100%;\n    padding-left: 28px;\n  }\n  .bx--checkbox-label-text {\n    color: ",";\n    width: 100%;\n    display: block;\n\n    ","\n  }\n\n  .bx--checkbox:checked + .bx--checkbox-label::before,\n  .bx--checkbox:indeterminate + .bx--checkbox-label::before,\n  .bx--checkbox-label[data-contained-checkbox-state='true']::before,\n  .bx--checkbox-label[data-contained-checkbox-state='mixed']::before {\n    background-color: #3d70b2;\n    border-color: #3d70b2;\n    border-width: 1px;\n    box-shadow: 0 0 0 0 transparent;\n  }\n  .bx--checkbox:focus + .bx--checkbox-label::before,\n  .bx--checkbox-label__focus::before,\n  .bx--checkbox:checked:focus + .bx--checkbox-label::before,\n  .bx--checkbox-label[data-contained-checkbox-state='true'].bx--checkbox-label__focus::before,\n  .bx--checkbox:indeterminate:focus + .bx--checkbox-label::before,\n  .bx--checkbox-label[data-contained-checkbox-state='mixed'].bx--checkbox-label__focus::before {\n    box-shadow: 0 0 0 0 transparent;\n  }\n  .bx--form-item.bx--checkbox-wrapper:first-of-type,\n  .bx--form-item.bx--checkbox-wrapper:last-of-type {\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n"]);return ae=function(){return e},e}var re=function(e){var t=e.id,n=e.labelText,a=e.onChange,i=e.bgColor,o=e.color,c=e.textEllipsis,l=void 0!==c&&c,u=Object(ee.a)(e,["id","labelText","onChange","bgColor","color","textEllipsis"]);return r.a.createElement(ie,{bgColor:i,color:o,textEllipsis:l},r.a.createElement(te.a,Object.assign({id:t,labelText:n,onChange:a},u)))},ie=K.b.div(ae(),(function(e){return e.bgColor||"#fff"}),(function(e){return e.color||"var(--cds-text-01, #152935)"}),(function(e){return e.textEllipsis&&Object(K.a)(ne())})),oe=n(36),ce=Object(oe.a)((function(e){return e.variables}),(function(e){return e.variables})),le=(Object(oe.a)((function(e){return e.variables}),(function(e){return e.units})),Object(oe.a)((function(e){return e.variables}),(function(e){return e.filter})),Object(oe.a)((function(e){return e.variables}),(function(e){return e.plottedVariable}))),ue=Object(oe.a)((function(e){return e.variables}),(function(e){return e.selectedPlottedVariable}));function be(){var e=Object($.a)(["\n  width: 100%;\n  height: 56vh;\n  overflow-y: auto;\n  color: #5a6872;\n  font-size: 14px;\n  margin: 20px 0 15px 0;\n  padding-right: 10px;\n"]);return be=function(){return e},e}function de(){var e=Object($.a)(["\n  text-align: left;\n  font-size: 14px;\n  font-weight: bold;\n  color: #152935;\n"]);return de=function(){return e},e}var pe=function(){var e=Object(c.c)(le);return r.a.createElement(r.a.Fragment,null,r.a.createElement(se,null,"Selected Variables / Sections"),r.a.createElement(fe,null,e.map((function(e){return r.a.createElement(re,{key:e.id,id:"section-".concat(e.id.toString()),labelText:e.full_name,defaultChecked:!0,disabled:!0,onClick:function(){return console.log("click")},bgColor:e.bgColor,color:"#fff",textEllipsis:!0})}))))},se=K.b.div(de()),fe=K.b.div(be()),he=n(191),me=n(307),xe=n(306);function ve(){var e=Object($.a)(["\n  width: ",";\n\n  .bx--label {\n    text-align: left;\n    font-size: 14px;\n    font-weight: bold;\n    color: #152935;\n  }\n  .bx--select-input {\n    text-transform: capitalize;\n  }\n  .bx--select,\n  .bx--select-input__wrapper {\n    width: 100%;\n  }\n"]);return ve=function(){return e},e}function ge(e){var t=e.id,n=e.labelText,a=e.children,i=e.width,o=e.onChange;return r.a.createElement(Ee,{width:i},r.a.createElement(xe.a,{light:!0,id:t,labelText:n,onChange:o},a))}var Ee=K.b.div(ve(),(function(e){return e.width||"100%"})),Oe=n(308);function je(){var e=Object($.a)(["\n      .bx--label {\n        opacity: 0;\n      }\n    "]);return je=function(){return e},e}function ye(){var e=Object($.a)(["\n  width: ",";\n\n  ","\n\n  .bx--label {\n    text-align: left;\n    font-size: 14px;\n    font-weight: bold;\n    color: #152935;\n  }\n"]);return ye=function(){return e},e}function Te(e){var t=e.id,n=e.value,a=e.labelText,i=e.width,o=e.hideLabel,c=Object(ee.a)(e,["id","value","labelText","width","hideLabel"]);return r.a.createElement(we,{width:i,hideLabel:o},r.a.createElement(Oe.a,Object.assign({light:!0,id:t,labelText:a,defaultValue:n},c)))}var we=K.b.div(ye(),(function(e){return e.width||"100%"}),(function(e){return e.hideLabel&&Object(K.a)(je())})),Ae=n(309);function _e(){var e=Object($.a)(["\n  width: ",";\n  .bx--label {\n    text-align: left;\n    font-size: 14px;\n    font-weight: bold;\n    color: #152935;\n  }\n  .bx--number input[type='number'] {\n    min-width: ",";\n  }\n"]);return _e=function(){return e},e}function Se(e){var t=e.id,n=e.value,a=e.name,i=e.label,o=e.onChange,c=e.width;return r.a.createElement(Ie,{width:c},r.a.createElement(Ae.a,{id:t,name:a,invalidText:"Number is not valid",label:i,min:0,step:1,value:n,onChange:o}))}var Ie=K.b.div(_e(),(function(e){return e.width||"100%"}),(function(e){return e.width||"100%"})),ke=n(311);function Ce(e){var t=e.text,n=e.onClick;return r.a.createElement(ke.a,{kind:"tertiary",size:"field",onClick:n},t)}var Ve=function(e){return e.chart},Be=Object(oe.a)((function(e){return e.chartValues}),(function(e){return e.chartValues})),Re=Object(oe.a)((function(e){return e.chartValues}),(function(e){return e.labels}));function Le(){var e=Object($.a)(["\n  display: flex;\n  align-self: flex-end;\n\n  button + button {\n    margin-left: 10px;\n  }\n"]);return Le=function(){return e},e}function Pe(){var e=Object($.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 20px;\n"]);return Pe=function(){return e},e}function De(){var e=Object($.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  & > div + div {\n    margin-left: 3px;\n  }\n"]);return De=function(){return e},e}var Fe=["Simple","Two level"],He=function(){var e=Object(a.useState)({}),t=Object(he.a)(e,2),n=t[0],i=t[1],o=Object(c.b)(),l=Object(c.c)(Ve),u=function(e,t){i(Object(f.a)(Object(f.a)({},n),{},Object(s.a)({},t,e.target.value)))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(ze,null,r.a.createElement(ge,{id:"select-variables-type",labelText:"Type",width:"33%"},Fe.map((function(e,t){return r.a.createElement(me.a,{key:t,value:e,text:e})}))),r.a.createElement(Te,{id:"text-month-field",type:"number",placeholder:"mm",labelText:"Date",name:"month",width:"65px",onChange:function(e){return u(e,"month")}}),r.a.createElement(Te,{id:"text-day-field",type:"number",placeholder:"dd",labelText:"day",name:"day",width:"65px",hideLabel:!0,onChange:function(e){return u(e,"date")}}),r.a.createElement(Te,{id:"text-day-field",type:"number",placeholder:"hh",labelText:"Time",name:"day",width:"65px",onChange:function(e){return u(e,"hour")}}),r.a.createElement(Te,{id:"text-day-field",type:"number",placeholder:"mm",labelText:"minute",name:"day",width:"65px",hideLabel:!0,onChange:function(e){return u(e,"minute")}})),r.a.createElement(Ne,null,"pie"===l.type?null:r.a.createElement(Se,{id:"number-section-field",label:"Sections",value:0,width:"100px"}),r.a.createElement(Xe,null,r.a.createElement(Ce,{text:"Apply",onClick:function(){var e;o((e=n,function(){var t=Object(v.a)(x.a.mark((function t(n,a){var r,i,o,c,l,u;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=a().variables.plottedVariable,i=a().chart.type,0!==r.length){t.next=5;break}return Object(b.a)("Selected variables must have same type",{type:"error"}),t.abrupt("return");case 5:return"pie"===i&&(o=N,n({type:"CHART_FORM/SET_FORM_VALUE_PIE",payload:{formValues:e}})),t.next=8,o(a);case 8:c=t.sent,l=c.chartValues,u=c.labels,n(M(l,u));case 12:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()))}}),r.a.createElement(Ce,{text:"Reset",onClick:function(){o(function(){var e=Object(v.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:q});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}))))},ze=K.b.div(De()),Ne=K.b.div(Pe()),Xe=K.b.div(Le());function Me(){var e=Object($.a)(["\n  margin: 20px -15px;\n  border-top: 1px solid #cfd0d1;\n"]);return Me=function(){return e},e}function Ue(){var e=Object($.a)(["\n  position: absolute;\n  right: 10px;\n  top: 0;\n  cursor: pointer;\n"]);return Ue=function(){return e},e}function Ge(){var e=Object($.a)(["\n  position: relative;\n  text-align: center;\n  text-transform: capitalize;\n  color: #5a6872;\n  padding-bottom: 30px;\n"]);return Ge=function(){return e},e}function qe(){var e=Object($.a)(["\n  width: 440px;\n  height: 100%;\n  padding: 20px 15px 0;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 2px 2px 10px #d9ebfd;\n  z-index: 1;\n"]);return qe=function(){return e},e}var We=function(){return r.a.createElement(Je,null,r.a.createElement(Ze,null,r.a.createElement("span",null,"Transaction Explorer"),r.a.createElement(Ye,null,r.a.createElement(Q.a,{fill:"var(--cds-text-02,#525252)"}))),r.a.createElement(He,null),r.a.createElement($e,null),r.a.createElement(pe,null))},Je=K.b.div(qe()),Ze=K.b.div(Ge()),Ye=K.b.div(Ue()),$e=K.b.div(Me()),Ke=n(185),Qe=function(e){return e.tabs.tabById},et=function(e){return e.tabs.activeTabId},tt=Object(oe.a)(Qe,(function(e){return e.tabs.tabArray}),(function(e,t){return t.map((function(t){return e[t]}))})),nt=Object(oe.a)(Qe,et,(function(e,t){return e[t]})),at=n(184),rt=n(181);function it(){var e=Object($.a)(["\n  height: 1px;\n  margin: 5px 0;\n  background: rgba(0, 0, 0, 0.1);\n"]);return it=function(){return e},e}function ot(){var e=Object($.a)(["\n  padding: 7px 15px;\n"]);return ot=function(){return e},e}function ct(){var e=document.querySelector(".recharts-wrapper");if(e){var t=e.innerHTML,n=document.createElement("canvas");n.id="canvas",document.getElementById("root").appendChild(n),Object(rt.a)("canvas",t);var a=document.createElement("a");a.download="chart.png",a.href=n.toDataURL("image/png"),a.click(),setTimeout((function(){n.remove()}))}}var lt=function(e){var t=e.tabId,n=e.options,a=Object(c.b)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(ut,null,"Send to View..."),r.a.createElement(ut,{onClick:ct},"Export..."),r.a.createElement(bt,null),r.a.createElement(ut,null,r.a.createElement(re,{id:"toggle-chart-tooltip-".concat(t),labelText:"Tooltip",defaultChecked:n.tooltip,onClick:function(e){e.stopPropagation(),a(A(t,"tooltip",!n.tooltip))}})),r.a.createElement(ut,null,r.a.createElement(re,{id:"toggle-chart-legend-".concat(t),labelText:"Legend",defaultChecked:n.legend,onClick:function(e){e.stopPropagation(),a(A(t,"legend",!n.legend))}})))},ut=K.b.div(ot()),bt=K.b.div(it());function dt(){var e=Object($.a)(["\n      color: #aaa;\n    "]);return dt=function(){return e},e}function pt(){var e=Object($.a)(["\n  padding: 8px 15px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  ","\n"]);return pt=function(){return e},e}function st(){var e=Object($.a)(["\n  position: absolute;\n  top: 0px;\n  padding: 0;\n  margin: 0;\n  left: 0px;\n  width: 20px;\n  height: 20px;\n  opacity: 0;\n  cursor: pointer;\n  &:checked + "," {\n    display: block;\n    padding: 10px 0;\n  }\n"]);return st=function(){return e},e}function ft(){var e=Object($.a)(["\n      top: auto;\n      bottom: 150%;\n      &:before {\n        bottom: -7px;\n        top: auto;\n        transform: rotate(180deg);\n      }\n      &:after {\n        bottom: -7px;\n        top: auto;\n        transform: rotate(180deg);\n      }\n    "]);return ft=function(){return e},e}function ht(){var e=Object($.a)(["\n      right: -5px;\n      &:before,\n      &:after {\n        right: 7px;\n      }\n      padding: 14px;\n      text-align: left;\n      font-size: 0.9rem;\n      width: 220px;\n      height: 70px;\n    "]);return ht=function(){return e},e}function mt(){var e=Object($.a)(["\n      right: -110px;\n      &:before,\n      &:after {\n        right: 110px;\n      }\n    "]);return mt=function(){return e},e}function xt(){var e=Object($.a)(["\n  position: absolute;\n  right: -15px;\n  top: 100%;\n  margin-top: ",";\n  width: ",";\n  height: ",";\n  background: white;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);\n  z-index: 100;\n  display: none;\n  &:after {\n    position: absolute;\n    top: -4px;\n    right: 22px;\n    content: '';\n    width: 0;\n    height: 0;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-bottom: 5px solid white;\n  }\n\n  &:before {\n    position: absolute;\n    top: -5px;\n    right: 22px;\n    content: '';\n    width: 0;\n    height: 0;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-bottom: 5px solid #dde2e6;\n  }\n\n  ","\n\n  ","\n\n  ","\n"]);return xt=function(){return e},e}function vt(){var e=Object($.a)(["\n      right: unset;\n      left: -15px;\n\n      &:after {\n        right: unset;\n        left: 18px;\n      }\n\n      &:before {\n        right: unset;\n        left: 18px;\n      }\n    "]);return vt=function(){return e},e}function gt(){var e=Object($.a)(["\n      display: block;\n    "]);return gt=function(){return e},e}function Et(){var e=Object($.a)(["\n  position: absolute;\n  padding: 10px 0;\n  right: -18px;\n  top: 100%;\n  margin-top: ",";\n  width: ",";\n  height: ",";\n  background: white;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);\n  z-index: 100;\n  display: none;\n\n  ","\n\n  &:after {\n    position: absolute;\n    top: -4px;\n    right: 22px;\n    content: '';\n    width: 0;\n    height: 0;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-bottom: 5px solid white;\n  }\n\n  &:before {\n    position: absolute;\n    top: -5px;\n    right: 22px;\n    content: '';\n    width: 0;\n    height: 0;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-bottom: 5px solid #dde2e6;\n  }\n\n  ","\n"]);return Et=function(){return e},e}function Ot(){var e=Object($.a)(["\n  outline: none;\n  cursor: pointer;\n  padding: 0;\n  background: transparent;\n  border: none;\n"]);return Ot=function(){return e},e}function jt(){var e=Object($.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n"]);return jt=function(){return e},e}var yt=K.b.div(jt()),Tt=K.b.button(Ot()),wt=(K.b.div(Et(),(function(e){return e.marginTop||"10px"}),(function(e){return e.width||"max-content"}),(function(e){return e.height||"max-content"}),(function(e){return e.isShowing&&Object(K.a)(gt())}),(function(e){return e.popoverPosition&&"left"===e.popoverPosition&&Object(K.a)(vt())})),K.b.div(xt(),(function(e){return e.marginTop||"10px"}),(function(e){return e.width||"max-content"}),(function(e){return e.height||"max-content"}),(function(e){return e.popoverPosition&&"tabMenu"===e.popoverPosition&&Object(K.a)(mt())}),(function(e){return e.popoverPosition&&"variables"===e.popoverPosition&&Object(K.a)(ht())}),(function(e){return e.popoverPosition&&"notification"===e.popoverPosition&&Object(K.a)(ft())}))),At=K.b.input(st(),wt),_t=(K.b.div(pt(),(function(e){return e.disabled&&Object(K.a)(dt())})),function(e){var t=e.icon,n=e.content,a=e.marginTop,i=e.popoverPosition,o=e.popoverWidth,c=e.popoverHeight,l=e.autoHidden;return r.a.createElement(yt,null,r.a.createElement(Tt,null,t),r.a.createElement(At,{type:"checkbox"}),l&&r.a.createElement("span",{className:"autoHidden"}),r.a.createElement(wt,{marginTop:a,popoverPosition:i,width:o,height:c},n))});function St(){var e=Object($.a)(["\n  text-align: center;\n  flex-grow: 1;\n  align-self: normal;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return St=function(){return e},e}function It(){var e=Object($.a)(["\n      box-shadow: 3px -8px 6px 5px #d9ebfd;\n      z-index: 10;\n    "]);return It=function(){return e},e}function kt(){var e=Object($.a)(["\n  position: relative;\n  padding: 0 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-height: 50px;\n  height: 50px;\n  min-width: 150px;\n  background: white;\n  box-shadow: inset -10px -5px 25px 0px #d9ebfd;\n  cursor: pointer;\n\n  ","\n"]);return kt=function(){return e},e}var Ct=function(e){var t=e.id,n=e.name,a=e.options,i=e.isActive,o=Object(c.b)();return r.a.createElement(Vt,{isActive:i},r.a.createElement(_t,{icon:r.a.createElement(at.a,null),popoverHeight:"auto",content:r.a.createElement(lt,{tabId:t,options:a}),popoverPosition:"tabMenu"}),r.a.createElement(Bt,{onClick:function(){var e;o((e=t,function(t,n){var a=n().tabs.tabById[e];t({type:"TABS/SAVE_STATE_DATA",payload:{tabId:n().tabs.activeTabId,saveState:w(n)}}),t({type:"TABS/SET_ACTIVE_TAB",payload:{tabId:e}}),t({type:T,payload:a.state})}))}},n),r.a.createElement(Q.a,{onClick:function(){var e;o((e=t,function(t,n){var a=null,r=n().tabs.tabArray.indexOf(e);if(r>0&&(a=n().tabs.tabArray[r-1]),a){var i=n().tabs.tabById[a];t({type:"TABS/SET_ACTIVE_TAB",payload:{tabId:a}}),t({type:"TABS/CLOSE_TAB",payload:{tabId:e}}),t({type:T,payload:i.state})}}))}}))},Vt=K.b.div(kt(),(function(e){return e.isActive&&Object(K.a)(It())})),Bt=K.b.div(St());function Rt(){var e=Object($.a)(["\n  flex-grow: 1;\n  z-index: 9;\n  display: flex;\n  align-items: center;\n"]);return Rt=function(){return e},e}function Lt(){var e=Object($.a)(["\n  min-width: 50px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n\n  svg {\n    fill: var(--cds-icon-01, #161616);\n  }\n"]);return Lt=function(){return e},e}function Pt(){var e=Object($.a)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  z-index: 50;\n  box-shadow: inset 0px -5px 10px 0px #d9ebfd;\n  margin: 0 -10px;\n"]);return Pt=function(){return e},e}function Dt(){var e=Object($.a)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  background-color: #fff;\n  padding: 0 10px;\n"]);return Dt=function(){return e},e}var Ft=function(e){var t=e.children,n=Object(c.b)(),a=Object(c.c)(tt),i=Object(c.c)(et);return r.a.createElement(Ht,null,r.a.createElement(zt,null,a.map((function(e){return r.a.createElement(Ct,{key:e.id,id:e.id,options:e.options,name:e.name,isActive:e.id===i})})),r.a.createElement(Nt,{onClick:function(){n((function(e,t){e({type:"TABS/SAVE_STATE_DATA",payload:{tabId:t().tabs.activeTabId,saveState:w(t)}}),e({type:"TABS/ADD_TAB"}),e({type:y}),e(V(9))}))}},r.a.createElement(Ke.a,null))),r.a.createElement(Xt,null,t))},Ht=K.b.div(Dt()),zt=K.b.div(Pt()),Nt=K.b.div(Lt()),Xt=K.b.div(Rt()),Mt=(n(285),n(190)),Ut=function(){var e=Object(c.c)(Ve),t=Object(c.c)(nt),n=Object(c.c)(Be),a=Object(c.c)(Re),i={legend:{alignment:"center"}};return r.a.createElement(r.a.Fragment,null,"pie"===e.type&&r.a.createElement(Mt.a,{key:t.reRenderId,data:n,options:("pie"===e.type&&(i=Object(f.a)(Object(f.a)({},i),{},{legend:Object(f.a)(Object(f.a)({},i.legend),{},{enabled:t.options.legend}),tooltip:{enabled:t.options.tooltip,showTotal:t.options.tooltip},pie:{alignment:"center"},height:"500px",color:{scale:Object(f.a)({},a)}})),i)}))},Gt=function(){return r.a.createElement(Ft,null,r.a.createElement(Ut,null))},qt=n(310);function Wt(){var e=Object($.a)(["\n  width: 100%;\n  height: 65vh;\n  overflow-y: auto;\n  color: #5a6872;\n  font-size: 14px;\n  margin: 20px 0 15px 0;\n  padding: 0 10px;\n\n  & > div + div {\n    margin-bottom: 5px;\n  }\n"]);return Wt=function(){return e},e}var Jt=function(e){var t=e.variables,n=e.selectedPlotted,a=e.handleToggleVariable,i=e.checkboxName;return r.a.createElement(Zt,null,t.map((function(e){return r.a.createElement(re,{key:e.id,id:"".concat(i,"-").concat(e.id.toString()),defaultChecked:n[e.id],labelText:e.full_name,onClick:function(){return a(e.id)}})})))},Zt=K.b.div(Wt());function Yt(){var e=Object($.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return Yt=function(){return e},e}function $t(){var e=Object($.a)(["\n  position: absolute;\n  left: 10px;\n  top: 0;\n  cursor: pointer;\n"]);return $t=function(){return e},e}function Kt(){var e=Object($.a)(["\n  position: relative;\n  text-align: center;\n  text-transform: capitalize;\n  color: #5a6872;\n  padding-bottom: 30px;\n"]);return Kt=function(){return e},e}function Qt(){var e=Object($.a)(["\n  flex: 0 0 430px;\n  height: 100%;\n  padding: 20px 15px 0;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 2px 2px 10px #d9ebfd;\n  z-index: 1;\n"]);return Qt=function(){return e},e}var en=["all","x12","edifact"],tn=function(){var e=Object(c.b)(),t=Object(c.c)(ce),n=Object(c.c)(le),a=Object(c.c)(ue),i=Object(c.c)(nt);return r.a.createElement(nn,null,r.a.createElement(an,null,r.a.createElement("span",null,"Transaction Types"),r.a.createElement(rn,null,r.a.createElement(Q.a,{fill:"var(--cds-text-02,#525252)"}))),r.a.createElement(on,null,r.a.createElement(ge,{id:"select-variables-step",labelText:"Type",width:"40%",onChange:function(t){return function(t,n){"all"!==t.target.value?e(B(n,t.target.value)):e((function(e){e({type:"VARIABLES/RESET_FILTER_VARIABLE"})}))}(t,"step")}},en.map((function(e,t){return r.a.createElement(me.a,{key:t,value:e,text:e})})))),r.a.createElement("br",null),r.a.createElement(qt.a,{labelText:"",placeHolderText:"Search",light:!0,onChange:function(t){var n;""!==(n=t.target.value).trim()?e(B("keyword",n)):e((function(e){e({type:"VARIABLES/RESET_FILTER_VARIABLE"})}))}}),r.a.createElement(Jt,{key:i.id,variables:t,plottedVariables:n,selectedPlotted:a,handleToggleVariable:function(t){e(function(e){return function(t,n){var a=n().variables,r=a.plottedVariable,i=a.variables,o=a.selectedPlottedVariable,c=i.filter((function(t){return t.id===e}))[0],l=Object(h.a)(r),u=Object(f.a)({},o),b=l.findIndex((function(t){return t.id===e}));b>=0?(l.splice(b,1),delete u[e]):(l=[].concat(Object(h.a)(l),[Object(f.a)(Object(f.a)({},c),{},{bgColor:j.a.random().hex()})]),u=Object(f.a)(Object(f.a)({},o),{},Object(s.a)({},e,!0))),t({type:"VARIABLES/TOGGLE_PLOTTED_VARIABLE",payload:{newPlotted:l,newSelectedPlotted:u}})}}(t))},checkboxName:"variable-panel-checkbox"}))},nn=K.b.div(Qt()),an=K.b.div(Kt()),rn=K.b.div($t()),on=K.b.div(Yt()),cn=function(){var e=Object(c.b)();return Object(a.useEffect)((function(){e(V(9)),e(function(){var e=Object(v.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"CHART/FETCH_CHART_SUCCESS",payload:I});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),r.a.createElement("div",{className:"chartEditor"},r.a.createElement(We,null),r.a.createElement(Gt,null),r.a.createElement(tn,null))};function ln(){var e=Object($.a)(["\n  position: relative;\n  font-size: 16px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 1.25;\n  -webkit-letter-spacing: normal;\n  -moz-letter-spacing: normal;\n  -ms-letter-spacing: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: var(--cds-text-02, #525252);\n  margin-right: 35px;\n"]);return ln=function(){return e},e}function un(e){var t=e.text;return r.a.createElement(bn,null,t)}var bn=K.b.div(ln());function dn(){var e=Object($.a)(["\n  padding-left: 5.5px;\n  padding-right: 5.5px;\n  margin-right: 25px;\n  display: flex;\n  align-items: center;\n  color: #5a6872;\n  img {\n    width: 42px;\n    height: 46px;\n    margin-right: 10px;\n  }\n"]);return dn=function(){return e},e}function pn(){var e=Object($.a)(["\n  height: 67px;\n  display: flex;\n  align-items: center;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 10px #d9ebfd;\n"]);return pn=function(){return e},e}function sn(){return r.a.createElement(fn,null,r.a.createElement(hn,null,r.a.createElement(un,{text:"Freight Trust AS2/EDI Network"})))}var fn=K.b.div(pn()),hn=K.b.div(dn());var mn=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(sn,null),r.a.createElement("main",null,r.a.createElement(cn,null))))};b.a.configure(),o.a.render(r.a.createElement(c.a,{store:Y},r.a.createElement(l.a,{basename:"/"},r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:mn})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[197,1,2]]]);
//# sourceMappingURL=main.4d00256b.chunk.js.map