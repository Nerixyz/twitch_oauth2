"use strict";const builtinThemes=["light","dark","ayu"];const darkThemes=["dark","ayu"];window.currentTheme=document.getElementById("themeStyle");const settingsDataset=(function(){const settingsElement=document.getElementById("default-settings");return settingsElement&&settingsElement.dataset?settingsElement.dataset:null})();function getSettingValue(settingName){const current=getCurrentValue(settingName);if(current===null&&settingsDataset!==null){const def=settingsDataset[settingName.replace(/-/g,"_")];if(def!==undefined){return def}}return current}const localStoredTheme=getSettingValue("theme");function hasClass(elem,className){return elem&&elem.classList&&elem.classList.contains(className)}function addClass(elem,className){if(elem&&elem.classList){elem.classList.add(className)}}function removeClass(elem,className){if(elem&&elem.classList){elem.classList.remove(className)}}function onEach(arr,func){for(const elem of arr){if(func(elem)){return true}}return false}function onEachLazy(lazyArray,func){return onEach(Array.prototype.slice.call(lazyArray),func)}function updateLocalStorage(name,value){try{window.localStorage.setItem("rustdoc-"+name,value)}catch(e){}}function getCurrentValue(name){try{return window.localStorage.getItem("rustdoc-"+name)}catch(e){return null}}const getVar=(function getVar(name){const el=document.querySelector("head > meta[name='rustdoc-vars']");return el?el.attributes["data-"+name].value:null});function switchTheme(newThemeName,saveTheme){if(saveTheme){updateLocalStorage("theme",newThemeName)}document.documentElement.setAttribute("data-theme",newThemeName);if(builtinThemes.indexOf(newThemeName)!==-1){if(window.currentTheme){window.currentTheme.parentNode.removeChild(window.currentTheme);window.currentTheme=null}}else{const newHref=getVar("root-path")+newThemeName+getVar("resource-suffix")+".css";if(!window.currentTheme){if(document.readyState==="loading"){document.write(`<link rel="stylesheet" id="themeStyle" href="${newHref}">`);window.currentTheme=document.getElementById("themeStyle")}else{window.currentTheme=document.createElement("link");window.currentTheme.rel="stylesheet";window.currentTheme.id="themeStyle";window.currentTheme.href=newHref;document.documentElement.appendChild(window.currentTheme)}}else if(newHref!==window.currentTheme.href){window.currentTheme.href=newHref}}}const updateTheme=(function(){const mql=window.matchMedia("(prefers-color-scheme: dark)");function updateTheme(){if(getSettingValue("use-system-theme")!=="false"){const lightTheme=getSettingValue("preferred-light-theme")||"light";const darkTheme=getSettingValue("preferred-dark-theme")||"dark";updateLocalStorage("use-system-theme","true");switchTheme(mql.matches?darkTheme:lightTheme,true)}else{switchTheme(getSettingValue("theme"),false)}}mql.addEventListener("change",updateTheme);return updateTheme})();if(getSettingValue("use-system-theme")!=="false"&&window.matchMedia){if(getSettingValue("use-system-theme")===null&&getSettingValue("preferred-dark-theme")===null&&darkThemes.indexOf(localStoredTheme)>=0){updateLocalStorage("preferred-dark-theme",localStoredTheme)}}updateTheme();if(getSettingValue("source-sidebar-show")==="true"){addClass(document.documentElement,"src-sidebar-expanded")}if(getSettingValue("hide-sidebar")==="true"){addClass(document.documentElement,"hide-sidebar")}function updateSidebarWidth(){const desktopSidebarWidth=getSettingValue("desktop-sidebar-width");if(desktopSidebarWidth&&desktopSidebarWidth!=="null"){document.documentElement.style.setProperty("--desktop-sidebar-width",desktopSidebarWidth+"px")}const srcSidebarWidth=getSettingValue("src-sidebar-width");if(srcSidebarWidth&&srcSidebarWidth!=="null"){document.documentElement.style.setProperty("--src-sidebar-width",srcSidebarWidth+"px")}}updateSidebarWidth();window.addEventListener("pageshow",ev=>{if(ev.persisted){setTimeout(updateTheme,0);setTimeout(updateSidebarWidth,0)}})