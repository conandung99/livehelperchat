(window.webpackJsonpLHCReactAPPAdmin=window.webpackJsonpLHCReactAPPAdmin||[]).push([[3],{62:function(e,n,t){"use strict";t.r(n);var a=t(14),s=t.n(a),c=t(0),r=t.n(c),l=t(15),o=t.n(l),d=null;n.default=function(e){var n=Object(c.useState)([]),t=s()(n,2),a=t[0],l=t[1],m=Object(c.useState)(!1),i=s()(m,2),u=i[0],f=i[1],p=Object(c.useReducer)((function(e){return e+1}),0),g=s()(p,2),h=(g[0],g[1]),v=Object(c.useState)(!0),I=s()(v,2),E=I[0],C=I[1],y=function(){u||o.a.get(WWW_DIR_JAVASCRIPT+"cannedmsg/filter/"+e.chatId).then((function(e){C(!1),l(e.data),f(!0),e.data.map((function(e,n){e.messages.map((function(e){1==e.current&&k(e)}))}))}))},b=function(n,t){void 0!==t&&(t.stopPropagation(),t.preventDefault()),setTimeout((function(){var t=new FormData;t.append("msg",n.msg),o.a.post(WWW_DIR_JAVASCRIPT+"chat/addmsgadmin/"+e.chatId,t,{headers:{"X-CSRFToken":confLH.csrf_token}}).then((function(n){return LHCCallbacks.addmsgadmin&&LHCCallbacks.addmsgadmin(e.chatId),ee.emitEvent("chatAddMsgAdmin",[e.chatId]),lhinst.syncadmincall(),!0}))}),n.delay)},k=function(n){if(clearTimeout(d),null!==n){var t=document.getElementById("chat-render-preview-"+e.chatId);t.innerHTML=n.msg;var a=new FormData;a.append("msg",n.msg),a.append("msg_body",!0),d=setTimeout((function(){o.a.post(WWW_DIR_JAVASCRIPT+"chat/previewmessage/",a).then((function(e){t.innerHTML=e.data}))}),100)}else document.getElementById("chat-render-preview-"+e.chatId).innerHTML=""};Object(c.useEffect)((function(){a.map((function(n,t){n.messages.map((function(n){if(n.current){var t=document.getElementById("canned-msg-"+e.chatId+"-"+n.id);null==t||(a="canned-list-"+e.chatId,s="canned-msg-"+e.chatId+"-"+n.id,c={threshold:10},r=document.getElementById(a),l=document.getElementById(s),r.offsetHeight+r.scrollTop>=l.offsetTop+c.threshold&&l.offsetTop>r.scrollTop-c.threshold)||t.scrollIntoView()}var a,s,c,r,l}))}))})),Object(c.useEffect)((function(){function n(n,t){e.chatId==n&&o.a.get(WWW_DIR_JAVASCRIPT+"cannedmsg/filter/"+e.chatId).then((function(e){u||(l(e.data),k(null),f(!0)),e.data.map((function(e,n){e.messages.map((function(e){e.id==t&&b(e)}))}))}))}return ee.addListener("sendCannedByMessageId",n),function(){ee.removeListener("sendCannedByMessageId",n)}}),[]);var x=function(n,t){if((13==n.keyCode||38==n.keyCode||40==n.keyCode)&&1==t)return n.preventDefault(),void n.stopPropagation();if(13==n.keyCode)a.map((function(n,t){return n.messages.map((function(n){if(n.current){var t=document.getElementById("CSChatMessage-"+e.chatId);t.value=n.msg,t.focus(),C(!0)}}))})),n.preventDefault(),n.stopPropagation();else if(38==n.keyCode){var s=!1;if(1==a[0].messages[0].current){a[0].messages[0].current=!1;var c=a.length-1;a[c].messages[a[c].messages.length-1].current=!0,k(a[c].messages[a[c].messages.length-1]),a[c].expanded||(a[c].expanded=!0)}else a.map((function(e,n,t){return t[t.length-1-n].messages.map((function(e,a,c){var r=c[c.length-1-a];1==s?(t[t.length-1-n].expanded||(t[t.length-1-n].expanded=!0),r.current=!0,s=!1,k(r)):r.current&&(r.current=!1,s=!0)}))}));l(a),h(),n.preventDefault(),n.stopPropagation()}else if(40==n.keyCode){s=!1;1==a[a.length-1].messages[a[a.length-1].messages.length-1].current?(a[a.length-1].messages[a[a.length-1].messages.length-1].current=!1,a[0].messages[0].current=!0,k(a[0].messages[0]),a[0].expanded||(a[0].expanded=!0)):a.map((function(e,n){e.messages.map((function(n){1==s?(e.expanded||(e.expanded=!0),n.current=!0,k(n),s=!1):n.current&&(n.current=!1,s=!0)}))})),l(a),h(),n.preventDefault(),n.stopPropagation()}else!0===t&&o.a.get(WWW_DIR_JAVASCRIPT+"cannedmsg/filter/"+e.chatId+"?q="+encodeURIComponent(n.target.value)).then((function(e){l(e.data),C(!1),k(null),e.data.map((function(e,n){e.messages.map((function(e){1==e.current&&k(e)}))}))}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-12 col-xl-6"},!u&&r.a.createElement("p",{className:"border mt-0 pb-1 pt-1"},r.a.createElement("a",{className:"fs13 d-block",onClick:y},r.a.createElement("span",{className:"material-icons"},"expand_more"),"Canned messages")),u&&E&&r.a.createElement("ul",{className:"list-unstyled fs13 border mt-0 mx300"},r.a.createElement("li",{className:"pt-1 pb-1"},r.a.createElement("a",{className:"d-block",onClick:function(e){return C(!1)}},r.a.createElement("span",{className:"material-icons"},"expand_more"),"Canned messages"))),u&&!E&&r.a.createElement("ul",{className:"list-unstyled fs13 border mt-0 mx300",id:"canned-list-"+e.chatId},r.a.createElement("li",{className:"border-bottom pt-1 pb-1"},r.a.createElement("a",{onClick:function(e){return C(!0)}},r.a.createElement("span",{className:"material-icons"},"expand_less"),"Canned messages")),a.map((function(n,t){return r.a.createElement("li",null,r.a.createElement("a",{className:"font-weight-bold",key:t,onClick:function(){return s=t,(e=n).expanded=!e.expanded,void l(a.map((function(n,t){return s==t?e:n})));var e,s}},r.a.createElement("span",{className:"material-icons"},n.expanded?"expand_less":"expand_more"),n.title," [",n.messages.length,"]"),n.expanded&&r.a.createElement("ul",{className:"list-unstyled ml-4"},n.messages.map((function(n){return r.a.createElement("li",{key:n.id,className:n.current?"font-italic font-weight-bold":"",id:"canned-msg-"+e.chatId+"-"+n.id},r.a.createElement("a",{className:"hover-canned d-block",onMouseLeave:function(e){return k(null),void a.map((function(e,n){e.messages.map((function(e){1==e.current&&k(e)}))}))},onMouseEnter:function(e){return function(e){k(e)}(n)},title:n.msg,onClick:function(t){return function(n){var t=document.getElementById("CSChatMessage-"+e.chatId);t.value=n.msg,t.focus(),k(n)}(n)}},r.a.createElement("span",{title:"Send instantly",onClick:function(e){return b(n,e)},className:"material-icons fs12"},"send")," ",n.message_title))}))))})))),r.a.createElement("div",{className:"col-12 col-xl-6"},r.a.createElement("input",{type:"text",onFocus:y,className:"form-control form-control-sm",onKeyUp:function(e){return x(e,!0)},onKeyDown:function(e){return x(e,!1)},defaultValue:"",placeholder:"🔍 Navigate with ⮃ and ↵ Enter"}),!E&&r.a.createElement("div",{className:"mx275 mh275 mt-1 break-words",id:"chat-render-preview-"+e.chatId})))}}}]);