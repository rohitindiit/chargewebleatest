import{r as c,j as t,m as o,ah as m,L as u}from"./index.3f2846ac.js";import"./App.bf7950ee.js";const g=()=>{const[n,s]=c.exports.useState([]),[p,d]=c.exports.useState(0),[i,b]=c.exports.useState(1),l=async e=>{try{const r=await(await fetch("https://api.chargeasy.org:3001/fecthConnectorName")).json();console.log(r.data),s(r.data),d(r.data)}catch(a){console.log(a)}};c.exports.useEffect(()=>{l()},[i]);const h=e=>{const a={year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric",hour12:!0};return new Date(e).toLocaleString("en-US",a)};return t("div",{className:"card",children:t("div",{className:"card-body",children:t("div",{className:"table-responsive",children:o(m,{className:"react-dataTable paddingbox tablestatic",children:[t("thead",{children:o("tr",{children:[t("th",{children:"Name"}),t("th",{children:"Date/Time"}),t("th",{children:t(u,{to:"/pages/addconnector",children:t("button",{class:"btn btn-danger",children:"Add New"})})})]})}),t("tbody",{children:n.map((e,a)=>o("tr",{children:[t("td",{children:e.connectorName?e.connectorName:"N/A"}),t("td",{children:e.createdAt?h(e.createdAt):"N/A"})]},a))})]})})})})};export{g as default};
