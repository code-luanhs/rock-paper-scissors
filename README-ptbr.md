# Rock, Paper, Scissors

[English](README.md)

Um jogo responsivo de Pedra, Papel e Tesoura. Este projeto foi desenvolvido a partir do desafio [Rock, Paper, Scissors](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH) do Frontend Mentor.

## Funcionalidades

- Permite escolher entre Pedra, Papel e Tesoura.
- Gera uma escolha aleatória para a casa.
- Determina se o jogador venceu, perdeu ou empatou em cada rodada.
- Atualiza a pontuação de acordo com o resultado.
- Inclui transições animadas entre os estados do jogo.
- Anima a revelação da escolha da casa e o resultado da rodada.
- Destaca a escolha vencedora com anéis visuais.
- Inclui um modal responsivo com as regras do jogo.
- Possui layouts adaptados para dispositivos desktop e mobile.

## Tecnologias

- [SvelteKit](https://svelte.dev/docs/kit) e [TypeScript](https://www.typescriptlang.org/)
- [Svelte](https://svelte.dev/) para componentes, estado e transições
- [Tailwind CSS](https://tailwindcss.com/) para estilização

## Executando localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) 20 ou superior
- npm

### Instalação

```bash
git clone git@github.com:code-luanhs/rock-paper-scissors.git
cd rock-paper-scissors
npm install
npm run dev
```

Depois, acesse a URL exibida pelo SvelteKit, normalmente `http://localhost:5173`.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Gera a build de produção. |
| `npm run preview` | Executa localmente a build de produção. |
| `npm run check` | Executa as verificações do Svelte e TypeScript. |
| `npm run lint` | Executa a análise estática com ESLint e as verificações de formatação. |
| `npm run format` | Formata o projeto com Prettier. |

## Estrutura do projeto

```text
src/
├── lib/
│   ├── assets/          # Imagens e ícones
│   ├── components/      # Componentes do jogo e da interface
│   └── game/            # Tipos e regras do jogo
├── routes/
│   ├── +layout.svelte   # Layout e estilos globais
│   └── +page.svelte     # Estado do jogo e fluxo das rodadas
└── app.css              # Estilos globais e configuração do Tailwind
```

## Fluxo do jogo

Cada rodada passa por um pequeno conjunto de estados:

1. O jogador escolhe Pedra, Papel ou Tesoura.
2. O jogo aguarda antes de revelar a escolha da casa.
3. A casa escolhe aleatoriamente uma das três opções.
4. O vencedor é determinado e a pontuação é atualizada.
5. O jogador pode iniciar uma nova rodada através do botão **Play Again**.

As regras do jogo e o cálculo do resultado ficam separados dos componentes de interface em `src/lib/game`.

## Autor

Desenvolvido por [Luan Henrique](https://github.com/code-luanhs).
