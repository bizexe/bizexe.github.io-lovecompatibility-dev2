/* ==========================================
   Love Identity - JavaScript (Complete)
   ========================================== */

// ==========================================
// Data - 全16タイプ
// ==========================================
const typeData = {
  'AEPV': {
    name: '情熱の開拓者',
    emoji: '🔥',
    description: '圧倒的な熱量で関係をリードし、未知の体験を共有することで絆を深めるタイプ。停滞を嫌い、常に進化を求めます。',
    strengths: ['強力なリーダーシップ', 'ストレートな感情表現', '飽きさせない提案力'],
    challenges: ['独断的になりやすい', '安定志向の相手には負担'],
    loveMatch: [
      { type: 'REPV', reason: '静かな情熱を持つ相手があなたのリードを理想的に補完。互いの未知を刺激し合えます。' },
      { type: 'AESV', reason: '感性が近く、あなたの熱量を柔軟に受け止めてくれるバランスの良い相手です。' }
    ],
    marriageMatch: [
      { type: 'RLSC', reason: '正反対の冷静さが、あなたの衝動を建設的な方向へ導き、盤石な家庭を築けます。' },
      { type: 'ALSC', reason: '実行力が共通しており、戦略的に理想の生活を構築していけるパートナーです。' }
    ]
  },
  'AEPC': {
    name: '献身のロマンチスト',
    emoji: '💎',
    description: '深い情熱を誠実な形で注ぎ込み、長期的な信頼を第一に考えるタイプ。感情的なつながりを論理的な将来設計で裏打ちします。',
    strengths: ['高い共感力', '誠実なサポート', '明確な将来展望'],
    challenges: ['尽くしすぎて疲弊する', '感情の揺れを論理で抑えすぎる'],
    loveMatch: [
      { type: 'REPC', reason: '互いに誠実さを重視。控えめな相手があなたの献身を深く理解し、静かな信頼が育ちます。' },
      { type: 'AEPV', reason: '情熱の方向性が一致。お互いの感情に敏感で、ドラマチックな恋愛を楽しめます。' }
    ],
    marriageMatch: [
      { type: 'RLSV', reason: '知的な安定感が、あなたの感情を優しく包み込みます。互いの成長を喜び合える結婚生活に。' },
      { type: 'ALPC', reason: '計画性が共通。愛情を仕組みとして維持できるため、安定した家庭を維持できます。' }
    ]
  },
  'AESV': {
    name: '穏やかな理想主義者',
    emoji: '🌈',
    description: '深い感情と柔軟な思考を持ち、安定しながらも成長を求めるタイプ。パートナーの可能性を信じ、共に高め合うことを重視します。',
    strengths: ['安心感を与える包容力', '夢を応援する姿勢', 'バランス感覚'],
    challenges: ['決断に時間がかかる', '理想と現実のギャップに悩む'],
    loveMatch: [
      { type: 'RESV', reason: '同じ夢見がちな感性を共有し、お互いの内面世界を深く理解し合えます。' },
      { type: 'AEPV', reason: 'あなたの安定志向と相手の情熱がうまく調和。刺激と安心の両立が可能です。' }
    ],
    marriageMatch: [
      { type: 'RLPC', reason: '相手の冷静な計画性が、あなたの夢を現実に落とし込む手助けをしてくれます。' },
      { type: 'ALSC', reason: '愛情表現は共に積極的で、相手の堅実さがあなたに安心感を与えます。' }
    ]
  },
  'AESC': {
    name: '愛の守護者',
    emoji: '🏠',
    description: '温かい愛情表現と安定志向を兼ね備えたタイプ。家庭的で、パートナーとの穏やかで確かな絆を何より大切にします。',
    strengths: ['安定した愛情供給', '家庭を最優先にできる', '信頼できるパートナー'],
    challenges: ['変化を恐れがち', '新しい経験への抵抗感'],
    loveMatch: [
      { type: 'RESC', reason: '同じ安定志向と感情重視の価値観を共有。穏やかで深い愛を育めます。' },
      { type: 'AEPV', reason: '正反対の冒険心があなたの世界を広げてくれます。あなたの安定感が相手を支えます。' }
    ],
    marriageMatch: [
      { type: 'RLPV', reason: '相手の革新的な発想が家庭に適度な変化と刺激をもたらし、マンネリを防ぎます。' },
      { type: 'ALPV', reason: '積極的な愛情表現が共通しつつ、相手の冒険心とバランスを取れます。' }
    ]
  },
  'ALPV': {
    name: '戦略的な開拓者',
    emoji: '🚀',
    description: '愛情表現は積極的ながら、関係性を理性的に分析するタイプ。情熱的に新しいことに挑戦し、論理的に将来を設計します。',
    strengths: ['問題解決能力', '積極的なリード', '成長志向'],
    challenges: ['感情的なケアが苦手', '分析しすぎる傾向'],
    loveMatch: [
      { type: 'REPV', reason: '同じ冒険心を持ちながら、相手の感情豊かさがあなたの論理的な面を和らげます。' },
      { type: 'AEPV', reason: '情熱と積極性が共鳴し、刺激的な関係を楽しめます。' }
    ],
    marriageMatch: [
      { type: 'RESC', reason: '相手の感情重視と安定志向が、家庭に温かさと安定をもたらします。' },
      { type: 'REPC', reason: '相手の堅実さと感情的な深さが、長期的な安定と愛情を提供します。' }
    ]
  },
  'ALPC': {
    name: '堅実なプランナー',
    emoji: '📋',
    description: '愛情を積極的に示しながらも、冷静に関係性を築くタイプ。情熱的でありつつ、将来をしっかり見据えた計画的な恋愛を好みます。',
    strengths: ['計画的なアプローチ', '将来設計が明確', '頼りがいがある'],
    challenges: ['ロマンチックさが不足', '感情より論理を優先しがち'],
    loveMatch: [
      { type: 'AEPC', reason: '堅実さを共有しながら、相手の感情豊かさがあなたの恋愛に彩りを添えます。' },
      { type: 'REPC', reason: '同じ堅実志向で将来のビジョンが合いやすく、確実に愛を育めます。' }
    ],
    marriageMatch: [
      { type: 'RESV', reason: '相手の感情的な深さと夢見る心が、あなたの生活にロマンスと潤いを与えます。' },
      { type: 'AESV', reason: '愛情表現の積極さが共通し、相手の柔軟さがあなたの堅さを和らげます。' }
    ]
  },
  'ALSV': {
    name: '知的な探求者',
    emoji: '🔮',
    description: '愛情表現は積極的ながら、安定した関係の中で新しい可能性を探るタイプ。理性的でありながら、夢や理想を追い求めます。',
    strengths: ['深い会話ができる', '知的好奇心が旺盛', 'バランスが良い'],
    challenges: ['感情表現が理屈っぽい', '実行より計画に偏りがち'],
    loveMatch: [
      { type: 'RESV', reason: '同じ知的好奇心と夢追い人の気質を共有。深い精神的つながりを楽しめます。' },
      { type: 'AESV', reason: '安定志向と未来への希望が一致。お互いの夢を応援し合える関係です。' }
    ],
    marriageMatch: [
      { type: 'REPC', reason: '相手の感情重視と堅実さが、あなたの理想追求に現実的な基盤を与えます。' },
      { type: 'AEPC', reason: '愛情表現は共に積極的で、相手の情熱と堅実さがあなたを支えます。' }
    ]
  },
  'ALSC': {
    name: '安定の建築家',
    emoji: '🏰',
    description: '積極的に愛情を示しながら、論理的かつ堅実に関係を構築するタイプ。安定した土台の上に、着実に愛を育てていきます。',
    strengths: ['信頼性が高い', '一貫した愛情', '現実的な判断力'],
    challenges: ['サプライズが苦手', '柔軟性に欠ける'],
    loveMatch: [
      { type: 'AESC', reason: '同じ安定志向で、積極的な愛情表現も共通。確実に絆を深められます。' },
      { type: 'RESC', reason: '堅実さを共有しながら、相手の感情豊かさがあなたに温かみを加えます。' }
    ],
    marriageMatch: [
      { type: 'REPV', reason: '相手の秘めた情熱と冒険心が、あなたの堅実な生活に刺激を与えます。' },
      { type: 'AEPV', reason: '愛情表現の積極さは共通しながら、相手の情熱があなたを補完します。' }
    ]
  },
  'REPV': {
    name: '秘めた情熱家',
    emoji: '🌋',
    description: '普段は控えめながら、内に秘めた情熱は人一倍。感情を大切にし、冒険的な未来を夢見るロマンチストです。',
    strengths: ['深い内面世界', '情熱的なサプライズ', '独自の世界観'],
    challenges: ['気持ちが伝わりにくい', '誤解されやすい'],
    loveMatch: [
      { type: 'AEPV', reason: '同じ情熱と冒険心を持ち、相手の積極性があなたの秘めた感情を引き出します。' },
      { type: 'ALPV', reason: '冒険心が共鳴し、相手の論理性があなたの感情的な面とバランスを取ります。' }
    ],
    marriageMatch: [
      { type: 'ALSC', reason: '相手の安定感と一貫した愛情が、あなたに安心できる居場所を与えます。' },
      { type: 'AESC', reason: '相手の家庭的な面があなたに安心感を与え、あなたの情熱が刺激を加えます。' }
    ]
  },
  'REPC': {
    name: '静かな献身者',
    emoji: '🌙',
    description: '控えめながら深い愛情を持ち、感情的なつながりを大切にするタイプ。情熱を秘めながら、堅実な未来を一緒に築きたいと願います。',
    strengths: ['深い愛情', '相手を理解する力', '誠実さ'],
    challenges: ['自己表現が苦手', '受け身になりがち'],
    loveMatch: [
      { type: 'AEPC', reason: '感情重視と堅実さが一致。相手の積極性があなたの愛情を引き出します。' },
      { type: 'ALPC', reason: '堅実志向が共通し、相手のリードがあなたに安心感を与えます。' }
    ],
    marriageMatch: [
      { type: 'ALSV', reason: '相手の知的好奇心と積極性が、あなたの控えめな面をうまく補います。' },
      { type: 'ALPV', reason: '相手の行動力があなたの堅実さと組み合わさり、バランスの取れた家庭を築けます。' }
    ]
  },
  'RESV': {
    name: '夢見る詩人',
    emoji: '✨',
    description: '控えめで感情豊か、安定を求めながらも夢を追い続けるタイプ。静かな愛情の中に、無限の想像力を秘めています。',
    strengths: ['繊細な感性', '芸術的センス', '深い共感力'],
    challenges: ['現実逃避しがち', '自信がない'],
    loveMatch: [
      { type: 'AESV', reason: '同じ夢追い人の感性を共有し、お互いの内面世界を深く理解し合えます。' },
      { type: 'ALSV', reason: '知的な探求心と夢見る心が共鳴。相手の積極性があなたの繊細さを包み込みます。' }
    ],
    marriageMatch: [
      { type: 'ALPC', reason: '相手の計画性と現実的な視点が、あなたの夢を実現可能な形に落とし込みます。' },
      { type: 'AEPC', reason: '相手の愛情深さと堅実さが、あなたに安心感と自信を与えます。' }
    ]
  },
  'RESC': {
    name: '穏やかな番人',
    emoji: '🕊️',
    description: '控えめで感情を大切にし、安定と堅実さを何より重視するタイプ。静かに、確実に、深い絆を育てていきます。',
    strengths: ['落ち着いた安心感', '一途な愛', '忍耐強い'],
    challenges: ['変化への適応が遅い', '自分を抑えすぎる'],
    loveMatch: [
      { type: 'AESC', reason: '同じ安定志向と感情重視で、お互いに深い安心感を与え合えます。' },
      { type: 'ALSC', reason: '堅実さが共通し、相手の積極性があなたの控えめな面を補います。' }
    ],
    marriageMatch: [
      { type: 'ALPV', reason: '相手の冒険心と行動力が、あなたの安定した生活に適度な変化をもたらします。' },
      { type: 'AEPV', reason: '正反対だからこそ補い合える関係。相手の情熱があなたを活性化させます。' }
    ]
  },
  'RLPV': {
    name: '冷静な革命家',
    emoji: '⚡',
    description: '控えめながら理性的で、情熱的に新しい未来を切り開くタイプ。論理と野心を武器に、独自の道を歩みます。',
    strengths: ['独立心が強い', '革新的な発想', '冷静な判断力'],
    challenges: ['感情表現が苦手', '近寄りがたい印象'],
    loveMatch: [
      { type: 'AEPV', reason: '冒険心と情熱が共鳴。相手の感情豊かさが、あなたの論理的な殻を破ります。' },
      { type: 'ALPV', reason: '同じ革新的な志向を持ち、知的な刺激を与え合えます。' }
    ],
    marriageMatch: [
      { type: 'AEPC', reason: '相手の感情的な温かさと堅実さが、あなたのクールな面を補います。' },
      { type: 'AESC', reason: '相手の家庭的で安定した愛情が、あなたの冒険的な精神に安らぎを与えます。' }
    ]
  },
  'RLPC': {
    name: '静かな戦略家',
    emoji: '♟️',
    description: '控えめで論理的、情熱を秘めながら堅実に計画を立てるタイプ。表には出さないが、深く考え抜いた愛の形を持っています。',
    strengths: ['深い思考力', '長期的な視野', '信頼性'],
    challenges: ['感情が読めない', 'ロマンチックさが不足'],
    loveMatch: [
      { type: 'AEPC', reason: '堅実さが共通し、相手の感情豊かさと積極性があなたの内面を引き出します。' },
      { type: 'ALPC', reason: '同じ計画的で堅実な価値観を共有。着実に信頼を深められます。' }
    ],
    marriageMatch: [
      { type: 'AESV', reason: '相手の感情的な温かさと柔軟性が、あなたの論理的な面を和らげます。' },
      { type: 'AEPC', reason: '相手の愛情深さがあなたに感情的な充足感を与え、安定した家庭を作れます。' }
    ]
  },
  'RLSV': {
    name: '思慮深い賢者',
    emoji: '🦉',
    description: '控えめで理性的、安定を求めながらも新しい可能性に開かれたタイプ。深い洞察力と知恵で、関係を導きます。',
    strengths: ['深い洞察力', '知的な会話', 'バランス感覚'],
    challenges: ['決断が遅い', '感情より頭で考える'],
    loveMatch: [
      { type: 'ALSV', reason: '知的好奇心と安定志向が一致。深い会話と精神的なつながりを楽しめます。' },
      { type: 'AESV', reason: '安定志向と未来への可能性を共有。相手の感情豊かさが温かみを加えます。' }
    ],
    marriageMatch: [
      { type: 'AEPC', reason: '相手の情熱的な愛情と堅実さが、あなたの控えめで知的な面を補完します。' },
      { type: 'AEPV', reason: '相手の行動力と感情の豊かさが、刺激と安定の両方をもたらします。' }
    ]
  },
  'RLSC': {
    name: '鉄壁の守護者',
    emoji: '🗿',
    description: '論理的で揺るぎない精神を持ち、一貫した行動で絶対的な安心感を提供するタイプ。感情に流されず、事実に基づいた絆を築きます。',
    strengths: ['圧倒的な安定感', '高い信頼性', '冷静な危機管理'],
    challenges: ['感情表現が乏しい', '保守的で変化を嫌う'],
    loveMatch: [
      { type: 'ALSC', reason: '価値観のミスマッチが極めて少なく、効率的で安定した関係を維持できます。' },
      { type: 'RESC', reason: '相手の感情豊かな面が、あなたの論理的な世界に彩りと温かみを与えます。' }
    ],
    marriageMatch: [
      { type: 'AEPV', reason: '正反対ゆえに最強。相手の情熱があなたの生活を活性化し、あなたの安定が相手を支えます。' },
      { type: 'ALPV', reason: '積極的な行動力があなたの保守性を補完。知的な刺激のある家庭を築けます。' }
    ]
  }
};

