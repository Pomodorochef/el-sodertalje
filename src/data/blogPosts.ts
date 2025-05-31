export interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  readTime: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'elbilsladdare-guide-sodertalje',
    title: 'Komplett Guide: Installation av Elbilsladdare i Södertälje 2024',
    description: 'Allt om installation av elbilsladdare i Södertälje. Priser, ROT-avdrag, olika typer av laddboxar och vad du behöver veta innan installation. Expert guide från certifierade elektriker.',
    image: '/images/blog/elbilsladdare.jpg',
    date: '2024-03-15',
    author: 'Anders Andersson',
    category: 'Elbilsladdare',
    tags: ['elbilsladdare', 'installation', 'guide', 'södertälje', 'rot-avdrag'],
    readTime: '8 min',
  },
  {
    id: 'elsakerhet-hemmet-guide',
    title: 'Elsäkerhet i Hemmet: 10 Viktiga Tips från Elektriker i Södertälje',
    description: 'Expertguide om elsäkerhet i hemmet från auktoriserade elektriker. Lär dig upptäcka vanliga elfel, förebygga olyckor och när du måste kontakta en elektriker.',
    image: '/images/blog/elsakerhet.jpg',
    date: '2024-03-10',
    author: 'Maria Svensson',
    category: 'Elsäkerhet',
    tags: ['elsäkerhet', 'tips', 'underhåll', 'jordfelsbrytare', 'södertälje'],
    readTime: '6 min',
  },
  {
    id: 'smart-belysning-energibesparing',
    title: 'Smart Belysning: Spara Energi & Pengar i Södertälje 2024',
    description: 'Guide till smart belysning och energibesparing. Lär dig välja rätt system, installationstips och hur du kan spara upp till 80% på belysningskostnader.',
    image: '/images/blog/smart-belysning.jpg',
    date: '2024-03-05',
    author: 'Erik Eriksson',
    category: 'Smart Hem',
    tags: ['smart belysning', 'energibesparing', 'installation', 'södertälje'],
    readTime: '7 min',
  },
  {
    id: 'jordfelsbrytare-guide',
    title: 'Jordfelsbrytare: Komplett Guide för Husägare i Södertälje',
    description: 'Allt du behöver veta om jordfelsbrytare. Installation, funktion, lagkrav och varför de är livsviktiga för ditt hem. Expert guide från certifierade elektriker.',
    image: '/images/blog/jordfelsbrytare.jpg',
    date: '2024-02-28',
    author: 'Anders Andersson',
    category: 'Elsäkerhet',
    tags: ['jordfelsbrytare', 'elsäkerhet', 'installation', 'södertälje'],
    readTime: '5 min',
  },
  {
    id: 'elrenovering-tips',
    title: 'Elrenovering i Södertälje: Kostnader & Tips 2024',
    description: 'Planerar du elrenovering? Få expertråd om kostnader, vanliga fallgropar, ROT-avdrag och vad du bör tänka på. Guide från erfarna elektriker i Södertälje.',
    image: '/images/blog/elrenovering.jpg',
    date: '2024-02-20',
    author: 'Maria Svensson',
    category: 'Renovering',
    tags: ['elrenovering', 'rot-avdrag', 'kostnader', 'södertälje'],
    readTime: '9 min',
  },
]; 