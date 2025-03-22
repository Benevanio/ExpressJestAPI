# Documentação do Projeto ExpressJestAPI

## Índice

- [Introdução](#introdução)
- [Instalação](#instalação)
- [Uso](#uso)
- [Testes](#testes)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Introdução

O **ExpressJestAPI** é um projeto básico que demonstra a criação de uma aplicação Node.js utilizando o framework Express para configurar um servidor web simples. Além disso, o projeto incorpora testes automatizados utilizando o framework Jest e a biblioteca Supertest para validar o funcionamento das rotas da aplicação.

## Instalação

Para instalar e executar este projeto localmente, siga os passos abaixo:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Benevanio/ExpressJestAPI.git
   ```

2. **Navegue até o diretório do projeto:**

   ```bash
   cd ExpressJestAPI
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

## Uso

Após a instalação das dependências, você pode iniciar o servidor utilizando o seguinte comando:

```bash
npm start
```

Por padrão, o servidor estará em execução na porta `8081`. Você pode acessar a aplicação através do endereço `http://localhost:8081`.

## Testes

Este projeto utiliza o Jest e o Supertest para realizar testes automatizados. Para executar os testes, utilize o comando:

```bash
npm test
```

Os testes estão localizados no diretório `tests` e verificam se a aplicação está funcionando conforme o esperado.

## Estrutura do Projeto

A estrutura básica do projeto é a seguinte:

```
ExpressJestAPI/
├── tests/
│   └── geral.test.js
├── app.js
├── package.json
└── README.md
```

- `app.js`: Contém a configuração do servidor Express.
- `tests/geral.test.js`: Contém os testes automatizados para a aplicação.
- `package.json`: Arquivo de configuração do npm que lista as dependências e scripts do projeto.
- `README.md`: Documentação do projeto.

## Contribuição

Contribuições são bem-vindas! Se você deseja melhorar este projeto, siga os passos abaixo:

1. Faça um fork deste repositório.
2. Crie uma branch para a sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Faça o push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo `LICENSE.md` para obter mais informações. 