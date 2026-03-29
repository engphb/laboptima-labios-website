import { Brain, Dna, Lightbulb, Microscope, Zap, Database, Atom, FileText, CheckCircle2, Thermometer, Pill } from "lucide-react";

export const navLinks = [
  { name: "Pesquisa", href: "#pesquisa" },
  { name: "Publicações", href: "#publicacoes" },
  { name: "Serviços", href: "#servicos" },
  { name: "Notícias", href: "#noticias" },
  { name: "Sobre", href: "#sobre" },
  { name: "Infraestrutura", href: "#infraestrutura" },
  { name: "Equipe", href: "#equipe" },
  { name: "Contato", href: "#contato" },
];

export const researchLines = [
  {
    id: 1,
    title: "Nanomateriais Avançados",
    description: "Desenvolvimento de novos materiais com propriedades quânticas e aplicações em supercondutividade e computação de nova geração.",
    icon: Atom,
  },
  {
    id: 2,
    title: "Biopolímeros",
    description: "Engenharia de proteínas e edição genômica voltada para soluções terapêuticas inovadoras e medicina personalizada.",
    icon: Dna,
  },
  {
    id: 3,
    title: "Energias Sustentáveis",
    description: "Pesquisa em células solares de perovskita e novas matrizes de armazenamento de energia de alta eficiência.",
    icon: Zap,
  },
  {
    id: 4,
    title: "Inteligência Artificial Aplicada",
    description: "Modelagem de redes neurais para predições e otimizações e análise de dados e big data.",
    icon: Brain,
  },

{
    id: 5,
      title: "Encapsulamento de Fármacos",
      description: "Desenvolvimento de sistemas poliméricos para encapsulamento de princípios ativos farmacêuticos.",
      icon: Pill,
      },
];

export const publications = [
  {
    id: 1,
    title: "Engineered core-shell nanocomposite fibres incorporating bio-ceramics and bioactive molecules for wound repair",
    authors: "Nebu George Thomas, Fernando Gomes, Raneesh Balakrishnan, Rani Shine Raju, Neethu Ninan, Anju Rajan, Richard Bright, Sukumaran Anil, Thien Ngoc Le, Trong Quan Luu, T. Daniel Thangadurai, Bincy P.K., Sabu Thomas",
    journal: "International Journal of Pharmaceutics",
    year: 2026,
    link: "#",
    type: "Artigo Original",
  },
  {
    id: 2,
    title: "Connecting the Dots: A Semantic Network Approach to Pediatric iNO Research Discovery",
    authors: "S. Fernando Gomes Jr, Paulo Cesar Duarte Junior, Shirley Ferraz Crispilho, Hafsa Siddiqui, Jaciara Santos, Kaushik Pal, Aron José Pazin de Andrade, Himanshu Upadhyay",
    journal: "Wiley Interdisciplinary Reviews-Data Mining and Knowledge Discovery",
    year: 2026,
    link: "#",
    type: "Artigo Original",
  },
  {
    id: 3,
    title: "Efficacy of silver nanoparticle-modified bullfrog skin as an antimicrobial wound dressing",
    authors: "Carlos Augusto Zanoni Souto, Fernando Gomes de Souza Jr., Kaushik Pal, José Teixeira de Seixas Filho, Helena Keiko Toma, Nidhi Asthana, Azmat Ali Khan, Sabiha Fatima",
    journal: "Journal of Molecular Structure",
    year: 2025,
    link: "#",
    type: "Artigo Original",
  },
  {
    id: 4,
    title: "Advancing Dye-Sensitized Solar Cells: Synergistic Effects of Polyaniline, Graphene Oxide, and Carbon Nanotubes for Enhanced Efficiency and Sustainability Developments",
    authors: "Fernando Gomes, Shekhar Bhansali, Viviane Valladão, Daniele Brandão, Gabriel Silva, Fabiola Maranhão, Kaushik Pal, Rossana Thiré, Joyce Araujo, Ariane Batista, Sabu Thomas, Nandakumar Kalarikkal, Samuel O. Oluwafemi, Tian Rong Li, Yuhua Wang",
    journal: "Recent Patents on Nanotechnology",
    year: 2025,
    link: "#",
    type: "Artigo Original",
  },
];

export const services = [
  {
    id: 1,
    title: "Análise por Microscopia Digital",
    description: "Caracterização morfológica e estrutural de amostras em escala com alta resolução.",
    icon: Microscope,
  },
  {
    id: 2,
    title: "Análise de EDX",
    description: "Caracterização da composição elementar de amostras.",
    icon: Database,
  },
  {
    id: 3,
    title: "Calorímetro Diferencial de Varredura (DSC)",
    description: "Medição de transições térmicas como fusão, cristalização e transições vítreas.",
    icon: Thermometer,
  },
  {
    id: 4,
    title: "Máquina Universal de Ensaios Eletromecânicos",
    description: "Realização de testes mecânicos destrutivos e não destrutivos em diversos materiais. Avalia propriedades como resistência, elasticidade e durabilidade através de testes de tração, compressão, flexão e cisalhamento.",
    icon: Zap,
  },
  {
    id: 5,
    title: "Consultoria em Inovação",
    description: "Apoio técnico-científico para empresas no desenvolvimento de novos produtos e patentes.",
    icon: Lightbulb,
  },
   {
  id: 6,
  title: "Automação por Inteligência Artificial",
  description: "Uso de técnicas de machine learning para automação e otimização de processos.",
  icon: Lightbulb,
  },
];

