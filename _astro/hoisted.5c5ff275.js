const l="ABCDEFGHIJKLMNOPQRSTUVWXYZ";let a=null;document.getElementById("hackedEffect").onmouseover=t=>{let e=0;clearInterval(a),a=setInterval(()=>{t.target.innerText=t.target.innerText.split("").map((n,r)=>r<e?t.target.dataset.value[r]:l[Math.floor(Math.random()*26)]).join(""),e>=t.target.dataset.value.length&&clearInterval(a),e+=1/3},30)};