(this.webpackJsonpinterview=this.webpackJsonpinterview||[]).push([[0],{104:function(e,t,n){e.exports={interviewList:"interview_interviewList__B6QQb",interviewList__paragraph:"interview_interviewList__paragraph__3XlLF"}},219:function(e,t,n){},220:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n(0),s=n.n(r),i=n(14),o=n.n(i),c=n(64),l=n(68),d=n(222),h=n(225),u=function(){return Object(a.jsx)("div",{style:{backgroundColor:"red"},children:"Fallback"})},p=n(69),b=n(136),j={setIsLoading:function(e,t){e.setState(Object(p.a)(Object(p.a)({},e.state),{},{isLoading:t}))}},m=Object(b.a)(s.a,{isLoading:!1},j),f=n(228),g=n(229),x=n(230),O=n(231),w=n(232),v=n(78),y=n.n(v),_=d.a.Header,T=d.a.Sider,k=d.a.Content,C=d.a.Footer,S=function(e){var t=e.children,n=Object(r.useState)(!0),s=Object(l.a)(n,2),i=s[0],o=s[1],c=m(),p=Object(l.a)(c,1)[0].isLoading;return Object(a.jsxs)(a.Fragment,{children:[p&&Object(a.jsx)(u,{}),Object(a.jsxs)(d.a,{className:y.a.layout,children:[Object(a.jsxs)(T,{className:y.a.sider,trigger:null,collapsible:!0,collapsed:i,children:[Object(a.jsx)("div",{className:"logo"}),Object(a.jsxs)(h.a,{mode:"inline",defaultSelectedKeys:["1"],children:[Object(a.jsx)(h.a.Item,{icon:Object(a.jsx)(f.a,{}),children:"nav 1"},"1"),Object(a.jsx)(h.a.Item,{icon:Object(a.jsx)(g.a,{}),children:"nav 2"},"2"),Object(a.jsx)(h.a.Item,{icon:Object(a.jsx)(x.a,{}),children:"nav 3"},"3")]})]}),Object(a.jsxs)(d.a,{className:"site-layout",children:[Object(a.jsx)(_,{className:y.a.header,style:{padding:0},children:Object(a.jsx)("span",{className:"trigger",onClick:function(){return o(!i)},children:i?Object(a.jsx)(O.a,{}):Object(a.jsx)(w.a,{})})}),Object(a.jsx)(k,{className:y.a.layout__content,children:t}),Object(a.jsx)(C,{style:{textAlign:"center"},children:"2000 copy"})]})]})]})},L=n(26),I=n(75),A=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(I.a,{id:"b97ada709cf3339f7f157d8a4d420867"})})},F=n(86),P=n(223),R=n(226),N=n(227),M=n(224),W=n(135),J=n.n(W),U=n(104),H=n.n(U),D=n(233),q=n(234),E=function(e){var t=e;return t=(t=(t=t.replace(/`(.*?)`/g,"<code>$1</code>")).replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>")).replace(/\*(.*?)\*/g,"<em>$1</em>")},X=P.a.Title,$=P.a.Text,B=function(){var e=Object(L.f)(),t=Object(r.useState)(),n=Object(l.a)(t,2),s=n[0],i=n[1],o=Object(r.useState)({}),d=Object(l.a)(o,2),h=d[0],u=d[1];Object(r.useEffect)((function(){var t=e.id,n=parseInt(e.id)+1,a=parseInt(e.id).valueOf()-1,r=F.find((function(e){return e.id==t})),s=F.find((function(e){return e.id==a.toString()})),o=F.find((function(e){return e.id==n.toString()}));u({prev:s,next:o}),i(r)}),[e.id]);var p=function(e,t){switch(e){case"code":return Object(a.jsx)(I.a,{id:t});case"paragraph":return Object(a.jsx)($,{className:H.a.interviewList__paragraph,children:Object(a.jsx)("span",{dangerouslySetInnerHTML:{__html:E(t)}})});case"subtitle":return Object(a.jsx)(X,{level:t[1],children:t[0]});case"ulist":return Object(a.jsx)("ul",{children:t.map((function(e,t){return Object(a.jsx)("li",{children:Object(a.jsx)($,{children:Object(a.jsx)("span",{dangerouslySetInnerHTML:{__html:E(e)}})})},t)}))});case"olist":return Object(a.jsx)("ol",{children:t.map((function(e,t){return Object(a.jsx)("li",{children:Object(a.jsx)($,{children:Object(a.jsx)("span",{dangerouslySetInnerHTML:{__html:E(e)}})})},t)}))})}},b=function(e){return e.replace("?","")};return Object(a.jsxs)(J.a,{className:H.a.interviewList,children:[s&&Object.keys(s).map((function(e,t){switch(e){case"title":return Object(a.jsx)(X,{children:s.id+". "+s[e]},t);case"paragraph":return Object(a.jsx)($,{children:Object(a.jsx)("span",{dangerouslySetInnerHTML:{__html:s[e].replace(/`(.*?)`/g,"<code>$1</code>")}})},t);case"code":return Object(a.jsx)(I.a,{id:s[e]},t);case"render":return s[e].map((function(e){return Object.keys(e).map((function(t){return p(t,e[t])}))}));default:return Object(a.jsx)(a.Fragment,{})}})),Object(a.jsxs)(R.a,{justify:"space-between",children:[Object(a.jsx)(N.a,{children:h.prev?Object(a.jsxs)(c.b,{to:"/interview/js/".concat(h.prev.id),children:[Object(a.jsx)(D.a,{})," ",b(h.prev.title)]}):Object(a.jsxs)(M.a,{type:"link",disabled:!0,children:[Object(a.jsx)(D.a,{})," Previous"]})}),Object(a.jsx)(N.a,{children:h.next?Object(a.jsxs)(c.b,{to:"/interview/js/".concat(h.next.id),children:[b(h.next.title)," ",Object(a.jsx)(q.a,{})]}):Object(a.jsxs)(M.a,{type:"link",disabled:!0,children:["Next ",Object(a.jsx)(q.a,{})]})})]})]})},z=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,235))})),G=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(L.c,{children:[Object(a.jsx)(L.a,{exact:!0,path:"/",component:z}),Object(a.jsx)(L.a,{exact:!0,path:"/interview",component:A}),Object(a.jsx)(L.a,{exact:!0,path:"/interview/:type/:id",component:B})]})})},Q=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(c.a,{children:Object(a.jsx)(S,{children:Object(a.jsx)(G,{})})})})},V=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,236)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))};n(217),n(218),n(219);o.a.render(Object(a.jsx)(r.Suspense,{fallback:Object(a.jsx)(u,{}),children:Object(a.jsx)(Q,{})}),document.getElementById("root")),V()},78:function(e,t,n){e.exports={layout__content:"layout_layout__content__3_V6t",header:"layout_header__3pw2v",sider:"layout_sider__2e2q5"}},86:function(e){e.exports=JSON.parse('[{"id":"1","title":"Difference between let & var ?","render":[{"ulist":["A variable defined using a var statement is known throughout the function it is defined in, from the start of the function. (*)","A variable defined using a let statement is only known in the block it is defined in, from the moment it is defined onward. (**)"],"code":"bd46def42b9675c5dd80be33c4dbe72c"}]},{"id":"2","title":"Pure components in react ?","render":[{"paragraph":"*`React.PureComponent`* is exactly the same as *`React.Component`* except that it handles the `shouldComponentUpdate()` method for you. When props or state changes, *PureComponent* will do a shallow comparison on both props and state. *Component* on the other hand won\'t compare current props and state to next out of the box. Thus, the component will re-render by default whenever `shouldComponentUpdate` is called."},{"paragraph":"React Components re-renders in the following scenarios:","ulist":["\u201csetState\u201d is called in Component","\u201cprops\u201d values are updated","this.forceUpdate() is called"]},{"paragraph":"In the case of Pure Components, the React components do not re-render blindly without considering the updated values of React \u201cprops\u201d and \u201cstate\u201d. If updated values are the same as previous values, render is not triggered.","code":"450e5feb767a5fc476c08d2615437fd3"}]},{"id":"3","title":"Controlled & Uncontrolled components ?","render":[{"ulist":["A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component *controls* it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a *dumb component*.","A Uncontrolled Component is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML."]},{"paragraph":"Most native React form components support both controlled and uncontrolled usage:","code":"4a2dc4e9330d3ee6ca0f2798caa5a39e"}]},{"id":"4","title":"What are the major features of React ?","render":[{"paragraph":"The major features of React are:","ulist":["It uses **VirtualDOM** instead RealDOM considering that RealDOM manipulations are expensive.","Supports **server-side** rendering.","Follows **Unidirectional** data flow or data binding.","Uses **reusable/composable** UI components to develop the view."]}]},{"id":"5","title":"What is state in React?","render":[{"paragraph":"State of a component is an object that holds some information that may change over the lifetime of the component. We should always try to make our state as simple as possible and minimize the number of stateful components. Let\'s create an user component with message state,","code":"2c5de942430c759d45e9a6ec757f74ac"}]},{"id":"6","title":"What are props in React ?","render":[{"paragraph":"Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation using a naming convention similar to HTML-tag attributes. They are data passed down from a parent component to a child component."},{"paragraph":"The primary purpose of props in React is to provide following component functionality :","ulist":["Pass custom data to your component.","Trigger state changes.","Use via `this.props.reactProp` inside component\'s `render()` method"]}]},{"id":"7","title":"What is the use of refs ?","render":[{"paragraph":"The *ref* is used to return a reference to the element. They *should be avoided* in most cases, however, they can be useful when you need a direct access to the DOM element or an instance of a component.","code":"584338ec5c6f9f7d23d0488303da33b1"}]},{"id":"8","title":"What is the purpose of using super constructor with props argument?","render":[{"paragraph":"A child class constructor cannot make use of `this` reference until `super()` method has been called. The same applies for ES6 sub-classes as well. The main reason of passing props parameter to `super()` call is to access `this.props` in your child constructors."},{"paragraph":"Passing props:","code":"d635829e669b03ce878c5f5711326212"},{"paragraph":"The above code snippets reveals that `this.props` is different only within the constructor. It would be the same outside the constructor."}]},{"id":"9","title":"Closure in Javascript ?","render":[{"paragraph":"Closure means that an inner function always has access to the vars and parameters of its outer function, even after the outer function has returned.","code":"c36906a7764c80dfc0e8a02268ba2d0b"}]},{"id":"10","title":"Generator functions ?","render":[{"paragraph":"Regular functions return only one, single value (or nothing). <br/> Generators can return (\u201cyield\u201d) multiple values, one after another, on-demand. They work great with iterables, allowing to create data streams with ease.","code":"23f86dc407da864ee82756901af4cd7e"}]},{"id":"11","title":"Promise ?","render":[{"paragraph":"`A promise is an object that may produce a single value some time in the future:` either a resolved value, or a reason that it\u2019s not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: **fulfilled**, **rejected**, or **pending**. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.<br/> Promise execution is asynchronous, which means that it\'s executed, but the program won\'t wait until it\'s finished to continue with the rest of the code.","code":"a89e48aba56814947f3ed0aeed742389"},{"paragraph":"A promise can have 3 states which are the following:","ulist":["**Pending:** This is the initial state of the promise, the promise is now waiting for either to be resolved or rejected. For example, when are reaching out to the web with an AJAX request and wrapping the request in a promise. Then the promise will be pending in the time window in which the request is not returned.","**Fulfilled:** When the operation is completed succesfully, the promise is fulfilled. For example, when we are reaching out to be web using AJAX for some JSON data and wrapping it in a promise. When we are succesfully getting data back the promise is said to be fulfilled.","**Rejected:** When the operation has failed, the promise is rejected. For example, when we are reaching out to be web using AJAX for some JSON data and wrapping it in a promise. When we are getting a 404 error the promise has been rejected."]},{"paragraph":"The *then* callback receives as a first argument the resolved value (the string \'success\' in this case). <br/> The *catch* callback receives as a first argument the rejected value (the string \'Error\' in this case). <br/> The *finally* method receives a callback which is executed on both promise fulfillment and rejection. Here we can write \'cleanup\' code which need to be executed always regardless of promise outcome."}]},{"id":"12","title":"Clone Objects ?","render":[{"code":"a383b9d004e00f0e164900bb0a693674"}]},{"id":"","title":"","render":[{"paragraph":""}]}]')}},[[220,1,2]]]);
//# sourceMappingURL=main.d2fc5b50.chunk.js.map