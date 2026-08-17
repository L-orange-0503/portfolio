const projects = [
  ['01','高校智慧门户设计','SMART PORTAL','设计图0.jpg'],
  ['02','智慧门户变量规范','DESIGN SYSTEM','1920w default · 变量规范化版.jpg'],
  ['03','卓越工程师学院综合管理平台','MANAGEMENT PLATFORM','河北石油.jpg'],
  ['04','河北石油职业技术大学门户','UNIVERSITY PORTAL','第二屏.jpg'],
  ['05','电子科技大学图书馆','LIBRARY SERVICE','上海电机.jpg'],
  ['06','上海电机学院图书馆','LIBRARY SERVICE','设计图 8.jpg'],
  ['07','沈阳师范大学门户','UNIVERSITY PORTAL','设计图 9.jpg'],
  ['08','高校数据驾驶舱','DATA EXPERIENCE','设计图 7.jpg'],
  ['09','校园文化主题门户','BRAND EXPERIENCE','设计图 6.jpg'],
  ['10','红色文化门户设计','VISUAL EXPLORATION','设计图 4.jpg'],
  ['11','学科服务门户','CONTENT EXPERIENCE','设计图✅.jpg'],
  ['12','招生与校企合作平台','SERVICE PLATFORM','设计图 5.jpg'],
  ['13','图书馆阅读服务门户','LIBRARY SERVICE','电子科技大学图书馆.jpg'],
  ['14','书院风格资源门户','VISUAL EXPLORATION','1920w default · 变量规范版.jpg'],
  ['15','校园服务聚合门户','SMART PORTAL','设计图 2.jpg'],
  ['16','蓝色科技主题门户','VISUAL EXPLORATION','设计图 3.jpg'],
  ['17','高校资讯与资源平台','CONTENT EXPERIENCE','沈阳师范.jpg'],
  ['18','多主题门户设计探索','VISUAL SYSTEM','1.jpg'],
  ['19','智慧教育服务门户','SMART PORTAL','设计图.jpg']
];
const asset = name => `./public/assets/${encodeURIComponent(name)}`;
const responsiveAsset = (id, width) => `./public/assets/responsive/${id}-${width}.jpg`;
const responsiveWorkImage = (project, alt, sizes) => `<img loading="lazy" decoding="async" fetchpriority="low" src="${responsiveAsset(project[0], 960)}" srcset="${responsiveAsset(project[0], 480)} 480w, ${responsiveAsset(project[0], 960)} 960w" sizes="${sizes}" alt="${alt}">`;
const jump = id => document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
const marquee = ([...projects,...projects,...projects]).map((p,i)=>`<figure class="marquee-tile">${responsiveWorkImage(p, `${p[1]}界面局部 ${i+1}`, '(max-width: 700px) 230px, 420px')}</figure>`).join('');
const services = [
  ['01','体验策略与信息架构','梳理复杂角色、服务入口与信息层级，让门户系统拥有清晰、可理解的使用路径。'],
  ['02','智慧门户与业务体验','面向教育数字化场景，完成门户、资源、图书馆与管理服务的端到端界面设计。'],
  ['03','视觉系统与设计规范','将品牌气质沉淀为界面语言、组件规则与变量体系，支撑多项目稳定复用。'],
  ['04','项目协同与质量管理','3 年团队管理经验，覆盖设计评审、项目协作、质量把控与规模化交付机制。'],
  ['05','AI 增强设计工作流','熟练使用 Codex、Stitch、Figma、Lovart 等工具，把探索、表达与交付连接起来。']
];
const selected = [
  [['01','山东财经大学AI财未来学习中心','SHANDONG UNIVERSITY OF FINANCE AND ECONOMICS · AI FUTURE LEARNING CENTER','1920w default · 变量规范化版.jpg'], 'https://51sdred9.mh.chaoxing.com/'],
  [['02','成都工贸职业技术学院未来学习中心','CHENGDU VOCATIONAL & TECHNICAL COLLEGE OF INDUSTRY · FUTURE LEARNING CENTER','第二屏.jpg'], 'https://ficp.fun/s/zDAdUa'],
  [['03','天津师范大学树人学堂','TIANJIN NORMAL UNIVERSITY · SHUREN ACADEMY','电子科技大学图书馆.jpg'], 'https://53i91uz6.mh.chaoxing.com/']
];
const projectTypeZh = {
  'SMART PORTAL': '智慧门户',
  'DESIGN SYSTEM': '设计系统',
  'MANAGEMENT PLATFORM': '管理平台',
  'UNIVERSITY PORTAL': '高校门户',
  'LIBRARY SERVICE': '图书馆服务',
  'DATA EXPERIENCE': '数据体验',
  'BRAND EXPERIENCE': '品牌体验',
  'VISUAL EXPLORATION': '视觉探索',
  'CONTENT EXPERIENCE': '内容体验',
  'SERVICE PLATFORM': '服务平台',
  'VISUAL SYSTEM': '视觉系统'
};
const indexTitleOverrides = {
  '01': '山东财经大学未来学习中心',
  '02': '成都工贸职业学院未来学习中心',
  '03': '河北石油职业技术大学图书馆',
  '05': '上海电机学院图书馆',
  '06': '江西财经大学一体化平台',
  '07': '淮阴师范学院智慧课程平台',
  '08': '首都经济贸易大学图书馆',
  '09': '上海视觉艺术学院图书馆',
  '10': '北京交通职业运输学院图书馆',
  '11': '成都理工大学教发平台',
  '12': '河南测绘职业学院图书馆',
  '13': '电子科技大学图书馆',
  '14': '卓越工程师学院综合管理平台',
  '15': '国际大学生配音大赛',
  '16': '哈尔滨工程大学教发平台',
  '17': '沈阳师范大学图书馆',
  '18': '同济大学教发中心',
  '19': '石河子大学图书馆'
};
const indexTitleEn = {
  '01': 'SHANDONG UNIVERSITY OF FINANCE AND ECONOMICS · FUTURE LEARNING CENTER',
  '02': 'CHENGDU VOCATIONAL & TECHNICAL COLLEGE OF INDUSTRY · FUTURE LEARNING CENTER',
  '03': 'HEBEI PETROLEUM UNIVERSITY OF TECHNOLOGY · LIBRARY',
  '05': 'SHANGHAI DIANJI UNIVERSITY · LIBRARY',
  '06': 'JIANGXI UNIVERSITY OF FINANCE AND ECONOMICS · INTEGRATED PLATFORM',
  '07': 'HUAIYIN NORMAL UNIVERSITY · SMART COURSE PLATFORM',
  '08': 'CAPITAL UNIVERSITY OF ECONOMICS AND BUSINESS · LIBRARY',
  '09': 'SHANGHAI INSTITUTE OF VISUAL ARTS · LIBRARY',
  '10': 'BEIJING VOCATIONAL COLLEGE OF TRANSPORTATION · LIBRARY',
  '11': 'CHENGDU UNIVERSITY OF TECHNOLOGY · FACULTY DEVELOPMENT PLATFORM',
  '12': 'HENAN COLLEGE OF SURVEYING AND MAPPING · LIBRARY',
  '13': 'UNIVERSITY OF ELECTRONIC SCIENCE AND TECHNOLOGY OF CHINA · LIBRARY',
  '14': 'OUTSTANDING ENGINEERS COLLEGE · INTEGRATED MANAGEMENT PLATFORM',
  '15': 'INTERNATIONAL UNIVERSITY STUDENT DUBBING COMPETITION',
  '16': 'HARBIN ENGINEERING UNIVERSITY · FACULTY DEVELOPMENT PLATFORM',
  '17': 'SHENYANG NORMAL UNIVERSITY · LIBRARY',
  '18': 'TONGJI UNIVERSITY · FACULTY DEVELOPMENT CENTER',
  '19': 'SHIHEZI UNIVERSITY · LIBRARY'
};
const indexProjects = projects
  .filter(([id]) => id !== '04')
  .map(([id, title, type, image]) => [
    id,
    indexTitleOverrides[id] || title,
    indexTitleEn[id] || projectTypeZh[type] || type,
    image
  ]);