// ==========================================
// 質問データ - 全20問
// ==========================================
const questions = [
  { id: 1, axis: 'AR', text: '狙った相手には、積極的に自分からアプローチする', category: 'Identity Check #1' },
  { id: 2, axis: 'AR', text: 'イベントや記念日は、戦略的に完璧に演出したい', category: 'Identity Check #2' },
  { id: 3, axis: 'AR', text: '遠回しな態度より、ストレートな言葉での確認を好む', category: 'Identity Check #3' },
  { id: 4, axis: 'AR', text: '人前でもパートナーへの愛情表現に抵抗がない', category: 'Identity Check #4' },
  { id: 5, axis: 'AR', text: 'サプライズを仕掛けることに喜びを感じる', category: 'Identity Check #5' },
  { id: 6, axis: 'EL', text: 'パートナー選びでは、条件より「直感」を重視する', category: 'Identity Check #6' },
  { id: 7, axis: 'EL', text: '議論の際は、論理より感情で話し合いたい', category: 'Identity Check #7' },
  { id: 8, axis: 'EL', text: '「好き」という感情に理由は必要ないと思う', category: 'Identity Check #8' },
  { id: 9, axis: 'EL', text: '恋愛においては、頭で考えるより心に従うべきだ', category: 'Identity Check #9' },
  { id: 10, axis: 'EL', text: '相手の感情の変化に敏感な方だ', category: 'Identity Check #10' },
  { id: 11, axis: 'PS', text: '恋愛には刺激とドキドキ感が不可欠だと思う', category: 'Identity Check #11' },
  { id: 12, axis: 'PS', text: 'マンネリ化するくらいなら、リスクがあっても変化を求める', category: 'Identity Check #12' },
  { id: 13, axis: 'PS', text: '「燃えるような恋」に強く憧れる', category: 'Identity Check #13' },
  { id: 14, axis: 'PS', text: '計画通りより、即興的なデートを好む', category: 'Identity Check #14' },
  { id: 15, axis: 'PS', text: '恋愛初期のような情熱をずっと維持したい', category: 'Identity Check #15' },
  { id: 16, axis: 'VC', text: 'パートナーとは新しいことにどんどん挑戦したい', category: 'Identity Check #16' },
  { id: 17, axis: 'VC', text: '将来の計画より、今を楽しむことを優先したい', category: 'Identity Check #17' },
  { id: 18, axis: 'VC', text: '安定より、成長や変化のある関係に惹かれる', category: 'Identity Check #18' },
  { id: 19, axis: 'VC', text: '「冒険的な人生」を一緒に歩めるパートナーが理想だ', category: 'Identity Check #19' },
  { id: 20, axis: 'VC', text: '転職や引っ越しなど、大きな変化も前向きに受け入れられる', category: 'Identity Check #20' }
];

