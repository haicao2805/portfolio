import {
  SiCss3,
  SiElectron,
  SiFigma,
  SiPostman,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNotion,
  SiPython,
  SiReact,
  SiReactivex,
  SiRedux,
  SiReduxsaga,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiPostgresql,
  SiNginx,
  SiDocker,
  SiLoopback,
  SiRedis,
  SiMeilisearch,
  SiMongodb,
  SiGrafana,
  SiPrometheus,
  SiJest,
  SiSqlite,
  SiMinio,
  SiMocha,
  SiSelenium,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
} from 'react-icons/si';

// --------------------------------------------------
export class Skills {
  // Programming Languages
  static readonly JAVASCRIPT = 'JAVASCRIPT';
  static readonly TYPESCRIPT = 'TYPESCRIPT';
  static readonly PYTHON = 'PYTHON';

  // Others
  static readonly HTML = 'HTML';
  static readonly CSS = 'CSS';
  static readonly FIGMA = 'FIGMA';
  static readonly NOTION = 'NOTION';

  // Tools
  static readonly GIT = 'GIT';
  static readonly GITHUB = 'GITHUB';
  static readonly GITHUB_ACTIONS = 'GITHUB_ACTIONS';
  static readonly VITE = 'VITE';
  static readonly POSTMAN = 'POSTMAN';

  // Libraries & Frameworks
  static readonly NODE_JS = 'NODE_JS';
  static readonly LOOPBACK = 'LOOPBACK';
  static readonly EXPRESS = 'EXPRESS';
  static readonly NEST_JS = 'NEST_JS';
  static readonly POSTGRESQL = 'POSTGRESQL';
  static readonly REDIS = 'REDIS';
  static readonly DOCKER = 'DOCKER';
  static readonly NGINX = 'NGINX';
  static readonly MEILISEARCH = 'MEILISEARCH';
  static readonly MONGODB = 'MONGODB';
  static readonly GRAFANA = 'GRAFANA';
  static readonly PROMETHEUS = 'PROMETHEUS';
  static readonly JEST = 'JEST';
  static readonly MOCHA = 'MOCHA';
  static readonly SELENIUM = 'SELENIUM';
  static readonly SQLITE = 'SQLITE';
  static readonly REACT_JS = 'REACT_JS';
  static readonly ELECTRON_JS = 'ELECTRON_JS';
  static readonly NEXT_JS = 'NEXT_JS';
  static readonly TAILWIND_CSS = 'TAILWIND_CSS';
  static readonly REDUX_TOOLKIT = 'REDUX_TOOLKIT';
  static readonly RXJS = 'RXJS';
  static readonly SOCKET_IO = 'SOCKET_IO';
  static readonly REDUX_SAGA = 'REDUX_SAGA';
  static readonly WEB_SOCKET = 'WEB_SOCKET';

  static readonly translate: Record<string, string> = {
    // Programming Languages
    [this.JAVASCRIPT]: 'JavaScript',
    [this.TYPESCRIPT]: 'TypeScript',
    [this.PYTHON]: 'Python',

    // Others
    [this.HTML]: 'HTML',
    [this.CSS]: 'CSS',
    [this.FIGMA]: 'Figma',
    [this.NOTION]: 'Notion',

    // Tools
    [this.GIT]: 'Git',
    [this.GITHUB]: 'GitHub',
    [this.GITHUB_ACTIONS]: 'GitHub Actions',
    [this.VITE]: 'Vite',
    [this.POSTMAN]: 'Postman',

    // Libraries & Frameworks
    [this.NODE_JS]: 'NodeJS',
    [this.LOOPBACK]: 'Loopback 4',
    [this.EXPRESS]: 'Express',
    [this.NEST_JS]: 'NestJS',
    [this.POSTGRESQL]: 'PostgreSQL',
    [this.REDIS]: 'Redis',
    [this.DOCKER]: 'Docker',
    [this.NGINX]: 'Nginx',
    [this.MEILISEARCH]: 'Meilisearch',
    [this.MONGODB]: 'MongoDB',
    [this.GRAFANA]: 'Grafana',
    [this.PROMETHEUS]: 'Prometheus',
    [this.JEST]: 'Jest',
    [this.MOCHA]: 'Mocha',
    [this.SELENIUM]: 'Selenium',
    [this.SQLITE]: 'SQLite',
    [this.REACT_JS]: 'ReactJS',
    [this.ELECTRON_JS]: 'ElectronJS',
    [this.NEXT_JS]: 'NextJS',
    [this.TAILWIND_CSS]: 'Tailwind CSS',
    [this.REDUX_TOOLKIT]: 'Redux Toolkit',
    [this.RXJS]: 'RxJS',
    [this.SOCKET_IO]: 'Socket.io',
    [this.REDUX_SAGA]: 'Redux Saga',
    [this.WEB_SOCKET]: 'WebSocket',
  };
}

