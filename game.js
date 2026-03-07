// ==================== GLOBAL VARS ====================
let gameInitialized = false;
let State, gameData, fileSystem;
let currentPath = "My Computer";

// ==================== STATE & DATA ====================
function initState() {
    State = {
        stage: 'bios', chkdskRun: false, audioDriver: false, audioReversed: false,
        firewallRuleAdded: false, surveyPassed: false, rebelSurveyPassed: false,
        colorSynced: false, viewedPhoto: false, resonanceSynced: false,
        hostsHacked: false, wellnessTerminated: false, surveyFails: 0,
        petDead: false, ambPlaying: false,
        userNotes: Lang.texts.userNotesInit,
        unlockedLogs: [], assetUnlocked: false, easterEggs:[]
    };
}

function initGameData() {
    gameData = {
        passwords: { bios: "1999", firewall: "LINGFREI0419", asset: "Abyss", fatherLog2: "0908" },
        network: { ip: "211.8.8.9", port: "1999" },
        targetColor: { r:186, g:220, b:88 },
        resonanceTarget: { alpha:4, beta:99, gamma:8 }
    };
}

function initFileSystem() {
    fileSystem = {[Lang.apps.explorer.title]: { type:"root", content:{
        "C:": { type:"drive", content:{
            [Lang.files.autoexec]: { type:"file", hidden:true, content: Lang.texts.autoexec },
            "Windows": { type:"dir", content:{
                "System32": { type:"dir", content:{
                    "drivers": { type:"dir", content:{ "etc": { type:"dir", content:{ [Lang.files.hosts]: { type:"file", content: Lang.texts.hostsInit } } } }},
                    [Lang.files.aeroSys]: { type:"system", content:"SystemCore" }
                }}
            }},
            "Users": { type:"dir", content:{
                "Ling": { type:"dir", content:{
                    "Documents": { type:"dir", content:{
                        [Lang.files.diary2]: { type:"file", content:Lang.texts.diary2 }, [Lang.files.brandGuide]: { type:"file", content:Lang.texts.brandGuide }, [Lang.files.loreList]: { type:"file", content:Lang.texts.loreList },
                    }},
                    "Music": { type:"dir", content:{ [Lang.files.audio]: { type:"audio", content:"9.9.8.8.1.1.2", reversed:"211.8.8.9" } }}
                }},
                "Public": { type:"dir", content:{ [Lang.files.loreChat]: { type:"file", content:Lang.texts.loreChat }, [Lang.files.loreRules]: { type:"file", content:Lang.texts.loreRules } }}
            }},
            "Terra_Corp": { type:"dir", content:{
                "Admin": { type:"dir", content:{ [Lang.files.packagerExe]: { type:"exe", action:openPackager } }},
                "Logs": { type:"dir", content:{ [Lang.files.fatherLog1]: { type:"file", content:Lang.texts.fatherLog1 }, [Lang.files.fatherLog2]: { type:"file", locked:true, password:gameData.passwords.fatherLog2, content:Lang.texts.fatherLog2 } }}
            }}
        }},
        "D:": { type:"drive", content:{
            "Drivers": { type:"dir", content:{ [Lang.files.audioDriverExe]: { type:"exe", action:installAudioDriver } }}
        }}
    }}};
    currentPath = Lang.apps.explorer.title;
}

// 补全：音频驱动安装逻辑
function installAudioDriver() {
    if (State.audioDriver) { toastOk(Lang.toasts.audioDriverOk); return; }
    playClickSound();
    setTimeout(() => {
        State.audioDriver = true;
        saveState();
        playSuccessSound();
        toastOk(Lang.toasts.audioDriverOk);
    }, 1000);
}

// 补全：CHKDSK逻辑
function runChkdsk(){
    const btn=document.querySelector('#recycleContent button'); if(btn) btn.disabled=true;
    playTypeSound();
    setTimeout(()=>{
        State.chkdskRun=true; saveState(); playSuccessSound();
        const rc=document.getElementById('recycleContent');
        if(rc) rc.innerHTML=`<p style="color:green;">${Lang.toasts.chkdskOk}</p>`;
        const ico=document.createElement('div'); ico.className='icon'; ico.id='diary1Icon'; ico.style.cssText='display:flex;';
        ico.innerHTML=`<div class="icon-img">📝</div><span>${Lang.files.diary1}</span>`;
        ico.onclick=()=>openWin('notepadWin', Lang.files.diary1, Lang.texts.diary1);
        document.getElementById('iconGrid').appendChild(ico);
    }, 2000);
}

// localStorage 存档/读档
function saveState() { try { localStorage.setItem('abyss_state', JSON.stringify(State)); } catch(e){} }
function loadState() {
    try {
        const s = localStorage.getItem('abyss_state');
        if (s) {
            const loadedState = JSON.parse(s);
            Object.assign(State, loadedState);
            if (!State.unlockedLogs) State.unlockedLogs =[];
            if (!State.easterEggs) State.easterEggs =[];
            if (State.userNotes === null || State.userNotes === undefined) { State.userNotes = Lang.texts.userNotesInit; }
        }
    } catch(e){}
}

// ==================== I18N SYSTEM ====================
function initI18n() {
    document.body.style.fontFamily = Lang.ui.sysFont;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const keys = el.getAttribute('data-i18n').split('.');
        let val = window.Lang;
        keys.forEach(k => { if(val !== undefined) val = val[k]; });
        if (val !== undefined) el.innerHTML = val;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const keys = el.getAttribute('data-i18n-placeholder').split('.');
        let val = window.Lang;
        keys.forEach(k => { if(val !== undefined) val = val[k]; });
        if (val !== undefined) el.placeholder = val;
    });
}

