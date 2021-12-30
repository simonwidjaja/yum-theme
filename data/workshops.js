/**
 * Workshops
 */
const data = [
  //---
  // Free Summer Webinar
  {
    id: 'free-summer-webinar-1',
    title: {
      meta: 'KOSTENLOSES WEBINAR',
      title: "Interaktive Web Animationen",
    },
    date: "24. August 2021",
    time: "16:30–18:30 Uhr",
    duration: '2h',
    price: "Kostenlos",
    videoUrl: null,
    teaser: {
      body: 'Ein kurzweiliges Wissens Webinar für alle, die beim top-aktuellen Thema Web Animationen einsteigen und mitreden wollen. Wir gehen auf relevante Technologien und Workflows ein, zeigen exklusive Tools mit Wow-Faktor sowie viele Tipps & Tricks direkt aus der Praxis.'
    },
    format: 'Interaktiver Vortrag',    
    tags: ['Einstieg & Übersicht', 'Adobe Tools', 'Animationen', 'Interactivity', 'Web'],
    agenda: [
      'Web Animationen heute – ein kompakter Überblick',
      'Conversion durch Animation, Interaktion und Storytelling',
      'Gute Animationen, schlechte Animationen',
      'Pragmatische Tool und Workflows für den kreativen Alltag',
      'Wiederverwendbare Animations-Effekte ohne Coding oder Timeline',
      'Interaktive Web Animationen – direkt in Adobe XD mit Hero Plugin',
      'Adobe Animate: Mit Toolbelt noch schneller zu aussdrucksstarken Ergebnissen',
      'Animationen mit AfterEffects und Lottie/Bodymovin',
      'Designers only: Creative Coding',
      'SVG Dateien einfach und effektiv animieren',
      'Zeit für deine Fragen',
      'Verlosung von 2 Adobe CC Lizenzen',
      'Ausblick auf kommende Workshops zum Mitmachen und Lernen',
    ],
    hosts: [
      'Simon Widjaja, Web Animation Expert',
      'Joely Tafanalo, Design and Education Expert',
    ],
    audience: [
      'DesignerInnen',
      'Content Creators',
      'Konzepter & Marketers',
    ],
    eventId: '159496094111',
  },

  //---
  // Animate Quick 
  { 
    id: 'adobe-animate-quick',
    title: {
      meta: 'SCHNELLSTART WORKSHOP',
      title: "Adobe Animate für Web",
      sub: ""
    },
    duration: '4h',
    format: 'Mitmachen',
    tags: [],
    videoUrl: null,
    teaser: {
      body: 'In pragmatischen 4h die wichtigsten Animate-Grundlagen plus exklusives Toolbelt* kennenlernen, um in kürzester Zeit interaktive Webanimationen zu erstellen: Vom Banner über animierte Infografiken bis hinzu interaktive Produktwelten. (*Die Lizenz im Wert von $50 ist inbegriffen.)'
    },
    agenda: [
      'die wichtigsten Animate-Grundlagen',
      'schöne Line-Drawing Animationen',
      'Text-Animationen (ohne Zeitleiste und ohne Code)',
      'Hotspots mit Optional Content (ohne Code)',
      'Fotorealistische Produktszene mit interaktiven Animationen',
      'für Web exportieren',
      'Zeit für deine Fragen',
    ],
    hosts: [
      'Simon Widjaja, Web Animation Expert',
      'Joely Tafanalo, Design and Education Expert',
    ],
    audience: [
      'DesignerInnen',
      'Nicht-ProgrammiererInnen',
      'Konzepter & Marketers',
    ],
    eventId: null,    
  },

  //---
  // Hero
  { 
    id: 'xd-hero-quick-1',
    title: {
      meta: 'SCHNELLSTART WORKSHOP',
      title: "Interaktive Web Animationen – direkt in Adobe XD mit Hero Plugin",
      sub: ""
    },
    duration: '4h',
    format: 'Mitmachen',
    tags: ['Adobe XD', 'Hero', 'Animation', 'Interactivity', 'Web'],
    videoUrl: null,
    teaser: {
      body: "Einfacher wird's nicht: Mit dem mächtigen Hero Plugin interaktive Animationen in Minuten für's Web erstellen. Ob mit einem Klick einen Effekt anwenden, mit der Zeitleiste komplexe Choreographien erstllen oder Inhalte interaktiv aufzubereiten. Hier geht es direkt von 0 auf 100."
    },
    agenda: [
      'die wichtigsten Adobe XD Grundlagen',
      'mit Adobe XD direkt für\'s Web zu produzieren',
      'Effektsystem (u.a. Magnet-Effekt)',
      'Animieren mit der Zeitleisten',
      'Banner-Erstellung',
      'Interaktive Produktwelt erstellen',
      'Animation mit mehrere Szenen',
      'Umgang mit wiederverwertbaren Code-Schnippsel',
      'Erweiterungsmöglichkeiten mit JavaScript',
      'für Web exportieren',
    ],
    hosts: [
      'Simon Widjaja, Web Animation Expert',
      'Joely Tafanalo, Design and Education Expert',
    ],
    audience: [
      'DesignerInnen',
      'Nicht-ProgrammiererInnen',
      'Konzepter & Marketers',
    ],
    eventId: null,    
  },

  //---
  // Creative Coding
  { 
    id: 'creative-coding-quick',
    title: {
      meta: 'SCHNELLSTART WORKSHOP',
      title: "Designers only: Creative Coding",
      sub: ""
    },
    duration: '4h',
    format: 'Mitmachen',    
    tags: ['Designer friendly', 'Animation', 'Interactivity', 'Web'],
    videoUrl: null,
    teaser: {
      body: 'Spielerisch, Schritt für Schritt und mit nur einer Zeile Code neue Welten erobern. In den Hauptrollen: Adobe XD, das Animations-Wunderkind Greensock und das Hero Plug-In. Keine Code-Kenntnisse erforderlich.'
    },
    agenda: [
      'Kreative Freude mit nur einer einzelnen Zeile Code ;)',
      'Mit Copy/Paste und minimalen Anpassungen dynamische Animationen erzeugen',
      'Mit einer Zeile hunderte Elemente auf einmal animieren',
      'Branchenstandard Greensock (GSAP)',
      'Pragmatisches Grundverständnis für Code (auf das absolut Wesentliche reduziert)',
      'Animieren von SVG-Grafiken',
      'Alles 100% anwendbar auf andere HTML/SVG-Projekte',
    ],
    hosts: [
      'Simon Widjaja, Web Animation Expert',
      'Joely Tafanalo, Design and Education Expert',
    ],
    audience: [
      'DesignerInnen',
      'Nicht-ProgrammiererInnen',
      'Konzepter & Marketers',
    ],
    eventId: null,    
  },

  //---
  // After Effects + Lottie
  { 
    id: 'ae-lottie-quick',
    title: {
      meta: 'SCHNELLSTART WORKSHOP',
      title: "Lottie: Adobe After Effects für Web",
      sub: ""
    },
    duration: '4h',
    format: 'Mitmachen',    
    tags: ['After Effects', 'Lottie', 'Adobe XD', 'SVG'],
    videoUrl: null,
    teaser: {
      body: 'Effizienter Schnelleinstieg für Grafiker, Illustrator/XD/After Effects User. Banner, Icons und Infografiken in 4h zum Leben erwecken. Keine After Effects Kenntnisse erforderlich.'
    },
    agenda: [
      'After Effects Grundlagen',
      'Effektives Arbeiten mit der Zeitleiste',
      'Line Drawing Animationen',
      'Lottie export',
      'Hilfreiche Werkzeuge',
      'Interaktivität und Erweiterungsmöglichkeiten',
    ],
    hosts: [
      'Simon Widjaja, Web Animation Expert',
      'Joely Tafanalo, Design and Education Expert',
    ],
    audience: [
      'DesignerInnen',
      'Nicht-ProgrammiererInnen',
      'Konzepter & Marketers',
    ],
    eventId: null,    
  },

  //---
  // SVG GSAP
  { 
    id: 'svg-gsap-quick',
    title: {
      meta: 'SCHNELLSTART WORKSHOP',
      title: "SVG Grafiken effektiv und performant mit Greensock animieren",
      sub: ""
    },
    duration: '4h',
    format: 'Mitmachen',    
    tags: ['SVG', 'Adobe XD', 'Animation'],
    videoUrl: null,
    teaser: {
      body: 'Im SVG Format schlummert enormes Potential. Dank etwas JavaScript und praktischen Tricks erwecken wir gewöhnliche SVGs zum Leben. Keine Code-Kenntnisse erforderlich.'
    },
    agenda: [
      'Standalone SVG: Animiert und Interaktiv',
      'Pragmatisches Grundverständnis für Code (auf das absolut Wesentliche reduziert)',
      'Mit Copy/Paste und minimalen Anpassungen dynamische Animationen erzeugen',
      'Grundlagen des Branchenstandards Greensock (GSAP)',
      'Mit einer Zeile hunderte Elemente auf einmal animieren',
      'Einbinden von interaktiven/animierten SVG in HTML',
    ],
    hosts: [
      'Simon Widjaja, Web Animation Expert',
      'Joely Tafanalo, Design and Education Expert',
    ],
    audience: [
      'DesignerInnen',
      'Nicht-ProgrammiererInnen',
      'Konzepter & Marketers',
    ],
    eventId: null,    
  },

  // //---
  // // WIP
  // { 
  //   id: 'wip',
  //   title: {
  //     meta: 'SCHNELLSTART WORKSHOP',
  //     title: "WIP",
  //     sub: ""
  //   },
  //   tags: ['4h', 'Mitmachen'],
  //   videoUrl: null,
  //   teaser: {
  //     body: 'WIP'
  //   },
  //   agenda: [
  //     'WIP',
  //   ],
  //   hosts: [
  //     'Simon Widjaja, Web Animation Expert',
  //     'Joely Tafanalo, Design and Education Expert',
  //   ],
  //   audience: [
  //     'DesignerInnen',
  //     'Nicht-ProgrammiererInnen',
  //     'Konzepter & Marketers',
  //   ],
  //   eventId: null,    
  // },


]


/**
 * Get all workshops
 */
export function getWorkshops() {
  return data
}

/**
 * Get workshop by id
 */
export function getWorkshop(id) {
  return data.find(item => item.id == id)
}