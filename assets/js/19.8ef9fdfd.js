(window.webpackJsonp=window.webpackJsonp||[]).push([[19,52,87],{303:function(t,e,i){},304:function(t,e,i){t.exports=i.p+"assets/img/link.03ea4d17.svg"},305:function(t,e,i){"use strict";i(303)},306:function(t,e,i){"use strict";i.r(e);var n={props:{href:{type:String,default:""},noBorder:{type:Boolean,default:!1}}},s=(i(305),i(41)),o=Object(s.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"example-wrapper",class:{"example-wrapper--no-border":this.noBorder}},[this._t("default"),this._v(" "),this.href?e("a",{staticClass:"example-wrapper__icon",attrs:{href:this.href,title:"Full Source",target:"_blank",rel:"nofollow noopener"}},[e("img",{attrs:{src:i(304)}})]):this._e()],2)}),[],!1,null,null,null);e.default=o.exports},352:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));i(46),i(24),i(95),i(354),i(167),i(96),i(97);function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}},361:function(t,e,i){"use strict";i.r(e);i(163);var n=i(307),s={components:{StencilPreview:n.i,BoundingBox:n.a,DraggableArea:n.d},props:["image","coordinates","stencilCoordinates","aspectRatio","minAspectRatio","maxAspectRatio","transitions"],computed:{style:function(){var t=this.stencilCoordinates,e=t.height,i=t.width,n=t.left,s=t.top,o={position:"absolute",width:"".concat(i,"px"),height:"".concat(e,"px"),transform:"translate(".concat(n,"px, ").concat(s,"px)")};return this.transitions&&this.transitions.enabled&&(o.transition="".concat(this.transitions.time,"ms ").concat(this.transitions.timingFunction)),o}},methods:{onMove:function(t){this.$emit("move",t)},onMoveEnd:function(){this.$emit("moveEnd")},onResize:function(t){this.$emit("resize",t)},onResizeEnd:function(){this.$emit("resizeEnd")},aspectRatios:function(){return{minimum:this.aspectRatio||this.minAspectRatio,maximum:this.aspectRatio||this.maxAspectRatio}}}},o=i(41),r=Object(o.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{style:t.style},[i("bounding-box",{on:{resize:t.onResize,"resize-end":t.onMoveEnd}},[i("draggable-area",{on:{move:t.onMove,"move-end":t.onMoveEnd}},[i("stencil-preview",{attrs:{image:t.image,width:t.stencilCoordinates.width,height:t.stencilCoordinates.height,coordinates:t.coordinates,transitions:t.transitions}})],1)],1)],1)}),[],!1,null,null,null);e.default=r.exports},477:function(t,e,i){},610:function(t,e,i){t.exports=i.p+"assets/img/photo-1553301208-a3718cc0150e.acffda50.jpg"},611:function(t,e,i){"use strict";i(477)},678:function(t,e,i){"use strict";i.r(e);var n=i(352),s=i(307),o=i(361),r={components:{ExampleWrapper:i(306).default,BoundingBox:s.a,Cropper:s.c,SimplestStencil:o.default},data:function(){return{img:i(610),width:0,height:0,left:0,top:0}},methods:{updateCoordinates:function(t,e){var i=this.$refs.container;i&&(this.width=Math.min(Math.max(0,t),i.clientWidth),this.height=Math.min(Math.max(0,e),i.clientHeight),this.left=i.clientWidth/2-this.width/2,this.top=i.clientHeight/2-this.height/2,this.$refs.cropper.refresh())},refresh:function(){this.updateCoordinates(this.width,this.height)},onResize:function(t){if(this.$refs.container){var e=Object(n.a)({},t.directions);e.left&&(e.right=e.left),e.right&&(e.left=e.right),e.top&&(e.bottom=e.top),e.bottom&&(e.top=e.bottom);var i=this.width+e.left+e.right,s=this.height+e.top+e.bottom;this.updateCoordinates(i,s)}}},mounted:function(){var t=this.$refs.container;t&&this.updateCoordinates(t.clientWidth,t.clientHeight,0,0),window.addEventListener("resize",this.refresh),window.addEventListener("orientationchange",this.refresh)},destroyed:function(){window.removeEventListener("resize",this.refresh),window.removeEventListener("orientationchange",this.refresh)},computed:{boxStyle:function(){return{width:"".concat(this.width,"px"),height:"".concat(this.height,"px"),left:"".concat(this.left,"px"),top:"".concat(this.top,"px")}}}},a=(i(611),i(41)),c=Object(a.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("example-wrapper",{staticClass:"refresh-example",attrs:{href:"https://github.com/Norserium/vue-advanced-cropper/blob/master/example/docs/.vuepress/components/refresh-example.vue"}},[e("div",{ref:"container",staticClass:"container"},[e("bounding-box",{staticClass:"box",style:this.boxStyle,attrs:{"lines-classes":{default:"line"},"handlers-classes":{default:"handler"}},on:{resize:this.onResize}},[e("cropper",{ref:"cropper",staticClass:"cropper",attrs:{src:this.img,"stencil-props":{aspectRatio:1},"min-width":200,"min-height":300,"image-restriction":"fill-area"}})],1)],1)])}),[],!1,null,null,null);e.default=c.exports}}]);