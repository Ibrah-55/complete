(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{38:function(e,t,a){e.exports=a(66)},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),s=a.n(c),o=a(4),l=a(3),i=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{class:"jumbotron mt-5"},r.a.createElement("h1",{class:"display-4"},"Jarvis Health"),r.a.createElement("p",{class:"lead"},"Calorie calculator"),r.a.createElement("hr",{class:"my-4"}),r.a.createElement("p",null,"Used to estimate the number of calorie needed per person each day. Provided simple guidlines for gaining or losgng weight while keeping track of your exercise records."),r.a.createElement("p",null,"Click to Login"),r.a.createElement(o.b,{class:"btn btn-primary btn-lg",to:"/login",role:"button"}," ","Login")))},u=a(13),m=a(2),p=a(9),d=a(5),f=a(6),E=a.n(f),b=a(15),h=a(16),v=a.n(h),g=function(){return function(){var e=Object(b.a)(E.a.mark((function e(t){var a,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=14;break}return a={headers:{"content-type":"application/json",Authorization:"JWT ".concat(localStorage.getItem("access")),Accept:"application/json"}},e.prev=2,e.next=5,v.a.get("".concat("http://localhost:8000","/auth/users/me/"),a);case 5:n=e.sent,t({type:"USER_LOADED_SUCCESS",payload:n.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),t({type:"USER_LOADED_FAIL"});case 12:e.next=15;break;case 14:t({type:"USER_LOADED_FAIL"});case 15:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},S=Object(d.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var a=Object(b.a)(E.a.mark((function a(n){var r,c,s;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r={headers:{"content-type":"application/json"}},c=JSON.stringify({email:e,password:t}),a.prev=2,a.next=5,v.a.post("".concat("http://localhost:8000","/auth/jwt/create/"),c,r);case 5:s=a.sent,n({type:"LOGIN_SUCCESS",payload:s.data}),n(g()),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(2),n({type:"LOGIN_FAIL"});case 13:case"end":return a.stop()}}),a,null,[[2,10]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.login,a=e.isAuthenticated,c=Object(n.useState)({email:"",password:""}),s=Object(p.a)(c,2),i=s[0],d=s[1],f=i.email,E=i.password,b=function(e){return d(Object(m.a)(Object(m.a)({},i),{},Object(u.a)({},e.target.name,e.target.value)))};return a?r.a.createElement(l.a,{to:"/"}):r.a.createElement("div",{className:"container mt-5"},r.a.createElement("h1",null,"Signin"),r.a.createElement("p",null,"Sign into your account"),r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(f,E)}(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",type:"email",placeholder:"Email",name:"email",value:f,onChange:function(e){return b(e)},required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",type:"password",placeholder:"Password",name:"password",value:E,onChange:function(e){return b(e)},minLength:"6",required:!0})),r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Login")),r.a.createElement("p",{className:"mt-3"},"Don't have an account? ",r.a.createElement(o.b,{to:"/signup"},"signup")),r.a.createElement("p",{className:"mt-3"},"Forgot your password? ",r.a.createElement(o.b,{to:"/reset-password"},"Reset Password")))})),O=Object(d.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{signup:function(e,t,a,n){return function(){var r=Object(b.a)(E.a.mark((function r(c){var s,o,l;return E.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s={headers:{"content-type":"application/json"}},o=JSON.stringify({name:e,email:t,password:a,re_password:n}),r.prev=2,r.next=5,v.a.post("".concat("http://localhost:8000","/auth/users/"),o,s);case 5:l=r.sent,c({type:"SIGNUP_SUCCESS",payload:l.data}),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(2),c({type:"SIGNUP_FAIL"});case 12:case"end":return r.stop()}}),r,null,[[2,9]])})));return function(e){return r.apply(this,arguments)}}()}})((function(e){var t=e.signup,a=e.isAuthenticated,c=Object(n.useState)(!1),s=Object(p.a)(c,2),i=s[0],d=s[1],f=Object(n.useState)({name:"",email:"",password:"",re_password:""}),E=Object(p.a)(f,2),b=E[0],h=E[1],v=b.name,g=b.email,S=b.password,O=b.re_password,y=function(e){return h(Object(m.a)(Object(m.a)({},b),{},Object(u.a)({},e.target.name,e.target.value)))};return a?r.a.createElement(l.a,{to:"/"}):i?r.a.createElement(l.a,{to:"/login"}):r.a.createElement("div",{className:"container mt-5"},r.a.createElement("h1",null,"Sign up"),r.a.createElement("p",null,"Create your account"),r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),S===O&&(t(v,g,S,O),d(!0))}(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",type:"text",placeholder:"Your Name",name:"name",value:v,onChange:function(e){return y(e)},required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",type:"email",placeholder:"Email*",name:"email",value:g,onChange:function(e){return y(e)},required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",type:"password",placeholder:"Password*",name:"password",value:S,onChange:function(e){return y(e)},minLength:"6",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",type:"password",placeholder:"Confirm Password",name:"re_password",value:O,onChange:function(e){return y(e)},minLength:"6",required:!0})),r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Register")),r.a.createElement("p",{className:"mt-3"},"Already have an account? ",r.a.createElement(o.b,{to:"/login"},"Sign in")))})),y=Object(d.b)(null,{verify:function(e,t){return function(){var a=Object(b.a)(E.a.mark((function a(n){var r,c;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r={headers:{"content-type":"application/json"}},c=JSON.stringify({uid:e,token:t}),a.prev=2,a.next=5,v.a.post("".concat("http://localhost:8000","/auth/users/activation/"),c,r);case 5:n({type:"ACTIVATION_SUCCESS"}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(2),n({type:"ACTIVATION_FAIL"});case 11:case"end":return a.stop()}}),a,null,[[2,8]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t=e.verify,a=e.match,c=Object(n.useState)(!1),s=Object(p.a)(c,2),o=s[0],i=s[1];return o?r.a.createElement(l.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center",style:{marginTop:"200px"}},r.a.createElement("h1",null,"Verify Your Account"),r.a.createElement("button",{onClick:function(e){var n=a.params.uid,r=a.params.token;t(n,r),i(!0)},style:{marginTop:"50px"},type:"button",className:"btn btn-primary"},"verify")))})),N=Object(d.b)(null,{reset_password:function(e){return function(){var t=Object(b.a)(E.a.mark((function t(a){var n,r;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{"content-type":"application/json"}},r=JSON.stringify({email:e}),t.prev=2,t.next=5,v.a.post("".concat("http://localhost:8000","/auth/users/reset_password/"),r,n);case 5:a({type:"PASSWORD_RESET_SUCCESS"}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(2),a({type:"PASSWORD_RESET_FAIL"});case 11:case"end":return t.stop()}}),t,null,[[2,8]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.reset_password,a=Object(n.useState)(!1),c=Object(p.a)(a,2),s=c[0],o=c[1],i=Object(n.useState)({email:""}),d=Object(p.a)(i,2),f=d[0],E=d[1],b=f.email;return s?r.a.createElement(l.a,{to:"/"}):r.a.createElement("div",{className:"container mt-5"},r.a.createElement("h1",null,"Request password reset"),r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),t(b),o(!0)}(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",type:"email",placeholder:"Email",name:"email",value:b,onChange:function(e){return function(e){return E(Object(m.a)(Object(m.a)({},f),{},Object(u.a)({},e.target.name,e.target.value)))}(e)},required:!0})),r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Reset Password")))})),_=Object(d.b)(null,{reset_password_confirm:function(e,t,a,n){return function(){var r=Object(b.a)(E.a.mark((function r(c){var s,o;return E.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s={headers:{"content-type":"application/json"}},o=JSON.stringify({uid:e,token:t,new_password:a,re_password:n}),r.prev=2,r.next=5,v.a.post("".concat("http://localhost:8000","/auth/users/reset_password_confirm/"),o,s);case 5:c({type:"PASSWORD_RESET_CONFIRM_SUCCESS"}),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(2),c({type:"PASSWORD_RESET_CONFIRM_FAIL"});case 11:case"end":return r.stop()}}),r,null,[[2,8]])})));return function(e){return r.apply(this,arguments)}}()}})((function(e){var t=e.match,a=e.reset_password_confirm,c=Object(n.useState)(!1),s=Object(p.a)(c,2),o=s[0],i=s[1],d=Object(n.useState)({new_password:"",re_new_password:""}),f=Object(p.a)(d,2),E=f[0],b=f[1],h=E.new_password,v=E.re_new_password,g=function(e){return b(Object(m.a)(Object(m.a)({},E),{},Object(u.a)({},e.target.name,e.target.value)))};return o?r.a.createElement(l.a,{to:"/"}):r.a.createElement("div",{className:"container mt-5"},r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault();var n=t.params.uid,r=t.params.token;a(n,r,h,v),i(!0)}(e)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",type:"password",placeholder:"New Password",name:"new_password",value:h,onChange:function(e){return g(e)},minLength:"6",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",type:"password",placeholder:"Confirm New Password",name:"re_new_password",value:v,onChange:function(e){return g(e)},minLength:"6",required:!0})),r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Confirm Reset Password")))})),w=a(14),j=a(36),A=a(37),C={access:localStorage.getItem("access"),refresh:localStorage.getItem("refresh"),isAuthenticated:null,user:null},I=Object(w.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"AUTHENTICATED_SUCCESS":return Object(m.a)(Object(m.a)({},e),{},{isAuthenticated:!0});case"AUTHENTICATED_FAIL":return Object(m.a)(Object(m.a)({},e),{},{isAuthenticated:!1});case"LOGIN_SUCCESS":return localStorage.setItem("access",n.access),Object(m.a)(Object(m.a)({},e),{},{isAuthenticated:!0,access:n.access,refresh:n.refresh});case"SIGNUP_SUCCESS":return Object(m.a)(Object(m.a)({},e),{},{isAuthenticated:!1});case"USER_LOADED_SUCCESS":return Object(m.a)(Object(m.a)({},e),{},{user:n});case"USER_LOADED_FAIL":return Object(m.a)(Object(m.a)({},e),{},{user:null});case"LOGIN_FAIL":case"SIGNUP_FAIL":case"LOGOUT":return localStorage.removeItem("access"),localStorage.removeItem("refresh"),Object(m.a)(Object(m.a)({},e),{},{access:null,refresh:null,isAuthenticated:!1,user:null});case"PASSWORD_RESET_FAIL":case"PASSWORD_RESET_SUCCESS":case"PASSWORD_RESET_CONFIRM_FAIL":case"PASSWORD_RESET_CONFIRM_SUCCESS":case"ACTIVATION_FAIL":case"ACTIVATION_SUCCESS":return Object(m.a)({},e);default:return e}}}),T=[A.a],x=Object(w.createStore)(I,{},Object(j.composeWithDevTools)(w.applyMiddleware.apply(void 0,T))),k=Object(d.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{logout:function(){return function(e){e({type:"LOGOUT"})}}})((function(e){var t=e.logout,a=e.isAuthenticated;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(o.b,{className:"navbar-brand",to:"/"},"Jarvis Calorie"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(o.b,{className:"nav-link",to:"/"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),a?r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#!",onClick:t})):r.a.createElement(n.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/login"},"Login")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/signup"},"Signup"))))))})),L=Object(d.b)(null,{checkAuthenticated:function(){return function(){var e=Object(b.a)(E.a.mark((function e(t){var a,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("access")){e.next=15;break}return a={headers:{"content-type":"application/json",Accept:"application/json"}},n=JSON.stringify({token:localStorage.getItem("access")}),e.prev=3,e.next=6,v.a.post("".concat("http://localhost:8000","/auth/jwt/verify/"),n,a);case 6:"token_not_valid"!==e.sent.data.code?t({type:"AUTHENTICATED_SUCCESS"}):t({type:"AUTHENTICATED_FAIL"}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),t({type:"AUTHENTICATED_FAIL"});case 13:e.next=16;break;case 15:t({type:"AUTHENTICATED_FAIL"});case 16:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},load_user:g})((function(e){return Object(n.useEffect)((function(){e.checkAuthenticated(),e.load_user()}),[]),r.a.createElement("div",null,r.a.createElement(k,null),e.children)})),U=function(){return r.a.createElement(d.a,{store:x},r.a.createElement(o.a,null,r.a.createElement(L,null,r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/",component:i}),r.a.createElement(l.b,{exact:!0,path:"/login",component:S}),r.a.createElement(l.b,{exact:!0,path:"/signup",component:O}),r.a.createElement(l.b,{exact:!0,path:"/reset-password",component:N}),r.a.createElement(l.b,{exact:!0,path:"/password/reset/confirm/:uid/:token",component:_}),r.a.createElement(l.b,{exact:!0,path:"/activate/:uid/:token",component:y})))))};s.a.render(r.a.createElement(U,null),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.097d7703.chunk.js.map