"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[27169],{11254:(e,t,i)=>{i.r(t),i.d(t,{data:()=>d});const d={key:"v-37ef2497",path:"/devices/PSBZS_A1.html",title:"Lidl PSBZS A1 control via MQTT",lang:"en-US",frontmatter:{title:"Lidl PSBZS A1 control via MQTT",description:"Integrate your Lidl PSBZS A1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-07-01T18:17:29.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Timer (numeric)",slug:"timer-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/PSBZS_A1.md",git:{updatedTime:1657553937e3}}},92825:(e,t,i)=>{i.r(t),i.d(t,{default:()=>o});const d=(0,i(66252).uE)('<h1 id="lidl-psbzs-a1" tabindex="-1"><a class="header-anchor" href="#lidl-psbzs-a1" aria-hidden="true">#</a> Lidl PSBZS A1</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>PSBZS A1</td></tr><tr><td>Vendor</td><td>Lidl</td></tr><tr><td>Description</td><td>Parkside smart watering timer</td></tr><tr><td>Exposes</td><td>switch (state), timer, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/PSBZS-A1.jpg" alt="Lidl PSBZS A1"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="timer-numeric" tabindex="-1"><a class="header-anchor" href="#timer-numeric" aria-hidden="true">#</a> Timer (numeric)</h3><p>Auto off after specific time.. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;timer&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>10000</code>. The unit of this value is <code>min</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),a={},o=(0,i(83744).Z)(a,[["render",function(e,t){return d}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,d]of t)e[i]=d;return e}}}]);