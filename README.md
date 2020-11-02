## 기본 로그인 구현

```bash
#passport 로그인 구현
// Content-Type: application/json
// 테스트 계정
{ "email" : "test@test", "passwd" : "test" }
# 로그인 POST
localhost:PORT/user/signin

# 회원가입 POST
localhost:PORT/user/signup

# 로그아웃 GET
localhost:PORT/user/logout
```

## 셋업

```bash
# 서버
express

# 로그
morgan

# 크로스 도메인
cors

# 기타
express-session compression passport passport-local

# 개발용
nodemon

```

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev


```

## 참고

```bash
# Express
https://expressjs.com/ko/4x/api.html

# passport
http://www.passportjs.org/
```
