"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[26871],{53904:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-0668a7e0",path:"/devices/AV2010_18.html",title:"SMaBiT (Bitron Video) AV2010/18 control via MQTT",lang:"en-US",frontmatter:{title:"SMaBiT (Bitron Video) AV2010/18 control via MQTT",description:"Integrate your SMaBiT (Bitron Video) AV2010/18 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-09-30T19:53:25.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/AV2010_18.md",git:{updatedTime:1657553937e3}}},91250:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});const a=(0,i(66252).uE)('<h1 id="smabit-bitron-video-av2010-18" tabindex="-1"><a class="header-anchor" href="#smabit-bitron-video-av2010-18" aria-hidden="true">#</a> SMaBiT (Bitron Video) AV2010/18</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>AV2010/18</td></tr><tr><td>Vendor</td><td>SMaBiT (Bitron Video)</td></tr><tr><td>Description</td><td>Wall-mount relay</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/AV2010-18.jpg" alt="SMaBiT (Bitron Video) AV2010/18"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Press and hold the function key for about 10 seconds. During these 10 seconds, the function key will light up red several times. During the search, the LED lights up red once every 10 seconds. When the LED flashes twice, the unit has successfully registered.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),o={},d=(0,i(83744).Z)(o,[["render",function(e,t){return a}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);