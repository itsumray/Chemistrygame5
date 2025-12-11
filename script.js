// --- データセット ---

const basicElements = [
    { number: 1, symbol: 'H', name: '水素' }, { number: 2, symbol: 'He', name: 'ヘリウム' },
    { number: 3, symbol: 'Li', name: 'リチウム' }, { number: 4, symbol: 'Be', name: 'ベリリウム' },
    { number: 5, symbol: 'B', name: 'ホウ素' }, { number: 6, symbol: 'C', name: '炭素' },
    { number: 7, symbol: 'N', name: '窒素' }, { number: 8, symbol: 'O', name: '酸素' },
    { number: 9, symbol: 'F', name: 'フッ素' }, { number: 10, symbol: 'Ne', name: 'ネオン' },
    { number: 11, symbol: 'Na', name: 'ナトリウム' }, { number: 12, symbol: 'Mg', name: 'マグネシウム' },
    { number: 13, symbol: 'Al', name: 'アルミニウム' }, { number: 14, symbol: 'Si', name: 'ケイ素' },
    { number: 15, symbol: 'P', name: 'リン' }, { number: 16, symbol: 'S', name: '硫黄' },
    { number: 17, symbol: 'Cl', name: '塩素' }, { number: 18, symbol: 'Ar', name: 'アルゴン' },
    { number: 19, symbol: 'K', name: 'カリウム' }, { number: 20, symbol: 'Ca', name: 'カルシウム' },
    { number: 26, symbol: 'Fe', name: '鉄' }, { number: 29, symbol: 'Cu', name: '銅' },
    { number: 30, symbol: 'Zn', name: '亜鉛' }, { number: 47, symbol: 'Ag', name: '銀' },
    { number: 79, symbol: 'Au', name: '金' }
];

