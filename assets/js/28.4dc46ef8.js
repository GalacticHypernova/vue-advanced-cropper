(window.webpackJsonp=window.webpackJsonp||[]).push([[28,52],{303:function(t,i,e){},304:function(t,i,e){t.exports=e.p+"assets/img/link.03ea4d17.svg"},305:function(t,i,e){"use strict";e(303)},306:function(t,i,e){"use strict";e.r(i);var a={props:{href:{type:String,default:""},noBorder:{type:Boolean,default:!1}}},n=(e(305),e(41)),s=Object(n.a)(a,(function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"example-wrapper",class:{"example-wrapper--no-border":this.noBorder}},[this._t("default"),this._v(" "),this.href?i("a",{staticClass:"example-wrapper__icon",attrs:{href:this.href,title:"Full Source",target:"_blank",rel:"nofollow noopener"}},[i("img",{attrs:{src:e(304)}})]):this._e()],2)}),[],!1,null,null,null);i.default=s.exports},461:function(t,i,e){},566:function(t,i,e){t.exports=e.p+"assets/img/photo-1494205577727-d32e58564756.f2b2d078.jpg"},567:function(t,i,e){"use strict";e(461)},660:function(t,i,e){"use strict";e.r(i);var a=e(307),n={components:{ExampleWrapper:e(306).default,Cropper:a.c},data:function(){return{image:e(566),limitations:{minWidth:50,minHeight:50},result:null}},methods:{percentsRestriction:function(t){var i=t.minWidth,e=t.minHeight,a=t.maxWidth,n=t.maxHeight,s=t.imageSize;return{maxWidth:s.width*(a||100)/100,maxHeight:s.height*(n||100)/100,minWidth:s.width*(i||0)/100,minHeight:s.height*(e||0)/100}},onCrop:function(t){var i=t.canvas;this.result=i.toDataURL()},showImage:function(){window.open().document.body.innerHTML='<img src="'.concat(this.result,'"></img>')},uploadImage:function(t){var i=this,e=t.target;if(e.files&&e.files[0]){var a=new FileReader;a.onload=function(t){i.image=t.target.result},a.readAsDataURL(e.files[0])}}}},s=(e(567),e(41)),o=Object(s.a)(n,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("example-wrapper",{staticClass:"custom-restrictions-example",attrs:{href:"https://github.com/advanced-cropper/vue-advanced-cropper/blob/master/example/docs/.vuepress/components/custom-restrictions-example.vue"}},[e("cropper",{staticClass:"custom-restrictions-cropper",attrs:{"check-orientation":"",src:t.image,"max-height":t.limitations.maxHeight,"max-width":t.limitations.maxWidth,"min-height":t.limitations.minHeight,"min-width":t.limitations.minWidth,"size-restrictions-algorithm":t.percentsRestriction},on:{change:t.onCrop}}),t._v(" "),e("div",{staticClass:"panel"},[e("div",{staticClass:"panel__left"},[e("div",{staticClass:"input"},[e("span",{staticClass:"input__label"},[t._v("Min width")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.limitations.minWidth,expression:"limitations.minWidth"}],staticClass:"input__control",attrs:{type:"text"},domProps:{value:t.limitations.minWidth},on:{input:function(i){i.target.composing||t.$set(t.limitations,"minWidth",i.target.value)}}})]),t._v(" "),e("div",{staticClass:"input"},[e("span",{staticClass:"input__label"},[t._v("Min height")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.limitations.minHeight,expression:"limitations.minHeight"}],staticClass:"input__control",attrs:{type:"text"},domProps:{value:t.limitations.minHeight},on:{input:function(i){i.target.composing||t.$set(t.limitations,"minHeight",i.target.value)}}})]),t._v(" "),e("div",{staticClass:"input"},[e("span",{staticClass:"input__label"},[t._v("Max width")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.limitations.maxWidth,expression:"limitations.maxWidth"}],staticClass:"input__control",attrs:{type:"text"},domProps:{value:t.limitations.maxWidth},on:{input:function(i){i.target.composing||t.$set(t.limitations,"maxWidth",i.target.value)}}})]),t._v(" "),e("div",{staticClass:"input"},[e("span",{staticClass:"input__label"},[t._v("Max height")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.limitations.maxHeight,expression:"limitations.maxHeight"}],staticClass:"input__control",attrs:{type:"text"},domProps:{value:t.limitations.maxHeight},on:{input:function(i){i.target.composing||t.$set(t.limitations,"maxHeight",i.target.value)}}})])]),t._v(" "),e("div",{staticClass:"panel__right"},[e("div",{staticClass:"button",on:{click:function(i){return t.$refs.file.click()}}},[e("input",{ref:"file",attrs:{type:"file",accept:"image/*"},on:{change:function(i){return t.uploadImage(i)}}}),t._v("\n\t\t\t\tUpload image\n\t\t\t")]),t._v(" "),this.result?e("div",{staticClass:"button",on:{click:function(i){return t.showImage()}}},[t._v("Download result")]):t._e()])])],1)}),[],!1,null,null,null);i.default=o.exports}}]);