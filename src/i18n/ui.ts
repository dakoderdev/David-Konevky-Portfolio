export const languages = {
  en: "English",
  es: "Español",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

// Headings split into arrays are rendered one <span> per chunk so text-balance
// breaks between chunks, never inside them. Each language picks its own chunks.
export const ui = {
  en: {
    "meta.title": "David Konevky - Portfolio | Design Engineer",
    "meta.description": "Web developer, UX/UI, Programming",
    "meta.ogDescription": "Design engineer. I build interfaces and experiences for the modern web.",

    "nav.home": "Home",
    "nav.work": "Work",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    // Keyboard shortcut letters shown as [X] next to each nav link
    "nav.homeKey": "H",
    "nav.workKey": "W",
    "nav.blogKey": "B",
    "nav.contactKey": "C",
    "nav.toggleMenu": "Toggle menu",
    "nav.switchLang": "ESPAÑOL",
    "nav.switchLangLabel": "Ver en español",

    "hero.role": "Design Engineer",

    "intro.title": ["Translating", "your ideas in", "20/20 vision"],
    "intro.text":
      "I love to take a hands-on approach on everything that I do. My work is to build in relation to your needs, filtered through my specific and personal point of view.",

    "skills.title": "My Skills",
    "skills.languages": "Languages",
    "skills.frameworks": "Frameworks",
    "skills.backend": "Back-end",
    "skills.design": "Design",
    "skills.libraries": "Libraries",
    "skills.infrastructure": "Infrastructure",
    "skills.logoAlt": "Logo of",

    "work.title": "My Work",
    "work.imageAlt": "Website of",

    "education.title": "Education",
    "education.university": "2nd year student from Universidad Tecnológica Nacional",
    "education.studying": "Currently studying Computer Programming",

    "blog.title": ["If you want", "to learn more", "about", "the making-of:"],
    "blog.text":
      "Here are some articles about my existing, ongoing, and future projects. They contain countless amounts of information about my design and development process, from early ideas to final execution.",
    "blog.seeMore": "See More",

    "footer.contact": "Contact",
  },
  es: {
    "meta.title": "David Konevky - Portafolio | Ingeniero Front-End",
    "meta.description": "Desarrollador web, UX/UI, Programación",
    "meta.ogDescription": "Design engineer. Construyo interfaces y experiencias para la web moderna.",

    "nav.home": "Inicio",
    "nav.work": "Trabajos",
    "nav.blog": "Blog",
    "nav.contact": "Contacto",
    "nav.homeKey": "I",
    "nav.workKey": "T",
    "nav.blogKey": "B",
    "nav.contactKey": "C",
    "nav.toggleMenu": "Abrir o cerrar menú",
    "nav.switchLang": "ENGLISH",
    "nav.switchLangLabel": "View in English",

    "hero.role": "Ingeniero Front-End",

    "intro.title": ["Materializando", "tus ideas con", "visión 20/20"],
    "intro.text":
      "Me encanta involucrarme de lleno en todo lo que hago. Mi trabajo es construir en función de tus necesidades, filtrado a través de mi punto de vista específico y personal.",

    "skills.title": "Mis Habilidades",
    "skills.languages": "Lenguajes",
    "skills.frameworks": "Frameworks",
    "skills.backend": "Back-end",
    "skills.design": "Diseño",
    "skills.libraries": "Librerías",
    "skills.infrastructure": "Infraestructura",
    "skills.logoAlt": "Logo de",

    "work.title": "Mis Trabajos",
    "work.imageAlt": "Sitio web de",

    "education.title": "Formación",
    "education.university": "Estudiante de 2.º año en la Universidad Tecnológica Nacional",
    "education.studying": "Actualmente estudiando Tecnicatura de Programación",

    "blog.title": ["Si querés", "saber más", "sobre", "el detrás de escena:"],
    "blog.text":
      "Acá hay algunos artículos sobre mis proyectos actuales, en curso y futuros. Tienen muchísima información sobre mi proceso de diseño y desarrollo, desde las primeras ideas hasta la ejecución final.",
    "blog.seeMore": "Ver más",

    "footer.contact": "Contacto",
  },
} as const;

export function getLang(locale: string | undefined): Lang {
  return locale && locale in languages ? (locale as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
  return <K extends keyof (typeof ui)["en"]>(key: K): (typeof ui)[Lang][K] => ui[lang][key];
}

/** Prefix an absolute path with the locale ("/#work" -> "/es/#work"). English stays unprefixed. */
export function localizePath(path: string, lang: Lang) {
  return lang === defaultLang ? path : `/${lang}${path}`;
}
