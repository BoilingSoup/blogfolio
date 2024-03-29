import TierlistIcon from "$lib/assets/projects/tierlistlol/thumbnail.png";
import TierListDemo from "$lib/assets/projects/tierlistlol/demo.mp4";

import DockfilesIcon from "$lib/assets/projects/dockfiles/thumbnail.png";
import DockfilesDemo from "$lib/assets/projects/dockfiles/demo.mp4";

import FlowtoolzIcon from "$lib/assets/projects/flowtoolz/thumbnail.png";
import FlowtoolzDemo from "$lib/assets/projects/flowtoolz/demo.mp4";

import RepobulletinIcon from "$lib/assets/projects/repobulletin/thumbnail.png";
import RepobulletinDemo from "$lib/assets/projects/repobulletin/demo.mp4";

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
    testAccount?: {
      email: string;
      password: string;
    };
    source?: Array<string>;
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
    color: "bg-violet-700"
  },
  golang: {
    name: "Golang",
    color: "bg-sky-700"
  }
} as const;

const FRAMEWORKS = {
  nextjs: {
    name: "Next.js",
    color: "bg-black"
  },
  laravel: {
    name: "Laravel",
    color: "bg-red-600"
  },
  none: {
    name: "None",
    color: "bg-gray-700"
  }
} as const;

const DEFAULT_TEST_ACCOUNT = {
  email: "test@test.com",
  password: "testing123"
} as const;

export const projectData: ProjectData = {
  [TIERLIST]: {
    id: "tierlist",
    icon: TierlistIcon,
    video: TierListDemo,
    title: "Tier List Builder",
    link: {
      url: "https://tierlist.fun"
    },
    blurb: "Create, save, share, and export custom tier list diagrams.",
    description: `
Create your own tier list diagrams. Users can save tier lists to the cloud, export PNG, and make their tier lists public/private for other users to copy and edit.

I used Cloudinary to store the uploaded images, and CockroachDB (a flavor of Postgres) to store data.

<span class="font-bold text-gray-700 transition ease-in-out dark:text-gray-300">"S tier project" &#8212</span> <a href="https://twitter.com/CockroachDB/status/1711783125007675617" target="_blank" class="underline link-light-dark">@CockroachDB on Twitter</a> 😁
`,
    techStack: {
      languages: [LANGUAGES.typescript, LANGUAGES.php],
      frameworks: [FRAMEWORKS.nextjs, FRAMEWORKS.laravel]
    },
    source: ["https://github.com/BoilingSoup/tierlist-maker-frontend", "https://github.com/BoilingSoup/tierlist-maker-backend"],
    testAccount: DEFAULT_TEST_ACCOUNT
  },
  [DOCKFILES]: {
    id: "dockfiles",
    icon: DockfilesIcon,
    video: DockfilesDemo,
    title: "Dock Files",
    link: {
      url: "https://dockfiles.tech"
    },
    blurb: "A collection of downloadable Dockerfiles with a like, bookmark, comment, and notification system.",
    description: `
Dock Files is a collection of Docker Compose repositories for common tech stacks and utilities. Each repository provides a README description and several download methods.

Users can search, filter, like and bookmark the repositories; they can also leave comments and reply to each other. When logged in, the server is polled for notifications (every 30 seconds) and notifies the user if they have received a new reply.
`,
    techStack: {
      languages: [LANGUAGES.typescript, LANGUAGES.php],
      frameworks: [FRAMEWORKS.nextjs, FRAMEWORKS.laravel]
    },
    source: ["https://github.com/BoilingSoup/dockfiles.tech"],
    testAccount: DEFAULT_TEST_ACCOUNT
  },
  [FLOWTOOLZ]: {
    id: "flowtoolz",
    icon: FlowtoolzIcon,
    video: FlowtoolzDemo,
    title: "Flow Toolz",
    link: {
      url: "https://flowtoolz.xyz"
    },
    blurb: "Real-time charting that plots buyer vs. seller volume side-by-side.",
    description: `
Flow Toolz is a charting app that connects to live cryptocurrency data and plots the transaction sizes (volume) of buyers in comparison to the volume of sellers. Also known as a <a href="https://en.wikipedia.org/wiki/Order_flow_trading#Reading_Footprint_candles" target="_blank" class="underline link-light-dark">footprint chart</a>.

Charts can be aggregated by both X-axis (time) and Y-axis (price). 

Web Workers are used for multi-threading. This allows users to connect to multiple data sources in the background and switch between their charts.

The UI elements were made with vanilla HTML/CSS/TypeScript, and the chart was made with <a href="https://pixijs.com/" target="_blank" class="underline link-light-dark">PixiJS</a> <code>&#8212;</code> a 2D graphics library.
`,
    techStack: {
      languages: [LANGUAGES.typescript],
      frameworks: [FRAMEWORKS.none]
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
    video: RepobulletinDemo,
    blurb: "Create a personalized page to display your public GitHub repositories.",
    description: `
Users can authenticate with GitHub's OAuth flow. After registering, users can create a page to display their public GitHub repositories.

When a repository is pinned to a page it will display the following:

<ul class="[&>li]:ml-8"><li>a link to the repository</li><li>the programming language most used in the repository</li><li>its GitHub star count</li></ul>
The user's personalized page will have a URL path that matches their GitHub username (<a href="https://repobullet.in/BoilingSoup" target="_blank" class="underline link-light-dark">https://repobullet.in/BoilingSoup</a>).
`,
    techStack: {
      frameworks: [FRAMEWORKS.nextjs],
      languages: [LANGUAGES.typescript, LANGUAGES.golang]
    },
    source: ["https://github.com/BoilingSoup/repo-bulletin"]
  },
  order: IDs
};

export const projectList = projectData.order.map((id) => projectData[id]);