// ==================== TOAST & UI & EXPLORER ====================
let toastQueue =[];
function toast(msg, type='', duration=4500) { const box = document.getElementById('toastBox'); const t = document.createElement('div'); t.className = 'toast' + (type ? ' '+type : ''); t.innerHTML = `<span class="tc" onclick="this.parentElement.remove()">✕</span>${msg.replace(/\n/g,'<br>')}`; box.appendChild(t); requestAnimationFrame(()=>{ requestAnimationFrame(()=>{ t.classList.add('show'); }); }); setTimeout(()=>{ t.classList.remove('show'); setTimeout(()=>t.remove(), 250); }, duration); }
function toastOk(msg, dur) { toast(msg,'ok',dur); }
function toastErr(msg, dur) { toast(msg,'err',dur); }
function toastLore(msg, dur=6000) { toast(msg,'lore',dur); }
function toastWarn(msg, dur) { toast(msg,'warn',dur); }

const openWindows = {};
let zIndex = 200;

function openWin(id, title, content) {
    const el = document.getElementById(id); if (!el) return;
    if (id === 'notepadWin') {
        el.dataset.currentFile = title || '';
        document.getElementById('notepadContent').value = content || '';
        const tbar = el.querySelector('.title-bar span');
        if(tbar) tbar.textContent = Lang.apps.notepad.title + ' — ' + (title||'');
        const saveContainer = document.getElementById('notepadSaveContainer');
        if (saveContainer) {
            saveContainer.style.display = (title === Lang.files.hosts || title === Lang.files.userNotes) ? 'block' : 'none';
        }
    }
    el.style.display = 'flex'; el.style.zIndex = ++zIndex;
    openWindows[id] = { title: title || el.querySelector('.title-bar span')?.textContent || id, el };
    updateTaskbar(); playOpenSound();
}

function closeWin(id) { const el=document.getElementById(id); if(el){el.style.display='none'; el.classList.remove('minimized');} delete openWindows[id]; updateTaskbar(); playCloseSound(); }
function minimizeWin(id) { const el=document.getElementById(id); if(!el)return; el.style.display='none'; if(openWindows[id]) openWindows[id].minimized=true; updateTaskbar(); playCloseSound(); }
function restoreWin(id) { const el=document.getElementById(id); if(!el)return; el.style.display='flex'; el.style.zIndex=++zIndex; if(openWindows[id]) openWindows[id].minimized=false; updateTaskbar(); }
function updateTaskbar() {
    const tb = document.getElementById('tbWins'); if (!tb) return; tb.innerHTML = '';
    for (const [id, info] of Object.entries(openWindows)) {
        const btn = document.createElement('button'); btn.className = 'tb-win-btn' + (info.minimized ? '' : ' active');
        btn.textContent = (info.title||id).substring(0,18); btn.title = info.title || id;
        btn.onclick = () => { if (info.minimized) restoreWin(id); else minimizeWin(id); };
        tb.appendChild(btn);
    }
}
function updateClock() { const el=document.getElementById('clock'); if(el) el.textContent=new Date().toLocaleTimeString(Lang.meta.code, {hour:'2-digit',minute:'2-digit'}); }
function initDragAndDrop() { document.querySelectorAll('.window').forEach(attachDrag); }
function attachDrag(win) {
    const bar = win.querySelector('.title-bar'); if (!bar) return; let ox=0,oy=0,dragging=false;
    bar.addEventListener('mousedown',e=>{ if(e.target.classList.contains('wbtn')) return; dragging=true; ox=e.clientX-win.offsetLeft; oy=e.clientY-win.offsetTop; win.style.zIndex=++zIndex; e.preventDefault(); });
    document.addEventListener('mousemove',e=>{ if(dragging){ win.style.left=(e.clientX-ox)+'px'; win.style.top=(e.clientY-oy)+'px'; }});
    document.addEventListener('mouseup',()=>{ dragging=false; });
}

// 补全：资源管理器逻辑
function getFsObject(path) {
    const parts = path.split('\\');
    let curr = fileSystem[parts[0]];
    for (let i = 1; i < parts.length; i++) {
        if (!parts[i]) continue;
        if (curr && curr.type === 'drive' && curr.content[parts[i]]) {
            curr = curr.content[parts[i]];
        } else if (curr && (curr.type === 'dir' || curr.type === 'root') && curr.content && curr.content[parts[i]]) {
            curr = curr.content[parts[i]];
        } else {
            return null;
        }
    }
    return curr.content;
}

function openExplorer(path) {
    if (path) currentPath = path;
    openWin('explorerWin');
    document.getElementById('explorerPath').textContent = currentPath;
    document.getElementById('explorerTitle').textContent = currentPath;
    renderExplorer();
}

function goUp() {
    if (currentPath === Lang.apps.explorer.title) return;
    const parts = currentPath.split('\\');
    parts.pop();
    currentPath = parts.join('\\');
    if (!currentPath) currentPath = Lang.apps.explorer.title;
    openExplorer(currentPath);
}

function renderExplorer() {
    const list = document.getElementById('explorerList'); list.innerHTML = '';
    const content = getFsObject(currentPath);
    if (!content) return;

    for (const [name, item] of Object.entries(content)) {
        if (item.hidden && !State.stage==='aero') continue;
        const li = document.createElement('li');
        li.style.cssText = "padding:2px 4px;display:flex;align-items:center;gap:6px;";
        li.onmouseover = () => li.style.background = '#000080';
        li.onmouseout = () => li.style.background = 'transparent';
        li.onmouseover = () => { li.style.background = '#000080'; li.style.color = '#fff'; };
        li.onmouseout = () => { li.style.background = 'transparent'; li.style.color = '#000'; };
        
        let iconStr = '📄';
        if (item.type === 'drive') iconStr = '💽';
        else if (item.type === 'dir') iconStr = '📁';
        else if (item.type === 'exe') iconStr = '🚀';
        else if (item.type === 'audio') iconStr = '🎵';

        li.innerHTML = `<span style="font-size:16px;">${iconStr}</span><span>${name}</span>`;
        li.onclick = () => handleExplorerClick(name, item);
        list.appendChild(li);
    }
}

