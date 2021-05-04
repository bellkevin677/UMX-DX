(this["webpackJsonpumx-dx"]=this["webpackJsonpumx-dx"]||[]).push([[0],{131:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(66),i=n.n(c),s=n(8),o=n(9),l=n(14),d=n(11),u=n(10),h=n(2),j=n(15),b=n(0),p=function(e){return Object(b.jsxs)("header",{className:"App-Header",children:[Object(b.jsx)(j.b,{to:"/",className:"Header-Link",children:"UMX-DX App"}),e.Cerner?Object(b.jsx)("div",{className:"Header-Navbar",children:Object(b.jsx)(j.b,{to:"/account",className:"Header-Link",activeClassName:"Header-Link-Selected",children:e.Cerner.entry[0].resource.name[0].text})}):Object(b.jsx)("div",{className:"Header-Navbar",children:Object(b.jsx)(j.b,{to:"/launch-patient",className:"Header-Link",activeClassName:"Header-Link-Selected",children:"Patient"})})]})},f=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={},a.setMainState=a.setMainState.bind(Object(l.a)(a)),a}return Object(o.a)(n,[{key:"setMainState",value:function(e){this.setState(e)}},{key:"render",value:function(){var e=this.props.Cerner;return Object(b.jsx)("div",{className:"App-Main",children:e?Object(b.jsx)("h1",{children:"Authorized"}):Object(b.jsx)("h1",{children:"Please select account type to Log-In"})})}}]),n}(r.a.Component),O=Object(h.f)(f),x=n(22),m=n.n(x),v={patient:{}};v.patient.launch=function(e){m.a.oauth2.authorize({client_id:"efef2e22-0d52-4bfa-ab53-b44456625f2a",scope:"patient/Patient.read patient/Observation.read launch/patient online_access openid profile",iss:"https://fhir-myrecord.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",redirectUri:"https://danielmoffitt54.github.io/UMX-DX/"}).catch(console.error)},v.patient.ready=function(e){m.a.oauth2.ready().then((function(e){return e.request("Patient")})).then((function(t){return e({Loading:!1,Cerner:t})})).catch((function(t){console.log(t),e({Loading:!1})}))},v.provider={},v.provider.launch=function(e){m.a.oauth2.authorize({client_id:"4cfb74e7-deb2-4151-9c22-16eba93fd1ec",scope:"patient/Patient.read patient/Observation.read launch online_access openid profile",redirectUri:"https://danielmoffitt54.github.io/UMX-DX/"}).then(console.log).catch(console.error)},v.provider.ready=function(e){m.a.oauth2.ready().then((function(e){return e.request("Provider")})).then((function(t){return e({Loading:!1,Cerner:t})})).catch((function(t){console.log(t),e({Loading:!1})}))};var y=v,g=Object(h.f)((function(){return y.patient.launch(),Object(b.jsx)("div",{className:"App-Launch",children:Object(b.jsx)("h1",{children:"Please wait..."})})})),C=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).FormatTitle=function(e){return(e.charAt(0).toUpperCase()+e.slice(1)).replace(/([A-Z])/g," $1").trim()},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props.Data,n=[];return console.log(t),t.map((function(e){Object.keys(e).forEach((function(e){switch(!0){case"given"===e:case"family"===e:case"period"===e:case"reference"===e:case"gender"===e:case n.includes(e):return;default:return n.push(e)}}))})),Object(b.jsxs)("table",{className:"MiniTable",children:[Object(b.jsx)("thead",{className:"MiniTable-Head",children:Object(b.jsx)("tr",{className:"MiniTable-Head-Row",children:n.map((function(t,n){switch(!0){case!isNaN(t):return Object(b.jsx)("th",{children:"".concat(parseInt(t)+1,".)")},n);default:return Object(b.jsx)("th",{children:e.FormatTitle(t)},n)}}))})}),Object(b.jsx)("tbody",{className:"MiniTable-Body",children:t.map((function(e,t){return Object(b.jsx)("tr",{className:"MiniTable-Body-Row",children:n.map((function(t,n){switch(!0){case"relationship"===t:return Object(b.jsx)("td",{children:e[t][0].text},n);case"name"===t:case"address"===t:return Object(b.jsx)("td",{children:e[t].text},n);case"string"===typeof e[t]:return Object(b.jsx)("td",{children:e[t]},n);default:return}}))},t)}))})]})}}]),n}(r.a.Component),N=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).FormatTitle=function(e){return(e.charAt(0).toUpperCase()+e.slice(1)).replace(/([A-Z])/g," $1").trim()},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.Title,a=t.Array,r=[];return a.map((function(e){Object.keys(e).forEach((function(e){switch(!0){case"given"===e:case"family"===e:case"period"===e:case"reference"===e:case"gender"===e:case r.includes(e):return;default:return r.push(e)}}))})),Object(b.jsxs)("table",{className:"Table",children:[Object(b.jsxs)("thead",{className:"Table-Head",children:[n?Object(b.jsx)("tr",{children:Object(b.jsx)("th",{children:this.FormatTitle(n)})}):null,Object(b.jsx)("tr",{className:"Table-Head-Row",children:r.map((function(t,n){switch(!0){case!isNaN(t):return Object(b.jsx)("th",{children:"".concat(parseInt(t)+1,".)")},n);default:return Object(b.jsx)("th",{children:e.FormatTitle(t)},n)}}))})]}),Object(b.jsx)("tbody",{className:"Table-Body",children:a.map((function(e,t){return Object(b.jsx)("tr",{className:"Table-Body-Row",children:r.map((function(t,n){switch(!0){case"relationship"===t:return Object(b.jsx)("td",{children:e[t][0].text},n);case"name"===t:case"address"===t:return Object(b.jsx)("td",{children:e[t].text},n);case"string"===typeof e[t]:return Object(b.jsx)("td",{children:e[t]},n);case"object"===typeof e[t]:return Object(b.jsx)("td",{children:Object(b.jsx)(C,{Data:[e[t]]})},n);default:return}}))},t)}))})]})}}]),n}(r.a.Component),A=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.Cerner.entry[0];return Object(b.jsxs)("div",{className:"App-Account",children:[e.resource.telecom.length>0?Object(b.jsx)(N,{Title:"Communication",Array:e.resource.telecom}):null,e.resource.careProvider.length>0?Object(b.jsx)(N,{Title:"Care Provider",Array:e.resource.careProvider}):null,e.resource.contact.length>0?Object(b.jsx)(N,{Title:"Contact",Array:e.resource.contact}):null]})}}]),n}(r.a.Component);n(131);function S(e){return Object(b.jsxs)(h.c,{children:[Object(b.jsx)(h.a,{exact:!0,path:"/",children:e.Loading?Object(b.jsx)("div",{className:"App-Main",children:Object(b.jsx)("h1",{children:"Please wait..."})}):Object(b.jsx)(O,{Cerner:e.Cerner,SetAppState:e.SetAppState})}),Object(b.jsx)(h.a,{path:"/launch-patient",children:Object(b.jsx)(g,{})}),Object(b.jsx)(h.a,{path:"/account",children:Object(b.jsx)(A,{Cerner:e.Cerner})})]})}var T=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={Loading:!1,Cerner:null},a.setAppState=a.setAppState.bind(Object(l.a)(a)),a}return Object(o.a)(n,[{key:"setAppState",value:function(e){this.setState(e)}},{key:"componentDidMount",value:function(){this.state.Cerner||(y.patient.ready(this.setAppState),this.setState({Loading:!0}))}},{key:"render",value:function(){var e=this.state,t=e.Loading,n=e.Cerner;return n&&console.log("Cerner:",n),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(j.a,{basename:"/UMX-DX",children:[t?Object(b.jsx)("header",{className:"App-Header"}):Object(b.jsx)(p,{Cerner:n}),Object(b.jsx)(S,{Loading:t,Cerner:n,SetAppState:this.setAppState})]})})}}]),n}(r.a.Component),L=(n(132),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,134)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))});i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(T,{})}),document.getElementById("root")),L()}},[[133,1,2]]]);
//# sourceMappingURL=main.2e9bd50b.chunk.js.map