(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"7JYj":function(t,n,i){"use strict";i.d(n,"a",(function(){return o}));var e=i("fXoL");let o=(()=>{class t{}return t.\u0275mod=e.Fb({type:t}),t.\u0275inj=e.Eb({factory:function(n){return new(n||t)},imports:[[]]}),t})()},KiVI:function(t,n,i){"use strict";i.r(n),i.d(n,"BrandListPageModule",(function(){return K}));var e=i("ofXK"),o=i("3Pt+"),r=i("tyNb"),a=i("TEn/"),c=i("mrSG"),s=i("VVxe"),l=i("LvDl"),h=i("R0Ic"),d=i("PLH8"),b=i("dkQB"),g=i("sybk"),u=i("v0iw"),p=i("fXoL");let f=(()=>{class t{constructor(){this.parseAppId=b.a.parseAppId,this.parseJSKey=b.a.parseJSKey,this.parseServerUrl=b.a.parseServerUrl,this.parseInitialize()}parseInitialize(){u.initialize(this.parseAppId,this.parseJSKey),u.serverURL=this.parseServerUrl}GetBrands(t,n,i){return u.Cloud.run("app_GetBrands")}GetTagsForBrand(t){return Object(c.a)(this,void 0,void 0,(function*(){const n=u.Object.extend("BrandTags"),i=new u.Query(n);return i.equalTo("brand",t),i.include("tag"),i.ascending("order"),yield i.find()}))}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=p.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var m=i("sYmb"),v=i("otYU");function x(t,n){1&t&&p.Ib(0,"ion-spinner",4)}function O(t,n){1&t&&p.Ib(0,"ion-icon",15)}const I=function(t){return{background:t}},y=function(t){return{color:t}};function j(t,n){if(1&t&&(p.Kb(0,"span"),p.Kb(1,"ion-badge",13),p.jc(2,O,1,0,"ion-icon",14),p.Kb(3,"ion-text",13),p.kc(4),p.Jb(),p.Jb(),p.Jb()),2&t){const t=n.$implicit;p.xb(1),p.ac("ngStyle",p.dc(4,I,t.get("isHighlight")?"var(--ion-color-warning)":"")),p.xb(1),p.ac("ngIf",t.get("isHighlight")),p.xb(1),p.ac("ngStyle",p.dc(6,y,t.get("isHighlight")?"var(--hotpink)":"")),p.xb(1),p.mc(" ",t.get("tag").get("name_es")," ")}}function P(t,n){if(1&t&&(p.Kb(0,"div"),p.jc(1,j,5,8,"span",12),p.Jb()),2&t){const t=p.Ub().$implicit;p.xb(1),p.ac("ngForOf",t.tags)}}function S(t,n){if(1&t){const t=p.Lb();p.Kb(0,"ion-card",5),p.Sb("click",(function(){p.fc(t);const i=n.$implicit;return p.Ub().goToProductList(i)})),p.Kb(1,"ion-card-header"),p.Kb(2,"ion-card-title",6),p.kc(3),p.Jb(),p.Kb(4,"ion-card-subtitle"),p.kc(5),p.Jb(),p.Jb(),p.Ib(6,"img",7),p.Vb(7,"cloudinaryPipe"),p.Kb(8,"ion-card-content"),p.jc(9,P,2,1,"div",8),p.Kb(10,"ion-button",9),p.Ib(11,"ion-icon",10),p.Kb(12,"ion-text",11),p.kc(13),p.Vb(14,"translate"),p.Jb(),p.Jb(),p.Jb(),p.Jb()}if(2&t){const t=n.$implicit;p.xb(3),p.mc(" ",t.get("name")," "),p.xb(2),p.mc(" ",t.get("description_es")," "),p.xb(1),p.bc("src",p.Xb(7,5,t.get("imgUrl"),"w720"),p.hc),p.xb(3),p.ac("ngIf",(null==t.tags?null:t.tags.length)>0),p.xb(4),p.mc(" ",p.Wb(14,8,"app.label.enter")," ")}}let k=(()=>{class t{constructor(t,n,i,e,o,r){this.router=t,this.keyboard=n,this.brandService=i,this.loadingCtrl=e,this.alertCtrl=o,this.authService=r,this.searchCriteria="",this.daList=[],this.ionRefresher=!1}ngOnInit(){this.resetPagination(),this.search()}doRefresh(t){return Object(c.a)(this,void 0,void 0,(function*(){this.ionRefresher=!0,yield this.ngOnInit(),t.target.complete(),this.ionRefresher=!1}))}resetPagination(){this.useInfiniteScroll=!1,this.fetchingPage=!1,this.page=0,this.lastPage=!1}search(){return new Promise((t,n)=>Object(c.a)(this,void 0,void 0,(function*(){this.loading=!this.useInfiniteScroll&&!this.ionRefresher,this.noResults=!1,this.brandService.GetBrands(this.page,b.a.SETTINGS.PAGE_SIZE,s(this.searchCriteria)).then(n=>{this.useInfiniteScroll?Object(l.each)(n,t=>Object(c.a)(this,void 0,void 0,(function*(){this.daList.push(t),t.tags=yield this.brandService.GetTagsForBrand(t)}))):(this.daList=n,Object(l.each)(this.daList,t=>Object(c.a)(this,void 0,void 0,(function*(){t.tags=yield this.brandService.GetTagsForBrand(t)})))),this.loading=!1,this.noResults=Object(l.isEmpty)(this.daList),t(n)}).catch(t=>{console.error(t),this.loading=!1,this.noResults=!0,this.daList=[],n(t)})})))}loadMore(){this.fetchingPage||(this.useInfiniteScroll=!0,this.fetchingPage=!0,this.page++,this.search().then(t=>{this.useInfiniteScroll=!1,this.fetchingPage=!1,this.infiniteScroll.complete(),t?this.lastPage=0===t.length:this.page--}).catch(t=>{console.error(t),this.infiniteScroll.complete()}))}criteriaChanged(){this.resetPagination(),this.search()}clearSearchBar(){this.searchCriteria="",this.hideKeyboard(),this.scrollToTop(),this.resetPagination(),this.search()}hideKeyboard(){this.keyboard.hide()}scrollToTop(){this.content.scrollToTop(1500)}goToProductList(t){const n=t.get("urlId");this.router.navigate(["/product-list/"+n])}}return t.\u0275fac=function(n){return new(n||t)(p.Hb(r.f),p.Hb(d.a),p.Hb(f),p.Hb(a.U),p.Hb(a.a),p.Hb(g.a))},t.\u0275cmp=p.Bb({type:t,selectors:[["app-brand-list"]],viewQuery:function(t,n){var i;1&t&&(p.nc(a.o,!0),p.nc(a.u,!0)),2&t&&(p.ec(i=p.Tb())&&(n.content=i.first),p.ec(i=p.Tb())&&(n.infiniteScroll=i.first))},features:[p.wb([d.a])],decls:13,vars:6,consts:[["color","primary"],["slot","start"],["class","center3 mt-4","name","crescent",4,"ngIf"],["tappable","",3,"click",4,"ngFor","ngForOf"],["name","crescent",1,"center3","mt-4"],["tappable","",3,"click"],[1,"hvr-grow","ion-margin-bottom"],[1,"cardImg",3,"src"],[4,"ngIf"],["size","medium","expand","full","shape","round","color","secondary"],["slot","start","name","arrow-forward","color","hotpink"],["color","light",1,"cardBtn"],[4,"ngFor","ngForOf"],[3,"ngStyle"],["name","star","color","hotpink",4,"ngIf"],["name","star","color","hotpink"]],template:function(t,n){1&t&&(p.Kb(0,"ion-header"),p.Kb(1,"ion-toolbar",0),p.Kb(2,"ion-buttons",1),p.Ib(3,"ion-menu-button"),p.Jb(),p.Kb(4,"ion-title"),p.kc(5),p.Vb(6,"translate"),p.Jb(),p.Jb(),p.Jb(),p.Kb(7,"ion-content"),p.Kb(8,"div"),p.Kb(9,"main"),p.jc(10,x,1,0,"ion-spinner",2),p.Kb(11,"section"),p.jc(12,S,15,10,"ion-card",3),p.Jb(),p.Jb(),p.Jb(),p.Jb()),2&t&&(p.xb(5),p.mc(" ",p.Wb(6,4,"app.label.brands")," "),p.xb(3),p.ac("@staggerIn",null==n.daList?null:n.daList.length),p.xb(2),p.ac("ngIf",n.loading),p.xb(2),p.ac("ngForOf",n.daList))},directives:[a.r,a.R,a.h,a.B,a.Q,a.o,e.j,e.i,a.M,a.i,a.k,a.m,a.l,a.j,a.g,a.s,a.O,a.f,e.k],pipes:[m.c,v.a],styles:["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{--background:linear-gradient(135deg,var(--ion-color-light),var(--ion-color-secondary))}@media (min-width:620px){main[_ngcontent-%COMP%]{-moz-column-count:1;column-count:1;-moz-column-gap:20px;column-gap:20px}section[_ngcontent-%COMP%]{-moz-column-break-inside:avoid;break-inside:avoid}}@media (min-width:960px){main[_ngcontent-%COMP%]{-moz-column-count:2;column-count:2}}ion-badge[_ngcontent-%COMP%]{margin:3px}main[_ngcontent-%COMP%]{margin:0 auto;padding:20px}ion-card[_ngcontent-%COMP%]{--background:linear-gradient(135deg,var(--cream-shade),var(--cream));max-width:720px}.cardImg[_ngcontent-%COMP%]{max-height:480px;max-width:720px}ion-card-title[_ngcontent-%COMP%]{font-weight:900;color:var(--ion-color-light);text-shadow:.5px .5px .5px var(--ion-color-dark);text-decoration:underline;font-size:27px}section[_ngcontent-%COMP%]{margin-bottom:20px;overflow:hidden}"],data:{animation:[Object(h.k)("staggerIn",[Object(h.j)("* => *",[Object(h.f)(":enter",Object(h.i)({opacity:0,transform:"translate3d(0,10px,0)"}),{optional:!0}),Object(h.f)(":enter",Object(h.h)("300ms",[Object(h.e)("600ms",Object(h.i)({opacity:1,transform:"translate3d(0,0,0)"}))]),{optional:!0})])])]}}),t})();var w=i("7JYj");const J=[{path:"",component:k}];let K=(()=>{class t{}return t.\u0275mod=p.Fb({type:t}),t.\u0275inj=p.Eb({factory:function(n){return new(n||t)},imports:[[e.b,o.d,a.S,r.h.forChild(J),w.a,m.b.forChild()]]}),t})()}}]);