function handleExplorerClick(name, item) {
    if (item.type === 'drive' || item.type === 'dir') {
        currentPath += (currentPath.endsWith('\\') ? '' : '\\') + name;
        openExplorer(currentPath);
    } else if (item.locked) {
        checkFilePassword(item);
    } else if (item.type === 'file') {
        openWin('notepadWin', name, item.content);
    } else if (item.type === 'exe' && item.action) {
        item.action();
    } else if (item.type === 'audio') {
        playAudioFile(name, item.content, item.reversed);
    }
}

function checkFilePassword(item) {
    const promptTitle = document.getElementById('passwordTitle');
    const promptText = document.getElementById('passwordPromptText');
    const input = document.getElementById('passwordInput');
    const submit = document.getElementById('passwordSubmit');
    
    promptTitle.textContent = Lang.apps.pwd.title;
    promptText.textContent = Lang.apps.pwd.prompt;
    input.value = '';
    openWin('passwordWin');
    
    submit.onclick = () => {
        if (input.value === item.password) {
            playSuccessSound();
            closeWin('passwordWin');
            item.locked = false; 
            saveState();
            openWin('notepadWin', 'Log', item.content);
        } else {
            playErrorSound();
            toastErr(Lang.toasts.pwdError);
        }
    };
}

function createFile(path, name, data) {
    const dir = getFsObject(path);
    if(dir) dir[name] = data;
}

// 补全：音频文件播放
function playAudioFile(name, content, reversed) {
    if (!State.audioDriver) { toastErr(Lang.toasts.noAudioDev); return; }
    openWin('soundRecWin');
    document.getElementById('audioFileName').textContent = name;
    document.getElementById('audioDisplay').textContent = State.audioReversed ? reversed : content;
    document.getElementById('soundRecWin').dataset.reversedContent = reversed;
    playPetSound(); 
}

function reverseAudio() {
    if (State.audioReversed) return;
    State.audioReversed = true;
    const rev = document.getElementById('soundRecWin').dataset.reversedContent;
    if (rev) {
        document.getElementById('audioDisplay').textContent = rev;
        playSuccessSound();
        toastLore(Lang.toasts.audioRevOk.replace('{0}', rev), 6000);
    }
}

// 补全：网络连接
function connectNet() {
    const ip = document.getElementById('netIP').value;
    const port = document.getElementById('netPort').value;
    if (ip === gameData.network.ip && port === gameData.network.port) {
        playSuccessSound(); toastOk(Lang.toasts.netOk, 2000);
        setTimeout(() => {
            toastOk(Lang.toasts.dlComplete, 2000);
            setTimeout(() => switchToAero(), 2500);
        }, 3000);
    } else {
        playErrorSound(); toastErr(Lang.toasts.netErr);
    }
}

// 补全：防火墙
function openFirewall() { openWin('firewallWin'); document.getElementById('fwStatus').textContent = State.firewallRuleAdded ? Lang.apps.firewall.inactive : Lang.apps.firewall.active; document.getElementById('fwStatus').style.color = State.firewallRuleAdded ? 'green' : 'red'; }
function addFirewallRule() {
    const code = document.getElementById('firewallCode').value;
    if (code === gameData.passwords.firewall) {
        State.firewallRuleAdded = true; saveState(); playSuccessSound(); toastOk(Lang.toasts.fwOk);
        document.getElementById('fwStatus').textContent = Lang.apps.firewall.inactive;
        document.getElementById('fwStatus').style.color = 'green';
    } else {
        playErrorSound(); toastErr(Lang.toasts.fwErr, 5000);
    }
}


// ==================== AUDIO SYSTEM ====================
let audioCtx = null;
function getACtx() { if (!audioCtx) audioCtx = new (window.AudioContext||window.webkitAudioContext)(); return audioCtx; }
function beep(freq,dur,type='sine',vol=0.3,delay=0) { try{ const c=getACtx(); const o=c.createOscillator(); const g=c.createGain(); o.connect(g); g.connect(c.destination); o.type=type; o.frequency.setValueAtTime(freq,c.currentTime+delay); g.gain.setValueAtTime(vol,c.currentTime+delay); g.gain.exponentialRampToValueAtTime(0.001,c.currentTime+delay+dur); o.start(c.currentTime+delay); o.stop(c.currentTime+delay+dur); }catch(e){} }
function playOpenSound()  { beep(800,0.06,'square',0.15); setTimeout(()=>beep(1200,0.06,'square',0.15),60); }
function playCloseSound() { beep(600,0.08,'square',0.1); }
function playSuccessSound(){ beep(523,0.1,'sine',0.2); beep(659,0.1,'sine',0.2,0.1); beep(784,0.2,'sine',0.2,0.2); }
function playErrorSound()  { beep(200,0.15,'sawtooth',0.2); beep(150,0.2,'sawtooth',0.2,0.1); }
function playHorrorSound() { for(let i=0;i<6;i++) beep(80+Math.random()*40,0.4,'sawtooth',0.15,i*0.15); }
function playTypeSound()   { beep(1046,0.03,'square',0.08); }
function playClickSound()  { beep(700,0.04,'square',0.1); }
function playBombSound()   { for(let i=0;i<8;i++) beep(50+i*10,0.3,'sawtooth',0.2,i*0.08); }
function playPetSound()    { beep(880,0.08,'sine',0.15); beep(1100,0.08,'sine',0.15,0.1); }
function playPetDeathSound(){ beep(440,0.3,'sine',0.2); beep(330,0.4,'sine',0.2,0.3); beep(220,0.6,'sine',0.2,0.6); }
function playResonanceSound(level){ beep(200+level*400,0.15,'sine',0.1); }
function playBootSound()   {[220,330,440,550,660].forEach((f,i)=>beep(f,0.15,'sine',0.2,i*0.12)); }
let ambNode = null, ambGain = null;
function startAmb(aero=false) { try { stopAmb(); const c=getACtx(); ambGain=c.createGain(); ambGain.gain.setValueAtTime(0.04,c.currentTime); ambGain.connect(c.destination); ambNode=c.createOscillator(); ambNode.type=aero?'sine':'sawtooth'; ambNode.frequency.setValueAtTime(aero?60:80,c.currentTime); if(aero){ ambNode.frequency.linearRampToValueAtTime(55,c.currentTime+4); ambNode.frequency.linearRampToValueAtTime(65,c.currentTime+8); } ambNode.connect(ambGain); ambNode.start(); State.ambPlaying=true; const btn=document.getElementById('ambBtn'); if(btn) btn.textContent=Lang.ui.ambBtnOn; }catch(e){} }
function stopAmb() { try { if(ambNode){ambNode.stop();ambNode=null;} if(ambGain){ambGain.disconnect();ambGain=null;} } catch(e){} State.ambPlaying=false; const btn=document.getElementById('ambBtn'); if(btn) btn.textContent=Lang.ui.ambBtnOff; }
function toggleAmb() { if(State.ambPlaying) stopAmb(); else startAmb(State.stage==='aero'); }

