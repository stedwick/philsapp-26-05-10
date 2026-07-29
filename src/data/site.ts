import {
  Atom,
  BriefcaseBusiness,
  Braces,
  ChevronDown,
  CircleUserRound,
  CirclePlay,
  Cloud,
  Code,
  Container,
  Database,
  FileText,
  Gamepad2,
  Gem,
  GitBranch,
  GitFork,
  GraduationCap,
  HeartHandshake,
  Layers,
  Mail,
  MapPin,
  MessageSquare,
  MessageSquareCode,
  Phone,
  Send,
  ShieldCheck,
  Spade,
  Terminal,
  Trophy,
} from '@lucide/astro';

export const icons = {
  Atom,
  BriefcaseBusiness,
  Braces,
  ChevronDown,
  CircleUserRound,
  CirclePlay,
  Cloud,
  Code,
  Container,
  Database,
  FileText,
  Gamepad2,
  Gem,
  GitBranch,
  GitFork,
  GraduationCap,
  HeartHandshake,
  Layers,
  Mail,
  MapPin,
  MessageSquare,
  MessageSquareCode,
  Phone,
  Send,
  ShieldCheck,
  Spade,
  Terminal,
  Trophy,
};

export const profile = {
  name: 'Philip Brocoum',
  role: 'Lead Software Engineer',
  tagline: 'coding & shipping at Olio Apps in Portland, OR',
  location: 'Portland, OR',
  phone: '1 (347) 701-0252',
  phoneHref: 'tel:13477010252',
  email: 'philipb@hey.com',
  emailHref: 'mailto:philipb@hey.com',
  heroImages: {
    sm: '/site-assets/hero-sm.jpg',
    md: '/site-assets/hero-md.jpg',
    lg: '/site-assets/hero-lg.jpg',
  },
  portrait: '/site-assets/profile.jpg',
};

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/philipbrocoum', icon: icons.BriefcaseBusiness, legacyIcon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/stedwick', icon: icons.GitFork, legacyIcon: 'github' },
  {
    label: 'Stack Overflow',
    href: 'https://stackoverflow.com/users/103316/philip-brocoum',
    icon: icons.MessageSquareCode,
    legacyIcon: 'stackoverflow',
  },
  { label: 'Twitter', href: 'https://twitter.com/stedwick', icon: icons.MessageSquare, legacyIcon: 'twitter' },
];

export const aboutCopy = [
  `Hello! I'm Philip, and I began developing with Ruby on Rails at a startup in NYC in 2007. I have 10 years of Software Engineering experience, and 4 years as a Manager and Lead Engineer. I've climbed from Developer to Senior Developer, to Lead Developer, to Senior Engineering Manager leading a world-wide remote team of twelve.`,
  `I run projects at Olio Apps as our Lead Software Engineer in Portland, OR. When not at work I enjoy walking my dog, playing live poker, and vlogging on my YouTube channel. I believe in making computers accessible and helping the disabled. I'm optimistic about the future.`,
];

export const skills = [
  {
    title: 'Management',
    href: 'https://atlassian.com/',
    icon: icons.HeartHandshake,
    body: 'Engineering leadership, hiring & management of remote Agile teams across the world',
  },
  {
    title: 'Full-Stack Development',
    href: 'https://rubyonrails.org/',
    icon: icons.Layers,
    body: 'Shipping apps since 2007. Backend, front-end, APIs, web, mobile, App Stores.',
  },
  {
    title: 'Ruby on Rails',
    href: 'https://rubyonrails.org/',
    icon: icons.Gem,
    body: 'App development with Ruby on Rails majestic monolith',
  },
  {
    title: 'React.js & Next.js',
    href: 'https://html-css-js.com/',
    icon: icons.Atom,
    body: 'Responsive single-and-multi-page-apps in TypeScript deployed to Vercel',
  },
  {
    title: 'GraphQL & REST APIs',
    href: 'https://html-css-js.com/',
    icon: icons.Braces,
    body: 'Creating and consuming robust and performant APIs',
  },
  {
    title: 'HTML/CSS/JS',
    href: 'https://html-css-js.com/',
    icon: icons.Code,
    body: 'Frontend design with HTML 5, CSS 3, and JS/TypeScript/jQuery',
  },
  {
    title: 'MySQL/PostgreSQL',
    href: 'https://www.mysql.com/',
    icon: icons.Database,
    body: 'DB administration of MySQL & PostgreSQL',
  },
  {
    title: 'AWS/Azure',
    href: 'https://aws.amazon.com/',
    icon: icons.Cloud,
    body: 'Scaling cloud infrastructure in AWS and Azure with Chef, including EC2, RDS, and S3',
  },
  {
    title: 'DevSecOps',
    href: 'https://www.phusionpassenger.com/',
    icon: icons.ShieldCheck,
    body: 'Production apps w/ SOC 2 compliance & CI/CD on Bitbucket, AWS, Vercel, Apache, Nginx, and Puma',
  },
  {
    title: 'Docker',
    href: 'https://www.docker.com/',
    icon: icons.Container,
    body: 'Containerize all the things!',
  },
  {
    title: 'git',
    href: 'https://github.com/',
    icon: icons.GitBranch,
    body: 'git-flow is my preferred branching model',
  },
  {
    title: 'Linux',
    href: 'https://www.ubuntu.com/',
    icon: icons.Terminal,
    body: 'Ubuntu & CentOS server administration / bash scripting',
  },
];

