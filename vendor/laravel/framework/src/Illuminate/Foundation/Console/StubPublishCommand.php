n(h){return h===a.EW})?void 0:a.EW;if(e||a.y$||a.bIa){var f=void 0;a.y$?f=d.Tx.find(function(h){return h===a.y$})?[a.y$]:void 0:a.bIa&&(f=_.ap(d.Tx));d=this.Ca.Baa(d.id,f,e?[e]:void 0);b.push(d)}}return Promise.all(b)};var anh=function(a){return typeof a===_.Oi?a():a};
_.Xmh.prototype.Nv=function(a,b,c,d,e,f,h,k,m,p){var t=this,u,x=new Dmh(this.Ug,e,this.Aa.o2,k,void 0===m?!1:m,void 0===p?0:p);this.mb(x);this.Ba=x;var E=!0;a.then(function(){if(E){var K=anh(c);K&&ymh(x,K);0<x.timeout&&x.delay&&x.delay.start(x.timeout);x.Ga=!0;zmh(x)}},function(K){u=K;E&&x.Ah(anh(c))});this.p$=!0;return x.show(anh(c),d).then(function(K){E=!1;switch(K){case 0:return t.wa(),_.mr.reject(u||"catd");case 2:return t.wa(),_.mr.reject("uatd");case 1:return K=t.ha.bT(b,anh(c),d,!1,f,void 0,
void 0,void 0,_.bbh.id),_.lr(_.mr.all([a,K]).then(void 0,function(N){if(t.ha.yJ())return N=x.show(anh(c),d),x.Ah(),N.then(function(){throw u||"catd";},void 0);throw N;}),t.wa,t).then(function(N){var P=N[0];N=N[1];for(var R=[],qa=0;qa<P.length;qa++){var ya=new _.flh;ya.id=P[qa];ya.Tx=[_.bbh.id];R.push(ya)}return Zmh(t,R,N,!!h,[],[],[])},void 0)}},void 0)};
_.gnh=function(a,b,c,d,e){var f=void 0===f?!1:f;var h=void 0===h?0:h;var k=_.Jt();a.p$=!0;a.ha.bT(1,anh(c),d,!1,void 0,e,void 0,void 0,void 0,void 0,!0).then(function(m){var p=m.rL,t=m.Uda;f=f||!1===m.WM;m=_.clh(a.Ca,b,p);var u=_.Jt(),x=_.Jt();m.then(function(E){u.resolve(E);E=new _.flh;E.mimetype=_.Hdh;E.Tx=[p];x.resolve([E])},function(E){E=E&&E.error&&E.error.errors&&E.error.errors[0]&&E.error.errors[0].reason;var K="uer";"shortcutLimitExceeded"===E?K="sle":"shortcutPerCreatorLimitExceeded"===E&&
(K="spcle");k.reject(K)});t=a.Nv(u.promise,1,c,d,f,x.promise,void 0,t,!0,h);_.mr.all([u.promise,t]).then(function(E){E=_.w(E);var K=E.next().value;E.next();return void k.resolve({WIa:K,A3a:!1})},function(E){"uatd"===E?u.promise.then(function(K){dlh(a.Ca,K).then(function(){return void k.resolve({WIa:K,A3a:!0})},function(){return void k.reject("uatdf")})}):(_.Gkh(E)&&k.resolve({A3a:!1}),k.reject(E))})},function(m){return void k.reject(m)});return _.lr(k.promise,function(){a.wa()})};
_.Xmh.prototype.wa=function(){this.p$&&(this.Ba&&(this.Ba.hide(),this.Ba.dispose(),this.Ba=null),this.p$=!1,this.dispatchEvent("Zg"))};_.Xmh.prototype.QV=function(){var a=this.p$;this.ha.yJ();this.wa();return a};_.Xmh.prototype.Ga=function(){this.dispatchEvent("Xg")};_.Xmh.prototype.Ia=function(){this.dispatchEvent("Yg")};var $mh=!1;

_.z();

}catch(e){_._DumpException(e)}
/*_M:sy26o*/
try{
_.y("sy26o");

var inh;_.hnh="There was an error while moving your attachments to the selected folder in Google Drive.";inh=_.n();_.is(inh,_.Kz);_.Pz(_.r(!1));_.Pz(_.r(!1));
var jnh=function(a,b,c,d,e){this.oa=a;this.wa=b;this.mKa=c;this.fl=d||null;this.Aa=void 0!==e?e:Date.now()};jnh.prototype.getTitle=_.q(_.Gi);
_.knh=function(a,b,c,d,e,f,h){jnh.call(this,a,b,c,f,h);this.ha=d;this.Ba=e};_.F(_.knh,jnh);
_.lnh=function(a,b,c,d,e,f,h){jnh.call(this,a,b,c,e,f);this.Ba=d;this.ha=h||null};_.F(_.lnh,jnh);_.lnh.prototype.Hu=_.q(_.dd);_.lnh.prototype.yp=_.q(_.cj);
var mnh;mnh={nOc:_.Xmh,Usc:_.Hlh,Vsc:_.alh,mOc:_.nmh};_.nW=function(a){_.Tr.call(this);this.La=a;var b=a.get(_.PBc);this.Da=_.Ry()||"0";var c=b.HF();this.Fb=a.get(_.jr).Na();this.Ia=a.get(_.QH).ji(_.vkh);this.Ca=new mnh.Vsc(c,3,b.J2(),{loa:this.Ia});this.mb(this.Ca);this.oa=nnh(this);this.mb(this.oa);this.Aa=new mnh.Usc(c,3,b.J2());this.mb(this.Aa);this.Fa=new _.Or;this.mb(this.Fa);this.Va=new _.Vr(this);this.mb(this.Va);this.Va.listen(this.oa,"Zg",this.Ja);this.wa=a.get(_.sz);this.ha=_.br(a);this.ha.oa(_.Yub)};
_.F(_.nW,_.Tr);_.nW.prototype.Ja=function(){this.Cc().dispatchEvent("G")};_.nW.prototype.Cc=_.q(_.Ad);_.nW.prototype.$Pa=_.n();_.nW.prototype.qea=function(a,b){return this.Aa.qea(a,b)};var nnh=function(a,b){var c=a.La.get(_.XD).getData("pi:pku");c=new mnh.mOc(c,a.Fb);var d=a.Da;c.wa="gm-s";c.authuser=d;c.Ba=!0;a=new mnh.nOc(c,a.Ca,a.Da,a.Fb,void 0,void 0,b);a.oa="gm-s";b=_.Bih.Wb();c=_.Hih();b.ha&&_.Ir(c,_.tg,b.ha);a.Da=c.toString();return a};
_.nW.prototype.FQa=function(a,b){var c=a.oa;b={parentElement:a.wa,viewportElement:a.mKa,hP:b.hP||8,TI:9,margin:b.margin};var d={r_:void 0,JUb:void 0,dfb:void 0,Qmc:void 0,Rbc:void 0};this.Va.yd(this.oa,"Wg",(0,_.G)(this.Sa,this,d)).yd(this.oa,"Yg",(0,_.G)(this.hb,this,d,a)).yd(this.oa,"Xg",(0,_.G)(this.Ya,this,d));if(a instanceof _.knh)var e=this.oa.Nv(a.ha,a.Ba,c,b,!0);else a instanceof _.lnh&&(d.dfb=a.Aa,e=onh(this,a,c,b));_.Mr(this,function(){return void e.cancel()});return _.lr