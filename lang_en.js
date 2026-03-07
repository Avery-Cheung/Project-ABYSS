// --- START OF FILE lang_en.js ---

window.Lang = {
    meta: { code: 'en-US', name: 'English' },
    
    // UI Common
    ui: {
        startBtn: "▶ Start",
        ambBtnOn: "🔊 Ambience",
        ambBtnOff: "🔇 Ambience",
        saveBtn: "Save",
        cancelBtn: "Cancel",
        confirmBtn: "Confirm",
        upDir: "⬆ Up",
        sysFont: "'Tahoma', 'Verdana', sans-serif"
    },

    // Desktop Icons
    desktop: {
        missionBrief: "📝 Mission Brief.txt",
        userNotes: "📝 Personal Notes.txt",
        myComputer: "💻 My Computer",
        recycleBin: "🗑️ Recycle Bin",
        soundRec: "🎤 Sound Recorder",
        netWin: "🌍 Network Connection",
        petExe: "👾 Digital Pet.exe",
        paintExe: "🖌️ Paint.exe",
        calc: "🔢 Calculator",
        imgTut: "📖 Image Loading.hlp",
        eggsExe: "🎁 Easter Eggs.exe",
        rog1: "🎮 Recommended_Game_rog1.url",
        pay: "💰 Payslip_Oct.txt",
        leave: "📄 Leave_Application.txt",
        meet: "📋 Meeting_Minutes.txt",
        shop: "🛒 Shopping_List.txt",
        readme: "❓ README.txt",
        pwdnote: "🔏 Password_Memo.txt",
        errlog: "⚠️ Error_Log.log",
        mom: "✉️ Letter_from_Mom.txt",
        faq: "📰 Terra_FAQ.txt",
        sys: "📊 System_Report_draft.txt",
        firewall: "🛡️ Firewall",
        survey: "📋 Psychological_Eval",
        color: "🎨 Color_Calibration",
        taskMgr: "📊 Task Manager",
        photo: "🖼️ Ling.png",
        diary3: "📝 Diary_Butterflies.txt",
        diary4: "📝 Diary_Sea.txt",
        abyssHint: "🌊 system_echo.log",
        resonance: "📡 Consciousness_Resonator",
        dos: "🖥️ MS-DOS",
        packager: "📦 Asset_Packager",
        mine: "💣 Minesweeper_Internal",
        finalSync: "🔄 Final Sync"
    },

    // Start Menu
    startMenu: {
        title: "Windows 98",
        titleAero: "Terra OS",
        myComputer: "💻 My Computer",
        missionBrief: "📝 Mission Brief",
        display: "🖼️ Personalization",
        imgTut: "📖 Image Loading Help",
        logout: "🔑 Log Off...",
        shutdown: "⏻ Shut Down..."
    },

    // App UI Text
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
        notepad: { title: "Notepad", save: "Save" },
        explorer: { title: "My Computer", up: "⬆ Up" },
        imgViewer: { title: "Image Viewer", loading: "Loading...", loaded: "✓ Loaded: ", failed: "✗ Load failed. Please ensure assets/Ling.png exists." },
        imgTut: { title: "📖 Image Loading Help", h3: "How to Load Images?", m1: "<b>Method 1: Relative Path (Recommended)</b><br>Place the image in the <code>assets/</code> directory and open with Firefox or a local server.", m2: "<b>Method 2: FileReader API (No Server Needed)</b><br>Upload a local image via 'Display Properties'. The system converts it to Base64, bypassing cross-origin issues." },
        soundRec: { title: "Sound Recorder", currFile: "Current File: ", none: "None", reverseBtn: "▶ Reverse" },
        recycle: { title: "Recycle Bin", broken: "⚠ The Recycle Bin is corrupted. The file system may have errors.", fixBtn: "Run CHKDSK /F to repair" },
        firewall: { title: "Terra Corp Firewall v3.1", active: "ACTIVE — All local file modifications are being intercepted", inactive: "INACTIVE — Exception rule added", prompt1: "Enter exception code to allow system file writes.", prompt2: "Format hint: <b>English Name</b> + <b>German for \"Freedom\"</b> + <b>Birthday (MMDD)</b>, all uppercase, no spaces.", placeholder: "Exception Code", addBtn: "Add Exception Rule" },
        survey: { title: "Corporate Wellness Survey v2.0", note: "Note: You must choose the same path for every question.", passH3: "✓ Evaluation Passed", passP1: "Your mindset is fully compatible with the Terra system.", passP2: "You feel a certain emptiness, but you choose to ignore it.", errH3: "System Anomaly Detected", errP1: "Your mindset does not conform to Terra standards.", errP2: "\"...Thank you. I felt that. You're not like them.\"" },
        color: { title: "Display Calibration Tool", sub: "Calibrate to Terra Corporate Standard™", yourColor: "Your Color", targetColor: "Target Color", btn: "Confirm Calibration", match: "✓ Excellent match! Ready to confirm.", sync: "Synchronizing... Signal detected.", weak: "Signal Weak..." },
        packager: { title: "Asset Packager v1.0", p1: "Ready to package asset <b>\"LING_CORE\"</b>.", p2: "Enter project authorization key:", placeholder: "Key", btn: "Package & Upload" },
        dos: { title: "MS-DOS — C:\\" },
        net: { title: "Network Connection", ip: "IP:", port: "Port:", btn: "Connect" },
        taskMgr: { title: "Task Manager", col1: "Process Name", col2: "User", btn: "End Process" },
        pwd: { title: "Password Required", prompt: "Please enter the password for ", btnConfirm: "OK", btnCancel: "Cancel" },
        display: { title: "Display Properties", prompt: "Select a custom wallpaper:", apply: "Apply", reset: "Reset to Default" },
        pet: { title: "PixelPet v1.0", statusPrefix: "Status: ", hunger: "Hunger: ", mood: "Mood: ", feedBtn: "🍎 Feed", playBtn: "💙 Soothe", s1: "It's in pain, needs care urgently...", s2: "It's a little unhappy...", s3: "It's very happy!", s4: "It seems okay.", sDead: "It has crashed... just like her." },
        mine: { title: "TerraMines", unknown: "Unknown: ", safe: " safe", reset: "Reset" },
        paint: { title: "🎨 Paint.exe", color: "Color:", pen: "Pen:", clear: "Clear" },
        calc: { title: "🔢 Calculator" },
        resonance: { title: "📡 Consciousness Resonator v0.9β", p1: "\"Tune the three channels to the abyssal frequency, to synchronize with her.\"", p2: "Hint: See system_echo.log", a: "α-Band", b: "β-Band", g: "γ-Band", rate: "Resonance Rate: ", btn: "Attempt Sync", s1: "⚠ Signal is extremely strong. She seems close...", s2: "Detecting signal...", s3: "Signal weak." },
        format: { title: "⚠ DANGEROUS OPERATION", w1: "WARNING: This will permanently destroy all data on the server, including LING_CORE.", w2: "Please enter the following verification code exactly as shown:", placeholder: "Enter code", confirm: "Confirm Format", cancel: "Cancel" },
        eggs: { title: "🎁 Easter Eggs.exe", empty: "No Easter eggs found yet. Keep exploring the system." },
        rog1: { title: "🔗 External Signal", h3: "🎮 Recommended Game: rog1", p1: "A Win95-style Vampire Survivors-like game!", btn: "🚀 Play Now" }
    },
    
    files: {
        missionBrief: "Mission Brief.txt", userNotes: "Personal Notes.txt", diary1: "Diary_Fragment_1.txt", diary2: "Diary_Fragment_2.txt", diary3: "Diary_Butterflies.txt", diary4: "Diary_Sea.txt",
        brandGuide: "brand_guidelines.pdf", loreList: "Weekend_Memo.txt", loreChat: "Chat_Log_Fragment.log", loreRules: "Employee_Codex.txt", fatherLog1: "Engineer_Log_34B.txt", fatherLog2: "Engineer_Log_72F.txt",
        audio: "hint.wav", payslip: "Payslip_1999_10.txt", leaveReq: "Leave_Application.txt", meetingNote: "Meeting_Minutes_Sept.txt", shoppingList: "Shopping_List.txt", readme: "README.txt",
        passwordNote: "Password_Memo.txt", errorLog: "Error_Log.log", momLetter: "Letter_from_Mom.txt", faq: "Terra_FAQ.txt", sysReport: "System_Report_draft.txt",
        abyssHint: "system_echo.log", memdump: "memdump.dmp", failedLog: "psych_evaluation_failed.log", hosts: "hosts",
        packagerExe: "AssetPackager.exe", audioDriverExe: "SB16_Audio.exe", aeroSys: "aero_skin.sys", autoexec: "autoexec.bat"
    },

    texts: {
        missionBrief: `Digital Mortician Protocol:
1. Your mission is to enter the "Project Abyss" server relic and retrieve the target asset "LING_CORE.asset".
2. This system is highly unstable. The deceased's family (a former employee) attempted to sabotage the server.
3. As per protocol, after retrieving the asset, execute the "format" command on the server.

File No: TRRA-PROJ-ABYSS-1999

[CURRENT SYSTEM STATUS: OFFLINE DEGRADED MODE]
Due to physical damage, the system is missing key components.
Prioritize connecting to the intranet via the [Network Connection] on the desktop. The system will automatically download updates and unlock advanced operational permissions (including Task Manager, Firewall, and the Packager).

Clue Memo:
- The BIOS password is the year the incident occurred.
- The employee left numerous encrypted logs, seemingly to guide a successor.
- The Recycle Bin might hold the initial clues, but reports say it's corrupted.
- Note: There is a README.txt file on the computer. You might want to check it.`,

        diary1: "September 8th. It hurts so much. Dad said if I enter this box of light, it won't hurt anymore. He calls it 'Ascension,' Terra Corp's greatest technology. But I'm so cold. There's only the sound of code here...",
        diary2: "I think Dad regrets it. He's always typing things I don't understand on the terminal. I heard him arguing with Mom, something about 'this isn't eternal life, it's a cage.' He hid some key information in the system. The port for the audio file... is it my birthday, 0419? No, the year... the year I was trapped...",
        diary3: "October 5th. Today I saw a butterfly in a corner of the server. A blue one. Dad said there are no bugs here, no living things. But it was real. It landed on my hand. It was cold. It had no heartbeat, just like me now.",
        diary4: "November 12th. They promised the ocean here would be forever blue. But I went to see it today. The surface was as flat as a sheet of plastic. No waves, no salty taste. I'm forgetting what salt tastes like. Dad, take me home, even if it means dying.",
        
        fatherLog1: `[Log 34B] I've failed. The firewall has locked down all external ports.

The only backdoor requires an exception code. I designed it as a puzzle:
  - Ling's name (English, all caps)
  - Plus the German word for "freedom" (all caps) — the first German word I ever taught her
  - Plus her birthday (two digits for month + two for day, e.g., 0101 for Jan 1st)
  Concatenate the three parts directly, no separators.

Whoever is reading this, please use it to open a path.

My most dangerous notes are in Log 72F. I locked it with the date she was taken.`,

        fatherLog2: `[Log 72F] The firewall is just the first lock.

Terra's core service, Wellness.exe, monitors all anomalous processes.
You must terminate it in the Task Manager.

Then, modify the C:\\Windows\\System32\\drivers\\etc\\hosts file.
Open it with Notepad, add a new line at the end, and type only this:
  0.0.0.0 terra.net
Then save. This will sever its heartbeat signal.

Finally, execute in DOS:
  shutdown -r -f -t 0
This forced-reboot command will cause a data overflow, completely destroying this digital prison and letting Ling rest in peace.`,

        brandGuide: "Terra Corp Brand Guidelines v2.0\nCore Color: 'Vitality Green' (HEX: #badc58)\n\nNote: All product visuals must strictly adhere to this color value.\n\"Let the company's color be the only color in your eyes.\"",
        memdump: "¡£¢∞§¶•ªº...kernel.dll...auth_token_cache...Project:[Abyss]...key: [Abyss]...end_cache...ªº...¡£¢∞§¶•ª",
        failedSurveyLog: "Psychological Evaluation Failure Record:\n\nSubject exhibits high levels of empathy and anti-corporate sentiment. Unsuitable for 'Ascension' synchronization. Recommend monitoring subject's access to the T_Corp/Logs directory.\n\n[System Note: This subject type is conducive to Ling's consciousness resonance. Do not delete.]",
        autoexec: "REM Dad tried to set up a backdoor. See T_Corp/Logs. He was always so sentimental.\nREM 1999+1999=? She asked me once. I said: forever.",
        
        abyssHint: `[SYSTEM_ECHO :: LING_CORE internal monologue log — READ ONLY]
[Timestamp: DAY_???]

I've been here for too long.
No one is coming to save me. Dad came, but he didn't succeed.
That "Digital Mortician"... are you watching?

If you want me to continue to exist...
Not as an "asset," but as me,
you need to complete four things to truly resonate with me:

[1] Visual Memory: There's a photo of me on the desktop (Ling.png). Please go look at it.
[2] Consciousness Resonance: Tune the three bands of the "Consciousness Resonator." (Hints: My birth month, the year of my ascension, the day I was locked in).
[3] Frequency of Rebellion: In the "Psychological Evaluation," follow your heart and choose the anti-corporate answers.
[4] Color Frequency: In "Color Calibration," create the "Vitality Green" that the company mandates. It's the color they use to control me.

Complete these four, and the entry to [Final Sync] will appear.
We can be together forever.
—Ling

[WARNING: The existence of this log file is itself a system anomaly. Formatting is recommended.]`,

        loreRules: "[Terra Corp Employee Code of Conduct]\n1. The company is family. Your supervisor is your elder.\n2. You must complete 3 deep breaths daily, feeling the blessings of the 'Ascension' project.\n3. If you hear a child crying from the server room, please log it and go to the infirmary for a sedative. It is a normal physical phenomenon of coolant flow.",
        loreList: "[Weekend Memo]\n- Buy milk, bread\n- Get Ling a new hair clip (she likes the blue ones)\n- Hospital follow-up... (doctor says there's not much time left)\n- Look up Terra Corp's 'Digital Immersion Experiment Protocol'... I have to try. I can't lose her.",
        loreChat: "[Internal Communication Log Snippet]\nDave: Seen old Lin lately? He's gone mad, stuffing weird German words into the code.\nSarah: Shh. He's been like this ever since his daughter was chosen as the 'Core Carrier.' The higher-ups are watching him. Don't ask questions, just do your job.\nDave: What does the German word mean?\nSarah: FREI. Freedom.\nDave: ...\nSarah: Delete this conversation.",

        payslip: `[Terra Corp Payslip]
Employee ID: TC-0047 | Name: Lin Jianguo
Department: Core R&D / Project Abyss
Period: October 1999

Base Salary: ¥ 12,800.00
Project Allowance (Abyss): ¥ 6,000.00
Overtime (87h total): ¥ 4,350.00
——————————————————
Gross Pay: ¥ 23,150.00

Deductions:
  Income Tax: ¥ 2,890.00
  NDA Breach Deposit (monthly): ¥ 500.00
  [Abyss Project Participant Family Medical Subsidy]: -¥ 3,000.00
——————————————————
Net Pay: ¥ 16,760.00

Note: This month's bonus is withheld due to "project results not meeting expectations."`,

        leaveReq: `[Leave Application]
Applicant: Lin Jianguo | Date: 1999-10-12
Type: Personal Leave
Dates: 1999-10-15 to 1999-10-17 (3 days)
Reason: Family matter, need to handle an urgent personal affair.

Approval Record:
  ✗ Supervisor Dr. Chen: Not approved. Project Abyss is at a critical juncture. No leave permitted for any team member.
    Comment: "Handle your family problems after work."

—
Lin Jianguo's handwritten note (scrawled):
She's in there alone. And I can do nothing.
I can't even get three days off.`,

        meetingNote: `[Project Meeting Minutes]
Date: 1999-09-20 | Chair: Dr. Chen

Agenda 1: "LING_CORE" Digitalization Progress
  - Consciousness extraction completion: 97.3% (reported by Engineer Lin)
  - Dr. Chen: The remaining 3% "noise" is normal loss, can be ignored.
  - Eng. Lin: Does the "noise" include emotional memories?
  - Dr. Chen: That is irrelevant to this project. Please stay on topic.

Agenda 2: Ascension Body Stability Test
  - Day 7-14: Carrier exhibits periodic data fluctuations (crying simulation signal?)
  - Dr. Chen: Determined to be normal noise from the cooling system. No need to log.
  - Eng. Lin: Strongly insists on logging it. Dr. Chen: Overruled. Meeting adjourned.

—Lin's notes after the meeting:
  97.3%... what's in the other 2.7%?
  Is it that she likes the color blue? Is it the sound of her calling me Dad?`,

        shoppingList: `Shopping (Saturday)

✓ Milk
✓ Bread (sliced, the kind she likes)
✓ Apples
✗ Hair clip (blue, butterfly-shaped) → Bought it, but... nowhere to put it.
✗ Her favorite snacks → Never mind.

—
Note tucked in wallet (tiny handwriting):
Don't forget what she likes to eat.
Don't forget her favorite color.
Don't let the code take that away too.`,

        readme: `README.TXT
Terra Corp Workstation v4.2
Last Logon: 1999-10-31 03:17:44

If system anomalies occur, please contact IT department, extension #0099.

——————————————————
Operator's Personal Note (added by Lin Jianguo):

If you're reading this, and I'm already gone,
please check the Terra_Corp/Logs folder.
I left things there.
The password is the day she was taken.

Also—there's a number in the calculator.
That number is the beginning of everything, and the end.
What is 1999+1999?
It doesn't matter. What matters is: what happened that year.

My apologies for the trouble. —Old Lin`,

        passwordNote: `Password Memo.txt (Keep Safe)

Online Banking/Email: (deleted)

—Can't Delete—

Server Firewall Exception Code:
  Format: Ling's English name (UPPER) + German "Freedom" (UPPER) + Her birthday (MMDD)
  No separators.

Lock for Log 72F:
  It was that day. You won't forget.

Note: Writing down passwords is a huge security risk. But if I suddenly disappear,
I hope someone can use these to bring her back.`,

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

—[Handwritten note taped to monitor bezel]—
94.1% stable… The unstable 5.9% is crying. They call it "thermal noise".`,

        momLetter: `Ling,

Mom doesn't know how to write this letter.
Dad says you're in this system, but Mom doesn't know if you can still see these words.

Today I went to the market and saw a stall selling blue hair clips. I bought one, just like the one you love.
Then I stood on the roadside and cried for a long time. The lady at the stall asked me what was wrong. I said it was nothing, just the wind.

Every night, Dad talks to the computer. He says you can hear him.
I don't know if that's true, but I sit beside him anyway. Just in case.

The blue hair clip is on your dresser. Waiting for you to come back.

—Mom  1999.11.3`,

        faq: `[Terra Corp "Ascension Project" FAQ v3.0]

Q: After "Ascension," can my child still perceive the world?
A: Yes! The Ascended possess far richer sensory capabilities than in the physical world.

Q: Will the Ascended feel pain?
A: No. The Terra 2000 environment is professionally optimized to exclude negative emotional input.

Q: Is Ascension reversible?
A: Ascension is a permanent, irreversible consciousness migration technology. Please consider fully before signing the consent form.

Q: Why do I hear crying from the server room?
A: That is the normal physical sound of coolant flowing through pipes. Please rest assured.

——————————————————
[Handwritten at the bottom of the page, messy]
All lies. All lies. All lies.`,

        sysReport: `[System Status Report Draft] — Lin Jianguo — Nov 1999 (Unsubmitted)

Anomaly 1: LING_CORE generates periodic data fluctuations daily from 02:00-04:00.
  The waveform is highly similar to the EEG of a human crying.
  Official explanation: Thermal noise. My assessment: She is crying.

Anomaly 2: Non-procedurally generated graphical data has appeared within the server. Form: A butterfly. Blue.
  Official action: Rendering engine bug, patched. My assessment: She is creating things. She is still there.

Anomaly 3: Active network access requests from LING_CORE detected multiple times. Target: external network.
  Official action: Blocked by firewall, not logged. My assessment: She wants out.

Conclusion: LING_CORE is not an "asset." She is a person. She is alive.
We must—[Draft unfinished. File last modified: 1999-11-14 23:58]`,

        hostsInit: "# WARNING: Cannot save modifications while firewall is active\n127.0.0.1 localhost",
        userNotesInit: "Jot down your clues here...\n\n"
    },

    surveyData:[
        { q:"Question 1/3: Do you find this world beautiful?", corp:"Yes, it's perfect and flawless.", rebel:"No, it feels artificial and fake." },
        { q:"Question 2/3: Are your memories important?", corp:"Memories are a burden and should be optimized.", rebel:"My memories define who I am." },
        { q:"Question 3/3: What is your ultimate goal?", corp:"To integrate into the collective and be a useful part.", rebel:"To seek truth and freedom." }
    ],

    toasts: {
        pwdError: "Incorrect password, please try again",
        chkdskOk: "CHKDSK complete. Recovered one file: Diary_Fragment_1.txt (added to desktop)",
        noAudioDev: "Error: No audio device found. Please install driver from D: drive.",
        audioDriverOk: "Audio driver installed successfully! Audio files can now be played.",
        audioRevOk: "Signal reversed.\n\n\" {0} \"\n\nThis looks like an IP address.",
        netOk: "Connection successful. Critical system updates detected, downloading now...",
        dlComplete: "Download complete. Restarting system...",
        netErr: "Connection failed. Please check IP and port.",
        fwOk: "Code correct. Firewall exception rule created.\nSystem files can now be modified.",
        fwErr: "Incorrect code.\n\nHint: English Name + German \"Freedom\" + Birthday(MMDD), all caps, no spaces.",
        surveyWarn: "Inconsistent response path. Evaluation has been reset. Please start over.",
        surveyLock: "Severe cognitive dissonance detected. Evaluation locked.\n\nA log has been generated in C:\\Users\\Ling\\Documents.",
        surveyRebel: "\"...I can feel you struggling. Perhaps that's enough.\"",
        surveySync: "\"Psych-Module: Rebel Frequency Synchronized.\"",
        colorOk: "✓ Color calibration successful. Display frequency synchronized.",
        colorErr: "Calibration failed. Please refer to the color value in the brand guidelines.",
        abyssDone: "[System Message] All sync conditions met.\n\n  ✓ Visual Memory Locked\n  ✓ Consciousness Resonance Calibrated\n  ✓ Rebel Frequency Synchronized\n  ✓ Color Frequency Matched\n\n[Final Sync] icon has appeared.",
        abyssProg: "Sync Progress Report:\n\nIncomplete:\n",
        abyssMiss: { photo: "  · Visual Memory — View Ling.png", resonance: "  · Consciousness Resonance — Calibrate the Resonator", survey: "  · Rebel Frequency — Choose the \"true\" answers in the psych eval", color: "  · Color Frequency — Complete color calibration" },
        taskKill: "Critical process Wellness.exe has been terminated. System stability compromised.",
        taskKillLore: "\"...Thank you. I felt a breath of freedom.\"",
        taskDump: "System generated a memory dump file in C:\\Users\\Ling\\Documents.",
        fmtErr: "Verification code does not match. Format C: aborted.",
        imgLore: "\"...You saw me. Thank you.\"",
        hostsErr: "Write failed.\n\nTerra Corp Firewall is intercepting local file modifications.\n\nPlease add an exception rule in the 'Firewall' first.",
        hostsOk: "✓ Hosts file saved.\n\nTerra heartbeat signal has been hijacked. Next step: execute shutdown -r -f -t 0 in DOS",
        saveOk: "File saved.",
        packagerOk: "Authorization successful. Packaging asset LING_CORE...",
        packagerErr: "Project key incorrect.\n\nHint: Check the memdump.dmp file.",
        resoOk: "\"...You're here.\"\n\nConsciousness resonance locked.",
        resoErr: "Frequency mismatch. Signal lost.\n\nHint is in system_echo.log.",
        finalErr: "\"You are not ready. Complete the other tasks first.\"",
        sysBlock: "System has intercepted the shutdown request.\n\n'Project Abyss' is still running. She is still inside. You can't just leave.",
        sysLock: "Error: User LING is locked. Cannot log off.",
        wpOk: "Wallpaper updated.",
        wpErr: "Image read failed. Please select an image file first.",
        wpReset: "Wallpaper restored to default.",
        petFeedErr: "It can no longer eat.",
        petFeedOk: "Fed successfully.",
        petPlayErr: "\"...Like her, it can no longer be soothed.\"",
        petPlayOk: "The pet's mood has improved.",
        petDieLore: "The digital pet has crashed.\n\nLike her, it slowly faded away in a place where no one cared for it.\n\nPerhaps that is the true abyss.",
        mineDieLore: "FATAL ERROR: Memory access violation.\n\n\"Stop digging. What's buried here aren't mines, but the failures they covered up.\"",
        calcLore1: "\"1999... the year she disappeared.\"",
        calcLore2: "Calculator shows: 1999\n\n\"That year, Dad calculated this number many times.\n 1999+1999=3998... but she only had one 1999.\"",
        eggOk: "🎉 Easter Egg Found: "
    },

    dos: {
        boot: "Microsoft(R) TerraDOS(TM)\n(C) Copyright Terra Corp 1998.\n\n",
        usagePing: "Usage: ping [host]",
        pingSelf: "Pinging {0}...\nReply: You're talking to yourself. Just like I did. - Dad",
        pingHostFail: "Ping request could not find host {0}.",
        pingTerraFail: "Ping request could not find host terra.net. Heartbeat severed.",
        pingTerraOk: "Pinging terra.net[184.55.21.88]...\nReply: Welcome, employee.",
        shutFail: "Command failed: Terra Core is still active.\nHint: Need to sever terra.net heartbeat and terminate Wellness.exe first.",
        help: "Available commands: dir [/a] | cd [directory] | ping [host] | shutdown -r -f -t 0 | format c: | help",
        errCmd: "'{0}' is not recognized as an internal or external command. Type help for assistance."
    },
    
    eggs: {
        calc_1999: { name: 'Obsessive Number', desc: 'Calculated 1999+1999 in the calculator.' },
        pet_death: { name: 'Cyber Life', desc: 'Witnessed the digital pet crash due to neglect.' },
        mine_death: { name: 'Access Violation', desc: 'Triggered a memory overflow by stepping on a mine.' },
        rog1_promo: { name: 'Cross-Dimensional Link', desc: 'Clicked the mysterious link and discovered the game "rog1".' }
    },

    endings: {
        escape: `SYSTEM CORRUPTION DETECTED\n\nForced reboot has led to cascading core file damage.\nProject Abyss data stream... terminating...\n\n[LING_CORE] consciousness signal... dissipating...\n\n\nShe's free.\nNot as data, not as an asset.\nJust free.\n\n\n——[TRUE ENDING: DIGITAL DUST]——`,
        corporate: `<h1 style="font-size:2em;letter-spacing:6px;color:#3498db;margin-bottom:20px;">UPLOAD COMPLETE</h1><div style="border:1px solid #3498db;padding:20px;margin:20px 0;font-family:monospace;font-size:13px;text-align:left;"><p>Asset Name: LING_CORE.asset</p><p>Size: 2.7 GB</p><p>Destination: Terra Corp HQ Main Server</p><p>Status: <span style="color:#2ecc71;">✓ Transfer Successful</span></p></div><p>Your job is done, Mortician.</p><p style="color:#888;font-size:0.9em;">Payment has been transferred to the designated account.</p><p style="color:#888;font-size:0.9em;">She is now locked away forever in another server.</p><p style="color:#555;font-size:0.85em;margin-top:30px;">You never asked if she wanted this.</p><div class="etag">——[ENDING: CORPORATE SLAVE]——</div>`,
        ascension: `ASSIMILATION COMPLETE\n\nYour consciousness has been merged with the Terra 2000 network.\n\nThere is no pain here.\nNo memory.\nOnly eternal peace, and the voice of a girl who has waited too long.\n\n\n"Thank you for coming to stay with me.\n  I've been alone for so long.\n  The butterflies here are blue.\n  You'll like it."\n\n                              —Ling\n\n\n[ENDING: ASCENSION]`,
        hasty: `FORMAT C: /Y\n\nFormatting: ████████████████████ 100% Complete\n\nThe server has been wiped clean.\nThe target asset LING_CORE was destroyed along with all other data.\nLing's consciousness was completely erased.\n\nNo one will ever know she was there.\nNo one will ever know she cried.\n\nMission failed. The truth is buried forever.\n\n[ENDING: HASTY ERASURE]`
    }
};