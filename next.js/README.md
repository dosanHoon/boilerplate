# finder

## 스펙

1. next.js 14
2. react 18
3. zustand 4
4. styled-components 6

## 개발 환경

1. node 18설치 yarn 설치
2. yarn install
3. yarn dev

## 배포 원격 서버 환경

1. 배포할 원격 서버에 docker 엔진 설치
2. 젠킨스 shell 설정

# 폴더 구조

```
.
├── README.md                       # README file
├── public                          # Public assets folder
│     └── img
├── src
│   ├── app                         # web route
│       ├── api                     # api route
│   └── components                  # 컴포넌트
│       ├── ui                      # 서비스 로직이 없는 재사용하는 단순 표현컴포넌트 
│       └── templates               # 서비스에 종속되는 로직이 포함된 컴포넌트
│   ├── hooks                       # 글로벌 하게 사용되는 hook
│   ├── fetchs                      # api 호출 함수들
│   ├── type                        # 글로벌로 사용되는 type
│   ├── store                       # 전역 상태 관리 zustand store
│   ├── data                        # db에서 관리되지 않지만 정규화된 데이터
│   └── lib                         # 프로젝트에 사용되어 지는 내부 라이브러리들
...
```

# 네이밍 규칙
파일 / 폴더명 : kebab-case
코드 : camelCase
