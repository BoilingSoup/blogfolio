import Flowtoolz1 from "$lib/assets/projects/flowtoolz/1.png";
import Flowtoolz2 from "$lib/assets/projects/flowtoolz/2.png";
import Dockfiles1 from "$lib/assets/projects/dockfiles/1.png";
import Tierlist1 from "$lib/assets/projects/tierlistlol/1.png";

export const PICTURE = "p";
export const VIDEO = "v";

type Picture = typeof PICTURE;
type Video = typeof VIDEO;

export type ProjectData = Array<{
  carousel: Array<{ type: Picture | Video; src: string; width: number; height: number; alt: string }>;
  title: string;
  url: string;
  description: string;
  languages: Array<TechInfo>;
  frameworks: Array<TechInfo>;
}>;

type TechInfo = {
  name: string;
  color: string;
};

const LANGUAGES = {
  typescript: {
    name: "TypeScript",
    color: "bg-blue-700"
  },
  php: {
    name: "PHP",
    color: "bg-purple-800"
  }
} as const;

const FRAMEWORKS = {
  nextjs: {
    name: "Next.js",
    color: "bg-black"
  },
  laravel: {
    name: "Laravel",
    color: "bg-red-500"
  },
  none: {
    name: "None",
    color: "bg-gray-700"
  }
} as const;

export const projectData: ProjectData = [
  {
    carousel: [
      { type: PICTURE, src: Flowtoolz1, width: 1920, height: 980, alt: "" },
      { type: PICTURE, src: Flowtoolz2, width: 1920, height: 980, alt: "" }
    ],
    title: "Flowtoolz",
    url: "https://flowtoolz.xyz",
    description: "..",
    languages: [LANGUAGES.typescript],
    frameworks: [FRAMEWORKS.none]
  },
  {
    carousel: [{ type: PICTURE, src: Dockfiles1, width: 1920, height: 980, alt: "" }],
    title: "Dockfiles",
    url: "https://dockfiles.xyz",
    description: "..",
    languages: [LANGUAGES.typescript, LANGUAGES.php],
    frameworks: [FRAMEWORKS.nextjs, FRAMEWORKS.laravel]
  },
  {
    carousel: [{ type: PICTURE, src: Tierlist1, width: 1920, height: 980, alt: "" }],
    title: "Tierlist.lol",
    url: "https://tierlist.lol",
    description: "...",
    languages: [LANGUAGES.typescript, LANGUAGES.php],
    frameworks: [FRAMEWORKS.nextjs, FRAMEWORKS.laravel]
  }
];