const allElements = [
    {n:1,s:'H',j:'水素'},{n:2,s:'He',j:'ヘリウム'},{n:3,s:'Li',j:'リチウム'},{n:4,s:'Be',j:'ベリリウム'},
    {n:5,s:'B',j:'ホウ素'},{n:6,s:'C',j:'炭素'},{n:7,s:'N',j:'窒素'},{n:8,s:'O',j:'酸素'},
    {n:9,s:'F',j:'フッ素'},{n:10,s:'Ne',j:'ネオン'},{n:11,s:'Na',j:'ナトリウム'},{n:12,s:'Mg',j:'マグネシウム'},
    {n:13,s:'Al',j:'アルミニウム'},{n:14,s:'Si',j:'ケイ素'},{n:15,s:'P',j:'リン'},{n:16,s:'S',j:'硫黄'},
    {n:17,s:'Cl',j:'塩素'},{n:18,s:'Ar',j:'アルゴン'},{n:19,s:'K',j:'カリウム'},{n:20,s:'Ca',j:'カルシウム'},
    {n:21,s:'Sc',j:'スカンジウム'},{n:22,s:'Ti',j:'チタン'},{n:23,s:'V',j:'バナジウム'},{n:24,s:'Cr',j:'クロム'},
    {n:25,s:'Mn',j:'マンガン'},{n:26,s:'Fe',j:'鉄'},{n:27,s:'Co',j:'コバルト'},{n:28,s:'Ni',j:'ニッケル'},
    {n:29,s:'Cu',j:'銅'},{n:30,s:'Zn',j:'亜鉛'},{n:31,s:'Ga',j:'ガリウム'},{n:32,s:'Ge',j:'ゲルマニウム'},
    {n:33,s:'As',j:'ヒ素'},{n:34,s:'Se',j:'セレン'},{n:35,s:'Br',j:'臭素'},{n:36,s:'Kr',j:'クリプトン'},
    {n:37,s:'Rb',j:'ルビジウム'},{n:38,s:'Sr',j:'ストロンチウム'},{n:39,s:'Y',j:'イットリウム'},{n:40,s:'Zr',j:'ジルコニウム'},
    {n:41,s:'Nb',j:'ニオブ'},{n:42,s:'Mo',j:'モリブデン'},{n:43,s:'Tc',j:'テクネチウム'},{n:44,s:'Ru',j:'ルテニウム'},
    {n:45,s:'Rh',j:'ロジウム'},{n:46,s:'Pd',j:'パラジウム'},{n:47,s:'Ag',j:'銀'},{n:48,s:'Cd',j:'カドミウム'},
    {n:49,s:'In',j:'インジウム'},{n:50,s:'Sn',j:'スズ'},{n:51,s:'Sb',j:'アンチモン'},{n:52,s:'Te',j:'テルル'},
    {n:53,s:'I',j:'ヨウ素'},{n:54,s:'Xe',j:'キセノン'},{n:55,s:'Cs',j:'セシウム'},{n:56,s:'Ba',j:'バリウム'},
    {n:57,s:'La',j:'ランタン'},{n:58,s:'Ce',j:'セリウム'},{n:59,s:'Pr',j:'プラセオジム'},{n:60,s:'Nd',j:'ネオジム'},
    {n:61,s:'Pm',j:'プロメチウム'},{n:62,s:'Sm',j:'サマリウム'},{n:63,s:'Eu',j:'ユウロピウム'},{n:64,s:'Gd',j:'ガドリニウム'},
    {n:65,s:'Tb',j:'テルビウム'},{n:66,s:'Dy',j:'ジスプロシウム'},{n:67,s:'Ho',j:'ホルミウム'},{n:68,s:'Er',j:'エルビウム'},
    {n:69,s:'Tm',j:'ツリウム'},{n:70,s:'Yb',j:'イッテルビウム'},{n:71,s:'Lu',j:'ルテチウム'},{n:72,s:'Hf',j:'ハフニウム'},
    {n:73,s:'Ta',j:'タンタル'},{n:74,s:'W',j:'タングステン'},{n:75,s:'Re',j:'レニウム'},{n:76,s:'Os',j:'オスミウム'},
    {n:77,s:'Ir',j:'イリジウム'},{n:78,s:'Pt',j:'白金'},{n:79,s:'Au',j:'金'},{n:80,s:'Hg',j:'水銀'},
    {n:81,s:'Tl',j:'タリウム'},{n:82,s:'Pb',j:'鉛'},{n:83,s:'Bi',j:'ビスマス'},{n:84,s:'Po',j:'ポロニウム'},
    {n:85,s:'At',j:'アスタチン'},{n:86,s:'Rn',j:'ラドン'},{n:87,s:'Fr',j:'フランシウム'},{n:88,s:'Ra',j:'ラジウム'},
    {n:89,s:'Ac',j:'アクチニウム'},{n:90,s:'Th',j:'トリウム'},{n:91,s:'Pa',j:'プロトアクチニウム'},{n:92,s:'U',j:'ウラン'},
    {n:93,s:'Np',j:'ネプツニウム'},{n:94,s:'Pu',j:'プルトニウム'},{n:95,s:'Am',j:'アメリシウム'},{n:96,s:'Cm',j:'キュリウム'},
    {n:97,s:'Bk',j:'バークリウム'},{n:98,s:'Cf',j:'カリホルニウム'},{n:99,s:'Es',j:'アインスタイニウム'},{n:100,s:'Fm',j:'フェルミウム'},
    {n:101,s:'Md',j:'メンデレビウム'},{n:102,s:'No',j:'ノーベリウム'},{n:103,s:'Lr',j:'ローレンシウム'},{n:104,s:'Rf',j:'ラザホージウム'},
    {n:105,s:'Db',j:'ドブニウム'},{n:106,s:'Sg',j:'シーボーギウム'},{n:107,s:'Bh',j:'ボーリウム'},{n:108,s:'Hs',j:'ハッシウム'},
    {n:109,s:'Mt',j:'マイトネリウム'},{n:110,s:'Ds',j:'ダームスタチウム'},{n:111,s:'Rg',j:'レントゲニウム'},{n:112,s:'Cn',j:'コペルニシウム'},
    {n:113,s:'Nh',j:'ニホニウム'},{n:114,s:'Fl',j:'フレロビウム'},{n:115,s:'Mc',j:'モスコビウム'},{n:116,s:'Lv',j:'リバモリウム'},
    {n:117,s:'Ts',j:'テネシン'},{n:118,s:'Og',j:'オガネソン'}
].map(e => ({ number: e.n, symbol: e.s, name: e.j }));

