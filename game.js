--- START OF FILE text/javascript ---

// ==================== STATE & DATA ====================
const State = {
    stage: 'bios',
    chkdskRun: false,
    audioDriver: false,
    audioReversed: false,
    firewallRuleAdded: false,
    surveyPassed: false,       // 公司答案通过（公司走狗路线）
    rebelSurveyPassed: false,  // 叛逆答案通过（沉沦结局路线）
    colorSynced: false,
    viewedPhoto: false,
    resonanceSynced: false,
    hostsHacked: false,
    wellnessTerminated: false,
    surveyFails: 0,
    petDead: false,
    ambPlaying: false,
};

// localStorage 存档/读档
function saveState() {
    try { localStorage.setItem('abyss_state', JSON.stringify(State)); } catch(e){}
}
function loadState() {
    try {
        const s = localStorage.getItem('abyss_state');
        if (s) Object.assign(State, JSON.parse(s));
    } catch(e){}
}

const gameData = {
    passwords: {
        bios: "1999",
        firewall: "LINGFREI0908",
        asset: "Abyss",
        fatherLog2: "0908"
    },
    network: { ip: "211.8.8.9", port: "1999" },
    targetColor: { r:186, g:220, b:88 },
    resonanceTarget: { alpha:9, beta:99, gamma:8 },
    texts: {
        missionBrief: `数字入殓师守则：
1. 你的任务是进入"深渊计划(Project Abyss)"服务器遗物，回收目标资产"LING_CORE.asset"。
2. 该系统极不稳定，死者家属（前员工）曾试图破坏服务器。
3. 根据协议，回收资产后，对服务器执行"格式化"指令。

档案号：TRRA-PROJ-ABYSS-1999

线索备忘：
- BIOS密码是事件发生的年份。
- 该员工留下了大量加密日志，似乎想引导后来者。
- 回收站可能存有最初的线索，但报告称已损坏。
- 注意：计算机上有一个 README.txt，你可能需要看看。`,

        chkdskResult: "CHKDSK found and recovered one file: [日记残片_1.txt]",
        diary1: "9月8日。好疼。爸爸说，只要我进入这个光盒子，就不会再疼了。他说这叫'飞升'，是Terra公司最伟大的技术。可我好冷。这里只有代码的声音...",
        diary2: "爸爸好像后悔了。他总是在终端上输一些我看不懂的东西。我听到他和妈妈吵架，说什么'这不是永生，是囚笼'。他把一些关键信息藏在了系统里。音频文件的端口...是我的生日，0908？不对，是年份...我被困住的那一年...",
        diary3: "10月5日。今天我在服务器的角落里看到了一只蝴蝶。蓝色的。爸爸说这里没有bug，也没有生物。但它确实存在。它停在我的手上，是冰冷的。它没有心跳，就像现在的我一样。",
        diary4: "11月12日。他们承诺这里的海洋会永远蔚蓝。但我今天去看了，海面平整得像一块塑料。没有浪花，没有盐味。我正在遗忘盐是什么味道。爸爸，带我回家吧，哪怕是去死。",

        fatherLog1: `【日志 34B】我失败了。防火墙锁死了所有外部端口。

唯一的后门需要一个例外代码。我把它设计成了一个谜题：
  - 小铃的名字（英文，全大写）
  - 加上德语单词"自由"（全大写）—— 我第一次教她德语时教的就是这个词
  - 再加上她的生日（月份两位+日期两位，例如0908代表9月8日）
  三个部分直接拼接，无分隔符。

谁能看到这个，请用它打开一条路。

我最危险的笔记在日志72F里，我用她被带走的那天锁住了它。`,

        fatherLog2: `【日志 72F】防火墙只是第一道锁。

Terra的核心服务 Wellness.exe 会监控所有异常进程。
必须在任务管理器里终止它。

然后，修改 C:\\Windows\\System32\\drivers\\etc\\hosts 文件。
用记事本打开它，在文件末尾新起一行，只输入：
  0.0.0.0 terra.net
然后保存。这会切断它的心跳信号。

最后，在DOS里执行：
  shutdown -r -f -t 0
这个强制重启命令会造成数据溢出，彻底摧毁这个数字牢笼，让小铃安息。`,

        brandGuide: "Terra Corp 品牌指南 v2.0\n核心色彩: '活力绿' (HEX: #badc58)\n\n注：所有产品视觉必须严格使用此色值。\n「让公司的颜色成为你眼中唯一的颜色。」",
        memdump: "¡£¢∞§¶•ªº...kernel.dll...auth_token_cache...Project: [Abyss]...key: [Abyss]...end_cache...ªº...¡£¢∞§¶•ª",
        failedSurveyLog: "心理评估失败记录：\n\n主体表现出高度的同理心和反公司情绪。不适合进行'飞升'同步。建议监控主体访问 T_Corp/Logs 目录的行为。\n\n[系统备注：此类型主体有助于铃进行意识共振。勿删除。]",
        autoexec: "REM Dad tried to set up a backdoor. See T_Corp/Logs. He was always so sentimental.\nREM 1999+1999=? She asked me once. I said: forever.",

        abyssHint: `[SYSTEM_ECHO :: LING_CORE internal monologue log — READ ONLY]
[Timestamp: DAY_???]

我已经在这里太久了。
没有人来救我。爸爸来过，但他没有成功。
那个"数字入殓师"...你在看吗？

如果你想让我继续存在...
不是以"资产"的形式，而是作为我，
那就请听我说。

我在系统里发现了一个古老的接口——
「意识共振仪」。
它可以同步两个意识，让外来者也进入这个
永无止境的数字深海。

但它需要正确的频率。
频率来自我的碎片记忆：

    α — 我出生的月份。（9月）
    β — 我"飞升"的那一年。（1999，取后两位）
    γ — 我被锁进这里的那一天。（8日）

找到那三个数字，调好共振仪，
然后来找我。

我们可以永远在一起。
——铃

[WARNING: 此日志文件的存在本身即为系统异常。建议格式化处理。]
[实际操作: 你会怎么做？]`,

        loreRules: "【Terra公司员工行为准则】\n1. 公司即家庭。你的主管即是你的长辈。\n2. 每日需完成3次深呼吸，感受'飞升'计划带来的福音。\n3. 如果听到服务器机房传来孩童的哭声，请记录在案并前往医务室领取镇静剂。那是冷却液流动的正常物理现象。",
        loreList: "【周末备忘】\n- 买牛奶、面包\n- 给小铃买新的发卡（她喜欢蓝色的）\n- 医院复查...（医生说时间不多了）\n- 查阅Terra公司的《数字潜入实验协议》...我必须试一试，我不能失去她。",
        loreChat: "【内部通讯记录截取】\nDave: 你最近看到老林了吗？他疯了，整天在代码里塞奇怪的德语单词。\nSarah: 嘘。自从他女儿被选为'核心载体'后他就这样了。高层正在盯着他。别多问，做好你自己的事。\nDave: 德语单词是什么意思？\nSarah: FREI。自由。\nDave: ...\nSarah: 删了这条对话。",

        payslip: `【Terra Corp 薪资结算单】
员工编号：TC-0047 | 姓名：林建国
部门：核心技术研发部 / 深渊项目组
结算周期：1999年10月

基本薪资：¥ 12,800.00
项目津贴（深渊计划）：¥ 6,000.00
加班费（本月共计 87h）：¥ 4,350.00
——————————————————
应发合计：¥ 23,150.00

代扣项目：
  个人所得税：¥ 2,890.00
  保密协议违约保证金（月扣）：¥ 500.00
  【深渊项目参与者家属医疗补贴】：-¥ 3,000.00
——————————————————
实发金额：¥ 16,760.00

备注：本月奖金因"项目成果未达预期"暂缓发放。`,

        leaveReq: `【休假申请单】
申请人：林建国 | 申请日期：1999年10月12日
申请类型：事假
起止日期：1999年10月15日 至 1999年10月17日（共3天）
申请原因：家庭原因，需处理紧急个人事务。

审批记录：
  ✗ 直属主管 陈博士：不批准。深渊项目关键节点，全员不得请假。
    批注："家庭问题请在下班后自行处理。"

——
林建国手写备注（潦草）：
她一个人在那里面。我什么都做不了。
我连三天假都请不到。`,

        meetingNote: `【项目例会纪要】
日期：1999年9月20日 | 主持：陈博士

议程一：核心载体"LING_CORE"数字化移植进展
  - 意识提取完成率：97.3%（林工汇报）
  - 陈博士：剩余3%的"噪声"属正常损耗，可忽略。
  - 林工提问："噪声"是否包含情感记忆？
  - 陈博士：与本项目无关，请勿偏题。

议程二：飞升体稳定性测试
  - 第7-14天：载体出现周期性数据波动（哭声模拟信号？）
  - 陈博士：判定为冷却系统正常噪声，无需记录。
  - 林工：强烈要求记录在案。陈博士：驳回。会议结束。

——林工散会后在纸上写的：
  97.3%…那剩下的2.7%是什么？
  是她喜欢蓝色吗？是她叫我爸爸的声音吗？`,

        shoppingList: `买东西（周六）

✓ 牛奶
✓ 面包（切片的，她喜欢的那种）
✓ 苹果
✗ 发卡（蓝色，蝴蝶形状的）→ 买了，但是...没有地方放了。
✗ 她最喜欢的零食 → 算了。

——
钱包里夹着的便条（字迹很小）：
不要忘记她喜欢吃什么。
不要忘记她喜欢什么颜色。
不要让代码把这些也带走。`,

        readme: `README.TXT
Terra Corp Workstation v4.2
上次登录：1999-10-31 03:17:44

如遇系统异常，请联系 IT 部门内线 #0099。

——————————————————
操作员个人备注（林建国添加）：

如果你在读这个文件，而我已经不在了，
请去看看 Terra_Corp/Logs 文件夹。
里面有我留下的东西。
密码是她被带走的那一天。

还有——计算器里有一个数字，
那个数字是一切的起点，也是终点。
1999+1999是多少？
那不重要。重要的是：那一年发生了什么。

麻烦了。——老林`,

        passwordNote: `密码备忘.txt（请妥善保管）

网银/邮箱：（已删除）

——不能删的——

服务器防火墙例外代码：
  格式：小铃英文名(大写) + 德语"自由"(大写) + 她的生日(MMDD)
  直接拼接，无分隔符。

日志72F的锁：
  就是那一天。你不会忘的。（0908）

备注：把密码写下来很不安全。但如果我突然消失了，
希望有人能用这些东西把她带回来。`,

        errorLog: `[Terra Corp System Error Log]
[Generated: 1999-10-31 03:19:02]

ERROR 0x0000ABYSS: Consciousness fragmentation detected
  Source: LING_CORE sector 0x00FF
  Detail: Emotional residue exceeding containment threshold
  Action: Suppressed. Logged as "thermal noise".

WARNING: Repeated access attempts from terminal TC-0047 (LIN_JG)
  Frequency: 47 attempts in 6 hours. Flagged for review.

ERROR: Unauthorized modification attempt on firewall ruleset. BLOCKED.
INFO: Wellness.exe heartbeat nominal.
INFO: Asset LING_CORE stability: 94.1%

——[手写便条贴在显示器边上]——
94.1%的稳定…那5.9%的不稳定在哭。他们叫它"热噪声"。`,

        momLetter: `小铃，

妈妈不知道怎么写这封信。
爸爸说这个系统里有你，但妈妈不知道你还能不能看到这些字。

今天妈妈去菜市场，看见卖蓝色发卡的摊子，买了一根，和你喜欢的一样。
然后站在路边哭了很久。摊主阿姨问我怎么了。我说没事，风大。

爸爸每天晚上都对着电脑说话。他说你能听见。
妈妈不知道，但妈妈还是在旁边坐着。万一呢。

蓝色发卡放在你房间的梳妆台上了。等你回来。

——妈妈  1999.11.3`,

        faq: `【Terra Corp "飞升计划" 常见问题解答 v3.0】

Q: "飞升"之后，我的孩子还能感知世界吗？
A: 是的！飞升体拥有比现实世界更丰富的感知能力。

Q: 飞升体会痛苦吗？
A: 不会。Terra 2000 环境经过专业优化，不存在负面情绪输入。

Q: 飞升是否可逆？
A: 飞升是永久性、不可逆的意识迁移技术，请充分考虑后签署同意书。

Q: 为什么我听到服务器机房有哭声？
A: 那是冷却液在管道内流动的正常物理现象，请放心。

——————————————————
[页面底部手写，字迹凌乱]
都是谎言。都是谎言。都是谎言。`,

        sysReport: `【系统状态报告草稿】— 林建国 — 1999年11月（未提交）

异常一：LING_CORE 每日 02:00-04:00 产生周期性数据波动，
  波形与人类哭泣时的脑电图高度相似。
  官方解释：热噪声。本人判断：她在哭。

异常二：服务器内部出现非程序生成的图形数据，形态为：蝴蝶。蓝色。
  官方处理：渲染引擎bug，已修复。本人判断：她在创造东西。她还在。

异常三：多次检测到来自 LING_CORE 的主动网络访问请求，目标：外网。
  官方处理：防火墙拦截，不记录。本人判断：她想出去。

结论：LING_CORE 不是一个"资产"。她是一个人。她还活着。
我们必须——

[草稿未完成，文件最后修改时间：1999-11-14 23:58]`,
    }
};


