(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[5],{112:function(e,r,n){e.exports={Order:"Order_Order__2tfOz"}},116:function(e,r,n){"use strict";n.r(r);var t=n(16),i=n(17),s=n(19),o=n(18),c=n(1),d=n(21),a=n(24),u=n(112),p=n.n(u),l=n(0),b=function(e){var r=[];for(var n in e.ingredients)r.push({name:n,amount:e.ingredients[n]});var t=r.map((function(e){return Object(l.jsxs)("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"5px 10px",border:"1px solid #ccc",padding:"5px"},children:[e.name," (",e.amount,")"]},e.name)}));return Object(l.jsxs)("div",{className:p.a.Order,children:[Object(l.jsxs)("p",{children:["Ingredients: ",t]}),Object(l.jsxs)("p",{style:{display:"inline-block"},children:["Price:",Object(l.jsxs)("strong",{children:[" ",e.price," EGP"]})]})]})},O=n(51),h=n(8),j=n(50),f=function(e){Object(s.a)(n,e);var r=Object(o.a)(n);function n(){return Object(t.a)(this,n),r.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){null!==this.props.token&&this.props.onFetchOrders(this.props.token,this.props.userOrderId)}},{key:"render",value:function(){var e=Object(l.jsx)(j.a,{});return this.props.loading||(e=this.props.orders.map((function(e){return Object(l.jsx)(b,{ingredients:e.ingredients,price:e.totalPrice},e.id)}))),Object(l.jsx)("div",{children:e})}}]),n}(c.Component);r.default=Object(d.b)((function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userOrderId:e.auth.userOrderId}}),(function(e){return{onFetchOrders:function(r,n){return e(h.l(r,n))}}}))(Object(O.a)(f,a.a))}}]);
//# sourceMappingURL=5.2e7ef932.chunk.js.map