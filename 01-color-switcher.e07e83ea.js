!function(){var t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),body:document.querySelector("body")},n=!0,e=null;function o(){t.body.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}t.startBtn.addEventListener("click",(function(){n&&(e=setInterval(o,1e3),n=!n)})),t.stopBtn.addEventListener("click",(function(){clearInterval(e),n=!n}))}();
//# sourceMappingURL=01-color-switcher.e07e83ea.js.map