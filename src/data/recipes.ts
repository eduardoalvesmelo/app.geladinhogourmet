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
  }
];