// --------------------------------------------------
export const skillIcon: Record<string, React.ReactNode> = {
  // Programming Languages
  [Skills.JAVASCRIPT]: <SiJavascript className="text-[#F7DF1E]" />,
  [Skills.TYPESCRIPT]: <SiTypescript className="text-[#3178C6]" />,
  [Skills.PYTHON]: <SiPython className="text-[#3776AB]" />,

  // Others
  [Skills.HTML]: <SiHtml5 className="text-[#E34F26]" />,
  [Skills.CSS]: <SiCss3 className="text-[#1572B6]" />,
  [Skills.FIGMA]: <SiFigma className="text-[#F24E1E]" />,
  [Skills.NOTION]: <SiNotion className="text-[#000000] dark:text-[#FFFFFF]" />,

  // Tools
  [Skills.GIT]: <SiGit className="text-[#F05032]" />,
  [Skills.GITHUB]: <SiGithub className="text-[#181717] dark:text-[#FFFFFF]" />,
  [Skills.GITHUB_ACTIONS]: <SiGithubactions className="text-[#2088FF]" />,
  [Skills.VITE]: <SiVite className="text-[#646CFF]" />,
  [Skills.POSTMAN]: <SiPostman className="text-[#FF6C37]" />,

  // Libraries & Frameworks
  [Skills.NODE_JS]: <SiNodedotjs className="text-[#3C873A]" />,
  [Skills.LOOPBACK]: <SiLoopback className="text-[#000000] dark:text-[#FFFFFF]" />,
  [Skills.EXPRESS]: <SiExpress className="text-[#000000] dark:text-[#FFFFFF]" />,
  [Skills.NEST_JS]: <SiNestjs className="text-[#E0234E]" />,
  [Skills.POSTGRESQL]: <SiPostgresql className="text-[#336791]" />,
  [Skills.REDIS]: <SiRedis className="text-[#DC382D]" />,
  [Skills.DOCKER]: <SiDocker className="text-[#2496ED]" />,
  [Skills.NGINX]: <SiNginx className="text-[#2496ED]" />,
  [Skills.MEILISEARCH]: <SiMeilisearch className="text-[#FF5E00]" />,
  [Skills.MONGODB]: <SiMongodb className="text-[#47A248]" />,
  [Skills.GRAFANA]: <SiGrafana className="text-[#F46800]" />,
  [Skills.PROMETHEUS]: <SiPrometheus className="text-[#E6522C]" />,
  [Skills.JEST]: <SiJest className="text-[#C21325]" />,
  [Skills.MOCHA]: <SiMocha className="text-[#8D6748]" />,
  [Skills.SELENIUM]: <SiSelenium className="text-[#43B02A]" />,
  [Skills.SQLITE]: <SiSqlite className="text-[#003B57]" />,
  [Skills.REACT_JS]: <SiReact className="text-[#61DAFB]" />,
  [Skills.ELECTRON_JS]: <SiElectron className="text-[#47848F]" />,
  [Skills.NEXT_JS]: <SiNextdotjs className="text-foreground" />,
  [Skills.TAILWIND_CSS]: <SiTailwindcss className="text-[#06B6D4]" />,
  [Skills.REDUX_TOOLKIT]: <SiRedux className="text-[#764ABC]" />,
  [Skills.RXJS]: <SiReactivex className="text-[#B7178C]" />,
  [Skills.SOCKET_IO]: <SiSocketdotio className="text-[#010101] dark:text-[#FFFFFF]" />,
  [Skills.REDUX_SAGA]: <SiReduxsaga className="text-[#999999] dark:text-[#FFFFFF]" />,
  [Skills.WEB_SOCKET]: <></>,
};

// --------------------------------------------------
export class SkillCategories {
  static readonly PROGRAMMING_LANGUAGES = 'PROGRAMMING_LANGUAGES';
  static readonly LIBRARIES_FRAMEWORKS = 'LIBRARIES_FRAMEWORKS';
  static readonly TOOLS = 'TOOLS';
  static readonly DATABASES = 'DATABASES';
  static readonly CLOUD_PLATFORMS = 'CLOUD_PLATFORMS';
  static readonly OTHERS = 'OTHERS';

  static readonly translate: Record<string, string> = {
    [this.PROGRAMMING_LANGUAGES]: 'Programming Languages',
    [this.LIBRARIES_FRAMEWORKS]: 'Libraries & Frameworks',
    [this.TOOLS]: 'Tools',
    [this.DATABASES]: 'Databases',
    [this.CLOUD_PLATFORMS]: 'Cloud Platforms',
    [this.OTHERS]: 'Others',
  };
}

// --------------------------------------------------
export const mySkills: {
  id: string;
  title: string;
  skills: string[];
}[] = [
  {
    id: SkillCategories.PROGRAMMING_LANGUAGES,
    title: SkillCategories.translate[SkillCategories.PROGRAMMING_LANGUAGES],
    skills: [Skills.JAVASCRIPT, Skills.TYPESCRIPT, Skills.PYTHON],
  },
  {
    id: SkillCategories.LIBRARIES_FRAMEWORKS,
    title: SkillCategories.translate[SkillCategories.LIBRARIES_FRAMEWORKS],
    skills: [
      Skills.NODE_JS,
      Skills.LOOPBACK,
      Skills.EXPRESS,
      Skills.NEST_JS,
      Skills.POSTGRESQL,
      Skills.REDIS,
      Skills.DOCKER,
      Skills.NGINX,
      Skills.MEILISEARCH,
      Skills.MONGODB,
      Skills.GRAFANA,
      Skills.PROMETHEUS,
      Skills.JEST,
      Skills.MOCHA,
      Skills.SELENIUM,
      Skills.SQLITE,
      Skills.REACT_JS,
      Skills.NEXT_JS,
      Skills.ELECTRON_JS,
      Skills.TAILWIND_CSS,
      Skills.REDUX_TOOLKIT,
      Skills.REDUX_SAGA,
      Skills.RXJS,
      Skills.SOCKET_IO,
      Skills.WEB_SOCKET,
    ],
  },
  {
    id: SkillCategories.TOOLS,
    title: SkillCategories.translate[SkillCategories.TOOLS],
    skills: [Skills.GIT, Skills.GITHUB, Skills.GITHUB_ACTIONS, Skills.VITE, Skills.POSTMAN],
  },
  {
    id: SkillCategories.OTHERS,
    title: SkillCategories.translate[SkillCategories.OTHERS],
    skills: [Skills.HTML, Skills.CSS, Skills.FIGMA, Skills.NOTION],
  },
];
