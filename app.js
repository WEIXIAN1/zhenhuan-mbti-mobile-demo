const traits = {
  Ni: "内倾直觉 Ni",
  Ne: "外倾直觉 Ne",
  Si: "内倾感觉 Si",
  Se: "外倾感觉 Se",
  Ti: "内倾思维 Ti",
  Te: "外倾思维 Te",
  Fi: "内倾情感 Fi",
  Fe: "外倾情感 Fe",
};

const functionBrief = {
  Ni: "先看隐藏动机、长期后果和局势走向",
  Ne: "快速寻找多种可能和反转机会",
  Si: "参考旧例、身份秩序和既有经验",
  Se: "抓住现场变化，直接行动压住局面",
  Ti: "拆逻辑、验规则，先问这个判断是否成立",
  Te: "看结果、证据和可执行步骤",
  Fi: "守住自我价值与内在底线",
  Fe: "读气氛、顾关系，维持场面与人心",
};

const choiceFunctionMap = {
  insight: ["Ni"],
  boundary: ["Fi", "Te"],
  evidence: ["Ti", "Te"],
  decisive: ["Te", "Se"],
  empathy: ["Fe", "Fi"],
  strategy: ["Ni", "Te"],
};

const typeStacks = {
  INFJ: ["Ni", "Fe", "Ti", "Se"],
  ENFJ: ["Fe", "Ni", "Se", "Ti"],
  INFP: ["Fi", "Ne", "Si", "Te"],
  ENFP: ["Ne", "Fi", "Te", "Si"],
  INTJ: ["Ni", "Te", "Fi", "Se"],
  ENTJ: ["Te", "Ni", "Se", "Fi"],
  INTP: ["Ti", "Ne", "Si", "Fe"],
  ENTP: ["Ne", "Ti", "Fe", "Si"],
  ISFJ: ["Si", "Fe", "Ti", "Ne"],
  ESFJ: ["Fe", "Si", "Ne", "Ti"],
  ISTJ: ["Si", "Te", "Fi", "Ne"],
  ESTJ: ["Te", "Si", "Ne", "Fi"],
  ISFP: ["Fi", "Se", "Ni", "Te"],
  ESFP: ["Se", "Fi", "Te", "Ni"],
  ISTP: ["Ti", "Se", "Ni", "Fe"],
  ESTP: ["Se", "Ti", "Fe", "Ni"],
};

const mbtiCast = [
  {
    mbti: "INFJ",
    character: "甄嬛",
    title: "清醒谋局者",
    id: "zhenhuan",
    portrait: 0,
    sprite: "zhenhuan",
    virtues: ["insight", "strategy", "boundary"],
    trait: "看懂局势，也能在心软之前先留证据。",
  },
  {
    mbti: "ENTJ",
    character: "华妃",
    title: "压场执行官",
    id: "huafei",
    portrait: 1,
    sprite: "huafei",
    virtues: ["decisive", "boundary", "strategy"],
    trait: "气势先到，决定后到，最会把场面压回自己手里。",
  },
  {
    mbti: "INFP",
    character: "安陵容",
    title: "高敏感观察者",
    id: "anlingrong",
    portrait: 2,
    sprite: "anlingrong",
    virtues: ["insight", "empathy", "evidence"],
    trait: "容易受伤，也最能捕捉别人一句话里的风向。",
  },
  {
    mbti: "ESTJ",
    character: "皇后",
    title: "规则掌控者",
    id: "queen",
    portrait: 3,
    virtues: ["strategy", "evidence", "decisive"],
    trait: "擅长制度、流程和长期伏笔，强项是让局面看起来合规。",
  },
  {
    mbti: "ENFJ",
    character: "沈眉庄",
    title: "温柔骨气派",
    id: "meizhuang",
    portrait: 4,
    virtues: ["empathy", "boundary", "decisive"],
    trait: "温柔不是软弱，关键时刻会把体面和底线一起守住。",
  },
  {
    mbti: "ENTP",
    character: "曹琴默",
    title: "话术拆局师",
    id: "caoqinmo",
    portrait: 5,
    virtues: ["insight", "strategy", "evidence"],
    trait: "最会借别人的话开路，也最会让问题自己浮上来。",
  },
  {
    mbti: "ESTP",
    character: "祺贵人",
    title: "现场冲锋型",
    id: "qiguiren",
    portrait: 6,
    virtues: ["decisive", "boundary", "insight"],
    trait: "敢冲敢说，学习重点是把火力对准证据，而不是情绪。",
  },
  {
    mbti: "ISTJ",
    character: "敬妃",
    title: "稳定秩序派",
    id: "jingfei",
    portrait: 7,
    virtues: ["evidence", "strategy", "empathy"],
    trait: "不抢风头，但会把人和事都安放在最稳的位置。",
  },
  {
    mbti: "ISFJ",
    character: "槿汐",
    title: "关系护城河",
    id: "jinxi",
    portrait: 8,
    virtues: ["empathy", "evidence", "strategy"],
    trait: "能照顾情绪，也懂得把退路提前铺好。",
  },
  {
    mbti: "ENFP",
    character: "果郡王",
    title: "自由理想家",
    id: "guojunwang",
    portrait: 9,
    virtues: ["empathy", "decisive", "boundary"],
    trait: "真诚、行动快，强项是在冷宫规则外看见活路。",
  },
  {
    mbti: "ESFP",
    character: "淳贵人",
    title: "气氛回血包",
    id: "chuner",
    portrait: 15,
    virtues: ["empathy", "insight", "boundary"],
    trait: "轻松感是天赋，进阶后能用天真化解紧张。",
  },
  {
    mbti: "INTJ",
    character: "端妃",
    title: "长期伏线家",
    id: "duanfei",
    portrait: 12,
    virtues: ["strategy", "insight", "evidence"],
    trait: "忍得住，也等得起，擅长把十年前的线留到今天收。",
  },
  {
    mbti: "INTP",
    character: "温实初",
    title: "证据洁癖师",
    id: "wenshichu",
    portrait: 10,
    virtues: ["evidence", "insight", "empathy"],
    trait: "用专业和证据抵抗混乱，是后宫里少见的理性锚点。",
  },
  {
    mbti: "ISTP",
    character: "叶澜依",
    title: "独行反骨派",
    id: "yelanli",
    portrait: 14,
    virtues: ["decisive", "boundary", "insight"],
    trait: "不爱解释，也不被关系绑架，行动像刀一样干净。",
  },
  {
    mbti: "ESFJ",
    character: "苏培盛",
    title: "场面润滑剂",
    id: "supeisheng",
    portrait: 11,
    virtues: ["empathy", "strategy", "evidence"],
    trait: "知道每句话该递给谁，也知道什么时候装作没听见。",
  },
  {
    mbti: "ISFP",
    character: "浣碧",
    title: "自我确认型",
    id: "huanbi",
    portrait: 13,
    virtues: ["boundary", "empathy", "decisive"],
    trait: "渴望被看见，进阶点是把情绪转成清楚的选择。",
  },
];