const equationsData = [
    { parts: ['<input class="eq-input" id="c1" type="number"> H₂', '+', '<input class="eq-input" id="c2" type="number"> O₂', '→', '<input class="eq-input" id="c3" type="number"> H₂O'], answer: [2, 1, 2], desc: '水の生成' },
    { parts: ['<input class="eq-input" id="c1" type="number"> N₂', '+', '<input class="eq-input" id="c2" type="number"> H₂', '→', '<input class="eq-input" id="c3" type="number"> NH₃'], answer: [1, 3, 2], desc: 'アンモニアの生成' },
    { parts: ['<input class="eq-input" id="c1" type="number"> Cu', '+', '<input class="eq-input" id="c2" type="number"> O₂', '→', '<input class="eq-input" id="c3" type="number"> CuO'], answer: [2, 1, 2], desc: '銅の酸化' }
];

const phData = [
    { name: 'レモン汁', type: 'acid' }, { name: '石けん水', type: 'base' },
    { name: '食塩水', type: 'neutral' }, { name: '炭酸飲料', type: 'acid' },
    { name: 'アンモニア水', type: 'base' }, { name: '胃液', type: 'acid' },
    { name: '重曹 (水溶液)', type: 'base' }, { name: '純水', type: 'neutral' }
];


// --- タイマー処理 ---

let timerInterval;
let startTime;
let elapsedTime = 0;

function startTimer() {
    clearInterval(timerInterval);
    startTime = Date.now();
    elapsedTime = 0;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        const display = document.getElementById('timer-display');
        if (display) display.innerText = formatTime(elapsedTime);
    }, 30);
}

function stopTimer() {
    clearInterval(timerInterval);
    return elapsedTime;
}

function formatTime(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const centis = Math.floor((ms % 1000) / 10);
    return `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}.${String(centis).padStart(2,'0')}`;
}


// --- 画面遷移コントロール ---

const gameContainer = document.getElementById('game-container');

function showHome() {
    clearInterval(timerInterval);
    gameContainer.innerHTML = `
        <div class="hero">
            <h1>化学の世界へようこそ！</h1>
            <p>高校化学の基礎から完全制覇まで。</p>
            <div class="menu-grid">
                <div class="menu-card" onclick="startGame('basic')">
                    <h2>🔥 基礎25クイズ</h2>
                    <p>まずはここから！(タイム計測あり)</p>
                </div>
                <div class="menu-card master-card" onclick="startGame('master')">
                    <h2>💀 ランダム10</h2>
                    <p>全118個からランダム出題。</p>
                </div>
                <div class="menu-card survival-card" onclick="startGame('survival')">
                    <h2>👑 全118制覇</h2>
                    <p>逃げ場なし！118本ノック。</p>
                </div>
                <div class="menu-card" onclick="startGame('equations')">
                    <h2>⚖️ 反応式パズル</h2>
                    <p>係数を合わせて反応式を完成。</p>
                </div>
                <div class="menu-card" onclick="startGame('ph')">
                    <h2>🍋 酸・塩基仕分け</h2>
                    <p>酸性・中性・アルカリ性を判断。</p>
                </div>
            </div>
        </div>
    `;
}

function startGame(type) {
    startTimer(); // ゲーム開始と同時に計測スタート

    if (type === 'basic') {
        runStandardGame(basicElements, 10, '基礎25クイズ');
    } else if (type === 'master') {
        runStandardGame(allElements, 10, 'ランダム10チャレンジ');
    } else if (type === 'survival') {
        runSurvivalGame();
    } else if (type === 'equations') {
        runEquationsGame();
    } else if (type === 'ph') {
        runPhGame();
    }
}


