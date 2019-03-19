# sacheonSeong 
**사천성 게임**

# sacheonseong

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

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### docker-local 
```docker
cd sacheonSeong
docker build -t sacheonseong .
docker run -it -p 8080:8080 --rm --name sacheonseong-1.0.0 sacheonseong
```

check image
```docker
docker ps
```

참고 : https://vuejs.org/v2/cookbook/dockerize-vuejs-app.html