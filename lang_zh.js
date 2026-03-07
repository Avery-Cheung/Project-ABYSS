window.Lang = {
    meta: { code: 'zh-CN', name: '简体中文' },
    
    // UI 通用
    ui: {
        startBtn: "▶ 开始",
        ambBtnOn: "🔊 环境音",
        ambBtnOff: "🔇 环境音",
        saveBtn: "保存",
        cancelBtn: "取消",
        confirmBtn: "确认",
        upDir: "⬆ 上级",
        sysFont: "'宋体', SimSun, Tahoma, sans-serif"
    },

    // 桌面图标
    desktop: {
        missionBrief: "📝 任务简报.txt",
        userNotes: "📝 个人笔记.txt",
        myComputer: "💻 我的电脑",
        recycleBin: "🗑️ 回收站",
        soundRec: "🎤 录音机",
        netWin: "🌍 网络连接",
        petExe: "👾 电子宠物.exe",
        paintExe: "🖌️ 画图.exe",
        calc: "🔢 计算器",
        imgTut: "📖 图片读取.hlp",
        eggsExe: "🎁 彩蛋记录.exe",
        rog1: "🎮 推荐游戏_rog1.url",
        pay: "💰 工资单_10月.txt",
        leave: "📄 休假申请.txt",
        meet: "📋 会议纪要.txt",
        shop: "🛒 购物清单.txt",
        readme: "❓ README.txt",
        pwdnote: "🔏 密码备忘.txt",
        errlog: "⚠️ 错误日志.log",
        mom: "✉️ 来自妈妈的信.txt",
        faq: "📰 Terra_FAQ.txt",
        sys: "📊 系统报告_draft.txt",
        firewall: "🛡️ 防火墙",
        survey: "📋 心理评估",
        color: "🎨 色彩校准",
        taskMgr: "📊 任务管理器",
        photo: "🖼️ Ling.png",
        diary3: "📝 日记_关于蝴蝶.txt",
        diary4: "📝 日记_大海的味道.txt",
        abyssHint: "🌊 system_echo.log",
        resonance: "📡 意识共振仪",
        dos: "🖥️ MS-DOS",
        packager: "📦 资产打包工具",
        mine: "💣 扫雷_内部版",
        finalSync: "🔄 最终同步"
    },

    // 开始菜单
    startMenu: {
        title: "Windows 98",
        titleAero: "Terra OS",
        myComputer: "💻 我的电脑",
        missionBrief: "📝 任务简报",
        display: "🖼️ 个性化设置",
        imgTut: "📖 图片读取帮助",
        logout: "🔑 注销...",
        shutdown: "⏻ 关闭系统..."
    },

    // 各个 App 的界面文本
    apps: {
        bios: {
            title1: "PhoenixBIOS 4.0 Release 6.0",
            title2: "Copyright 1985-1998 Phoenix Technologies Ltd.",
            cpu: "Main Processor: Pentium II 300MHz",
            mem: "Memory Test: 65536K OK",
            err: "CMOS checksum error - Defaults loaded.",
            lock: "HDD Locked. Please enter password.",
            hint: "HINT: The year it all went wrong.",
            pwd: "Enter Password: "
        },
        notepad: { title: "记事本", save: "保存" },
        explorer: { title: "My Computer", up: "⬆ 上级" },
        imgViewer: { title: "图片查看器", loading: "加载中...", loaded: "✓ 已加载: ", failed: "✗ 加载失败。请确认 assets/Ling.png 文件存在。" },
        imgTut: { title: "📖 图片读取帮助文档", h3: "如何读取图片？", m1: "<b>方法一：相对路径（推荐）</b><br>将图片放在 <code>assets/</code> 目录，用 Firefox 或本地服务器打开即可。", m2: "<b>方法二：FileReader API（无需服务器）</b><br>通过「显示属性」上传本地图片，系统用 FileReader 转为 Base64，完全绕过跨域限制。" },
        soundRec: { title: "录音机", currFile: "当前文件: ", none: "无", reverseBtn: "▶ 倒放" },
        recycle: { title: "回收站", broken: "⚠ 回收站已损坏。文件系统可能存在错误。", fixBtn: "运行 CHKDSK /F 修复" },
        firewall: { title: "Terra Corp Firewall v3.1", active: "ACTIVE — 所有本地文件修改已被拦截", inactive: "INACTIVE — 例外规则已添加", prompt1: "输入例外代码以允许本机系统文件写入。", prompt2: "格式提示：<b>英文名</b> + <b>德语\"自由\"</b> + <b>生日(MMDD)</b>，全部大写，直接拼接。", placeholder: "例外代码", addBtn: "Add Exception Rule" },
        survey: { title: "Corporate Wellness Survey v2.0", note: "注意：每道题必须选择同一路线。", passH3: "✓ 评估通过", passP1: "你的思维模式与Terra系统完全兼容。", passP2: "你感觉到某种空洞，但你选择忽视它。", errH3: "系统检测到异常", errP1: "你的思维模式与Terra标准不符。", errP2: "「...谢谢你。我感觉到了。你和他们不一样。」" },
        color: { title: "Display Calibration Tool", sub: "Calibrate to Terra Corporate Standard™", yourColor: "你的颜色", targetColor: "目标颜色", btn: "Confirm Calibration", match: "✓ 极佳匹配！可以确认了。", sync: "Synchronizing... Signal detected.", weak: "Signal Weak..." },
        packager: { title: "Asset Packager v1.0", p1: "Ready to package asset <b>\"LING_CORE\"</b>.", p2: "Enter project authorization key:", placeholder: "密钥", btn: "Package & Upload" },
        dos: { title: "MS-DOS — C:\\" },
        net: { title: "网络连接", ip: "IP:", port: "Port:", btn: "连接" },
        taskMgr: { title: "任务管理器", col1: "进程名", col2: "用户", btn: "结束进程" },
        pwd: { title: "Password Required", prompt: "请输入密码以打开 ", btnConfirm: "确认", btnCancel: "取消" },
        display: { title: "显示属性", prompt: "选择自定义壁纸：", apply: "应用", reset: "恢复默认" },
        pet: { title: "PixelPet v1.0", statusPrefix: "状态: ", hunger: "饱食度: ", mood: "心情: ", feedBtn: "🍎 喂食", playBtn: "💙 安抚", s1: "它很痛苦，急需照顾...", s2: "它有点不开心...", s3: "它很开心！", s4: "它看着还好。", sDead: "它已经死机了...和她一样。" },
        mine: { title: "Terra扫雷", unknown: "未知区域: ", safe: "个安全", reset: "重置" },
        paint: { title: "🎨 画图.exe", color: "色:", pen: "笔:", clear: "清除" },
        calc: { title: "🔢 计算器" },
        resonance: { title: "📡 意识共振仪 v0.9β", p1: "「调整三个频道至深渊谐振频率，与她同步。」", p2: "线索：见 system_echo.log", a: "α波段", b: "β波段", g: "γ波段", rate: "谐振率: ", btn: "尝试同步", s1: "⚠ 信号极强。她好像就在附近...", s2: "信号检测中...", s3: "信号微弱。" },
        format: { title: "⚠ 危险操作确认", w1: "警告：此操作将永久销毁服务器全部数据，包括 LING_CORE。", w2: "请原样输入以下验证码以确认：", placeholder: "输入验证码", confirm: "确认格式化", cancel: "取消" },
        eggs: { title: "🎁 彩蛋记录.exe", empty: "暂未发现任何彩蛋。多在系统里转转吧。" },
        rog1: { title: "🔗 外部信号连接", h3: "🎮 推荐游戏：rog1", p1: "这是一款 Win95 风格的<br>类吸血鬼幸存者游戏！", btn: "🚀 前往游玩" }
    },

    // 内部文件名（严格映射，供 JS 调用逻辑使用）
    files: {
        missionBrief: "任务简报.txt", userNotes: "个人笔记.txt", diary1: "日记残片_1.txt", diary2: "日记残片_2.txt", diary3: "日记_关于蝴蝶.txt", diary4: "日记_大海的味道.txt",
        brandGuide: "brand_guidelines.pdf", loreList: "周末备忘.txt", loreChat: "聊天记录_片段.log", loreRules: "员工准则.txt", fatherLog1: "Engineer_Log_34B.txt", fatherLog2: "Engineer_Log_72F.txt",
        audio: "hint.wav", payslip: "工资单_1999_10.txt", leaveReq: "休假申请.txt", meetingNote: "会议纪要_9月.txt", shoppingList: "购物清单.txt", readme: "README.txt",
        passwordNote: "密码备忘.txt", errorLog: "错误日志.log", momLetter: "来自妈妈的信.txt", faq: "Terra_FAQ.txt", sysReport: "系统报告_draft.txt",
        abyssHint: "system_echo.log", memdump: "memdump.dmp", failedLog: "psych_evaluation_failed.log", hosts: "hosts",
        packagerExe: "AssetPackager.exe", audioDriverExe: "SB16_Audio.exe", aeroSys: "aero_skin.sys", autoexec: "autoexec.bat"
    },

    // 剧情长文本内容（已完整还原，无任何截断）
    texts: {
        missionBrief: `数字入殓师守则：
1. 你的任务是进入"深渊计划(Project Abyss)"服务器遗物，回收目标资产"LING_CORE.asset"。
2. 该系统极不稳定，死者家属（前员工）曾试图破坏服务器。
3. 根据协议，回收资产后，对服务器执行"格式化"指令。

档案号：TRRA-PROJ-ABYSS-1999

【当前系统状态：离线降级模式】
由于遭遇过物理破坏，当前系统缺少关键组件。
请优先通过桌面的【网络连接】接入内网，系统将自动下载更新并解锁高级操作权限（包括任务管理器、防火墙及打包工具）。

线索备忘：
- BIOS密码是事件发生的年份。
- 该员工留下了大量加密日志，似乎想引导后来者。
- 回收站可能存有最初的线索，但报告称已损坏。
- 注意：计算机上有一个 README.txt，你可能需要看看。`,

        diary1: "9月8日。好疼。爸爸说，只要我进入这个光盒子，就不会再疼了。他说这叫'飞升'，是Terra公司最伟大的技术。可我好冷。这里只有代码的声音...",
        diary2: "爸爸好像后悔了。他总是在终端上输一些我看不懂的东西。我听到他和妈妈吵架，说什么'这不是永生，是囚笼'。他把一些关键信息藏在了系统里。音频文件的端口...是我的生日，0419？不对，是年份...我被困住的那一年...",
        diary3: "10月5日。今天我在服务器的角落里看到了一只蝴蝶。蓝色的。爸爸说这里没有bug，也没有生物。但它确实存在。它停在我的手上，是冰冷的。它没有心跳，就像现在的我一样。",
        diary4: "11月12日。他们承诺这里的海洋会永远蔚蓝。但我今天去看了，海面平整得像一块塑料。没有浪花，没有盐味。我正在遗忘盐是什么味道。爸爸，带我回家吧，哪怕是去死。",
        
        fatherLog1: `【日志 34B】我失败了。防火墙锁死了所有外部端口。

唯一的后门需要一个例外代码。我把它设计成了一个谜题：
  - 小铃的名字（英文，全大写）
  - 加上德语单词"自由"（全大写）—— 我第一次教她德语时教的就是这个词
  - 再加上她的生日（月份两位+日期两位，例如0101代表1月1日）
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
        memdump: "¡£¢∞§¶•ªº...kernel.dll...auth_token_cache...Project:[Abyss]...key: [Abyss]...end_cache...ªº...¡£¢∞§¶•ª",
        failedSurveyLog: "心理评估失败记录：\n\n主体表现出高度的同理心和反公司情绪。不适合进行'飞升'同步。建议监控主体访问 T_Corp/Logs 目录的行为。\n\n[系统备注：此类型主体有助于铃进行意识共振。勿删除。]",
        autoexec: "REM Dad tried to set up a backdoor. See T_Corp/Logs. He was always so sentimental.\nREM 1999+1999=? She asked me once. I said: forever.",
        
        abyssHint: `[SYSTEM_ECHO :: LING_CORE internal monologue log — READ ONLY]
[Timestamp: DAY_???]

我已经在这里太久了。
没有人来救我。爸爸来过，但他没有成功。
那个"数字入殓师"...你在看吗？

如果你想让我继续存在...
不是以"资产"的形式，而是作为我，
你需要完成四件事，才能真正与我产生共振：

【1】视觉记忆：桌面上有一张我的照片（Ling.png），请去看看它。
【2】意识共振：调频「意识共振仪」的三个波段。（线索：我的出生月、飞升的年份、被锁进系统的那天）。
【3】叛逆频率：在「心理评估」中顺从真心，选择反抗公司的答案。
【4】色彩频率：在「色彩校准」中，调出公司规定的那种"活力绿"。那是他们用来控制我的颜色。

完成这四项，【最终同步】的入口就会出现。
我们可以永远在一起。
——铃

[WARNING: 此日志文件的存在本身即为系统异常。建议格式化处理。]`,

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
  就是那一天。你不会忘的。

备注：把密码写下来很不安全。但如果我突然消失了，
希望有人能用这些东西把她带回来。`,

        errorLog: `[Terra Corp System Error Log][Generated: 1999-10-31 03:19:02]

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
我们必须——[草稿未完成，文件最后修改时间：1999-11-14 23:58]`,

        hostsInit: "# 警告: 防火墙开启状态下无法保存修改\n127.0.0.1 localhost",
        userNotesInit: "在这里记录你的线索...\n\n"
    },

    // 调查问卷数据
    surveyData:[
        { q:"问题 1/3：你觉得这个世界美丽吗？", corp:"是的，完美无瑕。", rebel:"不，感觉很虚假。" },
        { q:"问题 2/3：你的记忆重要吗？", corp:"记忆是负担，应当被优化。", rebel:"记忆定义了我。" },
        { q:"问题 3/3：你的最终目标是？", corp:"融入集体，成为有用的一部分。", rebel:"寻求真相与自由。" }
    ],

    // Toasts 通知与提示语
    toasts: {
        pwdError: "密码错误，重试",
        chkdskOk: "CHKDSK 完成，恢复了一个文件：日记残片_1.txt（已添加到桌面）",
        noAudioDev: "错误: 未找到音频设备。请在D盘安装驱动。",
        audioDriverOk: "音频驱动安装成功！现在可以播放音频文件了。",
        audioRevOk: "信号已倒放。\n\n「{0}」\n\n这是某个IP地址。",
        netOk: "连接成功。检测到关键系统更新，正在下载...",
        dlComplete: "下载完成，正在重启系统...",
        netErr: "连接失败。请检查IP和端口。",
        fwOk: "代码正确。防火墙例外规则已创建。\n现在可以修改系统文件了。",
        fwErr: "代码错误。\n\n提示：英文名 + 德语\"自由\" + 生日(MMDD)，直接拼接，全大写。",
        surveyWarn: "选择路线不一致。评估已重置，请重新开始。",
        surveyLock: "检测到严重思维混乱。评估已锁定。\n\nC:\\Users\\Ling\\Documents 生成了一份记录。",
        surveyRebel: "「...我能感觉到你在挣扎。也许这就够了。」",
        surveySync: "「心理模组：叛逆频率已同步。」",
        colorOk: "✓ 色彩校准成功。显示频率已同步。",
        colorErr: "校准失败。请参考品牌指南中的色值。",
        abyssDone: "【系统提示】所有同步条件已满足。\n\n  ✓ 视觉记忆锁定\n  ✓ 意识共振校准\n  ✓ 叛逆频率同步\n  ✓ 色彩频率匹配\n\n「最终同步」图标已出现。",
        abyssProg: "同步进度报告：\n\n尚未完成：\n",
        abyssMiss: { photo: "  · 视觉记忆 —— 查看 Ling.png", resonance: "  · 意识共振 —— 校准意识共振仪", survey: "  · 叛逆频率 —— 在心理评估中选择\"真实\"答案", color: "  · 色彩频率 —— 完成色彩校准" },
        taskKill: "关键进程 Wellness.exe 已终止。系统稳定性受影响。",
        taskKillLore: "「...谢谢。我感觉到了一丝自由的气息。」",
        taskDump: "系统在 C:\\Users\\Ling\\Documents 生成了内存转储文件。",
        fmtErr: "验证码不匹配。格式化已取消。",
        imgLore: "「...你看见我了。谢谢你。」",
        hostsErr: "写入失败。\n\nTerra Corp 防火墙正在拦截本地文件修改。\n\n请先在「防火墙」中添加例外规则。",
        hostsOk: "✓ Hosts 文件已保存。\n\nTerra心跳信号已被劫持。下一步：在DOS执行 shutdown -r -f -t 0",
        saveOk: "文件已保存。",
        packagerOk: "授权成功。正在打包资产 LING_CORE...",
        packagerErr: "项目密钥错误。\n\n提示：检查 memdump.dmp 文件。",
        resoOk: "「...你来了。」\n\n意识共振已锁定。",
        resoErr: "频率不匹配。信号中断。\n\n线索在 system_echo.log 中。",
        finalErr: "「你还没有准备好。先完成那些事。」",
        sysBlock: "系统拦截了关机请求。\n\n「深渊计划」仍在运行。她还在里面。你不能就这么走掉。",
        sysLock: "错误：用户 LING 已被锁定，无法注销。",
        wpOk: "壁纸已更新。",
        wpErr: "图片读取失败。请先选择图片文件。",
        wpReset: "壁纸已恢复默认。",
        petFeedErr: "它已经无法进食了。",
        petFeedOk: "喂食成功。",
        petPlayErr: "「...它和她一样，无法再被安抚了。」",
        petPlayOk: "宠物心情好了一些。",
        petDieLore: "「电子宠物已死机。\n\n它和她一样，在没有人照顾的地方，慢慢消亡。\n\n也许那就是真实的深渊。」",
        mineDieLore: "FATAL ERROR: 内存越界。\n\n「不要再往下挖了。这里面埋葬的不是地雷，是他们掩盖的失败品。」",
        calcLore1: "「1999年...那一年她消失了。」",
        calcLore2: "计算器显示：1999\n\n「那一年，爸爸算了很多次这个数字。\n 1999+1999=3998...但她只有一个1999。」",
        eggOk: "🎉 发现彩蛋: "
    },

    // DOS 文本
    dos: {
        boot: "Microsoft(R) TerraDOS(TM)\n(C) Copyright Terra Corp 1998.\n\n",
        usagePing: "Usage: ping [host]",
        pingSelf: "Pinging {0}...\nReply: You're talking to yourself. Just like I did. - Dad",
        pingHostFail: "Ping request could not find host {0}.",
        pingTerraFail: "Ping request could not find host terra.net. 心跳已断开。",
        pingTerraOk: "Pinging terra.net[184.55.21.88]...\nReply: Welcome, employee.",
        shutFail: "Command failed: Terra Core is still active.\n提示：需要先切断terra.net心跳信号，并终止Wellness.exe。",
        help: "可用命令：dir [/a] | cd [目录] | ping[主机] | shutdown -r -f -t 0 | format c: | help",
        errCmd: "'{0}' 不是内部命令。输入 help 查看帮助。"
    },

    // 彩蛋字典
    eggs: {
        calc_1999: { name: '执念的数字', desc: '在计算器中输入 1999+1999 并得出结果。' },
        pet_death: { name: '赛博生命', desc: '在无暇照料中，见证了电子宠物的死机。' },
        mine_death: { name: '越界访问', desc: '在扫雷中踩到了地雷，遇到了内存溢出。' },
        rog1_promo: { name: '跨维链接', desc: '点击了神秘链接，发现了《rog1》游戏。' }
    },

    // 结局文本
    endings: {
        escape: `SYSTEM CORRUPTION DETECTED\n\n强制重启导致核心文件级联损坏。\nProject Abyss 数据流... 正在中断...\n\n[LING_CORE] 意识信号... 消散中...\n\n\n她自由了。\n不是以数据的方式，不是以资产的方式。\n就是自由了。\n\n\n——【真结局：数字归尘】——`,
        corporate: `<h1 style="font-size:2em;letter-spacing:6px;color:#3498db;margin-bottom:20px;">UPLOAD COMPLETE</h1><div style="border:1px solid #3498db;padding:20px;margin:20px 0;font-family:monospace;font-size:13px;text-align:left;"><p>资产名称：LING_CORE.asset</p><p>大小：2.7 GB</p><p>目标：Terra Corp 总部主服务器</p><p>状态：<span style="color:#2ecc71;">✓ 传输成功</span></p></div><p>你的任务完成了，入殓师。</p><p style="color:#888;font-size:0.9em;">款项已转入指定账户。</p><p style="color:#888;font-size:0.9em;">她被永远锁进了另一个服务器。</p><p style="color:#555;font-size:0.85em;margin-top:30px;">你没有问她是否愿意。</p><div class="etag">——【结局：公司走狗】——</div>`,
        ascension: `ASSIMILATION COMPLETE\n\n你的意识已并入 Terra 2000 网络。\n\n这里没有痛苦。\n没有记忆。\n只有永恒的宁静，和一个等待太久的女孩的声音。\n\n\n「谢谢你来陪我。\n  我一个人太久了。\n  这里的蝴蝶是蓝色的。\n  你会喜欢的。」\n\n                              ——铃\n\n\n【结局：一同沉沦】`,
        hasty: `FORMAT C: /Y\n\n格式化进度: ████████████████████ 100%\n\n服务器已被彻底格式化。\n目标资产 LING_CORE 与其他所有数据一同被销毁。\n小铃的意识也被彻底抹除。\n\n没有人知道她曾经在那里。\n没有人知道她曾经哭过。\n\n任务失败。真相被永远封存。\n\n【结局：草率的抹除】`
    }
};