// gitprofile.config.ts
const CONFIG = {
  github: {
    username: 'mtadder',
  },
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'Open-Source Solutions',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8,
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: ['MTadder/CellularLaboratory', 'MTadder/mtadder.github.io'],
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Projects',
      projects: [
        {
          title: 'Turbo Universe',
          description: 'A space adventure epic. On Steam soon.',
          imageUrl:
            'https://raw.githubusercontent.com/MTadder/mtadder.github.io/refs/heads/main/res/tu.png',
          link: '',
        },
        {
          title: 'Project Nova',
          description: 'Bullet-hell, in space.',
          imageUrl:
            'https://raw.githubusercontent.com/MTadder/mtadder.github.io/refs/heads/main/res/pn.png',
          link: 'https://mtadder.itch.io/project-nova-canceled',
        },
        {
          title: '3960 Consternation Dr.',
          description: 'First-person psychological horror.',
          imageUrl:
            'https://raw.githubusercontent.com/MTadder/mtadder.github.io/refs/heads/main/res/crion.png',
          link: '',
        },
        {
          title: 'Escapé',
          description: 'Procedurally-infinite platforming side-scroller.',
          imageUrl:
            'https://raw.githubusercontent.com/MTadder/mtadder.github.io/refs/heads/main/res/escape.png',
          link: '',
        },
        {
          title: 'Cellular Laboratory',
          description: 'Cell-based Simulation Sandbox',
          imageUrl:
            'https://raw.githubusercontent.com/MTadder/mtadder.github.io/refs/heads/main/res/cell.png',
          link: '',
        },
        {
          title: 'Mayan Oracle',
          description: 'Web-based Dreamspell / Wavespell Tzolkin Calculator',
          imageUrl:
            'https://raw.githubusercontent.com/MTadder/mtadder.github.io/refs/heads/main/res/tart.png',
          link: '',
        },
        {
          title: "King's Chess",
          description: 'Top-down medieval Real-Time-Strategy.',
          imageUrl:
            'https://raw.githubusercontent.com/MTadder/mtadder.github.io/refs/heads/main/res/nvme03.png',
          link: '',
        },
        {
          title: 'The Truth',
          description: 'Collaborative IRC-like team-based puzzle experience.',
          imageUrl:
            'https://raw.githubusercontent.com/MTadder/mtadder.github.io/refs/heads/main/res/star.png',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Ayden G.W. (MTadder)',
    description: 'Portfolio of Ayden G.W. (MTadder)',
    imageURL:
      'https://raw.githubusercontent.com/MTadder/mtadder.github.io/refs/heads/main/res/me.png',
  },
  social: {
    linkedin: 'mtadder',
    twitter: 'mtadder1942',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '5781565/mtadder',
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'mtadder@pm.me',
  },
  resume: {
    fileUrl: '',
  },
  skills: [
    'Lua',
    'Java',
    'Python',
    'Git',
    '.NET',
    'Go',
    'C#',
    'C++',
    'C3',
    'Rust',
    'Javascript',
    'Typescript',
    'Markdown',
    'Godot',
    'LÖVE2D',
    'Unreal Engine',
    'SteamAPI',
    'makefile',
    'Batch Script',
    'BASH',
    'Static Executable Analysis',
  ],
  experiences: [
    // {
    //   company: 'Company Name',
    //   position: 'Position',
    //   from: 'September 2021',
    //   to: 'Present',
    //   companyLink: 'https://example.com',
    // },
    // {
    //   company: 'Company Name',
    //   position: 'Position',
    //   from: 'July 2019',
    //   to: 'August 2021',
    //   companyLink: 'https://example.com',
    // },
  ],
  certifications: [
    // {
    //   name: 'Lorem ipsum',
    //   body: 'Lorem ipsum dolor sit amet',
    //   year: 'March 2022',
    //   link: 'https://example.com',
    // },
  ],
  educations: [
    // {
    //   institution: 'Institution Name',
    //   degree: 'Degree',
    //   from: '2015',
    //   to: '2019',
    // },
    // {
    //   institution: 'Institution Name',
    //   degree: 'Degree',
    //   from: '2012',
    //   to: '2014',
    // },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-77TR92MK1P', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dim',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer">❤️</a>`,
  enablePWA: true,
};
export default CONFIG;