const projectCard = ([p, iframeUrl]) => `<article class="project-shell reveal"><div class="project-card"><header class="project-meta"><div class="project-number">${p[0]}</div><div><p class="project-type">${p[2]}</p><h3 class="project-name">${p[1]}</h3></div><button class="ghost-button" data-jump="all-projects">查看全部项目 ↗</button></header><div class="project-media"><div class="iframe-frame" data-iframe-project="${p[0]}"><div class="iframe-scaler"><iframe title="${p[1]} 交互预览" data-src="${iframeUrl}" loading="lazy" allow="fullscreen" referrerpolicy="strict-origin-when-cross-origin"></iframe></div><div class="iframe-placeholder" aria-hidden="true"><span>交互预览</span><strong>${p[1]}</strong><small>正在载入交互预览</small></div></div></div></div></article>`;
const indexCards = indexProjects.map((p,index)=>`<button class="work-card" data-gallery-index="${index}" aria-label="预览 ${p[1]}">${responsiveWorkImage(p, `${p[1]}界面预览`, '(max-width: 700px) 50vw, 440px')}<span class="work-copy"><span>${p[0]} / ${p[1]}</span><small>${p[2]}</small></span></button>`).join('');
const characters = text => [...text].map(ch=>`<span class="reveal-char">${ch === ' ' ? '&nbsp;' : ch}</span>`).join('');
document.querySelector('#app').innerHTML = `
  <div class="page">
    <section class="hero hero--video" id="top"><video class="hero-video" autoplay loop muted playsinline preload="auto" aria-hidden="true"><source src="./public/home-office.webm" type="video/webm"></video><div class="hero-video-overlay" aria-hidden="true"></div><canvas class="hero-splash-cursor" aria-hidden="true"></canvas><h1 class="video-hero-title"><span class="video-hero-line video-hero-line--intro"><span>Hi，IM 李世杰</span></span><span class="video-hero-line video-hero-line--main"><span>近期工作作品集</span></span></h1></section>
    <section class="ticker ether-zone" aria-label="专业领域"><div class="ticker-track"><span>SMART PORTAL</span><i>✦</i><span>EDUCATION DIGITALIZATION</span><i>✦</i><span>DESIGN SYSTEM</span><i>✦</i><span>AI-ENABLED WORKFLOW</span><i>✦</i><span>SMART PORTAL</span><i>✦</i><span>EDUCATION DIGITALIZATION</span><i>✦</i><span>DESIGN SYSTEM</span><i>✦</i><span>AI-ENABLED WORKFLOW</span><i>✦</i></div></section>
    <section class="mosaic ether-zone" aria-label="作品流"><div class="mosaic-label"><span>19 PROJECTS / A SELECTED VISUAL STREAM</span><span>SCROLL TO EXPLORE</span></div><div class="marquee-row" data-marquee="right">${marquee}</div><div class="marquee-row reverse" data-marquee="left">${marquee}</div></section>
    <section class="about ether-zone" id="about"><div class="orbital one">SYSTEM</div><div class="orbital two">DETAIL</div><div class="orbital three">FLOW</div><div class="about-center"><h2 class="section-title hero-heading">About <span class="cn">我</span></h2><p class="about-copy" data-char-reveal>${characters('8 年 UI / UX 设计经验，6 年深耕超星集团教育数字化业务。参与智慧门户 1.0、2.0 的产品设计与持续迭代，累计支持 600+ 高校门户项目落地。拥有 3 年团队管理经验，我相信好的体验不是装饰，而是让复杂服务被轻松理解和稳定使用的系统。')}</p><button class="contact-orb" data-jump="contact"><span>Work<br>with me ↗</span></button></div></section>
    <section class="expertise" id="expertise"><p class="section-kicker">WHAT I BRING TO THE TABLE</p><h2 class="section-title">EXPERTISE</h2><div class="expertise-list">${services.map(s=>`<article class="service reveal"><div class="service-no">${s[0]}</div><div><h3>${s[1]}</h3><p>${s[2]}</p></div></article>`).join('')}</div></section>
    <section class="projects ether-zone" id="selected-projects"><header class="projects-header"><p class="section-kicker">SELECTED CASE STUDIES / 03</p><h2 class="section-title hero-heading">PROJECTS</h2></header><div class="project-stack">${selected.map(projectCard).join('')}</div></section>
    <section class="all-work" id="all-projects"><div class="all-work-heading"><div><p class="section-kicker">ALL WORKS / 18</p><h2 class="section-title">项目索引</h2></div><p>缩略图统一从原图顶部裁切。点击任意项目可查看完整长图，并支持放大、缩小与左右切换。</p></div><div class="work-grid">${indexCards}</div></section>
    <footer class="footer ether-zone" id="contact"><div class="footer-top"><div><p class="section-kicker">LET&apos;S MAKE COMPLEXITY CLEAR</p><h2 class="hero-heading">LET&apos;S<br><span class="cn">合作。</span></h2></div><a class="contact-orb" href="mailto:hello@example.com"><span>Email<br>me ↗</span></a></div><div class="footer-bottom"><span>© 2026 LI SHIJIE</span><span>UI / UX DESIGNER · SHANGHAI, CHINA</span></div></footer>
    <div class="lightbox" id="lightbox" aria-hidden="true"><button class="lightbox-backdrop" data-lightbox-close aria-label="关闭预览"></button><section class="lightbox-panel" role="dialog" aria-modal="true" aria-label="项目长图预览" tabindex="-1"><header><div><p id="lightbox-type"></p><h2 id="lightbox-title"></h2></div><button class="icon-button" data-lightbox-close aria-label="关闭预览">×</button></header><div class="lightbox-stage"><img id="lightbox-image" alt=""></div><footer><button class="icon-button" data-zoom="out" aria-label="缩小">−</button><span id="zoom-value">100%</span><button class="icon-button" data-zoom="in" aria-label="放大">＋</button><div class="lightbox-spacer"></div><button class="icon-button" data-gallery="prev" aria-label="上一张">←</button><span id="gallery-count"></span><button class="icon-button" data-gallery="next" aria-label="下一张">→</button></footer></section></div>
  </div>`;
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const echoVectors = { right: { x: 1, y: 0 }, left: { x: -1, y: 0 }, up: { x: 0, y: -1 }, down: { x: 0, y: 1 }, diagonal: { x: .72, y: .72 } };
const createHeroEcho = (root, options = {}) => {
  const text = root.textContent.trim();
  const settings = { echoes: 6, lag: .08, offset: 20, direction: 'right', fade: .62, blur: 2.2, tint: '#7dd3fc', duration: 680, ...options };
  const vector = echoVectors[settings.direction] || echoVectors.right;
  const copies = [];
  const pointerGhosts = new Set();
  let frame = 0;
  let active = false;
  let settled = false;
  let lastPointer = null;
  let lastTrailAt = 0;
  const state = { positions: [], startTime: 0 };
  root.textContent = '';
  for (let index = settings.echoes; index > 0; index -= 1) {
    const copy = document.createElement('span');
    copy.className = 'echo-text__echo';
    copy.dataset.echoIndex = index;
    copy.setAttribute('aria-hidden', 'true');
    copy.textContent = text;
    copy.style.color = `color-mix(in srgb, ${settings.tint} ${Math.min(72, 18 + index * 5)}%, #f8fafc)`;
    copy.style.webkitTextFillColor = copy.style.color;
    root.append(copy);
    copies[index] = copy;
  }
  const front = document.createElement('span');
  front.className = 'echo-text__echo echo-text__echo--front';
  front.dataset.echoIndex = '0';
  front.textContent = text;
  root.append(front);
  copies[0] = front;

  const setStartingPositions = () => {
    state.positions = Array.from({ length: settings.echoes + 1 }, (_, index) => ({ x: vector.x * settings.offset * (index + .35), y: vector.y * settings.offset * (index + .35) }));
    state.positions.forEach((position, index) => {
      const copy = copies[index];
      if (!copy) return;
      copy.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
      if (index > 0) copy.style.opacity = '0';
    });
  };
  const requestFrame = () => { if (!frame && active && !document.hidden) frame = requestAnimationFrame(renderFrame); };
  const removeEntranceCopies = () => {
    for (let index = 1; index <= settings.echoes; index += 1) copies[index]?.remove();
    copies.length = 1;
    front.style.transform = '';
    front.style.filter = '';
    settled = true;
  };
  const renderFrame = now => {
    frame = 0;
    const progress = clamp((now - state.startTime) / settings.duration, 0, 1);
    const entranceRest = 1 - (1 - Math.pow(1 - progress, 3));
    let motionLeft = progress < 1;
    let maxSeparation = 0;
    for (let index = 0; index <= settings.echoes; index += 1) {
      const copy = copies[index];
      const current = state.positions[index];
      if (!copy || !current) continue;
      const desiredX = vector.x * entranceRest * settings.offset * (index + .35);
      const desiredY = vector.y * entranceRest * settings.offset * (index + .35);
      const lerp = clamp(.34 / (1 + index * settings.lag * 4.2), .018, .36);
      const distance = Math.hypot(desiredX - current.x, desiredY - current.y);
      current.x += (desiredX - current.x) * lerp;
      current.y += (desiredY - current.y) * lerp;
      motionLeft ||= distance > .08;
      copy.style.transform = `translate3d(${current.x.toFixed(3)}px, ${current.y.toFixed(3)}px, 0)`;
      if (index > 0) {
        const separation = Math.hypot(current.x - state.positions[0].x, current.y - state.positions[0].y);
        maxSeparation = Math.max(maxSeparation, separation);
        copy.style.filter = `blur(${(settings.blur * index / settings.echoes).toFixed(2)}px)`;
      }
    }
    const activity = clamp(Math.max(entranceRest, maxSeparation / (settings.offset * 2.25)), 0, 1);
    for (let index = 1; index <= settings.echoes; index += 1) copies[index].style.opacity = String(Math.pow(settings.fade, index) * activity);
    if (motionLeft || maxSeparation > .45) requestFrame();
    else removeEntranceCopies();
  };
  const clearPointerGhosts = () => {
    pointerGhosts.forEach(ghost => ghost.remove());
    pointerGhosts.clear();
  };
  const onPointerMove = event => {
    if (!settled) return;
    const rect = root.getBoundingClientRect();
    const nearestX = clamp(event.clientX, rect.left, rect.right);
    const nearestY = clamp(event.clientY, rect.top, rect.bottom);
    if (Math.hypot(event.clientX - nearestX, event.clientY - nearestY) > 170) { lastPointer = null; return; }
    const now = performance.now();
    const nextPointer = { x: event.clientX, y: event.clientY };
    if (!lastPointer || now - lastTrailAt < 56) { lastPointer = nextPointer; return; }
    const dx = nextPointer.x - lastPointer.x;
    const dy = nextPointer.y - lastPointer.y;
    lastPointer = nextPointer;
    if (Math.hypot(dx, dy) < 2) return;
    const ghost = front.cloneNode(true);
    ghost.className = 'echo-text__echo echo-text__pointer-ghost';
    ghost.removeAttribute('data-echo-index');
    ghost.setAttribute('aria-hidden', 'true');
    ghost.style.color = `color-mix(in srgb, ${settings.tint} 64%, #f8fafc)`;
    ghost.style.webkitTextFillColor = ghost.style.color;
    root.append(ghost);
    pointerGhosts.add(ghost);
    if (pointerGhosts.size > 3) pointerGhosts.values().next().value.remove();
    const animation = ghost.animate([
      { transform: `translate3d(${clamp(-dx * .48, -20, 20)}px, ${clamp(-dy * .22, -8, 8)}px, 0)`, opacity: .32, filter: 'blur(1.4px)' },
      { transform: `translate3d(${clamp(-dx * .1, -5, 5)}px, 0, 0)`, opacity: 0, filter: 'blur(.4px)' }
    ], { duration: 240, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'forwards' });
    animation.finished.catch(() => {}).finally(() => { ghost.remove(); pointerGhosts.delete(ghost); });
    lastTrailAt = now;
  };
  const hero = root.closest('.hero--video');
  hero?.addEventListener('pointermove', onPointerMove, { passive: true });
  setStartingPositions();
  return {
    play: () => { active = true; settled = false; state.startTime = performance.now(); setStartingPositions(); requestFrame(); },
    destroy: () => { active = false; if (frame) cancelAnimationFrame(frame); hero?.removeEventListener('pointermove', onPointerMove); clearPointerGhosts(); root.textContent = text; }
  };
};
const initGsapEntrances = () => {
  if (!window.gsap) return;
  const motion = window.gsap.matchMedia();
  motion.add('(prefers-reduced-motion: no-preference)', () => {
    const videoHero = document.querySelector('.hero--video');
    if (videoHero) {
      const intro = videoHero.querySelector('.video-hero-line--intro > span');
      const name = videoHero.querySelector('.video-hero-line--main > span');
      const tl = window.gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.addLabel('identity', .28)
        .fromTo(intro, { autoAlpha: 0, y: 24, filter: 'blur(3px)' }, { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: .68, ease: 'power4.out', clearProps: 'transform,filter,opacity,visibility' }, 'identity')
        .fromTo(name, { autoAlpha: 0, y: 20, filter: 'blur(3px)' }, { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: .72, ease: 'power4.out', clearProps: 'transform,filter,opacity,visibility' }, 'identity+=.42');

      return () => {
        tl.kill();
      };
    }

    const navItems = [...document.querySelectorAll('.brand, .nav-links button')];
    const portrait = document.querySelector('.hero-portrait');
    const intro = document.querySelector('.hero-title-intro');
    const name = document.querySelector('.hero-title-name');
    const note = document.querySelector('.hero-note');
    const heroOrb = document.querySelector('.hero .contact-orb');
    const tl = window.gsap.timeline({ defaults: { ease: 'power3.out' } });

    window.gsap.set(navItems, { autoAlpha: 0, y: -14 });
    window.gsap.set(intro, { autoAlpha: 0, y: 28, filter: 'blur(3px)' });
    window.gsap.set(name, { autoAlpha: 0, y: 22, filter: 'blur(3px)' });

    tl.addLabel('wake', .06)
      .to(navItems, { autoAlpha: 1, y: 0, duration: .48, stagger: .055, clearProps: 'transform,opacity,visibility' }, 'wake')
      .fromTo(portrait, { x: -16, scale: 1.025 }, { x: 0, scale: 1, duration: 1.05, ease: 'power3.inOut', clearProps: 'transform' }, 'wake+=.06')
      .addLabel('identity', 'wake+=.28')
      .to(intro, { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: .68, ease: 'power4.out', clearProps: 'transform,filter,opacity,visibility' }, 'identity')
      .to(name, { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: .74, ease: 'power4.out', clearProps: 'transform,filter,opacity,visibility' }, 'identity+=.42')
      .fromTo(note, { y: 18 }, { y: 0, duration: .52, clearProps: 'transform' }, 'identity+=.92')
      .fromTo(heroOrb, { y: 16, scale: .92 }, { y: 0, scale: 1, duration: .58, clearProps: 'transform' }, 'identity+=1.02');

    return () => {
      tl.kill();
    };
  });
};
initGsapEntrances();
const initHeroSplashCursor = () => {
  const hero = document.querySelector('.hero--video');
  const canvas = hero?.querySelector('.hero-splash-cursor');
  const supportsFinePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!hero || !canvas || matchMedia('(prefers-reduced-motion: reduce)').matches || !supportsFinePointer) return;
  const context = canvas.getContext('2d', { alpha: true });
  if (!context) return;
  const config = { COLOR: [80, 129, 255], DENSITY_DISSIPATION: 3.5, VELOCITY_DISSIPATION: 2, SPLAT_RADIUS: .2, SPLAT_FORCE: 6000 };
  const particles = [];
  const pointer = { x: 0, y: 0, lastX: 0, lastY: 0, initialized: false };
  let width = 1;
  let height = 1;
  let frame = 0;
  let lastTime = 0;
  let inView = true;
  const resize = () => {
    const rect = hero.getBoundingClientRect();
    const ratio = Math.min(devicePixelRatio || 1, 1.5);
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  };
  const requestFrame = () => { if (!frame && inView && !document.hidden) frame = requestAnimationFrame(draw); };
  const addSplat = (x, y, dx, dy, strength = 1) => {
    const speed = Math.min(Math.hypot(dx, dy), 42) * strength;
    const amount = Math.max(2, Math.min(7, Math.ceil(speed / 7)));
    for (let index = 0; index < amount; index += 1) {
      const phase = Math.random() * Math.PI * 2;
      const spread = (Math.random() - .5) * 1.8;
      particles.push({
        x: x + (Math.random() - .5) * 10,
        y: y + (Math.random() - .5) * 10,
        vx: dx * (.16 + Math.random() * .08) + Math.cos(phase) * (2 + speed * .07),
        vy: dy * (.16 + Math.random() * .08) + Math.sin(phase) * (2 + speed * .07),
        radius: 12 + speed * .42 + Math.random() * 12,
        life: 500 + Math.random() * 500,
        age: 0,
        angle: Math.atan2(dy || spread, dx || 1) + spread,
        spin: (Math.random() - .5) * .08
      });
    }
    if (particles.length > 90) particles.splice(0, particles.length - 90);
    requestFrame();
  };
  const draw = time => {
    frame = 0;
    const delta = Math.min(32, time - (lastTime || time));
    lastTime = time;
    context.clearRect(0, 0, width, height);
    context.globalCompositeOperation = 'screen';
    for (let index = particles.length - 1; index >= 0; index -= 1) {
      const particle = particles[index];
      particle.age += delta;
      if (particle.age >= particle.life) { particles.splice(index, 1); continue; }
      const progress = particle.age / particle.life;
      particle.vx *= Math.exp(-config.VELOCITY_DISSIPATION * delta / 1000);
      particle.vy *= Math.exp(-config.VELOCITY_DISSIPATION * delta / 1000);
      particle.x += particle.vx * delta / 16;
      particle.y += particle.vy * delta / 16;
      particle.angle += particle.spin * delta / 16;
      const alpha = Math.pow(1 - progress, config.DENSITY_DISSIPATION / 2) * .36;
      const radius = particle.radius * (1 + progress * .82);
      const gradient = context.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, radius);
      gradient.addColorStop(0, `rgb(${config.COLOR.join(' ')} / ${alpha})`);
      gradient.addColorStop(.42, `rgb(${config.COLOR.join(' ')} / ${alpha * .4})`);
      gradient.addColorStop(1, 'rgb(80 129 255 / 0)');
      context.save();
      context.translate(particle.x, particle.y);
      context.rotate(particle.angle);
      context.scale(1.55, .72);
      context.translate(-particle.x, -particle.y);
      context.fillStyle = gradient;
      context.beginPath();
      context.arc(particle.x, particle.y, radius, 0, Math.PI * 2);
      context.fill();
      context.restore();
    }
    context.globalCompositeOperation = 'source-over';
    if (particles.length) requestFrame();
  };
  const onPointerMove = event => {
    const rect = hero.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    if (!pointer.initialized) { Object.assign(pointer, { x, y, lastX: x, lastY: y, initialized: true }); return; }
    const dx = x - pointer.lastX;
    const dy = y - pointer.lastY;
    if (Math.hypot(dx, dy) > .5) addSplat(x, y, dx, dy);
    Object.assign(pointer, { x, y, lastX: x, lastY: y });
  };
  const onPointerDown = event => {
    const rect = hero.getBoundingClientRect();
    addSplat(event.clientX - rect.left, event.clientY - rect.top, (Math.random() - .5) * 18, (Math.random() - .5) * 18, 2.2);
  };
  const onLeave = () => { pointer.initialized = false; };
  const observer = new IntersectionObserver(entries => { inView = entries[0].isIntersecting; if (!inView) { particles.length = 0; context.clearRect(0, 0, width, height); } }, { threshold: .01 });
  const visibility = () => { if (document.hidden && frame) { cancelAnimationFrame(frame); frame = 0; } else requestFrame(); };
  new ResizeObserver(resize).observe(hero);
  observer.observe(hero);
  hero.addEventListener('pointermove', onPointerMove, { passive: true });
  hero.addEventListener('pointerdown', onPointerDown, { passive: true });
  hero.addEventListener('pointerleave', onLeave, { passive: true });
  document.addEventListener('visibilitychange', visibility, { passive: true });
  resize();
};
initHeroSplashCursor();
document.querySelectorAll('[data-jump]').forEach(el=>el.addEventListener('click',()=>jump(el.dataset.jump)));
const lightbox = document.querySelector('#lightbox');
const lightboxPanel = lightbox.querySelector('.lightbox-panel');
const lightboxImage = document.querySelector('#lightbox-image');
let activeGalleryIndex = 0;
let zoom = 1;
const renderLightbox = () => {
  const project = indexProjects[activeGalleryIndex];
  lightboxImage.src = asset(project[3]);
  lightboxImage.alt = `${project[1]}完整长图`;
  document.querySelector('#lightbox-type').textContent = `${project[0]} / ${project[2]}`;
  document.querySelector('#lightbox-title').textContent = project[1];
  document.querySelector('#gallery-count').textContent = `${activeGalleryIndex + 1} / ${indexProjects.length}`;
  document.querySelector('#zoom-value').textContent = `${Math.round(zoom * 100)}%`;
  lightboxImage.style.transform = `scale(${zoom})`;
};
const openLightbox = index => { activeGalleryIndex = index; zoom = 1; renderLightbox(); lightbox.classList.add('is-open'); lightbox.setAttribute('aria-hidden','false'); document.body.classList.add('modal-open'); lightboxPanel.focus(); };
const closeLightbox = () => { lightbox.classList.remove('is-open'); lightbox.setAttribute('aria-hidden','true'); document.body.classList.remove('modal-open'); };
document.querySelectorAll('[data-gallery-index]').forEach(card => card.addEventListener('click', () => openLightbox(Number(card.dataset.galleryIndex))));
document.querySelectorAll('[data-lightbox-close]').forEach(button => button.addEventListener('click', closeLightbox));
document.querySelectorAll('[data-zoom]').forEach(button => button.addEventListener('click', () => { zoom = Math.min(3, Math.max(.5, zoom + (button.dataset.zoom === 'in' ? .25 : -.25))); renderLightbox(); }));
document.querySelectorAll('[data-gallery]').forEach(button => button.addEventListener('click', () => { activeGalleryIndex = (activeGalleryIndex + (button.dataset.gallery === 'next' ? 1 : -1) + indexProjects.length) % indexProjects.length; zoom = 1; renderLightbox(); }));
document.addEventListener('keydown', event => { if (!lightbox.classList.contains('is-open')) return; if (event.key === 'Escape') closeLightbox(); if (event.key === 'ArrowRight') { activeGalleryIndex = (activeGalleryIndex + 1) % indexProjects.length; zoom = 1; renderLightbox(); } if (event.key === 'ArrowLeft') { activeGalleryIndex = (activeGalleryIndex - 1 + indexProjects.length) % indexProjects.length; zoom = 1; renderLightbox(); } });
class LiquidEtherBackground {
  constructor(zone) {
    this.zone = zone;
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'ether-canvas';
    this.canvas.setAttribute('aria-hidden', 'true');
    zone.prepend(this.canvas);
    this.canvas.width = 1;
    this.canvas.height = 1;
    this.ctx = this.canvas.getContext('2d', { alpha: true });
    this.pointer = { x: .5, y: .5, px: .5, py: .5, active: false, last: 0 };
    this.visible = false;
    this.reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.lastFrame = 0;
    this.raf = 0;
    this.timer = 0;
    this.releaseTimer = 0;
    this.allocated = false;
    this.viewportBounded = zone.id === 'selected-projects';
    this.phase = Math.random() * Math.PI * 2;
    this.resize = this.resize.bind(this);
    this.tick = this.tick.bind(this);
    this.onPointerMove = this.onPointerMove.bind(this);
    new ResizeObserver(this.resize).observe(zone);
    this.resize();
    zone.addEventListener('pointermove', this.onPointerMove, { passive: true });
    zone.addEventListener('pointerleave', () => { this.pointer.active = false; }, { passive: true });
    this.observer = new IntersectionObserver(entries => entries.forEach(entry => {
      this.visible = entry.isIntersecting;
      this.visible ? this.start() : this.stop();
    }), { threshold: .01 });
    this.observer.observe(zone);
    this.onVisibilityChange = () => document.hidden ? this.stop() : this.start();
    document.addEventListener('visibilitychange', this.onVisibilityChange, { passive: true });
  }
  resize() {
    const rect = this.zone.getBoundingClientRect();
    this.width = Math.max(1, Math.round(rect.width));
    this.height = Math.max(1, Math.round(rect.height));
    this.renderHeight = this.viewportBounded ? Math.min(this.height, Math.ceil(window.innerHeight + 160)) : this.height;
    if (this.allocated) this.resizeBuffer();
  }
  resizeBuffer() {
    const ratio = Math.min(window.devicePixelRatio || 1, 1.25);
    this.canvas.width = Math.round(this.width * ratio);
    this.canvas.height = Math.round(this.renderHeight * ratio);
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.renderHeight}px`;
    this.canvas.style.bottom = 'auto';
    this.ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
  ensureBuffer() {
    clearTimeout(this.releaseTimer);
    if (this.allocated) return;
    this.allocated = true;
    this.resizeBuffer();
  }
  releaseBuffer() {
    if (this.visible && !document.hidden) return;
    this.canvas.width = 1;
    this.canvas.height = 1;
    this.allocated = false;
  }
  onPointerMove(event) {
    const rect = this.zone.getBoundingClientRect();
    this.pointer.x = (event.clientX - rect.left) / rect.width;
    this.pointer.y = (event.clientY - rect.top) / rect.height;
    this.pointer.active = true;
    this.pointer.last = performance.now();
  }
  start() {
    if (this.raf || this.timer || !this.visible || this.reduced || document.hidden) return;
    this.ensureBuffer();
    this.lastFrame = 0;
    this.schedule(0);
  }
  stop() {
    clearTimeout(this.timer);
    cancelAnimationFrame(this.raf);
    this.raf = 0;
    this.timer = 0;
    clearTimeout(this.releaseTimer);
    this.releaseTimer = window.setTimeout(() => this.releaseBuffer(), 1600);
  }
  schedule(delay) {
    this.timer = window.setTimeout(() => {
      this.timer = 0;
      this.raf = requestAnimationFrame(this.tick);
    }, delay);
  }
  updateViewportWindow(zoneRect) {
    if (!this.viewportBounded) return 0;
    const offset = Math.max(0, Math.min(this.height - this.renderHeight, Math.round(-zoneRect.top - 80)));
    this.canvas.style.transform = `translate3d(0,${offset}px,0)`;
    return offset;
  }
  blob(x, y, radius, alpha, hue) {
    const gradient = this.ctx.createRadialGradient(x, y, 0, x, y, radius);
    gradient.addColorStop(0, `hsla(${hue}, 94%, 69%, ${alpha})`);
    gradient.addColorStop(.32, `hsla(${hue + 24}, 90%, 60%, ${alpha * .5})`);
    gradient.addColorStop(1, `hsla(${hue + 45}, 92%, 55%, 0)`);
    this.ctx.fillStyle = gradient;
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, Math.PI * 2);
    this.ctx.fill();
  }
  tick(now) {
    this.raf = 0;
    if (!this.visible || this.reduced || document.hidden) return;
    const active = this.pointer.active && now - this.pointer.last < 1400;
    const interval = active ? 1000 / 60 : 1000 / 45;
    const delta = Math.min(.05, (now - this.lastFrame) / 1000);
    this.lastFrame = now;
    const ctx = this.ctx;
    const zoneRect = this.zone.getBoundingClientRect();
    const offset = this.updateViewportWindow(zoneRect);
    const clipTop = this.viewportBounded ? 0 : Math.max(0, Math.floor(-zoneRect.top));
    const clipBottom = this.viewportBounded ? this.renderHeight : Math.min(this.renderHeight, Math.ceil(window.innerHeight - zoneRect.top));
    if (clipBottom <= clipTop) { this.schedule(interval); return; }
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, clipTop, this.width, clipBottom - clipTop);
    ctx.clip();
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = `rgba(0,0,0,${Math.min(.14, .035 + delta * 1.2)})`;
    ctx.fillRect(0, 0, this.width, this.height);
    ctx.restore();
    const t = now * .00068 + this.phase;
    const idleX = .5 + Math.sin(t * 1.37) * .31 + Math.sin(t * 2.8) * .08;
    const idleY = .5 + Math.cos(t * 1.11) * .27 + Math.sin(t * 2.13) * .06;
    const x = (active ? this.pointer.x : idleX) * this.width;
    const y = (active ? this.pointer.y : idleY) * this.height - offset;
    const velocity = Math.hypot(this.pointer.x - this.pointer.px, this.pointer.y - this.pointer.py);
    const idlePulse = .38 + Math.sin(t * 1.7) * .06;
    const strength = active ? Math.min(1, .38 + velocity * 14) : idlePulse;
    ctx.globalCompositeOperation = 'screen';
    ctx.filter = 'blur(14px)';
    const radius = Math.max(105, Math.min(this.width, Math.max(this.renderHeight, 1000)) * (active ? .25 : .235));
    this.blob(x, y, radius, strength * .29, 258);
    this.blob(x - (this.pointer.x - this.pointer.px) * this.width * 5, y - (this.pointer.y - this.pointer.py) * this.height * 5, radius * .7, strength * .22, 306);
    this.blob((.18 + Math.sin(t * .7) * .12) * this.width, (.75 + Math.cos(t) * .11) * this.height - offset, radius * .8, .13, 214);
    this.blob((.82 + Math.cos(t * .83) * .1) * this.width, (.2 + Math.sin(t * 1.28) * .13) * this.height - offset, radius * .58, .1, 289);
    ctx.filter = 'none';
    this.pointer.px += (this.pointer.x - this.pointer.px) * .17;
    this.pointer.py += (this.pointer.y - this.pointer.py) * .17;
    ctx.restore();
    this.schedule(interval);
  }
}
document.querySelectorAll('.ether-zone').forEach(zone => new LiquidEtherBackground(zone));
class GradientWavesBackground {
  constructor(zone) {
    this.zone = zone;
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'waves-canvas';
    this.canvas.setAttribute('aria-hidden', 'true');
    zone.prepend(this.canvas);
    this.canvas.width = 1;
    this.canvas.height = 1;
    this.ctx = this.canvas.getContext('2d', { alpha: true });
    this.pointer = { x: .5, y: .5, tx: .5, ty: .5 };
    this.visible = false;
    this.reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.phase = Math.random() * Math.PI * 2;
    this.lastFrame = 0;
    this.raf = 0;
    this.timer = 0;
    this.releaseTimer = 0;
    this.allocated = false;
    this.viewportBounded = zone.id === 'selected-projects';
    this.resize = this.resize.bind(this);
    this.tick = this.tick.bind(this);
    new ResizeObserver(this.resize).observe(zone);
    zone.addEventListener('pointermove', event => {
      const rect = zone.getBoundingClientRect();
      this.pointer.tx = (event.clientX - rect.left) / rect.width;
      this.pointer.ty = (event.clientY - rect.top) / rect.height;
      this.pointer.last = performance.now();
    }, { passive: true });
    zone.addEventListener('pointerleave', () => { this.pointer.tx = .5; this.pointer.ty = .5; }, { passive: true });
    this.observer = new IntersectionObserver(entries => entries.forEach(entry => {
      this.visible = entry.isIntersecting;
      this.visible ? this.start() : this.stop();
    }), { threshold: .01 });
    this.observer.observe(zone);
    this.onVisibilityChange = () => document.hidden ? this.stop() : this.start();
    document.addEventListener('visibilitychange', this.onVisibilityChange, { passive: true });
    this.resize();
  }
  resize() {
    const rect = this.zone.getBoundingClientRect();
    this.width = Math.max(1, Math.round(rect.width));
    this.height = Math.max(1, Math.round(rect.height));
    this.renderHeight = this.viewportBounded ? Math.min(this.height, Math.ceil(window.innerHeight + 160)) : this.height;
    if (this.allocated) this.resizeBuffer();
  }
  resizeBuffer() {
    const ratio = Math.min(window.devicePixelRatio || 1, 1.25);
    this.canvas.width = Math.round(this.width * ratio);
    this.canvas.height = Math.round(this.renderHeight * ratio);
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.renderHeight}px`;
    this.canvas.style.bottom = 'auto';
    this.ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  }
  ensureBuffer() {
    clearTimeout(this.releaseTimer);
    if (this.allocated) return;
    this.allocated = true;
    this.resizeBuffer();
  }
  releaseBuffer() {
    if (this.visible && !document.hidden) return;
    this.canvas.width = 1;
    this.canvas.height = 1;
    this.allocated = false;
  }
  start() {
    if (this.raf || this.timer || !this.visible || this.reduced || document.hidden) return;
    this.ensureBuffer();
    this.lastFrame = 0;
    this.schedule(0);
  }
  stop() {
    clearTimeout(this.timer);
    cancelAnimationFrame(this.raf);
    this.raf = 0;
    this.timer = 0;
    clearTimeout(this.releaseTimer);
    this.releaseTimer = window.setTimeout(() => this.releaseBuffer(), 1600);
  }
  schedule(delay) {
    this.timer = window.setTimeout(() => {
      this.timer = 0;
      this.raf = requestAnimationFrame(this.tick);
    }, delay);
  }
  updateViewportWindow(zoneRect) {
    if (!this.viewportBounded) return 0;
    const offset = Math.max(0, Math.min(this.height - this.renderHeight, Math.round(-zoneRect.top - 80)));
    this.canvas.style.transform = `translate3d(0,${offset}px,0)`;
    return offset;
  }
  tick(now) {
    this.raf = 0;
    if (!this.visible || this.reduced || document.hidden) return;
    const isInteracting = now - (this.pointer.last || 0) < 900;
    const interval = isInteracting ? 1000 / 60 : 1000 / 45;
    this.lastFrame = now;
    const ctx = this.ctx;
    const zoneRect = this.zone.getBoundingClientRect();
    const offset = this.updateViewportWindow(zoneRect);
    const clipTop = this.viewportBounded ? 0 : Math.max(0, Math.floor(-zoneRect.top));
    const clipBottom = this.viewportBounded ? this.renderHeight : Math.min(this.renderHeight, Math.ceil(window.innerHeight - zoneRect.top));
    if (clipBottom <= clipTop) { this.schedule(interval); return; }
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, clipTop, this.width, clipBottom - clipTop);
    ctx.clip();
    const t = now * .00043 + this.phase;
    this.pointer.x += (this.pointer.tx - this.pointer.x) * .045;
    this.pointer.y += (this.pointer.ty - this.pointer.y) * .045;
    const parallaxX = (this.pointer.x - .5) * this.width * .13;
    const parallaxY = (this.pointer.y - .5) * this.height * .08 - offset;
    ctx.clearRect(0, 0, this.width, this.height);
    ctx.globalCompositeOperation = 'screen';
    ctx.filter = 'blur(.5px)';
    const horizon = this.height * .48 + parallaxY;
    for (let layer = 0; layer < 15; layer++) {
      const depth = layer / 14;
      const y = horizon + depth * this.height * .57;
      const amplitude = 14 + depth * 62;
      const wavelength = 115 + depth * 240;
      const speed = t * (2.1 - depth * .62);
      const gradient = ctx.createLinearGradient(0, y - amplitude * 2, 0, this.renderHeight);
      gradient.addColorStop(0, `hsla(${207 + layer * 3}, 94%, ${54 + depth * 14}%, ${.075 + depth * .055})`);
      gradient.addColorStop(.45, `hsla(${246 + layer * 2}, 92%, ${56 + depth * 15}%, ${.12 + depth * .07})`);
      gradient.addColorStop(.78, `hsla(${300 + layer}, 89%, ${61 + depth * 13}%, ${.11 + depth * .06})`);
      gradient.addColorStop(1, 'hsla(316, 92%, 70%, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(-30, this.renderHeight + 30);
      for (let x = -30; x <= this.width + 30; x += 24) {
        const wave = Math.sin((x + parallaxX + speed * 160) / wavelength) * amplitude + Math.sin((x - speed * 90) / (wavelength * .47)) * amplitude * .32;
        ctx.lineTo(x, y + wave);
      }
      ctx.lineTo(this.width + 30, this.renderHeight + 30);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = `hsla(${207 + layer * 5}, 96%, ${70 + depth * 16}%, ${.045 + depth * .055})`;
      ctx.lineWidth = 1 + depth * 1.2;
      ctx.stroke();
    }
    ctx.filter = 'none';
    ctx.restore();
    this.schedule(interval);
  }
}
document.querySelectorAll('.ether-zone').forEach(zone => new GradientWavesBackground(zone));
class IframeScaler {
  constructor(frame) {
    this.frame = frame;
    this.baseWidth = 1920;
    this.resize = this.resize.bind(this);
    new ResizeObserver(this.resize).observe(frame);
    this.resize();
  }
  resize() {
    const width = this.frame.clientWidth;
    const height = this.frame.clientHeight;
    const scale = width / this.baseWidth;
    this.frame.style.setProperty('--iframe-scale', scale.toFixed(5));
    this.frame.style.setProperty('--iframe-internal-height', `${Math.ceil(height / scale)}px`);
  }
}
document.querySelectorAll('.iframe-frame').forEach(frame => new IframeScaler(frame));
const iframeLoader = new IntersectionObserver((entries, observer) => entries.forEach(entry => {
  if (!entry.isIntersecting) return;
  const frame = entry.target;
  const iframe = frame.querySelector('iframe[data-src]');
  if (!iframe) { observer.unobserve(frame); return; }
  iframe.addEventListener('load', () => frame.classList.add('is-ready'), { once: true });
  iframe.src = iframe.dataset.src;
  iframe.removeAttribute('data-src');
  observer.unobserve(frame);
}), { rootMargin: '240px 0px', threshold: .01 });
document.querySelectorAll('.iframe-frame').forEach(frame => iframeLoader.observe(frame));
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealed=document.querySelectorAll('.reveal');
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
revealed.forEach(el=>observer.observe(el));
const aboutCopy=document.querySelector('[data-char-reveal]');
new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)aboutCopy.classList.add('is-readable')}),{threshold:.32}).observe(aboutCopy);
const aboutSection = document.querySelector('#about');
new IntersectionObserver(entries=>entries.forEach(entry=>{
  aboutSection.classList.toggle('is-in-view', entry.isIntersecting);
}), { threshold: .08 }).observe(aboutSection);
const initProjectStack = () => {
  if (reduce || !window.gsap || !window.ScrollTrigger) return;

  window.gsap.registerPlugin(window.ScrollTrigger);
  const cards = window.gsap.utils.toArray('.project-card');

  cards.forEach((card, index) => {
    const shell = card.closest('.project-shell');
    const targetScale = 1 - (cards.length - 1 - index) * .03;

    window.gsap.fromTo(card, { scale: 1 }, {
      scale: targetScale,
      ease: 'none',
      scrollTrigger: {
        id: `project-stack-${index}`,
        trigger: shell,
        start: 'top bottom',
        end: 'top top',
        scrub: true,
        invalidateOnRefresh: true
      }
    });
  });

  const refreshProjectStack = () => window.ScrollTrigger.refresh();
  if (document.fonts?.ready) document.fonts.ready.then(refreshProjectStack);
  addEventListener('load', refreshProjectStack, { once: true });
};
initProjectStack();
if (!reduce) {
  const rows = [...document.querySelectorAll('[data-marquee]')];
  let ticking = false;
  addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      rows.forEach(row => {
        const direction = row.dataset.marquee === 'right' ? 1 : -1;
        row.style.transform = `translate3d(${direction * ((scrollY * .115) % 720)}px, 0, 0)`;
      });
      ticking = false;
    });
  }, { passive: true });
}
