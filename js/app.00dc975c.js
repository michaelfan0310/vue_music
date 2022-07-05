(function(){"use strict";var e={436:function(e,t,r){var a=r(144),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-2 col-xs-offset-2"},[r("div",[r("router-link",{staticClass:"list-group",attrs:{"active-class":"active",to:"/Learning"}},[e._v("Learning")]),r("router-link",{staticClass:"list-group",attrs:{"active-class":"active",to:"/Entertainment"}},[e._v("Entertainment")])],1),r("HeaderItem")],1),r("div",{staticClass:"col-xs-6"},[r("div",{staticClass:"panel"},[r("div",{staticClass:"panel-body"},[r("router-view")],1)])])]),r("MusicItem")],1)},i=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ul",{staticClass:"list"},e._l(e.collections,(function(t,a){return r("li",{key:a},[r("span",[e._v(e._s(t))])])})),0),r("div",{staticClass:"box3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.newCollect,expression:"newCollect"}],attrs:{type:"text"},domProps:{value:e.newCollect},on:{input:function(t){t.target.composing||(e.newCollect=t.target.value)}}}),r("button",{on:{click:e.addNew}},[e._v("add new")])]),r("div",{staticClass:"container"},[r("category-item",{attrs:{title:"Symphony"}},[r("iframe",{attrs:{src:"https://www.youtube.com/embed/qVA1ieo9Js4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; \n            gyroscope; picture-in-picture",allowfullscreen:""}})]),r("category-item",{attrs:{title:"Piano"}},[r("iframe",{attrs:{src:"https://www.youtube.com/embed/XMJbOC_2DME",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; \n            picture-in-picture",allowfullscreen:""}})]),r("category-item",{attrs:{title:"Movie"}},[r("iframe",{attrs:{src:"https://www.youtube.com/embed/0iKyAK6BVuM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; \n            gyroscope; picture-in-picture",allowfullscreen:""}})]),r("category-item",{attrs:{title:"Singing"}},[r("iframe",{attrs:{src:"https://www.youtube.com/embed/cKWreZDK9es",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; \n            gyroscope; picture-in-picture",allowfullscreen:""}})]),r("category-item",{attrs:{title:"BackGround"}},[r("iframe",{attrs:{src:"https://www.youtube.com/embed/hlWiI4xVXKY",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; \n            gyroscope; picture-in-picture",allowfullscreen:""}})]),r("category-item",{attrs:{title:"Study"}},[r("iframe",{attrs:{src:"https://www.youtube.com/embed/9F880xaDVEY",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; \n            encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),r("category-item",{attrs:{title:"Special"}},[r("iframe",{attrs:{src:"https://www.youtube.com/embed/FS6o3qFimsc",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; \n        encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),r("category-item",{attrs:{title:"Piano2"}},[r("iframe",{attrs:{src:"https://www.youtube.com/embed/MuxB2zACza0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; \n        encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),r("category-item",{attrs:{title:"Sonata"}},[r("ul",{staticClass:"sonata"},e._l(e.sonatas,(function(t,a){return r("li",{key:a},[r("span",[e._v(e._s(t)+" ")])])})),0)])],1)])},n=[],c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"categoryItem card"},[r("h3",[e._v(e._s(e.title))]),e._t("default",(function(){return[e._v("我是一些默认值，当使用者没有传递具体结构时，我会出现")]}))],2)},s=[],u={name:"categoryItem",props:["title"]},p=u,m=r(1),d=(0,m.Z)(p,c,s,!1,null,"bc35cda2",null),w=d.exports,y={name:"MusicItem",components:{CategoryItem:w},data(){return{sonatas:["Mozart: Allegro",'Beethoven "Moonlight" Sonata',"Chopin: Sonata No.3","J.S. Bach","Béla Bartók","Schumann"],collections:["Symphony","Sonata","Piano","Singing","Movie"]}},methods:{addNew(){console.log(this.newCollect),this.collections.unshift(this.newCollect)}}},f=y,b=(0,m.Z)(f,l,n,!1,null,"b68edd68",null),v=b.exports,g=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("img",{staticClass:"michael_favicon",attrs:{src:r(464)}}),a("img",{attrs:{alt:"Music logo",src:r(467)}}),a("h1",[e._v("My Favorite Album")])])}],_={name:"HeaderItem"},C=_,x=(0,m.Z)(C,g,h,!1,null,null,null),Y=x.exports,T={name:"App",components:{MusicItem:v,HeaderItem:Y}},M=T,k=(0,m.Z)(M,o,i,!1,null,null,null),E=k.exports,S=r(345),O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h3",[e._v("ENJOY YOUR TIME")]),r("div",{staticClass:"container"},[r("category",{attrs:{title:"Symphony"}},[r("iframe",{attrs:{src:"https://www.youtube.com/embed/fij0ASrJiKk",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; \n            gyroscope; picture-in-picture",allowfullscreen:""}})]),r("category",{attrs:{title:"Piano"}},[r("iframe",{attrs:{src:"https://www.youtube.com/embed/hlWiI4xVXKY",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; \n            picture-in-picture",allowfullscreen:""}})]),r("category",{attrs:{title:"Movie"}},[r("iframe",{attrs:{src:"https://www.youtube.com/embed/mNIXRXikYDc",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; \n            gyroscope; picture-in-picture",allowfullscreen:""}})]),r("category",{attrs:{title:"Movie"}},[r("iframe",{attrs:{src:"https://www.youtube.com/embed/nCSx2BWGBNM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; \n            gyroscope; picture-in-picture",allowfullscreen:""}})])],1)])},Z=[],I={name:"Entertainment"},P=I,A=(0,m.Z)(P,O,Z,!1,null,"0d5f5718",null),B=A.exports,N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("button",{on:{click:e.addPlan}},[e._v("addPlan")]),r("h4",[e._v("Week-Learning"+e._s(e.renew.Adding))]),r("div",{staticClass:"container2"},[r("category",[r("iframe",{attrs:{src:"https://www.youtube.com/embed/gyMwXuJrbJQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; \n        encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),r("category",[r("iframe",{attrs:{src:"https://www.youtube.com/embed/xBxx7aceR1U",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; \n            encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),r("category",{directives:[{name:"show",rawName:"v-show",value:e.renew.shownew,expression:"renew.shownew"}],staticClass:"mask"},[r("iframe",{attrs:{src:"https://www.youtube.com/embed/eUnlOsylxyo",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; \n            encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])],1)])},j=[],J={name:"Learning",data(){return{renew:{shownew:!1,Adding:""}}},methods:{addPlan(){a.Z.set(this.renew,"Adding",": --  NewProject"),a.Z.set(this.renew.shownew=!0)}}},K=J,$=(0,m.Z)(K,N,j,!1,null,"84825d22",null),X=$.exports;const F=new S.Z({routes:[{name:"guanyu",path:"/Entertainment",component:B},{name:"zhuye",path:"/Learning",component:X}]});var L=F;a.Z.config.productionTip=!1,a.Z.use(S.Z),new a.Z({el:"#app",render:e=>e(E),router:L})},464:function(e,t,r){e.exports=r.p+"img/favicon2.7423710c.png"},467:function(e,t,r){e.exports=r.p+"img/m_logo.03ac64a2.png"}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,a,o,i){if(!a){var l=1/0;for(u=0;u<e.length;u++){a=e[u][0],o=e[u][1],i=e[u][2];for(var n=!0,c=0;c<a.length;c++)(!1&i||l>=i)&&Object.keys(r.O).every((function(e){return r.O[e](a[c])}))?a.splice(c--,1):(n=!1,i<l&&(l=i));if(n){e.splice(u--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[a,o,i]}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.p=""}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,i,l=a[0],n=a[1],c=a[2],s=0;if(l.some((function(t){return 0!==e[t]}))){for(o in n)r.o(n,o)&&(r.m[o]=n[o]);if(c)var u=c(r)}for(t&&t(a);s<l.length;s++)i=l[s],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(u)},a=self["webpackChunkvue_music"]=self["webpackChunkvue_music"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(436)}));a=r.O(a)})();
//# sourceMappingURL=app.00dc975c.js.map