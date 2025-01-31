# Site Cfaz

Site estático criado no [GitHub Pages](https://pages.github.com).

## O que devo instalar para funcionar o site localmente?

* Instalar o [Jekyll](https://jekyllrb.com/docs/installation/)

## Como baixar o site e fazer rodar em minha máquina?

Você deverá abrir um terminal e fazer o clone do repositório em sua máquina.

Rodar o bundle install para instalarmos as gems.

```
bundle install
```

E finalmente fazer o site da sua maquina rodar localmente

```
bundle exec jekyll serve
```

Então você vai acessar o site utilizando a URL

```
http://localhost:4000
```

## Buildar projeto

Serve para gerar as traduções em inglês e espanhol

```
bundle exec jekyll build
```

## Subir pra Produção
Fazer um pull request, com isso ele vai buildar o projeto e subir para a VM da Google.

## Template utilizado

[Bootslander](https://bootstrapmade.com/bootslander-free-bootstrap-landing-page-template/)

## Framework utilizado

[Bootstrap](https://getbootstrap.com/)
