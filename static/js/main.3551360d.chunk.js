(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"o",(function(){return i})),n.d(t,"i",(function(){return c})),n.d(t,"e",(function(){return a})),n.d(t,"k",(function(){return o})),n.d(t,"n",(function(){return s})),n.d(t,"m",(function(){return u})),n.d(t,"l",(function(){return d})),n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return j})),n.d(t,"f",(function(){return h})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return p})),n.d(t,"b",(function(){return g})),n.d(t,"j",(function(){return f}));var r="ADD_INGREDIENTS",i="REMOVE_INGREDIENTS",c="INIT_INGREDIENTS",a="FETCH_ERRORS",o="PURCHASE_BURGER",s="PURCHASE_SUCCESS",u="PURCHASE_REDIRECT",d="PURCHASE_FAIL",l="FETCH_ORDERS_START",j="FETCH_ORDERS_SUCCESS",h="FETCH_ORDERS_FAIL",b="AUTH_START",p="AUTH_SUCCESS",g="AUTH_FAIL",f="LOGOUT"},,,,,,,,,,,,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__xHMxj",BreadTop:"BurgerIngredient_BreadTop__3d-mD",Seeds1:"BurgerIngredient_Seeds1__23kVU",Seeds2:"BurgerIngredient_Seeds2__3Ic5u",Meat:"BurgerIngredient_Meat__3WLLR",Cheese:"BurgerIngredient_Cheese__1x4Ti",Salad:"BurgerIngredient_Salad__1Jurj",Bacon:"BurgerIngredient_Bacon__30dQY"}},function(e,t,n){"use strict";var r=n(30),i=n.n(r).a.create({baseURL:"https://react-my-burger-df27e-default-rtdb.firebaseio.com/"});t.a=i},,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__OlZ7f",DisplayNone:"SideDrawer_DisplayNone__3aZlP",Open:"SideDrawer_Open__3Z0A_",Close:"SideDrawer_Close__1LT4_",Logo:"SideDrawer_Logo__3ZZeT"}},function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"g",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"f",(function(){return u})),n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return b})),n.d(t,"e",(function(){return h}));var r=n(2),i=n(17),c=function(e){return{type:r.a,ingredientName:e}},a=function(e){return{type:r.o,ingredientName:e}},o=function(){return function(e){i.a.get("https://react-my-burger-df27e-default-rtdb.firebaseio.com/ingredients.json").then((function(t){return e((n=t.data,{type:r.i,ingredients:n}));var n})).catch((function(t){return e(function(e){return{type:r.e,error:e}}(t))}))}},s=n(5),u=function(e,t){return function(n){n({type:r.k}),i.a.post("/orders.json?auth=".concat(t),e).then((function(t){n(function(e,t){return{type:r.n,id:e,orderData:t}}(t.data.name,e))})).catch((function(e){n(function(e){return{type:r.l,error:e}}(e))})),setTimeout((function(){n({type:r.m})}),5e3)}},d=function(e,t){return function(n){n({type:r.g}),i.a.get("/orders.json?auth=".concat(e,'&orderBy="userId"&equalTo="').concat(t,'"')).then((function(e){var t,i=[];for(var c in e.data)i.push(Object(s.a)(Object(s.a)({},e.data[c]),{},{id:c}));n((t=i,{type:r.h,orders:t}))})).catch((function(e){return n(function(e){return{type:r.f,error:e}}(e))}))}},l=n(30),j=n.n(l),h=function(){return{type:r.j}},b=function(e,t,n){return function(i){i({type:r.c});var c={email:e,password:t,returnSecureToken:!0},a="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCGKuK-wRQmRIcpQsQ13FyWXeW-6M5dNmI";n||(a="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCGKuK-wRQmRIcpQsQ13FyWXeW-6M5dNmI "),j.a.post(a,c).then((function(e){var t,n,c;i((t=e.data.idToken,n=e.data.localId,{type:r.d,token:t,userId:n})),i((c=e.data.expiresIn,function(e){setTimeout((function(){e(h())}),1e3*c)})),localStorage.setItem("token",e.data.idToken),localStorage.setItem("expiredDate",e.data.expiresIn)})).catch((function(e){i(function(e){return{type:r.b,error:e}}(e.response.data.error))}))}}},,,,,,function(e,t,n){"use strict";var r=n(10),i=n(11),c=n(13),a=n(12),o=n(1),s=n(32),u=n(60),d=n.n(u),l=n(0),j=function(e){Object(c.a)(n,e);var t=Object(a.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return Object(l.jsxs)(o.Fragment,{children:[Object(l.jsx)(s.a,{show:this.props.show,clicked:this.props.purchasingCancel}),Object(l.jsx)("div",{className:d.a.Modal,style:{transform:this.props.show?"translateX(0)":"translateX(100vw)",opacity:this.props.show?"1":"0"},children:this.props.children})]})}}]),n}(o.Component);t.a=j},function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__1Cm9h",Label:"BuildControl_Label__H8nbQ",Less:"BuildControl_Less__22CXC",More:"BuildControl_More__2jJbq"}},,,,,function(e,t,n){"use strict";n(1);var r=n(59),i=n.n(r),c=n(0);t.a=function(e){return e.show?Object(c.jsx)("div",{className:[i.a.Backdrop,e.displayNone].join(" "),onClick:e.clicked}):null}},function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__3m9Xg",Logo:"Toolbar_Logo__Jwf4X",DesktopOnly:"Toolbar_DesktopOnly__mjtwu"}},function(e,t,n){"use strict";n(1);var r=n(39),i=n.n(r),c=n(0);t.a=function(e){return Object(c.jsx)("button",{disabled:e.disabled,className:[i.a.Button,i.a[e.btnType]].join(" "),onClick:e.clicked,children:e.children})}},,,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__2YS2J",OrderButton:"BuildControls_OrderButton__1S95D",enable:"BuildControls_enable__nUlkM"}},function(e,t,n){e.exports={Button:"Button_Button__ShHz6",Success:"Button_Success__5DIFN",Danger:"Button_Danger__29HWN"}},function(e,t,n){e.exports={Logo:"Logo_Logo__2AB3A"}},function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__3TvUn",active:"NavigationItem_active__kQdbz"}},,,function(e,t,n){"use strict";n(1);var r=n(61),i=n.n(r),c=n(0);t.a=function(){return Object(c.jsx)("div",{className:i.a.Loader,children:"Loading..."})}},function(e,t,n){"use strict";var r=n(5),i=n(66),c=n(1),a=n(26),o=n(0);t.a=function(e,t){return function(n){var s=Object(c.useState)(null),u=Object(i.a)(s,2),d=u[0],l=u[1];Object(c.useEffect)((function(){var e=t.interceptors.request.use((function(e){return l(null),e})),n=t.interceptors.response.use((function(e){return e}),(function(e){return l(e)}));return function(){t.interceptors.request.eject(e),t.interceptors.request.eject(n)}}),[]);return Object(o.jsxs)(c.Fragment,{children:[Object(o.jsx)(a.a,{show:d,purchasingCancel:function(){l(null)},children:d?d.message:null}),Object(o.jsx)(e,Object(r.a)({},n))]})}}},,,,,,,,,,function(e,t,n){"use strict";var r=n(65),i=(n(1),n(58)),c=n.n(i),a=n(16),o=n.n(a),s=n(0),u=function(e){var t=null;switch(e.type){case"bread-bottom":t=Object(s.jsx)("div",{className:o.a.BreadBottom});break;case"bread-top":t=Object(s.jsxs)("div",{className:o.a.BreadTop,children:[Object(s.jsx)("div",{className:o.a.Seeds1}),Object(s.jsx)("div",{className:o.a.Seeds2})]});break;case"meat":t=Object(s.jsx)("div",{className:o.a.Meat});break;case"cheese":t=Object(s.jsx)("div",{className:o.a.Cheese});break;case"salad":t=Object(s.jsx)("div",{className:o.a.Salad});break;case"bacon":t=Object(s.jsx)("div",{className:o.a.Bacon});break;default:t=null}return t};t.a=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(r.a)(Array(e.ingredients[t])).map((function(e,n){return Object(s.jsx)(u,{type:t},n+t)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(s.jsx)("p",{children:"Please start adding ingredients!"})),Object(s.jsxs)("div",{className:c.a.Burger,children:[Object(s.jsx)(u,{type:"bread-top"}),t,Object(s.jsx)(u,{type:"bread-bottom"})]})}},,,function(e,t,n){e.exports={Burger:"Burger_Burger__23pwO"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__PlyLl"}},function(e,t,n){e.exports={Modal:"Modal_Modal__1uzHh"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__o0HJl",load2:"Spinner_load2__j9niU"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1PWQA"}},function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__B7ZUI"}},function(e,t,n){e.exports={Content:"Layout_Content__2iftb"}},,,,,,,,,,,function(e,t,n){},function(e,t,n){},,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(28),c=n.n(i),a=n(22),o=n(18),s=n(15),u=n(57),d=n(24),l=n(2),j=n(5),h=function(e,t){return Object(j.a)(Object(j.a)({},e),t)},b={ingredients:null,totalPrice:4,error:!1,building:!1},p={salad:.5,cheese:.4,meat:1.3,bacon:.7},g=function(e,t){var n=Object(d.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r=h(e.ingredients,n);return h(e,{ingredients:r,totalPrice:e.totalPrice+p[t.ingredientName],building:!0})},f=function(e,t){var n=Object(d.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r=h(e.ingredients,n);return h(e,{ingredients:r,totalPrice:e.totalPrice-p[t.ingredientName],building:!0})},O=function(e,t){return h(e,{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},totalPrice:4,error:!1,building:!1})},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.a:return g(e,t);case l.o:return f(e,t);case l.i:return O(e,t);case l.e:return h(e,{error:!0});default:return e}},_={orders:[],loading:!1,redirect:!1},x=function(e,t){var n=Object(j.a)(Object(j.a)({},t.orderData),{},{id:t.id});return h(e,{loading:!1,redirect:!0,orders:e.orders.concat(n)})},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.k:return h(e,{loading:!0});case l.m:return h(e,{redirect:!1});case l.n:return x(e,t);case l.l:return h(e,{loading:!1});case l.g:return h(e,{loading:!0});case l.h:return h(e,{orders:t.orders,loading:!1});case l.f:return h(e,{loading:!1});default:return e}},y={token:localStorage.getItem("token"),userId:null,error:null,loading:!1},C=function(e,t){return localStorage.removeItem("token"),localStorage.removeItem("expiredDate"),h(e,{token:null,userId:null})},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.c:return h(e,{loading:!0});case l.d:return h(e,{token:t.token,userId:t.userId,loading:!1,error:null});case l.b:return h(e,{error:t.error});case l.j:return C(e);default:return e}},k=(n(75),n(10)),N=n(11),I=n(13),B=n(12),w=n(4),D=(n(76),n(17)),T=n(20),A=n(55),L=n(38),R=n.n(L),E=n(27),P=n.n(E),F=n(0),H=function(e){return Object(F.jsxs)("div",{className:P.a.BuildControl,children:[Object(F.jsx)("div",{className:P.a.Label,children:e.label}),Object(F.jsx)("button",{className:P.a.Less,onClick:e.removed,disabled:e.disabled,children:"Less"}),Object(F.jsx)("button",{className:P.a.More,onClick:e.added,children:"More"})]})},U=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],M=function(e){return Object(F.jsxs)("div",{className:R.a.BuildControls,children:[Object(F.jsxs)("p",{children:["Current Price: ",Object(F.jsx)("strong",{children:e.price.toFixed(2)})]}),U.map((function(t){return Object(F.jsx)(H,{added:function(){return e.added(t.type)},removed:function(){return e.removed(t.type)},label:t.label,disabled:e.disabled[t.type]},t.label)})),Object(F.jsx)("button",{className:R.a.OrderButton,disabled:!e.purchase,onClick:e.orderSummery,children:e.isAuth?"ORDER NOW":"SIGNUP TO ORDER"})]})},Q=n(26),W=n(34),G=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(F.jsxs)("li",{children:[Object(F.jsx)("span",{style:{textTransform:"capitalize"},children:t}),":"," ",e.ingredients[t]]},t)}));return Object(F.jsxs)(r.Fragment,{children:[Object(F.jsx)("h3",{children:"Your Order"}),Object(F.jsx)("p",{style:{textAlign:"left"},children:"A delicious burger with the following ingredients:"}),Object(F.jsx)("ul",{style:{textAlign:"left"},children:t}),Object(F.jsx)("p",{children:Object(F.jsxs)("strong",{children:[" Total Price: ",e.price.toFixed(2)]})}),Object(F.jsx)("p",{children:"Continue to Checkout?"}),Object(F.jsx)(W.a,{btnType:"Danger",clicked:e.purchasingCancel,children:"CANCEL"}),Object(F.jsx)(W.a,{btnType:"Success",clicked:e.purchasingContinue,children:"CONTINUE"})]})},J=n(44),X=n(45),z=function(e){Object(I.a)(n,e);var t=Object(B.a)(n);function n(){var e;Object(k.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={purchasing:!1,redirect:!1},e.updatePurchaseState=function(e){return Object.values(e).reduce((function(e,t){return e+t}),0)>0},e.purchasingHandler=function(){e.props.isAuth?e.setState({purchasing:!0}):e.props.history.push("/auth")},e.purchasingCancel=function(){e.setState({purchasing:!1,redirect:!1})},e.purchasingContinue=function(){e.props.history.push("/checkout")},e}return Object(N.a)(n,[{key:"componentDidMount",value:function(){this.props.onInitIngredients(),this.setState({redirect:this.props.redirect})}},{key:"render",value:function(){var e=Object(j.a)({},this.props.ingredients);for(var t in e)e[t]=e[t]<=0;var n=this.props.error?Object(F.jsx)("p",{children:"Ingredients can't be loaded!"}):Object(F.jsx)(J.a,{}),i=null;this.props.ingredients&&(n=Object(F.jsxs)(r.Fragment,{children:[" ",Object(F.jsx)(A.a,{ingredients:this.props.ingredients}),Object(F.jsx)(M,{added:this.props.onIngredientAdded,removed:this.props.onIngredientRemoved,disabled:e,price:this.props.totalPrice,purchase:this.updatePurchaseState(this.props.ingredients),orderSummery:this.purchasingHandler,isAuth:this.props.isAuth})]}),i=Object(F.jsx)(G,{ingredients:this.props.ingredients,purchasingCancel:this.purchasingCancel,purchasingContinue:this.purchasingContinue,price:this.props.totalPrice}));var c=null;return this.state.redirect&&(c=Object(F.jsx)(Q.a,{show:this.state.redirect,purchasingCancel:this.purchasingCancel,children:Object(F.jsx)("span",{children:"Your order has been placed successfully"})})),Object(F.jsxs)(r.Fragment,{children:[c,Object(F.jsx)(Q.a,{show:this.state.purchasing,purchasingCancel:this.purchasingCancel,children:i}),n]})}}]),n}(r.Component),Z=Object(s.b)((function(e){return{ingredients:e.burgerBuilder.ingredients,totalPrice:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuth:null!==e.auth.token,redirect:e.order.redirect}}),(function(e){return{onIngredientAdded:function(t){return e(T.a(t))},onIngredientRemoved:function(t){return e(T.g(t))},onInitIngredients:function(){return e(T.d())}}}))(Object(X.a)(z,D.a)),q=n.p+"static/media/burger-logo.ec69c7f6.png",K=n(40),Y=n.n(K),V=function(e){return Object(F.jsx)("div",{className:Y.a.Logo,children:Object(F.jsx)("img",{className:Y.a.img,src:q,alt:"MyBurger"})})},$=n(41),ee=n.n($),te=function(e){return Object(F.jsx)("li",{className:ee.a.NavigationItem,children:Object(F.jsx)(a.b,{to:e.link,activeClassName:ee.a.active,exact:!0,children:e.children})})},ne=n(62),re=n.n(ne),ie=function(e){return Object(F.jsxs)("ul",{className:re.a.NavigationItems,children:[Object(F.jsx)(te,{link:"/",exact:e.exact,children:"Burger Builder"}),e.isAuth?Object(F.jsx)(te,{link:"/orders",children:"Orders"}):null," ",e.isAuth?Object(F.jsx)(te,{link:"/logout",children:"Logout"}):Object(F.jsx)(te,{link:"/auth",children:"Authenticate"})]})},ce=n(32),ae=n(19),oe=n.n(ae),se=function(e){var t=[oe.a.SideDrawer,oe.a.Close];return e.show&&(t=[oe.a.SideDrawer,oe.a.Open]),Object(F.jsxs)(r.Fragment,{children:[Object(F.jsx)(ce.a,{show:e.show,displayNone:oe.a.DisplayNone,clicked:e.openSideDrawer}),Object(F.jsxs)("div",{className:t.join(" "),children:[Object(F.jsx)("div",{className:oe.a.Logo,children:Object(F.jsx)(V,{})}),Object(F.jsx)("nav",{children:Object(F.jsx)(ie,{isAuth:e.isAuth})})]})]})},ue=n(33),de=n.n(ue),le=n(63),je=n.n(le),he=function(e){return Object(F.jsxs)("div",{className:je.a.DrawerToggle,onClick:e.clicked,children:[Object(F.jsx)("div",{}),Object(F.jsx)("div",{}),Object(F.jsx)("div",{})]})},be=function(e){return Object(F.jsxs)("header",{className:de.a.Toolbar,children:[Object(F.jsx)(he,{clicked:e.clicked}),Object(F.jsx)("div",{className:de.a.Logo,children:Object(F.jsx)(V,{})}),Object(F.jsx)("nav",{className:de.a.DesktopOnly,children:Object(F.jsx)(ie,{isAuth:e.isAuth})})]})},pe=n(64),ge=n.n(pe),fe=function(e){Object(I.a)(n,e);var t=Object(B.a)(n);function n(){var e;Object(k.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={showSideDrawer:!1},e.showSideDrawerHandler=function(){e.setState({showSideDrawer:!1})},e.drawerToggleHandler=function(){e.setState({showSideDrawer:!0})},e}return Object(N.a)(n,[{key:"render",value:function(){return Object(F.jsxs)(r.Fragment,{children:[Object(F.jsx)(be,{clicked:this.drawerToggleHandler,isAuth:this.props.isAuth}),Object(F.jsx)(se,{show:this.state.showSideDrawer,openSideDrawer:this.showSideDrawerHandler,isAuth:this.props.isAuth}),Object(F.jsx)("main",{className:ge.a.Content,children:this.props.children})]})}}]),n}(r.Component),Oe=Object(s.b)((function(e){return{isAuth:null!==e.auth.token}}))(fe),me=function(e){Object(I.a)(n,e);var t=Object(B.a)(n);function n(){return Object(k.a)(this,n),t.apply(this,arguments)}return Object(N.a)(n,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return Object(F.jsx)(w.a,{to:"/"})}}]),n}(r.Component),_e=Object(s.b)(null,(function(e){return{onLogout:function(){return e(T.e())}}}))(me),xe=function(e){return function(t){Object(I.a)(r,t);var n=Object(B.a)(r);function r(){var e;Object(k.a)(this,r);for(var t=arguments.length,i=new Array(t),c=0;c<t;c++)i[c]=arguments[c];return(e=n.call.apply(n,[this].concat(i))).state={component:null},e}return Object(N.a)(r,[{key:"componentDidMount",value:function(){var t=this;e().then((function(e){t.setState({component:e.default})}))}},{key:"render",value:function(){var e=this.state.component;return e?Object(F.jsx)(e,Object(j.a)({},this.props)):null}}]),r}(r.Component)},ve=function(e){Object(I.a)(r,e);var t=Object(B.a)(r);function r(){return Object(k.a)(this,r),t.apply(this,arguments)}return Object(N.a)(r,[{key:"render",value:function(){var e=xe((function(){return n.e(3).then(n.bind(null,107))})),t=xe((function(){return n.e(4).then(n.bind(null,105))})),r=xe((function(){return n.e(5).then(n.bind(null,108))}));return Object(F.jsx)("div",{className:"App",children:Object(F.jsx)(Oe,{children:Object(F.jsxs)(w.d,{children:[Object(F.jsx)(w.b,{path:"/checkout",component:e}),this.props.isAuth?Object(F.jsx)(w.b,{path:"/orders",component:r}):null,Object(F.jsx)(w.b,{path:"/auth",component:t}),Object(F.jsx)(w.b,{path:"/logout",component:_e}),Object(F.jsx)(w.b,{path:"/",exact:!0,component:Z}),Object(F.jsx)(w.a,{to:"/"})]})})})}}]),r}(r.Component),ye=Object(w.g)(Object(s.b)((function(e){return{isAuth:null!==e.auth.token}}))(ve)),Ce=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,106)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),i(e),c(e),a(e)}))},Se=o.d,ke=Object(o.c)({burgerBuilder:m,order:v,auth:S}),Ne=Object(o.e)(ke,Se(Object(o.a)(u.a))),Ie=Object(F.jsx)(s.a,{store:Ne,children:Object(F.jsx)(a.a,{children:Object(F.jsx)(ye,{})})});c.a.render(Ie,document.getElementById("root")),Ce()}],[[97,1,2]]]);
//# sourceMappingURL=main.3551360d.chunk.js.map