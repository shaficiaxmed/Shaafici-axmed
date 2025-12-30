/**
 * PROJECT: JavaScript Chapters 7-9 Portfolio
 * STUDENT: Shaafici Axmed Ibraahim
 * ID: C6240421
 * UNIVERSITY: JUST University
 * TEACHER: Jamilla Hassan Mohamett
 */

// ===== THEME & STYLING =====
const PRIMARY_COLOR = "#1a73e8"; 
const DARK_BG = "#1a1b1e";

document.body.style.margin = "0";
document.body.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
document.body.style.backgroundColor = "#f0f2f5";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.minHeight = "100vh";

// Create and inject CSS
const styleTag = document.createElement("style");
styleTag.textContent = `
  .chapter-btn { 
    display: flex; align-items: center; justify-content: space-between;
    background: white; padding: 25px; border-radius: 12px; margin-bottom: 15px;
    cursor: pointer; border: 1px solid #ddd; transition: 0.3s;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }
  .chapter-btn:hover { 
    transform: translateY(-5px); border-color: ${PRIMARY_COLOR}; 
    box-shadow: 0 6px 15px rgba(26,115,232,0.2); 
  }
  .chapter-icon { font-size: 30px; margin-right: 20px; color: ${PRIMARY_COLOR}; font-weight: bold; }
  .chapter-info { flex-grow: 1; text-align: left; }
  .chapter-info h2 { margin: 0; color: #333; font-size: 20px; }
  
  pre { background: #1e1e1e; color: #d4d4d4; padding: 10px; border-radius: 6px; overflow-x: auto; font-size: 11px; margin: 10px 0; max-height: 100px; }
  .example-div { border: 1px solid #eee; padding: 15px; background: white; border-radius: 12px; display: flex; flex-direction: column; justify-content: space-between; transition: 0.3s; height: 100%; box-sizing: border-box;}
  .example-div:hover { box-shadow: 0 8px 20px rgba(0,0,0,0.1); transform: scale(1.01); }
  
  .nav-link { color: white; padding: 15px 20px; text-decoration: none; font-weight: bold; cursor: pointer; }
  .nav-link:hover { background: rgba(255,255,255,0.15); }
  
  #sidebar { position: fixed; left: -260px; top: 0; width: 250px; height: 100%; background: ${DARK_BG}; color: white; transition: 0.3s; z-index: 1001; padding-top: 60px; }
  #sidebar a { display: block; color: #ccc; padding: 15px 25px; text-decoration: none; border-bottom: 1px solid #333; }
  #overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: none; z-index: 1000; }
`;
document.head.appendChild(styleTag);

// ===== SIDEBAR & OVERLAY =====
const sidebar = document.createElement("div");
sidebar.id = "sidebar";
sidebar.innerHTML = `<h3 style="text-align:center; color:${PRIMARY_COLOR}">MENU</h3>`;
document.body.appendChild(sidebar);

const overlay = document.createElement("div");
overlay.id = "overlay";
document.body.appendChild(overlay);

const menuBtn = document.createElement("button");
menuBtn.innerHTML = "☰";
menuBtn.style.cssText = `position:fixed; top:12px; left:12px; z-index:1002; background:${PRIMARY_COLOR}; color:white; border:none; padding:8px 12px; font-size:20px; cursor:pointer; border-radius:4px;`;
document.body.appendChild(menuBtn);

function toggleMenu() {
  const isOpen = sidebar.style.left === "0px";
  sidebar.style.left = isOpen ? "-260px" : "0px";
  overlay.style.display = isOpen ? "none" : "block";
}
menuBtn.onclick = toggleMenu;
overlay.onclick = toggleMenu;

// ===== HEADER & NAVIGATION =====
const header = document.createElement("header");
header.style.cssText = `background:${PRIMARY_COLOR}; color:white; padding:15px; text-align:center; font-size:22px; font-weight:bold; letter-spacing:1px;`;
header.textContent = "JAVASCRIPT PROJECT";
document.body.appendChild(header);

const nav = document.createElement("nav");
nav.style.cssText = `background:#202124; display:flex; justify-content:center; position:sticky; top:0; z-index:999;`;
document.body.appendChild(nav);

["home", "about", "contact"].forEach(page => {
  const tLink = document.createElement("a");
  tLink.className = "nav-link";
  tLink.textContent = page.toUpperCase();
  tLink.onclick = () => loadPage(page);
  nav.appendChild(tLink);

  const sLink = document.createElement("a");
  sLink.textContent = page.toUpperCase();
  sLink.href = "#";
  sLink.onclick = (e) => { e.preventDefault(); loadPage(page); toggleMenu(); };
  sidebar.appendChild(sLink);
});

