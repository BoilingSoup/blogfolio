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
    link: {
      url: string;
      text?: string;
    };
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
    link: {
      url: "https://tierlist.fun"
    },
    blurb: "Create, save, export, and share custom tier list diagrams.",
    description: `
Create your own tier list diagrams. Users can save tier lists to the cloud, export PNG, and make their tier lists public/private for other users to clone and edit.

I used Cloudinary to store the uploaded images, and CockroachDB (a flavor of Postgres) to store data.
`,
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
    link: {
      url: "https://dockfiles.tech"
    },
    blurb: "A collection of downloadable Dockerfiles with a like, bookmark, comment, and notification system.",
    description: `
Dock Files is a repository of Docker Compose setups for some common tech stacks and utilities. Each setup provides a README description and source to download the repository.

Users can search, filter, like and bookmark the setups; they can also leave comments and reply to each other. When logged in, the server is polled for notifications (every 30 seconds) and notifies the user if they have received a new reply.
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
    link: {
      url: "https://flowtoolz.xyz"
    },
    blurb: "Real-time charting that plots buyer vs. seller volume side-by-side.",
    description: `
Flow Toolz is a charting app that listens to live cryptocurrency market data and plots the transaction sizes (volume) of buyers in comparison to the volume of sellers. <a href="https://en.wikipedia.org/wiki/Order_flow_trading#Reading_Footprint_candles" target="_blank" class="underline">footprint candles</a>.
Charts can be aggregated by both X-axis (time) and Y-axis (price).
<br/>
Web Workers were used for multi-threading. This allows users to subscribe and aggregate multiple WebSocket feeds at the same time.
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
    link: {
      url: "https://repobullet.in/BoilingSoup",
      text: "https://repobullet.in"
    },
    icon: RepobulletinIcon,
    title: "Repo Bulletin",
    video: DemoVideo,
    blurb: "Create a personalized page to display your public GitHub repositories.",
    description:
      "Users are authenticated through GitHub OAuth2. After creating an account, users can create a page to group and categorize their public GitHub repositories.",
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
