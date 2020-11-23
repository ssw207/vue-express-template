# 퍼펫티어를 활용해 일일출석 앱 만들기
## 참고
https://sollife.tistory.com/18

## 목표 
사전에 출석하려는 사이트, 아이디, 비밀번호를 저장하고
사이트별로 퍼펫티어를 사용해 지정된 동작으로 출석체크를 한다.

## frontend
- vue
## backend
- express

## 패키지 설치
```
npm i puppeteer -g
npm i express -g
npm i express-generator -g
npm i cheerio -g
npm i @vue/cli -g
npm install
```

## backend 세팅 : express 템플릿
- express [옵션] [프로젝트명]
- express --h 익스프레스 옵션확인
- --no-view 옵션사용시 view engine(pug 등)을 사용하지 않고 html을 사용
```
# backend로 사용할 목적이기 때문에 view engine을 사용하지 않는다.
express --no-view backend

```
![backend-folder](./images/backend-folder.png)

### public
html, js, images, css등 정적 파일 저장

### routes
페이지 이동등 라우팅 파일 저장

### app.js
express 구동시 사용되는 파일

## 디버그모드로 express 실행
http://127.0.0.1:3000/ 접속
```
DEBUG=backend:* npm start
```

## frontend 세팅 : vue cli
default 선택
```
#최상위 폴더로 이동
vue create frontend
```

### 서버구동
확인 http://127.0.0.1:8080/ 
```
npm run serve
```

### Vue Router 플러그인 추가
? What do you want to generate? Initial framework
? Use history mode for router? Yes
```
vue add router
```