// ==================== AERO / PUZZLES ====================
function showAeroIcons() {['firewallIcon','surveyIcon','colorIcon','dosIcon','assetPackagerIcon','taskMgrIcon','petIcon','mineIcon','photoIcon','diary3Icon','diary4Icon','abyssHintIcon','resonanceIcon'].forEach(id=>{ const el=document.getElementById(id); if(el) el.style.display='flex'; }); }
function switchToAero() {
    document.body.classList.add('frutiger-mode'); State.stage='aero'; saveState();
    ['ico_pet1','ico_paint','ico_calc','ico_imgtut'].forEach(id=>{ const e=document.getElementById(id); if(e) e.style.display='none'; });
    document.querySelectorAll('#iconGrid .icon').forEach(i=>{ if(!i.id) i.style.display='none'; });
    showAeroIcons(); document.querySelectorAll('.window').forEach(w=>{ w.style.display='none'; delete openWindows[w.id]; });
    updateTaskbar(); const sm=document.getElementById('smLabel'); if(sm) sm.textContent=Lang.startMenu.titleAero;
    setTimeout(()=>{ playHorrorSound(); startAmb(true); },600);
}

let surveyRoute='', surveyAnswers=0;
function openSurvey() { surveyRoute=''; surveyAnswers=0; openWin('surveyWin'); renderSurvey(0); }
function renderSurvey(idx) {
    if(idx>=Lang.surveyData.length){
        if(surveyRoute==='corp'){
            State.surveyPassed=true; saveState(); playSuccessSound();
            document.getElementById('surveyContent').innerHTML=`<h3 style='color:green;'>${Lang.apps.survey.passH3}</h3><p>${Lang.apps.survey.passP1}</p><p style='font-size:11px;color:#888;'>${Lang.apps.survey.passP2}</p>`;
            checkAbyssPuzzles(true);
        } else {
            State.rebelSurveyPassed=true; saveState(); playSuccessSound();
            document.getElementById('surveyContent').innerHTML=`<h3 style='color:#880000;'>${Lang.apps.survey.errH3}</h3><p>${Lang.apps.survey.errP1}</p><p style='font-family:monospace;color:#9b59b6;font-size:12px;'>${Lang.apps.survey.errP2}</p>`;
            checkAbyssPuzzles(true); toastLore(Lang.toasts.surveySync,5000);
        } return;
    }
    const q=Lang.surveyData[idx];
    document.getElementById('surveyContent').innerHTML=`<p style="font-size:13px;margin-bottom:16px;">${q.q}</p><div style="display:flex;flex-direction:column;gap:8px;"><button onclick="handleSurveyAnswer('corp',${idx})" style="padding:8px;text-align:left;">${q.corp}</button><button onclick="handleSurveyAnswer('rebel',${idx})" style="padding:8px;text-align:left;">${q.rebel}</button></div><p style="font-size:10px;color:#aaa;margin-top:12px;">${Lang.apps.survey.note}</p>`;
}
function handleSurveyAnswer(route, idx) {
    if(surveyAnswers===0){ surveyRoute=route; }
    else if(surveyRoute!==route){
        State.surveyFails++;
        if(State.surveyFails>=3 && !State.surveyPassed && !State.rebelSurveyPassed){
            createFile(currentPath, Lang.files.failedLog, {type:'file',content:Lang.texts.failedSurveyLog});
            toastErr(Lang.toasts.surveyLock); toastLore(Lang.toasts.surveyRebel,6000); closeWin('surveyWin'); return;
        }
        toastWarn(Lang.toasts.surveyWarn); surveyRoute=''; surveyAnswers=0; renderSurvey(0); return;
    }
    surveyAnswers++; renderSurvey(idx+1);
}

function updateColorPreview() {
    const r=document.getElementById('rVal').value, g=document.getElementById('gVal').value, b=document.getElementById('bVal').value, t=gameData.targetColor;
    document.getElementById('colorPreview').style.background=`rgb(${r},${g},${b})`;
    const st=document.getElementById('colorStatus');
    const diff=Math.abs(r-t.r)+Math.abs(g-t.g)+Math.abs(b-t.b);
    if(diff<80){st.textContent=Lang.apps.color.match;st.style.color='green';} else if(diff<150){st.textContent=Lang.apps.color.sync;st.style.color='#886600';} else{st.textContent=Lang.apps.color.weak;st.style.color='red';}
}
function checkColor() {
    const r=document.getElementById('rVal').value,g=document.getElementById('gVal').value,b=document.getElementById('bVal').value, t=gameData.targetColor;
    if(Math.abs(r-t.r)<50&&Math.abs(g-t.g)<50&&Math.abs(b-t.b)<50){
        playSuccessSound(); State.colorSynced=true; saveState(); toastOk(Lang.toasts.colorOk); checkAbyssPuzzles(true);
    } else { playErrorSound(); toastErr(Lang.toasts.colorErr); }
}

