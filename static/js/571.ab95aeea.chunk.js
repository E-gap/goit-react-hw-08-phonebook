"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[571],{571:function(e,t,n){n.r(t),n.d(t,{Contacts:function(){return k},default:function(){return L}});var a=n(52),s=n(434),r="ContactForm_contactForm__y0Rca",c="ContactForm_block__1h2W+",i=n(184),l=function(){var e=(0,s.I0)();return(0,i.jsxs)("form",{className:"".concat(r," ").concat(c),onSubmit:function(t){t.preventDefault();var n={name:t.target.elements.name.value,number:t.target.elements.phone.value};e((0,a.el)(n)),t.target.reset()},children:[(0,i.jsxs)("label",{className:c,children:["Name",(0,i.jsx)("input",{className:c,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,i.jsxs)("label",{className:c,children:["Phone Number",(0,i.jsx)("input",{className:c,type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,i.jsx)("button",{type:"Submit",children:"Add contact"})]})},o=n(126),u="ContactListItem_listItem__upGA2",m="ContactListItem_icon__44oEf",h="ContactListItem_buttonDelete__965SC",d="ContactListItem_text__QXs1+",p=function(e){var t=e.id,n=e.name,r=e.number,c=(0,s.I0)();return(0,i.jsxs)("li",{className:u,children:[(0,i.jsxs)("div",{className:d,children:[(0,i.jsx)("span",{className:m,children:(0,i.jsx)(o.rJz,{style:{height:"15px",width:"15px",fill:"green"}})}),n,": ",r]}),(0,i.jsx)("button",{type:"button",className:h,onClick:function(){c((0,a._f)(t))},children:"Delete"})]})},x="ContactList_contactList__UFVCg",_="ContactList_warning__kHXBR",f=n(351),j=function(){var e=(0,s.v9)(f.Af),t=(0,s.v9)(f.xU),n=(0,s.v9)(f.AD),a=(0,s.v9)(f.Q8),r=e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})),c=r.length>0||t,l=0===r.length&&e.length>0;return(0,i.jsxs)("div",{children:[c&&(0,i.jsx)("ul",{className:x,children:r.map((function(e){var t=e.id,n=e.name,a=e.number;return(0,i.jsx)(p,{id:t,name:n,number:a},t)}))}),l&&(0,i.jsx)("p",{className:_,children:"There are not such contacts in this phonebook"}),0===e.length&&a&&(0,i.jsx)("p",{className:_,children:"There are not contacts in this phonebook"})]})},b=n(634),v="Filter_filterLabel__+pnW-",C="Filter_filterInput__1Cysk",g=function(){var e=(0,s.I0)(),t=(0,s.v9)(f.AD);return(0,i.jsx)("div",{children:(0,i.jsxs)("label",{className:v,children:["Find contacts by name",(0,i.jsx)("input",{className:C,type:"text",name:"filter",value:t,onChange:function(t){return e((0,b.M)({filter:t.target.value}))}})]})})},N=n(791),y="Contacts_text__kop-x",k=function(){var e=(0,s.I0)(),t=(0,s.v9)(f.zh),n=(0,s.v9)(f.xU);return(0,N.useEffect)((function(){e((0,a.yF)())}),[e]),(0,i.jsxs)("div",{style:{height:"100vh",justifyContent:"center",alignItems:"center",fontSize:40,color:"#010101",paddingLeft:"50px"},children:[(0,i.jsx)("p",{className:y,children:"Phonebook"}),(0,i.jsx)(l,{}),(0,i.jsx)("p",{className:y,children:"Contacts"}),(0,i.jsx)(g,{}),n&&(0,i.jsx)("h2",{children:"Loading contacts...."}),t?(0,i.jsxs)("h2",{style:{color:"red"},children:["An error occured: ",t]}):(0,i.jsx)(j,{})]})},L=k}}]);
//# sourceMappingURL=571.ab95aeea.chunk.js.map