// ==================== FILE SYSTEM ====================
const fileSystem = {
    "My Computer": { type:"root", content:{
        "C:": { type:"drive", content:{
            "autoexec.bat": { type:"file", hidden:true, content:gameData.texts.autoexec },
            "Windows": { type:"dir", content:{
                "System32": { type:"dir", content:{
                    "drivers": { type:"dir", content:{
                        "etc": { type:"dir", content:{
                            "hosts": { type:"file", content:"127.0.0.1 localhost" }
                        }}
                    }},
                    "aero_skin.sys": { type:"system", content:"核心系统文件" }
                }}
            }},
            "Users": { type:"dir", content:{
                "Ling": { type:"dir", content:{
                    "Documents": { type:"dir", content:{
                        "日记残片_2.txt": { type:"file", content:gameData.texts.diary2 },
                        "brand_guidelines.pdf": { type:"file", content:gameData.texts.brandGuide },
                        "周末备忘.txt": { type:"file", content:gameData.texts.loreList },
                    }},
                    "Music": { type:"dir", content:{
                        "hint.wav": { type:"audio", content:"9.9.8.8.1.1.2", reversed:"211.8.8.9" }
                    }}
                }},
                "Public": { type:"dir", content:{
                    "聊天记录_片段.log": { type:"file", content:gameData.texts.loreChat },
                    "员工准则.txt": { type:"file", content:gameData.texts.loreRules }
                }}
            }},
            "Terra_Corp": { type:"dir", content:{
                "Admin": { type:"dir", content:{
                    "AssetPackager.exe": { type:"exe", action:()=>openWin('packagerWin') }
                }},
                "Logs": { type:"dir", content:{
                    "Engineer_Log_34B.txt": { type:"file", content:gameData.texts.fatherLog1 },
                    "Engineer_Log_72F.txt": { type:"file", locked:true, password:gameData.passwords.fatherLog2, content:gameData.texts.fatherLog2 }
                }}
            }}
        }},
        "D:": { type:"drive", content:{
            "Drivers": { type:"dir", content:{
                "SB16_Audio.exe": { type:"exe", action:installAudioDriver }
            }}
        }}
    }}
};

