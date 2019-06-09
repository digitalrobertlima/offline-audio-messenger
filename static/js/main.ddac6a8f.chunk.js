(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(58)},28:function(e,t,a){},55:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(15),s=a.n(l),i=(a(28),a(16)),r=a(17),d=a(20),c=a(18),u=a(6),p=a(21),h=a(19),y=a(7),m=a.n(y),g=(a(55),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(d.a)(this,Object(c.a)(t).call(this,e))).sdk=null,n.state={started:!1,received:"",receivedData:new Uint8Array([]),disabled:!0,decryptDisabled:!0,downloadDisabled:!0,resultType:"ascii",message:"",sendButtonTxt:"SEND 1/1"},n.payloadChunks=[],n.payloadCount=0,n.payloadCountMax=1,n.shouldReset=!0,n.maxFileSize=5e3,n.handleFileSelect=n.handleFileSelect.bind(Object(u.a)(n)),n.handleMessageChange=n.handleMessageChange.bind(Object(u.a)(n)),n.downloadByteArray=n.downloadByteArray.bind(Object(u.a)(n)),n.concatTypedArray=a(56),n.audioError="Failed to open web audio stream.\n    This may happen if your browser doesn't support Web Audio or have a mic and speaker.",n}return Object(p.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){!1 in window&&window.alert("WebAssembly is not supported in this browser")}},{key:"toAscii",value:function(e){for(var t="",a=0;a<e.length;a++)t+=String.fromCharCode(e[a]);return t}},{key:"chunkArray",value:function(e,t){var a=0,n=e.length,o=[];for(a=0;a<n;a+=t){var l=e.slice(a,a+t);o.push(l)}return o}},{key:"collapse",value:function(){var e=document.getElementsByClassName("collapse-content")[0];e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}},{key:"checkIfHex",value:function(e){for(var t=/^[0-9a-fA-F]+$/,a=0;a<e.length;a++)if(!t.test(e.charAt(a)))return!1;return!0}},{key:"handleMessageChange",value:function(e){var t=document.getElementById("psw_input").value;(this.setState({message:e}),""!==t)&&(e=new m.a(t).encrypt(e));""!==e?this.setState({disabled:!1}):this.setState({disabled:!0}),this.payloadCountMax=Math.ceil(e.length/32),0===this.payloadCountMax&&(this.payloadCountMax=1),this.setState({sendButtonTxt:"SEND "+(this.payloadCount+1)+"/"+this.payloadCountMax})}},{key:"handleFileSelect",value:function(e){e.stopPropagation(),e.preventDefault();var t=this,a=e.dataTransfer.files,n=new FileReader;n.onload=function(e){var a=n.result;""!==a&&(t.setState({message:a,disabled:!1}),t.handleMessageChange(a))},a[0].size<=this.maxFileSize?n.readAsBinaryString(a[0]):alert("Max file size allowed: 5 KB")}},{key:"handleDragOver",value:function(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"}},{key:"destroyClickedElement",value:function(e){document.body.removeChild(e.target)}},{key:"downloadByteArray",value:function(e,t){var a=t.join("").toUpperCase(),n=this.getMimetype(a);console.log(n);var o=new Blob([t],{type:n}),l=document.createElement("a");l.download=e,l.innerHTML="Download File",null!=window.webkitURL?l.href=window.webkitURL.createObjectURL(o):(l.href=window.URL.createObjectURL(o),l.onclick=this.destroyClickedElement,l.style.display="none",document.body.appendChild(l)),l.click()}},{key:"getMimetype",value:function(e){switch(e){case"89504E47":return"image/png";case"47494638":return"image/gif";case"25504446":return"application/pdf";case"FFD8FFDB":case"FFD8FFE0":return"image/jpeg";case"504B0304":return"application/zip";default:return"text/plain"}}},{key:"startSDK",value:function(){var e=this;Object(h.Chirp)({key:"b2c2e7ed5Acebf8842C1f3F5F",onSending:function(t){console.log("Sending"),e.setState({disabled:!0,sendButtonTxt:"Sending..."})},onSent:function(t){console.log("Data sent"),e.payloadCount++,e.payloadCount>=e.payloadChunks.length&&(e.payloadCount=0),e.setState({disabled:!1,sendButtonTxt:"SEND "+(e.payloadCount+1)+"/"+e.payloadCountMax})},onReceiving:function(){console.log("Receiving..."),e.payloadCount=0,e.setState({disabled:!0,sendButtonTxt:"Incoming..."})},onReceived:function(t){if(console.log("Data received"),e.setState({sendButtonTxt:"SEND "+(e.payloadCount+1)+"/"+e.payloadCountMax}),t.length>0){var a;a=new TextDecoder("utf-8").decode(t),e.shouldReset&&(e.setState({received:"",receivedData:new Uint8Array([])}),e.shouldReset=!1),e.setState({receivedData:e.concatTypedArray(Uint8Array,e.state.receivedData,t),received:e.state.received+a,disabled:!1}),""!==document.getElementById("psw_input").value?e.setState({decryptDisabled:!1}):e.setState({decryptDisabled:!0}),e.setState({downloadDisabled:!1})}else e.setState({received:"Missed data. Try increase the volume.",disabled:!1}),e.shouldReset=!0}}).then(function(t){e.sdk=t,e.setState({started:!0})}).catch(function(t){return console.error(t)&&t.message.includes("WebAssembly")?window.alert(t):window.alert(e.audioError)})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("header",null,o.a.createElement("h1",null,"Offline Audio Messenger")),this.state.started?o.a.createElement("div",null,o.a.createElement("button",{onClick:this.collapse,className:"IntroButton"},"HOW TO"),o.a.createElement("div",{className:"collapse-content"},o.a.createElement("strong",null,"No message data is shared but feel free to download site and use offline.",o.a.createElement("br",null)),o.a.createElement("ol",null,o.a.createElement("li",null,"Send message from one device to another using speaker and microphone."),o.a.createElement("li",null,"If they are far apart you can use a recorder for example a phone app."),o.a.createElement("li",null,"Use optional encryption to avoid anyone to intercept the audio."),o.a.createElement("li",null,"Each (non encrypted) part is 32 chars and split automatically."),o.a.createElement("li",null,"Use same encryption key on the receiving end.")),o.a.createElement("br",null)),o.a.createElement("div",{className:"MsgBoxContainer"},o.a.createElement("input",{className:"MsgBox",type:"text",id:"message_input",placeholder:"Enter message",value:this.state.message,onChange:function(t){e.handleMessageChange(t.target.value)}}),o.a.createElement("div",{id:"drop_zone",onDragOver:this.handleDragOver,onDrop:this.handleFileSelect},"...or drop a file here"),o.a.createElement("input",{className:"MsgBox",type:"text",id:"psw_input",placeholder:"Encryption key (optional)",onChange:function(t){var a=t.target.value,n=document.getElementById("resultTxt").value,o=document.getElementById("message_input").value;(""!==a&&""!==n?e.setState({decryptDisabled:!1}):e.setState({decryptDisabled:!0}),""!==a)&&(o=new m.a(a).encrypt(o));""!==o?(e.setState({disabled:!1}),e.payloadCountMax=Math.ceil(o.length/32),e.setState({sendButtonTxt:"SEND "+(e.payloadCount+1)+"/"+e.payloadCountMax})):e.setState({disabled:!0})}})),this.state.disabled?o.a.createElement("button",{id:"sendButton",className:"SendButton",disabled:!0},this.state.sendButtonTxt):o.a.createElement("button",{id:"sendButton",className:"SendButton",onClick:function(){if(0===e.payloadCount||e.payloadCount>=e.payloadChunks.length){var t=e.state.message,a=document.getElementById("psw_input").value,n=new Uint8Array(["Unknown"]);if(""!==a)t=new m.a(a).encrypt(t);n=new TextEncoder("utf-8").encode(t),e.payloadChunks=e.chunkArray(n,32),e.payloadCountMax=e.payloadChunks.length,e.sdk.send(e.payloadChunks[0])}else e.sdk.send(e.payloadChunks[e.payloadCount])}},this.state.sendButtonTxt),o.a.createElement("div",{className:"received-message"},o.a.createElement("textarea",{id:"resultTxt",className:"Result",rows:"10",value:this.state.received,placeholder:"Waiting on message...",readOnly:!0})),o.a.createElement("div",null,this.state.decryptDisabled?o.a.createElement("button",{id:"decryptButton",className:"DecryptButton",disabled:!0},"DECRYPT"):o.a.createElement("button",{id:"decryptButton",className:"DecryptButton",onClick:function(){var e=document.getElementById("resultTxt").value,t=document.getElementById("psw_input"),a=new m.a(t.value).decrypt(e);document.getElementById("resultTxt").value=a}},"DECRYPT"),o.a.createElement("button",{id:"resetButton",className:"ResetButton",onClick:function(){e.setState({received:"",receivedData:new Uint8Array([]),message:"",sendButtonTxt:"SEND 1/1",decryptDisabled:!0,downloadDisabled:!0}),e.payloadCount=0,e.payloadCountMax=1,e.payloadChunks=[]}},"RESET"),this.state.downloadDisabled?o.a.createElement("button",{id:"downloadButton",className:"DownloadButton",disabled:!0},"DOWNLOAD"):o.a.createElement("button",{id:"downloadButton",className:"DownloadButton",onClick:function(){e.downloadByteArray("test.txt",e.state.receivedData)}},"DOWNLOAD"))):o.a.createElement("button",{className:"StartButton",onClick:function(){e.startSDK()}},"START"),o.a.createElement("div",{className:"extra"}),o.a.createElement("footer",{className:"Footer"},o.a.createElement("span",null,"Offline version can be downloaded at "),o.a.createElement("a",{href:"https://github.com"},"Github")))}}]),t}(o.a.Component)),f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function v(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(o.a.createElement(g,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat(".","/service-worker.js");f?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):v(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):v(t,e)})}}()}},[[22,1,2]]]);
//# sourceMappingURL=main.ddac6a8f.chunk.js.map