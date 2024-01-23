import DemoVideo from "$lib/assets/projects/tierlistlol/demo.mp4";

import FlowtoolzIcon from "$lib/assets/projects/flowtoolz/thumbnail.png";
import Flowtoolz1 from "$lib/assets/projects/flowtoolz/1.png";
import Flowtoolz2 from "$lib/assets/projects/flowtoolz/2.png";

import DockfilesIcon from "$lib/assets/projects/dockfiles/thumbnail.png";
import Dockfiles1 from "$lib/assets/projects/dockfiles/1.png";

import TierlistIcon from "$lib/assets/projects/tierlistlol/thumbnail.png";
import Tierlist1 from "$lib/assets/projects/tierlistlol/1.png";

import RepobulletinIcon from "$lib/assets/projects/repobulletin/thumbnail.png";

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
    video: string;
    title: string;
    url: string;
    /** short descriptive blurb to display on projects index page */
    blurb: string;
    /** longer about section to display on project details page */
    description: string;
    techStack: {
      languages: Array<TechInfo>;
      frameworks: Array<TechInfo>;
    };
    source:
      | {
          public: true;
          urls: Array<string>;
        }
      | {
          public: false;
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
    video: DemoVideo,
    title: "Tier List Maker",
    url: "https://tierlist.fun",
    blurb: "Create, save, export, and share custom tier list diagrams.",
    description: "...",
    techStack: {
      languages: [LANGUAGES.typescript, LANGUAGES.php],
      frameworks: [FRAMEWORKS.nextjs, FRAMEWORKS.laravel]
    },
    source: {
      public: true,
      urls: ["https://github.com/BoilingSoup/tierlist-maker-frontend", "https://github.com/BoilingSoup/tierlist-maker-backend"]
    }
  },
  [DOCKFILES]: {
    id: "dockfiles",
    icon: DockfilesIcon,
    video: DemoVideo,
    title: "Dock Files",
    url: "https://dockfiles.tech",
    blurb: "A collection of downloadable Dockerfiles with a like, bookmark, comment, and notification system.",
    description: `
Dockfiles is a repository of Docker Compose setups for some commonly used tech stacks and utilities. Users can comment on resources and reply to other users.
`,
    techStack: {
      languages: [LANGUAGES.typescript, LANGUAGES.php],
      frameworks: [FRAMEWORKS.nextjs, FRAMEWORKS.laravel]
    },
    source: {
      public: true,
      urls: ["https://github.com/BoilingSoup/dockfiles.tech"]
    }
  },
  [FLOWTOOLZ]: {
    id: "flowtoolz",
    icon: FlowtoolzIcon,
    video: DemoVideo,
    title: "Flow Toolz",
    url: "https://flowtoolz.xyz",
    blurb: "Real-time charting that plots buyer vs. seller volume side-by-side.",
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
      languages: [LANGUAGES.typescript],
      frameworks: [FRAMEWORKS.none]
    },
    source: {
      public: false
    }
  },
  [REPOBULLETIN]: {
    id: "repobulletin",
    url: "https://repobullet.in/BoilingSoup",
    icon: RepobulletinIcon,
    title: "Repo Bulletin",
    video: DemoVideo,
    blurb: "Create a personalized page to display your public GitHub repositories.",
    description: "efeffefefe",
    techStack: {
      frameworks: [FRAMEWORKS.nextjs],
      languages: [LANGUAGES.typescript, LANGUAGES.golang]
    },
    source: {
      public: false
    }
  },
  order: IDs
};

export const projectList = projectData.order.map((id) => projectData[id]);
