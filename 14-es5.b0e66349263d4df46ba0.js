!function(){function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return e};var r,e={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,r,e){t[r]=e.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(r){l=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var o=r&&r.prototype instanceof v?r:v,a=Object.create(o.prototype),c=new C(n||[]);return i(a,"_invoke",{value:K(t,e,c)}),a}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p="suspendedStart",b="executing",d="completed",g={};function v(){}function y(){}function m(){}var w={};l(w,c,(function(){return this}));var x=Object.getPrototypeOf,J=x&&x(x(P([])));J&&J!==n&&o.call(J,c)&&(w=J);var O=m.prototype=v.prototype=Object.create(w);function _(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function k(t,r){function e(n,i,a,c){var s=h(t[n],t,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&o.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return e("throw",t,a,c)}))}c(s.arg)}var n;i(this,"_invoke",{value:function(t,o){function i(){return new r((function(r,n){e(t,o,r,n)}))}return n=n?n.then(i,i):i()}})}function K(t,e,n){var o=p;return function(i,a){if(o===b)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:r,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var s=L(c,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=b;var u=h(t,e,n);if("normal"===u.type){if(o=n.done?d:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=d,n.method="throw",n.arg=u.arg)}}}function L(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,L(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=h(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function E(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(t){if(t||""===t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}throw new TypeError(typeof t+" is not iterable")}return y.prototype=m,i(O,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=l(m,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===y||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,u,"GeneratorFunction")),t.prototype=Object.create(O),t},e.awrap=function(t){return{__await:t}},_(k.prototype),l(k.prototype,s,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new k(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(O),l(O,u,"Generator"),l(O,c,(function(){return this})),l(O,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=P,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),E(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;E(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}},e}function r(t,r){for(var e=0;e<r.length;e++){var o=r[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function e(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function n(t){var r=function(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,r||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof r?r:String(r)}function o(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"7JYj":function(t,r,n){"use strict";n.d(r,"a",(function(){return a}));var i=n("fXoL"),a=function(){var t=e((function t(){o(this,t)}));return t.\u0275mod=i.Fb({type:t}),t.\u0275inj=i.Eb({factory:function(r){return new(r||t)},imports:[[]]}),t}()},phug:function(r,n,i){"use strict";i.r(n),i.d(n,"ProductInfoPageModule",(function(){return C}));var a=i("ofXK"),c=i("3Pt+"),s=i("tyNb"),u=i("TEn/"),l=i("sYmb"),f=i("7JYj"),h=i("mrSG"),p=i("sybk"),b=i("ul1Q"),d=i("7K7q"),g=i("2m4Y"),v=i("C13b"),y=i("fXoL"),m=i("otYU");function w(t,r){if(1&t&&(y.Kb(0,"span"),y.kc(1),y.Jb()),2&t){var e=y.Ub(2);y.xb(1),y.mc(" "," - "+e.product.get("presentation_es")," ")}}function x(t,r){if(1&t&&(y.Kb(0,"ion-title"),y.kc(1),y.jc(2,w,2,1,"span",3),y.Jb()),2&t){var e=y.Ub();y.xb(1),y.mc(" ",e.product.get("name_es")," "),y.xb(1),y.ac("ngIf",e.product.get("presentation_es"))}}function J(t,r){if(1&t&&(y.Kb(0,"ion-slide"),y.Ib(1,"img",16),y.Vb(2,"cloudinaryPipe"),y.Jb()),2&t){var e=r.$implicit;y.xb(1),y.ac("src",y.Xb(2,1,e,"w720"),y.hc)}}function O(t,r){if(1&t&&(y.Kb(0,"ion-text",17),y.kc(1),y.Vb(2,"translate"),y.Kb(3,"strong"),y.kc(4),y.Jb(),y.Jb()),2&t){var e=y.Ub(2);y.xb(1),y.mc(" ",y.Wb(2,2,"app.label.size"),": "),y.xb(3),y.lc(e.product.get("size_es"))}}function _(t,r){if(1&t&&(y.Kb(0,"div"),y.Kb(1,"ion-slides",7),y.jc(2,J,3,4,"ion-slide",8),y.Jb(),y.Kb(3,"ion-card",9),y.Kb(4,"ion-card-content"),y.Kb(5,"ion-card-title"),y.Kb(6,"ion-text",0),y.Kb(7,"strong"),y.kc(8),y.Jb(),y.Jb(),y.Jb(),y.Kb(9,"ion-card-subtitle",10),y.Kb(10,"strong"),y.kc(11),y.Jb(),y.Jb(),y.jc(12,O,5,4,"ion-text",11),y.Ib(13,"div",12),y.Ib(14,"hr"),y.Kb(15,"ion-item",13),y.Kb(16,"span",14),y.kc(17),y.Vb(18,"translate"),y.Jb(),y.Kb(19,"ion-badge",15),y.Kb(20,"h3"),y.Kb(21,"strong"),y.kc(22),y.Vb(23,"number"),y.Jb(),y.Jb(),y.Jb(),y.Jb(),y.Jb(),y.Jb(),y.Jb()),2&t){var e=y.Ub();y.xb(2),y.ac("ngForOf",e.product.get("imgUrls")),y.xb(6),y.lc(e.product.get("name_es")),y.xb(3),y.lc(e.product.get("presentation_es")),y.xb(1),y.ac("ngIf",e.product.get("size_es")),y.xb(1),y.ac("innerHTML",e.product.get("description_es"),y.gc),y.xb(4),y.mc("",y.Wb(18,7,"app.label.price"),":"),y.xb(5),y.mc(" \u20a1 ",y.Wb(23,9,e.product.get("price_cr"))," ")}}function k(t,r){if(1&t&&(y.Kb(0,"ion-chip",20),y.Kb(1,"ion-label"),y.kc(2),y.Jb(),y.Jb()),2&t){var e=r.$implicit;y.xb(2),y.lc(e.get("tag").get("name_es"))}}function K(t,r){if(1&t&&(y.Kb(0,"ion-card",18),y.Kb(1,"ion-card-content"),y.Kb(2,"ion-card-title",17),y.Kb(3,"ion-text",0),y.kc(4),y.Vb(5,"translate"),y.Jb(),y.Jb(),y.jc(6,k,3,1,"ion-chip",19),y.Jb(),y.Jb()),2&t){var e=y.Ub();y.xb(4),y.mc(" ",y.Wb(5,2,"app.label.categories")," "),y.xb(2),y.ac("ngForOf",e.tags)}}var L,j,E=[{path:"",component:(L=function(){function r(t,e,n,i,a,c,s,u,l,f){o(this,r),this.route=t,this.router=e,this.translate=n,this.productService=i,this.toastCtrl=a,this.loadingCtrl=c,this.cartService=s,this.authService=u,this.alertCtrl=l,this.modalCtrl=f,this.productUrlId=this.route.snapshot.paramMap.get("productUrlId"),this.tags=[],this.ionSelectInterfaceOptions={header:"Indique la cantidad"}}return e(r,[{key:"ngOnInit",value:function(){return Object(h.a)(this,void 0,void 0,t().mark((function r(){var e,n=this;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadingCtrl.create();case 2:return(e=t.sent).present(),t.next=6,this.productService.GetProduct(this.productUrlId);case 6:this.product=t.sent,this.product?this.authService.getCurrentUser()&&this.cartService.GetCartEntry(this.product.id).then((function(t){n.cartEntry=t,n.quantity=n.cartEntry.get("quantity")})).catch((function(t){n.quantity=0})):this.router.navigate(["/404"]),e.dismiss();case 9:case"end":return t.stop()}}),r,this)})))}},{key:"addToCart",value:function(){return Object(h.a)(this,void 0,void 0,t().mark((function r(){var e,n,o=this;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.authService.getCurrentUser()){t.next=7;break}return t.next=3,this.modalCtrl.create({component:v.a,componentProps:{product:this.product}});case 3:return e=t.sent,t.next=6,e.present();case 6:return t.abrupt("return",t.sent);case 7:return t.next=9,this.alertCtrl.create({header:this.translate.get("app.label.action-cart-requires-user-session"),buttons:[{text:this.translate.get("app.label.cancel"),cssClass:"secondary"},{text:this.translate.get("app.pages.menu.gotologin"),cssClass:"primary",handler:function(){o.router.navigate(["/login"])}}]});case 9:return n=t.sent,t.next=12,n.present();case 12:case"end":return t.stop()}}),r,this)})))}}]),r}(),L.\u0275fac=function(t){return new(t||L)(y.Hb(s.a),y.Hb(s.f),y.Hb(g.a),y.Hb(d.a),y.Hb(u.bb),y.Hb(u.U),y.Hb(b.a),y.Hb(p.a),y.Hb(u.a),y.Hb(u.W))},L.\u0275cmp=y.Bb({type:L,selectors:[["app-product-info"]],decls:12,vars:6,consts:[["color","primary"],["slot","start"],["defaultHref","/product-list","text",""],[4,"ngIf"],["class","bg-white ion-margin-bottom",4,"ngIf"],["size","medium","expand","full","shape","round",1,"ion-margin",3,"click"],["name","cart","slot","end"],["pager","true",1,"ion-margin-bottom"],[4,"ngFor","ngForOf"],[1,"ion-margin"],["color","secondary",1,"ion-margin-bottom"],["class","size","class","ion-margin-bottom",4,"ngIf"],[1,"description","mb-4",3,"innerHTML"],["lines","none",1,"ion-no-padding"],[1,"bold"],["color","success",1,"ml-3"],[1,"slideImg",3,"src"],[1,"ion-margin-bottom"],[1,"bg-white","ion-margin-bottom"],["class","ion-margin-left","color","primary",4,"ngFor","ngForOf"],["color","primary",1,"ion-margin-left"]],template:function(t,r){1&t&&(y.Kb(0,"ion-header"),y.Kb(1,"ion-toolbar",0),y.Kb(2,"ion-buttons",1),y.Ib(3,"ion-back-button",2),y.Jb(),y.jc(4,x,3,2,"ion-title",3),y.Jb(),y.Jb(),y.Kb(5,"ion-content"),y.jc(6,_,24,11,"div",3),y.jc(7,K,7,4,"ion-card",4),y.Kb(8,"ion-button",5),y.Sb("click",(function(){return r.addToCart()})),y.Ib(9,"ion-icon",6),y.kc(10),y.Vb(11,"translate"),y.Jb(),y.Jb()),2&t&&(y.xb(4),y.ac("ngIf",r.product),y.xb(2),y.ac("ngIf",r.product),y.xb(1),y.ac("ngIf",(null==r.tags?null:r.tags.length)>0),y.xb(3),y.mc(" ",y.Wb(11,4,"app.pages.cart.addtocart")," "))},directives:[u.r,u.R,u.h,u.d,u.e,a.j,u.o,u.g,u.s,u.Q,u.L,a.i,u.i,u.j,u.m,u.O,u.l,u.x,u.f,u.K,u.n,u.y],pipes:[l.c,a.d,m.a],styles:["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{--background:linear-gradient(-135deg,var(--ion-color-secondary),var(--ion-color-light))}ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   .shadow[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:0;right:0;z-index:1}ion-card-title[_ngcontent-%COMP%]{font-size:30px}ion-card-subtitle[_ngcontent-%COMP%]{font-size:20px}.description[_ngcontent-%COMP%], .size[_ngcontent-%COMP%]{font-size:14px;color:var(--ion-color-dark)}"]}),L)}],C=((j=e((function t(){o(this,t)}))).\u0275mod=y.Fb({type:j}),j.\u0275inj=y.Eb({factory:function(t){return new(t||j)},imports:[[a.b,c.d,u.S,s.h.forChild(E),l.b.forChild(),f.a]]}),j)}}])}();