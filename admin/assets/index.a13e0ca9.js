import{r as v,m as r,j as e,p,s as X,n as h,C as s,L as b,t as f,a9 as c,a8 as I,an as m,aa as A}from"./index.3f2846ac.js";import{A as S,X as C}from"./App.bf7950ee.js";import{E as x}from"./edit.bfa60e62.js";const k="/assets/idproof.f96482a0.png";function y(a,n){if(a==null)return{};var i=D(a,n),t,l;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);for(l=0;l<d.length;l++)t=d[l],!(n.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,t)||(i[t]=a[t]))}return i}function D(a,n){if(a==null)return{};var i={},t=Object.keys(a),l,d;for(d=0;d<t.length;d++)l=t[d],!(n.indexOf(l)>=0)&&(i[l]=a[l]);return i}var g=v.exports.forwardRef(function(a,n){var i=a.color,t=i===void 0?"currentColor":i,l=a.size,d=l===void 0?24:l,u=y(a,["color","size"]);return r("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...u,children:[e("path",{d:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"}),e("circle",{cx:"12",cy:"13",r:"4"})]})});g.propTypes={color:p.exports.string,size:p.exports.oneOfType([p.exports.string,p.exports.number])};g.displayName="Camera";const Q=g,T="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMvaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MiA3OS4xNjA5MjQsIDIwMTcvMDcvMTMtMDE6MDY6MzkgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2M0U3NTM2MkQ0NEUxMUU4Qjk0OEE5MzM2RDU3RENEMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2M0U3NTM2M0Q0NEUxMUU4Qjk0OEE5MzM2RDU3RENEMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYzRTc1MzYwRDQ0RTExRThCOTQ4QTkzMzZENTdEQ0QyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjYzRTc1MzYxRDQ0RTExRThCOTQ4QTkzMzZENTdEQ0QyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQECAQECAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8AAEQgAZABkAwERAAIRAQMRAf/EAaIAAAAGAgMBAAAAAAAAAAAAAAcIBgUECQMKAgEACwEAAAYDAQEBAAAAAAAAAAAABgUEAwcCCAEJAAoLEAACAQMEAQMDAgMDAwIGCXUBAgMEEQUSBiEHEyIACDEUQTIjFQlRQhZhJDMXUnGBGGKRJUOhsfAmNHIKGcHRNSfhUzaC8ZKiRFRzRUY3R2MoVVZXGrLC0uLyZIN0k4Rlo7PD0+MpOGbzdSo5OkhJSlhZWmdoaWp2d3h5eoWGh4iJipSVlpeYmZqkpaanqKmqtLW2t7i5usTFxsfIycrU1dbX2Nna5OXm5+jp6vT19vf4+foRAAIBAwIEBAMFBAQEBgYFbQECAxEEIRIFMQYAIhNBUQcyYRRxCEKBI5EVUqFiFjMJsSTB0UNy8BfhgjQlklMYY0TxorImNRlUNkVkJwpzg5NGdMLS4vJVZXVWN4SFo7PD0+PzKRqUpLTE1OT0laW1xdXl9ShHV2Y4doaWprbG1ub2Z3eHl6e3x9fn90hYaHiImKi4yNjo+DlJWWl5iZmpucnZ6fkqOkpaanqKmqq6ytrq+v/aAAwDAQACEQMRAD8A29/Yp6Keve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917oMe0u1dudU4IZXNs9TW1Zkhw+GpmUVmTqY0DMFLXWnpIdS+WZgVQMAAzMqtdVLGg62BXqujd3ya7W3RVStR5xtrY4uTBjtvotM0SfRRLkmVsjPJb9R8ioTyEX6e3xGo+fVwo6SeM7z7cxNQlTT7/ANxzsj6/Hk658xTtzcq9PlBWQsh/pbj8W970IfLrdB0dHpT5QUu866k2rviClxO4atkp8ZlqXVFisvUEWSlnikZv4dXzEWT1GKVzpGhiqs08dMrw6oVpkdHA9s9V697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3XuqdO8d81W/eyNw5KSZpMdjqyfCYOK58UOLxs8sETxqSQGrZQ87n8tJ/QABWi6V6dAoOgi93631737r3XJHaNldGZHRg6OhKsjKQVZWBBVlIuCPp791rq4noze1Rv7rPb2cr5PLlYY5sRl5P7UtfjJPt2qH5P7lZTCOZvxqkNvaRxpanl02RQ9C77p1rr3v3Xuve/de697917r3v3Xuve/de697917ro8gi5Fx9R9R/iP8ffuvdUW52jqMdm8xj6tWWqocpkKOpVxZxPTVcsMwcf6oSIb+1o4dO9NXvfW+ve/de697917q0T4h0VRS9TPPMHEeR3RmKyk1CytTpBjqBnT8lTU0Ug/wBce00vxfl023Ho0ntrqvXvfuvde9+691737r3Xvfuvde9+691737r3XvfuvdVwfKjp6uw+equx8FSPUYLNyLLuCOnjd2xGXICS1s6qDpocoQHMn0WoLBra0uoieo0nj1dT5dE29vdX697917pZ7C2Jn+xdx0W3Nv0zSz1Dq1XWMjmjxdEGAnr6+VQRFBCv0H6pGsigsQPdWYKKnrRNOrk9pbZx2zttYXa+KUigwtDDRQswAkmZAXnqZbXHmq6h3le3Gtz7SE1NT02c9KL3rrXXvfuvde9+691737r3Xvfuvde9+691737r3THuDcu39q4+TK7jzFBhsfHe9TX1CQK7AX8UKMfJUTN+EjDO34B97AJwOvdAHUfKjpmor1ws1ZlKugrddJU5KXBSthFilvE61kdSyV0lNIpIa1M66Tzxf254T8eraT0y5z4w9Rb9jXcGz8nNhYK8iaObbVZSZLAzalBYw0kvmSD630QyxohNtI+nvwkZcHr2ojpjxfwu2hT1KS5fd2fydMrampaSkocYZB+EedjkHC/10hSfwR72Zj5Dr2o9LKo7L6H6Eij2vhUj+5Z0/iNLtiCLMZBZI1CCozuSnq4hJUKCf23meVAeIwtvetLvk9eoTnoTdldx9c9gSCm23uSlmyJF/wCFVqS43Jm318NJWpC1UF/JhMgH5PurIy8etEEdCf7p1rr3v3Xuve/de697917r3v3Xuve/de6DntLsjEdX7Tq9x5MCoqC32eHxqvplyeUljkeCmDcmOBFjLzSWOiNSQC2lTZVLGg62BU9VG7335ufsLNS53dGRkraptSU0C3jocdTFiy0mPpQxjpqdP8Ls59TszEkqlUKKDpwCnDpH+7db6esPuPcG3pGmwOcy+FlY3d8XkaugLkcfufazReTgfm/vRAPHrXT1k+x+wM1AabK713TX0zLpenqc7kpIHW1tMkRqPHILf1B96CqOAHXqDpF+7db65xSyQSRzQyPDNE6yRSxO0ckUiMGSSN0IZHRgCCCCD791rqxX429/1e6pothb3rPuM8I2O3s1NYS5eKniMkuPr34EmShijLxynmdAQ37gBkTyJTuHDqjDzHR0PbPVeve/de697917r3v3Xuve/de6Jr8vthZ7P4LDbuxUlTWUO1UrI8tiYwziCkrWids3FGvLfbmAJPwSsZVuFVz7eiYA0Pn1ZT1XD7UdOde9+691737r3Xvfuvde9+691737r3Q29B9fZ3fXYGHkxklTj8ftyuos1l83AGX7CKjnWenghltp++r5YfHEvPGpyCqN7o7BVz1Umg6t79pOm+ve/de697917r3v3Xuve/de64OiSo8UqLJHIrJJG6h0dHBV0dGBVlZTYg8Ee/de6r17t+LlfQVNXujrOjevxkzSVNftWGzVuOdjrkfCxmzVtCbkinF5ovogdbBFCSVw3Hq4b16JRLFLBLJDPHJDNC7RyxSo0csUiMVeOSNwHR0YWIIBB9vdW6x+/db697917r3v3Xuhj6t6R3l2jVwyY+kfGbcWYJXblromShjRWHljoUJR8nWAcCOP0q1tboDf3RnC8ePVSQOrUNg7C291xt2m25t2mMVNETNVVc2l63JVrqomrq6ZVXyTSaQAAAqIAqgKAPaZmLGp6oTU16WvuvWuve/de697917r3v3Xuve/de697917r3v3Xug03r1D152AGfcm3KOauYC2Wo9WPyykfTVXUhilqFH+pl8if4e7BmXh1sEjovWV+F20aiZ3w+78/jYW5WCtpKDK+Mn8CSL+GMyj8Xuf8fbnjHzHW9R6a6b4T4pGvWdg5CdL8rTbepqRtN/pqlytaL2/Nv8AYe9+MfTreroXtp/GDqfa00NXLiqrctbCAVm3JUrW04kBB1jGwQ0uOfkcCSOS3+vz7oZGPWixPRgYIIKaGOnpoYqenhRY4YII0ihijUWVI4owqIij6AAAe6dV6y+9de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuve/de697917r3v3Xuv/9k=",Z=()=>{const[a,n]=v.exports.useState(""),[i,t]=v.exports.useState(""),[l,d]=v.exports.useState(""),[u,M]=v.exports.useState("select"),[w,N]=v.exports.useState(""),[R,E]=v.exports.useState("");return r(X.Fragment,{children:[r(h,{className:"mb-2",children:[e(s,{xl:"6",md:"6",children:e("h4",{className:"card-title mb-1 headingcard",children:"Add User"})}),e(s,{xl:"6",md:"6",className:"text-end",children:e(b,{to:"/pages/users",children:e(f,{className:"btn-add",children:"Back To Users"})})})]}),r(h,{children:[e(s,{sm:"4",children:r("div",{className:"user-avatar-section d-flex flex-column align-items-center justify-content-center",children:[e("div",{className:"d-flex flex-column mb-1 align-items-center justify-content-center",children:e(S,{className:"useravatar1",img:T})}),r(f.Ripple,{id:"change-img",tag:c,outline:!0,className:"mb-0",color:"primary",children:[e("span",{className:"d-none d-sm-block",children:"Update Picture"}),e("span",{className:"d-block d-sm-none",children:e(x,{size:14})}),e("input",{type:"file",hidden:!0,id:"change-img",accept:"image/*"})]})]})}),e(s,{sm:"8",children:e("div",{class:"card",children:e("div",{class:"card-body",children:e(I,{onSubmit:o=>o.preventDefault(),children:r(h,{children:[e(s,{md:"6",sm:"12",children:r(m,{className:"form-group",children:[e(c,{className:"form-label",for:"fname",children:"Full Name"}),e(A,{type:"text",id:"fname",name:"fname",value:a,onChange:o=>n(o.target.value),placeholder:"Full Name"})]})}),e(s,{md:"6",sm:"12",children:r(m,{className:"form-group",children:[e(c,{className:"form-label",for:"email",children:"Email (Username)"}),e(A,{type:"email",id:"email",name:"email",value:i,onChange:o=>t(o.target.value),placeholder:"Email (Username)"})]})}),e(s,{md:"6",sm:"12",children:r(m,{className:"form-group",children:[e(c,{className:"form-label",for:"phone",children:"Phone No."}),e(A,{type:"text",id:"phone",name:"phone",value:l,onChange:o=>d(o.target.value),placeholder:"Phone No."})]})}),e(s,{md:"6",sm:"12",children:r(m,{className:"form-group",children:[e(c,{className:"form-label",for:"phone",children:"Status"}),r(A,{type:"select",name:"status",id:"status",value:u,onChange:o=>M(o.target.value),children:[e("option",{value:"select",children:"Select Status"}),e("option",{value:"active",children:"Active"}),e("option",{value:"inactive",children:"Inactive"}),e("option",{value:"pending",children:"Pending"})]})]})}),e(s,{md:"6",sm:"12",children:r(m,{className:"form-group",children:[e(c,{className:"form-label",for:"password",children:"Password"}),e(A,{type:"text",id:"password",name:"password",value:R,onChange:o=>E(o.target.value),placeholder:"Password"})]})}),e(s,{md:"6",sm:"12",children:r(m,{className:"form-group",children:[e(c,{className:"form-label",for:"confirmpassword",children:"Confirm Password"}),e(A,{type:"text",id:"confirmpassword",name:"confirmpassword",value:w,onChange:o=>N(o.target.value),placeholder:"Confirm Password"})]})}),e(s,{md:"12",sm:"12",children:r(m,{className:"form-group",children:[e(c,{className:"form-label",for:"confirmpassword",children:"ID Proof"}),e(A,{id:"mealimg",name:"mealimg",className:"displaynone",type:"file"}),r("label",{class:"fileupload",for:"mealimg",children:[e(Q,{className:"uplaodicon",size:30}),e("h3",{children:"Upload ID Proof"})]}),r("div",{class:"formimg",children:[e("img",{src:k}),e(C,{className:"closebtn",size:10})]})]})}),e(s,{className:"d-flex flex-sm-row flex-column mt-2 ",sm:"12",children:e(f.Ripple,{className:"minwidth133 btnprimary",type:"submit",color:"primary",children:"Save"})})]})})})})})]})]})};export{Z as default};