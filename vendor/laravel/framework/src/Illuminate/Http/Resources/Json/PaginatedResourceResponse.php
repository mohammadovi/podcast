*=4294967296;return new S_(b,0)},tck=function(a,b){if(0==a.length)throw Error("N");b=b||10;if(2>b||36<b)throw Error("L`"+b);if("-"==a.charAt(0))return tck(a.substring(1),
b).Sk();if(0<=a.indexOf("-"))throw Error("MTa");for(var c=Kck(Math.pow(b,8)),d=Jck,e=0;e<a.length;e+=8){var f=Math.min(8,a.length-e),h=parseInt(a.substring(e,e+f),b);8>f?(f=Kck(Math.pow(b,f)),d=d.multiply(f).add(Kck(h))):(d=d.multiply(c),d=d.add(Kck(h)))}return d},Jck=Ick(0),Lck=Ick(1),Mck=Ick(16777216);S_.prototype.CJa=function(){return 0<this.ha.length?this.ha[0]:this.oa};
S_.prototype.ww=function(){if(this.uE())return-this.Sk().ww();for(var a=0,b=1,c=0;c<this.ha.length;c++){var d=T_(this,c);a+=(0<=d?d:4294967296+d)*b;b*=4294967296}return a};S_.prototype.toString=function(a){a=a||10;if(2>a||36<a)throw Error("L`"+a);if(this.AH())return"0";if(this.uE())return"-"+this.Sk().toString(a);for(var b=Kck(Math.pow(a,6)),c=this,d="";;){var e=Nck(c,b).Gta,f=(c.Af(e.multiply(b)).CJa()>>>0).toString(a);c=e;if(c.AH())return f+d;for(;6>f.length;)f="0"+f;d=f+d}};
var T_=function(a,b){return 0>b?0:b<a.ha.length?a.ha[b]:a.oa};_.v=S_.prototype;_.v.AH=function(){if(0!=this.oa)return!1;for(var a=0;a<this.ha.length;a++)if(0!=this.ha[a])return!1;return!0};_.v.uE=function(){return-1==this.oa};_.v.Jra=function(){return 0==this.ha.length&&-1==this.oa||0<this.ha.length&&0!=(this.ha[0]&1)};_.v.equals=function(a){if(this.oa!=a.oa)return!1;for(var b=Math.max(this.ha.length,a.ha.length),c=0;c<b;c++)if(T_(this,c)!=T_(a,c))return!1;return!0};_.v.cB=function(a){return!this.equals(a)};
_.v.$n=function(a){return 0<this.compare(a)};_.v.IA=function(a){return 0<=this.compare(a)};_.v.Op=function(a){return 0>this.compare(a)};_.v.XB=function(a){return 0>=this.compare(a)};_.v.compare=function(a){a=this.Af(a);return a.uE()?-1:a.AH()?0:1};_.v.Sk=function(){return this.cHa().add(Lck)};_.v.abs=function(){return this.uE()?this.Sk():this};
_.v.add=function(a){for(var b=Math.max(this.ha.length,a.ha.length),c=[],d=0,e=0;e<=b;e++){var f=d+(T_(this,e)&65535)+(T_(a,e)&65535),h=(f>>>16)+(T_(this,e)>>>16)+(T_(a,e)>>>16);d=h>>>16;f&=65535;h&=65535;c[e]=h<<16|f}return new S_(c,c[c.length-1]&-2147483648?-1:0)};_.v.Af=function(a){return this.add(a.Sk())};
_.v.multiply=function(a){if(this.AH()||a.AH())return Jck;if(this.uE())return a.uE()?this.Sk().multiply(a.Sk()):this.Sk().multiply(a).Sk();if(a.uE())return this.multiply(a.Sk()).Sk();if(this.Op(Mck)&&a.Op(Mck))return Kck(this.ww()*a.ww());for(var b=this.ha.length+a.ha.length,c=[],d=0;d<2*b;d++)c[d]=0;for(d=0;d<this.ha.length;d++)for(var e=0;e<a.ha.length;e++){