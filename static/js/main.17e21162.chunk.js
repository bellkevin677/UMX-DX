(this["webpackJsonpumx-dx"]=this["webpackJsonpumx-dx"]||[]).push([[0],{131:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(66),i=n.n(a),s=n(10),o=n(11),l=n(12),d=n(14),u=n(13),j=n(2),h=n(15),b=n(0),p=function(e){return Object(b.jsxs)("header",{className:"App-Header",children:[Object(b.jsx)(h.b,{to:"/",className:"Header-Link",children:"UMX-DX App"}),e.Cerner?Object(b.jsx)("div",{className:"Header-Navbar",children:Object(b.jsx)(h.b,{to:"/account",className:"Header-Link",activeClassName:"Header-Link-Selected",children:"Account"})}):Object(b.jsx)("div",{className:"Header-Navbar",children:Object(b.jsx)(h.b,{to:"/launch-patient",className:"Header-Link",activeClassName:"Header-Link-Selected",children:"Patient"})})]})},O=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(s.a)(this,n),(c=t.call(this,e)).state={},c.setMainState=c.setMainState.bind(Object(l.a)(c)),c}return Object(o.a)(n,[{key:"setMainState",value:function(e){this.setState(e)}},{key:"render",value:function(){var e=this.props.Cerner;return Object(b.jsx)("div",{className:"App-Main",children:e?Object(b.jsx)("h1",{children:"Authorized"}):Object(b.jsx)("h1",{children:"Please select account type to Log-In"})})}}]),n}(r.a.Component),f=Object(j.f)(O),x=n(22),v=n.n(x),m={patient:{}};m.patient.launch=function(e){v.a.oauth2.authorize({client_id:"efef2e22-0d52-4bfa-ab53-b44456625f2a",scope:"patient/Patient.read patient/Observation.read launch/patient online_access openid profile",iss:"https://fhir-myrecord.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",redirectUri:"https://danielmoffitt54.github.io/UMX-DX/"}).catch(console.error)},m.patient.ready=function(e){v.a.oauth2.ready().then((function(e){return e.request("Patient")})).then((function(t){return e({Loading:!1,Cerner:t})})).catch((function(t){console.log(t),e({Loading:!1})}))},m.provider={},m.provider.launch=function(e){v.a.oauth2.authorize({client_id:"4cfb74e7-deb2-4151-9c22-16eba93fd1ec",scope:"patient/Patient.read patient/Observation.read launch online_access openid profile",redirectUri:"https://danielmoffitt54.github.io/UMX-DX/"}).then(console.log).catch(console.error)},m.provider.ready=function(e){v.a.oauth2.ready().then((function(e){return e.request("Provider")})).then((function(t){return e({Loading:!1,Cerner:t})})).catch((function(t){console.log(t),e({Loading:!1})}))};var g=m,C=Object(j.f)((function(){return g.patient.launch(),Object(b.jsx)("div",{className:"App-Launch",children:Object(b.jsx)("h1",{children:"Please wait..."})})})),A=function(e){var t=null;return e.Array.map((function(e){t=Object.keys(e)})),Object(b.jsxs)("table",{children:[Object(b.jsxs)("thead",{children:[Object(b.jsx)("tr",{children:Object(b.jsx)("th",{children:e.Title.name})}),Object(b.jsx)("tr",{children:t.map((function(e,t){return Object(b.jsx)("th",{children:e},t)}))})]}),Object(b.jsx)("tbody",{children:e.Array.map((function(e,n){return Object(b.jsx)("tr",{children:t.map((function(t,n){if(console.log(e[t]),"string"===typeof e[t])return Object(b.jsx)("td",{children:e[t]},n)}))},n)}))})]})},y=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.Cerner.entry[0];return Object(b.jsxs)("div",{className:"App-Account",children:[Object(b.jsxs)("h1",{children:["You are logged in as ",e.resource.name[0].text,"."]}),e.resource.telecom.length>0?Object(b.jsx)(A,{Title:"Communication",Array:e.resource.telecom}):null,e.resource.careProvider.length>0?Object(b.jsx)(A,{Title:"Care Provider",Array:e.resource.careProvider}):null,e.resource.contact.length>0?Object(b.jsx)(A,{Title:"Contact",Array:e.resource.contact}):null]})}}]),n}(r.a.Component);n(131);function S(e){return Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{exact:!0,path:"/",children:e.Loading?Object(b.jsx)("div",{className:"App-Main",children:Object(b.jsx)("h1",{children:"Please wait..."})}):Object(b.jsx)(f,{Cerner:e.Cerner,SetAppState:e.SetAppState})}),Object(b.jsx)(j.a,{path:"/launch-patient",children:Object(b.jsx)(C,{})}),Object(b.jsx)(j.a,{path:"/account",children:Object(b.jsx)(y,{Cerner:e.Cerner})})]})}var L=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(s.a)(this,n),(c=t.call(this,e)).state={Loading:!1,Cerner:null},c.setAppState=c.setAppState.bind(Object(l.a)(c)),c}return Object(o.a)(n,[{key:"setAppState",value:function(e){this.setState(e)}},{key:"componentDidMount",value:function(){g.patient.ready(this.setAppState),this.setState({Loading:!0})}},{key:"render",value:function(){var e=this.state,t=e.Loading,n=e.Cerner;return n&&console.log("Cerner:",n),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(h.a,{basename:"/UMX-DX",children:[t?Object(b.jsx)("header",{className:"App-Header"}):Object(b.jsx)(p,{Cerner:n}),Object(b.jsx)(S,{Loading:t,Cerner:n,SetAppState:this.setAppState})]})})}}]),n}(r.a.Component),N=(n(132),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,134)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))});i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(L,{})}),document.getElementById("root")),N()}},[[133,1,2]]]);
//# sourceMappingURL=main.17e21162.chunk.js.map