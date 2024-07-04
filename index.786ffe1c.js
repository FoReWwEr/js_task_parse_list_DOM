var r,e=Array.from(document.querySelectorAll("ul > li")),t=function(r){return parseFloat(r.replaceAll("$","").replaceAll(",",""))};e.sort(function(r,e){var a=t(r.getAttribute("data-salary"));return t(e.getAttribute("data-salary"))-a}),(r=document.querySelector("ul")).innerHTML="",e.forEach(function(e){r.appendChild(e)});
//# sourceMappingURL=index.786ffe1c.js.map
