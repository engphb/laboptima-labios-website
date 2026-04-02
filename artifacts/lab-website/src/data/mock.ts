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
    photo: "http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4206991D6",
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
    photo: "http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K8194315J0",
    lattes: "http://lattes.cnpq.br/3934019582598385",
  },
  {
    id: 5,
    name: "MSc. Gabriel Silva",
    role: "Pesquisador Doutorando",
    bio: "Desenvolvimento de sistemas poliméricos para aplicações na remoção de metais pesados e contaminantes da água.",
    initials: "GS",
    photo: "http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K2744943D7",
    lattes: "http://lattes.cnpq.br/4385196019301200",
  },
  {
    id: 6,
    name: "MSc. Jaciara Santos",
    role: "Pesquisadora Doutoranda",
    bio: "Desenvolvimento de nanopartículas magnéticas para a dessulfurização de combustíveis fosseis.",
    initials: "JS",
    photo: "http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4055300Y7",
    lattes: "http://lattes.cnpq.br/3601078343220540",
  },
  {
    id: 7,
    name: "MSc. Suelen Cunha",
    role: "Pesquisadora Doutoranda",
    bio: "Desenvolvimento de sistemas geopolimericos para remoção de contaminantes do biodiesel.",
    initials: "SC",
    photo: "http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4446963A1",
    lattes: "http://lattes.cnpq.br/4185202342856040",
  },
  {
    id: 8,
    name: "MSc. Viviane Valadão",
    role: "Pesquisadora Doutoranda",
    bio: "Desenvolvimento de sistemas geopolimericos para conversão de H2 e N2 em amônia verde.",
    initials: "VV",
    photo: "http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K2797570D3",
    lattes: "http://lattes.cnpq.br/0140921423398420",
  },
  {
    id: 9,
    name: "MSc. Luis Escobar",
    role: "Pesquisador Doutorando",
    bio: "Desenvolvimento de nanopartículas magneticas para remoção de óleo da água.",
    initials: "LE",
    photo: "http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K1149951Z2",
    lattes: "http://lattes.cnpq.br/3720716050007910",
  },
  {
    id: 10,
    name: "B.Sc. Nicolle Brum",
    role: "Pesquisadora Mestranda",
    bio: "Desenvolvimento de sistemas polimericos para tratamento da tuberculose com entrega de fármaco por via nasal.",
    initials: "NI",
    photo: "http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K2770125U2",
    lattes: "http://lattes.cnpq.br/7996957410635131",
  },
];

