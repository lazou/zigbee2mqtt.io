"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[80722],{9837:(t,e,o)=>{o.r(e),o.d(e,{data:()=>i});const i={key:"v-105a0e84",path:"/devices/PRL-1ZBS-12_24V.html",title:"Climax PRL-1ZBS-12/24V control via MQTT",lang:"en-US",frontmatter:{title:"Climax PRL-1ZBS-12/24V control via MQTT",description:"Integrate your Climax PRL-1ZBS-12/24V via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-12-31T16:51:16.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Calibration",slug:"calibration",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/PRL-1ZBS-12_24V.md",git:{updatedTime:1657553937e3}}},55557:(t,e,o)=>{o.r(e),o.d(e,{default:()=>l});const i=(0,o(66252).uE)('<h1 id="climax-prl-1zbs-12-24v" tabindex="-1"><a class="header-anchor" href="#climax-prl-1zbs-12-24v" aria-hidden="true">#</a> Climax PRL-1ZBS-12/24V</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>PRL-1ZBS-12/24V</td></tr><tr><td>Vendor</td><td>Climax</td></tr><tr><td>Description</td><td>Zigbee 12-24V relay controller</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/PRL-1ZBS-12-24V.jpg" alt="Climax PRL-1ZBS-12/24V"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="calibration" tabindex="-1"><a class="header-anchor" href="#calibration" aria-hidden="true">#</a> Calibration</h3><ol><li>Befor calibration, the external local switches must be connected to the Shutter Control.</li><li>Press and hold the Function button for 3~10 seconds and release to enter Calubration mode. The Shutter Controller will roll toward the &quot;Open&quot; direction for 4 minutes upon entering Calibration mode.</li><li>Wait for 4 minutes for Shutter Control to stop rolling to &quot;Open&quot; direction, then activate the connected external local &quot;Close&quot; switch to close the shutter.</li><li>Activate the &quot;Open&quot; external local switch the moment the shutter is fully closed. The Shutter controll will record to time it took between step 3 and 4 as the new &quot;close time&quot;</li><li>The Shutter control will roll toward open direction after step 4</li><li>Activate the &quot;Close&quot; external local switch the moment the shutter is fully opended. The Shutter controll will record to time it took between step 5 and 6 as the new &quot;open time&quot;</li></ol><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),a={},l=(0,o(83744).Z)(a,[["render",function(t,e){return i}]])},83744:(t,e)=>{e.Z=(t,e)=>{for(const[o,i]of e)t[o]=i;return t}}}]);