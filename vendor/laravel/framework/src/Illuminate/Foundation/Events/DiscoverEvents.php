nMoveItemOutOfDrive";_.ajh="canMoveItemOutOfTeamDrive";_.bjh="canMoveItemWithinDrive";_.fW="drive#file";_.cjh="fields";_.djh="gmail_link_preview";_.ejh=function(a){if(Array.isArray(a))return a.map(_.ejh).join("");if(a.yp()){if(!a.getId())throw Error("XFa");return a.getId()+"/"+a.yp()+","}return""};_.fjh=function(a,b){Object.assign(a.wa,b)};

_.z();

}catch(e){_._DumpException(e)}
/*_M:sy27g*/
try{
_.y("sy27g");

var ljh;_.gjh="gmail_attachment_preview";_.hjh="gmail_attachment_skip_projector";_.ijh="gmail_attachment_studio";_.jjh="gmail_link_studio";_.kjh=function(a,b){_.Ir(a,_.yj,b);_.Ir(a,_.eva,_.Iua)};ljh=function(a){var b=_.Bih.Wb(),c=new _.ar("https://docs.google.com/");_.Gy(c,(b.oa?"/a/"+b.oa:"")+"/uc");_.kjh(c,a);return c};_.mjh=function(a,b){return a.oa?a.oa.getUrl(b.Wda,b.XRa,b.Tn):a.wa?_.Gih(a.wa,b.Wda,b.Wda,b.XRa):""};
var qjh,ojh,rjh;_.njh=function(a,b,c){c=void 0===c?{}:c;_.Tr.call(this);this.Ca=a;this.wa=b;this.Ba=c;this.Aa=this.ha=this.oa=null};_.F(_.njh,_.Tr);
_.pjh=function(a,b){if(0!=b.length)for(var c=0;c<b.length;c++){var d=b[c];ojh(a,d.Kj(),"id,kind,title,fileExtension,mimeType,thumbnailLink,alternateLink,capabilities(canDownload, canMoveItemOutOfTeamDrive, canMoveItemOutOfDrive, canMoveItemWithinDrive,canMoveItemWithinTeamDrive, canAddMyDriveParent),downloadUrl,headRevisionId,imageMediaMetadata(width,height),preview(link),primarySyncParentId,headRevisionId,teamDriveId,labels(trashed),parents(id),userPermission(role)").then((0,_.G)(a.Ia,a,d),(0,_.G)(a.Da,
a,d))}};qjh=function(a,b,c){var d={supportsTeamDrives:!0};a.Ba&&a.Ba.loa&&(d.enforceSingleParent=!0);return _.cW(_.dW(_.eW(new _.bW(a.Ca,b,c)),d),3)};ojh=function(a,b,c){var d=a.wa+_.Qih+b.getId();d=_.By(d,_.cjh,c);a=qjh(a,d,_.fW);(b=_.ejh(b))?(c={},b=(c[_.Yih]=b,c)):b={};_.fjh(a,b);return a.start()};rjh=function(a){if(a.ha.parents){var b=a.ha.parents.map(function(c){return ojh(a,(new _.aH).xd(c.id),"id,kind,capabilities(canMoveChildrenWithinDrive)")});return _.mr.all(b)}return _.mr.resolve([])};
_.njh.prototype.Ia=function(a,b){var c=this;this.ha=b;var d=a.Kj().getId();if(d!==this.ha.id)a.AA().callback(null);else{var e=!!this.ha.primarySyncParentId,f=this.ha.alternateLink,h=this.ha.title,k=this.ha.thumbnailLink,m=this.ha.mimeType,p=this.HDb(),t=this.Y3a(),u=this.rK(_.$ih),x=this.rK(_.bjh);b=this.rK("canMoveItemWithinTeamDrive");var E=this.rK(_.ajh)||b,K=p&&this.ha.downloadUrl?ljh(d).toString():void 0,N=(b=this.ha.imageMediaMetadata)&&b.width,P=b&&b.height,R=this.ha.preview&&this.ha.preview.link,
qa=this.ha.fileExtension,ya=this.ha.headRevisionId,ua=a.ha||void 0,Ka=this.ha.teamDriveId,Pa=this.ha.userPermission&&this.ha.userPermission.role,Oa=this.ha.labels&&this.ha.labels.trashed;rjh(this).then(function(Va){c.Aa=Va;Va=sjh(c);a.AA().callback(ne