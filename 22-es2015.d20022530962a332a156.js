(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{F4UR:function(t,e,n){"use strict";n.r(e),n.d(e,"LoginPageModule",(function(){return C}));var o=n("ofXK"),i=n("3Pt+"),r=n("tyNb"),a=n("TEn/"),s=n("mrSG"),c=n("sybk"),l=n("v0iw"),d=n("dkQB"),u=n("fXoL");let b=(()=>{class t{constructor(){this.parseAppId=d.a.parseAppId,this.parseJSKey=d.a.parseJSKey,this.parseServerUrl=d.a.parseServerUrl,this.parseInitialize()}parseInitialize(){l.initialize(this.parseAppId,this.parseJSKey),l.serverURL=this.parseServerUrl}RecoverPassword(t){return l.User.requestPasswordReset(t.trim().toLowerCase())}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=u.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var g=n("2m4Y");function p(t,e){1&t&&(u.Kb(0,"p",23),u.Kb(1,"ion-text",24),u.kc(2," Formato inv\xe1lido. "),u.Jb(),u.Jb())}const h=function(){return["/signup"]},m=function(){return["/home"]},v=[{path:"",component:(()=>{class t{constructor(t,e,n,o,i,r,a,s,c){this.authService=t,this.router=e,this.translate=n,this.menuCtrl=o,this.toastCtrl=i,this.alertCtrl=r,this.loadingCtrl=a,this.formBuilder=s,this.forgotPasswordService=c,this.logo="/assets/img/miguitas_logo.png"}ionViewWillEnter(){this.menuCtrl.enable(!1)}ngOnInit(){this.authService.SignOut(),this.onLoginForm=this.formBuilder.group({email:[null,i.l.compose([i.l.required])],password:[null,i.l.compose([i.l.required])]})}submit(){return Object(s.a)(this,void 0,void 0,(function*(){const t=yield this.loadingCtrl.create({duration:5e3});t.present(),this.authService.Login(this.onLoginForm.value).then(e=>{t.dismiss(),this.goToHome()}).catch(e=>{console.error(e),t.dismiss(),this.alertInvalidCredentials()})}))}alertInvalidCredentials(){return Object(s.a)(this,void 0,void 0,(function*(){const t=yield this.alertCtrl.create({header:"Usuario Inv\xe1lido",message:"Verifique las credenciales e intente de nuevo.",buttons:["Ok"]});yield t.present()}))}openForgotPassAlert(){return Object(s.a)(this,void 0,void 0,(function*(){(yield this.alertCtrl.create({header:"Recuperaci\xf3n de contrase\xf1a",message:"Ingrese su correo electr\xf3nico:",inputs:[{name:"email",type:"email",placeholder:"Correo Electr\xf3nico"}],buttons:[{text:this.translate.get("app.label.cancel"),role:"cancel",cssClass:"secondary"},{text:this.translate.get("app.label.accept"),handler:t=>Object(s.a)(this,void 0,void 0,(function*(){this.forgotPass(t)}))}]})).present()}))}forgotPass(t){return Object(s.a)(this,void 0,void 0,(function*(){if(!this.validateEmail(t.email)){const t=yield this.toastCtrl.create({message:"Correo electr\xf3nico inv\xe1lido.",duration:4e3,position:"bottom",buttons:[{icon:"close",side:"end"}],color:"danger"});return void(yield t.present())}const e=yield this.loadingCtrl.create({duration:6e3});e.present(),this.forgotPasswordService.RecoverPassword(t.email.trim().toLowerCase()).then(n=>Object(s.a)(this,void 0,void 0,(function*(){e.dismiss();const n=yield this.alertCtrl.create({header:"Sigue el enlace enviado a "+t.email,message:"Tip: Recuerda revisar la carpeta de correo no deseado si no lo encuentras.",buttons:["Ok"]});yield n.present()}))).catch(n=>Object(s.a)(this,void 0,void 0,(function*(){e.dismiss();const o=yield this.alertCtrl.create({header:"Error",message:"No se pudo enviar el correo de recuperaci\xf3n a "+t.email,buttons:["Ok"]});yield o.present(),console.error(n)})))}))}validateEmail(t){return/\S+@\S+\.\S+/.test(t)}goToHome(){this.router.navigate(["/home"])}}return t.\u0275fac=function(e){return new(e||t)(u.Hb(c.a),u.Hb(r.f),u.Hb(g.a),u.Hb(a.V),u.Hb(a.bb),u.Hb(a.a),u.Hb(a.U),u.Hb(i.a),u.Hb(b))},t.\u0275cmp=u.Bb({type:t,selectors:[["app-login"]],decls:35,vars:8,consts:[[1,"login","auth-page","ion-padding"],[1,"auth-content"],[1,"logo",3,"src"],[1,"animate__animated","animate__fadeInUp","animate__fast"],["color","light ion-padding"],[1,"list-form",3,"formGroup","keyup.enter"],[1,"ion-no-padding"],["position","floating"],["name","mail"],["type","email","color","hotpink","formControlName","email"],["class","text08",4,"ngIf"],["name","lock-closed"],["type","password","color","hotpink","formControlName","password"],["color","success","size","medium","expand","full","shape","round","tappable","",1,"ion-margin",3,"disabled","click"],["name","log-in","slot","end"],["color","secondary","size","medium","expand","full","shape","round",1,"ion-margin",3,"routerLink"],[1,"row"],[1,"col","ion-padding"],[3,"routerLink"],["color","dark"],["name","arrow-back","slot","start"],[1,"col","text-align-right","ion-padding"],[3,"click"],[1,"text08"],["color","danger"]],template:function(t,e){1&t&&(u.Kb(0,"ion-content",0),u.Kb(1,"div",1),u.Kb(2,"div"),u.Ib(3,"ion-img",2),u.Jb(),u.Kb(4,"div",3),u.Kb(5,"ion-card",4),u.Kb(6,"form",5),u.Sb("keyup.enter",(function(){return!!e.onLoginForm.valid&&e.submit()})),u.Kb(7,"ion-item",6),u.Kb(8,"ion-label",7),u.Ib(9,"ion-icon",8),u.kc(10," \xa0Correo Electr\xf3nico "),u.Jb(),u.Ib(11,"ion-input",9),u.Jb(),u.jc(12,p,3,0,"p",10),u.Kb(13,"ion-item",6),u.Kb(14,"ion-label",7),u.Ib(15,"ion-icon",11),u.kc(16," \xa0Contrase\xf1a "),u.Jb(),u.Ib(17,"ion-input",12),u.Jb(),u.Jb(),u.Kb(18,"ion-button",13),u.Sb("click",(function(){return e.submit()})),u.Ib(19,"ion-icon",14),u.kc(20," Iniciar Sesi\xf3n "),u.Jb(),u.Kb(21,"ion-button",15),u.kc(22," Crear Cuenta "),u.Jb(),u.Kb(23,"div",16),u.Kb(24,"div",17),u.Kb(25,"ion-text",18),u.Kb(26,"ion-text",19),u.Kb(27,"strong"),u.Ib(28,"ion-icon",20),u.kc(29," Regresar "),u.Jb(),u.Jb(),u.Jb(),u.Jb(),u.Kb(30,"div",21),u.Kb(31,"ion-text",22),u.Sb("click",(function(){return e.openForgotPassAlert()})),u.Kb(32,"ion-text",19),u.Kb(33,"strong"),u.kc(34," \xbfOlvidaste tu contrase\xf1a? "),u.Jb(),u.Jb(),u.Jb(),u.Jb(),u.Jb(),u.Jb(),u.Jb(),u.Jb(),u.Jb()),2&t&&(u.xb(3),u.ac("src",e.logo),u.xb(3),u.ac("formGroup",e.onLoginForm),u.xb(6),u.ac("ngIf",e.onLoginForm.get("email").touched&&e.onLoginForm.get("email").hasError("required")),u.xb(6),u.ac("disabled",!e.onLoginForm.valid),u.xb(3),u.ac("routerLink",u.cc(6,h)),u.xb(4),u.ac("routerLink",u.cc(7,m)))},directives:[a.p,a.u,a.i,i.m,i.i,i.c,a.y,a.z,a.t,a.x,a.ab,i.h,i.b,o.j,a.g,a.Y,r.g,a.O],styles:["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%]{--background:linear-gradient(135deg,var(--ion-color-medium),var(--ion-color-light))}.auth-page[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%], .auth-page[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{padding:0}.auth-page[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .button-ios[_ngcontent-%COMP%], .auth-page[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .button-md[_ngcontent-%COMP%]{border-radius:0}.auth-page[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .button-ios[_ngcontent-%COMP%]:first-of-type, .auth-page[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .button-md[_ngcontent-%COMP%]:first-of-type{border-radius:2px 0 0 2px}.auth-page[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .button-ios[_ngcontent-%COMP%]:last-of-type, .auth-page[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .button-md[_ngcontent-%COMP%]:last-of-type{border-radius:0 2px 2px 0}.auth-page[_ngcontent-%COMP%]   .auth-content[_ngcontent-%COMP%]{margin:auto;max-width:720px}.auth-page[_ngcontent-%COMP%]   .auth-content[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{height:180px;margin:auto;display:block}"]}),t})()}];let C=(()=>{class t{}return t.\u0275mod=u.Fb({type:t}),t.\u0275inj=u.Eb({factory:function(e){return new(e||t)},imports:[[o.b,i.d,i.k,a.S,r.h.forChild(v)]]}),t})()}}]);