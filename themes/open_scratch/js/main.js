Breakpoint=function(e){function t(e,t){var e=window.matchMedia("(min-width: "+e.toString()+"px)"),t=window.matchMedia("(max-width: "+t.toString()+"px)");return function(){return e.matches&&t.matches}}return{isTiny:t(0,350),isMobile:t(351,560),isNarrow:t(561,750),isWide:t(751,1050),isWider:t(1051,1200),isWidest:t(1201,1440),isFull:t(1441,1e5)}}(jQuery),Flexslider=function(e){e(window).load(function(){total_width=0,e(".slides > li").each(function(){total_width+=e(this).width()}),avg_width=total_width/e(".slides > li").length,e(".flexslider").flexslider({itemWidth:avg_width})})}(jQuery),MyFullpage=function(e){function t(){s.hide(),e("#fullpage").fullpage({menu:"#menu",lockAnchors:!1,anchors:["firstPage","secondPage","thirdPage"],navigation:!1,navigationPosition:"left",navigationTooltips:["Featured Work","OPEN Manifesto","Recent News"],showActiveTooltip:!1,slidesNavigation:!0,slidesNavPosition:"bottom",css3:!0,scrollingSpeed:700,autoScrolling:!1,fitToSection:!1,fitToSectionDelay:1e3,scrollBar:!1,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:"#element1, .element2",scrollOverflow:!1,scrollOverflowOptions:null,touchSensitivity:15,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,verticalCentered:!0,sectionsColor:["rgba(255,255,255,.1)","rgb(255,255,255)"],paddingTop:"0",paddingBottom:"0",responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,sectionSelector:".fullpage__section",slideSelector:".fullpage__slide",lazyLoading:!1,onLeave:function(e,t,i){2==e&&s.fadeOut(),1==e&&l.fadeOut()},afterLoad:function(e,t){2==t&&s.fadeIn(),1==t&&l.fadeIn()},afterRender:function(){},afterResize:function(){},afterResponsive:function(e){},afterSlideLoad:function(e,t,i,n){},onSlideLeave:function(e,t,i,n,o){}})}function i(){e.fn.fullpage.destroy("all")}function n(){e.fn.fullpage.setAutoScrolling(!1)}function o(){e.fn.fullpage.setAutoScrolling(!0)}var a=Breakpoint.isWidest(),r=Breakpoint.isFull(),s=(e(".fullpage"),e(".main-header-layout")),l=e(".nameplate");e(".manifesto"),e(".recent-news");return e(document).ready(function(){!Breakpoint.isFull()&&!Breakpoint.isWidest()||"/"!=window.location.pathname&&"/openarch-d8/"!=window.location.pathname&&"/openarch-d8/cn"!=window.location.pathname&&"/openarch-d8/cn/"!=window.location.pathname||t()}),e(window).resize(function(){wasWidest=a,wasFull=r,a=Breakpoint.isWidest(),r=Breakpoint.isFull(),onFrontPage="/"==window.location.pathname||"/openarch-d8/"==window.location.pathname||"/openarch-d8/cn"==window.location.pathname||"/openarch-d8/cn/"==window.location.pathname,!onFrontPage||wasWidest||wasFull||!a&&!r||t(),!onFrontPage||!wasWidest&&!wasFull||a||r||i()}),public_API={disable:n,enable:o},public_API}(jQuery),jQuery(document).ready(function(e){e(document).on("keydown",function(t){71==t.keyCode&&(e(".grid-target").hasClass("grid-on")?e(".grid-target").removeClass("grid-on"):e(".grid-target").addClass("grid-on")),73==t.keyCode&&(e("table").hasClass("invert")?e("table").removeClass("invert"):e("table").addClass("invert"),e(".title").hasClass("invert")?e(".title").removeClass("invert"):e(".title").addClass("invert"),e(".tag").hasClass("invert")?e(".tag").removeClass("invert"):e(".tag").addClass("invert"),e(".focus").hasClass("invert")?e(".focus").removeClass("invert"):e(".focus").addClass("invert"),e(".menu").hasClass("invert")?e(".menu").removeClass("invert"):e(".menu").addClass("invert"),e(".bg").hasClass("invert")?e(".bg").removeClass("invert"):e(".bg").addClass("invert"),e("body").hasClass("invert")?e("body").removeClass("invert"):e("body").addClass("invert"),e(".sidebar").hasClass("invert")?e(".sidebar").removeClass("invert"):e(".sidebar").addClass("invert"),e(".c--black").hasClass("c--white")?e(".c--black").removeClass("c--white"):e(".c--black").addClass("c--white"))}),!Breakpoint.isWidest()||"/"!=window.location.pathname&&"/openarch-d8/"!=window.location.pathname||e(".main-content-wrapper").removeClass("buffer--main-top buffer--main-bottom"),e(function(){var t=window.location.pathname.split("/"),i=t[t.length-1];"practice"!=i&&"gallery"!=i&&"videos"!=i&&"press"!=i||e(".main-content__primary").removeClass("border--top")}),e(function(){e(".icon").each(function(){e(this).attr("href")==window.location.pathname.substr(0)&&e(this).addClass("active")})}),e(".expandable input:checkbox:first").attr("checked",!0),e("a[rel~='keep-params']").click(function(t){t.preventDefault();var i=window.location.search,n=e(this).attr("href")+i;window.setTimeout(function(){window.location.href=n},100)}),e(".row--clickable").click(function(){var t=e(this),i=t.find("a");window.document.location=i.attr("href")})}),MediaCard=function(e){function t(){o.removeClass("media"),a.removeClass("media__img"),r.removeClass("media__contents")}function i(){o.addClass("media"),a.addClass("media__img"),r.addClass("media__contents")}var n=e(".mediaCard"),o=n,a=n.find(".media__img"),r=n.find(".media__contents");return e(document).ready(function(){Breakpoint.isWider()||Breakpoint.isWidest()||Breakpoint.isFull()?i():t()}),e(window).resize(function(){Breakpoint.isWider()||Breakpoint.isWidest()||Breakpoint.isFull()?i():t()}),public_API={disableMedia:t,enableMedia:i},public_API}(jQuery),MediaCard2=function(e){function t(){o.removeClass("media"),a.removeClass("media__img"),r.addClass("hide")}function i(){o.addClass("media"),a.addClass("media__img"),r.removeClass("hide")}var n=e(".relation"),o=n,a=n.find(".media__img"),r=n.find(".media__contents");return e(document).ready(function(){Breakpoint.isWide()||Breakpoint.isWider()||Breakpoint.isWidest()||Breakpoint.isFull()?i():t()}),e(window).resize(function(){Breakpoint.isWide()||Breakpoint.isWider()||Breakpoint.isWidest()||Breakpoint.isFull()?i():t()}),public_API={disableMedia:t,enableMedia:i},public_API}(jQuery),!function(e,t,i){function n(e){var t=x.className,i=C._config.classPrefix||"";if(T&&(t=t.baseVal),C._config.enableJSClass){var n=new RegExp("(^|\\s)"+i+"no-js(\\s|$)");t=t.replace(n,"$1"+i+"js$2")}C._config.enableClasses&&(t+=" "+i+e.join(" "+i),T?x.className.baseVal=t:x.className=t)}function o(e,t){return typeof e===t}function a(){var e,t,i,n,a,r,s;for(var l in w){if(e=[],t=w[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(i=0;i<t.options.aliases.length;i++)e.push(t.options.aliases[i].toLowerCase());for(n=o(t.fn,"function")?t.fn():t.fn,a=0;a<e.length;a++)r=e[a],s=r.split("."),1===s.length?C[s[0]]=n:(!C[s[0]]||C[s[0]]instanceof Boolean||(C[s[0]]=new Boolean(C[s[0]])),C[s[0]][s[1]]=n),y.push((n?"":"no-")+s.join("-"))}}function r(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):T?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(e,t){if("object"==typeof e)for(var i in e)j(e,i)&&s(i,e[i]);else{e=e.toLowerCase();var o=e.split("."),a=C[o[0]];if(2==o.length&&(a=a[o[1]]),"undefined"!=typeof a)return C;t="function"==typeof t?t():t,1==o.length?C[o[0]]=t:(!C[o[0]]||C[o[0]]instanceof Boolean||(C[o[0]]=new Boolean(C[o[0]])),C[o[0]][o[1]]=t),n([(t&&0!=t?"":"no-")+o.join("-")]),C._trigger(e,t)}return C}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,i){return t+i.toUpperCase()}).replace(/^-/,"")}function d(e,t){return!!~(""+e).indexOf(t)}function c(){var e=t.body;return e||(e=r(T?"svg":"body"),e.fake=!0),e}function u(e,i,n,o){var a,s,l,d,u="modernizr",f=r("div"),p=c();if(parseInt(n,10))for(;n--;)l=r("div"),l.id=o?o[n]:u+(n+1),f.appendChild(l);return a=r("style"),a.type="text/css",a.id="s"+u,(p.fake?p:f).appendChild(a),p.appendChild(f),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),f.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",d=x.style.overflow,x.style.overflow="hidden",x.appendChild(p)),s=i(f,e),p.fake?(p.parentNode.removeChild(p),x.style.overflow=d,x.offsetHeight):f.parentNode.removeChild(f),!!s}function f(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,i){var n;for(var a in e)if(e[a]in t)return i===!1?e[a]:(n=t[e[a]],o(n,"function")?f(n,i||t):n);return!1}function m(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function h(t,n){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(m(t[o]),n))return!0;return!1}if("CSSSupportsRule"in e){for(var a=[];o--;)a.push("("+m(t[o])+":"+n+")");return a=a.join(" or "),u("@supports ("+a+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return i}function v(e,t,n,a){function s(){u&&(delete I.style,delete I.modElem)}if(a=!o(a,"undefined")&&a,!o(n,"undefined")){var c=h(e,n);if(!o(c,"undefined"))return c}for(var u,f,p,m,v,g=["modernizr","tspan"];!I.style;)u=!0,I.modElem=r(g.shift()),I.style=I.modElem.style;for(p=e.length,f=0;p>f;f++)if(m=e[f],v=I.style[m],d(m,"-")&&(m=l(m)),I.style[m]!==i){if(a||o(n,"undefined"))return s(),"pfx"!=t||m;try{I.style[m]=n}catch(e){}if(I.style[m]!=v)return s(),"pfx"!=t||m}return s(),!1}function g(e,t,i,n,a){var r=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+M.join(r+" ")+r).split(" ");return o(t,"string")||o(t,"undefined")?v(s,t,n,a):(s=(e+" "+F.join(r+" ")+r).split(" "),p(s,t,i))}function b(e,t,n){return g(e,i,i,t,n)}var y=[],w=[],k={_version:"3.0.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var i=this;setTimeout(function(){t(i[e])},0)},addTest:function(e,t,i){w.push({name:e,fn:t,options:i})},addAsyncTest:function(e){w.push({name:null,fn:e})}},C=function(){};C.prototype=k,C=new C,C.addTest("cookies",function(){try{t.cookie="cookietest=1";var e=-1!=t.cookie.indexOf("cookietest=");return t.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(e){return!1}}),C.addTest("ie8compat",!e.addEventListener&&!!t.documentMode&&7===t.documentMode),C.addTest("serviceworker","serviceWorker"in navigator),C.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),C.addTest("websockets","WebSocket"in e&&2===e.WebSocket.CLOSING);var x=t.documentElement,T="svg"===x.nodeName.toLowerCase();C.addTest("canvas",function(){var e=r("canvas");return!(!e.getContext||!e.getContext("2d"))}),C.addTest("canvastext",function(){return C.canvas!==!1&&"function"==typeof r("canvas").getContext("2d").fillText});var S=r("input"),_="search tel url email datetime date month week time datetime-local number range color".split(" "),B={};C.inputtypes=function(e){for(var n,o,a,r=e.length,s=":)",l=0;r>l;l++)S.setAttribute("type",n=e[l]),a="text"!==S.type&&"style"in S,a&&(S.value=s,S.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(n)&&S.style.WebkitAppearance!==i?(x.appendChild(S),o=t.defaultView,a=o.getComputedStyle&&"textfield"!==o.getComputedStyle(S,null).WebkitAppearance&&0!==S.offsetHeight,x.removeChild(S)):/^(search|tel)$/.test(n)||(a=/^(url|email|number)$/.test(n)?S.checkValidity&&S.checkValidity()===!1:S.value!=s)),B[e[l]]=!!a;return B}(_),C.addTest("userdata",!!r("div").addBehavior),C.addTest("video",function(){var e=r("video"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(e){}return t}),C.addTest("multiplebgs",function(){var e=r("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),C.addTest("rgba",function(){var e=r("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),C.addTest("placeholder","placeholder"in r("input")&&"placeholder"in r("textarea")),C.addTest("inlinesvg",function(){var e=r("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var W=function(e){function i(t,i){var o;return!!t&&(i&&"string"!=typeof i||(i=r(i||"div")),t="on"+t,o=t in i,!o&&n&&(i.setAttribute||(i=r("div")),i.setAttribute(t,""),o="function"==typeof i[t],i[t]!==e&&(i[t]=e),i.removeAttribute(t)),o)}var n=!("onblur"in t.documentElement);return i}();k.hasEvent=W,C.addTest("ambientlight",W("devicelight",e)),C.addTest("inputsearchevent",W("search"));var z=k._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];k._prefixes=z,C.addTest("csscalc",function(){var e="width:",t="calc(10px);",i=r("a");return i.style.cssText=e+z.join(t+e),!!i.style.length}),C.addTest("cssgradients",function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",i="linear-gradient(left top,#9f9, white);",n=e+z.join(i+e).slice(0,-e.length);C._config.usePrefixes&&(n+=e+"-webkit-"+t);var o=r("a"),a=o.style;return a.cssText=n,(""+a.backgroundImage).indexOf("gradient")>-1}),C.addTest("opacity",function(){var e=r("a").style;return e.cssText=z.join("opacity:.55;"),/^0.55$/.test(e.opacity)});var P="CSS"in e&&"supports"in e.CSS,A="supportsCSS"in e;C.addTest("supports",P||A);var j;!function(){var e={}.hasOwnProperty;j=o(e,"undefined")||o(e.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(t,i){return e.call(t,i)}}(),k._l={},k.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),C.hasOwnProperty(e)&&setTimeout(function(){C._trigger(e,C[e])},0)},k._trigger=function(e,t){if(this._l[e]){var i=this._l[e];setTimeout(function(){var e,n;for(e=0;e<i.length;e++)(n=i[e])(t)},0),delete this._l[e]}},C._q.push(function(){k.addTest=s}),C.addTest("svgasimg",t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"));var E="Moz O ms Webkit",M=k._config.usePrefixes?E.split(" "):[];k._cssomPrefixes=M;var L=function(t){var n,o=z.length,a=e.CSSRule;if("undefined"==typeof a)return i;if(!t)return!1;if(t=t.replace(/^@/,""),n=t.replace(/-/g,"_").toUpperCase()+"_RULE",n in a)return"@"+t;for(var r=0;o>r;r++){var s=z[r],l=s.toUpperCase()+"_"+n;if(l in a)return"@-"+s.toLowerCase()+"-"+t}return!1};k.atRule=L;var F=k._config.usePrefixes?E.toLowerCase().split(" "):[];k._domPrefixes=F;var R=k.testStyles=u;C.addTest("touchevents",function(){var i;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)i=!0;else{var n=["@media (",z.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");R(n,function(e){i=9===e.offsetTop})}return i}),C.addTest("checked",function(){return R("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(e){var t=r("input");return t.setAttribute("type","checkbox"),t.setAttribute("checked","checked"),e.appendChild(t),20===t.offsetLeft})}),R("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",function(e){var t,i=e.childNodes;t=i[0].offsetLeft<i[1].offsetLeft,C.addTest("displaytable",t,{aliases:["display-table"]})},2);var $=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),i=e.match(/w(eb)?osbrowser/gi),n=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,o=533>t&&e.match(/android/gi);return i||o||n}();$?C.addTest("fontface",!1):R('@font-face {font-family:"font";src:url("https://")}',function(e,i){var n=t.getElementById("smodernizr"),o=n.sheet||n.styleSheet,a=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"",r=/src/i.test(a)&&0===a.indexOf(i.split(" ")[0]);C.addTest("fontface",r)}),C.addTest("cssinvalid",function(){return R("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:invalid{width:50px}",function(e){var t=r("input");return t.required=!0,e.appendChild(t),t.clientWidth>10})}),R("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){C.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2),R("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){C.addTest("nthchild",function(){for(var t=e.getElementsByTagName("div"),i=!0,n=0;5>n;n++)i=i&&t[n].offsetWidth===n%2+1;return i})},5);var q=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var i=t(e);return i&&i.matches||!1}:function(t){var i=!1;return u("@media "+t+" { #modernizr { position: absolute; } }",function(t){i="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),i}}();k.mq=q,C.addTest("mediaqueries",q("only all"));var H={elem:r("modernizr")};C._q.push(function(){delete H.elem});var I={style:H.elem.style};C._q.unshift(function(){delete I.style});var N=k.testProp=function(e,t,n){return v([e],i,t,n)};C.addTest("textshadow",N("textShadow","1px 1px")),k.testAllProps=g,k.testAllProps=b,C.addTest("bgpositionxy",function(){return b("backgroundPositionX","3px",!0)&&b("backgroundPositionY","5px",!0)}),C.addTest("backgroundsize",b("backgroundSize","100%",!0)),C.addTest("bgsizecover",b("backgroundSize","cover")),C.addTest("borderimage",b("borderImage","url() 1",!0)),C.addTest("borderradius",b("borderRadius","0px",!0)),C.addTest("boxshadow",b("boxShadow","1px 1px",!0)),C.addTest("boxsizing",b("boxSizing","border-box",!0)&&(t.documentMode===i||t.documentMode>7)),C.addTest("flexbox",b("flexBasis","1px",!0)),C.addTest("flexboxlegacy",b("boxDirection","reverse",!0)),C.addTest("flexboxtweener",b("flexAlign","end",!0)),C.addTest("flexwrap",b("flexWrap","wrap",!0)),C.addAsyncTest(function(){function i(){function o(){try{var e=r("div"),i=r("span"),n=e.style,o=0,a=0,s=!1,l=t.body.firstElementChild||t.body.firstChild;return e.appendChild(i),i.innerHTML="Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.",t.body.insertBefore(e,l),n.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;",o=i.offsetHeight,a=i.offsetWidth,n.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;"+z.join("hyphens:auto; "),s=i.offsetHeight!=o||i.offsetWidth!=a,t.body.removeChild(e),e.removeChild(i),s}catch(e){return!1}}function a(e,i){try{var n=r("div"),o=r("span"),a=n.style,s=0,l=!1,d=!1,c=!1,u=t.body.firstElementChild||t.body.firstChild;return a.cssText="position:absolute;top:0;left:0;overflow:visible;width:1.25em;",n.appendChild(o),t.body.insertBefore(n,u),o.innerHTML="mm",s=o.offsetHeight,o.innerHTML="m"+e+"m",d=o.offsetHeight>s,i?(o.innerHTML="m<br />m",s=o.offsetWidth,o.innerHTML="m"+e+"m",c=o.offsetWidth>s):c=!0,d===!0&&c===!0&&(l=!0),t.body.removeChild(n),n.removeChild(o),l}catch(e){return!1}}function l(i){try{var n,o=r("input"),a=r("div"),s="lebowski",l=!1,d=t.body.firstElementChild||t.body.firstChild;if(a.innerHTML=s+i+s,t.body.insertBefore(a,d),t.body.insertBefore(o,a),o.setSelectionRange?(o.focus(),o.setSelectionRange(0,0)):o.createTextRange&&(n=o.createTextRange(),n.collapse(!0),n.moveEnd("character",0),n.moveStart("character",0),n.select()),e.find)l=e.find(s+s);else try{n=e.self.document.body.createTextRange(),l=n.findText(s+s)}catch(e){l=!1}return t.body.removeChild(a),t.body.removeChild(o),l}catch(e){return!1}}return t.body||t.getElementsByTagName("body")[0]?(s("csshyphens",function(){if(!b("hyphens","auto",!0))return!1;try{return o()}catch(e){return!1}}),s("softhyphens",function(){try{return a("&#173;",!0)&&a("&#8203;",!1)}catch(e){return!1}}),void s("softhyphensfind",function(){try{return l("&#173;")&&l("&#8203;")}catch(e){return!1}})):void setTimeout(i,n)}var n=300;setTimeout(i,n)}),C.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&b("transform","scale(1)",!0)}),C.addTest("csstransforms3d",function(){var e=!!b("perspective","1px",!0),t=C._config.usePrefixes;if(e&&(!t||"webkitPerspective"in x.style)){var i;C.supports?i="@supports (perspective: 1px)":(i="@media (transform-3d)",t&&(i+=",(-webkit-transform-3d)")),i+="{#modernizr{left:9px;position:absolute;height:5px;margin:0;padding:0;border:0}}",R(i,function(t){e=9===t.offsetLeft&&5===t.offsetHeight})}return e}),C.addTest("preserve3d",b("transformStyle","preserve-3d")),C.addTest("csstransitions",b("transition","all",!0));var O=k.prefixed=function(e,t,i){return 0===e.indexOf("@")?L(e):(-1!=e.indexOf("-")&&(e=l(e)),t?g(e,t,i):g(e,"pfx"))};C.addTest("objectfit",!!O("objectFit"),{aliases:["object-fit"]}),a(),n(y),delete k.addTest,delete k.addAsyncTest;for(var V=0;V<C._q.length;V++)C._q[V]();e.Modernizr=C}(window,document),MyReadmore=function(e){e(document).ready(function(){e(".bd--expandable").readmore({moreLink:'<a class="morelink" href="#">More...</a>',lessLink:'<a class="morelink" href="#">Less</a>',collapsedHeight:257,afterToggle:function(e,t,i){}})})}(jQuery),MySlider=function(e){function t(){l&&(d.addClass("close"),r=!1)}function i(){d.hasClass("close")?d.removeClass("close"):d.addClass("open"),r=!0}function n(){d.hasClass("open")?d.removeClass("open"):d.addClass("close"),r=!1}function o(){wasWide=s,s=Breakpoint.isWide()||Breakpoint.isWider()||Breakpoint.isWidest(),wasFull=l,l=Breakpoint.isWidest(),wasWide||!s||r||(r=!0),!wasWide&&s&&r&&(d.removeClass("open close"),r=!0),!wasWide||s||r||d.removeClass("open close"),wasWide&&!s&&r&&(r=!1),l&&(d.addClass("close"),r=!1),wasFull&&!l&&(d.removeClass("close"),r=!0)}function a(){r?n():i()}var r=Breakpoint.isWide()||Breakpoint.isWider(),s=Breakpoint.isWide()||Breakpoint.isWider(),l=Breakpoint.isWidest(),d=e(".slider");e(".slider-drawer"),e(".slider-canvas");return e(document).ready(function(){t()}),e(window).resize(function(){o()}),e(".slider-toggler").click(function(){a()}),public_API={toggle:a,isOpen:r},public_API}(jQuery),MyVisor=function(e){function t(){r()}function i(){d.hasClass("up")&&d.removeClass("up"),l=!0}function n(){d.hasClass("up")||d.addClass("up"),l=!1}function o(){d.addClass("drop--b")}function a(){d.removeClass("drop--b")}function r(){$scroll=e(window).scrollTop(),$rootFont=parseFloat(e("html").css("font-size")),Breakpoint.isTiny()?$bufferSize=3.75*$rootFont:$bufferSize=5*$rootFont*2,$scroll>$bufferSize?o():a(),$scroll>5*$bufferSize?n():i()}function s(){l?n():i()}var l=!0,d=e(".visor");return e(document).ready(function(){t()}),e(window).scroll(function(){r()}),e(window).resize(function(){r()}),public_API={toggle:s,up:n,down:i},public_API}(jQuery);