s(b))||_.ss(_.Vs(c))||b==a.Yp.ph};_.fhk.prototype.nb=function(){this.close();this.hOa=this.zS=null;delete Qgk[this.name];_.Lp(this.Aa);delete this.Aa;_.fhk.Ab.nb.call(this)};var jhk=function(a){_.Or.call(this);this.ha=a;a=this.Ca.bind(this);this.ha.oa=a;this.wa=new Map;this.Ba=new Map;this.oa=0;this.Aa=null};_.F(jhk,_.Or);jhk.prototype.connect=function(){var a=this;this.Aa=(new _.mr(function(b){a.ha.connect(b)})).then(function(){a.dispatchEvent("Bl")})};
var khk=function(a,b,c){a.Ba.set(b,c)};jhk.prototype.call=function(a,b,c,d){var e=this;this.Aa.then(function(){var f={data:b,messageId:e.oa};e.wa.set(e.oa,{Wza:c,Vza:d});e.oa++;e.ha.send(a,f)})};var l