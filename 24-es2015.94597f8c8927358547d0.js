(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{ZYv8:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),t=u("mrSG"),o=u("ZZ/e"),i=u("sybk");class r{constructor(l,n,u,e){this.authService=l,this.loadingCtrl=n,this.menucCtrl=u,this.toastCtrl=e}ionViewWillEnter(){this.menucCtrl.close()}ngOnInit(){this.email=this.authService.getCurrentUser().get("email"),this.phone=this.authService.getCurrentUser().get("phone")}submit(){return t.b(this,void 0,void 0,function*(){const l=yield this.loadingCtrl.create();yield l.present(),yield this.authService.UpdateUserData({email:this.email,phone:this.phone}),l.dismiss();const n=yield this.toastCtrl.create({message:"Se han actualizado los datos.",duration:4e3,position:"bottom",buttons:[{icon:"close",side:"end"}]});yield n.present()})}}class a{}var b=u("pMnS"),s=u("oBZk"),c=u("s7LF"),d=e.qb({encapsulation:0,styles:[[""]],data:{}});function h(l){return e.Ob(0,[(l()(),e.sb(0,0,null,null,13,"ion-header",[],null,null,null,s.cb,s.q)),e.rb(1,49152,null,0,o.A,[e.h,e.k,e.x],null,null),(l()(),e.sb(2,0,null,0,11,"ion-toolbar",[["color","primary"]],null,null,null,s.xb,s.L)),e.rb(3,49152,null,0,o.Ab,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.sb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,s.R,s.f)),e.rb(5,49152,null,0,o.k,[e.h,e.k,e.x],null,null),(l()(),e.sb(6,0,null,0,2,"ion-back-button",[["defaultHref","/"],["text",""]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Eb(l,8).onClick(u)&&t),t},s.O,s.c)),e.rb(7,49152,null,0,o.f,[e.h,e.k,e.x],{defaultHref:[0,"defaultHref"],text:[1,"text"]},null),e.rb(8,16384,null,0,o.g,[[2,o.gb],o.Hb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.sb(9,0,null,0,4,"ion-title",[],null,null,null,s.wb,s.K)),e.rb(10,49152,null,0,o.yb,[e.h,e.k,e.x],null,null),(l()(),e.Mb(-1,0,["Perfil "])),(l()(),e.sb(12,0,null,0,1,"ion-icon",[["name","person"]],null,null,null,s.db,s.r)),e.rb(13,49152,null,0,o.B,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.sb(14,0,null,null,38,"ion-content",[],null,null,null,s.Z,s.n)),e.rb(15,49152,null,0,o.t,[e.h,e.k,e.x],null,null),(l()(),e.sb(16,0,null,0,36,"ion-card",[],null,null,null,s.W,s.g)),e.rb(17,49152,null,0,o.l,[e.h,e.k,e.x],null,null),(l()(),e.sb(18,0,null,0,34,"ion-card-content",[],null,null,null,s.S,s.h)),e.rb(19,49152,null,0,o.m,[e.h,e.k,e.x],null,null),(l()(),e.sb(20,0,null,0,13,"ion-item",[["no-padding",""]],null,null,null,s.gb,s.u)),e.rb(21,49152,null,0,o.G,[e.h,e.k,e.x],null,null),(l()(),e.sb(22,0,null,0,4,"ion-label",[["position","floating"]],null,null,null,s.hb,s.v)),e.rb(23,49152,null,0,o.M,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.sb(24,0,null,0,1,"ion-icon",[["item-start",""],["name","mail"]],null,null,null,s.db,s.r)),e.rb(25,49152,null,0,o.B,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.Mb(-1,0,[" Correo Electr\xf3nico "])),(l()(),e.sb(27,0,null,0,6,"ion-input",[["color","hotpink"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Eb(l,28)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Eb(l,28)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.email=u)&&t),t},s.fb,s.t)),e.rb(28,16384,null,0,o.Mb,[e.k],null,null),e.Jb(1024,null,c.h,function(l){return[l]},[o.Mb]),e.rb(30,671744,null,0,c.l,[[8,null],[8,null],[8,null],[6,c.h]],{model:[0,"model"]},{update:"ngModelChange"}),e.Jb(2048,null,c.i,null,[c.l]),e.rb(32,16384,null,0,c.j,[[4,c.i]],null,null),e.rb(33,49152,null,0,o.F,[e.h,e.k,e.x],{color:[0,"color"],type:[1,"type"]},null),(l()(),e.sb(34,0,null,0,13,"ion-item",[["no-padding",""]],null,null,null,s.gb,s.u)),e.rb(35,49152,null,0,o.G,[e.h,e.k,e.x],null,null),(l()(),e.sb(36,0,null,0,4,"ion-label",[["position","floating"]],null,null,null,s.hb,s.v)),e.rb(37,49152,null,0,o.M,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.sb(38,0,null,0,1,"ion-icon",[["item-start",""],["name","call"]],null,null,null,s.db,s.r)),e.rb(39,49152,null,0,o.B,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.Mb(-1,0,[" Tel\xe9fono "])),(l()(),e.sb(41,0,null,0,6,"ion-input",[["color","hotpink"],["type","tel"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Eb(l,42)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Eb(l,42)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.phone=u)&&t),t},s.fb,s.t)),e.rb(42,16384,null,0,o.Mb,[e.k],null,null),e.Jb(1024,null,c.h,function(l){return[l]},[o.Mb]),e.rb(44,671744,null,0,c.l,[[8,null],[8,null],[8,null],[6,c.h]],{model:[0,"model"]},{update:"ngModelChange"}),e.Jb(2048,null,c.i,null,[c.l]),e.rb(46,16384,null,0,c.j,[[4,c.i]],null,null),e.rb(47,49152,null,0,o.F,[e.h,e.k,e.x],{color:[0,"color"],type:[1,"type"]},null),(l()(),e.sb(48,0,null,0,4,"ion-button",[["color","success"],["expand","full"],["margin",""],["shape","round"],["size","medium"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.submit()&&e),e},s.Q,s.e)),e.rb(49,49152,null,0,o.j,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"],shape:[2,"shape"],size:[3,"size"]},null),(l()(),e.sb(50,0,null,0,1,"ion-icon",[["margin-end",""],["name","save"]],null,null,null,s.db,s.r)),e.rb(51,49152,null,0,o.B,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.Mb(-1,0,[" Guardar "]))],function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,7,0,"/",""),l(n,8,0,"/"),l(n,13,0,"person"),l(n,23,0,"floating"),l(n,25,0,"mail"),l(n,30,0,u.email),l(n,33,0,"hotpink","email"),l(n,37,0,"floating"),l(n,39,0,"call"),l(n,44,0,u.phone),l(n,47,0,"hotpink","tel"),l(n,49,0,"success","full","round","medium"),l(n,51,0,"save")},function(l,n){l(n,27,0,e.Eb(n,32).ngClassUntouched,e.Eb(n,32).ngClassTouched,e.Eb(n,32).ngClassPristine,e.Eb(n,32).ngClassDirty,e.Eb(n,32).ngClassValid,e.Eb(n,32).ngClassInvalid,e.Eb(n,32).ngClassPending),l(n,41,0,e.Eb(n,46).ngClassUntouched,e.Eb(n,46).ngClassTouched,e.Eb(n,46).ngClassPristine,e.Eb(n,46).ngClassDirty,e.Eb(n,46).ngClassValid,e.Eb(n,46).ngClassInvalid,e.Eb(n,46).ngClassPending)})}function g(l){return e.Ob(0,[(l()(),e.sb(0,0,null,null,1,"app-user-profile",[],null,null,null,h,d)),e.rb(1,114688,null,0,r,[i.a,o.Eb,o.Fb,o.Nb],null,null)],function(l,n){l(n,1,0)},null)}var p=e.ob("app-user-profile",r,g,{},{},[]),m=u("SVse"),C=u("iInd");u.d(n,"UserProfilePageModuleNgFactory",function(){return f});var f=e.pb(a,[],function(l){return e.Bb([e.Cb(512,e.j,e.ab,[[8,[b.a,p]],[3,e.j],e.v]),e.Cb(4608,m.l,m.k,[e.s,[2,m.v]]),e.Cb(4608,c.p,c.p,[]),e.Cb(4608,o.b,o.b,[e.x,e.g]),e.Cb(4608,o.Gb,o.Gb,[o.b,e.j,e.p]),e.Cb(4608,o.Jb,o.Jb,[o.b,e.j,e.p]),e.Cb(1073742336,m.b,m.b,[]),e.Cb(1073742336,c.o,c.o,[]),e.Cb(1073742336,c.e,c.e,[]),e.Cb(1073742336,o.Cb,o.Cb,[]),e.Cb(1073742336,C.o,C.o,[[2,C.t],[2,C.m]]),e.Cb(1073742336,a,a,[]),e.Cb(1024,C.k,function(){return[[{path:"",component:r}]]},[])])})}}]);