// ==========================================
// 回答選択肢
// ==========================================
const answerOptions = [
  { value: 2, label: '完全に同意' },
  { value: 1, label: '概ね同意' },
  { value: 0, label: '中立' },
  { value: -1, label: 'やや否定' },
  { value: -2, label: '強く否定' }
];

// ==========================================
// State
// ==========================================
let currentQuestionIndex = 0;
let answers = {};
let result = null;

// ==========================================
// DOM Elements
// ==========================================
const elements = {
  introScreen: document.getElementById('intro-screen'),
  quizScreen: document.getElementById('quiz-screen'),
  resultScreen: document.getElementById('result-screen'),
  resetBtn: document.getElementById('reset-btn'),
  startBtn: document.getElementById('start-btn'),
  retryBtn: document.getElementById('retry-btn'),
  questionCounter: document.getElementById('question-counter'),
  progressPercent: document.getElementById('progress-percent'),
  progressFill: document.getElementById('progress-fill'),
  questionCard: document.getElementById('question-card'),
  questionCategory: document.getElementById('question-category'),
  questionText: document.getElementById('question-text'),
  answerOptions: document.getElementById('answer-options'),
  resultTitle: document.getElementById('result-title'),
  resultTypeCode: document.getElementById('result-type-code'),
  resultDescription: document.getElementById('result-description'),
  strengthsList: document.getElementById('strengths-list'),
  challengesList: document.getElementById('challenges-list'),
  loveMatches: document.getElementById('love-matches'),
  marriageMatches: document.getElementById('marriage-matches'),
  spectrumChart: document.getElementById('spectrum-chart'),
  allTypesGrid: document.getElementById('all-types-grid'),
  petalsContainer: document.getElementById('petals-container')
};