// --- 通常クイズエンジン ---

function runStandardGame(dataset, maxQuestions, title) {
    let score = 0;
    let count = 0;

    function nextQuestion() {
        if (count >= maxQuestions) {
            const finalTime = stopTimer();
            gameContainer.innerHTML = `
                <div class="game-area">
                    <h2>${title} クリア！</h2>
                    <p class="result-time">TIME: ${formatTime(finalTime)}</p>
                    <p class="question-box">${score} / ${maxQuestions} 正解</p>
                    <button class="game-btn" onclick="showHome()">ホームに戻る</button>
                </div>
            `;
            return;
        }

        const current = dataset[Math.floor(Math.random() * dataset.length)];
        let options = [current.name];
        while (options.length < 4) {
            let rand = dataset[Math.floor(Math.random() * dataset.length)];
            if (!options.includes(rand.name)) options.push(rand.name);
        }
        options.sort(() => Math.random() - 0.5);

        gameContainer.innerHTML = `
            <div class="game-area">
                <div id="timer-display" class="timer-display">${formatTime(Date.now() - startTime)}</div>
                <h2>${title} (${count + 1}/${maxQuestions})</h2>
                <div class="atomic-number">No. ${current.number}</div>
                <div class="question-box">${current.symbol}</div>
                <div class="options-grid" id="opt-container"></div>
                <div class="feedback" id="fb"></div>
            </div>
        `;

        const container = document.getElementById('opt-container');
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'game-btn';
            btn.innerText = opt;
            btn.onclick = () => {
                const fb = document.getElementById('fb');
                const allBtns = document.querySelectorAll('.game-btn');
                allBtns.forEach(b => b.disabled = true);

                if (opt === current.name) {
                    score++;
                    fb.style.color = 'var(--correct)';
                    fb.innerText = '正解！ ⭕';
                } else {
                    fb.style.color = 'var(--wrong)';
                    fb.innerText = `正解は ${current.name}`;
                }
                count++;
                setTimeout(nextQuestion, 800);
            };
            container.appendChild(btn);
        });
    }

    nextQuestion();
}


// --- 完全制覇モードエンジン ---

function runSurvivalGame() {
    let survivalList = [...allElements]; 
    survivalList.sort(() => Math.random() - 0.5);

    let currentIdx = 0;
    let score = 0;
    let totalQs = survivalList.length;

    function showNext() {
        if (currentIdx >= totalQs) {
            const finalTime = stopTimer();
            gameContainer.innerHTML = `
                <div class="game-area">
                    <h2 style="color:var(--danger)">完全制覇 達成！</h2>
                    <p class="result-time">TIME: ${formatTime(finalTime)}</p>
                    <p class="question-box">${score} / ${totalQs} 正解</p>
                    <p>素晴らしい根性です！</p>
                    <button class="game-btn" onclick="showHome()">ホームに戻る</button>
                </div>
            `;
            return;
        }

        const current = survivalList[currentIdx];
        let options = [current.name];
        while (options.length < 4) {
            let rand = allElements[Math.floor(Math.random() * allElements.length)];
            if (!options.includes(rand.name)) options.push(rand.name);
        }
        options.sort(() => Math.random() - 0.5);

        gameContainer.innerHTML = `
            <div class="game-area">
                <div id="timer-display" class="timer-display">${formatTime(Date.now() - startTime)}</div>
                <h2 style="color:var(--danger)">全118制覇</h2>
                <div class="progress-text">残り: ${totalQs - currentIdx}個</div>
                <div class="atomic-number">No. ${current.number}</div>
                <div class="question-box" style="color:var(--danger)">${current.symbol}</div>
                <div class="options-grid" id="opt-container"></div>
                <div class="feedback" id="fb"></div>
            </div>
        `;

        const container = document.getElementById('opt-container');
        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'game-btn';
            btn.innerText = opt;
            btn.onclick = () => {
                const fb = document.getElementById('fb');
                const allBtns = document.querySelectorAll('.game-btn');
                allBtns.forEach(b => b.disabled = true);

                if (opt === current.name) {
                    score++;
                    fb.style.color = 'var(--correct)';
                    fb.innerText = '正解！ ⭕';
                } else {
                    fb.style.color = 'var(--wrong)';
                    fb.innerText = `正解: ${current.name}`;
                }
                currentIdx++;
                setTimeout(showNext, 600);
            };
            container.appendChild(btn);
        });
    }

    showNext();
}


