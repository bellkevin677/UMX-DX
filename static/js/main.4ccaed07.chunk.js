(this["webpackJsonpumx-dx"]=this["webpackJsonpumx-dx"]||[]).push([[0],{132:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(66),i=n.n(r),s=n(11),o=n(12),l=n(27),u=n(14),d=n(13),h=n(8),p=n(2),j=n(0),b=function(e){return Object(j.jsxs)("header",{className:"App-Header",children:[Object(j.jsx)(h.b,{to:"/",className:"Header-Link",children:"UMX-DX App"}),e.Oauth2?Object(j.jsx)("div",{className:"Header-Navbar",children:Object(j.jsx)(h.b,{to:"/account",className:"Header-Link",activeClassName:"Header-Link-Active",children:"Account"})}):Object(j.jsxs)("div",{className:"Header-Navbar",children:[Object(j.jsx)(h.b,{to:"/launch-patient",className:"Header-Link",activeClassName:"Header-Link-Active",children:"Patient"}),Object(j.jsx)(h.b,{to:"/launch-provider",className:"Header-Link",activeClassName:"Header-Link-Active",children:"Provider"})]})]})},O=n(68),v=n(15),f=n.n(v),x={patient:{}};x.patient.launch=function(e){f.a.oauth2.authorize({client_id:"efef2e22-0d52-4bfa-ab53-b44456625f2a",scope:"user/Patient.read user/Person.read user/Practitioner.read user/RelatedPerson.read patient/AllergyIntolerance.read patient/CarePlan.read patient/Condition.read patient/MedicationStatement.read patient/Observation.read patient/Patient.read patient/Person.read patient/RelatedPerson.read launch/patient online_access openid profile",iss:"https://fhir-myrecord.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",redirectUri:"https://danielmoffitt54.github.io/UMX-DX/"}).catch(console.error)},x.patient.ready=function(e,t){f.a.oauth2.ready().then((function(n){n.patient.request(t).then((function(t){return e({Loading:!1,Oauth2:n,Cerner:t})})).catch((function(){return e({Loading:!1})}))})).catch((function(){return e({Loading:!1})}))},x.provider={},x.provider.launch=function(e){f.a.oauth2.authorize({client_id:"4cfb74e7-deb2-4151-9c22-16eba93fd1ec",scope:"patient/Patient.read patient/Observation.read launch online_access openid profile",redirectUri:"https://danielmoffitt54.github.io/UMX-DX/"}).then(console.log).catch(console.error)},x.provider.ready=function(e){f.a.oauth2.ready().then((function(e){return e.request("Provider")})).then((function(t){return e({Loading:!1,Cerner:t})})).catch((function(){return e({Loading:!1})}))},x.client={},x.client.request=function(e,t,n){var a=f.a.client(e.state);console.log("props.page:",n.page),a.patient.request(n.page).then((function(e){console.log(e),t(Object(O.a)({Cerner:e},n.state,n.value))})).catch(console.error)};var A=x,m=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).RenderTable=function(e){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"An error has occured."})})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.Oauth2,n=e.Cerner,a=e.MainArray,c=e.MainIndex,r=e.SetAppState;return n?Object(j.jsxs)("div",{className:"App-Main",children:[Object(j.jsx)("ul",{className:"Main-Nav",children:a.map((function(e,n){return c===n?Object(j.jsx)("li",{className:"Main-Nav-Link Main-Nav-Link-Active",onClick:function(){return A.client.request(t,r,{page:a[c],state:"MainIndex",value:n})},children:e},n):Object(j.jsx)("li",{className:"Main-Nav-Link",onClick:function(){return A.client.request(t,r,{page:a[c],state:"MainIndex",value:n})},children:e},n)}))}),this.RenderTable(a[c],n)]}):Object(j.jsx)("div",{className:"App-Main",children:Object(j.jsx)("h1",{children:"Please select account type to Log-In"})})}}]),n}(c.a.Component),g=Object(p.f)((function(){return A.patient.launch(),Object(j.jsx)("div",{className:"App-Launch",children:Object(j.jsx)("h1",{children:"Please wait..."})})})),N=Object(p.f)((function(){return A.provider.launch(),Object(j.jsx)("div",{className:"App-Launch",children:Object(j.jsx)("h1",{children:"Please wait..."})})})),y=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).RenderTable=function(e){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"An error has occured."})})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.Oauth2,n=e.Cerner,a=e.AccountArray,c=e.AccountIndex,r=e.SetAppState;return Object(j.jsxs)("div",{className:"App-Account",children:[Object(j.jsx)("ul",{className:"Account-Nav",children:a.map((function(e,n){return c===n?Object(j.jsx)("li",{className:"Account-Nav-Link Account-Nav-Link-Active",onClick:function(){return A.client.request(t,r,{page:a[c],state:"AccountIndex",value:n})},children:e},n):Object(j.jsx)("li",{className:"Account-Nav-Link",onClick:function(){return A.client.request(t,r,{page:a[c],state:"AccountIndex",value:n})},children:e},n)}))}),this.RenderTable(a[c],n)]})}}]),n}(c.a.Component),C=(n(132),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={Loading:!1,Oauth2:null,Cerner:null,AccountArray:["Patient","Person","RelatedPerson","CarePlan"],MainArray:["Observation","Condition","MedicationStatement","AllergyIntolerance"],AccountIndex:0,MainIndex:0},a.setAppState=a.setAppState.bind(Object(l.a)(a)),a}return Object(o.a)(n,[{key:"setAppState",value:function(e){this.setState(e)}},{key:"componentDidMount",value:function(){var e=this.state,t=e.Cerner,n=e.MainArray,a=e.MainIndex;t||(A.patient.ready(this.setAppState,n[a]),A.provider.ready(this.setAppState),this.setState({Loading:!0}))}},{key:"render",value:function(){var e=this.state,t=e.Loading,n=e.Oauth2,a=e.Cerner,c=e.AccountArray,r=e.MainArray,i=e.AccountIndex,s=e.MainIndex;return n&&console.log("Oauth2:",n),a&&console.log("Cerner:",a),Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(h.a,{basename:"/UMX-DX",children:[t?null:Object(j.jsx)(b,{Oauth2:n}),Object(j.jsxs)(p.c,{children:[Object(j.jsx)(p.a,{exact:!0,path:"/",children:t?Object(j.jsx)("div",{className:"App-Main",children:Object(j.jsx)("h1",{children:"Please wait..."})}):Object(j.jsx)(m,{Oauth2:n,Cerner:a,MainArray:r,MainIndex:s,SetAppState:this.setAppState})}),Object(j.jsx)(p.a,{path:"/account",children:Object(j.jsx)(y,{Oauth2:n,Cerner:a,AccountArray:c,AccountIndex:i,SetAppState:this.setAppState})}),Object(j.jsx)(p.a,{path:"/launch-patient",children:Object(j.jsx)(g,{})}),Object(j.jsx)(p.a,{path:"/launch-provider",children:Object(j.jsx)(N,{})})]})]})})}}]),n}(c.a.Component)),M=(n(133),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,135)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))});i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root")),M()}},[[134,1,2]]]);
//# sourceMappingURL=main.4ccaed07.chunk.js.map