(this["webpackJsonpumx-dx"]=this["webpackJsonpumx-dx"]||[]).push([[0],{131:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(66),i=n.n(c),s=n(11),o=n(12),d=n(13),u=n(15),l=n(14),p=n(2),h=n(8),j=n(1),b=function(e){return Object(j.jsxs)("header",{className:"App-Header",children:[Object(j.jsx)(h.b,{to:"/",className:"Header-Link",children:"UMX-DX App"}),e.Cerner?Object(j.jsx)("div",{className:"Header-Navbar",children:Object(j.jsx)(h.b,{to:"/account",className:"Header-Link",activeClassName:"Header-Link-Selected",children:e.Cerner.entry[0].resource.name[0].text})}):Object(j.jsxs)("div",{className:"Header-Navbar",children:[Object(j.jsx)(h.b,{to:"/launch-patient",className:"Header-Link",activeClassName:"Header-Link-Selected",children:"Patient"}),Object(j.jsx)(h.b,{to:"/launch-provider",className:"Header-Link",activeClassName:"Header-Link-Selected",children:"Provider"})]})]})},O=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={},a.setMainState=a.setMainState.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"setMainState",value:function(e){this.setState(e)}},{key:"render",value:function(){var e=this.props.Cerner;return Object(j.jsx)("div",{className:"App-Main",children:e?Object(j.jsx)("h1",{children:"Authorized"}):Object(j.jsx)("h1",{children:"Please select account type to Log-In"})})}}]),n}(r.a.Component),f=Object(p.f)(O),v=n(22),x=n.n(v),S={patient:{}};S.patient.launch=function(e){x.a.oauth2.authorize({target:"popup",width:1e3,height:600,client_id:"efef2e22-0d52-4bfa-ab53-b44456625f2a",scope:"user/AllergyIntolerance.read user/CarePlan.read user/Condition.read user/MedicationStatement.read user/Observation.read user/Patient.read user/RelatedPerson.read launch/patient online_access openid profile",iss:"https://fhir-myrecord.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",redirectUri:"https://danielmoffitt54.github.io/UMX-DX/"}).then((function(){return e({Type:"patient"})})).catch(console.error)},S.patient.ready=function(e){x.a.oauth2.ready().then((function(t){return e({Loading:!1,Cerner:t})})).catch((function(t){e({Loading:!1}),console.log(t)}))},S.provider={},S.provider.launch=function(e){x.a.oauth2.authorize({target:"popup",client_id:"4cfb74e7-deb2-4151-9c22-16eba93fd1ec",scope:"patient/Patient.read patient/Observation.read launch online_access openid profile",redirectUri:"https://danielmoffitt54.github.io/UMX-DX/"}).then((function(){return e({Type:"provider"})})).catch(console.error)},S.provider.ready=function(e){x.a.oauth2.ready().then((function(e){return e.request("Provider")})).then((function(t){return e({Loading:!1,Cerner:t})})).catch((function(t){console.log(t),e({Loading:!1})}))};var m=S,A=function(e){return m.patient.launch(e.setAppState),Object(j.jsx)("div",{className:"App-Launch",children:Object(j.jsx)("h1",{children:"Please wait..."})})},C=function(e){return m.provider.launch(e.setAppState),Object(j.jsx)("div",{className:"App-Launch",children:Object(j.jsx)("h1",{children:"Please wait..."})})},g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"render",value:function(){this.props.Cerner;return Object(j.jsx)("div",{className:"App-Account"})}}]),n}(r.a.Component);n(131);function L(e){return Object(j.jsxs)(p.c,{children:[Object(j.jsx)(p.a,{exact:!0,path:"/",children:e.Loading?Object(j.jsx)("div",{className:"App-Main",children:Object(j.jsx)("h1",{children:"Please wait..."})}):Object(j.jsx)(f,{Cerner:e.Cerner,SetAppState:e.SetAppState})}),Object(j.jsx)(p.a,{path:"/launch-patient",children:Object(j.jsx)(A,{SetAppState:e.SetAppState})}),Object(j.jsx)(p.a,{path:"/launch-provider",children:Object(j.jsx)(C,{SetAppState:e.SetAppState})}),Object(j.jsx)(p.a,{path:"/account",children:Object(j.jsx)(g,{Cerner:e.Cerner})})]})}var y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={Loading:!1,Type:null,Cerner:null},a.setAppState=a.setAppState.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"setAppState",value:function(e){this.setState(e)}},{key:"componentDidMount",value:function(){var e=this.state.Type;null!==e&&(m[e].ready(this.setAppState),this.setState({Loading:!0}))}},{key:"render",value:function(){var e=this.state,t=e.Loading,n=e.Cerner;return n&&console.log("Cerner:",n),Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(h.a,{basename:"/UMX-DX",children:[t?Object(j.jsx)("header",{className:"App-Header"}):Object(j.jsx)(b,{Cerner:n}),Object(j.jsx)(L,{Loading:t,Cerner:n,SetAppState:this.setAppState})]})})}}]),n}(r.a.Component),N=(n(132),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,134)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))});i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),N()}},[[133,1,2]]]);
//# sourceMappingURL=main.acd3acf7.chunk.js.map