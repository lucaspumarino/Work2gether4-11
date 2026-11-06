import type { PlanItem, FaqItem, SegmentItem, TestimonialItem } from '../types';

export const PLANS: PlanItem[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Pra começar certo e validar sua oferta',
    price: 'R$ 1.190',
    description: 'Estrutura essencial com foco em validação rápida e canal direto com o cliente.',
    features: [
      '1 Página Única (Landing Page de até 6 seções)',
      'Botão de WhatsApp configurado para atendimento imediato',
      'Textos persuasivos inclusos (escritos para fazer o visitante comprar)',
      'Sua empresa indexada e visível nas buscas do Google',
      'Publicação inclusa (Pronto para rodar)',
      '1 rodada de ajustes finais',
      'Certificado de segurança SSL incluso',
    ],
    highlight: false,
    ctaText: 'Pedir orçamento Starter',
  },
  {
    id: 'pro',
    name: 'Pro',
    badge: 'MAIS VENDIDO',
    tagline: 'O pacote completo para transformar visitas em vendas reais',
    price: 'R$ 2.490',
    description: 'Máquina de vendas com automação inteligente no WhatsApp e tracking configurado.',
    features: [
      'Landing Page completa de alta performance (Estrutura premium)',
      'Roteiro de textos estratégico para aumentar as vendas',
      'Filtro inteligente no WhatsApp: capture nome e serviço antes de atender',
      'Site ultra-rápido: seu cliente não desiste por lentidão no celular (< 2s)',
      'Instalação de rastreamento (Pixel Meta / GA4) para campanhas de anúncios',
      '2 rodadas de ajustes finos',
      'Zero perda de tempo: seu negócio pronto para vender em 7 dias',
      'Hospedagem de alta velocidade inclusa',
    ],
    highlight: true,
    ctaText: 'Agendar diagnóstico Pro',
  },
  {
    id: 'premium',
    name: 'Premium',
    badge: 'AUTORIDADE MÁXIMA',
    tagline: 'Pra quem busca presença de elite e escala consistente',
    price: 'R$ 4.890',
    description: 'Ecossistema institucional completo com arquitetura de conversão sob medida.',
    features: [
      'Site institucional completo (Até 5 páginas para cobrir toda a sua operação)',
      'Design exclusivo de alto padrão visual alinhado à sua marca',
      'Produção de texto completa quebrando as objeções do seu cliente',
      'SEO Avançado: estrutura preparada para vencer a concorrência no Google',
      'Otimizações máximas de velocidade e estabilidade em nuvem',
      '3 rodadas de ajustes com acompanhamento prioritário',
      'Acompanhamento garantido: você nunca fica sozinho após o site ir ao ar',
      'Suporte técnico e consultoria de conversão',
    ],
    highlight: false,
    ctaText: 'Solicitar proposta Premium',
  },
];