export const careerIntro = [
  `I started in tech as an analyst at Brightidea back in 2007 when I was 25. At that time, I was transitioning away from mathematics and education. I taught myself Ruby on Rails and was hired a year later at readMedia as their first full-time developer. We grew the company and turned it into what Merit is today.`,
  `I have led teams, planned roadmaps, taken the technical lead on new and existing apps, and supported career growth for engineers. My passion has always been to hire great teams to build great products with great technologies.`,
];

export const career = [
  {
    title: 'Syncta',
    siteLabel: 'www.syncta.com',
    href: 'https://syncta.com/',
    logo: '/site-assets/syncta-logo.png',
    image: '/site-assets/syncta-site.jpg',
    imageAlt: 'Syncta site',
    body: `Syncta provides mobile software for backflow testers and water purveyors. I hired the team, planned career advancement, roadmapped our projects, and stayed hands-on with the Ruby on Rails app, mobile API, and SOC 2 compliant AWS infrastructure.`,
    action: 'Visit Syncta',
    footer: ['Senior Software Engineering Manager (2019 - present)', 'Lead Software Engineer (2018 - 2019)', 'Portland, OR'],
  },
  {
    title: 'Merit',
    siteLabel: 'www.meritpages.com',
    href: 'http://www.meritpages.com/',
    logo: '/site-assets/merit-logo.png',
    image: '/site-assets/merit-site.jpg',
    imageAlt: 'Merit site',
    body: `Merit showcases student achievements at hundreds of colleges and universities. Meritpages.com is the largest Rails app I've ever worked on, comprising eight Rails apps deployed in a services architecture on an AWS Ubuntu Linux cluster.`,
    action: 'Visit Merit',
    footer: ['Senior Software Engineer', 'Ruby on Rails', 'New York, NY (2014 - 2016)'],
  },
  {
    title: 'Go Green Ride',
    siteLabel: 'www.gogreenride.com',
    href: 'http://www.gogreenride.com/',
    logo: '/site-assets/gogreenride-logo.png',
    image: '/site-assets/gogreenride-site.jpg',
    imageAlt: 'Go Green Ride site',
    body: `Go Green Ride is an eco-friendly ridesharing alternative to Uber. GoGreenRide.com and its accompanying iOS and Android apps use a Rails backend that heavily utilizes geolocation services and is deployed on Rackspace using Phusion Passenger.`,
    action: 'Visit Go Green Ride',
    footer: ['Ruby on Rails consultant', 'Bayonne, NJ (2013)'],
  },
  {
    title: 'readabout.me',
    siteLabel: 'www.readabout.me',
    href: 'http://web.archive.org/web/20130601003317/http://readabout.me/',
    logo: '/site-assets/readaboutme-logo.png',
    image: '/site-assets/readaboutme-site.jpg',
    imageAlt: 'readabout.me site',
    body: `readabout.me was the predecessor to Merit, focusing primarily on students. The Rails app was deployed on Heroku initially, but with its success we quickly outgrew Heroku and switched to AWS.`,
    action: 'Visit readabout.me',
    footer: ['Ruby on Rails engineer', 'New York, NY (2012 - 2014)'],
  },
  {
    title: 'readMedia',
    siteLabel: 'www.readmedia.com',
    href: 'https://web.archive.org/web/20110811204633/http://www.readmedia.com:80/',
    logo: '/site-assets/readmedia-logo.png',
    image: '/site-assets/readmedia-site.jpg',
    imageAlt: 'readMedia site',
    body: `readMedia sends press releases to newspapers via mail merge for its clients all over the country. I upgraded the readMedia.com Rails 2 app to Rails 3, helped move it onto AWS, and was one of three developers working full-time on the app for many years.`,
    action: 'Visit readMedia',
    footer: ['Full-Stack Developer', 'Ruby on Rails', 'New York, NY (2008 - 2012)'],
  },
  {
    title: 'Brightidea',
    siteLabel: 'www.brightidea.com',
    href: 'http://www.brightidea.com/',
    logo: '/site-assets/brightidea-logo.png',
    image: '/site-assets/brightidea-site.jpg',
    imageAlt: 'Brightidea site',
    body: `Brightidea provides innovation management software-as-a-service. As one of their early employees, I helped with sales, onboarding, consulting, traveling, and running their software.`,
    action: 'Visit Brightidea',
    footer: ['Analyst', 'New York, NY (2007 - 2008)'],
  },
];

export const educationIntro =
  'I majored in mathematics in college and grad school, and my first career was as a teacher in New York City. However, I always loved computers and quickly transitioned to my new career as a developer.';

