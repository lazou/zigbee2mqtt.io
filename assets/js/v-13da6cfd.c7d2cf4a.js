"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[78741],{43943:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-13da6cfd",path:"/devices/QBKG03LM.html",title:"Xiaomi QBKG03LM control via MQTT",lang:"en-US",frontmatter:{title:"Xiaomi QBKG03LM control via MQTT",description:"Integrate your Xiaomi QBKG03LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2019-07-22T20:08:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Deprecated click event",slug:"deprecated-click-event",children:[]},{level:3,title:"Debounce",slug:"debounce",children:[]},{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch (left endpoint)",slug:"switch-left-endpoint",children:[]},{level:3,title:"Switch (right endpoint)",slug:"switch-right-endpoint",children:[]},{level:3,title:"Device_temperature (numeric)",slug:"device-temperature-numeric",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Operation_mode (enum, left endpoint)",slug:"operation-mode-enum-left-endpoint",children:[]},{level:3,title:"Operation_mode (enum, right endpoint)",slug:"operation-mode-enum-right-endpoint",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/QBKG03LM.md",git:{updatedTime:1657553937e3}}},73660:(e,t,o)=>{o.r(t),o.d(t,{default:()=>h});var i=o(66252);const a=(0,i.uE)('<h1 id="xiaomi-qbkg03lm" tabindex="-1"><a class="header-anchor" href="#xiaomi-qbkg03lm" aria-hidden="true">#</a> Xiaomi QBKG03LM</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>QBKG03LM</td></tr><tr><td>Vendor</td><td>Xiaomi</td></tr><tr><td>Description</td><td>Aqara double key wired wall switch without neutral wire. Doesn&#39;t work as a router and doesn&#39;t support power meter</td></tr><tr><td>Exposes</td><td>switch (state), device_temperature, action, operation_mode, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/QBKG03LM.jpg" alt="Xiaomi QBKG03LM"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="deprecated-click-event" tabindex="-1"><a class="header-anchor" href="#deprecated-click-event" aria-hidden="true">#</a> Deprecated click event</h3><p>By default this device exposes a deprecated <code>click</code> event. It&#39;s recommended to use the <code>action</code> event instead.</p><p>To disable the <code>click</code> event, set <code>legacy: false</code> for this device in <code>configuration.yaml</code>. Example:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">devices</span><span class="token punctuation">:</span>\n  <span class="token key atrule">&#39;0x12345678&#39;</span><span class="token punctuation">:</span>\n    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> my_device\n    <span class="token key atrule">legacy</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="debounce" tabindex="-1"><a class="header-anchor" href="#debounce" aria-hidden="true">#</a> Debounce</h3><p>It is recommended to not use the <code>debounce</code> option for this device since this will prevent the <code>single</code> and <code>hold_release</code> actions from being sent.</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Press and hold the button on the device for +- 10 seconds (until the blue light starts blinking and stops blinking), release and wait.</p><p>You may have to unpair the switch from an existing coordinator before the pairing process will start. If you can&#39;t do this, try to remove battery (if it has one), push the button (to completely discharge device), place the battery back and try pairing again.</p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',13),d=(0,i.Uk)("This device supports OTA updates, for more information see "),n=(0,i.Uk)("OTA updates"),c=(0,i.Uk)("."),r=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),s=(0,i.Uk)("How to use device type specific configuration"),l=(0,i.uE)('<ul><li><p><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>device_temperature_precision</code>: Number of digits after decimal point for device_temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>device_temperature_calibration</code>: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch-left-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-left-endpoint" aria-hidden="true">#</a> Switch (left endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_left</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_left&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_left&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_left&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_left&quot;: &quot;&quot;}</code>.</p><h3 id="switch-right-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-right-endpoint" aria-hidden="true">#</a> Switch (right endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_right</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_right&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_right&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_right&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_right&quot;: &quot;&quot;}</code>.</p><h3 id="device-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#device-temperature-numeric" aria-hidden="true">#</a> Device_temperature (numeric)</h3><p>Temperature of the device. Value can be found in the published state on the <code>device_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>release_left</code>, <code>release_right</code>, <code>release_both</code>, <code>double_left</code>, <code>double_right</code>, <code>single_left</code>, <code>single_right</code>, <code>hold_release_left</code>, <code>hold_release_left</code>.</p><h3 id="operation-mode-enum-left-endpoint" tabindex="-1"><a class="header-anchor" href="#operation-mode-enum-left-endpoint" aria-hidden="true">#</a> Operation_mode (enum, left endpoint)</h3><p>Operation mode for left button. Value can be found in the published state on the <code>operation_mode_left</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operation_mode_left&quot;: NEW_VALUE}</code>. The possible values are: <code>control_left_relay</code>, <code>control_right_relay</code>, <code>decoupled</code>.</p><h3 id="operation-mode-enum-right-endpoint" tabindex="-1"><a class="header-anchor" href="#operation-mode-enum-right-endpoint" aria-hidden="true">#</a> Operation_mode (enum, right endpoint)</h3><p>Operation mode for right button. Value can be found in the published state on the <code>operation_mode_right</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operation_mode_right&quot;: NEW_VALUE}</code>. The possible values are: <code>control_left_relay</code>, <code>control_right_relay</code>, <code>decoupled</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',16),u={},h=(0,o(83744).Z)(u,[["render",function(e,t){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[a,(0,i._)("p",null,[d,(0,i.Wm)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,i.w5)((()=>[n])),_:1}),c]),r,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[s])),_:1})])]),l],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,i]of t)e[o]=i;return e}}}]);