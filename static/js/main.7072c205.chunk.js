(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"p",(function(){return i})),n.d(t,"j",(function(){return a})),n.d(t,"f",(function(){return c})),n.d(t,"l",(function(){return o})),n.d(t,"o",(function(){return s})),n.d(t,"n",(function(){return u})),n.d(t,"m",(function(){return d})),n.d(t,"h",(function(){return l})),n.d(t,"g",(function(){return h})),n.d(t,"c",(function(){return j})),n.d(t,"d",(function(){return p})),n.d(t,"b",(function(){return b})),n.d(t,"e",(function(){return g})),n.d(t,"q",(function(){return f})),n.d(t,"k",(function(){return O})),n.d(t,"i",(function(){return m}));var r="ADD_INGREDIENTS",i="REMOVE_INGREDIENTS",a="INIT_INGREDIENTS",c="FETCH_ERRORS",o="PURCHASE_BURGER",s="PURCHASE_SUCCESS",u="PURCHASE_REDIRECT",d="PURCHASE_FAIL",l="FETCH_ORDERS_START",h="FETCH_ORDERS_FAIL",j="AUTH_START",p="AUTH_SUCCESS",b="AUTH_FAIL",g="AUTH_SWITCH",f="STORE_SUCCESS",O="LOGOUT",m="FETCH_ORDERS_SUCCESS"},,,,,,,,,,,,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__xHMxj",BreadTop:"BurgerIngredient_BreadTop__3d-mD",Seeds1:"BurgerIngredient_Seeds1__23kVU",Seeds2:"BurgerIngredient_Seeds2__3Ic5u",Meat:"BurgerIngredient_Meat__3WLLR",Cheese:"BurgerIngredient_Cheese__1x4Ti",Salad:"BurgerIngredient_Salad__1Jurj",Bacon:"BurgerIngredient_Bacon__30dQY"}},function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"i",(function(){return c})),n.d(t,"f",(function(){return o})),n.d(t,"h",(function(){return u})),n.d(t,"e",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"g",(function(){return j})),n.d(t,"d",(function(){return b})),n.d(t,"c",(function(){return g}));var r=n(2),i=n(18),a=function(e){return{type:r.a,ingredientName:e}},c=function(e){return{type:r.p,ingredientName:e}},o=function(){return function(e){i.a.get("https://react-my-burger-df27e-default-rtdb.firebaseio.com/ingredients.json").then((function(t){return e((n=t.data,{type:r.j,ingredients:n}));var n})).catch((function(t){return e(function(e){return{type:r.f,error:e}}(t))}))}},s=n(5),u=function(e,t){return function(n){n({type:r.l}),i.a.post("/orders.json?auth=".concat(t),e).then((function(t){n(function(e,t){return{type:r.o,id:e,orderData:t}}(t.data.name,e))})).catch((function(e){n(function(e){return{type:r.m,error:e}}(e))})),setTimeout((function(){n({type:r.n})}),4e3)}},d=function(e,t){return function(n){n({type:r.h}),i.a.get("/orders.json?auth=".concat(e,'&orderBy="userOrderId"&equalTo="').concat(t,'"')).then((function(e){var t,i=[];for(var a in e.data)i.push(Object(s.a)(Object(s.a)({},e.data[a]),{},{id:a}));n((t=i,{type:r.i,orders:t}))})).catch((function(e){n(function(e){return{type:r.g,error:e}}(e))}))}},l=n(23),h=n.n(l),j=function(){return{type:r.k}},p=function(e){return{type:r.q,contactData:e}},b=function(e,t){return function(n){h.a.get("https://react-my-burger-df27e-default-rtdb.firebaseio.com/users.json?auth=".concat(e,'&orderBy="email"&equalTo="').concat(t,'"')).then((function(e){n(p(Object.values(e.data)[0]))}))}},g=function(){return{type:r.e}},f=function(e,t,n,i){return function(a){a({type:r.c});var c={email:e,password:t,returnSecureToken:!0},o="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCGKuK-wRQmRIcpQsQ13FyWXeW-6M5dNmI";n||(o="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCGKuK-wRQmRIcpQsQ13FyWXeW-6M5dNmI "),h.a.post(o,c).then((function(t){var c,o,s;a((c=t.data.idToken,o=t.data.localId,{type:r.d,token:c,userOrderId:o})),a((s=t.data.expiresIn,function(e){setTimeout((function(){e(j())}),1e3*s)})),localStorage.setItem("token",t.data.idToken),localStorage.setItem("expiredDate",t.data.expiresIn),localStorage.setItem("userOrderId",t.data.localId),localStorage.setItem("email",e),n&&a(function(e,t){return function(n){h.a.post("https://react-my-burger-df27e-default-rtdb.firebaseio.com/users.json?auth=".concat(t),e).then((function(t){n(p(e))}))}}(i,t.data.idToken)),n||a(b(t.data.idToken,e))})).catch((function(e){a(function(e){return{type:r.b,error:e}}(e.response.data.error))}))}}},function(e,t,n){"use strict";var r=n(23),i=n.n(r).a.create({baseURL:"https://react-my-burger-df27e-default-rtdb.firebaseio.com/"});t.a=i},,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__OlZ7f",DisplayNone:"SideDrawer_DisplayNone__3aZlP",Open:"SideDrawer_Open__3Z0A_",Close:"SideDrawer_Close__1LT4_",Logo:"SideDrawer_Logo__3ZZeT"}},,,,,,function(e,t,n){"use strict";var r=n(10),i=n(11),a=n(13),c=n(12),o=n(1),s=n(32),u=n(60),d=n.n(u),l=n(0),h=function(e){Object(a.a)(n,e);var t=Object(c.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return Object(l.jsxs)(o.Fragment,{children:[Object(l.jsx)(s.a,{show:this.props.show,clicked:this.props.purchasingCancel}),Object(l.jsx)("div",{className:d.a.Modal,style:{transform:this.props.show?"translateX(0)":"translateX(100vw)",opacity:this.props.show?"1":"0"},children:this.props.children})]})}}]),n}(o.Component);t.a=h},function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__1Cm9h",Label:"BuildControl_Label__H8nbQ",Less:"BuildControl_Less__22CXC",More:"BuildControl_More__2jJbq"}},,,,function(e,t,n){"use strict";n(1);var r=n(59),i=n.n(r),a=n(0);t.a=function(e){return e.show?Object(a.jsx)("div",{className:[i.a.Backdrop,e.displayNone].join(" "),onClick:e.clicked}):null}},function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__3m9Xg",Logo:"Toolbar_Logo__Jwf4X",DesktopOnly:"Toolbar_DesktopOnly__mjtwu"}},function(e,t,n){"use strict";n(1);var r=n(39),i=n.n(r),a=n(0);t.a=function(e){return Object(a.jsx)("button",{disabled:e.disabled,className:[i.a.Button,i.a[e.btnType]].join(" "),onClick:e.clicked,children:e.children})}},,,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__2YS2J",OrderButton:"BuildControls_OrderButton__1S95D",enable:"BuildControls_enable__nUlkM"}},function(e,t,n){e.exports={Button:"Button_Button__ShHz6",Success:"Button_Success__5DIFN",Danger:"Button_Danger__29HWN"}},function(e,t,n){e.exports={Logo:"Logo_Logo__2AB3A"}},,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__3TvUn",active:"NavigationItem_active__kQdbz"}},function(e,t,n){"use strict";n(1);var r=n(61),i=n.n(r),a=n(0);t.a=function(){return Object(a.jsx)("div",{className:i.a.Loader,children:"Loading..."})}},function(e,t,n){"use strict";var r=n(5),i=n(66),a=n(1),c=n(27),o=n(0);t.a=function(e,t){return function(n){var s=Object(a.useState)(null),u=Object(i.a)(s,2),d=u[0],l=u[1];Object(a.useEffect)((function(){var e=t.interceptors.request.use((function(e){return l(null),e})),n=t.interceptors.response.use((function(e){return e}),(function(e){return l(e)}));return function(){t.interceptors.request.eject(e),t.interceptors.request.eject(n)}}),[]);return Object(o.jsxs)(a.Fragment,{children:[Object(o.jsx)(c.a,{show:d,purchasingCancel:function(){l(null)},children:d?d.message:null}),Object(o.jsx)(e,Object(r.a)({},n))]})}}},,,,,,,,,,function(e,t,n){"use strict";var r=n(65),i=(n(1),n(58)),a=n.n(i),c=n(16),o=n.n(c),s=n(0),u=function(e){var t=null;switch(e.type){case"bread-bottom":t=Object(s.jsx)("div",{className:o.a.BreadBottom});break;case"bread-top":t=Object(s.jsxs)("div",{className:o.a.BreadTop,children:[Object(s.jsx)("div",{className:o.a.Seeds1}),Object(s.jsx)("div",{className:o.a.Seeds2})]});break;case"meat":t=Object(s.jsx)("div",{className:o.a.Meat});break;case"cheese":t=Object(s.jsx)("div",{className:o.a.Cheese});break;case"salad":t=Object(s.jsx)("div",{className:o.a.Salad});break;case"bacon":t=Object(s.jsx)("div",{className:o.a.Bacon});break;default:t=null}return t};t.a=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(r.a)(Array(e.ingredients[t])).map((function(e,n){return Object(s.jsx)(u,{type:t},n+t)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(s.jsx)("p",{children:"Please start adding ingredients!"})),Object(s.jsxs)("div",{className:a.a.Burger,children:[Object(s.jsx)(u,{type:"bread-top"}),t,Object(s.jsx)(u,{type:"bread-bottom"})]})}},,,function(e,t,n){e.exports={Burger:"Burger_Burger__23pwO"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__PlyLl"}},function(e,t,n){e.exports={Modal:"Modal_Modal__1uzHh"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__o0HJl",load2:"Spinner_load2__j9niU"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1PWQA"}},function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__B7ZUI"}},function(e,t,n){e.exports={Content:"Layout_Content__2iftb"}},,,,,,,,,,,function(e,t,n){},function(e,t,n){},,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(29),a=n.n(i),c=n(19),o=n(20),s=n(15),u=n(57),d=n(25),l=n(2),h=n(5),j=function(e,t){return Object(h.a)(Object(h.a)({},e),t)},p={ingredients:null,totalPrice:20,error:!1,building:!1},b={salad:3,cheese:5,meat:20,bacon:7},g=function(e,t){var n=Object(d.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r=j(e.ingredients,n);return j(e,{ingredients:r,totalPrice:e.totalPrice+b[t.ingredientName],building:!0})},f=function(e,t){var n=Object(d.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r=j(e.ingredients,n);return j(e,{ingredients:r,totalPrice:e.totalPrice-b[t.ingredientName],building:!0})},O=function(e,t){return j(e,{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},totalPrice:20,error:!1,building:!1})},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.a:return g(e,t);case l.p:return f(e,t);case l.j:return O(e,t);case l.f:return j(e,{error:!0});default:return e}},x={orders:[],loading:!1,redirect:!1},_=function(e,t){var n=Object(h.a)(Object(h.a)({},t.orderData),{},{id:t.id});return j(e,{loading:!1,redirect:!0,orders:e.orders.concat(n)})},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.l:return j(e,{loading:!0});case l.n:return j(e,{redirect:!1});case l.o:return _(e,t);case l.m:return j(e,{loading:!1});case l.h:return j(e,{loading:!0});case l.i:return j(e,{orders:t.orders,loading:!1});case l.g:return j(e,{loading:!1});default:return e}},y={token:localStorage.getItem("token"),userOrderId:localStorage.getItem("userOrderId"),email:localStorage.getItem("email"),error:null,loading:!1,contactData:null,isSignup:!0},S=function(e,t){return localStorage.removeItem("token"),localStorage.removeItem("expiredDate"),localStorage.removeItem("userOrderId"),localStorage.removeItem("email"),j(e,{token:null,userOrderId:null})},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.e:return j(e,{isSignup:!e.isSignup});case l.q:return j(e,{contactData:t.contactData});case l.c:return j(e,{loading:!0});case l.d:return j(e,{token:t.token,userOrderId:t.userOrderId,loading:!1,error:null});case l.b:return j(e,{error:t.error});case l.k:return S(e);default:return e}},k=(n(75),n(10)),I=n(11),N=n(13),B=n(12),w=n(4),D=(n(76),n(18)),T=n(17),A=n(55),L=n(38),R=n.n(L),E=n(28),P=n.n(E),F=n(0),H=function(e){return Object(F.jsxs)("div",{className:P.a.BuildControl,children:[Object(F.jsxs)("div",{className:P.a.Label,children:[e.label,Object(F.jsxs)("span",{style:{fontWeight:"400"},children:[" (",{Salad:3,Cheese:5,Meat:20,Bacon:7}[e.label]," EGP)"]})]}),Object(F.jsx)("button",{className:P.a.Less,onClick:e.removed,disabled:e.disabled,children:Object(F.jsx)("strong",{children:" -"})}),Object(F.jsx)("p",{style:{padding:"0 4px"},children:e.amount}),Object(F.jsx)("button",{className:P.a.More,onClick:e.added,children:Object(F.jsx)("strong",{children:" +"})})]})},U=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],M=function(e){return Object(F.jsxs)("div",{className:R.a.BuildControls,children:[Object(F.jsxs)("p",{children:["Current Price: ",Object(F.jsx)("strong",{children:e.price.toFixed(2)})]}),U.map((function(t){return Object(F.jsx)(H,{added:function(){return e.added(t.type)},removed:function(){return e.removed(t.type)},amount:e.ingredients[t.type],label:t.label,disabled:e.disabled[t.type]},t.label)})),Object(F.jsx)("button",{className:R.a.OrderButton,disabled:!e.purchase,onClick:e.orderSummery,children:e.isAuth?"ORDER NOW":"SIGNUP TO ORDER"})]})},W=n(27),Q=n(34),q=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(F.jsxs)("li",{children:[Object(F.jsx)("span",{style:{textTransform:"capitalize"},children:t}),":"," ",e.ingredients[t]]},t)}));return Object(F.jsxs)(r.Fragment,{children:[Object(F.jsx)("h3",{children:"Your Order"}),Object(F.jsx)("p",{style:{textAlign:"left"},children:"A delicious burger with the following ingredients:"}),Object(F.jsx)("ul",{style:{textAlign:"left"},children:t}),Object(F.jsx)("p",{children:Object(F.jsxs)("strong",{children:[" Total Price: ",e.price.toFixed(2)]})}),Object(F.jsx)("p",{children:"Continue to Checkout?"}),Object(F.jsx)(Q.a,{btnType:"Danger",clicked:e.purchasingCancel,children:"CANCEL"}),Object(F.jsx)(Q.a,{btnType:"Success",clicked:e.purchasingContinue,children:"CONTINUE"})]})},G=n(44),J=n(45),X=function(e){Object(N.a)(n,e);var t=Object(B.a)(n);function n(){var e;Object(k.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={purchasing:!1,redirect:!1},e.updatePurchaseState=function(e){return Object.values(e).reduce((function(e,t){return e+t}),0)>0},e.purchasingHandler=function(){e.props.isAuth?e.setState({purchasing:!0}):e.props.history.push("/auth")},e.purchasingCancel=function(){e.setState({purchasing:!1,redirect:!1})},e.purchasingContinue=function(){e.props.history.push("/checkout"),e.props.onFetchContactData(e.props.token,e.props.email)},e}return Object(I.a)(n,[{key:"componentDidMount",value:function(){this.props.onInitIngredients(),this.setState({redirect:this.props.redirect})}},{key:"render",value:function(){var e=Object(h.a)({},this.props.ingredients);for(var t in e)e[t]=e[t]<=0;var n=this.props.error?Object(F.jsx)("p",{children:"Ingredients can't be loaded!"}):Object(F.jsx)(G.a,{}),i=null;this.props.ingredients&&(n=Object(F.jsxs)(r.Fragment,{children:[" ",Object(F.jsx)(A.a,{ingredients:this.props.ingredients}),Object(F.jsx)(M,{added:this.props.onIngredientAdded,removed:this.props.onIngredientRemoved,ingredients:this.props.ingredients,disabled:e,price:this.props.totalPrice,purchase:this.updatePurchaseState(this.props.ingredients),orderSummery:this.purchasingHandler,isAuth:this.props.isAuth})]}),i=Object(F.jsx)(q,{ingredients:this.props.ingredients,purchasingCancel:this.purchasingCancel,purchasingContinue:this.purchasingContinue,price:this.props.totalPrice}));var a=null;return this.state.redirect&&(a=Object(F.jsx)(W.a,{show:this.state.redirect,purchasingCancel:this.purchasingCancel,children:Object(F.jsx)("span",{children:"Your order has been placed successfully"})})),Object(F.jsxs)(r.Fragment,{children:[a,Object(F.jsx)(W.a,{show:this.state.purchasing,purchasingCancel:this.purchasingCancel,children:i}),n]})}}]),n}(r.Component),z=Object(s.b)((function(e){return{ingredients:e.burgerBuilder.ingredients,totalPrice:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuth:null!==e.auth.token,redirect:e.order.redirect,token:e.auth.token,email:e.auth.email}}),(function(e){return{onIngredientAdded:function(t){return e(T.a(t))},onIngredientRemoved:function(t){return e(T.i(t))},onInitIngredients:function(){return e(T.f())},onFetchContactData:function(t,n){return e(T.d(t,n))}}}))(Object(J.a)(X,D.a)),Z=n.p+"static/media/burger-logo.ec69c7f6.png",K=n(40),Y=n.n(K),V=function(e){return Object(F.jsx)("div",{className:Y.a.Logo,children:Object(F.jsxs)(c.b,{to:"/",children:[" ",Object(F.jsx)("img",{className:Y.a.img,src:Z,alt:"MyBurger"})]})})},$=n(43),ee=n.n($),te=function(e){return Object(F.jsx)("li",{className:ee.a.NavigationItem,children:Object(F.jsx)(c.c,{to:e.link,activeClassName:ee.a.active,exact:!0,children:e.children})})},ne=n(62),re=n.n(ne),ie=function(e){return Object(F.jsxs)("ul",{className:re.a.NavigationItems,children:[Object(F.jsx)(te,{link:"/",exact:e.exact,children:"Burger Builder"}),e.isAuth?Object(F.jsx)(te,{link:"/orders",children:"Orders"}):null," ",e.isAuth?Object(F.jsx)(te,{link:"/logout",children:"Logout"}):Object(F.jsx)(te,{link:"/auth",children:"Authenticate"})]})},ae=n(32),ce=n(21),oe=n.n(ce),se=function(e){var t=[oe.a.SideDrawer,oe.a.Close];return e.show&&(t=[oe.a.SideDrawer,oe.a.Open]),Object(F.jsxs)(r.Fragment,{children:[Object(F.jsx)(ae.a,{show:e.show,displayNone:oe.a.DisplayNone,clicked:e.openSideDrawer}),Object(F.jsxs)("div",{className:t.join(" "),children:[Object(F.jsx)("div",{className:oe.a.Logo,children:Object(F.jsx)(V,{})}),Object(F.jsx)("nav",{children:Object(F.jsx)(ie,{isAuth:e.isAuth})})]})]})},ue=n(33),de=n.n(ue),le=n(63),he=n.n(le),je=function(e){return Object(F.jsxs)("div",{className:he.a.DrawerToggle,onClick:e.clicked,children:[Object(F.jsx)("div",{}),Object(F.jsx)("div",{}),Object(F.jsx)("div",{})]})},pe=function(e){return Object(F.jsxs)("header",{className:de.a.Toolbar,children:[Object(F.jsx)(je,{clicked:e.clicked}),Object(F.jsx)("div",{className:de.a.Logo,children:Object(F.jsx)(V,{})}),Object(F.jsx)("nav",{className:de.a.DesktopOnly,children:Object(F.jsx)(ie,{isAuth:e.isAuth})})]})},be=n(64),ge=n.n(be),fe=function(e){Object(N.a)(n,e);var t=Object(B.a)(n);function n(){var e;Object(k.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={showSideDrawer:!1},e.showSideDrawerHandler=function(){e.setState({showSideDrawer:!1})},e.drawerToggleHandler=function(){e.setState({showSideDrawer:!0})},e}return Object(I.a)(n,[{key:"render",value:function(){return Object(F.jsxs)(r.Fragment,{children:[Object(F.jsx)(pe,{clicked:this.drawerToggleHandler,isAuth:this.props.isAuth}),Object(F.jsx)(se,{show:this.state.showSideDrawer,openSideDrawer:this.showSideDrawerHandler,isAuth:this.props.isAuth}),Object(F.jsx)("main",{className:ge.a.Content,children:this.props.children})]})}}]),n}(r.Component),Oe=Object(s.b)((function(e){return{isAuth:null!==e.auth.token}}))(fe),me=function(e){Object(N.a)(n,e);var t=Object(B.a)(n);function n(){return Object(k.a)(this,n),t.apply(this,arguments)}return Object(I.a)(n,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return Object(F.jsx)(w.a,{to:"/"})}}]),n}(r.Component),xe=Object(s.b)(null,(function(e){return{onLogout:function(){return e(T.g())}}}))(me),_e=function(e){return function(t){Object(N.a)(r,t);var n=Object(B.a)(r);function r(){var e;Object(k.a)(this,r);for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return(e=n.call.apply(n,[this].concat(i))).state={component:null},e}return Object(I.a)(r,[{key:"componentDidMount",value:function(){var t=this;e().then((function(e){t.setState({component:e.default})}))}},{key:"render",value:function(){var e=this.state.component;return e?Object(F.jsx)(e,Object(h.a)({},this.props)):null}}]),r}(r.Component)},ve=function(e){Object(N.a)(r,e);var t=Object(B.a)(r);function r(){return Object(k.a)(this,r),t.apply(this,arguments)}return Object(I.a)(r,[{key:"render",value:function(){var e=_e((function(){return n.e(3).then(n.bind(null,106))})),t=_e((function(){return n.e(4).then(n.bind(null,107))})),r=_e((function(){return n.e(5).then(n.bind(null,108))}));return Object(F.jsx)("div",{className:"App",children:Object(F.jsx)(Oe,{children:Object(F.jsxs)(w.d,{children:[Object(F.jsx)(w.b,{path:"/checkout",component:e}),this.props.isAuth?Object(F.jsx)(w.b,{path:"/orders",component:r}):null,Object(F.jsx)(w.b,{path:"/auth",component:t}),Object(F.jsx)(w.b,{path:"/logout",component:xe}),Object(F.jsx)(w.b,{path:"/",exact:!0,component:z}),Object(F.jsx)(w.a,{to:"/"})]})})})}}]),r}(r.Component),ye=Object(w.g)(Object(s.b)((function(e){return{isAuth:null!==e.auth.token}}))(ve)),Se=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,105)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),a(e),c(e)}))},Ce=o.d,ke=Object(o.c)({burgerBuilder:m,order:v,auth:C}),Ie=Object(o.e)(ke,Ce(Object(o.a)(u.a))),Ne=Object(F.jsx)(s.a,{store:Ie,children:Object(F.jsx)(c.a,{children:Object(F.jsx)(ye,{})})});a.a.render(Ne,document.getElementById("root")),Se()}],[[97,1,2]]]);
//# sourceMappingURL=main.7072c205.chunk.js.map