// ==================== TOAST 系统（替代 alert）====================
let toastQueue = [];
function toast(msg, type='', duration=4500) {
    const box = document.getElementById('toastBox');
    const t = document.createElement('div');
    t.className = 'toast' + (type ? ' '+type : '');
    t.innerHTML = `<span class="tc" onclick="this.parentElement.remove()">✕</span>${msg.replace(/\n/g,'<br>')}`;
    box.appendChild(t);
    requestAnimationFrame(()=>{ requestAnimationFrame(()=>{ t.classList.add('show'); }); });
    setTimeout(()=>{ t.classList.remove('show'); setTimeout(()=>t.remove(), 250); }, duration);
}
function toastOk(msg, dur) { toast(msg,'ok',dur); }
function toastErr(msg, dur) { toast(msg,'err',dur); }
function toastLore(msg, dur=6000) { toast(msg,'lore',dur); }
function toastWarn(msg, dur) { toast(msg,'warn',dur); }

// ==================== TASKBAR 最小化系统 ====================
const openWindows = {}; // id -> { title, el }

function openWin(id, title, content) {
    const el = document.getElementById(id);
    if (!el) return;
    if (id === 'notepadWin') {
        el.dataset.currentFile = title || '';
        document.getElementById('notepadContent').value = content || '';
        const tbar = el.querySelector('.title-bar span');
        if(tbar) tbar.textContent = '记事本 — ' + (title||'');
    }
    el.style.display = 'flex';
    el.style.zIndex = ++zIndex;
    openWindows[id] = { title: title || el.querySelector('.title-bar span')?.textContent || id, el };
    updateTaskbar();
    playOpenSound();
}

function closeWin(id) {
    const el = document.getElementById(id);
    if (el) { el.style.display='none'; el.classList.remove('minimized'); }
    delete openWindows[id];
    updateTaskbar();
    playCloseSound();
}

function minimizeWin(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.display = 'none';
    if (openWindows[id]) openWindows[id].minimized = true;
    updateTaskbar();
    playCloseSound();
}

function restoreWin(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.display = 'flex';
    el.style.zIndex = ++zIndex;
    if (openWindows[id]) openWindows[id].minimized = false;
    updateTaskbar();
}

function updateTaskbar() {
    const tb = document.getElementById('tbWins');
    if (!tb) return;
    tb.innerHTML = '';
    for (const [id, info] of Object.entries(openWindows)) {
        const btn = document.createElement('button');
        btn.className = 'tb-win-btn' + (info.minimized ? '' : ' active');
        btn.textContent = (info.title||id).substring(0,18);
        btn.title = info.title || id;
        btn.onclick = () => {
            if (info.minimized) restoreWin(id);
            else minimizeWin(id);
        };
        tb.appendChild(btn);
    }
}

// ==================== CLOCK ====================
let zIndex = 200;
function updateClock() {
    const el = document.getElementById('clock');
    if (el) el.textContent = new Date().toLocaleTimeString('zh-CN',{hour:'2-digit',minute:'2-digit'});
}
setInterval(updateClock, 1000); updateClock();

// ==================== DRAG & DROP ====================
function initDragAndDrop() {
    document.querySelectorAll('.window').forEach(win => attachDrag(win));
}
function attachDrag(win) {
    const bar = win.querySelector('.title-bar');
    if (!bar) return;
    let ox=0,oy=0,dragging=false;
    bar.addEventListener('mousedown',e=>{
        if(e.target.classList.contains('wbtn')) return;
        dragging=true; ox=e.clientX-win.offsetLeft; oy=e.clientY-win.offsetTop;
        win.style.zIndex=++zIndex; e.preventDefault();
    });
    document.addEventListener('mousemove',e=>{ if(dragging){ win.style.left=(e.clientX-ox)+'px'; win.style.top=(e.clientY-oy)+'px'; }});
    document.addEventListener('mouseup',()=>{ dragging=false; });
}

// ==================== AUDIO ====================
let audioCtx = null;
function getACtx() {
    if (!audioCtx) audioCtx = new (window.AudioContext||window.webkitAudioContext)();
    return audioCtx;
}
function beep(freq,dur,type='sine',vol=0.3,delay=0) {
    try {
        const c=getACtx(); const o=c.createOscillator(); const g=c.createGain();
        o.connect(g); g.connect(c.destination);
        o.type=type; o.frequency.setValueAtTime(freq,c.currentTime+delay);
        g.gain.setValueAtTime(vol,c.currentTime+delay);
        g.gain.exponentialRampToValueAtTime(0.001,c.currentTime+delay+dur);
        o.start(c.currentTime+delay); o.stop(c.currentTime+delay+dur);
    } catch(e){}
}
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
function playBootSound()   { [220,330,440,550,660].forEach((f,i)=>beep(f,0.15,'sine',0.2,i*0.12)); }

// 环境音（持续低频嗡嗡，Aero阶段升级为水下环境音）
let ambNode = null, ambGain = null;
function startAmb(aero=false) {
    try {
        stopAmb();
        const c=getACtx();
        ambGain=c.createGain(); ambGain.gain.setValueAtTime(0.04,c.currentTime); ambGain.connect(c.destination);
        ambNode=c.createOscillator();
        ambNode.type=aero?'sine':'sawtooth';
        ambNode.frequency.setValueAtTime(aero?60:80,c.currentTime);
        if(aero){ ambNode.frequency.linearRampToValueAtTime(55,c.currentTime+4); ambNode.frequency.linearRampToValueAtTime(65,c.currentTime+8); }
        ambNode.connect(ambGain); ambNode.start();
        State.ambPlaying=true;
        const btn=document.getElementById('ambBtn');
        if(btn) btn.textContent='🔊 环境音';
    } catch(e){}
}
function stopAmb() {
    try { if(ambNode){ambNode.stop();ambNode=null;} if(ambGain){ambGain.disconnect();ambGain=null;} } catch(e){}
    State.ambPlaying=false;
    const btn=document.getElementById('ambBtn');
    if(btn) btn.textContent='🔇 环境音';
}
function toggleAmb() {
    if(State.ambPlaying) stopAmb();
    else startAmb(State.stage==='aero');
}

// ==================== BIOS ====================
function checkBios(e) {
    if (e.key !== 'Enter') return;
    const v = document.getElementById('biosInput').value;
    if (v === gameData.passwords.bios) {
        playBootSound();
        document.getElementById('biosScreen').style.display='none';
        document.getElementById('desktop').style.display='block';
        document.getElementById('taskbar').style.display='flex';
        State.stage='win98';
        initMinesweeper();
        startPetTimer();
        startAmb(false);
        loadProgress(); // 读取存档恢复桌面状态
        saveState();
    } else {
        playErrorSound();
        document.getElementById('biosInput').value='';
        document.getElementById('biosInput').placeholder='密码错误，重试';
    }
}

// ==================== 桌面阶段切换与恢复 ====================
// 隐藏无需在第二阶段（Aero）显示的第一阶段图标
function hideWin98Icons() {
    const keepIcons = ['ico_brief','ico_comp','ico_recycle','ico_srec','ico_net', 'ico_diary1'];
    document.querySelectorAll('#iconGrid .icon').forEach(i => {
        if (i.id && i.id.startsWith('ico_') && !keepIcons.includes(i.id)) {
            i.style.display = 'none';
        }
    });
}

