(()=>{var e={287:(e,t,s)=>{"use strict";s.d(t,{Z:()=>c});var i=s(537),a=s.n(i),n=s(645),r=s.n(n)()(a());r.push([e.id,".event__type-label::first-letter {\n  text-transform: uppercase;\n}\n\n.event__photos-container {\n  overflow-x: auto;\n}","",{version:3,sources:["webpack://./src/views/editor-view.css"],names:[],mappings:"AAAA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;AAClB",sourcesContent:[".event__type-label::first-letter {\n  text-transform: uppercase;\n}\n\n.event__photos-container {\n  overflow-x: auto;\n}"],sourceRoot:""}]);const c=r},766:(e,t,s)=>{"use strict";s.d(t,{Z:()=>c});var i=s(537),a=s.n(i),n=s(645),r=s.n(n)()(a());r.push([e.id,".trip-list {\n  display: block;\n}\n\n.trip-list__item {\n  display: block;\n  margin-bottom: 54px;\n  margin-left: auto;\n}","",{version:3,sources:["webpack://./src/views/list-view.css"],names:[],mappings:"AAAA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,mBAAmB;EACnB,iBAAiB;AACnB",sourcesContent:[".trip-list {\n  display: block;\n}\n\n.trip-list__item {\n  display: block;\n  margin-bottom: 54px;\n  margin-left: auto;\n}"],sourceRoot:""}]);const c=r},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var s="",i=void 0!==t[5];return t[4]&&(s+="@supports (".concat(t[4],") {")),t[2]&&(s+="@media ".concat(t[2]," {")),i&&(s+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),s+=e(t),i&&(s+="}"),t[2]&&(s+="}"),t[4]&&(s+="}"),s})).join("")},t.i=function(e,s,i,a,n){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(i)for(var c=0;c<this.length;c++){var o=this[c][0];null!=o&&(r[o]=!0)}for(var d=0;d<e.length;d++){var f=[].concat(e[d]);i&&r[f[0]]||(void 0!==n&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=n),s&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=s):f[2]=s),a&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=a):f[4]="".concat(a)),t.push(f))}},t}},537:e=>{"use strict";e.exports=function(e){var t=e[1],s=e[3];if(!s)return t;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),n="/*# ".concat(a," */");return[t].concat([n]).join("\n")}return[t].join("\n")}},484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,s="millisecond",i="second",a="minute",n="hour",r="day",c="week",o="month",d="quarter",f="year",l="date",u="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,b={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],s=e%100;return"["+e+(t[(s-20)%10]||t[s]||t[0])+"]"}},m=function(e,t,s){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(s)+e},v={s:m,z:function(e){var t=-e.utcOffset(),s=Math.abs(t),i=Math.floor(s/60),a=s%60;return(t<=0?"+":"-")+m(i,2,"0")+":"+m(a,2,"0")},m:function e(t,s){if(t.date()<s.date())return-e(s,t);var i=12*(s.year()-t.year())+(s.month()-t.month()),a=t.clone().add(i,o),n=s-a<0,r=t.clone().add(i+(n?-1:1),o);return+(-(i+(s-a)/(n?a-r:r-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:o,y:f,w:c,d:r,D:l,h:n,m:a,s:i,ms:s,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},_="en",y={};y[_]=b;var g=function(e){return e instanceof M},$=function e(t,s,i){var a;if(!t)return _;if("string"==typeof t){var n=t.toLowerCase();y[n]&&(a=n),s&&(y[n]=s,a=n);var r=t.split("-");if(!a&&r.length>1)return e(r[0])}else{var c=t.name;y[c]=t,a=c}return!i&&a&&(_=a),a||!i&&_},w=function(e,t){if(g(e))return e.clone();var s="object"==typeof t?t:{};return s.date=e,s.args=arguments,new M(s)},S=v;S.l=$,S.i=g,S.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var M=function(){function b(e){this.$L=$(e.locale,null,!0),this.parse(e)}var m=b.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,s=e.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(p);if(i){var a=i[2]-1||0,n=(i[7]||"0").substring(0,3);return s?new Date(Date.UTC(i[1],a,i[3]||1,i[4]||0,i[5]||0,i[6]||0,n)):new Date(i[1],a,i[3]||1,i[4]||0,i[5]||0,i[6]||0,n)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return S},m.isValid=function(){return!(this.$d.toString()===u)},m.isSame=function(e,t){var s=w(e);return this.startOf(t)<=s&&s<=this.endOf(t)},m.isAfter=function(e,t){return w(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<w(e)},m.$g=function(e,t,s){return S.u(e)?this[t]:this.set(s,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var s=this,d=!!S.u(t)||t,u=S.p(e),p=function(e,t){var i=S.w(s.$u?Date.UTC(s.$y,t,e):new Date(s.$y,t,e),s);return d?i:i.endOf(r)},h=function(e,t){return S.w(s.toDate()[e].apply(s.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(t)),s)},b=this.$W,m=this.$M,v=this.$D,_="set"+(this.$u?"UTC":"");switch(u){case f:return d?p(1,0):p(31,11);case o:return d?p(1,m):p(0,m+1);case c:var y=this.$locale().weekStart||0,g=(b<y?b+7:b)-y;return p(d?v-g:v+(6-g),m);case r:case l:return h(_+"Hours",0);case n:return h(_+"Minutes",1);case a:return h(_+"Seconds",2);case i:return h(_+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,t){var c,d=S.p(e),u="set"+(this.$u?"UTC":""),p=(c={},c[r]=u+"Date",c[l]=u+"Date",c[o]=u+"Month",c[f]=u+"FullYear",c[n]=u+"Hours",c[a]=u+"Minutes",c[i]=u+"Seconds",c[s]=u+"Milliseconds",c)[d],h=d===r?this.$D+(t-this.$W):t;if(d===o||d===f){var b=this.clone().set(l,1);b.$d[p](h),b.init(),this.$d=b.set(l,Math.min(this.$D,b.daysInMonth())).$d}else p&&this.$d[p](h);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[S.p(e)]()},m.add=function(s,d){var l,u=this;s=Number(s);var p=S.p(d),h=function(e){var t=w(u);return S.w(t.date(t.date()+Math.round(e*s)),u)};if(p===o)return this.set(o,this.$M+s);if(p===f)return this.set(f,this.$y+s);if(p===r)return h(1);if(p===c)return h(7);var b=(l={},l[a]=e,l[n]=t,l[i]=1e3,l)[p]||1,m=this.$d.getTime()+s*b;return S.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,s=this.$locale();if(!this.isValid())return s.invalidDate||u;var i=e||"YYYY-MM-DDTHH:mm:ssZ",a=S.z(this),n=this.$H,r=this.$m,c=this.$M,o=s.weekdays,d=s.months,f=function(e,s,a,n){return e&&(e[s]||e(t,i))||a[s].slice(0,n)},l=function(e){return S.s(n%12||12,e,"0")},p=s.meridiem||function(e,t,s){var i=e<12?"AM":"PM";return s?i.toLowerCase():i},b={YY:String(this.$y).slice(-2),YYYY:this.$y,M:c+1,MM:S.s(c+1,2,"0"),MMM:f(s.monthsShort,c,d,3),MMMM:f(d,c),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:f(s.weekdaysMin,this.$W,o,2),ddd:f(s.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(n),HH:S.s(n,2,"0"),h:l(1),hh:l(2),a:p(n,r,!0),A:p(n,r,!1),m:String(r),mm:S.s(r,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:a};return i.replace(h,(function(e,t){return t||b[e]||a.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(s,l,u){var p,h=S.p(l),b=w(s),m=(b.utcOffset()-this.utcOffset())*e,v=this-b,_=S.m(this,b);return _=(p={},p[f]=_/12,p[o]=_,p[d]=_/3,p[c]=(v-m)/6048e5,p[r]=(v-m)/864e5,p[n]=v/t,p[a]=v/e,p[i]=v/1e3,p)[h]||v,u?_:S.a(_)},m.daysInMonth=function(){return this.endOf(o).$D},m.$locale=function(){return y[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var s=this.clone(),i=$(e,t,!0);return i&&(s.$L=i),s},m.clone=function(){return S.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},b}(),T=M.prototype;return w.prototype=T,[["$ms",s],["$s",i],["$m",a],["$H",n],["$W",r],["$M",o],["$y",f],["$D",l]].forEach((function(e){T[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,M,w),e.$i=!0),w},w.locale=$,w.isDayjs=g,w.unix=function(e){return w(1e3*e)},w.en=y[_],w.Ls=y,w.p={},w}()},646:function(e){e.exports=function(){"use strict";var e,t,s=1e3,i=6e4,a=36e5,n=864e5,r=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=31536e6,o=2592e6,d=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,f={years:c,months:o,days:n,hours:a,minutes:i,seconds:s,milliseconds:1,weeks:6048e5},l=function(e){return e instanceof _},u=function(e,t,s){return new _(e,s,t.$l)},p=function(e){return t.p(e)+"s"},h=function(e){return e<0},b=function(e){return h(e)?Math.ceil(e):Math.floor(e)},m=function(e){return Math.abs(e)},v=function(e,t){return e?h(e)?{negative:!0,format:""+m(e)+t}:{negative:!1,format:""+e+t}:{negative:!1,format:""}},_=function(){function h(e,t,s){var i=this;if(this.$d={},this.$l=s,void 0===e&&(this.$ms=0,this.parseFromMilliseconds()),t)return u(e*f[p(t)],this);if("number"==typeof e)return this.$ms=e,this.parseFromMilliseconds(),this;if("object"==typeof e)return Object.keys(e).forEach((function(t){i.$d[p(t)]=e[t]})),this.calMilliseconds(),this;if("string"==typeof e){var a=e.match(d);if(a){var n=a.slice(2).map((function(e){return null!=e?Number(e):0}));return this.$d.years=n[0],this.$d.months=n[1],this.$d.weeks=n[2],this.$d.days=n[3],this.$d.hours=n[4],this.$d.minutes=n[5],this.$d.seconds=n[6],this.calMilliseconds(),this}}return this}var m=h.prototype;return m.calMilliseconds=function(){var e=this;this.$ms=Object.keys(this.$d).reduce((function(t,s){return t+(e.$d[s]||0)*f[s]}),0)},m.parseFromMilliseconds=function(){var e=this.$ms;this.$d.years=b(e/c),e%=c,this.$d.months=b(e/o),e%=o,this.$d.days=b(e/n),e%=n,this.$d.hours=b(e/a),e%=a,this.$d.minutes=b(e/i),e%=i,this.$d.seconds=b(e/s),e%=s,this.$d.milliseconds=e},m.toISOString=function(){var e=v(this.$d.years,"Y"),t=v(this.$d.months,"M"),s=+this.$d.days||0;this.$d.weeks&&(s+=7*this.$d.weeks);var i=v(s,"D"),a=v(this.$d.hours,"H"),n=v(this.$d.minutes,"M"),r=this.$d.seconds||0;this.$d.milliseconds&&(r+=this.$d.milliseconds/1e3);var c=v(r,"S"),o=e.negative||t.negative||i.negative||a.negative||n.negative||c.negative,d=a.format||n.format||c.format?"T":"",f=(o?"-":"")+"P"+e.format+t.format+i.format+d+a.format+n.format+c.format;return"P"===f||"-P"===f?"P0D":f},m.toJSON=function(){return this.toISOString()},m.format=function(e){var s=e||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return s.replace(r,(function(e,t){return t||String(i[e])}))},m.as=function(e){return this.$ms/f[p(e)]},m.get=function(e){var t=this.$ms,s=p(e);return"milliseconds"===s?t%=1e3:t="weeks"===s?b(t/f[s]):this.$d[s],0===t?0:t},m.add=function(e,t,s){var i;return i=t?e*f[p(t)]:l(e)?e.$ms:u(e,this).$ms,u(this.$ms+i*(s?-1:1),this)},m.subtract=function(e,t){return this.add(e,t,!0)},m.locale=function(e){var t=this.clone();return t.$l=e,t},m.clone=function(){return u(this.$ms,this)},m.humanize=function(t){return e().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},m.milliseconds=function(){return this.get("milliseconds")},m.asMilliseconds=function(){return this.as("milliseconds")},m.seconds=function(){return this.get("seconds")},m.asSeconds=function(){return this.as("seconds")},m.minutes=function(){return this.get("minutes")},m.asMinutes=function(){return this.as("minutes")},m.hours=function(){return this.get("hours")},m.asHours=function(){return this.as("hours")},m.days=function(){return this.get("days")},m.asDays=function(){return this.as("days")},m.weeks=function(){return this.get("weeks")},m.asWeeks=function(){return this.as("weeks")},m.months=function(){return this.get("months")},m.asMonths=function(){return this.as("months")},m.years=function(){return this.get("years")},m.asYears=function(){return this.as("years")},h}();return function(s,i,a){e=a,t=a().$utils(),a.duration=function(e,t){var s=a.locale();return u(e,{$l:s},t)},a.isDuration=l;var n=i.prototype.add,r=i.prototype.subtract;i.prototype.add=function(e,t){return l(e)&&(e=e.asMilliseconds()),n.bind(this)(e,t)},i.prototype.subtract=function(e,t){return l(e)&&(e=e.asMilliseconds()),r.bind(this)(e,t)}}}()},379:e=>{"use strict";var t=[];function s(e){for(var s=-1,i=0;i<t.length;i++)if(t[i].identifier===e){s=i;break}return s}function i(e,i){for(var n={},r=[],c=0;c<e.length;c++){var o=e[c],d=i.base?o[0]+i.base:o[0],f=n[d]||0,l="".concat(d," ").concat(f);n[d]=f+1;var u=s(l),p={css:o[1],media:o[2],sourceMap:o[3],supports:o[4],layer:o[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var h=a(p,i);i.byIndex=c,t.splice(c,0,{identifier:l,updater:h,references:1})}r.push(l)}return r}function a(e,t){var s=t.domAPI(t);return s.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;s.update(e=t)}else s.remove()}}e.exports=function(e,a){var n=i(e=e||[],a=a||{});return function(e){e=e||[];for(var r=0;r<n.length;r++){var c=s(n[r]);t[c].references--}for(var o=i(e,a),d=0;d<n.length;d++){var f=s(n[d]);0===t[f].references&&(t[f].updater(),t.splice(f,1))}n=o}}},569:e=>{"use strict";var t={};e.exports=function(e,s){var i=function(e){if(void 0===t[e]){var s=document.querySelector(e);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(e){s=null}t[e]=s}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(s)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,s)=>{"use strict";e.exports=function(e){var t=s.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(s){!function(e,t,s){var i="";s.supports&&(i+="@supports (".concat(s.supports,") {")),s.media&&(i+="@media ".concat(s.media," {"));var a=void 0!==s.layer;a&&(i+="@layer".concat(s.layer.length>0?" ".concat(s.layer):""," {")),i+=s.css,a&&(i+="}"),s.media&&(i+="}"),s.supports&&(i+="}");var n=s.sourceMap;n&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,s)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function s(i){var a=t[i];if(void 0!==a)return a.exports;var n=t[i]={id:i,exports:{}};return e[i].call(n.exports,n,n.exports,s),n.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.nc=void 0,(()=>{"use strict";class e extends HTMLElement{constructor(){super(),this.state=Object.create(null)}setState(e){Object.assign(this.state,e),this.render()}render(){this.innerHTML=this.createHtml()}createHtml(){return""}dispatch(e,t=null){const s=new CustomEvent(e,{detail:t,bubbles:!0,cancelable:!0});return this.dispatchEvent(s)}}const t=e;var i=s(484),a=s.n(i),n=s(646),r=s.n(n);function c(e,...t){return e.reduce(((e,s,i)=>{const a=t[i-1];return void 0===a?e+s:Array.isArray(a)?e+a.join("")+s:e+a+s}))}function o(e){return a()(e).format("HH:mm")}a().extend(r());customElements.define("brief-view",class extends t{constructor(){super(),this.classList.add("trip-info")}createHtml(){return c`
    <section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">Amsterdam — Chamonix — Geneva</h1>

        <p class="trip-info__dates">Mar 18&nbsp;—&nbsp;20</p>
      </div>

      <p class="trip-info__cost">
        Total: €&nbsp;<span class="trip-info__cost-value">1230</span>
      </p>
    </section>
    `}});customElements.define("filter-view",class extends t{constructor(){super()}createHtml(){return c`
        ${this.state.items.map((e=>c`
          <div class="trip-filters__filter">
            <input
              id="filter-${e.value}"
              class="trip-filters__filter-input  visually-hidden"
              type="radio"
              name="trip-filter"

              value="${e.value}"
              ${e.isSelected?"checked":""}
              ${e.isDisabled?"disabled":""}>
            <label
              class="trip-filters__filter-label"

              for="filter-${e.value}">
              ${e.value}
            </label>
          </div>
        `))}
    `}});customElements.define("add-button-view",class extends t{createHtml(){return c`
    <button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button" disabled="">New event</button>
    `}});customElements.define("sort-view",class extends t{constructor(){super(),this.classList.add("trip-sort")}createHtml(){return c`
          ${this.state.items.map((e=>c`
          <div class="trip-sort__item  trip-sort__item--day">
          <input
            id="sort-${e.value}"
            class="trip-sort__input  visually-hidden"
            type="radio"
            name="trip-sort"
            value="sort-${e.value}"
            ${e.isSelected?"checked":""}
            ${e.isDisabled?"disabled":""}
            >
          <label
            class="trip-sort__btn"
            for="sort-${e.value}">
            ${e.value}
          </label>
        </div>
          `))}
    `}});class d extends t{constructor(){super(),this.addEventListener("click",this.onClick)}createHtml(){return c`
    <div class="event">
    ${this.createStartDateHtml()}
    ${this.createTypeIconHtml()}
    ${this.createDestinationHtml()}
    ${this.createScheduleHtml()}
    ${this.createPriceHtml()}
    ${this.createOfferListHtml()}
    ${this.createFavoriteButtonHtml()}
    ${this.createOpenButtonHtml()}
    </div>
    `}createStartDateHtml(){const{dateFrom:e}=this.state;return c`
    <time class="event__date" datetime="${e}">${t=e,a()(t).format("MMM D")}</time>
    `;var t}createTypeIconHtml(){const{types:e}=this.state;return c`
      <div class="event__type">
        <img
          class="event__type-icon"
          width="42"
          height="42"
          src="img/icons/${e.find((e=>e.isSelected)).value}.png"
          alt="Event type icon">
      </div>
    `}createDestinationHtml(){const{types:e,destinations:t}=this.state,s=e.find((e=>e.isSelected)),i=t.find((e=>e.isSelected));return c`
    <h3 class="event__title">${s.value} ${i.name}</h3>
    `}createScheduleHtml(){const{dateFrom:e,dateTo:t}=this.state;return c`
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="${e}">${o(e)}</time>
      —
        <time class="event__end-time" datetime="${t}">${o(t)}</time>
      </p>
      <p class="event__duration">${function(e,t){const s=a()(t).diff(e),i=a().duration(s);return i.days()?i.format("DD[d] HH[h] mm[m]"):i.hours()?i.format("HH[h] mm[m]"):i.format("mm[m]")}(e,t)}</p>
    </div>
    `}createPriceHtml(){const{basePrice:e}=this.state;return c`
    <p class="event__price">
      €&nbsp;<span class="event__price-value">${e}</span>
    </p>
    `}createOfferListHtml(){const{offers:e}=this.state,t=e.filter((e=>e.isSelected));return t.length?c`
    <ul class="event__selected-offers">
    ${t.map((e=>c`
      <li class="event__offer">
      <span class="event__offer-title">${e.title}</span>
        +€&nbsp;
      <span class="event__offer-price"${e.price}</span>
    </li>
      `))}
    </ul>
    `:""}createFavoriteButtonHtml(){const{isFavorite:e}=this.state;return c`
    <button class="event__favorite-btn${e?" event__favorite-btn--active":""}" type="button">
    <span class="visually-hidden">Add to favorite</span>
    <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
      <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
    </svg>
  </button>
    `}createOpenButtonHtml(){return c`
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
    `}onClick(e){e.target.closest(".event__rollup-btn")&&this.dispatch("open")}}customElements.define("card-view",d);const f=d;var l=s(379),u=s.n(l),p=s(795),h=s.n(p),b=s(569),m=s.n(b),v=s(565),_=s.n(v),y=s(216),g=s.n(y),$=s(589),w=s.n($),S=s(287),M={};M.styleTagTransform=w(),M.setAttributes=_(),M.insert=m().bind(null,"head"),M.domAPI=h(),M.insertStyleElement=g(),u()(S.Z,M),S.Z&&S.Z.locals&&S.Z.locals;class T extends t{constructor(){super(),this.addEventListener("click",this.onClick.bind(this))}connectedCallback(){document.addEventListener("keydown",this)}disconnectedCallback(){document.removeEventListener("keydown",this)}createHtml(){return c`
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        ${this.createTypeFieldHtml()}
        ${this.createDestinationFieldHtml()}
        ${this.createScheduleFieldHtml()}
        ${this.createPriceFieldHtml()}
        ${this.createSubmitButtonHtml()}
        ${this.createResetButtonHtml()}
        ${this.createCloseButtonHtml()}
      </header>
      <section class="event__details">
      ${this.createOfferListFieldHtml()}
      ${this.createDestinationHtml()}
      </section>
    </form>
    `}createTypeFieldHtml(){const{types:e}=this.state;return c`
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon"
            width="17"
            height="17"
            src="img/icons/${e.find((e=>e.isSelected)).value}.png"
            alt="Event type icon">
        </label>
      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

    <div class="event__type-list">
      <fieldset class="event__type-group">
        <legend class="visually-hidden">Event type</legend>
        ${e.map((e=>c`
          <div class="event__type-item">
            <input
              id="event-type-${e.value}-1"
              class="event__type-input  visually-hidden"
              type="radio"
              name="event-type"
              value="${e.value}"
              ${e.isSelected?"checked":""}>
            <label
              class="event__type-label  event__type-label--${e.value}"
              for="event-type-${e.value}-1">
              ${e.value}
            </label>
          </div>
        `))}
      </fieldset>
    </div>
  </div>
    `}createDestinationFieldHtml(){const{types:e,destinations:t}=this.state;return c`
    <div class="event__field-group  event__field-group--destination">
      <label class="event__label  event__type-output" for="event-destination-1">
      ${e.find((e=>e.isSelected)).value}
      </label>

      <input
        class="event__input  event__input--destination"
        id="event-destination-1"
        type="text"
        name="event-destination"
        value="${t.find((e=>e.isSelected))?.name}"
        list="destination-list-1">

      <datalist id="destination-list-1">
      ${t.map((e=>c`
      <option value="${e.name}"></option>
      `))}
      </datalist>
    </div>
    `}createScheduleFieldHtml(){const{dateFrom:e,dateTo:t}=this.state;return c`
    <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-1">From</label>
      <input
        class="event__input  event__input--time"
        id="event-start-time-1"
        type="text"
        name="event-start-time"
        value="${e}">
      —
      <label class="visually-hidden" for="event-end-time-1">To</label>
      <input
        class="event__input  event__input--time"
        id="event-end-time-1"
        type="text"
        name="event-end-time"
        value="${t}">
    </div>
    `}createPriceFieldHtml(){const{basePrice:e}=this.state;return c`
      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          €
        </label>
        <input
          class="event__input  event__input--price"
          id="event-price-1"
          type="text"
          name="event-price"
          value="${e}">
      </div>
    `}createSubmitButtonHtml(){return c`
      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    `}createResetButtonHtml(){return c`
      <button class="event__reset-btn" type="reset">Cancel</button>
    `}createCloseButtonHtml(){return c`
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Close event</span>
      </button>
    `}createOfferListFieldHtml(){const{offers:e}=this.state;return e.length?c`
    <section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>

      <div class="event__available-offers">
        ${e.map((e=>c`
            <div class="event__offer-selector">
              <input
                class="event__offer-checkbox  visually-hidden"
                id="${e.id}"
                type="checkbox"
                name="event-offer"
                value="${e.id}"
                ${e.isSelected?"checked":""}>
              <label class="event__offer-label" for="${e.id}">
                <span class="event__offer-title">${e.title}</span>
                +€&nbsp;
                <span class="event__offer-price">${e.price}</span>
              </label>
            </div>
        `))}
      </div>
  </section>
    `:""}createDestinationHtml(){const{destinations:e}=this.state,t=e.find((e=>e.isSelected));return t?c`
      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">${t.description}</p>

        <div class="event__photos-container">
          <div class="event__photos-tape">
            ${t.pictures.map((e=>c`
            <img class="event__photo" src="${e.src}" alt="${e.description}">
            `))}
        </div>
      </div>
    </section>
    `:""}onClick(e){e.target.closest(".event__rollup-btn")&&this.dispatch("close")}handleEvent(e){e.key?.startsWith("Esc")&&this.dispatch("close")}}customElements.define("editor-view",T);const H=T;var k=s(766),D={};D.styleTagTransform=w(),D.setAttributes=_(),D.insert=m().bind(null,"head"),D.domAPI=h(),D.insertStyleElement=g(),u()(k.Z,D),k.Z&&k.Z.locals&&k.Z.locals;customElements.define("list-view",class extends t{constructor(){super(),this.classList.add("trip-list"),this.setAttribute("role","list")}render(){const e=this.state.items.map((e=>{const t=e.isEditable?new H:new f;return t.classList.add("trip-list__item"),t.setAttribute("role","listitem"),t.setState(e),t}));this.replaceChildren(...e)}});const A=class{},Z=JSON.parse('[{"id":"5167cb5f-0602-4505-9884-e4b2278498ae","base_price":5153,"date_from":"2023-08-17T06:38:11.992Z","date_to":"2023-08-18T21:50:11.992Z","destination":"79281bc7-a281-42f2-926b-0e095ca5b487","is_favorite":true,"offers":[],"type":"flight"},{"id":"655f85c7-55cc-4351-9961-eacd904a3f3f","base_price":1713,"date_from":"2023-08-20T10:53:11.992Z","date_to":"2023-08-22T10:49:11.992Z","destination":"50fde50f-d4ac-40f6-b19c-1b416363ed9f","is_favorite":true,"offers":[],"type":"sightseeing"},{"id":"987d998a-5e17-4fcc-9563-6cab54d987cb","base_price":1475,"date_from":"2023-08-23T05:52:11.992Z","date_to":"2023-08-24T10:29:11.992Z","destination":"91fdb7e2-b437-4792-bdd7-e9fc6085f139","is_favorite":true,"offers":["22dbe859-625d-4141-8981-e439f20672a2","d3f29fa0-526e-4c81-84af-7c34914c5b03","0e803427-97fb-4928-bd9b-1fab7d8e291d"],"type":"train"},{"id":"f4e04ac7-9f72-4062-93f9-b6ea1294b2fe","base_price":1229,"date_from":"2023-08-25T14:58:11.992Z","date_to":"2023-08-27T07:28:11.992Z","destination":"50fde50f-d4ac-40f6-b19c-1b416363ed9f","is_favorite":true,"offers":[],"type":"sightseeing"},{"id":"d924d7ed-3da5-4c06-92c7-4964b0843269","base_price":5780,"date_from":"2023-08-28T13:55:11.992Z","date_to":"2023-08-29T06:46:11.992Z","destination":"91fdb7e2-b437-4792-bdd7-e9fc6085f139","is_favorite":false,"offers":["172992f2-0445-4d29-b332-139f209fb409","645c76c7-0c33-4311-9209-4fbfcad0b572","6c08e300-e446-46ff-b630-096e95467f5e","da6e19e5-8181-4072-ab4b-b157e596c1f4"],"type":"flight"},{"id":"f9da9556-911a-4d03-9144-a723428ef41c","base_price":31,"date_from":"2023-08-30T09:47:11.992Z","date_to":"2023-08-31T23:27:11.992Z","destination":"b97c338b-6601-4188-b5d5-eaa51ca55c1b","is_favorite":true,"offers":[],"type":"check-in"},{"id":"fc310579-7a22-443e-bf5a-3c62ee65ee5c","base_price":4527,"date_from":"2023-09-01T22:59:11.992Z","date_to":"2023-09-02T07:07:11.992Z","destination":"b97c338b-6601-4188-b5d5-eaa51ca55c1b","is_favorite":false,"offers":["f1ce2d47-a6a9-47be-837c-42bda350cf95","84ad84d2-23b3-46f8-8666-4997c58be0bb"],"type":"check-in"},{"id":"042c95bb-8d27-41da-91bf-3a76f0efbc51","base_price":5869,"date_from":"2023-09-03T04:55:11.992Z","date_to":"2023-09-05T00:15:11.992Z","destination":"e4094813-07b6-4ea1-851a-7ab4ba10dc1f","is_favorite":true,"offers":["22dbe859-625d-4141-8981-e439f20672a2","d3f29fa0-526e-4c81-84af-7c34914c5b03","0e803427-97fb-4928-bd9b-1fab7d8e291d"],"type":"train"},{"id":"9404f378-a408-41c7-bc71-736c79e5dbd4","base_price":8470,"date_from":"2023-09-06T08:10:11.992Z","date_to":"2023-09-07T13:25:11.992Z","destination":"91fdb7e2-b437-4792-bdd7-e9fc6085f139","is_favorite":false,"offers":["9c6315a3-0fbf-4f23-bb09-70c5e1aed242","4ba9cc22-0dbf-46fc-ab3e-9936adbe8ac1","af828667-1a7d-464f-b5d2-f4b16f265eb3","c9af8e85-9999-410e-b5c2-63dc00c6cb26","8bbd05b2-790e-4d9c-ae7f-f5e6b4536f7c"],"type":"taxi"},{"id":"6e367d31-8ff3-48a8-8b96-34858d89926d","base_price":7936,"date_from":"2023-09-08T14:53:11.992Z","date_to":"2023-09-10T12:38:11.992Z","destination":"91fdb7e2-b437-4792-bdd7-e9fc6085f139","is_favorite":true,"offers":["f1ce2d47-a6a9-47be-837c-42bda350cf95","84ad84d2-23b3-46f8-8666-4997c58be0bb"],"type":"check-in"},{"id":"1b2bdd4e-eebd-45a2-8f19-242191349a57","base_price":4248,"date_from":"2023-09-12T10:51:11.992Z","date_to":"2023-09-14T06:21:11.992Z","destination":"b97c338b-6601-4188-b5d5-eaa51ca55c1b","is_favorite":false,"offers":[],"type":"sightseeing"},{"id":"c03ee7a2-8480-4a5e-9103-0372561de5f3","base_price":1482,"date_from":"2023-09-14T21:16:11.992Z","date_to":"2023-09-15T20:22:11.992Z","destination":"b97c338b-6601-4188-b5d5-eaa51ca55c1b","is_favorite":false,"offers":["fb5864b8-aa19-44c2-b109-562409917c23","f7f77985-0efa-43c1-923b-f8f5a0403a28"],"type":"drive"},{"id":"03adc034-3acc-4dd7-bea9-cf367fa901bc","base_price":3732,"date_from":"2023-09-17T13:20:11.992Z","date_to":"2023-09-18T23:11:11.992Z","destination":"91fdb7e2-b437-4792-bdd7-e9fc6085f139","is_favorite":true,"offers":["0e803427-97fb-4928-bd9b-1fab7d8e291d"],"type":"train"},{"id":"37640f05-5744-4811-98f5-2a1996f5a5cb","base_price":3252,"date_from":"2023-09-20T03:50:11.992Z","date_to":"2023-09-21T17:53:11.992Z","destination":"91fdb7e2-b437-4792-bdd7-e9fc6085f139","is_favorite":false,"offers":[],"type":"sightseeing"},{"id":"50814c9e-87c9-4430-95fd-4b5a8a6c4c8e","base_price":8044,"date_from":"2023-09-22T18:12:11.992Z","date_to":"2023-09-23T13:14:11.992Z","destination":"77de8d78-cfcd-4033-933f-3f02e34a7d57","is_favorite":true,"offers":["62e70a5e-706b-4cc5-a2f4-7a19eaf1bb5b","5e0be698-f110-4e76-9403-c972cdf52d20"],"type":"bus"},{"id":"64410de1-3f0d-4238-84b5-8a4cd3538e05","base_price":3738,"date_from":"2023-09-24T10:33:11.992Z","date_to":"2023-09-25T21:09:11.992Z","destination":"02844ed5-9a29-44a4-85f1-f017d92efa2d","is_favorite":false,"offers":["edb81a2f-227a-4800-9bb7-478d9e87119d","62e70a5e-706b-4cc5-a2f4-7a19eaf1bb5b","5e0be698-f110-4e76-9403-c972cdf52d20"],"type":"bus"},{"id":"c5d39b51-3a8f-4553-8a64-ae67e4a77310","base_price":4072,"date_from":"2023-09-26T15:12:11.992Z","date_to":"2023-09-27T09:09:11.992Z","destination":"77de8d78-cfcd-4033-933f-3f02e34a7d57","is_favorite":false,"offers":["0e803427-97fb-4928-bd9b-1fab7d8e291d"],"type":"train"},{"id":"1f085c36-ca9c-4354-9ad8-957279e9f040","base_price":1471,"date_from":"2023-09-28T18:26:11.992Z","date_to":"2023-09-29T11:12:11.992Z","destination":"77de8d78-cfcd-4033-933f-3f02e34a7d57","is_favorite":false,"offers":["af828667-1a7d-464f-b5d2-f4b16f265eb3","c9af8e85-9999-410e-b5c2-63dc00c6cb26","8bbd05b2-790e-4d9c-ae7f-f5e6b4536f7c"],"type":"taxi"},{"id":"ae5c3f70-a0f4-4706-badb-22aaf09a2e48","base_price":146,"date_from":"2023-09-30T19:24:11.992Z","date_to":"2023-10-01T05:42:11.992Z","destination":"b97c338b-6601-4188-b5d5-eaa51ca55c1b","is_favorite":true,"offers":[],"type":"train"},{"id":"b5211773-0544-476d-8039-18c23c8fc026","base_price":869,"date_from":"2023-10-01T21:00:11.992Z","date_to":"2023-10-02T12:57:11.992Z","destination":"91fdb7e2-b437-4792-bdd7-e9fc6085f139","is_favorite":true,"offers":["80f1479c-bd5f-4b4a-a2b7-6a9c61241cd6","2d9b3c87-7527-4541-a88e-0eb0623f2f8c","2b66c697-c471-4fdd-b9ea-34584d960ea1","f1ce2d47-a6a9-47be-837c-42bda350cf95","84ad84d2-23b3-46f8-8666-4997c58be0bb"],"type":"check-in"},{"id":"06ea1c37-fda7-4e84-bdd2-75b1bc252b59","base_price":7606,"date_from":"2023-10-03T16:13:11.992Z","date_to":"2023-10-04T09:12:11.992Z","destination":"212f0fda-95e3-4fd2-91b2-daa672c15011","is_favorite":true,"offers":["fb5864b8-aa19-44c2-b109-562409917c23","f7f77985-0efa-43c1-923b-f8f5a0403a28"],"type":"drive"},{"id":"3a4c9362-688c-4705-af0e-bc23c3330c7e","base_price":7670,"date_from":"2023-10-06T04:16:11.992Z","date_to":"2023-10-07T22:15:11.992Z","destination":"dbb2dda1-d9a6-488a-b9a7-5a4de80ed749","is_favorite":false,"offers":["9c6315a3-0fbf-4f23-bb09-70c5e1aed242","4ba9cc22-0dbf-46fc-ab3e-9936adbe8ac1","af828667-1a7d-464f-b5d2-f4b16f265eb3","c9af8e85-9999-410e-b5c2-63dc00c6cb26","8bbd05b2-790e-4d9c-ae7f-f5e6b4536f7c"],"type":"taxi"},{"id":"2d53fc9f-d2c6-438a-93e5-38b3ebd614a6","base_price":6149,"date_from":"2023-10-09T15:37:11.992Z","date_to":"2023-10-11T13:16:11.992Z","destination":"02844ed5-9a29-44a4-85f1-f017d92efa2d","is_favorite":true,"offers":[],"type":"bus"},{"id":"d082ce61-4fcb-4361-8639-26249ed89cd2","base_price":6713,"date_from":"2023-10-12T11:53:11.992Z","date_to":"2023-10-13T14:30:11.992Z","destination":"91fdb7e2-b437-4792-bdd7-e9fc6085f139","is_favorite":true,"offers":["62e70a5e-706b-4cc5-a2f4-7a19eaf1bb5b","5e0be698-f110-4e76-9403-c972cdf52d20"],"type":"bus"},{"id":"3c9bc0a2-0e94-4858-8c9f-4063fcbca777","base_price":6861,"date_from":"2023-10-14T21:14:11.992Z","date_to":"2023-10-15T14:18:11.992Z","destination":"79281bc7-a281-42f2-926b-0e095ca5b487","is_favorite":false,"offers":[],"type":"sightseeing"}]'),x=JSON.parse('[{"type":"taxi","offers":[{"id":"9c6315a3-0fbf-4f23-bb09-70c5e1aed242","title":"Upgrade to a business class","price":117},{"id":"4ba9cc22-0dbf-46fc-ab3e-9936adbe8ac1","title":"Choose the radio station","price":170},{"id":"af828667-1a7d-464f-b5d2-f4b16f265eb3","title":"Choose temperature","price":157},{"id":"c9af8e85-9999-410e-b5c2-63dc00c6cb26","title":"Drive quickly, I\'m in a hurry","price":179},{"id":"8bbd05b2-790e-4d9c-ae7f-f5e6b4536f7c","title":"Drive slowly","price":126}]},{"type":"bus","offers":[{"id":"edb81a2f-227a-4800-9bb7-478d9e87119d","title":"Infotainment system","price":136},{"id":"62e70a5e-706b-4cc5-a2f4-7a19eaf1bb5b","title":"Order meal","price":92},{"id":"5e0be698-f110-4e76-9403-c972cdf52d20","title":"Choose seats","price":195}]},{"type":"train","offers":[{"id":"22dbe859-625d-4141-8981-e439f20672a2","title":"Book a taxi at the arrival point","price":103},{"id":"d3f29fa0-526e-4c81-84af-7c34914c5b03","title":"Order a breakfast","price":172},{"id":"0e803427-97fb-4928-bd9b-1fab7d8e291d","title":"Wake up at a certain time","price":69}]},{"type":"flight","offers":[{"id":"3eaecdbd-246a-4515-902d-e69929983163","title":"Choose meal","price":30},{"id":"329a583b-3563-42fe-ac42-e0582b24f8e3","title":"Choose seats","price":93},{"id":"172992f2-0445-4d29-b332-139f209fb409","title":"Upgrade to comfort class","price":171},{"id":"645c76c7-0c33-4311-9209-4fbfcad0b572","title":"Upgrade to business class","price":187},{"id":"6c08e300-e446-46ff-b630-096e95467f5e","title":"Add luggage","price":135},{"id":"da6e19e5-8181-4072-ab4b-b157e596c1f4","title":"Business lounge","price":83}]},{"type":"check-in","offers":[{"id":"80f1479c-bd5f-4b4a-a2b7-6a9c61241cd6","title":"Choose the time of check-in","price":90},{"id":"2d9b3c87-7527-4541-a88e-0eb0623f2f8c","title":"Choose the time of check-out","price":154},{"id":"2b66c697-c471-4fdd-b9ea-34584d960ea1","title":"Add breakfast","price":111},{"id":"f1ce2d47-a6a9-47be-837c-42bda350cf95","title":"Laundry","price":54},{"id":"84ad84d2-23b3-46f8-8666-4997c58be0bb","title":"Order a meal from the restaurant","price":72}]},{"type":"sightseeing","offers":[]},{"type":"ship","offers":[{"id":"dcd86cb0-96f3-47e8-a0e8-c2fbdee6f78d","title":"Choose meal","price":90},{"id":"e5189a87-34ab-41d6-b0eb-ef8c29428735","title":"Choose seats","price":109},{"id":"7e1abb57-501a-440e-9226-0efe995b6f1d","title":"Upgrade to comfort class","price":106},{"id":"8bb2b44c-3434-4ebd-a182-67951ed811fc","title":"Upgrade to business class","price":158},{"id":"d548bdb6-524d-4d6e-a09f-242cfb997e88","title":"Add luggage","price":100},{"id":"2c1ddbce-f4f2-4d77-8fbe-ada55c18229b","title":"Business lounge","price":103}]},{"type":"drive","offers":[{"id":"fb5864b8-aa19-44c2-b109-562409917c23","title":"With automatic transmission","price":59},{"id":"f7f77985-0efa-43c1-923b-f8f5a0403a28","title":"With air conditioning","price":67}]},{"type":"restaurant","offers":[{"id":"bac22e84-75e2-4c92-9dfa-7f640cdbd299","title":"Choose live music","price":150},{"id":"01477853-3794-430c-a2ce-ff3b0e358089","title":"Choose VIP area","price":124}]}]'),C=JSON.parse('[{"id":"02844ed5-9a29-44a4-85f1-f017d92efa2d","description":"Helsinki - in a middle of Europe","name":"Helsinki","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/14.jpg","description":"Helsinki with a beautiful old town"},{"src":"https://21.objects.pages.academy/static/destinations/15.jpg","description":"Helsinki a true asian pearl"},{"src":"https://21.objects.pages.academy/static/destinations/14.jpg","description":"Helsinki famous for its crowded street markets with the best street food in Asia"}]},{"id":"77de8d78-cfcd-4033-933f-3f02e34a7d57","description":"","name":"Frankfurt","pictures":[]},{"id":"91fdb7e2-b437-4792-bdd7-e9fc6085f139","description":"Kioto - with crowded streets","name":"Kioto","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/8.jpg","description":"Kioto a true asian pearl"},{"src":"https://21.objects.pages.academy/static/destinations/7.jpg","description":"Kioto is a beautiful city"},{"src":"https://21.objects.pages.academy/static/destinations/3.jpg","description":"Kioto with crowded streets"},{"src":"https://21.objects.pages.academy/static/destinations/1.jpg","description":"Kioto for those who value comfort and coziness"},{"src":"https://21.objects.pages.academy/static/destinations/4.jpg","description":"Kioto middle-eastern paradise"}]},{"id":"212f0fda-95e3-4fd2-91b2-daa672c15011","description":"Nagasaki - with an embankment of a mighty river as a centre of attraction","name":"Nagasaki","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/12.jpg","description":"Nagasaki for those who value comfort and coziness"}]},{"id":"e4094813-07b6-4ea1-851a-7ab4ba10dc1f","description":"","name":"Berlin","pictures":[]},{"id":"b97c338b-6601-4188-b5d5-eaa51ca55c1b","description":"Kopenhagen - is a beautiful city","name":"Kopenhagen","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/20.jpg","description":"Kopenhagen a perfect place to stay with a family"},{"src":"https://21.objects.pages.academy/static/destinations/11.jpg","description":"Kopenhagen full of of cozy canteens where you can try the best coffee in the Middle East"}]},{"id":"dbb2dda1-d9a6-488a-b9a7-5a4de80ed749","description":"","name":"Vien","pictures":[]},{"id":"50fde50f-d4ac-40f6-b19c-1b416363ed9f","description":"Madrid - with an embankment of a mighty river as a centre of attraction","name":"Madrid","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/1.jpg","description":"Madrid with a beautiful old town"},{"src":"https://21.objects.pages.academy/static/destinations/7.jpg","description":"Madrid middle-eastern paradise"}]},{"id":"799af45d-3d77-43df-ba67-da8dce2fef63","description":"Munich - full of of cozy canteens where you can try the best coffee in the Middle East","name":"Munich","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/18.jpg","description":"Munich middle-eastern paradise"},{"src":"https://21.objects.pages.academy/static/destinations/16.jpg","description":"Munich famous for its crowded street markets with the best street food in Asia"}]},{"id":"79281bc7-a281-42f2-926b-0e095ca5b487","description":"Hiroshima - in a middle of Europe","name":"Hiroshima","pictures":[{"src":"https://21.objects.pages.academy/static/destinations/5.jpg","description":"Hiroshima middle-eastern paradise"},{"src":"https://21.objects.pages.academy/static/destinations/5.jpg","description":"Hiroshima middle-eastern paradise"},{"src":"https://21.objects.pages.academy/static/destinations/16.jpg","description":"Hiroshima for those who value comfort and coziness"},{"src":"https://21.objects.pages.academy/static/destinations/1.jpg","description":"Hiroshima middle-eastern paradise"},{"src":"https://21.objects.pages.academy/static/destinations/2.jpg","description":"Hiroshima with an embankment of a mighty river as a centre of attraction"}]}]'),j=class extends A{constructor(e){super(),this.id=e.id,this.basePrice=e.base_price,this.dateFrom=e.date_from,this.dateTo=e.date_to,this.destinationId=e.destination,this.isFavorite=e.is_favorite,this.offerIds=structuredClone(e.offers),this.type=e.type}};class E extends EventTarget{constructor(){super(),window.addEventListener("popstate",(()=>{this.dispatchEvent(new Event("change"))}))}setParams(e){const t=this.getUrl();t.search="",Object.keys(e).forEach((s=>{t.searchParams.set(s,e[s])})),window.history.pushState(null,"",t.href),this.dispatchEvent(new Event("change"))}getParams(){const e=this.getUrl();return Object.fromEntries(e.searchParams)}getUrl(){return new URL(window.location.href)}}const O=new E,L=class{constructor(e,t){this.view=e,this.model=t,this.navigation=O,this.navigation.addEventListener("change",this.onNavigationChange.bind(this)),window.queueMicrotask((()=>this.updateView()))}updateView(){}onNavigationChange(){return this.updateView()}},F=class extends L{constructor(...e){super(...e)}updateView(){this.view.render()}},P=class extends L{constructor(...e){super(...e)}updateView(){const e=["everything","future","past","present"].map((e=>({value:e,isSelected:"everything"===e,isDisabled:"future"===e})));this.view.setState({items:e})}},B=class extends L{constructor(...e){super(...e)}updateView(){this.view.render()}},Y=class extends L{constructor(...e){super(...e)}updateView(){const e=["day","event","offers","price","time"].map((e=>({value:e,isSelected:"day"===e,isDisabled:"event"===e||"offers"===e})));this.view.setState({items:e})}},I=class extends L{constructor(...e){super(...e),this.view.addEventListener("open",this.onViewOpen.bind(this)),this.view.addEventListener("close",this.onViewClose.bind(this))}onViewOpen(e){const t=this.navigation.getParams();t.edit=e.target.state.id,this.navigation.setParams(t)}onViewClose(){const e=this.navigation.getParams();delete e.edit,this.navigation.setParams(e)}updateView(){const e=this.navigation.getParams(),t=this.model.getPoints(),s=this.model.getOfferGroups(),i=this.model.getDestinations(),a=t.map((t=>{const{offers:a}=s.find((e=>e.type===t.type));return{id:t.id,types:s.map((e=>({value:e.type,isSelected:e.type===t.type}))),destinations:i.map((e=>({...e,isSelected:e.id===t.destinationId}))),dateFrom:t.dateFrom,dateTo:t.dateTo,basePrice:t.basePrice,offers:a.map((e=>({...e,isSelected:t.offerIds?.includes(e.id)}))),isFavorite:t.isFavorite,isEditable:e.edit===t.id}}));this.view.setState({items:a})}},N=new class extends A{constructor(){super(),this.points=[],this.destinations=[],this.offerGroups=[]}async ready(){this.destinations=C,console.log(C),this.offerGroups=x,this.points=Z}getPoints(){return this.points.map((e=>new j(e)))}getOfferGroups(){return structuredClone(this.offerGroups)}getDestinations(){return structuredClone(this.destinations)}};N.ready().then((()=>{new F(document.querySelector("brief-view"),N),new P(document.querySelector("filter-view"),N),new B(document.querySelector("add-button-view"),N),new Y(document.querySelector("sort-view"),N),new I(document.querySelector("list-view"),N)}));const U=document.querySelector("brief-view"),V=document.querySelector("filter-view"),W=document.querySelector("add-button-view"),q=document.querySelector("sort-view");document.querySelector("list-view").render(),q.render(),W.render(),U.render(),V.render()})()})();
//# sourceMappingURL=bundle.16fc650f8211094039ec.js.map