<div align='center'>
  <h1>
    🪙 Shopping Coins
  </h1>

  > Um aplicativo mobile que permita aos usuários comprar produtos e receber notificações quando for confirmada a compra.

  ![image](https://github.com/user-attachments/assets/68e7c043-d08b-40d5-9876-5dab8ca8d82e)
</div>

## 🎃 Desafio

O Shopping Coins é um aplicativo mobile que permite aos usuários comprar produtos e receber notificações quando for confirmada a compra.
Além disso, é possível criar uma conta e realizar o processo de autenticação para adicionar produtos no carrinho, realizar a compra e receber a confirmação por notificação de forma intuitiva e eficiente.

Esta aplicação foi feita com o intuito de testar minha habilidades para a posição de Desenvolvedor Mobile React Native e TypeScript. Ela tem como objetivo avaliar as habilidades de desenvolvimento, especificamente em relação ao desenvolvimento mobile, integração de push notifications, autenticação e boas práticas de código.

## 🔧 Techs

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Bun](https://bun.sh/)

## 🎱 Como executar

Após **Clonar o projeto** na sua máquina, certifique-se de instalar as dependências de forma correta com `bun install`. Além disso, esse projeto usa variáveis de ambiente, então copie o arquivo `.env.example` e cole suas variáveis de ambiente no arquivo `.env.local`:

```.env
EXPO_PUBLIC_API_URL="http://192.168.1.8:3333"
```

Para simular as requisições a api é utilizado o `json-server`, para executar o json server com todos os recursos prontos para uso dentro da aplicação execute:

```bash
$ bun run server
```

Com o servidor rodando, execute o projeto e siga as instruções abaixo:

```bash
# Iniciar o projeto e escanear o QRCode com seu celular usando o app Expo Go
$ bun run start

# Android
$ bun run android

# iOS
$ bun run ios
```

Se quiser fazer um tour pela aplicação, você pode usar as credências:
- email: `leo.azannielttt@gmail.com`
- senha: `123456`

## 🗃️ Recursos

A seguir alguns recursos utilizados para o desenvolvimento do desafio proposto:
- [Especificações do desafio](./.github/desafio-mobile-preco-justo.pdf)
- [Layout no Figma](https://www.figma.com/design/CtXgPGFveEo09aAEIyEKb1/APP---Shopping-Coins?node-id=589-3637&t=EDBJrwWzv3KLUNkZ-1)

