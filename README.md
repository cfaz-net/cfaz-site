# Site Cfaz

Site estático criado no [GitHub Pages](https://pages.github.com).

## O que devo instalar para funcionar o site localmente?

* Instalar o [Jekyll](https://jekyllrb.com/docs/installation/)
* Instalar o ruby versao 3.2.3

## Como baixar o site e fazer rodar em minha máquina?

Você deverá abrir um terminal e fazer o clone do repositório em sua máquina.

```
git clone git@github.com:cfaz-net/cfaz-site.git
```

Agora deve entrar na pasta do projeto.

```
cd cfaz-site
```

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

## Como mandar para a Web as alterações que fiz no site localmente?

Antes de mandar as alterações para o github Pages, você deve sempre buildar o código localmente.

```
bundle exec jekyll build
```


Se mais de uma pessoa estiver fazendo modificações no site, não deve se esquecer de fazer um git pull para baixar as informações que estão na Web para sua máquina local.

```
git pull
```

Quando você vai subir as alterações, deve seguir os seguintes passos.

```
git add .
git commit -m "Adicione aqui um comentário das alterações que você fez"
git push
```

Comando que sobe os códigos para produção
```
git subtree push --prefix _site origin gh-pages
```

## Template utilizado

[Bootslander](https://bootstrapmade.com/bootslander-free-bootstrap-landing-page-template/)

## Framework utilizado

[Bootstrap](https://getbootstrap.com/)
