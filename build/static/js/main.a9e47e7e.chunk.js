(this.webpackJsonpdev_friendly_canvanizer=this.webpackJsonpdev_friendly_canvanizer||[]).push([[0],{78:function(e,a,t){e.exports=t(97)},83:function(e,a,t){},96:function(e,a,t){},97:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(10),c=t.n(l),i=(t(83),t(29)),o=t(25),s=t(16),m=t(3),d=t(134),u=t(27),E=t(147),p=t(138),g=t(139),f=t(142),b=t(136),h=t(43),v=t(141),y=t(140),x=t(60),w=t.n(x),N=t(62),j=t.n(N),O=t(61),C=t.n(O),k=t(149),S=t(143),A=t(144),L=t(48),D=t.n(L),B=t(47),F=t.n(B),M=t(23),z=Object(d.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(s.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(o.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar)}}));function I(e){var a,t,n=z(),l=Object(u.a)(),c=r.a.useState(!1),o=Object(i.a)(c,2),d=o[0],x=o[1];return r.a.createElement("div",{className:n.root},r.a.createElement(b.a,null),r.a.createElement(p.a,{position:"fixed",className:Object(m.a)(n.appBar,Object(s.a)({},n.appBarShift,d))},r.a.createElement(g.a,null,r.a.createElement(y.a,{color:"inherit","aria-label":"open drawer",onClick:function(){x(!0)},edge:"start",className:Object(m.a)(n.menuButton,Object(s.a)({},n.hide,d))},r.a.createElement(w.a,null)),r.a.createElement(h.a,{variant:"h6",noWrap:!0},r.a.createElement(M.b,{to:"/",style:{textDecoration:"none",color:"white"}}," ","Dev Friendly Canvanizer")))),r.a.createElement(E.a,{variant:"permanent",className:Object(m.a)(n.drawer,(a={},Object(s.a)(a,n.drawerOpen,d),Object(s.a)(a,n.drawerClose,!d),a)),classes:{paper:Object(m.a)((t={},Object(s.a)(t,n.drawerOpen,d),Object(s.a)(t,n.drawerClose,!d),t))}},r.a.createElement("div",{className:n.toolbar},r.a.createElement(y.a,{onClick:function(){x(!1)}},"rtl"===l.direction?r.a.createElement(C.a,null):r.a.createElement(j.a,null))),r.a.createElement(v.a,null),r.a.createElement(f.a,null,r.a.createElement(M.b,{to:"/add",style:{textDecoration:"none",color:"black"}},r.a.createElement(k.a,{button:!0,key:"Add YAML"},r.a.createElement(S.a,null,r.a.createElement(F.a,null)),r.a.createElement(A.a,{primary:"Add YAML"})))),r.a.createElement(f.a,null,r.a.createElement(M.b,{to:"/model",style:{textDecoration:"none",color:"black"}},r.a.createElement(k.a,{button:!0,key:"Lean Canvas"},r.a.createElement(S.a,null,r.a.createElement(D.a,null)),r.a.createElement(A.a,{primary:"Lean Canvas"})))),r.a.createElement(v.a,null),r.a.createElement(f.a,null,r.a.createElement(M.b,{to:"/live",style:{textDecoration:"none",color:"black"}},r.a.createElement(k.a,{button:!0,key:"Live Lean Canvas"},r.a.createElement(S.a,null,r.a.createElement(F.a,null),r.a.createElement(D.a,null)),r.a.createElement(A.a,{primary:"Live View"})))),r.a.createElement(v.a,null)))}var P=t(98),R=t(145),Y=t(63),U=t.n(Y),_=t(64),G=t.n(_),T=t(65),V=t.n(T),W=t(66),q=t.n(W),J=t(67),K=t.n(J),X=t(68),$=t.n(X),H=t(69),Q=t.n(H),Z=t(70),ee=t.n(Z),ae=t(71),te=t.n(ae),ne=Object(d.a)((function(e){return{root:{flexGrow:1,padding:e.spacing(3),paddingLeft:e.spacing(22)},paper:Object(s.a)({padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,height:"15rem",borderRadius:"0%",border:"1px solid lightgrey"},"textAlign","left"),fullpaper:{height:"30rem"},toolbar:Object(o.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),head:{color:"white",fontSize:"1rem",textTransform:"uppercase",textAlign:"center"},node:{marginTop:"5rem"}}}));function re(e){var a=ne(),t=e.data,n=function(e){return e&&e[0]?e.map((function(e){return e&&"string"!==typeof e?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.head+" "+a.node},Object.keys(e)[0]),Object.values(e)[0].map((function(e){return r.a.createElement("div",null,"- ",e)}))):r.a.createElement("div",null,"- ",e||"")})):r.a.createElement("div",null,"N/A")};return r.a.createElement("div",{className:a.root},r.a.createElement("div",{className:a.toolbar}),t?r.a.createElement(R.a,{container:!0},r.a.createElement(R.a,{item:!0,xs:12,sm:2},r.a.createElement(P.a,{className:a.paper+" "+a.fullpaper,style:{background:"#8C0FB5",color:"#fff"}},r.a.createElement("div",{className:a.head}," ",r.a.createElement(U.a,null),r.a.createElement("br",null),"Problem"),n(t.Problem))),r.a.createElement(R.a,{item:!0,xs:12,sm:2},r.a.createElement(P.a,{className:a.paper,style:{background:"#FF9A00",color:"#fff"}},r.a.createElement("div",{className:a.head},r.a.createElement(G.a,null),r.a.createElement("br",null),"Solution"),n(t.Solution)),r.a.createElement(P.a,{className:a.paper,style:{background:"#FC6B28",color:"#fff"}},r.a.createElement("div",{className:a.head},r.a.createElement(V.a,null),r.a.createElement("br",null),"Key Metrics"),n(t["Key Metrics"]))),r.a.createElement(R.a,{item:!0,xs:12,sm:2},r.a.createElement(P.a,{className:a.paper+" "+a.fullpaper,style:{background:"#00AB45",color:"#fff"}},r.a.createElement("div",{className:a.head},r.a.createElement(q.a,null),r.a.createElement("br",null),"Unique Value Proposition"),n(t["Unique Value Proposition"]))),r.a.createElement(R.a,{item:!0,xs:12,sm:2},r.a.createElement(P.a,{className:a.paper,style:{background:"#7FD02D",color:"#fff"}},r.a.createElement("div",{className:a.head},r.a.createElement(K.a,null),r.a.createElement("br",null),"Unfair Advantage"),n(t["Unfair Advantage"])),r.a.createElement(P.a,{className:a.paper,style:{background:"#00B9A9",color:"#fff"}},r.a.createElement("div",{className:a.head},r.a.createElement($.a,null),r.a.createElement("br",null),"Channels"),n(t.Channels))),r.a.createElement(R.a,{item:!0,xs:12,sm:2},r.a.createElement(P.a,{className:a.paper+" "+a.fullpaper,style:{background:"#55D1E5",color:"#fff"}},r.a.createElement("div",{className:a.head},r.a.createElement(Q.a,null),r.a.createElement("br",null),"Customer Segment"),n(t["Customer Segment"]))),r.a.createElement(R.a,{item:!0,xs:12,sm:5},r.a.createElement(P.a,{className:a.paper,style:{background:"#2151CD",color:"#fff"}},r.a.createElement("div",{className:a.head},r.a.createElement(ee.a,null),r.a.createElement("br",null),"Cost Structure"),n(t["Cost Structure"]))),r.a.createElement(R.a,{item:!0,xs:12,sm:5},r.a.createElement(P.a,{className:a.paper,style:{background:"#00728C",color:"#fff"}},r.a.createElement("div",{className:a.head},r.a.createElement(te.a,null),r.a.createElement("br",null),"Revenue Streams"),n(t["Revenue Streams"])))):r.a.createElement(R.a,{item:!0,xs:12,sm:2},"YAML Not Found"))}var le=t(146),ce=t(72),ie=t.n(ce),oe=t(73),se=t.n(oe),me=t(148),de=Object(d.a)((function(e){return{root:{flexGrow:1,padding:e.spacing(3),paddingLeft:e.spacing(22)},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,height:"15rem",borderRadius:"0%",border:"1px solid lightgrey"},fullpaper:{height:"30rem"},toolbar:Object(o.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),textarea:{width:"100%"}}}));function ue(e){var a=de(),t=r.a.useState({payload:""}),n=Object(i.a)(t,2),l=n[0],c=n[1],m=function(a){var t=a.target,n=t.name,r=t.value;c((function(e){return Object(o.a)({},e,Object(s.a)({},n,r))})),e.data(ie.a.parse(r)),localStorage.setItem("data",""==r?localStorage.data:r)};return r.a.createElement("div",{className:a.root},r.a.createElement("div",{className:a.toolbar}),r.a.createElement(R.a,{container:!0},r.a.createElement(R.a,{item:!0,xs:10,sm:10},r.a.createElement(le.a,{name:"payload",onChange:m,className:a.textarea,"aria-label":"minimum height",rowsMin:12,placeholder:"Input YAML format in Title Case",value:l.payload}),""==l.payload?r.a.createElement("div",null,r.a.createElement(me.a,{clickable:!0,avatar:r.a.createElement(se.a,null),label:"undo",onClick:function(){var e={target:{}};e.target={name:"payload",value:localStorage.data},m(e)},variant:"outlined"})):"")))}var Ee=t(9);function pe(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"cover"},r.a.createElement("div",{className:"content"},r.a.createElement("h2",{className:"heading"},"Developers can",r.a.createElement("br",null),"generate a Lean Canvas"," "),r.a.createElement("p",null,"for their business  using  Dev Friendly Canvanizer."),r.a.createElement("div",{className:"cta-btn"},r.a.createElement(M.b,{to:"/add",style:{textDecoration:"none",color:"white"}},"Get Started")),r.a.createElement("p",{className:"highlight"},"\xa9 Made in the \u26f0\ufe0f by Piyush Sinha."),r.a.createElement("div",{className:"card"},r.a.createElement("h2",null,"Dev Friendly Canvanizer"),r.a.createElement("p",null,"A web interface that can accept the content for a Lean Canvas as YAML.")))))}t(96);var ge=function(){var e=r.a.useState(!1),a=Object(i.a)(e,2),t=a[0],n=a[1];return r.a.createElement("div",null,r.a.createElement(M.a,null,r.a.createElement(I,{data:t}),r.a.createElement(Ee.c,null,r.a.createElement(Ee.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(pe,e)}}),r.a.createElement(Ee.a,{exact:!0,path:"/model",render:function(e){return r.a.createElement(re,Object.assign({},e,{data:t}))}}),r.a.createElement(Ee.a,{exact:!0,path:"/add",render:function(e){return r.a.createElement(ue,Object.assign({},e,{data:n}))}}),r.a.createElement(Ee.a,{exact:!0,path:"/live",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue,Object.assign({},e,{data:n})),r.a.createElement(re,Object.assign({},e,{data:t})))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[78,1,2]]]);
//# sourceMappingURL=main.a9e47e7e.chunk.js.map