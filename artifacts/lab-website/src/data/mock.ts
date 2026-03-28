import { Brain, Dna, Lightbulb, Microscope, Zap, Database, Atom, FileText, CheckCircle2, Thermometer } from "lucide-react";

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
    title: "Materiais Avançados",
    description: "Desenvolvimento de novos materiais com propriedades quânticas e aplicações em supercondutividade e computação de nova geração.",
    icon: Atom,
  },
  {
    id: 2,
    title: "Biotecnologia Molecular",
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
];

export const publications = [
  {
    id: 1,
    title: "Quantum Entanglement in Graphene Superlattices at Room Temperature",
    authors: "Silva, M. R.; Costa, A. P.; et al.",
    journal: "Nature Physics",
    year: 2024,
    link: "#",
    type: "Artigo Original",
  },
  {
    id: 2,
    title: "CRISPR-Cas9 Mediated Gene Editing for Neurodegenerative Disease Models",
    authors: "Ferreira, L. C.; Santos, J. M.",
    journal: "Cell Reports",
    year: 2023,
    link: "#",
    type: "Artigo Original",
  },
  {
    id: 3,
    title: "High-Efficiency Perovskite Solar Cells Through Interface Engineering",
    authors: "Oliveira, T. S.; Almeida, R. F.; et al.",
    journal: "Science Advances",
    year: 2023,
    link: "#",
    type: "Revisão",
  },
  {
    id: 4,
    title: "Machine Learning Approaches in Predicting Protein Folding Pathways",
    authors: "Costa, A. P.; Ribeiro, V. L.",
    journal: "Bioinformatics",
    year: 2022,
    link: "#",
    type: "Artigo Original",
  },
];

export const services = [
  {
    id: 1,
    title: "Análise de Microscopia Óptica",
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
    title: "DSC – Calorímetro Diferencial de Varredura",
    description: "Medição de transições térmicas como fusão, cristalização e transições vítreas.",
    icon: Thermometer,
  },
  {
    id: 4,
    title: "Consultoria em Inovação",
    description: "Apoio técnico-científico para empresas no desenvolvimento de novos produtos e patentes.",
    icon: Lightbulb,
  },
];

export const news = [
  {
    id: 1,
    title: "Laboratório recebe novo fomento da FAPESP para pesquisa em materiais quânticos",
    date: "15 de Outubro, 2024",
    summary: "O projeto de 4 anos visa desenvolver novos supercondutores operando em temperaturas mais elevadas, com potencial de revolucionar a transmissão de energia.",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=500&fit=crop", // abstract science
  },
  {
    id: 2,
    title: "Pesquisadora do nosso grupo ganha prêmio internacional Jovem Cientista",
    date: "28 de Setembro, 2024",
    summary: "A Dra. Mariana Silva foi reconhecida pelo seu trabalho inovador na interface entre inteligência artificial e biologia estrutural.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=500&fit=crop", // scientist
  },
  {
    id: 3,
    title: "Inauguração da nova sala limpa ISO Classe 5",
    date: "10 de Agosto, 2024",
    summary: "A nova infraestrutura permitirá a nanofabricação de dispositivos com extrema precisão, abrindo portas para colaborações industriais.",
    imageUrl: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&h=500&fit=crop", // clean room
  },
];

export const team = [
  {
    id: 1,
    name: "Dr. Francisco Silva",
    role: "Pesquisador de Pós-Doutorado",
    bio: "Foco em Caracterização de Materiais, Microfluidica, Processamento e Análise de Imagens, Microscopia Digital, Microtomografia de raios-x, Modelagem de rede de poros, Inteligência Artificial.",
    initials: "Dr.",
  },
  {
    id: 2,
    name: "MSc. Jaciara Santos",
    role: "Pesquisadora Doutoranda",
    bio: "Foco em aplicações em uso de nanopartículas magnéticas para a dessulfurização de combustíveis fosseis.",
    initials: "MSc.",
  },
  {
    id: 3,
    name: "Nome 3",
    role: "Doutorando",
    bio: "Pesquisa síntese de novos materiais poliméricos para matrizes de energia limpa.",
    initials: "CF",
  },
  {
    id: 4,
    name: "Nome 4",
    role: "Doutoranda",
    bio: "Desenvolve modelos computacionais para simulação de interações moleculares em escala quântica.",
    initials: "AC",
  },
  {
    id: 5,
    name: "Nome 5",
    role: "Técnico de Laboratório",
    bio: "Responsável pela manutenção dos equipamentos de alta precisão e gestão do biotério.",
    initials: "JS",
  },
  {
    id: 6,
    name: "Nome 6",
    role: "Mestranda",
    bio: "Trabalha com caracterização de nanomateriais usando espectroscopia Raman.",
    initials: "VR",
  },
];

export const infrastructureItems = [
  "Microscópio Eletrônico de Varredura (MEV)",
  "Espectrômetro de Ressonância Magnética Nuclear (RMN 600MHz)",
  "Cluster de Supercomputação (120 GPUs A100)",
  "Sala Limpa ISO Classe 5 (100m²)",
  "Difratômetro de Raios-X de Pó",
  "Laboratório de Cultura Celular Nível Biossegurança 2 (NB2)",
];
