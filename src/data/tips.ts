export interface Tip {
  id: string;
  title: string;
  content: string;
  icon?: string;
}

export const MOCK_TIPS: Tip[] = [
  {
    id: '1',
    title: 'Como tirar a espuma?',
    content: 'A espuma que fica na superfície da mistura causa os espacinhos indesejados dentro do saquinho do geladinho. Para evita-la, ao terminar de bater sua mistura no liquidificador você deve deixa-la descansando por mais ou menos 20 minutos. Após passar esse tempo, retire o excesso de espuma que ficará na superfície com uma concha e coloque em outro recipiente.',
    icon: 'Lightbulb'
  },
  {
    id: '2',
    title: 'Precisa adoçar mais?',
    content: 'Se achar necessário, coloque um pouco mais de açúcar na sua receita base. Como o geladinho será congelado, ele perde um pouco do dulçor, então a mistura líquida precisa estar "bem docinha" antes de ir para o freezer.',
    icon: 'Lightbulb'
  }
];
