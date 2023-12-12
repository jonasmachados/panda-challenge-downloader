# Panda Challenge Downloader

O Panda Challenge Downloader é um aplicativo React Native desenvolvido usando o
Expo (bare workflow). Ele consome a API do Panda Video para exibir uma lista de vídeos
na tela inicial. Ao clicar em um vídeo, os usuários são direcionados para a tela de
detalhes do vídeo, onde podem assistir ao vídeo e salvar localmente no dispositivo.

![Advertising do Panda Challenge Downloader](/src/assets/advertising.png)


## Funcionalidades Principais
- **Lista de Vídeos:** Exiba uma lista de vídeos provenientes da API do - Panda Video na tela inicial do aplicativo.
- **Detalhes do Vídeo:** Ao clicar em um vídeo, os usuários são redirecionados para a tela de detalhes, onde encontram informações adicionais sobre o vídeo selecionado.
- **Reprodução de Vídeo:** Ofereça a capacidade de assistir aos vídeos diretamente no aplicativo.
- **Download Local:** Permita que os usuários salvem vídeos localmente em seus dispositivos para visualização offline.

## Tecnologias Utilizadas

- Expo (bare workflow)
- React Native
- Node.js
- Panda Video (hospedagem de vídeo)

## Estrutura do Projeto

- `android/`
- `ios/`
- `node_modules/`
- `src/`
  - `components/`
    - `VideoList.js`
    - `VideoPlayer.js`
  - `navigation/`
    - `AppNavigator.js`
  - `screens/`
    - `HomeScreen.js`
    - `VideoScreen.js`
  - `styles/`
    - `commonStyles.js`
    - `videoListStyles.js`
  - `utils/`
    - `ConstantsToStyle.js`
- `babel.config.js`
- `.gitignore`
- `.prettierrc`
- `app.json`
- `index.js`
- `package.json`
- `README.md`

### Streaming Adaptativo

Para proporcionar uma experiência de streaming adaptativo, utilizamos o componente `Video` do `expo-av` na tela `VideoScreen`. Isso aproveita o suporte nativo para streaming adaptativo.

### Cache Inteligente

A funcionalidade de cache inteligente está integrada ao método `downloadVideo` da tela `VideoScreen`. Os vídeos são baixados localmente e salvos na biblioteca de mídia do dispositivo, permitindo acesso offline e economizando largura de banda em reproduções futuras.

### Limites de Armazenamento

Implementamos uma estratégia para lidar com limites de armazenamento no dispositivo, solicitando permissão para acessar a biblioteca de mídia e utilizando a biblioteca `expo-media-library` para salvar os vídeos baixados. Além disso, permitimos que os usuários gerenciem e excluam vídeos para liberar espaço.

## Como Executar o Projeto

1. Clone o repositório: `git clone https://github.com/seu-usuario/panda-video-app.git`
2. Instale as dependências: `yarn install`
3. Inicie o aplicativo: `yarn start`
4. Crie a variável de ambiente PANDA_AUTHORIZATION no arquivo .env. 

## Desafios e Soluções

- **Integração com Panda Video API:** Foi necessário lidar com os endpoints da API do Panda Video para obter dados de vídeos. As soluções incluíram o uso de bibliotecas como `axios` para facilitar as solicitações HTTP.

- **Streaming Adaptativo:** A escolha de usar o componente `Video` do `expo-av` simplificou a implementação do streaming adaptativo, aproveitando as capacidades nativas do Expo.
