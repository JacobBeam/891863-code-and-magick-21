(()=>{"use strict";(()=>{let e=function(e,t,n,i,s){let r=new XMLHttpRequest;switch(r.responseType="json",r.addEventListener("load",(function(){200===r.status?n(r.response):i("Произошла ошибка. Статус ответа: "+r.status)})),r.addEventListener("error",(function(){i("Произошла ошибка соединения")})),r.addEventListener("timeout",(function(){i("Запрос не успел выполниться за 10000 мс")})),r.open(e,t),e){case"GET":r.send();break;case"POST":r.send(s);break;default:r.send()}};window.backend={load(t,n){e("GET","https://21.javascript.pages.academy/code-and-magick/data",t,n)},save(t,n,i){e("POST","https://21.javascript.pages.academy/code-and-magick",n,i,t)}}})(),(()=>{const e=document.querySelector(".setup"),t=document.querySelector(".setup-open"),n=e.querySelector(".setup-close"),i=e.querySelector(".setup-user-name");let s=getComputedStyle(e);const r=s.top,a=s.left;let o=function(e){window.util.isEscEvent(e,l,i)},d=function(){e.style.top=r,e.style.left=a,e.classList.remove("hidden"),document.addEventListener("keydown",o)},l=function(){e.classList.add("hidden"),document.removeEventListener("keydown",o)};t.addEventListener("click",(function(){d()})),t.addEventListener("keydown",(function(e){window.util.isEnterEvent(e,d())})),n.addEventListener("click",(function(){l()})),n.addEventListener("keydown",(function(e){window.util.isEnterEvent(e,l())}))})(),window.GameConstants={Fireball:{size:fireballSize||24,speed:getFireballSpeed||function(e){return e?2:5}},Wizard:{speed:wizardSpeed||2,width:wizardWidth||61,getHeight:getWizardHeight||function(e){return 1.377*e},getX:getWizardX||function(e){return e/3},getY:getWizardY||function(e){return e-100}}},window.Game=function(){var e=300,t=700,n=["Кекс","Катя","Игорь"],i={},s="-reversed";i[0]={width:61,height:84,url:"img/wizard.gif"},i[0+s]={width:61,height:84,url:"img/wizard-reversed.gif"},i[1]={width:24,height:24,url:"img/fireball.gif"};var r={0:function(n,i,s){i.keysPressed.UP&&n.y>0&&(n.direction=-9&n.direction,n.direction=4|n.direction,n.y-=n.speed*s*2),i.keysPressed.UP||n.y<e-n.height&&(n.direction=-5&n.direction,n.direction=8|n.direction,n.y+=n.speed*s/3),i.keysPressed.LEFT&&(n.direction=-3&n.direction,n.direction=1|n.direction,n.x-=n.speed*s),i.keysPressed.RIGHT&&(n.direction=-2&n.direction,n.direction=2|n.direction,n.x+=n.speed*s),n.y<0&&(n.y=0),n.y>e-n.height&&(n.y=e-n.height),n.x<0&&(n.x=0),n.x>t-n.width&&(n.x=t-n.width)},1:function(e,n,i){1&e.direction&&(e.x-=e.speed*i),2&e.direction&&(e.x+=e.speed*i),(e.x<0||e.x>t)&&(e.state=1)}},a={CONTINUE:0,WIN:1,FAIL:2,PAUSE:3,INTRO:4},o={0:function(e){return e.garbage.filter((function(e){return 1===e.type})).filter((function(e){return e.x<10&&e.y>240}))[0]?a.WIN:a.CONTINUE}},d={0:function(n){return n.objects.push({direction:2,height:window.GameConstants.Wizard.getHeight(window.GameConstants.Wizard.width),speed:window.GameConstants.Wizard.speed,sprite:i[0],state:0,type:0,width:window.GameConstants.Wizard.width,x:window.GameConstants.Wizard.getX(t),y:window.GameConstants.Wizard.getY(e)}),n}},l=function(e){this.container=e,this.canvas=document.createElement("canvas"),this.canvas.width=e.clientWidth,this.canvas.height=e.clientHeight,this.container.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this._onKeyDown=this._onKeyDown.bind(this),this._onKeyUp=this._onKeyUp.bind(this),this._pauseListener=this._pauseListener.bind(this),this.setDeactivated(!1)};l.prototype={level:0,setDeactivated:function(e){this._deactivated!==e&&(this._deactivated=e,e?this._removeGameListeners():this._initializeGameListeners())},getInitialState:function(){return{currentStatus:a.CONTINUE,garbage:[],lastUpdated:null,keysPressed:{ESC:!1,LEFT:!1,RIGHT:!1,SPACE:!1,UP:!1},levelStartTime:null,objects:[],startTime:null}},initializeLevelAndStart:function(e){(e=void 0===e||e)||!this.state?(this._imagesArePreloaded=void 0,this.state=this.getInitialState(),this.state=d[this.level](this.state)):this.state.currentStatus=a.CONTINUE,this.state.levelStartTime=Date.now(),this.state.startTime||(this.state.startTime=this.state.levelStartTime),this._preloadImagesForLevel(function(){this.render(),this._initializeGameListeners(),this.update()}.bind(this))},pauseLevel:function(e){e&&(this.state.currentStatus=e),this.state.keysPressed.ESC=!1,this.state.lastUpdated=null,this._removeGameListeners(),window.addEventListener("keydown",this._pauseListener),this._drawPauseScreen()},_pauseListener:function(e){if(32===e.keyCode&&!this._deactivated){e.preventDefault();var t=this.state.currentStatus===a.WIN||this.state.currentStatus===a.FAIL;this.initializeLevelAndStart(t),window.removeEventListener("keydown",this._pauseListener)}},_drawPauseScreen:function(){var e;switch(this.state.currentStatus){case a.WIN:if(window.renderStatistics){var t=this._generateStatistics(new Date-this.state.startTime),n=this._shuffleArray(Object.keys(t));return void window.renderStatistics(this.ctx,n,n.map((function(e){return t[e]})))}e="Вы победили Газебо!\nУра!";break;case a.FAIL:e="Вы проиграли!";break;case a.PAUSE:e="Игра на паузе!\nНажмите Пробел, чтобы продолжить";break;case a.INTRO:e="Добро пожаловать!\nНажмите Пробел для начала игры"}this._drawMessage(e)},_generateStatistics:function(e){for(var t={Вы:e},i=0;i<n.length;i++){var s=e+(3e3*Math.random()-1500);s<1e3&&(s=1e3),t[n[i]]=s}return t},_shuffleArray:function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),i=e[t];e[t]=e[n],e[n]=i}return e},_drawMessage:function(e){var t=this.ctx,n=function(e,n,i,s){t.beginPath(),t.moveTo(e,n),t.lineTo(e+10,n+s/2),t.lineTo(e,n+s),t.lineTo(e+i/2,n+s-10),t.lineTo(e+i,n+s),t.lineTo(e+i-10,n+s/2),t.lineTo(e+i,n),t.lineTo(e+i/2,n+10),t.lineTo(e,n),t.stroke(),t.closePath(),t.fill()};t.fillStyle="rgba(0, 0, 0, 0.7)",n(190,40,320,100),t.fillStyle="rgba(256, 256, 256, 1.0)",n(180,30,320,100),t.fillStyle="#000",t.font="16px PT Mono",e.split("\n").forEach((function(e,n){t.fillText(e,200,80+20*n)}))},_preloadImagesForLevel:function(e){if(void 0===this._imagesArePreloaded&&(this._imagesArePreloaded=[]),this._imagesArePreloaded[this.level])e();else for(var t=Object.keys(i),n=t.length,s=this,r=function(t){var i=new Image(t.width,t.height);i.onload=function(){t.image=i,0==--n&&(s._imagesArePreloaded[s.level]=!0,e())},i.src=t.url},a=0;a<t.length;a++)r(i[t[a]])},updateObjects:function(e){var t=this.state.objects.filter((function(e){return 0===e.type}))[0];this.state.keysPressed.SHIFT&&(this.state.objects.push({direction:t.direction,height:window.GameConstants.Fireball.size,speed:window.GameConstants.Fireball.speed(!!(1&t.direction)),sprite:i[1],type:1,width:window.GameConstants.Fireball.size,x:2&t.direction?t.x+t.width:t.x-window.GameConstants.Fireball.size,y:t.y+t.height/2}),this.state.keysPressed.SHIFT=!1),this.state.garbage=[];var n=this.state.objects.filter((function(t){return r[t.type](t,this.state,e),1!==t.state||(this.state.garbage.push(t),!1)}),this);this.state.objects=n},checkStatus:function(){if(this.state.currentStatus===a.CONTINUE){this.commonRules||(this.commonRules=[function(e){return 1===e.objects.filter((function(e){return 0===e.type}))[0].state?a.FAIL:a.CONTINUE},function(e){return e.keysPressed.ESC?a.PAUSE:a.CONTINUE},function(e){return Date.now()-e.startTime>18e4?a.FAIL:a.CONTINUE}]);for(var e=this.commonRules.concat(o[this.level]),t=a.CONTINUE;t===a.CONTINUE&&e.length;)t=e.shift()(this.state);this.state.currentStatus=t}},setGameStatus:function(e){this.state.currentStatus!==e&&(this.state.currentStatus=e)},render:function(){this.ctx.clearRect(0,0,t,e),this.state.objects.forEach((function(e){if(e.sprite){var t=1&e.direction,n=i[e.type+(t?s:"")]||i[e.type];this.ctx.drawImage(n.image,e.x,e.y,e.width,e.height)}}),this)},update:function(){this.state.lastUpdated||(this.state.lastUpdated=Date.now());var e=(Date.now()-this.state.lastUpdated)/10;switch(this.updateObjects(e),this.checkStatus(),this.state.currentStatus){case a.CONTINUE:this.state.lastUpdated=Date.now(),this.render(),requestAnimationFrame(function(){this.update()}.bind(this));break;case a.WIN:case a.FAIL:case a.PAUSE:case a.INTRO:this.pauseLevel()}},_onKeyDown:function(e){switch(e.keyCode){case 37:this.state.keysPressed.LEFT=!0;break;case 39:this.state.keysPressed.RIGHT=!0;break;case 38:this.state.keysPressed.UP=!0;break;case 27:this.state.keysPressed.ESC=!0}e.shiftKey&&(this.state.keysPressed.SHIFT=!0)},_onKeyUp:function(e){switch(e.keyCode){case 37:this.state.keysPressed.LEFT=!1;break;case 39:this.state.keysPressed.RIGHT=!1;break;case 38:this.state.keysPressed.UP=!1;break;case 27:this.state.keysPressed.ESC=!1}e.shiftKey&&(this.state.keysPressed.SHIFT=!1)},_initializeGameListeners:function(){window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp)},_removeGameListeners:function(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp)}},l.Verdict=a;var c=new l(document.querySelector(".demo"));return window.restartGame=function(e,t){i[0].url=e,i[0+s].url=t,c.initializeLevelAndStart(),c.setGameStatus(a.INTRO)},window.restartGame("img/wizard.gif","img/wizard-reversed.gif"),c}(),(()=>{const e=document.querySelector(".setup"),t=e.querySelector(".upload");t.addEventListener("mousedown",(function(n){n.preventDefault();let i={x:n.clientX,y:n.clientY},s=!1,r=function(t){t.preventDefault(),s=!0;let n=i.x-t.clientX,r=i.y-t.clientY;i={x:t.clientX,y:t.clientY},e.style.top=e.offsetTop-r+"px",e.style.left=e.offsetLeft-n+"px"},a=function(e){if(e.preventDefault(),document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",a),s){let e=function(n){n.preventDefault(),t.removeEventListener("click",e)};t.addEventListener("click",e)}};document.addEventListener("mousemove",r),document.addEventListener("mouseup",a)}))})(),(()=>{const e=document.querySelector(".setup"),t=document.querySelector("#similar-wizard-template").content.querySelector(".setup-similar-item");let n=function(e){let n=t.cloneNode(!0);return n.querySelector(".setup-similar-label").textContent=e.name,n.querySelector(".wizard-coat").style.fill=e.colorCoat,n.querySelector(".wizard-eyes").style.fill=e.colorEyes,n};const i=e.querySelector(".setup-similar-list");window.render=function(t){const s=t.length>4?4:t.length;i.innerHTML="";let r=document.createDocumentFragment();for(let e=0;e<s;e++)r.append(n(t[e]));i.append(r),e.querySelector(".setup-similar").classList.remove("hidden")}})(),(()=>{let e="rgb(101, 137, 164)",t="black",n=[];const i=function(n){let i=0;return n.colorCoat===e&&(i+=2),n.colorEyes===t&&(i+=1),i},s=function(){window.render(n.sort((function(e,t){let n=i(t)-i(e);return 0===n&&(n=function(e,t){return e>t?1:e<t?-1:0}(e.name,t.name)),n})))};let r=function(e){window.util.createErrorMessage(e)};window.backend.load((function(e){n=e,s()}),r);const a=document.querySelector(".setup"),o=a.querySelector(".setup-wizard-form");let d=function(){a.classList.add("hidden")};o.addEventListener("submit",(function(e){e.preventDefault(),window.backend.save(new FormData(o),d,r)})),window.wizard.setEyesChangeHandler((function(e){t=e,window.util.debounce(s)})),window.wizard.setCoatChangeHandler((function(t){e=t,window.util.debounce(s)}))})(),(()=>{let e=function(e,t,n,i){e.fillStyle=i,e.fillRect(t,n,420,270)};window.renderStatistics=function(t,n,i){e(t,110,20,"rgba(0,0,0,0.7)"),e(t,100,10,"#ffffff"),t.fillStyle="#000000",t.font="16px  PT Mono",t.textBaseline="hanging",t.fillText("Ура, вы победили!",130,30),t.fillText("Список результатов:",130,50),t.save(),t.translate(0,270);let s=function(e){let t=e[0];for(let n=0;n<e.length;n++)e[n]>t&&(t=e[n]);return t}(i);for(let e=0;e<n.length;e++){if(t.fillText(n[e],150+90*e,-20),"Вы"===n[e])t.fillStyle="rgba(255, 0, 0, 1)";else{let e=`hsl(230, ${Math.round(100*Math.random())}%, 50%)`;t.fillStyle=e}t.fillRect(150+90*e,-30,40,-150*i[e]/s),t.fillStyle="#000000",t.fillText(Math.round(i[e]),150+90*e,-150*i[e]/s-20-10-20)}t.restore()}})(),window.util={debounce(e){let t=null;t&&window.clearTimeout(t),t=window.setTimeout(e,500)},isEscEvent(e,t,n){"Escape"===e.key&&n!==document.activeElement&&t()},isEnterEvent(e,t){"Enter"===e.key&&t()},getRandomNumber(e,t){let n=e+Math.random()*(t+1-e);return Math.floor(n)},shuffleArray(e){for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e},getRandomElement:e=>e[Math.floor(Math.random()*e.length)],createErrorMessage(e){let t=document.createElement("div");t.style="z-index: 100; margin: 0 auto; text-align: center; background-color: red;",t.style.position="fixed",t.style.left=0,t.style.right=0,t.style.fontSize="30px",t.textContent=e,document.body.insertAdjacentElement("afterbegin",t)}},(()=>{const e=document.querySelector(".setup"),t=["rgb(101, 137, 164)","rgb(241, 43, 107)","rgb(146, 100, 161)","rgb(56, 159, 117)","rgb(215, 210, 55)","rgb(0, 0, 0)"],n=["black","red","blue","yellow","green"],i=["#ee4830","#30a8ee","#5ce6c0","#e848d5","#e6e848"];let s={onEyesChange:function(){},onCoatChange:function(){}};const r=e.querySelector(".wizard-coat"),a=e.querySelector('input[name="coat-color"]');r.addEventListener("click",(function(e){let n=window.util.getRandomElement(t);e.target.style.fill=n,a.value=n,s.onCoatChange(n)}));const o=e.querySelector(".wizard-eyes"),d=e.querySelector('input[name="eyes-color"]');o.addEventListener("click",(function(e){let t=window.util.getRandomElement(n);e.target.style.fill=t,d.value=t,s.onEyesChange(t)}));const l=e.querySelector(".setup-fireball-wrap"),c=e.querySelector('input[name="fireball-color"]');l.addEventListener("click",(function(e){let t=window.util.getRandomElement(i);e.target.style.backgroundColor=t,c.value=t})),window.wizard={setCoatChangeHandler(e){s.onCoatChange=e},setEyesChangeHandler(e){s.onEyesChange=e}}})()})();