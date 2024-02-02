import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Fanghao Meng",
  initials: "FM",
  location: "Toronto, Canada, ON",
  locationLink: "https://www.google.com/maps/place/toronto+canada",
  about:
    "Enthusiastic Computer Science student with a strong foundation in software development, including web-based business applications. Eager to apply analytical and problem-solving skills in a collaborative environment to architect and build business applications.",
  summary:
    "Currently pursuing a Bachelor of Computer Science at Algoma University, with a background in Computer Programming & Analysis from Seneca College (GPA: 3.7/4.0). Skilled in a broad range of programming languages and frameworks, with a focus on developing efficient, scalable web-based business applications. Experienced in working with agile teams, designing RESTful APIs, and leveraging modern web technologies.",
  avatarUrl: "https://res.cloudinary.com/dylsqynrm/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1706892080/profile_ctq5vo.jpg?_s=public-apps",
  personalWebsiteUrl: "https://web-portfolio-ashen-sigma.vercel.app/",
  contact: {
    email: "fmeng18@myseneca.ca",
    tel: "+16476717028",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/copeelite",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/fanghao-meng-1b230119a/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "Seneca College",
      degree: "Computer Programming",
      start: "2022",
      end: "2023",
    },
    {
      school: "Algoma University",
      degree: "Computer Science",
      start: "2024",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Zeta Game Studio",
      link: "",
      badges: ["Remote, Contract"],
      title: "Nextjs Full Stack Developer",
      logo: ParabolLogo,
      start: "2023",
      end: "2023",
      description:
        "Make the whole game website with Nextjs and Tailwindcss, and make the admin system",
    },
    {
      company: "Trustedrenos",
      link: "",
      badges: ["Remote, Contract"],
      title: "Web Developer",
      logo: ClevertechLogo,
      start: "2023",
      end: "2023",
      description:
        "Created planner Calendar and Schedule tracker with Nextjs and Tailwindcss",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "SQL/NoSQL",
    "Python/Django/Flask/FastAPI",
    "Java/OOP",
    "Syncfusion", "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
    "SQL", "NoSQL", "Oracle Database", "MongoDB", "Cosmos DB", "RESTful API Development", "Git", "GitHub", "Azure",
    "Vercel", "Heroku", "Figma", "Docker", "Webpack", "Firebase",
    "GPT API"
  ],
  
  projects: [
    {
      title: "Click here to see more projects",
      techStack: ["React", "Bootstrap", "Framer Motion"],
      description: "Developed a responsive website showcasing my work and providing a contact platform for recruiters. Hosted on Vercel.",
      link: {
        label: "Project Link",
        href: "https://web-portfolio-ashen-sigma.vercel.app",
      },
    },
    {
      title: "Scraping Google Job and apply for jobs",
      techStack: ["python", "playwright", "flask"],
      description: "A script to scrape data from Google job and analyze the data, and help people find more jobs, use the idea for parallel programming",
      link: {
        label: "Project Link",
        href: "https://github.com/Violetzx/AutoJobApplicationSystem",
      },
    },
    {
      title: "Zeta Game Studio Website",
      techStack: ["next.js", "Tailwindcss", "next-auth", "prisma", "postgresql"],
      description: "A full stack website for a game studio, including a game page, blog, and admin system, shopping cart, and payment system",
    },
    {
      title: "Planner Calendar and Schedule tracker",
      techStack: ["next.js", "Tailwindcss", "next-auth", "prisma", "postgresql"],
      description: "A powerful planner calendar and schedule tracker for Trustedrenos company",
    },
    {
      title: "Photoshop auto scripts",
      techStack: ["next.js", "Tailwindcss", "flask"],
      description: "A script app to auto generate photoshop scripts for image processing",
    },
    
  ],
} as const;
