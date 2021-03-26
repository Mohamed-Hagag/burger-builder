(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[4],{100:function(e,t,a){e.exports={Input:"Input_Input__1V4hE",ContactDataInput:"Input_ContactDataInput__2dU67",ContactDataInputElement:"Input_ContactDataInputElement__1GL_K",Label:"Input_Label__3DpAD",InputElement:"Input_InputElement__rhet_",Invalid:"Input_Invalid__ew1WL"}},101:function(e,t,a){e.exports={Auth:"Auth_Auth__1Mp-1"}},107:function(e,t,a){"use strict";a.r(t);var r=a(5),n=a(10),s=a(11),i=a(13),o=a(12),l=a(1),u=a(15),c=a(4),d=a(98),p=a(34),h=a(101),m=a.n(h),g=a(21),v=a(44),b=a(99),f=a(0),j=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-mail"},errorMessage:"Please enter a valid E-mail",value:"",valid:!1,validation:{required:!0,isEmail:!0},touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},errorMessage:"Please enter a Password",value:"",valid:!1,validation:{required:!0,minLength:6},touched:!1}},formIsValid:!1,isSignup:!0},e.inputChangeHandler=function(t,a){var n=Object(r.a)({},e.state.controls),s=Object(r.a)({},n[a]);s.value=t.target.value,s.valid=Object(b.a)(s.validation,s.value),n[a]=s,e.setState({controls:n})},e.errorHandler=function(t){var a=Object(r.a)({},e.state.controls),n=Object(r.a)({},a[t]);n.touched=!0,a[t]=n,e.setState({controls:a})},e.submitHandler=function(t){t.preventDefault(),e.props.onAuth(e.state.controls.email.value,e.state.controls.password.value,e.props.isSignup)},e.switchHandler=function(){e.props.onSwitch()},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=!0;for(var r in this.state.controls)a=this.state.controls[r].valid&&a;t.formIsValid!==a&&this.setState({formIsValid:a})}},{key:"render",value:function(){var e=this,t=[];for(var a in this.state.controls)t.push({id:a,config:this.state.controls[a]});var r=Object(f.jsx)(l.Fragment,{children:t.map((function(t){return Object(f.jsx)(d.a,{invalid:!t.config.valid,touched:t.config.touched,errorMessage:t.config.errorMessage,elementtype:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,changed:function(a){return e.inputChangeHandler(a,t.id)},errorHandler:function(){return e.errorHandler(t.id)}},t.id)}))}),n=null;this.props.error&&("EMAIL_NOT_FOUND"===this.props.error.message&&(n=Object(f.jsx)("p",{style:{fontWeight:"500",color:"red"},children:"This Email doesn't exist"})),"INVALID_PASSWORD"===this.props.error.message&&(n=Object(f.jsx)("p",{style:{fontWeight:"500",color:"red"},children:"Wrong Password"}))),this.props.loading&&null==this.props.error&&(r=Object(f.jsx)(v.a,{}));var s=Object(f.jsxs)("div",{className:m.a.Auth,children:[Object(f.jsxs)("form",{onSubmit:this.submitHandler,children:[r,n,Object(f.jsx)(p.a,{disabled:!this.state.formIsValid,btnType:"Success",children:"SUBMIT"})]}),Object(f.jsxs)(p.a,{btnType:"Success",clicked:this.switchHandler,children:["SWITCH TO ",this.props.isSignup?"SIGNIN":"SIGNUP"]})]});return this.props.isAuth&&(s=Object(f.jsx)(c.a,{to:"/"}),this.props.building&&(s=Object(f.jsx)(c.a,{to:"checkout"}))),s}}]),a}(l.Component),O=Object(u.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuth:null!==e.auth.token,building:e.burgerBuilder.building,userOrderId:e.auth.userOrderId,isSignup:e.auth.isSignup,email:e.auth.email}}),(function(e){return{onAuth:function(t,a,r){return e(g.b(t,a,r))},onSwitch:function(){return e(g.c())}}}))(j),I=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={controls:{userName:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},errorMessage:"Please enter a valid Name",value:"",valid:!1,validation:{required:!0,isName:!0},touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-mail"},errorMessage:"Please enter a valid E-mail",value:"",valid:!1,validation:{required:!0,isEmail:!0},touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},errorMessage:"Please enter a valid Password",value:"",valid:!1,validation:{required:!0,minLength:6},touched:!1},rePassword:{elementType:"input",elementConfig:{type:"password",placeholder:"Re-Password"},errorMessage:"Password doesn't match",value:"",valid:!1,validation:{required:!0,minLength:6},touched:!1},address:{elementType:"textarea",elementConfig:{type:"textarea",placeholder:"Your Address"},errorMessage:"Please enter a valid Address",value:"",valid:!1,validation:{required:!0,minLength:6},touched:!1},mobile:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Mobile"},errorMessage:"Please enter a valid Mobile",value:"",valid:!1,validation:{required:!0,isMobile:!0},touched:!1}},formIsValid:!1,isSignup:!0},e.inputChangeHandler=function(t,a){var n=Object(r.a)({},e.state.controls),s=Object(r.a)({},n[a]);s.value=t.target.value,s.valid=Object(b.a)(s.validation,s.value),n[a]=s;var i=Object(r.a)({},n.password),o=Object(r.a)({},n.rePassword);o.value!==i.value?o.valid=!1:o.valid=!0,n.rePassword=o,e.setState({controls:n})},e.errorHandler=function(t){var a=Object(r.a)({},e.state.controls),n=Object(r.a)({},a[t]);n.touched=!0,a[t]=n,e.setState({controls:a})},e.submitHandler=function(t){t.preventDefault();var a={userName:e.state.controls.userName.value,email:e.state.controls.email.value,mobile:e.state.controls.mobile.value,address:e.state.controls.address.value};e.props.onAuth(e.state.controls.email.value,e.state.controls.password.value,e.props.isSignup,a)},e.switchHandler=function(t){e.props.onSwitch()},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=!0;for(var r in this.state.controls)a=this.state.controls[r].valid&&a;t.formIsValid!==a&&this.setState({formIsValid:a})}},{key:"render",value:function(){var e=this,t=[];for(var a in this.state.controls)t.push({id:a,config:this.state.controls[a]});var r=Object(f.jsx)(l.Fragment,{children:t.map((function(t){return Object(f.jsx)(d.a,{invalid:!t.config.valid,touched:t.config.touched,errorMessage:t.config.errorMessage,elementtype:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,changed:function(a){return e.inputChangeHandler(a,t.id)},errorHandler:function(){return e.errorHandler(t.id)}},t.id)}))}),n=null;this.props.error&&("EMAIL_EXISTS"===this.props.error.message&&(n=Object(f.jsx)("p",{style:{fontWeight:"500",color:"red"},children:"This Email is already exists"})),"INVALID_PASSWORD"===this.props.error.message&&(n=Object(f.jsx)("p",{style:{fontWeight:"500",color:"red"},children:"Wrong Password"}))),this.props.loading&&null==this.props.error&&(r=Object(f.jsx)(v.a,{}));var s=Object(f.jsxs)("div",{className:m.a.Auth,children:[Object(f.jsxs)("form",{onSubmit:this.submitHandler,children:[r,n,Object(f.jsx)(p.a,{disabled:!this.state.formIsValid,btnType:"Success",children:"SUBMIT"})]}),Object(f.jsxs)(p.a,{btnType:"Success",clicked:this.switchHandler,children:["SWITCH TO ",this.props.isSignup?"SIGNIN":"SIGNUP"]})]});return this.props.isAuth&&(s=Object(f.jsx)(c.a,{to:"/"}),this.props.building&&(s=Object(f.jsx)(c.a,{to:"checkout"}))),this.props.isSignup||(s=Object(f.jsx)(O,{})),s}}]),a}(l.Component);t.default=Object(u.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuth:null!==e.auth.token,building:e.burgerBuilder.building,userOrderId:e.auth.userOrderId,isSignup:e.auth.isSignup,token:e.auth.token}}),(function(e){return{onAuth:function(t,a,r,n){return e(g.b(t,a,r,n))},onSwitch:function(){return e(g.c())}}}))(I)},98:function(e,t,a){"use strict";var r=a(5),n=a(1),s=a(100),i=a.n(s),o=a(0);t.a=function(e){var t=null,a=null,s=[i.a.InputElement];switch(e.customClassName&&(s=[i.a.ContactDataInputElement]),e.invalid&&e.touched&&(s.push(i.a.Invalid),a=Object(o.jsx)("p",{style:{margin:"5px 0",color:"red",textAlign:"left"},children:e.errorMessage})),e.elementtype){case"input":t=Object(o.jsx)("input",Object(r.a)(Object(r.a)({className:s.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed,onBlur:e.errorHandler}));break;case"textarea":t=Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({className:s.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed,onBlur:e.errorHandler}));break;default:t=Object(o.jsx)("input",Object(r.a)(Object(r.a)({className:s.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}))}return Object(o.jsxs)(n.Fragment,{children:[" ",Object(o.jsxs)("div",{className:e.customClassName?i.a.ContactDataInput:i.a.Input,children:[Object(o.jsx)("label",{className:i.a.Label,children:e.label}),Object(o.jsxs)("div",{style:e.customClassName?{width:"80%"}:null,children:[t,a]})]})]})}},99:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r=function(e,t){var a=!0;if(e.required&&(a=""!==t.trim()&&a),e.minLength&&(a=t.length>=e.minLength&&a),e.maxLength&&(a=t.length<=e.maxLength&&a),e.isEmail){a=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())&&a}if(e.isMobile){a=/^(010|011|012|015)[0-9]{8}$/.test(String(t).toLowerCase())&&a}if(e.isName){a=/^[a-zA-Z]{2,10}$/.test(String(t).toLowerCase())&&a}return a}}}]);
//# sourceMappingURL=4.b600cc45.chunk.js.map