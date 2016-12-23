Breakpoint=function(e){function t(e,t){var e=window.matchMedia("(min-width: "+e.toString()+"px)"),t=window.matchMedia("(max-width: "+t.toString()+"px)");return function(){return e.matches&&t.matches}}return{isTiny:t(0,350),isMobile:t(351,560),isNarrow:t(561,750),isWide:t(751,960),isWider:t(961,1200),isWidest:t(1201,1e5)}}(jQuery),MyFullpage=function(e){function t(){e("#fullpage").fullpage({menu:"#menu",lockAnchors:!1,anchors:["firstPage","secondPage","thirdPage"],navigation:!1,navigationPosition:"left",navigationTooltips:["Featured Work","OPEN Manifesto","Recent News"],showActiveTooltip:!1,slidesNavigation:!0,slidesNavPosition:"bottom",css3:!0,scrollingSpeed:700,autoScrolling:!1,fitToSection:!1,fitToSectionDelay:1e3,scrollBar:!0,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:"#element1, .element2",scrollOverflow:!1,scrollOverflowOptions:null,touchSensitivity:15,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,verticalCentered:!0,sectionsColor:["rgba(255,255,255,.1)","rgba(255,255,255,.9)"],paddingTop:"0",paddingBottom:"0",fixedElements:"#header, .footer",responsiveWidth:0,responsiveHeight:0,responsiveSlides:!0,sectionSelector:".section",slideSelector:".slide",lazyLoading:!1,onLeave:function(e,t,i){},afterLoad:function(e,t){},afterRender:function(){},afterResize:function(){},afterResponsive:function(e){},afterSlideLoad:function(e,t,i,n){},onSlideLeave:function(e,t,i,n,o){}})}function i(){e("#fullpage").fullpage({menu:"#menu",lockAnchors:!1,navigation:!1,navigationPosition:"left",showActiveTooltip:!1,slidesNavigation:!0,slidesNavPosition:"bottom",css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!1,fitToSectionDelay:1e3,scrollBar:!1,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,scrollOverflow:!0,touchSensitivity:15,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!1,verticalCentered:!1,paddingTop:"0",paddingBottom:"0",fixedElements:"#header, .footer",responsiveWidth:0,responsiveHeight:0,responsiveSlides:!0,sectionSelector:".section",slideSelector:".slide",lazyLoading:!0,onLeave:function(e,t,i){},afterLoad:function(e,t){},afterRender:function(){},afterResize:function(){},afterResponsive:function(e){},afterSlideLoad:function(e,t,i,n){},onSlideLeave:function(e,t,i,n,o){}})}function n(){e.fn.fullpage.destroy("all")}function o(){e.fn.fullpage.setAutoScrolling(!1)}function r(){e.fn.fullpage.setAutoScrolling(!0)}var a=Breakpoint.isWidest();e(".fullpage");return e(document).ready(function(){!Breakpoint.isWidest()||"/"!=window.location.pathname&&"/openarch-d8/"!=window.location.pathname||t(),!Breakpoint.isWidest()||"/events"!=window.location.pathname&&"/openarch-d8/events"!=window.location.pathname||i()}),e(window).resize(function(){wasWidest=a,a=Breakpoint.isWidest(),!wasWidest&&a&&t(),wasWidest&&!a&&n()}),public_API={disable:o,enable:r},public_API}(jQuery),jQuery(document).ready(function(e){e(".grid-toggle").click(function(){e(".grid-target").hasClass("grid-on")?e(".grid-target").removeClass("grid-on"):e(".grid-target").addClass("grid-on")}),!Breakpoint.isWidest()||"/"!=window.location.pathname&&"/openarch-d8/"!=window.location.pathname&&"/openarch-d8/eventss"!=window.location.pathname&&"/eventss"!=window.location.pathname||e(".main-content-wrapper").removeClass("buffer--main-top buffer--main-bottom")}),MediaCard=function(e){function t(){o.removeClass("media"),r.removeClass("media__img"),a.removeClass("media__contents")}function i(){o.addClass("media"),r.addClass("media__img"),a.addClass("media__contents")}var n=e(".mediaCard"),o=n,r=n.find(".media__img"),a=n.find(".media__contents");return e(document).ready(function(){Breakpoint.isWider()||Breakpoint.isWidest()?i():t()}),e(window).resize(function(){Breakpoint.isWider()||Breakpoint.isWidest()?i():t()}),public_API={disableMedia:t,enableMedia:i},public_API}(jQuery),MediaCard2=function(e){function t(){o.removeClass("media"),r.removeClass("media__img"),a.addClass("hide")}function i(){o.addClass("media"),r.addClass("media__img"),a.removeClass("hide")}var n=e(".relation"),o=n,r=n.find(".media__img"),a=n.find(".media__contents");return e(document).ready(function(){Breakpoint.isWide()||Breakpoint.isWider()||Breakpoint.isWidest()?i():t()}),e(window).resize(function(){Breakpoint.isWide()||Breakpoint.isWider()||Breakpoint.isWidest()?i():t()}),public_API={disableMedia:t,enableMedia:i},public_API}(jQuery),!function(e,t,i){function n(e){var t=x.className,i=T._config.classPrefix||"";if(C&&(t=t.baseVal),T._config.enableJSClass){var n=new RegExp("(^|\\s)"+i+"no-js(\\s|$)");t=t.replace(n,"$1"+i+"js$2")}T._config.enableClasses&&(t+=" "+i+e.join(" "+i),C?x.className.baseVal=t:x.className=t)}function o(e,t){return typeof e===t}function r(){var e,t,i,n,r,a,s;for(var d in w){if(e=[],t=w[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(i=0;i<t.options.aliases.length;i++)e.push(t.options.aliases[i].toLowerCase());for(n=o(t.fn,"function")?t.fn():t.fn,r=0;r<e.length;r++)a=e[r],s=a.split("."),1===s.length?T[s[0]]=n:(!T[s[0]]||T[s[0]]instanceof Boolean||(T[s[0]]=new Boolean(T[s[0]])),T[s[0]][s[1]]=n),y.push((n?"":"no-")+s.join("-"))}}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):C?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(e,t){if("object"==typeof e)for(var i in e)E(e,i)&&s(i,e[i]);else{e=e.toLowerCase();var o=e.split("."),r=T[o[0]];if(2==o.length&&(r=r[o[1]]),"undefined"!=typeof r)return T;t="function"==typeof t?t():t,1==o.length?T[o[0]]=t:(!T[o[0]]||T[o[0]]instanceof Boolean||(T[o[0]]=new Boolean(T[o[0]])),T[o[0]][o[1]]=t),n([(t&&0!=t?"":"no-")+o.join("-")]),T._trigger(e,t)}return T}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,i){return t+i.toUpperCase()}).replace(/^-/,"")}function l(e,t){return!!~(""+e).indexOf(t)}function c(){var e=t.body;return e||(e=a(C?"svg":"body"),e.fake=!0),e}function u(e,i,n,o){var r,s,d,l,u="modernizr",f=a("div"),p=c();if(parseInt(n,10))for(;n--;)d=a("div"),d.id=o?o[n]:u+(n+1),f.appendChild(d);return r=a("style"),r.type="text/css",r.id="s"+u,(p.fake?p:f).appendChild(r),p.appendChild(f),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(t.createTextNode(e)),f.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",l=x.style.overflow,x.style.overflow="hidden",x.appendChild(p)),s=i(f,e),p.fake?(p.parentNode.removeChild(p),x.style.overflow=l,x.offsetHeight):f.parentNode.removeChild(f),!!s}function f(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,i){var n;for(var r in e)if(e[r]in t)return i===!1?e[r]:(n=t[e[r]],o(n,"function")?f(n,i||t):n);return!1}function m(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function h(t,n){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(m(t[o]),n))return!0;return!1}if("CSSSupportsRule"in e){for(var r=[];o--;)r.push("("+m(t[o])+":"+n+")");return r=r.join(" or "),u("@supports ("+r+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return i}function g(e,t,n,r){function s(){u&&(delete I.style,delete I.modElem)}if(r=!o(r,"undefined")&&r,!o(n,"undefined")){var c=h(e,n);if(!o(c,"undefined"))return c}for(var u,f,p,m,g,v=["modernizr","tspan"];!I.style;)u=!0,I.modElem=a(v.shift()),I.style=I.modElem.style;for(p=e.length,f=0;p>f;f++)if(m=e[f],g=I.style[m],l(m,"-")&&(m=d(m)),I.style[m]!==i){if(r||o(n,"undefined"))return s(),"pfx"!=t||m;try{I.style[m]=n}catch(e){}if(I.style[m]!=g)return s(),"pfx"!=t||m}return s(),!1}function v(e,t,i,n,r){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+L.join(a+" ")+a).split(" ");return o(t,"string")||o(t,"undefined")?g(s,t,n,r):(s=(e+" "+R.join(a+" ")+a).split(" "),p(s,t,i))}function b(e,t,n){return v(e,i,i,t,n)}var y=[],w=[],k={_version:"3.0.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var i=this;setTimeout(function(){t(i[e])},0)},addTest:function(e,t,i){w.push({name:e,fn:t,options:i})},addAsyncTest:function(e){w.push({name:null,fn:e})}},T=function(){};T.prototype=k,T=new T,T.addTest("cookies",function(){try{t.cookie="cookietest=1";var e=-1!=t.cookie.indexOf("cookietest=");return t.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(e){return!1}}),T.addTest("ie8compat",!e.addEventListener&&!!t.documentMode&&7===t.documentMode),T.addTest("serviceworker","serviceWorker"in navigator),T.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),T.addTest("websockets","WebSocket"in e&&2===e.WebSocket.CLOSING);var x=t.documentElement,C="svg"===x.nodeName.toLowerCase();T.addTest("canvas",function(){var e=a("canvas");return!(!e.getContext||!e.getContext("2d"))}),T.addTest("canvastext",function(){return T.canvas!==!1&&"function"==typeof a("canvas").getContext("2d").fillText});var S=a("input"),_="search tel url email datetime date month week time datetime-local number range color".split(" "),W={};T.inputtypes=function(e){for(var n,o,r,a=e.length,s=":)",d=0;a>d;d++)S.setAttribute("type",n=e[d]),r="text"!==S.type&&"style"in S,r&&(S.value=s,S.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(n)&&S.style.WebkitAppearance!==i?(x.appendChild(S),o=t.defaultView,r=o.getComputedStyle&&"textfield"!==o.getComputedStyle(S,null).WebkitAppearance&&0!==S.offsetHeight,x.removeChild(S)):/^(search|tel)$/.test(n)||(r=/^(url|email|number)$/.test(n)?S.checkValidity&&S.checkValidity()===!1:S.value!=s)),W[e[d]]=!!r;return W}(_),T.addTest("userdata",!!a("div").addBehavior),T.addTest("video",function(){var e=a("video"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(e){}return t}),T.addTest("multiplebgs",function(){var e=a("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),T.addTest("rgba",function(){var e=a("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),T.addTest("placeholder","placeholder"in a("input")&&"placeholder"in a("textarea")),T.addTest("inlinesvg",function(){var e=a("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var B=function(e){function i(t,i){var o;return!!t&&(i&&"string"!=typeof i||(i=a(i||"div")),t="on"+t,o=t in i,!o&&n&&(i.setAttribute||(i=a("div")),i.setAttribute(t,""),o="function"==typeof i[t],i[t]!==e&&(i[t]=e),i.removeAttribute(t)),o)}var n=!("onblur"in t.documentElement);return i}();k.hasEvent=B,T.addTest("ambientlight",B("devicelight",e)),T.addTest("inputsearchevent",B("search"));var z=k._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];k._prefixes=z,T.addTest("csscalc",function(){var e="width:",t="calc(10px);",i=a("a");return i.style.cssText=e+z.join(t+e),!!i.style.length}),T.addTest("cssgradients",function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",i="linear-gradient(left top,#9f9, white);",n=e+z.join(i+e).slice(0,-e.length);T._config.usePrefixes&&(n+=e+"-webkit-"+t);var o=a("a"),r=o.style;return r.cssText=n,(""+r.backgroundImage).indexOf("gradient")>-1}),T.addTest("opacity",function(){var e=a("a").style;return e.cssText=z.join("opacity:.55;"),/^0.55$/.test(e.opacity)});var P="CSS"in e&&"supports"in e.CSS,A="supportsCSS"in e;T.addTest("supports",P||A);var E;!function(){var e={}.hasOwnProperty;E=o(e,"undefined")||o(e.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(t,i){return e.call(t,i)}}(),k._l={},k.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),T.hasOwnProperty(e)&&setTimeout(function(){T._trigger(e,T[e])},0)},k._trigger=function(e,t){if(this._l[e]){var i=this._l[e];setTimeout(function(){var e,n;for(e=0;e<i.length;e++)(n=i[e])(t)},0),delete this._l[e]}},T._q.push(function(){k.addTest=s}),T.addTest("svgasimg",t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var j="Moz O ms Webkit",L=k._config.usePrefixes?j.split(" "):[];k._cssomPrefixes=L;var M=function(t){var n,o=z.length,r=e.CSSRule;if("undefined"==typeof r)return i;if(!t)return!1;if(t=t.replace(/^@/,""),n=t.replace(/-/g,"_").toUpperCase()+"_RULE",n in r)return"@"+t;for(var a=0;o>a;a++){var s=z[a],d=s.toUpperCase()+"_"+n;if(d in r)return"@-"+s.toLowerCase()+"-"+t}return!1};k.atRule=M;var R=k._config.usePrefixes?j.toLowerCase().split(" "):[];k._domPrefixes=R;var H=k.testStyles=u;T.addTest("touchevents",function(){var i;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)i=!0;else{var n=["@media (",z.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");H(n,function(e){i=9===e.offsetTop})}return i}),T.addTest("checked",function(){return H("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(e){var t=a("input");return t.setAttribute("type","checkbox"),t.setAttribute("checked","checked"),e.appendChild(t),20===t.offsetLeft})}),H("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",function(e){var t,i=e.childNodes;t=i[0].offsetLeft<i[1].offsetLeft,T.addTest("displaytable",t,{aliases:["display-table"]})},2);var N=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),i=e.match(/w(eb)?osbrowser/gi),n=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,o=533>t&&e.match(/android/gi);return i||o||n}();N?T.addTest("fontface",!1):H('@font-face {font-family:"font";src:url("https://")}',function(e,i){var n=t.getElementById("smodernizr"),o=n.sheet||n.styleSheet,r=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"",a=/src/i.test(r)&&0===r.indexOf(i.split(" ")[0]);T.addTest("fontface",a)}),T.addTest("cssinvalid",function(){return H("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:invalid{width:50px}",function(e){var t=a("input");return t.required=!0,e.appendChild(t),t.clientWidth>10})}),H("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){T.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2),H("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){T.addTest("nthchild",function(){for(var t=e.getElementsByTagName("div"),i=!0,n=0;5>n;n++)i=i&&t[n].offsetWidth===n%2+1;return i})},5);var q=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var i=t(e);return i&&i.matches||!1}:function(t){var i=!1;return u("@media "+t+" { #modernizr { position: absolute; } }",function(t){i="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),i}}();k.mq=q,T.addTest("mediaqueries",q("only all"));var O={elem:a("modernizr")};T._q.push(function(){delete O.elem});var I={style:O.elem.style};T._q.unshift(function(){delete I.style});var $=k.testProp=function(e,t,n){return g([e],i,t,n)};T.addTest("textshadow",$("textShadow","1px 1px")),k.testAllProps=v,k.testAllProps=b,T.addTest("bgpositionxy",function(){return b("backgroundPositionX","3px",!0)&&b("backgroundPositionY","5px",!0)}),T.addTest("backgroundsize",b("backgroundSize","100%",!0)),T.addTest("bgsizecover",b("backgroundSize","cover")),T.addTest("borderimage",b("borderImage","url() 1",!0)),T.addTest("borderradius",b("borderRadius","0px",!0)),T.addTest("boxshadow",b("boxShadow","1px 1px",!0)),T.addTest("boxsizing",b("boxSizing","border-box",!0)&&(t.documentMode===i||t.documentMode>7)),T.addTest("flexbox",b("flexBasis","1px",!0)),T.addTest("flexboxlegacy",b("boxDirection","reverse",!0)),T.addTest("flexboxtweener",b("flexAlign","end",!0)),T.addTest("flexwrap",b("flexWrap","wrap",!0)),T.addAsyncTest(function(){function i(){function o(){try{var e=a("div"),i=a("span"),n=e.style,o=0,r=0,s=!1,d=t.body.firstElementChild||t.body.firstChild;return e.appendChild(i),i.innerHTML="Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.",t.body.insertBefore(e,d),n.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;",o=i.offsetHeight,r=i.offsetWidth,n.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;"+z.join("hyphens:auto; "),s=i.offsetHeight!=o||i.offsetWidth!=r,t.body.removeChild(e),e.removeChild(i),s}catch(e){return!1}}function r(e,i){try{var n=a("div"),o=a("span"),r=n.style,s=0,d=!1,l=!1,c=!1,u=t.body.firstElementChild||t.body.firstChild;return r.cssText="position:absolute;top:0;left:0;overflow:visible;width:1.25em;",n.appendChild(o),t.body.insertBefore(n,u),o.innerHTML="mm",s=o.offsetHeight,o.innerHTML="m"+e+"m",l=o.offsetHeight>s,i?(o.innerHTML="m<br />m",s=o.offsetWidth,o.innerHTML="m"+e+"m",c=o.offsetWidth>s):c=!0,l===!0&&c===!0&&(d=!0),t.body.removeChild(n),n.removeChild(o),d}catch(e){return!1}}function d(i){try{var n,o=a("input"),r=a("div"),s="lebowski",d=!1,l=t.body.firstElementChild||t.body.firstChild;if(r.innerHTML=s+i+s,t.body.insertBefore(r,l),t.body.insertBefore(o,r),o.setSelectionRange?(o.focus(),o.setSelectionRange(0,0)):o.createTextRange&&(n=o.createTextRange(),n.collapse(!0),n.moveEnd("character",0),n.moveStart("character",0),n.select()),e.find)d=e.find(s+s);else try{n=e.self.document.body.createTextRange(),d=n.findText(s+s)}catch(e){d=!1}return t.body.removeChild(r),t.body.removeChild(o),d}catch(e){return!1}}return t.body||t.getElementsByTagName("body")[0]?(s("csshyphens",function(){if(!b("hyphens","auto",!0))return!1;try{return o()}catch(e){return!1}}),s("softhyphens",function(){try{return r("&#173;",!0)&&r("&#8203;",!1)}catch(e){return!1}}),void s("softhyphensfind",function(){try{return d("&#173;")&&d("&#8203;")}catch(e){return!1}})):void setTimeout(i,n)}var n=300;setTimeout(i,n)}),T.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&b("transform","scale(1)",!0)}),T.addTest("csstransforms3d",function(){var e=!!b("perspective","1px",!0),t=T._config.usePrefixes;if(e&&(!t||"webkitPerspective"in x.style)){var i;T.supports?i="@supports (perspective: 1px)":(i="@media (transform-3d)",t&&(i+=",(-webkit-transform-3d)")),i+="{#modernizr{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0}}",H(i,function(t){e=9===t.offsetLeft&&5===t.offsetHeight})}return e}),T.addTest("preserve3d",b("transformStyle","preserve-3d")),T.addTest("csstransitions",b("transition","all",!0));var V=k.prefixed=function(e,t,i){return 0===e.indexOf("@")?M(e):(-1!=e.indexOf("-")&&(e=d(e)),t?v(e,t,i):v(e,"pfx"))};T.addTest("objectfit",!!V("objectFit"),{aliases:["object-fit"]}),r(),n(y),delete k.addTest,delete k.addAsyncTest;for(var U=0;U<T._q.length;U++)T._q[U]();e.Modernizr=T}(window,document),MySlider=function(e){function t(){d&&(l.addClass("close"),a=!1)}function i(){l.hasClass("close")?l.removeClass("close"):l.addClass("open"),a=!0}function n(){l.hasClass("open")?l.removeClass("open"):l.addClass("close"),a=!1}function o(){wasWide=s,s=Breakpoint.isWide()||Breakpoint.isWider()||Breakpoint.isWidest(),wasFull=d,d=Breakpoint.isWidest(),wasWide||!s||a||(a=!0),!wasWide&&s&&a&&(l.removeClass("open close"),a=!0),!wasWide||s||a||l.removeClass("open close"),wasWide&&!s&&a&&(a=!1),d&&(l.addClass("close"),a=!1),wasFull&&!d&&(l.removeClass("close"),a=!0)}function r(){a?n():i()}var a=Breakpoint.isWide()||Breakpoint.isWider(),s=Breakpoint.isWide()||Breakpoint.isWider(),d=Breakpoint.isWidest(),l=e(".slider");e(".slider-drawer"),e(".slider-canvas");return e(document).ready(function(){t()}),e(window).resize(function(){o()}),e(".slider-toggler").click(function(){r()}),public_API={toggle:r,isOpen:a},public_API}(jQuery);