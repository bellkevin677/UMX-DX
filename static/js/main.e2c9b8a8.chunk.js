(this["webpackJsonpumx-dx"]=this["webpackJsonpumx-dx"]||[]).push([[0],{131:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(66),s=a.n(c),i=a(8),l=a(9),o=a(15),d=a(11),u=a(10),j=a(2),h=a(12),b=a(0),p=function(e){return Object(b.jsxs)("header",{className:"App-Header",children:[Object(b.jsx)(h.b,{to:"/",className:"Header-Link",children:"UMX-DX App"}),e.Cerner?Object(b.jsx)("div",{className:"Header-Navbar",children:Object(b.jsx)(h.b,{to:"/account",className:"Header-Link",activeClassName:"Header-Link-Selected",children:"Account"})}):Object(b.jsxs)("div",{className:"Header-Navbar",children:[Object(b.jsx)(h.b,{to:"/launch-patient",className:"Header-Link",activeClassName:"Header-Link-Selected",children:"Patient"}),Object(b.jsx)(h.b,{to:"/launch-provider",className:"Header-Link",activeClassName:"Header-Link-Selected",children:"Provider"})]})]})},O=a(22),f=a.n(O),m={patient:{}};m.patient.launch=function(e){f.a.oauth2.authorize({client_id:"efef2e22-0d52-4bfa-ab53-b44456625f2a",scope:"user/AllergyIntolerance.read user/CarePlan.read user/Condition.read user/Observation.read user/Patient.read user/RelatedPerson.read launch/patient online_access openid profile",iss:"https://fhir-myrecord.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",redirectUri:"https://danielmoffitt54.github.io/UMX-DX/"}).catch(console.error)},m.patient.ready=function(e){f.a.oauth2.ready().then((function(e){return e.request("Patient",{pageLimit:0})})).then((function(t){return e({Loading:!1,Cerner:t})})).catch((function(){return e({Loading:!1})}))},m.provider={},m.provider.launch=function(e){f.a.oauth2.authorize({client_id:"4cfb74e7-deb2-4151-9c22-16eba93fd1ec",scope:"patient/Patient.read patient/Observation.read launch online_access openid profile",redirectUri:"https://danielmoffitt54.github.io/UMX-DX/"}).then(console.log).catch(console.error)},m.provider.ready=function(e){f.a.oauth2.ready().then((function(e){return e.request("Provider")})).then((function(t){return e({Loading:!1,Cerner:t})})).catch((function(){return e({Loading:!1})}))},m.client={},m.client.refresh=function(e){};var x=m,v=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={Loading:!0,Display:"Observation",Data:null},n.setMainState=n.setMainState.bind(Object(o.a)(n)),n}return Object(l.a)(a,[{key:"setMainState",value:function(e){this.setState(e)}},{key:"render",value:function(){var e=this.props.Cerner,t=this.state,a=t.Loading,n=t.Display,r=t.Data;return r&&(console.log("Display:",n),console.log("Data:",r)),e?a?Object(b.jsx)("div",{className:"App-Main",children:Object(b.jsx)("h1",{children:"Please wait..."})}):Object(b.jsxs)("div",{className:"App-Main",children:[Object(b.jsx)("ul",{className:"Main-Nav",children:Object(b.jsx)("li",{className:"Main-Nav-Link",children:"Observation"})}),Object(b.jsx)("div",{className:"Main-Table"})]}):Object(b.jsx)("div",{className:"App-Main",children:Object(b.jsx)("h1",{children:"Please select account type to Log-In"})})}}]),a}(r.a.Component),y=Object(j.f)((function(){return x.patient.launch(),Object(b.jsx)("div",{className:"App-Launch",children:Object(b.jsx)("h1",{children:"Please wait..."})})})),g=Object(j.f)((function(){return x.provider.launch(),Object(b.jsx)("div",{className:"App-Launch",children:Object(b.jsx)("h1",{children:"Please wait..."})})})),N=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).FormatTitle=function(e){return(e.charAt(0).toUpperCase()+e.slice(1)).replace(/([A-Z])/g," $1").trim()},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.Data,t=[];return e.map((function(e){return Object.keys(e).forEach((function(e){switch(!0){case"given"===e:case"family"===e:case"period"===e:case"reference"===e:case"gender"===e:case t.includes(e):return;default:return t.push(e)}}))})),Object(b.jsx)("table",{className:"MiniTable",children:Object(b.jsx)("tbody",{className:"MiniTable-Body",children:e.map((function(e,a){return Object(b.jsx)("tr",{className:"MiniTable-Body-Row",children:t.map((function(t,a){switch(!0){case"relationship"===t:return Object(b.jsx)("td",{children:e[t][0].text},a);case"name"===t:case"address"===t:return Object(b.jsx)("td",{children:e[t].text},a);case"string"===typeof e[t]:return Object(b.jsx)("td",{children:e[t]},a);default:return null}}))},a)}))})})}}]),a}(r.a.Component),C=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).FormatTitle=function(e){return(e.charAt(0).toUpperCase()+e.slice(1)).replace(/([A-Z])/g," $1").trim()},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.Title,n=t.Data,r=[];return n.map((function(e){return Object.keys(e).forEach((function(e){switch(!0){case"given"===e:case"family"===e:case"period"===e:case"reference"===e:case"gender"===e:case r.includes(e):return;default:return r.push(e)}}))})),Object(b.jsxs)("table",{className:"Table",children:[Object(b.jsxs)("thead",{className:"Table-Head",children:[a?Object(b.jsx)("tr",{children:Object(b.jsx)("th",{className:"Table-Title",children:this.FormatTitle(a)})}):null,Object(b.jsx)("tr",{className:"Table-Head-Row",children:r.map((function(t,a){switch(!0){case"display"===t:return Object(b.jsx)("th",{className:"Table-Head-Data"},a);case!isNaN(t):return Object(b.jsx)("th",{className:"Table-Head-Data",children:"".concat(parseInt(t)+1,".)")},a);default:return Object(b.jsx)("th",{className:"Table-Head-Data",children:e.FormatTitle(t)},a)}}))})]}),Object(b.jsx)("tbody",{className:"Table-Body",children:n.map((function(e,t){return Object(b.jsx)("tr",{className:"Table-Body-Row",children:r.map((function(a,n){switch(!0){case"display"===a:return Object(b.jsx)("td",{className:"Table-Body-Data",children:"".concat(t+1,".) ").concat(e[a])},n);case"relationship"===a:return Object(b.jsx)("td",{className:"Table-Body-Data",children:e[a][0].text},n);case"name"===a:case"address"===a:return Object(b.jsx)("td",{className:"Table-Body-Data",children:e[a].text},n);case"string"===typeof e[a]:return Object(b.jsx)("td",{className:"Table-Body-Data",children:e[a]},n);case"object"===typeof e[a]:return Object(b.jsx)("td",{className:"Table-Body-Data",children:Object(b.jsx)(N,{Data:e[a]})},n);default:return null}}))},t)}))})]})}}]),a}(r.a.Component),T=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.Cerner.entry[0],t=[{account:e.resource.resourceType,gender:e.resource.gender,birthDate:e.resource.birthDate,address:e.resource.address[0].text,language:e.resource.communication[0].language.coding[0].display,maritalStatus:e.resource.maritalStatus.text}];return Object(b.jsxs)("div",{className:"App-Account",children:[e.resource.address.length>0?Object(b.jsx)(C,{Title:"Personal",Data:t}):null,e.resource.careProvider.length>0?Object(b.jsx)(C,{Title:"Care Provider",Data:e.resource.careProvider}):null,e.resource.telecom.length>0?Object(b.jsx)(C,{Title:"Communication",Data:e.resource.telecom}):null,e.resource.contact.length>0?Object(b.jsx)(C,{Title:"Contact",Data:e.resource.contact}):null]})}}]),a}(r.a.Component);a(131);function A(e){return Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{exact:!0,path:"/",children:e.Loading?Object(b.jsx)("div",{className:"App-Main",children:Object(b.jsx)("h1",{children:"Please wait..."})}):Object(b.jsx)(v,{Cerner:e.Cerner,SetAppState:e.SetAppState})}),Object(b.jsx)(j.a,{path:"/launch-patient",children:Object(b.jsx)(y,{})}),Object(b.jsx)(j.a,{path:"/launch-provider",children:Object(b.jsx)(g,{})}),Object(b.jsx)(j.a,{path:"/account",children:Object(b.jsx)(T,{Cerner:e.Cerner})})]})}var D=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={Loading:!1,Cerner:null},n.setAppState=n.setAppState.bind(Object(o.a)(n)),n}return Object(l.a)(a,[{key:"setAppState",value:function(e){this.setState(e)}},{key:"componentDidMount",value:function(){this.state.Cerner||(x.patient.ready(this.setAppState),x.provider.ready(this.setAppState),this.setState({Loading:!0}))}},{key:"render",value:function(){var e=this.state,t=e.Loading,a=e.Cerner;return a&&console.log("Cerner:",a),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(h.a,{basename:"/UMX-DX",children:[t?Object(b.jsx)("header",{className:"App-Header"}):Object(b.jsx)(p,{Cerner:a}),Object(b.jsx)(A,{Loading:t,Cerner:a,SetAppState:this.setAppState})]})})}}]),a}(r.a.Component),L=(a(132),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,134)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))});s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(D,{})}),document.getElementById("root")),L()}},[[133,1,2]]]);
//# sourceMappingURL=main.e2c9b8a8.chunk.js.map