mbtiCast.forEach((item) => {
  item.stack = typeStacks[item.mbti];
  item.virtues = item.stack.slice(0, 2);
  item.trait = `荣格功能栈：主导 ${traits[item.stack[0]]}，辅助 ${traits[item.stack[1]]}。${item.trait}`;
});

const byId = Object.fromEntries(mbtiCast.map((item) => [item.id, item]));

const statMeta = [
  { key: "heart", label: "帝心" },
  { key: "prestige", label: "威信" },
  { key: "clarity", label: "清醒" },
];

const state = {
  currentIndex: 2,
  targetIndex: 0,
  roundIndex: 0,
  rounds: [],
  stats: { heart: 46, prestige: 42, clarity: 44 },
  traitScores: makeTraitScores(),
  xp: 0,
  recaps: [],
  activeSpeakerId: "zhenhuan",
};

let typingTimer = null;
let isTyping = false;
let fullDialogueText = "";
let afterTyping = null;

const $ = (selector) => document.querySelector(selector);

const el = {
  currentTypeGrid: $("#currentTypeGrid"),
  targetGrid: $("#targetGrid"),
  startBtn: $("#startBtn"),
  menuBtn: $("#menuBtn"),
  chapterName: $("#chapterName"),
  sceneName: $("#sceneName"),
  statStrip: $("#statStrip"),
  playSceneBg: $("#playSceneBg"),
  palacePlaque: $("#palacePlaque"),
  goalAvatar: $("#goalAvatar"),
  goalName: $("#goalName"),
  goalTrait: $("#goalTrait"),
  analysisPanel: $("#analysisPanel"),
  analysisVerdict: $("#analysisVerdict"),
  analysisScore: $("#analysisScore"),
  analysisBody: $("#analysisBody"),
  feedbackToast: $("#feedbackToast"),
  speakerAvatar: $("#speakerAvatar"),
  speakerName: $("#speakerName"),
  roundTag: $("#roundTag"),
  dialogueText: $("#dialogueText"),
  choicePanel: $("#choicePanel"),
  nextBtn: $("#nextBtn"),
  reportAvatar: $("#reportAvatar"),
  reportTitle: $("#reportTitle"),
  reportSubtitle: $("#reportSubtitle"),
  compatScore: $("#compatScore"),
  radarBars: $("#radarBars"),
  shareLine: $("#shareLine"),
  recapList: $("#recapList"),
  growthBox: $("#growthBox"),
  copyLinkBtn: $("#copyLinkBtn"),
  againBtn: $("#againBtn"),
  copyStatus: $("#copyStatus"),
};

const spriteEls = {
  zhenhuan: $("#sprite-zhenhuan"),
  anlingrong: $("#sprite-anlingrong"),
  huafei: $("#sprite-huafei"),
  emperor: $("#sprite-emperor"),
};

function init() {
  renderMenu();
  bindEvents();
  const shared = parseShareHash();
  if (shared) {
    applySharedReport(shared);
    showScreen("report");
  }
}

function bindEvents() {
  el.startBtn.addEventListener("click", startGame);
  el.menuBtn.addEventListener("click", () => showScreen("menu"));
  el.nextBtn.addEventListener("click", nextRound);
  el.againBtn.addEventListener("click", () => {
    history.replaceState(null, "", location.href.split("#")[0]);
    renderMenu();
    showScreen("menu");
  });
  el.copyLinkBtn.addEventListener("click", copyShareLink);
}

function renderMenu() {
  el.currentTypeGrid.innerHTML = mbtiCast
    .map(
      (item, index) => `
        <button class="type-chip ${index === state.currentIndex ? "is-selected" : ""}" data-current="${index}" type="button">
          ${item.mbti}
        </button>
      `,
    )
    .join("");

  el.targetGrid.innerHTML = mbtiCast
    .map(
      (item, index) => `
        <button class="target-card ${index === state.targetIndex ? "is-selected" : ""}" data-target="${index}" type="button">
          <span class="avatar atlas-avatar" style="${atlasStyle(item.portrait)}"></span>
          <strong>${item.character} · ${item.mbti}</strong>
          <span>${item.title}</span>
        </button>
      `,
    )
    .join("");

  el.currentTypeGrid.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.currentIndex = Number(button.dataset.current);
      renderMenu();
    });
  });

  el.targetGrid.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.targetIndex = Number(button.dataset.target);
      renderMenu();
    });
  });
}

function startGame() {
  state.roundIndex = 0;
  state.rounds = buildRounds();
  state.stats = { heart: 46, prestige: 42, clarity: 44 };
  state.traitScores = makeTraitScores();
  state.xp = 0;
  state.recaps = [];
  renderGoal();
  renderRound();
  showScreen("play");
}