const main = document.createElement("main");
main.style.cssText = "flex:1; padding:30px 15px; max-width:1100px; margin:0 auto; width:100%; box-sizing:border-box;";
document.body.appendChild(main);

// ===== CHAPTER DATA =====
// Note: All 'code' properties are now template literals (strings inside backticks)
const chaptersData = {
  chapter7: { title: "Chapter 7: JavaScript Objects", examples: [
    { title: "Object Literal", code: `const user = {name:"Shaafici", age:22}; return user.name;` },
    { title: "Dot Access", code: `const car = {make:"bmw"}; return car.make;` },
    { title: "Bracket Access", code: `const st = {id:"C5240069"}; return st["id"];` },
    { title: "Add Property", code: `const o = {}; o.color="Red"; return o.color;` },
    { title: "Delete Prop", code: `const o = {a:1, b:2}; delete o.a; return JSON.stringify(o);` },
    { title: "Method Call", code: `const o = {greet(){return "Hi!"}}; return o.greet();` },
    { title: "Nested Object", code: `const o = {a:{b:5}}; return o.a.b;` },
    { title: "Object.keys", code: `return Object.keys({x:1, y:2});` },
    { title: "Object.values", code: `return Object.values({x:1, y:2});` },
    { title: "Object.entries", code: `return JSON.stringify(Object.entries({a:1}));` },
    { title: "JSON Stringify", code: `return JSON.stringify({id:101});` },
    { title: "JSON Parse", code: `return JSON.parse('{"status":"OK"}').status;` },
    { title: "In Operator", code: `return "age" in {age:20};` },
    { title: "Object Assign", code: `return JSON.stringify(Object.assign({a:1},{b:2}));` },
    { title: "Spread Operator", code: `const a={x:1}; return JSON.stringify({...a, y:2});` },
    { title: "Freeze Object", code: `const o = {n:1}; Object.freeze(o); o.n=2; return o.n;` },
    { title: "Shorthand", code: `const name="Shaafici"; return JSON.stringify({name});` },
    { title: "Looping", code: `let res=""; for(let k in {a:1,b:2}) res+=k; return res;` },
    { title: "Destructuring", code: `const {id} = {id:77, n:"A"}; return id;` },
    { title: "HasOwnProp", code: `return {a:1}.hasOwnProperty("a");` }
  ]},
  chapter8: { title: "Chapter 8: DOCUMENT OBJECT MODEL", examples: [
    { title: "Change Text", html: "<div id='b1'>Old</div>", code: `document.getElementById('b1').innerText='Updated!';` },
    { title: "Text Color", html: "<p id='b2'>Color</p>", code: `document.getElementById('b2').style.color='blue';` },
    { title: "Background", html: "<div id='b3'>BG</div>", code: `document.getElementById('b3').style.background='yellow';` },
    { title: "Hide Element", html: "<div id='b4'>Hide</div>", code: `document.getElementById('b4').style.display='none';` },
    { title: "Show Element", html: "<div id='b5' style='display:none'>Show</div>", code: `document.getElementById('b5').style.display='block';` },
    { title: "innerHTML", html: "<div id='b6'></div>", code: `document.getElementById('b6').innerHTML='<b>Bold HTML</b>';` },
    { title: "Create Element", html: "<div id='b7'></div>", code: `const p = document.createElement('p'); p.innerText='New Child'; document.getElementById('b7').appendChild(p);` },
    { title: "Remove Element", html: "<div><span id='b8'>Delete Me</span></div>", code: `document.getElementById('b8').remove();` },
    { title: "Set Attribute", html: "<img id='b9' width='20'>", code: `document.getElementById('b9').setAttribute('width','100');` },
    { title: "Get Attribute", html: "<div id='b10' title='Useful'></div>", code: `return document.getElementById('b10').getAttribute('title');` },
    { title: "QuerySelector", html: "<p class='q'>Select Me</p>", code: `document.querySelector('.q').style.fontWeight='bold';` },
    { title: "Input Value", html: "<input id='b12' value='Hello'>", code: `return document.getElementById('b12').value;` },
    { title: "Parent Tag", html: "<div><i id='b13'></i></div>", code: `return document.getElementById('b13').parentNode.tagName;` },
    { title: "Children Count", html: "<ul id='b14'><li></li><li></li></ul>", code: `return document.getElementById('b14').children.length;` },
    { title: "Window Title", code: `document.title='JS Hub'; return document.title;` },
    { title: "Font Size", html: "<p id='b16'>Size</p>", code: `document.getElementById('b16').style.fontSize='30px';` },
    { title: "Visibility", html: "<div id='b17'>Visible</div>", code: `document.getElementById('b17').style.visibility='hidden';` },
    { title: "Opacity", html: "<div id='b18'>Fade</div>", code: `document.getElementById('b18').style.opacity='0.2';` },
    { title: "Border Change", html: "<div id='b19'>Box</div>", code: `document.getElementById('b19').style.border='2px solid red';` },
    { title: "Append Text", html: "<div id='b20'>Hello </div>", code: `document.getElementById('b20').append('World');` }
  ]},
  chapter9: { title: "Chapter 9: Events & Validation", examples: [
    { title: "On Click", html: "<button id='e1'>Click Me</button>", init: () => { document.getElementById('e1').onclick=()=>alert('Waad gujisay!'); } },
    { title: "Double Click", html: "<button id='e_dbl' style='background:purple; color:white;'>Double Click</button>", init: () => { document.getElementById('e_dbl').ondblclick=()=>alert('Double Click Success!'); } },
    { title: "Mouse Over", html: "<div id='e2a' style='width:100px;height:40px;background:red;color:white;display:flex;align-items:center;justify-content:center;margin:auto;'>Over Me</div>", init: () => { 
        document.getElementById('e2a').onmouseover=function(){this.style.background='blue'; this.innerText='Gudaha!'};
    }},
    { title: "Mouse Out", html: "<div id='e2b' style='width:100px;height:40px;background:green;color:white;display:flex;align-items:center;justify-content:center;margin:auto;'>Out of Me</div>", init: () => { 
        document.getElementById('e2b').onmouseout=function(){this.style.background='orange'; this.innerText='Dibadda!'};
    }},
    { title: "On Input", html: "<input id='e4' placeholder='Qor wax...'><p id='e4p' style='font-size:12px; color:blue;'></p>", init: () => { document.getElementById('e4').oninput=function(){document.getElementById('e4p').innerText='Live: ' + this.value}; } },
    { title: "On Change", html: "<select id='e5'><option>Dooro...</option><option>JavaScript</option><option>Python</option></select>", init: () => { document.getElementById('e5').onchange=function(){alert('Selected: ' + this.value)}; } },
    { title: "On Focus", html: "<input id='e6a' placeholder='Focus me...'>", init: () => { document.getElementById('e6a').onfocus=function(){this.style.border='3px solid gold'; this.style.background='lightyellow'}; }},
    { title: "On Blur", html: "<input id='e6b' placeholder='Blur me...'>", init: () => { document.getElementById('e6b').onblur=function(){this.style.background='pink'; alert('Waad ka baxday (Blur)!')}; }},
    { title: "Key Down", html: "<input id='e14' placeholder='Keyboard...'><p id='e14p'></p>", init: () => { 
        document.getElementById('e14').onkeydown=(e)=> document.getElementById('e14p').innerText = 'Key: ' + e.key;
    }},
    { title: "Form Submit", html: "<form id='vForm'><input id='vIn' placeholder='Magaca' required style='margin-bottom:5px'><br><button type='submit'>Submit</button></form>", init: () => { 
        document.getElementById('vForm').onsubmit=(e)=>{
            e.preventDefault(); 
            alert('Form Submitted Successfully!');
        }; 
    }}
  ]}
};


