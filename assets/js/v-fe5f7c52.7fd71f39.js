"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[84540],{5545:(n,s,e)=>{e.r(s),e.d(s,{data:()=>a});const a={key:"v-fe5f7c52",path:"/guide/installation/06_freebsd_jail.html",title:"FreeBSD jail",lang:"en-US",frontmatter:{next:"../configuration/",pageClass:"content-page"},excerpt:"",headers:[{level:2,title:"Jail creation",slug:"jail-creation",children:[]},{level:2,title:"Installing",slug:"installing",children:[]},{level:2,title:"Configuring",slug:"configuring",children:[]},{level:2,title:"Starting Zigbee2MQTT",slug:"starting-zigbee2mqtt",children:[]},{level:2,title:"(Optional) Running as a daemon with rc",slug:"optional-running-as-a-daemon-with-rc",children:[]},{level:2,title:"(For later) Update Zigbee2MQTT to the latest version",slug:"for-later-update-zigbee2mqtt-to-the-latest-version",children:[]}],filePathRelative:"guide/installation/06_freebsd_jail.md",git:{updatedTime:1657553937e3}}},61217:(n,s,e)=>{e.r(s),e.d(s,{default:()=>q});var a=e(66252);const t=(0,a._)("h1",{id:"freebsd-jail",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#freebsd-jail","aria-hidden":"true"},"#"),(0,a.Uk)(" FreeBSD jail")],-1),i=(0,a.Uk)("These instructions explain how to run Zigbee2MQTT in a "),l={href:"https://en.wikipedia.org/wiki/FreeBSD_jail",target:"_blank",rel:"noopener noreferrer"},r=(0,a.Uk)("FreeBSD jail"),o=(0,a.Uk)("."),p=(0,a.Uk)("For the sake of simplicity this guide assumes running on "),c={href:"https://www.truenas.com/truenas-core/",target:"_blank",rel:"noopener noreferrer"},u=(0,a.Uk)("TrueNAS CORE"),b=(0,a.Uk)(" and installing Zigbee2MQTT in the "),m=(0,a._)("em",null,"Mosquitto MQTT",-1),d=(0,a.Uk)(" jail to be used with Home Assistant. This setup only uses MQTT for interfacing between Zigbee and Home Assistant. The instructions should otherwise work on any FreeBSD machine."),g=(0,a.uE)('<h2 id="jail-creation" tabindex="-1"><a class="header-anchor" href="#jail-creation" aria-hidden="true">#</a> Jail creation</h2><p>First we have to create the jail that will run both Zigbee2MQTT and Mosquitto. We can do that by opening the TrueNAS Web UI, navigating to <code>Plugins</code>, selecting <code>Community</code> plugins and then <code>Mosquitto MQTT</code>.</p><p>To enter the jail&#39;s terminal, we can use the Web UI&#39;s <em>Shell</em> feature under <em>Jails</em>, or SSH into TrueNAS and then</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> iocage console <span class="token operator">&lt;</span>jail-name<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="installing" tabindex="-1"><a class="header-anchor" href="#installing" aria-hidden="true">#</a> Installing</h2><p>Enter the following commands inside the jail&#39;s shell:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Install Node.js and required dependencies:</span>\n<span class="token comment"># - It is recommended to install Node 16 from the official Node repository. Check https://github.com/nodesource/distributions/blob/master/README.md on how to do this.</span>\n<span class="token comment"># - Older i386 hardware can work with [unofficial-builds.nodejs.org](https://unofficial-builds.nodejs.org/download/release/v16.15.0/ e.g. Version 16.15.0 should work.</span>\n<span class="token comment"># - Selecting `npm` also installs `node`.</span>\npkg <span class="token function">install</span> <span class="token function">npm</span> <span class="token function">git</span> gmake gcc\n\n<span class="token comment"># Verify that the correct nodejs and npm (automatically installed with nodejs)</span>\n<span class="token comment"># version has been installed</span>\n<span class="token function">node</span> --version  <span class="token comment"># Should output v14.X, V16.x, V17.x or V18.X</span>\n<span class="token function">npm</span> --version  <span class="token comment"># Should output 6.X, 7.X or 8.X</span>\n\n<span class="token comment"># Create installation folder (/usr/local prefix is used for software not part of the base system)</span>\n<span class="token function">mkdir</span> -p /usr/local/opt/zigbee2mqtt\n<span class="token builtin class-name">cd</span> /usr/local/opt/zigbee2mqtt\n\n<span class="token comment"># Clone Zigbee2MQTT repository</span>\n<span class="token function">git</span> clone --depth <span class="token number">1</span> https://github.com/Koenkk/zigbee2mqtt.git <span class="token builtin class-name">.</span>\n\n<span class="token comment"># Install dependencies</span>\n<span class="token function">npm</span> ci\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>If everything went correctly the output of <code>npm ci</code> is similar to (the number of packages and seconds is probably different on your device):</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>node-pre-gyp info ok\nadded <span class="token number">383</span> packages <span class="token keyword">in</span> <span class="token number">111</span>.613s\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Note that the <code>npm ci</code> produces some <code>warning</code> which can be ignored.</p><h2 id="configuring" tabindex="-1"><a class="header-anchor" href="#configuring" aria-hidden="true">#</a> Configuring</h2>',11),h=(0,a.Uk)("Configuration is the same as on "),k=(0,a.Uk)("Linux"),f=(0,a.Uk)("."),v=(0,a.uE)('<p>Note that the <code>configuration.yaml</code> is at a different location:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/usr/local/opt/zigbee2mqtt/data/configuration.yaml\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Also note that if you need <code>nano</code> for editing the configuration, you&#39;ll have to install it first:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pkg <span class="token function">install</span> <span class="token function">nano</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="starting-zigbee2mqtt" tabindex="-1"><a class="header-anchor" href="#starting-zigbee2mqtt" aria-hidden="true">#</a> Starting Zigbee2MQTT</h2><p>Now that we have setup everything correctly we can start Zigbee2MQTT.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/opt/zigbee2mqtt\n<span class="token function">npm</span> start\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>When started successfully, you will see something like:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Zigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:01: Logging to directory: <span class="token string">&#39;/opt/zigbee2mqtt/data/log/2019-11-09.14-04-01&#39;</span>\nZigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:01: Starting Zigbee2MQTT version <span class="token number">1.6</span>.0 <span class="token punctuation">(</span>commit <span class="token comment">#720e393)</span>\nZigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:01: Starting zigbee-herdsman<span class="token punctuation">..</span>.\nZigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:03: zigbee-herdsman started\nZigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:03: Coordinator firmware version: <span class="token string">&#39;{&quot;type&quot;:&quot;zStack30x&quot;,&quot;meta&quot;:{&quot;transportrev&quot;:2,&quot;product&quot;:2,&quot;majorrel&quot;:2,&quot;minorrel&quot;:7,&quot;maintrel&quot;:2,&quot;revision&quot;:20190425}}&#39;</span>\nZigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:03: Currently <span class="token number">0</span> devices are joined:\nZigbee2MQTT:warn  <span class="token number">2019</span>-11-09T13:04:03: <span class="token variable"><span class="token variable">`</span>permit_join<span class="token variable">`</span></span> <span class="token builtin class-name">set</span> to  <span class="token variable"><span class="token variable">`</span><span class="token boolean">true</span><span class="token variable">`</span></span> <span class="token keyword">in</span> configuration.yaml.\nZigbee2MQTT:warn  <span class="token number">2019</span>-11-09T13:04:03: Allowing new devices to join.\nZigbee2MQTT:warn  <span class="token number">2019</span>-11-09T13:04:03: Set <span class="token variable"><span class="token variable">`</span>permit_join<span class="token variable">`</span></span> to <span class="token variable"><span class="token variable">`</span><span class="token boolean">false</span><span class="token variable">`</span></span> once you joined all devices.\nZigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:03: Zigbee: allowing new devices to join.\nZigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:03: Connecting to MQTT server at mqtt://localhost\nZigbee2MQTT:info  <span class="token number">2019</span>-11-09T13:04:03: Connected to MQTT server\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>Zigbee2MQTT can be stopped by pressing <code>CTRL + C</code>.</p><h2 id="optional-running-as-a-daemon-with-rc" tabindex="-1"><a class="header-anchor" href="#optional-running-as-a-daemon-with-rc" aria-hidden="true">#</a> (Optional) Running as a daemon with rc</h2><p>To run Zigbee2MQTT as a daemon (in background) and start it automatically on jail start we will create a service file for it.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Create service file for Zigbee2MQTT (assuming `nano` is installed, `vi` can also be used)</span>\n<span class="token function">nano</span> /usr/local/etc/rc.d/zigbee2mqtt\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Add the following to this file:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/sh\n\n# PROVIDE: zigbee2mqtt\n# REQUIRE: DAEMON NETWORKING\n# BEFORE: LOGIN\n# KEYWORD: shutdown\n\n. /etc/rc.subr\n\nname=&quot;zigbee2mqtt&quot;\nrcvar=zigbee2mqtt_enable\n\n: ${fzigbee2mqtt_enable:=&quot;NO&quot;}\n\n# daemon\npidfile=&quot;/var/run/${name}.pid&quot;\nnode=&quot;/usr/local/bin/node&quot;\nscript_js=&quot;/usr/local/opt/zigbee2mqtt/index.js&quot;\ncommand=/usr/sbin/daemon\nprocname=&quot;daemon&quot;\ncommand_args=&quot; -c -f -P ${pidfile} ${node} ${script_js}&quot;\n\nload_rc_config $name\nrun_rc_command &quot;$1&quot;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>Save the file and exit.</p><p>Make it executable:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">chmod</span> +x /usr/local/etc/rc.d/zigbee2mqtt\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Verify that the configuration works:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Start Zigbee2MQTT without enabling it</span>\n<span class="token function">service</span> zigbee2mqtt onestart\n\n<span class="token comment"># Show status</span>\n<span class="token function">service</span> zigbee2mqtt onestatus\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Output should look like:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root@zigbee2mqtt:/usr/local/opt/zigbee2mqtt # service zigbee2mqtt onestatus\nzigbee2mqtt is running as pid 80246.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Now that everything works, we want the init system to start Zigbee2MQTT automatically when the jail starts. This can be done by executing:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">service</span> zigbee2mqtt <span class="token builtin class-name">enable</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Done! 😃</p><p>Some tips that can be handy later:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Stopping Zigbee2MQTT</span>\n<span class="token function">service</span> zigbee2mqtt stop\n\n<span class="token comment"># Starting Zigbee2MQTT</span>\n<span class="token function">service</span> zigbee2mqtt start\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="for-later-update-zigbee2mqtt-to-the-latest-version" tabindex="-1"><a class="header-anchor" href="#for-later-update-zigbee2mqtt-to-the-latest-version" aria-hidden="true">#</a> (For later) Update Zigbee2MQTT to the latest version</h2><p>To update Zigbee2MQTT to the latest version, execute:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Stop Zigbee2MQTT and go to directory</span>\n<span class="token function">service</span> zigbee2mqtt stop\n<span class="token builtin class-name">cd</span> /usr/local/opt/zigbee2mqtt\n\n<span class="token comment"># Backup configuration</span>\n<span class="token function">cp</span> -R data data-backup\n\n<span class="token comment"># Update</span>\n<span class="token function">git</span> checkout HEAD -- npm-shrinkwrap.json\n<span class="token function">git</span> pull\n<span class="token function">npm</span> ci\n\n<span class="token comment"># Restore configuration</span>\n<span class="token function">cp</span> -R data-backup/* data\n<span class="token function">rm</span> -rf data-backup\n\n<span class="token comment"># Start Zigbee2MQTT</span>\n<span class="token function">service</span> zigbee2mqtt start\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>',30),T={},q=(0,e(83744).Z)(T,[["render",function(n,s){const e=(0,a.up)("OutboundLink"),T=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[t,(0,a._)("p",null,[i,(0,a._)("a",l,[r,(0,a.Wm)(e)]),o]),(0,a._)("p",null,[p,(0,a._)("a",c,[u,(0,a.Wm)(e)]),b,m,d]),g,(0,a._)("p",null,[h,(0,a.Wm)(T,{to:"/guide/installation/01_linux.html#configuring"},{default:(0,a.w5)((()=>[k])),_:1}),f]),v],64)}]])},83744:(n,s)=>{s.Z=(n,s)=>{for(const[e,a]of s)n[e]=a;return n}}}]);