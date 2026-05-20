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
    title: 'Uso da liga neutra',
    content: 'Essencial para garantir a cremosidade e evitar a formação de cristais de gelo no geladinho.',
    icon: 'Lightbulb'
  },
  {
    id: '3',
    title: 'Padronize o volume',
    content: 'Use um medidor ou faça um geladinho de água como modelo para garantir que todas as unidades fiquem com o mesmo tamanho e peso.',
    icon: 'Lightbulb'
  },
  {
    id: '4',
    title: 'Descanse antes de ensacar',
    content: 'Deixar a mistura descansar por cerca de 10 a 20 minutos após o preparo ajuda a reduzir o excesso de espuma antes de ensacar.',
    icon: 'Lightbulb'
  },
  {
    id: '5',
    title: 'Acabamento profissional',
    content: 'Use uma tesoura de cozinha para cortar a sobra de plástico após o nó e deixar as pontas dos saquinhos com uma apresentação limpa.',
    icon: 'Lightbulb'
  }
];