// ===== PAGE ROUTING =====
function loadPage(pageKey) {
  main.innerHTML = "";
  window.scrollTo(0,0);

  if (pageKey === "home") {
    const listContainer = document.createElement("div");
    listContainer.style.marginTop = "20px";
    
    // Corrected the titles here
    const order = [
      { id: 'chapter7', t: 'Objects', i: 'CH7', d: '' },
      { id: 'chapter8', t: 'Document Object Model', i: 'CH8', d: '' },
      { id: 'chapter9', t: 'Events & Validation', i: 'CH9', d: '' }
    ];

    order.forEach(c => {
      const btn = document.createElement("div");
      btn.className = "chapter-btn";
      btn.onclick = () => openChapter(c.id);
      btn.innerHTML = `
        <div class="chapter-icon">${c.i}</div>
        <div class="chapter-info">
          <h2>${c.t}</h2>
          <p>${c.d}</p>
        </div>
        <div style="color:${PRIMARY_COLOR}; font-weight:bold;"></div>
      `;
      listContainer.appendChild(btn);
    });
    main.appendChild(listContainer);

  } else if (pageKey === "about") {
    main.innerHTML = `
      <div style="background:white; border-radius:15px; box-shadow:0 10px 30px rgba(0,0,0,0.1); padding:40px; max-width:700px; margin:20px auto; text-align:center; border-top:10px solid ${PRIMARY_COLOR};">
        <div style="margin-bottom: 30px;">
          <img src="sh.jpeg" style="width:350px; height:350px; border-radius:12px; object-fit:cover; border:6px solid #f0f2f5; box-shadow: 0 5px 15px rgba(0,0,0,0.1);" onerror="this.src='https://via.placeholder.com/200/1a73e8/FFFFFF?text=Shaafici'">
        </div>
        <div style="text-align:left; line-height:2.2; padding:20px; font-size:18px; background:#f9f9f9; border-radius:12px; border-left:5px solid ${PRIMARY_COLOR};">
          <p><strong>Full Name:</strong> Shaafici Axmed Ibraahim</p>
          <p><strong>Student ID:</strong> C5240069</p>
          <p><strong>Subject:</strong> JS Chapters 7-9 Project</p>
          <p><strong>Teacher:</strong> Ustaad Jamiila</p>
          <p><strong>University:</strong> JUST University</p>
          <p><strong>DATE:</strong> 25/12/2025 </p>
        </div>
      </div>
    `;
  } else if (pageKey === "contact") {
    main.innerHTML = `<div style="background:white; padding:40px; border-radius:15px; text-align:center; box-shadow:0 4px 10px rgba(0,0,0,0.05);">
      <h2 style="color:${PRIMARY_COLOR}">Contact Me</h2>
      <p>Email: <b>shaafia862@email.com</b></p>
      <p>Phone: <b>+252624765693</b></p>
    </div>`;
  }
}