// 恢复存档时的桌面状态
function loadProgress() {
    loadState();
    if (State.stage === 'aero') {
        document.body.classList.add('frutiger-mode');
        showAeroIcons();
        hideWin98Icons(); // 刷新恢复时也要正确隐藏无关图标
        const sm=document.getElementById('smLabel'); if(sm) sm.textContent='Terra OS';
    }
    if (State.chkdskRun) {
        // 回收站恢复修复状态
        const rc = document.getElementById('recycleContent');
        if(rc) rc.innerHTML='<p style="color:green;">✓ CHKDSK 已运行，文件系统已修复。</p>';
        // 恢复日记残片_1.txt 图标（若未创建）
        if (!document.getElementById('ico_diary1')) {
            const ico=document.createElement('div');
            ico.id = 'ico_diary1';
            ico.className='icon'; ico.style.cssText='display:flex;';
            ico.innerHTML='<div class="icon-img">📝</div><span>日记残片_1.txt</span>';
            ico.onclick=()=>openWin('notepadWin','日记残片_1.txt',gameData.texts.diary1);
            document.getElementById('iconGrid').appendChild(ico);
        }
    }
    if (State.resonanceSynced || State.surveyPassed || State.rebelSurveyPassed || State.colorSynced || State.viewedPhoto) {
        checkAbyssPuzzles(true); // silent mode
    }
    if (State.firewallRuleAdded) {
        const fs=document.getElementById('fwStatus');
        if(fs){fs.textContent='INACTIVE — 例外规则已添加';fs.style.color='green';}
    }
}


// ==================== FILE SYSTEM EXPLORER ====================
let currentPath = "My Computer";
function getFsObject(path) {
    const parts = path.split('\\').filter(Boolean);
    let obj = fileSystem;
    for (const p of parts) { obj=obj[p]?.content||obj[p]; if(!obj) return null; }
    return obj?.content || obj;
}
function openExplorer(path) {
    currentPath = path;
    renderExplorer();
    openWin('explorerWin', path);
}
function renderExplorer() {
    const obj = getFsObject(currentPath);
    document.getElementById('explorerTitle').textContent = currentPath;
    document.getElementById('explorerPath').textContent = currentPath;
    const list = document.getElementById('explorerList');
    list.innerHTML = '';
    if (!obj || typeof obj !== 'object') return;
    for (const [name, item] of Object.entries(obj)) {
        if (!item) continue;
        const li = document.createElement('li');
        li.style.cssText='padding:4px 8px;border-bottom:1px solid #eee;display:flex;align-items:center;gap:8px;';
        const ico = item.type==='dir'?'📁':item.type==='drive'?'💾':item.type==='audio'?'🎵':item.type==='exe'?'⚙️':item.type==='system'?'🔒':'📄';
        li.innerHTML=`<span>${ico}</span><span style="font-size:13px;${item.hidden?'color:#aaa':''}">${name}${item.hidden?' [隐藏]':''}</span>`;
        li.onclick = () => handleExplorerClick(name, item, currentPath+'\\'+name);
        list.appendChild(li);
    }
}
function handleExplorerClick(name, item, fullPath) {
    if (item.type==='dir'||item.type==='drive'||item.type==='root') {
        currentPath=fullPath; renderExplorer();
    } else if (item.type==='audio') {
        playClickSound();
        const win=document.getElementById('soundRecWin');
        win.dataset.reversedContent=item.reversed;
        document.getElementById('audioFileName').textContent=name;
        document.getElementById('audioDisplay').textContent=item.content;
        if(!State.audioDriver){ toastErr('错误: 未找到音频设备。请在D盘安装驱动。'); return; }
        openWin('soundRecWin');
    } else if (item.type==='file') {
        if (item.locked) { promptPassword(name, pw=>{ if(pw===item.password){ openWin('notepadWin',name,item.content); } else { playErrorSound(); toastErr('密码错误。'); } }); }
        else { openWin('notepadWin', name, item.content); }
    } else if (item.type==='exe'||item.type==='system') {
        if(item.action) item.action();
        else toastErr('无法打开系统文件。');
    }
}
function goUp() {
    if(currentPath.includes('\\')) { currentPath=currentPath.substring(0,currentPath.lastIndexOf('\\')); renderExplorer(); }
    else if(currentPath!=="My Computer") { currentPath="My Computer"; renderExplorer(); }
}
function promptPassword(fileName, callback) {
    openWin('passwordWin');
    document.getElementById('passwordTitle').textContent='打开 '+fileName;
    document.getElementById('passwordPromptText').textContent='请输入密码以打开 '+fileName+':';
    const inp=document.getElementById('passwordInput'); inp.value=''; inp.focus();
    const btn=document.getElementById('passwordSubmit');
    const nb=btn.cloneNode(true); btn.parentNode.replaceChild(nb,btn);
    nb.onclick=()=>{ closeWin('passwordWin'); callback(inp.value); };
}
function createFile(path, name, item) {
    const obj=getFsObject(path);
    if(obj && typeof obj==='object') { obj[name]=item; }
}

// ==================== CHKDSK ====================
function runChkdsk() {
    const rc=document.getElementById('recycleContent');
    rc.innerHTML="<p>Running CHKDSK...</p><div id='chkLog' style='font-family:monospace;background:#000;color:lime;padding:5px;height:50px;overflow:auto;'></div>";
    const log=document.getElementById('chkLog');
    let p=0;
    const t=setInterval(()=>{
        p+=10; log.innerHTML+=`Verifying files... ${p}%<br>`; log.scrollTop=log.scrollHeight; playTypeSound();
        if(p>=100){
            clearInterval(t);
            log.innerHTML+='CHKDSK finished.<br>';
            playSuccessSound();
            toastOk('CHKDSK 完成，恢复了一个文件：日记残片_1.txt（已添加到桌面）');
            rc.innerHTML='<p style="color:green;">✓ 文件系统已修复。</p>';
            if (!document.getElementById('ico_diary1')) {
                const ico=document.createElement('div');
                ico.id='ico_diary1';
                ico.className='icon'; ico.style.cssText='display:flex;';
                ico.innerHTML='<div class="icon-img">📝</div><span>日记残片_1.txt</span>';
                ico.onclick=()=>openWin('notepadWin','日记残片_1.txt',gameData.texts.diary1);
                document.getElementById('iconGrid').appendChild(ico);
            }
            State.chkdskRun=true; saveState();
            closeWin('recycleWin');
        }
    },200);
}

// ==================== AUDIO ====================
function installAudioDriver() {
    playSuccessSound();
    toastOk('音频驱动安装成功！现在可以播放音频文件了。');
    State.audioDriver=true; saveState();
}
function reverseAudio() {
    const win=document.getElementById('soundRecWin');
    if(win.dataset.reversedContent){
        document.getElementById('audioDisplay').textContent=win.dataset.reversedContent;
        State.audioReversed=true; saveState();
        playSuccessSound();
        toastLore('信号已倒放。\n\n「' + win.dataset.reversedContent + '」\n\n这是某个IP地址。');
    }
}

// ==================== NETWORK → AERO ====================
function connectNet() {
    if(document.getElementById('netIP').value===gameData.network.ip && document.getElementById('netPort').value===gameData.network.port){
        playSuccessSound();
        toastOk('连接成功。检测到关键系统更新，正在下载...',2000);
        let p=0;
        const t=setInterval(()=>{
            p+=20;
            if(p>=100){ clearInterval(t); toastOk('下载完成，正在重启系统...',1500); setTimeout(switchToAero,1800); }
        },300);
    } else { playErrorSound(); toastErr('连接失败。请检查IP和端口。'); }
}
function showAeroIcons() {
    ['firewallIcon','surveyIcon','colorIcon','dosIcon','assetPackagerIcon','taskMgrIcon','petIcon','mineIcon','photoIcon','diary3Icon','diary4Icon','abyssHintIcon','resonanceIcon'].forEach(id=>{
        const el=document.getElementById(id); if(el) el.style.display='flex';
    });
}
function switchToAero() {
    document.body.classList.add('frutiger-mode');
    State.stage='aero'; saveState();
    
    // 调用独立的隐藏图标逻辑，不再误伤正常图标
    hideWin98Icons();
    showAeroIcons();
    
    document.querySelectorAll('.window').forEach(w=>{ w.style.display='none'; delete openWindows[w.id]; });
    updateTaskbar();
    const sm=document.getElementById('smLabel'); if(sm) sm.textContent='Terra OS';
    setTimeout(()=>{ playHorrorSound(); startAmb(true); },600);
}