function buildRounds() {
  const rounds = [
    {
      title: "选秀殿前",
      scene: "安陵容被刁难",
      speaker: "旁白",
      speakerId: "zhenhuan",
      text: "选秀殿外，安陵容被世家小姐当众为难。你知道，此刻站出去会惹事，不站出去也会让她记住这份孤立。",
      cast: { center: "zhenhuan", right: "anlingrong" },
      focus: "zhenhuan",
      choices: [
        makeChoice("垂眸不语", "你低头退半步，只当没有看见。", ["strategy"], -1, { heart: 0, prestige: -4, clarity: 2 }, "安陵容的眼神暗了一下。殿外风声很轻，这场孤立却被所有人默许了。"),
        makeChoice("当面顶回去", "你笑着问那位小姐：今日入宫，是来选秀，还是来审人家世？", ["decisive", "boundary"], 1, { heart: -2, prestige: 5, clarity: -2 }, "人群发出细碎吸气声。安陵容得救了，你的名字也被推到灯下。"),
        makeChoice("伸手相邀", "你走到安陵容身边，只说：姐姐若不嫌弃，与我和眉姐姐同坐吧。", ["empathy", "strategy", "boundary"], 3, { heart: 4, prestige: 7, clarity: 6 }, "安陵容攥紧帕子，终于敢抬眼。你没赢一场嘴仗，却多了一个记恩的人。"),
      ],
    },
    {
      title: "倚梅园",
      scene: "小像遗失与余氏冒名",
      speaker: "甄嬛",
      speakerId: "zhenhuan",
      text: "雪夜倚梅园，有人念出“逆风如解意，容易莫摧残”。小像遗失后，余氏却因这句诗得了宠。",
      cast: { center: "zhenhuan", right: "emperor" },
      focus: "zhenhuan",
      choices: [
        makeChoice("认下那夜", "你上前一步：那夜在梅园的人，并非余氏。", ["decisive"], 1, { heart: 7, prestige: -3, clarity: -4 }, "皇上的目光立刻落在你身上。你拿回了诗，也把自己放到了众人眼前。"),
        makeChoice("任她唱完", "你轻轻合上窗，只让余氏继续在风口上站着。", ["strategy"], 2, { heart: -2, prestige: 1, clarity: 5 }, "余氏的风光越盛，旁人的嫉恨越深。你暂时隐身，也暂时失去主动。"),
        makeChoice("夜问槿汐", "你不争那一句诗，只问槿汐：小像最后经了谁的手？", ["evidence", "strategy", "insight"], 3, { heart: 1, prestige: 5, clarity: 9 }, "槿汐低声应下。雪还在下，你手里终于不只有委屈，还有线头。"),
      ],
    },
    {
      title: "翊坤宫前",
      scene: "华妃一丈红",
      speaker: "华妃",
      speakerId: "huafei",
      text: "翊坤宫里，华妃冷冷一句：“翠果，打烂她的嘴。”全场都知道，这不是惩罚一个人，是让所有人看见权势。",
      cast: { center: "zhenhuan", right: "huafei" },
      focus: "huafei",
      choices: [
        makeChoice("随众跪下", "你随众跪下，低声称娘娘息怒。", ["strategy"], 0, { heart: -2, prestige: -2, clarity: -3 }, "华妃没有看你。你安全地退入人群，也把自己退成了背景。"),
        makeChoice("抬头劝一句", "你低声道：娘娘今日若动怒，倒叫旁人看了笑话。", ["empathy", "boundary"], 2, { heart: -4, prestige: 5, clarity: 3 }, "华妃眼尾扫过来。你没有救下所有人，却让她第一次记住你的胆子。"),
        makeChoice("递上台阶", "你看向门外：若惊动皇上，怕有人借此说娘娘御下过严。", ["insight", "strategy", "evidence"], 3, { heart: 2, prestige: 6, clarity: 8 }, "华妃的手停住。她不是被你劝软，而是被你提醒了输赢。"),
      ],
    },
    {
      title: "冷宫",
      scene: "余氏赐死前",
      speaker: "余氏",
      speakerId: "qiguiren",
      text: "余氏不肯就死，哭喊自己只是被人推上来的棋子。她恨你，也可能知道背后还有谁。",
      cast: { center: "zhenhuan", right: "anlingrong" },
      focus: "zhenhuan",
      choices: [
        makeChoice("厉声逼问", "你命人按住她：说，是谁教你下药？", ["decisive"], 1, { heart: -3, prestige: 5, clarity: -4 }, "余氏尖声大笑，骂得更凶。恐惧没有开口，只变成了反咬。"),
        makeChoice("转身离开", "你不再看她，只吩咐照旨行事。", ["boundary"], 1, { heart: 1, prestige: -2, clarity: -2 }, "冷宫门慢慢合上。你切断了麻烦，也切断了她最后可能吐出的线索。"),
        makeChoice("俯身问她", "你让众人退半步，只问她：你真以为，自己是凭本事走到今日？", ["empathy", "evidence", "insight"], 3, { heart: 3, prestige: 4, clarity: 10 }, "余氏的哭声顿住。她第一次不是看着你，而是看向自己身后的黑影。"),
      ],
    },
    {
      title: "夜宴",
      scene: "惊鸿舞被点名",
      speaker: "曹琴默",
      speakerId: "caoqinmo",
      text: "纸签落下，众人要你跳惊鸿舞。所有人都知道，这不是表演，是拿纯元旧影来试你。",
      cast: { center: "zhenhuan", right: "huafei" },
      focus: "zhenhuan",
      choices: [
        makeChoice("推说不敢", "你福身：臣妾不敢与故人相比。", ["boundary"], 1, { heart: -2, prestige: -3, clarity: 2 }, "席间有人轻笑。你避开了陷阱，也把怯意留给了旁人编排。"),
        makeChoice("照谱起舞", "你按旧谱起势，步步求稳，不肯出错。", ["decisive"], 1, { heart: 5, prestige: 1, clarity: -2 }, "舞是美的，可众人看见的不是你，是那个被反复提起的影子。"),
        makeChoice("借舞换意", "你接过笛声，把旧舞转成雪中梅影。", ["strategy", "insight", "boundary"], 3, { heart: 7, prestige: 9, clarity: 8 }, "风声与笛声一并抬起。你没有和纯元争，反而让众人看见了你。"),
      ],
    },
    {
      title: "存菊堂",
      scene: "眉庄假孕风波",
      speaker: "沈眉庄",
      speakerId: "meizhuang",
      text: "眉庄被假孕局拖入深水。她最需要的不是一句“我信你”，而是能让她活下来的证据。",
      cast: { center: "zhenhuan", right: "anlingrong" },
      focus: "zhenhuan",
      choices: [
        makeChoice("只握住她", "你握住眉庄的手，说我信你。", ["empathy"], 1, { heart: 1, prestige: -2, clarity: -3 }, "眉庄眼眶发红。她得到了你的心，却还没有得到能翻案的路。"),
        makeChoice("清宫查人", "你命人关门，把她宫里近身伺候的人一个个问过去。", ["decisive", "evidence"], 2, { heart: -1, prestige: 4, clarity: 3 }, "宫人们开始发抖。动静太大，真正布子的人也会听见风声。"),
        makeChoice("一明一暗", "你留下陪她说话，暗里让人去查药方、太医和传话的人。", ["empathy", "evidence", "strategy"], 3, { heart: 3, prestige: 6, clarity: 9 }, "眉庄慢慢稳住呼吸。友情在明处撑着她，证据在暗处往回走。"),
      ],
    },
    {
      title: "封妃大典",
      scene: "菀菀类卿",
      speaker: "皇上",
      speakerId: "emperor",
      text: "旧衣一穿，“菀菀类卿”四个字像冷水落下。你终于明白，宠爱也可能只是替身的灯。",
      cast: { center: "zhenhuan", right: "emperor" },
      focus: "emperor",
      choices: [
        makeChoice("忍下旧衣", "你把衣袖理平，仍照礼谢恩。", ["strategy"], 1, { heart: 2, prestige: -4, clarity: -5 }, "殿里恢复了体面。可那件衣裳像一层影子，继续披在你身上。"),
        makeChoice("当场追问", "你抬头问皇上：臣妾在您心里，究竟是谁？", ["boundary", "decisive"], 2, { heart: -8, prestige: 4, clarity: 2 }, "皇上的神色冷下来。你说出了真话，也把伤口摊在了最冷的地方。"),
        makeChoice("转身离局", "你轻声说，臣妾做不到，然后把那件旧衣留在殿中。", ["boundary", "insight", "decisive"], 3, { heart: -3, prestige: 8, clarity: 10 }, "没有高声争辩，反而让殿里安静得可怕。你先把自己从影子里带走了。"),
      ],
    },
    {
      title: "甘露寺后",
      scene: "熹妃回宫谈判",
      speaker: "甄嬛",
      speakerId: "zhenhuan",
      text: "你要回宫，但不只是回去被看见。你需要位分、盟友、孩子的安全，以及一条能走到终局的路。",
      cast: { center: "zhenhuan", right: "emperor" },
      focus: "zhenhuan",
      choices: [
        makeChoice("只求相见", "你只问皇上：可否接我回宫？", ["empathy"], 0, { heart: 7, prestige: -4, clarity: -4 }, "皇上心软了。可心软只是一扇门，门后仍是旧宫旧局。"),
        makeChoice("要回体面", "你说回宫可以，但位分、仪仗、宫室都不能含糊。", ["decisive", "boundary"], 2, { heart: -2, prestige: 7, clarity: 2 }, "声势回来了，旁人的眼睛也一并亮了起来。"),
        makeChoice("先定棋盘", "你没有急着点头，只把孩子、封号、宫人和盟友一件件放到桌上。", ["strategy", "evidence", "boundary"], 3, { heart: 4, prestige: 8, clarity: 9 }, "皇上听得沉默。你不是被接回去，是带着条件回去。"),
      ],
    },
    {
      title: "养心殿",
      scene: "滴血验亲",
      speaker: "祺贵人",
      speakerId: "qiguiren",
      text: "一碗水被端上来，质疑像刀一样指向孩子。越多人盯着你，越不能急着证明清白。",
      cast: { center: "zhenhuan", right: "emperor" },
      focus: "zhenhuan",
      choices: [
        makeChoice("哭着喊冤", "你跪下说自己清白，只求皇上信你。", ["empathy"], 0, { heart: -5, prestige: -4, clarity: -6 }, "祺贵人等的就是你慌。情分一旦被摆上审案桌，就轻得像纸。"),
        makeChoice("先斥诬告", "你转向祺贵人：若验不出，你可担得起欺君？", ["decisive", "boundary"], 2, { heart: -2, prestige: 5, clarity: 1 }, "祺贵人退了一步。你压住了她，却还没压住那碗水。"),
        makeChoice("盯住那碗水", "你没有碰孩子，只问：水从何处来，器具经了谁手？", ["evidence", "insight", "strategy"], 3, { heart: 4, prestige: 9, clarity: 12 }, "养心殿里忽然安静。你没有求情，而是让“验亲”本身开始站不稳。"),
      ],
    },
    {
      title: "景仁宫",
      scene: "皇后败露",
      speaker: "皇后",
      speakerId: "queen",
      text: "所有线索终于指向皇后。她仍站在规则中央，问你：没有实证，你凭什么定本宫的罪？",
      cast: { center: "zhenhuan", right: "emperor" },
      focus: "zhenhuan",
      choices: [
        makeChoice("痛快骂尽", "你把这些年的恨，一句一句砸到她面前。", ["decisive"], 1, { heart: -2, prestige: 4, clarity: -3 }, "皇后的眼神没有动。恨是真的，可恨不能自己变成判词。"),
        makeChoice("交给皇上", "你把证物呈上，只等皇上开口。", ["empathy", "evidence"], 2, { heart: 2, prestige: 1, clarity: 2 }, "皇上沉默得太久。最后一刀若交给旧情，刀锋也会迟疑。"),
        makeChoice("一层层收口", "你按时间、动机、证人、物证往前推，直到她再无一字可辩。", ["evidence", "strategy", "decisive"], 3, { heart: 1, prestige: 10, clarity: 10 }, "景仁宫的香炉还在冒烟。可这一刻，烟雾遮不住结论。"),
      ],
    },
  ];
  return enhanceRounds(rounds);
}

