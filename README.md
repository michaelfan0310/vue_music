# vue_music

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
#   v u e _ m u s i c 
 
 

re:
echo "# vue_music" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/michaelfan0310/vue_music.git
git push -u origin main

npm run build
git checkout -b gh-pages
git add -f dist
git commit -m 'first commit'
git subtree push --prefix dist origin gh-pages


//npm install vue-router@3.5.2 --save
//vue-router一定要指定下载版本