import FlowtoolzIcon from "$lib/assets/projects/flowtoolz/thumbnail.png";
import Flowtoolz1 from "$lib/assets/projects/flowtoolz/1.png";
import Flowtoolz2 from "$lib/assets/projects/flowtoolz/2.png";

import DockfilesIcon from "$lib/assets/projects/dockfiles/thumbnail.png";
import Dockfiles1 from "$lib/assets/projects/dockfiles/1.png";

import TierlistIcon from "$lib/assets/projects/tierlistlol/thumbnail.png";
import Tierlist1 from "$lib/assets/projects/tierlistlol/1.png";

import RepobulletinIcon from "$lib/assets/projects/repobulletin/thumbnail.png";

export const PICTURE = "p";
export const VIDEO = "v";

type Picture = typeof PICTURE;
type Video = typeof VIDEO;

const TIERLIST = "tierlist";
const FLOWTOOLZ = "flowtoolz";
const DOCKFILES = "dockfiles";
const REPOBULLETIN = "repobulletin";

const IDs = [TIERLIST, DOCKFILES, FLOWTOOLZ, REPOBULLETIN] as const;

// faster than Array.findIndex
export const getProjectIndex = (id: (typeof IDs)[number]): number => {
  return {
    [TIERLIST]: 0,
    [DOCKFILES]: 1,
    [FLOWTOOLZ]: 2,
    [REPOBULLETIN]: 3
  }[id];
};

export type IDs = typeof IDs;

type ProjectData = {
  order: typeof IDs;
} & {
  [id in (typeof IDs)[number]]: {
    id: (typeof IDs)[number];
    icon: string;
    carousel: Array<{ type: Picture | Video; src: string; width: number; height: number; alt: string }>;
    title: string;
    url: string;
    description: string;
    languages: Array<TechInfo>;
    frameworks: Array<TechInfo>;
  };
};

export type Project = ProjectData[(typeof IDs)[number]];

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
  },
  golang: {
    name: "GoLang",
    color: "bg-blue-400"
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

export const projectData: ProjectData = {
  tierlist: {
    id: "tierlist",
    icon: TierlistIcon,
    carousel: [{ type: PICTURE, src: Tierlist1, width: 1920, height: 980, alt: "" }],
    title: "Tierlist.lol",
    url: "https://tierlist.lol",
    description: "...",
    languages: [LANGUAGES.typescript, LANGUAGES.php],
    frameworks: [FRAMEWORKS.nextjs, FRAMEWORKS.laravel]
  },
  dockfiles: {
    id: "dockfiles",
    icon: DockfilesIcon,
    carousel: [{ type: PICTURE, src: Dockfiles1, width: 1920, height: 980, alt: "" }],
    title: "Dockfiles",
    url: "https://dockfiles.xyz",
    description: `
Dockfiles is a repository of Docker Compose setups for some commonly used tech stacks and utilities. Users can comment on resources and reply to other users.
`,
    languages: [LANGUAGES.typescript, LANGUAGES.php],
    frameworks: [FRAMEWORKS.nextjs, FRAMEWORKS.laravel]
  },
  flowtoolz: {
    id: "flowtoolz",
    icon: FlowtoolzIcon,
    carousel: [
      { type: PICTURE, src: Flowtoolz1, width: 1920, height: 980, alt: "" },
      { type: PICTURE, src: Flowtoolz2, width: 1920, height: 980, alt: "" }
    ],
    title: "Flowtoolz",
    url: "https://flowtoolz.xyz",
    description: `
Flowtoolz is a chart visualizer that displays live buy/sell data as <a href="https://en.wikipedia.org/wiki/Order_flow_trading#Reading_Footprint_candles" target="_blank" class="underline">footprint candles</a>.
<br/>
<br/>
The data is sourced from public crypto WebSocket APIs.
Charts can be aggregated by both X-axis (time) and Y-axis (price).
<br/>
<br/>
Web Workers were used for multi-threading. This allows users to subscribe and aggregate multiple WebSocket feeds at the same time.
<br/>
<br/>
The UI elements were made with vanilla HTML/CSS/TypeScript, and the chart was made with <a href="https://pixijs.com/" target="_blank" class="underline">PixiJS</a> <code>&#8212;</code> a low-level wrapper around the WebGL API.
`,
    languages: [LANGUAGES.typescript],
    frameworks: [FRAMEWORKS.none]
  },
  repobulletin: {
    frameworks: [FRAMEWORKS.nextjs],
    languages: [LANGUAGES.typescript, LANGUAGES.golang],
    id: "repobulletin",
    url: "https://repobullet.in",
    icon: RepobulletinIcon,
    title: "Repobulletin",
    carousel: [],
    description: "efeffefefe"
  },
  order: IDs
};

export const projectList = projectData.order.map((id) => projectData[id]);