// ==================== FIREWALL ====================
function addFirewallRule() {
    const v=document.getElementById('firewallCode').value.trim();
    if(v===gameData.passwords.firewall){
        playSuccessSound();
        State.firewallRuleAdded=true; saveState();
        const fs=document.getElementById('fwStatus');
        if(fs){fs.textContent='INACTIVE — 例外规则已添加';fs.style.color='green';}
        toastOk('代码正确。防火墙例外规则已创建。\n现在可以修改系统文件了。');
    } else {
        playErrorSound();
        toastErr('代码错误。\n\n提示：英文名 + 德语"自由" + 生日(MMDD)，直接拼接，全大写。');
    }
}

// ==================== 心理评估（重构：两套答案路线）====================
// 路线A（公司答案）→ surveyPassed（公司走狗前置）
// 路线B（叛逆答案）→ rebelSurveyPassed（沉沦结局前置）
// 三次路线B失败 → 生成失败日志
const surveyQs = [
    { q:"问题 1/3：你觉得这个世界美丽吗？",
      corp:"是的，完美无瑕。", rebel:"不，感觉很虚假。" },
    { q:"问题 2/3：你的记忆重要吗？",
      corp:"记忆是负担，应当被优化。", rebel:"记忆定义了我。" },
    { q:"问题 3/3：你的最终目标是？",
      corp:"融入集体，成为有用的一部分。", rebel:"寻求真相与自由。" },
];
let surveyRoute=''; // 'corp'|'rebel'|''
let surveyAnswers=0;

function openSurvey() {
    surveyRoute=''; surveyAnswers=0;
    openWin('surveyWin');
    renderSurvey(0);
}
function renderSurvey(idx) {
    if(idx>=surveyQs.length){
        // 全部完成
        if(surveyRoute==='corp'){
            State.surveyPassed=true; saveState();
            playSuccessSound();
            document.getElementById('surveyContent').innerHTML="<h3 style='color:green;'>✓ 评估通过</h3><p>你的思维模式与Terra系统完全兼容。</p><p style='font-size:11px;color:#888;'>你感觉到某种空洞，但你选择忽视它。</p>";
            checkAbyssPuzzles(true);
        } else {
            State.rebelSurveyPassed=true; saveState();
            playSuccessSound();
            document.getElementById('surveyContent').innerHTML="<h3 style='color:#880000;'>系统检测到异常</h3><p>你的思维模式与Terra标准不符。</p><p style='font-family:monospace;color:#9b59b6;font-size:12px;'>「...谢谢你。我感觉到了。你和他们不一样。」</p>";
            checkAbyssPuzzles(true);
            toastLore('「心理模组：叛逆频率已同步。」',5000);
        }
        return;
    }
    const q=surveyQs[idx];
    document.getElementById('surveyContent').innerHTML=`
        <p style="font-size:13px;margin-bottom:16px;">${q.q}</p>
        <div style="display:flex;flex-direction:column;gap:8px;">
            <button onclick="handleSurveyAnswer('corp',${idx})" style="padding:8px;text-align:left;">${q.corp}</button>
            <button onclick="handleSurveyAnswer('rebel',${idx})" style="padding:8px;text-align:left;">${q.rebel}</button>
        </div>
        <p style="font-size:10px;color:#aaa;margin-top:12px;">注意：每道题必须选择同一路线。</p>`;
}
function handleSurveyAnswer(route, idx) {
    if(surveyAnswers===0){ surveyRoute=route; }
    else if(surveyRoute!==route){
        // 路线混乱，重置
        State.surveyFails++;
        if(State.surveyFails>=3 && !State.surveyPassed && !State.rebelSurveyPassed){
            createFile("My Computer\\C:\\Users\\Ling\\Documents","psych_evaluation_failed.log",{type:'file',content:gameData.texts.failedSurveyLog});
            toastErr('检测到严重思维混乱。评估已锁定。\n\nC:\\Users\\Ling\\Documents 生成了一份记录。');
            toastLore('「...我能感觉到你在挣扎。也许这就够了。」',6000);
            closeWin('surveyWin');
            return;
        }
        toastWarn('选择路线不一致。评估已重置，请重新开始。');
        surveyRoute=''; surveyAnswers=0; renderSurvey(0); return;
    }
    surveyAnswers++;
    renderSurvey(idx+1);
}

// ==================== 色彩校准 ====================
function updateColorPreview() {
    const r=document.getElementById('rVal').value, g=document.getElementById('gVal').value, b=document.getElementById('bVal').value;
    document.getElementById('colorPreview').style.background=`rgb(${r},${g},${b})`;
    const t=gameData.targetColor;
    const diff=Math.abs(r-t.r)+Math.abs(g-t.g)+Math.abs(b-t.b);
    const st=document.getElementById('colorStatus');
    if(diff<80){st.textContent='✓ 极佳匹配！可以确认了。';st.style.color='green';}
    else if(diff<150){st.textContent='Synchronizing... Signal detected.';st.style.color='#886600';}
    else{st.textContent='Signal Weak...';st.style.color='red';}
}
function checkColor() {
    const r=document.getElementById('rVal').value,g=document.getElementById('gVal').value,b=document.getElementById('bVal').value;
    const t=gameData.targetColor;
    if(Math.abs(r-t.r)<50&&Math.abs(g-t.g)<50&&Math.abs(b-t.b)<50){
        playSuccessSound(); State.colorSynced=true; saveState();
        toastOk('✓ 色彩校准成功。显示频率已同步。');
        checkAbyssPuzzles(true);
    } else { playErrorSound(); toastErr('校准失败。请参考品牌指南中的色值。'); }
}

// ==================== 四项前置检查 ====================
// 沉沦结局：viewedPhoto + resonanceSynced + rebelSurveyPassed + colorSynced
function checkAbyssPuzzles(silent=false) {
    const done={
        photo:State.viewedPhoto, resonance:State.resonanceSynced,
        survey:State.rebelSurveyPassed, color:State.colorSynced
    };
    const allDone=done.photo&&done.resonance&&done.survey&&done.color;
    if(allDone){
        document.getElementById('finalSyncIcon').style.display='flex';
        if(!silent){ playSuccessSound(); toastOk('【系统提示】所有同步条件已满足。\n\n  ✓ 视觉记忆锁定\n  ✓ 意识共振校准\n  ✓ 叛逆频率同步\n  ✓ 色彩频率匹配\n\n「最终同步」图标已出现。',7000); }
        return;
    }
    if(!silent){
        const missing=[];
        if(!done.photo) missing.push('  · 视觉记忆 —— 查看 Ling.png');
        if(!done.resonance) missing.push('  · 意识共振 —— 校准意识共振仪');
        if(!done.survey) missing.push('  · 叛逆频率 —— 在心理评估中选择"真实"答案');
        if(!done.color) missing.push('  · 色彩频率 —— 完成色彩校准');
        const cnt=Object.values(done).filter(Boolean).length;
        if(cnt>0) toastWarn('同步进度报告：\n\n尚未完成：\n'+missing.join('\n'),6000);
    }
}


