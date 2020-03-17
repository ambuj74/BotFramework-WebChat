(this["webpackJsonpsample-customization-plain-ui"]=this["webpackJsonpsample-customization-plain-ui"]||[]).push([[0],{1250:function(e,t){},1251:function(e,t){},1252:function(e,t){},1419:function(e,t){},1429:function(e,t){},1430:function(e,t){},1431:function(e,t){},1446:function(e,t){},1454:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(129),o=n.n(c),l=n(130),u=n(70),i=n.n(u),s=n(16),m=n(555),f=n(558),h=function(e){var t=e.content,n=e.contentUrl,a=e.contentType,c=e.name;switch(a){case"image/gif":case"image/jpeg":case"image/png":case"image/svg":case"image/svg+xml":return r.a.createElement("img",{alt:c,src:n});case"text/markdown":case"text/plain":return r.a.createElement("p",null,t);default:return n?r.a.createElement("a",{href:n,rel:"noopener noreferrer",target:"_blank"},c):r.a.createElement("pre",null,JSON.stringify(t,null,2))}},p=s.hooks.useSendMessage,d=function(e){var t=e.cardAction,n=t.title,c=t.value,o=p(),l=Object(a.useCallback)((function(){return o(c)}),[c,o]);return r.a.createElement("button",{onClick:l,type:"button"},"ImBack: ",n)},g=s.hooks.useSendMessageBack,E=function(e){var t=e.cardAction,n=t.displayText,c=t.text,o=t.title,l=t.value,u=g(),i=Object(a.useCallback)((function(){return u(l,c,n)}),[n,u,c,l]);return r.a.createElement("button",{onClick:i,type:"button"},"MessageBack: ",o)},b=s.hooks.useSendPostBack,k=function(e){var t=e.cardAction,n=t.title,c=t.value,o=b(),l=Object(a.useCallback)((function(){return o(c)}),[c,o]);return r.a.createElement("button",{onClick:l,type:"button"},"PostBack: ",n)},v=function(e){var t=e.cardAction;switch(t.type){case"messageBack":return r.a.createElement(E,{cardAction:t});case"postBack":return r.a.createElement(k,{cardAction:t});default:return r.a.createElement(d,{cardAction:t})}},y=s.hooks.useSuggestedActions,w=function(){var e=y();return!!e.length&&r.a.createElement("ul",null,e.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(v,{cardAction:e}))})))};function x(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];if("undefined"!==typeof e&&n.length){var r=n.shift();return x.apply(void 0,[e[r]].concat(n))}return e}console.log(s.hooks);var C=s.hooks.useActivities,j=s.hooks.useSendMessage,B=function(){var e=C(),t=Object(l.a)(e,1)[0],n=j(),c=Object(a.useState)(""),o=Object(l.a)(c,2),u=o[0],i=o[1],s=Object(a.useCallback)((function(e){var t=e.target.value;return i(t)}),[i]),m=Object(a.useCallback)((function(e){e.preventDefault(),n(u),i("")}),[u,n,i]);return r.a.createElement("div",null,r.a.createElement("ul",null,t.filter((function(e){return"message"===e.type})).filter((function(e){var t=e.channelData,n=(t=void 0===t?{}:t).postBack;return!("user"===e.from.role&&n)})).map((function(e){return Object(f.a)({},e,{attachments:e.attachments||[],text:x(e,"channelData","messageBack","displayText")||e.text})})).filter((function(e){var t=e.attachments,n=e.text;return t.length||n})).map((function(e,t){return r.a.createElement(r.a.Fragment,{key:e.id||t},r.a.createElement("li",null,!!e.text&&r.a.createElement(h,{content:e.text,contentType:"markdown"===e.textFormat?"text/markdown":"text/plain"}),!!e.attachments.length&&r.a.createElement("ul",null,e.attachments.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(h,e))})))))}))),r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement("form",{onSubmit:m},r.a.createElement("input",{autoFocus:!0,onChange:s,type:"textbox",value:u}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement((function(){var e=r.a.useState(),t=Object(l.a)(e,2),n=t[0],a=t[1];return n||function(){var e,t,n;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.awrap(fetch("https://webchat-mockbot.azurewebsites.net/directline/token",{method:"POST"}));case 2:return e=a.sent,a.next=5,i.a.awrap(e.json());case 5:return t=a.sent,n=t.token,a.abrupt("return",n);case 8:case"end":return a.stop()}}))}().then((function(e){return a(Object(m.createDirectLine)({token:e}))})),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Web Chat with plain UI"),r.a.createElement("p",null,"This sample shows how to use Web Chat without any of its canned UI component. There are few conversation you can try out."),r.a.createElement("ol",null,r.a.createElement("li",null,"Say ",r.a.createElement("code",null,"image")," to the bot"),r.a.createElement("li",null,"Say ",r.a.createElement("code",null,"suggested-actions")," to the bot"),r.a.createElement("li",null,"Say ",r.a.createElement("code",null,"card bingsports")," to the bot")),r.a.createElement("p",null,"For the"," ",r.a.createElement("a",{href:"https://github.com/microsoft/BotFramework-WebChat/tree/master/samples/06.recomposing-ui/d.plain-ui/"},"source code of this demo"),", please visit ",r.a.createElement("a",{href:"https://github.com/microsoft/BotFramework-WebChat/"},"our GitHub repository"),"."),r.a.createElement("hr",null),!!n&&r.a.createElement(s.Components.Composer,{directLine:n},r.a.createElement(B,null)))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},283:function(e,t){},284:function(e,t){},557:function(e,t){},560:function(e,t,n){e.exports=n(1454)},706:function(e,t){},708:function(e,t){},744:function(e,t){},745:function(e,t){}},[[560,1,2]]]);
//# sourceMappingURL=main.f153d34d.chunk.js.map