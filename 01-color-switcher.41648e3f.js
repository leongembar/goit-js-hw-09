const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),body:document.querySelector("body")};let e=!0,n=null;function o(){t.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.startBtn.addEventListener("click",(function(){e&&(n=setInterval(o,1e3),e=!e)})),t.stopBtn.addEventListener("click",(function(){clearInterval(n),e=!e}));
//# sourceMappingURL=01-color-switcher.41648e3f.js.map