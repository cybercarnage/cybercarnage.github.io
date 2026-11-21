/* ============================================================
   CYBERPUNK RESUME — script.js
   Загрузочный экран, терминал-печать, глитч, scroll-reveal,
   переключение языков RU/EN

   ВЕСЬ ТЕКСТ САЙТА — в словаре I18N ниже.
   EN-версия — по данным LinkedIn, RU — перевод.
   Чтобы поправить контент, редактируйте значения в блоках
   ru и en, сохранив одинаковые ключи.
   Элементы HTML привязаны к ключам через атрибуты
   data-i18n="ключ" (обычный текст) и data-i18n-html="ключ" (разметка с тегами).
   ============================================================ */

(function () {
  "use strict";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ==================== ТЕМЫ (gta6 / cyberpunk) ==================== */

  const THEME_KEY = "nc-resume-theme";
  let theme =
    localStorage.getItem(THEME_KEY) ||
    document.documentElement.getAttribute("data-theme") ||
    "gta6";

  function applyTheme(name) {
    theme = name;
    localStorage.setItem(THEME_KEY, name);
    document.documentElement.setAttribute("data-theme", name);
    document.querySelectorAll(".theme-toggle__opt").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.setTheme === name);
    });
  }

  function initThemeToggle() {
    document.querySelectorAll(".theme-toggle__opt").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.dataset.setTheme !== theme) applyTheme(btn.dataset.setTheme);
      });
    });
  }

  /* ==================== СЛОВАРЬ ПЕРЕВОДОВ ==================== */

  const I18N = {
    ru: {
      "meta.title": "Дмитрий Сорокин — Senior Backend Engineer / Node.js / TypeScript",
      "meta.description": "Дмитрий Сорокин — Senior Backend Engineer. Node.js, TypeScript, архитектура backend, микросервисы. 14+ лет коммерческой разработки. Резюме.",

      "nav.about": "Обо_мне",
      "nav.experience": "Опыт",
      "nav.skills": "Навыки",
      "nav.education": "Образование",
      "nav.profiles": "Профили",
      "top.online": "ONLINE",

      "boot.l1": "NC-TERMINAL v2.077 // NIGHT-CITY NETWIRE",
      "boot.l2": "> загрузка модулей ............ OK",
      "boot.l3": "> подключение к сети .......... OK",
      "boot.l4": "> расшифровка RESUME.SYS ...... OK",
      "boot.l5": "> доступ разрешён. добро пожаловать, choomba_",
      "boot.hint": "[ нажмите, чтобы пропустить ]",

      "hero.meta": "FILE: RESUME.SYS  //  LOC: TAGANROG  //  MODE: REMOTE  //  EXP: 14+ YRS",
      "hero.name": "ДМИТРИЙ СОРОКИН",
      "hero.role": "Senior Backend Engineer // Node.js × TypeScript × NestJS",
      "hero.stat1": "<b>14+</b> лет в разработке",
      "hero.stat2": "<b>Backend</b>: Node.js / TypeScript",
      "hero.stat3": "<b>Английский</b>: B2",
      "hero.stat4": "<b>Формат</b>: удалёнка",

      "about.title": "ОБО_МНЕ",
      "about.p1": 'Senior Backend Engineer с коммерческим опытом разработки ПО более <b class="hl">14 лет</b>. Специализируюсь на <b class="hl">Node.js</b>, <b class="hl">TypeScript</b>, архитектуре backend и масштабируемых серверных приложениях.',
      "about.p2": "Занимаюсь созданием и сопровождением backend-систем, проектированием архитектуры приложений, разработкой API, интеграцией внешних сервисов, оптимизацией производительности и работы баз данных.",
      "about.p3": 'За карьеру поучаствовал в разнообразных продуктах: <b class="hl">PropTech</b>, <b class="hl">Healthcare</b>, <b class="hl">SaaS</b>, <b class="hl">Marketplace Analytics</b>, <b class="hl">EdTech</b> и других доменах.',
      "about.subtitle": "// Ключевой опыт",
      "about.h1": "<b>Самолет</b> — разработка и сопровождение backend-приложений на Node.js, TypeScript и PostgreSQL",
      "about.h2": "<b>ItLabRealty</b> — платформа недвижимости Dombook: API, оптимизация баз данных, микросервисы",
      "about.h3": "<b>Curogram</b> — медицинская платформа для рынка США на Node.js, NestJS, GraphQL, MongoDB",
      "about.h4": "<b>Suntegy</b> — международные продукты MarketGuru и игровые платформы, техническое лидерство",
      "about.h5": "Опыт работы в командах: архитектурные решения, code review, оптимизация производительности",
      "about.looking": "Ищу: удалённую работу <b>Senior Backend Engineer</b> или <b>Senior Node.js Developer</b> — архитектура backend, разработка API, распределённые системы и масштабируемые приложения. Английский — Upper-Intermediate (B2).",

      "exp.title": "ОПЫТ_РАБОТЫ",

      "j1.period": "СЕН 2023 — АВГ 2026",
      "j1.len": "3 года",
      "j1.role": "Senior Backend Developer",
      "j1.company": "Самолет Плюс // Москва · удалённо",
      "j1.b1": "Разрабатывал и поддерживал backend-компоненты цифровых продуктов",
      "j1.b2": "Реализовывал серверную бизнес-логику на Node.js и TypeScript",
      "j1.b3": "Разрабатывал и поддерживал REST API",
      "j1.b4": "Работал с PostgreSQL и функциональностью, связанной с базами данных",
      "j1.b5": "Рефакторил существующий код и повышал поддерживаемость приложения",
      "j1.b6": "Оптимизировал производительность приложения",
      "j1.b7": "Мониторил работоспособность и производительность приложения",
      "j1.b8": "Участвовал в архитектурных решениях и совместной разработке",

      "j2.period": "ФЕВ 2023 — АВГ 2023",
      "j2.len": "7 мес",
      "j2.role": "Backend Developer",
      "j2.company": "ItLabRealty // Москва · удалённо",
      "j2.project": "Проект: <b>Dombook</b> — платформа недвижимости для продажи новостроек",
      "j2.b1": "Разрабатывал и поддерживал backend API",
      "j2.b2": "Реализовывал новую функциональность приложения",
      "j2.b3": "Оптимизировал запросы и операции с базами данных",
      "j2.b4": "Поддерживал и улучшал существующие компоненты приложения",
      "j2.b5": "Работал с микросервисной архитектурой",

      "j3.period": "ДЕК 2020 — ЯНВ 2023",
      "j3.len": "2 г 2 мес",
      "j3.role": "Backend Developer",
      "j3.company": "Curogram // Таганрог, Ростовская обл. · гибрид",
      "j3.project": "Curogram — медицинская технологическая платформа США, соединяющая клиники и пациентов",
      "j3.b1": "Разрабатывал и поддерживал backend-сервисы",
      "j3.b2": "Реализовывал бизнес-логику приложения",
      "j3.b3": "Разрабатывал GraphQL API",
      "j3.b4": "Работал с микросервисной архитектурой",
      "j3.b5": "Интегрировал backend-сервисы с веб- и мобильными приложениями",
      "j3.b6": "Работал с MongoDB и компонентами backend-сервисов",
      "j3.b7": "Поддерживал и расширял существующую функциональность приложения",

      "j4.period": "ФЕВ 2018 — ДЕК 2020",
      "j4.len": "2 г 11 мес",
      "j4.role": "Senior Backend Developer | Техническое лидерство",
      "j4.company": "SUNTEGY // Таганрог, Ростовская обл. · офис",
      "j4.projectA": "<b>MarketGuru</b> — платформа аналитики маркетплейсов",
      "j4.a1": "Backend-разработка на Node.js и NestJS",
      "j4.a2": "Разработка API и функциональности приложения",
      "j4.a3": "Интеграция баз данных на PostgreSQL",
      "j4.a4": "Участие в разработке микросервисной архитектуры",
      "j4.projectB": "<b>CSGO DEP / PUBG DEP</b> — игровые цифровые продукты",
      "j4.b1": "Backend-разработка и реализация серверной функциональности",
      "j4.b2": "Сопровождение приложений и исправление ошибок",
      "j4.b3": "Разработка и поддержка существующих функций проектов",
      "j4.final": "Дополнительно: участие в технических решениях и работа в команде разработки",

      "j5.period": "АПР 2017 — ФЕВ 2018",
      "j5.len": "11 мес",
      "j5.role": "JavaScript-разработчик",
      "j5.company": "DreamStudy // Россия · удалённо",
      "j5.b1": "Разрабатывал модули и поддерживал образовательную платформу с функцией видеоконференций",

      "j6.period": "ИЮЛ 2014 — АПР 2017",
      "j6.len": "2 г 10 мес",
      "j6.role": "Fullstack веб-разработчик",
      "j6.company": "Lodoss Team // Ростовская обл. · офис",
      "j6.b1": "Работал над веб-приложениями, социальными сетями, образовательными платформами и SaaS-проектами",

      "j7.period": "ФЕВ 2013 — ИЮН 2014",
      "j7.len": "1 г 5 мес",
      "j7.role": "JavaScript-разработчик",
      "j7.company": "RusRise // Россия, Ростовская обл. · офис",
      "j7.b1": "Разрабатывал приложения на Node.js, работал с MongoDB, поддерживал Boxcar Editor и разрабатывал API-интеграции с Trello",

      "j8.period": "ЯНВ 2014 — ФЕВ 2014",
      "j8.len": "2 мес",
      "j8.role": "JavaScript-разработчик (фриланс)",
      "j8.company": "oDesk // Россия · удалённо",
      "j8.b1": "Выполнял задачи разработки на Node.js и Meteor.js",

      "j9.period": "АПР 2011 — ДЕК 2012",
      "j9.len": "1 г 9 мес",
      "j9.role": "PHP-разработчик",
      "j9.company": "KMGi Group · Crucial BrainWare Development Team // Таганрог · офис",
      "j9.b1": "Разрабатывал и поддерживал сайт transparentbusiness и другие веб-приложения, e-commerce-модули и сайты",

      "skills.title": "НАВЫКИ",
      "skills.g1": "// Backend-разработка",
      "skills.g2": "// Архитектура и проектирование",
      "skills.g3": "// Базы данных",
      "skills.g4": "// Очереди и интеграции",
      "skills.g5": "// Облака и инфраструктура",
      "skills.g6": "// Тестирование и инструменты",
      "skills.g7": "// Дополнительные технологии",
      "chip.micro": "Микросервисы",
      "chip.barch": "Архитектура backend",
      "chip.dist": "Распределённые приложения",
      "chip.extapi": "Интеграция внешних API",

      "edu.title": "ОБРАЗОВАНИЕ",
      "edu.c1.title": "Высшее образование",
      "edu.c1.text": '<b>Таганрогский технологический институт ЮФУ</b> (бывший РГУ)<br>Инженер, специальность «Вычислительные машины, комплексы, системы и сети»<br><span class="dim">Сен 2006 – Июл 2011</span><br>Проектирование микропроцессорных систем, сетей и печатных плат.',
      "edu.c2.title": "Сертификаты · MongoDB University",
      "edu.c2.text": '<b>M101JS</b> — MongoDB for Node.js Developers <span class="dim">· 2013</span><br><b>M101P</b> — MongoDB for Developers <span class="dim">· 2013</span><br><b>M102</b> — MongoDB for DBAs <span class="dim">· 2013</span><br><b>oDesk PHP5 Test</b> — PHP <span class="dim">· 2013</span>',
      "edu.c3.title": "Языки",
      "edu.c3.text": 'Русский — <b>родной</b><br>Английский — <b>B2</b> <span class="dim">(Upper-Intermediate)</span>',

      "profiles.title": "ПРОФИЛИ",
      "prof.habr": "Хабр Карьера",

      "footer.copy": '© <span id="year">2026</span> Дмитрий Сорокин // Senior Backend Engineer'
    },

    en: {
      "meta.title": "Dmitry Sorokin — Senior Backend Engineer / Node.js / TypeScript",
      "meta.description": "Dmitry Sorokin — Senior Backend Engineer. Node.js, TypeScript, backend architecture, microservices. 14+ years of commercial development. Resume.",

      "nav.about": "About",
      "nav.experience": "Experience",
      "nav.skills": "Skills",
      "nav.education": "Education",
      "nav.profiles": "Profiles",
      "top.online": "ONLINE",

      "boot.l1": "NC-TERMINAL v2.077 // NIGHT-CITY NETWIRE",
      "boot.l2": "> loading modules ............ OK",
      "boot.l3": "> network uplink ............. OK",
      "boot.l4": "> decrypting RESUME.SYS ...... OK",
      "boot.l5": "> access granted. welcome, choomba_",
      "boot.hint": "[ click to skip ]",

      "hero.meta": "FILE: RESUME.SYS  //  LOC: TAGANROG  //  MODE: REMOTE  //  EXP: 14+ YRS",
      "hero.name": "DMITRY SOROKIN",
      "hero.role": "Senior Backend Engineer // Node.js × TypeScript × NestJS",
      "hero.stat1": "<b>14+</b> years in development",
      "hero.stat2": "<b>Backend</b>: Node.js / TypeScript",
      "hero.stat3": "<b>English</b>: B2",
      "hero.stat4": "<b>Format</b>: remote",

      "about.title": "ABOUT_ME",
      "about.p1": 'Senior Backend Engineer with <b class="hl">14+ years</b> of commercial software development experience, specializing in <b class="hl">Node.js</b>, <b class="hl">TypeScript</b>, backend architecture, and scalable server-side applications.',
      "about.p2": "I focus on building and maintaining backend systems, designing application architecture, developing APIs, integrating external services, optimizing performance, and improving database efficiency.",
      "about.p3": 'Throughout my career, I have contributed to a variety of products across <b class="hl">PropTech</b>, <b class="hl">Healthcare</b>, <b class="hl">SaaS</b>, <b class="hl">Marketplace Analytics</b>, <b class="hl">EdTech</b>, and other domains.',
      "about.subtitle": "// Experience Highlights",
      "about.h1": "<b>Samolet</b> — development and maintenance of backend applications using Node.js, TypeScript, and PostgreSQL",
      "about.h2": "<b>ItLabRealty</b> — Dombook real estate platform: API development, database optimization, microservices",
      "about.h3": "<b>Curogram</b> — healthcare platform for the US market built with Node.js, NestJS, GraphQL, MongoDB",
      "about.h4": "<b>Suntegy</b> — international products MarketGuru and gaming platforms, technical leadership",
      "about.h5": "Team experience: architectural decisions, code review, performance optimization",
      "about.looking": "Looking for: remote opportunities as a <b>Senior Backend Engineer</b> or <b>Senior Node.js Developer</b> — backend architecture, API development, distributed systems, and scalable applications. English: Upper-Intermediate (B2).",

      "exp.title": "EXPERIENCE",

      "j1.period": "SEP 2023 — AUG 2026",
      "j1.len": "3 yrs",
      "j1.role": "Senior Backend Developer",
      "j1.company": "Samolet Plus // Moscow, Russia · Remote",
      "j1.b1": "Developed and maintained backend components of digital products",
      "j1.b2": "Implemented server-side business logic using Node.js and TypeScript",
      "j1.b3": "Developed and maintained REST APIs",
      "j1.b4": "Worked with PostgreSQL and database-related functionality",
      "j1.b5": "Refactored existing code and improved application maintainability",
      "j1.b6": "Optimized application performance",
      "j1.b7": "Monitored application health and performance",
      "j1.b8": "Participated in architectural decisions and collaborative software development",

      "j2.period": "FEB 2023 — AUG 2023",
      "j2.len": "7 mos",
      "j2.role": "Backend Developer",
      "j2.company": "ItLabRealty // Moscow, Russia · Remote",
      "j2.project": "Project: <b>Dombook</b> — a real estate platform for new residential property sales",
      "j2.b1": "Developed and maintained backend APIs",
      "j2.b2": "Implemented new application functionality",
      "j2.b3": "Optimized database queries and database operations",
      "j2.b4": "Maintained and improved existing application components",
      "j2.b5": "Worked with microservices architecture",

      "j3.period": "DEC 2020 — JAN 2023",
      "j3.len": "2 yrs 2 mos",
      "j3.role": "Backend Developer",
      "j3.company": "Curogram // Taganrog, Rostov region · Hybrid",
      "j3.project": "Curogram is a US healthcare technology platform connecting medical practices and patients",
      "j3.b1": "Developed and maintained backend services",
      "j3.b2": "Implemented application business logic",
      "j3.b3": "Developed GraphQL APIs",
      "j3.b4": "Worked with microservices architecture",
      "j3.b5": "Integrated backend services with web and mobile applications",
      "j3.b6": "Worked with MongoDB and backend service components",
      "j3.b7": "Maintained and extended existing application functionality",

      "j4.period": "FEB 2018 — DEC 2020",
      "j4.len": "2 yrs 11 mos",
      "j4.role": "Senior Backend Developer | Technical Leadership Responsibilities",
      "j4.company": "SUNTEGY // Taganrog, Rostov region · On-site",
      "j4.projectA": "<b>MarketGuru</b> — marketplace analytics platform",
      "j4.a1": "Backend development using Node.js and NestJS",
      "j4.a2": "API development and application functionality",
      "j4.a3": "Database integration using PostgreSQL",
      "j4.a4": "Participation in microservices architecture development",
      "j4.projectB": "<b>CSGO DEP / PUBG DEP</b> — gaming-related digital products",
      "j4.b1": "Backend development and implementation of server-side functionality",
      "j4.b2": "Application maintenance and bug fixing",
      "j4.b3": "Development and support of existing project features",
      "j4.final": "Additional responsibilities included participation in technical decisions and development team collaboration",

      "j5.period": "APR 2017 — FEB 2018",
      "j5.len": "11 mos",
      "j5.role": "JavaScript Developer",
      "j5.company": "DreamStudy // Russia · Remote",
      "j5.b1": "Developed modules and maintained an educational platform with video conferencing functionality",

      "j6.period": "JUL 2014 — APR 2017",
      "j6.len": "2 yrs 10 mos",
      "j6.role": "Full-stack Web Developer",
      "j6.company": "Lodoss Team // Rostov region · On-site",
      "j6.b1": "Worked on web applications, social networking products, educational platforms, and SaaS projects",

      "j7.period": "FEB 2013 — JUN 2014",
      "j7.len": "1 yr 5 mos",
      "j7.role": "JavaScript Developer",
      "j7.company": "RusRise // Russia, Rostov region · On-site",
      "j7.b1": "Developed Node.js applications, worked with MongoDB, maintained Boxcar Editor, and developed API integrations with Trello",

      "j8.period": "JAN 2014 — FEB 2014",
      "j8.len": "2 mos",
      "j8.role": "JavaScript Developer (Freelancer)",
      "j8.company": "oDesk // Russia · Remote",
      "j8.b1": "Worked on Node.js and Meteor.js development tasks",

      "j9.period": "APR 2011 — DEC 2012",
      "j9.len": "1 yr 9 mos",
      "j9.role": "PHP Developer",
      "j9.company": "KMGi Group · Crucial BrainWare Development Team // Taganrog · On-site",
      "j9.b1": "Developed and maintained the transparentbusiness site and other web applications, e-commerce modules, and websites",

      "skills.title": "SKILLS",
      "skills.g1": "// Backend Development",
      "skills.g2": "// Architecture & System Design",
      "skills.g3": "// Databases",
      "skills.g4": "// Messaging & Integrations",
      "skills.g5": "// Cloud & Infrastructure",
      "skills.g6": "// Testing & Development Tools",
      "skills.g7": "// Additional Technologies",
      "chip.micro": "Microservices",
      "chip.barch": "Backend architecture",
      "chip.dist": "Distributed applications",
      "chip.extapi": "External API integrations",

      "edu.title": "EDUCATION",
      "edu.c1.title": "Higher education",
      "edu.c1.text": '<b>Southern Federal University</b> (formerly Rostov State University)<br>Engineering degree, Computing machines, complexes, systems, and networks<br><span class="dim">Sep 2006 – Jul 2011</span><br>Design of microprocessor systems, networks, and printed circuit boards.',
      "edu.c2.title": "Certificates · MongoDB University",
      "edu.c2.text": '<b>M101JS</b> — MongoDB for Node.js Developers <span class="dim">· 2013</span><br><b>M101P</b> — MongoDB for Developers <span class="dim">· 2013</span><br><b>M102</b> — MongoDB for DBAs <span class="dim">· 2013</span><br><b>oDesk PHP5 Test</b> — PHP <span class="dim">· 2013</span>',
      "edu.c3.title": "Languages",
      "edu.c3.text": 'Russian — <b>native</b><br>English — <b>B2</b> <span class="dim">(Upper-Intermediate)</span>',

      "profiles.title": "PROFILES",
      "prof.habr": "Habr Career",

      "footer.copy": '© <span id="year">2026</span> Dmitry Sorokin // Senior Backend Engineer'
    }
  };

  const LANG_KEY = "nc-resume-lang";
  let lang = localStorage.getItem(LANG_KEY) || "ru";
  if (!I18N[lang]) lang = "ru";

  function t(key) {
    return I18N[lang][key] !== undefined ? I18N[lang][key] : (I18N.ru[key] || "");
  }

  /* ==================== ПРИМЕНЕНИЕ ЯЗЫКА ==================== */

  function applyLang(l, opts) {
    lang = l;
    localStorage.setItem(LANG_KEY, l);
    document.documentElement.lang = l;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const v = t(el.dataset.i18n);
      if (v === "") return;
      el.textContent = v;
      if (el.classList.contains("glitch")) el.setAttribute("data-text", v);
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const v = t(el.dataset.i18nHtml);
      if (v === "") return;
      el.innerHTML = v;
    });

    document.title = t("meta.title");
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", t("meta.description"));

    document.querySelectorAll(".lang-toggle__opt").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.lang === l);
    });

    // перепечатать строку в hero на новом языке
    if (!opts || !opts.initial) {
      typeHeroRole();
    }
  }

  function initLangToggle() {
    document.querySelectorAll(".lang-toggle__opt").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (btn.dataset.lang !== lang) applyLang(btn.dataset.lang);
      });
    });
  }

  /* ==================== ПЕЧАТЬ В HERO ==================== */

  const typeTarget = document.getElementById("typeline");
  let typeTimer = null;

  function typeHeroRole() {
    if (!typeTarget) return;
    const text = t("hero.role");

    if (typeTimer) clearTimeout(typeTimer);

    if (reducedMotion) {
      typeTarget.textContent = text;
      return;
    }

    let i = 0;
    typeTarget.textContent = "";

    (function type() {
      if (i <= text.length) {
        typeTarget.textContent = text.slice(0, i);
        i++;
        const ch = text[i - 1];
        const pause = ch === "/" || ch === "×" ? 90 : 34;
        typeTimer = setTimeout(type, pause);
      }
    })();
  }

  /* ==================== ЗАГРУЗОЧНЫЙ ЭКРАН ==================== */

  const boot = document.getElementById("boot");
  const bootText = document.getElementById("boot-text");

  function runBoot() {
    if (!boot || !bootText) {
      typeHeroRole();
      return;
    }

    const lines = [t("boot.l1"), t("boot.l2"), t("boot.l3"), t("boot.l4"), t("boot.l5")];

    if (reducedMotion) {
      boot.classList.add("boot--hidden");
      typeHeroRole();
      return;
    }

    let lineIndex = 0;
    let charIndex = 0;
    let output = "";

    function typeLine() {
      if (lineIndex >= lines.length) {
        setTimeout(() => {
          boot.classList.add("boot--hidden");
          typeHeroRole();
        }, 550);
        return;
      }

      const line = lines[lineIndex];

      if (charIndex <= line.length) {
        bootText.textContent = output + line.slice(0, charIndex) + "█";
        charIndex++;
        setTimeout(typeLine, 14 + Math.random() * 22);
      } else {
        output += line + "\n";
        bootText.textContent = output;
        lineIndex++;
        charIndex = 0;
        setTimeout(typeLine, 130);
      }
    }

    typeLine();

    boot.addEventListener("click", function skip() {
      boot.removeEventListener("click", skip);
      bootText.textContent = lines.join("\n");
      setTimeout(() => {
        boot.classList.add("boot--hidden");
        typeHeroRole();
      }, 120);
    });
  }

  /* ==================== ГЛИТЧ ==================== */

  function initGlitch() {
    if (reducedMotion) return;

    const targets = document.querySelectorAll(".glitch");
    if (!targets.length) return;

    function glitchOnce(el) {
      el.classList.add("glitching");
      setTimeout(() => el.classList.remove("glitching"), 380);
    }

    (function schedule() {
      const el = targets[Math.floor(Math.random() * targets.length)];
      glitchOnce(el);
      setTimeout(schedule, 2400 + Math.random() * 3600);
    })();

    targets.forEach((el) => {
      el.addEventListener("mouseenter", () => glitchOnce(el));
    });
  }

  /* ==================== SCROLL-REVEAL ==================== */

  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    items.forEach((el) => observer.observe(el));
  }

  /* ==================== МЕЛОЧИ ==================== */

  function initFooterYear() {
    const year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
  }

  /* ==================== СТАРТ ==================== */

  document.addEventListener("DOMContentLoaded", () => {
    applyTheme(theme);
    initThemeToggle();
    applyLang(lang, { initial: true });
    initLangToggle();
    initFooterYear();
    initGlitch();
    initReveal();
    runBoot();
  });
})();
