(window.webpackJsonp=window.webpackJsonp||[]).push([[33,45],{11:function(e,t,r){},14:function(e,t,r){e.exports=r.p+"assets/img/link.03ea4d17.svg"},15:function(e,t,r){"use strict";var a=r(11);r.n(a).a},16:function(e,t,r){"use strict";r.r(t);var a={props:{href:{type:String,default:""},noBorder:{type:Boolean,default:!1}}},i=(r(15),r(1)),s=Object(i.a)(a,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"example-wrapper",class:{"example-wrapper--no-border":this.noBorder}},[this._t("default"),this._v(" "),this.href?t("a",{staticClass:"example-wrapper__icon",attrs:{href:this.href,title:"Full Source",target:"_blank",rel:"nofollow noopener"}},[t("img",{attrs:{src:r(14)}})]):this._e()],2)},[],!1,null,null,null);t.default=s.exports},201:function(e,t,r){},397:function(e,t,r){"use strict";var a=r(201);r.n(a).a},458:function(e,t,r){"use strict";r.r(t);var a=r(13),i=r(16),s={components:{Cropper:a.c,ExampleWrapper:i.default},data:function(){return{img:"https://images.unsplash.com/photo-1599140849279-1014532882fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80"}},methods:{change:function(e){var t=e.coordinates,r=e.canvas;console.log(t,r)},fillArea:function(e){var t=e.visibleArea;return{width:t.width,height:t.height}}}},n=(r(397),r(1)),l=Object(n.a)(s,function(){var e=this.$createElement,t=this._self._c||e;return t("example-wrapper",[t("cropper",{staticClass:"cropper",attrs:{src:this.img,priority:"visibleArea","default-boundaries":"fill","image-restriction":"stencil","default-size":this.fillArea,"stencil-props":{handlers:{},movable:!1,scalable:!1,aspectRatio:7}}})],1)},[],!1,null,null,null);t.default=l.exports}}]);