export const news = [
  {
    id: 1,
    title: "Laboratório recebe visita da Delegação do IMIP - Indonesia Morowali Industrial Park",
    date: "28 de Setembro, 2025",
    summary: "Nosso laboartório recebeu com grande honra a delegação do Indonesia Morowali Industrial Park (IMIP), que vieram conhecer de perto as nossas pesquisas e tecnologias em materiais avançados, biomateriais e soluções sustentáveis.",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=500&fit=crop", // abstract science
  },
  {
    id: 2,
    title: "Bolsa PIBIC",
    date: "28 de Setembro, 2025",
    summary: "Se você é estudante de Química e áreas afins e quer atuar em projetos, essa é a sua chance! Bolsa PIBIC disponível!.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=500&fit=crop", // scientist
  },
  {
    id: 3,
    title: "Nova publicação aceita!",
    date: "28 de Setembro, 2025",
    summary: "O artigo aceito para publicação, liderado pelo professor Fernando Gomes, e suas alunas de doutorado do PENt Karine Velasco e Jaciara Santos, será publicado no Journal of Drug Delivery Science and Technology, referência mundial em tecnologia farmacêutica e biomateriais aplicados à saúde!.",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV8OMUumCqTFevycKm2k0AlaS-67a6TOy0JA&s?w=800&h=500&fit=crop", // clean room
  },
];

export const team = [
  {
    id: 1,
    name: "Dr. Fernando Gomes",
    role: "Pesquisador e Chefe dos Laboratórios de Pesquisa",
    bio: "Professor titular e pesquisador de referência em Ciência e Engenharia de Materiais, com formação sólida e trajetória marcada por continuidade, impacto e atualização constante.",
    initials: "FG",
    photo: "fernando.jpg",
    lattes: "http://lattes.cnpq.br/3049721573449880",
  },
  {
    id: 2,
    name: "Dr. Luiz Gustavo Baptista",
    role: "Pesquisador de Pós-Doutorado",
    bio: "Foco em Propriedade Intelectual e Inovação.",
    initials: "LB",
    photo: "luiz-baptista.png",
    lattes: "http://lattes.cnpq.br/5443960773408167",
  },
  {
    id: 3,
    name: "Dr. Francisco Silva",
    role: "Pesquisador de Pós-Doutorado",
    bio: "Foco em: Caracterização de Materiais, Microfluidica, Processamento e Análise de Imagens, Microscopia, Inteligência Artificial.",
    initials: "FS",
    photo: "francisco.jpg",
    lattes: "http://lattes.cnpq.br/8480597715627519",
  },
  {
    id: 4,
    name: "MSc. Daniele Brandão",
    role: "Doutoranda",
    bio: "Desenvolvimento de Microsistemas nanoestruturadas para catalise e conversão de biodiesel apartir de oléo naturais.",
    initials: "DB",
    photo: "",
    lattes: "http://lattes.cnpq.br/3934019582598385",
  },
  {
    id: 5,
    name: "MSc. Gabriel Silva",
    role: "Pesquisador Doutorando",
    bio: "Desenvolvimento de sistemas poliméricos para aplicações na remoção de metais pesados e contaminantes da água.",
    initials: "GS",
    photo: "",
    lattes: "",
  },
  {
    id: 6,
    name: "MSc. Jaciara Santos",
    role: "Pesquisadora Doutoranda",
    bio: "Desenvolvimento de nanopartículas magnéticas para a dessulfurização de combustíveis fosseis.",
    initials: "JS",
    photo: "",
    lattes: "http://lattes.cnpq.br/3601078343220540",
  },
  {
    id: 7,
    name: "MSc. Suelen Cunha",
    role: "Pesquisadora Doutoranda",
    bio: "Desenvolvimento de sistemas geopolimericos para remoção de contaminantes do biodiesel.",
    initials: "SC",
    photo: "",
    lattes: "",
  },
  {
    id: 8,
    name: "MSc. Viviane Valadão",
    role: "Pesquisadora Doutoranda",
    bio: "Desenvolvimento de sistemas geopolimericos para conversão de H2 e N2 em amônia verde.",
    initials: "VV",
    photo: "",
    lattes: "",
  },
  {
    id: 9,
    name: "MSc. Luis Escobar",
    role: "Pesquisador Doutorando",
    bio: "Desenvolvimento de nanopartículas magneticas para remoção de óleo da água.",
    initials: "LE",
    photo: "",
    lattes: "",
  },
  {
    id: 10,
    name: "MSc. Nicolle",
    role: "Pesquisadora Doutoranda",
    bio: "Desenvolvimento de sistemas polimericos para tratamento da tuberculose com entrega de fármaco por via nasal.",
    initials: "NI",
    photo: "",
    lattes: "",
  },
];

export const infrastructureItems = [
  "Calorímetro Diferencial de Varredura (DSC)",
  "Espectrômetro de Fluorescência de Raios X por Energia Dispersiva (EDX)",
  "Máquina Universal de Ensaios Mecânicos (EMIC)",
  "Espectrofotômetro de UV-Vis",
];
