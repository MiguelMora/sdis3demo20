(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{348:function(e,t,r){"use strict";r.r(t);var n={name:"Formulario",data:function(){return{abierto:!1,valid:!0,val:0,select:"",date:"",checkbox:!1,items:["uno","dos","tres"]}},methods:{required:function(e){return!!e||"required value"},add:function(){this.$emit("input",{amount:this.val,category:this.select,date:this.date})}}},l=r(82),o=r(116),c=r.n(o),d=r(183),v=r(435),f=r(434),m=r(363),h=r(378),x=r(364),_=r(341),k=r(430),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-row",[r("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,l=t.attrs;return[r("v-text-field",e._g(e._b({attrs:{label:"Fecha","prepend-icon":"mdi-calendar",readonly:"",rules:[e.required]},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},"v-text-field",l,!1),n))]}}]),model:{value:e.abierto,callback:function(t){e.abierto=t},expression:"abierto"}},[e._v(" "),r("v-date-picker",{on:{input:function(t){e.abierto=!1}},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),e._v(" "),r("v-spacer"),e._v(" "),r("v-text-field",{attrs:{label:"value",rules:[e.required]},model:{value:e.val,callback:function(t){e.val=e._n(t)},expression:"val"}}),e._v(" "),r("v-spacer"),e._v(" "),r("v-select",{attrs:{items:e.items,rules:[e.required],label:"Item",required:""},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}})],1),e._v(" "),r("v-row",[r("v-btn",{attrs:{disabled:!e.valid,color:"success"},on:{click:e.add}},[e._v(" Submit ")])],1)],1)}),[],!1,null,"04f8ea66",null);t.default=component.exports;c()(component,{VBtn:d.a,VDatePicker:v.a,VForm:f.a,VMenu:m.a,VRow:h.a,VSelect:x.a,VSpacer:_.a,VTextField:k.a})},349:function(e,t,r){"use strict";r.r(t);var n={name:"Tabla",props:{items:{type:Array,value:function(){return[]}}},data:function(){return{headers:[{text:"Fecha",value:"date"},{text:"Categoría",value:"category"},{text:"Cantidad",value:"amount"}]}}},l=r(82),o=r(116),c=r.n(o),d=r(436),component=Object(l.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("v-data-table",{staticClass:"elevation-1",attrs:{headers:this.headers,items:this.items}})}),[],!1,null,"0e90b9d0",null);t.default=component.exports;c()(component,{VDataTable:d.a})},437:function(e,t,r){"use strict";r.r(t);var n={components:{Formulario:r(348).default},data:function(){return{items:[{f1:"X",f2:"Y"}]}},methods:{add:function(e){this.items.push(e)}}},l=r(82),o=r(116),c=r.n(o),d=r(359),v=r(345),component=Object(l.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("v-card",{attrs:{elevation:"2"}},[t("v-card-text",[t("formulario",{on:{input:this.add}})],1)],1),this._v(" "),t("tabla",{staticClass:"mt-5",attrs:{items:this.items}})],1)}),[],!1,null,"2c35de27",null);t.default=component.exports;c()(component,{Formulario:r(348).default,Tabla:r(349).default}),c()(component,{VCard:d.a,VCardText:v.b})}}]);