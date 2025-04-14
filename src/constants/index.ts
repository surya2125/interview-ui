import { descriptLogo, grammarlyLogo, interComLogo, notionLogo, unSplashLogo, analyticsImg, storageImg, teamsImg } from '@assets'
import { GrAnalytics } from 'react-icons/gr';
import { MdOutlineShowChart } from 'react-icons/md';
import { SiMaterialdesignicons } from 'react-icons/si';

const navLinks = [
  { label: 'Home', to: '#home', active: true },
  { label: 'Features', to: '#features', active: false },
  { label: 'Benefits', to: '#features', active: false },
  { label: 'Pricing', to: '#features', active: false }
]

const collabs = [
  { logo: descriptLogo, name: 'descript' },
  { logo: grammarlyLogo, name: 'grammarly' },
  { logo: interComLogo, name: 'INTERCOM' },
  { logo: notionLogo, name: 'Notion' },
  { logo: unSplashLogo, name: 'Unsplash' },
]

const features = [
  {
    id: 'publishing',
    Icon: MdOutlineShowChart,
    title: 'Publishing',
    description: 'Plan, collaborate, and publishing your content that drivees meaningful engagement and growth for your barnd',
  },
  {
    id: 'analytics',
    Icon: GrAnalytics,
    title: 'Analytics',
    description: 'Analyze your performance and create goegeous report',
  },
  {
    id: 'engagement',
    Icon: SiMaterialdesignicons,
    title: 'Engagement',
    description: 'Quiuckly navigate you anda engage with your adience',
  },
];

const ratings = [
  { id: 'first', rating: 2, company: 'databricks' },
  { id: 'second', rating: 3, company: 'Chainalysis' },
];

const otherFeatures = [
  {
    title: 'Collboration Teams ',
    description: 'Here you can handle projects together with team virtually',
    img: teamsImg
  },
  {
    title: 'Cloud Storage',
    description: 'No nedd to worry about storage because we provide storage up to 2 TB',
    img: storageImg
  },
  {
    title: 'Daily Analytics',
    description: 'We always provide useful informatin to make it easier for you every day',
    img: analyticsImg
  }
]

const benefits = [
  "Free Consulting With Expert Saving Money",
  "Online Banking",
  "Investment Report Every Month",
  "Saving Money For The Future",
  "Online Transection"
];

const pricings = [
  {
    title: "Free",
    description: "Have a go and test your superpowers",
    price: 0,
    features: [
      "2 Users",
      "2 Files",
      "Public Share & Comments",
      "Chat Support",
      "New income apps",
    ],
    ctaText: "Signup for free",
  },
  {
    title: "Pro",
    description: "Experiment the power of infinite possibilities",
    price: 8,
    features: [
      "4 Users",
      "All apps",
      "Unlimited editable exports",
      "Folders and collaboration",
      "All incoming apps",
    ],
    ctaText: "Go to pro",
    highlighted: true,
  },
  {
    title: "Business",
    description: "Unveil new superpowers and join the Design League",
    price: 16,
    features: [
      "All the features of pro plan",
      "Account success Manager",
      "Single Sign-On (SSO)",
      "Co-conception program",
      "Collaboration-Soon",
    ],
    ctaText: "Goto Business",
  },
];

const supports = [
  {
    label: 'Help centre',
    link: '/help-center',
  },
  {
    label: 'Account information',
    link: '/account-information',
  },
  {
    label: 'About',
    link: '/about',
  },
  {
    label: 'Contact us',
    link: '/contact-us',
  },
];

const helpAndSolutions = [
  {
    label: 'Talk to support',
    link: '/support',
  },
  {
    label: 'Support docs',
    link: '/support-docs',
  },
  {
    label: 'System status',
    link: '/system-status',
  },
  {
    label: 'Covid responde',
    link: '/covid-responde',
  },
];

const products = [
  { label: 'Update', link: '/products/update' },
  { label: 'Security', link: '/products/security' },
  { label: 'Beta test', link: '/products/beta-test' },
  { label: 'Pricing product', link: '/products/pricing-product' },
];

export { navLinks, collabs, features, ratings, otherFeatures, benefits, pricings, products, supports, helpAndSolutions }