(window.webpackJsonp=window.webpackJsonp||[]).push([[34,46],{11:function(t,e,r){},13:function(t,e,r){t.exports=r.p+"assets/img/link.03ea4d17.svg"},14:function(t,e,r){"use strict";var a=r(11);r.n(a).a},16:function(t,e,r){"use strict";r.r(e);var a={props:{href:{type:String,default:""},noBorder:{type:Boolean,default:!1}}},n=(r(14),r(1)),s=Object(n.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"example-wrapper",class:{"example-wrapper--no-border":this.noBorder}},[this._t("default"),this._v(" "),this.href?e("a",{staticClass:"example-wrapper__icon",attrs:{href:this.href,title:"Full Source",target:"_blank",rel:"nofollow noopener"}},[e("img",{attrs:{src:r(13)}})]):this._e()],2)},[],!1,null,null,null);e.default=s.exports},203:function(t,e,r){},400:function(t,e,r){"use strict";var a=r(203);r.n(a).a},467:function(t,e,r){"use strict";r.r(e);var a=r(15),n=r(16),s={components:{Cropper:a.c,ExampleWrapper:n.default},data:function(){return{img:"https://images.unsplash.com/photo-1599140849279-1014532882fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80"}},methods:{change:function(t){var e=t.coordinates,r=t.canvas;console.log(e,r)}}},o=(r(400),r(1)),i=Object(o.a)(s,function(){var t=this.$createElement,e=this._self._c||t;return e("example-wrapper",[e("cropper",{staticClass:"cropper",attrs:{src:this.img,"stencil-props":{aspectRatio:10/12}},on:{change:this.change}})],1)},[],!1,null,null,null);e.default=i.exports}}]);