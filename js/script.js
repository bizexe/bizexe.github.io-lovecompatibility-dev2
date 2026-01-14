/* ==========================================
   Love Spectrum - JavaScript
   ========================================== */

// ==========================================
// Data
// ==========================================
const typeData = {
  'AEPV': {
    name: '情熱の冒険家',
    emoji: '🔥',
    description: '愛情表現が豊かで、感情を大切にし、情熱的に恋愛を楽しむタイプ。新しい経験や変化を恐れず、パートナーと共に人生の冒険を楽しみたいと考えています。',
    strengths: ['サプライズが得意', '愛情表現がストレート', '一緒にいて飽きない'],
    challenges: ['衝動的になりやすい', '安定を求めるパートナーとは相性注意'],
    loveMatch: [
      { type: 'REPV', reason: '同じ情熱と冒険心を持ちながら、控えめな相手があなたのリードを心地よく受け入れてくれます。お互いの感情を深く理解し合い、刺激的な恋愛が楽しめます。' },
      { type: 'AESV', reason: '感情豊かな点が共通し、あなたの情熱を受け止めつつ安定感も与えてくれるバランスの良い相手。夢を語り合える関係になれます。' }
    ],
    marriageMatch: [
      { type: 'RLSC', reason: '正反対だからこそ補い合える関係。あなたの情熱と冒険心に対し、相手の冷静さと堅実さが家庭に安定をもたらします。長期的に見ると、お互いの弱点をカバーし合える理想的なパートナーです。' },
      { type: 'ALSC', reason: '愛情表現の積極性は共通しつつ、相手の安定志向があなたの衝動性をうまくコントロール。一緒に家庭を築く上で頼れる存在になります。' }
    ]
  },
  'AEPC': {
    name: '献身のロマンチスト',
    emoji: '💕',
    description: '愛する人に惜しみなく愛情を注ぎ、感情的なつながりを大切にするタイプ。情熱的でありながら、将来を見据えた堅実な関係を築きたいと願っています。',
    strengths: ['深い愛情表現', '感情的サポートが得意', '将来設計もしっかり'],
    challenges: ['相手に尽くしすぎる', '自分の気持ちを優先しがち'],
    loveMatch: [
      { type: 'REPC', reason: '感情を大切にし堅実な点が一致。控えめな相手があなたの愛情表現を嬉しく受け止め、深い信頼関係を築けます。' },
      { type: 'AEPV', reason: '同じ情熱と愛情深さを持ち、お互いの感情に敏感。刺激的でありながら心が通じ合う恋愛ができます。' }
    ],
    marriageMatch: [
      { type: 'RLSV', reason: '相手の知的で落ち着いた面が、あなたの情熱的な愛情をうまく受け止めます。お互いの将来への展望を尊重し合い、成長し続ける結婚生活が期待できます。' },
      { type: 'ALPC', reason: '計画性と愛情表現の積極さが共通し、将来設計を一緒に楽しめる相手。堅実な家庭を築きながらも愛情あふれる関係を維持できます。' }
    ]
  },
  'AESV': {
    name: '穏やかな夢追い人',
    emoji: '🌈',
    description: '愛情深く感情豊かでありながら、安定した関係を好むタイプ。同時に新しい可能性にも開かれており、パートナーと共に成長することを大切にします。',
    strengths: ['安心感を与える', '夢を応援してくれる', 'バランス感覚がある'],
    challenges: ['決断に時間がかかる', '理想と現実のギャップに悩む'],
    loveMatch: [
      { type: 'RESV', reason: '同じ夢見がちな感性を持ち、お互いの内面世界を理解し合えます。穏やかながらも深い感情的つながりが生まれます。' },
      { type: 'AEPV', reason: 'あなたの安定志向と相手の情熱がうまくミックス。刺激を受けながらも安心できる関係が築けます。' }
    ],
    marriageMatch: [
      { type: 'RLPC', reason: '相手の冷静さと計画性が、あなたの夢見がちな面を現実に落とし込む手助けをしてくれます。安定した家庭基盤の上で、一緒に夢を追いかけられます。' },
      { type: 'ALSC', reason: '愛情表現は共に積極的で、相手の堅実さがあなたに安心感を与えます。お互いを支え合いながら穏やかな家庭を築けます。' }
    ]
  },
  'AESC': {
    name: '愛の守護者',
    emoji: '🏠',
    description: '温かい愛情表現と安定志向を兼ね備えたタイプ。家庭的で、パートナーとの穏やかで確かな絆を何より大切にします。',
    strengths: ['安定した愛情', '家庭を大切にする', '信頼できるパートナー'],
    challenges: ['変化を恐れがち', '新しい経験への抵抗'],
    loveMatch: [
      { type: 'RESC', reason: '同じ安定志向と感情重視の価値観を共有。お互いに安心感を与え合い、穏やかで深い愛を育めます。' },
      { type: 'AEPV', reason: '正反対の冒険心があなたの世界を広げてくれます。相手の情熱に刺激を受けながら、あなたの安定感が相手を支えます。' }
    ],
    marriageMatch: [
      { type: 'RLPV', reason: '相手の革新的な発想があなたの保守的な面を補い、家庭に適度な変化と刺激をもたらします。長期的にマンネリ化を防ぎ、成長し続ける関係が築けます。' },
      { type: 'ALPV', reason: '積極的な愛情表現が共通しつつ、相手の冒険心があなたの安定志向とバランスを取ります。お互いの良さを引き出し合える関係です。' }
    ]
  },
  'ALPV': {
    name: '戦略的な開拓者',
    emoji: '🚀',
    description: '愛情表現は積極的ながら、関係性を理性的に分析するタイプ。情熱的に新しいことに挑戦し、論理的に将来を設計します。',
    strengths: ['問題解決が得意', '積極的なリード', '成長志向'],
    challenges: ['感情的なケアが苦手', '分析しすぎる傾向'],
    loveMatch: [
      { type: 'REPV', reason: '同じ冒険心を持ちながら、相手の感情豊かさがあなたの論理的な面を和らげます。知的な刺激と感情的な深さの両方を楽しめます。' },
      { type: 'AEPV', reason: '情熱と積極性が共鳴し、一緒にエキサイティングな体験を追求できます。お互いをリードし合う刺激的な関係に。' }
    ],
    marriageMatch: [
      { type: 'RESC', reason: '相手の感情重視と安定志向が、あなたの論理的で冒険的な面を補完。家庭に温かさと安定をもたらし、あなたが外で挑戦する基盤を作ってくれます。' },
      { type: 'REPC', reason: '相手の堅実さと感情的な深さが、長期的な関係に必要な安定と愛情を提供。お互いの違いが補い合う理想的なパートナーシップです。' }
    ]
  },
  'ALPC': {
    name: '堅実なプランナー',
    emoji: '📋',
    description: '愛情を積極的に示しながらも、冷静に関係性を築くタイプ。情熱的でありつつ、将来をしっかり見据えた計画的な恋愛を好みます。',
    strengths: ['計画的なデート', '将来設計が明確', '頼りがいがある'],
    challenges: ['ロマンチックさが不足', '感情より論理を優先'],
    loveMatch: [
      { type: 'AEPC', reason: '堅実さを共有しながら、相手の感情豊かさがあなたの恋愛に彩りを添えます。計画的でありながら愛情深い関係が築けます。' },
      { type: 'REPC', reason: '同じ堅実志向で将来のビジョンが合いやすく、穏やかながらも確実に愛を育めます。' }
    ],
    marriageMatch: [
      { type: 'RESV', reason: '相手の感情的な深さと夢見る心が、あなたの計画重視の生活にロマンスと潤いを与えます。現実と理想のバランスが取れた家庭を築けます。' },
      { type: 'AESV', reason: '愛情表現の積極さが共通し、相手の柔軟な姿勢があなたの堅さを和らげます。お互いを尊重しながら成長できる関係です。' }
    ]
  },
  'ALSV': {
    name: '知的な探求者',
    emoji: '🔮',
    description: '愛情表現は積極的ながら、安定した関係の中で新しい可能性を探るタイプ。理性的でありながら、夢や理想を追い求めます。',
    strengths: ['深い会話ができる', '知的好奇心が旺盛', 'バランスが良い'],
    challenges: ['感情表現が理屈っぽい', '実行より計画に偏りがち'],
    loveMatch: [
      { type: 'RESV', reason: '同じ知的好奇心と夢追い人の気質を共有。深い会話と精神的なつながりを楽しめる、心が通じ合う関係です。' },
      { type: 'AESV', reason: '安定志向と未来への希望が一致。お互いの夢を応援し合い、知的にも感情的にも満たされる関係を築けます。' }
    ],
    marriageMatch: [
      { type: 'REPC', reason: '相手の感情重視と堅実さが、あなたの理想追求に現実的な基盤を与えます。長期的に安定しつつ、精神的な成長も続けられる結婚生活に。' },
      { type: 'AEPC', reason: '愛情表現は共に積極的で、相手の情熱と堅実さのミックスがあなたの探求心を支えます。夢を追いながらも地に足のついた家庭を築けます。' }
    ]
  },
  'ALSC': {
    name: '安定の建築家',
    emoji: '🏰',
    description: '積極的に愛情を示しながら、論理的かつ堅実に関係を構築するタイプ。安定した土台の上に、着実に愛を育てていきます。',
    strengths: ['信頼性が高い', '一貫した愛情', '現実的な判断'],
    challenges: ['サプライズが苦手', '柔軟性に欠ける'],
    loveMatch: [
      { type: 'AESC', reason: '同じ安定志向で、積極的な愛情表現も共通。お互いに安心感を与え合い、確実に絆を深められます。' },
      { type: 'RESC', reason: '堅実さを共有しながら、相手の感情豊かさがあなたの論理的な面に温かみを加えます。' }
    ],
    marriageMatch: [
      { type: 'REPV', reason: '相手の秘めた情熱と冒険心が、あなたの堅実な生活に刺激と彩りを与えます。違いがあるからこそ飽きのこない、長続きする結婚生活に。' },
      { type: 'AEPV', reason: '愛情表現の積極さは共通しながら、相手の情熱があなたの安定重視をうまく補完。お互いの強みを活かした家庭を築けます。' }
    ]
  },
  'REPV': {
    name: '秘めた情熱家',
    emoji: '🌋',
    description: '普段は控えめながら、内に秘めた情熱は人一倍。感情を大切にし、冒険的な未来を夢見るロマンチストです。',
    strengths: ['深い内面世界', '情熱的なサプライズ', '独自の世界観'],
    challenges: ['気持ちが伝わりにくい', '誤解されやすい'],
    loveMatch: [
      { type: 'AEPV', reason: '同じ情熱と冒険心を持ち、相手の積極性があなたの秘めた感情を引き出してくれます。深い理解と刺激的な体験の両方が得られます。' },
      { type: 'ALPV', reason: '冒険心が共鳴し、相手の論理性があなたの感情的な面とバランスを取ります。知的にも感情的にも満たされる関係に。' }
    ],
    marriageMatch: [
      { type: 'ALSC', reason: '相手の安定感と一貫した愛情が、あなたの内に秘めた情熱に安心できる居場所を与えます。長期的に信頼し合える関係を築けます。' },
      { type: 'AESC', reason: '相手の家庭的な面があなたに安心感を与え、あなたの情熱が相手の生活に刺激を加えます。お互いに必要としあえる関係です。' }
    ]
  },
  'REPC': {
    name: '静かな献身者',
    emoji: '🌙',
    description: '控えめながら深い愛情を持ち、感情的なつながりを大切にするタイプ。情熱を秘めながら、堅実な未来を一緒に築きたいと願います。',
    strengths: ['深い愛情', '相手を理解する力', '誠実さ'],
    challenges: ['自己表現が苦手', '受け身になりがち'],
    loveMatch: [
      { type: 'AEPC', reason: '感情重視と堅実さが一致。相手の積極性があなたの愛情を引き出し、深い信頼関係を築けます。' },
      { type: 'ALPC', reason: '堅実志向が共通し、相手のリードがあなたに安心感を与えます。ゆっくりと、しかし確実に愛を育めます。' }
    ],
    marriageMatch: [
      { type: 'ALSV', reason: '相手の知的好奇心と積極性が、あなたの控えめな面をうまく補います。お互いの感情を大切にしながら、新しい可能性も探れる結婚生活に。' },
      { type: 'ALPV', reason: '相手の行動力があなたの堅実さと組み合わさり、バランスの取れた家庭を築けます。違いを受け入れ合うことで成長できる関係です。' }
    ]
  },
  'RESV': {
    name: '夢見る詩人',
    emoji: '✨',
    description: '控えめで感情豊か、安定を求めながらも夢を追い続けるタイプ。静かな愛情の中に、無限の想像力を秘めています。',
    strengths: ['繊細な感性', '芸術的センス', '深い共感力'],
    challenges: ['現実逃避しがち', '自信がない'],
    loveMatch: [
      { type: 'AESV', reason: '同じ夢追い人の感性を共有し、お互いの内面世界を深く理解し合えます。感情的に豊かで、穏やかな愛を育めます。' },
      { type: 'ALSV', reason: '知的な探求心と夢見る心が共鳴。相手の積極性があなたの繊細さを包み込み、精神的に満たされる関係に。' }
    ],
    marriageMatch: [
      { type: 'ALPC', reason: '相手の計画性と現実的な視点が、あなたの夢を実現可能な形に落とし込む手助けをしてくれます。夢と現実のバランスが取れた家庭を築けます。' },
      { type: 'AEPC', reason: '相手の愛情深さと堅実さが、あなたに安心感と自信を与えます。感情を大切にしながらも地に足のついた結婚生活に。' }
    ]
  },
  'RESC': {
    name: '穏やかな番人',
    emoji: '🕊️',
    description: '控えめで感情を大切にし、安定と堅実さを何より重視するタイプ。静かに、確実に、深い絆を育てていきます。',
    strengths: ['落ち着いた安心感', '一途な愛', '忍耐強い'],
    challenges: ['変化への適応が遅い', '自分を抑えすぎる'],
    loveMatch: [
      { type: 'AESC', reason: '同じ安定志向と感情重視で、お互いに深い安心感を与え合えます。穏やかで確かな愛を育める相手です。' },
      { type: 'ALSC', reason: '堅実さが共通し、相手の積極性があなたの控えめな面を補います。着実に信頼を深められる関係です。' }
    ],
    marriageMatch: [
      { type: 'ALPV', reason: '相手の冒険心と行動力が、あなたの安定した生活に適度な変化と刺激をもたらします。長期的にマンネリ化を防ぎ、お互いを成長させる関係です。' },
      { type: 'AEPV', reason: '正反対だからこそ補い合える関係。相手の情熱があなたの静かな愛情に火をつけ、あなたの安定感が相手を支えます。' }
    ]
  },
  'RLPV': {
    name: '冷静な革命家',
    emoji: '⚡',
    description: '控えめながら理性的で、情熱的に新しい未来を切り開くタイプ。論理と野心を武器に、独自の道を歩みます。',
    strengths: ['独立心が強い', '革新的な発想', '冷静な判断力'],
    challenges: ['感情表現が苦手', '近寄りがたい印象'],
    loveMatch: [
      { type: 'AEPV', reason: '冒険心と情熱が共鳴。相手の感情豊かさと積極性が、あなたの論理的な殻を破り、深い感情的つながりを体験させてくれます。' },
      { type: 'ALPV', reason: '同じ革新的な志向を持ち、知的な刺激を与え合えます。お互いの野心を尊重し高め合う関係に。' }
    ],
    marriageMatch: [
      { type: 'AEPC', reason: '相手の感情的な温かさと堅実さが、あなたのクールな面を補います。家庭に愛情と安定をもたらし、あなたが革新を追求する基盤を作ってくれます。' },
      { type: 'AESC', reason: '相手の家庭的で安定した愛情が、あなたの冒険的な精神に安らぎを与えます。違いがあるからこそ長続きする関係です。' }
    ]
  },
  'RLPC': {
    name: '静かな戦略家',
    emoji: '♟️',
    description: '控えめで論理的、情熱を秘めながら堅実に計画を立てるタイプ。表には出さないが、深く考え抜いた愛の形を持っています。',
    strengths: ['深い思考力', '長期的な視野', '信頼性'],
    challenges: ['感情が読めない', 'ロマンチックさが不足'],
    loveMatch: [
      { type: 'AEPC', reason: '堅実さが共通し、相手の感情豊かさと積極性があなたの内面を引き出します。じっくりと深い関係を築けます。' },
      { type: 'ALPC', reason: '同じ計画的で堅実な価値観を共有。お互いの論理性を尊重しながら、着実に信頼を深められます。' }
    ],
    marriageMatch: [
      { type: 'AESV', reason: '相手の感情的な温かさと柔軟性が、あなたの論理的で堅い面を和らげます。お互いの違いが補い合い、バランスの取れた家庭を築けます。' },
      { type: 'AEPC', reason: '相手の愛情深さがあなたに感情的な充足感を与え、共通の堅実志向が安定した家庭基盤を作ります。' }
    ]
  },
  'RLSV': {
    name: '思慮深い賢者',
    emoji: '🦉',
    description: '控えめで理性的、安定を求めながらも新しい可能性に開かれたタイプ。深い洞察力と知恵で、関係を導きます。',
    strengths: ['深い洞察力', '知的な会話', 'バランス感覚'],
    challenges: ['決断が遅い', '感情より頭で考える'],
    loveMatch: [
      { type: 'ALSV', reason: '知的好奇心と安定志向が一致。深い会話と精神的なつながりを楽しめる、心の通い合う関係です。' },
      { type: 'AESV', reason: '安定志向と未来への可能性を共有。相手の感情豊かさがあなたの論理的な面に温かみを加えます。' }
    ],
    marriageMatch: [
      { type: 'AEPC', reason: '相手の情熱的な愛情と堅実さが、あなたの控えめで知的な面を補完。感情的にも実生活でも満たされる結婚生活に。' },
      { type: 'AEPV', reason: '相手の行動力と感情の豊かさが、あなたの思慮深い姿勢と組み合わさり、刺激と安定の両方がある家庭を築けます。' }
    ]
  },
  'RLSC': {
    name: '揺るぎない柱',
    emoji: '🗿',
    description: '控えめで論理的、安定と堅実さを極めたタイプ。静かに、確実に、揺るぎない愛の土台を築きます。',
    strengths: ['圧倒的な安定感', '一貫性', '信頼できる'],
    challenges: ['面白みがない印象', '柔軟性に欠ける'],
    loveMatch: [
      { type: 'ALSC', reason: '同じ安定志向と堅実さを共有。お互いに信頼し合い、確実に絆を深められる相手です。' },
      { type: 'RESC', reason: '堅実さが一致し、相手の感情豊かさがあなたの論理的な面に深みを与えます。穏やかで確かな関係を築けます。' }
    ],
    marriageMatch: [
      { type: 'AEPV', reason: '正反対だからこそ最高のバランス。相手の情熱と冒険心があなたの堅実な生活に刺激と彩りを与え、あなたの安定感が相手を支えます。長期的に補い合える理想的な組み合わせです。' },
      { type: 'ALPV', reason: '相手の積極性と冒険心があなたの保守的な面を補い、あなたの一貫した安定感が相手に安心を与えます。違いを活かした成長できる関係です。' }
    ]
  }
};