function checkAbyssPuzzles(silent=false) {
    const done={photo:State.viewedPhoto, resonance:State.resonanceSynced, survey:State.rebelSurveyPassed, color:State.colorSynced};
    if(done.photo&&done.resonance&&done.survey&&done.color){
        document.getElementById('finalSyncIcon').style.display='flex';
        if(!silent){ playSuccessSound(); toastOk(Lang.toasts.abyssDone, 7000); } return;
    }
    if(!silent){
        const missing=[]; if(!done.photo) missing.push(Lang.toasts.abyssMiss.photo); if(!done.resonance) missing.push(Lang.toasts.abyssMiss.resonance); if(!done.survey) missing.push(Lang.toasts.abyssMiss.survey); if(!done.color) missing.push(Lang.toasts.abyssMiss.color);
        if(missing.length<4) toastWarn(Lang.toasts.abyssProg + missing.join('\n'),6000);
    }
}

let processes=[{name:'System Idle Process',user:'SYSTEM',critical:false},{name:'explorer.exe',user:'Ling',critical:false},{name:'taskmgr.exe',user:'Ling',critical:false},{name:'notepad.exe',user:'Ling',critical:false},{name:'Wellness.exe',user:'TERRA',critical:true},{name:'svchost.exe',user:'SYSTEM',critical:false},{name:'terra_monitor.exe',user:'TERRA',critical:false}];
function openTaskMgr(){ openWin('taskMgrWin'); renderProcesses(); }
function renderProcesses(){
    const el=document.getElementById('processList');
    el.innerHTML=`<tr style="background:#c0c0c0;"><th style="padding:4px;text-align:left;">${Lang.apps.taskMgr.col1}</th><th>${Lang.apps.taskMgr.col2}</th><th></th></tr>`;
    processes.forEach((p,i)=>{
        const tr=document.createElement('tr'); tr.innerHTML=`<td style="padding:3px 6px;font-size:12px;">${p.name}</td><td style="font-size:12px;">${p.user}</td><td><button style="font-size:11px;" ${p.critical?`onclick="killProcess(${i})"`:'disabled'}>${Lang.apps.taskMgr.btn}</button></td>`; el.appendChild(tr);
    });
}
function killProcess(i){
    if(processes[i].name==='Wellness.exe'){
        playHorrorSound(); State.wellnessTerminated=true; saveState(); processes.splice(i,1); renderProcesses();
        createFile(currentPath, Lang.files.memdump, {type:'file',content:Lang.texts.memdump});
        toastErr(Lang.toasts.taskKill); setTimeout(()=>toastLore(Lang.toasts.taskKillLore,5000),1500); toastWarn(Lang.toasts.taskDump,4000);
    }
}

let dosCurrentPath='C:\\';
function openDos(){ openWin('dosWin'); document.getElementById('dosCmd').focus(); document.getElementById('dosHistory').innerHTML = Lang.dos.boot.replace(/\n/g, '<br>'); }
function handleDos(e){
    if(e.key!=='Enter') return;
    const inp=document.getElementById('dosCmd'), hist=document.getElementById('dosHistory'), cmd=inp.value.trim(); inp.value=''; playTypeSound();
    hist.innerHTML+=`<div>${dosCurrentPath}&gt;${cmd}</div>`; document.getElementById('dosTitle').textContent= Lang.apps.dos.title.replace('C:\\', dosCurrentPath);
    const args=cmd.split(' '), c=args[0].toLowerCase();
    switch(c){
        case 'dir':
            const pp=dosCurrentPath.replace(/\\$/,'').split('\\'), fp=pp[0]==='C:'?Lang.apps.explorer.title+"\\"+pp.join('\\'):Lang.apps.explorer.title; const fo=getFsObject(fp);
            if(fo){ for(const [n,it] of Object.entries(fo)){ if(it.hidden&&args[1]!=='/a') continue; hist.innerHTML+=`<div>${it.type==='dir'?'&lt;DIR&gt;':'     '}  ${n}</div>`; } } break;
        case 'cd':
            if(!args[1]||args[1]==='.') break;
            if(args[1]==='..'){if(dosCurrentPath!=='C:\\') dosCurrentPath=dosCurrentPath.substring(0,dosCurrentPath.lastIndexOf('\\',dosCurrentPath.length-2)+1);} else dosCurrentPath+=args[1]+'\\';
            document.getElementById('dosTitle').textContent= Lang.apps.dos.title.replace('C:\\', dosCurrentPath); break;
        case 'ping':
            if(!args[1]){hist.innerHTML+=`<div>${Lang.dos.usagePing}</div>`;break;}
            if(args[1]==='localhost'||args[1]==='127.0.0.1'){hist.innerHTML+=`<div>${Lang.dos.pingSelf.replace('{0}', args[1]).replace(/\n/g, '<br>')}</div>`;}
            else if(args[1]==='terra.net'){ if(State.hostsHacked) hist.innerHTML+=`<div>${Lang.dos.pingTerraFail}</div>`; else hist.innerHTML+=`<div>${Lang.dos.pingTerraOk.replace(/\n/g, '<br>')}</div>`; }
            else hist.innerHTML+=`<div>${Lang.dos.pingHostFail.replace('{0}', args[1])}</div>`; break;
        case 'shutdown':
            if(cmd.includes('-r')&&cmd.includes('-f')){ if(State.hostsHacked&&State.wellnessTerminated) triggerEnding('escape'); else { playErrorSound(); hist.innerHTML+=`<div>${Lang.dos.shutFail.replace(/\n/g, '<br>')}</div>`; } } break;
        case 'format': if(args[1]&&args[1].toLowerCase()==='c:'){ showFormatConfirm(); } break;
        case 'help': hist.innerHTML+=`<div>${Lang.dos.help}</div>`; break;
        default: hist.innerHTML+=`<div>${Lang.dos.errCmd.replace('{0}', c)}</div>`;
    }
    const out=document.getElementById('dosOutput'); out.scrollTop=out.scrollHeight;
}