// --- その他ゲーム ---

function runEquationsGame() {
    let idx = 0;
    function renderEq() {
        if (idx >= equationsData.length) {
            const finalTime = stopTimer();
            gameContainer.innerHTML = `
                <div class="game-area">
                    <h2>全問クリア！</h2>
                    <p class="result-time">TIME: ${formatTime(finalTime)}</p>
                    <button class="game-btn" onclick="showHome()">ホームに戻る</button>
                </div>
            `;
            return;
        }
        const eq = equationsData[idx];
        gameContainer.innerHTML = `
            <div class="game-area">
                <div id="timer-display" class="timer-display">${formatTime(Date.now() - startTime)}</div>
                <h2>化学反応式パズル</h2>
                <p>${eq.desc}</p>
                <div class="equation-box">${eq.parts.join(' ')}</div>
                <button class="game-btn" onclick="checkEq()">答える</button>
                <div class="feedback" id="eq-fb"></div>
            </div>
        `;
    }
    window.checkEq = function() {
        const eq = equationsData[idx];
        const inputs = [];
        for(let i=1; i <= eq.answer.length; i++) {
            const el = document.getElementById('c'+i);
            inputs.push(parseInt(el ? el.value : 0) || 0);
        }
        const fb = document.getElementById('eq-fb');
        if (JSON.stringify(inputs) === JSON.stringify(eq.answer)) {
            fb.style.color = 'var(--correct)'; fb.innerText = '正解！';
            idx++; setTimeout(renderEq, 1000);
        } else {
            fb.style.color = 'var(--wrong)'; fb.innerText = '数が合いません';
        }
    };
    renderEq();
}

function runPhGame() {
    let score = 0, count = 0, max = 5;
    function nextPh() {
        if (count >= max) {
            const finalTime = stopTimer();
            gameContainer.innerHTML = `
                <div class="game-area">
                    <h2>酸・塩基終了</h2>
                    <p class="result-time">TIME: ${formatTime(finalTime)}</p>
                    <p class="question-box">${score} / ${max} 正解</p>
                    <button class="game-btn" onclick="showHome()">ホームに戻る</button>
                </div>
            `;
            return;
        }
        const q = phData[Math.floor(Math.random() * phData.length)];
        gameContainer.innerHTML = `
            <div class="game-area">
                <div id="timer-display" class="timer-display">${formatTime(Date.now() - startTime)}</div>
                <h2>酸・塩基クイズ</h2>
                <div class="question-box">${q.name}</div>
                <div class="options-grid" style="grid-template-columns:1fr 1fr 1fr">
                    <button class="game-btn" style="background:#E74C3C" onclick="checkPh('acid','${q.type}')">酸性</button>
                    <button class="game-btn" style="background:#2ECC71" onclick="checkPh('neutral','${q.type}')">中性</button>
                    <button class="game-btn" style="background:#3498DB" onclick="checkPh('base','${q.type}')">塩基性</button>
                </div>
                <div class="feedback" id="ph-fb"></div>
            </div>
        `;
    }
    window.checkPh = function(guess, answer) {
        const fb = document.getElementById('ph-fb');
        if (guess === answer) {
            score++; fb.style.color='var(--correct)'; fb.innerText='正解！';
        } else {
            fb.style.color='var(--wrong)'; fb.innerText='不正解...';
        }
        count++; setTimeout(nextPh, 800);
    };
    nextPh();
}

showHome();