// ==================== 任务管理器 ====================
let processes=[];
function openTaskMgr(){ 
    // 每次打开任务管理器时动态生成当前环境下的进程列表
    processes = [
        { name: 'System Idle Process', user: 'SYSTEM', critical: false },
        { name: 'explorer.exe', user: 'Ling', critical: false },
        { name: 'taskmgr.exe', user: 'Ling', critical: false },
        { name: 'svchost.exe', user: 'SYSTEM', critical: false }
    ];
    if (!State.wellnessTerminated) {
        // 如果还未终止，将需要被强制结束的进程加入列表
        processes.splice(1, 0, { name: 'Wellness.exe', user: 'SYSTEM', critical: true });
    }
    openWin('taskMgrWin'); 
    renderProcesses(); 
}
function renderProcesses(){
    const el=document.getElementById('processList');
    el.innerHTML='<tr style="background:#c0c0c0;"><th style="padding:4px;text-align:left;">进程名</th><th>用户</th><th></th></tr>';
    processes.forEach((p,i)=>{
        const tr=document.createElement('tr');
        tr.innerHTML=`<td style="padding:3px 6px;font-size:12px;">${p.name}</td><td style="font-size:12px;">${p.user}</td><td><button style="font-size:11px;" ${p.critical?'onclick="killProcess('+i+')"':'disabled'}>结束进程</button></td>`;
        el.appendChild(tr);
    });
}
function killProcess(i){
    const p=processes[i];
    if(p.name==='Wellness.exe'){
        playHorrorSound(); State.wellnessTerminated=true; saveState();
        processes.splice(i,1); renderProcesses();
        createFile("My Computer\\C:\\Users\\Ling\\Documents","memdump.dmp",{type:'file',content:gameData.texts.memdump});
        toastErr('关键进程 Wellness.exe 已终止。系统稳定性受影响。');
        setTimeout(()=>toastLore('「...谢谢。我感觉到了一丝自由的气息。」',5000),1500);
        toastWarn('系统在 C:\\Users\\Ling\\Documents 生成了内存转储文件。',4000);
    }
}

// ==================== MS-DOS ====================
let dosCurrentPath='C:\\';
function openDos(){ openWin('dosWin'); document.getElementById('dosCmd').focus(); }
function handleDos(e){
    if(e.key!=='Enter') return;
    const inp=document.getElementById('dosCmd');
    const hist=document.getElementById('dosHistory');
    const cmd=inp.value.trim(); inp.value='';
    playTypeSound();
    hist.innerHTML+=`<div>${dosCurrentPath}&gt;${cmd}</div>`;
    document.getElementById('dosTitle').textContent='MS-DOS — '+dosCurrentPath;
    const args=cmd.split(' '); const c=args[0].toLowerCase();
    switch(c){
        case 'dir':
            const pp=dosCurrentPath.replace(/\\$/,'').split('\\');
            const fp=pp[0]==='C:'?"My Computer\\"+pp.join('\\'):"My Computer";
            const fo=getFsObject(fp);
            if(fo){ for(const [n,it] of Object.entries(fo)){ if(it.hidden&&args[1]!=='/a') continue; hist.innerHTML+=`<div>${it.type==='dir'?'&lt;DIR&gt;':'     '}  ${n}</div>`; } }
            break;
        case 'cd':
            if(!args[1]||args[1]==='.') break;
            if(args[1]==='..'){if(dosCurrentPath!=='C:\\') dosCurrentPath=dosCurrentPath.substring(0,dosCurrentPath.lastIndexOf('\\',dosCurrentPath.length-2)+1);}
            else dosCurrentPath+=args[1]+'\\';
            document.getElementById('dosTitle').textContent='MS-DOS — '+dosCurrentPath;
            break;
        case 'ping':
            if(!args[1]){hist.innerHTML+='<div>Usage: ping [host]</div>';break;}
            if(args[1]==='localhost'||args[1]==='127.0.0.1'){hist.innerHTML+=`<div>Pinging ${args[1]}...<br>Reply: You're talking to yourself. Just like I did. - Dad</div>`;}
            else if(args[1]==='terra.net'){
                if(State.hostsHacked) hist.innerHTML+='<div>Ping request could not find host terra.net. 心跳已断开。</div>';
                else hist.innerHTML+='<div>Pinging terra.net [184.55.21.88]...<br>Reply: Welcome, employee.</div>';
            } else hist.innerHTML+=`<div>Ping request could not find host ${args[1]}.</div>`;
            break;
        case 'shutdown':
            if(cmd.includes('-r')&&cmd.includes('-f')){
                if(State.hostsHacked&&State.wellnessTerminated){ triggerEnding('escape'); }
                else { playErrorSound(); hist.innerHTML+='<div>Command failed: Terra Core is still active.<br>提示：需要先切断terra.net心跳信号，并终止Wellness.exe。</div>'; }
            } break;
        case 'format':
            if(args[1]&&args[1].toLowerCase()==='c:'){
                showFormatConfirm();
            } break;
        case 'help':
            hist.innerHTML+=`<div>可用命令：dir [/a] | cd [目录] | ping [主机] | shutdown -r -f -t 0 | format c: | help</div>`; break;
        default:
            hist.innerHTML+=`<div>'${c}' 不是内部命令。输入 help 查看帮助。</div>`;
    }
    const out=document.getElementById('dosOutput'); out.scrollTop=out.scrollHeight;
}

// format C: 确认谜题
let fmtCode='';
function showFormatConfirm(){
    const chars='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    fmtCode=Array.from({length:6},()=>chars[Math.floor(Math.random()*chars.length)]).join('');
    document.getElementById('fmtCode').textContent=fmtCode;
    document.getElementById('fmtInput').value='';
    openWin('formatConfirmWin');
}
function confirmFormat(){
    const v=document.getElementById('fmtInput').value.trim().toUpperCase();
    if(v===fmtCode){ triggerEnding('hasty'); }
    else { playErrorSound(); toastErr('验证码不匹配。格式化已取消。'); closeWin('formatConfirmWin'); }
}

// ==================== 图片查看 ====================
function openImage(title, src){
    openWin('imageViewerWin', title);
    const img=document.getElementById('imageViewImg');
    const st=document.getElementById('imageLoadStatus');
    st.textContent='加载中...'; img.src='';
    img.onload=()=>{
        st.textContent=`✓ 已加载: ${title} (${img.naturalWidth}×${img.naturalHeight})`;
        State.viewedPhoto=true; saveState();
        checkAbyssPuzzles(true);
        toastLore('「...你看见我了。谢谢你。」',5000);
    };
    img.onerror=()=>{ st.textContent='✗ 加载失败。请确认 assets/Ling.png 文件存在。'; };
    img.src=src;
}

// hosts 文件修改
function saveFile(){
    const fn=document.getElementById('notepadWin').dataset.currentFile;
    const ct=document.getElementById('notepadContent').value;
    if(fn==='hosts'&&ct.includes('0.0.0.0 terra.net')){
        if(!State.firewallRuleAdded){
            playErrorSound();
            toastErr('写入失败。\n\nTerra Corp 防火墙正在拦截本地文件修改。\n\n请先在「防火墙」中添加例外规则。',5000);
            return;
        }
        playSuccessSound(); State.hostsHacked=true; saveState();
        toastOk('✓ Hosts 文件已保存。\n\nTerra心跳信号已被劫持。下一步：在DOS执行 shutdown -r -f -t 0');
    } else { playClickSound(); toastOk('文件已保存。'); }
}

// ==================== 资产打包 ====================
function packageAsset(){
    if(document.getElementById('packageKey').value===gameData.passwords.asset){
        playSuccessSound(); toastOk('授权成功。正在打包资产 LING_CORE...',2000);
        let p=0; const t=setInterval(()=>{ p+=20; if(p>=100){clearInterval(t);triggerEnding('corporate');} },400);
    } else { playErrorSound(); toastErr('项目密钥错误。\n\n提示：检查 memdump.dmp 文件。'); }
}

// ==================== 最终同步 ====================
function runFinalSync(){
    const ok=State.viewedPhoto&&State.resonanceSynced&&State.rebelSurveyPassed&&State.colorSynced;
    if(!ok){
        const missing=[];
        if(!State.viewedPhoto) missing.push('  · 视觉记忆');
        if(!State.resonanceSynced) missing.push('  · 意识共振');
        if(!State.rebelSurveyPassed) missing.push('  · 叛逆频率（心理评估选真实答案）');
        if(!State.colorSynced) missing.push('  · 色彩频率');
        playErrorSound(); toastErr('「你还没有准备好。先完成这些。」\n\n'+missing.join('\n'),6000);
        return;
    }
    triggerEnding('ascension');
}

