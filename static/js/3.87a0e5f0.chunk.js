(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[3],{106:function(e,t,n){"use strict";var a=n(12),r=n(1),o=n(108),i=n.n(o),c=n(0);t.a=function(e){var t=null,n=null,o=[i.a.InputElement];switch(e.customClassName&&(o=[i.a.ContactDataInputElement]),e.invalid&&e.touched&&(o.push(i.a.Invalid),n=Object(c.jsx)("p",{style:{margin:"5px 0",color:"red",textAlign:"left"},children:e.errorMessage})),e.elementtype){case"input":t=Object(c.jsx)("input",Object(a.a)(Object(a.a)({className:o.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed,onBlur:e.errorHandler}));break;case"textarea":t=Object(c.jsx)("textarea",Object(a.a)(Object(a.a)({className:o.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed,onBlur:e.errorHandler}));break;default:t=Object(c.jsx)("input",Object(a.a)(Object(a.a)({className:o.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.changed}))}return Object(c.jsxs)(r.Fragment,{children:[" ",Object(c.jsxs)("div",{className:e.customClassName?i.a.ContactDataInput:i.a.Input,children:[Object(c.jsx)("label",{className:i.a.Label,children:e.label}),Object(c.jsxs)("div",{style:e.customClassName?{width:"80%"}:null,children:[t,n]})]})]})}},107:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=function(e,t){var n=!0;if(e.required&&(n=""!==t.trim()&&n),e.minLength&&(n=t.length>=e.minLength&&n),e.maxLength&&(n=t.length<=e.maxLength&&n),e.isEmail){n=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())&&n}if(e.isMobile){n=/^(010|011|012|015)[0-9]{8}$/.test(String(t).toLowerCase())&&n}if(e.isName){n=/^[a-zA-Z]{2,10}$/.test(String(t).toLowerCase())&&n}return n}},108:function(e,t,n){e.exports={Input:"Input_Input__3Ot8o",ContactDataInput:"Input_ContactDataInput__20fua",ContactDataInputElement:"Input_ContactDataInputElement__3F5PE",Label:"Input_Label__I97OD",InputElement:"Input_InputElement__2Oaor",Invalid:"Input_Invalid__YGpNO"}},110:function(e,t,n){e.exports={CheckoutSummery:"CheckoutSummery_CheckoutSummery__Rd6ZL"}},111:function(e,t,n){e.exports={ContactData:"ContactData_ContactData__3ZuTq"}},114:function(e,t,n){"use strict";n.r(t);var a=n(16),r=n(17),o=n(19),i=n(18),c=n(1),s=n(21),l=n(10),u=n(61),d=n(40),h=n(110),p=n.n(h),m=n(0),b=function(e){return Object(m.jsxs)("div",{className:p.a.CheckoutSummery,children:[Object(m.jsx)("h1",{children:"We hope it tastes well!"}),Object(m.jsx)("div",{style:{width:"100%",margin:"auto"},children:Object(m.jsx)(u.a,{ingredients:e.ingredients})}),Object(m.jsx)(d.a,{btnType:"Danger",clicked:e.checkoutCanceled,children:"CANCEL"}),Object(m.jsx)(d.a,{btnType:"Success",clicked:e.checkoutContinued,children:"CONTINUE"})]})},j=n(12),g=n(24),v=n(8),f=n(106),O=n(50),C=n(111),x=n.n(C),y=n(51),I=n(107),k=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={orderForm:{address:{elementType:"textarea",elementConfig:{type:"text",placeholder:"Your Address"},valueType:"Address",errorMessage:"Please enter a valid Address",value:e.props.contactData.address,valid:!0,touched:!1,validation:{required:!0,minLength:6}},mobileNumber:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Mobile"},valueType:"Mobile",errorMessage:"Please enter a valid Mobile",value:e.props.contactData.mobile,valid:!0,touched:!1,validation:{required:!0,isMobile:!0}},landline:{elementType:"input",elementConfig:{type:"text",placeholder:"Alternative Phone Number (optional)"},valueType:"Phone",value:"",valid:!0,validation:{},touched:!1}},formIsValid:!0},e.orderHandler=function(t){t.preventDefault();var n={};for(var a in e.state.orderForm)n[a]=e.state.orderForm[a].value;var r={ingredients:e.props.ingredients,totalPrice:e.props.totalPrice,customer:n,userOrderId:e.props.userOrderId};e.props.onOrderBurger(r,e.props.token)},e.inputChangeHandler=function(t,n){var a=Object(j.a)({},e.state.orderForm),r=Object(j.a)({},a[n]);r.value=t.target.value,r.valid=Object(I.a)(r.validation,r.value),a[n]=r,e.setState({orderForm:a})},e.errorHandler=function(t){var n=Object(j.a)({},e.state.orderForm),a=Object(j.a)({},n[t]);a.touched=!0,n[t]=a,e.setState({orderForm:n})},e}return Object(r.a)(n,[{key:"componentDidUpdate",value:function(e,t){var n=!0;for(var a in this.state.orderForm)n=this.state.orderForm[a].valid&&n;t.formIsValid!==n&&this.setState({formIsValid:n})}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var a=Object(m.jsx)("form",{children:t.map((function(t){return Object(m.jsx)(f.a,{customClassName:!0,errorMessage:t.config.errorMessage,invalid:!t.config.valid,touched:t.config.touched,label:t.config.valueType,elementtype:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,changed:function(n){return e.inputChangeHandler(n,t.id)},errorHandler:function(){return e.errorHandler(t.id)}},t.id)}))});return this.props.loading&&(a=Object(m.jsx)(O.a,{})),Object(m.jsxs)("div",{className:x.a.ContactData,children:[Object(m.jsx)("h1",{children:"Enter your Contact Data"}),a,Object(m.jsx)(d.a,{disabled:!this.state.formIsValid,btnType:"Success",clicked:this.orderHandler,children:"ORDER"})]})}}]),n}(c.Component),D=Object(s.b)((function(e){return{ingredients:e.burgerBuilder.ingredients,totalPrice:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userOrderId:e.auth.userOrderId,contactData:e.auth.contactData,email:e.auth.email}}),(function(e){return{onOrderBurger:function(t,n){return e(v.v(t,n))}}}))(Object(y.a)(k,g.a)),_=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).checkoutCanceled=function(){e.props.history.goBack()},e.checkoutContinued=function(){e.props.history.replace("/checkout/contact-data")},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchContactData(this.props.token,this.props.email)}},{key:"render",value:function(){var e=Object(m.jsx)(l.a,{to:"/"}),t=this.props.redirect?Object(m.jsx)(l.a,{to:"/"}):null;return this.props.ingredients&&(e=Object(m.jsxs)("div",{children:[Object(m.jsx)(b,{ingredients:this.props.ingredients,checkoutCanceled:this.checkoutCanceled,checkoutContinued:this.checkoutContinued}),Object(m.jsx)(l.b,{path:"".concat(this.props.match.path,"/contact-data"),component:D})]})),Object(m.jsxs)(c.Fragment,{children:[t,e]})}}]),n}(c.Component);t.default=Object(s.b)((function(e){return{ingredients:e.burgerBuilder.ingredients,redirect:e.order.redirect,userOrderId:e.auth.userOrderId,contactData:e.auth.contactData,loading:e.auth.loading,token:e.auth.token,email:e.auth.email}}),(function(e){return{onFetchContactData:function(t,n){return e(v.i(t,n))}}}))(_)}}]);
//# sourceMappingURL=3.87a0e5f0.chunk.js.map