const questions = [
  { id: 1, axis: 'AR', text: '好きな人には、言葉や行動で積極的に愛情を伝えたい', category: '💝 愛情表現について' },
  { id: 2, axis: 'AR', text: '記念日やイベントは盛大にお祝いしたいタイプだ', category: '💝 愛情表現について' },
  { id: 3, axis: 'AR', text: '愛情は態度で見せるより、はっきり言葉にする方が好き', category: '💝 愛情表現について' },
  { id: 4, axis: 'AR', text: '人前でも恋人とスキンシップをとることに抵抗がない', category: '💝 愛情表現について' },
  { id: 5, axis: 'AR', text: 'サプライズを仕掛けるのが好きだ', category: '💝 愛情表現について' },
  { id: 6, axis: 'EL', text: 'パートナー選びでは、条件より「心が動くか」を重視する', category: '💭 感情と理性について' },
  { id: 7, axis: 'EL', text: '喧嘩の時は、論理より感情で話し合いたい', category: '💭 感情と理性について' },
  { id: 8, axis: 'EL', text: '「好き」という気持ちに理由は必要ないと思う', category: '💭 感情と理性について' },
  { id: 9, axis: 'EL', text: '恋愛においては、頭で考えるより心に従うべきだ', category: '💭 感情と理性について' },
  { id: 10, axis: 'EL', text: '相手の感情の変化に敏感な方だ', category: '💭 感情と理性について' },
  { id: 11, axis: 'PS', text: '恋愛には刺激とドキドキ感が大切だと思う', category: '🔥 恋愛のペースについて' },
  { id: 12, axis: 'PS', text: 'マンネリ化するくらいなら、多少のリスクがあっても変化を求めたい', category: '🔥 恋愛のペースについて' },
  { id: 13, axis: 'PS', text: '「燃えるような恋」に憧れる', category: '🔥 恋愛のペースについて' },
  { id: 14, axis: 'PS', text: '予定通りより、spontaneous（自発的）なデートが好き', category: '🔥 恋愛のペースについて' },
  { id: 15, axis: 'PS', text: '恋愛初期のような情熱をずっと維持したい', category: '🔥 恋愛のペースについて' },
  { id: 16, axis: 'VC', text: 'パートナーとは新しいことにどんどん挑戦したい', category: '🌟 将来について' },
  { id: 17, axis: 'VC', text: '将来の計画より、今を楽しむことを優先したい', category: '🌟 将来について' },
  { id: 18, axis: 'VC', text: '安定より、成長や変化のある関係に惹かれる', category: '🌟 将来について' },
  { id: 19, axis: 'VC', text: '「冒険的な人生」を一緒に歩めるパートナーが理想だ', category: '🌟 将来について' },
  { id: 20, axis: 'VC', text: '転職や引っ越しなど、大きな変化も前向きに受け入れられる', category: '🌟 将来について' }
];

