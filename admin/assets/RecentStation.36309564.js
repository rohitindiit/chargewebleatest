import{r as s,j as t,m as i,ah as p,ai as r,L as d,t as c,am as g}from"./index.3f2846ac.js";import"./auto.123ef0e3.js";const N=()=>{const[h,m]=s.exports.useState([]),o=async e=>{try{const n=await(await fetch(e)).json();m(n.station.station),console.log(n.station.station)}catch(a){console.log(a)}};s.exports.useEffect(()=>{o("https://api.chargeasy.org:3001/adminHome")},[]);function l(e,a){console.log(e,"userid"),g("adminAprroveStation",{StationId:e,stationStatus:a}).then(n=>{o("https://api.chargeasy.org:3001/adminHome")}).catch(n=>{console.log(n)})}return t("div",{className:"table-responsive",children:i(p,{className:"react-dataTable paddingbox tablestatic",children:[t("thead",{children:i("tr",{children:[t("th",{children:"Image"}),t("th",{children:"Name"}),t("th",{children:"Station Name"}),t("th",{children:"Location"}),t("th",{children:"Status"}),t("th",{children:"Action"})]})}),t("tbody",{children:h.map((e,a)=>a<=5&&i("tr",{children:[t("td",{children:e.stationPic?t("img",{className:"table_img rounded-circle img-thumbnail",src:`https://chargeeasy.s3.us-east-2.amazonaws.com/${e.stationPic}`}):t("img",{className:"table_img rounded-circle img-thumbnail",src:"https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"})}),t("td",{children:e.stationName}),t("td",{children:e.phone_number}),t("td",{children:e.address.substring(0,30)+"..."}),t("td",{children:t("span",{className:e.stationStatus+" badge",children:e.stationStatus})}),i("td",{className:"tableaction",children:[e.stationStatus=="Approved"&&t(r,{children:t(d,{to:`/pages/viewstation/${e._id}`,children:t(c,{className:"tablebtnview",children:"View"})})}),e.stationStatus=="Decline"&&i(r,{children:[t(d,{to:`/pages/viewuser/${e._id}`,children:t(c,{className:"tablebtnview",children:"View"})}),t(c,{className:"tablebtnaccept",onClick:()=>l(e._id,"Approved"),children:"Accept"})]}),e.stationStatus=="pending"||e.stationStatus=="Pending"&&i(r,{children:[t(c,{className:"tablebtnaccept",onClick:()=>l(e._id,"Approved"),children:"Accept"}),t(c,{className:"tablebtncancel",onClick:()=>l(e._id,"Decline"),children:"Decline"})]})]})]},a))})]})})};export{N as default};