(this.webpackJsonpchatbot=this.webpackJsonpchatbot||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n(10),c=n.n(o),r=n(5),l=n.n(r),s=(n(21),n(22),n(1)),i=n(6),d=n(11),b=n(0),j=function(e){var t=Object(a.useState)({name:"",year:"",collagecode:"",shift:"",branch:"",rollno:""}),n=Object(d.a)(t,2),o=n[0],c=n[1],r=function(e){console.log(e.target.value),c((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(i.a)({},e.target.name,e.target.value))}))};return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("form",{children:[Object(b.jsx)("label",{children:"Student Name: "}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",name:"name",value:o.name,onChange:r}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:"Admission Year: "}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",name:"year",value:o.year,onChange:r}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:"Collage Code: "}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",name:"collagecode",value:o.collagecode,onChange:r}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:"Shift: "}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",name:"shift",value:o.shift,onChange:r}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:"Branch Code: "}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",name:"branch",value:o.branch,onChange:r}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:"Roll No: "}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"text",name:"rollno",value:o.rollno,onChange:r}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{className:"btn btn-primary my-3",onClick:function(t){if(t.preventDefault(),console.log(o.name),""===o.name)e.actionProvider.EnrollmentFormValidation("name");else if(""===o.year)e.actionProvider.EnrollmentFormValidation("year");else if(""===o.collagecode)e.actionProvider.EnrollmentFormValidation("collage code");else if(""===o.shift&&(o.shift="01"),""===o.branch)e.actionProvider.EnrollmentFormValidation("branch");else if(""===o.rollno)e.actionProvider.EnrollmentFormValidation("rollno");else{var n=o;e.actionProvider.EnrollSubmit(n)}},children:"submit"})]})})},u=function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("ol",{children:e.SoftwareDevelopmentState.map((function(e,t){return Object(b.jsx)("li",{children:e})}))})})},m=function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("ol",{children:e.WebDevelopmentState.map((function(e,t){return Object(b.jsx)("li",{children:e})}))})})},h="keyur kakadiya",O={botName:h,customStyles:{botMessageBox:{backgroundColor:"#376B7E"},chatButton:{backgroundColor:"#5ccc9d"}},initialMessages:[Object(r.createChatBotMessage)("hii, i am ".concat(h,"."))],state:{WebDevelopmentState:["HTML","CSS","JAVASCRIPT","BOOTSTRAP","JQUERY & AJAX","SASS","REACT","REDUX","NODEJS","EXPRESS","MONGODB & MONGOOSE"],SoftwareDevelopmentState:["JAVA","PYTHON","DATA-STRUCTURE & ALGORITHAM","SECURITY","PENETRATION TESTING","ANDROID/IOS SDK","DATA ANALYSIS","API & JSON"]},widgets:[{widgetName:"EnrollmentNo",widgetFunc:function(e){return Object(b.jsx)(j,Object(s.a)({},e))},mapStateToProps:["Enrollment"]},{widgetName:"WebDevelopment",widgetFunc:function(e){return Object(b.jsx)(m,Object(s.a)({},e))},mapStateToProps:["WebDevelopmentState"]},{widgetName:"SoftwareDevelopment",widgetFunc:function(e){return Object(b.jsx)(u,Object(s.a)({},e))},mapStateToProps:["SoftwareDevelopmentState"]}]},f=n(8),p=function e(t,n){var a=this;Object(f.a)(this,e),this.parse=function(e){var t=e.toLowerCase();return t.includes("enroll")||t.includes("rollment")||t.includes("enrollmentno")||t.includes("roll no")||t.includes("roll")||t.includes("roll number")||t.includes("enrollment no")||t.includes("enrollment number")?a.actionProvider.EnrollmentNumber():t.includes("web")||t.includes("webdevelop")||t.includes("website")||t.includes("website development")||t.includes("web app")||t.includes("web application")||t.includes("webdevelopment")||t.includes("web development")?a.actionProvider.WebHandler():t.includes("android")||t.includes("ios")||t.includes("flutter")||t.includes("software")||t.includes("softwaredevelop")||t.includes("software develop")||t.includes("softwaresite development")||t.includes("software app")||t.includes("software application")||t.includes("softwaredevelopment")||t.includes("software development")?a.actionProvider.SoftwareHandler():a.actionProvider.handleDefault()},this.actionProvider=t,this.state=n},v=n(9),g=function e(t,n,a){var o=this;Object(f.a)(this,e),this.addMessageToBotState=function(e){Array.isArray(e)?o.setState((function(t){return Object(s.a)(Object(s.a)({},t),{},{messages:[].concat(Object(v.a)(t.messages),Object(v.a)(e))})})):o.setState((function(t){return Object(s.a)(Object(s.a)({},t),{},{messages:[].concat(Object(v.a)(t.messages),[e])})}))},this.EnrollmentNumber=function(){var e=o.createChatBotMessage("enter your information for generate enrollment no.",{withAvatar:!0,widget:"EnrollmentNo"});o.addMessageToBotState(e)},this.EnrollSubmit=function(e){var t=o.createChatBotMessage("enrollment no of ".concat(e.name,": ").concat(e.year%100).concat(e.collagecode).concat(e.shift).concat(e.branch).concat(e.rollno),{withAvatar:!0});o.addMessageToBotState(t)},this.EnrollmentFormValidation=function(e){var t=o.createChatBotMessage("enter ".concat(e," for create enrollment number"),{withAvatar:!0});o.addMessageToBotState(t)},this.WebHandler=function(){var e=o.createChatBotMessage("cources for web development:",{withAvatar:!0,widget:"WebDevelopment"});o.addMessageToBotState(e)},this.SoftwareHandler=function(){var e=o.createChatBotMessage("cources for software development:",{withAvatar:!0,widget:"SoftwareDevelopment"});o.addMessageToBotState(e)},this.handleDefault=function(){var e=o.createChatBotMessage("How can I help?",{withAvatar:!0});o.addMessageToBotState(e)},this.createChatBotMessage=t,this.setState=n,this.createClientMessage=a};n(26);var x=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("h1",{children:["Simple chatbot made by ",Object(b.jsx)("span",{style:{color:"red"},children:"keyur kakadiya"})]})}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h4",{children:"1. for find your enrollment no. in gtu enter enrollment no."}),Object(b.jsx)("h5",{children:"fill form and submit your responce "})]}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("h4",{children:"2. want to know  about web development type web development"})}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("h4",{children:"3. want to know about software development type software development"})}),Object(b.jsx)("div",{className:"App mx-auto col-md-6 col-sm-8 col-lg-4 cpl-xl-3 my-5",children:Object(b.jsx)(l.a,{config:O,messageParser:p,actionProvider:g})})]})})};c.a.render(Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.8aa15c0c.chunk.js.map