function makeChoice(label, text, choiceTraits, fit, delta, recap) {
  const functions = [...new Set(choiceTraits.flatMap((trait) => choiceFunctionMap[trait] || [trait]))];
  return { label, text, traits: functions, principles: choiceTraits, fit, delta, recap };
}

function enhanceRounds(rounds) {
  const palaces = ["储秀宫", "倚梅园", "翊坤宫", "冷宫", "夜宴殿", "存菊堂", "承乾宫", "甘露寺", "养心殿", "景仁宫"];
  const extraChoices = [
    makeChoice("先听风声", "你没有立刻开口，只先看皇后、太监和众秀女的脸色。", ["insight"], 1, { heart: 1, prestige: 0, clarity: 4 }, "你没有出头，也没有完全退开。局势被你看清了一点，但安陵容仍在原地发抖。"),
    makeChoice("借人传话", "你让流朱悄悄去问，余氏近日与谁走得最近。", ["evidence", "insight"], 2, { heart: 0, prestige: 2, clarity: 6 }, "话没有从你口中出去，消息却开始往你手里回。"),
    makeChoice("请皇后作主", "你不看华妃，只低声请皇后娘娘定夺。", ["strategy", "boundary"], 2, { heart: -1, prestige: 4, clarity: 4 }, "这句话把刀递给了更高的位置。华妃不悦，却不能当场说你错。"),
    makeChoice("问她想见谁", "你问余氏：若真要死个明白，最后想见谁？", ["empathy", "insight"], 2, { heart: 1, prestige: 1, clarity: 6 }, "余氏愣住了。一个名字差点从她嘴边滑出来，又被恐惧压了回去。"),
    makeChoice("请眉庄同舞", "你微笑请眉庄以酒盏击节，先把孤局变成合局。", ["empathy", "strategy"], 2, { heart: 4, prestige: 4, clarity: 4 }, "席间气氛松了一线。有人想看你独自出丑，你却把目光分了出去。"),
    makeChoice("先稳太医", "你不问眉庄，只先让人留住当日诊脉的太医。", ["evidence", "decisive"], 2, { heart: -1, prestige: 5, clarity: 5 }, "太医的脚步被拦住，假孕局第一次出现了可追的缺口。"),
    makeChoice("只问旧衣来处", "你没有落泪，只问这件衣裳是谁送来的。", ["evidence", "boundary"], 2, { heart: -2, prestige: 4, clarity: 6 }, "殿中没人料到你先问来源。悲伤被你按住，线索先浮了上来。"),
    makeChoice("先见槿汐", "你先不见皇上，只问槿汐：宫里如今谁最怕我回去？", ["insight", "strategy"], 2, { heart: 0, prestige: 4, clarity: 7 }, "回宫不再只是情分问题，而变成了一场重新排布。"),
    makeChoice("换一碗清水", "你请苏培盛另取清水，当众重置器具。", ["evidence", "decisive"], 3, { heart: 2, prestige: 7, clarity: 9 }, "那只旧碗忽然变得可疑。真正的审问，从水换掉的那一刻开始。"),
    makeChoice("让她自己说", "你不急着定罪，只请皇后把每一件事的解释自己说完。", ["strategy", "evidence"], 3, { heart: 1, prestige: 8, clarity: 9 }, "皇后的话越多，缝隙越多。你没有逼她，她却一步步走进自己铺的网。"),
  ];

  return rounds.map((round, index) => ({
    ...round,
    sceneArt: index,
    palace: palaces[index],
    choices: [...round.choices, extraChoices[index]],
  }));
}