export const FAQS: FaqItem[] = [
  {
    q: 'Vocês garantem resultados de vendas?',
    a: 'Nós garantimos a implementação de um processo validado e infraestrutura de ponta. Embora não possamos controlar o mercado, trabalhamos com metas claras e otimização contínua. Se não batermos as metas iniciais, nossa equipe intensifica os testes sem custo extra de gestão até estabilizar a performance.',
  },
  {
    q: 'Qual é o prazo para começar a rodar?',
    a: 'Nosso setup padrão leva de 7 a 14 dias úteis. Isso inclui a criação das Landing Pages, configuração do tracking (GA4/Pixel), setup das campanhas e integração com seu CRM/WhatsApp. No 8º dia, suas campanhas já podem estar no ar.',
  },
  {
    q: 'Preciso ter domínio e hospedagem contratados?',
    a: 'Sim, você precisa apenas de um domínio próprio (ex: suaempresa.com.br). A hospedagem das Landing Pages de alta performance é por nossa conta nos planos Pro e Premium. Nós cuidamos de toda a configuração técnica de DNS, servidores e certificado SSL.',
  },
  {
    q: 'Quanto preciso investir em anúncios (tráfego pago)?',
    a: 'O investimento em mídia (Google / Meta) é pago diretamente às plataformas e definido por você. Recomendamos um mínimo de R$ 1.000/mês para ter dados estatísticos relevantes, mas a verba ideal depende da sua meta de vendas e ticket médio.',
  },
  {
    q: 'Vocês criam os criativos (fotos e vídeos) ou eu preciso enviar?',
    a: 'Nós criamos todos os roteiros e direcionamento criativo. A produção bruta (captar o vídeo ou foto simples) é feita por você com nosso guia prático, e nossa equipe faz a edição, tratamento visual e design final para os anúncios. Se preferir, utilizamos bancos de imagens premium.',
  },
  {
    q: 'Existe fidelidade ou multa de cancelamento?',
    a: 'Trabalhamos com total transparência: o projeto é por entrega, sem contratos de fidelidade forçada. Você é dono dos seus ativos digitais e páginas. Queremos que você continue conosco pelos resultados reais no caixa.',
  },
  {
    q: 'Como acompanho os resultados no dia a dia?',
    a: 'Você terá acesso a relatórios claros de conversão e eventos rastreados no WhatsApp e Google Analytics. Além disso, nosso canal direto no WhatsApp garante alinhamento rápido e feedback de performance contínuo.',
  },
  {
    q: 'O que acontece se eu não gostar das Landing Pages?',
    a: 'Nosso processo de design inclui etapas claras de aprovação. Antes de colocar no ar, enviamos o layout completo para você revisar. As rodadas de ajustes inclusas garantem que o resultado final fique 100% alinhado à sua expectativa e marca.',
  },
  {
    q: 'Vocês atendem meu nicho específico?',
    a: 'Já atendemos mais de 40 nichos (prestadores de serviços, clínicas médicas, imobiliárias, gastronomia, escritórios corporativos e TI). A metodologia de funil direto (Atração > Conversão imediata no WhatsApp > Qualificação) é adaptada especificamente à sua dor e proposta de valor.',
  },
  {
    q: 'Como fica a questão da LGPD?',
    a: 'Todas as nossas páginas e tagueamentos seguem rigorosamente as normas da LGPD. Implementamos avisos de cookies transparentes, certificados de criptografia HTTPS e políticas de privacidade padrão para proteger sua empresa juridicamente.',
  },
];

