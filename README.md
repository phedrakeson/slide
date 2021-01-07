# Slide

![GitHub repo size](https://img.shields.io/github/repo-size/phedrakeson/slide?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/phedrakeson/slide?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/phedrakeson/slide?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/phedrakeson/slide?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/phedrakeson/slide?style=for-the-badge)

![]()

> Este repositório contém um slide pré-pronto que foi construído através de uma class JS. Você pode utilizar ele em seus projetos pessoais ou se inspirar :)


## ☕ Usando no seu site

Para utilizar, basta ou clonar o repositório ou copiar cada arquivo necessário: 
slide.js, 
debounce.js (evita que o evento executa várias vezes sem necessidade, opcional),
utilizar um arquivo js do tipo module para executar,
utilizar o arquivo de estilo css,
ter uma estrutura html similar ao do slide.

Para executar, basta seguir os passos no seu arquivo js:

```javascript
import SlideNav from '<caminho até o slide.js>'
const slide = new SlideNav('.wrapper', '.slide') (vai puxar no querySelector o wrapper/ container que segura o slide, por padrão definido como wrapper no html do repo e puxa o slide em si, que por padrão é slide

slide.init() (executa o módulo)
slide.addArrows('.prev', '.next') (adiciona as funcionalidades nos dois botões de navegação caso desejado, adicione a classe escolhida ou deixe como prev e next no html)
slide.addControl('classe') (aqui é opcional, se você quiser criar uma paginação diferente apenas adicione a classe dela para que a função funcione, caso contrário ele irá criar uma paginação padrão)

```


## 📫 Contribuindo para Slide
Para contribuir com Slide, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).


Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.

[⬆ Voltar ao topo](#Slide)<br>