function renderGoal() {
  const target = mbtiCast[state.targetIndex];
  setAtlas(el.goalAvatar, target.portrait);
  el.goalName.textContent = `${target.character} · ${target.mbti}`;
  el.goalTrait.textContent = target.trait;
}

function renderRound() {
  const round = state.rounds[state.roundIndex];
  if (!round) {
    renderReport();
    showScreen("report");
    return;
  }

  el.chapterName.textContent = `第 ${state.roundIndex + 1} / ${state.rounds.length} 轮`;
  el.sceneName.textContent = `${round.title} · ${round.scene}`;
  el.speakerName.textContent = round.speaker;
  el.roundTag.textContent = `名场面：${round.scene}`;
  el.palacePlaque.textContent = round.palace;
  state.activeSpeakerId = round.speakerId;
  setSpeakerAvatar(round.speakerId);
  setSceneArt(round.sceneArt);
  renderCast(round.cast, round.focus);
  renderStats();

  el.analysisPanel.hidden = true;
  el.nextBtn.hidden = true;
  el.choicePanel.hidden = true;
  el.choicePanel.innerHTML = "";
  typeDialogue(round.text, () => renderChoices(round));
}

function renderChoices(round) {
  const keys = ["A", "B", "C", "D"];
  el.choicePanel.hidden = false;
  el.choicePanel.innerHTML = round.choices
    .map(
      (choice, index) => `
        <button class="choice-btn" data-choice="${index}" type="button">
          <span><i class="choice-key">${keys[index]}</i>${choice.text}</span>
        </button>
      `,
    )
    .join("");

  el.choicePanel.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => chooseOption(Number(button.dataset.choice)));
  });
}

function chooseOption(choiceIndex) {
  const round = state.rounds[state.roundIndex];
  const choice = round.choices[choiceIndex];
  const target = mbtiCast[state.targetIndex];
  const alignment = scoreChoiceForTarget(choice, target);
  const gained = Math.round(alignment / 5);

  applyDelta(choice.delta);
  choice.traits.forEach((trait) => {
    state.traitScores[trait] += choice.fit * 6 + getFunctionWeight(trait, target);
  });
  state.xp += gained;
  const feedback = buildMbtiFeedback(round, choice, alignment);
  state.recaps.push({
    round: round.scene,
    label: choice.label,
    recap: choice.recap,
    traits: choice.traits,
    gained,
    alignment,
    feedback: feedback.short,
  });

  state.roundIndex += 1;
  renderChoiceFeedback(round, choice, feedback);
}

function nextRound() {
  if (isTyping) {
    finishTyping();
    return;
  }
  renderRound();
}

function renderChoiceFeedback(round, choice, feedback) {
  el.chapterName.textContent = `第 ${Math.min(state.roundIndex, state.rounds.length)} / ${state.rounds.length} 轮`;
  el.sceneName.textContent = `${round.title} · 分支回响`;
  el.speakerName.textContent = round.speaker;
  el.roundTag.textContent = `分支回响`;
  el.palacePlaque.textContent = round.palace;
  state.activeSpeakerId = round.speakerId;
  setSpeakerAvatar(round.speakerId);
  setSceneArt(round.sceneArt);
  renderCast(round.cast, round.focus);
  renderStats();
  el.choicePanel.hidden = true;
  el.choicePanel.innerHTML = "";
  el.nextBtn.hidden = false;
  el.nextBtn.textContent = state.roundIndex >= state.rounds.length ? "查看报告" : "进入下一幕";
  renderAnalysisPanel(feedback);
  typeDialogue(choice.recap);
}

function renderAnalysisPanel(feedback) {
  el.analysisPanel.hidden = false;
  el.analysisVerdict.textContent = feedback.verdict;
  el.analysisScore.textContent = `契合 ${feedback.alignment}% · 差 ${feedback.gap}%`;
  el.analysisBody.innerHTML = `
    <div class="analysis-meter" aria-label="目标人格契合度 ${feedback.alignment}%">
      <i style="width:${feedback.alignment}%"></i>
    </div>
    <p><b>目标人格会先看</b>${feedback.targetThinking}</p>
    <p><b>如果按 TA 的思路</b>${feedback.targetChoice}</p>
    <p><b>你这次的路径</b>${feedback.yourChoice}</p>
    <p><b>名场面推理</b>${feedback.sceneReason}</p>
    <small>${feedback.note}</small>
  `;
}

function scoreChoiceForTarget(choice, target) {
  const weights = [34, 26, 16, 8];
  const stackScore = choice.traits.reduce((sum, fn) => sum + getFunctionWeight(fn, target), 0);
  const fitScore = choice.fit * 11;
  return clamp(Math.round(18 + fitScore + stackScore), 0, 100);
}

function getFunctionWeight(fn, target) {
  const index = target.stack.indexOf(fn);
  if (index === -1) return 4;
  return [34, 26, 16, 8][index];
}

