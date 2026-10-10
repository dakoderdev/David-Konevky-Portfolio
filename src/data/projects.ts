import corralonArtesan from "../assets/projects/corralon-artesan.png";
import showboxd from "../assets/projects/showboxd.png";
import vinimusic from "../assets/projects/vinimusic.png";

const PROJECTS = [
    {
        name: "Corralón Artesan",
        stack: ["Next.js", "Tailwind CSS", "Vercel"],
        image: corralonArtesan,
        link: "https://corralonartesan.com/",
        description: {
            en: `Digital catalog for a hardware & building supplies store, custom-built,
        with almost 200 visits per month. It's designed so customers
        can explore its products quickly and intuitively and arrive with a clear idea of what they're looking for.`,
            es: `Catálogo digital a medida para un corralón de materiales de construcción y ferretería,
        con casi 200 visitas por mes. Está pensado para que los clientes
        exploren los productos de forma rápida e intuitiva y lleguen con una idea clara de lo que buscan.`,
        },
    },
    {
        name: "Showboxd",
        stack: ["Next.js", "Tailwind CSS", "Supabase", "Vercel"],
        image: showboxd,
        link: "https://showboxd.vercel.app/",
        description: {
            en: `Interactive vertical slice of a platform for rating, logging, and commenting on TV shows. Has an authorization system and uses Supabase as its database`,
            es: `Vertical slice interactivo de una plataforma para puntuar, registrar y comentar series. Tiene un sistema de autenticación y usa Supabase como base de datos.`,
        },
    },
    {
        name: "Vinimusic",
        stack: ["Next.js", "Auth.js", "Tailwind CSS", "Zustand", "Netlify"],
        image: vinimusic,
        link: "https://vinimusic.netlify.app/",
        description: {
            en: `Custom mock-up of a vinyl records E-Commerce page, with a Frutiger Aero aesthetic.`,
            es: `Maqueta a medida de un E-Commerce de discos de vinilo, con estética Frutiger Aero.`,
        },
    },
    /*{
        name: "Ticketz",
        stack: ["JavaScript", "CSS", "HTML"],
        image: "/projects/ticketz.png",
        link: "https://ticketzok.netlify.app/",
        description: `Page for`,
    }*/
]

export default PROJECTS;