export const SEGMENTS: SegmentItem[] = [
  {
    id: 'servicos',
    title: 'Prestadores de Serviços',
    category: 'Consultorias & Serviços',
    subtitle: 'Fim dos curiosos e foco em clientes pagadores',
    description: 'Leads qualificados direto no WhatsApp com triagem automática de orçamento, serviço desejado e urgência.',
    stats: '+140%',
    statLabel: 'Aumento em orçamentos qualificados',
    benefits: [
      'Triagem de porte do cliente antes de iniciar a conversa',
      'Textos focados em resolução de dor imediata',
      'Zero tempo perdido respondendo perguntas repetitivas',
    ],
  },
  {
    id: 'clinicas',
    title: 'Clínicas e Consultórios',
    category: 'Saúde & Bem-Estar',
    subtitle: 'Transforme buscas médicas em consultas particulares',
    description: 'Páginas humanizadas com autoridade médica, depoimentos seguros e agendamento simplificado com sua secretária.',
    stats: '3.8x',
    statLabel: 'Taxa de conversão em agendamentos',
    benefits: [
      'Apresentação clara dos tratamentos e especialidades',
      'Botão direto para a recepção com mensagem pré-preenchida',
      'Em conformidade com normas éticas de publicidade em saúde',
    ],
  },
  {
    id: 'imobiliarias',
    title: 'Imobiliárias e Corretores',
    category: 'Mercado Imobiliário',
    subtitle: 'Destaque seus melhores imóveis com captura ágil',
    description: 'Estrutura visual imersiva pensada para quem busca comprar ou alugar, capturando o contato do interessado em segundos.',
    stats: '88%',
    statLabel: 'Leads com contato verificado no WhatsApp',
    benefits: [
      'Apresentação em alta definição de plantas e fotos',
      'Captação de intenção de compra e faixa de preço',
      'Direcionamento rápido para o corretor responsável',
    ],
  },
  {
    id: 'restaurantes',
    title: 'Bares e Restaurantes',
    category: 'Alimentos & Bebidas',
    subtitle: 'Aumente o delivery próprio e lote o salão',
    description: 'Cardápios estratégicos e campanhas pontuais para dias de pico, eliminando taxas abusivas de aplicativos terceiros.',
    stats: '-27%',
    statLabel: 'Economia em comissões de marketplaces',
    benefits: [
      'Cardápio digital leve com abertura em 1 segundo',
      'Link direto para pedidos no WhatsApp e reservas',
      'Campanhas programadas para fins de semana e happy hour',
    ],
  },
  {
    id: 'ti',
    title: 'Empresas de TI e Software',
    category: 'Tecnologia & B2B',
    subtitle: 'Autoridade corporativa para fechar contratos de alto ticket',
    description: 'Apresente sua infraestrutura com credibilidade técnica, casos de sucesso e formulário de diagnóstico empresarial.',
    stats: 'R$ 110M+',
    statLabel: 'Em oportunidades B2B geradas',
    benefits: [
      'Design high-tech moderno e minimalista',
      'Demonstração clara de arquitetura, segurança e SLAs',
      'Integração direta com CRM e pipelines de vendas corporativos',
    ],
  },
  {
    id: 'corretores',
    title: 'Corretores Autônomos',
    category: 'Corretores',
    subtitle: 'Posicionamento individual de prestígio',
    description: 'Conquiste clientes qualificados e receba contatos diretos no WhatsApp sem depender de portais.',
    stats: '7 dias',
    statLabel: 'Para ter sua presença própria online',
    benefits: [
      'Construção de autoridade pessoal no seu nicho',
      'Campanhas direcionadas para seu WhatsApp pessoal',
      'Páginas otimizadas para anúncios locais no Google e Instagram',
    ],
  },
  {
    id: 'sustentaveis',
    title: 'Empresas Sustentáveis',
    category: 'Empresas Ecológicas',
    subtitle: 'Comunique seus diferenciais ecológicos com autoridade',
    description: 'Destaque sua atuação responsável e atraia clientes que valorizam sustentabilidade e impacto positivo.',
    stats: '+92%',
    statLabel: 'Percepção de valor e fechamento de propostas',
    benefits: [
      'Apresentação clara de métricas ambientais e certificados',
      'Páginas leves com carregamento ultra-rápido e alta performance',
      'Atração de clientes B2B e B2C que priorizam soluções verdes',
    ],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    company: 'Ecoclick',
    quote: 'Nossa taxa de resposta caiu para menos de 1 minuto com a automação no WhatsApp e dobramos os orçamentos fechados no primeiro mês.',
    author: 'Renato Silveira',
    role: 'Diretor Comercial',
    metric: '+120% em Vendas',
    tag: 'Energia & Sustentabilidade',
  },
  {
    company: 'Mobzeen',
    quote: 'A techouse entregou exatamente o que prometeu: uma página rápida que não trava no celular e traz contatos prontos para comprar.',
    author: 'Juliana Mendes',
    role: 'Head de Growth',
    metric: '76% Menos Custo por Lead',
    tag: 'Mobilidade Urbana',
  },
  {
    company: 'PrimeSystems',
    quote: 'A melhor decisão que tomamos para nossa operação B2B. A clareza dos textos e o visual transmitiram a confiança necessária para contratos maiores.',
    author: 'Carlos Eduardo',
    role: 'CEO & Fundador',
    metric: 'R$ 480k em Novos Contratos',
    tag: 'Infraestrutura de TI',
  },
];

export const METHODOLOGY_STEPS = [
  {
    step: '01',
    title: 'Diagnóstico Rápido',
    duration: '15 minutos',
    tag: 'Alinhamento Estratégico',
    description: 'Briefing direto e objetivo para mapear sua oferta principal, público-alvo e principais objeções de compra.',
    details: 'Sem reuniões longas: analisamos seus concorrentes e definimos a proposta única de valor.',
  },
  {
    step: '02',
    title: 'Construção Blindada',
    duration: 'Dias 1 a 5',
    tag: 'Design & Copywriting',
    description: 'Criamos toda a estrutura, redação persuasiva e visual de alta fidelidade desenhado para gerar conversão.',
    details: 'Código limpo em Next.js/React, mobile-first e carregamento ultra-rápido.',
  },
  {
    step: '03',
    title: 'Ativação do Sistema',
    duration: 'Dias 6 e 7',
    tag: 'Publicação & Tracking',
    description: 'Sua página vai ao ar com o WhatsApp inteligente conectado e eventos de conversão no Pixel e Google prontos.',
    details: 'Validação de testes de envio de mensagens, formulários e certificado SSL.',
  },
];

export const CLIENT_LOGOS = [
  'Ecoclick',
  'Mobzeen',
  'Olgacor',
  'PrimeSystems',
  'Avanzo',
  'TechCorp',
  'Vanguard',
  'NexusLab',
];
