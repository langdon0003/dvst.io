_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{UwNZ:function(e,t,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/alerts",function(){return c("gBu6")}])},gBu6:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return v}));var r=c("BGKE"),l=c("xvhg"),a=c("q1tI"),n=c("JPJu"),i=c("Wgwc"),s=c.n(i),b=c("+OAm"),d=c("gPam"),o=c("veo9"),u=c("woE2"),m=c("hhns"),f=c("xQut"),h=c("Qphk"),g=c("8mQa"),p=function(e){var t=e.children;return Object(r.b)("div",{className:"min-h-screen grid grid-cols-12 gap-4 pb-10",children:Object(r.b)("div",{className:"col-span-12 px-6 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8 2xl:col-start-5 2xl:col-span-6",children:t})})},O=c("cBaE"),j=c("QgiU");s.a.extend(j);var x=["Active","Triggered"];function v(){var e=Object(n.a)((function(e){return e.wallet.connected})),t=Object(n.a)((function(e){return e.marginAccounts})),c=Object(a.useState)(x[0]),i=c[0],s=c[1],g=Object(a.useState)(!1),j=g[0],v=g[1],w=Object(a.useState)(null),A=w[0],k=w[1],y=Object(a.useState)("all"),T=y[0],S=y[1],_=Object(a.useState)([]),C=_[0],E=_[1],B=Object(a.useState)([]),R=B[0],D=B[1],K=Object(o.a)((function(e){return e.activeAlerts})),L=Object(o.a)((function(e){return e.triggeredAlerts})),M=Object(o.a)((function(e){return e.loading})),q=Object(a.useState)([]),J=q[0],P=q[1],Q=Object(u.a)("clearAlertsTimestamp"),U=Object(l.a)(Q,2),G=U[0],W=U[1];Object(a.useEffect)((function(){e&&!M||S("all")}),[e,M]),Object(a.useEffect)((function(){if(G&&!M){var e=L.filter((function(e){return e.triggeredTimestamp>G&&Object.keys(e).includes("triggeredTimestamp")}));P(e)}}),[G,M]);return Object(r.c)("div",{className:"bg-th-bkg-1 text-th-fgd-1 transition-all",children:[Object(r.b)(m.a,{}),Object(r.c)(p,{children:[Object(r.c)("div",{className:"flex flex-col sm:flex-row items-center justify-between pt-8 pb-3 sm:pb-6 md:pt-10",children:[Object(r.b)("h1",{className:"text-th-fgd-1 text-2xl font-semibold",children:"Alerts"}),Object(r.c)("div",{className:"flex flex-col-reverse justify-between w-full pt-4 sm:pt-0 sm:justify-end sm:flex-row",children:[t.length>1?Object(r.c)(d.d,{value:T.toString(),onChange:function(e){return function(e){if(S(e),"all"!==e){var t=K.filter((function(t){return t.acc.toString()===e})),c=G?J.filter((function(t){return t.acc.toString()===e})):L.filter((function(t){return t.acc.toString()===e}));E(t),D(c)}}(e)},className:"flex border border-th-fgd-4 rounded-md w-full mt-3 sm:mt-0 sm:w-80 h-full text-xs h-8",children:[Object(r.b)(d.d.Option,{value:"all",className:"flex-1 focus:outline-none",children:function(e){var t=e.checked;return Object(r.b)("button",{className:"".concat(t?"bg-th-bkg-3 rounded-l-md":""," font-normal text-th-fgd-1 text-center py-1.5 h-full w-full rounded-none hover:bg-th-bkg-3 focus:outline-none"),children:"All"})}}),t.slice().sort((function(e,t){return e.publicKey.toBase58()>t.publicKey.toBase58()?1:-1})).map((function(e,c){return Object(r.b)(d.d.Option,{value:e.publicKey.toString(),className:"focus:outline-none flex-1",children:function(l){var a=l.checked;return Object(r.b)("button",{className:"".concat(a?"bg-th-bkg-3":""," font-normal text-th-fgd-1  text-center py-1.5 h-full w-full rounded-none ").concat(c===t.length-1?"rounded-r-md":null," border-l border-th-fgd-4 hover:bg-th-bkg-3 focus:outline-none"),children:Object(O.a)(e.publicKey)})}},c)}))]}):null,Object(r.b)(f.b,{className:"text-xs flex items-center justify-center sm:ml-2 pt-0 pb-0 h-8 pl-3 pr-3",disabled:!e,onClick:function(){return v(!0)},children:Object(r.c)("div",{className:"flex items-center",children:[Object(r.b)(b.s,{className:"h-5 w-5 mr-1.5"}),"New"]})})]})]}),Object(r.b)("div",{className:"p-6 rounded-lg bg-th-bkg-2",children:M?Object(r.c)(r.a,{children:[Object(r.b)("div",{className:"h-12 w-full animate-pulse rounded-lg bg-th-bkg-3 mb-2"}),Object(r.b)("div",{className:"h-24 w-full animate-pulse rounded-lg bg-th-bkg-3 mb-2"}),Object(r.b)("div",{className:"h-24 w-full animate-pulse rounded-lg bg-th-bkg-3 mb-2"}),Object(r.b)("div",{className:"h-24 w-full animate-pulse rounded-lg bg-th-bkg-3"})]}):e?Object(r.c)(r.a,{children:[Object(r.b)("div",{className:"border-b border-th-fgd-4 mb-4",children:Object(r.b)("nav",{className:"-mb-px flex space-x-6","aria-label":"Tabs",children:x.map((function(e){return Object(r.b)("a",{onClick:function(){return function(e){s(e)}(e)},className:"whitespace-nowrap pb-4 px-1 border-b-2 font-semibold cursor-pointer default-transition hover:opacity-100\n                  ".concat(i===e?"border-th-primary text-th-primary":"border-transparent text-th-fgd-4 hover:text-th-primary","\n                "),children:e},e)}))})}),Object(r.b)(N,{acc:T,activeTab:i,activeAlerts:K,clearAlertsTimestamp:G,clearedAlerts:J,filteredActiveAlerts:C,filteredTriggeredAlerts:R,setClearAlertsTimestamp:W,setReactivateAlertData:k,setOpenAlertModal:v,triggeredAlerts:L})]}):Object(r.c)("div",{className:"flex flex-col items-center text-th-fgd-1 px-4 pb-2 rounded-lg",children:[Object(r.b)(b.l,{className:"w-6 h-6 mb-1 text-th-primary"}),Object(r.b)("div",{className:"font-bold text-lg pb-1",children:"Connect Wallet"}),Object(r.b)("p",{className:"mb-0 text-center",children:"Connect your wallet to view and create liquidation alerts."})]})})]}),j?Object(r.b)(h.a,{alert:A,isOpen:j,onClose:function(){return v(!1)}}):null]})}var N=function(e){var t=e.acc,c=e.activeTab,l=e.activeAlerts,a=e.clearedAlerts,n=e.clearAlertsTimestamp,i=e.filteredActiveAlerts,s=e.filteredTriggeredAlerts,d=e.setClearAlertsTimestamp,o=e.setOpenAlertModal,u=e.setReactivateAlertData,m=e.triggeredAlerts;switch(c){case"Active":return 0===l.length?Object(r.c)("div",{className:"flex flex-col items-center text-th-fgd-1 px-4 pb-2 rounded-lg",children:[Object(r.b)(b.b,{className:"w-6 h-6 mb-1 text-th-primary"}),Object(r.b)("div",{className:"font-bold text-lg pb-1",children:"No Alerts Found"}),Object(r.b)("p",{className:"mb-0 text-center",children:"Get notified when your account is in danger of liquidation."})]}):Object(r.c)(r.a,{children:[Object(r.c)("div",{className:"flex items-center pb-3",children:[Object(r.b)(b.k,{className:"flex-shrink-0 h-4 w-4 mr-1.5 text-th-fgd-4"}),Object(r.b)("p",{className:"mb-0 text-th-fgd-4",children:"Active alerts will only trigger once."})]}),"all"===t?l.map((function(e){return Object(r.b)(g.a,{alert:e,isLarge:!0},e.timestamp)})):i.map((function(e){return Object(r.b)(g.a,{alert:e,isLarge:!0},e.timestamp)}))]});case"Triggered":return Object(r.b)("div",{children:0===m.length||n&&0===a.length||"all"!==t&&0===s.length?Object(r.c)("div",{className:"flex flex-col items-center text-th-fgd-1 px-4 pb-2 rounded-lg",children:[Object(r.b)(b.a,{className:"w-6 h-6 mb-1 text-th-green"}),Object(r.b)("div",{className:"font-bold text-lg pb-1",children:"Smooth Sailing"}),Object(r.b)("p",{className:"mb-0 text-center",children:"None of your active liquidation alerts have been triggered."})]}):Object(r.c)(r.a,{children:[Object(r.c)("div",{className:"flex justify-between pb-3",children:[Object(r.c)("div",{className:"flex items-center pr-2",children:[Object(r.b)(b.k,{className:"flex-shrink-0 h-4 w-4 mr-1.5 text-th-fgd-4"}),Object(r.b)("p",{className:"mb-0 text-th-fgd-4",children:"Re-activate alerts you want to receive again."})]}),Object(r.b)(f.a,{onClick:function(){return d(m[0].triggeredTimestamp)},children:Object(r.c)("div",{className:"flex items-center",children:[Object(r.b)(b.t,{className:"h-4 w-4 mr-1.5"}),"Clear"]})})]}),"all"===t?n?a.map((function(e){return Object(r.b)(g.a,{alert:e,setReactivateAlertData:u,setOpenAlertModal:o,isLarge:!0},e.timestamp)})):m.map((function(e){return Object(r.b)(g.a,{alert:e,setReactivateAlertData:u,setOpenAlertModal:o,isLarge:!0},e.timestamp)})):s.map((function(e){return Object(r.b)(g.a,{alert:e,setReactivateAlertData:u,setOpenAlertModal:o,isLarge:!0},e.timestamp)}))]})});default:return l.map((function(e){return Object(r.b)(g.a,{alert:e},e.timestamp)}))}}}},[["UwNZ",1,2,3,4,0,5,6,7]]]);