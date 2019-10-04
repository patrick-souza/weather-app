# Weather App

## Arquivos e Pastas

Optei por dividir a aplicação em modulos, onde tudo o que determinado modulo precisa para 'funcionar' está por perto ou na mesma pasta, seguindo assim um dos principios do SOLID o single responsability, que em essência diz que uma classe/função e/ou modulo deve ter somente um motivo para mudar (muitos confundem com uma unica responsabilidade, mas seria inviável um modulo com uma única responsabilidade, um modulo tem muitas responsabilidades de acordo com o que ele propõe a resolver).

## Tecnologias/Packages

Utilizei Axios para realizar requisições HTTP.Tambem utilizei styled-components para estilizar a aplicação, acho essa biblioteca bem interessante e com uma api facil de usar.
Utilizei redux para centralizar e controlar o estado da aplicação. acredito que é interessante utilizar o redux pois ele nos impõe uma arquitetura robusta e elegante. Junto com redux utilizei redux saga para controlar os efeitos colaterais. com as sagas ganhamos a logica da aplicação centralizada e facil de testar.

## Testes

Não Tive tempo para realizar os testes automatizados. Acredito que existiria uma necessidade maior caso conseguisse prosseguir com mais features. Gosto de utilizar o jest como lib de asserções, além de ser um bom test runner.

#### Para rodar o projeto:

depois de clonar o repositório

```bash
$ cd weather
$ yarn install | npm install
$ yarn start
```

caso queria alterar a chave da api ou o idioma, alterar o arquivo .env

#### Para buildar imagem docker:

```bash
$ cd weather
$ docker-compose up
```

### Melhorias

- Teste de unidade
- Melhorar responsividade
- Tratamento de erros amigaveis
- ALterar layout de acordo com retorno da api (Por exemplo deixar o fundo escuro se o tempo estiver nublado)
