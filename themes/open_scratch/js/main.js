Breakpoint=function(e){function t(e,t){var e=window.matchMedia("(min-width: "+e.toString()+"px)"),t=window.matchMedia("(max-width: "+t.toString()+"px)");return function(){return e.matches&&t.matches}}return{isTiny:t(0,350),isMobile:t(351,560),isNarrow:t(561,750),isWide:t(751,1050),isWider:t(1051,1200),isWidest:t(1201,1440),isFull:t(1441,1e5)}}(jQuery),function(e){function t(){var t=e(".featured-work .slide__image"),n=t.find("img"),i=n.width()/n.height(),o=e(window).width()/e(window).height();o<i?(console.log("set fullheight"),t.removeClass("fullwidth"),t.addClass("fullheight")):(console.log("set fullwidth"),t.removeClass("fullheight"),t.addClass("fullwidth"))}e(document).ready(function(){setTimeout(function(){t()},500)}),e(window).resize(function(){t()})}(jQuery),MyFlexslider=function(e){function t(){n()}function n(){if(console.log("reset flexslider"),Pg.isTask()){var e=Breakpoint.isFull()?2:1;r.data("flexslider").vars.minItems=e,r.data("flexslider").vars.maxItems=e}else if(Pg.isPress()){var t=Breakpoint.isFull()?5:Breakpoint.isWidest()?4:Breakpoint.isWider()?3:Breakpoint.isWide()?3:Breakpoint.isNarrow()?3:2;s.data("flexslider").vars.minItems=t,s.data("flexslider").vars.maxItems=t}}function i(){console.log("resize flexslider"),clearTimeout(a),a=setTimeout(function(){e(window).resize(),e(window).resize()},500)}var o=e(".flexslider"),r=e(".optionset-open-task-slideshow"),s=e(".optionset-open-press-carousel");e(".optionset-open-featured-work");o.on("resize",function(e){e.stopPropagation()}),e(document).ready(function(){t()});var a;return{resize:i,reset:n}}(jQuery),MyFullpage=function(e){function t(){l.hide(),r()}function n(){console.log("build fullpage"),c.hide(),a.hide(),l.show(),f.addClass("fixed"),s()||(Pg.isFront()?e("#fullpage").fullpage({menu:"#menu",lockAnchors:!1,anchors:["firstPage","secondPage"],navigation:!1,navigationPosition:"left",navigationTooltips:["Featured Work","Recent News"],showActiveTooltip:!1,slidesNavigation:!0,slidesNavPosition:"bottom",css3:!1,scrollingSpeed:700,autoScrolling:!0,fitToSection:!1,scrollBar:!1,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:"#element1, .element2",scrollOverflow:!0,scrollOverflowOptions:null,touchSensitivity:15,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,verticalCentered:!0,sectionsColor:[,"rgb(255,255,255)"],paddingTop:"0",paddingBottom:"0",sectionSelector:".fullpage__section",slideSelector:".fullpage__slide",lazyLoading:!1,onLeave:function(e,t,n){1==e&&u.fadeOut(),2==e&&c.hide()},afterLoad:function(t,n){1==n&&(u.fadeIn(),MySlider.close(),MyVisor.up()),2==n&&(c.show(),MyVisor.down(),Breakpoint.isWide()||Breakpoint.isWider()?MySlider.open():MySlider.close(),e.fn.fullpage.reBuild())},afterRender:function(){MySlider.close(),MyVisor.up()},afterResize:function(){},afterResponsive:function(e){},afterSlideLoad:function(e,t,n,i){},onSlideLeave:function(e,t,n,i,o){}}):(p.addClass("bg--white"),e("#fullpage").fullpage({menu:"#menu",lockAnchors:!1,anchors:["firstPage","secondPage"],navigation:!1,navigationPosition:"left",navigationTooltips:["Featured Work","Recent News"],showActiveTooltip:!1,slidesNavigation:!0,slidesNavPosition:"bottom",css3:!1,scrollingSpeed:700,autoScrolling:!0,fitToSection:!1,scrollBar:!0,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:"#element1, .element2",scrollOverflow:!0,scrollOverflowOptions:null,touchSensitivity:15,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,verticalCentered:!0,paddingTop:"0",paddingBottom:"0",sectionSelector:".fullpage__section",slideSelector:".fullpage__slide",lazyLoading:!1,onLeave:function(e,t,n){},afterLoad:function(e,t){},afterRender:function(){p.delay(500).fadeOut(function(){p.removeClass("bg--white"),p.show()})},afterResize:function(){},afterResponsive:function(e){},afterSlideLoad:function(e,t,n,i){},onSlideLeave:function(e,t,n,i,o){}})))}function i(){console.log("destroy fullpage"),d.show(),c.show(),a.show(),l.hide(),f.removeClass("fixed"),s()&&e.fn.fullpage.destroy("all")}function o(){console.log("on fullpage toggle"),s()?i():n(),MySlider.reset(),MyFlexslider.reset(),MyFlexslider.resize()}function r(){console.log("reset fullpage"),Pg.isFront()?n():Pg.isTask()&&(Breakpoint.isTiny()||Breakpoint.isMobile()||Breakpoint.isNarrow())&&Orient.isLandscape()?n():i()}function s(){return e("html").hasClass("fp-enabled")}var a=(e(".fullpage"),e(".fullpage__hidden")),l=e(".fullpage__asset"),d=e(".main-header-layout"),c=e(".main-footer-wrapper"),u=e(".nameplate"),f=(e(".manifesto"),e(".recent-news"),e(".fullpage__toggler")),p=e(".bg__screen");return f.click(function(){o()}),e(document).on("keydown",function(e){e.ctrlKey&&70==e.keyCode&&o()}),e(document).ready(function(){t()}),public_API={reset:r,isEnabled:s},public_API}(jQuery),MyInverter=function(e){function t(){"true"==sessionStorage.getItem("isInverted")?i():o()}function n(){"true"==sessionStorage.getItem("isInverted")?o():i()}function i(){e("table").addClass("invert"),e(".title").addClass("invert"),e(".tag").addClass("invert"),e(".focus").addClass("invert"),e(".menu").addClass("invert"),e(".bg").addClass("invert"),e("body").addClass("invert"),e(".sidebar").addClass("invert"),e(".toolbar").addClass("invert"),e(".c--black").addClass("c--white"),sessionStorage.setItem("isInverted","true")}function o(){e("table").removeClass("invert"),e(".title").removeClass("invert"),e(".tag").removeClass("invert"),e(".focus").removeClass("invert"),e(".menu").removeClass("invert"),e(".bg").removeClass("invert"),e("body").removeClass("invert"),e(".sidebar").removeClass("invert"),e(".toolbar").removeClass("invert"),e(".c--black").removeClass("c--white"),sessionStorage.setItem("isInverted","false")}var r=e(".inverter__toggler");e(".inverter__target");return e(document).ready(function(){t()}),e(document).on("keydown",function(e){e.ctrlKey&&e.altKey&&73==e.keyCode&&n()}),r.click(function(){n()}),public_API={toggle:n,invert:i,reset:o},public_API}(jQuery),jQuery(document).ready(function(e){e(document).on("keydown",function(t){71==t.keyCode&&(e(".grid-target").hasClass("grid-on")?e(".grid-target").removeClass("grid-on"):e(".grid-target").addClass("grid-on"))}),e(function(){var t=window.location.pathname.split("/"),n=t[t.length-1];"practice"!=n&&"gallery"!=n&&"videos"!=n&&"press"!=n||e(".main-content__primary").removeClass("border--top")}),e(function(){e(".icon").each(function(){e(this).attr("href")==window.location.pathname.substr(0)&&e(this).addClass("active")})}),e(".news-item.expandable input:checkbox:lt(3)").attr("checked",!0),e(".event-teaser.expandable input:checkbox:lt(3)").attr("checked",!0),e(".book-item.expandable input:checkbox:first").attr("checked",!0),e("a[rel~='keep-params']").click(function(t){t.preventDefault();var n=window.location.search,i=e(this).attr("href")+n;window.setTimeout(function(){window.location.href=i},100)}),e(".row--clickable").click(function(){var t=e(this),n=t.find("a");window.document.location=n.attr("href")})}),MediaCard=function(e){function t(){o.removeClass("media"),r.removeClass("media__img"),s.removeClass("media__contents"),(Pg.isIdeas()||Pg.isPreopen()||Pg.isTask())&&s.addClass("hide")}function n(){o.addClass("media"),r.addClass("media__img"),s.addClass("media__contents"),(Pg.isIdeas()||Pg.isPreopen()||Pg.isTask())&&s.removeClass("hide")}var i=e(".mediaCard"),o=i,r=i.find(".media__img"),s=i.find(".media__contents");return e(document).ready(function(){(Breakpoint.isWider()||Breakpoint.isWidest()||Breakpoint.isFull())&&(!Pg.isTask()||Breakpoint.isNarrow()||Breakpoint.isWide())?n():t()}),e(window).resize(function(){Breakpoint.isWider()||Breakpoint.isWidest()||Breakpoint.isFull()?n():Pg.isTask()&&(Breakpoint.isNarrow()||Breakpoint.isWide())?n():t()}),public_API={disableMedia:t,enableMedia:n},public_API}(jQuery),!function(e,t,n){function i(e){var t=C.className,n=x._config.classPrefix||"";if(T&&(t=t.baseVal),x._config.enableJSClass){var i=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(i,"$1"+n+"js$2")}x._config.enableClasses&&(t+=" "+n+e.join(" "+n),T?C.className.baseVal=t:C.className=t)}function o(e,t){return typeof e===t}function r(){var e,t,n,i,r,s,a;for(var l in w){if(e=[],t=w[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=o(t.fn,"function")?t.fn():t.fn,r=0;r<e.length;r++)s=e[r],a=s.split("."),1===a.length?x[a[0]]=i:(!x[a[0]]||x[a[0]]instanceof Boolean||(x[a[0]]=new Boolean(x[a[0]])),x[a[0]][a[1]]=i),y.push((i?"":"no-")+a.join("-"))}}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):T?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(e,t){if("object"==typeof e)for(var n in e)j(e,n)&&a(n,e[n]);else{e=e.toLowerCase();var o=e.split("."),r=x[o[0]];if(2==o.length&&(r=r[o[1]]),"undefined"!=typeof r)return x;t="function"==typeof t?t():t,1==o.length?x[o[0]]=t:(!x[o[0]]||x[o[0]]instanceof Boolean||(x[o[0]]=new Boolean(x[o[0]])),x[o[0]][o[1]]=t),i([(t&&0!=t?"":"no-")+o.join("-")]),x._trigger(e,t)}return x}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function d(e,t){return!!~(""+e).indexOf(t)}function c(){var e=t.body;return e||(e=s(T?"svg":"body"),e.fake=!0),e}function u(e,n,i,o){var r,a,l,d,u="modernizr",f=s("div"),p=c();if(parseInt(i,10))for(;i--;)l=s("div"),l.id=o?o[i]:u+(i+1),f.appendChild(l);return r=s("style"),r.type="text/css",r.id="s"+u,(p.fake?p:f).appendChild(r),p.appendChild(f),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(t.createTextNode(e)),f.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",d=C.style.overflow,C.style.overflow="hidden",C.appendChild(p)),a=n(f,e),p.fake?(p.parentNode.removeChild(p),C.style.overflow=d,C.offsetHeight):f.parentNode.removeChild(f),!!a}function f(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var i;for(var r in e)if(e[r]in t)return n===!1?e[r]:(i=t[e[r]],o(i,"function")?f(i,n||t):i);return!1}function m(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function g(t,i){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(m(t[o]),i))return!0;return!1}if("CSSSupportsRule"in e){for(var r=[];o--;)r.push("("+m(t[o])+":"+i+")");return r=r.join(" or "),u("@supports ("+r+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function h(e,t,i,r){function a(){u&&(delete H.style,delete H.modElem)}if(r=!o(r,"undefined")&&r,!o(i,"undefined")){var c=g(e,i);if(!o(c,"undefined"))return c}for(var u,f,p,m,h,v=["modernizr","tspan"];!H.style;)u=!0,H.modElem=s(v.shift()),H.style=H.modElem.style;for(p=e.length,f=0;p>f;f++)if(m=e[f],h=H.style[m],d(m,"-")&&(m=l(m)),H.style[m]!==n){if(r||o(i,"undefined"))return a(),"pfx"!=t||m;try{H.style[m]=i}catch(e){}if(H.style[m]!=h)return a(),"pfx"!=t||m}return a(),!1}function v(e,t,n,i,r){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+I.join(s+" ")+s).split(" ");return o(t,"string")||o(t,"undefined")?h(a,t,i,r):(a=(e+" "+W.join(s+" ")+s).split(" "),p(a,t,n))}function b(e,t,i){return v(e,n,n,t,i)}var y=[],w=[],k={_version:"3.0.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){w.push({name:e,fn:t,options:n})},addAsyncTest:function(e){w.push({name:null,fn:e})}},x=function(){};x.prototype=k,x=new x,x.addTest("cookies",function(){try{t.cookie="cookietest=1";var e=-1!=t.cookie.indexOf("cookietest=");return t.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(e){return!1}}),x.addTest("ie8compat",!e.addEventListener&&!!t.documentMode&&7===t.documentMode),x.addTest("serviceworker","serviceWorker"in navigator),x.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),x.addTest("websockets","WebSocket"in e&&2===e.WebSocket.CLOSING);var C=t.documentElement,T="svg"===C.nodeName.toLowerCase();x.addTest("canvas",function(){var e=s("canvas");return!(!e.getContext||!e.getContext("2d"))}),x.addTest("canvastext",function(){return x.canvas!==!1&&"function"==typeof s("canvas").getContext("2d").fillText});var S=s("input"),_="search tel url email datetime date month week time datetime-local number range color".split(" "),P={};x.inputtypes=function(e){for(var i,o,r,s=e.length,a=":)",l=0;s>l;l++)S.setAttribute("type",i=e[l]),r="text"!==S.type&&"style"in S,r&&(S.value=a,S.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(i)&&S.style.WebkitAppearance!==n?(C.appendChild(S),o=t.defaultView,r=o.getComputedStyle&&"textfield"!==o.getComputedStyle(S,null).WebkitAppearance&&0!==S.offsetHeight,C.removeChild(S)):/^(search|tel)$/.test(i)||(r=/^(url|email|number)$/.test(i)?S.checkValidity&&S.checkValidity()===!1:S.value!=a)),P[e[l]]=!!r;return P}(_),x.addTest("userdata",!!s("div").addBehavior),x.addTest("video",function(){var e=s("video"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(e){}return t}),x.addTest("multiplebgs",function(){var e=s("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),x.addTest("rgba",function(){var e=s("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),x.addTest("placeholder","placeholder"in s("input")&&"placeholder"in s("textarea")),x.addTest("inlinesvg",function(){var e=s("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var z=function(e){function n(t,n){var o;return!!t&&(n&&"string"!=typeof n||(n=s(n||"div")),t="on"+t,o=t in n,!o&&i&&(n.setAttribute||(n=s("div")),n.setAttribute(t,""),o="function"==typeof n[t],n[t]!==e&&(n[t]=e),n.removeAttribute(t)),o)}var i=!("onblur"in t.documentElement);return n}();k.hasEvent=z,x.addTest("ambientlight",z("devicelight",e)),x.addTest("inputsearchevent",z("search"));var M=k._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];k._prefixes=M,x.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=s("a");return n.style.cssText=e+M.join(t+e),!!n.style.length}),x.addTest("cssgradients",function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);",i=e+M.join(n+e).slice(0,-e.length);x._config.usePrefixes&&(i+=e+"-webkit-"+t);var o=s("a"),r=o.style;return r.cssText=i,(""+r.backgroundImage).indexOf("gradient")>-1}),x.addTest("opacity",function(){var e=s("a").style;return e.cssText=M.join("opacity:.55;"),/^0.55$/.test(e.opacity)});var B="CSS"in e&&"supports"in e.CSS,A="supportsCSS"in e;x.addTest("supports",B||A);var j;!function(){var e={}.hasOwnProperty;j=o(e,"undefined")||o(e.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),k._l={},k.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),x.hasOwnProperty(e)&&setTimeout(function(){x._trigger(e,x[e])},0)},k._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,i;for(e=0;e<n.length;e++)(i=n[e])(t)},0),delete this._l[e]}},x._q.push(function(){k.addTest=a}),x.addTest("svgasimg",t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var E="Moz O ms Webkit",I=k._config.usePrefixes?E.split(" "):[];k._cssomPrefixes=I;var L=function(t){var i,o=M.length,r=e.CSSRule;if("undefined"==typeof r)return n;if(!t)return!1;if(t=t.replace(/^@/,""),i=t.replace(/-/g,"_").toUpperCase()+"_RULE",i in r)return"@"+t;for(var s=0;o>s;s++){var a=M[s],l=a.toUpperCase()+"_"+i;if(l in r)return"@-"+a.toLowerCase()+"-"+t}return!1};k.atRule=L;var W=k._config.usePrefixes?E.toLowerCase().split(" "):[];k._domPrefixes=W;var O=k.testStyles=u;x.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var i=["@media (",M.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");O(i,function(e){n=9===e.offsetTop})}return n}),x.addTest("checked",function(){return O("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(e){var t=s("input");return t.setAttribute("type","checkbox"),t.setAttribute("checked","checked"),e.appendChild(t),20===t.offsetLeft})}),O("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",function(e){var t,n=e.childNodes;t=n[0].offsetLeft<n[1].offsetLeft,x.addTest("displaytable",t,{aliases:["display-table"]})},2);var R=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),n=e.match(/w(eb)?osbrowser/gi),i=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,o=533>t&&e.match(/android/gi);return n||o||i}();R?x.addTest("fontface",!1):O('@font-face {font-family:"font";src:url("https://")}',function(e,n){var i=t.getElementById("smodernizr"),o=i.sheet||i.styleSheet,r=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"",s=/src/i.test(r)&&0===r.indexOf(n.split(" ")[0]);x.addTest("fontface",s)}),x.addTest("cssinvalid",function(){return O("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:invalid{width:50px}",function(e){var t=s("input");return t.required=!0,e.appendChild(t),t.clientWidth>10})}),O("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){x.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2),O("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){x.addTest("nthchild",function(){for(var t=e.getElementsByTagName("div"),n=!0,i=0;5>i;i++)n=n&&t[i].offsetWidth===i%2+1;return n})},5);var F=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return u("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();k.mq=F,x.addTest("mediaqueries",F("only all"));var N={elem:s("modernizr")};x._q.push(function(){delete N.elem});var H={style:N.elem.style};x._q.unshift(function(){delete H.style});var $=k.testProp=function(e,t,i){return h([e],n,t,i)};x.addTest("textshadow",$("textShadow","1px 1px")),k.testAllProps=v,k.testAllProps=b,x.addTest("bgpositionxy",function(){return b("backgroundPositionX","3px",!0)&&b("backgroundPositionY","5px",!0)}),x.addTest("backgroundsize",b("backgroundSize","100%",!0)),x.addTest("bgsizecover",b("backgroundSize","cover")),x.addTest("borderimage",b("borderImage","url() 1",!0)),x.addTest("borderradius",b("borderRadius","0px",!0)),x.addTest("boxshadow",b("boxShadow","1px 1px",!0)),x.addTest("boxsizing",b("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7)),x.addTest("flexbox",b("flexBasis","1px",!0)),x.addTest("flexboxlegacy",b("boxDirection","reverse",!0)),x.addTest("flexboxtweener",b("flexAlign","end",!0)),x.addTest("flexwrap",b("flexWrap","wrap",!0)),x.addAsyncTest(function(){function n(){function o(){try{var e=s("div"),n=s("span"),i=e.style,o=0,r=0,a=!1,l=t.body.firstElementChild||t.body.firstChild;return e.appendChild(n),n.innerHTML="Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.",t.body.insertBefore(e,l),i.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;",o=n.offsetHeight,r=n.offsetWidth,i.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;"+M.join("hyphens:auto; "),a=n.offsetHeight!=o||n.offsetWidth!=r,t.body.removeChild(e),e.removeChild(n),a}catch(e){return!1}}function r(e,n){try{var i=s("div"),o=s("span"),r=i.style,a=0,l=!1,d=!1,c=!1,u=t.body.firstElementChild||t.body.firstChild;return r.cssText="position:absolute;top:0;left:0;overflow:visible;width:1.25em;",i.appendChild(o),t.body.insertBefore(i,u),o.innerHTML="mm",a=o.offsetHeight,o.innerHTML="m"+e+"m",d=o.offsetHeight>a,n?(o.innerHTML="m<br />m",a=o.offsetWidth,o.innerHTML="m"+e+"m",c=o.offsetWidth>a):c=!0,d===!0&&c===!0&&(l=!0),t.body.removeChild(i),i.removeChild(o),l}catch(e){return!1}}function l(n){try{var i,o=s("input"),r=s("div"),a="lebowski",l=!1,d=t.body.firstElementChild||t.body.firstChild;if(r.innerHTML=a+n+a,t.body.insertBefore(r,d),t.body.insertBefore(o,r),o.setSelectionRange?(o.focus(),o.setSelectionRange(0,0)):o.createTextRange&&(i=o.createTextRange(),i.collapse(!0),i.moveEnd("character",0),i.moveStart("character",0),i.select()),e.find)l=e.find(a+a);else try{i=e.self.document.body.createTextRange(),l=i.findText(a+a)}catch(e){l=!1}return t.body.removeChild(r),t.body.removeChild(o),l}catch(e){return!1}}return t.body||t.getElementsByTagName("body")[0]?(a("csshyphens",function(){if(!b("hyphens","auto",!0))return!1;try{return o()}catch(e){return!1}}),a("softhyphens",function(){try{return r("&#173;",!0)&&r("&#8203;",!1)}catch(e){return!1}}),void a("softhyphensfind",function(){try{return l("&#173;")&&l("&#8203;")}catch(e){return!1}})):void setTimeout(n,i)}var i=300;setTimeout(n,i)}),x.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&b("transform","scale(1)",!0)}),x.addTest("csstransforms3d",function(){var e=!!b("perspective","1px",!0),t=x._config.usePrefixes;if(e&&(!t||"webkitPerspective"in C.style)){var n;x.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0}}",O(n,function(t){e=9===t.offsetLeft&&5===t.offsetHeight})}return e}),x.addTest("preserve3d",b("transformStyle","preserve-3d")),x.addTest("csstransitions",b("transition","all",!0));var q=k.prefixed=function(e,t,n){return 0===e.indexOf("@")?L(e):(-1!=e.indexOf("-")&&(e=l(e)),t?v(e,t,n):v(e,"pfx"))};x.addTest("objectfit",!!q("objectFit"),{aliases:["object-fit"]}),r(),i(y),delete k.addTest,delete k.addAsyncTest;for(var V=0;V<x._q.length;V++)x._q[V]();e.Modernizr=x}(window,document),Orient=function(e){function t(){return!(!window.matchMedia("(orientation:landscape)").matches&&90!=window.orientation&&window.orientation!=-90)}return e(document).ready(function(){Resizer.reset()}),{isLandscape:t}}(jQuery),Pg=function(e){function t(e){var e=e,t=window.location.pathname;return function(){return 0==t.indexOf("/"+e)||0==t.indexOf("/cn/"+e)||0==t.indexOf("/openarch-d8/"+e)||0==t.indexOf("/openarch-d8/cn/"+e)}}function n(){var e=i(window.location.pathname);return function(){return""==e||"/cn"==e||"/openarch-d8"==e||"/openarch-d8/cn"==e||"/openarch-d8/frontpage"==e||"/openarch-d8/cn/frontpage"==e}}function i(e){return e.endsWith("/")?e.slice(0,-1):e}return{isFront:n(),isProjTable:t("projects/table"),isAwards:t("awards"),isBooks:t("books"),isEvents:t("events"),isTask:t("task"),isPress:t("press"),isIdeas:t("ideas"),isPreopen:t("pre_open")}}(jQuery),MyPreloader=function(e){function t(){myVar=setTimeout(n,3e3)}function n(){console.log("showPage"),i.css("display","none"),r.css("display","block"),o.delay(500).fadeOut(function(){o.removeClass("bg--white"),o.show()})}var i=e(".preloader"),o=e(".preloader-screen"),r=e(".preloaded-content");e(document).ready(function(){o.addClass("bg--white")}),e(window).load(function(){t()})}(jQuery),MyReadmore=function(e){function t(){i.readmore({speed:300,moreLink:'<a class="morelink" href="#">More...</a>',lessLink:'<a class="morelink" href="#">Less</a>'})}function n(){i.readmore("toggle")}var i=e(".bd--expandable");return e(document).ready(function(){i.hide()}),e(window).load(function(){t(),i.show()}),public_API={init:t,toggle:n},public_API}(jQuery),Resizer=function(e){function t(){console.log("reset"),MySlider.reset(),MyFlexslider.reset(),MyFlexslider.resize()}return e(window).on("orientationchange",function(){console.log("on reorientation"),MyFullpage.reset()}),e(window).resize(function(){var n=e(document).data("resize-width"),i=e(document).width();n!=i&&(console.log("on resize"),t(),e(document).data("resize-width",i))}),{reset:t}}(jQuery),MySlider=function(e){function t(){n()}function n(){console.log("reset sidebar"),Pg.isFront()||MyFullpage.isEnabled()?(o(),a=!1):a||(Breakpoint.isWide()||Breakpoint.isWider()?(i(),a=!1):(o(),a=!1))}function i(){console.log("open sidebar"),l.removeClass("close"),l.addClass("open")}function o(){console.log("close sidebar"),l.removeClass("open"),l.addClass("close")}function r(){console.log("on sidebar toggle"),s()?o():i(),a=!0,MyFlexslider.reset(),MyFlexslider.resize(),MyVisor.update()}function s(){return l.hasClass("open")}var a=!1,l=e(".slider"),d=(l.find(".slider-drawer"),l.find(".slider-canvas"),l.find(".slider-toggler")),c=l.find(".slider-screen");return e(document).ready(function(){t()}),d.click(function(){r()}),c.click(function(){r()}),e(document).on("keydown",function(e){e.ctrlKey&&e.altKey&&83==e.keyCode&&r()}),public_API={toggle:r,isOpen:s,close:o,open:i,reset:n},public_API}(jQuery),MyVisor=function(e){function t(){d(),c()}function n(){p.removeClass("up"),f=!0,Pg.isFront()&&g.fadeOut()}function i(){p.addClass("up"),f=!1}function o(){m.fadeOut(200)}function r(){m.fadeIn(200)}function s(){p.addClass("border--b-lighter"),p.addClass("bg--white")}function a(){p.removeClass("border--b-lighter"),p.removeClass("bg--white")}function l(){p.removeClass("visor")}function d(){p.addClass("visor")}function c(){$scroll=e(window).scrollTop(),$rootFont=parseFloat(e("html").css("font-size")),$bufferSize=5*$rootFont*2,Pg.isFront()||($scroll>$bufferSize?s():a(),$scroll>10*$bufferSize?i():n()),$scroll>0||MySlider.isOpen()?o():r()}function u(){f?i():n()}var f=!0,p=e(".visor"),m=p.find(".visor-content"),g=(p.find(".visor-toggler"),e(".nameplate"));return e(document).ready(function(){t()}),e(window).resize(function(){t()}),e(window).scroll(function(){c()}),e(document).on("keydown",function(e){e.ctrlKey&&e.altKey&&72==e.keyCode&&u()}),public_API={toggle:u,up:i,down:n,disable:l,enable:d,update:c,addStyle:s,removeStyle:a},public_API}(jQuery);