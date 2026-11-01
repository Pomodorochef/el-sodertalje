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
    description: 'Allt om installation av elbilsladdare i Södertälje: vad som påverkar kostnaden, skattereduktion, olika typer av laddboxar och vad du behöver veta innan installation.',
    image: '/images/blog/elbilsladdare.jpg',
    date: '2024-03-15',
    author: 'Kuruto AB',
    category: 'Elbilsladdare',
    tags: ['elbilsladdare', 'installation', 'guide', 'södertälje', 'rot-avdrag'],
    readTime: '8 min',
  },
  {
    id: 'elsakerhet-hemmet-guide',
    title: 'Elsäkerhet i Hemmet: Viktiga Tips för Dig i Södertälje',
    description: 'Guide om elsäkerhet i hemmet. Lär dig upptäcka vanliga tecken på elfel, förebygga olyckor och när du bör kontakta en elektriker.',
    image: '/images/blog/elsakerhet.jpg',
    date: '2024-03-10',
    author: 'Kuruto AB',
    category: 'Elsäkerhet',
    tags: ['elsäkerhet', 'tips', 'underhåll', 'jordfelsbrytare', 'södertälje'],
    readTime: '6 min',
  },
  {
    id: 'smart-belysning-energibesparing',
    title: 'Smart Belysning: Spara Energi & Pengar i Södertälje 2024',
    description: 'Guide till smart belysning och energibesparing. Lär dig välja rätt system och vad du bör tänka på vid installation.',
    image: '/images/blog/smart-belysning.jpg',
    date: '2024-03-05',
    author: 'Kuruto AB',
    category: 'Smart Hem',
    tags: ['smart belysning', 'energibesparing', 'installation', 'södertälje'],
    readTime: '7 min',
  },
  {
    id: 'jordfelsbrytare-guide',
    title: 'Jordfelsbrytare: Komplett Guide för Husägare i Södertälje',
    description: 'Det här bör du veta om jordfelsbrytare: funktion, olika typer, kontroll och varför de är viktiga för säkerheten i ditt hem.',
    image: '/images/blog/jordfelsbrytare.jpg',
    date: '2024-02-28',
    author: 'Kuruto AB',
    category: 'Elsäkerhet',
    tags: ['jordfelsbrytare', 'elsäkerhet', 'installation', 'södertälje'],
    readTime: '5 min',
  },
  {
    id: 'elrenovering-tips',
    title: 'Elrenovering i Södertälje: Kostnader & Tips 2024',
    description: 'Planerar du elrenovering? Läs om vad som påverkar kostnaden, ROT-avdrag och vad du bör tänka på.',
    image: '/images/blog/elrenovering.jpg',
    date: '2024-02-20',
    author: 'Kuruto AB',
    category: 'Renovering',
    tags: ['elrenovering', 'rot-avdrag', 'kostnader', 'södertälje'],
    readTime: '9 min',
  },
]; 