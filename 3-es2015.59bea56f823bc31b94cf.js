(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{pXY8:function(n,l,t){"use strict";t.r(l);var i=t("8Y7J"),o=t("mrSG"),e=t("VVxe"),r=t("LvDl"),s=t("Zr1d"),a=t("ZZ/e"),u=t("dkQB"),c=t("sybk"),b=t("7K7q");class d{constructor(n,l,t,i,o,e,r){this.route=n,this.navCtrl=l,this.keyboard=t,this.productService=i,this.loadingCtrl=o,this.alertCtrl=e,this.authService=r,this.brandUrlId=this.route.snapshot.paramMap.get("brandUrlId")||"all",this.loadTags=!1,this.searchCriteria="",this.daList=[],this.ionRefresher=!1}ngOnInit(){this.resetPagination(),this.search()}doRefresh(n){return o.b(this,void 0,void 0,function*(){this.ionRefresher=!0,yield this.ngOnInit(),n.target.complete(),this.ionRefresher=!1})}resetPagination(){this.useInfiniteScroll=!1,this.fetchingPage=!1,this.page=0,this.lastPage=!1}search(){return new Promise((n,l)=>o.b(this,void 0,void 0,function*(){this.loading=!this.useInfiniteScroll&&!this.ionRefresher,this.noResults=!1,this.productService.GetBrandProductsBySearchCriteria(this.brandUrlId,this.page,u.a.SETTINGS.PAGE_SIZE,e(this.searchCriteria)).then(l=>{this.useInfiniteScroll?Object(r.each)(l,n=>o.b(this,void 0,void 0,function*(){this.daList.push(n),this.loadTags&&(n.tags=yield this.productService.GetTagsForProduct(n.id))})):(this.daList=l,this.loadTags&&Object(r.each)(this.daList,n=>o.b(this,void 0,void 0,function*(){n.tags=yield this.productService.GetTagsForProduct(n.id)}))),this.loading=!1,this.noResults=Object(r.isEmpty)(this.daList),n(l)}).catch(n=>{console.error(n),this.loading=!1,this.noResults=!0,this.daList=[],l(n)})}))}loadMore(){this.fetchingPage||(this.useInfiniteScroll=!0,this.fetchingPage=!0,this.page++,this.search().then(n=>{this.useInfiniteScroll=!1,this.fetchingPage=!1,this.infiniteScroll.complete(),n?this.lastPage=0===n.length:this.page--}).catch(n=>{console.error(n),this.infiniteScroll.complete()}))}goToProduct(n){this.navCtrl.navigateForward(`product/${n.get("urlId")}`)}criteriaChanged(){this.resetPagination(),this.search()}clearSearchBar(){this.searchCriteria="",this.hideKeyboard(),this.scrollToTop(),this.resetPagination(),this.search()}hideKeyboard(){this.keyboard.hide()}scrollToTop(){this.content.scrollToTop(1500)}}class h{}var g=t("pMnS"),p=t("oBZk"),C=t("otYU"),f=t("SVse"),m=t("iInd"),x=i.qb({encapsulation:0,styles:[["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{--background:linear-gradient(135deg, var(--ion-color-light), var(--cream))}ion-card.daListCard[_ngcontent-%COMP%]{position:relative}ion-card.daListCard[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{margin-bottom:-3px}ion-card.daListCard[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-size:30px;position:absolute;top:5%;left:5%;z-index:2;text-shadow:.5px .5px .5px var(--ion-color-dark);font-weight:bolder}ion-card.daListCard[_ngcontent-%COMP%]   ion-card-subtitle[_ngcontent-%COMP%]{position:absolute;top:27%;left:5%;z-index:2;text-shadow:.5px .5px .5px var(--ion-color-dark);font-size:20px}ion-card.daListCard[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{width:100%;position:absolute;z-index:3;bottom:0}ion-card.daListCard[_ngcontent-%COMP%]   .shadow[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:0;right:0;z-index:1;box-shadow:inset 0 0 15rem rgba(var(--ion-color-dark-rgb),.4)}ion-card.daListCard[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{right:2%;bottom:20%;position:absolute}ion-card.daListCard[_ngcontent-%COMP%]   .rooms[_ngcontent-%COMP%]{left:0;position:absolute;bottom:0}ion-card.daListCard[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]{margin:3px}.cards[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:1rem;max-width:960px;margin:10px auto 30px}article[_ngcontent-%COMP%]{position:relative}.article-img[_ngcontent-%COMP%]{height:200px;width:100%;-o-object-fit:cover;object-fit:cover}.article-title[_ngcontent-%COMP%]{position:absolute;bottom:0;width:100%;padding:10px;background-color:rgba(255,255,255,.7)}"]],data:{animation:[{type:7,name:"staggerIn",definitions:[{type:1,expr:"* => *",animation:[{type:11,selector:":enter",animation:{type:6,styles:{opacity:0,transform:"translate3d(0,10px,0)"},offset:null},options:{optional:!0}},{type:11,selector:":enter",animation:{type:12,timings:"300ms",animation:[{type:4,styles:{type:6,styles:{opacity:1,transform:"translate3d(0,0,0)"},offset:null},timings:"600ms"}]},options:{optional:!0}}],options:null}],options:{}}]}});function v(n){return i.Ob(0,[(n()(),i.sb(0,0,null,null,1,"ion-spinner",[["class","center3"]],null,null,null,p.qb,p.F)),i.rb(1,49152,null,0,a.qb,[i.h,i.k,i.x],null,null)],null,null)}function P(n){return i.Ob(0,[(n()(),i.sb(0,0,null,null,20,"article",[],null,null,null,null,null)),(n()(),i.sb(1,0,null,null,19,"ion-card",[["class","daListCard hvr-grow"],["tappable",""]],null,[[null,"click"]],function(n,l,t){var i=!0;return"click"===l&&(i=!1!==n.component.goToProduct(n.context.$implicit)&&i),i},p.V,p.g)),i.rb(2,49152,null,0,a.l,[i.h,i.k,i.x],null,null),(n()(),i.sb(3,0,null,0,2,"ion-img",[],null,null,null,p.db,p.s)),i.rb(4,49152,null,0,a.C,[i.h,i.k,i.x],{src:[0,"src"]},null),i.Ib(5,2),(n()(),i.sb(6,0,null,0,2,"ion-card-title",[["color","light"]],null,null,null,p.U,p.k)),i.rb(7,49152,null,0,a.p,[i.h,i.k,i.x],{color:[0,"color"]},null),(n()(),i.Mb(8,0,["",""])),(n()(),i.sb(9,0,null,0,2,"ion-card-subtitle",[["color","light"]],null,null,null,p.T,p.j)),i.rb(10,49152,null,0,a.o,[i.h,i.k,i.x],{color:[0,"color"]},null),(n()(),i.Mb(11,0,["",""])),(n()(),i.sb(12,0,null,0,0,"div",[["class","shadow"]],null,null,null,null,null)),(n()(),i.sb(13,0,null,0,7,"ion-card-content",[],null,null,null,p.R,p.h)),i.rb(14,49152,null,0,a.m,[i.h,i.k,i.x],null,null),(n()(),i.sb(15,0,null,0,5,"ion-badge",[["class","price"],["color","success"],["slot","end"]],null,null,null,p.O,p.d)),i.rb(16,49152,null,0,a.i,[i.h,i.k,i.x],{color:[0,"color"]},null),(n()(),i.sb(17,0,null,0,3,"h3",[],null,null,null,null,null)),(n()(),i.sb(18,0,null,null,2,"strong",[],null,null,null,null,null)),(n()(),i.Mb(19,null,["\u20a1 ",""])),i.Ib(20,1)],function(n,l){var t=i.Nb(l,4,0,n(l,5,0,i.Eb(l.parent,0),l.context.$implicit.get("imgUrls")[0],"rectangleFill"));n(l,4,0,t),n(l,7,0,"light"),n(l,10,0,"light"),n(l,16,0,"success")},function(n,l){var t=l.context.$implicit.get("name_es");n(l,8,0,t);var o=l.context.$implicit.get("presentation_es");n(l,11,0,o);var e=i.Nb(l,19,0,n(l,20,0,i.Eb(l.parent,1),l.context.$implicit.get("price_cr")));n(l,19,0,e)})}function O(n){return i.Ob(0,[i.Gb(0,C.a,[]),i.Gb(0,f.d,[i.s]),i.Kb(671088640,1,{content:0}),i.Kb(671088640,2,{infiniteScroll:0}),(n()(),i.sb(4,0,null,null,10,"ion-header",[],null,null,null,p.bb,p.q)),i.rb(5,49152,null,0,a.A,[i.h,i.k,i.x],null,null),(n()(),i.sb(6,0,null,0,8,"ion-toolbar",[["color","primary"]],null,null,null,p.vb,p.K)),i.rb(7,49152,null,0,a.Ab,[i.h,i.k,i.x],{color:[0,"color"]},null),(n()(),i.sb(8,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,p.Q,p.f)),i.rb(9,49152,null,0,a.k,[i.h,i.k,i.x],null,null),(n()(),i.sb(10,0,null,0,1,"ion-menu-button",[],null,null,null,p.ib,p.y)),i.rb(11,49152,null,0,a.Q,[i.h,i.k,i.x],null,null),(n()(),i.sb(12,0,null,0,2,"ion-title",[],null,null,null,p.ub,p.J)),i.rb(13,49152,null,0,a.yb,[i.h,i.k,i.x],null,null),(n()(),i.Mb(-1,0,["Men\xfa"])),(n()(),i.sb(15,0,null,null,7,"ion-content",[],null,null,null,p.Y,p.n)),i.rb(16,49152,[[1,4]],0,a.t,[i.h,i.k,i.x],null,null),(n()(),i.sb(17,0,null,0,5,"div",[],[[24,"@staggerIn",0]],null,null,null,null)),(n()(),i.sb(18,0,null,null,4,"section",[["class","cards"]],null,null,null,null,null)),(n()(),i.hb(16777216,null,null,1,null,v)),i.rb(20,16384,null,0,f.j,[i.N,i.K],{ngIf:[0,"ngIf"]},null),(n()(),i.hb(16777216,null,null,1,null,P)),i.rb(22,278528,null,0,f.i,[i.N,i.K,i.q],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,7,0,"primary"),n(l,20,0,t.loading),n(l,22,0,t.daList)},function(n,l){var t=l.component;n(l,17,0,null==t.daList?null:t.daList.length)})}function M(n){return i.Ob(0,[(n()(),i.sb(0,0,null,null,2,"app-product-list",[],null,null,null,O,x)),i.Jb(512,null,s.a,s.a,[]),i.rb(2,114688,null,0,d,[m.a,a.Hb,s.a,b.a,a.Eb,a.a,c.a],null,null)],function(n,l){n(l,2,0)},null)}var k=i.ob("app-product-list",d,M,{},{},[]),y=t("s7LF"),_=t("7JYj");t.d(l,"ProductListPageModuleNgFactory",function(){return L});var L=i.pb(h,[],function(n){return i.Bb([i.Cb(512,i.j,i.ab,[[8,[g.a,k]],[3,i.j],i.v]),i.Cb(4608,f.l,f.k,[i.s,[2,f.v]]),i.Cb(4608,y.p,y.p,[]),i.Cb(4608,a.b,a.b,[i.x,i.g]),i.Cb(4608,a.Gb,a.Gb,[a.b,i.j,i.p]),i.Cb(4608,a.Jb,a.Jb,[a.b,i.j,i.p]),i.Cb(1073742336,f.b,f.b,[]),i.Cb(1073742336,y.o,y.o,[]),i.Cb(1073742336,y.e,y.e,[]),i.Cb(1073742336,a.Cb,a.Cb,[]),i.Cb(1073742336,m.o,m.o,[[2,m.t],[2,m.m]]),i.Cb(1073742336,_.a,_.a,[]),i.Cb(1073742336,h,h,[]),i.Cb(1024,m.k,function(){return[[{path:"",component:d}]]},[])])})}}]);