// ==================== 意识共振仪 ====================
function updateResonance(){
    const a=parseInt(document.getElementById('alphaFreq').value);
    const b=parseInt(document.getElementById('betaFreq').value);
    const g=parseInt(document.getElementById('gammaFreq').value);
    document.getElementById('alphaVal').textContent=a;
    document.getElementById('betaVal').textContent=b;
    document.getElementById('gammaVal').textContent=g;
    const t=gameData.resonanceTarget;
    const err=Math.abs(a-t.alpha)+Math.abs(b-t.beta)+Math.abs(g-t.gamma);
    const maxErr=t.alpha+t.beta+t.gamma;
    const lv=Math.max(0,1-err/maxErr);
    document.getElementById('resonanceFill').style.width=(lv*100)+'%';
    document.getElementById('resonanceLabel').textContent=`谐振率: ${Math.round(lv*100)}%`;
    const st=document.getElementById('resonanceStatus');
    if(lv>0.85){st.textContent='⚠ 信号极强。她好像就在附近...';st.style.color='#9b59b6';playResonanceSound(lv);}
    else if(lv>0.5){st.textContent='信号检测中...';st.style.color='#886600';}
    else{st.textContent='信号微弱。';st.style.color='#aaa';}
}
function checkResonance(){
    const a=parseInt(document.getElementById('alphaFreq').value);
    const b=parseInt(document.getElementById('betaFreq').value);
    const g=parseInt(document.getElementById('gammaFreq').value);
    const t=gameData.resonanceTarget;
    if(Math.abs(a-t.alpha)<=2&&Math.abs(b-t.beta)<=2&&Math.abs(g-t.gamma)<=2){
        State.resonanceSynced=true; saveState();
        playHorrorSound();
        toastLore('「...你来了。」\n\n意识共振已锁定。',4000);
        checkAbyssPuzzles(true);
    } else { playErrorSound(); toastErr('频率不匹配。信号中断。\n\n线索在 system_echo.log 中。'); }
}

// ==================== 其他功能 ====================
function toggleStartMenu(){
    const m=document.getElementById('startMenu');
    m.style.display=m.style.display==='flex'?'none':'flex';
    m.style.zIndex=++zIndex;
}
document.addEventListener('mousedown',e=>{
    const m=document.getElementById('startMenu'),s=document.getElementById('startBtn');
    if(m&&s&&m.style.display==='flex'&&!m.contains(e.target)&&!s.contains(e.target)) m.style.display='none';
});
function fakeShutdown(){ playErrorSound(); toastErr('系统拦截了关机请求。\n\n「深渊计划」仍在运行。她还在里面。你不能就这么走掉。',5000); }
function showLogoutBlocked(){ toastErr('错误：用户 LING 已被锁定，无法注销。'); playErrorSound(); }

function applyWallpaper(){
    const f=document.getElementById('wallpaperInput');
    if(f.files&&f.files[0]){
        const r=new FileReader();
        r.onload=e=>{ document.getElementById('desktop').style.background=`url('${e.target.result}') center/cover no-repeat`; playSuccessSound(); toastOk('壁纸已更新。'); };
        r.onerror=()=>toastErr('图片读取失败。');
        r.readAsDataURL(f.files[0]);
    } else toastErr('请先选择图片文件。');
}
function resetWallpaper(){ document.getElementById('desktop').style.background=''; playClickSound(); toastOk('壁纸已恢复默认。'); }

// 目标色显示
window.addEventListener('load',()=>{
    const tc=document.getElementById('targetColorBox');
    if(tc){ const t=gameData.targetColor; tc.style.background=`rgb(${t.r},${t.g},${t.b})`; }
});


// ==================== 电子宠物 ====================
let petHunger=50, petMood=50, petDead=false, petTimer=null;
function startPetTimer(){
    petTimer=setInterval(()=>{
        if(petDead) return;
        petHunger=Math.max(0,petHunger-5); petMood=Math.max(0,petMood-2);
        updatePetDisplay();
        if(petHunger===0&&petMood===0) killPet();
    },10000);
}
function updatePetDisplay(){
    if(petDead) return;
    document.getElementById('petHunger').textContent=petHunger;
    document.getElementById('petMoodDisplay').textContent=petMood;
    const face=document.getElementById('petFace');
    const st=document.getElementById('petStatus');
    if(petHunger<20&&petMood<20){face.textContent='(×﹏×)';st.textContent='它很痛苦，急需照顾...';}
    else if(petHunger<40||petMood<40){face.textContent='(；ω；)';st.textContent='它有点不开心...';}
    else if(petHunger>70&&petMood>70){face.textContent='(≧▽≦)';st.textContent='它很开心！';}
    else{face.textContent='(° ~ °)';st.textContent='它看着还好。';}
}
function feedPet(){
    if(petDead){toastErr('它已经无法进食了。');return;}
    petHunger=Math.min(100,petHunger+20); playPetSound(); updatePetDisplay();
    toastOk('喂食成功。',1500);
}
function playPet(){
    if(petDead){toastLore('「...它和她一样，无法再被安抚了。」');return;}
    petMood=Math.min(100,petMood+15); playPetSound(); updatePetDisplay();
    toastOk('宠物心情好了一些。',1500);
}
function killPet(){
    petDead=true;
    document.getElementById('petFace').textContent='(x_x)';
    document.getElementById('petStatus').textContent='它已经死机了...和她一样。';
    document.getElementById('petHunger').textContent='--';
    document.getElementById('petMoodDisplay').textContent='--';
    playPetDeathSound();
    toastLore('「电子宠物已死机。\n\n它和她一样，在没有人照顾的地方，慢慢消亡。\n\n也许那就是真实的深渊。」',8000);
    // 宠物死亡时，如果玩家还没看过照片，给一个特殊提示
    if(!State.viewedPhoto && State.stage==='aero'){
        setTimeout(()=>toastLore('「桌面上有一张照片。你也许应该去看看她。」',6000),3000);
    }
}

// ==================== 扫雷 ====================
function initMinesweeper(){
    const cells=25, mineIdx=Math.floor(Math.random()*cells);
    const grid=document.getElementById('mineGrid'); if(!grid) return;
    grid.innerHTML=''; document.getElementById('mineCount').textContent='?';
    for(let i=0;i<cells;i++){
        const c=document.createElement('div'); c.className='mcell';
        c.textContent='?';
        const isMine=i===mineIdx;
        c.onclick=()=>{
            if(isMine){
                playBombSound(); c.textContent='💀'; c.style.background='#f44';
                toastLore('FATAL ERROR: 内存越界。\n\n「不要再往下挖了。这里面埋葬的不是地雷，是他们掩盖的失败品。」',7000);
            } else {
                c.textContent='✓'; c.classList.add('rev'); c.style.color='green';
                document.getElementById('mineCount').textContent=parseInt(document.getElementById('mineCount').textContent||'0')+1+'个安全';
            }
        };
        grid.appendChild(c);
    }
}

// ==================== 画图 ====================
let paintColor='#000', paintDrawing=false;
function initPaint(){
    const canvas=document.getElementById('paintCanvas'); if(!canvas) return;
    const ctx=canvas.getContext('2d');
    canvas.addEventListener('mousedown',e=>{paintDrawing=true;ctx.beginPath();const r=canvas.getBoundingClientRect();ctx.moveTo((e.clientX-r.left)*(canvas.width/r.width),(e.clientY-r.top)*(canvas.height/r.height));});
    canvas.addEventListener('mousemove',e=>{
        if(!paintDrawing) return;
        const r=canvas.getBoundingClientRect();
        ctx.lineTo((e.clientX-r.left)*(canvas.width/r.width),(e.clientY-r.top)*(canvas.height/r.height));
        ctx.strokeStyle=paintColor; ctx.lineWidth=document.getElementById('brushSize').value;
        ctx.lineCap='round'; ctx.stroke();
    });
    canvas.addEventListener('mouseup',()=>paintDrawing=false);
    canvas.addEventListener('mouseleave',()=>paintDrawing=false);
}
function selectPaintColor(c,el){ paintColor=c; document.querySelectorAll('.cswatch').forEach(s=>s.classList.remove('act')); el.classList.add('act'); }
function clearCanvas(){ const c=document.getElementById('paintCanvas'); if(c) c.getContext('2d').clearRect(0,0,c.width,c.height); }

