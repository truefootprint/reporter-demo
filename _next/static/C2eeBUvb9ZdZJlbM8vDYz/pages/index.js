(window.webpackJsonp=window.webpackJsonp||[]).push([["d0a3"],{H0SL:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=t("cMU6");return{page:e.default||e}}])},cMU6:function(e,a,t){"use strict";t.r(a);var n=t("doui"),o=t("q1tI"),l=t.n(o),i=t("oHpw"),s=t("Va/N"),r=t("2fRV"),c=t.n(r),m=function(){return l.a.createElement("div",{className:c.a.loading},l.a.createElement("div",{className:c.a.logo},l.a.createElement(s.a,{variant:"stackedText"})),l.a.createElement("img",{className:c.a.spinner,src:"/static/images/spinner.gif"}))},u=t("U84u"),p=t.n(u),d=t("t6UQ"),h=t.n(d),g=function(){return l.a.createElement("p",{className:h.a.footer},"© TrueFootprint")},E=function(e){var a=e.setPage,t=e.content,n=t.bullet_point1||"",o=t.bullet_point2||"",i=t.bullet_point3||"";return l.a.createElement("div",{className:p.a.overview},l.a.createElement("h3",null,t.title),l.a.createElement("h4",null,t.subtitle),l.a.createElement("p",null,t.paragraph1),l.a.createElement("p",null,t.paragraph2),l.a.createElement("img",{className:p.a.map,src:t.image_path}),n.length>0&&o.length>0&&i.length>0&&l.a.createElement("ul",{className:p.a.bullets},n.length>0&&l.a.createElement("li",null,t.bullet_point1),o.length>0&&l.a.createElement("li",null,t.bullet_point2),i.length>0&&l.a.createElement("li",null,t.bullet_point3)),l.a.createElement("a",{className:p.a.spec},t.specification),l.a.createElement("div",{className:p.a.center,onClick:function(){return a("form")}},l.a.createElement("button",{className:p.a.call_to_action},t.call_to_action)),l.a.createElement(g,null))},q=t("Vf1Q"),f=t.n(q),N=function(e){var a=e.duration;return l.a.createElement("div",{className:"".concat(f.a.spinner," ").concat(f.a["duration_".concat(a)])},l.a.createElement("img",{className:f.a.spinner,src:"/static/images/spinner.gif"}))};N.defaultProps={duration:2};var b=N,v=t("sPGu"),w=t.n(v),y=function(e){var a=e.placeholder,t=Object(o.useState)(),i=Object(n.default)(t,2),s=i[0],r=i[1],c=Object(o.useState)(),m=Object(n.default)(c,2),u=m[0],p=m[1],d=Object(o.useRef)();return s?l.a.createElement("div",{className:w.a.photo},l.a.createElement("img",{src:s}),l.a.createElement("span",null,u)):l.a.createElement("div",{className:w.a.photo},l.a.createElement("button",{className:w.a.call_to_action,onClick:function(){return d.current.click()}},a),l.a.createElement("input",{ref:d,type:"file",accept:"image/*;capture=camera",onChange:function(e){var a=e.target.files[0];r(URL.createObjectURL(a)),p((new Date).toLocaleString())}}))},k=t("yE6y"),_=t.n(k),P=function(e){var a=e.setPage,t=e.content,n=t.section1,o=t.section2,i=t.section3,s=t.section4,r=t.section5,c=t.section6,m=t.section7;return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,null),l.a.createElement("div",{className:_.a.form},l.a.createElement("h3",null,t.title),l.a.createElement("a",{className:_.a.back,onClick:function(){return a("overview")}},"< ",t.back),l.a.createElement("p",{className:_.a.intro},t.intro),n&&l.a.createElement("div",{className:"".concat(_.a.section," ").concat(_.a.first)},l.a.createElement("h5",null,n.title),(n.question1||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},n.question1),l.a.createElement("div",{className:_.a.answer},l.a.createElement("input",{type:"text",placeholder:n.placeholder1})))," "),(n.question2||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},n.question2),l.a.createElement("div",{className:_.a.answer},l.a.createElement("input",{type:"text",placeholder:n.placeholder2})))," "),(n.question3||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},n.question3),l.a.createElement("div",{className:_.a.answer},l.a.createElement("input",{type:"text",placeholder:n.placeholder3})))," "),(n.question4||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},n.question4),l.a.createElement("div",{className:_.a.answer},l.a.createElement("input",{type:"text",placeholder:n.placeholder4})))," "),(n.question5||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},n.question5),l.a.createElement("div",{className:_.a.answer},l.a.createElement("input",{type:"text",placeholder:n.placeholder5})))," "),(n.question6||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},n.question6),l.a.createElement("div",{className:_.a.answer},l.a.createElement("label",{className:_.a.radio},l.a.createElement("input",{type:"radio",name:"group-1"}),n.option6a),l.a.createElement("label",{className:_.a.radio},l.a.createElement("input",{type:"radio",name:"group-1"}),n.option6b)))," "),(n.question7||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},n.question7),l.a.createElement("div",{className:_.a.answer},l.a.createElement(y,{placeholder:n.placeholder7})))," "),(n.question8||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"".concat(_.a.field," ").concat(_.a.any_other_comments)},l.a.createElement("span",{className:_.a.question},n.question8)),l.a.createElement("div",{className:_.a.offset},l.a.createElement("textarea",null))," ")),o&&l.a.createElement("div",{className:"".concat(_.a.section," ").concat(_.a.second)},l.a.createElement("h5",null,o.title),(o.question1||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},o.question1),l.a.createElement("div",{className:_.a.answer},l.a.createElement("label",{className:_.a.radio},l.a.createElement("input",{type:"radio",name:"group-2"}),o.option1a),l.a.createElement("label",{className:_.a.radio},l.a.createElement("input",{type:"radio",name:"group-2"}),o.option1b)))," "),(o.question2||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},o.question2),l.a.createElement("div",{className:_.a.answer},l.a.createElement("label",{className:_.a.radio},l.a.createElement("input",{type:"radio",name:"group-3"}),o.option2a),l.a.createElement("label",{className:_.a.radio},l.a.createElement("input",{type:"radio",name:"group-3"}),o.option2b)))," "),(o.question3||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},o.question3),l.a.createElement("div",{className:_.a.answer},l.a.createElement("label",{className:_.a.radio},l.a.createElement("input",{type:"radio",name:"group-4"}),o.option3a),l.a.createElement("label",{className:_.a.radio},l.a.createElement("input",{type:"radio",name:"group-4"}),o.option3b)))," "),(o.question4||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},o.question4),l.a.createElement("div",{className:_.a.answer},l.a.createElement("input",{type:"date"})))," "),(o.question5||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},o.question5),l.a.createElement("div",{className:_.a.answer},l.a.createElement(y,{placeholder:o.placeholder5})))," "),(o.question6||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"".concat(_.a.field," ").concat(_.a.any_other_comments)},l.a.createElement("span",{className:_.a.question},o.question6)),l.a.createElement("div",{className:_.a.offset},l.a.createElement("textarea",null))," ")),i&&l.a.createElement("div",{className:"".concat(_.a.section," ").concat(_.a.third)},l.a.createElement("h5",null,i.title),(i.question1||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},i.question1),l.a.createElement("div",{className:_.a.answer},l.a.createElement("label",{className:_.a.radio},l.a.createElement("input",{type:"radio",name:"group-5"}),i.option1a),l.a.createElement("label",{className:_.a.radio},l.a.createElement("input",{type:"radio",name:"group-5"}),i.option1b)))," "),(i.question2||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},i.question2),l.a.createElement("div",{className:_.a.answer},l.a.createElement("label",{className:_.a.radio},l.a.createElement("input",{type:"radio",name:"group-6"}),i.option2a),l.a.createElement("label",{className:_.a.radio},l.a.createElement("input",{type:"radio",name:"group-6"}),i.option2b)))," "),(i.question3||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},i.question3),l.a.createElement("div",{className:_.a.answer},l.a.createElement("label",{className:_.a.radio},l.a.createElement("input",{type:"radio",name:"group-7"}),i.option3a),l.a.createElement("label",{className:_.a.radio},l.a.createElement("input",{type:"radio",name:"group-7"}),i.option3b)))," "),(i.question4||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},i.question4),l.a.createElement("div",{className:_.a.answer},l.a.createElement("label",{className:_.a.radio},l.a.createElement("input",{type:"radio",name:"group-8"}),i.option4a),l.a.createElement("label",{className:_.a.radio},l.a.createElement("input",{type:"radio",name:"group-8"}),i.option4b)))," "),(i.question5||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},i.question5),l.a.createElement("div",{className:_.a.answer},l.a.createElement("label",{className:_.a.radio},l.a.createElement("input",{type:"radio",name:"group-9"}),i.option5a),l.a.createElement("label",{className:_.a.radio},l.a.createElement("input",{type:"radio",name:"group-9"}),i.option5b)))," "),(i.question6||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},i.question6),l.a.createElement("div",{className:_.a.answer},l.a.createElement(y,{placeholder:i.placeholder6})))," "),(i.question7||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"".concat(_.a.field," ").concat(_.a.any_other_comments)},l.a.createElement("span",{className:_.a.question},i.question7)),l.a.createElement("div",{className:_.a.offset},l.a.createElement("textarea",null))," ")),s&&l.a.createElement("div",{className:"".concat(_.a.section," ").concat(_.a.fourth)},l.a.createElement("h5",null,s.title),(s.question1||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},s.question1),l.a.createElement("div",{className:"".concat(_.a.answer," ").concat(_.a.project_progress)},l.a.createElement("label",{className:_.a.radio},l.a.createElement("input",{type:"radio",name:"group-10"}),s.option1a),l.a.createElement("label",{className:_.a.radio},l.a.createElement("input",{type:"radio",name:"group-10"}),s.option1b),l.a.createElement("label",{className:_.a.radio},l.a.createElement("input",{type:"radio",name:"group-10"}),s.option1c)))," "),(s.question2||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},s.question2),l.a.createElement("div",{className:_.a.answer},l.a.createElement(y,{placeholder:s.placeholder2})))," "),(s.question3||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"".concat(_.a.field," ").concat(_.a.any_other_comments)},l.a.createElement("span",{className:_.a.question},s.question3)),l.a.createElement("div",{className:_.a.offset},l.a.createElement("textarea",null))," ")),r&&l.a.createElement("div",{className:"".concat(_.a.section," ").concat(_.a.first)},l.a.createElement("h5",null,r.title),(r.question1||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},r.question1),l.a.createElement("div",{className:_.a.answer},l.a.createElement("input",{type:"text",placeholder:r.placeholder1})))," "),(r.question2||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},r.question2),l.a.createElement("div",{className:_.a.answer},l.a.createElement("input",{type:"text",placeholder:r.placeholder2})))," "),(r.question3||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},r.question3),l.a.createElement("div",{className:_.a.answer},l.a.createElement("input",{type:"text",placeholder:r.placeholder3})))," "),(r.question4||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},r.question4),l.a.createElement("div",{className:_.a.answer},l.a.createElement("input",{type:"text",placeholder:r.placeholder4})))," "),(r.question5||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},r.question5),l.a.createElement("div",{className:_.a.answer},l.a.createElement("input",{type:"text",placeholder:r.placeholder5})))," "),(r.question6||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},r.question6),l.a.createElement("div",{className:_.a.answer},l.a.createElement("input",{type:"text",placeholder:r.placeholder6})))," "),(r.question8||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"".concat(_.a.field," ").concat(_.a.any_other_comments)},l.a.createElement("span",{className:_.a.question},r.question8)),l.a.createElement("div",{className:_.a.offset},l.a.createElement("textarea",null))," ")),c&&l.a.createElement("div",{className:"".concat(_.a.section," ").concat(_.a.first)},l.a.createElement("h5",null,c.title),(c.question1||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},c.question1),l.a.createElement("div",{className:_.a.answer},l.a.createElement("input",{type:"text",placeholder:c.placeholder1})))," "),(c.question2||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},c.question2),l.a.createElement("div",{className:_.a.answer},l.a.createElement("input",{type:"text",placeholder:c.placeholder2})))," "),(c.question3||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},c.question3),l.a.createElement("div",{className:_.a.answer},l.a.createElement("input",{type:"text",placeholder:c.placeholder3})))," "),(c.question4||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},c.question4),l.a.createElement("div",{className:_.a.answer},l.a.createElement("input",{type:"text",placeholder:c.placeholder4})))," "),(c.question5||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},c.question5),l.a.createElement("div",{className:_.a.answer},l.a.createElement("input",{type:"text",placeholder:c.placeholder5})))," "),(c.question6||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},c.question6),l.a.createElement("div",{className:_.a.answer},l.a.createElement("input",{type:"text",placeholder:c.placeholder6})))," "),(c.question7||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},c.question7),l.a.createElement("div",{className:_.a.answer},l.a.createElement("input",{type:"text",placeholder:c.placeholder8})))," "),(c.question8||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},c.question8),l.a.createElement("div",{className:_.a.answer},l.a.createElement("input",{type:"text",placeholder:c.placeholder8})))," "),(c.question9||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},c.question9),l.a.createElement("div",{className:_.a.answer},l.a.createElement("input",{type:"text",placeholder:c.placeholder9})))," "),(c.question10||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},c.question10),l.a.createElement("div",{className:_.a.answer},l.a.createElement(y,{placeholder:c.placeholder10})))," "),(c.question11||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"".concat(_.a.field," ").concat(_.a.any_other_comments)},l.a.createElement("span",{className:_.a.question},c.question11)),l.a.createElement("div",{className:_.a.offset},l.a.createElement("textarea",null))," ")),m&&l.a.createElement("div",{className:"".concat(_.a.section," ").concat(_.a.third)},l.a.createElement("h5",null,m.title),(m.question1||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},m.question1),l.a.createElement("div",{className:_.a.answer},l.a.createElement("label",{className:_.a.radio},l.a.createElement("input",{type:"radio",name:"group-5"}),m.option1a),l.a.createElement("label",{className:_.a.radio},l.a.createElement("input",{type:"radio",name:"group-5"}),m.option1b)))," "),(m.question2||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},m.question2),l.a.createElement("div",{className:_.a.answer},l.a.createElement("label",{className:_.a.radio},l.a.createElement("input",{type:"radio",name:"group-6"}),m.option2a),l.a.createElement("label",{className:_.a.radio},l.a.createElement("input",{type:"radio",name:"group-6"}),m.option2b)))," "),(m.question3||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},m.question3),l.a.createElement("div",{className:_.a.answer},l.a.createElement("label",{className:_.a.radio},l.a.createElement("input",{type:"radio",name:"group-7"}),m.option3a),l.a.createElement("label",{className:_.a.radio},l.a.createElement("input",{type:"radio",name:"group-7"}),m.option3b)))," "),(m.question4||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},m.question4),l.a.createElement("div",{className:_.a.answer},l.a.createElement("label",{className:_.a.radio},l.a.createElement("input",{type:"radio",name:"group-8"}),m.option4a),l.a.createElement("label",{className:_.a.radio},l.a.createElement("input",{type:"radio",name:"group-8"}),m.option4b)))," "),(m.question5||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},m.question5),l.a.createElement("div",{className:_.a.answer},l.a.createElement("label",{className:_.a.radio},l.a.createElement("input",{type:"radio",name:"group-9"}),m.option5a),l.a.createElement("label",{className:_.a.radio},l.a.createElement("input",{type:"radio",name:"group-9"}),m.option5b)))," "),(m.question6||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:_.a.field},l.a.createElement("span",{className:_.a.question},m.question6),l.a.createElement("div",{className:_.a.answer},l.a.createElement(y,{placeholder:m.placeholder6})))," "),(m.question7||"").length>0&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"".concat(_.a.field," ").concat(_.a.any_other_comments)},l.a.createElement("span",{className:_.a.question},m.question7)),l.a.createElement("div",{className:_.a.offset},l.a.createElement("textarea",null))," ")),l.a.createElement("div",{className:_.a.center},l.a.createElement("button",{className:_.a.call_to_action,onClick:function(){return a("thanks")}},t.call_to_action)),l.a.createElement(g,null)))},F=t("1OJW"),S=t.n(F),j=function(e){var a=e.setPage,t=e.setLoading,i=e.setProject,r=e.setLanguage,c=e.content,m=Object(o.useState)(S.a.select),u=Object(n.default)(m,2),p=u[0],d=u[1],h=Object(o.useRef)(null);return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,null),l.a.createElement("div",{className:S.a.thanks},l.a.createElement("p",{className:S.a.thank_you},c.title),l.a.createElement("p",{className:S.a.received},c.paragraph1),l.a.createElement("p",{className:S.a.received},c.paragraph2),l.a.createElement("a",{className:S.a.logo,onClick:function(){h.current.focus(),d("".concat(S.a.select," ").concat(S.a.selected))}},l.a.createElement(s.a,{variant:"stackedText"})),l.a.createElement("div",{className:S.a.footer},l.a.createElement(g,null))),l.a.createElement("select",{ref:h,className:p,onChange:function(){var e=h.current.value.split(","),o=Object(n.default)(e,2),l=o[0],s=o[1];d(S.a.select),i(l),r(s),a("overview"),t(!0)}},l.a.createElement("option",{selected:!0,disabled:!0},"Choose an option:"),l.a.createElement("option",{value:"agri_farmer,english"},"Agri Farmer: en"),l.a.createElement("option",{value:"agri_trainer,english"},"Agri Trainer: en"),l.a.createElement("option",{value:"agri_monitor,english"},"Agri Monitor: en"),l.a.createElement("option",{value:"school_construction,english"},"School Construction: en"),l.a.createElement("option",{value:"school_construction,swahili"},"School Construction: sw"),l.a.createElement("option",{value:"school_ongoing,english"},"School Ongoing"),l.a.createElement("option",{value:"pump,english"},"Pump"),l.a.createElement("option",{value:"workshop,english"},"Workshop")))},A={english:{agri_farmer:{overview:{title:"Coffee farming",subtitle:"Azizi,",paragraph1:"Thank you for taking part in the agricultural training. We hope you are succeeding in applying your knowledge from the course.",paragraph2:"We'd like to ask you some questions about the progress on your farm.",image_path:"/static/images/school-map.png",specification:"View your training materials",call_to_action:"Start"},form:{title:"Send an update",back:"back",intro:"Please answer the following questions about your farming practices.\n                If you are unsure of an answer, you can leave it blank.\n                Please refer to the training materials when in doubt.",call_to_action:"Submit answers",section1:{title:"Inputs",question1:"How much compost did you use from your plot?",placeholder1:"e.g. 15kg",question2:"How much fertiliser?",placeholder2:"e.g. 2 liters",question3:"Pesticides?",placeholder3:"e.g. 1 liter",question4:"Seedlings planted?",placeholder4:"e.g. 50",question5:"Rainwater captured?",placeholder5:"e.g. 3",question6:"Most coffee trees shaded?",option6a:"Yes",option6b:"No",question7:"Photo:",placeholder7:"Take a photo",question8:"Any other comments:"},section5:{title:"Outputs",question1:"Total harvest:",placeholder1:"e.g. 500kg",question2:"How much grade 1?",placeholder2:"e.g. 50kg",question3:"How much grade 2?",placeholder3:"e.g. 300kg",question4:"How much grade 3?",placeholder4:"e.g. 100kg",question5:"How much grade 4?",placeholder5:"e.g. 50kg",question6:"Total amount sold:",placeholder6:"e.g. 450kg",question7:"Total price:",placeholder7:"e.g. 1000 BIF",question8:"Any other comments:"}},thanks:{title:"Thank you",paragraph1:"We have received your answers.",paragraph2:"See you next week."}},agri_trainer:{overview:{title:"Coffee training",subtitle:"Assessment",paragraph1:"It's time to assess Azizi’s use of the farming best practices.",paragraph2:"We'd like to ask you some questions about the progress on his farm.",image_path:"/static/images/school-map.png",specification:"View your training materials",call_to_action:"Start"},form:{title:"Send an update",back:"back",intro:"Please answer the following questions about Azizi’s farming practices.\n                If you are unsure of an answer, you can leave it blank.\n                Please refer to the training materials when in doubt.",call_to_action:"Submit answers",section6:{title:"Ratings",question1:"How would you rate the use of best agricultural practices?",placeholder1:"1 - 10",question2:"Use of composting plot:",placeholder2:"1 - 10",question3:"Use of mulching:",placeholder3:"1 - 10",question4:"Effective shading of trees:",placeholder4:"1 - 10",question5:"Rainwater collection:",placeholder5:"1 - 10",question6:"Use of fertilisers:",placeholder6:"1 - 10",question7:"Use of pesticides:",placeholder7:"1 - 10",question8:"Use of water:",placeholder8:"1 - 10",question9:"Quality of the soil:",placeholder9:"1 - 10",question10:"Photo:",placeholder10:"Take a photo",question11:"Any other comments:"}},thanks:{title:"Thank you",paragraph1:"We have received your answers for farmer Azizi.",paragraph2:"See you next time."}},agri_monitor:{overview:{title:"Farming",paragraph1:"Thank you for being a monitor.",paragraph2:"We'd like to ask you some questions about the village and Azizi's farm.",image_path:"/static/images/school-map.png",specification:"View your training materials",call_to_action:"Start"},form:{title:"Send an update",back:"back",intro:"Please answer the following questions about the village and Azizi's farm.\n                If you are unsure of an answer, you can leave it blank.",call_to_action:"Submit answers",section2:{title:"Air quality in the village",question1:"Is the air in the village clean?",option1a:"Yes",option1b:"No",question2:"Are there any foul odours?",option2a:"Yes",option2b:"No",question6:"Any other comments:"},section3:{title:"Water quality in the village",question1:"Is the drinking water in the village clean?",option1a:"Yes",option1b:"No",question2:"Is the stream clean?",option2a:"Yes",option2b:"No",question3:"Are there any foul odours?",option3a:"Yes",option3b:"No",question4:"Are there many dead fish in the stream?",option4a:"Yes",option4b:"No",question6:"Photo:",placeholder6:"Choose a file",question7:"Any other comments:"},section7:{title:"On Azizi's farm",question1:"Any signs of soil pollution?",option1a:"Yes",option1b:"No",question2:"Any signs of water pollution?",option2a:"Yes",option2b:"No",question3:"Any signs of air pollution?",option3a:"Yes",option3b:"No",question4:"Are there children working?",option4a:"Yes",option4b:"No",question6:"Photo:",placeholder6:"Choose a file",question7:"Any other comments:"}},thanks:{title:"Thank you",paragraph1:"We have received your answers.",paragraph2:"Now go to Nyah's farm."}},school_construction:{overview:{title:"Bilobilo",subtitle:"Project 1: School",paragraph1:"The first of three projects to be built in the Bilobilo area will be a\n                     three-classroom school, with water, electricity and boy and girl toilets.",paragraph2:"The building is to be built on the intersection of the N3 and the R529:",image_path:"/static/images/school-map.png",bullet_point1:"The foundation has to be solid cement",bullet_point2:"There must be brick walls with a slated roof",bullet_point3:"Length: 18m, width: 6m",specification:"View full specification and contract",call_to_action:"Start"},form:{title:"Send an update",back:"back",intro:"Please answer the following questions about the progress of the project.\n                If you are unsure of an answer, you can leave it blank.\n                Please refer to training materials when in doubt.",call_to_action:"Submit answers",section1:{title:"Building",question1:"Wall length in meters:",placeholder1:"e.g. 5",question2:"Wall width in meters:",placeholder2:"e.g. 5",question3:"Number of toilets:",placeholder3:"e.g. 3",question4:"Number of washbasins:",placeholder4:"e.g. 3",question5:"Number of rooms:",placeholder5:"e.g. 3",question6:"Electricity works:",option6a:"Yes",option6b:"No",question7:"Photo:",placeholder7:"Choose a file",question8:"Any other comments:"},section2:{title:"Cement",question1:"Floats in water:",option1a:"Yes",option1b:"No",question2:"Contains lumps:",option2a:"Yes",option2b:"No",question3:"Strength test:",option3a:"Pass",option3b:"Fail",question4:"Pack date:",question5:"Photo:",placeholder5:"Choose a file",question6:"Any other comments:"},section3:{title:"Bricks",question1:"Shape is uniform:",option1a:"Yes",option1b:"No",question2:"Hardness test:",option2a:"Pass",option2b:"Fail",question3:"Sound test:",option3a:"Pass",option3b:"Fail",question4:"Structure test:",option4a:"Pass",option4b:"Fail",question5:"Water test:",option5a:"Pass",option5b:"Fail",question6:"Photo:",placeholder6:"Choose a file",question7:"Any other comments:"},section4:{title:"Overall",question1:"Progress of project:",option1a:"Good",option1b:"Medium",option1c:"Bad",question2:"Photo:",placeholder2:"Choose a file",question3:"Any other comments:"}},thanks:{title:"Thank you",paragraph1:"We have received your answers.",paragraph2:"We look forward to your next update."}},school_ongoing:{overview:{title:"Bilobilo",subtitle:"Project 1: School",paragraph1:"With the three-classroom school built, focus is now on the goal of teaching children.",paragraph2:"",image_path:"/static/images/school-map.png",bullet_point1:"There should be 25 students",bullet_point2:"There should be a textbook for each student",bullet_point3:"Teacher should be qualified",specification:"View full specification and contract",call_to_action:"Start"},form:{title:"Send an update",back:"back",intro:"Please answer the following questions about the status of the project.\n                If you are unsure of an answer, you can leave it blank.\n                Please refer to training materials when in doubt.",call_to_action:"Submit answers",section1:{title:"Teaching",question1:"Nr of textbooks:",placeholder1:"e.g. 5",question2:"Nr of desks:",placeholder2:"e.g. 5",question3:"Nr of chairs:",placeholder3:"e.g. 3",question6:"Qualified teacher:",option6a:"Yes",option6b:"No",question7:"Photo:",placeholder7:"Choose a file",question8:"Any other comments:"},section2:{title:"Building",question1:"Serious damage:",option1a:"Yes",option1b:"No",question2:"Working electricity:",option2a:"Yes",option2b:"No",question3:"Running water:",option3a:"Yes",option3b:"No",question5:"Photo:",placeholder5:"Choose a file",question6:"Any other comments:"},section3:{title:"Students",question1:"25 students present:",option1a:"Yes",option1b:"No",question7:"Any other comments:"},section4:{title:"Overall",question1:"Success of project:",option1a:"Good",option1b:"Medium",option1c:"Bad",question2:"Photo:",placeholder2:"Choose a file",question3:"Any other comments:"}},thanks:{title:"Thank you",paragraph1:"We have received your answers.",paragraph2:"We look forward to your next update."}},pump:{overview:{title:"Rusenda",subtitle:"Project 2: Pump",paragraph1:"A hand pump needs to be built in the Rusenda area in NW Burundi.",paragraph2:"The exact location is behind the school on the intersection of RN10 and the R.P.107:",image_path:"/static/images/pump-map.png",bullet_point1:"The hole has to be 3 meters deep, 25 centimeter in diameter",bullet_point2:"An area of 2 by 2 meters of concrete to surround it",bullet_point3:"Pump handle height: 1 meter",specification:"View full specification and contract",call_to_action:"Start"},form:{title:"Send an update",back:"back",intro:"Please answer the following questions about the progress of the project.\n                If you are unsure of an answer, you can leave it blank.\n                Please refer to training materials when in doubt.",call_to_action:"Submit answers",section1:{title:"Hole",question1:"Depth in meters:",placeholder1:"e.g. 3",question2:"Diameter in cm:",placeholder2:"e.g. 25",question3:"Width cement block in cm:",placeholder3:"e.g. 50",question4:"Length cement block in cm:",placeholder4:"e.g. 50",question7:"Photo:",placeholder7:"Choose a file",question8:"Any other comments:"},section2:{title:"Pipe",question1:"Plastic pipe:",option1a:"Yes",option1b:"No",question2:"Handpump present:",option2a:"Yes",option2b:"No",question3:"Handpump working:",option3a:"Yes",option3b:"No",question5:"Photo:",placeholder5:"Choose a file",question6:"Any other comments:"},section3:{title:"Water",question1:"Volume:",option1a:"Good",option1b:"Poor",question2:"Clear:",option2a:"Yes",option2b:"No",question6:"Photo:",placeholder6:"Choose a file",question7:"Any other comments:"},section4:{title:"Overall",question1:"Progress of project:",option1a:"Good",option1b:"Medium",option1c:"Bad",question2:"Photo:",placeholder2:"Choose a file",question3:"Any other comments:"}},thanks:{title:"Thank you",paragraph1:"We have received your answers.",paragraph2:"We look forward to your next update."}},workshop:{overview:{title:"Workshop: Pruning",subtitle:"During workshop",paragraph1:"30 coffee farmers need to be taught the why, how and when of pruning.",paragraph2:"Participants should already have been farming for 5 years minimum.",image_path:"/static/images/workshop-map.png",bullet_point1:"Each participant is to receive secateurs",bullet_point2:"The lesson should be in the local language",bullet_point3:"",specification:"View full specification and contract",call_to_action:"Start"},form:{title:"Send an update",back:"back",intro:"Please answer the following questions about the workshop.\n                    If you are unsure of an answer, you can leave it blank.\n                    Please refer to training materials when in doubt.",call_to_action:"Submit answers",section1:{title:"Group",question1:"People in class:",placeholder1:"e.g. 30",question6:"Teacher present:",option6a:"Yes",option6b:"No",question7:"Group photo:",placeholder7:"Choose a file",question8:"Any other comments:"},section2:{title:"Tools",question1:"Secateurs:",option1a:"Yes",option1b:"No",question2:"Working:",option2a:"Yes",option2b:"No",question4:"Workshop date:",question5:"Photo:",placeholder5:"Choose a file",question6:"Any other comments:"},section4:{title:"Overall",question1:"Quality of workshop:",option1a:"Good",option1b:"Medium",option1c:"Bad",question3:"Any other comments:"}},thanks:{title:"Thank you",paragraph1:"We have received your answers.",paragraph2:"We look forward to your next update."}}},swahili:{school_construction:{overview:{title:"Bilobilo",subtitle:"Mradi 1: Shule",paragraph1:"Mradi wa kwanza wa tatu utakajengwa katika eneo la Bilobilo utakuwa na\n                     shule tatu za darasani, na maji, umeme na vyoo vya kijana na wavulana.",paragraph2:"Jengo hilo litajengwa kwenye makutano ya N3 na R529:",image_path:"/static/images/school-map.png",bullet_point1:"Msingi lazima uwe saruji imara",bullet_point2:"Lazima kuwe na kuta za matofali na paa iliyopangwa",bullet_point3:"Urefu: 18m, Upana: 6m",specification:"Angalia maelezo kamili na mkataba",call_to_action:"Kuanza"},form:{title:"Tuma sasisho",back:"nyuma",intro:"Tafadhali jibu maswali yafuatayo kuhusu maendeleo ya mradi.\n                Ikiwa haujui jibu, unaweza kuiondoa tupu.\n                Tafadhali rejea vifaa vya mafunzo wakati una shaka.",call_to_action:"Wasilisha majibu",section1:{title:"Jengo",question1:"Urefu wa ukuta kwa mita:",placeholder1:"mfano wa 5",question2:"Upana wa ukuta kwa mita:",placeholder2:"mfano wa 5",question3:"Idadi ya vyoo:",placeholder3:"mfano wa 3",question4:"Idadi ya kuzama:",placeholder4:"mfano wa 3",question5:"Idadi ya vyumba:",placeholder5:"mfano wa 3",question6:"Umeme unafanya kazi",option6a:"Ndiyo",option6b:"Hapana",question7:"Picha:",placeholder7:"Chagua faili",question8:"Maoni mengine yoyote:"},section2:{title:"Saruji",question1:"Anakua katika maji:",option1a:"Ndiyo",option1b:"Hapana",question2:"Ina mabichi:",option2a:"Ndiyo",option2b:"Hapana",question3:"Mtihani wa nguvu:",option3a:"Pita",option3b:"Inashin",question4:"Tarehe ya pakiti:",question5:"Picha:",placeholder5:"Chagua faili",question6:"Maoni mengine yoyote:"},section3:{title:"Matofali",question1:"Sura ni sare:",option1a:"Ndiyo",option1b:"Hapana",question2:"Jaribio la ugumu:",option2a:"Pita",option2b:"Inashin",question3:"Jaribio la sauti:",option3a:"Pita",option3b:"Inashin",question4:"Mtihani wa muundo:",option4a:"Pita",option4b:"Inashin",question5:"Mtihani wa maji:",option5a:"Pita",option5b:"Inashin",question6:"Picha:",placeholder6:"Chagua faili",question7:"Maoni mengine yoyote:"},section4:{title:"Kwa ujumla",question1:"Maendeleo ya mradi:",option1a:"Nzuri",option1b:"Kati",option1c:"Si nzuri",question2:"Picha:",placeholder2:"Chagua faili",question3:"Maoni mengine yoyote:"}},thanks:{title:"Asante",paragraph1:"Tumepokea majibu yako.",paragraph2:"Tunatarajia sasisho lako la pili katika muda wa wiki mbili."}}}};a.default=function(){var e=Object(o.useState)("overview"),a=Object(n.default)(e,2),t=a[0],s=a[1],r=Object(o.useState)(!0),c=Object(n.default)(r,2),u=c[0],p=c[1],d=Object(o.useState)("agri_farmer"),h=Object(n.default)(d,2),g=h[0],q=h[1],f=Object(o.useState)("english"),N=Object(n.default)(f,2),b=N[0],v=N[1],w=function(e){window.scrollTo(0,0),document.getElementById("scrollable").scrollTo(0,0),s(e),p(!1)},y=A[b][g];return l.a.createElement(i.a,null,u&&l.a.createElement(m,null),"overview"===t&&l.a.createElement(E,{setPage:w,content:y.overview}),"form"===t&&l.a.createElement(P,{setPage:w,content:y.form}),"thanks"===t&&l.a.createElement(j,{setPage:w,setLoading:p,setProject:q,setLanguage:v,content:y.thanks}))}}},[["H0SL","5d41","9da1","ad9d"]]]);