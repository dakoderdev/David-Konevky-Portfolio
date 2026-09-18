import corralonArtesan from "../assets/projects/corralon-artesan.png";
import showboxd from "../assets/projects/showboxd.png";
import vinimusic from "../assets/projects/vinimusic.png";

const PROJECTS = [
    {
        name: "Corralón Artesan",
        stack: ["Next.js", "Tailwind CSS", "Vercel"],
        image: corralonArtesan,
        link: "https://corralonartesan.com/",
        description: `Digital catalog for a hardware & building supplies store, custom-built,
        with almost 200 visits per month. It's designed so customers
        can explore its products quickly and intuitively and arrive with a clear idea of what they're looking for.`,
    },
    {
        name: "Showboxd",
        stack: ["Next.js", "Tailwind CSS", "Supabase", "Vercel"],
        image: showboxd,
        link: "https://showboxd.vercel.app/",
        description: `Interactive vertical slice of a platform for rating, logging, and commenting on TV shows. Has an authorization system and uses Supabase as its database`,
    },
    {
        name: "Vinimusic",
        stack: ["Next.js", "Auth.js", "Tailwind CSS", "Zustand", "Netlify"],
        image: vinimusic,
        link: "https://vinimusic.netlify.app/",
        description: `Custom mock-up of a vinyl records E-Commerce page, with a Frutiger Aero aesthetic.`,
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