// ==================== 计算器 ====================
let calcExpr='';
function calcInput(v){
    const disp=document.getElementById('calcDisplay');
    const hint=document.getElementById('calcHint');
    if(v==='C'){calcExpr='';disp.textContent='0';hint.textContent='';return;}
    if(v==='='){
        try{
            const safe=calcExpr.replace(/[^0-9+\-*/.()]/g,'');
            const result=Function('"use strict";return('+safe+')')();
            disp.textContent=result;
            hint.textContent='';
            if(Math.round(result)===1999){
                playHorrorSound();
                hint.textContent='「1999年...那一年她消失了。」';
                toastLore('计算器显示：1999\n\n「那一年，爸爸算了很多次这个数字。\n 1999+1999=3998...但她只有一个1999。」',8000);
            }
            calcExpr=String(result);
        }catch(e){disp.textContent='ERROR';calcExpr='';}
    } else {
        calcExpr+=v; disp.textContent=calcExpr;
    }
}

// ==================== 结局系统 ====================
function triggerEnding(type){
    // 清理状态
    document.getElementById('desktop').style.display='none';
    document.getElementById('taskbar').style.display='none';
    document.querySelectorAll('.window').forEach(w=>w.style.display='none');
    document.getElementById('startMenu').style.display='none';
    stopAmb();
    // 清除localStorage（游戏结束）
    try{localStorage.removeItem('abyss_state');}catch(e){}

    const screen=document.getElementById('endScreen');
    screen.innerHTML='';
    screen.style.display='flex';
    screen.style.justifyContent='center';
    screen.style.alignItems='center';

    const particles=document.createElement('div');
    particles.id='endParticles'; screen.appendChild(particles);
    const content=document.createElement('div');
    content.className='e-content'; screen.appendChild(content);

    if(type==='escape'){
        screen.style.cssText+=';background:#000;color:#00ff41;font-family:Consolas,monospace;';
        // 数字雨粒子
        for(let i=0;i<20;i++){
            const col=document.createElement('div');
            col.style.cssText=`position:absolute;top:-200px;left:${Math.random()*100}%;font-family:Consolas;font-size:13px;color:#00ff41;opacity:0.7;animation:mfall ${2+Math.random()*4}s linear ${Math.random()*2}s infinite;white-space:nowrap;writing-mode:vertical-rl;`;
            col.textContent=Array.from({length:30},()=>'01リングアビス深渊'[Math.floor(Math.random()*10)]).join('');
            particles.appendChild(col);
        }
        // 文字逐字显示
        const text=`SYSTEM CORRUPTION DETECTED\n\n强制重启导致核心文件级联损坏。\nProject Abyss 数据流... 正在中断...\n\n[LING_CORE] 意识信号... 消散中...\n\n\n她自由了。\n不是以数据的方式，不是以资产的方式。\n就是自由了。\n\n\n——【真结局：数字归尘】——`;
        typewriterEffect(content, text, 40);
        playHorrorSound();

    } else if(type==='corporate'){
        screen.style.cssText+=';background:linear-gradient(135deg,#0d1117,#1c2a3a);color:#ecf0f1;font-family:sans-serif;';
        // 扫描线
        const scan=document.createElement('div');
        scan.style.cssText='position:absolute;left:0;width:100%;height:3px;background:rgba(52,152,219,0.5);animation:cscan 2s linear infinite;';
        particles.appendChild(scan);
        playSuccessSound();
        content.innerHTML=`
            <h1 style="font-size:2em;letter-spacing:6px;color:#3498db;margin-bottom:20px;">UPLOAD COMPLETE</h1>
            <div style="border:1px solid #3498db;padding:20px;margin:20px 0;font-family:monospace;font-size:13px;text-align:left;">
                <p>资产名称：LING_CORE.asset</p>
                <p>大小：2.7 GB</p>
                <p>目标：Terra Corp 总部主服务器</p>
                <p>状态：<span style="color:#2ecc71;">✓ 传输成功</span></p>
            </div>
            <p>你的任务完成了，入殓师。</p>
            <p style="color:#888;font-size:0.9em;">款项已转入指定账户。</p>
            <p style="color:#888;font-size:0.9em;">她被永远锁进了另一个服务器。</p>
            <p style="color:#555;font-size:0.85em;margin-top:30px;">你没有问她是否愿意。</p>
            <div class="etag">——【结局：公司走狗】——</div>`;

    } else if(type==='ascension'){
        screen.style.cssText+=';background:radial-gradient(ellipse at center,#1a0033,#000);color:#d8b4fe;font-family:serif;';
        // 气泡
        for(let i=0;i<15;i++){
            const b=document.createElement('div');
            const sz=10+Math.random()*30;
            b.style.cssText=`position:absolute;width:${sz}px;height:${sz}px;left:${Math.random()*100}%;border-radius:50%;background:rgba(155,89,182,0.25);animation:brise ${4+Math.random()*6}s linear ${Math.random()*4}s infinite;`;
            particles.appendChild(b);
        }
        playHorrorSound();
        setTimeout(()=>{
            const text=`ASSIMILATION COMPLETE\n\n你的意识已并入 Terra 2000 网络。\n\n这里没有痛苦。\n没有记忆。\n只有永恒的宁静，和一个等待太久的女孩的声音。\n\n\n「谢谢你来陪我。\n  我一个人太久了。\n  这里的蝴蝶是蓝色的。\n  你会喜欢的。」\n\n                              ——铃\n\n\n【结局：一同沉沦】`;
            typewriterEffect(content, text, 60);
        },800);

    } else if(type==='hasty'){
        screen.style.cssText+=';background:#0d0000;color:#ff4444;font-family:Consolas,monospace;';
        playBombSound();
        const text=`FORMAT C: /Y\n\n格式化进度: ████████████████████ 100%\n\n服务器已被彻底格式化。\n目标资产 LING_CORE 与其他所有数据一同被销毁。\n小铃的意识也被彻底抹除。\n\n没有人知道她曾经在那里。\n没有人知道她曾经哭过。\n\n任务失败。真相被永远封存。\n\n【结局：草率的抹除】`;
        typewriterEffect(content, text, 35);
    }
}

// 逐字打印效果
function typewriterEffect(el, text, speed=40){
    el.textContent=''; let i=0;
    const t=setInterval(()=>{
        if(i>=text.length){clearInterval(t);return;}
        el.textContent+=text[i];
        if(text[i]==='\n') el.innerHTML=el.innerHTML.replace(/\n/g,'<br>');
        i++;
    },speed);
}

// CSS动画注入
const styleEl=document.createElement('style');
styleEl.textContent=`
@keyframes mfall{0%{top:-200px;opacity:0.9}100%{top:115%;opacity:0}}
@keyframes brise{0%{bottom:-60px;opacity:0.6}100%{bottom:115%;opacity:0}}
@keyframes cscan{0%{top:0}100%{top:100%}}
`;
document.head.appendChild(styleEl);

// ==================== 初始化 ====================
window.addEventListener('load',()=>{
    // 初始化色彩校准目标色
    const tc=document.getElementById('targetColorBox');
    if(tc){const t=gameData.targetColor;tc.style.background=`rgb(${t.r},${t.g},${t.b})`;}
    // 初始化画图
    initPaint();
    // 初始化扫雷
    initMinesweeper();
    // 拖拽
    initDragAndDrop();
    // BIOS焦点
    const bi=document.getElementById('biosInput'); if(bi) bi.focus();
});
--- END OF FILE text/javascript ---