import DemoVideo from "$lib/assets/projects/tierlistlol/demo.mp4";

import FlowtoolzIcon from "$lib/assets/projects/flowtoolz/thumbnail.png";
import Flowtoolz1 from "$lib/assets/projects/flowtoolz/1.png";
import Flowtoolz2 from "$lib/assets/projects/flowtoolz/2.png";

import DockfilesIcon from "$lib/assets/projects/dockfiles/thumbnail.png";
import Dockfiles1 from "$lib/assets/projects/dockfiles/1.png";

import TierlistIcon from "$lib/assets/projects/tierlistlol/thumbnail.png";
import Tierlist1 from "$lib/assets/projects/tierlistlol/1.png";

import RepobulletinIcon from "$lib/assets/projects/repobulletin/thumbnail.png";

// export const PICTURE = "p";
// export const VIDEO = "v";

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
    // carousel: Array<{ type: typeof PICTURE | typeof VIDEO; src: string; width: number; height: number; alt: string }>;
    video: string;
    title: string;
    url: string;
    /** short descriptive blurb to display on projects index page */
    blurb: string;
    /** longer about section to display on project details page */
    description: string;
    techStack: {
      category: "fullstack" | "frontend" | "backend";
      languages: Array<TechInfo>;
      frameworks: Array<TechInfo>;
    };
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
  [TIERLIST]: {
    id: "tierlist",
    icon: TierlistIcon,
    // carousel: [{ type: PICTURE, src: Tierlist1, width: 1920, height: 980, alt: "" }],
    video: DemoVideo,
    title: "Tier List Maker",
    url: "https://tierlist.fun",
    blurb: "Create, save, share, and export tier list diagrams.",
    description: "...",
    techStack: {
      category: "fullstack",
      languages: [LANGUAGES.typescript, LANGUAGES.php],
      frameworks: [FRAMEWORKS.nextjs, FRAMEWORKS.laravel]
    }
  },
  [DOCKFILES]: {
    id: "dockfiles",
    icon: DockfilesIcon,
    // carousel: [{ type: PICTURE, src: Dockfiles1, width: 1920, height: 980, alt: "" }],
    video: DemoVideo,
    title: "Dock Files",
    url: "https://dockfiles.tech",
    blurb: "A collection of downloadable Dockerfiles with a like, bookmark, comment, and notification system.",
    description: `
Dockfiles is a repository of Docker Compose setups for some commonly used tech stacks and utilities. Users can comment on resources and reply to other users.
`,
    techStack: {
      category: "fullstack",
      languages: [LANGUAGES.typescript, LANGUAGES.php],
      frameworks: [FRAMEWORKS.nextjs, FRAMEWORKS.laravel]
    }
  },
  [FLOWTOOLZ]: {
    id: "flowtoolz",
    icon: FlowtoolzIcon,
    // carousel: [
    //   { type: PICTURE, src: Flowtoolz1, width: 1920, height: 980, alt: "" },
    //   { type: PICTURE, src: Flowtoolz2, width: 1920, height: 980, alt: "" }
    // ],
    video: DemoVideo,
    title: "Flow Toolz",
    url: "https://flowtoolz.xyz",
    blurb: "Real-time charting that plots buying and selling volume side-by-side.",
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
    techStack: {
      category: "frontend",
      languages: [LANGUAGES.typescript],
      frameworks: [FRAMEWORKS.none]
    }
  },
  [REPOBULLETIN]: {
    id: "repobulletin",
    url: "https://repobullet.in",
    icon: RepobulletinIcon,
    title: "Repo Bulletin",
    // carousel: [],
    video: DemoVideo,
    blurb: "Create a personalized page to show off your public GitHub repositories.",
    description: "efeffefefe",
    techStack: {
      category: "fullstack",
      frameworks: [FRAMEWORKS.nextjs],
      languages: [LANGUAGES.typescript, LANGUAGES.golang]
    }
  },
  order: IDs
};

export const projectList = projectData.order.map((id) => projectData[id]);
