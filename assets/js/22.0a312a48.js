(window.webpackJsonp=window.webpackJsonp||[]).push([[22,52],{303:function(e,t,r){},304:function(e,t,r){e.exports=r.p+"assets/img/link.03ea4d17.svg"},305:function(e,t,r){"use strict";r(303)},306:function(e,t,r){"use strict";r.r(t);var s={props:{href:{type:String,default:""},noBorder:{type:Boolean,default:!1}}},a=(r(305),r(41)),n=Object(a.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"example-wrapper",class:{"example-wrapper--no-border":this.noBorder}},[this._t("default"),this._v(" "),this.href?t("a",{staticClass:"example-wrapper__icon",attrs:{href:this.href,title:"Full Source",target:"_blank",rel:"nofollow noopener"}},[t("img",{attrs:{src:r(304)}})]):this._e()],2)}),[],!1,null,null,null);t.default=n.exports},465:function(e,t,r){},576:function(e,t,r){e.exports=r.p+"assets/img/loading.578309cf.svg"},577:function(e,t,r){e.exports=r.p+"assets/img/pexels-photo-2890387.dd3996ef.jpeg"},578:function(e,t,r){"use strict";r(465)},666:function(e,t,r){"use strict";r.r(t);var s=r(307),a=r(306),n={components:{Cropper:s.c,ExampleWrapper:a.default},data:function(){return{img:{src:r(577),loading:!1}}},watch:{"img.src":function(e){e&&(this.img.loading=!0)}},methods:{change:function(e){var t=e.coordinates,r=e.canvas;console.log("Coordinates was changed",t,r)},error:function(){console.log("There is error during image loading"),this.img.loading=!1},ready:function(){console.log("Image is successfully loaded"),this.img.loading=!1}}},o=(r(578),r(41)),i=Object(o.a)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("example-wrapper",{staticClass:"events-example",attrs:{href:"https://github.com/Norserium/vue-advanced-cropper/blob/master/example/docs/.vuepress/components/events-example.vue"}},[s("div",{staticClass:"events-example__input-wrapper"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.img.src,expression:"img.src"}],domProps:{value:e.img.src},on:{input:function(t){t.target.composing||e.$set(e.img,"src",t.target.value)}}})]),e._v(" "),s("div",{staticClass:"cropper-wrapper"},[e.img.loading?s("img",{staticClass:"cropper-wrapper__loading",attrs:{src:r(576)}}):e._e(),e._v(" "),s("cropper",{attrs:{src:e.img.src},on:{ready:e.ready,error:e.error,change:e.change}})],1)])}),[],!1,null,null,null);t.default=i.exports}}]);