let fmtCode='';
function showFormatConfirm(){
    const chars='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; fmtCode=Array.from({length:6},()=>chars[Math.floor(Math.random()*chars.length)]).join('');
    document.getElementById('fmtCode').textContent=fmtCode; document.getElementById('fmtInput').value=''; openWin('formatConfirmWin');
}
function confirmFormat(){ if(document.getElementById('fmtInput').value.trim().toUpperCase()===fmtCode){ triggerEnding('hasty'); } else { playErrorSound(); toastErr(Lang.toasts.fmtErr); closeWin('formatConfirmWin'); } }
function openImage(title, src){
    openWin('imageViewerWin', title); const img=document.getElementById('imageViewImg'), st=document.getElementById('imageLoadStatus'); st.textContent=Lang.apps.imgViewer.loading; img.src='';
    img.onload=()=>{ st.textContent=`${Lang.apps.imgViewer.loaded}${title} (${img.naturalWidth}×${img.naturalHeight})`; State.viewedPhoto=true; saveState(); checkAbyssPuzzles(true); toastLore(Lang.toasts.imgLore,5000); };
    img.onerror=()=>{ st.textContent=Lang.apps.imgViewer.failed; }; img.src=src;
}
function saveFile(){
    const fn = document.getElementById('notepadWin').dataset.currentFile, ct = document.getElementById('notepadContent').value;
    if (fn === Lang.files.hosts) {
        if(ct.includes('0.0.0.0 terra.net')){ if(!State.firewallRuleAdded){ playErrorSound(); toastErr(Lang.toasts.hostsErr,5000); return; } playSuccessSound(); State.hostsHacked=true; saveState(); toastOk(Lang.toasts.hostsOk);
        } else { playClickSound(); toastOk(Lang.toasts.saveOk); }
    } else if (fn === Lang.files.userNotes) { State.userNotes = ct; saveState(); playClickSound(); toastOk(Lang.toasts.saveOk); }
}
function openPackager() { openWin('packagerWin'); if (State.assetUnlocked) document.getElementById('packageKey').value = gameData.passwords.asset; }
function packageAsset(){
    if(document.getElementById('packageKey').value === gameData.passwords.asset){
        State.assetUnlocked = true; saveState(); playSuccessSound(); toastOk(Lang.toasts.packagerOk,2000);
        let p=0; const t=setInterval(()=>{ p+=20; if(p>=100){clearInterval(t);triggerEnding('corporate');} },400);
    } else { playErrorSound(); toastErr(Lang.toasts.packagerErr); }
}
function updateResonance(){
    const a=parseInt(document.getElementById('alphaFreq').value), b=parseInt(document.getElementById('betaFreq').value), g=parseInt(document.getElementById('gammaFreq').value);
    document.getElementById('alphaVal').textContent=a; document.getElementById('betaVal').textContent=b; document.getElementById('gammaVal').textContent=g;
    const t=gameData.resonanceTarget, err=Math.abs(a-t.alpha)+Math.abs(b-t.beta)+Math.abs(g-t.gamma), lv=Math.max(0,1-err/(t.alpha+t.beta+t.gamma));
    document.getElementById('resonanceFill').style.width=(lv*100)+'%'; document.getElementById('resonanceLabel').innerHTML=`${Lang.apps.resonance.rate}${Math.round(lv*100)}%`;
    const st=document.getElementById('resonanceStatus');
    if(lv>0.85){st.textContent=Lang.apps.resonance.s1;st.style.color='#9b59b6';playResonanceSound(lv);} else if(lv>0.5){st.textContent=Lang.apps.resonance.s2;st.style.color='#886600';} else{st.textContent=Lang.apps.resonance.s3;st.style.color='#aaa';}
}
function checkResonance(){
    const a=parseInt(document.getElementById('alphaFreq').value), b=parseInt(document.getElementById('betaFreq').value), g=parseInt(document.getElementById('gammaFreq').value), t=gameData.resonanceTarget;
    if(Math.abs(a-t.alpha)<=2&&Math.abs(b-t.beta)<=2&&Math.abs(g-t.gamma)<=2){ State.resonanceSynced=true; saveState(); playHorrorSound(); toastLore(Lang.toasts.resoOk,4000); checkAbyssPuzzles(true); } else { playErrorSound(); toastErr(Lang.toasts.resoErr); }
}
function runFinalSync(){ if(!(State.viewedPhoto&&State.resonanceSynced&&State.rebelSurveyPassed&&State.colorSynced)){ playErrorSound(); toastErr(Lang.toasts.finalErr,6000); return; } triggerEnding('ascension'); }
function toggleStartMenu(){ const m=document.getElementById('startMenu'); m.style.display=m.style.display==='flex'?'none':'flex'; m.style.zIndex=++zIndex; }
document.addEventListener('mousedown',e=>{ const m=document.getElementById('startMenu'),s=document.getElementById('startBtn'); if(m&&s&&m.style.display==='flex'&&!m.contains(e.target)&&!s.contains(e.target)) m.style.display='none'; });
function fakeShutdown(){ playErrorSound(); toastErr(Lang.toasts.sysBlock,5000); }
function showLogoutBlocked(){ toastErr(Lang.toasts.sysLock); playErrorSound(); }
function applyWallpaper(){ const f=document.getElementById('wallpaperInput'); if(f.files&&f.files[0]){ const r=new FileReader(); r.onload=e=>{ document.getElementById('desktop').style.background=`url('${e.target.result}') center/cover no-repeat`; playSuccessSound(); toastOk(Lang.toasts.wpOk); }; r.onerror=()=>toastErr(Lang.toasts.wpErr); r.readAsDataURL(f.files[0]); } else toastErr(Lang.toasts.wpErr); }
function resetWallpaper(){ document.getElementById('desktop').style.background=''; playClickSound(); toastOk(Lang.toasts.wpReset); }