export const projects = [
  {
    id: 1,
    title: "Preparo de matrizes geopoliméricas nanomodificadas com finalidades múltiplas, incluindo a captura de gases tóxicos e o abandono de poços",
    titleEn: "Preparation of nanomodified geopolymer matrices for multiple purposes, including the capture of toxic gases and well abandonment.",
    description: "Preparo de matrizes geopoliméricas nanomodificadas com finalidades múltiplas, incluindo a captura de gases tóxicos e o abandono de poços, em parceria estratégica com a Repsol.",
    descriptionEn: "Preparation of nanomodified geopolymer matrices for multiple purposes, including the capture of toxic gases and well abandonment, in strategic partnership with Repsol.",
    partner: "Repsol",
    logo: "https://repsolsinopec.com.br/wp-content/themes/sinopectheme//assets/files/images/repsol-sinopec-logo.png",
    status: "Em andamento",
    statusEn: "Ongoing",
    year: 2024,
    type: "Parceria Industrial",
    typeEn: "Industrial Partnership",
  },
  {
    id: 2,
    title: "Preparo de ferritas magnéticas modificadas com mn, ni, w, zr e ce utilizando solução de quitosana e síntese verde com extratos de frutas para remoção de enxofre de combustíveis",
    titleEn: "Preparation of magnetic ferrites modified with Mn, Ni, W, Zr, and Ce using chitosan solution and green synthesis with fruit extracts for sulfur removal from fuels",
    description: "Desenvolvimento de um método eficiente para a remoção de enxofre de combustíveis, por meio da preparação de ferritas magnéticas contendo os metais Mn, Ni, W, Zr e Ce, utilizando solução de quitosana e uma abordagem de síntese verde com extratos de frutas.",
    descriptionEn: "Development of an efficient method for removing sulfur from fuels, through the preparation of magnetic ferrites containing the metals Mn, Ni, W, Zr, and Ce, using chitosan solution and a green synthesis approach with fruit extracts.",
    partner: "CNPq",
    logo: "https://www.gov.br/cnpq/pt-br/canais_atendimento/identidade-visual/CNPq_v2017_rgb.jpg",
    status: "Em andamento",
    statusEn: "Ongoing",
    year: 2023,
    type: "Fomento Nacional",
    typeEn: "National Grant",
  },
  {
    id: 3,
    title: "Mineração de Dados, Aprendizagem de Máquina por Técnicas de Agrupamento e Metanálise como Ferramentas para a Determinação do Potencial Antimicrobiano de Nanopartículas e Nanoemulsões de Óleos Essenciais Estabilizadas com Quitosana",
    titleEn: "Data Mining, Machine Learning through Clustering Techniques, and Meta-analysis as Tools for Determining the Antimicrobial Potential of Essential Oil Nanoparticles and Nanoemulsions Stabilized with Chitosan",
    description: "Investigação do potencial dos óleos essenciais como alternativa biotecnológica no combate a microrganismos multirresistentes e patógenos emergentes. Por meio de uma análise cienciométrica na base SCOPUS com o software VOSviewer e a realização de metanálises, o estudo avaliou a eficácia da integração entre nanotecnologia e produtos naturais. Os resultados demonstram que o desenvolvimento de nanopartículas e nanoemulsões estabilizadas com quitosana potencializa as propriedades antimicrobianas dos óleos, consolidando esses nanosistemas como estratégias promissoras e estatisticamente eficazes para o enfrentamento de crises sanitárias e patógenos diversos.",
    descriptionEn: "This study investigates the potential of essential oils as a biotechnological alternative in combating multidrug-resistant microorganisms and emerging pathogens. Using scientometric analysis of the SCOPUS database with VOSviewer and meta-analyses, the study evaluated the effectiveness of integrating nanotechnology and natural products. The results demonstrate that the development of nanoparticles and nanoemulsions stabilized with chitosan enhances the antimicrobial properties of the oils, consolidating these nanosystems as promising and statistically effective strategies for tackling health crises and various pathogens.",
    partner: "CAPES",
    logo: "https://www.infoescola.com/wp-content/uploads/2017/05/capes.png",
    status: "Em andamento",
    statusEn: "Ongoing",
    year: 2021,
    type: "Fomento Nacional",
    typeEn: "National Grant",
  },
  {
    id: 4,
    title: "Nanomateriais Aplicados a Petróleo e Biocombustíveis",
    titleEn: "Nanomaterials Applied to Petroleum and Biofuels",
    description: "Aplicação da nanotecnologia com a finalidade de melhorar propriedades ou inferir novas funcionalidades a materiais ou conjunto de materiais dentro da indústria de petróleo, a fim solucionar problemas operacionais desafiadores. Este projeto visa preparação de nanosistemas sólidos e líquidos sobre diferentes problemas ocorrentes na indústria de petróleo e biocombustíveis, utilizando a presença de argilominerais, polímeros, nanopartículas magnéticas, óleos vegetais, entre outros.",
    descriptionEn: "Application of nanotechnology to improve properties or impart new functionalities to materials or sets of materials within the petroleum industry, in order to solve challenging operational problems. This project aims to prepare solid and liquid nanosystems to address different problems occurring in the petroleum and biofuel industry, using clay minerals, polymers, magnetic nanoparticles, and vegetable oils, among others.",
    partner: "CAPES",
    logo: "https://www.infoescola.com/wp-content/uploads/2017/05/capes.png",
    status: "Concluído",
    statusEn: "Completed",
    year: 2016,
    yearEnd: 2018,
    type: "Fomento Nacional",
    typeEn: "National Grant",
  },
];

export const infrastructureItems = [
  "Calorímetro Diferencial de Varredura (DSC)",
  "Espectrômetro de Fluorescência de Raios X por Energia Dispersiva (EDX)",
  "Máquina Universal de Ensaios Mecânicos (EMIC)",
  "Espectrofotômetro de UV-Vis",
];