export const education = [
  {
    title: 'Massachusetts Institute of Technology',
    href: 'http://web.mit.edu/',
    icon: icons.GraduationCap,
    addendum: 'B.S. in Mathematics (class of 2005)',
    body: 'I have two publications: "Reflections in a Euclidean Space" and "Exploration of Reflection Holograms and Their Fringes With a Scanning Electron Microscope."',
  },
  {
    title: 'New York University',
    href: 'https://www.nyu.edu/',
    icon: icons.GraduationCap,
    addendum: 'M.A. in Math Education (class of 2006)',
    body: 'I attended NYU through Math for America where I took my theoretical knowledge of mathematics and added practical knowledge of teaching.',
  },
  {
    title: 'NYC Department of Education',
    href: 'http://schools.nyc.gov/',
    icon: icons.BriefcaseBusiness,
    addendum: 'Math Teacher (2006 - 2007)',
    body: "After getting my Master's degree, I taught 6-8th grade math at the Shuang Wen School (P.S. 184) in Chinatown.",
  },
];

export const projectsIntro =
  'I often program for fun, and you can browse my side projects on GitHub. I once wrote a Ruby script to nab myself tickets to The Daily Show, which was first-come-first-serve on its website at the time, and you never knew when tickets would become available.';

export const projects = [
  {
    title: 'Poker Tracker',
    href: 'https://pokertracker-23081.web.app/',
    icon: icons.Spade,
    body: 'Made with React.js, Material UI, and deployed on Firebase, I built an app to track my own live poker winnings.',
    actions: [
      { label: 'Go all in with Aces', href: 'https://pokertracker-23081.web.app/', variant: 'outline' },
      { label: 'View on GitHub', href: 'https://github.com/stedwick/pokertracker', variant: 'secondary' },
    ],
  },
  {
    title: 'Munch',
    href: 'https://stedwick.github.io/munch/',
    icon: icons.Gamepad2,
    body: 'The game of Munch! Can you beat the computer? I doubt it...',
    actions: [{ label: 'Test your wit', href: 'https://stedwick.github.io/munch/', variant: 'outline' }],
  },
  {
    title: 'Sci-Fi Voter',
    href: 'https://github.com/stedwick/scifi-voter',
    icon: icons.Trophy,
    body: 'Sci-Fi Voter definitively answers the question, "What is the best Star Trek episode?"',
    actions: [{ label: 'View on GitHub', href: 'https://github.com/stedwick/scifi-voter', variant: 'secondary' }],
  },
  {
    title: 'Docker Dashboard',
    href: 'https://github.com/stedwick/docker-dashboard/',
    icon: icons.Terminal,
    body: 'Simple terminal dashboard for Docker using Tmux',
    actions: [{ label: 'View on GitHub', href: 'https://github.com/stedwick/docker-dashboard/', variant: 'secondary' }],
  },
  {
    title: 'Taggy for Evernote',
    href: 'https://github.com/stedwick/taggy-for-evernote',
    icon: icons.FileText,
    body: 'Taggy for Evernote was my app in the Mac App Store. Taggy makes your Evernote tags function as you want them to: hierarchically.',
    actions: [{ label: 'View on GitHub', href: 'https://github.com/stedwick/taggy-for-evernote', variant: 'secondary' }],
  },
  {
    title: 'Arkanoid',
    href: 'https://github.com/stedwick/arkanoid',
    icon: icons.Gamepad2,
    body: 'Arkanoid is my take on the classic Nintendo Breakout game. Written in C for MS DOS long ago.',
    actions: [{ label: 'View on GitHub', href: 'https://github.com/stedwick/arkanoid', variant: 'secondary' }],
  },
];

export const interests = [
  {
    title: 'My YouTube Channel',
    href: 'https://www.youtube.com/watch?v=YQtbcgBWobA',
    icon: icons.CirclePlay,
    body: 'With 1 million views, my Yoshimoto Cube video is my 15 minutes of fame.',
  },
  {
    title: 'US Chess Federation',
    href: 'http://www.uschess.org/msa/MbrDtlMain.php?14448371',
    icon: icons.Trophy,
    body: "Rated 1618 USCF and 2000-ish on Lichess, I'm always looking to improve.",
  },
  {
    title: 'Poker in Las Vegas',
    href: 'https://pokerdb.thehendonmob.com/player.php?a=r&n=862579',
    icon: icons.Spade,
    body: 'I have over $77,000 in live poker earnings.',
  },
  {
    title: 'Toast the Dog',
    href: 'https://www.instagram.com/toastwiththemost/',
    icon: icons.HeartHandshake,
    body: 'Such a good dog.',
  },
];

export const contactIntro =
  "Hi there! I'm currently the Lead Software Engineer at Olio Apps in Portland, OR. If you've made it this far, drop me a line. Send an email and I'll speak with you soon.";

export const contactItems = [
  { label: profile.name, icon: icons.CircleUserRound },
  { label: profile.location, icon: icons.MapPin },
  { label: profile.phone, href: profile.phoneHref, icon: icons.Phone },
  { label: profile.email, href: profile.emailHref, icon: icons.Mail },
  { label: 'Visit my LinkedIn profile', href: 'https://www.linkedin.com/in/philipbrocoum', icon: icons.BriefcaseBusiness },
  { label: 'Download my resume', href: '/site-assets/resume.pdf', icon: icons.FileText },
];
