export interface Recipe {
  id: string;
  title: string;
  image: string;
  prepTime: string;
  category: string;
  rating: number;
  yield: string;
  ingredients: string[];
  instructions: string[];
}

export const MOCK_RECIPES: Recipe[] = [
  {
    id: '1',
    title: 'Morango Cremoso com Leite Condensado',
    image: '/geladinho1.png',
    prepTime: '20 min',
    category: 'Cremosos',
    rating: 4.9,
    yield: '10 unidades',
    ingredients: [
      '1 litro de leite integral',
      '1 lata de leite condensado',
      '1 caixa de creme de leite',
      '1 colher de sopa de liga neutra',
      '1 bandeja de morangos frescos (250g)',
      'Saquinhos de geladinho (6x24cm)'
    ],
    instructions: [
      'Lave bem os morangos e retire os talos.',
      'No liquidificador, bata o leite, o leite condensado, o creme de leite e a liga neutra por 3 minutos até ficar homogêneo.',
      'Adicione os morangos e bata rapidamente (modo pulsar) para que fiquem pequenos pedacinhos na mistura.',
      'Deixe a mistura descansar por 10 minutos para baixar a espuma.',
      'Com o auxílio de um funil, encha os saquinhos deixando cerca de 3 dedos para amarrar.',
      'Amarre bem firme, retire o excesso de plástico e leve ao freezer por no mínimo 6 horas.'
    ]
  },
  {
    id: '2',
    title: 'Maracujá com Manga Tropical',
    image: '/geladinho2.png',
    prepTime: '15 min',
    category: 'Frutas',
    rating: 4.8,
    yield: '12 unidades',
    ingredients: [
      '500ml de suco concentrado de maracujá',
      '1 manga palmer bem madura',
      '1 xícara de açúcar',
      '500ml de água',
      '1 colher de chá de liga neutra'
    ],
    instructions: [
      'Descasque e pique a manga.',
      'Bata todos os ingredientes no liquidificador até ficar homogêneo.',
      'Peneire se desejar uma textura mais lisa.',
      'Encha os saquinhos e leve ao congelador.'
    ]
  },
  {
    id: '3',
    title: 'Ninho com Nutella',
    image: '/geladinho1.png',
    prepTime: '25 min',
    category: 'Premium',
    rating: 5.0,
    yield: '8 unidades',
    ingredients: [
      '1 litro de leite',
      '1 lata de leite condensado',
      '1 creme de leite',
      '1 xícara de Leite Ninho em pó',
      '1 colher de liga neutra',
      'Nutella para o saquinho'
    ],
    instructions: [
      'Bata o leite, leite condensado, creme de leite, Leite Ninho e liga neutra.',
      'Deixe descansar.',
      'Coloque 1 colher de chá de Nutella em cada saquinho e espalhe.',
      'Adicione a mistura líquida, amarre e congele.'
    ]
  },
  {
    id: '4',
    title: 'Piña Colada Refrescante',
    image: '/geladinho2.png',
    prepTime: '20 min',
    category: 'Alcoólicos',
    rating: 4.7,
    yield: '10 unidades',
    ingredients: [
      '1 abacaxi maduro picado',
      '400ml de leite de coco',
      '1 lata de leite condensado',
      '150ml de rum branco',
      '1 colher de liga neutra'
    ],
    instructions: [
      'Bata o abacaxi no liquidificador e peneire.',
      'Volte o suco ao liquidificador, adicione os demais ingredientes e bata bem.',
      'Deixe descansar, coloque nos saquinhos e leve ao freezer.'
    ]
  },
  {
    id: '5',
    title: 'Geladinho de Oreo',
    image: '/geladinho_oreo.png',
    prepTime: '40 min',
    category: 'Premium',
    rating: 4.9,
    yield: '10 unidades',
    ingredients: [
      '750 ml de Leite integral',
      '1 Cx Leite condensado',
      '2 Colheres (sopa) de leite ninho',
      '2 Colheres (chá) rasas de liga neutra',
      '10 Biscoitos Oreo'
    ],
    instructions: [
      'Compre o pacote de oreo com 10 unidades, separe 2 biscoitos Oreo e triture no liquidificador até se tornarem pequenos pedaços, guarde em um recipiente.',
      'Use esse pó para encher os saquinhos, bote apenas um colher rasa de chá em cada saco.',
      'Jogue todo o resto da receita no liquidificador (incluindo os outros 8 biscoitos), bata durante aproximadamente 1 min e 30 segundos.',
      'Deixe a receita descansar durante ao menos 30 min.',
      'Logo após, retire toda espuma e bote em outro recipiente.',
      'Agora basta apenas encher os saquinho com 100 ml (recomendado).'
    ]
  },
  {
    id: '6',
    title: 'Geladinho Sensações',
    image: '/geladinho_sensacoes.png',
    prepTime: '35 min',
    category: 'Premium',
    rating: 4.9,
    yield: '10 unidades',
    ingredients: [
      '1 litro de Leite integral',
      '1 Cx Leite condensado',
      '2 Colheres (sopa) de leite ninho',
      '2 Colheres (chá) rasas de liga neutra',
      '3 Colheres (sopa) rasas de pó para sorvete de morango',
      '1 Colher (chá) de Nutella (para cada saquinho)'
    ],
    instructions: [
      'Abra os saquinhos, pegue a Nutella e bote apenas uma colher de chá em cada saquinho.',
      'Logo após, bote os saquinhos no congelador para congelar e evitar que a Nutella se misture com líquido.',
      'Jogue todo o resto da receita no liquidificador, bata durante aproximadamente 1 min e 30 segundos.',
      'Deixe a receita descansar durante ao menos 30 min.',
      'Logo após, retire toda espuma e bote em outro recipiente.',
      'Agora basta apenas encher os saquinhos com 100 ml (recomendado) e levar ao freezer.'
    ]
  },
  {
    id: '7',
    title: 'Morango com Cobertura',
    image: '/geladinho_morango_cobertura.png',
    prepTime: '35 min',
    category: 'Cremosos',
    rating: 4.8,
    yield: '10 unidades',
    ingredients: [
      '1 litro de Leite integral',
      '1 Cx Leite condensado',
      '2 Colheres (sopa) de leite ninho',
      '2 Colheres (chá) rasas de liga neutra',
      '3 colheres (sopa) rasas de pó para sorvete de morango',
      'Cobertura de Morango (para o saquinho)'
    ],
    instructions: [
      'Abra os saquinhos e bote a cobertura de sorvete dentro.',
      'Cuidado para não exagerar, caso bote demais vai ficar muito doce. Espalhe bem a cobertura no saquinho.',
      'Jogue todo o resto da receita no liquidificador, bata durante aproximadamente 1 min e 30 segundos.',
      'Deixe a receita descansar durante ao menos 30 min.',
      'Logo após, retire toda espuma e bote em outro recipiente.',
      'Agora basta apenas encher os saquinhos com 100 ml (recomendado) e levar ao freezer.'
    ]
  },
  {
    id: '8',
    title: 'Creme com Caramelo',
    image: '/geladinho_creme.png',
    prepTime: '35 min',
    category: 'Cremosos',
    rating: 4.7,
    yield: '10 unidades',
    ingredients: [
      '1 litro de Leite integral',
      '1 Cx Leite condensado',
      '2 Colheres (sopa) de leite ninho',
      '2 Colheres (chá) rasas de liga neutra',
      '3 Colheres (sopa) rasas de pó para sorvete de creme',
      'Cobertura de caramelo (Opcional, para o saquinho)'
    ],
    instructions: [
      'Abra os saquinhos, pegue a cobertura de caramelo e bote apenas uma pequena porção em cada saquinho.',
      'Espalhe bem a cobertura pelo interior do saquinho.',
      'Jogue todo o resto da receita no liquidificador, bata durante aproximadamente 1 min e 30 segundos.',
      'Deixe a receita descansar durante ao menos 30 min.',
      'Logo após, retire toda espuma e bote em outro recipiente.',
      'Agora basta apenas encher os saquinhos com 100 ml (recomendado) e levar ao freezer.'
    ]
  },
  {
    id: '9',
    title: 'Geladinho de Ovomaltine',
    image: '/geladinho_ovomaltine.png',
    prepTime: '35 min',
    category: 'Premium',
    rating: 4.8,
    yield: '10 unidades',
    ingredients: [
      '1 litro de Leite integral',
      '1 Cx Leite condensado',
      '2 Colheres (sopa) de leite ninho',
      '2 Colheres (chá) rasas de liga neutra',
      '3 Colheres (sopa) de Ovomaltine'
    ],
    instructions: [
      'Abra os saquinhos, pegue o Ovomaltine e bote apenas uma colher de chá em cada saquinho.',
      'Jogue todo o resto da receita no liquidificador, bata durante aproximadamente 1 min e 30 segundos.',
      'Deixe a receita descansar durante ao menos 30 min.',
      'Logo após, retire toda espuma e bote em outro recipiente.',
      'Agora basta apenas encher os saquinhos com 100 ml (recomendado) e levar ao freezer.'
    ]
  },
  {
    id: '10',
    title: 'Ninho com Oreo',
    image: '/geladinho_ninho_oreo.png',
    prepTime: '30 min',
    category: 'Premium',
    rating: 5.0,
    yield: '10 unidades',
    ingredients: [
      '1 litro de Leite integral',
      '1 Cx Leite condensado',
      '4 Colheres (sopa) de leite ninho',
      '2 Colheres (chá) rasas de liga neutra',
      '10 biscoitos Oreo'
    ],
    instructions: [
      'Pegue os biscoitos e triture em pedacinhos pequenos, e encha os saquinhos.',
      'Jogue todo o resto da receita no liquidificador, bata durante aproximadamente 1 min e 30 segundos.',
      'Deixe a receita descansar durante ao menos 20 min.',
      'Logo após, retire toda espuma e coloque em outro recipiente.',
      'Agora basta apenas encher os saquinhos com 100 ml (recomendado) e levar ao congelador.',
      'DICA: Coloque açúcar, se achar necessário. Pois o sacolé tem que ser bem docinho.'
    ]
  },
  {
    id: '11',
    title: 'Creme com Nutella (Crush)',
    image: '/geladinho_creme_nutella.png',
    prepTime: '35 min',
    category: 'Premium',
    rating: 4.9,
    yield: '10 unidades',
    ingredients: [
      '1 litro de Leite integral',
      '1 Cx Leite condensado',
      '2 Colheres (sopa) de leite ninho',
      '2 Colheres (chá) rasas de liga neutra',
      '3 Colheres (sopa) rasas de sorvete de creme',
      '1 colher (chá) de Nutella'
    ],
    instructions: [
      'Abra os saquinhos, pegue a Nutella bote apenas uma colher de chá em cada saquinho.',
      'Logo após bote os saquinhos no congelador para congelar e evitar que a Nutella se misture com liquido.',
      'Jogue todo o resto da receita no liquidificador, bata durante aproximadamente 1 min e 30 segundos.',
      'Deixe a receita descansar durante ao menos 30 min.',
      'Logo após, retire toda espuma e bote em outro recipiente.',
      'Agora basta apenas encher os saquinhos com 100 ml (recomendado) e levar ao freezer.'
    ]
  },
  {
    id: '12',
    title: 'Ninho com Morango',
    image: '/geladinho_ninho_morango.png',
    prepTime: '25 min',
    category: 'Frutas',
    rating: 4.8,
    yield: '10 unidades',
    ingredients: [
      '1 litro de Leite integral',
      '1 Cx Leite condensado',
      '2 Colheres (sopa) de leite ninho',
      '2 Colheres (chá) rasas de liga neutra',
      '1 Caixa de Morangos Frescos'
    ],
    instructions: [
      'Bata todos os ingredientes (exceto o morango em pedaços) no liquidificador por 3 minutos.',
      'Espere até a espuma abaixar, remova a espuma e bote em outro recipiente.',
      'Pique os morangos em pedaços pequenos e coloque nos saquinhos antes de encher.',
      'Com a ajuda de um funil agora basta apenas encher os saquinhos com 100 ml (recomendado) e levar ao freezer.',
      'DICA: Coloque açúcar, se achar necessário. Pois o sacolé tem que ser bem docinho.'
    ]
  },
  {
    id: '13',
    title: 'Geladinho de Paçoca',
    image: '/geladinho_pacoca.png',
    prepTime: '30 min',
    category: 'Cremosos',
    rating: 4.7,
    yield: '10 unidades',
    ingredients: [
      '1 litro de leite integral',
      '1 Cx Leite condensado',
      '4 colheres (sopa) de leite ninho',
      '2 colheres (chá) rasas de liga neutra',
      '8 paçocas'
    ],
    instructions: [
      'Bata primeiro a base (leite integral e leite condensado) no liquidificador.',
      'Amasse as 8 paçocas em um prato, depois basta acrescentar na base e bater novamente durante aproximadamente 1 min e 30 segundos.',
      'Deixe a receita descansar durante pelo menos 20 min, logo após, retire toda a espuma e coloque em outro recipiente.',
      'Agora é só encher os saquinhos com 100 ml cada (recomendado) e levar ao congelador.',
      'Obs.: Se você bater a paçoca junto da base desde o início, fará mais espuma.'
    ]
  },
  {
    id: '14',
    title: 'Geladinho de Bis',
    image: '/geladinho_bis.png',
    prepTime: '25 min',
    category: 'Premium',
    rating: 4.8,
    yield: '10 unidades',
    ingredients: [
      '1 litro de leite integral',
      '1 Cx de leite condensado',
      '4 colheres (sopa) de leite Ninho',
      '2 colheres (chá) rasas de liga neutra',
      '1 Cx de Bis',
      '2 colheres (sopa) de achocolatado'
    ],
    instructions: [
      'Bata todos os ingredientes no liquidificador por pelo menos 1 minuto e 30 segundos.',
      'Em seguida deixe descansar por pelo menos 20 minutos.',
      'Logo após, retire toda espuma e coloque em outro recipiente.',
      'Depois é só encher os saquinhos com 100ml cada (recomendado) e levar ao freezer.'
    ]
  },
  {
    id: '15',
    title: 'Geladinho Chicabon',
    image: '/geladinho_chicabon.png',
    prepTime: '25 min',
    category: 'Premium',
    rating: 4.9,
    yield: '10 unidades',
    ingredients: [
      '3 xícaras de leite integral',
      '2 latas de creme de leite (300g)',
      '2 colheres (chá) rasas de liga neutra',
      '2 latas de doce de leite (200g)',
      '4 colheres (sopa) rasas de cacau em pó'
    ],
    instructions: [
      'Bata todos os ingredientes no liquidificador por pelo menos 2 minutos.',
      'Em seguida deixe descansar por pelo menos 20 minutos.',
      'Logo após, retire toda espuma e coloque em outro recipiente.',
      'Depois é só encher os saquinhos com 100ml cada (recomendado) e congelar.'
    ]
  },
  {
    id: '16',
    title: 'Torta de Limão',
    image: '/geladinho_torta_limao.png',
    prepTime: '30 min',
    category: 'Premium',
    rating: 4.9,
    yield: '10 unidades',
    ingredients: [
      '1 litro de leite integral',
      '1 Cx de leite condensado',
      '4 colheres (sopa) de leite Ninho',
      '2 colheres (chá) rasas de liga neutra',
      '1 xícara de chá de suco de limão',
      '1 Cx de creme de leite',
      '20 biscoitos de maisena',
      '2 colheres (sopa) de açúcar (opcional)'
    ],
    instructions: [
      'Quebre todos os biscoitos em pedaços pequenos e deixe separados.',
      'Misture o resto dos ingredientes no liquidificador por pelo menos 2 minutos.',
      'Depois coloque os biscoitos na mistura e mexa (sem bater no liquidificador).',
      'Deixe descansar por pelo menos 20 minutos, logo após, retire toda espuma e coloque em outro recipiente.',
      'Depois é só encher os saquinhos com 100ml cada e levar ao congelador.'
    ]
  },
  {
    id: '17',
    title: 'Coco com Nutella',
    image: '/geladinho_coco_nutella.png',
    prepTime: '30 min',
    category: 'Premium',
    rating: 5.0,
    yield: '10 unidades',
    ingredients: [
      '1 litro de leite integral',
      '1 Cx de leite condensado',
      '4 colheres (sopa) de leite Ninho',
      '2 colheres (chá) rasas de liga neutra',
      '100g de coco ralado adoçado',
      '1 colher (chá) de Nutella (para cada saquinho)'
    ],
    instructions: [
      'Abra os saquinhos, pegue a Nutella e bote apenas uma colher de chá em cada saquinho.',
      'Logo após bote os saquinhos no congelador para congelar e evitar que a Nutella se misture com líquido.',
      'Misture todos os outros ingredientes no liquidificador por pelo menos 2 minutos.',
      'Deixe descansar por pelo menos 20 minutos, logo após, retire toda espuma e coloque em outro recipiente.',
      'Depois é só encher os saquinhos com 100ml cada e levar ao freezer.'
    ]
  },
  {
    id: '18',
    title: 'Ouro Branco',
    image: '/geladinho_ouro_branco.png',
    prepTime: '25 min',
    category: 'Premium',
    rating: 4.8,
    yield: '10 unidades',
    ingredients: [
      '1 litro de leite integral',
      '1 Cx de leite condensado',
      '4 colheres (sopa) de leite Ninho',
      '2 colheres (chá) rasas de liga neutra',
      '8 bombons Ouro Branco'
    ],
    instructions: [
      'Bata todos os ingredientes por pelo menos 1 minuto e 30 segundos no liquidificador.',
      'Deixe descansar por pelo menos 20 minutos.',
      'Logo após, retire toda espuma e coloque em outro recipiente.',
      'Depois é só adicionar 100ml (recomendado) da mistura nos saquinhos e levar ao freezer.'
    ]
  },
  {
    id: '19',
    title: 'Geladinho de Doce de Leite',
    image: '/geladinho_doce_de_leite.png',
    prepTime: '25 min',
    category: 'Cremosos',
    rating: 4.8,
    yield: '10 unidades',
    ingredients: [
      '1 litro de leite integral',
      '1 Cx de leite condensado',
      '4 colheres (sopa) de leite Ninho',
      '2 colheres (chá) rasas de liga neutra',
      '2 colheres (sopa) de doce de leite'
    ],
    instructions: [
      'Bata todos os ingredientes no liquidificador por pelo menos 1 minuto.',
      'Em seguida deixe descansar por pelo menos 20 minutos.',
      'Enquanto isso, coloque nos saquinhos 1 colher (chá) de doce de leite em cada um.',
      'Logo após, retire toda espuma da mistura e coloque em outro recipiente.',
      'Aí é só encher os saquinhos com 100ml cada (recomendado) e levar ao congelador.'
    ]
  },
  {
    id: '20',
    title: 'Amendoim com Chocolate',
    image: '/geladinho_pacoca.png',
    prepTime: '25 min',
    category: 'Premium',
    rating: 4.8,
    yield: '10 unidades',
    ingredients: [
      '1 litro de leite integral',
      '1 Cx de leite condensado',
      '4 colheres (sopa) de leite Ninho',
      '2 colheres (chá) rasas de liga neutra',
      '180g de amendoim torrado (sem casca e sem sal)',
      'Cobertura de sorvete sabor chocolate'
    ],
    instructions: [
      'Bata todos os ingredientes (exceto a cobertura) no liquidificador por pelo menos 2 minutos.',
      'Em seguida deixe descansar por pelo menos 20 minutos.',
      'Enquanto isso, coloque uma colher (chá) da cobertura de chocolate nos saquinhos.',
      'Logo após, retire toda espuma da mistura e coloque em outro recipiente.',
      'Aí é só encher os saquinhos com 100ml cada (recomendado) e levar ao freezer.'
    ]
  },
  {
    id: '21',
    title: 'Ninho com Goiabada',
    image: '/geladinho_ninho_morango.png',
    prepTime: '30 min',
    category: 'Premium',
    rating: 4.9,
    yield: '10 unidades',
    ingredients: [
      '1 litro de leite integral',
      '1 Cx de leite condensado',
      '4 colheres (sopa) de leite Ninho',
      '2 colheres (chá) rasas de liga neutra',
      '1 colher (chá) de goiabada derretida para cada saquinho'
    ],
    instructions: [
      'Coloque a goiabada em uma panela com meia xícara (chá) de leite e mexa até a goiabada derreter. Reserve em um recipiente.',
      'Bata o resto dos ingredientes no liquidificador por pelo menos 1 minuto e 30 segundos.',
      'Em seguida deixe descansar por pelo menos 20 minutos.',
      'Enquanto isso coloque uma colher (chá) da goiabada derretida nos saquinhos.',
      'Logo após, retire toda espuma da mistura e coloque em outro recipiente.',
      'Aí é só encher os saquinhos com 100ml cada e levar ao freezer.'
    ]
  },
  {
    id: '22',
    title: 'Banana com Caramelo',
    image: '/geladinho_creme.png',
    prepTime: '25 min',
    category: 'Frutas',
    rating: 4.7,
    yield: '10 unidades',
    ingredients: [
      '1 litro de leite integral',
      '1 Cx de leite condensado',
      '4 colheres (sopa) de leite Ninho',
      '2 colheres (chá) rasas de liga neutra',
      '2 bananas picadas',
      'Cobertura de sorvete sabor caramelo'
    ],
    instructions: [
      'Bata todos os ingredientes (exceto a cobertura) no liquidificador por pelo menos 2 minutos.',
      'Em seguida deixe descansar por pelo menos 20 minutos.',
      'Enquanto isso coloque a cobertura de caramelo até a metade dos saquinhos.',
      'Logo após, retire toda espuma e coloque em outro recipiente.',
      'Aí é só encher os saquinhos com 100ml cada (recomendado) e congelar.'
    ]
  },
  {
    id: '23',
    title: 'Geladinho de Nutella',
    image: '/geladinho_creme_nutella.png',
    prepTime: '25 min',
    category: 'Premium',
    rating: 5.0,
    yield: '10 unidades',
    ingredients: [
      '1 litro de leite integral',
      '1 Cx de leite condensado',
      '4 colheres (sopa) de leite Ninho',
      '2 colheres (chá) rasas de liga neutra',
      '2 colheres (sopa) de Nutella'
    ],
    instructions: [
      'Bata todos os ingredientes no liquidificador por pelo menos 1 minuto e 30 segundos.',
      'Em seguida deixe descansar por pelo menos 20 minutos.',
      'Logo após, retire toda espuma e coloque em outro recipiente.',
      'Aí é só encher os saquinhos com 100ml cada (recomendado) e levar ao freezer.'
    ]
  },
  {
    id: '24',
    title: 'Geladinho Nesquik',
    image: '/geladinho_nesquik.png',
    prepTime: '25 min',
    category: 'Cremosos',
    rating: 4.8,
    yield: '10 unidades',
    ingredients: [
      '1 litro de leite integral',
      '1 Cx de leite condensado',
      '4 colheres (sopa) de leite Ninho',
      '2 colheres (chá) rasas de liga neutra',
      '8 colheres (sopa) de Nesquik'
    ],
    instructions: [
      'Bata todos os ingredientes no liquidificador por pelo menos 2 minutos.',
      'Em seguida deixe descansar por pelo menos 20 minutos.',
      'Logo após, retire toda espuma e coloque em outro recipiente.',
      'Depois é só encher os saquinhos com 100ml cada (recomendado) e levar ao freezer.'
    ]
  },
  {
    id: '25',
    title: 'Ferrero Rocher',
    image: '/geladinho_ferrero.png',
    prepTime: '25 min',
    category: 'Premium',
    rating: 5.0,
    yield: '10 unidades',
    ingredients: [
      '1 litro de leite integral',
      '1 Cx de leite condensado',
      '4 colheres (sopa) de leite Ninho',
      '2 colheres (chá) rasas de liga neutra',
      '8 bombons Ferrero Rocher'
    ],
    instructions: [
      'Bata todos os ingredientes no liquidificador por pelo menos 2 minutos.',
      'Em seguida deixe descansar por pelo menos 20 minutos.',
      'Logo após, retire toda espuma e coloque em outro recipiente.',
      'Depois é só encher os saquinhos com 100ml cada (recomendado) e levar ao congelador.'
    ]
  },
  {
    id: '26',
    title: 'Pedacinho do Céu',
    image: '/geladinho_ceu.png',
    prepTime: '25 min',
    category: 'Infantil',
    rating: 4.9,
    yield: '10 unidades',
    ingredients: [
      '1 litro de leite integral',
      '1 Cx de leite condensado',
      '4 colheres (sopa) de leite Ninho',
      '2 colheres (chá) rasas de liga neutra',
      '2 colheres (sopa) de pó azul para sorvete sabor blue ice'
    ],
    instructions: [
      'Bata todos os ingredientes no liquidificador por pelo menos 2 minutos.',
      'Em seguida deixe descansar por pelo menos 20 minutos.',
      'Logo após, retire toda espuma e coloque em outro recipiente.',
      'Depois é só encher os saquinhos com 100ml cada (recomendado) e congelar.'
    ]
  },
  {
    id: '27',
    title: 'Ninho com Nutella',
    image: '/geladinho_ninho_nutella.png',
    prepTime: '25 min',
    category: 'Premium',
    rating: 5.0,
    yield: '10 unidades',
    ingredients: [
      '1 litro de leite integral',
      '1 Cx de leite condensado',
      '4 colheres (sopa) de leite Ninho',
      '2 colheres (chá) rasas de liga neutra',
      '1 Colher (chá) de Nutella para cada saquinho'
    ],
    instructions: [
      'Bata todos os ingredientes (exceto a Nutella) no liquidificador por pelo menos 2 minutos.',
      'Em seguida deixe descansar por pelo menos 20 minutos.',
      'Enquanto isso, coloque uma colher de chá de Nutella em cada saquinho e espalhe.',
      'Logo após, retire toda espuma da mistura e coloque em outro recipiente.',
      'Depois é só encher os saquinhos com 100ml cada (recomendado) e levar ao freezer.'
    ]
  },
  {
    id: '28',
    title: 'Geladinho de Goiaba',
    image: '/geladinho_goiaba.png',
    prepTime: '25 min',
    category: 'Frutas',
    rating: 4.7,
    yield: '10 unidades',
    ingredients: [
      '1 litro de leite integral',
      '1 Cx de leite condensado',
      '4 colheres (sopa) de leite Ninho',
      '2 colheres (chá) rasas de liga neutra',
      '150g de goiabada',
      '1 copo de iogurte natural (170g)'
    ],
    instructions: [
      'Bata todos os ingredientes no liquidificador por pelo menos 2 minutos.',
      'Em seguida deixe descansar por pelo menos 20 minutos.',
      'Logo após, retire toda espuma e coloque em outro recipiente.',
      'Depois é só encher os saquinhos com 100ml cada (recomendado) e levar ao freezer.'
    ]
  },
  {
    id: '29',
    title: 'Geladinho de Acerola',
    image: '/geladinho_acerola.png',
    prepTime: '25 min',
    category: 'Frutas',
    rating: 4.8,
    yield: '10 unidades',
    ingredients: [
      '4 xícaras de acerolas',
      '1 xícara de água',
      '4 colheres (sopa) de açúcar',
      '1/2 xícara de leite',
      '1 colher rasa de liga neutra'
    ],
    instructions: [
      'Coloque a água e as acerolas no liquidificador e deixe bater por pelo menos 1 minuto e 30 segundos.',
      'Peneire a mistura e coloque o suco novamente no liquidificador.',
      'Adicione o resto dos ingredientes e deixe bater por pelo menos 1 minuto.',
      'Deixe a mistura descansar por pelo menos 20 minutos.',
      'Retire toda a espuma formada na superfície e transfira o líquido para outro recipiente.',
      'Com o auxílio de um funil, preencha cada saquinho com cerca de 100ml da mistura e leve ao congelador.'
    ]
  },
  {
    id: '30',
    title: 'Geladinho de Uva',
    image: '/geladinho_uva.png',
    prepTime: '25 min',
    category: 'Frutas',
    rating: 4.7,
    yield: '5 unidades',
    ingredients: [
      'Meio sachê de 25g de suco Tang sabor Uva',
      '250ml de água',
      '250ml de leite',
      'Meia xícara de açúcar',
      '1 colher rasa de liga neutra'
    ],
    instructions: [
      'Coloque todos os ingredientes no liquidificador.',
      'Bata por pelo menos 1 minuto e 30 segundos até misturar completamente.',
      'Deixe a mistura descansar por pelo menos 20 minutos.',
      'Retire toda a espuma acumulada no topo e transfira para outro recipiente.',
      'Preencha cada saquinho com cerca de 100ml e leve ao congelador.'
    ]
  },
  {
    id: '31',
    title: 'Geladinho de Morango Natural',
    image: '/geladinho_morango.png',
    prepTime: '25 min',
    category: 'Frutas',
    rating: 4.9,
    yield: '5 unidades',
    ingredients: [
      '1 caixa de morangos (aprox. 10 unidades)',
      '1 xícara (chá) de água',
      'Suco de 1/2 limão',
      '4 colheres (sopa) de açúcar',
      '1 colher rasa de liga neutra'
    ],
    instructions: [
      'Lave bem os morangos e retire as folhas.',
      'Coloque todos os ingredientes no liquidificador e bata por pelo menos 1 minuto e 30 segundos.',
      'Deixe a mistura descansar por pelo menos 20 minutos.',
      'Peneire e retire toda a espuma da superfície antes de transferir para outro recipiente.',
      'Coloque 100ml em cada saquinho de geladinho e leve ao congelador.'
    ]
  },
  {
    id: '32',
    title: 'Geladinho de Jaca',
    image: '/geladinho_jaca.png',
    prepTime: '25 min',
    category: 'Frutas',
    rating: 4.6,
    yield: '5 unidades',
    ingredients: [
      '10 bagos de jaca (sem caroço)',
      '300ml de água',
      '2 colheres de sopa de açúcar',
      '1 colher rasa de liga neutra'
    ],
    instructions: [
      'Retire os caroços dos bagos de jaca.',
      'Coloque todos os ingredientes no liquidificador.',
      'Bata por pelo menos 1 minuto e 30 segundos.',
      'Deixe a mistura descansar por pelo menos 20 minutos.',
      'Peneire, retire toda a espuma da superfície e coloque em outro recipiente.',
      'Encha os saquinhos com 100ml da mistura cada e congele.'
    ]
  },
  {
    id: '33',
    title: 'Geladinho de Banana',
    image: '/geladinho_banana.png',
    prepTime: '25 min',
    category: 'Frutas',
    rating: 4.7,
    yield: '10 unidades',
    ingredients: [
      '1 litro de leite',
      '1 kg de banana prata',
      '400g de açúcar',
      'Suco de 1/2 limão',
      '4 colheres (sopa) de açúcar',
      '1 colher rasa de liga neutra'
    ],
    instructions: [
      'Descasque e pique as bananas.',
      'Coloque todos os ingredientes no liquidificador e bata por pelo menos 1 minuto e 30 segundos.',
      'Deixe a mistura descansar por pelo menos 20 minutos.',
      'Remova toda a espuma da superfície e transfira o conteúdo para outro recipiente.',
      'Insira 100ml da mistura em cada saquinho de geladinho e leve ao congelador.'
    ]
  },
  {
    id: '34',
    title: 'Geladinho de Maracujá com Laranja',
    image: '/geladinho_diet_maracuja_laranja.png',
    prepTime: '25 min',
    category: 'Diet',
    rating: 4.8,
    yield: '12 unidades',
    ingredients: [
      '1L de água',
      '2 maçãs bem doces, sem casca e sem semente (se não estiverem doces acrescente mel ou açúcar demerara)',
      '100g de polpa de maracujá',
      '100ml de suco de laranja',
      '1/2 pepino',
      '200ml de água de coco'
    ],
    instructions: [
      'Bata todos os ingredientes no liquidificador por 2 minutos.',
      'Deixe a mistura descansar por 10 minutos.',
      'Retire a espuma acumulada no topo.',
      'Coe a mistura e coloque 100ml do líquido em cada saquinho.'
    ]
  },
  {
    id: '35',
    title: 'Geladinho Detox de Melancia',
    image: '/geladinho_diet_melancia.png',
    prepTime: '25 min',
    category: 'Diet',
    rating: 4.9,
    yield: '6 unidades',
    ingredients: [
      '1 fatia grande de melancia',
      '200ml de água de coco',
      'Adoçante a gosto',
      '1 colher de chá de canela',
      '4 morangos'
    ],
    instructions: [
      'Pique a fatia de melancia e remova as sementes.',
      'Bata todos os ingredientes no liquidificador por 2 minutos.',
      'Deixe a mistura descansar por 10 minutos.',
      'Retire a espuma, coe a mistura e coloque 100ml do líquido em cada saquinho.'
    ]
  },
  {
    id: '36',
    title: 'Geladinho de Frutas Fit',
    image: '/geladinho_diet_frutas_fit.png',
    prepTime: '25 min',
    category: 'Diet',
    rating: 4.7,
    yield: '8 unidades',
    ingredients: [
      'Frutas a gosto picadas em cubinhos (morango, kiwi, uva, manga)',
      '800ml de água de coco',
      'Adoçante ou mel a gosto'
    ],
    instructions: [
      'Lave bem as frutas escolhidas e pique-as em cubinhos pequenos para que caibam nos saquinhos.',
      'Coloque as frutas picadas diretamente dentro dos saquinhos.',
      'Se desejar, adoce a água de coco com mel ou adoçante.',
      'Complete o preenchimento dos saquinhos com a água de coco, amarre bem e congele.'
    ]
  },
  {
    id: '37',
    title: 'Geladinho Detox de Morango',
    image: '/geladinho_diet_morango.png',
    prepTime: '25 min',
    category: 'Diet',
    rating: 4.8,
    yield: '10 unidades',
    ingredients: [
      '1L de água',
      '2 maçãs bem doces, sem casca e sem semente (se não estiverem muito doces use mel ou açúcar demerara)',
      '60g de morangos picados'
    ],
    instructions: [
      'Bata todos os ingredientes no liquidificador por 2 minutos.',
      'Deixe descansar por 10 minutos.',
      'Coe e retire toda a espuma da mistura.',
      'Distribua 100ml em cada saquinho de geladinho e congele.'
    ]
  },
  {
    id: '38',
    title: 'Geladinho Detox Anti-inflamatório',
    image: '/geladinho_diet_anti_inflamatorio.png',
    prepTime: '25 min',
    category: 'Diet',
    rating: 4.6,
    yield: '6 unidades',
    ingredients: [
      '200ml de água de coco',
      '1/2 maçã',
      '1/2 cenoura',
      '2 pedaços de gengibre',
      'Suco de 1 laranja',
      '1 kiwi descascado e picado',
      'Adoçante ou mel a gosto'
    ],
    instructions: [
      'Bata todos os ingredientes no liquidificador por 2 minutos.',
      'Deixe descansar por 10 minutos.',
      'Retire a espuma e coe a mistura.',
      'Coloque 100ml do líquido em cada saquinho e congele.'
    ]
  }
];
