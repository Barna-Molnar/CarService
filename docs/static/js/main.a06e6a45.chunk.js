(this["webpackJsonplandig-page-garage"]=this["webpackJsonplandig-page-garage"]||[]).push([[0],{48:function(e,t,i){},49:function(e,t,i){},50:function(e,t,i){},56:function(e,t,i){},57:function(e,t,i){},58:function(e,t,i){},59:function(e,t,i){},60:function(e,t,i){},62:function(e,t,i){"use strict";i.r(t);var a=i(1),s=i(0),c=i.n(s),n=i(16),r=i.n(n),o=(i(48),i(19)),l=i(20),u=i(18),d=i(23),m=i(22),j=(i(49),i(50),i(37)),b=function(e){return Object(a.jsxs)("section",{className:"fixed-menu",children:[Object(a.jsx)("div",{className:"fixed-menu-logo",children:Object(a.jsx)("img",{srcSet:"img/logo.svg",alt:""})}),Object(a.jsx)("div",{className:"fixed-menu-name",children:Object(a.jsx)("h1",{children:"Uwe Sh\xe4f KFZ MeisterBetrieb"})}),Object(a.jsx)("div",{className:"fixed-menu-menu",children:Object(a.jsxs)("ul",{className:"grid-menu",children:[Object(a.jsx)("li",{className:"grid-menu-item",children:Object(a.jsx)("a",{href:"/",children:Object(a.jsx)("span",{children:"Home"})})}),Object(a.jsx)("li",{className:"grid-menu-item",children:Object(a.jsx)(j.NavHashLink,{activeClass:"active",to:"/#leistungen",spy:!0,smooth:!0,duration:1e3,children:Object(a.jsx)("span",{children:"Leistungen"})})}),Object(a.jsx)("li",{className:"grid-menu-item",children:Object(a.jsx)(j.NavHashLink,{activeClass:"active",to:"/#about",spy:!0,smooth:!0,duration:1e3,children:Object(a.jsx)("span",{children:"\xdcber uns"})})}),Object(a.jsx)("li",{className:"grid-menu-item",children:Object(a.jsx)("a",{href:"contact",children:Object(a.jsx)("span",{children:"Kontankt"})})})]})})]})},p=(i(56),function(e){Object(d.a)(i,e);var t=Object(m.a)(i);function i(){return Object(o.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"container-footer",id:"footer",children:[Object(a.jsxs)("div",{className:"footer-contact",children:[Object(a.jsx)("p",{className:"telephone",children:"0123456"}),Object(a.jsx)("p",{className:"fax",children:"0123456"}),Object(a.jsx)("p",{className:"email",children:Object(a.jsx)("a",{href:"#",children:"iDontknow@gmail.com"})})]}),Object(a.jsxs)("div",{className:"footer-daten-secure",children:[Object(a.jsxs)("p",{className:"impressum",children:[Object(a.jsx)("a",{href:"",children:" Impressum"}),Object(a.jsx)("span",{children:"\xa0|\xa0"})]}),Object(a.jsxs)("p",{className:"haftung",children:[Object(a.jsx)("a",{href:"",children:" Haftungsausschluss"}),Object(a.jsx)("span",{children:"\xa0|\xa0"})]}),Object(a.jsx)("p",{className:"daten",children:Object(a.jsx)("a",{href:"",children:" DatenSchutz"})})]})]})}}]),i}(c.a.Component)),h=function(){return Object(a.jsx)("iframe",{title:"Uwe Sch\xe4f",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2617.4675158466193!2d9.48934131567459!3d49.00168997930171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47984aece9e8dd0f%3A0xa58d7074b2ecbb54!2sIm%20Horben%209%2C%2071560%20Sulzbach%20an%20der%20Murr!5e0!3m2!1sen!2sde!4v1606588822717!5m2!1sen!2sde",width:"100%",height:"100%",frameborder:"0",style:{border:"0"},allowfullscreen:"","aria-hidden":"false",tabindex:"0"})},x=(i(57),i(58),function(e){return Object(a.jsxs)("div",{className:"textBox-container ",children:[Object(a.jsx)("div",{className:"textBox-text",children:e.children}),Object(a.jsx)("button",{className:"textBox-btn-openContact",onClick:e.btnOnClick,children:e.btnText})]})}),O=(i(59),function(e){return Object(a.jsxs)("section",{className:"article ".concat(e.transparent?"transparent":""),children:[e.title?Object(a.jsx)("h1",{children:e.title}):"",Object(a.jsxs)("div",{className:"article-grid",children:[Object(a.jsx)("div",{className:"div-img",style:{order:"".concat(e.pictureFirst?"1":"2")},children:Object(a.jsx)("img",{src:e.image,alt:""})}),Object(a.jsxs)("div",{className:"div-text",style:{order:"".concat(e.pictureFirst?"2":"1")},children:[e.subTitle?Object(a.jsx)("h2",{className:"subtitle",children:e.subTitle}):"",e.children]})]})]})}),g=i(17),v=function(e){Object(d.a)(i,e);var t=Object(m.a)(i);function i(e){var a;return Object(o.a)(this,i),(a=t.call(this,e)).myRef=c.a.createRef(),a.handleIndicatorClick=a.handleIndicatorClick.bind(Object(u.a)(a)),a.state={activeIndex:0},a}return Object(l.a)(i,[{key:"handleIndicatorClick",value:function(e){var t=this.myRef.current.querySelector(".carousel");t.querySelector(".active.carousel-item").classList.remove("active"),t.querySelector(".carousel-item:nth-child(".concat(e+1,")")).classList.add("active"),this.setState({activeIndex:e})}},{key:"render",value:function(){var e=this;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"nemtudom",children:[Object(a.jsx)("div",{className:"mesh"}),Object(a.jsxs)("div",{className:"myIndicators",children:[Object(a.jsx)("div",{onClick:function(){e.handleIndicatorClick(0)},className:"indicator ".concat(0===this.state.activeIndex?"active":"")}),Object(a.jsx)("div",{onClick:function(){e.handleIndicatorClick(1)},className:"indicator ".concat(1===this.state.activeIndex?"active":"")}),Object(a.jsx)("div",{onClick:function(){e.handleIndicatorClick(2)},className:"indicator ".concat(2===this.state.activeIndex?"active":"")})]}),Object(a.jsxs)(x,{btnText:"Zu den \xf6ffnungszeiten",btnOnClick:this.props.openPopup,children:[Object(a.jsx)("h1",{children:"kfz-service in sulzbach murr"}),Object(a.jsx)("h3",{children:"Ihr partner f\xfcr service rund um's auto"}),Object(a.jsx)("h5",{children:"Mit uns fahren Sie besser"})]}),Object(a.jsx)("div",{className:"parallax",ref:this.myRef,children:Object(a.jsxs)(g.a,{controls:!1,indicators:!1,onSlide:function(t){var i=e.myRef.current.querySelector(".carousel").querySelectorAll(".carousel-item:not(:nth-child(".concat(t+1,"))"));[].forEach.call(i,(function(e){e.classList.remove("active")})),e.setState({activeIndex:t})},children:[Object(a.jsxs)(g.a.Item,{interval:1500,children:[Object(a.jsx)("img",{className:"carousel-img",src:"img/audir8.png",alt:"First slide"}),Object(a.jsx)(g.a.Caption,{})]}),Object(a.jsxs)(g.a.Item,{interval:3500,style:{},children:[Object(a.jsx)("img",{className:"carousel-img",src:"img/audia5.png",alt:"Third slide"}),Object(a.jsx)(g.a.Caption,{})]}),Object(a.jsxs)(g.a.Item,{interval:1500,style:{},children:[Object(a.jsx)("img",{className:"carousel-img",src:"img/factory.png",alt:"Third slide"}),Object(a.jsx)(g.a.Caption,{})]})]})}),Object(a.jsx)("section",{className:"about",id:"about",children:Object(a.jsx)(O,{pictureFirst:!0,title:"Herzlich Willkomen bei der Uwe Sch\xe4f KFZ meisterbetrieb",subTitle:"",image:"img/place.jpeg",children:Object(a.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ex asperiores eveniet distinctio at quibusdam iusto illo fugiat quod dolore, vel facere totam libero inventore alias beatae. Fuga sapiente itaque dolorem voluptates sunt? Totam, temporibus natus laudantium fuga odit ad consequuntur accusamus id, necessitatibus quod harum ex ratione dolorum tempora."})})}),Object(a.jsx)("section",{className:"service",id:"leistungen",children:Object(a.jsxs)("div",{className:"service-container",children:[Object(a.jsx)(O,{transparent:!0,pictureFirst:!1,title:"",subTitle:"Leistungen",image:"img/car-service.png",children:Object(a.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ex asperiores eveniet distinctio at quibusdam iusto illo fugiat quod dolore, vel facere totam libero inventore alias beatae. Fuga sapiente itaque dolorem voluptates sunt? Totam, temporibus natus laudantium fuga odit ad consequuntur accusamus id, necessitatibus quod harum ex ratione dolorum tempora."})}),Object(a.jsx)(O,{transparent:!1,pictureFirst:!0,title:"",subTitle:"Leistungen",image:"img/car-service.png",children:Object(a.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ex asperiores eveniet distinctio at quibusdam iusto illo fugiat quod dolore, vel facere totam libero inventore alias beatae. Fuga sapiente itaque dolorem voluptates sunt? Totam, temporibus natus laudantium fuga odit ad consequuntur accusamus id, necessitatibus quod harum ex ratione dolorum tempora."})}),Object(a.jsx)(O,{transparent:!0,pictureFirst:!1,title:"",subTitle:"Leistungen",image:"img/car-service.png",children:Object(a.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ex asperiores eveniet distinctio at quibusdam iusto illo fugiat quod dolore, vel facere totam libero inventore alias beatae. Fuga sapiente itaque dolorem voluptates sunt? Totam, temporibus natus laudantium fuga odit ad consequuntur accusamus id, necessitatibus quod harum ex ratione dolorum tempora!"})}),Object(a.jsx)(O,{transparent:!1,pictureFirst:!0,title:"",subTitle:"Leistungen",image:"img/car-service.png",children:Object(a.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ex asperiores eveniet distinctio at quibusdam iusto illo fugiat quod dolore, vel facere totam libero inventore alias beatae. Fuga sapiente itaque dolorem voluptates sunt? Totam, temporibus natus laudantium fuga odit ad consequuntur accusamus id, necessitatibus quod harum ex ratione dolorum tempora."})}),Object(a.jsx)(O,{transparent:!0,pictureFirst:!1,title:"",subTitle:"Leistungen",image:"img/car-service.png",children:Object(a.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ex asperiores eveniet distinctio at quibusdam iusto illo fugiat quod dolore, vel facere totam libero inventore alias beatae. Fuga sapiente itaque dolorem voluptates sunt? Totam, temporibus natus laudantium fuga odit ad consequuntur accusamus id, necessitatibus quod harum ex ratione dolorum tempora."})}),Object(a.jsx)(O,{transparent:!1,pictureFirst:!0,title:"",subTitle:"Leistungen",image:"img/car-service.png",children:Object(a.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ex asperiores eveniet distinctio at quibusdam iusto illo fugiat quod dolore, vel facere totam libero inventore alias beatae. Fuga sapiente itaque dolorem voluptates sunt? Totam, temporibus natus laudantium fuga odit ad consequuntur accusamus id, necessitatibus quod harum ex ratione dolorum tempora."})}),Object(a.jsx)(O,{transparent:!0,pictureFirst:!1,title:"",subTitle:"Leistungen",image:"img/car-service.png",children:Object(a.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ex asperiores eveniet distinctio at quibusdam iusto illo fugiat quod dolore, vel facere totam libero inventore alias beatae. Fuga sapiente itaque dolorem voluptates sunt? Totam, temporibus natus laudantium fuga odit ad consequuntur accusamus id, necessitatibus quod harum ex ratione dolorum tempora."})})]})})]})})}}]),i}(c.a.Component),f=i(35),q=i(6),N=i(40),y=i(28);i(60);var S=function(e){return Object(a.jsxs)(y.a,Object(N.a)(Object(N.a)({className:"myModal-container"},e),{},{size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(a.jsx)(y.a.Header,{closeButton:!0,children:Object(a.jsx)(y.a.Title,{id:"contained-modal-title-vcenter ",children:"\xd6ffnungszeiten"})}),Object(a.jsxs)(y.a.Body,{children:[Object(a.jsx)("h4",{children:"Montag - Freitag"}),Object(a.jsx)("p",{children:"07:00 - 18:00 Uhr"}),Object(a.jsx)("h4",{children:"Samstag"}),Object(a.jsx)("p",{children:"08:00 - 12:00 Uhr"}),Object(a.jsx)("h4",{children:"Sonntag"}),Object(a.jsx)("p",{children:"geschlossen"})]})]}))},F=function(e){Object(d.a)(i,e);var t=Object(m.a)(i);function i(e){var a;return Object(o.a)(this,i),(a=t.call(this,e)).state={popupOpen:!1},a.openPopup=a.openPopup.bind(Object(u.a)(a)),a.closePopup=a.closePopup.bind(Object(u.a)(a)),a}return Object(l.a)(i,[{key:"openPopup",value:function(){this.setState({popupOpen:!0})}},{key:"closePopup",value:function(){this.setState({popupOpen:!1})}},{key:"render",value:function(){return Object(a.jsx)(f.BrowserRouter,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(S,{show:this.state.popupOpen,onHide:this.closePopup}),Object(a.jsx)(b,{}),Object(a.jsx)("section",{className:"main",children:Object(a.jsxs)(q.g,{children:[Object(a.jsx)(q.d,{path:"/contact",children:Object(a.jsx)(h,{})}),Object(a.jsx)(q.d,{path:"",children:Object(a.jsx)(v,{openPopup:this.openPopup})})]})}),Object(a.jsx)(p,{})]})})}}]),i}(c.a.Component),k=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,64)).then((function(t){var i=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,n=t.getTTFB;i(e),a(e),s(e),c(e),n(e)}))};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(F,{})}),document.getElementById("root")),k()}},[[62,1,2]]]);
//# sourceMappingURL=main.a06e6a45.chunk.js.map