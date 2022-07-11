"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[10746],{75863:(e,i,t)=>{t.r(i),t.d(i,{data:()=>o});const o={key:"v-ee521f38",path:"/devices/EFEKTA_miniPWS.html",title:"Custom devices (DiY) EFEKTA_miniPWS control via MQTT",lang:"en-US",frontmatter:{title:"Custom devices (DiY) EFEKTA_miniPWS control via MQTT",description:"Integrate your Custom devices (DiY) EFEKTA_miniPWS via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-08-01T20:41:55.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Build guide",slug:"build-guide",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Soil_moisture (numeric)",slug:"soil-moisture-numeric",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Report_delay (numeric)",slug:"report-delay-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/EFEKTA_miniPWS.md",git:{updatedTime:1657553937e3}}},65280:(e,i,t)=>{t.r(i),t.d(i,{default:()=>T});var o=t(66252);const a=(0,o._)("h1",{id:"custom-devices-diy-efekta-minipws",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#custom-devices-diy-efekta-minipws","aria-hidden":"true"},"#"),(0,o.Uk)(" Custom devices (DiY) EFEKTA_miniPWS")],-1),l=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),n=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"EFEKTA_miniPWS")],-1),r=(0,o._)("tr",null,[(0,o._)("td",null,"Vendor"),(0,o._)("td",null,"Custom devices (DiY)")],-1),d=(0,o._)("td",null,"Description",-1),u={href:"http://efektalab.com/miniPWS",target:"_blank",rel:"noopener noreferrer"},s=(0,o.Uk)("Mini plant wattering sensor"),c=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"soil_moisture, battery, report_delay, linkquality")],-1),h=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/EFEKTA_miniPWS.jpg",alt:"Custom devices (DiY) EFEKTA_miniPWS"})])],-1),m=(0,o._)("h2",{id:"notes",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#notes","aria-hidden":"true"},"#"),(0,o.Uk)(" Notes")],-1),p=(0,o._)("h3",{id:"build-guide",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#build-guide","aria-hidden":"true"},"#"),(0,o.Uk)(" Build guide")],-1),_=(0,o.Uk)("Instructions on how to build this device can be found "),b={href:"https://github.com/smartboxchannel/Plant-Watering-Sensor-Zigbee",target:"_blank",rel:"noopener noreferrer"},v=(0,o.Uk)("here"),f=(0,o._)("h2",{id:"options",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,o.Uk)(" Options")],-1),g=(0,o.Uk)("How to use device type specific configuration"),y=(0,o.uE)('<ul><li><p><code>soil_moisture_precision</code>: Number of digits after decimal point for soil_moisture, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>soil_moisture_calibration</code>: Calibrates the soil_moisture value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="soil-moisture-numeric" tabindex="-1"><a class="header-anchor" href="#soil-moisture-numeric" aria-hidden="true">#</a> Soil_moisture (numeric)</h3><p>Measured soil moisture value. Value can be found in the published state on the <code>soil_moisture</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="report-delay-numeric" tabindex="-1"><a class="header-anchor" href="#report-delay-numeric" aria-hidden="true">#</a> Report_delay (numeric)</h3><p>Adjust Report Delay, by default 60 minutes. Value can be found in the published state on the <code>report_delay</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;report_delay&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>180</code>. The unit of this value is <code>min</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),k={},T=(0,t(83744).Z)(k,[["render",function(e,i){const t=(0,o.up)("OutboundLink"),k=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[a,(0,o._)("table",null,[l,(0,o._)("tbody",null,[n,r,(0,o._)("tr",null,[d,(0,o._)("td",null,[(0,o._)("a",u,[s,(0,o.Wm)(t)])])]),c,h])]),m,p,(0,o._)("p",null,[_,(0,o._)("a",b,[v,(0,o.Wm)(t)])]),f,(0,o._)("p",null,[(0,o._)("em",null,[(0,o.Wm)(k,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.w5)((()=>[g])),_:1})])]),y],64)}]])},83744:(e,i)=>{i.Z=(e,i)=>{for(const[t,o]of i)e[t]=o;return e}}}]);