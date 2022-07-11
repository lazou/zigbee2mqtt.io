"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[61595],{72249:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o={key:"v-d9ec4b3c",path:"/devices/X711A.html",title:"Lonsonho X711A control via MQTT",lang:"en-US",frontmatter:{title:"Lonsonho X711A control via MQTT",description:"Integrate your Lonsonho X711A via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-07-20T23:08:11.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/X711A.md",git:{updatedTime:1657553937e3}}},38965:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});const o=(0,i(66252).uE)('<h1 id="lonsonho-x711a" tabindex="-1"><a class="header-anchor" href="#lonsonho-x711a" aria-hidden="true">#</a> Lonsonho X711A</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>X711A</td></tr><tr><td>Vendor</td><td>Lonsonho</td></tr><tr><td>Description</td><td>1 gang switch</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/X711A.jpg" alt="Lonsonho X711A"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Press and hold the button on the device for more then 10 seconds (until the led light starts blinking), release and wait.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),a={},d=(0,i(83744).Z)(a,[["render",function(e,t){return o}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,o]of t)e[i]=o;return e}}}]);