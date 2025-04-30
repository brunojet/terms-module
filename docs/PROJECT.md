# Documentação do Projeto: Módulo de Termos

## Visão Geral
Este projeto é um bundle Angular que será injetado no ServiceNow. Ele é composto por três telas principais que fazem parte da jornada do usuário:

1. **Tela de Aviso**: Informa ao usuário a necessidade de preenchimento do termo. Para prosseguir, o usuário precisa realizar o login.
2. **Tela de Login**: Permite que o usuário se autentique no sistema.
3. **Tela do Termo**: Apresenta o termo para que o usuário possa lê-lo e aceitá-lo.

A saída deste projeto será importada e utilizada no ServiceNow.

## Arquitetura
O projeto segue uma arquitetura modular e utiliza o framework Angular. Abaixo estão os principais componentes e serviços que compõem o projeto:

- **Componentes**:
  - Componente de Aviso
  - Componente de Login
  - Componente do Termo
- **Serviços**:
  - Serviço de Autenticação: Gerencia o login do usuário.
  - Serviço de Termos: Lida com a apresentação e aceitação do termo.

## Ajuste nos Serviços

Os serviços de Login e Termos serão ajustados para receber uma função de callback externa. Essa função será responsável por:

- **Login**: Realizar o processo de autenticação do usuário.
- **Persistência do Termo**: Salvar a aceitação do termo no sistema.

Essa abordagem permite maior flexibilidade e integração com sistemas externos, como o ServiceNow.

## Fluxo do Usuário
1. O usuário acessa o sistema e é redirecionado para a **Tela de Aviso**.
2. Na **Tela de Aviso**, o usuário é informado sobre a necessidade de aceitar o termo e é direcionado para a **Tela de Login**.
3. Na **Tela de Login**, o usuário insere suas credenciais e realiza a autenticação.
4. Após o login, o usuário é redirecionado para a **Tela do Termo**.
5. Na **Tela do Termo**, o usuário lê o termo e pode aceitá-lo para concluir o processo.

## Integração com ServiceNow
O bundle gerado será configurado para ser importado e utilizado no ambiente do ServiceNow. Ele será responsável por gerenciar a jornada do usuário descrita acima, garantindo a conformidade com os requisitos de autenticação e aceitação de termos.

## Atualização: Navegação e Integração com ServiceNow

### Navegação com URL Fixa
A navegação foi ajustada para manter a URL fixa no navegador, sem expor os paths. Isso foi implementado utilizando um único path no roteador (`''`) e gerenciando a navegação internamente com estados no `AppComponent`. Essa abordagem foi escolhida para atender a requisitos específicos de privacidade e simplicidade visual.

### Integração com ServiceNow
Para integrar o projeto ao ServiceNow, os arquivos gerados no build (como `main.js` e `polyfills.js`) podem ser carregados como **UI Scripts** no ServiceNow. Além disso, o widget do ServiceNow pode ser configurado para carregar esses scripts e renderizar o aplicativo Angular dentro de um portal.