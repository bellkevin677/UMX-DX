(this["webpackJsonpumx-dx"]=this["webpackJsonpumx-dx"]||[]).push([[0],{132:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(67),i=n.n(c),s=n(14),l=n(15),d=n(10),o=n(17),u=n(16),h=n(9),j=n(2),b=n(0),p=function(e){return Object(b.jsxs)("header",{className:"App-Header",children:[Object(b.jsx)(h.b,{to:"/",className:"Header-Link",children:"UMX-DX App"}),e.Oauth2?Object(b.jsxs)("div",{className:"Header-Navbar",children:[Object(b.jsx)(h.b,{to:"/account",className:"Header-Link",activeClassName:"Header-Link-Active",children:"Account"}),Object(b.jsx)(h.b,{to:"/",className:"Header-Link",onClick:function(){return e.SetAppState({Oauth2:null,Cerner:null,MainIndex:0,AccountIndex:0,DisplayCount:25,DisplayIndex:0})},children:"Log Out"})]}):Object(b.jsxs)("div",{className:"Header-Navbar",children:[Object(b.jsx)(h.b,{to:"/launch-patient",className:"Header-Link",activeClassName:"Header-Link-Active",children:"Patient"}),Object(b.jsx)(h.b,{to:"/launch-provider",className:"Header-Link",activeClassName:"Header-Link-Active",children:"Provider"})]})]})},x=n(11),O=n(24),S=n.n(O),y=n(5),g={};function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.find((function(e){return"official"===e.use}))||e[0];if(t)return t.given.join(" ")+" "+t.family}function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,a=n,r=e.find((function(e){return e.system===t}));return r&&r.display&&(a=r.display),a}g.patient=function(e){S.a.oauth2.authorize({client_id:"efef2e22-0d52-4bfa-ab53-b44456625f2a",scope:"user/Patient.read user/Person.read user/Practitioner.read user/RelatedPerson.read patient/AllergyIntolerance.read patient/CarePlan.read patient/Condition.read patient/MedicationStatement.read patient/Observation.read patient/Patient.read patient/Person.read patient/RelatedPerson.read launch/patient online_access openid profile",iss:"https://fhir-myrecord.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",redirectUri:"https://danielmoffitt54.github.io/UMX-DX/"}).catch(console.error)},g.provider=function(e){S.a.oauth2.authorize({client_id:"4cfb74e7-deb2-4151-9c22-16eba93fd1ec",scope:"patient/Patient.read patient/Observation.read launch online_access openid profile",iss:"https://fhir-myrecord.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d",redirectUri:"https://danielmoffitt54.github.io/UMX-DX/"}).catch(console.error)},g.client={},g.client.ready=function(e){S.a.oauth2.ready().then((function(t){t.patient.request(e.Page,{pageLimit:0,flat:!0}).then((function(n){var a=[],r=!0;n.forEach((function(e){switch(!0){default:r=!0;break;case e.verificationStatus&&"entered-in-error"===e.verificationStatus:case e.code&&"Entered In Error"===e.code.text:r=!1}r&&a.push(e)})),e.SetAppState({Loading:!1,Oauth2:t,Cerner:a})})).catch((function(n){return e.SetAppState({Loading:!1,Oauth2:t})}))})).catch((function(){return e.SetAppState({Loading:!1})}))},g.client.routeChange=function(e){var t=!1;e.Cerner.forEach((function(n){e.PrevScope.includes(n.resourceType)&&(t=!0)})),t&&g.client.request(e)},g.client.request=function(e){S.a.client(e.Oauth2.state).patient.request(e.Page,{pageLimit:0,flat:!0}).then((function(t){var n,a=[],r=!0;t.forEach((function(e){switch(!0){default:r=!0;break;case e.verificationStatus&&"entered-in-error"===e.verificationStatus:case e.code&&"Entered In Error"===e.code.text:r=!1}r&&a.push(e)})),e.SetAppState((n={Cerner:a},Object(x.a)(n,e.State,e.Value),Object(x.a)(n,"DisplayIndex",0),n)),e.SetParentState({CurrentPage:1})})).catch((function(t){var n;e.SetAppState((n={Loading:!1},Object(x.a)(n,e.State,e.Value),Object(x.a)(n,"DisplayIndex",0),n)),e.SetParentState({CurrentPage:1})}))},g.thead={},g.thead.observation=function(){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Issued Date"}),Object(b.jsx)("th",{children:"Subject"}),Object(b.jsx)("th",{children:"Report"}),Object(b.jsx)("th",{children:"Category"}),Object(b.jsx)("th",{children:"Status"})]})},g.thead.condition=function(){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Patient"}),Object(b.jsx)("th",{children:"Category"}),Object(b.jsx)("th",{children:"Report"}),Object(b.jsx)("th",{children:"Initial Date"}),Object(b.jsx)("th",{children:"Verification Status"}),Object(b.jsx)("th",{children:"Clinical Status"}),Object(b.jsx)("th",{children:"Abatement Date"})]})},g.thead.medicationstatement=function(){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Patient"}),Object(b.jsx)("th",{children:"Medication"}),Object(b.jsx)("th",{children:"Dosage"}),Object(b.jsx)("th",{children:"Status"}),Object(b.jsx)("th",{children:"Taken"})]})},g.thead.allergyintolerance=function(){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Patient"}),Object(b.jsx)("th",{children:"Category"}),Object(b.jsx)("th",{children:"Substance"}),Object(b.jsx)("th",{children:"Criticality"}),Object(b.jsx)("th",{children:"Status"})]})},g.thead.patient=function(){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"ID"}),Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Gender"}),Object(b.jsx)("th",{children:"Birth Date"}),Object(b.jsx)("th",{children:"Marital Status"})]})},g.thead.relatedperson=function(){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Patient"}),Object(b.jsx)("th",{children:"Person"}),Object(b.jsx)("th",{children:"Gender"}),Object(b.jsx)("th",{children:"Birth Date"})]})},g.tbody={},g.tbody.observation=function(e){var t=new Date(e.entry.issued);return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t.toDateString()||"N/A"}),Object(b.jsx)("td",{children:e.entry.subject.reference.split("/")[1]||"N/A"}),Object(b.jsx)("td",{children:"N/A"}),Object(b.jsx)("td",{children:e.entry.category.text||"N/A"}),Object(b.jsx)("td",{children:e.entry.status||"N/A"})]},e.index)},g.tbody.condition=function(e){var t=new Date(e.entry.onsetDateTime),n=new Date(e.entry.onsetDateTime);return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.entry.patient.display||"N/A"}),Object(b.jsx)("td",{children:e.entry.category.text||"N/A"}),Object(b.jsx)("td",{children:e.entry.code.text||"N/A"}),Object(b.jsx)("td",{children:t.toDateString()||"N/A"}),Object(b.jsx)("td",{children:e.entry.verificationStatus||"N/A"}),Object(b.jsx)("td",{children:e.entry.clinicalStatus||"N/A"}),Object(b.jsx)("td",{children:n.toDateString()||"N/A"})]},e.index)},g.tbody.medicationstatement=function(e){var t=C(Object(y.getPath)(e.entry,"medicationCodeableConcept.coding")||Object(y.getPath)(e.entry,"medicationCodeableConcept.code.coding"),"http://www.nlm.nih.gov/research/umls/rxnorm","Unnamed Medication(TM)"),n=Object(y.getPath)(e.entry,"wasNotTaken")?"No":"Yes";return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.entry.patient.display||"N/A"}),Object(b.jsx)("td",{children:t||"N/A"}),Object(b.jsx)("td",{children:Object(y.getPath)(e.entry,"dosageInstruction.0.text")||"N/A"}),Object(b.jsx)("td",{children:e.entry.status||"N/A"}),Object(b.jsx)("td",{children:n||"N/A"})]},e.index)},g.tbody.allergyintolerance=function(e){var t=C(Object(y.getPath)(e.entry,"substance.coding")||Object(y.getPath)(e.entry,"substance.code.coding"),"http://snomed.info/sct",e.entry.substance.text||"Unnamed Allergy"),n="CRITH"===e.entry.criticality?"High Risk":"-";return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(y.getPath)(e.entry,"patient.display")||"N/A"}),Object(b.jsx)("td",{children:Object(y.getPath)(e.entry,"category")||"N/A"}),Object(b.jsx)("td",{children:t||"N/A"}),Object(b.jsx)("td",{children:n||"N/A"}),Object(b.jsx)("td",{children:e.entry.status||"N/A"})]})},g.tbody.patient=function(e){var t=C(Object(y.getPath)(e.entry,"maritalStatus.coding")||Object(y.getPath)(e.entry,"maritalStatus.code.coding"),"http://hl7.org/fhir/v3/Marital",e.entry.maritalStatus.text||"Unavailable"),n=new Date(e.entry.birthDate);return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.entry.id||"N/A"}),Object(b.jsx)("td",{children:A(e.entry.name)||"N/A"}),Object(b.jsx)("td",{children:e.entry.gender||"N/A"}),Object(b.jsx)("td",{children:n.toDateString()||"N/A"}),Object(b.jsx)("td",{children:t||"N/A"})]},e.index)},g.tbody.relatedperson=function(e){var t=new Date(e.entry.birthDate);return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.entry.patient.display||"N/A"}),Object(b.jsx)("td",{children:e.entry.name.text||"N/A"}),Object(b.jsx)("td",{children:e.entry.gender||"N/A"}),Object(b.jsx)("td",{children:t.toDateString()||"N/A"})]},e.index)};var v=g;function f(e){return Object(b.jsxs)("div",{className:"Footer-Nav",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{className:"Footer-Nav-Link",onClick:function(){e.SetAppState({DisplayIndex:0}),e.SetParentState({CurrentPage:1})},disabled:e.CurrentPage<=1,children:"First"}),Object(b.jsx)("button",{className:"Footer-Nav-Link",onClick:function(){e.SetAppState({DisplayIndex:e.DisplayIndex-e.DisplayCount}),e.SetParentState({CurrentPage:e.CurrentPage-1})},disabled:e.CurrentPage<=1,children:"Prev"})]}),Object(b.jsx)("div",{children:Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"text",value:e.CurrentPage,onChange:function(t){return e.SetParentState({CurrentPage:t.target.value})},onKeyPress:function(t){if("Enter"===t.key){if(e.CurrentPage<=1)return e.SetAppState({DisplayIndex:0}),e.SetParentState({CurrentPage:1});if(e.CurrentPage>=e.Pages)return e.SetAppState({DisplayIndex:e.Cerner.length-e.DisplayCount}),e.SetParentState({CurrentPage:e.Pages});e.SetAppState({DisplayIndex:e.DisplayCount*(e.CurrentPage-1)})}}}),"/".concat(e.Pages)]})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{className:"Footer-Nav-Link",onClick:function(){e.SetAppState({DisplayIndex:e.DisplayIndex+e.DisplayCount}),e.SetParentState({CurrentPage:e.CurrentPage+1})},disabled:e.CurrentPage>=e.Pages,children:"Next"}),Object(b.jsx)("button",{className:"Footer-Nav-Link",onClick:function(){e.SetAppState({DisplayIndex:e.DisplayCount*(e.Pages-1)}),e.SetParentState({CurrentPage:e.Pages})},disabled:e.CurrentPage>=e.Pages,children:"Last"})]})]})}var P=function(e){var t=[],n=null,a=Math.ceil(e.Cerner.length/e.DisplayCount);e.Cerner[0].resourceType&&(n=e.Cerner[0].resourceType.toLowerCase());for(var r=0;r<e.Cerner.length&&t.length<e.DisplayCount;r++)r>=e.DisplayIndex&&t.push(e.Cerner[r]);return t.length>0&&console.log("Display: ",t),a>0&&console.log("Pages(Current/Total): ".concat(e.CurrentPage,"/").concat(a)),a>0&&console.log("Index(Current/Total): ".concat(e.DisplayIndex,"/").concat(e.Cerner.length)),a>0&&console.log("DisplayCount: ".concat(e.DisplayCount)),Object(b.jsxs)("div",{className:"Table",children:[Object(b.jsxs)("table",{children:[Object(b.jsx)("thead",{children:v.thead[n]()}),Object(b.jsx)("tbody",{children:t.map((function(e,t){return v.tbody[n]({index:t,entry:e})}))})]}),a>1?Object(b.jsx)(f,{Cerner:e.Cerner,Pages:a,DisplayCount:e.DisplayCount,DisplayIndex:e.DisplayIndex,CurrentPage:e.CurrentPage,SetAppState:e.SetAppState,SetParentState:e.SetParentState}):null]})},N=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={CurrentPage:1},a.SetMainState=a.SetMainState.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"SetMainState",value:function(e){this.setState(e)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.Oauth2,n=e.Cerner,a=e.AccountArray,r=e.MainArray,c=e.MainIndex,i=e.SetAppState;n&&v.client.routeChange({PrevScope:a,Oauth2:t,Cerner:n,Page:r[c],State:"MainIndex",Value:c,SetAppState:i,SetParentState:this.SetMainState})}},{key:"render",value:function(){var e=this,t=this.props,n=t.Oauth2,a=t.Cerner,r=t.MainArray,c=t.MainIndex,i=t.DisplayCount,s=t.DisplayIndex,l=t.SetAppState,d=this.state.CurrentPage;return n?a?Object(b.jsxs)("div",{className:"App-Main",children:[Object(b.jsxs)("ul",{className:"Subheader-Nav",children:[r.map((function(t,a){return c===a?Object(b.jsx)("li",{className:"Subheader-Nav-Link Subheader-Nav-Link-Active",onClick:function(){return v.client.request({Oauth2:n,Page:t,State:"MainIndex",Value:a,SetAppState:l,SetParentState:e.SetMainState})},children:t},a):Object(b.jsx)("li",{className:"Subheader-Nav-Link",onClick:function(){return v.client.request({Oauth2:n,Page:t,State:"MainIndex",Value:a,SetAppState:l,SetParentState:e.SetMainState})},children:t},a)})),Object(b.jsx)("li",{className:"Subheader-Nav-Link",children:Object(b.jsxs)("label",{className:"Subheader-Count",children:["Count:",Object(b.jsxs)("select",{value:i,onChange:function(t){l({DisplayCount:parseInt(t.target.value),DisplayIndex:0}),e.SetMainState({CurrentPage:1})},children:[Object(b.jsx)("option",{value:25,children:"25"}),Object(b.jsx)("option",{value:50,children:"50"}),Object(b.jsx)("option",{value:100,children:"100"})]})]})})]}),Object(b.jsx)(P,{Cerner:a,DisplayCount:i,DisplayIndex:s,CurrentPage:d,SetAppState:l,SetParentState:this.SetMainState})]}):Object(b.jsx)("div",{className:"App-Main",children:Object(b.jsx)("h1",{children:"Please wait..."})}):Object(b.jsx)("div",{className:"App-Main",children:Object(b.jsx)("h1",{children:"Please select account type to Log-In"})})}}]),n}(r.a.Component),m=Object(j.f)((function(){return v.patient(),Object(b.jsx)("div",{className:"App-Launch",children:Object(b.jsx)("h1",{children:"Please wait..."})})})),D=Object(j.f)((function(){return v.provider(),Object(b.jsx)("div",{className:"App-Launch",children:Object(b.jsx)("h1",{children:"Please wait..."})})})),I=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={CurrentPage:1},a.SetAccountState=a.SetAccountState.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"SetAccountState",value:function(e){this.setState(e)}},{key:"componentDidMount",value:function(){var e=this.props,t=e.Oauth2,n=e.Cerner,a=e.MainArray,r=e.AccountArray,c=e.AccountIndex,i=e.SetAppState;n&&v.client.routeChange({PrevScope:a,Oauth2:t,Cerner:n,Page:r[c],State:"AccountIndex",Value:c,SetAppState:i,SetParentState:this.SetAccountState})}},{key:"render",value:function(){var e=this,t=this.props,n=t.Oauth2,a=t.Cerner,r=t.AccountArray,c=t.AccountIndex,i=t.DisplayCount,s=t.DisplayIndex,l=t.SetAppState,d=this.state.CurrentPage;return Object(b.jsxs)("div",{className:"App-Account",children:[Object(b.jsxs)("ul",{className:"Subheader-Nav",children:[r.map((function(t,a){return c===a?Object(b.jsx)("li",{className:"Subheader-Nav-Link Subheader-Nav-Link-Active",onClick:function(){return v.client.request({Oauth2:n,Page:t,State:"AccountIndex",Value:a,SetAppState:l,SetParentState:e.SetAccountState})},children:t},a):Object(b.jsx)("li",{className:"Subheader-Nav-Link",onClick:function(){var r;return v.client.request((r={Oauth2:n,SetAppState:l,Page:t,State:"AccountIndex",Value:a},Object(x.a)(r,"SetAppState",l),Object(x.a)(r,"SetParentState",e.SetAccountState),r))},children:t},a)})),Object(b.jsx)("li",{className:"Subheader-Nav-Link",children:Object(b.jsxs)("label",{className:"Subheader-Count",children:["Count:",Object(b.jsxs)("select",{value:i,onChange:function(t){l({DisplayCount:parseInt(t.target.value),DisplayIndex:0}),e.SetAccountState({CurrentPage:1})},children:[Object(b.jsx)("option",{value:25,children:"25"}),Object(b.jsx)("option",{value:50,children:"50"}),Object(b.jsx)("option",{value:100,children:"100"})]})]})})]}),Object(b.jsx)(P,{Cerner:a,DisplayCount:i,DisplayIndex:s,CurrentPage:d,SetAppState:l,SetParentState:this.SetAccountState})]})}}]),n}(r.a.Component),k=(n(132),function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={Loading:!1,Oauth2:null,Cerner:null,MainArray:["Observation","Condition","MedicationStatement","AllergyIntolerance"],MainIndex:0,AccountArray:["Patient","Person","RelatedPerson","CarePlan"],AccountIndex:0,DisplayCount:25,DisplayIndex:0},a.setAppState=a.setAppState.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"setAppState",value:function(e){this.setState(e)}},{key:"componentDidMount",value:function(){var e=this.state,t=e.Cerner,n=e.MainArray,a=e.MainIndex;t||(v.client.ready({Page:n[a],SetAppState:this.setAppState}),this.setState({Loading:!0}))}},{key:"render",value:function(){var e=this.state,t=e.Loading,n=e.Oauth2,a=e.Cerner,r=e.MainArray,c=e.MainIndex,i=e.AccountArray,s=e.AccountIndex,l=e.DisplayCount,d=e.DisplayIndex;return a&&console.log("Cerner:",a),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(h.a,{basename:"/UMX-DX",children:[t?null:Object(b.jsx)(p,{Oauth2:n,SetAppState:this.setAppState}),Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{exact:!0,path:"/",children:t?Object(b.jsx)("div",{className:"App-Main",children:Object(b.jsx)("h1",{children:"Please wait..."})}):Object(b.jsx)(N,{Oauth2:n,Cerner:a,AccountArray:i,MainArray:r,MainIndex:c,DisplayCount:l,DisplayIndex:d,SetAppState:this.setAppState})}),Object(b.jsx)(j.a,{path:"/account",children:Object(b.jsx)(I,{Oauth2:n,Cerner:a,MainArray:r,AccountArray:i,AccountIndex:s,DisplayCount:l,DisplayIndex:d,SetAppState:this.setAppState})}),n?null:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(j.a,{path:"/launch-patient",children:Object(b.jsx)(m,{})}),Object(b.jsx)(j.a,{path:"/launch-provider",children:Object(b.jsx)(D,{})})]})]})]})})}}]),n}(r.a.Component)),M=(n(133),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,135)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))});i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(k,{})}),document.getElementById("root")),M()}},[[134,1,2]]]);
//# sourceMappingURL=main.9f20be26.chunk.js.map