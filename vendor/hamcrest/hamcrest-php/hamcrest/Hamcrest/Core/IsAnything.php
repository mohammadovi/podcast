ha=[]);this.oa=a;_.xr(this.Qb,_.Xj,this.NKb,!0,this)};_.v.stop=function(){_.cz(this.Qb,_.Xj,this.NKb,!0,this);return this.ha.join("")};_.v.reset=function(){var a=this.ha.join("");this.ha.length=0;return a};_.v.NKb=function(a){_.fjb(a)&&(8===a.charCode?--this.ha.length:this.ha.push(String.fromCharCode(a.charCode)));this.oa&&(a.stopPropagation(),a.preventDefault())};
_.v.dispose=function(){this.isDisposed()||(this.stop(),this.reset(),this.Qb=null)};
var Zth=_.No(_.cj);Zth.prototype.process=function(){var a=$th(this,this.ha,!0);if(a){a=_.rt(this.ha);for(var b=a.length,c=0;c<b;c++)_.iB(a[c],Nrh)}else if(a=$th(this,this.ha,!1)){a=_.rt(this.ha);b=a.length;for(c=0;c<b;c++)_.iB(a[c],Mrh);0<b&&(b=_.jt(_.Wh),_.iB(b,"yj6qo"),_.mt(b,a[0]))}};
var $th=function(a,b,c){if(auh(a,b,c))return!0;if(1==b.nodeType){if((b.tagName!=_.pd||_.hB(b,_.B1g))&&b.tagName!=_.Ee&&b.tagName!=_.$c