// ==========================================
// Initialization
// ==========================================
function init() {
  createFloatingParticles();
  bindEvents();
  renderAllTypes();
}

// ==========================================
// Floating Particles
// ==========================================
function createFloatingParticles() {
  const particles = ['💎', '✨', '🌟', '◆', '👑'];
  
  for (let i = 0; i < 12; i++) {
    const p = document.createElement('div');
    p.className = 'petal';
    p.textContent = particles[Math.floor(Math.random() * particles.length)];
    p.style.fontSize = (Math.random() * 12 + 14) + 'px';
    p.style.left = (Math.random() * 100) + '%';
    p.style.animation = `floatPetal ${Math.random() * 8 + 12}s linear infinite`;
    p.style.animationDelay = (Math.random() * 10) + 's';
    elements.petalsContainer.appendChild(p);
  }
}

// ==========================================
// Event Binding
// ==========================================
function bindEvents() {
  elements.startBtn.addEventListener('click', startQuiz);
  elements.resetBtn.addEventListener('click', resetQuiz);
  elements.retryBtn.addEventListener('click', resetQuiz);
  
  // Share buttons
  document.getElementById('share-line').addEventListener('click', () => shareResult('line'));
  document.getElementById('share-x').addEventListener('click', () => shareResult('x'));
  document.getElementById('share-facebook').addEventListener('click', () => shareResult('facebook'));
}

