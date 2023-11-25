import Flowtoolz1 from "$lib/assets/projects/flowtoolz/1.png";
import Flowtoolz2 from "$lib/assets/projects/flowtoolz/2.png";
import LaravelCookiesThumbnail from "$lib/assets/blog/sanctum-auth-guide/thumbnail.png";

export const PICTURE = "p";
export const VIDEO = "v";

type Picture = typeof PICTURE;
type Video = typeof VIDEO;

export type ProjectData = Array<{
  carousel: Array<{ type: Picture | Video; src: string; width: number; height: number; alt: string }>;
  title: string;
  url: string;
  description: string;
  languages: Array<string>;
  frameworks: Array<string>;
}>;

export const projectData: ProjectData = [
  {
    carousel: [
      { type: PICTURE, src: Flowtoolz1, width: 1920, height: 974, alt: "" },
      { type: PICTURE, src: Flowtoolz2, width: 1920, height: 977, alt: "" }
    ],
    title: "Flowtoolz",
    url: "https://flowtoolz.xyz",
    description: "..",
    languages: ["TypeScript"],
    frameworks: ["None"]
  },
  {
    carousel: [{ type: PICTURE, src: LaravelCookiesThumbnail, width: 80, height: 80, alt: "" }],
    title: "Dockfiles",
    url: "https://dockfiles.xyz",
    description: "..",
    languages: ["TypeScript", "PHP"],
    frameworks: ["Next.js", "Laravel"]
  },
  {
    carousel: [{ type: PICTURE, src: LaravelCookiesThumbnail, width: 80, height: 80, alt: "" }],
    title: "Tierlist.lol",
    url: "https://tierlist.lol",
    description: "...",
    languages: ["TypeScript", "PHP"],
    frameworks: ["Next.js", "Laravel"]
  }
];
