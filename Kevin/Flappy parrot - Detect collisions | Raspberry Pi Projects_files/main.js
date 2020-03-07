(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{12:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(63),c=n(64),i=n(66),s=n(65),l=n(67),u=function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={waiting:!0},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timer=setTimeout(function(){e.setState({waiting:!1})},this.props.wait)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer)}},{key:"render",value:function(){return this.state.waiting?null:this.props.children}}]),t}(r.Component);u.defaultProps={wait:250};var p=u;n(293),t.a=function(e){var t=e.display,n=void 0===t||t,r=e.delay,o=void 0===r?250:r;return a.a.createElement(p,{wait:o},a.a.createElement("div",{className:"computer display-".concat(n)},a.a.createElement("div",{className:"screen"})))}},120:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(123),c=n(174);t.a=function(e){var t=e.titlePrefix;return a.a.createElement(o.Helmet,null,a.a.createElement("title",null,Object(c.a)(t)))}},121:function(e,t,n){"use strict";n(295);var r=n(175),a=n(1),o=n.n(a),c=n(68),i=n(10),s=n(24),l=function(e){e.preventDefault(),s.f.signinRedirect()},u=function(e){e.preventDefault(),s.f.removeUser()},p=Object(i.c)("translations")(Object(c.b)(function(e){return{authentication:e.authentication}})(function(e){var t=e.authentication,n=e.t;return o.a.createElement("div",null,!t.user&&o.a.createElement("a",{className:"c-site-header__home-link",href:"/login",onClick:l},n("navigation.login")),t.user&&o.a.createElement("div",null,o.a.createElement("span",{className:"c-site-header__home-link"},t.user.profile.name),o.a.createElement("a",{className:"c-site-header__home-link",href:"/logout",onClick:u},n("navigation.logout"))))})),d=n(326),m=n(181),f=n.n(m);t.a=Object(i.c)("translations")(function(e){var t=e.locale,n=e.t;return o.a.createElement("header",{className:"c-site-header",id:"c-site-header",role:"banner"},o.a.createElement("div",{className:"c-site-header__container"},o.a.createElement("a",{className:"c-site-header__rpf-link",href:"https://raspberrypi.org"},o.a.createElement("img",{alt:"",className:"c-site-header__rpf-logomark",src:f.a})),"en"!==t&&o.a.createElement(d.a,{className:"c-site-header__home-link",to:"/".concat(t)},n("navigation.projects")),"en"===t&&o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{className:"c-site-header__home-link",to:"/".concat(t)},n("navigation.home")),o.a.createElement(d.a,{className:"c-site-header__nav-link",to:"/".concat(t,"/projects")},n("navigation.projects")),o.a.createElement(d.a,{className:"c-site-header__nav-link",to:"/".concat(t,"/codeclub")},n("navigation.codeclub")),o.a.createElement(d.a,{className:"c-site-header__nav-link",to:"/".concat(t,"/coderdojo")},n("navigation.coderdojo")),o.a.createElement(d.a,{className:"c-site-header__nav-link",to:"/".concat(t,"/jam")},n("navigation.jam"))),"true"===Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_GA_ID:"UA-46270871-8",REACT_APP_SENTRY_DSN:"https://d40346592202445d84f573aae73cff38@sentry.io/182298",REACT_APP_BING_VERIFICATION:"7C9CCDF0A68F98FA2958BF187FB3734F",REACT_APP_GOOGLE_VERIFICATION:"DbEQRCm57B8ygmlhiOw2FWj31XGVinad0t29v0TyAvY",REACT_APP_YANDEX_VERIFICATION:"187b0cd22bb82d98",REACT_APP_API_URL:"https://learning-admin.raspberrypi.org",REACT_APP_TYPEKIT_ID:"nkn4hxx"}).REACT_APP_AUTHENTICATION&&o.a.createElement(p,null),o.a.createElement("div",{className:"c-site-header__language-selector"},o.a.createElement(r.a,null))))})},17:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"c",function(){return l}),n.d(t,"e",function(){return u}),n.d(t,"b",function(){return p}),n.d(t,"d",function(){return d}),n.d(t,"f",function(){return m}),n.d(t,"g",function(){return f}),n.d(t,"h",function(){return h}),n.d(t,"i",function(){return g}),n.d(t,"j",function(){return b}),n.d(t,"k",function(){return E}),n.d(t,"l",function(){return _}),n.d(t,"m",function(){return j}),n.d(t,"n",function(){return s});var r=n(13),a=n.n(r),o=n(12),c=n(7),i=a()({loader:function(){return n.e(8).then(n.bind(null,315))},error:c.a,loading:o.a}),s=a()({loader:function(){return n.e(9).then(n.bind(null,316))},error:c.a,loading:o.a}),l=a()({loader:function(){return n.e(0).then(n.bind(null,317))},error:c.a,loading:o.a}),u=a()({loader:function(){return n.e(1).then(n.bind(null,318))},error:c.a,loading:o.a}),p=a()({loader:function(){return n.e(0).then(n.bind(null,313))},error:c.a,loading:o.a}),d=a()({loader:function(){return n.e(1).then(n.bind(null,314))},error:c.a,loading:o.a}),m=a()({loader:function(){return Promise.all([n.e(14),n.e(2)]).then(n.bind(null,321))},error:c.a,loading:o.a}),f=a()({loader:function(){return n.e(3).then(n.bind(null,319))},error:c.a,loading:o.a}),h=a()({loader:function(){return n.e(5).then(n.bind(null,323))},error:c.a,loading:o.a}),g=a()({loader:function(){return n.e(4).then(n.bind(null,312))},error:c.a,loading:o.a}),E=a()({loader:function(){return Promise.all([n.e(13),n.e(6)]).then(n.bind(null,320))},error:c.a,loading:o.a}),b=a()({loader:function(){return n.e(7).then(n.bind(null,325))},error:c.a,loading:o.a}),_=a()({loader:function(){return n.e(7).then(n.bind(null,324))},error:c.a,loading:o.a}),j=a()({loader:function(){return n.e(8).then(n.bind(null,322))},error:c.a,loading:o.a})},174:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(4),a=function(e){return e?"".concat(e," | ").concat(r.a.siteTitle):"".concat(r.a.siteTitle)}},175:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(2),c=n.n(o),i=(n(296),function(e){var t=e.changeHandler,n=e.className,r=e.label,o=e.name,i=e.options,s=e.value,l=e.blankText;return a.a.createElement("select",{"aria-label":r,className:c()(n,"c-dropdown"),name:o,onChange:function(e){return t(e.target.value)},value:s},Boolean(l)&&a.a.createElement("option",null,"-- ",l," --"),function(e){return Object.keys(e).map(function(t){return a.a.createElement("option",{key:t,value:t},e[t])})}(i))}),s=n(87),l=n(10);t.a=Object(l.c)("translations")(function(e){var t=e.i18n,n=e.t,r=e.filter,o=n("language-selector.options",{returnObjects:!0}),c=r?r(o):o;return a.a.createElement(i,{changeHandler:function(e){return function(e,t){if(!t)return null;var n=window.location.pathname.split("/");return n[1]=t,n=n.join("/"),Object(s.a)(e).push({pathname:n}),null}(t,e)},label:n("language-selector.label"),name:"locale",options:c,value:t.language,blankText:n("language-selector.label")})})},181:function(e,t,n){e.exports=n.p+"static/media/logomark.20300533.svg"},184:function(e,t,n){e.exports=n(311)},24:function(e,t,n){"use strict";n.d(t,"d",function(){return l}),n.d(t,"f",function(){return s});var r=n(47),a=n.n(r);n.d(t,"a",function(){return r.CallbackComponent}),n.d(t,"b",function(){return r.OidcProvider}),n.d(t,"e",function(){return r.reducer});var o=n(86),c="".concat(window.location.protocol,"//").concat(window.location.hostname).concat(window.location.port?":".concat(window.location.port):""),i={client_id:Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_GA_ID:"UA-46270871-8",REACT_APP_SENTRY_DSN:"https://d40346592202445d84f573aae73cff38@sentry.io/182298",REACT_APP_BING_VERIFICATION:"7C9CCDF0A68F98FA2958BF187FB3734F",REACT_APP_GOOGLE_VERIFICATION:"DbEQRCm57B8ygmlhiOw2FWj31XGVinad0t29v0TyAvY",REACT_APP_YANDEX_VERIFICATION:"187b0cd22bb82d98",REACT_APP_API_URL:"https://learning-admin.raspberrypi.org",REACT_APP_TYPEKIT_ID:"nkn4hxx"}).REACT_APP_AUTHENTICATION_CLIENT_ID,redirect_uri:"".concat(c,"/rpi/callback"),response_type:"token",scope:"openid profile",authority:Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_GA_ID:"UA-46270871-8",REACT_APP_SENTRY_DSN:"https://d40346592202445d84f573aae73cff38@sentry.io/182298",REACT_APP_BING_VERIFICATION:"7C9CCDF0A68F98FA2958BF187FB3734F",REACT_APP_GOOGLE_VERIFICATION:"DbEQRCm57B8ygmlhiOw2FWj31XGVinad0t29v0TyAvY",REACT_APP_YANDEX_VERIFICATION:"187b0cd22bb82d98",REACT_APP_API_URL:"https://learning-admin.raspberrypi.org",REACT_APP_TYPEKIT_ID:"nkn4hxx"}).REACT_APP_AUTHENTICATION_URL,silent_redirect_uri:"".concat(c,"/rpi/silent_renew"),automaticSilentRenew:!0,filterProtocolClaims:!0,loadUserInfo:!1,monitorSession:!1,userStore:new o.WebStorageStateStore({store:window.localStorage})},s=Object(r.createUserManager)(i);s.events.addAccessTokenExpired(function(){s.signinSilent()});var l=a()(s);t.c=function(e){Object(r.loadUser)(e,s)}},293:function(e,t,n){},294:function(e,t,n){},295:function(e,t,n){},296:function(e,t,n){},310:function(e,t,n){},311:function(e,t,n){"use strict";n.r(t);n(185),n(220),n(249),n(253),n(255),n(260),n(264),n(267);var r=n(49),a=n.n(r),o=n(1),c=n.n(o),i=n(122),s=n.n(i),l=n(35),u=n(176),p=n(68),d=n(24),m=n(8),f=n(5),h={title:"",description:" ",projectsIds:[]},g=Object(m.a)({error:null,loading:!0,currentLocale:"en"},h);var E=n(4),b=n(50),_=n(70),j=new Headers({"Content-Type":"application/json"}),v=function(e,t,n){var r="".concat("https://learning-admin.raspberrypi.org","/api/v1/projects/").concat(e,"/progress");return j.append("Authorization",n),Promise.resolve(fetch(r,{method:"POST",headers:j,body:JSON.stringify({step:t})}).then(function(e){if(e.status===E.a.createdStatus)return e.json();var t=new Error(e.statusText);throw t.response=e,t}).catch(function(e){return console.error("Request failed:",e)}))},A=E.a.reducers.project.initialState;var y={entities:{},meta:{links:{}},currentLocale:"en",loading:!0,error:null};var O=E.a.reducers.progress.initialState;var P=Object(l.c)({pathway:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.c:return Object.assign({},e,Object(m.a)({},h,{error:null,loading:!0,currentLocale:t.currentLocale||e.currentLocale}));case f.i:var n=t.response||{};return Object.assign({},e,Object(m.a)({},e,n,{loading:!1}));case f.g:return Object.assign({},e,Object(m.a)({},e,h,{error:t.error,loading:!1}));default:return e}},progress:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.d:case f.b:return Object.assign({},e,O);case f.j:case f.h:var n=t.response.progress.entities||{};return Object.assign({},e,Object(m.a)({},e,{entities:n,loading:!1}));case f.g:return Object.assign({},e,Object(m.a)({},e,{entities:[],error:t.error,loading:!1}));default:return e}},project:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.f:var n=Object(_.f)(t.currentStepPosition);return Object.assign({},e,{currentLocale:t.currentLocale||e.currentLocale,currentStepPosition:n,error:null,project:t.cachedProject?t.cachedProject.content:{},projectFetched:0,slideDirection:"left",slug:t.slug});case f.k:var r=Object.assign({},t.response.content,{id:t.response.id,locale:t.response.locale})||{};return Object.assign({},e,Object(m.a)({},e,{nextStepTitle:r.steps[e.currentStepPosition]?r.steps[e.currentStepPosition].title:b.a.t("project.steps.navigation.whats-next"),project:r,projectFetched:1}));case f.g:var a=Object.assign({},t.error.body.content,{id:t.error.body.id,availableLocales:t.error.body.availableLocales})||{};return Object.assign({},e,Object(m.a)({},e,{currentStepPosition:null,error:t.error,project:a,projectFetched:t.error.body.availableLocales?1:-1,slug:null}));case f.m:var o=Object(_.f)(t.currentStepPosition);t.authToken&&v(e.project.id,o,t.authToken);var c=e.project.steps&&e.project.steps[o]?e.project.steps[o].title:b.a.t("project.steps.navigation.whats-next"),i=Object(_.g)(t.currentStepPosition,e.currentStepPosition);return Object.assign({},e,Object(m.a)({},e,{currentStepPosition:o,nextStepTitle:c,slideDirection:i}));default:return e}},projects:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.e:return Object.assign({},e,Object(m.a)({},e,{entities:{},currentLocale:t.currentLocale||e.currentLocale,loading:!0,error:null}));case f.l:var n=t.response.projects?t.response.projects.entities:{};return Object.assign({},e,Object(m.a)({},e,{entities:n,meta:t.response.meta,loading:!1,error:null}));case f.g:return Object.assign({},e,Object(m.a)({},e,{entities:{},meta:{links:{}},loading:!1,error:t.error}));default:return e}},authentication:d.e}),T=n(2),C=n.n(T),w=n(10),R=n(120),I=n(327),S=n(329),N=n(330),k=n(328),F=n(17),x=n(87),L=n(7),D=n(121),U=["microbit-game-controller","n-days-of-christmas","sweet-shop-reaction-game"],V=function(){return U.map(function(e,t){return c.a.createElement(k.a,{exact:!0,path:"/:locale/projects/".concat(e),key:t,component:function(){return window.location="https://github.com/raspberrypilearning/".concat(e)}})})},G=[{from:"/en/projects/rpi-python-build-an-octapi",to:"/en/projects/build-an-octapi"},{from:"/en/projects/rpi-python-tweeting-babbage",to:"/en/projects/tweeting-babbage"},{from:"/en/projects/rpi-python-tweeting-babbage",to:"/en/projects/tweeting-babbage"},{from:"/en/projects/rpi-python-google-aiy",to:"/en/projects/google-voice-aiy"},{from:"/en/projects/rpi-python-gpio-music-box",to:"/en/projects/gpio-music-box"},{from:"/en/projects/rpi-python-hamster-party-cam",to:"/en/projects/hamster-party-cam"},{from:"/en/projects/rpi-python-octapi-public-key-cryptography",to:"/en/projects/octapi-public-key-cryptography"},{from:"/en/projects/rpi-python-parent-detector",to:"/en/projects/parent-detector"},{from:"/en/projects/rpi-python-whoopi-cushion",to:"/en/projects/whoopi-cushion"},{from:"/en/projects/generic-javascript-cat-meme-generator",to:"/en/projects/cat-meme-generator"},{from:"/en/projects/generic-scratch-space-maze",to:"/en/projects/space-maze"},{from:"/en/projects/rpi-python-people-in-space-indicator",to:"/en/projects/people-in-space-indicator"}],B=function(){return G.map(function(e){return c.a.createElement(I.a,{key:e.from,from:e.from,to:e.to})})},H=[],Y=function(){return H.map(function(e){return c.a.createElement(k.a,{exact:!0,path:e.from,key:e.from,component:function(){return window.location=e.to}})})},M=Object(w.c)("translations")(function(e){var t=e.t;return c.a.createElement("div",null,c.a.createElement(D.a,{locale:"en"}),c.a.createElement(L.a,{error:{status:E.a.notFoundStatus,message:t("no-match.title.text")}}))}),X=Object(w.c)("translations")(function(e){var t=e.i18n;return c.a.createElement(S.a,{history:Object(x.a)(t)},c.a.createElement(N.a,null,c.a.createElement(k.a,{exact:!0,path:"/rpi/silent_renew",component:F.n}),B(),V(),Y(),c.a.createElement(k.a,{exact:!0,path:"/",render:function(){return c.a.createElement(I.a,{to:"/en/"})}}),c.a.createElement(k.a,{exact:!0,path:"/:locale",render:function(e){return function(e){return E.a.availableHomePageLanguages.includes(e.match.params.locale)?c.a.createElement(F.f,e):c.a.createElement(I.a,{to:{pathname:"/".concat(e.match.params.locale,"/projects")}})}(e)}}),c.a.createElement(k.a,{exact:!0,path:"/:locale/codeclub/",component:F.c}),c.a.createElement(k.a,{exact:!0,path:"/:locale/coderdojo/",component:F.e}),c.a.createElement(k.a,{exact:!0,path:"/:locale/jam",render:function(e){var t=e.match.params.locale;return c.a.createElement(I.a,{to:"/".concat(t,"/jam/jam")})}}),c.a.createElement(k.a,{exact:!0,path:"/:locale/projects",component:F.l}),c.a.createElement(k.a,{exact:!0,path:"/:locale/projects/:progress(progress|finished)",component:F.j}),c.a.createElement(k.a,{exact:!0,path:"/:locale/projects/:slug/print",component:F.m}),c.a.createElement(k.a,{exact:!0,path:"/:locale/projects/:slug/complete",component:F.k}),c.a.createElement(k.a,{exact:!0,path:"/:locale/projects/:slug/:position?",component:F.k}),c.a.createElement(k.a,{exact:!0,path:"/:locale/:pathwayType/:slug",component:F.h}),c.a.createElement(k.a,{exact:!0,path:"/rpi/callback",component:F.a}),c.a.createElement(k.a,{component:M})))}),z=Object(w.c)("translations")(function(e){var t=e.i18n,n=C()("c-i18n-root",{"c-i18n-root--rtl":"rtl"===t.dir()});return c.a.createElement("div",{className:n,dir:t.dir()},c.a.createElement(R.a,null),c.a.createElement(X,null))}),Q=n(69),W=function(e){return e.json()},q=function(e){if(e.status>=E.a.okStatus&&e.status<E.a.redirectedStatus)return e;var t=new Error(e.statusText);throw t.status=e.status,t.response=e,t},J="".concat("https://learning-admin.raspberrypi.org","/api/v1"),K=function(e){if(!e.data)return null;if(!Array.isArray(e.data))return function(e){var t=Object(m.a)({},e.data.attributes);return e.data.relationships&&Object.keys(e.data.relationships).map(function(n){return t["".concat(n,"Ids")]=e.data.relationships[n].data.map(function(e){return e.id})}),t}(e);var t={meta:{}};return e.data&&e.data.forEach(function(e){t[e.type]=t[e.type]||{entities:{}},e.attributes.id=e.id,t[e.type].entities[e.id]=e.attributes}),e.links&&(t.meta.links=e.links),t},Z=n(63),$=n(64),ee=n(66),te=n(65),ne=n(67),re=function(e){function t(e){var n;return Object(Z.a)(this,t),(n=Object(ee.a)(this,Object(te.a)(t).call(this,e))).state={hasError:!1},n}return Object(ne.a)(t,e),Object($.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0}),a.a.captureException(e,{extra:t})}},{key:"render",value:function(){return this.state.hasError?c.a.createElement(L.a,{error:{status:500,message:this.props.t("error-boundary.message")}}):this.props.children}}]),t}(o.Component),ae=Object(w.c)("translations")(re),oe=n(182),ce=n.n(oe),ie=n(183),se={name:"customDetector",lookup:function(){return window.location.pathname.split("/")[1]}},le=new(n.n(ie).a);le.addDetector(se),b.a.use(ce.a).use(le).use(w.b).init({fallbackLng:"en",ns:["translations"],defaultNS:"translations",debug:!1,detection:{order:["customDetector"]},interpolation:{escapeValue:!1},react:{wait:!0}});b.a,n(310);n.e(15).then(n.bind(null,470)).then(function(e){return e.init()}),a.a.config("https://d40346592202445d84f573aae73cff38@sentry.io/182298").install();var ue=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,pe=Object(l.e)(P,ue(Object(l.a)(d.d,u.a,function(){return function(e){return function(t){var n=t[f.a];if("undefined"===typeof n)return e(t);var r=n.types,o=n.endpoint,c=n.authToken;if(!Array.isArray(r)||3!==r.length)throw new Error("Expected an array of three action types.");if("string"!==typeof o)throw new Error("Specify a string endpoint URL.");var i=function(e){var n=Object.assign({},t,e);return delete n[f.a],n},s=Object(Q.a)(r,3),l=s[0],u=s[1],p=s[2];return e(i(Object(m.a)({type:l},n))),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=-1===e.indexOf(J)?"".concat(J).concat(e):e,r={};return t&&(r.headers={Authorization:t}),fetch(n,r).then(q).then(W).then(function(e){return Object.assign({},K(e))}).catch(function(e){return e.status!==E.a.notFoundStatus&&a.a.captureMessage("API Error",{extra:{error:e}}),e.response.json().then(function(t){return Promise.reject({message:e.message,status:e.status,body:Object.assign({},K(t))})})})}(o,c).then(function(t){return e(i({response:t,type:u,endpoint:o}))},function(t){return e(i({type:p,error:t||{message:"Something went wrong",status:500}}))})}}})));"true"===Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_GA_ID:"UA-46270871-8",REACT_APP_SENTRY_DSN:"https://d40346592202445d84f573aae73cff38@sentry.io/182298",REACT_APP_BING_VERIFICATION:"7C9CCDF0A68F98FA2958BF187FB3734F",REACT_APP_GOOGLE_VERIFICATION:"DbEQRCm57B8ygmlhiOw2FWj31XGVinad0t29v0TyAvY",REACT_APP_YANDEX_VERIFICATION:"187b0cd22bb82d98",REACT_APP_API_URL:"https://learning-admin.raspberrypi.org",REACT_APP_TYPEKIT_ID:"nkn4hxx"}).REACT_APP_AUTHENTICATION&&Object(d.c)(pe),s.a.render(c.a.createElement(ae,null,c.a.createElement(p.a,{store:pe},c.a.createElement(d.b,{userManager:d.f,store:pe},c.a.createElement(z,null)))),document.getElementById("root"))},4:function(e,t,n){"use strict";t.a={okStatus:200,createdStatus:201,redirectedStatus:300,notFoundStatus:404,internalServerErrorStatus:500,siteTitle:"Raspberry Pi Projects",stepScrollDuration:250,transitionEnterTimeout:325,transitionExitTimeout:325,creativeCommonsUrl:"https://creativecommons.org/licenses/by-sa/4.0/",raspberryPiUrl:"https://www.raspberrypi.org",projectCompleteSlug:"complete",projectCompleteTitle:"Project Complete",reducers:{project:{initialState:{currentLocale:"en",currentStepPosition:null,error:null,project:{},projectFetched:0,slideDirection:"left",slug:null}},progress:{initialState:{error:null,loading:!0,entities:{}}}},scratchSupportedLanguages:["ab","am","ar","az","be","bg","ca","ckb","cs","cy","da","de","el","en","es","es_419","et","eu","fa","fi","fr","ga","gd","gl","he","hr","hu","id","is","it","ja","ja_Hira","ko","lt","lv","mi","nb","nl","nn","pl","pt","pt_br","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh_cn","zh_tw","zu"],availableHomePageLanguages:["en"]}},5:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a}),n.d(t,"c",function(){return o}),n.d(t,"d",function(){return c}),n.d(t,"f",function(){return i}),n.d(t,"e",function(){return s}),n.d(t,"g",function(){return l}),n.d(t,"h",function(){return u}),n.d(t,"i",function(){return p}),n.d(t,"j",function(){return d}),n.d(t,"k",function(){return m}),n.d(t,"l",function(){return f}),n.d(t,"m",function(){return h});var r="CALL_API",a="FETCH_FINISHED_PROGRESS_REQUEST",o="FETCH_PATHWAY_REQUEST",c="FETCH_PROGRESS_REQUEST",i="FETCH_PROJECT_REQUEST",s="FETCH_PROJECTS_REQUEST",l="RECEIVE_ERROR",u="RECEIVE_FINISHED_PROGRESS",p="RECEIVE_PATHWAY",d="RECEIVE_PROGRESS",m="RECEIVE_PROJECT",f="RECEIVE_PROJECTS",h="SET_PROJECT_STEP"},7:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(10),c=n(52),i=n(4);n(294);t.a=Object(o.c)("translations")(function(e){var t=e.error,n=e.t;if(!t)return a.a.createElement("div",null);var r=n("no-match.title.text");return t.status!==i.a.notFoundStatus&&(r=n("error-boundary.message")),a.a.createElement("div",{className:"c-error c-error--".concat(t.status)},a.a.createElement("div",{className:"c-error__wrapper u-clearfix"},a.a.createElement("div",{className:"c-error__image"},a.a.createElement("span",{className:"c-error__screen"},function(){for(var e,t,n=[],r=Math.ceil(10*Math.random())+5,o=0;o<r;o+=1)e=Math.floor(172*Math.random()),t=Math.floor(93*Math.random()),n.push(a.a.createElement("span",{className:"c-error__dialog",key:o,style:{left:e,top:t}}));return n}())),a.a.createElement("div",{className:"c-error__body"},a.a.createElement(c.m,{element:"h1"},r),t.status===i.a.notFoundStatus?"":a.a.createElement(c.k,{element:"p"},n("no-match.message.notified")),a.a.createElement(c.k,{element:"p"},n("no-match.message.text")),a.a.createElement(c.b,{to:"/"},n("no-match.button.text")))))})},70:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return l}),n.d(t,"c",function(){return c}),n.d(t,"d",function(){return p}),n.d(t,"e",function(){return d}),n.d(t,"f",function(){return m}),n.d(t,"g",function(){return f});var r=n(69),a=n(4),o=n(281),c=function(e){return"undefined"!==typeof e.challenge&&e.challenge},i=function(e){return e.classList.contains("js-project-panel--initialise-swiper")||e.classList.contains("js-project-panel--swiper-initialised")},s=function(e){var t=e.target;if(t.classList.contains("js-project-panel__toggle")){t.classList.toggle("c-project-panel__heading--has-close-icon");var n=t.nextElementSibling;n.classList.toggle("u-hidden"),i(n)&&function(e){var t=e.querySelector(".c-project-panel__swiper");null!==t&&(new o(t,{a11y:!0,containerModifierClass:"c-project-panel__swiper--",navigation:{disabledClass:"c-project-panel__swiper-button--disabled",nextEl:t.querySelector(".c-project-panel__swiper-button--next"),prevEl:t.querySelector(".c-project-panel__swiper-button--prev")},pagination:{clickable:!0,bulletActiveClass:"c-project-panel__swiper-bullet--active",bulletClass:"c-project-panel__swiper-bullet",el:t.querySelector(".c-project-panel__swiper-pagination"),hideOnClick:!1,type:"bullets"},setWrapperSize:!0,slideClass:"c-project-panel__swiper-slide",spaceBetween:80,wrapperClass:"c-project-panel__swiper-wrapper"}),e.classList.remove("js-project-panel--initialise-swiper"),e.classList.add("js-project-panel--swiper-initialised"))}(n),h(e,i(n))}},l=function(){Object.entries({".language-blocks":"scratch2",".language-blocks3":"scratch3"}).forEach(function(e){var t=Object(r.a)(e,2),n=t[0],o=t[1];scratchblocks.renderMatching(n,{languages:a.a.scratchSupportedLanguages,style:o})})},u=function(){var e=['pre code:not([class*="language-blocks"])','code[class*="language-"]:not([class*="language-blocks"])'].join(", "),t=document.querySelectorAll(e);if(t.length>0){var n=!0,r=!1,a=void 0;try{for(var o,c=t[Symbol.iterator]();!(n=(o=c.next()).done);n=!0){var i=o.value;Prism.highlightElement(i)}}catch(s){r=!0,a=s}finally{try{n||null==c.return||c.return()}finally{if(r)throw a}}}},p=function(){var e=document.querySelectorAll(".scratch-preview iframe"),t=!0,n=!1,r=void 0;try{for(var a,o=e[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){var c=a.value;c.parentNode.removeChild(c)}}catch(i){n=!0,r=i}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}},d=function(){l(),u(),function(){var e=document.querySelector(".c-project__content");null!==e&&e.addEventListener("click",s)}()},m=function(e){return e?parseInt(e,10):1},f=function(e,t){return e>t?"left":"right"},h=function(e,t){var n=e.target.textContent.trim();window.ga("send",{hitType:"event",eventCategory:"Project ".concat(t?"hint":"ingredient"),eventAction:"Clicked ".concat(t?"hint":"ingredient ".concat(n)),eventLabel:e.target.baseURI})}},87:function(e,t,n){"use strict";var r,a=n(36);t.a=function(e){return r||(r=Object(a.a)()).listen(function(t){var n=e.language,r=t.pathname.split("/")[1];r!==n&&e.changeLanguage(r)}),r}}},[[184,11,12]]]);
//# sourceMappingURL=main.dcfc62fc.chunk.js.map