const answerOptions = [
  { value: 2, label: 'とても当てはまる' },
  { value: 1, label: 'やや当てはまる' },
  { value: 0, label: 'どちらでもない' },
  { value: -1, label: 'あまり当てはまらない' },
  { value: -2, label: '全く当てはまらない' }
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
  createFloatingPetals();
  bindEvents();
  renderAllTypes();
}

// ==========================================
// Floating Petals
// ==========================================
function createFloatingPetals() {
  const petals = ['🌸', '💗', '✨', '🩷', '💫', '🦋'];
  
  for (let i = 0; i < 18; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.textContent = petals[Math.floor(Math.random() * petals.length)];
    petal.style.fontSize = (Math.random() * 14 + 10) + 'px';
    petal.style.left = (Math.random() * 100) + '%';
    petal.style.animation = `floatPetal ${Math.random() * 8 + 12}s linear infinite`;
    petal.style.animationDelay = (Math.random() * 10) + 's';
    elements.petalsContainer.appendChild(petal);
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
  document.getElementById('share-instagram').addEventListener('click', () => shareResult('instagram'));
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
  elements.questionCounter.textContent = `Question ${currentQuestionIndex + 1} / ${questions.length}`;
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
            <span>${type === 'love' ? '💗' : '💎'}</span> 相性の理由
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
    { key: 'AR', left: 'Reserved (控えめ)', right: 'Active (積極的)', color: '#ff6b9d' },
    { key: 'EL', left: 'Logical (理性)', right: 'Emotional (感情)', color: '#a78bfa' },
    { key: 'PS', left: 'Steady (安定)', right: 'Passionate (情熱)', color: '#f97316' },
    { key: 'VC', left: 'Conservative (堅実)', right: 'Venturous (冒険)', color: '#06b6d4' }
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
  
  const shareText = `💖 Love Spectrum診断の結果は「${result.data.name}」でした！\n${result.data.emoji} タイプ: ${result.type}\n\nあなたも診断してみてね✨`;
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
    case 'instagram':
      navigator.clipboard.writeText(shareText + '\n' + shareUrl).then(() => {
        alert('📋 テキストをコピーしました！\n\nInstagramのストーリーやキャプションに貼り付けてシェアしてね💕');
      });
      return;
  }
  
  window.open(url, '_blank', 'width=600,height=400');
}

// ==========================================
// Start App
// ==========================================
document.addEventListener('DOMContentLoaded', init);