// ==========================================
// Screen Navigation
// ==========================================
function showScreen(screenName) {
  elements.introScreen.classList.add('hidden');
  elements.quizScreen.classList.add('hidden');
  elements.resultScreen.classList.add('hidden');
  
  if (screenName === 'intro') {
    elements.introScreen.classList.remove('hidden');
    elements.resetBtn.classList.add('hidden');
  } else if (screenName === 'quiz') {
    elements.quizScreen.classList.remove('hidden');
    elements.resetBtn.classList.remove('hidden');
  } else if (screenName === 'result') {
    elements.resultScreen.classList.remove('hidden');
    elements.resetBtn.classList.remove('hidden');
  }
}

// ==========================================
// Quiz Logic
// ==========================================
function startQuiz() {
  currentQuestionIndex = 0;
  answers = {};
  result = null;
  showScreen('quiz');
  renderQuestion();
}

function resetQuiz() {
  currentQuestionIndex = 0;
  answers = {};
  result = null;
  showScreen('intro');
}

function renderQuestion() {
  const question = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  
  // Update progress
  elements.questionCounter.textContent = `Analysis ${currentQuestionIndex + 1} / ${questions.length}`;
  elements.progressPercent.textContent = `${Math.round(progress)}%`;
  elements.progressFill.style.width = `${progress}%`;
  
  // Update question
  elements.questionCategory.textContent = question.category;
  elements.questionText.textContent = question.text;
  
  // Render answer options
  elements.answerOptions.innerHTML = '';
  answerOptions.forEach(option => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = option.label;
    btn.addEventListener('click', () => handleAnswer(option.value));
    elements.answerOptions.appendChild(btn);
  });
}

