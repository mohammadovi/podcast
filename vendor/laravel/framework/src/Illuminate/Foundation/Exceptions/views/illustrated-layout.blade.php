.086 10.5,9.086 7.5,6.086 6.085,7.5 9.085,10.5 6.085,13.5 7.5,14.914 " fill="'+_.T(_.LA((a||{}).cra,_.usa)?_.Gca:_.hb)+'" style="opacity:0.5" transform="translate(-2.9561186,-2.5084746)"/></svg>')};
var xmh=function(a,b){_.WB.call(this,b);this.G_a=a;this.ha=new _.RG;this.wa=this.Qa=this.TI=this.anchor=this.Fa=null;this.Ia=!1;this.mb(this.ha);a=wmh();(this.Aa=this.G_a?new _.fC(null,a,b):null)&&this.Xb(this.Aa);this.Da=new _.fC(null,a,b);this.Xb(this.Da)};_.F(xmh,_.WB);xmh.prototype.Oa=function(){this.Wd(_.dq(vmh,{G_a:this.G_a,cra:_.Ifc()},void 0,this.Na()));this.Fa=this.Vb(okh)};
xmh.prototype.tb=function(){_.WB.prototype.tb.call(this);var a=this.Na(),b=this.Ea();_.mA(b,!1);this.ha.$M(b);this.Qa=this.Vb(skh);this.Aa&&this.Aa.Nc(this.Vb(qkh));this.Da.Nc(this.Vb(nkh));this.Da.Th(_.nd);this.Da.$z(_.nd);_.pB(b,_.Yf);_.d4b(this.ha,!0);a=new _.qmh(this.Fa,a);this.mb(a);_.rmh(a);this.Ta().listen(this.ha,_.kj,this.Qxc).listen(this.Da,_.Nf,this.Pxc);this.Aa&&this.Ta().listen(this.Aa,_.Nf,this.Jed);this.Ta().listen(b,_.Wj,this.knb.bind(this,!1),!0).listen(b,_.Gk,this.knb.bind(this,
!0),!0);this.Ta().listen(b,_.Fg,this.Kz,!0);this.Ta().listen(b,_.Ih,this.stopPropagation).listen(b,_.nh,this.stopPropagation).listen(b,_.Gk,this.stopPropagation).listen(b,_.Nk,this.stopPropagation)};
var ymh=function(a,b){a.anchor=b;a.ha.setPosition(new _.smh(b,a.TI||9,a.Qa,"aLF-a79-axm-atG","aLF-a79-axm-atB"))},Amh=function(a,b,c){a.TI=c.TI;if(a.Nd()){var d=a.Na(),e=a.Fd(),f=d.Rb().body,h=d.Ula(e);f=c.parentElement||f;h!==f&&d.appendChild(f,e)}else a.render(c.parentElement);ymh(a,b);a.ha.vP(c.hP||8);_.i4b(a.ha,c.margin||new _.Tz(10,0,10,0));a.knb(!0);zmh(a);a.ha.setVisible(!0);var k=a.Fa;_.Cz(function(){try{k.focus()}catch(m){}},0);a.wa=_.Jt();return a.wa.promise};_.v=xmh.prototype;
_.v.hide=function(){this.ha.setVisible(!1)};_.v.isVisible=function(){return this.ha.isVisible()};_.v.Qxc=function(){this.wa&&(this.wa.resolve(0),this.wa=null);this.Ia?this.Ia=!1:Akh(this.ha,this.anchor,this.Na())};_.v.Kz=function(){var a=this.Na(),b=a.Rb();_.Cz(function(){if(!this.isDisposed()&&this.isVisible())if(typeof b.hasFocus!==_.Oi||b.hasFocus()){var c=a.eh();c&&!_.vt(this.Ea(),c)&&this.hide()}else this.hide()},0,this)};_.v.Pxc=function(){this.V0a(0)};_.v.Jed=function(){this.Ia=!0;this.V0a(1)};
_.v.V0a=function(a){this.wa&&(this.wa.resolve(a),this.wa=null);this.ha.setVisible(!1)};_.v.knb=function(a){_.mB(this.Fd(),"aLF-a79-axm-aw2-avG",a)};_.v.stopPropagation=function(a){a.stopPropagation()};var Bmh,Cmh=_.n();_.F(Cmh,_.iC);Cmh.prototype.Kc=_.r(gkh);var wmh=function(){Bmh||(Bmh=new Cmh);return Bmh};
var Dmh=function(a,b,c,d,e,f){b=void 0===b?!1:b;c=void 0===c?!1:c;f=void 0===f?0:f;xmh.call(this,(void 0===e?0:e)?"":_.$jh,a);this.Sa=this.Ja=this.Ka=this.Ca=this.oa=null;this.Ba=this.Ga=!1;this.delay=null;e=wmh();b||(this.oa=new _.fC(null,e,a),this.Xb(this.oa));this.o2=c;this.rCb=d;this.timeout=f;0<f&&(this.delay=new _.nC(this.V0a.bind(this,0)))};_.F(Dmh,xmh);
Dmh.prototype.Oa=function(){xmh.prototype.Oa.call(this);var a=this.Na();this.Ca=_.dq(pmh,{E1c:!this.oa,o2:this.o2,rCb:this.rCb},void 0,a);a.bG(this.Fa,this.Ca,0)};
Dmh.prototype.tb=function(){xmh.prototype.tb.call(this);this.Ja=this.Vb(jkh);this.Ka=this.Vb(kkh);this.Sa=this.Vb(lkh);this.oa&&this.oa.Nc(this.Vb(mkh));var a=this.Ea();_.mA(a,!0);Emh(this,!0);var b=_.jA(this.Ca).width;Emh(this,!1);b=Math.max(b,_.jA(this.Ca).width);++b;_.gA(this.Ca,b);_.Vz(this.Ca,_.cBe,_.sza);_.mA(a,!1);this.oa&&this.Ta().listen(this.oa,_.Nf,this.Ya)};Dmh.prototype.show=function(a,b){this.Ba=this.Ga=!1;return Amh(this,a,b)};
Dmh.prototype.Ah=function(a){a&&ymh(this,a);0<this.timeout&&this.delay&&this.delay.start(this.timeout);this.Ba=!0;zmh(this)};var zmh=function(a){Emh(a,a.Ga);a.ha.Kd()},Emh=function(a,b){_.mA(a.Ja,!a.Ba&&b);_.mA(a.Ka,!a.Ba&&!b);_.mA(a.Sa,a.Ba);a.oa&&a.oa.setVisible(!a.Ba&&b);a.Aa&&a.Aa.setVisible(!a.Ba)};Dmh.prototype.Ya=function(){this.V0a(2)};
var Fmh=function(a,b,c,d,e){_.HI.call(this,"aLF-a79-JD",void 0,e);this.title=a;this.content=b;this.owb=c;this.Aa=d;this.oa=null};_.F(Fmh,_.HI);Fmh.prototype.Oa=function(){_.HI.prototype.Oa.call(this);_.OI(this,(new _.MI).$g(_.RI,!1,!0).$g({key:_.ll,caption:this.owb},!0));this.Rm=!0;_.NI(this,!1);this.setTitle(this.title);_.II(this,this.content)};
Fmh.prototype.tb=function(){var a=this;_.HI.prototype.tb.call(this);_.SI(this,_.ll);for(var b=_.lkc(this.ha),c=0;c<b.length;c++)_.iB(b.item(c),gkh);this.Ta().listen(this,_.Sh,function(d){switch(d.key){case _.Sg:a.oa.reject(a.Aa);break;case a.ha.oa:a.oa.resolve()}})};Fmh.prototype.show=function(){this.oa=_.Jt();this.setVisible(!0);return this.oa.promise};
var Gmh={E6b:!1};
var lW=new _.flc,Hmh=function(a,b){this.ha=a;this.customerId=b};
Hmh.prototype.V7=function(a,b){if(0===a.x$.removedParents.length)return Gmh;var c=this.ha,d=this.customerId,e=!!a.OI.teamDriveId,f=a.OI.organizationDisplayName||c,h=0<a.laa.z$.length?a.laa.z$[0].organizationDisplayName:c;c=a.OI.customerId||d;d=0<a.laa.z$.length?a.laa.z$[0].customerId||"":d;var k=a.x$.removedParents[0],m=Pkh(a),p;if(p=!m)p=a.x$.removedParents[0],p=!!p.teamDriveId||!p.shared||p.iF===_.LV;f={oza:a.OI.name,K5c:h,sqe:d,Bea:0<a.laa.z$.length?a.laa.z$[0].name:null,F0a:k.name,Zk:a.Zk,rmc:f,
Eve:c,DJa:a.OI.mK||null};a={dUc:a.OI.iF===_.LV,iQa:e,mdb:a.OI.shared&&!e,CXc:!b,p2c:p,domainUsersOnly:a.OI.domainUsersOnly,I5c:p&&null==k.customerId,x0b:!!k.teamDriveId&&k.teamMembersOnly,p6b:m,Vld:e||0<a.laa.z$.length?d!==c:!1,J8b:Qkh(a),Oyb:0<a.laa.z$.length,Ete:a.OI.iF===_.LV,E0a:0<a.x$.Pud,mvb:f,Ybc:Rkh(a),$Od:p&&null==a.OI.customerId,EJa:a.OI.teamMembersOnly};if(a.p6b&&!a.J8b)b=[0];else{b=[];if(a.Ybc)b.push(1);else{e=b.push;f=e.apply;c=[];a.Vld&&c.push(2);if(a.Oyb||a.E0a&&a.iQa)a.x0b?c.push(11):
a.EJa?c.push(12):c.push(4);a.iQa?a.EJa?c.push(6):c.push(5):a.mdb&&c.push(10);a.E0a&&!a.iQa&&c.push(4);!a.EJa||a.Oyb||a.E0a||c.push(7);a.domainUsersOnly&&c.push(8);f.call(e,b,_.sr(c))}a.CXc&&b.push(9)}0===b.length?a=Gmh:(e=a.mvb,a={E6b:!0,content:{title:a.p6b&&!a.J8b?_.oJ(lW,_.Ljh,{Zk:e.Zk}):a.iQa&&!a.Ybc?_.oJ(lW,_.Kjh):a.Oyb&&(a.dUc||a.mdb)?_.oJ(lW,_.Jjh):a.mdb||a.E0a?_.oJ(lW,_.Mjh):_.oJ(lW,_.Ljh,{Zk:e.Zk}),body:Imh(b,a),owb:"Move"}});return a};
var Imh=function(a,b){var c=1>=a.length;return a.map(function(d){return Wkh(d,b,c)}).join(" ")};
var Jmh=function(a,b){_.Tr.call(this);var c=this;this.wa=a;this.oa=b;this.ha=null;_.Mr(this,function(){_.Lp(c.ha)})};_.F(Jmh,_.Tr);var Kmh=function(a,b,c,d,e,f){f=void 0===f?!1:f;return _.mr.all([b,c,e,d]).then(function(h){h=_.w(h);var k=h.next().value,m=h.next().value,p=h.next().value,t=h.next().value;h=a.oa.moa&&f&&Ckh(m,!!k.KU,!!k.sourceParentTeamDriveId);m=Mkh(k,m,t,p);m=a.wa.V7(m,k.WM);if(!m.E6b||h)return k;h=m.content;h=new Fmh(h.title,_.fq(h.body),h.owb,"csc");_.Lp(a.ha);a.ha=h;return a.ha.show().then(function(){return k})})};
var Lmh=function(a){a=void 0===a?0:a;_.Yy.call(this,"ah");this.processedFileCount=a};_.F(Lmh,_.Yy);
var Mmh=function(){_.Oo.apply(this,arguments)};_.F(Mmh,_.Oo);
var Nmh=function(a){var b=a.yDd;a=_.Kc+_.T(hkh)+_.g;b='Move from <span class="'+(_.T(ikh)+_.g)+_.D(b)+_.oc;return(0,_.C)(a+b+_.oc)},Omh=function(a){var b=a.name;a=_.Kc+_.T(hkh)+_.g;b='Do not move from any folder, just add to <span class="'+(_.T(ikh)+_.g)+_.D(b)+_.oc;return(0,_.C)(a+b+_.oc)},Pmh=function(a){var b=a.name,c=a.Zk,d=a.aYa;a=_.Kc+_.T(hkh)+_.g;d==_.wkh?(b=_.oE(new _.Rr("{NUM_ITEMS,plural, =1{You do not have permission to move this file from its current folders. Add file to {START_SPAN_1}{NAME}{END_SPAN} instead.}other{You do not have permission to move these files from their current folders. Add files to {START_SPAN_2}{NAME}{END_SPAN} instead.}}"),
{NUM_ITEMS:c,START_SPAN_1:_.Kc+_.T(ikh)+_.g,NAME:_.D(b),END_SPAN:_.oc,START_SPAN_2:_.Kc+_.T(ikh)+_.g}),a+=b):d==xkh?(b=_.oE(new _.Rr("{NUM_ITEMS,plural, =1{You do not have permission to move this folder from its current folders. Add folder to {START_SPAN_1}{NAME}{END_SPAN} instead.}other{You do not have permission to move these folders from their current folders. Add folders to {START_SPAN_2}{NAME}{END_SPAN} instead.}}"),{NUM_ITEMS:c,START_SPAN_1:_.Kc+_.T(ikh)+_.g,NAME:_.D(b),END_SPAN:_.oc,START_SPAN_2:_.Kc+
_.T(ikh)+_.g}),a+=b):(b=_.oE(new _.Rr("{NUM_ITEMS,plural, =1{You do not have permission to move this item from its current folder. Add item to {START_SPAN_1}{NAME}{END_SPAN} instead.}other{You do not have permission to move these items from their current folders. Add items to {START_SPAN_2}{NAME}{END_SPAN} instead.}}"),{NUM_ITEMS:c,START_SPAN_1:_.Kc+_.T(ikh)+_.g,NAME:_.D(b),END_SPAN:_.oc,START_SPAN_2:_.Kc+_.T(ikh)+_.g}),a+=b);return(0,_.C)(a+_.oc)};
var Qmh=function(a,b,c,d,e){_.HI.call(this,"aLF-a79-JD",void 0,d);this.Ga=a;this.Qa=b;this.Ca=c;this.Sa=e;this.Ba=!1;this.oa=this.Aa=null};_.F(Qmh,_.HI);Qmh.prototype.Oa=function(){_.HI.prototype.Oa.call(this);_.OI(this,(new _.MI).$g(_.RI,!1,!0).$g(_.mkc,!0));this.Rm=!0;_.$p(this.Yc(),Mlh)};
Qmh.prototype.tb=function(){var a=this;_.HI.prototype.tb.call(this);_.SI(this,_.ll);var b=this.ha;_.QI(b,_.ll,!1);for(var c=_.lkc(b),d=0;d<c.length;d++)_.iB(c.item(d),gkh);this.Ta().listen(this,_.Sh,function(e){switch(e.key){case _.Sg:a.oa.reject(_.yh);break;case b.oa:a.Ba?a.oa.resolve({id:void 0,name:void 0,HH:!1}):a.Aa&&a.oa.resolve(a.Aa.Mb())}})};
var Smh=function(a){a.oa=_.Jt();_.mr.all([a.Ga,a.Qa,a.Ca]).then(function(b){Rmh(a,b[0],b[1],b[2])},function(b){a.oa.reject(b)});return a.oa.promise},Rmh=function(a,b,c,d){var e=!!(c&&0<c.length&&c[0].teamDriveId),f=!(!d||!d.teamDriveId),h={id:void 0,name:void 0,HH:!0};f&&e?(h.teamDriveId=c[0].teamDriveId,a.oa.resolve(h)):f?a.oa.resolve(h):(f=Tmh(b),f[d.id]===b.length?a.oa.reject("iid"):(e=Umh(c,d.id),0===e.length&&c.every(function(k){return k.ha||k.iF===_.LV||k.iF===_.zkh})?(h.HH=!1,a.oa.resolve(h)):
(h=Vmh(b.length,f,e),1===e.length&&h?(b=e[0],a.oa.resolve({id:b.id,name:b.name,HH:!1})):a.Sa?a.oa.resolve({id:void 0,name:void 0,HH:!0}):(a.setVisible(!0),Wmh(a,b,c.length,e,h,d)))))},Wmh=function(a,b,c,d,e,f){var h=b.length,k=d.length,m=_.Fkh(b),p=new _.eJ;if(0===k)a.Ba=!0,_.$p(a.Yc(),Pmh,{name:f.name,Zk:h,aYa:m}),_.QI(a.ha,_.ll,!0);else{if(1===k||3>k&&e)for(e=0;e<k;e++){var t=d[e];var u=_.dq(Nmh,{yDd:t.name},null,a.Na());u=new _.XI(u,{id:t.id,name:t.name,HH:!1});u.aI(!0);p.Xb(u,!0)}1<k&&(u=new _.XI((new _.Rr("{NUM_FOLDERS,plural, =1{Move from one folder}=2{Move from both folders}other{Move from all # folders}}")).format({NUM_FOLDERS:k}),
{id:void 0,name:void 0,HH:!0}),u.aI(!0),p.Xb(u,!0));b.some(function(x){return Dkh(x.mimetype)})||(u=_.dq(Omh,{name:f.name},null,a.Na()),u=new _.XI(u,{id:void 0,name:void 0,HH:!1}),u.aI(!0),p.Xb(u,!0));a.setTitle(Hkh(h,m,c));b=a.Yc();a.Na().ik(b);p.render(a.Yc());a.Ta().listen(p,_.Nf,function(x){x=x.target;this.Aa&&this.Aa.Mb()!==x.Mb()&&this.Aa.Og(!1);this.Aa=x;_.QI(this.ha,_.ll,!0)});a.mb(p)}a.Kd()},Tmh=function(a){for(var b={},c=0;c<a.length;c++)for(var d=0;d<a[c].Tx.length;d++){var e=a[c].Tx[d];
b[e]=(b[e]||0)+1}return b},Umh=function(a,b){return a.filter(function(c){return c.id!==b&&(c.ha||c.iF===_.LV||c.iF===_.zkh)})},Vmh=function(a,b,c){return c.every(function(d){return b[d.id]===a})};
_.Xmh=function(a,b,c,d,e,f,h,k,m){_.Or.call(this);this.ha=a;this.Ca=b;this.authuser=c;this.Ug=d;this.Fa=this.oa=this.Ba=null;this.p$=!1;this.Da=_.zy(_.Dp.location.href);this.Vg=new _.Vr(this);this.mb(this.Vg);this.Aa=h||{ooe:!1,o2:!1,moa:!1,joe:!1,koe:!1};this.Ja=new Jmh(new Hmh(e||"",f||""),this.Aa);m&&k&&new m(k,new Hmh(e||"",f||""));this.Vg.listen(this.ha,"bh",this.Ga).listen(this.ha,"ch",this.Ia)};_.F(_.Xmh,_.Or);
_.Xmh.prototype.vS=function(a,b,c,d,e,f,h,k,m,p,t,u,x,E,K){var N=this;f=void 0===f?!1:f;t=void 0===t?_.mr.resolve(!0):t;var P,R