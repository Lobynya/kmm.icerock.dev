(self.webpackChunkkmm_icerock_dev=self.webpackChunkkmm_icerock_dev||[]).push([[385],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=i,k=s["".concat(c,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(k,a(a({ref:t},p),{},{components:n})):r.createElement(k,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3620:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a={sidebar_position:3},l={unversionedId:"concurrency",id:"concurrency",isDocsHomePage:!1,title:"\u041c\u043d\u043e\u0433\u043e\u043f\u043e\u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c",description:"\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b",source:"@site/learning/concurrency.md",sourceDirName:".",slug:"/concurrency",permalink:"/learning/concurrency",editUrl:"https://github.com/icerockdev/kmm.icerock.dev/tree/docusaurus/learning/concurrency.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Composite builds",permalink:"/learning/gradle/composite-build"}},c=[{value:"\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b",id:"\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b",children:[]},{value:"\u0418\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0435 \u0434\u0435\u0442\u0430\u043b\u0438",id:"\u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0435-\u0434\u0435\u0442\u0430\u043b\u0438",children:[]},{value:"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",children:[]},{value:"TO DO",id:"to-do",children:[]}],u={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b"},"\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kotlinlang.org/docs/coroutines-guide.html"},"kotlinlang docs - Coroutines guide")," - required"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kotlinlang.org/docs/native-immutability.html"},"kotlinlang docs - Immutability in Kotlin/Native")," - required"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kotlinlang.org/docs/native-concurrency.html"},"kotlinlang docs - Concurrency in Kotlin/Native")," - required"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kotlinlang.org/docs/mobile/concurrent-mutability.html"},"kotlinlang docs - Concurrent mutability")," - required"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=nw6YTfEyfO0"},"KotlinConf 2018 - Kotlin/Native Concurrency Model by Nikolay Igotti")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=oxQ6e1VeH4M"},"KotlinConf 2019: Kotlin Native Concurrency Explained by Kevin Galligan")," - required"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dev.to/touchlab/practical-kotlin-native-concurrency-ac7"},"Touchlab - Practical Kotlin Native Concurrency")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://touchlab.co/kotlin-native-concurrency/"},"Touchlab - Kotlin/Native Concurrency")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Kotlin/kotlinx.coroutines/blob/native-mt/kotlin-native-sharing.md"},"Kotlinx.coroutines - Sharing and background threads on Kotlin/Native")," - required"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=rB5Q3y73FTo"},"\u0420\u043e\u043c\u0430\u043d \u0415\u043b\u0438\u0437\u0430\u0440\u043e\u0432 \u2014 \u041a\u043e\u0440\u0443\u0442\u0438\u043d\u044b \u0432 Kotlin")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.packtpub.com/product/learning-concurrency-in-kotlin/9781788627160"},"Learning Concurrency in Kotlin"))),(0,o.kt)("h2",{id:"\u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0435-\u0434\u0435\u0442\u0430\u043b\u0438"},"\u0418\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0435 \u0434\u0435\u0442\u0430\u043b\u0438"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/delay.html"},"kotlinx.coroutines - delay not blocking")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.native.concurrent/-worker-bound-reference/"},"WorkerBoundReference - share without freeze"))),(0,o.kt)("h2",{id:"\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"},"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://forms.gle/ZCKW34TnLN1tfHQBA"},"Google Forms")),(0,o.kt)("h2",{id:"to-do"},"TO DO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deffered - async, await"),(0,o.kt)("li",{parentName:"ul"},"Dispatchers"),(0,o.kt)("li",{parentName:"ul"},"withContext"),(0,o.kt)("li",{parentName:"ul"},"Atomic"),(0,o.kt)("li",{parentName:"ul"},"Mutex"),(0,o.kt)("li",{parentName:"ul"},"volatile"),(0,o.kt)("li",{parentName:"ul"},"ThreadPool \u0438 \u0435\u0433\u043e \u0441\u0432\u044f\u0437\u044c \u0441 Dispatchers"),(0,o.kt)("li",{parentName:"ul"},"\u043a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 freeze")))}p.isMDXComponent=!0}}]);