function getTargetChoice(round, target) {
  return round.choices
    .slice()
    .sort((a, b) => scoreChoiceForTarget(b, target) - scoreChoiceForTarget(a, target))[0];
}

function buildMbtiFeedback(round, choice, alignment) {
  const target = mbtiCast[state.targetIndex];
  const ideal = getTargetChoice(round, target);
  const gap = clamp(100 - alignment, 0, 100);
  const verdict = ideal === choice ? "接近目标人格" : "与目标人格存在偏差";
  const dominant = target.stack[0];
  const auxiliary = target.stack[1];
  const used = choice.traits.map((fn) => traits[fn]).join("、");
  const idealUsed = ideal.traits.map((fn) => traits[fn]).join("、");
  const lesson = sceneLessons[round.scene] || "这个场景考验的是在压力下如何选择信息、关系和行动顺序。";
  const targetThinking = `${target.mbti} 通常先动用 ${traits[dominant]}，再由 ${traits[auxiliary]} 辅助。`;
  const targetChoice = `放在“${round.scene}”里，${target.character} 更可能选择「${ideal.label}」：${ideal.text}`;
  const yourChoice = `你选择了「${choice.label}」，主要动用了 ${used}。它不是绝对错误，但和目标选择里的 ${idealUsed} 不完全一致。`;
  const note = "这里用 MBTI / 荣格功能作为大众化性格理解框架，不是临床诊断；重点是模拟“另一种人会优先看见什么”。";

  return {
    short: `${verdict}：本题契合度 ${alignment}%，差距 ${gap}%。`,
    verdict,
    alignment,
    gap,
    targetThinking,
    targetChoice,
    yourChoice,
    sceneReason: lesson,
    note,
    body: `【${verdict}】本题契合度 ${alignment}%，与 ${target.character}（${target.mbti}）差 ${gap}%。

【目标人格会怎么想】${targetThinking} ${targetChoice}

【你的选择】${yourChoice}

【情景推理】${lesson}

提示：${note}`,
  };
}

const sceneLessons = {
  安陵容被刁难: "甄嬛与沈眉庄的关系让她天然重视“人心结盟”。INFJ 视角不会只看眼前口舌输赢，而会判断：救下安陵容，会不会形成后续的人情与联盟。",
  小像遗失与余氏冒名: "这个场景不是争一句诗，而是判断信息链。偏 Ni/Te 的人会先问“谁拿走小像、谁因此获益、后续证据在哪里”。",
  华妃一丈红: "华妃是强势压场型，目标人格若偏 Fe/Ni，会先读全场气氛，再寻找既不正面硬撞、又能改变权力成本的说法。",
  余氏赐死前: "冷宫场景考验的是情绪和信息的分离。只发怒会让线索断掉，只同情又会失去边界，成熟做法是让对方情绪降到能吐出信息。",
  惊鸿舞被点名: "惊鸿舞是身份投射题：别人想让你活在纯元影子里。Ni/Fi 或 Ni/Fe 的解法，是承认场域规则，再改写意义归属。",
  眉庄假孕风波: "沈眉庄与甄嬛的亲密关系会让人先想安慰，但宫斗局里，Fe 的安抚必须接上 Ti/Te 的证据链，友情才有现实保护力。",
  菀菀类卿: "这题考验自我边界。若目标人格强调 Fi 或 Ni，会先识别“我被当作谁的替身”，再决定是否继续留在这套叙事里。",
  熹妃回宫谈判: "回宫不是恋爱复合，而是资源再配置。偏 J 的人格会把名分、孩子、宫人、盟友一起谈清楚，避免之后被动补救。",
  滴血验亲: "滴血验亲看似考验清白，实则考验验证规则。偏 Ti/Te 的人格会先拆水、器具、流程和见证人，而不是急着求信任。",
  皇后败露: "皇后长期依靠规则与名分自保。要击穿她，不能只靠情绪控诉，而要让动机、证人、物证形成闭环。",
};

function renderReport(data = getReportData()) {
  const target = mbtiCast[data.targetIndex];
  const current = mbtiCast[data.currentIndex];
  const score = data.score;
  const missing = getMissingTraits(data.traitScores, target);
  const best = data.recaps
    .slice()
    .sort((a, b) => b.gained - a.gained)
    .slice(0, 3);

  setAtlas(el.reportAvatar, target.portrait);
  el.reportTitle.textContent = `${current.mbti} 的你，距离 ${target.character} 还有 ${100 - score}%`;
  el.reportSubtitle.textContent = `目标人格：${target.character} · ${target.mbti} · ${target.title}`;
  el.compatScore.textContent = `${score}%`;
  document.documentElement.style.setProperty("--score-angle", `${Math.round(score * 3.6)}deg`);

  el.radarBars.innerHTML = renderRadar(data.traitScores, target);

  el.recapList.innerHTML = data.recaps
    .map(
      (item, index) => `
        <div class="recap-item">
          <strong>${index + 1}. ${item.round} · ${item.label} · 契合 ${item.alignment ?? item.gained * 5}%</strong>
          ${item.feedback || item.recap}
        </div>
      `,
    )
    .join("");

  el.growthBox.innerHTML =
    missing.length > 0
      ? `你最接近 ${target.character} 的名场面是：${best.map((item) => item.round).join("、")}。<br>下一步要补的是目标功能栈里的：${missing.map((key) => traits[key]).join("、")}。`
      : `这一局已经覆盖 ${target.character} 的前两位功能：${target.virtues.map((key) => traits[key]).join("、")}。`;

  el.shareLine.textContent = makeShareCopy(data);
  updateShareHash(data);
  el.copyStatus.textContent = "";
}