function handleAnswer(value) {
  const question = questions[currentQuestionIndex];
  answers[question.id] = value;
  
  // Add animation
  elements.questionCard.classList.add('animating');
  
  setTimeout(() => {
    elements.questionCard.classList.remove('animating');
    
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      renderQuestion();
    } else {
      calculateResult();
      showScreen('result');
      renderResult();
    }
  }, 300);
}

// ==========================================
// Result Calculation
// ==========================================
function calculateResult() {
  const scores = { AR: 0, EL: 0, PS: 0, VC: 0 };
  
  questions.forEach(q => {
    const answer = answers[q.id] || 0;
    scores[q.axis] += answer;
  });
  
  const type = 
    (scores.AR >= 0 ? 'A' : 'R') +
    (scores.EL >= 0 ? 'E' : 'L') +
    (scores.PS >= 0 ? 'P' : 'S') +
    (scores.VC >= 0 ? 'V' : 'C');
  
  result = {
    type: type,
    scores: scores,
    data: typeData[type]
  };
}

// ==========================================
// Result Rendering
// ==========================================
function renderResult() {
  // Header
  elements.resultTitle.textContent = `${result.data.emoji} ${result.data.name}`;
  elements.resultTypeCode.textContent = result.type;
  
  // Description
  elements.resultDescription.textContent = result.data.description;
  
  // Strengths
  elements.strengthsList.innerHTML = '';
  result.data.strengths.forEach(s => {
    const li = document.createElement('li');
    li.textContent = s;
    elements.strengthsList.appendChild(li);
  });
  
  // Challenges
  elements.challengesList.innerHTML = '';
  result.data.challenges.forEach(c => {
    const li = document.createElement('li');
    li.textContent = c;
    elements.challengesList.appendChild(li);
  });
  
  // Love Matches
  renderMatches(elements.loveMatches, result.data.loveMatch, 'love');
  
  // Marriage Matches
  renderMatches(elements.marriageMatches, result.data.marriageMatch, 'marriage');
  
  // Spectrum
  renderSpectrum();
  
  // Update all types to highlight current
  renderAllTypes();
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderMatches(container, matches, type) {
  container.innerHTML = '';
  
  matches.forEach((match, index) => {
    const matchData = typeData[match.type];
    
    const card = document.createElement('div');
    card.className = 'match-card';
    
    card.innerHTML = `
      <button class="match-header">
        <div class="match-header-left">
          <span class="match-rank">${index === 0 ? '1st' : '2nd'}</span>
          <span class="match-emoji">${matchData.emoji}</span>
          <div class="match-info">
            <div class="match-name">${matchData.name}</div>
            <div class="match-code">${match.type}</div>
          </div>
        </div>
        <span class="match-arrow">▼</span>
      </button>
      <div class="match-content">
        <div class="match-reason">
          <div class="match-reason-title">
            <span>${type === 'love' ? '🔥' : '🤝'}</span> 相性の理由
          </div>
          <p class="match-reason-text">${match.reason}</p>
        </div>
      </div>
    `;
    
    // Toggle accordion
    const header = card.querySelector('.match-header');
    const content = card.querySelector('.match-content');
    const arrow = card.querySelector('.match-arrow');
    
    header.addEventListener('click', () => {
      const isExpanded = content.classList.contains('expanded');
      
      // Close all others in same section
      container.querySelectorAll('.match-content').forEach(c => c.classList.remove('expanded'));
      container.querySelectorAll('.match-arrow').forEach(a => a.classList.remove('expanded'));
      
      if (!isExpanded) {
        content.classList.add('expanded');
        arrow.classList.add('expanded');
      }
    });
    
    container.appendChild(card);
  });
}

function renderSpectrum() {
  const axes = [
    { key: 'AR', left: 'Passive (潜伏)', right: 'Active (能動)', color: '#d32f2f' },
    { key: 'EL', left: 'Logic (論理)', right: 'Emotional (直感)', color: '#d4af37' },
    { key: 'PS', left: 'Steady (安定)', right: 'Passionate (本能)', color: '#b71c1c' },
    { key: 'VC', left: 'Conservative (堅実)', right: 'Venture (冒険)', color: '#aa8922' }
  ];
  
  elements.spectrumChart.innerHTML = '';
  
  axes.forEach(axis => {
    const score = result.scores[axis.key];
    const percentage = ((score + 10) / 20) * 100;
    
    const item = document.createElement('div');
    item.className = 'spectrum-item';
    item.innerHTML = `
      <div class="spectrum-labels">
        <span>${axis.left}</span>
        <span>${axis.right}</span>
      </div>
      <div class="spectrum-bar">
        <div class="spectrum-center"></div>
        <div class="spectrum-dot" style="left: ${percentage}%; background: ${axis.color}; box-shadow: 0 2px 8px ${axis.color}80;"></div>
      </div>
    `;
    
    elements.spectrumChart.appendChild(item);
  });
}

function renderAllTypes() {
  elements.allTypesGrid.innerHTML = '';
  
  Object.entries(typeData).forEach(([code, data]) => {
    const card = document.createElement('div');
    card.className = 'type-card';
    if (result && code === result.type) {
      card.classList.add('current');
    }
    
    card.innerHTML = `
      <div class="type-emoji">${data.emoji}</div>
      <div class="type-name">${data.name}</div>
      <div class="type-code">${code}</div>
    `;
    
    elements.allTypesGrid.appendChild(card);
  });
}

// ==========================================
// Share Functions
// ==========================================
function shareResult(platform) {
  if (!result) return;
  
  const shareText = `💎 Love Identity診断の結果は「${result.data.name}」でした！\n${result.data.emoji} タイプ: ${result.type}\n\nあなたも診断してみて✨`;
  const shareUrl = window.location.href;
  
  let url = '';
  
  switch(platform) {
    case 'line':
      url = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
      break;
    case 'x':
      url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
      break;
    case 'facebook':
      url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
      break;
  }
  
  window.open(url, '_blank', 'width=600,height=400');
}

// ==========================================
// Start App
// ==========================================
document.addEventListener('DOMContentLoaded', init);