// ===== GRID VIEW FOR EXAMPLES =====
function openChapter(id) {
  main.innerHTML = "";
  const data = chaptersData[id];
  
  const headerDiv = document.createElement("div");
  headerDiv.style.cssText = "display:flex; justify-content:space-between; align-items:center; margin-bottom:25px; background:white; padding:15px; border-radius:10px; box-shadow:0 2px 5px rgba(0,0,0,0.05);";
  headerDiv.innerHTML = `<h2 style="color:${PRIMARY_COLOR}; margin:0;">${data.title}</h2>`;
  
  const back = document.createElement("button");
  back.textContent = "← DIB U NOQO";
  back.style.cssText = `padding:10px 15px; background:red; color:white; border:none; border-radius:5px; cursor:pointer; font-weight:bold; transition:0.3s;`;
  back.onclick = () => loadPage("home");
  headerDiv.appendChild(back);
  main.appendChild(headerDiv);

  const grid = document.createElement("div");
  grid.style.cssText = "display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:20px; align-items: stretch;";
  main.appendChild(grid);

  data.examples.forEach((ex, i) => {
    const div = document.createElement("div");
    div.className = "example-div";
    div.innerHTML = `<h4 style="color:${PRIMARY_COLOR}; margin:0 0 10px 0; border-bottom:1px solid #eee; padding-bottom:5px;">${i+1}. ${ex.title}</h4>`;
    
    if(ex.html) {
      const demo = document.createElement("div");
      demo.style.cssText = "padding:15px; border:1px dashed #ccc; margin-bottom:10px; background:#fafafa; border-radius:8px; min-height:80px; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; font-size:12px; color:#555;";
      demo.innerHTML = ex.html;
      div.appendChild(demo);
      // Wait for DOM to update then init events
      if(ex.init) setTimeout(ex.init, 0);
    }
    
    if(ex.code) {
      const pr = document.createElement("pre");
      pr.textContent = ex.code;
      div.appendChild(pr);
      
      const b = document.createElement("button");
      b.textContent = "RUN GAREEY";
      b.style.cssText = `background:${PRIMARY_COLOR}; color:white; border:none; padding:10px; border-radius:6px; cursor:pointer; font-weight:bold; width:100%; transition:0.2s;`;
      
      const out = document.createElement("div");
      out.style.cssText = "margin-top:12px; padding:8px; background:#e8f0fe; border-radius:4px; font-size:12px; font-weight:bold; min-height:20px; color:#1a73e8; text-align:center; visibility:hidden;";
      
      b.onclick = () => { 
        try { 
          // Note: new Function is used here to execute the string as code
          const r = new Function(ex.code)(); 
          out.textContent = "  " + (r !== undefined ? r : "Done"); 
          out.style.visibility = "visible";
          out.style.color = "#1a73e8";
        } catch(e) { 
          out.textContent = "Error: " + e.message; 
          out.style.visibility = "visible";
          out.style.color = "red"; 
        } 
      };
      div.appendChild(b); 
      div.appendChild(out);
    }
    grid.appendChild(div);
  });
}

// ===== FOOTER =====
const footer = document.createElement("footer");
footer.style.cssText = `
  background: ${PRIMARY_COLOR}; 
  color: white; 
  padding: 20px; 
  margin-top: auto; 
  font-size: 15px; 
  font-weight: bold; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  letter-spacing: 0.5px;
  border-top: 1px solid rgba(255,255,255,0.2);
`;
footer.innerHTML = `&copy; 2026 Shaafici Axmed Ibraahim `;
document.body.appendChild(footer);
loadPage("home");