function renderRadar(scores, target) {
  const keys = Object.keys(traits);
  const center = { x: 160, y: 150 };
  const radius = 94;
  const playerPoints = keys.map((key, index) =>
    radarPoint(index, keys.length, clamp(scores[key] || 0, 0, 100), center, radius),
  );
  const targetPoints = keys.map((key, index) => {
    const stackIndex = target.stack.indexOf(key);
    const value = stackIndex === -1 ? 12 : [96, 80, 45, 25][stackIndex];
    return radarPoint(index, keys.length, value, center, radius);
  });
  const rings = [25, 50, 75, 100]
    .map((value) => {
      const points = keys.map((_, index) => radarPoint(index, keys.length, value, center, radius));
      return `<polygon class="radar-grid" points="${pointsToString(points)}"></polygon>`;
    })
    .join("");
  const axes = keys
    .map((key, index) => {
      const end = radarPoint(index, keys.length, 100, center, radius);
      const label = radarPoint(index, keys.length, 118, center, radius);
      return `
        <line class="radar-axis" x1="${center.x}" y1="${center.y}" x2="${end.x}" y2="${end.y}"></line>
        <text class="radar-label" x="${label.x}" y="${label.y}" text-anchor="middle" dominant-baseline="middle">${traits[key]}</text>
      `;
    })
    .join("");
  const dots = playerPoints
    .map((point) => `<circle class="radar-dot" cx="${point.x}" cy="${point.y}" r="4"></circle>`)
    .join("");

  return `
    <svg viewBox="0 0 320 300" role="img" aria-label="目标人格能力雷达图">
      ${rings}
      ${axes}
      <polygon class="radar-target" points="${pointsToString(targetPoints)}"></polygon>
      <polygon class="radar-player" points="${pointsToString(playerPoints)}"></polygon>
      ${dots}
    </svg>
    <div class="radar-legend">
      <span><i class="player-key"></i>本局表现</span>
      <span><i class="target-key"></i>目标人格</span>
    </div>
  `;
}

function radarPoint(index, total, value, center, radius) {
  const angle = -Math.PI / 2 + (index * Math.PI * 2) / total;
  const distance = (value / 100) * radius;
  return {
    x: Number((center.x + Math.cos(angle) * distance).toFixed(2)),
    y: Number((center.y + Math.sin(angle) * distance).toFixed(2)),
  };
}

function pointsToString(points) {
  return points.map((point) => `${point.x},${point.y}`).join(" ");
}

function getReportData() {
  return {
    currentIndex: state.currentIndex,
    targetIndex: state.targetIndex,
    score: calculateScore(),
    xp: state.xp,
    traitScores: state.traitScores,
    recaps: state.recaps,
  };
}

function applySharedReport(data) {
  state.currentIndex = data.currentIndex ?? state.currentIndex;
  state.targetIndex = data.targetIndex ?? state.targetIndex;
  renderReport(data);
}

function calculateScore() {
  const target = mbtiCast[state.targetIndex];
  const weights = [0.42, 0.32, 0.16, 0.1];
  const functionFit = target.stack.reduce(
    (sum, fn, index) => sum + clamp(state.traitScores[fn] || 0, 0, 100) * weights[index],
    0,
  );
  const progressBonus = Math.min(state.recaps.length * 2, 20);
  const raw = 18 + functionFit * 0.72 + progressBonus;
  return clamp(Math.round(raw), 18, 98);
}

function getMissingTraits(scores, target) {
  return target.virtues.filter((trait) => (scores[trait] || 0) < 58);
}

function makeShareCopy(data) {
  const current = mbtiCast[data.currentIndex];
  const target = mbtiCast[data.targetIndex];
  const top = data.recaps
    .slice()
    .sort((a, b) => b.gained - a.gained)[0];
  return `我用 ${current.mbti} 的自己挑战了“成为 ${target.character}”。目标人格契合度 ${data.score}%，最高光选择在【${top?.round || "名场面"}】：${top?.label || "稳住局面"}。`;
}

function updateShareHash(data) {
  const payload = encodeShare(data);
  history.replaceState(null, "", `#share=${payload}`);
}

async function copyShareLink() {
  const link = location.href;
  try {
    await navigator.clipboard.writeText(link);
    el.copyStatus.textContent = "可视化报告链接已复制。";
  } catch {
    el.copyStatus.textContent = link;
  }
}

function encodeShare(data) {
  const compact = {
    v: 2,
    c: data.currentIndex,
    t: data.targetIndex,
    s: data.score,
    x: data.xp,
    ts: data.traitScores,
    r: data.recaps.map((item) => ({
      round: item.round,
      label: item.label,
      recap: item.recap,
      gained: item.gained,
      alignment: item.alignment,
      feedback: item.feedback,
    })),
  };
  const json = JSON.stringify(compact);
  return btoa(unescape(encodeURIComponent(json)));
}

function parseShareHash() {
  if (!location.hash.startsWith("#share=")) return null;
  try {
    const compact = JSON.parse(decodeURIComponent(escape(atob(location.hash.slice(7)))));
    if (compact.v !== 2) return null;
    return {
      currentIndex: compact.c,
      targetIndex: compact.t,
      score: compact.s,
      xp: compact.x,
      traitScores: normalizeTraitScores(compact.ts),
      recaps: compact.r || [],
    };
  } catch {
    return null;
  }
}

function normalizeTraitScores(raw = {}) {
  const scores = makeTraitScores();
  Object.entries(raw || {}).forEach(([key, value]) => {
    if (key in scores) {
      scores[key] += value;
      return;
    }
    const mapped = choiceFunctionMap[key] || [];
    mapped.forEach((fn) => {
      scores[fn] += Math.round(value / mapped.length);
    });
  });
  return scores;
}

function applyDelta(delta) {
  Object.entries(delta).forEach(([key, value]) => {
    state.stats[key] = clamp(state.stats[key] + value, 0, 100);
  });
}

function renderStats() {
  const target = mbtiCast[state.targetIndex];
  const score = calculateScore();
  el.statStrip.innerHTML = `
    <div class="stat">
      <div class="stat-label"><span>目标</span><span>${target.mbti}</span></div>
      <div class="stat-track"><i style="width:100%"></i></div>
    </div>
    <div class="stat">
      <div class="stat-label"><span>主导</span><span>${target.stack[0]}</span></div>
      <div class="stat-track"><i style="width:72%"></i></div>
    </div>
    <div class="stat">
      <div class="stat-label"><span>契合</span><span>${score}%</span></div>
      <div class="stat-track"><i style="width:${score}%"></i></div>
    </div>
  `;
}

function renderCast(cast = {}, focus) {
  Object.entries(spriteEls).forEach(([actor, node]) => {
    node.className = "sprite";
    const position = Object.entries(cast).find(([, value]) => value === actor)?.[0];
    if (!position) return;
    node.classList.add("is-visible", `pos-${position}`);
    if (actor === focus) node.classList.add("is-focus");
  });
}

function setSceneArt(index = 0) {
  const col = index % 5;
  const row = Math.floor(index / 5);
  el.playSceneBg.style.setProperty("--scene-x", `${(col * 100) / 4}%`);
  el.playSceneBg.style.setProperty("--scene-y", `${row * 100}%`);
}

function setSpeakerAvatar(id) {
  const item = byId[id] || byId.zhenhuan;
  setAtlas(el.speakerAvatar, item.portrait);
}

function setAtlas(node, index) {
  node.style.cssText = atlasStyle(index);
}

