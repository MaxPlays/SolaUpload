(function(e){function t(t){for(var o,s,i=t[0],l=t[1],u=t[2],p=0,d=[];p<i.length;p++)s=i[p],r[s]&&d.push(r[s][0]),r[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);c&&c(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},a=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"319d":function(e,t,n){"use strict";var o=n("6730"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=n("bb71");n("da64");o["a"].use(r["a"],{iconfont:"md"});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{light:"",id:"main"}},[n("v-content",[n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{row:"",wrap:"","justify-center":"","align-content-center":""}},[n("v-flex",{attrs:{xs12:"",xl12:"","text-xs-center":""}},[n("div",{staticClass:"display-2"},[e._v("Upload your Images")])]),n("v-flex",{attrs:{xs12:"",xl12:""}},[n("dropzonefile")],1)],1)],1)],1)],1)},s=[],i=n("82e0"),l=n.n(i),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"hello"},[e._v("Vue Dropzone")]),n("vue-dropzone",{ref:"myVueDropzone",attrs:{"include-styling":!1,useCustomSlot:!0,id:"dropzone",options:e.dropzoneOptions},on:{"vdropzone-upload-progress":e.uploadProgress,"vdropzone-file-added":e.fileAdded,"vdropzone-sending-multiple":e.sendingFiles,"vdropzone-success-multiple":e.success}},[n("div",{staticClass:"dropzone-container"},[n("div",{staticClass:"file-selector"},[n("figure",[n("v-icon",[e._v("cloud_upload")])],1),e._v("Drop Or Add Files Here\n        "),n("p",{staticClass:"separator"},[n("span",[e._v("or")])]),n("button",{attrs:{type:"button"}},[e._v("Browse")])])])]),n("v-progress-linear",{model:{value:e.progress,callback:function(t){e.progress=t},expression:"progress"}})],1)},c=[],p=n("75fc"),d=(n("28a5"),n("7f7f"),n("92c3")),f=n.n(d),m=(n("1e3f"),{name:"Attachment",data:function(){return{progress:0,msg:"Welcome to Your Vue.js App",tempAttachments:[],attachments:[],dropzoneOptions:{url:"php/upload.php",maxFilesize:1024e5,headers:{Authorization:"Access Token"},paramName:function(e){return"fileupload[]"},dictDefaultMessage:"Upload Files Here xD",includeStyling:!1,previewsContainer:!1,thumbnailWidth:250,thumbnailHeight:140,uploadMultiple:!0,parallelUploads:20}}},components:{vueDropzone:f.a},methods:{fileAdded:function(e){console.log("File Dropped => ",e);var t={};t._id=e.upload.uuid,t.title=e.name,t.type="file",t.extension="."+e.type.split("/")[1],t.user=JSON.parse(localStorage.getItem("user")),t.content="File Upload by Select or Drop",t.thumb=e.dataURL,t.thumb_list=e.dataURL,t.isLoading=!0,t.progress=null,t.size=e.size,this.tempAttachments=[].concat(Object(p["a"])(this.tempAttachments),[t])},sendingFiles:function(e,t,n){console.log("if you want to change the upload time or add data to the formData you can do it here."),console.log("Files sending",e)},uploadProgress:function(e,t,n){console.log("File Upload Progress",t),this.progress=Math.floor(t),this.tempAttachments.map(function(n){n.title===e.name&&(n.progress="".concat(Math.floor(t)))})},success:function(e,t){console.log("File uploaded successfully"),console.log("Response is ->",t)}},computed:{getTempAttachments:function(){return this.tempAttachments},getAttachments:function(){return this.attachments}}}),h=m,g=(n("319d"),n("2877")),v=n("6544"),b=n.n(v),y=n("132d"),x=n("8e36"),_=Object(g["a"])(h,u,c,!1,null,"74fb3cd6",null),z=_.exports;b()(_,{VIcon:y["a"],VProgressLinear:x["a"]});var O={data:function(){return{author:""}},components:{FileInput:l.a,dropzonefile:z}},w=O,A=(n("9359"),n("7496")),j=n("a523"),F=n("549c"),C=n("0e8f"),P=n("a722"),S=Object(g["a"])(w,a,s,!1,null,"51d11764",null),V=S.exports;b()(S,{VApp:A["a"],VContainer:j["a"],VContent:F["a"],VFlex:C["a"],VLayout:P["a"]}),o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(V)}}).$mount("#app")},6730:function(e,t,n){},9359:function(e,t,n){"use strict";var o=n("94cb"),r=n.n(o);r.a},"94cb":function(e,t,n){}});
//# sourceMappingURL=app.8dd9a905.js.map