// ==================== PET & EXTRAS ====================
let petHunger=50, petMood=50, petDead=false, petTimer=null;
function startPetTimer(){ petTimer=setInterval(()=>{ if(petDead) return; petHunger=Math.max(0,petHunger-5); petMood=Math.max(0,petMood-2); updatePetDisplay(); if(petHunger===0&&petMood===0) killPet(); },10000); }
function updatePetDisplay(){
    if(petDead) return; document.getElementById('petHunger').textContent=petHunger; document.getElementById('petMoodDisplay').textContent=petMood;
    const face=document.getElementById('petFace'), st=document.getElementById('petStatus');
    if(petHunger<20&&petMood<20){face.textContent='(×﹏×)';st.textContent=Lang.apps.pet.s1;} else if(petHunger<40||petMood<40){face.textContent='(；ω；)';st.textContent=Lang.apps.pet.s2;} else if(petHunger>70&&petMood>70){face.textContent='(≧▽≦)';st.textContent=Lang.apps.pet.s3;} else{face.textContent='(° ~ °)';st.textContent=Lang.apps.pet.s4;}
}
function feedPet(){ if(petDead){toastErr(Lang.toasts.petFeedErr);return;} petHunger=Math.min(100,petHunger+20); playPetSound(); updatePetDisplay(); toastOk(Lang.toasts.petFeedOk,1500); }
function playPet(){ if(petDead){toastLore(Lang.toasts.petPlayErr);return;} petMood=Math.min(100,petMood+15); playPetSound(); updatePetDisplay(); toastOk(Lang.toasts.petPlayOk,1500); }
function killPet(){ petDead=true; document.getElementById('petFace').textContent='(x_x)'; document.getElementById('petStatus').textContent=Lang.apps.pet.sDead; document.getElementById('petHunger').textContent='--'; document.getElementById('petMoodDisplay').textContent='--'; playPetDeathSound(); toastLore(Lang.toasts.petDieLore,8000); unlockEgg('pet_death'); }
function initMinesweeper(){
    const cells=25, mineIdx=Math.floor(Math.random()*cells), grid=document.getElementById('mineGrid'); if(!grid) return;
    grid.innerHTML=''; document.getElementById('mineCount').textContent='?';
    for(let i=0;i<cells;i++){
        const c=document.createElement('div'); c.className='mcell'; c.textContent='?'; const isMine=i===mineIdx;
        c.onclick=()=>{
            if(isMine){ playBombSound(); c.textContent='💀'; c.style.background='#f44'; toastLore(Lang.toasts.mineDieLore,7000); unlockEgg('mine_death'); }
            else { c.textContent='✓'; c.classList.add('rev'); c.style.color='green'; document.getElementById('mineCount').textContent=parseInt(document.getElementById('mineCount').textContent||'0')+1+Lang.apps.mine.safe; }
        }; grid.appendChild(c);
    }
}
let paintColor='#000', paintDrawing=false;
function initPaint(){
    const canvas=document.getElementById('paintCanvas'); if(!canvas) return; const ctx=canvas.getContext('2d');
    canvas.addEventListener('mousedown',e=>{paintDrawing=true;ctx.beginPath();const r=canvas.getBoundingClientRect();ctx.moveTo((e.clientX-r.left)*(canvas.width/r.width),(e.clientY-r.top)*(canvas.height/r.height));});
    canvas.addEventListener('mousemove',e=>{ if(!paintDrawing) return; const r=canvas.getBoundingClientRect(); ctx.lineTo((e.clientX-r.left)*(canvas.width/r.width),(e.clientY-r.top)*(canvas.height/r.height)); ctx.strokeStyle=paintColor; ctx.lineWidth=document.getElementById('brushSize').value; ctx.lineCap='round'; ctx.stroke(); });
    canvas.addEventListener('mouseup',()=>paintDrawing=false); canvas.addEventListener('mouseleave',()=>paintDrawing=false);
}
function selectPaintColor(c,el){ paintColor=c; document.querySelectorAll('.cswatch').forEach(s=>s.classList.remove('act')); el.classList.add('act'); }
function clearCanvas(){ const c=document.getElementById('paintCanvas'); if(c) c.getContext('2d').clearRect(0,0,c.width,c.height); }
let calcExpr='';
function calcInput(v){
    const disp=document.getElementById('calcDisplay'), hint=document.getElementById('calcHint');
    if(v==='C'){calcExpr='';disp.textContent='0';hint.textContent='';return;}
    if(v==='='){
        try{
            const safe=calcExpr.replace(/[^0-9+\-*/.()]/g,''), result=Function('"use strict";return('+safe+')')();
            disp.textContent=result; hint.textContent='';
            if(Math.round(result)===3998){ playHorrorSound(); hint.textContent=Lang.toasts.calcLore1; toastLore(Lang.toasts.calcLore2,8000); unlockEgg('calc_1999'); }
            calcExpr=String(result);
        }catch(e){disp.textContent='ERROR';calcExpr='';}
    } else { calcExpr+=v; disp.textContent=calcExpr; }
}
function unlockEgg(eggId) { if (!State.easterEggs) State.easterEggs =[]; if (!State.easterEggs.includes(eggId)) { State.easterEggs.push(eggId); saveState(); playSuccessSound(); toastOk(Lang.toasts.eggOk + Lang.eggs[eggId].name); renderEggs(); } }
function renderEggs() {
    const list = document.getElementById('eggList'); if (!list) return; list.innerHTML = '';
    if (!State.easterEggs || State.easterEggs.length === 0) { list.innerHTML = `<p style="color:#888;">${Lang.apps.eggs.empty}</p>`; return; }
    State.easterEggs.forEach(id => { const e = Lang.eggs[id]; if(!e) return; list.innerHTML += `<div style="margin-bottom:8px;padding:6px;border:1px dashed #888;background:#f9f9f9;"><strong style="color:#000080;">${e.name}</strong><br><span style="font-size:11px;color:#555;">${e.desc}</span></div>`; });
}
function openRog1() { openWin('rog1Win'); unlockEgg('rog1_promo'); }