function atlasStyle(index) {
  const col = index % 4;
  const row = Math.floor(index / 4);
  return `background-position:${(col * 100) / 3}% ${(row * 100) / 3}%;`;
}

function toggleSystemDrawer() {
  el.systemDrawer.hidden = !el.systemDrawer.hidden;
}

function toggleVoice() {
  audio.voiceOn = !audio.voiceOn;
  el.voiceBtn.classList.toggle("is-on", audio.voiceOn);
  el.voiceBtn.textContent = `配音：${audio.voiceOn ? "开" : "关"}`;
  if (!audio.voiceOn && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  if (audio.voiceOn && fullDialogueText) {
    speakLine(fullDialogueText);
  }
}

function toggleAmbience() {
  audio.ambienceOn = !audio.ambienceOn;
  el.ambienceBtn.classList.toggle("is-on", audio.ambienceOn);
  el.ambienceBtn.textContent = `宫声：${audio.ambienceOn ? "开" : "关"}`;
  if (audio.ambienceOn) {
    startAmbience();
  } else {
    stopAmbience();
  }
}

function speakLine(text) {
  if (!audio.voiceOn || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const profile = getVoiceProfile(state.activeSpeakerId);
  const utterance = new SpeechSynthesisUtterance(text.replace(/[“”]/g, ""));
  utterance.lang = "zh-CN";
  utterance.rate = profile.rate;
  utterance.pitch = profile.pitch;
  utterance.volume = 0.92;
  const voice = pickVoice(profile);
  if (voice) utterance.voice = voice;
  window.speechSynthesis.speak(utterance);
}

function getVoiceProfile(id) {
  const profiles = {
    zhenhuan: { rate: 0.86, pitch: 1.05, preference: ["xiaoxiao", "huihui", "ting"] },
    anlingrong: { rate: 0.8, pitch: 1.16, preference: ["xiaoyi", "yaoyao", "xiaoxiao"] },
    huafei: { rate: 0.9, pitch: 0.92, preference: ["xiaobei", "huihui", "ting"] },
    emperor: { rate: 0.86, pitch: 0.72, preference: ["yunjian", "kang", "zhiwei"] },
    queen: { rate: 0.82, pitch: 0.86, preference: ["huihui", "ting", "xiaoxiao"] },
  };
  return profiles[id] || { rate: 0.86, pitch: 0.98, preference: ["xiaoxiao", "huihui", "ting"] };
}

function pickVoice(profile) {
  const voices = window.speechSynthesis.getVoices();
  const zhVoices = voices.filter((voice) => /zh|cmn|Chinese/i.test(`${voice.lang} ${voice.name}`));
  const pool = zhVoices.length ? zhVoices : voices;
  return (
    pool.find((voice) =>
      profile.preference.some((needle) => voice.name.toLowerCase().includes(needle)),
    ) || pool[0]
  );
}

function saveGame() {
  const payload = {
    currentIndex: state.currentIndex,
    targetIndex: state.targetIndex,
    roundIndex: state.roundIndex,
    stats: state.stats,
    traitScores: state.traitScores,
    xp: state.xp,
    recaps: state.recaps,
  };
  localStorage.setItem("zhenhuan-mbti-save", JSON.stringify(payload));
  el.drawerNote.textContent = "已存档。下次可从卷宗里读档继续。";
}

function loadGame() {
  const raw = localStorage.getItem("zhenhuan-mbti-save");
  if (!raw) {
    el.drawerNote.textContent = "还没有存档。";
    return;
  }
  try {
    const payload = JSON.parse(raw);
    state.currentIndex = payload.currentIndex ?? state.currentIndex;
    state.targetIndex = payload.targetIndex ?? state.targetIndex;
    state.roundIndex = payload.roundIndex ?? 0;
    state.rounds = buildRounds();
    state.stats = payload.stats ?? { heart: 46, prestige: 42, clarity: 44 };
    state.traitScores = payload.traitScores ?? makeTraitScores();
    state.xp = payload.xp ?? 0;
    state.recaps = payload.recaps ?? [];
    renderGoal();
    renderRound();
    el.systemDrawer.hidden = true;
    showScreen("play");
  } catch {
    el.drawerNote.textContent = "存档损坏，读档失败。";
  }
}

function ensureAudioContext() {
  if (!window.AudioContext && !window.webkitAudioContext) return null;
  audio.context ??= new (window.AudioContext || window.webkitAudioContext)();
  if (audio.context.state === "suspended") audio.context.resume();
  return audio.context;
}

function startAmbience() {
  const context = ensureAudioContext();
  if (!context) return;
  if (audio.drone) return;
  audio.gain = context.createGain();
  audio.gain.gain.value = 0.025;
  audio.drone = context.createOscillator();
  audio.drone.type = "sine";
  audio.drone.frequency.value = 146.83;
  audio.drone.connect(audio.gain);
  audio.gain.connect(context.destination);
  audio.drone.start();
}

function stopAmbience() {
  if (!audio.drone) return;
  audio.drone.stop();
  audio.drone.disconnect();
  audio.gain.disconnect();
  audio.drone = null;
  audio.gain = null;
}

function playBranchSound(fit) {
  if (!audio.ambienceOn) return;
  const context = ensureAudioContext();
  if (!context) return;
  const osc = context.createOscillator();
  const gain = context.createGain();
  osc.type = fit >= 3 ? "triangle" : "sine";
  osc.frequency.value = fit >= 3 ? 523.25 : 196;
  gain.gain.setValueAtTime(0.001, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.06, context.currentTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.38);
  osc.connect(gain);
  gain.connect(context.destination);
  osc.start();
  osc.stop(context.currentTime + 0.42);
}

function typeDialogue(text, onDone = null) {
  window.clearInterval(typingTimer);
  fullDialogueText = text;
  afterTyping = onDone;
  isTyping = true;
  el.dialogueText.textContent = "";
  let index = 0;

  typingTimer = window.setInterval(() => {
    index += 1;
    el.dialogueText.textContent = fullDialogueText.slice(0, index);
    if (index >= fullDialogueText.length) finishTyping();
  }, 18);
}

function finishTyping() {
  window.clearInterval(typingTimer);
  el.dialogueText.textContent = fullDialogueText;
  isTyping = false;
  const callback = afterTyping;
  afterTyping = null;
  if (callback) callback();
}

function showScreen(name) {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.toggle("is-active", screen.dataset.screen === name);
  });
}

function makeTraitScores() {
  return Object.fromEntries(Object.keys(traits).map((key) => [key, 0]));
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

init();