// ==================== ENDINGS & EFFECTS ====================
function triggerEnding(type){
    document.getElementById('desktop').style.display='none'; document.getElementById('taskbar').style.display='none';
    document.querySelectorAll('.window').forEach(w=>w.style.display='none'); document.getElementById('startMenu').style.display='none'; stopAmb();
    try{localStorage.removeItem('abyss_state');}catch(e){}
    const screen=document.getElementById('endScreen'); screen.innerHTML=''; screen.style.display='flex'; screen.style.justifyContent='center'; screen.style.alignItems='center';
    const particles=document.createElement('div'); particles.id='endParticles'; screen.appendChild(particles);
    const content=document.createElement('div'); content.className='e-content'; screen.appendChild(content);
    if(type==='escape'){
        screen.style.cssText+=';background:#000;color:#00ff41;font-family:Consolas,monospace;';
        for(let i=0;i<20;i++){ const col=document.createElement('div'); col.style.cssText=`position:absolute;top:-200px;left:${Math.random()*100}%;font-family:Consolas;font-size:13px;color:#00ff41;opacity:0.7;animation:mfall ${2+Math.random()*4}s linear ${Math.random()*2}s infinite;white-space:nowrap;writing-mode:vertical-rl;`; col.textContent=Array.from({length:30},()=>'01リングアビス深渊'[Math.floor(Math.random()*10)]).join(''); particles.appendChild(col); }
        typewriterEffect(content, Lang.endings.escape, 40); playHorrorSound();
    } else if(type==='corporate'){
        screen.style.cssText+=';background:linear-gradient(135deg,#0d1117,#1c2a3a);color:#ecf0f1;font-family:sans-serif;';
        const scan=document.createElement('div'); scan.style.cssText='position:absolute;left:0;width:100%;height:3px;background:rgba(52,152,219,0.5);animation:cscan 2s linear infinite;'; particles.appendChild(scan); playSuccessSound(); content.innerHTML=Lang.endings.corporate;
    } else if(type==='ascension'){
        screen.style.cssText+=';background:radial-gradient(ellipse at center,#1a0033,#000);color:#d8b4fe;font-family:serif;';
        for(let i=0;i<15;i++){ const b=document.createElement('div'); const sz=10+Math.random()*30; b.style.cssText=`position:absolute;width:${sz}px;height:${sz}px;left:${Math.random()*100}%;border-radius:50%;background:rgba(155,89,182,0.25);animation:brise ${4+Math.random()*6}s linear ${Math.random()*4}s infinite;`; particles.appendChild(b); }
        playHorrorSound(); setTimeout(()=>typewriterEffect(content, Lang.endings.ascension, 60),800);
    } else if(type==='hasty'){ screen.style.cssText+=';background:#0d0000;color:#ff4444;font-family:Consolas,monospace;'; playBombSound(); typewriterEffect(content, Lang.endings.hasty, 35); }
}
function typewriterEffect(el, text, speed=40){ el.textContent=''; let i=0; const t=setInterval(()=>{ if(i>=text.length){clearInterval(t);return;} el.textContent+=text[i]; if(text[i]==='\n') el.innerHTML=el.innerHTML.replace(/\n/g,'<br>'); i++; },speed); }

const styleEl=document.createElement('style'); styleEl.textContent=`@keyframes mfall{0%{top:-200px;opacity:0.9}100%{top:115%;opacity:0}} @keyframes brise{0%{bottom:-60px;opacity:0.6}100%{bottom:115%;opacity:0}} @keyframes cscan{0%{top:0}100%{top:100%}}`;
document.head.appendChild(styleEl);

// ==================== BOOT & INIT ====================
function checkBios(e) {
    if (!gameInitialized || e.key !== 'Enter') return;
    
    if (document.getElementById('biosInput').value === gameData.passwords.bios) {
        playBootSound();
        document.getElementById('biosScreen').style.display='none';
        document.getElementById('desktop').style.display='block';
        document.getElementById('taskbar').style.display='flex';
        
        loadProgress();
        
        if (State.stage === 'bios') State.stage = 'win98';
        
        startPetTimer();
        startAmb(State.stage === 'aero');
        saveState();
    } else {
        playErrorSound();
        document.getElementById('biosInput').value='';
        document.getElementById('biosInput').placeholder=Lang.toasts.pwdError;
    }
}

function loadProgress() {
    loadState();
    
    if (State.stage === 'aero') {
        document.body.classList.add('frutiger-mode');
        ['ico_pet1','ico_paint','ico_calc','ico_imgtut'].forEach(id => {
            const el=document.getElementById(id); if(el) el.style.display='none';
        });
        showAeroIcons();
        const sm=document.getElementById('smLabel'); if(sm) sm.textContent=Lang.startMenu.titleAero;
    }
    if (State.chkdskRun) {
        const rc = document.getElementById('recycleContent');
        if(rc) rc.innerHTML=`<p style="color:green;">${Lang.toasts.chkdskOk}</p>`;
        if (!document.getElementById('diary1Icon')) {
            const ico=document.createElement('div');
            ico.className='icon'; ico.id='diary1Icon'; ico.style.cssText='display:flex;';
            ico.innerHTML=`<div class="icon-img">📝</div><span>${Lang.files.diary1}</span>`;
            ico.onclick=()=>openWin('notepadWin', Lang.files.diary1, Lang.texts.diary1);
            document.getElementById('iconGrid').appendChild(ico);
        }
    }
    if (State.resonanceSynced || State.surveyPassed || State.colorSynced || State.viewedPhoto) {
        checkAbyssPuzzles(true); 
    }
    renderEggs(); 
}

function initGame() {
    initState();
    initGameData();
    initI18n();
    initFileSystem();
    
    const tc=document.getElementById('targetColorBox'); if(tc){const t=gameData.targetColor;tc.style.background=`rgb(${t.r},${t.g},${t.b})`;}
    initPaint();
    initMinesweeper();
    initDragAndDrop();
    setInterval(updateClock, 1000);
    updateClock();

    const bi=document.getElementById('biosInput'); if(bi) bi.focus();
    gameInitialized = true;
}

window.addEventListener('load', initGame);